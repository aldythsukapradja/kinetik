# Kinetik — Build Standard & Deploy Guide (v1)

> **Kinetik** is a private life app for **Family + Friends circles**. Plans. People. Play.
> Single-file HTML prototype → later React/TypeScript + Firebase (see `build.md` §43, §72).

## Files

| File | Role |
|------|------|
| `Kinetik.html` | Main shell: Today, Calendar (Board+Week), Ask, Apps, Me |
| `App_PadelAmericano.html` | Padel app — rounds, scores, leaderboard, share card |
| `App_EventPoll.html` | Poll app — create, vote, results, add winner to calendar |
| `Code.gs` | Google Apps Script backend (generic CRUD over Sheets) |
| `PWA_SW.js` | Shared service worker (cache-first shell) |
| `manifest_*.webmanifest` + `icon_*.svg` | PWA manifests + icons |
| `build.md` | Full masterplan + Reviewer Revisions v1 (§72 wins on conflict) |

## Run / test locally
Open `Kinetik.html` directly, or serve the folder (`npx serve .`) for PWA/service-worker
features. Everything works offline on **local-demo** mode (localStorage, seeded with
the Sukapradja Family data from `build.md` §72.11).

**Demo logins:** Aldyth (all 3 circles) · Omar (Padel Friends only — proves circle privacy). PIN: `0000` (or leave blank).

## Deploy frontend (GitHub Pages)
1. Push this folder to a GitHub repo → Settings → Pages → deploy from branch.
2. Open `https://<user>.github.io/<repo>/Kinetik.html`. Add to Home Screen on iPhone.

## Deploy backend (Google Sheets)
1. Create a Google Sheet → Extensions → Apps Script → paste `Code.gs`.
2. Run `setupKinetik()` once (creates all 14 sheets with headers).
3. Deploy → New deployment → **Web app** → Execute as *Me*, access *Anyone*. Copy URL.
4. In Kinetik: **Me → Advanced → Backend: Google Sheets** → paste URL.
   Writes are **optimistic** (UI instant, background sync; failures toast quietly).

## Architecture rules (enforced — see build.md)
- `circleId` / `circleType` / `personId` — never `familyId` / `memberId`.
- All data via `DataAPI` adapter; apps via `AppBridge` postMessage only.
- App data lives in `AppRecords` (`circleId`, `appId`, `collection`, `payload`).
- Today = non-scrolling triage (overflow → bottom sheets). Calendar = source of truth.
- Ask = deterministic, **preview-before-apply** — never silently mutates data.
- Weekend configurable (`fri-sat` default). Logout required on Me.
- First build invites = existing accounts only; email invite links = next build.
- Every file carries its LLM header so any future LLM can continue development.

## Migration path (do not break)
`LocalDemoAdapter` → `GoogleSheetsAdapter` → `FirebaseAdapter`; HTML modules → React/TS
modules 1:1 (`KinetikState`, `EventBus`, `CalendarEngine`, `AskEngine`, `PermissionEngine`,
`AppRegistry`, `AppHost`, `ThemeManager`, `Motion`, `Scene`).
