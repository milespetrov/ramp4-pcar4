import{y as on,c as ln,d as cn,N,x as un,Z as fn,t as z,g as dn,r as L}from"./arcadeUtils-CISp-jWr.js";import{o as f,i as h,k as V,g as W,t as B,d as q,a,r as s,E as g,X as P,A as C,K as J,Y as w,a0 as H,a1 as D,a2 as M,h as b,S as wn,z as k,B as S}from"./languageUtils-CLsyUGSQ.js";import{c as I,r as j,b as y}from"./TimeOnly-DFUmG9m6.js";import{l as K}from"./portalUtils-BDFoZDFo.js";import{K as hn,U as X,cH as d,au as T,aT as A,bv as O,bC as x,bD as Y,b3 as G,b as Q,bq as mn}from"./main-BPeHLg3l.js";import{disjoint as yn,intersects as pn,touches as vn,crosses as gn,within as Pn,contains as In,overlaps as An,equals as Fn,relate as bn,intersect as Rn,union as Nn,difference as Sn,symmetricDifference as On,clip as xn,cut as Dn,planarArea as _,geodesicArea as $,planarLength as Z,geodesicLength as E,distance as jn,densify as nn,geodesicDensify as tn,generalize as Tn,buffer as Ln,geodesicBuffer as Cn,offset as Jn,rotate as rn,simplify as en,isSimple as Zn,convexHull as Un,nearestCoordinate as qn,nearestVertex as Mn}from"./geometryEngineAsync-Cx6oCLyq.js";async function an(i,t,r){if(!hn?.findCredential(i.restUrl))return null;if(i.loadStatus==="loaded"&&t===""&&i.user?.sourceJSON&&r===!1)return i.user.sourceJSON;const l={responseType:"json",query:{f:"json"}};if(r&&(l.query.returnUserLicenseTypeExtensions=!0),t===""){const n=await X(i.restUrl+"/community/self",l);if(n.data){const e=n.data;if(e?.username)return e}return null}const c=await X(i.restUrl+"/community/users/"+t,l);if(c.data){const n=c.data;return n.error?null:n}return null}function F(i,t,r){if(h(i,2,2,t,r),!(i[0]instanceof d&&i[1]instanceof d)&&!(i[0]instanceof d&&i[1]===null)&&!(i[1]instanceof d&&i[0]===null)&&(i[0]!==null||i[1]!==null))throw new a(t,s.InvalidParameter,r)}async function sn(i,t){if(i.type!=="polygon"&&i.type!=="polyline"&&i.type!=="extent")return 0;let r=1;(i.spatialReference.vcsWkid||i.spatialReference.latestVcsWkid)&&(r=dn(i.spatialReference)/mn(i.spatialReference));let l=0;if(i.type==="polyline")for(const n of i.paths)for(let e=1;e<n.length;e++)l+=L(n[e],n[e-1],r);else if(i.type==="polygon")for(const n of i.rings){for(let e=1;e<n.length;e++)l+=L(n[e],n[e-1],r);(n[0][0]!==n[n.length-1][0]||n[0][1]!==n[n.length-1][1]||n[0][2]!==void 0&&n[0][2]!==n[n.length-1][2])&&(l+=L(n[0],n[n.length-1],r))}else i.type==="extent"&&(l+=2*L([i.xmin,i.ymin,0],[i.xmax,i.ymin,0],r),l+=2*L([i.xmin,i.ymin,0],[i.xmin,i.ymax,0],r),l*=2,l+=4*Math.abs(w(i.zmax,0)*r-w(i.zmin,0)*r));const c=new A({hasZ:!1,hasM:!1,spatialReference:i.spatialReference,paths:[[[0,0],[0,l]]]});return Z(c,t)}function kn(i){i.mode==="async"&&(i.functions.disjoint=function(t,r){return i.standardFunctionAsync(t,r,(l,c,n)=>(F(n=f(n),t,r),n[0]===null||n[1]===null||yn(n[0],n[1])))},i.functions.intersects=function(t,r){return i.standardFunctionAsync(t,r,(l,c,n)=>(F(n=f(n),t,r),n[0]!==null&&n[1]!==null&&pn(n[0],n[1])))},i.functions.touches=function(t,r){return i.standardFunctionAsync(t,r,(l,c,n)=>(F(n=f(n),t,r),n[0]!==null&&n[1]!==null&&vn(n[0],n[1])))},i.functions.crosses=function(t,r){return i.standardFunctionAsync(t,r,(l,c,n)=>(F(n=f(n),t,r),n[0]!==null&&n[1]!==null&&gn(n[0],n[1])))},i.functions.within=function(t,r){return i.standardFunctionAsync(t,r,(l,c,n)=>(F(n=f(n),t,r),n[0]!==null&&n[1]!==null&&Pn(n[0],n[1])))},i.functions.contains=function(t,r){return i.standardFunctionAsync(t,r,(l,c,n)=>(F(n=f(n),t,r),n[0]!==null&&n[1]!==null&&In(n[0],n[1])))},i.functions.overlaps=function(t,r){return i.standardFunctionAsync(t,r,(l,c,n)=>(F(n=f(n),t,r),n[0]!==null&&n[1]!==null&&An(n[0],n[1])))},i.functions.equals=function(t,r){return i.standardFunctionAsync(t,r,(l,c,n)=>(h(n,2,2,t,r),n[0]===n[1]||(n[0]instanceof d&&n[1]instanceof d?Fn(n[0],n[1]):(V(n[0])&&V(n[1])||!!(W(n[0])&&W(n[1])||B(n[0])&&B(n[1])))&&n[0].equals(n[1]))))},i.functions.relate=function(t,r){return i.standardFunctionAsync(t,r,(l,c,n)=>{if(n=f(n),h(n,3,3,t,r),n[0]instanceof d&&n[1]instanceof d)return bn(n[0],n[1],q(n[2]));if(n[0]instanceof d&&n[1]===null||n[1]instanceof d&&n[0]===null||n[0]===null&&n[1]===null)return!1;throw new a(t,s.InvalidParameter,r)})},i.functions.intersection=function(t,r){return i.standardFunctionAsync(t,r,(l,c,n)=>(F(n=f(n),t,r),n[0]===null||n[1]===null?null:Rn(n[0],n[1])))},i.functions.union=function(t,r){return i.standardFunctionAsync(t,r,(l,c,n)=>{const e=[];if((n=f(n)).length===0)throw new a(t,s.WrongNumberOfParameters,r);if(n.length===1)if(g(n[0])){const o=f(n[0]);for(let u=0;u<o.length;u++)if(o[u]!==null){if(!(o[u]instanceof d))throw new a(t,s.InvalidParameter,r);e.push(o[u])}}else{if(!P(n[0])){if(n[0]instanceof d)return C(I(n[0]),t.spatialReference);if(n[0]===null)return null;throw new a(t,s.InvalidParameter,r)}{const o=f(n[0].toArray());for(let u=0;u<o.length;u++)if(o[u]!==null){if(!(o[u]instanceof d))throw new a(t,s.InvalidParameter,r);e.push(o[u])}}}else for(let o=0;o<n.length;o++)if(n[o]!==null){if(!(n[o]instanceof d))throw new a(t,s.InvalidParameter,r);e.push(n[o])}return e.length===0?null:Nn(e)})},i.functions.difference=function(t,r){return i.standardFunctionAsync(t,r,(l,c,n)=>(F(n=f(n),t,r),n[0]===null?null:n[1]===null?I(n[0]):Sn(n[0],n[1])))},i.functions.symmetricdifference=function(t,r){return i.standardFunctionAsync(t,r,(l,c,n)=>(F(n=f(n),t,r),n[0]===null&&n[1]===null?null:n[0]===null?I(n[1]):n[1]===null?I(n[0]):On(n[0],n[1])))},i.functions.clip=function(t,r){return i.standardFunctionAsync(t,r,(l,c,n)=>{if(n=f(n),h(n,2,2,t,r),!(n[1]instanceof T)&&n[1]!==null)throw new a(t,s.InvalidParameter,r);if(n[0]===null)return null;if(!(n[0]instanceof d))throw new a(t,s.InvalidParameter,r);return n[1]===null?null:xn(n[0],n[1])})},i.functions.cut=function(t,r){return i.standardFunctionAsync(t,r,(l,c,n)=>{if(n=f(n),h(n,2,2,t,r),!(n[1]instanceof A)&&n[1]!==null)throw new a(t,s.InvalidParameter,r);if(n[0]===null)return[];if(!(n[0]instanceof d))throw new a(t,s.InvalidParameter,r);return n[1]===null?[I(n[0])]:Dn(n[0],n[1])})},i.functions.area=function(t,r){return i.standardFunctionAsync(t,r,async(l,c,n)=>{if(h(n,1,2,t,r),(n=f(n))[0]===null)return 0;if(J(n[0])){const e=await n[0].sumArea(j(w(n[1],-1)),!1,t.abortSignal);if(t.abortSignal.aborted)throw new a(t,s.Cancelled,r);return e}if(g(n[0])||P(n[0])){const e=H(n[0],t.spatialReference);return e===null?0:_(e,j(w(n[1],-1)))}if(!(n[0]instanceof d))throw new a(t,s.InvalidParameter,r);return _(n[0],j(w(n[1],-1)))})},i.functions.areageodetic=function(t,r){return i.standardFunctionAsync(t,r,async(l,c,n)=>{if(h(n,1,2,t,r),(n=f(n))[0]===null)return 0;if(J(n[0])){const e=await n[0].sumArea(j(w(n[1],-1)),!0,t.abortSignal);if(t.abortSignal.aborted)throw new a(t,s.Cancelled,r);return e}if(g(n[0])||P(n[0])){const e=H(n[0],t.spatialReference);return e===null?0:$(e,j(w(n[1],-1)))}if(!(n[0]instanceof d))throw new a(t,s.InvalidParameter,r);return $(n[0],j(w(n[1],-1)))})},i.functions.length=function(t,r){return i.standardFunctionAsync(t,r,async(l,c,n)=>{if(h(n,1,2,t,r),(n=f(n))[0]===null)return 0;if(J(n[0])){const e=await n[0].sumLength(y(w(n[1],-1)),!1,t.abortSignal);if(t.abortSignal.aborted)throw new a(t,s.Cancelled,r);return e}if(g(n[0])||P(n[0])){const e=D(n[0],t.spatialReference);return e===null?0:Z(e,y(w(n[1],-1)))}if(!(n[0]instanceof d))throw new a(t,s.InvalidParameter,r);return Z(n[0],y(w(n[1],-1)))})},i.functions.length3d=function(t,r){return i.standardFunctionAsync(t,r,(l,c,n)=>{if(h(n,1,2,t,r),(n=f(n))[0]===null)return 0;if(g(n[0])||P(n[0])){const e=D(n[0],t.spatialReference);return e===null?0:e.hasZ===!0?sn(e,y(w(n[1],-1))):Z(e,y(w(n[1],-1)))}if(!(n[0]instanceof d))throw new a(t,s.InvalidParameter,r);return n[0].hasZ===!0?sn(n[0],y(w(n[1],-1))):Z(n[0],y(w(n[1],-1)))})},i.functions.lengthgeodetic=function(t,r){return i.standardFunctionAsync(t,r,async(l,c,n)=>{if(h(n,1,2,t,r),(n=f(n))[0]===null)return 0;if(J(n[0])){const e=await n[0].sumLength(y(w(n[1],-1)),!0,t.abortSignal);if(t.abortSignal.aborted)throw new a(t,s.Cancelled,r);return e}if(g(n[0])||P(n[0])){const e=D(n[0],t.spatialReference);return e===null?0:E(e,y(w(n[1],-1)))}if(!(n[0]instanceof d))throw new a(t,s.InvalidParameter,r);return E(n[0],y(w(n[1],-1)))})},i.functions.distance=function(t,r){return i.standardFunctionAsync(t,r,(l,c,n)=>{n=f(n),h(n,2,3,t,r);let e=n[0];(g(n[0])||P(n[0]))&&(e=M(n[0],t.spatialReference));let o=n[1];if((g(n[1])||P(n[1]))&&(o=M(n[1],t.spatialReference)),!(e instanceof d))throw new a(t,s.InvalidParameter,r);if(!(o instanceof d))throw new a(t,s.InvalidParameter,r);return jn(e,o,y(w(n[2],-1)))})},i.functions.distancegeodetic=function(t,r){return i.standardFunctionAsync(t,r,(l,c,n)=>{n=f(n),h(n,2,3,t,r);const e=n[0],o=n[1];if(!(e instanceof O))throw new a(t,s.InvalidParameter,r);if(!(o instanceof O))throw new a(t,s.InvalidParameter,r);const u=new A({paths:[],spatialReference:e.spatialReference});return u.addPath([e,o]),E(u,y(w(n[2],-1)))})},i.functions.densify=function(t,r){return i.standardFunctionAsync(t,r,(l,c,n)=>{if(n=f(n),h(n,2,3,t,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new a(t,s.InvalidParameter,r);const e=b(n[1]);if(isNaN(e))throw new a(t,s.InvalidParameter,r);if(e<=0)throw new a(t,s.InvalidParameter,r);return n[0]instanceof x||n[0]instanceof A?nn(n[0],e,y(w(n[2],-1))):n[0]instanceof T?nn(x.fromExtent(n[0]),e,y(w(n[2],-1))):n[0]})},i.functions.densifygeodetic=function(t,r){return i.standardFunctionAsync(t,r,(l,c,n)=>{if(n=f(n),h(n,2,3,t,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new a(t,s.InvalidParameter,r);const e=b(n[1]);if(isNaN(e))throw new a(t,s.InvalidParameter,r);if(e<=0)throw new a(t,s.InvalidParameter,r);return n[0]instanceof x||n[0]instanceof A?tn(n[0],e,y(w(n[2],-1))):n[0]instanceof T?tn(x.fromExtent(n[0]),e,y(w(n[2],-1))):n[0]})},i.functions.generalize=function(t,r){return i.standardFunctionAsync(t,r,(l,c,n)=>{if(n=f(n),h(n,2,4,t,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new a(t,s.InvalidParameter,r);const e=b(n[1]);if(isNaN(e))throw new a(t,s.InvalidParameter,r);return Tn(n[0],e,wn(w(n[2],!0)),y(w(n[3],-1)))})},i.functions.buffer=function(t,r){return i.standardFunctionAsync(t,r,(l,c,n)=>{if(n=f(n),h(n,2,3,t,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new a(t,s.InvalidParameter,r);const e=b(n[1]);if(isNaN(e))throw new a(t,s.InvalidParameter,r);return e===0?I(n[0]):Ln(n[0],e,y(w(n[2],-1)))})},i.functions.buffergeodetic=function(t,r){return i.standardFunctionAsync(t,r,(l,c,n)=>{if(n=f(n),h(n,2,3,t,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new a(t,s.InvalidParameter,r);const e=b(n[1]);if(isNaN(e))throw new a(t,s.InvalidParameter,r);return e===0?I(n[0]):Cn(n[0],e,y(w(n[2],-1)))})},i.functions.offset=function(t,r){return i.standardFunctionAsync(t,r,(l,c,n)=>{if(n=f(n),h(n,2,6,t,r),n[0]===null)return null;if(!(n[0]instanceof x||n[0]instanceof A))throw new a(t,s.InvalidParameter,r);const e=b(n[1]);if(isNaN(e))throw new a(t,s.InvalidParameter,r);const o=b(w(n[4],10));if(isNaN(o))throw new a(t,s.InvalidParameter,r);const u=b(w(n[5],0));if(isNaN(u))throw new a(t,s.InvalidParameter,r);return Jn(n[0],e,y(w(n[2],-1)),q(w(n[3],"round")).toLowerCase(),o,u)})},i.functions.rotate=function(t,r){return i.standardFunctionAsync(t,r,(l,c,n)=>{if(n=f(n),h(n,2,3,t,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new a(t,s.InvalidParameter,r);const e=n[0]instanceof T?x.fromExtent(n[0]):n[0],o=b(n[1]);if(isNaN(o))throw new a(t,s.InvalidParameter,r);const u=w(n[2],null);if(u===null)return rn(e,o);if(u instanceof O)return rn(e,o,u);throw new a(t,s.InvalidParameter,r)})},i.functions.centroid=function(t,r){return i.standardFunctionAsync(t,r,(l,c,n)=>{if(n=f(n),h(n,1,1,t,r),n[0]===null)return null;let e=n[0];if((g(n[0])||P(n[0]))&&(e=M(n[0],t.spatialReference)),e===null)return null;if(!(e instanceof d))throw new a(t,s.InvalidParameter,r);return e instanceof O?C(I(e),t.spatialReference):e instanceof x?e.centroid:e instanceof A?on(e):e instanceof Y?ln(e):e instanceof T?e.center:null})},i.functions.measuretocoordinate=function(t,r){return i.standardFunctionAsync(t,r,(l,c,n)=>{if(n=f(n),h(n,2,2,t,r),n[0]===null)return null;let e=n[0];if((g(n[0])||P(n[0]))&&(e=D(n[0],t.spatialReference)),e===null)return null;if(!(e instanceof d))throw new a(t,s.InvalidParameter,r);if(!(e instanceof A))throw new a(t,s.InvalidParameter,r);if(k(n[1]===!1))throw new a(t,s.InvalidParameter,r);const o=cn(e,n[1]);return o?N.convertObjectToArcadeDictionary(o,S(t),!1,!0):null})},i.functions.pointtocoordinate=function(t,r){return i.standardFunctionAsync(t,r,(l,c,n)=>{if(n=f(n),h(n,2,2,t,r),n[0]===null)return null;let e=n[0];if((g(n[0])||P(n[0]))&&(e=D(n[0],t.spatialReference)),e===null)return null;if(!(e instanceof d))throw new a(t,s.InvalidParameter,r);if(!(e instanceof A))throw new a(t,s.InvalidParameter,r);const o=n[1];if(o===null)return null;if(!(o instanceof O))throw new a(t,s.InvalidParameter,r);if(k(n[1]===!1))throw new a(t,s.InvalidParameter,r);const u=un(e,o);return u?N.convertObjectToArcadeDictionary(u,S(t),!1,!0):null})},i.functions.distancetocoordinate=function(t,r){return i.standardFunctionAsync(t,r,(l,c,n)=>{if(n=f(n),h(n,2,2,t,r),n[0]===null)return null;let e=n[0];if((g(n[0])||P(n[0]))&&(e=D(n[0],t.spatialReference)),e===null)return null;if(!(e instanceof d))throw new a(t,s.InvalidParameter,r);if(!(e instanceof A))throw new a(t,s.InvalidParameter,r);if(k(n[1]===!1))throw new a(t,s.InvalidParameter,r);const o=fn(e,n[1]);return o?N.convertObjectToArcadeDictionary(o,S(t),!1,!0):null})},i.functions.multiparttosinglepart=function(t,r){return i.standardFunctionAsync(t,r,async(l,c,n)=>{if(n=f(n),h(n,1,1,t,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new a(t,s.InvalidParameter,r);if(n[0]instanceof O)return[C(I(n[0]),t.spatialReference)];if(n[0]instanceof T)return[C(I(n[0]),t.spatialReference)];const e=await en(n[0]);if(e instanceof x){const o=[],u=[];for(let m=0;m<e.rings.length;m++)if(e.isClockwise(e.rings[m])){const p=G({rings:[e.rings[m]],hasZ:e.hasZ===!0,hasM:e.hasM===!0,spatialReference:e.spatialReference.toJSON()});o.push(p)}else u.push({ring:e.rings[m],pt:e.getPoint(m,0)});for(let m=0;m<u.length;m++)for(let p=0;p<o.length;p++)if(o[p].contains(u[m].pt)){o[p].addRing(u[m].ring);break}return o}if(e instanceof A){const o=[];for(let u=0;u<e.paths.length;u++){const m=G({paths:[e.paths[u]],hasZ:e.hasZ===!0,hasM:e.hasM===!0,spatialReference:e.spatialReference.toJSON()});o.push(m)}return o}if(n[0]instanceof Y){const o=[],u=C(I(n[0]),t.spatialReference);for(let m=0;m<u.points.length;m++)o.push(u.getPoint(m));return o}return null})},i.functions.issimple=function(t,r){return i.standardFunctionAsync(t,r,(l,c,n)=>{if(n=f(n),h(n,1,1,t,r),n[0]===null)return!0;if(!(n[0]instanceof d))throw new a(t,s.InvalidParameter,r);return Zn(n[0])})},i.functions.simplify=function(t,r){return i.standardFunctionAsync(t,r,(l,c,n)=>{if(n=f(n),h(n,1,1,t,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new a(t,s.InvalidParameter,r);return en(n[0])})},i.functions.convexhull=function(t,r){return i.standardFunctionAsync(t,r,(l,c,n)=>{if(n=f(n),h(n,1,1,t,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new a(t,s.InvalidParameter,r);return Un(n[0])})},i.functions.getuser=function(t,r){return i.standardFunctionAsync(t,r,async(l,c,n)=>{h(n,0,2,t,r);let e=w(n[1],""),o=e===!0;if(e=e===!0||e===!1?"":q(e),n.length===0||n[0]instanceof z){let m;m=t.services?.portal?t.services.portal:Q.getDefault(),n.length>0&&(m=K(n[0],m));const p=await an(m,e,o);if(p){const R=JSON.parse(JSON.stringify(p));for(const v of["lastLogin","created","modified"])R[v]!==void 0&&R[v]!==null&&(R[v]=new Date(R[v]));return N.convertObjectToArcadeDictionary(R,S(t))}return null}let u=null;if(J(n[0])&&(u=n[0]),u){if(o=!1,e)return null;await u.load();const m=await u.getOwningSystemUrl();if(!m){if(!e){const v=await u.getIdentityUser();return v?N.convertObjectToArcadeDictionary({username:v},S(t)):null}return null}let p;p=t.services?.portal?t.services.portal:Q.getDefault(),p=K(new z(m),p);const R=await an(p,e,o);if(R){const v=JSON.parse(JSON.stringify(R));for(const U of["lastLogin","created","modified"])v[U]!==void 0&&v[U]!==null&&(v[U]=new Date(v[U]));return N.convertObjectToArcadeDictionary(v,S(t))}return null}throw new a(t,s.InvalidParameter,r)})},i.functions.nearestcoordinate=function(t,r){return i.standardFunctionAsync(t,r,async(l,c,n)=>{if(n=f(n),h(n,2,2,t,r),!(n[0]instanceof d||n[0]===null))throw new a(t,s.InvalidParameter,r);if(!(n[1]instanceof O||n[1]===null))throw new a(t,s.InvalidParameter,r);if(n[0]===null||n[1]===null)return null;const e=await qn(n[0],n[1]);return e===null?null:N.convertObjectToArcadeDictionary({coordinate:e.coordinate,distance:e.distance,sideOfLine:e.distance===0?"straddle":e.isRightSide?"right":"left"},S(t),!1,!0)})},i.functions.nearestvertex=function(t,r){return i.standardFunctionAsync(t,r,async(l,c,n)=>{if(n=f(n),h(n,2,2,t,r),!(n[0]instanceof d||n[0]===null))throw new a(t,s.InvalidParameter,r);if(!(n[1]instanceof O||n[1]===null))throw new a(t,s.InvalidParameter,r);if(n[0]===null||n[1]===null)return null;const e=await Mn(n[0],n[1]);return e===null?null:N.convertObjectToArcadeDictionary({coordinate:e.coordinate,distance:e.distance,sideOfLine:e.distance===0?"straddle":e.isRightSide?"right":"left"},S(t),!1,!0)})})}export{kn as registerFunctions};
