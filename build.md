````md
# KINETIK_MASTERPLAN.md

> Master build plan for **Kinetik**  
> Product direction: **Instagram-grade private life app** for **Family + Friends circles**  
> Tagline: **Plans. People. Play.**

---

# 0. Executive Summary

## Product Name
**Kinetik**

## Product Positioning
Kinetik is a private life app for your **family** and **friends** circles.  
It helps users coordinate:

- schedules
- routines
- hobbies
- kids learning
- social plans
- modular mini apps
- lightweight AI-style “Ask” assistance

This is **not** a generic productivity app and **not** a corporate planner.

It should feel like:

- **Instagram-grade polish**
- **Apple-level calm**
- **Playtomic-like activity energy**
- **Beautiful motion**
- **Private and practical**

---

# 1. Product Vision

Kinetik is a **circle-based life operating layer**.

It starts with:
- one **Family** circle
- multiple **Friends** circles

Examples:
- **Sukapradja Family**
- **Padel Friends**
- **School Parents**
- **Weekend Crew**
- **Doha Friends**

Each circle has:
- its own people
- its own calendar
- its own installed apps
- its own data
- its own permissions
- its own “Ask” context

---

# 2. Product Principles

## 2.1 Design Principles
1. **Mobile-first**
2. **Clean, calm, premium**
3. **Motion-rich but not overwhelming**
4. **Family-friendly**
5. **Social and modern**
6. **Apps are modular**
7. **Calendar is the core**
8. **Everything should feel installable and alive**
9. **Light and dark theme**
10. **Fancy visual world: terrain / galaxy / soft 3D / depth**

## 2.2 Product Behavior Principles
1. **Today should be the simplest screen**
2. **Calendar is the operating core**
3. **Ask is the smart control layer**
4. **Apps are mini products inside the ecosystem**
5. **Each app can also run standalone as a PWA**
6. **Install / uninstall removes app from a circle, not necessarily data**
7. **All data should flow through a backend adapter**
8. **Prototype backend is Google Sheets**
9. **Future backend can be Firebase without redesigning the product**
10. **All app files should be understandable by any future LLM**

---

# 3. Scope

## 3.1 In Scope
- Family circle
- Friends circles
- Circle switching
- Today tab
- Calendar tab
- Ask tab
- Apps tab
- Me tab
- App Store-style app browser
- Install / uninstall apps per circle
- Standalone PWA apps
- Google Sheets backend
- Future Firebase-ready architecture
- Fancy animated shell
- Light / dark theme
- Three.js / GSAP visual layer

## 3.2 Out of Scope for v1
- Community circle
- Work circle
- Real production auth security
- Push notifications
- Full real LLM
- Full multi-user Firebase auth
- Complex social feed
- Payments
- Native mobile app

---

# 4. Target Platforms

## 4.1 Primary
- iPhone Safari / PWA
- Mobile browsers

## 4.2 Secondary
- iPad
- Desktop browser
- 16:9 displays (1920 x 1080)

## 4.3 Required Responsiveness
The product must work well on:
- **iPhone**
- **iPad**
- **desktop / laptop**
- **large 16:9 presentation screens**

---

# 5. Core IA (Information Architecture)

Bottom navigation:

1. **Today**
2. **Calendar**
3. **Ask**
4. **Apps**
5. **Me**

Top bar:
- App logo
- Circle switcher
- avatar / user entry
- optional subtle sync status

Global structure:

```text
Kinetik
├── Circle Switcher
│   ├── Family Circle
│   └── Friends Circles
│
├── Today
├── Calendar
├── Ask
├── Apps
└── Me
````

---

# 6. Circle Model

## 6.1 Supported Circle Types

Only two:

* `family`
* `friends`

## 6.2 Examples

### Family

* Sukapradja Family

### Friends

* Padel Friends
* Doha Friends
* School Parents
* Weekend Crew

## 6.3 Rule

The entire product architecture must use **circle-based logic**, not family-only logic.

Use:

* `circleId`
* `circleType`
* `personId`

Do **not** hardcode:

* `familyId`
* `memberId`

---

# 7. Frontend Architecture

## 7.1 Frontend Prototype Stack

Prototype stack should be:

* **HTML**
* **CSS**
* **Vanilla JS**
* **GSAP**
* **Three.js**

## 7.2 Why

This allows:

* fast iteration
* visually rich prototype
* single-file product shell
* single-file app modules
* easy editing by Claude Code / Codex
* easier design experimentation before React/Firebase migration

## 7.3 Final Prototype Philosophy

The shell is a **single HTML file**.

All mini apps are also **single HTML files** in the **same folder**.

---

# 8. File Structure

## 8.1 Expected Folder Layout

```text
/Kinetik/
├── Kinetik.html
├── Code.gs
├── README_BUILD_STANDARD.md
├── PWA_SW.js
├── manifest_kinetik.webmanifest
├── manifest_padel.webmanifest
├── manifest_times.webmanifest
├── manifest_clock.webmanifest
├── App_PadelAmericano.html
├── App_TimesQuest.html
├── App_ClockTrainer.html
├── App_MiniGames.html
├── App_EventPoll.html
└── App_Grocery.html
```

## 8.2 Important Rule

No nested app folders initially.

All app files should be named:

```text
App_<AppName>.html
```

Examples:

* `App_PadelAmericano.html`
* `App_TimesQuest.html`
* `App_ClockTrainer.html`

Main shell:

* `Kinetik.html`

---

# 9. Visual Design System

## 9.1 Brand Feel

Kinetik should feel:

* energetic
* smooth
* futuristic
* premium
* social
* elegant
* not corporate
* not childish

## 9.2 Visual Reference Feel

Think:

* Instagram-grade polish
* Playtomic activity energy
* Apple clarity
* soft Chrome-style materials
* slightly futuristic cinematic landing motion

## 9.3 Theme Modes

Must support:

* Light
* Dark
* Auto

## 9.4 Palette Direction

### Dark Theme

* Deep space black / blue-black background
* soft nebula gradients
* glass cards
* electric cyan / violet accents
* subtle neon highlights

### Light Theme

* soft white / silver / cloud background
* pale gradients
* frosted glass cards
* subtle electric blue / lavender / mint highlights

## 9.5 Surface Styles

* rounded cards
* floating glass elements
* soft shadows
* glow edges
* subtle grain
* gentle depth

---

# 10. Fancy Background / Motion Layer

## 10.1 Goal

Kinetik should have a premium animated background that feels alive.

## 10.2 Recommended Direction

Use:

* **Three.js** for background scene
* **GSAP** for transitions and UI motion

## 10.3 Allowed Background Concepts

Choose one primary visual language, with fallback:

### Option A — Soft Galaxy Field

* star particles
* subtle orbit arcs
* glowing nebula gradient
* calm movement
* strongest for dark mode

### Option B — Abstract Terrain Mesh

* 3D wireframe / shaded terrain
* slow breathing / wave movement
* elegant and modern
* great for both light and dark

### Option C — Orbital Rings / Particle Field

* central slow-motion orbits
* particles reacting to tab changes
* clean and techy

## 10.4 Recommended Approach

Use a **hybrid**:

* dark mode → galaxy / particle / orbit emphasis
* light mode → soft terrain / luminous mesh emphasis

## 10.5 Technical Guidance

* Render visual scene in a fixed full-screen background canvas
* Keep UI in a separate overlay layer
* Use reduced motion fallback
* Use lightweight geometry / particle counts
* Avoid heavy GPU load on mobile

---

# 11. Animation System

## 11.1 GSAP Use Cases

Use GSAP for:

* splash reveal
* tab transitions
* card reveal
* bottom nav interactions
* orb animation in Ask
* app window open / close
* Store app detail transitions
* app icon hover / tap response
* sheet / modal opening
* minimized dock behavior

## 11.2 Animation Tone

* buttery smooth
* slightly elastic
* premium
* responsive
* never chaotic

## 11.3 Motion Durations

Suggested:

* micro-interactions: `0.18s–0.28s`
* page transitions: `0.35s–0.55s`
* app window expand: `0.4s–0.6s`
* background motion: continuous / very subtle

---

# 12. Main Shell Screens

## 12.1 Splash

Purpose:

* brand reveal
* premium first impression
* show animated logo / 3D scene
* quick loading state

## 12.2 Login

Prototype login using:

* username
* password / pin
* demo accounts

## 12.3 Circle Switcher

Allows switching between:

* Family
* Friends circles
* Create Friends Circle

## 12.4 Main Tabs

* Today
* Calendar
* Ask
* Apps
* Me

---

# 13. Tab-Level UX

---

## 13.1 TODAY

### Purpose

Quick answer:

> What matters today?

### Content

* next event
* today plan
* grouped by people or activities depending on circle
* preparation checklist
* tomorrow preview
* quick add

### Family Today

Shows:

* Baginda
* Keyla
* Kinara
* Aldyth
* preparation items

### Friends Today

Shows:

* next friend plan
* padel session
* dinner
* group event
* quick app shortcuts

---

## 13.2 CALENDAR

### Purpose

This is the product core.

### Required Modes

* Day
* Week
* Month
* Board

### Board Logic

#### Family Board

Rows = people
Columns = days

#### Friends Board

Rows = activities / groups / events
Columns = days

### Calendar Must Support

* routines
* one-off events
* exceptions / cancellations
* filters
* add/edit/delete
* event detail
* responsibility
* preparation
* conflict hints

---

## 13.3 ASK

### Purpose

Consumer-friendly assistant layer.

Do **not** label it “Agent.”

### Experience

* beautiful central orb / visual input
* chat input
* quick prompts
* contextual actions
* visual artifacts
* opens calendar
* opens apps
* prepares event previews
* helps install apps
* summarizes schedules

### Example Prompts

* What do we have tomorrow?
* What does Baginda have this week?
* Open Padel
* Create padel americano for 8 players
* Show Keyla’s math progress
* Add Kinara padel every Tuesday at 7

---

## 13.4 APPS

### Purpose

Private app launcher + app store

### Main Experience

The Apps tab has:

* My Apps home
* Kinetik Store
* app detail
* app window
* minimized dock

### My Apps

* iPhone-style 4 × 6 icon grid
* installed apps only
* scrollable if more
* simple and clean

### Kinetik Store

* App Store-like
* search
* suggested
* browse
* app detail pages
* install / uninstall

---

## 13.5 ME

### Purpose

Personal + circle settings + people

### Content

* my profile
* my circles
* people & family tree
* friends circles
* backend status
* theme
* account
* backups
* app permissions

---

# 14. App Window System

## 14.1 Behavior

Apps open inside a polished app canvas window.

Window controls should mimic macOS traffic lights:

* 🔴 Close
* 🟡 Minimize
* 🟢 Maximize

## 14.2 Rules

* Close returns to Apps home
* Minimize sends app to dock
* Maximize hides bottom nav and expands app experience

## 14.3 App Window Use Cases

* open Padel
* open Times Quest
* open Clock Trainer
* future apps

---

# 15. App Ecosystem

## 15.1 Default Installed Apps

### Family Circle

Installed:

* Kinetik Store
* Americano Padel
* Times Quest

Available:

* Clock Trainer
* Mini Games
* Grocery
* Event Poll

### Friends Circle

Installed:

* Kinetik Store
* Americano Padel

Available:

* Event Poll
* Group Trip
* Mini Games

## 15.2 First App Set

### App 1: Americano Padel

File:

* `App_PadelAmericano.html`

Features:

* add players
* choose player count
* choose number of courts
* generate americano rounds
* enter scores
* leaderboard
* save tournament history

### App 2: Times Quest

File:

* `App_TimesQuest.html`

Features:

* choose child
* choose multiplication table
* quiz mode
* stars
* streak
* progress

### App 3: Clock Trainer

File:

* `App_ClockTrainer.html`

Features:

* analog clock practice
* choose correct time
* set time
* progress

### App 4: Event Poll

File:

* `App_EventPoll.html`

Features:

* create poll
* vote options
* best date/time

---

# 16. PWA Strategy

## 16.1 Goal

Every app should be:

* usable inside Kinetik shell
* also installable to Home Screen as its own PWA

## 16.2 Required PWAs

* `Kinetik.html`
* `App_PadelAmericano.html`
* `App_TimesQuest.html`
* `App_ClockTrainer.html`

## 16.3 PWA Shared Behavior

* installable
* standalone support
* service worker
* manifest
* theme color
* iOS mobile web app tags

## 16.4 Standalone App Flow

When a modular app opens without a parent shell:

* detect standalone mode
* show lightweight login / demo mode
* choose circle
* connect to same database
* continue app usage

---

# 17. Backend Architecture

## 17.1 Prototype Backend

Use:

* **Google Sheets**
* **Google Apps Script**
* JSON responses
* generic CRUD API

## 17.2 Future Backend

Must be replaceable by:

* Firebase Auth
* Firestore
* Firebase Hosting
* Cloud Functions

## 17.3 Critical Rule

All frontend code should use a **DataAPI adapter**.

Frontend should never depend directly on Google Sheets schema logic everywhere.

---

# 18. Backend Flow

```text
Frontend (Kinetik or app)
   ↓
DataAPI Adapter
   ↓
Google Apps Script Web App
   ↓
Google Sheets
```

Later:

```text
Frontend
   ↓
DataAPI Adapter
   ↓
