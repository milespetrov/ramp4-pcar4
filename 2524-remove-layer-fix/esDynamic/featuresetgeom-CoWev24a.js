import{o as m,i as v,d as p,K as s,a as o,r as l}from"./languageUtils-VuoQETG0.js";import{s as w}from"./TimeOnly-CvmakgWj.js";import{u as c,f as h}from"./SpatialFilter-C05_GRhX.js";import{cH as i}from"./main-DJHcSGyV.js";import{relate as y,crosses as F,touches as I,within as A,overlaps as P,contains as g,intersects as R}from"./geometryEngineAsync-B0L2Z92f.js";function f(e){return e instanceof i}function u(e,r,a,d){return d(e,r,async(S,n,t)=>{if(t.length<2)throw new o(e,l.WrongNumberOfParameters,r);if((t=m(t))[0]===null&&t[1]===null)return!1;if(s(t[0])){if(t[1]instanceof i)return new h({parentfeatureset:t[0],relation:a,relationGeom:t[1]});if(t[1]===null)return new c({parentfeatureset:t[0]});throw new o(e,l.InvalidParameter,r)}if(f(t[0])){if(f(t[1])){switch(a){case"esriSpatialRelEnvelopeIntersects":return R(w(t[0]),w(t[1]));case"esriSpatialRelIntersects":return R(t[0],t[1]);case"esriSpatialRelContains":return g(t[0],t[1]);case"esriSpatialRelOverlaps":return P(t[0],t[1]);case"esriSpatialRelWithin":return A(t[0],t[1]);case"esriSpatialRelTouches":return I(t[0],t[1]);case"esriSpatialRelCrosses":return F(t[0],t[1])}throw new o(e,l.InvalidParameter,r)}if(s(t[1]))return new h({parentfeatureset:t[1],relation:a,relationGeom:t[0]});if(t[1]===null)return!1;throw new o(e,l.InvalidParameter,r)}if(t[0]===null){if(s(t[1]))return new c({parentfeatureset:t[1]});if(t[1]instanceof i||t[1]===null)return!1}throw new o(e,l.InvalidParameter,r)})}function C(e){e.mode==="async"&&(e.functions.intersects=function(r,a){return u(r,a,"esriSpatialRelIntersects",e.standardFunctionAsync)},e.functions.envelopeintersects=function(r,a){return u(r,a,"esriSpatialRelEnvelopeIntersects",e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:2,max:2}),e.functions.contains=function(r,a){return u(r,a,"esriSpatialRelContains",e.standardFunctionAsync)},e.functions.overlaps=function(r,a){return u(r,a,"esriSpatialRelOverlaps",e.standardFunctionAsync)},e.functions.within=function(r,a){return u(r,a,"esriSpatialRelWithin",e.standardFunctionAsync)},e.functions.touches=function(r,a){return u(r,a,"esriSpatialRelTouches",e.standardFunctionAsync)},e.functions.crosses=function(r,a){return u(r,a,"esriSpatialRelCrosses",e.standardFunctionAsync)},e.functions.relate=function(r,a){return e.standardFunctionAsync(r,a,async(d,S,n)=>{if(n=m(n),v(n,3,3,r,a),f(n[0])&&f(n[1]))return y(n[0],n[1],p(n[2]));if(n[0]instanceof i&&n[1]===null||n[1]instanceof i&&n[0]===null)return!1;if(s(n[0])&&n[1]===null)return new c({parentfeatureset:n[0]});if(s(n[1])&&n[0]===null)return new c({parentfeatureset:n[1]});if(s(n[0])&&n[1]instanceof i)return n[0].relate(n[1],p(n[2]));if(s(n[1])&&n[0]instanceof i)return n[1].relate(n[0],p(n[2]));if(n[0]===null&&n[1]===null)return!1;throw new o(r,l.InvalidParameter,a)})})}export{C as registerFunctions};
