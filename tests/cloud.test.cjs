// Optional integration checks: node --test tests/cloud.test.cjs
const {test}=require('node:test');
const assert=require('node:assert/strict');
const {readFileSync}=require('node:fs');
const vm=require('node:vm');
const source=readFileSync(require('node:path').join(__dirname,'../play/cloud.js'),'utf8');
const tick=()=>new Promise(resolve=>setImmediate(resolve));
async function setup({existing=null,conflict=false,battle=null,configured=true}={}){
  const elements=new Map(),storage=new Map(),writes=[],progress={version:7,characters:{atalanta:{level:5}},wallet:{gold:1234}};
  let reloads=0,authCallback;
  const get=id=>{if(!elements.has(id))elements.set(id,{value:'',disabled:false,reportValidity:()=>true});return elements.get(id)};
  const client={auth:{
    onAuthStateChange:callback=>{authCallback=callback},getSession:async()=>({data:{session:{user:{id:'owner',email:'owner@example.invalid'}}}}),
    signInWithPassword:async()=>({error:null}),signUp:async()=>({data:{session:null}}),signOut:async()=>({error:null}),
  },from:()=>{
    let operation='read',payload;
    const builder={select:()=>operation==='read'?builder:Promise.resolve({data:conflict?[]:[{revision:2}],error:null}),eq:()=>builder,
      maybeSingle:async()=>({data:existing,error:null}),update:row=>{operation='update';payload=row;writes.push({operation,payload});return builder},
      insert:row=>{operation='insert';payload=row;writes.push({operation,payload});return builder}};
    return builder;
  }};
  const context={document:{getElementById:get,createElement:()=>({}),head:{appendChild:script=>script.onload()}},
    window:{AETERNA_SUPABASE:configured?{url:'https://example.invalid',publishableKey:'public'}:{},supabase:{createClient:()=>client}},
    state:{progress,battle},SAVE_KEY:'save',localStorage:{setItem:(key,value)=>storage.set(key,value)},
    confirm:()=>true,location:{protocol:'https:',origin:'https://game.invalid',pathname:'/play/',reload:()=>reloads++}};
  vm.runInNewContext(source,context);await tick();
  return {get,storage,writes,progress,context,reloads:()=>reloads,auth:()=>authCallback};
}
test('signing in preserves local progress and does not write cloud data',async()=>{
  const h=await setup();await h.get('cloudForm').onsubmit({preventDefault(){}});await tick();
  assert.equal(h.progress.wallet.gold,1234);assert.equal(h.storage.size,0);assert.equal(h.writes.length,0);
});
test('first upload contains current progress and authenticated owner',async()=>{
  const h=await setup();await h.get('cloudUpload').onclick();
  assert.equal(h.writes[0].operation,'insert');assert.equal(h.writes[0].payload.user_id,'owner');assert.equal(h.writes[0].payload.progress.wallet.gold,1234);
});
test('stale update reports a conflict and leaves local save untouched',async()=>{
  const h=await setup({existing:{revision:4},conflict:true});await h.get('cloudUpload').onclick();
  assert.match(h.get('cloudStatus').textContent,/Another device/);assert.equal(h.storage.size,0);assert.equal(h.writes[0].payload.revision,5);
});
test('restore backs up current progress before replacing storage and reloading',async()=>{
  const remote={version:7,characters:{atalanta:{level:9}}};const h=await setup({existing:{revision:4,progress:remote}});
  await h.get('cloudRestore').onclick();assert.equal(JSON.parse(h.storage.get('save-before-cloud-restore')).wallet.gold,1234);
  assert.equal(JSON.parse(h.storage.get('save')).characters.atalanta.level,9);assert.equal(h.reloads(),1);
});
test('unsupported cloud saves cannot replace local progress',async()=>{
  const h=await setup({existing:{revision:1,progress:{version:99,characters:{}}}});await h.get('cloudRestore').onclick();
  assert.equal(h.storage.size,0);assert.equal(h.reloads(),0);assert.match(h.get('cloudStatus').textContent,/not supported/);
});
test('transfers are blocked during combat',async()=>{
  const h=await setup({battle:{turn:1}});await h.get('cloudUpload').onclick();assert.equal(h.writes.length,0);assert.match(h.get('cloudStatus').textContent,/Return to the campaign/);
});
test('missing configuration preserves offline guest play',async()=>{
  const h=await setup({configured:false});assert.equal(h.get('cloudLogin').disabled,true);assert.equal(h.progress.wallet.gold,1234);
});
