import { m2 as n, bW as A, aj as w, O as t, P as i, b6 as K, W as I, m3 as j, Q as g, bX as N, e9 as p, a3 as z, eH as O, b5 as Q, dY as F } from "./main-Bnvk3STL.js";
const X = { esriCentimeters: "centimeters", esriDecimalDegrees: "decimal-degrees", esriDecimeters: "decimeters", esriFeet: "feet", esriInches: "inches", esriKilometers: "kilometers", esriMeters: "meters", esriMiles: "miles", esriMillimeters: "millimeters", esriNauticalMiles: "nautical-miles", esriPoints: "points", esriUnknownUnits: "unknown", esriYards: "yards" }, $ = n()(X);
n()({ ...X, esriIntFeet: "international-feet", esriIntInches: "international-inches", esriIntMiles: "international-miles", esriIntNauticalMiles: "international-nautical-miles", esriIntYards: "international-yards" });
n()({ esriAcres: "international-acres", esriAcresUS: "us-acres", esriAres: "ares", esriHectares: "hectares", esriSquareCentimeters: "square-centimeters", esriSquareDecimeters: "square-decimeters", esriSquareFeet: "square-international-feet", esriSquareFeetUS: "square-us-feet", esriSquareInches: "square-international-inches", esriSquareInchesUS: "square-us-inches", esriSquareKilometers: "square-kilometers", esriSquareMeters: "square-meters", esriSquareMiles: "square-international-miles", esriSquareMilesUS: "square-us-miles", esriSquareMillimeters: "square-millimeters", esriSquareYards: "square-international-yards", esriSquareYardsUS: "square-us-yards", esriUnknownAreaUnits: "unknown" });
const ne = n()({ esriNAUCentimeters: "centimeters", esriNAUDecimalDegrees: "decimal-degrees", esriNAUDecimeters: "decimeters", esriNAUFeet: "feet", esriNAUInches: "inches", esriNAUKilometers: "kilometers", esriNAUMeters: "meters", esriNAUMiles: "miles", esriNAUMillimeters: "millimeters", esriNAUNauticalMiles: "nautical-miles", esriNAUPoints: "points", esriNAUYards: "yards" });
n()({ esriNAUDays: "days", esriNAUHours: "hours", esriNAUMinutes: "minutes", esriNAUSeconds: "seconds" });
const le = n()({ esriNAUCentimeters: "centimeters", esriNAUDecimalDegrees: "decimal-degrees", esriNAUDecimeters: "decimeters", esriNAUFeet: "feet", esriNAUInches: "inches", esriNAUKilometers: "kilometers", esriNAUMeters: "meters", esriNAUMiles: "miles", esriNAUMillimeters: "millimeters", esriNAUNauticalMiles: "nautical-miles", esriNAUPoints: "points", esriNAUYards: "yards", esriNAUDays: "days", esriNAUHours: "hours", esriNAUMinutes: "minutes", esriNAUSeconds: "seconds", esriNAUKilometersPerHour: "kilometers-per-hour", esriNAUMilesPerHour: "miles-per-hour", esriNAUUnknown: "unknown" }), ue = n()({ esriDOTComplete: "complete", esriDOTCompleteNoEvents: "complete-no-events", esriDOTFeatureSets: "featuresets", esriDOTInstructionsOnly: "instructions-only", esriDOTStandard: "standard", esriDOTSummaryOnly: "summary-only" }), pe = n()({ esriNAOutputLineNone: "none", esriNAOutputLineStraight: "straight", esriNAOutputLineTrueShape: "true-shape", esriNAOutputLineTrueShapeWithMeasure: "true-shape-with-measure" });
n()({ esriNAOutputPolygonNone: "none", esriNAOutputPolygonSimplified: "simplified", esriNAOutputPolygonDetailed: "detailed" });
const ee = n()({ esriNFSBAllowBacktrack: "allow-backtrack", esriNFSBAtDeadEndsOnly: "at-dead-ends-only", esriNFSBNoBacktrack: "no-backtrack", esriNFSBAtDeadEndsAndIntersections: "at-dead-ends-and-intersections" });
n()({ esriNATravelDirectionFromFacility: "from-facility", esriNATravelDirectionToFacility: "to-facility" });
n()({ esriNATimeOfDayNotUsed: "not-used", esriNATimeOfDayUseAsStartTime: "start", esriNATimeOfDayUseAsEndTime: "end" });
const te = n()({ AUTOMOBILE: "automobile", TRUCK: "truck", WALK: "walk", OTHER: "other" }), m = n()({ 0: "either-side-of-vehicle", 1: "right-side-of-vehicle", 2: "left-side-of-vehicle", 3: "no-u-turn" }, { useNumericKeys: !0 }), E = n()({ 0: "stop", 1: "waypoint", 2: "break" }, { useNumericKeys: !0 }), D = n()({ 0: "ok", 1: "not-located", 2: "network-element-not-located", 3: "element-not-traversable", 4: "invalid-field-values", 5: "not-reached", 6: "time-window-violation", 7: "not-located-on-closest" }, { useNumericKeys: !0 }), k = n()({ 1: "right", 2: "left" }, { useNumericKeys: !0 }), h = n()({ 0: "restriction", 1: "scaled-cost", 2: "added-cost" }, { useNumericKeys: !0 }), W = n()({ 0: "permit", 1: "restrict" }, { useNumericKeys: !0 }), L = n()({ 1: "header", 50: "arrive", 51: "depart", 52: "straight", 100: "on-ferry", 101: "off-ferry", 102: "central-fork", 103: "roundabout", 104: "u-turn", 150: "door", 151: "stairs", 152: "elevator", 153: "escalator", 154: "pedestrian-ramp", 200: "left-fork", 201: "left-ramp", 202: "clockwise-roundabout", 203: "left-handed-u-turn", 204: "bear-left", 205: "left-turn", 206: "sharp-left", 207: "left-turn-and-immediate-left-turn", 208: "left-turn-and-immediate-right-turn", 300: "right-fork", 301: "right-ramp", 302: "counter-clockwise-roundabout", 303: "right-handed-u-turn", 304: "bear-right", 305: "right-turn", 306: "sharp-right", 307: "right-turn-and-immediate-left-turn", 308: "right-turn-and-immediate-right-turn", 400: "up-elevator", 401: "up-escalator", 402: "up-stairs", 500: "down-elevator", 501: "down-escalator", 502: "down-stairs", 1e3: "general-event", 1001: "landmark", 1002: "time-zone-change", 1003: "traffic-event", 1004: "scaled-cost-barrier-event", 1005: "boundary-crossing", 1006: "restriction-violation", 1007: "lane" }, { useNumericKeys: !0 }), J = n()({ 0: "unknown", 1: "segment", 2: "maneuver-segment", 3: "restriction-violation", 4: "scaled-cost-barrier", 5: "heavy-traffic", 6: "slow-traffic", 7: "moderate-traffic" }, { useNumericKeys: !0 }), de = n()({ "NA Campus": "campus", "NA Desktop": "desktop", "NA Navigation": "navigation" }), ie = n()({ Kilometers: "kilometers", Miles: "miles", Meters: "meters" }, { ignoreUnknown: !1 }), re = n()({ Minutes: "minutes", TimeAt1KPH: "time-at-1-kph", TravelTime: "travel-time", TruckMinutes: "truck-minutes", TruckTravelTime: "truck-travel-time", WalkTime: "walk-time" }, { ignoreUnknown: !1 }), C = n()({ Kilometers: "kilometers", Miles: "miles", Meters: "meters", Minutes: "minutes", TimeAt1KPH: "time-at-1-kph", TravelTime: "travel-time", TruckMinutes: "truck-minutes", TruckTravelTime: "truck-travel-time", WalkTime: "walk-time" }, { ignoreUnknown: !1 }), Y = n()({ "Any Hazmat Prohibited": "any-hazmat-prohibited", "Avoid Carpool Roads": "avoid-carpool-roads", "Avoid Express Lanes": "avoid-express-lanes", "Avoid Ferries": "avoid-ferries", "Avoid Gates": "avoid-gates", "Avoid Limited Access Roads": "avoid-limited-access-roads", "Avoid Private Roads": "avoid-private-roads", "Avoid Roads Unsuitable for Pedestrians": "avoid-roads-unsuitable-for-pedestrians", "Avoid Stairways": "avoid-stairways", "Avoid Toll Roads": "avoid-toll-roads", "Avoid Toll Roads for Trucks": "avoid-toll-roads-for-trucks", "Avoid Truck Restricted Roads": "avoid-truck-restricted-roads", "Avoid Unpaved Roads": "avoid-unpaved-roads", "Axle Count Restriction": "axle-count-restriction", "Driving a Bus": "driving-a-bus", "Driving a Taxi": "driving-a-taxi", "Driving a Truck": "driving-a-truck", "Driving an Automobile": "driving-an-automobile", "Driving an Emergency Vehicle": "driving-an-emergency-vehicle", "Height Restriction": "height-restriction", "Kingpin to Rear Axle Length Restriction": "kingpin-to-rear-axle-length-restriction", "Length Restriction": "length-restriction", "Preferred for Pedestrians": "preferred-for-pedestrians", "Riding a Motorcycle": "riding-a-motorcycle", "Roads Under Construction Prohibited": "roads-under-construction-prohibited", "Semi or Tractor with One or More Trailers Prohibited": "semi-or-tractor-with-one-or-more-trailers-prohibited", "Single Axle Vehicles Prohibited": "single-axle-vehicles-prohibited", "Tandem Axle Vehicles Prohibited": "tandem-axle-vehicles-prohibited", "Through Traffic Prohibited": "through-traffic-prohibited", "Truck with Trailers Restriction": "truck-with-trailers-restriction", "Use Preferred Hazmat Routes": "use-preferred-hazmat-routes", "Use Preferred Truck Routes": "use-preferred-truck-routes", Walking: "walking", "Weight Restriction": "weight-restriction" }, { ignoreUnknown: !1 }), me = n()({ esriSpatialRelIntersects: "intersects", esriSpatialRelContains: "contains", esriSpatialRelCrosses: "crosses", esriSpatialRelEnvelopeIntersects: "envelope-intersects", esriSpatialRelIndexIntersects: "index-intersects", esriSpatialRelOverlaps: "overlaps", esriSpatialRelTouches: "touches", esriSpatialRelWithin: "within", esriSpatialRelRelation: "relation" }), ce = n()({ esriGeometryPoint: "point", esriGeometryPolyline: "polyline", esriGeometryPolygon: "polygon", esriGeometryEnvelope: "envelope", esriGeometryMultipoint: "multipoint" }), ye = n()({ esriNAUTCost: "cost", esriNAUTDescriptor: "descriptor", esriNAUTRestriction: "restriction", esriNAUTHierarchy: "hierarchy" }), Te = n()({ esriDSTAltName: "alt-name", esriDSTArrive: "arrive", esriDSTBranch: "branch", esriDSTCrossStreet: "cross-street", esriDSTCumulativeLength: "cumulative-length", esriDSTDepart: "depart", esriDSTEstimatedArrivalTime: "estimated-arrival-time", esriDSTExit: "exit", esriDSTGeneral: "general", esriDSTLength: "length", esriDSTServiceTime: "service-time", esriDSTStreetName: "street-name", esriDSTSummary: "summary", esriDSTTime: "time", esriDSTTimeWindow: "time-window", esriDSTToward: "toward", esriDSTViolationTime: "violation-time", esriDSTWaitTime: "wait-time" });
var P;
let y = P = class extends A(N) {
  constructor(e) {
    super(e), this.directionLineType = null, this.directionPointId = null, this.distance = null, this.duration = null, this.fromLevel = null, this.geometry = null, this.objectId = null, this.popupTemplate = null, this.symbol = null, this.toLevel = null, this.type = "direction-line";
  }
  static fromGraphic(e) {
    return new P({ directionLineType: J.fromJSON(e.attributes.DirectionLineType), directionPointId: e.attributes.DirectionPointID, distance: e.attributes.Meters, duration: e.attributes.Minutes, fromLevel: e.attributes.FromLevel ?? null, geometry: e.geometry, objectId: e.attributes.ObjectID ?? e.attributes.__OBJECTID, popupTemplate: e.popupTemplate, symbol: e.symbol, toLevel: e.attributes.ToLevel ?? null });
  }
  toGraphic() {
    const e = { ObjectID: this.objectId, DirectionLineType: this.directionLineType != null ? J.toJSON(this.directionLineType) : null, DirectionPointID: this.directionPointId, Meters: this.distance, Minutes: this.duration };
    return this.fromLevel != null && (e.FromLevel = this.fromLevel), this.toLevel != null && (e.ToLevel = this.toLevel), new w({ geometry: this.geometry, attributes: e, symbol: this.symbol, popupTemplate: this.popupTemplate });
  }
};
y.fields = [{ name: "ObjectID", alias: "ObjectID", type: "esriFieldTypeOID" }, { name: "DirectionLineType", alias: "Line Type", type: "esriFieldTypeInteger" }, { name: "DirectionPointID", alias: "Direction Point ID", type: "esriFieldTypeInteger" }, { name: "FromLevel", alias: "From Level", type: "esriFieldTypeInteger" }, { name: "Meters", alias: "Meters", type: "esriFieldTypeDouble" }, { name: "Minutes", alias: "Minutes", type: "esriFieldTypeDouble" }, { name: "ToLevel", alias: "To Level", type: "esriFieldTypeInteger" }], t([i({ type: J.apiValues, json: { read: { source: "attributes.DirectionLineType", reader: J.read } } })], y.prototype, "directionLineType", void 0), t([i({ json: { read: { source: "attributes.DirectionPointID" } } })], y.prototype, "directionPointId", void 0), t([i({ json: { read: { source: "attributes.Meters" } } })], y.prototype, "distance", void 0), t([i({ json: { read: { source: "attributes.Minutes" } } })], y.prototype, "duration", void 0), t([i({ json: { read: { source: "attributes.FromLevel" } } })], y.prototype, "fromLevel", void 0), t([i({ type: K })], y.prototype, "geometry", void 0), t([i({ json: { read: { source: "attributes.ObjectID" } } })], y.prototype, "objectId", void 0), t([i({ type: I })], y.prototype, "popupTemplate", void 0), t([i({ types: j })], y.prototype, "symbol", void 0), t([i({ json: { read: { source: "attributes.ToLevel" } } })], y.prototype, "toLevel", void 0), t([i({ readOnly: !0, json: { read: !1 } })], y.prototype, "type", void 0), y = P = t([g("esri.rest.support.DirectionLine")], y);
const be = y;
var R;
let l = R = class extends A(N) {
  constructor(e) {
    super(e), this.alternateName = null, this.arrivalTime = null, this.arrivalTimeOffset = null, this.azimuth = null, this.branchName = null, this.directionPointType = null, this.displayText = null, this.exitName = null, this.geometry = null, this.intersectingName = null, this.level = null, this.name = null, this.objectId = null, this.popupTemplate = null, this.sequence = null, this.shortVoiceInstruction = null, this.stopId = null, this.symbol = null, this.towardName = null, this.type = "direction-point", this.voiceInstruction = null;
  }
  readArrivalTime(e, r) {
    return r.attributes.ArrivalTime != null ? new Date(r.attributes.ArrivalTime) : null;
  }
  static fromGraphic(e) {
    return new R({ alternateName: e.attributes.AlternateName ?? null, arrivalTime: e.attributes.ArrivalTime != null ? new Date(e.attributes.ArrivalTime) : null, arrivalTimeOffset: e.attributes.ArrivalUTCOffset ?? null, azimuth: e.attributes.Azimuth ?? null, branchName: e.attributes.BranchName ?? null, directionPointType: L.fromJSON(e.attributes.DirectionPointType), displayText: e.attributes.DisplayText ?? null, exitName: e.attributes.ExitName ?? null, geometry: e.geometry, intersectingName: e.attributes.IntersectingName ?? null, level: e.attributes.Level ?? null, name: e.attributes.Name ?? null, objectId: e.attributes.ObjectID ?? e.attributes.__OBJECTID, popupTemplate: e.popupTemplate, sequence: e.attributes.Sequence, shortVoiceInstruction: e.attributes.ShortVoiceInstruction ?? null, stopId: e.attributes.StopID ?? null, symbol: e.symbol, towardName: e.attributes.TowardName ?? null, voiceInstruction: e.attributes.VoiceInstruction ?? null });
  }
  toGraphic() {
    const e = { ObjectID: this.objectId, DirectionPointType: this.directionPointType != null ? L.toJSON(this.directionPointType) : null, Sequence: this.sequence, StopID: this.stopId };
    return this.alternateName != null && (e.AlternateName = this.alternateName), this.arrivalTime != null && (e.ArrivalTime = this.arrivalTime.getTime()), this.arrivalTimeOffset != null && (e.ArrivalUTCOffset = this.arrivalTimeOffset), this.azimuth != null && (e.Azimuth = this.azimuth), this.branchName != null && (e.BranchName = this.branchName), this.displayText != null && (e.DisplayText = this.displayText), this.exitName != null && (e.ExitName = this.exitName), this.intersectingName != null && (e.IntersectingName = this.intersectingName), this.level != null && (e.Level = this.level), this.name != null && (e.Name = this.name), this.shortVoiceInstruction != null && (e.ShortVoiceInstruction = this.shortVoiceInstruction), this.towardName != null && (e.TowardName = this.towardName), this.voiceInstruction != null && (e.VoiceInstruction = this.voiceInstruction), new w({ geometry: this.geometry, attributes: e, symbol: this.symbol, popupTemplate: this.popupTemplate });
  }
};
l.fields = [{ name: "ObjectID", alias: "ObjectID", type: "esriFieldTypeOID" }, { name: "AlternateName", alias: "Alternative Name", type: "esriFieldTypeString" }, { name: "ArrivalTime", alias: "Arrival Time", type: "esriFieldTypeDate" }, { name: "ArrivalUTCOffset", alias: "Arrival Time Offset", type: "esriFieldTypeInteger" }, { name: "Azimuth", alias: "Azimuth", type: "esriFieldTypeDouble" }, { name: "BranchName", alias: "Branch Name", type: "esriFieldTypeString" }, { name: "DirectionPointType", alias: "Directions Point Type", type: "esriFieldTypeInteger" }, { name: "DisplayText", alias: "Display Text", type: "esriFieldTypeString" }, { name: "ExitName", alias: "Exit Name", type: "esriFieldTypeString" }, { name: "IntersectingName", alias: "Intersecting Name", type: "esriFieldTypeString" }, { name: "Level", alias: "Level", type: "esriFieldTypeInteger" }, { name: "Name", alias: "Name", type: "esriFieldTypeString" }, { name: "Sequence", alias: "Sequence", type: "esriFieldTypeInteger" }, { name: "ShortVoiceInstruction", alias: "Short Voice Instruction", type: "esriFieldTypeString" }, { name: "StopID", alias: "Stop ID", type: "esriFieldTypeInteger" }, { name: "TowardName", alias: "Toward Name", type: "esriFieldTypeString" }, { name: "VoiceInstruction", alias: "Voice Instruction", type: "esriFieldTypeString" }], t([i({ json: { read: { source: "attributes.AlternateName" } } })], l.prototype, "alternateName", void 0), t([i()], l.prototype, "arrivalTime", void 0), t([p("arrivalTime", ["attributes.ArrivalTime"])], l.prototype, "readArrivalTime", null), t([i({ json: { read: { source: "attributes.ArrivalUTCOffset" } } })], l.prototype, "arrivalTimeOffset", void 0), t([i({ json: { read: { source: "attributes.Azimuth" } } })], l.prototype, "azimuth", void 0), t([i({ json: { read: { source: "attributes.BranchName" } } })], l.prototype, "branchName", void 0), t([i({ type: L.apiValues, json: { read: { source: "attributes.DirectionPointType", reader: L.read } } })], l.prototype, "directionPointType", void 0), t([i({ json: { read: { source: "attributes.DisplayText" } } })], l.prototype, "displayText", void 0), t([i({ json: { read: { source: "attributes.ExitName" } } })], l.prototype, "exitName", void 0), t([i({ type: z })], l.prototype, "geometry", void 0), t([i({ json: { read: { source: "attributes.IntersectingName" } } })], l.prototype, "intersectingName", void 0), t([i()], l.prototype, "level", void 0), t([i({ json: { read: { source: "attributes.Name" } } })], l.prototype, "name", void 0), t([i({ json: { read: { source: "attributes.ObjectID" } } })], l.prototype, "objectId", void 0), t([i({ type: I })], l.prototype, "popupTemplate", void 0), t([i({ json: { read: { source: "attributes.Sequence" } } })], l.prototype, "sequence", void 0), t([i({ json: { read: { source: "attributes.ShortVoiceInstruction" } } })], l.prototype, "shortVoiceInstruction", void 0), t([i({ json: { read: { source: "attributes.StopID" } } })], l.prototype, "stopId", void 0), t([i({ types: j })], l.prototype, "symbol", void 0), t([i({ json: { read: { source: "attributes.TowardName" } } })], l.prototype, "towardName", void 0), t([i({ readOnly: !0, json: { read: !1 } })], l.prototype, "type", void 0), t([i({ json: { read: { source: "attributes.VoiceInstruction" } } })], l.prototype, "voiceInstruction", void 0), l = R = t([g("esri.rest.support.DirectionPoint")], l);
const he = l;
function f(e, r) {
  if (e == null) return null;
  const o = {}, c = new RegExp(`^${r}`, "i");
  for (const S of Object.keys(e)) if (c.test(S)) {
    const Z = S.substring(r.length);
    o[C.fromJSON(Z)] = e[S];
  }
  return o;
}
function H(e, r, o) {
  if (e != null) {
    r.attributes || (r.attributes = {});
    for (const c in e) {
      const S = C.toJSON(c);
      r.attributes[`${o}${S}`] = e[c];
    }
  }
}
function U(e) {
  const r = {};
  for (const o of Object.keys(e)) {
    const c = o;
    r[C.fromJSON(c)] = e[o];
  }
  return r;
}
function M(e) {
  const r = {};
  for (const o of Object.keys(e)) {
    const c = o;
    r[C.toJSON(c)] = e[o];
  }
  return r;
}
function B(e, r) {
  return e == null || r == null ? null : Math.round((e - r) / 6e4);
}
function ve(e) {
  const r = e.toJSON(), o = r;
  return o.accumulateAttributeNames &&= r.accumulateAttributeNames?.join(), o.attributeParameterValues &&= JSON.stringify(r.attributeParameterValues), o.barriers &&= JSON.stringify(r.barriers), o.outSR &&= r.outSR?.wkid, o.overrides &&= JSON.stringify(r.overrides), o.polygonBarriers &&= JSON.stringify(r.polygonBarriers), o.polylineBarriers &&= JSON.stringify(r.polylineBarriers), o.restrictionAttributeNames &&= r.restrictionAttributeNames?.join(), o.stops &&= JSON.stringify(r.stops), o.travelMode &&= JSON.stringify(r.travelMode), o;
}
var V;
let u = V = class extends A(N) {
  constructor(e) {
    super(e), this.addedCost = null, this.barrierType = null, this.costs = null, this.curbApproach = null, this.fullEdge = null, this.geometry = null, this.name = null, this.objectId = null, this.popupTemplate = null, this.sideOfEdge = null, this.sourceId = null, this.sourceOid = null, this.status = null, this.symbol = null, this.type = "point-barrier";
  }
  readCosts(e, r) {
    return f(r.attributes, "Attr_");
  }
  writeCosts(e, r) {
    H(e, r, "Attr_");
  }
  static fromGraphic(e) {
    return new V({ addedCost: e.attributes.AddedCost ?? null, barrierType: e.attributes.BarrierType != null ? h.fromJSON(e.attributes.BarrierType) : null, costs: e.attributes.Costs != null ? U(JSON.parse(e.attributes.Costs)) : null, curbApproach: e.attributes.CurbApproach != null ? m.fromJSON(e.attributes.CurbApproach) : null, fullEdge: e.attributes.FullEdge != null ? W.fromJSON(e.attributes.FullEdge) : null, geometry: e.geometry, name: e.attributes.Name ?? null, objectId: e.attributes.ObjectID ?? e.attributes.__OBJECTID, popupTemplate: e.popupTemplate, status: e.attributes.Status != null ? D.fromJSON(e.attributes.Status) : null, symbol: e.symbol });
  }
  toGraphic() {
    const e = { ObjectID: this.objectId, AddedCost: this.addedCost, BarrierType: this.barrierType != null ? h.toJSON(this.barrierType) : null, Costs: this.costs != null ? JSON.stringify(M(this.costs)) : null, CurbApproach: this.curbApproach != null ? m.toJSON(this.curbApproach) : null, FullEdge: this.fullEdge != null ? W.toJSON(this.fullEdge) : null, Name: this.name, Status: this.status != null ? D.toJSON(this.status) : null };
    return new w({ geometry: this.geometry, attributes: e, symbol: this.symbol, popupTemplate: this.popupTemplate });
  }
};
u.fields = [{ name: "ObjectID", alias: "ObjectID", type: "esriFieldTypeOID" }, { name: "AddedCost", alias: "Added Cost", type: "esriFieldTypeDouble" }, { name: "BarrierType", alias: "Barrier Type", type: "esriFieldTypeInteger" }, { name: "Costs", alias: "Costs", type: "esriFieldTypeString" }, { name: "CurbApproach", alias: "Curb Approach", type: "esriFieldTypeInteger" }, { name: "FullEdge", alias: "Full Edge", type: "esriFieldTypeInteger" }, { name: "Name", alias: "Name", type: "esriFieldTypeString" }, { name: "Status", alias: "Status", type: "esriFieldTypeInteger" }], t([i()], u.prototype, "addedCost", void 0), t([i({ type: h.apiValues, json: { name: "attributes.BarrierType", read: { reader: h.read }, write: { writer: h.write } } })], u.prototype, "barrierType", void 0), t([i()], u.prototype, "costs", void 0), t([p("costs", ["attributes"])], u.prototype, "readCosts", null), t([O("costs")], u.prototype, "writeCosts", null), t([i({ constructOnly: !0, type: m.apiValues, json: { read: { source: "attributes.CurbApproach", reader: m.read } } })], u.prototype, "curbApproach", void 0), t([i({ type: W.apiValues, json: { name: "attributes.FullEdge", read: { reader: W.read }, write: { writer: W.write } } })], u.prototype, "fullEdge", void 0), t([i({ type: z, json: { write: !0 } })], u.prototype, "geometry", void 0), t([i({ json: { name: "attributes.Name" } })], u.prototype, "name", void 0), t([i({ json: { name: "attributes.ObjectID" } })], u.prototype, "objectId", void 0), t([i({ type: I })], u.prototype, "popupTemplate", void 0), t([i({ type: k.apiValues, json: { read: { source: "attributes.SideOfEdge", reader: k.read } } })], u.prototype, "sideOfEdge", void 0), t([i({ json: { read: { source: "attributes.SourceID" } } })], u.prototype, "sourceId", void 0), t([i({ json: { read: { source: "attributes.SourceOID" } } })], u.prototype, "sourceOid", void 0), t([i({ type: D.apiValues, json: { read: { source: "attributes.Status", reader: D.read } } })], u.prototype, "status", void 0), t([i({ types: j })], u.prototype, "symbol", void 0), t([i({ readOnly: !0, json: { read: !1 } })], u.prototype, "type", void 0), u = V = t([g("esri.rest.support.PointBarrier")], u);
const fe = u;
var q;
let T = q = class extends A(N) {
  constructor(e) {
    super(e), this.barrierType = null, this.costs = null, this.geometry = null, this.name = null, this.objectId = null, this.popupTemplate = null, this.scaleFactor = null, this.symbol = null, this.type = "polygon-barrier";
  }
  readCosts(e, r) {
    return f(r.attributes, "Attr_");
  }
  writeCosts(e, r) {
    H(e, r, "Attr_");
  }
  static fromGraphic(e) {
    return new q({ barrierType: e.attributes.BarrierType != null ? h.fromJSON(e.attributes.BarrierType) : null, costs: e.attributes.Costs != null ? U(JSON.parse(e.attributes.Costs)) : null, geometry: e.geometry, name: e.attributes.Name ?? null, objectId: e.attributes.ObjectID ?? e.attributes.__OBJECTID, popupTemplate: e.popupTemplate, scaleFactor: e.attributes.ScaleFactor ?? null, symbol: e.symbol });
  }
  toGraphic() {
    const e = { ObjectID: this.objectId, BarrierType: this.barrierType != null ? h.toJSON(this.barrierType) : null, Costs: this.costs != null ? JSON.stringify(M(this.costs)) : null, Name: this.name ?? null, ScaleFactor: this.scaleFactor ?? null };
    return new w({ geometry: this.geometry, attributes: e, symbol: this.symbol, popupTemplate: this.popupTemplate });
  }
};
T.fields = [{ name: "ObjectID", alias: "ObjectID", type: "esriFieldTypeOID" }, { name: "BarrierType", alias: "Barrier Type", type: "esriFieldTypeInteger" }, { name: "Costs", alias: "Costs", type: "esriFieldTypeString" }, { name: "Name", alias: "Name", type: "esriFieldTypeString" }, { name: "ScaleFactor", alias: "Scale Factor", type: "esriFieldTypeDouble" }], t([i({ type: h.apiValues, json: { name: "attributes.BarrierType", read: { reader: h.read }, write: { writer: h.write } } })], T.prototype, "barrierType", void 0), t([i()], T.prototype, "costs", void 0), t([p("costs", ["attributes"])], T.prototype, "readCosts", null), t([O("costs")], T.prototype, "writeCosts", null), t([i({ type: Q, json: { write: !0 } })], T.prototype, "geometry", void 0), t([i({ json: { name: "attributes.Name" } })], T.prototype, "name", void 0), t([i({ json: { name: "attributes.ObjectID" } })], T.prototype, "objectId", void 0), t([i({ type: I })], T.prototype, "popupTemplate", void 0), t([i()], T.prototype, "scaleFactor", void 0), t([i({ types: j })], T.prototype, "symbol", void 0), t([i({ readOnly: !0, json: { read: !1 } })], T.prototype, "type", void 0), T = q = t([g("esri.rest.support.PolygonBarrier")], T);
const Se = T;
var x;
let b = x = class extends A(N) {
  constructor(e) {
    super(e), this.barrierType = null, this.costs = null, this.geometry = null, this.name = null, this.objectId = null, this.popupTemplate = null, this.scaleFactor = null, this.symbol = null, this.type = "polyline-barrier";
  }
  readCosts(e, r) {
    return f(r.attributes, "Attr_");
  }
  static fromGraphic(e) {
    return new x({ barrierType: e.attributes.BarrierType != null ? h.fromJSON(e.attributes.BarrierType) : null, costs: e.attributes.Costs != null ? U(JSON.parse(e.attributes.Costs)) : null, geometry: e.geometry, name: e.attributes.Name ?? null, objectId: e.attributes.ObjectID ?? e.attributes.__OBJECTID, popupTemplate: e.popupTemplate, scaleFactor: e.attributes.ScaleFactor ?? null, symbol: e.symbol });
  }
  toGraphic() {
    const e = { ObjectID: this.objectId, BarrierType: this.barrierType != null ? h.toJSON(this.barrierType) : null, Costs: this.costs != null ? JSON.stringify(M(this.costs)) : null, Name: this.name, ScaleFactor: this.scaleFactor };
    return new w({ geometry: this.geometry, attributes: e, symbol: this.symbol, popupTemplate: this.popupTemplate });
  }
};
b.fields = [{ name: "ObjectID", alias: "ObjectID", type: "esriFieldTypeOID" }, { name: "BarrierType", alias: "Barrier Type", type: "esriFieldTypeInteger" }, { name: "Costs", alias: "Costs", type: "esriFieldTypeString" }, { name: "Name", alias: "Name", type: "esriFieldTypeString" }, { name: "ScaleFactor", alias: "Scale Factor", type: "esriFieldTypeDouble" }], t([i({ type: h.apiValues, json: { read: { source: "attributes.BarrierType", reader: h.read } } })], b.prototype, "barrierType", void 0), t([i()], b.prototype, "costs", void 0), t([p("costs", ["attributes"])], b.prototype, "readCosts", null), t([i({ type: K, json: { write: !0 } })], b.prototype, "geometry", void 0), t([i({ json: { name: "attributes.Name" } })], b.prototype, "name", void 0), t([i({ json: { name: "attributes.ObjectID" } })], b.prototype, "objectId", void 0), t([i({ type: I })], b.prototype, "popupTemplate", void 0), t([i()], b.prototype, "scaleFactor", void 0), t([i({ types: j })], b.prototype, "symbol", void 0), t([i({ readOnly: !0, json: { read: !1 } })], b.prototype, "type", void 0), b = x = t([g("esri.rest.support.PolylineBarrier")], b);
const ge = b;
let d = class extends A(N) {
  constructor(r) {
    super(r), this.attributeParameterValues = null, this.description = null, this.distanceAttributeName = null, this.id = null, this.impedanceAttributeName = null, this.name = null, this.restrictionAttributeNames = null, this.simplificationTolerance = null, this.simplificationToleranceUnits = null, this.timeAttributeName = null, this.type = null, this.useHierarchy = null, this.uturnAtJunctions = null;
  }
  readId(r, o) {
    return o.id ?? o.itemId ?? null;
  }
  readRestrictionAttributes(r, o) {
    const { restrictionAttributeNames: c } = o;
    return c == null ? null : c.map((S) => Y.fromJSON(S));
  }
  writeRestrictionAttributes(r, o, c) {
    r != null && (o[c] = r.map((S) => Y.toJSON(S)));
  }
};
t([i({ type: [Object], json: { write: !0 } })], d.prototype, "attributeParameterValues", void 0), t([i({ type: String, json: { write: !0 } })], d.prototype, "description", void 0), t([F(ie, { ignoreUnknown: !1 })], d.prototype, "distanceAttributeName", void 0), t([i({ type: String, json: { write: !0 } })], d.prototype, "id", void 0), t([p("id", ["id", "itemId"])], d.prototype, "readId", null), t([F(C, { ignoreUnknown: !1 })], d.prototype, "impedanceAttributeName", void 0), t([i({ type: String, json: { write: !0 } })], d.prototype, "name", void 0), t([i({ type: [String], json: { write: !0 } })], d.prototype, "restrictionAttributeNames", void 0), t([p("restrictionAttributeNames")], d.prototype, "readRestrictionAttributes", null), t([O("restrictionAttributeNames")], d.prototype, "writeRestrictionAttributes", null), t([i({ type: Number, json: { write: { allowNull: !0 } } })], d.prototype, "simplificationTolerance", void 0), t([F($)], d.prototype, "simplificationToleranceUnits", void 0), t([F(re, { ignoreUnknown: !1 })], d.prototype, "timeAttributeName", void 0), t([F(te)], d.prototype, "type", void 0), t([i({ type: Boolean, json: { write: !0 } })], d.prototype, "useHierarchy", void 0), t([F(ee)], d.prototype, "uturnAtJunctions", void 0), d = t([g("esri.rest.support.TravelMode")], d);
const se = d;
let v = class extends N {
  constructor(e) {
    super(e), this.accumulateAttributes = null, this.directionsLanguage = null, this.findBestSequence = null, this.preserveFirstStop = null, this.preserveLastStop = null, this.startTimeIsUTC = null, this.timeWindowsAreUTC = null, this.travelMode = null;
  }
  readAccumulateAttributes(e) {
    return e == null ? null : e.map((r) => C.fromJSON(r));
  }
  writeAccumulateAttributes(e, r, o) {
    e?.length && (r[o] = e.map((c) => C.toJSON(c)));
  }
};
t([i({ type: [String], json: { name: "accumulateAttributeNames", write: !0 } })], v.prototype, "accumulateAttributes", void 0), t([p("accumulateAttributes")], v.prototype, "readAccumulateAttributes", null), t([O("accumulateAttributes")], v.prototype, "writeAccumulateAttributes", null), t([i({ type: String, json: { write: !0 } })], v.prototype, "directionsLanguage", void 0), t([i({ type: Boolean, json: { write: !0 } })], v.prototype, "findBestSequence", void 0), t([i({ type: Boolean, json: { write: !0 } })], v.prototype, "preserveFirstStop", void 0), t([i({ type: Boolean, json: { write: !0 } })], v.prototype, "preserveLastStop", void 0), t([i({ type: Boolean, json: { write: !0 } })], v.prototype, "startTimeIsUTC", void 0), t([i({ type: Boolean, json: { write: !0 } })], v.prototype, "timeWindowsAreUTC", void 0), t([i({ type: se, json: { write: !0 } })], v.prototype, "travelMode", void 0), v = t([g("esri.rest.support.RouteSettings")], v);
const ae = v;
var _;
let a = _ = class extends A(N) {
  constructor(e) {
    super(e), this.analysisSettings = null, this.endTime = null, this.endTimeOffset = null, this.firstStopId = null, this.geometry = null, this.lastStopId = null, this.messages = null, this.name = null, this.objectId = null, this.popupTemplate = null, this.startTime = null, this.startTimeOffset = null, this.stopCount = null, this.symbol = null, this.totalCosts = null, this.totalDistance = null, this.totalDuration = null, this.totalLateDuration = null, this.totalViolations = null, this.totalWait = null, this.totalWaitDuration = null, this.type = "route-info", this.version = "1.0.0";
  }
  readEndTime(e, r) {
    return r.attributes.EndTimeUTC != null ? new Date(r.attributes.EndTimeUTC) : null;
  }
  readEndTimeOffset(e, r) {
    return B(r.attributes.EndTime, r.attributes.EndTimeUTC);
  }
  readStartTime(e, r) {
    return r.attributes.StartTimeUTC != null ? new Date(r.attributes.StartTimeUTC) : null;
  }
  readStartTimeOffset(e, r) {
    return B(r.attributes.StartTime, r.attributes.StartTimeUTC);
  }
  readTotalCosts(e, r) {
    return f(r.attributes, "Total_");
  }
  readTotalViolations(e, r) {
    return f(r.attributes, "TotalViolation_");
  }
  readTotalWait(e, r) {
    return f(r.attributes, "TotalWait_");
  }
  static fromGraphic(e) {
    return new _({ analysisSettings: e.attributes.AnalysisSettings != null ? ae.fromJSON(JSON.parse(e.attributes.AnalysisSettings)) : null, endTime: e.attributes.EndTime != null ? new Date(e.attributes.EndTime) : null, endTimeOffset: e.attributes.EndUTCOffset ?? null, geometry: e.geometry, messages: e.attributes.Messages != null ? JSON.parse(e.attributes.Messages) : null, name: e.attributes.RouteName, objectId: e.attributes.ObjectID ?? e.attributes.__OBJECTID, popupTemplate: e.popupTemplate, startTime: e.attributes.StartTime != null ? new Date(e.attributes.StartTime) : null, startTimeOffset: e.attributes.StartUTCOffset ?? null, symbol: e.symbol, totalCosts: e.attributes.TotalCosts != null ? U(JSON.parse(e.attributes.TotalCosts)) : null, totalDistance: e.attributes.TotalMeters ?? null, totalDuration: e.attributes.TotalMinutes ?? null, totalLateDuration: e.attributes.TotalLateMinutes ?? null, totalWaitDuration: e.attributes.TotalWaitMinutes ?? null, version: e.attributes.Version });
  }
  toGraphic() {
    const e = { ObjectID: this.objectId, AnalysisSettings: this.analysisSettings != null ? JSON.stringify(this.analysisSettings.toJSON()) : null, EndTime: this.endTime != null ? this.endTime.getTime() : null, EndUTCOffset: this.endTimeOffset, Messages: this.messages != null ? JSON.stringify(this.messages) : null, RouteName: this.name, StartTime: this.startTime != null ? this.startTime.getTime() : null, StartUTCOffset: this.startTimeOffset, TotalCosts: this.totalCosts != null ? JSON.stringify(M(this.totalCosts)) : null, TotalLateMinutes: this.totalLateDuration, TotalMeters: this.totalDistance, TotalMinutes: this.totalDuration, TotalWaitMinutes: this.totalWaitDuration, Version: this.version };
    return new w({ geometry: this.geometry, attributes: e, symbol: this.symbol, popupTemplate: this.popupTemplate });
  }
};
a.fields = [{ name: "ObjectID", alias: "ObjectID", type: "esriFieldTypeOID" }, { name: "AnalysisSettings", alias: "Analysis Settings", type: "esriFieldTypeString" }, { name: "EndTime", alias: "End Time", type: "esriFieldTypeDate" }, { name: "EndUTCOffset", alias: "End Time Offset", type: "esriFieldTypeInteger" }, { name: "Messages", alias: "Messages", type: "esriFieldTypeString" }, { name: "RouteName", alias: "Route Name", type: "esriFieldTypeString" }, { name: "StartTime", alias: "Start Time", type: "esriFieldTypeDate" }, { name: "StartUTCOffset", alias: "Start Time Offset", type: "esriFieldTypeInteger" }, { name: "TotalCosts", alias: "Total Costs", type: "esriFieldTypeString" }, { name: "TotalLateMinutes", alias: "Total Late Minutes", type: "esriFieldTypeDouble" }, { name: "TotalMeters", alias: "Total Meters", type: "esriFieldTypeDouble" }, { name: "TotalMinutes", alias: "Total Minutes", type: "esriFieldTypeDouble" }, { name: "TotalWaitMinutes", alias: "Total Wait Minutes", type: "esriFieldTypeDouble" }, { name: "Version", alias: "Version", type: "esriFieldTypeString" }], t([i()], a.prototype, "analysisSettings", void 0), t([i()], a.prototype, "endTime", void 0), t([p("endTime", ["attributes.EndTimeUTC"])], a.prototype, "readEndTime", null), t([i()], a.prototype, "endTimeOffset", void 0), t([p("endTimeOffset", ["attributes.EndTime", "attributes.EndTimeUTC"])], a.prototype, "readEndTimeOffset", null), t([i({ json: { read: { source: "attributes.FirstStopID" } } })], a.prototype, "firstStopId", void 0), t([i({ type: K })], a.prototype, "geometry", void 0), t([i({ json: { read: { source: "attributes.LastStopID" } } })], a.prototype, "lastStopId", void 0), t([i()], a.prototype, "messages", void 0), t([i({ json: { read: { source: "attributes.Name" } } })], a.prototype, "name", void 0), t([i({ json: { read: { source: "attributes.ObjectID" } } })], a.prototype, "objectId", void 0), t([i({ type: I })], a.prototype, "popupTemplate", void 0), t([i()], a.prototype, "startTime", void 0), t([p("startTime", ["attributes.StartTimeUTC"])], a.prototype, "readStartTime", null), t([i()], a.prototype, "startTimeOffset", void 0), t([p("startTimeOffset", ["attributes.StartTime", "attributes.StartTimeUTC"])], a.prototype, "readStartTimeOffset", null), t([i({ json: { read: { source: "attributes.StopCount" } } })], a.prototype, "stopCount", void 0), t([i({ types: j })], a.prototype, "symbol", void 0), t([i()], a.prototype, "totalCosts", void 0), t([p("totalCosts", ["attributes"])], a.prototype, "readTotalCosts", null), t([i()], a.prototype, "totalDistance", void 0), t([i()], a.prototype, "totalDuration", void 0), t([i()], a.prototype, "totalLateDuration", void 0), t([i()], a.prototype, "totalViolations", void 0), t([p("totalViolations", ["attributes"])], a.prototype, "readTotalViolations", null), t([i()], a.prototype, "totalWait", void 0), t([p("totalWait", ["attributes"])], a.prototype, "readTotalWait", null), t([i()], a.prototype, "totalWaitDuration", void 0), t([i({ readOnly: !0, json: { read: !1 } })], a.prototype, "type", void 0), t([i()], a.prototype, "version", void 0), a = _ = t([g("esri.rest.support.RouteInfo")], a);
const De = a;
var G;
let s = G = class extends A(N) {
  constructor(e) {
    super(e), this.arriveCurbApproach = null, this.arriveTime = null, this.arriveTimeOffset = null, this.bearing = null, this.bearingTol = null, this.cumulativeCosts = null, this.cumulativeDistance = null, this.cumulativeDuration = null, this.curbApproach = null, this.departCurbApproach = null, this.departTime = null, this.departTimeOffset = null, this.distanceToNetworkInMeters = null, this.geometry = null, this.lateDuration = null, this.locationType = null, this.name = null, this.navLatency = null, this.objectId = null, this.popupTemplate = null, this.posAlong = null, this.routeName = null, this.serviceCosts = null, this.serviceDistance = null, this.serviceDuration = null, this.sequence = null, this.sideOfEdge = null, this.snapX = null, this.snapY = null, this.snapZ = null, this.sourceId = null, this.sourceOid = null, this.status = null, this.symbol = null, this.timeWindowEnd = null, this.timeWindowEndOffset = null, this.timeWindowStart = null, this.timeWindowStartOffset = null, this.type = "stop", this.violations = null, this.waitDuration = null, this.wait = null;
  }
  readArriveTimeOffset(e, r) {
    return B(r.attributes.ArriveTime, r.attributes.ArriveTimeUTC);
  }
  readCumulativeCosts(e, r) {
    return f(r.attributes, "Cumul_");
  }
  readDepartTimeOffset(e, r) {
    return B(r.attributes.DepartTime, r.attributes.DepartTimeUTC);
  }
  readServiceCosts(e, r) {
    return f(r.attributes, "Attr_");
  }
  writeServiceCosts(e, r) {
    H(e, r, "Attr_");
  }
  writeTimeWindowEnd(e, r) {
    e != null && (r.attributes || (r.attributes = {}), r.attributes.TimeWindowEnd = e.getTime());
  }
  writeTimeWindowStart(e, r) {
    e != null && (r.attributes || (r.attributes = {}), r.attributes.TimeWindowStart = e.getTime());
  }
  readViolations(e, r) {
    return f(r.attributes, "Violation_");
  }
  readWait(e, r) {
    return f(r.attributes, "Wait_");
  }
  static fromGraphic(e) {
    return new G({ arriveCurbApproach: e.attributes.ArrivalCurbApproach != null ? m.fromJSON(e.attributes.ArrivalCurbApproach) : null, arriveTime: e.attributes.ArrivalTime != null ? new Date(e.attributes.ArrivalTime) : null, arriveTimeOffset: e.attributes.ArrivalUTCOffset, cumulativeCosts: e.attributes.CumulativeCosts != null ? U(JSON.parse(e.attributes.CumulativeCosts)) : null, cumulativeDistance: e.attributes.CumulativeMeters ?? null, cumulativeDuration: e.attributes.CumulativeMinutes ?? null, curbApproach: e.attributes.CurbApproach != null ? m.fromJSON(e.attributes.CurbApproach) : null, departCurbApproach: e.attributes.DepartureCurbApproach != null ? m.fromJSON(e.attributes.DepartureCurbApproach) : null, departTime: e.attributes.DepartureTime != null ? new Date(e.attributes.DepartureTime) : null, departTimeOffset: e.attributes.DepartureUTCOffset ?? null, geometry: e.geometry, lateDuration: e.attributes.LateMinutes ?? null, locationType: e.attributes.LocationType != null ? E.fromJSON(e.attributes.LocationType) : null, name: e.attributes.Name, objectId: e.attributes.ObjectID ?? e.attributes.__OBJECTID, popupTemplate: e.popupTemplate, routeName: e.attributes.RouteName, sequence: e.attributes.Sequence ?? null, serviceCosts: e.attributes.ServiceCosts != null ? U(JSON.parse(e.attributes.ServiceCosts)) : null, serviceDistance: e.attributes.ServiceMeters ?? null, serviceDuration: e.attributes.ServiceMinutes ?? null, status: e.attributes.Status != null ? D.fromJSON(e.attributes.Status) : null, symbol: e.symbol, timeWindowEnd: e.attributes.TimeWindowEnd != null ? new Date(e.attributes.TimeWindowEnd) : null, timeWindowEndOffset: e.attributes.TimeWindowEndUTCOffset ?? null, timeWindowStart: e.attributes.TimeWindowStart != null ? new Date(e.attributes.TimeWindowStart) : null, timeWindowStartOffset: e.attributes.TimeWindowStartUTCOffset ?? null, waitDuration: e.attributes.WaitMinutes ?? null });
  }
  toGraphic() {
    const e = { ObjectID: this.objectId, ArrivalCurbApproach: this.arriveCurbApproach != null ? m.toJSON(this.arriveCurbApproach) : null, ArrivalTime: this.arriveTime != null ? this.arriveTime.getTime() : null, ArrivalUTCOffset: this.arriveTimeOffset, CumulativeCosts: this.cumulativeCosts != null ? JSON.stringify(M(this.cumulativeCosts)) : null, CumulativeMeters: this.cumulativeDistance, CumulativeMinutes: this.cumulativeDuration, CurbApproach: this.curbApproach != null ? m.toJSON(this.curbApproach) : null, DepartureCurbApproach: this.departCurbApproach != null ? m.toJSON(this.departCurbApproach) : null, DepartureTime: this.departTime != null ? this.departTime.getTime() : null, DepartureUTCOffset: this.departTimeOffset, LateMinutes: this.lateDuration, LocationType: this.locationType != null ? E.toJSON(this.locationType) : null, Name: this.name, RouteName: this.routeName, Sequence: this.sequence, ServiceCosts: this.serviceCosts != null ? JSON.stringify(M(this.serviceCosts)) : null, ServiceMeters: this.serviceDistance, ServiceMinutes: this.serviceDuration, Status: this.status != null ? D.toJSON(this.status) : null, TimeWindowEnd: this.timeWindowEnd != null ? this.timeWindowEnd.getTime() : null, TimeWindowEndUTCOffset: this.timeWindowEndOffset ?? this.arriveTimeOffset, TimeWindowStart: this.timeWindowStart != null ? this.timeWindowStart.getTime() : null, TimeWindowStartUTCOffset: this.timeWindowStartOffset ?? this.arriveTimeOffset, WaitMinutes: this.waitDuration };
    return new w({ geometry: this.geometry, attributes: e, symbol: this.symbol, popupTemplate: this.popupTemplate });
  }
};
s.fields = [{ name: "ObjectID", alias: "ObjectID", type: "esriFieldTypeOID" }, { name: "ArrivalCurbApproach", alias: "Arrival Curb Approach", type: "esriFieldTypeInteger" }, { name: "ArrivalTime", alias: "Arrival Time", type: "esriFieldTypeDate" }, { name: "ArrivalUTCOffset", alias: "Arrival Time", type: "esriFieldTypeInteger" }, { name: "CumulativeCosts", alias: "Cumulative Costs", type: "esriFieldTypeString" }, { name: "CumulativeMeters", alias: "Cumulative Meters", type: "esriFieldTypeDouble" }, { name: "CumulativeMinutes", alias: "Cumulative Minutes", type: "esriFieldTypeDouble" }, { name: "CurbApproach", alias: "Curb Approach", type: "esriFieldTypeInteger" }, { name: "DepartureCurbApproach", alias: "Departure Curb Approach", type: "esriFieldTypeInteger" }, { name: "DepartureTime", alias: "Departure Time", type: "esriFieldTypeDate" }, { name: "DepartureUTCOffset", alias: "Departure Time", type: "esriFieldTypeInteger" }, { name: "LateMinutes", alias: "Minutes Late", type: "esriFieldTypeDouble" }, { name: "LocationType", alias: "Location Type", type: "esriFieldTypeInteger" }, { name: "Name", alias: "Name", type: "esriFieldTypeString" }, { name: "RouteName", alias: "Route Name", type: "esriFieldTypeString" }, { name: "Sequence", alias: "Sequence", type: "esriFieldTypeInteger" }, { name: "ServiceCosts", alias: "Service Costs", type: "esriFieldTypeString" }, { name: "ServiceMeters", alias: "Service Meters", type: "esriFieldTypeDouble" }, { name: "ServiceMinutes", alias: "Service Minutes", type: "esriFieldTypeDouble" }, { name: "Status", alias: "Status", type: "esriFieldTypeInteger" }, { name: "TimeWindowEnd", alias: "Time Window End", type: "esriFieldTypeDate" }, { name: "TimeWindowEndUTCOffset", alias: "Time Window End Offset", type: "esriFieldTypeInteger" }, { name: "TimeWindowStart", alias: "Time Window Start", type: "esriFieldTypeDate" }, { name: "TimeWindowStartUTCOffset", alias: "Time Window Start Offset", type: "esriFieldTypeInteger" }, { name: "WaitMinutes", alias: "Minutes Wait", type: "esriFieldTypeDouble" }], t([i({ type: m.apiValues, json: { read: { source: "attributes.ArrivalCurbApproach", reader: m.read } } })], s.prototype, "arriveCurbApproach", void 0), t([i({ type: Date, json: { read: { source: "attributes.ArriveTimeUTC" } } })], s.prototype, "arriveTime", void 0), t([i()], s.prototype, "arriveTimeOffset", void 0), t([p("arriveTimeOffset", ["attributes.ArriveTime", "attributes.ArriveTimeUTC"])], s.prototype, "readArriveTimeOffset", null), t([i({ json: { name: "attributes.Bearing", read: !1, write: !0 } })], s.prototype, "bearing", void 0), t([i({ json: { name: "attributes.BearingTol", read: !1, write: !0 } })], s.prototype, "bearingTol", void 0), t([i()], s.prototype, "cumulativeCosts", void 0), t([p("cumulativeCosts", ["attributes"])], s.prototype, "readCumulativeCosts", null), t([i()], s.prototype, "cumulativeDistance", void 0), t([i()], s.prototype, "cumulativeDuration", void 0), t([i({ type: m.apiValues, json: { name: "attributes.CurbApproach", read: { reader: m.read }, write: { writer: m.write } } })], s.prototype, "curbApproach", void 0), t([i({ type: m.apiValues, json: { read: { source: "attributes.DepartCurbApproach", reader: m.read } } })], s.prototype, "departCurbApproach", void 0), t([i({ type: Date, json: { read: { source: "attributes.DepartTimeUTC" } } })], s.prototype, "departTime", void 0), t([i()], s.prototype, "departTimeOffset", void 0), t([p("departTimeOffset", ["attributes.DepartTime", "attributes.DepartTimeUTC"])], s.prototype, "readDepartTimeOffset", null), t([i({ json: { read: { source: "attributes.DistanceToNetworkInMeters" } } })], s.prototype, "distanceToNetworkInMeters", void 0), t([i({ type: z, json: { write: !0 } })], s.prototype, "geometry", void 0), t([i()], s.prototype, "lateDuration", void 0), t([i({ type: E.apiValues, json: { name: "attributes.LocationType", read: { reader: E.read }, write: { writer: E.write } } })], s.prototype, "locationType", void 0), t([i({ json: { name: "attributes.Name" } })], s.prototype, "name", void 0), t([i({ json: { name: "attributes.NavLatency", read: !1, write: !0 } })], s.prototype, "navLatency", void 0), t([i({ json: { name: "attributes.ObjectID" } })], s.prototype, "objectId", void 0), t([i({ type: I })], s.prototype, "popupTemplate", void 0), t([i({ json: { read: { source: "attributes.PosAlong" } } })], s.prototype, "posAlong", void 0), t([i({ json: { name: "attributes.RouteName" } })], s.prototype, "routeName", void 0), t([i()], s.prototype, "serviceCosts", void 0), t([p("serviceCosts", ["attributes"])], s.prototype, "readServiceCosts", null), t([O("serviceCosts")], s.prototype, "writeServiceCosts", null), t([i()], s.prototype, "serviceDistance", void 0), t([i()], s.prototype, "serviceDuration", void 0), t([i({ json: { name: "attributes.Sequence" } })], s.prototype, "sequence", void 0), t([i({ type: k.apiValues, json: { read: { source: "attributes.SideOfEdge", reader: k.read } } })], s.prototype, "sideOfEdge", void 0), t([i({ json: { read: { source: "attributes.SnapX" } } })], s.prototype, "snapX", void 0), t([i({ json: { read: { source: "attributes.SnapY" } } })], s.prototype, "snapY", void 0), t([i({ json: { read: { source: "attributes.SnapZ" } } })], s.prototype, "snapZ", void 0), t([i({ json: { read: { source: "attributes.SourceID" } } })], s.prototype, "sourceId", void 0), t([i({ json: { read: { source: "attributes.SourceOID" } } })], s.prototype, "sourceOid", void 0), t([i({ type: D.apiValues, json: { read: { source: "attributes.Status", reader: D.read } } })], s.prototype, "status", void 0), t([i({ types: j })], s.prototype, "symbol", void 0), t([i({ type: Date, json: { name: "attributes.TimeWindowEnd" } })], s.prototype, "timeWindowEnd", void 0), t([O("timeWindowEnd")], s.prototype, "writeTimeWindowEnd", null), t([i()], s.prototype, "timeWindowEndOffset", void 0), t([i({ type: Date, json: { name: "attributes.TimeWindowStart" } })], s.prototype, "timeWindowStart", void 0), t([O("timeWindowStart")], s.prototype, "writeTimeWindowStart", null), t([i()], s.prototype, "timeWindowStartOffset", void 0), t([i({ readOnly: !0, json: { read: !1 } })], s.prototype, "type", void 0), t([i()], s.prototype, "violations", void 0), t([p("violations", ["attributes"])], s.prototype, "readViolations", null), t([i()], s.prototype, "waitDuration", void 0), t([i()], s.prototype, "wait", void 0), t([p("wait", ["attributes"])], s.prototype, "readWait", null), s = G = t([g("esri.rest.support.Stop")], s);
const Ae = s;
export {
  fe as C,
  re as D,
  Y as M,
  Te as P,
  me as R,
  De as S,
  Se as T,
  de as U,
  C as a,
  ne as b,
  be as c,
  se as d,
  ve as e,
  ce as f,
  pe as g,
  ae as h,
  ge as j,
  ue as l,
  ee as m,
  B as n,
  le as o,
  ye as q,
  $ as r,
  Ae as w,
  he as y
};
//# sourceMappingURL=Stop-BslmYquj.js.map
