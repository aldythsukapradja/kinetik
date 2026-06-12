/*
KINETIK GOOGLE SHEETS BACKEND v1.0

PRODUCT: Kinetik — private life app for Family + Friends circles. Plans. People. Play.
FRONTEND: Kinetik.html main shell + App_*.html modular apps (embedded or standalone PWA).
BACKEND: Google Sheets via this Apps Script web app. Generic CRUD, JSON responses.

CORE SHEETS (run setupKinetik() once to create them):
Users People Circles CircleMembers Relationships Calendar_Routines Calendar_Events
Calendar_Exceptions AppCatalog CircleApps AppRecords AgentLogs Settings AuditLog

RULES:
1. Generic CRUD endpoints only. 2. circleId, never familyId. 3. personId, never memberId.
4. App data goes in AppRecords. 5. No production passwords. 6. Consistent JSON envelope.
7. Keep replaceable by Firebase: stable ids, circleId scoping, createdAt/updatedAt.

Firebase scale-up note:
- This Apps Script backend is a prototype adapter. UI must call DataAPI, not this directly.
- Future Firebase replacement preserves collection names, IDs, circleId scoping, permissions.
- Firestore security rules must enforce circle membership server-side.

DEPLOY:
1. Create a Google Sheet, open Extensions > Apps Script, paste this file.
2. Run setupKinetik() once (authorize when prompted).
3. Deploy > New deployment > Web app > Execute as: Me, Access: Anyone.
4. Paste the web app URL into Kinetik > Me > Advanced > Backend: Google Sheets.

API:
GET  ?action=list&collection=Calendar_Events&circleId=c_family
GET  ?action=get&collection=People&id=p_aldyth
POST body JSON {action:"create"|"update"|"remove", collection, id, payload}
All responses: {ok:true, items:[...]} or {ok:false, error:"..."}
*/

var SHEETS = [
  "Users","People","Circles","CircleMembers","Relationships",
  "Calendar_Routines","Calendar_Events","Calendar_Exceptions",
  "AppCatalog","CircleApps","AppRecords","AgentLogs","Settings","AuditLog"
];

var HEADERS = {
  Users:["id","username","displayName","email","passwordDemo","avatar","defaultPersonId","createdAt","updatedAt","active"],
  People:["id","displayName","avatar","color","birthYear","notes","createdByUserId","createdAt","updatedAt","active"],
  Circles:["id","name","type","ownerUserId","icon","color","description","createdAt","updatedAt","active"],
  CircleMembers:["id","circleId","personId","userId","role","permission","joinedAt","active"],
  Relationships:["id","circleId","fromPersonId","toPersonId","relationshipType","reverseRelationshipType","notes","createdAt","active"],
  Calendar_Routines:["id","circleId","title","participantPersonIdsJson","responsiblePersonId","dayOfWeek","startTime","endTime","category","location","teacherCoach","preparationJson","repeatRule","notes","createdAt","updatedAt","active"],
  Calendar_Events:["id","circleId","title","date","startTime","endTime","participantPersonIdsJson","responsiblePersonId","category","location","preparationJson","notes","createdAt","updatedAt","active"],
  Calendar_Exceptions:["id","circleId","routineId","date","action","newStartTime","newEndTime","reason","createdAt","updatedAt"],
  AppCatalog:["id","name","shortName","file","category","status","version","tagline","description","iconType","gradient","defaultInstalledForCircleTypesJson","allowedCircleTypesJson","pwaManifest","createdAt","updatedAt","active"],
  CircleApps:["id","circleId","appId","installed","order","pinned","allowedPersonIdsJson","settingsJson","installedAt","updatedAt"],
  AppRecords:["id","circleId","appId","collection","ownerPersonId","payloadJson","createdAt","updatedAt","deleted","version"],
  AgentLogs:["id","circleId","userId","personId","prompt","intent","responseType","artifactJson","actionJson","createdAt"],
  Settings:["id","scope","scopeId","key","valueJson","updatedAt"],
  AuditLog:["id","circleId","userId","action","targetCollection","targetId","detailJson","createdAt"]
};

/* ---------- setup ---------- */
function setupKinetik() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  SHEETS.forEach(function (name) {
    var sh = ss.getSheetByName(name) || ss.insertSheet(name);
    var head = HEADERS[name];
    sh.getRange(1, 1, 1, head.length).setValues([head]).setFontWeight("bold");
    sh.setFrozenRows(1);
  });
}