Firebase / Firestore
```

---

# 19. Data Model

## 19.1 Core Concepts

Use:

* `user`
* `person`
* `circle`
* `circleMember`
* `relationship`
* `calendarRoutine`
* `calendarEvent`
* `calendarException`
* `appCatalog`
* `circleApp`
* `appRecord`
* `agentLog`

---

# 20. Google Sheets Schema

Create one Google Spreadsheet with the following sheets:

1. `Users`
2. `People`
3. `Circles`
4. `CircleMembers`
5. `Relationships`
6. `Calendar_Routines`
7. `Calendar_Events`
8. `Calendar_Exceptions`
9. `AppCatalog`
10. `CircleApps`
11. `AppRecords`
12. `AgentLogs`
13. `Settings`
14. `AuditLog`

---

## 20.1 Users

Columns:

```text
id
username
displayName
email
passwordDemo
avatar
defaultPersonId
createdAt
updatedAt
active
```

---

## 20.2 People

Columns:

```text
id
displayName
avatar
color
birthYear
notes
createdByUserId
createdAt
updatedAt
active
```

---

## 20.3 Circles

Columns:

```text
id
name
type
ownerUserId
icon
color
description
createdAt
updatedAt
active
```

Allowed types:

* `family`
* `friends`

---

## 20.4 CircleMembers

Columns:

```text
id
circleId
personId
userId
role
permission
joinedAt
active
```

Roles:

* `circle_head`
* `adult`
* `child`
* `member`
* `viewer`

Permissions:

* `full_control`
* `edit_circle`
* `edit_calendar`
* `edit_apps`
* `view_only`
* `child_learning`

---

## 20.5 Relationships

Columns:

```text
id
circleId
fromPersonId
toPersonId
relationshipType
reverseRelationshipType
notes
createdAt
active
```

Family examples:

* father / son
* mother / daughter
* spouse / spouse
* sibling / sibling

Friends examples:

* friend
* padel_friend
* school_parent
* coach

---

## 20.6 Calendar_Routines

Columns:

```text
id
circleId
title
participantPersonIdsJson
responsiblePersonId
dayOfWeek
startTime
endTime
category
location
teacherCoach
preparationJson
repeatRule
notes
createdAt
updatedAt
active
```

---

## 20.7 Calendar_Events

Columns:

```text
id
circleId
title
date
startTime
endTime
participantPersonIdsJson
responsiblePersonId
category
location
preparationJson
notes
createdAt
updatedAt
active
```

---

## 20.8 Calendar_Exceptions

Columns:

```text
id
circleId
routineId
date
action
newStartTime
newEndTime
reason
createdAt
updatedAt
```

Actions:

* `cancelled`
* `modified`
* `rescheduled`

---

## 20.9 AppCatalog

Columns:

```text
id
name
shortName
file
category
status
version
tagline
description
iconType
gradient
defaultInstalledForCircleTypesJson
allowedCircleTypesJson
pwaManifest
createdAt
updatedAt
active
```

---

## 20.10 CircleApps

Columns:

```text
id
circleId
appId
installed
order
pinned
allowedPersonIdsJson
settingsJson
installedAt
updatedAt
```

---

## 20.11 AppRecords

Generic app data store.

Columns:

```text
id
circleId
appId
collection
ownerPersonId
payloadJson
createdAt
updatedAt
deleted
version
```

Examples:

* padel-americano → tournaments
* padel-americano → matches
* times-quest → progress
* clock-trainer → sessions
* event-poll → polls

---

## 20.12 AgentLogs

Columns:

```text
id
circleId
userId
personId
prompt
intent
responseType
artifactJson
actionJson
createdAt
```

---

## 20.13 Settings

Columns:

```text
id
scope
scopeId
key
valueJson
updatedAt
```

Scopes:

* `global`
* `user`
* `circle`
* `app`

---

# 21. DataAPI Contract

All frontend code should call an adapter like:

```js
DataAPI.list(collection, filters)
DataAPI.get(collection, id)
DataAPI.create(collection, payload)
DataAPI.update(collection, id, payload)
DataAPI.remove(collection, id)
DataAPI.queryAppRecords(appId, collection, circleId, filters)
```

## 21.1 Adapter Implementations

Prototype implementations:

* `LocalDemoAdapter`
* `GoogleSheetsAdapter`

Future:

* `FirebaseAdapter`

---

# 22. App Bridge Contract

When an app is opened inside Kinetik shell, the shell sends:

```js
{
  type: "INIT_APP",
  payload: {
    circleId,
    circleType,
    personId,
    role,
    theme,
    appId,
    backendMode,
    apiUrl
  }
}
```

Apps can send messages like:

```js
{ type: "DATA_LIST", appId, collection, filters }
{ type: "DATA_CREATE", appId, collection, payload }
{ type: "DATA_UPDATE", appId, collection, id, payload }
{ type: "DATA_REMOVE", appId, collection, id }
{ type: "NAVIGATE", target, params }
{ type: "OPEN_APP", appId, payload }
{ type: "SHOW_TOAST", message }
```

---

# 23. LLM Editing Standard

Every HTML file must include a top-level comment that explains:

* product context
* app role
* backend rules
* circle-based logic
* PWA behavior
* app bridge contract
* data contract
* theme behavior
* design standards

This is required so Claude Code / Codex can continue development reliably.

---

# 24. Required LLM Header for Main Shell

At the top of `Kinetik.html`, include:

```html
<!--
KINETIK MAIN SHELL STANDARD v0.1

PRODUCT:
Kinetik is a private life app for Family and Friends circles.

MAIN TABS:
1. Today
2. Calendar
3. Ask
4. Apps
5. Me

ARCHITECTURE:
- Main shell is a single HTML file.
- Modular apps are separate single HTML files in the same folder.
- Apps can run inside an iframe app window or standalone as PWAs.
- Calendar is the core.
- Ask is the smart interaction layer.
- Apps tab is an App Store-like launcher.
- Backend is Google Sheets via Apps Script first.
- Future backend is Firebase.
- Use DataAPI adapter.
- Use circleId, not familyId.
- Use personId, not memberId.

DESIGN:
- Premium, futuristic, light and dark theme.
- Three.js background layer.
- GSAP motion.
- Mobile-first responsive.
- iPhone-style app grid.
- macOS-style traffic light app window controls.

DO NOT:
- Hardcode family-only architecture.
- Use production password logic.
- Couple the UI directly to Google Sheets everywhere.
-->
```

---

# 25. Required LLM Header for Every App

At the top of every `App_*.html`, include:

```html
<!--
KINETIK APP STANDARD v0.1

You are editing a modular single-file app inside the Kinetik ecosystem.

PRODUCT:
Kinetik is a private life app for Family and Friends circles.

THIS FILE:
Standalone app file: App_<AppName>.html

RULES:
1. Keep this app as a single HTML file unless explicitly requested otherwise.
2. The app must work in:
   A. Embedded mode inside Kinetik.html
   B. Standalone PWA mode
3. Use circle-based logic, not family-only logic.
4. Use circleId, circleType, personId.
5. Do not directly depend on Firebase.
6. Prototype backend is Google Sheets via Apps Script.
7. Use DataAPI / app bridge for persistent operations.
8. Store app-specific data in AppRecords using:
   circleId, appId, collection, payloadJson.
9. Support light/dark theme with CSS variables.
10. Maintain premium, clean, mobile-first UI.
11. Preserve PWA meta tags and service worker registration.
12. If editing data structure, document it clearly in comments.
13. If app runs standalone, provide minimal login/demo and circle selection.
14. Update metadata object if app capabilities change.

APP BRIDGE:
The parent shell may send:
{
  type: "INIT_APP",
  payload: {
    circleId,
    circleType,
    personId,
    role,
    theme,
    appId,
    backendMode,
    apiUrl
  }
}

This app may request:
- list/create/update/remove records
- open another app
- navigate shell
- show confirmation / messages
-->
```

---

# 26. Required LLM Header for Code.gs

At the top of `Code.gs`, include:

```js
/*
KINETIK GOOGLE SHEETS BACKEND v0.1

PRODUCT:
Kinetik is a private life app for:
- Family circles
- Friends circles

FRONTEND:
- Kinetik.html main shell
- App_<AppName>.html modular apps
- Apps can run embedded or as standalone PWAs

BACKEND:
- Google Sheets first
- Apps Script web app API
- Generic CRUD operations
- Future backend replacement: Firebase

CORE TABLES:
Users
People
Circles
CircleMembers
Relationships
Calendar_Routines
Calendar_Events
Calendar_Exceptions
AppCatalog
CircleApps
AppRecords
AgentLogs
Settings
AuditLog

RULES:
1. Use generic CRUD endpoints whenever possible.
2. Use circleId, not familyId.
3. Use personId, not memberId.
4. Store app-specific data in AppRecords.
5. Do not create a new sheet for every app unless absolutely necessary.
6. Do not store production-grade real passwords.
7. Maintain consistent JSON response formats.
8. Keep backend replaceable by Firebase later.
*/
```

---

# 27. Deliverables

## 27.1 Required Deliverables

1. `Kinetik.html`
2. `Code.gs`
3. Google Sheet template with required tabs
4. `PWA_SW.js`
5. `manifest_kinetik.webmanifest`
6. `manifest_padel.webmanifest`
7. `manifest_times.webmanifest`
8. `manifest_clock.webmanifest`
9. `App_PadelAmericano.html`
10. `App_TimesQuest.html`
11. `App_ClockTrainer.html`
12. `README_BUILD_STANDARD.md`

## 27.2 Optional Later Deliverables

13. `App_EventPoll.html`
14. `App_MiniGames.html`
15. `App_Grocery.html`

---

# 28. Build Roadmap

## Phase 0 — Foundation Contract

### Goal

Set architecture so future coding is clean.

### Deliver

* Google Sheet schema
* Apps Script CRUD backend
* DataAPI abstraction
* Build standard comments
* file naming conventions
* PWA conventions

### To Do

* [ ] Create Google Sheet tabs
* [ ] Write column headers
* [ ] Create `Code.gs`
* [ ] Create consistent JSON response format
* [ ] Write `README_BUILD_STANDARD.md`

---

## Phase 1 — Shell / Brand / Motion

### Goal

Create beautiful Kinetik shell.

### Deliver

* `Kinetik.html`
* splash screen
* login
* global layout
* circle switcher
* background scene
* light/dark theme
* bottom nav
* desktop adaptation

### To Do

* [ ] Build HTML shell structure
* [ ] Add Three.js full-screen background
* [ ] Build light and dark color tokens
* [ ] Add GSAP entry animations
* [ ] Build splash screen
* [ ] Build login screen
* [ ] Build circle switcher
* [ ] Build bottom nav
* [ ] Build responsive layouts

---

## Phase 2 — Today Tab

### Goal

Create clean operational landing screen.

### Deliver

* Today tab for Family
* Today tab for Friends
* grouped schedule cards
* preparation checklist
* tomorrow preview

### To Do

* [ ] Create today summary component
* [ ] Create next event card
* [ ] Create grouped plan cards
* [ ] Create prep checklist
* [ ] Connect with sample data
* [ ] Add empty state

---

## Phase 3 — Calendar Core

### Goal

Build the operational core.

### Deliver

* Day view
* Week view
* Month view
* Board view
* filters
* add event
* edit event
* event detail
* routines + one-offs + exceptions

### To Do

* [ ] Build calendar mode switcher
* [ ] Build day timeline
* [ ] Build week cards
* [ ] Build month grid
* [ ] Build family board
* [ ] Build friends board
* [ ] Build filter chips
* [ ] Build add/edit modal
* [ ] Build conflict warning
* [ ] Save and load data through DataAPI

---

## Phase 4 — Ask Tab

### Goal

Create smart, visual, deterministic assistant.

### Deliver

* Ask UI
* glowing orb
* quick prompts
* message history
* artifact cards
* action buttons
* preview before apply

### To Do

* [ ] Build Ask layout
* [ ] Build orb animation
* [ ] Build quick action chips
* [ ] Create intent parser (deterministic)
* [ ] Create schedule summary response
* [ ] Create event preview response
* [ ] Create open-app response
* [ ] Create install-app response
* [ ] Create navigation actions

---

## Phase 5 — Apps System

### Goal

Create modular app ecosystem.

### Deliver

* Apps Home grid
* Kinetik Store
* app detail pages
* install/uninstall
* app window
* dock
* traffic light controls

### To Do

* [ ] Create installed app grid
* [ ] Create Store home
* [ ] Create Store search
* [ ] Create category browse
* [ ] Create app detail template
* [ ] Create install confirmation
* [ ] Create uninstall confirmation
* [ ] Create app window shell
* [ ] Create minimize dock
* [ ] Persist CircleApps state

---

## Phase 6 — Me Tab

### Goal

Create identity and settings layer.

### Deliver

* profile
* circles
* people
* family tree
* friends circle people map
* backend status
* theme settings
* backups

### To Do

* [ ] Create profile home
* [ ] Create people list
* [ ] Create family tree view
* [ ] Create friends map view
* [ ] Create circle settings
* [ ] Create backend status view
* [ ] Create theme settings
* [ ] Create backup/export controls

---

## Phase 7 — First Apps

### Goal

Make product actually useful.

### Deliver

* `App_PadelAmericano.html`
* `App_TimesQuest.html`
* `App_ClockTrainer.html`

### To Do — Padel

* [ ] app home
* [ ] add players
* [ ] choose courts
* [ ] generate rounds
* [ ] enter scores
* [ ] compute leaderboard
* [ ] save tournaments
* [ ] add standalone mode
* [ ] add PWA support

### To Do — Times Quest

* [ ] app home
* [ ] choose child
* [ ] choose table
* [ ] generate questions
* [ ] track score
* [ ] stars / streak / progress
* [ ] save progress
* [ ] add standalone mode
* [ ] add PWA support

### To Do — Clock Trainer

* [ ] placeholder detail in Store
* [ ] standalone app shell
* [ ] analog clock question screen
* [ ] progress tracking
* [ ] PWA support

---

## Phase 8 — Google Sheets Integration

### Goal

Move from demo data to real prototype backend.

### Deliver

* DataAPI Google Sheets adapter
* all core screens loading real data
* app records stored to sheet

### To Do

* [ ] Build Apps Script endpoints
* [ ] Build DataAPI methods
* [ ] Connect shell data
* [ ] Connect Padel
* [ ] Connect Times Quest
* [ ] Add error handling
* [ ] Add sync status

---

## Phase 9 — PWA Enablement

### Goal

Make shell and apps installable.

### Deliver

* service worker
* manifests
* standalone behavior
* home screen install support

### To Do

* [ ] Create `PWA_SW.js`
* [ ] Create `manifest_kinetik.webmanifest`
* [ ] Create app manifests
* [ ] Register service worker
* [ ] Add iOS app tags
* [ ] Detect standalone mode
* [ ] Add standalone login / circle picker

---

## Phase 10 — Polish

### Goal

Make it feel premium.

### Deliver

* smoother motion
* refined visuals
* performance tuning
* polished interactions

### To Do

* [ ] Reduce animation jank
* [ ] tune Three.js scene
* [ ] improve loading states
* [ ] add success toasts
* [ ] refine transitions
* [ ] optimize mobile performance
* [ ] test light/dark readability
* [ ] clean spacing and typography

---

# 29. QA Checklist

## Product QA

* [ ] family and friends circles work
* [ ] circle switcher works
* [ ] tabs work
* [ ] calendar modes work
* [ ] Ask creates previews, not silent edits
* [ ] app install/uninstall works
* [ ] app data stays linked to circle
* [ ] PWA standalone mode works

## UX QA

* [ ] looks premium on iPhone
* [ ] usable on iPad
* [ ] presentable on desktop 16:9
* [ ] dark mode feels polished
* [ ] light mode feels polished
* [ ] animations are smooth
* [ ] app grid feels iPhone-like

## Technical QA

* [ ] Google Sheets CRUD works
* [ ] DataAPI abstraction is respected
* [ ] app bridge messages work
* [ ] app records save correctly
* [ ] no hardcoded family-only schema
* [ ] all app files include LLM header comments

---

# 30. Migration Strategy to React + Firebase (Later)

## Keep Stable

* information architecture
* circle data model
* app ecosystem concept
* DataAPI contract
* app bridge contract
* app file naming concept
* Store concept
* Ask concept

## Replace Later

* vanilla JS rendering → React
* Google Sheets backend → Firebase
* demo auth → Firebase Auth
* manual state → modern store (optional)

## React/Firebase Future Stack

* React
* TypeScript
* Vite or Next.js
* Firebase Hosting
* Firebase Auth
* Firestore
* Cloud Functions
* Framer Motion or GSAP
* Three.js via react-three-fiber (optional later)

---

# 31. Final Build Order Recommendation

If coding from zero, use this exact order:

1. Build `README_BUILD_STANDARD.md`
2. Build `Code.gs`
3. Create Google Sheets template
4. Build `Kinetik.html` skeleton
5. Add theme system
6. Add Three.js + GSAP shell background
7. Build splash + login
8. Build circle switcher
9. Build Today tab
10. Build Calendar tab
11. Build Ask tab
12. Build Apps tab + Store
13. Build Me tab
14. Build app window system
15. Build `App_PadelAmericano.html`
16. Build `App_TimesQuest.html`
17. Build `App_ClockTrainer.html`
18. Connect all to DataAPI
19. Add PWA files
20. Polish and optimize

---

# 32. Final Product Sentence

**Kinetik** is a premium private life app for your **family** and **friends** circles — bringing together schedules, mini apps, games, and everyday coordination in one beautiful, installable ecosystem.

## Final Tagline

**Plans. People. Play.**

---

# 33. Professional Product Design Standard

This section upgrades the visual, interaction, and UX expectation for the entire Kinetik build.

Kinetik must not look like a rough prototype.
Kinetik must look like a premium consumer app that could sit beside:

* Instagram
* ChatGPT
* Claude
* Apple Fitness / Apple Calendar
* Playtomic
* Arc / Raycast-style modern utility apps
* high-end private family apps

The interface should feel:

* pixel-perfect
* calm
* glassy
* tactile
* high-trust
* emotionally warm
* fast
* expensive
* private
* modern
* social
* not corporate
* not childish
* not dashboard-heavy
* not generic SaaS

The design goal:

> A private life app with Instagram-grade visual polish, Apple-like calm, Playtomic-like energy, and Claude / ChatGPT-level conversational interface quality.

---

# 34. Pixel-Perfect UI Standard

## 34.1 General Rule

Every page must feel deliberately designed.

No placeholder-looking UI.
No default browser styling.
No random spacing.
No rough cards.
No mismatched border radii.
No inconsistent typography.
No cluttered dashboards.

Every screen must be production-presentable.

## 34.2 Spacing System

Use a consistent spacing scale:

```text
4px
8px
12px
16px
20px
24px
32px
40px
48px
64px
```

Recommended rules:

* tight controls: `8px-12px`
* card internal padding: `16px-24px`
* page horizontal padding mobile: `18px-22px`
* page horizontal padding desktop: `32px-56px`
* section gap mobile: `20px-32px`
* section gap desktop: `32px-56px`
* bottom nav safe area support required

## 34.3 Border Radius

Use premium modern radii:

```text
small controls: 10px-14px
cards: 18px-28px
sheets/modals: 28px-36px
large glass panels: 30px-44px
app icons: 22%-28% radius, iOS-like
```

Do not mix random radii.
Use a small token system:

```css
--radius-xs: 10px;
--radius-sm: 14px;
--radius-md: 20px;
--radius-lg: 28px;
--radius-xl: 36px;
--radius-icon: 26%;
```

## 34.4 Typography

Typography should feel like Apple / Instagram:

* clean system font stack
* excellent hierarchy
* no cramped text
* no oversized headings inside small cards
* no tiny unreadable labels
* no negative letter spacing

Use:

```css
font-family:
  Inter,
  ui-sans-serif,
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "SF Pro Display",
  "SF Pro Text",
  "Segoe UI",
  sans-serif;
