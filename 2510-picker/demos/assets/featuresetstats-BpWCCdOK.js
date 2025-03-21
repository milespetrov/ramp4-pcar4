import{m as d}from"./TimeOnly-BM9oYRaN.js";import{i as F,K as f,E as m,P as h,X as l,a as w,r as S,Y as c,B as v}from"./languageUtils-CQjPs6wm.js";import{l as u}from"./arcadeUtils-DEbxuG5-.js";import{Z as p,r as x}from"./WhereClause-ce0PcVyb.js";import"./main-Cndq3wrU.js";import"./preload-helper-ExcqyqRp.js";import"./UnknownTimeZone-C14swlDn.js";import"./ImmutableArray-BPVd6ESQ.js";import"./shared-XelrNj2h.js";import"./Field-Ewd_7sve.js";import"./fieldType-C8x_vAE7.js";import"./number-DhrD08ky.js";import"./Query-B0QBVc1M.js";import"./TimeExtent-CNKqe8aE.js";import"./featureConversionUtils-BMXcAHur.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FieldsIndex-BbWS5rET.js";import"./uuid-Cl5lrJ4c.js";async function s(n,r,t,a){if(t.length===1){if(m(t[0]))return u(n,t[0],c(t[1],-1));if(l(t[0]))return u(n,t[0].toArray(),c(t[1],-1))}else if(t.length===2){if(m(t[0]))return u(n,t[0],c(t[1],-1));if(l(t[0]))return u(n,t[0].toArray(),c(t[1],-1));if(f(t[0])){const e=await t[0].load(),i=await y(p.create(t[1],{fieldsIndex:e.getFieldsIndex(),timeZone:e.dateFieldsTimeZoneDefaultUTC}),a,r);return g(r,await t[0].calculateStatistic(n,i,c(t[2],1e3),r.abortSignal))}}else if(t.length===3&&f(t[0])){const e=await t[0].load(),i=await y(p.create(t[1],{fieldsIndex:e.getFieldsIndex(),timeZone:e.dateFieldsTimeZoneDefaultUTC}),a,r);return g(r,await t[0].calculateStatistic(n,i,c(t[2],1e3),r.abortSignal))}return u(n,t,-1)}function g(n,r){return r instanceof x?d.fromReaderAsTimeStampOffset(r.toStorageFormat()):r instanceof Date?d.dateJSAndZoneToArcadeDate(r,v(n)):r}async function y(n,r,t){const a=n.getVariables();if(a.length>0){const e=[];for(let o=0;o<a.length;o++){const A={name:a[o]};e.push(await r.evaluateIdentifier(t,A))}const i={};for(let o=0;o<a.length;o++)i[a[o]]=e[o];return n.parameters=i,n}return n}function k(n){n.mode==="async"&&(n.functions.stdev=function(r,t){return n.standardFunctionAsync(r,t,(a,e,i)=>s("stdev",r,i,n))},n.functions.variance=function(r,t){return n.standardFunctionAsync(r,t,(a,e,i)=>s("variance",r,i,n))},n.functions.average=function(r,t){return n.standardFunctionAsync(r,t,(a,e,i)=>s("mean",r,i,n))},n.functions.mean=function(r,t){return n.standardFunctionAsync(r,t,(a,e,i)=>s("mean",r,i,n))},n.functions.sum=function(r,t){return n.standardFunctionAsync(r,t,(a,e,i)=>s("sum",r,i,n))},n.functions.min=function(r,t){return n.standardFunctionAsync(r,t,(a,e,i)=>s("min",r,i,n))},n.functions.max=function(r,t){return n.standardFunctionAsync(r,t,(a,e,i)=>s("max",r,i,n))},n.functions.count=function(r,t){return n.standardFunctionAsync(r,t,async(a,e,i)=>{if(F(i,1,1,r,t),f(i[0]))return i[0].count(a.abortSignal);if(m(i[0])||h(i[0]))return i[0].length;if(l(i[0]))return i[0].length();throw new w(r,S.InvalidParameter,t)})})}export{k as registerFunctions};