/* ---------- helpers ---------- */
function out(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
function sheetOf(collection) {
  if (SHEETS.indexOf(collection) === -1) throw new Error("Unknown collection: " + collection);
  var sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(collection);
  if (!sh) throw new Error("Sheet missing: " + collection + " (run setupKinetik)");
  return sh;
}
function readAll(collection) {
  var sh = sheetOf(collection), vals = sh.getDataRange().getValues();
  if (vals.length < 2) return [];
  var head = vals[0], rows = [];
  for (var i = 1; i < vals.length; i++) {
    var o = {};
    for (var j = 0; j < head.length; j++) o[head[j]] = vals[i][j];
    if (o.id !== "" && o.id != null) { o._row = i + 1; rows.push(o); }
  }
  return rows;
}
function rowFromObj(collection, obj) {
  return HEADERS[collection].map(function (h) {
    var v = obj[h];
    if (v == null) return "";
    if (typeof v === "object") return JSON.stringify(v);
    return v;
  });
}
function clean(rows) {
  return rows.map(function (r) { var c = {}; for (var k in r) if (k !== "_row") c[k] = r[k]; return c; });
}

/* ---------- CRUD ---------- */
function listItems(collection, filters) {
  var rows = readAll(collection);
  if (filters) rows = rows.filter(function (r) {
    return Object.keys(filters).every(function (k) { return String(r[k]) === String(filters[k]); });
  });
  return clean(rows);
}
function createItem(collection, payload) {
  payload.id = payload.id || collection.slice(0, 2).toLowerCase() + "_" + Utilities.getUuid().slice(0, 8);
  payload.createdAt = payload.createdAt || new Date().toISOString();
  payload.updatedAt = new Date().toISOString();
  sheetOf(collection).appendRow(rowFromObj(collection, payload));
  return payload;
}
function updateItem(collection, id, payload) {
  var rows = readAll(collection);
  for (var i = 0; i < rows.length; i++) {
    if (String(rows[i].id) === String(id)) {
      var merged = {};
      for (var k in rows[i]) if (k !== "_row") merged[k] = rows[i][k];
      for (var k2 in payload) merged[k2] = payload[k2];
      merged.updatedAt = new Date().toISOString();
      sheetOf(collection).getRange(rows[i]._row, 1, 1, HEADERS[collection].length)
        .setValues([rowFromObj(collection, merged)]);
      return merged;
    }
  }
  throw new Error("Not found: " + id);
}
function removeItem(collection, id) {
  var rows = readAll(collection);
  for (var i = 0; i < rows.length; i++) {
    if (String(rows[i].id) === String(id)) { sheetOf(collection).deleteRow(rows[i]._row); return true; }
  }
  return false;
}
function audit(action, collection, id) {
  try {
    createItem("AuditLog", { circleId: "", userId: "", action: action, targetCollection: collection, targetId: id || "", detailJson: "" });
  } catch (e) { /* never block on audit */ }
}

/* ---------- web app entry points ---------- */
function doGet(e) {
  try {
    var p = e.parameter || {};
    var action = p.action || "list";
    if (action === "list") {
      var filters = {};
      Object.keys(p).forEach(function (k) { if (k !== "action" && k !== "collection") filters[k] = p[k]; });
      return out({ ok: true, items: listItems(p.collection, Object.keys(filters).length ? filters : null) });
    }
    if (action === "get") {
      var item = listItems(p.collection, { id: p.id })[0] || null;
      return out({ ok: true, items: item ? [item] : [] });
    }
    if (action === "ping") return out({ ok: true, items: [{ pong: new Date().toISOString() }] });
    return out({ ok: false, error: "Unknown GET action" });
  } catch (err) { return out({ ok: false, error: String(err) }); }
}

function doPost(e) {
  try {
    var b = JSON.parse(e.postData.contents || "{}");
    var col = b.collection, action = b.action;
    /* shell sends "create"/"update"/"remove"; collection names map 1:1 where needed */
    var map = { routines: "Calendar_Routines", events: "Calendar_Events", exceptions: "Calendar_Exceptions",
                circleApps: "CircleApps", appRecords: "AppRecords", circles: "Circles",
                circleMembers: "CircleMembers", people: "People", users: "Users" };
    if (map[col]) col = map[col];
    if (action === "create") { var c = createItem(col, normalize(col, b.payload)); audit("create", col, c.id); return out({ ok: true, items: [c] }); }
    if (action === "update") { var u = updateItem(col, b.id, normalize(col, b.payload)); audit("update", col, b.id); return out({ ok: true, items: [u] }); }
    if (action === "remove") { removeItem(col, b.id); audit("remove", col, b.id); return out({ ok: true, items: [] }); }
    if (action === "list") return out({ ok: true, items: listItems(col, b.filters || null) });
    return out({ ok: false, error: "Unknown POST action" });
  } catch (err) { return out({ ok: false, error: String(err) }); }
}

/* frontend objects use arrays/objects; sheets store *Json columns */
function normalize(collection, payload) {
  var p = {};
  for (var k in payload) p[k] = payload[k];
  if (p.participantPersonIds) { p.participantPersonIdsJson = JSON.stringify(p.participantPersonIds); delete p.participantPersonIds; }
  if (p.preparation) { p.preparationJson = JSON.stringify(p.preparation); delete p.preparation; }
  if (p.payload) { p.payloadJson = JSON.stringify(p.payload); delete p.payload; }
  if (p.accent) { p.color = JSON.stringify(p.accent); delete p.accent; }
  delete p._row;
  return p;
}