```

Suggested type scale:

```text
caption: 11px-12px
label: 12px-13px
body small: 13px-14px
body: 15px-16px
card title: 17px-20px
section title: 22px-28px
screen title: 30px-42px
hero/splash title: 44px-64px, responsive and controlled
```

Line-height:

```text
labels: 1.1-1.2
body: 1.45-1.6
titles: 1.05-1.2
```

## 34.5 Iconography

Icons should feel like professional app UI:

* thin-to-medium line icons
* consistent stroke width
* rounded line caps
* avoid emoji as primary UI icons except playful app identities
* app icons can be colorful and custom
* controls should use recognizable icons

Recommended icon direction:

* lucide-style outline icons
* SF Symbols-like simplicity
* clear active/inactive nav states

## 34.6 Interaction States

All interactive elements need states:

* default
* hover on desktop
* active/tap
* focus-visible
* disabled
* loading
* selected

Touch feedback must feel immediate.

Recommended:

```text
tap scale: 0.96-0.98
hover lift: 2px-4px
active shadow compression
selected glow/ring
```

---

# 35. Glassmorphism Standard

Kinetik should use premium glassmorphism, not cheap transparent boxes.

## 35.1 Glass Surface Requirements

Glass surfaces must include:

* translucent fill
* blur
* subtle border
* layered shadow
* highlight edge
* background depth behind it

Example token direction:

```css
--glass-bg-dark: rgba(12, 18, 34, 0.58);
--glass-bg-light: rgba(255, 255, 255, 0.66);
--glass-border-dark: rgba(255, 255, 255, 0.14);
--glass-border-light: rgba(255, 255, 255, 0.72);
--glass-shadow-dark: 0 24px 80px rgba(0, 0, 0, 0.38);
--glass-shadow-light: 0 24px 80px rgba(53, 75, 120, 0.16);
--glass-blur: blur(24px) saturate(1.35);
```

## 35.2 Glass Rules

Do:

* use glass for key surfaces
* use stronger blur for floating panels
* use lighter glass for cards
* layer glass over animated depth
* keep text contrast strong

Do not:

* make every element transparent
* place low-contrast text on busy backgrounds
* overuse heavy borders
* create muddy gray panels
* use glass without depth behind it

## 35.3 Material Layers

Use three levels:

```text
Layer 1: background world
Layer 2: main content glass
Layer 3: floating controls / sheets / modals
```

Example:

* background: Three.js scene
* main cards: soft glass
* modal sheets: stronger blur and stronger shadow
* nav bar: iOS-style frosted dock

---

# 36. Instagram-Grade App Design Standard

Kinetik should borrow the quality bar of Instagram without copying its layout directly.

## 36.1 What Instagram-Grade Means

* strong visual rhythm
* premium avatar and circle presentation
* smooth swipe/tap interactions
* polished empty states
* delightful microinteractions
* clear active states
* content feels alive
* social context is always visible

## 36.2 Social UI Details

People, circles, and activities should be visually rich:

* avatars
* color rings
* soft gradients
* compact status labels
* activity chips
* stacked participant faces
* circle-specific visual identity

## 36.3 App Icons

Kinetik app icons must feel like iOS app icons:

* rounded-square
* gradient or 3D-style material
* clear central symbol
* consistent size
* label below
* active tap animation
* optional installed badge

My Apps should feel like a private iPhone home screen.

---

# 37. Apple-Like UX Standard

Kinetik should feel calm and obvious.

## 37.1 Apple-Like Principles

* reduce visible complexity
* reveal depth progressively
* use sheets instead of crowded pages
* use clear gestures and controls
* keep primary actions obvious
* keep destructive actions protected
* use natural motion
* respect safe areas
* make empty states beautiful

## 37.2 Navigation

Use:

* bottom nav for primary sections
* top bar for circle and identity
* sheets for detail/edit flows
* segmented controls for mode switching
* dock for minimized apps

Avoid:

* deep nested menus in v1
* corporate sidebar-first layout on mobile
* too many visible buttons

## 37.3 Sheets and Modals

Detail, edit, and confirmation flows should appear as:

* bottom sheets on mobile
* centered glass panels on desktop
* large rounded corners
* clear drag handle on mobile
* dimmed/depth background
* escape/click-away close where safe

---

# 38. Chatbot / Ask UX Standard

The Ask tab must feel closer to Claude / ChatGPT quality than a generic chatbot widget.

## 38.1 Positioning

Ask is the smart control layer for the user's private circles.

Do not call it:

* Agent
* Bot
* AI Robot
* Assistant Agent

Use:

* Ask
* Kinetik Ask
* Ask Kinetik

## 38.2 Chat Interface Quality Bar

The Ask UI should feel like:

* Claude's calm spacious conversation design
* ChatGPT's clean input and response quality
* Apple-like privacy and polish
* Kinetik's own visual identity through orb and glass

## 38.3 Ask Layout

Recommended layout:

```text
Top:
- current circle context
- subtle Ask title
- optional history button

Center:
- living orb / visual input object
- contextual prompt suggestions
- conversation stream

Bottom:
- premium composer
- attachment/action button
- send button
- voice/future input placeholder
```

## 38.4 Composer

The composer must feel premium.

Requirements:

* sticky bottom placement
* safe-area aware
* glass background
* rounded pill or rounded rectangle
* multiline input
* clear send button
* disabled state when empty
* loading/thinking state
* keyboard-friendly mobile behavior

Recommended composer behavior:

```text
empty input: placeholder + disabled send
typing: send button activates
submit: input clears or moves to conversation
thinking: animated subtle status
response: streamed-feeling reveal where possible
```

## 38.5 Message Bubbles

User messages:

* aligned right
* compact
* strong but tasteful accent
* not overly bright

Ask responses:

* aligned left or full-width response cards
* readable body text
* structured summaries
* action cards
* calendar previews
* app launch buttons

Avoid cartoon bubbles.
Use professional conversational surfaces.

## 38.6 Ask Response Types

Ask should support:

* text summary
* schedule summary
* event preview
* calendar action preview
* app open action
* app install action
* learning progress summary
* padel tournament setup preview
* conflict warning
* confirmation request

## 38.7 Preview Before Apply

Ask must not silently mutate important data.

For actions like adding events:

```text
User: Add Kinara padel every Tuesday at 7
Ask:
- Shows proposed recurring routine
- Shows participant
- Shows time
- Shows circle
- Shows preparation if relevant
- Buttons: Add to Calendar / Edit / Cancel
```

## 38.8 Quick Prompts

Quick prompts should be contextual to the active circle.

Family examples:

* What do we have tomorrow?
* Show Baginda this week
* Add Kinara padel Tuesday
* What needs preparation?
* Show Keyla's learning progress

Friends examples:

* Open Padel
* Create americano for 8 players
* Find best dinner night
* Start an event poll
* Who is free this weekend?

## 38.9 Ask Visual Orb

The orb should be:

* beautiful
* calm
* responsive
* not distracting
* theme-aware
* connected to thinking/listening states

Orb states:

```text
idle: slow breathing glow
focused: brighter ring
thinking: orbiting particles
success: soft pulse
error: subtle amber/red ripple
```

---

# 39. Page-by-Page Premium UI/UX Standard

## 39.1 Splash

Must feel cinematic and premium.

Include:

* full-screen animated background
* Kinetik logo / wordmark
* tagline: Plans. People. Play.
* subtle loading or progress indication
* smooth transition into login

Avoid:

* plain white loading screen
* generic spinner
* cluttered text

## 39.2 Login

Must feel like a private app login.

Include:

* glass login panel
* demo account selector or simple username/PIN
* Face ID-style visual hint optional
* clear privacy feeling
* smooth entry animation

## 39.3 Circle Switcher

Must feel social and alive.

Include:

* large active circle card
* circle avatars/rings
* family/friends type badge
* recently active circles
* create friends circle button
* smooth switch animation

## 39.4 Today

Must be the calmest screen.

Include:

* greeting and active circle context
* next event hero card
* today timeline
* people/activity grouping
* preparation checklist
* tomorrow preview
* quick add button

Premium behavior:

* next event card should feel important
* checklist should feel satisfying
* empty state should still look beautiful

## 39.5 Calendar

Must feel powerful but not heavy.

Include:

* mode segmented control
* day/week/month/board
* color-coded participants or activities
* event detail sheet
* add/edit event sheet
* conflict hint card
* filter chips

Premium behavior:

* board mode should be highly scannable
* month mode should not become cluttered
* event colors should remain tasteful

## 39.6 Ask

Must feel like a first-class AI/chat product.

Include:

* central orb
* conversation stream
* quick prompts
* premium composer
* response cards
* action previews

Quality bar:

* closer to Claude/ChatGPT than a website chatbot
* not a tiny support widget
* must feel native to Kinetik

## 39.7 Apps

Must feel like a private App Store plus iPhone home screen.

Include:

* My Apps grid
* Kinetik Store
* app detail pages
* install/uninstall
* app window
* minimized dock
* macOS traffic light window controls

Premium behavior:

* app icons should feel collectable
* store pages should feel editorial and polished
* app windows should animate naturally

## 39.8 Me

Must feel personal, not administrative.

Include:

* profile card
* circles
* people
* family tree / friends map
* theme controls
* backend status
* app permissions
* backup/export

Premium behavior:

* settings should be grouped and calm
* people management should feel human
* backend status should be visible but not scary

---

# 40. Animation and Motion Standard

GSAP is required in the prototype.

## 40.1 GSAP Must Be Used For

* splash reveal
* login transition
* circle switching
* tab transitions
* card entrance
* bottom nav interaction
* Ask orb state changes
* app window open/close
* app minimize/maximize
* store detail transitions
* sheets/modals
* toast notifications

## 40.2 Motion Tone

Motion should be:

* smooth
* premium
* calm
* slightly elastic only where appropriate
* never chaotic
* never slow enough to annoy

Recommended durations:

```text
tap feedback: 0.10s-0.18s
microinteraction: 0.18s-0.28s
card reveal: 0.28s-0.42s
tab transition: 0.32s-0.48s
sheet open: 0.36s-0.52s
app window open: 0.42s-0.62s
splash reveal: 0.8s-1.4s
```

## 40.3 Reduced Motion

Respect reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}
```

The app should remain beautiful with reduced motion enabled.

---

# 41. Three.js Visual Layer Standard

Three.js is required in the prototype.

## 41.1 Required Use

Use Three.js for the premium full-screen background world.

