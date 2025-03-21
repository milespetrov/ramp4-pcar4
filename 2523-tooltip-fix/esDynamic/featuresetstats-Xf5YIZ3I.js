import{m}from"./TimeOnly-CpeHmFjD.js";import{i as h,K as f,E as d,P as w,X as l,a as p,r as S,Y as c,B as v}from"./languageUtils-CTxvs0S2.js";import{l as u}from"./arcadeUtils-CaY06Hpd.js";import{Z as g,r as x}from"./WhereClause-L_hUzUIy.js";async function s(n,t,e,r){if(e.length===1){if(d(e[0]))return u(n,e[0],c(e[1],-1));if(l(e[0]))return u(n,e[0].toArray(),c(e[1],-1))}else if(e.length===2){if(d(e[0]))return u(n,e[0],c(e[1],-1));if(l(e[0]))return u(n,e[0].toArray(),c(e[1],-1));if(f(e[0])){const a=await e[0].load(),i=await F(g.create(e[1],{fieldsIndex:a.getFieldsIndex(),timeZone:a.dateFieldsTimeZoneDefaultUTC}),r,t);return y(t,await e[0].calculateStatistic(n,i,c(e[2],1e3),t.abortSignal))}}else if(e.length===3&&f(e[0])){const a=await e[0].load(),i=await F(g.create(e[1],{fieldsIndex:a.getFieldsIndex(),timeZone:a.dateFieldsTimeZoneDefaultUTC}),r,t);return y(t,await e[0].calculateStatistic(n,i,c(e[2],1e3),t.abortSignal))}return u(n,e,-1)}function y(n,t){return t instanceof x?m.fromReaderAsTimeStampOffset(t.toStorageFormat()):t instanceof Date?m.dateJSAndZoneToArcadeDate(t,v(n)):t}async function F(n,t,e){const r=n.getVariables();if(r.length>0){const a=[];for(let o=0;o<r.length;o++){const A={name:r[o]};a.push(await t.evaluateIdentifier(e,A))}const i={};for(let o=0;o<r.length;o++)i[r[o]]=a[o];return n.parameters=i,n}return n}function I(n){n.mode==="async"&&(n.functions.stdev=function(t,e){return n.standardFunctionAsync(t,e,(r,a,i)=>s("stdev",t,i,n))},n.functions.variance=function(t,e){return n.standardFunctionAsync(t,e,(r,a,i)=>s("variance",t,i,n))},n.functions.average=function(t,e){return n.standardFunctionAsync(t,e,(r,a,i)=>s("mean",t,i,n))},n.functions.mean=function(t,e){return n.standardFunctionAsync(t,e,(r,a,i)=>s("mean",t,i,n))},n.functions.sum=function(t,e){return n.standardFunctionAsync(t,e,(r,a,i)=>s("sum",t,i,n))},n.functions.min=function(t,e){return n.standardFunctionAsync(t,e,(r,a,i)=>s("min",t,i,n))},n.functions.max=function(t,e){return n.standardFunctionAsync(t,e,(r,a,i)=>s("max",t,i,n))},n.functions.count=function(t,e){return n.standardFunctionAsync(t,e,async(r,a,i)=>{if(h(i,1,1,t,e),f(i[0]))return i[0].count(r.abortSignal);if(d(i[0])||w(i[0]))return i[0].length;if(l(i[0]))return i[0].length();throw new p(t,S.InvalidParameter,e)})})}export{I as registerFunctions};
