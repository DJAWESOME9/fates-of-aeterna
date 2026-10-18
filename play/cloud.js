/* Optional Supabase integration. The campaign runs independently of this file. */
(()=>{
  const get=id=>document.getElementById(id),status=text=>{get('cloudStatus').textContent=text},config=window.AETERNA_SUPABASE;
  const controls=['cloudLogin','cloudSignup','cloudRecovery','cloudUpload','cloudRestore','cloudLogout','cloudUpdatePassword'];
  let client,user=null,busy=false,recovery=false;
  function render(){
    for(const id of controls)get(id).disabled=busy||!client||(['cloudUpload','cloudRestore','cloudLogout'].includes(id)?!user:['cloudLogin','cloudSignup','cloudRecovery'].includes(id)?!!user:false);
    get('cloudUpdatePassword').hidden=!recovery;
    get('cloudEmail').disabled=busy||!!user;
    get('cloudPassword').disabled=busy;
  }
  async function run(action){
    if(busy)return;busy=true;render();
    try{await action()}catch(error){status(error.message||'Connection failed. Your device save is unchanged.')}finally{busy=false;get('cloudPassword').value='';render()}
  }
  function requirePlayerIdle(){if(state.battle)throw Error('Return to the campaign before transferring a save.')}
  function validateSave(progress){
    if(!progress||![1,2,3,4,5,6,7].includes(Number(progress.version))||!progress.characters||typeof progress.characters!=='object'||Array.isArray(progress.characters))throw Error('This cloud save is not supported by this version of the game.');
  }
  async function fetchSave(){
    const {data,error}=await client.from('player_saves').select('progress,revision,updated_at').eq('user_id',user.id).maybeSingle();
    if(error)throw error;return data;
  }
  get('cloudForm').onsubmit=event=>{event.preventDefault();run(async()=>{
    const {error}=await client.auth.signInWithPassword({email:get('cloudEmail').value.trim(),password:get('cloudPassword').value});if(error)throw error;
    status('Signed in. Choose upload or restore; device progress is unchanged.');
  })};
  get('cloudSignup').onclick=()=>{if(!get('cloudForm').reportValidity())return;run(async()=>{
    const {data,error}=await client.auth.signUp({email:get('cloudEmail').value.trim(),password:get('cloudPassword').value,options:{emailRedirectTo:location.origin+location.pathname}});
    if(error)throw error;status(data.session?'Account created. Upload your device save when ready.':'Check your email to confirm your account, then sign in.');
  })};
  get('cloudRecovery').onclick=()=>{
    if(!get('cloudEmail').reportValidity()||!get('cloudEmail').value)return;
    run(async()=>{const {error}=await client.auth.resetPasswordForEmail(get('cloudEmail').value.trim(),{redirectTo:location.origin+location.pathname});if(error)throw error;status('If an account is available, a password reset email will arrive shortly.')});
  };
  get('cloudUpdatePassword').onclick=()=>{if(!get('cloudPassword').reportValidity())return;run(async()=>{
    const {error}=await client.auth.updateUser({password:get('cloudPassword').value});if(error)throw error;recovery=false;status('Password updated.');
  })};
  get('cloudLogout').onclick=()=>run(async()=>{const {error}=await client.auth.signOut();if(error)throw error;status('Signed out. Progress remains on this device.')});
  get('cloudUpload').onclick=()=>run(async()=>{
    requirePlayerIdle();const owner=user.id,existing=await fetchSave();
    if(!confirm(`Upload this device’s progress to ${user.email}? ${existing?'This replaces the account’s cloud save.':'This creates your first cloud save.'}`))return;
    if(user?.id!==owner)throw Error('Account changed. Please try again.');
    const progress=JSON.parse(JSON.stringify(state.progress));validateSave(progress);
    const row={progress,revision:(existing?.revision||0)+1,updated_at:new Date().toISOString()};
    const request=existing?client.from('player_saves').update(row).eq('user_id',owner).eq('revision',existing.revision):client.from('player_saves').insert({...row,user_id:owner});
    const {data,error}=await request.select('revision');
    if(error?.code==='23505'||(!error&&!data?.length))throw Error('Another device changed the cloud save. Review it before uploading again.');
    if(error)throw error;status('Progress uploaded. Upload again after your next play session.');
  });
  get('cloudRestore').onclick=()=>run(async()=>{
    requirePlayerIdle();const owner=user.id,existing=await fetchSave();if(!existing){status('No cloud save yet. Upload this device’s progress first.');return}
    validateSave(existing.progress);
    if(!confirm(`Restore the cloud save for ${user.email}? This replaces progress on this device. A local backup will be kept.`))return;
    if(user?.id!==owner)throw Error('Account changed. Please try again.');
    requirePlayerIdle();
    // Back up the current in-memory save before touching the legacy storage key.
    localStorage.setItem(SAVE_KEY+'-before-cloud-restore',JSON.stringify(state.progress));
    localStorage.setItem(SAVE_KEY,JSON.stringify(existing.progress));
    location.reload(); // Reuse the game's existing save migration and rendering path.
  });
  async function init(){
    render();
    if(!config?.url||!config.publishableKey){status('Guest play · cloud accounts are not configured yet. Progress still saves on this device.');return}
    if(!['https:','http:'].includes(location.protocol)){status('Guest play · open the hosted game or a localhost server to use accounts.');return}
    try{
      await new Promise((resolve,reject)=>{const script=document.createElement('script');script.src='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.95.0/dist/umd/supabase.js';script.onload=resolve;script.onerror=()=>reject(Error('Accounts could not load. Guest play and device saves remain available.'));document.head.appendChild(script)});
      client=window.supabase.createClient(config.url,config.publishableKey,{auth:{storageKey:'fates-of-aeterna-auth',persistSession:true,detectSessionInUrl:true,autoRefreshToken:true}});
      client.auth.onAuthStateChange((event,session)=>{
        user=session?.user||null;
        if(event==='PASSWORD_RECOVERY'){recovery=true;get('cloudPanel').open=true;status('Enter a new password, then choose Set new password.')}
        else {if(!user)recovery=false;status(user?`Signed in as ${user.email}. Cloud saves are manual.`:'Guest play · progress saves on this device.')}
        render();
      });
      const {data,error}=await client.auth.getSession();if(error)throw error;user=data.session?.user||null;render();
    }catch(error){client=null;status(error.message);render()}
  }
  init();
})();