It should be:

* fixed full-screen
* behind all UI
* responsive
* mobile-safe
* theme-aware
* subtle
* low GPU load

## 41.2 Dark Mode Visual Direction

Dark mode:

* deep black/blue-black space
* calm particles
* subtle orbit arcs
* soft nebula gradients
* faint depth shimmer
* electric cyan/violet highlights

## 41.3 Light Mode Visual Direction

Light mode:

* soft white/silver/cloud background
* luminous terrain mesh
* gentle depth waves
* pale blue/lavender/mint highlights
* low contrast but visible movement

## 41.4 Performance Rules

* use limited particle counts on mobile
* pause or reduce render intensity when tab hidden
* avoid heavy postprocessing in v1
* maintain readable contrast
* canvas must never block UI interaction

## 41.5 Migration Rule

Prototype:

```text
Vanilla Three.js in Kinetik.html
```

React/TypeScript future:

```text
Option A: raw Three.js inside React component
Option B: react-three-fiber + Drei
```

Recommended future:

```text
react-three-fiber + Drei
```

---

# 42. Explicit Build Output

## 42.1 Required Initial File Package

Initial build should produce:

```text
KINETIK/
├── Kinetik.html
├── Code.gs
├── README_BUILD_STANDARD.md
├── KINETIK_SHEETS_SCHEMA.md
├── PWA_SW.js
├── manifest_kinetik.webmanifest
├── manifest_padel.webmanifest
├── manifest_times.webmanifest
├── manifest_clock.webmanifest
├── App_PadelAmericano.html
├── App_TimesQuest.html
└── App_ClockTrainer.html
```

## 42.2 File Count

Required initial package:

```text
4 HTML files
1 Apps Script backend file
1 service worker file
4 web manifest files
2 documentation/schema files
```

Total:

```text
12 files
```

## 42.3 HTML Files

Initial HTML files:

```text
Kinetik.html
App_PadelAmericano.html
App_TimesQuest.html
App_ClockTrainer.html
```

Optional future HTML files:

```text
App_EventPoll.html
App_MiniGames.html
App_Grocery.html
App_GroupTrip.html
```

Near-future total:

```text
7-8 HTML files
```

---

# 43. React / TypeScript / Firebase Scalability Roadmap

The HTML prototype must be built so it can later migrate cleanly to React, TypeScript, and Firebase.

## 43.1 What Must Stay Stable

Keep these concepts stable:

* product IA
* tabs
* circle model
* people model
* calendar model
* app ecosystem
* DataAPI contract
* AppBridge contract
* app metadata model
* Ask interaction model
* Three.js visual direction
* GSAP motion language
* PWA install behavior

## 43.2 What Will Be Replaced

Replace later:

```text
Kinetik.html
→ React / TypeScript app

App_*.html
→ React feature modules or standalone app routes

Code.gs
→ Firebase Cloud Functions / Firestore rules

Google Sheets
→ Firestore

Local demo auth
→ Firebase Auth

manual DOM rendering
→ React components
```

## 43.3 Future React Structure

Recommended future folder structure:

```text
/src
  /app
    App.tsx
    ShellLayout.tsx
    routes.tsx

  /components
    TopBar.tsx
    BottomNav.tsx
    GlassPanel.tsx
    Sheet.tsx
    AppIcon.tsx
    AvatarStack.tsx

  /features
    /today
    /calendar
    /ask
    /apps
    /me

  /miniApps
    /padelAmericano
    /timesQuest
    /clockTrainer

  /data
    DataAPI.ts
    LocalDemoAdapter.ts
    FirebaseAdapter.ts
    types.ts

  /bridge
    AppBridge.ts

  /motion
    gsapTransitions.ts
    useGsapReveal.ts

  /three
    KinetikScene.tsx
    AskOrb.tsx

  /theme
    tokens.ts
    ThemeProvider.tsx
```

## 43.4 Future Firebase Collections

Firestore collections:

```text
users
people
circles
circleMembers
relationships
calendarRoutines
calendarEvents
calendarExceptions
appCatalog
circleApps
appRecords
agentLogs
settings
auditLog
```

## 43.5 Firebase Migration Principle

All UI must call:

```js
DataAPI.list()
DataAPI.get()
DataAPI.create()
DataAPI.update()
DataAPI.remove()
DataAPI.queryAppRecords()
```

Therefore the backend migration should mostly replace:

```text
GoogleSheetsAdapter
```

with:

```text
FirebaseAdapter
```

The UI should not need a full rewrite just to change backend.

## 43.6 GSAP Migration

GSAP remains valid after React migration.

Prototype:

```text
GSAP + vanilla DOM refs
```

Future:

```text
GSAP + React refs + useLayoutEffect
```

Example future pattern:

```ts
useLayoutEffect(() => {
  if (!ref.current) return;
  gsap.from(ref.current, {
    y: 16,
    opacity: 0,
    duration: 0.36,
    ease: "power3.out"
  });
}, []);
```

## 43.7 Three.js Migration

Three.js remains valid after React migration.

Prototype:

```text
Vanilla Three.js scene manager
```

Future:

```text
react-three-fiber scene components
```

Recommended future packages:

```text
three
@react-three/fiber
@react-three/drei
gsap
```

---

# 44. Prototype Code Organization Rule

Even though v1 is single-file HTML, the JavaScript should be organized like future modules.

Use clear objects:

```js
const KinetikState = {};
const DemoData = {};
const DataAPI = {};
const LocalDemoAdapter = {};
const GoogleSheetsAdapter = {};
const AppBridge = {};
const ThemeManager = {};
const CircleManager = {};
const CalendarEngine = {};
const AskEngine = {};
const AppRegistry = {};
const AppWindowManager = {};
const Motion = {};
const KinetikScene = {};
```

This makes future React/TypeScript migration easier.

---

# 45. Final Design QA Checklist

Before any build is considered acceptable, check:

## Visual QA

* [ ] Looks premium on iPhone
* [ ] Looks polished on iPad
* [ ] Looks presentable on 16:9 desktop
* [ ] Glassmorphism looks intentional
* [ ] No muddy transparent panels
* [ ] Text contrast is strong
* [ ] Spacing is consistent
* [ ] Typography hierarchy is clean
* [ ] App icons feel iOS-quality
* [ ] Empty states are designed
* [ ] Loading states are designed

## Interaction QA

* [ ] Every button has tap feedback
* [ ] Hover states exist on desktop
* [ ] Focus states exist for keyboard
* [ ] Sheets animate smoothly
* [ ] Tab transitions feel smooth
* [ ] App window open/minimize/maximize works
* [ ] Ask composer behaves like a premium chat app
* [ ] Ask actions preview before applying

## Motion QA

* [ ] GSAP is used for primary UI transitions
* [ ] Motion is smooth but not chaotic
* [ ] Reduced motion is respected
* [ ] Three.js background is not distracting
* [ ] Mobile performance remains acceptable

## Architecture QA

* [ ] Uses circleId, circleType, personId
* [ ] Does not hardcode family-only logic
* [ ] Uses DataAPI abstraction
* [ ] Keeps Google Sheets replaceable
* [ ] Keeps Firebase migration clean
* [ ] Keeps React/TypeScript migration clean
* [ ] All app data goes through AppRecords
* [ ] All files include required LLM headers

---

# 46. Final Updated Product Standard Sentence

**Kinetik** is a premium, Instagram-grade private life app for Family and Friends circles, combining Apple-like calm, glassmorphism depth, cinematic Three.js motion, GSAP-powered interactions, a Claude/ChatGPT-quality Ask interface, modular mini apps, and a scalable backend architecture that can move from Google Sheets to Firebase and from HTML to React/TypeScript without changing the core product model.

---

# 47. Backend, Logic, and Cross-Tab Architecture Audit Standard

This section defines how Kinetik must behave as one connected product, not as five separate beautiful screens.

The five tabs are:

```text
Today
Calendar
Ask
Apps
Me
```

Each tab has a different job, but they must share the same state, same circle context, same permission logic, and same DataAPI layer.

Core rule:

> Today is a computed view. Calendar is the schedule source of truth. Ask is the smart command layer. Apps are modular tools. Me controls identity, people, permissions, and settings. All five tabs communicate through shared state, typed events, DataAPI, and domain engines.

---

# 48. Shared State Architecture

Even in the single-file HTML prototype, Kinetik must be organized like a real future app.

Use a shared state object:

```js
const KinetikState = {
  currentUserId: null,
  currentPersonId: null,
  activeCircleId: null,
  activeCircleType: null,
  theme: "auto",
  backendMode: "local-demo",
  circles: [],
  people: [],
  circleMembers: [],
  calendarEvents: [],
  calendarRoutines: [],
  calendarExceptions: [],
  appCatalog: [],
  circleApps: [],
  appRecords: [],
  askHistory: [],
  minimizedApps: [],
  syncStatus: "idle"
};
```

Rules:

* active circle controls all five tabs
* theme applies globally
* user/person identity applies globally
* installed apps are circle-specific
* app records are circle-specific
* Today should not own separate schedule data
* Calendar should not bypass DataAPI
* Ask should not mutate important data without preview/confirmation
* Me changes must update every relevant tab

---

# 49. Internal Event Bus

Use a lightweight event bus in the prototype.

This makes the HTML prototype easier to migrate to React/TypeScript later.

```js
const EventBus = {
  listeners: {},
  on(eventName, handler) {},
  off(eventName, handler) {},
  emit(eventName, payload) {}
};
```

Required events:

```text
app:booted
auth:login
auth:logout
circle:changed
circle:created
person:created
person:updated
calendar:eventCreated
calendar:eventUpdated
calendar:eventRemoved
calendar:routineCreated
calendar:routineUpdated
calendar:exceptionCreated
ask:messageSent
ask:actionPreviewCreated
ask:actionApplied
app:installed
app:uninstalled
app:opened
app:minimized
app:closed
theme:changed
backend:syncStarted
backend:syncFinished
backend:syncFailed
```

Cross-tab examples:

```text
Calendar event created
→ Today refreshes
→ Ask context updates
→ AuditLog records the change

App installed
→ Apps grid refreshes
→ Me permissions refresh
→ Ask can now open that app

Circle changed
→ Today, Calendar, Ask, Apps, Me all reload scoped data
→ background mood changes
→ app dock clears or updates by circle
```

---

# 50. Domain Engine Layer

DataAPI is only for data access.

Business logic must live in domain engines.

Required engines:

```js
const CalendarEngine = {};
const CircleEngine = {};
const PermissionEngine = {};
const AskActionEngine = {};
const AppInstallEngine = {};
const AppRegistry = {};
const AuditEngine = {};
const SyncEngine = {};
const ThemeManager = {};
const Motion = {};
const KinetikScene = {};
```

Responsibilities:

```text
DataAPI
- list/get/create/update/remove data
- call local demo, Google Sheets, or Firebase adapter

CalendarEngine
- resolve routines into actual date instances
- combine events, routines, exceptions
- detect conflicts
- produce Today agenda
- produce week/month/board views

CircleEngine
- switch circle
- create circle
- resolve people in circle
- resolve active circle context

PermissionEngine
- determine what current person/user can view or edit
- protect calendar, apps, people, and settings actions

AskActionEngine
- parse deterministic intents
- create previews
- apply confirmed actions
- route actions to Calendar, Apps, or Me

AppInstallEngine
- install/uninstall apps per circle
- preserve app data unless explicitly deleted
- update CircleApps

AppRegistry
- define all app metadata
- define app capabilities
- define allowed circle types

AuditEngine
- log important actions
- write to AuditLog

SyncEngine
- manage local/demo/sheets/firebase sync status
- handle errors and retries
```

---

# 51. Calendar Engine Rules

Calendar is the operating core of Kinetik.

Calendar must support:

* one-off events
* recurring routines
* exceptions
* cancellations
* reschedules
* participant people
* responsible person
* preparation checklist
* linked apps
* linked app records
* conflicts
* draft/proposed events from Ask

Recommended event fields to add:

```text
sourceType
sourceId
status
visibility
createdByPersonId
updatedByPersonId
timezone
allDay
reminderJson
linkedAppId
linkedAppRecordId
```

Recommended statuses:

```text
draft
proposed
confirmed
tentative
cancelled
completed
```

Recommended routine fields to add:

```text
recurrenceType
recurrenceRuleJson
startDate
endDate
timezone
exceptionPolicy
```

Required CalendarEngine methods:

```js
CalendarEngine.getTodayAgenda(circleId, date)
CalendarEngine.getTomorrowPreview(circleId, date)
CalendarEngine.getDayView(circleId, date)
CalendarEngine.getWeekView(circleId, startDate)
CalendarEngine.getMonthView(circleId, month)
CalendarEngine.getBoardView(circleId, startDate, mode)
CalendarEngine.resolveRoutineInstances(circleId, dateRange)
CalendarEngine.applyExceptions(instances, exceptions)
CalendarEngine.detectConflicts(circleId, eventDraft)
CalendarEngine.createEventFromApp(appId, appRecordId, payload)
CalendarEngine.createEventFromAsk(actionPayload)
```

Calendar source of truth rule:

```text
Today reads from CalendarEngine.
Ask previews Calendar changes through CalendarEngine.
Apps create calendar-linked events through AppBridge and CalendarEngine.
Me controls permissions that CalendarEngine must respect.
```

---

# 52. Ask Action Preview Contract

Ask must feel like Claude/ChatGPT in quality, but it must behave like a safe command layer.

Ask must never silently apply important changes.

For any action that changes data:

```text
1. Parse intent
2. Create structured action preview
3. Show preview card
4. User confirms, edits, or cancels
5. Apply only after confirmation
6. Write audit log
7. Refresh affected tabs
```

Ask action object:

```js
{
  id: "action_001",
  type: "CREATE_EVENT",
  status: "preview",
  target: "calendar",
  circleId: "circle_family_001",
  createdByPersonId: "person_aldyth",
  summary: "Add Kinara padel every Tuesday at 7 PM",
  payload: {},
  requiredPermission: "edit_calendar",
  affectedCollections: [
    "Calendar_Routines"
  ],
  createdAt: "ISO_DATE"
}
```

Supported action types:

```text
CREATE_EVENT_PREVIEW
CREATE_ROUTINE_PREVIEW
UPDATE_EVENT_PREVIEW
OPEN_APP
INSTALL_APP_PREVIEW
UNINSTALL_APP_PREVIEW
SHOW_SCHEDULE_SUMMARY
SHOW_PERSON_WEEK
SHOW_APP_PROGRESS
CREATE_PADEL_TOURNAMENT_PREVIEW
CREATE_EVENT_POLL_PREVIEW
NAVIGATE_TO_TAB
```

