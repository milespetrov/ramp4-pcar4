import{N as m}from"./arcadeUtils-Cqfrem_-.js";import{i as t,U as f,q as T,d as l,K as s,p as v,a as c,r as d,y as b,B as y,C as A,D as h,F as g,G as x,Y as F,N as D,Q as V}from"./languageUtils-Bk6fBix8.js";import{E as w}from"./shared-D9yYlOjY.js";function p(o,r){return o&&o.domain?o.domain.type==="coded-value"||o.domain.type==="codedValue"?m.convertObjectToArcadeDictionary({type:"codedValue",name:o.domain.name,dataType:w[o.field.type],codedValues:o.domain.codedValues.map(e=>({name:e.name,code:e.code}))},y(r)):m.convertObjectToArcadeDictionary({type:"range",name:o.domain.name,dataType:w[o.field.type],min:o.domain.minValue,max:o.domain.maxValue},y(r)):null}function j(o){o.mode==="async"&&(o.functions.domain=function(r,e){return o.standardFunctionAsync(r,e,async(i,u,a)=>{if(t(a,2,3,r,e),f(a[0]))return p(T(a[0],l(a[1]),a[2]===void 0?void 0:a[2]),r);if(s(a[0]))return await a[0]._ensureLoaded(),p(v(l(a[1]),a[0],null,a[2]===void 0?void 0:a[2]),r);throw new c(r,d.InvalidParameter,e)})},o.functions.subtypes=function(r,e){return o.standardFunctionAsync(r,e,async(i,u,a)=>{if(t(a,1,1,r,e),f(a[0])){const n=b(a[0]);return n?m.convertObjectToArcadeDictionary(n,y(r)):null}if(s(a[0])){await a[0]._ensureLoaded();const n=a[0].subtypeMetaData();return n?m.convertObjectToArcadeDictionary(n,y(r)):null}throw new c(r,d.InvalidParameter,e)})},o.functions.domainname=function(r,e){return o.standardFunctionAsync(r,e,async(i,u,a)=>{if(t(a,2,4,r,e),f(a[0]))return A(a[0],l(a[1]),a[2],a[3]===void 0?void 0:a[3]);if(s(a[0])){await a[0]._ensureLoaded();const n=v(l(a[1]),a[0],null,a[3]===void 0?void 0:a[3]);return h(n,a[2])}throw new c(r,d.InvalidParameter,e)})},o.signatures.push({name:"domainname",min:2,max:4}),o.functions.domaincode=function(r,e){return o.standardFunctionAsync(r,e,async(i,u,a)=>{if(t(a,2,4,r,e),f(a[0]))return g(a[0],l(a[1]),a[2],a[3]===void 0?void 0:a[3]);if(s(a[0])){await a[0]._ensureLoaded();const n=v(l(a[1]),a[0],null,a[3]===void 0?void 0:a[3]);return x(n,a[2])}throw new c(r,d.InvalidParameter,e)})},o.signatures.push({name:"domaincode",min:2,max:4}),o.functions.text=function(r,e){return o.standardFunctionAsync(r,e,async(i,u,a)=>{if(t(a,1,2,r,e),s(a[0])){const n=F(a[1],"");if(n==="")return a[0].castToText();if(n.toLowerCase()==="schema")return a[0].convertToText("schema",i.abortSignal);if(n.toLowerCase()==="featureset")return a[0].convertToText("featureset",i.abortSignal);throw new c(r,d.InvalidParameter,e)}return D(a[0],a[1])})},o.functions.gdbversion=function(r,e){return o.standardFunctionAsync(r,e,async(i,u,a)=>{if(t(a,1,1,r,e),f(a[0]))return a[0].gdbVersion();if(s(a[0]))return(await a[0].load()).gdbVersion;throw new c(r,d.InvalidParameter,e)})},o.functions.schema=function(r,e){return o.standardFunctionAsync(r,e,async(i,u,a)=>{if(t(a,1,1,r,e),s(a[0]))return await a[0].load(),m.convertObjectToArcadeDictionary(a[0].schema(),y(r));if(f(a[0])){const n=V(a[0]);return n?m.convertObjectToArcadeDictionary(n,y(r)):null}throw new c(r,d.InvalidParameter,e)})})}export{j as registerFunctions};
