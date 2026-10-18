# Accounts and cloud saves

The dedicated `fates-of-aeterna` project was created in the existing organization on the Free plan, with a quoted project cost of $0/month. No paid project, branch, or email service was selected.

- Project: https://supabase.com/dashboard/project/elmeadcatduksswhwyrg
- Region: US East (Northern Virginia)
- Browser config: `play/supabase-config.js` (public URL and publishable key only)
- Integration: `play/cloud.js`, loaded after the campaign script
- Applied schema: `supabase/schema.sql`; hosted migration name `add_private_player_saves`

## What works in the code

Player Mode has an **Account & cloud save** panel with email/password registration, login, logout, password recovery, upload, and restore. Guest play and the existing local save key remain intact. The optional browser SDK is pinned to version 2.95.0 and loaded only on HTTP/HTTPS when configured; no package installation or build is needed. A direct file open continues to support guest play.

On sign-in, an existing account save is restored to the device after the player confirms; local progress is backed up in `fates-of-aeterna-player-v1-before-cloud-restore`. If the account has no save, the player must confirm creating one from the current device save; declining leaves cloud sync inactive, with manual upload available. After connecting a device save to an account, future progress changes sync automatically. Upload and restore buttons remain available for explicit transfers. Cloud writes use a revision comparison to reject a concurrent cloud update. Restore requires confirmation outside combat and reloads through the existing migration path. Signing out keeps local progress. Guest sessions work locally as before.

Only an authenticated owner can read, insert, or update their save. Guests have no table grants. Never add service-role or secret keys to browser files. Client-authored campaign progress is suitable for private saves, not trusted ranked multiplayer rewards.

## Dashboard setup before public sign-ups

1. In Authentication → URL Configuration, set the Site URL to `https://djawesome9.github.io/fates-of-aeterna/play/` and allow that exact redirect URL. For development also allow `http://127.0.0.1:8765/play/` (and `http://localhost:8765/play/` if used).
2. Email confirmations remain enabled. Configure custom SMTP for public email confirmation and password reset. Supabase's default mail service sends only to organization team addresses and has restrictive rate limits. Do not assume the default service supports public registrations, and do not disable confirmations to bypass the restriction. No SMTP credentials or paid provider were configured by this change.
3. Alternatively, a later Google OAuth integration can avoid game-managed confirmation emails; that requires Google OAuth client setup and a corresponding sign-in button. Google sign-in is not implemented in this phase.
4. GitHub Pages serves the static files from the repository. After publishing changes, verify that the public Player Mode page includes the Account & cloud save panel.
5. Test confirmation, login, upload, sign-out, login on another browser, restore, and recovery with an owner-controlled account before opening registrations publicly.

References: [SMTP restrictions](https://supabase.com/docs/guides/auth/auth-smtp), [redirect URLs](https://supabase.com/docs/guides/auth/redirect-urls).

## Verification

Run `node --test tests/cloud.test.cjs` for account/save interaction checks with a simulated client. These cover preservation on sign-in, first upload, revision conflicts, restore backups, unsupported saves, combat transfer blocking, and unconfigured guest mode. They do not substitute for an email confirmation or cross-device end-to-end test.

Live database checks used temporary users within a rolled-back transaction to verify owner access, denied cross-account reads and writes, denied guest access, and stale-revision rejection. The Supabase security advisor returned no notices after schema creation. Fresh and existing Player Mode saves and desktop/mobile account panel layouts were checked in an isolated browser.

## Configuration access

The browser approval gate denied access to the Supabase dashboard during setup. Authentication URL settings and custom email delivery were therefore not changed. Complete the dashboard steps above before testing confirmation or recovery links.

## Multiplayer phase

Online multiplayer is not implemented yet. The next step is private room creation/joining, membership authorization, team selection, and then battle synchronization. Combat currently treats the enemy as AI; networking must deliberately replace that behavior, synchronize the starting seed and commands, and handle reconnects. Begin with friendly battles and no campaign rewards. Add cleanup/expiry for rooms to stay within free storage and Realtime quotas.