Ask UI must show:

* what will happen
* which circle it affects
* which person/people it affects
* date/time
* recurrence
* app linkage if any
* confirmation buttons

---

# 53. Permission Engine

Permissions must be real enough in prototype logic even if auth is demo-only.

Required methods:

```js
PermissionEngine.canViewCircle(userId, circleId)
PermissionEngine.canEditCircle(userId, circleId)
PermissionEngine.canEditCalendar(userId, circleId)
PermissionEngine.canInstallApp(userId, circleId, appId)
PermissionEngine.canUninstallApp(userId, circleId, appId)
PermissionEngine.canViewPerson(userId, circleId, personId)
PermissionEngine.canEditPerson(userId, circleId, personId)
PermissionEngine.canUseAskAction(userId, circleId, actionType)
PermissionEngine.canAccessApp(userId, circleId, appId)
```

Rules:

* children may have limited learning app access
* adults can usually edit calendar
* circle owners have full control
* friends circles may have different edit permissions than family circles
* Ask actions must check permissions before applying
* app installs must check permission
* Me tab must expose permission state clearly

---

# 54. App Capability Manifest

Every app should declare its capabilities.

Example:

```js
{
  id: "padel-americano",
  name: "Americano Padel",
  file: "App_PadelAmericano.html",
  allowedCircleTypes: ["family", "friends"],
  defaultInstalledForCircleTypes: ["family", "friends"],
  capabilities: [
    "records.create",
    "records.update",
    "calendar.createEvent",
    "people.read",
    "toast.show"
  ],
  collections: [
    "tournaments",
    "matches",
    "players"
  ]
}
```

Capability examples:

```text
records.read
records.create
records.update
records.remove
calendar.read
calendar.createEvent
calendar.updateEvent
people.read
people.select
ask.suggestPrompt
toast.show
navigate.openApp
```

Rules:

* apps cannot directly mutate shell data
* apps must use AppBridge
* apps must store app-specific data in AppRecords
* apps can request calendar creation through bridge
* shell validates app capability before action

---

# 55. Cross-Tab Data Flow

## 55.1 Today

Today is a computed operational view.

Reads from:

```text
Calendar_Routines
Calendar_Events
Calendar_Exceptions
People
CircleMembers
CircleApps
AppRecords
```

Writes:

```text
Calendar_Events through quick add
Calendar_Routines through recurring quick add
Calendar_Events preparation state
AuditLog
```

Must refresh when:

```text
circle:changed
calendar:eventCreated
calendar:eventUpdated
calendar:routineCreated
calendar:exceptionCreated
app:installed
ask:actionApplied
```

## 55.2 Calendar

Calendar is the schedule source of truth.

Reads/writes:

```text
Calendar_Routines
Calendar_Events
Calendar_Exceptions
People
CircleMembers
AppRecords for linked app context
```

Must notify:

```text
Today
Ask
AuditLog
linked Apps
```

## 55.3 Ask

Ask is the smart command layer.

Reads:

```text
active circle context
calendar computed views
app catalog
installed apps
people
permissions
ask history
```

Writes:

```text
AgentLogs
AuditLog after confirmed actions
target collections only through engines
```

Must never bypass:

```text
PermissionEngine
AskActionEngine
DataAPI
```

## 55.4 Apps

Apps are modular tools.

Reads:

```text
AppCatalog
CircleApps
AppRecords
People if capability allows
Calendar if capability allows
```

Writes:

```text
CircleApps for install state
AppRecords for app data
Calendar_Events only through bridge-approved requests
AuditLog
```

## 55.5 Me

Me controls identity, people, circle settings, permissions, and theme.

Reads/writes:

```text
Users
People
Circles
CircleMembers
Relationships
Settings
CircleApps permissions
```

Must notify:

```text
all tabs when circle/person/theme/permission settings change
```

---

# 56. Firebase Migration Readiness Audit

The prototype is only successful if it can migrate.

Firebase-ready requirements:

* every record has stable `id`
* every scoped record has `circleId`
* every person-owned record has `personId` or `ownerPersonId`
* every write has `createdAt` and `updatedAt`
* app-specific data goes in `AppRecords`
* no direct Google Sheets assumptions inside UI components
* no tab directly writes raw sheet rows
* adapters normalize data shape
* permissions are explicit
* audit events are structured

Future Firebase mapping:

```text
Users                  → users
People                 → people
Circles                → circles
CircleMembers          → circleMembers
Relationships          → relationships
Calendar_Routines      → calendarRoutines
Calendar_Events        → calendarEvents
Calendar_Exceptions    → calendarExceptions
AppCatalog             → appCatalog
CircleApps             → circleApps
AppRecords             → appRecords
AgentLogs              → agentLogs
Settings               → settings
AuditLog               → auditLog
```

Future Firestore indexes likely needed:

```text
circleId + date
circleId + active
circleId + appId
circleId + personId
circleId + collection
circleId + createdAt
appId + collection
userId + circleId
```

---

# 57. Brutal Product Review Test Standard

Before calling Kinetik a unicorn candidate, test it like a skeptical professional app reviewer.

Reviewer questions:

```text
1. Would I open this daily without being forced?
2. Does Today give me value within 5 seconds?
3. Is Calendar clearly better than Apple Calendar for family/friends life?
4. Does Ask actually help, or is it decorative?
5. Are the mini apps useful enough to justify the ecosystem?
6. Does the app feel private and trustworthy?
7. Is the design premium, or just glassy?
8. Does the product have one killer habit loop?
9. Would a family member understand it immediately?
10. Would a friends group actually use this together?
11. Does the app become more valuable as more people join?
12. Is there a reason to use this instead of WhatsApp + Calendar + Notes?
13. Is onboarding fast enough?
14. Is the backend architecture ready for real data?
15. Can this migrate to React/Firebase without a full rebuild?
```

Unicorn candidate criteria:

```text
High-frequency use
Clear emotional hook
Clear practical value
Network effect through circles
Beautiful consumer-grade design
Strong retention loop
Expandable app ecosystem
Trustworthy private data model
Scalable technical architecture
Simple onboarding
One unmistakable killer feature
```

Current honest risk:

```text
The concept is ambitious and visually strong, but it becomes a unicorn candidate only if Calendar + Ask + Apps create a daily habit that WhatsApp, Apple Calendar, and Notes cannot easily replace.
```

---

# 58. App Reviewer UX Critique and Build Feedback

This section captures the app-reviewer perspective that must guide the build.

Kinetik should be reviewed as if a skeptical professional app reviewer is opening it for the first time from login onward.

The reviewer standard:

> The app must be useful before it is magical.

The dangerous version:

```text
Beautiful glass app, nice animations, but I do not know what to do with it.
```

The winning version:

```text
I open it, instantly see what my family/friends need today, ask it to fix something, and it actually helps.
```

---

# 59. Reviewer Flow From First Open

## 59.1 Login / Entry Review

Wireframe:

```text
[Animated Kinetik background]

             KINETIK
        Plans. People. Play.

     [Sukapradja Family Demo]
     [Padel Friends Demo]

     PIN / Password
     [ Continue ]

     Private circles for family and friends
```

Comment:

```text
Login should feel private, premium, and trustworthy.
```

Critique:

```text
If login is too decorative, users may not understand what the app actually does.
Do not force users through a long cinematic intro before showing value.
```

Room for improvement:

```text
Show a tiny preview of usefulness before or during login:
- 3 things today
- next event
- active circle
- preparation reminder
```

Build suggestion:

```text
Use fast demo login.
Let the user reach Today quickly.
Keep onboarding short.
```

Animation rule:

```text
Good:
- logo blur-in
- soft glass panel rise
- background breathing

Bad:
- long intro
- too many particles
- spinning objects
- delayed access
```

---

## 59.2 Circle Switcher Review

Wireframe:

```text
KINETIK                         [Avatar]

Choose your circle

[ Sukapradja Family        Family ]
[ 5 people | 4 events today       ]
[ Avatars: A B K K                ]

[ Padel Friends            Friends ]
[ Next game Friday | 8 players     ]

[ Doha Friends             Friends ]
[ Dinner poll open                 ]

[ + Create Friends Circle ]
```

Comment:

```text
Circle switching is a major differentiator.
It must feel like changing life contexts, not switching accounts.
```

Critique:

```text
If circles are only static labels, the feature feels boring.
Each circle must show why it matters right now.
```

Room for improvement:

```text
Each circle card should display:
- next event
- active people
- open poll or app activity
- number of items today
```

Build suggestion:

```text
Make each circle visually distinct through color, people, and next action.
Switching circle should update all tabs and background mood.
```

Animation rule:

```text
Good:
- active circle expands
- background hue shifts subtly
- avatars animate into place

Bad:
- overdone carousel motion
- cards flying around
- slow transition
```

---

## 59.3 Today Review

Wireframe:

```text
Today                              [Circle: Family]

Good afternoon, Aldyth

[NEXT]
Kinara Padel
7:00 PM - 8:00 PM
Prepare: racket, shoes, water
[Open] [Mark prepared]

Today Plan
09:00  Baginda - School
15:30  Keyla - Math practice
19:00  Kinara - Padel

Preparation
[ ] Baginda homework folder
[ ] Keyla worksheet
[ ] Kinara sports bag

Tomorrow
3 events | 1 preparation item

[ + Quick Add ]
```

Comment:

```text
Today is the heart of Kinetik.
If Today is excellent, users have a reason to return daily.
```

Critique:

```text
Today must not become a generic dashboard.
It should be calm, prioritized, and useful within 5 seconds.
```

Room for improvement:

```text
Today should always answer:
- What is next?
- What needs preparation?
- Who is involved?
- Is there a conflict?
- What should I know about tomorrow?
```

Build suggestion:

```text
Make the next event the hero.
Make preparation checklist satisfying.
Make empty states beautiful.
Use CalendarEngine as the source of truth.
```

Animation rule:

```text
Good:
- next card soft luminous edge
- checklist completion pulse
- subtle timeline current-time motion

Bad:
- constantly moving cards
- shimmering everything
- decorative motion that delays reading
```

---

## 59.4 Calendar Review

Wireframe:

```text
Calendar                           [Family]

[ Day ] [ Week ] [ Month ] [ Board ]

Filters:
[All] [Baginda] [Keyla] [Kinara] [Padel]

WEEK VIEW
Mon       Tue       Wed       Thu
School    Math      Padel     Dinner
Pickup    Quran     Swim      -

[ + Add Event ]

Tap event:
-------------------------
Kinara Padel
Tue, 7:00 PM
Participants: Kinara, Aldyth
Preparation: racket, shoes
[Edit] [Cancel] [Done]
-------------------------
```

Comment:

```text
Calendar is necessary, but it cannot just be Apple Calendar with glass.
The Board view is the likely signature feature.
```

Critique:

```text
If Calendar only shows dates, it is replaceable.
It must show coordination: people, responsibility, prep, conflicts, routines.
```

Room for improvement:

```text
Prioritize:
- Board view
- preparation
- responsibility
- people/activity grouping
- conflict detection
- routine handling
```

Build suggestion:

```text
Make Board mode excellent.
Family Board rows = people.
Friends Board rows = activities/groups/events.
```

Animation rule:

```text
Good:
- mode switch morphs smoothly
- event card expands into detail sheet
- conflict warning appears as amber glow

Bad:
- slow calendar animations
- excessive date-grid effects
- motion that makes planning harder
```

---

## 59.5 Ask Review

Wireframe:

```text
Ask                                [Family Context]

          [ Soft glowing orb ]

What can I help coordinate?

[ What do we have tomorrow? ]
[ Add Kinara padel Tuesday ]
[ Show Baginda this week ]
[ What needs preparation? ]

Conversation:
You:
Add Kinara padel every Tuesday at 7

Kinetik:
Proposed routine

Kinara Padel
Every Tuesday
7:00 PM - 8:00 PM
Circle: Sukapradja Family
Participant: Kinara
Responsible: Aldyth

[ Add to Calendar ] [ Edit ] [ Cancel ]

[ Message Kinetik...              Send ]
```

Comment:

```text
Ask can make Kinetik feel modern and magical.
It must behave like a safe command layer, not a decorative chatbot.
```

Critique:

```text
If Ask only replies with text, users will stop using it.
Ask must produce useful action cards and previews.
```

Room for improvement:

```text
Ask must support:
- schedule summaries
- event previews
- recurring routine previews
- app opening
- app install previews
- conflict warnings
- learning progress summaries
- padel tournament setup previews
```

Build suggestion:

```text
Make Ask deterministic first.
It does not need full AI in v1.
It needs to be reliable, contextual, and action-capable.
```

Animation rule:

```text
Good:
- orb breathing
- response streamed-feeling reveal
- action card slide-in

Bad:
- fake thinking for too long
- orb stealing attention
- chatbot widget feeling
```

---

## 59.6 Apps Review

Wireframe:

```text
Apps                               [Family]

[ My Apps ] [ Store ]

My Apps
[ Padel ]     [ Times Quest ]   [ Clock ]
[ Poll ]      [ Grocery ]       [ Games ]

Minimized
[ Padel Tournament ]

Kinetik Store
Suggested for Family
[ Clock Trainer ]
Help kids practice analog time
[ Install ]

[ Grocery ]
Shared family shopping
[ Install ]
```

Comment:

```text
The private app store concept is bold and memorable.
It works only if each app solves a repeated circle problem.
```

Critique:

```text
Users may ask: why are there apps inside an app?
The answer must be obvious through usefulness and integration.
```

Room for improvement:

```text
Start with high-utility apps:
- Padel Americano
- Event Poll
- Grocery
- Times Quest
- Clock Trainer
```

Build suggestion:

```text
Apps must connect back to Calendar and circles.
They must not feel like isolated toys.
```

Animation rule:

```text
Good:
- app icon opens into window
- minimize to dock
- install button morphs into installed

Bad:
- slow app window animation
- too much macOS mimicry on mobile
- app store pages that feel decorative only
```

---

## 59.7 Me Review

Wireframe:

```text
Me

[Aldyth Sukapradja]
Sukapradja Family | Doha

My Circles
[ Sukapradja Family ]
[ Padel Friends ]
[ Doha Friends ]

People
Baginda
Keyla
Kinara
Aldyth

Settings
[ Theme: Auto ]
[ Backend: Demo / Google Sheets ]
[ App Permissions ]
[ Backup / Export ]
```

Comment:

```text
Me should feel personal, not administrative.
It is important for trust, but it is not the daily hook.
```

Critique:

```text
This page can become boring if it is only settings rows.
People and circles should feel alive.
```

Room for improvement:

```text
Show:
- avatars
- roles
- relationships
- permissions
- circle memberships
- app access
```

Build suggestion:

```text
Put profile, people, and circles first.
Place backend technical status lower.
```

Animation rule:

```text
Good:
- theme crossfade
- profile card soft entrance
- family tree nodes settle

Bad:
- animated settings rows
- unnecessary movement
```

---

# 60. Reviewer Feedback for Mini Apps

## 60.1 Americano Padel

Wireframe:

```text
Americano Padel

[ New Tournament ]

Players
[ Aldyth ] [ Omar ] [ Faisal ] [ + Add ]

Courts
[ 1 ] [ 2 ] [ 3 ]

[ Generate Rounds ]

Round 1
Court 1
Aldyth + Omar vs Faisal + Rafi
[ Enter Score ]

Leaderboard
1. Aldyth   24
2. Omar     21
3. Faisal   18

[ Save Tournament ]
```

Build critique:

```text
This could be the strongest friends-circle app.
It must be faster and more beautiful than using a spreadsheet or random padel app.
```

Build suggestions:

```text
- save previous players
- create tournament quickly
- generate fair rounds
- animate leaderboard position changes
- offer "Add to Calendar"
- offer result summary
- store history in AppRecords
```

## 60.2 Times Quest

Wireframe:

```text
Times Quest

Choose Player
[ Baginda ] [ Keyla ] [ Kinara ]

Choose Table
[ 2 ] [ 3 ] [ 4 ] [ 5 ] [ 6 ]

Question
7 x 8 = ?

[ 54 ] [ 56 ] [ 64 ] [ 58 ]

Streak: 5
Stars: 12
Progress: 7x table 80%
```

Build critique:

```text
If it is only a quiz, many apps already exist.
The differentiator is parent-visible progress inside the family circle.
```

Build suggestions:

```text
- track progress per child/personId
- show parent summary
- Ask can answer "How is Keyla doing?"
- make rewards subtle and premium
- avoid childish clutter
```

## 60.3 Clock Trainer

Wireframe:

```text
Clock Trainer

Choose Child
[ Keyla ] [ Kinara ]

What time is this?

       [ Analog Clock ]

[ 3:15 ] [ 4:15 ] [ 3:45 ] [ 2:15 ]

Progress
Reading quarter past: improving
```

Build critique:

```text
Good family-learning app, but lower frequency than Today, Calendar, Ask, or Padel.
It needs excellent clock interaction to feel worth using.
```

Build suggestions:

```text
- add multiple choice mode
- add set-the-clock mode
- animate clock hands naturally
- track learning progress
- connect progress to Ask and Me
```

---

# 61. Biggest Product Criticism

Kinetik is ambitious.

It wants to be:

```text
calendar
chatbot
app store
family manager
friends planner
mini games platform
learning app
PWA ecosystem
```

This is exciting but risky.

The first version must be ruthless.

Recommended killer v1:

```text
Today + Calendar + Ask + Padel/Event Poll
```

Strongest useful v1 loop:

```text
Open Kinetik
See Today
Ask: "Who is free for padel Friday?"
Create poll/event
Friends respond
Event appears in Calendar
Padel app runs tournament
Results saved in circle
```

Core warning:

```text
Kinetik will win if users say:
"I opened it once and immediately saw what my family/friends needed today."

Kinetik will fail if users say:
"Looks beautiful, but I don't know why I need it."
```

---

# 62. Full Build To-Do List

This is the detailed build checklist for creating the full Kinetik prototype.

## 62.1 Phase 0 — Foundation and Standards

Goal:

```text
Create the technical and design foundation before building UI.
```

To do:

* [ ] Create `README_BUILD_STANDARD.md`
* [ ] Create `KINETIK_SHEETS_SCHEMA.md`
* [ ] Create `Code.gs`
* [ ] Create `PWA_SW.js`
* [ ] Create web manifests
* [ ] Define all IDs and naming rules
* [ ] Define DataAPI interface
* [ ] Define LocalDemoAdapter
* [ ] Define GoogleSheetsAdapter placeholder
* [ ] Define shared state shape
* [ ] Define EventBus
* [ ] Define domain engine objects
* [ ] Define app metadata registry
* [ ] Define app capability model
* [ ] Define LLM headers for every generated file

Acceptance criteria:

* [ ] All required files exist
* [ ] Architecture is documented
* [ ] Data contracts are clear
* [ ] Future Firebase migration path is preserved

---

## 62.2 Phase 1 — Main Shell and Visual System

Goal:

```text
Build Kinetik.html as the premium shell.
```

To do:

* [ ] Create `Kinetik.html`
* [ ] Add required Kinetik shell LLM header
* [ ] Add mobile-first HTML structure
* [ ] Add design tokens
* [ ] Add dark theme
* [ ] Add light theme
* [ ] Add auto theme behavior
* [ ] Add glassmorphism material tokens
* [ ] Add typography scale
* [ ] Add button/control states
* [ ] Add safe-area support
* [ ] Add responsive desktop layout
* [ ] Add Three.js background canvas
* [ ] Add dark mode galaxy/particle scene
* [ ] Add light mode terrain/mesh scene
* [ ] Add GSAP motion helpers
* [ ] Add reduced motion fallback

Acceptance criteria:

* [ ] Shell looks premium before content is complete
* [ ] Background is subtle and not distracting
* [ ] Light/dark themes are readable
* [ ] Layout works on iPhone, iPad, desktop, 16:9

---

## 62.3 Phase 2 — Splash, Login, Circle Switcher

Goal:

```text
Create fast, premium entry into the app.
```

To do:

* [ ] Build splash screen
* [ ] Add Kinetik logo/wordmark
* [ ] Add tagline
* [ ] Add cinematic but short reveal
* [ ] Build demo login
* [ ] Add demo account selector
* [ ] Add PIN/password field
* [ ] Add login validation states
* [ ] Build circle switcher
* [ ] Add family circle card
* [ ] Add friends circle cards
* [ ] Add circle activity previews
* [ ] Add create friends circle UI placeholder
* [ ] Emit `auth:login`
* [ ] Emit `circle:changed`

Acceptance criteria:

* [ ] User reaches Today quickly
* [ ] Circle switching updates global state
* [ ] Entry feels private and premium

---

## 62.4 Phase 3 — Navigation and Cross-Tab State

Goal:

```text
Make the five tabs behave as one app.
```

To do:

* [ ] Build top bar
* [ ] Build active circle selector in top bar
* [ ] Build avatar/profile entry
* [ ] Build optional sync status
* [ ] Build bottom nav
* [ ] Add Today tab container
* [ ] Add Calendar tab container
* [ ] Add Ask tab container
* [ ] Add Apps tab container
* [ ] Add Me tab container
* [ ] Add GSAP tab transitions
* [ ] Add per-tab refresh methods
* [ ] Connect tabs to EventBus
* [ ] Ensure circle changes refresh every tab
* [ ] Ensure theme changes refresh visual system

Acceptance criteria:

* [ ] All five tabs switch smoothly
* [ ] Active circle is respected everywhere
* [ ] No tab uses isolated fake state

---

## 62.5 Phase 4 — Today

Goal:

```text
Create the daily habit screen.
```

To do:

* [ ] Build greeting section
* [ ] Build next event hero card
* [ ] Build today timeline
* [ ] Build people/activity grouping
* [ ] Build preparation checklist
* [ ] Build tomorrow preview
* [ ] Build quick add button
* [ ] Build empty state
* [ ] Use CalendarEngine for data
* [ ] Add checklist completion state
* [ ] Add event detail sheet
* [ ] Add useful friends-circle Today variant

Acceptance criteria:

* [ ] Today is useful within 5 seconds
* [ ] Next event is obvious
* [ ] Prep items are actionable
* [ ] Today updates after Calendar or Ask changes

---

## 62.6 Phase 5 — Calendar Core

Goal:

```text
Build the operating core.
```

To do:

* [ ] Build CalendarEngine
* [ ] Build mode segmented control
* [ ] Build Day view
* [ ] Build Week view
* [ ] Build Month view
* [ ] Build Board view
* [ ] Build Family Board rows by people
* [ ] Build Friends Board rows by activities/groups/events
* [ ] Build filter chips
* [ ] Build add event sheet
* [ ] Build edit event sheet
* [ ] Build event detail sheet
* [ ] Build recurring routine creation
* [ ] Build exception/cancellation handling
* [ ] Build conflict warning logic
* [ ] Build linked app event support
* [ ] Emit calendar events through EventBus

Acceptance criteria:

* [ ] Calendar is more useful than a basic calendar
* [ ] Board view is genuinely scannable
* [ ] Today updates from Calendar changes
* [ ] Ask can create Calendar previews

---

## 62.7 Phase 6 — Ask

Goal:

```text
Build a Claude/ChatGPT-quality command layer.
```

To do:

* [ ] Build Ask layout
* [ ] Build visual orb
* [ ] Build orb states
* [ ] Build quick prompts
* [ ] Build conversation stream
* [ ] Build sticky composer
* [ ] Build user messages
* [ ] Build Kinetik response cards
* [ ] Build action preview cards
* [ ] Build deterministic intent parser
* [ ] Build schedule summary action
* [ ] Build create event preview action
* [ ] Build create routine preview action
* [ ] Build open app action
* [ ] Build install app preview action
* [ ] Build conflict warning response
* [ ] Build confirmation/apply flow
* [ ] Connect to PermissionEngine
* [ ] Write AgentLogs
* [ ] Write AuditLog after applied actions

Acceptance criteria:

* [ ] Ask is useful, not decorative
* [ ] Ask never silently mutates important data
* [ ] Ask can affect Calendar and Apps after confirmation
* [ ] Ask feels premium and trustworthy

---

## 62.8 Phase 7 — Apps System

Goal:

```text
Build the private app launcher and Store.
```

To do:

* [ ] Build AppRegistry
* [ ] Build AppInstallEngine
* [ ] Build My Apps grid
* [ ] Build app icons
* [ ] Build Store home
* [ ] Build Store search
* [ ] Build Store categories
* [ ] Build app detail page
* [ ] Build install flow
* [ ] Build uninstall flow
* [ ] Build app window shell
* [ ] Build app iframe loading
* [ ] Build close/minimize/maximize controls
* [ ] Build minimized dock
* [ ] Build app capability validation
* [ ] Persist install state through CircleApps
* [ ] Connect app actions through AppBridge

Acceptance criteria:

* [ ] Apps feel like useful modular tools
* [ ] Installed apps differ by circle
* [ ] App windows work smoothly
* [ ] Apps can communicate with shell safely

---

## 62.9 Phase 8 — Me

Goal:

```text
Build personal, people, circle, and settings control.
```

To do:

* [ ] Build profile card
* [ ] Build My Circles list
* [ ] Build People list
* [ ] Build Family Tree placeholder/view
* [ ] Build Friends people map/list
* [ ] Build circle settings
* [ ] Build app permissions view
* [ ] Build theme selector
* [ ] Build backend status panel
* [ ] Build backup/export placeholder
* [ ] Connect PermissionEngine
* [ ] Emit updates through EventBus

Acceptance criteria:

* [ ] Me feels personal, not administrative
* [ ] Theme changes apply globally
* [ ] People/circle changes affect relevant tabs
* [ ] Backend status is visible but not scary

---

## 62.10 Phase 9 — Americano Padel App

Goal:

```text
Build the strongest friends-circle utility app.
```

To do:

* [ ] Create `App_PadelAmericano.html`
* [ ] Add required app LLM header
* [ ] Add embedded mode
* [ ] Add standalone mode
* [ ] Add app metadata
* [ ] Build player setup
* [ ] Build saved players
* [ ] Build court selector
* [ ] Build round generator
* [ ] Build score entry
* [ ] Build leaderboard
* [ ] Build tournament history
* [ ] Build add-to-calendar request
* [ ] Build result summary
* [ ] Store data through AppRecords
* [ ] Support PWA manifest

Acceptance criteria:

* [ ] Tournament setup is fast
* [ ] Round generation works
* [ ] Scores update leaderboard
* [ ] App can run embedded and standalone

---

## 62.11 Phase 10 — Times Quest App

Goal:

```text
Build family learning app with parent-visible progress.
```

To do:

* [ ] Create `App_TimesQuest.html`
* [ ] Add required app LLM header
* [ ] Add embedded mode
* [ ] Add standalone mode
* [ ] Build child/person selector
* [ ] Build multiplication table selector
* [ ] Build quiz questions
* [ ] Build answer buttons
* [ ] Build score tracking
* [ ] Build stars/streaks
* [ ] Build progress summary
* [ ] Store progress in AppRecords
* [ ] Expose progress to Ask context
* [ ] Support PWA manifest

Acceptance criteria:

* [ ] Quiz works cleanly
* [ ] Progress is useful to parents
* [ ] App avoids childish clutter

---

## 62.12 Phase 11 — Clock Trainer App

Goal:

```text
Build analog clock learning app.
```

To do:

* [ ] Create `App_ClockTrainer.html`
* [ ] Add required app LLM header
* [ ] Add embedded mode
* [ ] Add standalone mode
* [ ] Build child/person selector
* [ ] Build analog clock display
* [ ] Build multiple choice mode
* [ ] Build set-the-clock mode placeholder
* [ ] Animate clock hands naturally
* [ ] Track progress
* [ ] Store sessions in AppRecords
* [ ] Support PWA manifest

Acceptance criteria:

* [ ] Clock questions work
* [ ] Progress is saved
* [ ] App feels polished enough to keep

---

## 62.13 Phase 12 — Google Sheets Backend

Goal:

```text
Move from local demo data toward real prototype persistence.
```

To do:

* [ ] Implement Apps Script routing
* [ ] Implement JSON response wrapper
* [ ] Implement CRUD list/get/create/update/remove
* [ ] Implement query filtering
* [ ] Implement AppRecords helpers
* [ ] Implement AuditLog writes
* [ ] Implement Settings reads/writes
* [ ] Implement error responses
* [ ] Implement CORS/web app response pattern where possible
* [ ] Connect GoogleSheetsAdapter
* [ ] Add backend mode toggle
* [ ] Add sync status

Acceptance criteria:

* [ ] Shell can load from Google Sheets
* [ ] Calendar writes persist
* [ ] AppRecords persist
* [ ] Errors show gracefully

---

## 62.14 Phase 13 — PWA

Goal:

```text
Make Kinetik and first apps installable.
```

To do:

* [ ] Create `manifest_kinetik.webmanifest`
* [ ] Create `manifest_padel.webmanifest`
* [ ] Create `manifest_times.webmanifest`
* [ ] Create `manifest_clock.webmanifest`
* [ ] Create shared `PWA_SW.js`
* [ ] Add service worker registration
* [ ] Add iOS meta tags
* [ ] Add standalone detection
* [ ] Add app icons placeholders or generated icons
* [ ] Add offline fallback behavior
* [ ] Test standalone mode logic

Acceptance criteria:

* [ ] Main shell is PWA-ready
* [ ] Apps are PWA-ready
* [ ] Standalone mode has demo login/circle picker

---

## 62.15 Phase 14 — Premium Polish and QA

Goal:

```text
Make the prototype feel like a professional app, not a demo.
```

To do:

* [ ] Review every screen for spacing
* [ ] Review every screen for typography
* [ ] Review every screen for contrast
* [ ] Tune glassmorphism
* [ ] Tune Three.js intensity
* [ ] Tune GSAP durations
* [ ] Add loading states
* [ ] Add empty states
* [ ] Add error states
* [ ] Add success toasts
* [ ] Add focus states
* [ ] Add hover states
* [ ] Add tap states
* [ ] Test mobile layout
* [ ] Test desktop layout
* [ ] Test 16:9 presentation layout
* [ ] Test reduced motion
* [ ] Test light/dark mode
* [ ] Test all five tabs after circle switch
* [ ] Test Ask action previews
* [ ] Test app install/uninstall
* [ ] Test app window minimize/maximize

Acceptance criteria:

* [ ] Looks like a premium consumer app
* [ ] Useful within first 30 seconds
* [ ] Five tabs feel connected
* [ ] No major layout breakage
* [ ] No obvious placeholder UI

---

## 62.16 Phase 15 — Firebase / React Readiness Review

Goal:

```text
Before migration, confirm architecture is clean.
```

To do:

* [ ] Confirm DataAPI abstraction is respected
* [ ] Confirm no UI depends directly on Google Sheets schema
* [ ] Confirm every record has stable IDs
* [ ] Confirm all circle-scoped data has `circleId`
* [ ] Confirm all app data is in AppRecords
* [ ] Confirm PermissionEngine is used before writes
* [ ] Confirm Ask actions are typed
* [ ] Confirm EventBus events are consistent
* [ ] Confirm future React component boundaries
* [ ] Confirm future Firebase collections/indexes
* [ ] Create migration notes

Acceptance criteria:

* [ ] Prototype can migrate without conceptual rebuild
* [ ] React/TypeScript architecture is obvious
* [ ] Firebase data model is obvious

---

# 63. Critical Circle Privacy, Member Access, and Invitation Model

This section is critical.

Kinetik must protect circle privacy at the architecture level.

Core privacy rule:

> A user or member can only see the circles they explicitly belong to. A member of one circle must never see another circle's people, calendar, apps, Ask history, app records, settings, family data, or child learning data unless they are explicitly added to that other circle.

Example:

```text
Aldyth belongs to:
- Sukapradja Family as owner
- Padel Friends as owner/admin
- Doha Friends as member

Omar belongs to:
- Padel Friends as member

Omar can see:
- Padel Friends members
- Padel Friends shared events
- Padel Friends installed apps he is allowed to use
- Padel Friends app records he is allowed to see

Omar cannot see:
- Sukapradja Family
- Sukapradja Family people
- family calendar
- children learning progress
- family preparation list
- family Ask history
- family apps
- family backend/settings
- Doha Friends unless added there
```

This is a hard product rule.

Do not implement privacy only as UI hiding.
Data access must be scoped by circle membership and permissions.

---

# 64. User, Person, and CircleMember Distinction

Kinetik must separate these concepts:

```text
User
- login account
- can authenticate
- can belong to many circles

Person
- human/profile represented inside a circle
- may or may not have login access
- examples: child, spouse, friend, caregiver

CircleMember
- access relationship between User, Person, and Circle
- stores role and permissions
```

Important:

```text
Add Person != Invite Member
```

Add Person creates a person profile inside a circle and does not automatically create login access.

Invite Member invites a real user account into the selected circle with a role and permissions.

---

# 65. Circle Roles and Permissions

Supported roles:

```text
owner
admin
adult
member
child
viewer
guest
```

Required permissions:

```text
view_circle
edit_circle
delete_circle
invite_members
remove_members
manage_permissions

view_people
edit_people
view_relationships
view_child_profiles
edit_child_profiles

view_calendar
edit_calendar
create_events
edit_own_events
delete_events
view_private_events

view_apps
install_apps
uninstall_apps
use_apps
manage_app_permissions

use_ask
apply_ask_actions
view_ask_history

view_app_records
edit_app_records
view_learning_progress
view_padel_history

view_audit_log
export_data
```

Every important action must check:

```js
PermissionEngine.can(userId, circleId, permission)
```

Default access matrix:

```text
Role      View Circle  Edit Calendar  Invite  Apps              Ask Actions      Settings
Owner     Yes          Yes            Yes     Manage            Yes              Yes
Admin     Yes          Yes            Yes     Manage/Limited    Yes              Limited
Adult     Yes          Yes            No      Use               Yes              No
Member    Yes          Limited        No      Use Allowed       Limited          No
Child     Limited      No             No      Child Apps Only   Child Safe       No
Viewer    Limited      No             No      Read Only         No/Limited       No
Guest     Event Only   No             No      Event App Only    No               No
```

Default friends member:

```text
Can see shared events
Can join/vote/respond
Can use installed circle apps if allowed
Cannot see other circles
Cannot manage people
Cannot install apps
Cannot see private app records
Cannot see Ask history by default
```

Default family adult:

```text
Can see family schedule
Can edit calendar
Can manage preparation
Can use family apps
Can view child learning progress if allowed
Cannot change owner/security unless admin
```

Default child:

```text
Can use assigned learning apps
Can see own schedule if allowed
Cannot see sensitive adult/private events
Cannot manage anything
```

---

# 66. Visibility Levels

Calendar events, app records, Ask logs, and sensitive records need visibility.

Supported visibility levels:

```text
circle
participants
private
admins
custom
```

Rules:

```text
circle
- visible to permitted members of that circle

participants
- visible to participants and owners/admins

private
- visible only to creator/owner or explicitly allowed people

admins
- visible only to owner/admin

custom
- visible only to explicitly allowed users/persons
```

---

# 67. Add Person and Invite Member UX

Family head flow:

```text
Me > Sukapradja Family > People & Access

People
Aldyth       Owner
Spouse       Admin
Baginda      Child
Keyla        Child
Kinara       Child

[ + Add Person ]
[ + Invite Member ]
```

Invite Member wireframe:

```text
Invite Member

Circle:
Sukapradja Family

Invite by:
[ Email / Phone ]

Assign role:
[ Adult ]
[ Admin ]
[ Viewer ]
[ Child ]

Access preset:
[ Full family adult access ]
[ Calendar only ]
[ Child learning only ]
[ View only ]
[ Custom ]

Can see:
[x] Circle calendar
[x] People names
[x] Preparation lists
[ ] Private events
[ ] Ask history
[ ] App permissions
[ ] Backend/settings

Apps:
[x] Times Quest
[x] Clock Trainer
[ ] Padel
[ ] Grocery

Privacy note:
"This member will only access Sukapradja Family.
They will not see your other circles."

[ Send Invite ]
```

Friends circle invite wireframe:

```text
Padel Friends > Members

Members
Aldyth      Owner
Omar        Member
Faisal      Member
Rafi        Member

[ + Invite Friend ]

Invite Friend
Email / Phone

Role:
[ Member ]
[ Admin ]
[ Guest ]

Can:
[x] See shared events
[x] Join padel tournaments
[x] Vote in polls
[ ] Install apps
[ ] Manage members
[ ] See app history

Privacy note:
"This friend will only see Padel Friends.
They will not see your family circle or other circles."

[ Send Invite ]
```

---

# 68. Security and Data Access Rules

Every private object must include `circleId`.

Required:

```text
Calendar_Events.circleId
Calendar_Routines.circleId
Calendar_Exceptions.circleId
AppRecords.circleId
AgentLogs.circleId
Relationships.circleId
CircleApps.circleId
Settings.scopeId when scope = circle
AuditLog.circleId when related to circle
```

Bad pattern:

```js
const allEvents = await DataAPI.list("Calendar_Events");
render(allEvents.filter(event => event.circleId === activeCircleId));
```

Good pattern:

```js
const events = await DataAPI.list("Calendar_Events", {
  circleId: activeCircleId
});
```

Better pattern:

```js
const events = await SecureDataAPI.listForCircle(
  userId,
  activeCircleId,
  "Calendar_Events"
);
```

Hard rule:

```text
Never load all private data and hide unauthorized rows only in the UI.
Queries must be scoped by allowed circle IDs and permissions.
```

---

# 69. Required Permission Engine and Access Guards

The first MVP must include:

```js
const PermissionEngine = {};
const CircleAccessGuard = {};
const VisibilityEngine = {};
```

Required methods:

```js
PermissionEngine.getRole(userId, circleId)
PermissionEngine.getPermissions(userId, circleId)
PermissionEngine.can(userId, circleId, permission)
PermissionEngine.canViewEvent(userId, event)
PermissionEngine.canViewAppRecord(userId, record)
PermissionEngine.canUseApp(userId, circleId, appId)
PermissionEngine.canInvite(userId, circleId)
PermissionEngine.canApplyAskAction(userId, circleId, action)

CircleAccessGuard.getAllowedCircleIds(userId)
CircleAccessGuard.assertCircleAccess(userId, circleId)

VisibilityEngine.canView(userId, circleId, record)
VisibilityEngine.filterVisible(userId, circleId, records)
```

All tabs must use these checks before showing or mutating sensitive data.

---

# 70. Required Privacy Copy in UI

When inviting a user, the UI must clearly state:

```text
You are inviting Omar to Padel Friends.
He will NOT see your Sukapradja Family circle.
He will only see this circle's shared events and apps.
```

For family invites:

```text
You are inviting this person to Sukapradja Family.
They will only see the permissions you allow in this circle.
They will not see your other circles.
```

This copy is required because trust is part of the product.

---

# 71. Firebase and React/TypeScript Notes Required in Files

Every generated file must include migration notes.

## 71.1 `Code.gs`

At the top of `Code.gs`, include:

```text
Firebase scale-up note:
- This Apps Script backend is a prototype adapter.
- UI must call DataAPI, not Apps Script directly.
- Future Firebase replacement should preserve collection names, IDs, circleId scoping, permissions, and visibility checks.
- Firestore security rules must enforce circle membership and permissions server-side.
```

## 71.2 `Kinetik.html`

At the top of `Kinetik.html`, include:

```text
React/TypeScript scale-up note:
- This single-file HTML prototype is organized like future React modules.
- State, DataAPI, PermissionEngine, CalendarEngine, AskActionEngine, AppRegistry, AppBridge, Motion, and KinetikScene should map to separate TypeScript modules later.
- UI components should not depend directly on Google Sheets or Apps Script.
```

## 71.3 Every `App_*.html`

At the top of every app HTML, include:

```text
React/TypeScript app scale-up note:
- This single-file app should later become a React feature module or standalone route.
- It must keep using AppBridge/DataAPI contracts.
- It must not access another circle's data.
- It must store app-specific data in AppRecords using circleId, appId, collection, payloadJson.
```

```
```

---

# 72. Reviewer Revisions v1 (Scope Lock + Seed Data + Settings)

> This section is an **app-reviewer revision pass** layered on top of sections 0–71.
> Everything above remains the long-term reference. **Where this section conflicts with
> an earlier section, this section wins for the v1 build.** It exists to lock scope,
> add missing flows (logout, weekend config, invitation model), and seed real demo data
> so the first build is provably useful, not just beautiful.

---

## 72.0 The One Loop (v1 commitment)

v1 is built around a single provable habit loop. Every tab must serve it.

```text
PRIMARY (retention) — Family coordination:
Open Kinetik → Today shows what needs me (prep, conflicts, who-covers-what)
→ check prep / quick-add → Calendar Board shows the week at a glance.

SECONDARY (growth) — Friends coordination:
Ask/Today → "padel Friday?" → Event Poll → friends respond
→ Calendar event → Padel app runs it → shareable result card.
```

Family is the daily-return engine. Friends is the invite/network engine. Build the
family loop first (it has the seed data below), wire the friends loop second.

---

## 72.1 v1 Scope Lock (cuts from sections 13, 14, 39, 62)

**Ship in v1:**
- Today (triage view)
- Calendar: **Board + Week only**
- Ask (deterministic, preview-before-apply)
- Apps: My Apps grid + Store + **2 apps: Padel Americano, Event Poll**
- Me (profile, people, circles, **logout**, settings)
- Circle switcher, splash, demo login

**Cut from v1 (keep in spec for later):**
- Calendar **Day view** (duplicates Today) and **Month view** (clutters on mobile)
- **Clock Trainer** and **Mini Games** (low-frequency, single-player)
- **macOS traffic-light window system + minimize dock on mobile** (category error on phones — see 72.3)

Reason: fewer screens at unicorn polish beats many at prototype polish.

---

## 72.2 Today vs Calendar ownership (removes the twin-screen problem)

```text
Today    = TRIAGE. Only what needs the user: next event, unprepped items,
           conflicts, unassigned responsibility, "all set ✓" calm state.
           Today never tries to be a full grid.

Calendar = GRID / source of truth. Board (signature) + Week (familiar fallback).
           All adds/edits/routines/exceptions live here.
```

Today reads from CalendarEngine; it does not own schedule data.

### 72.2.1 Today is NON-SCROLLING (fit-to-screen, overflow → pop-up)

The Today / Landing tab MUST fit within a single viewport. **No vertical page scroll.**
If there is more information than fits, it opens in a pop-up — never by scrolling the page.

```text
Layout budget:
- Today fills exactly 100dvh minus top bar and bottom nav (safe-area aware).
- It must hold on iPhone, iPad, desktop, and 16:9 without the page scrolling.
- This reinforces 72.2: Today = TRIAGE (a calm glance), not a long feed.

Fixed regions (always visible, in priority order):
1. Greeting + active circle context        (compact, single line)
2. NEXT event hero card                     (the only large element)
3. Today timeline — CAPPED preview          (show ~3 items max)
4. Preparation — CAPPED summary             (show ~3 items + count)
5. Tomorrow chip                            (one-line: "3 events · 1 prep")
6. Quick Add button                         (fixed)

Overflow rule:
- Any region with more items than its cap shows a "+N more" / "See all" affordance.
- Tapping it opens a POP-UP, not page scroll:
    mobile  → bottom sheet (drag handle, dimmed depth background)
    desktop → centered glass panel
- The pop-up itself may scroll internally; the Today page never does.
- Examples:
    Timeline  → "See full day" opens the day-agenda sheet (or routes to Calendar Day-in-sheet).
    Prep      → "All preparation (6)" opens the prep checklist sheet.
    Tomorrow  → tapping the chip opens a tomorrow-preview sheet.

Empty / calm state:
- If nothing needs the user, show the centered "You're all set today ✓" state —
  still fills the screen, still no scroll.

Responsive sizing:
- Use clamp()-based type/spacing so the same fixed layout breathes from iPhone → 16:9.
- If a smaller device truly cannot fit the caps, REDUCE the caps (e.g. 3 → 2 items)
  rather than allowing the page to scroll.
```

---

## 72.3 App window pattern (replaces macOS metaphor on mobile)

```text
Mobile / iPad:
- Apps open FULL-SCREEN (iOS App-Clip style) with a single "Done" / back gesture.
- No traffic lights, no minimize dock on phones.

Desktop / 16:9 only:
- The glass window + traffic-light controls from section 14 are allowed here.
```

AppBridge contract (section 22) is unchanged.

---

## 72.4 Shareable Artifact (new — the only growth mechanic)

Some actions must produce a beautiful shareable card (image/link) that renders well
when pasted into WhatsApp/iMessage. This is how Kinetik leaves the app and pulls people in.

```text
Required shareable artifacts in v1:
- Padel tournament RESULT card (leaderboard + scores, branded)
- Event Poll INVITE link/card ("Padel Friday? tap to vote")

Implementation note: render to <canvas> → export PNG, or a styled shareable HTML view.
Every share carries a soft Kinetik wordmark.
```

---

## 72.5 Optimistic UI / offline-first (reconciles premium motion with slow Sheets)

```text
Apps Script web apps are slow (≈300ms–2s) and rate-limited.
Therefore:
- Default backendMode = "local-demo" for the first build.
- All writes are OPTIMISTIC: update UI instantly, sync in background, reconcile on response.
- Show subtle sync status (idle / syncing / synced / failed) — never a blocking spinner.
- GoogleSheetsAdapter writes queue + retry; failures surface as a quiet toast, not a wall.
```

---

## 72.6 Invitation model (FIRST BUILD vs NEXT BUILD)

This refines sections 63–70.

```text
FIRST BUILD (now):
- "Invite Member" can ONLY add a person who has ALREADY created a Kinetik account.
- Flow: enter the existing user's username/handle → assign role + access preset →
  they appear in the circle immediately.
- There is NO email/SMS invite link yet. "Add Person" (profile only, no login)
  remains available exactly as in section 64.

NEXT BUILD (later):
- "Invite Member" supports inviting by EMAIL: system sends an invite LINK,
  the recipient creates/links an account, then joins the circle with the assigned
  role + access preset.
- Pending-invite state, link expiry, and accept/decline flow are added then.

The privacy copy (section 70) is required in BOTH builds.
```

UI must label the first-build limitation honestly, e.g. *"Invite by account (email invites coming soon)."*

---

## 72.7 Ask input scaffolding + voice (refines section 38/52)

```text
- Because the parser is deterministic, GUIDE input with a prompt-builder:
  tappable chips → "Add [person] [activity] every [day] at [time]".
- Ask KPI = actions previewed & confirmed, not messages sent.
- Voice → preview card is a v1.1 hero (webkitSpeechRecognition MVP), not "future placeholder".
```

---

## 72.8 Golden-path demo (build tunes to this 60 seconds)

```text
1. Cold open → splash resolves into "Sukapradja Family · 3 today · next: Kinara Padel 8am".
2. Today: tap "Prepared ✓" on a prep item → ring/streak pulse.
3. Switch circle (Family → Padel Friends): background re-tints, all tabs reload.
4. Ask: "padel Friday 8pm?" → Event Poll preview → confirm.
5. Calendar Board: the new event appears in the right cell.
6. Apps → Padel → run a round → share result card.
```

---

## 72.9 Me tab — structure + LOGOUT (was missing)

Section 39.8 / 62.9 are updated. The Me tab MUST include logout.

```text
Me
┌─────────────────────────────┐
│ ◉ Aldyth Sukapradja          │  ← profile card (tap = edit)
│   Owner · Sukapradja Family  │
├─ My Circles ─────────────────┤
│ Sukapradja Family   Owner    │
│ Padel Friends       Owner    │
│ Doha Friends        Member   │
├─ People & Access ────────────┤
│ avatars + roles + relations  │
│ [ + Add Person ] [ Invite ]  │
├─ Settings ───────────────────┤
│ Theme: Auto / Light / Dark   │
│ Weekend: Fri–Sat (see 72.10) │
│ App Permissions              │
│ Backup / Export              │
├─ Advanced (quiet footer) ────┤
│ Backend: Demo / Google Sheets│
│ Sync status                  │
├──────────────────────────────┤
│ [ Log out ]   ← REQUIRED      │
│  (clears session, returns to  │
│   Login; emits auth:logout)   │
└──────────────────────────────┘
```

Logout rules:
```text
- Always visible at the bottom of Me (destructive-styled, not red-alarming).
- Confirms with a lightweight sheet: "Log out of Kinetik?"
- Emits auth:logout, clears currentUserId/currentPersonId/activeCircleId from KinetikState,
  returns to Login screen. Does NOT delete any circle/app data.
```

---

## 72.10 Settings — Weekend configuration (new)

Kinetik supports different weekend conventions (user is in the Middle East).

```text
Setting: weekendDays   (scope = user, overridable per circle)
Presets:
- "sat-sun"   Saturday + Sunday   (Western default)
- "fri-sat"   Friday + Saturday   (Middle East)   ← DEFAULT for this build
- "fri-only"  Friday
- "custom"    pick any days

Effects:
- Calendar Week/Board weekend columns are shaded accordingly.
- Week start follows the convention (Fri–Sat weekend → week starts Sunday).
- Today/Tomorrow "weekend" framing respects it.

Stored in Settings: { scope:"user", key:"weekendDays", valueJson:"fri-sat" }
```

Sukapradja Family demo ships with **weekendDays = "fri-sat"**.

---

## 72.11 Seed / Demo Data — Sukapradja Family

Backend: `backendMode = "local-demo"` seeds this on first run.
Circle: `circle_family_sukapradja` (type: family, owner: person_aldyth).

### People

```text
person_aldyth   Aldyth   role: owner/adult   (responsible adult, default responsiblePersonId)
person_baginda  Baginda  role: child
person_keyla    Keyla    role: child
person_kinara   Kinara   role: child
```

### Weekly routines — Baginda & Keyla

> Transcribed from the family whiteboard ("Monthly Planner", weekly pattern).
> Times in 24h. Each day's **upper cluster = Baginda**, **lower cluster = Keyla**.
> Items marked **(?)** were ambiguous in the handwriting — please verify/correct.

**BAGINDA** (`participant: person_baginda`, `responsible: person_aldyth`)

| Day | Activity | Time | Coach/Teacher |
|-----|----------|------|---------------|
| Mon | Gitar (guitar) | 14:15–15:00 | Cik Angga |
| Mon | Ngaji | 14:30–16:30 | Miss Saida |
| Mon | Tennis | 17:00–18:00 | Mr Wael |
| Tue | Gitar (guitar) | 14:15–15:00 | Cik Angga |
| Tue | Basket | 17:00–18:00 | Pro-Sport |
| Wed | Math | 15:00–16:00 | Miss Rani |
| Wed | Ngaji | 16:30–17:30 | Miss Saida |
| Thu | Eng (English) | 15:00–16:30 | Miss Ratu |
| Thu | Tennis | 17:00–18:00 | Mr Wael |
| Fri | Ingatan Gajah | 09:15–10:15 | — |
| Fri | Ingatan Gajah | 12:30–14:00 | — |
| Sat | Math | 09:00–10:00 | Miss Rani |
| Sat | Swim | 13:00–14:00 | Coach Sae |
| Sun | Basket (?) | 17:00–18:00 | Pro-Sport |

**KEYLA** (`participant: person_keyla`, `responsible: person_aldyth`)

| Day | Activity | Time | Coach/Teacher |
|-----|----------|------|---------------|
| Mon | Math | 14:15–15:15 | Miss Risa |
| Mon | Tennis | 14:50–16:50 | Mr Wael |
| Mon | Gymnastic | 17:15–18:15 | Ms Diana |
| Tue | Ngaji | 15:00–16:00 | Miss Alvy |
| Tue | Math | 16:15–17:15 | Miss Rani |
| Wed | Eng (English) | 15:00–16:00 | Miss Ratu |
| Thu | Math | 14:30–15:30 | Miss Risa |
| Thu | Tennis | 15:50–16:55 | Mr Wael |
| Thu | Gymnastics | 17:15–18:15 | Miss Diana |
| Fri | Ngaji | 15:00–16:00 | (?) |
| Sat | Ngaji | 15:00–16:00 | Miss Ratu |
| Sun | Gym | 16:30–17:30 | Miss Ratu (?) |

### Weekly routines — Kinara (from instruction, not whiteboard)

**KINARA** (`participant: person_kinara`, `responsible: person_aldyth`)

| Day | Activity | Time | Notes |
|-----|----------|------|-------|
| Mon | Gym | 08:00–09:00 | |
| Tue | Padel | 08:00–09:00 | |
| Fri | Gym | 08:00–09:00 | |
| Sun | Padel | 08:00–09:00 | |

### Family routine — Family Time (all members)

```text
title: Family Time
participants: [person_aldyth, person_baginda, person_keyla, person_kinara]
dayOfWeek: Friday
startTime: 16:00
endTime: 24:00  (midnight)
category: family
visibility: circle
```

### Notes for the builder

```text
- Store all of the above as Calendar_Routines (recurring weekly), NOT one-off events.
- Several Monday/overlapping items intentionally overlap in time (e.g. Baginda Gitar 14:15
  vs Ngaji 14:30). Keep them — they are perfect to demo CalendarEngine.detectConflicts()
  and the Today "conflict" surfacing.
- Kinara's 08:00 padel/gym sits before the kids' afternoon classes — good for showing a
  full-day Board.
- Family Time spans into the Friday weekend (weekendDays = fri-sat) — good for showing
  weekend shading + an all-participants routine.
```

---

## 72.12 Summary of build-spec changes in this revision

```text
ADDED:
- The One Loop commitment (family retention + friends growth)
- v1 scope lock (cut Day/Month views, Clock Trainer, Mini Games, mobile macOS windows)
- Today=triage vs Calendar=grid ownership rule
- Today is NON-SCROLLING / fit-to-screen; overflow opens pop-ups, not page scroll (72.2.1)
- Full-screen App-Clip app pattern on mobile (macOS windows desktop-only)
- Shareable Artifact requirement (Padel result card, Event Poll invite)
- Optimistic UI / offline-first + local-demo-default
- Invitation model split: first build = account-only invite; next build = email invite link
- Ask prompt-builder scaffolding + voice as v1.1 hero
- 60-second golden-path demo
- Me tab LOGOUT (was missing) + reorganized Me structure
- Weekend configuration setting (fri-sat default for Middle East)
- Full Sukapradja Family seed data (Baginda, Keyla, Kinara, Family Time)

CHANGED (v1 overrides):
- Calendar modes: Board + Week only
- Apps in v1: Padel Americano + Event Poll (Times Quest later)

---

## 72.13 v1 Build To-Do (execution order)

```text
[1] Kinetik.html            — full shell: splash, login (Aldyth/Omar personas), circle
                              switcher, Today (non-scroll + pop-ups), Calendar (Board+Week,
                              fri-sat weekend), Ask (deterministic + preview-before-apply),
                              Apps (grid + store + full-screen app host), Me (people,
                              settings, weekend config, LOGOUT), theme light/dark/auto,
                              Three.js bg, GSAP motion, LocalDemoAdapter (localStorage),
                              GoogleSheetsAdapter, seeded Sukapradja data (72.11)
[2] App_PadelAmericano.html — players, courts, americano rounds, scores, leaderboard,
                              history, share result card, embedded + standalone
[3] App_EventPoll.html      — create poll, vote, results, best option, share invite
[4] Code.gs                 — Apps Script generic CRUD + setup function for all sheets
[5] PWA_SW.js + manifests   — kinetik/padel/poll manifests + icons + service worker
[6] README_BUILD_STANDARD.md— deploy guide (GitHub Pages + Apps Script) + standards
```

---

## 72.14 Design Revision v1.1 (post first-build reviewer pass)

> Applied after reviewing the running app on the 5 main pages. These override earlier
> wireframes where they conflict.

```text
GLOBAL
- App starts in LIGHT mode by default (theme still switchable Auto/Light/Dark in Me).
- Light-mode text tokens darkened for contrast (--text #0d1426, --dim .7, --faint .48).
- theme-color meta syncs with active theme.

TODAY (fixes cut-off content)
- Preparation section REMOVED from Today (prep lives in the hero card "Prepared ✓"
  and in the event detail sheet). Today is now: greeting → NEXT hero → Tomorrow chip
  (directly under the hero) → capped Today timeline (3–4 items adaptive to screen
  height) → quick-add FAB. Nothing may clip mid-row.
- Event detail sheet now includes an EDIT button (title/date/start/end; routine edits
  apply to every week, event edits to that event).

CALENDAR BOARD (no horizontal scroll)
- Board is TRANSPOSED: columns = people (avatar headers), rows = 7 days.
  Fits the viewport with zero left/right scrolling on phones.
- Weekend ROWS are tinted; today's row label uses the accent; event chips are compact
  (truncated title + time, person-colored left border, amber when clashing).

ASK
- "Clear chat" button (top-right) resets the conversation to the orb + quick prompts.
- Responses are structured CARDS, not plain text: schedule summaries render as
  calendar-card rows (time · color bar · title · person); person-week replies group
  by day with day headers; prep replies render as a checklist-style card.
- Composer sits just above the bottom nav (was floating too high).

APPS (iPhone + App Store feel)
- My Apps: clean iPhone-home-screen grid (no card chrome, squircle gradient icons,
  label under icon).
- Kinetik Store sits BELOW with App Store editorial structure: big "Kinetik Store"
  title → full-bleed FEATURED gradient banner (first uninstalled live app) with
  GET button → app list rows with GET / OPEN / SOON pills and a small
  "Remove from circle" text action for installed apps.
- Copy clarifies: "Apps install per circle · removing keeps your data."
```
```
```
