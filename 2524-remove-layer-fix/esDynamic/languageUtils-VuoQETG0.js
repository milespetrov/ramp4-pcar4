import{r as q,aO as nt,bv as x,bC as H,aT as K,bD as V,au as W,cH as I,av as Ne,at as Ce,b3 as st,h3 as it,eP as lt,B as ut,H as ct}from"./main-DJHcSGyV.js";import{m as w,n as ft,a as dt,h as pt}from"./TimeOnly-CvmakgWj.js";import{t as F}from"./ImmutableArray-CiJxhY8_.js";import{u as mt,w as Te}from"./shared-Pl_ufmBB.js";import{l as ht,p as yt}from"./number-DLq4IPb_.js";import{b as gt}from"./Query-Cheo4ZYH.js";let $=class{};var n;(function(e){e.AsyncNotEnabled="AsyncNotEnabled",e.ModulesNotSupported="ModulesNotSupported",e.CircularModules="CircularModules",e.CannotCompareDateAndTime="CannotCompareDateAndTime",e.NeverReach="NeverReach",e.UnsupportedHashType="UnsupportedHashType",e.InvalidParameter="InvalidParameter",e.FeatureSetDoesNotHaveSubtypes="FeatureSetDoesNotHaveSubtypes",e.UnexpectedToken="UnexpectedToken",e.Unrecognized="Unrecognized",e.UnrecognizedType="UnrecognizedType",e.MaximumCallDepth="MaximumCallDepth",e.BooleanConditionRequired="BooleanConditionRequired",e.TypeNotAllowedInFeature="TypeNotAllowedInFeature",e.KeyMustBeString="KeyMustBeString",e.WrongNumberOfParameters="WrongNumberOfParameters",e.CallNonFunction="CallNonFunction",e.NoFunctionInTemplateLiteral="NoFunctionInTemplateLiteral",e.NoFunctionInDictionary="NoFunctionInDictionary",e.NoFunctionInArray="NoFunctionInArray",e.AssignModuleFunction="AssignModuleFunction",e.LogicExpressionOrAnd="LogicExpressionOrAnd",e.LogicalExpressionOnlyBoolean="LogicalExpressionOnlyBoolean",e.FunctionNotFound="FunctionNotFound",e.InvalidMemberAccessKey="InvalidMemberAccessKey",e.UnsupportedUnaryOperator="UnsupportUnaryOperator",e.InvalidIdentifier="InvalidIdentifier",e.MemberOfNull="MemberOfNull",e.UnsupportedOperator="UnsupportedOperator",e.Cancelled="Cancelled",e.ModuleAccessorMustBeString="ModuleAccessorMustBeString",e.ModuleExportNotFound="ModuleExportNotFound",e.Immutable="Immutable",e.OutOfBounds="OutOfBounds",e.IllegalResult="IllegalResult",e.FieldNotFound="FieldNotFound",e.PortalRequired="PortalRequired",e.LogicError="LogicError",e.ArrayAccessorMustBeNumber="ArrayAccessMustBeNumber",e.KeyAccessorMustBeString="KeyAccessorMustBeString",e.WrongSpatialReference="WrongSpatialReference",e.CannotChangeTimeZoneTime="CannotChangeTimeZoneTime",e.CannotChangeTimeZoneDateOnly="CannotChangeTimeZoneDateOnly"})(n||(n={}));const Ae={[n.TypeNotAllowedInFeature]:"Feature attributes only support dates, numbers, strings, guids.",[n.LogicError]:"Logic error - {reason}",[n.CannotCompareDateAndTime]:"Cannot compare date or dateonly with timeonly types",[n.NeverReach]:"Encountered unreachable logic",[n.AsyncNotEnabled]:"Async Arcade must be enabled for this script",[n.ModuleAccessorMustBeString]:"Module accessor must be a string",[n.ModuleExportNotFound]:"Module has no export with provided identifier",[n.ModulesNotSupported]:"Current profile does not support modules",[n.ArrayAccessorMustBeNumber]:"Array accessor must be a number",[n.FunctionNotFound]:"Function not found",[n.FieldNotFound]:"Key not found - {key}",[n.CircularModules]:"Circular module dependencies are not allowed",[n.Cancelled]:"Execution cancelled",[n.UnsupportedHashType]:"Type not supported in hash function",[n.IllegalResult]:"Value is not a supported return type",[n.PortalRequired]:"Portal is required",[n.InvalidParameter]:"Invalid parameter",[n.WrongNumberOfParameters]:"Call with wrong number of parameters",[n.Unrecognized]:"Unrecognized code structure",[n.UnrecognizedType]:"Unrecognized type",[n.WrongSpatialReference]:"Cannot work with geometry in this spatial reference. It is different to the execution spatial reference",[n.BooleanConditionRequired]:"Conditions must use booleans",[n.NoFunctionInDictionary]:"Dictionaries cannot contain functions.",[n.NoFunctionInArray]:"Arrays cannot contain functions.",[n.NoFunctionInTemplateLiteral]:"Template Literals do not expect functions by value.",[n.KeyAccessorMustBeString]:"Accessor must be a string",[n.KeyMustBeString]:"Object keys must be a string",[n.Immutable]:"Object is immutable",[n.UnexpectedToken]:"Unexpected token",[n.MemberOfNull]:"Cannot access property of null object",[n.MaximumCallDepth]:"Exceeded maximum function depth",[n.OutOfBounds]:"Out of bounds",[n.InvalidIdentifier]:"Identifier not recognized",[n.CallNonFunction]:"Expression is not a function",[n.InvalidMemberAccessKey]:"Cannot access value using a key of this type",[n.AssignModuleFunction]:"Cannot assign function to module variable",[n.UnsupportedUnaryOperator]:"Unsupported unary operator",[n.UnsupportedOperator]:"Unsupported operator",[n.LogicalExpressionOnlyBoolean]:"Logical expressions must be boolean",[n.LogicExpressionOrAnd]:"Logical expression can only be combined with || or &&",[n.CannotChangeTimeZoneTime]:"Cannot change the timezone of a Time",[n.CannotChangeTimeZoneDateOnly]:"Cannot change the timezone of a DateOnly",[n.FeatureSetDoesNotHaveSubtypes]:"FeatureSet does not have subtypes"};let bt=class extends Error{constructor(...e){super(...e)}};class Y extends bt{constructor(t,r){super(Q(r)+t.message,{cause:t}),this.loc=null,Error.captureStackTrace&&Error.captureStackTrace(this,Y),r?.loc&&(this.loc=r.loc)}}class T extends Error{constructor(t,r,a,o){super("Execution error - "+Q(a)+q(Ae[r],o)),this.loc=null,this.declaredRootClass="esri.arcade.arcadeexecutionerror",Error.captureStackTrace&&Error.captureStackTrace(this,T),a?.loc&&(this.loc=a.loc)}}function Q(e){return e&&e.loc?`Line : ${e.loc.start?.line}, ${e.loc.start?.column}: `:""}class ye extends Error{constructor(t,r,a,o){super("Compilation error - "+Q(a)+q(Ae[r],o)),this.loc=null,this.declaredRootClass="esri.arcade.arcadecompilationerror",Error.captureStackTrace&&Error.captureStackTrace(this,ye),a?.loc&&(this.loc=a.loc)}}let St=class ot extends Error{constructor(){super("Uncompilable code structures"),this.declaredRootClass="esri.arcade.arcadeuncompilableerror",Error.captureStackTrace&&Error.captureStackTrace(this,ot)}};function Nt(e,t,r){return r.declaredRootClass==="esri.arcade.arcadeexecutionerror"||r.declaredRootClass==="esri.arcade.arcadecompilationerror"?r.loc===null&&t?.loc?new Y(r,{cause:r}):r:(r.declaredRootClass==="esri.arcade.featureset.support.featureseterror"||r.declaredRootClass==="esri.arcade.featureset.support.sqlerror"||r.declaredRootClass,t?.loc?new Y(r,{cause:r}):r)}var _;(function(e){e.UnrecognizedUri="UnrecognizedUri",e.UnsupportedUriProtocol="UnsupportedUriProtocol"})(_||(_={}));const Ct={[_.UnrecognizedUri]:"Unrecognized uri - {uri}",[_.UnsupportedUriProtocol]:"Unrecognized uri protocol"};class ge extends Error{constructor(t,r){super(q(Ct[t],r)),this.declaredRootClass="esri.arcade.arcademoduleerror",Error.captureStackTrace&&Error.captureStackTrace(this,ge)}}class O{constructor(){}}function X(e,t,r){if(e instanceof O&&!(e instanceof j)){const a=new j;return a.fn=e,a.parameterEvaluator=r,a.context=t,a}return e}class Tt extends O{constructor(t){super(),this.fn=t}createFunction(t){return(...r)=>this.fn(t,{preparsed:!0,arguments:r})}call(t,r){return this.fn(t,r)}marshalledCall(t,r,a,o){return o(t,r,(s,u,l)=>{l=l.map(f=>f instanceof O&&!(f instanceof j)?X(f,t,o):f);const p=this.call(a,{args:l});return nt(p)?p.then(f=>X(f,a,o)):p})}}class j extends O{constructor(){super(...arguments),this.fn=null,this.context=null}createFunction(t){return this.fn.createFunction(this.context)}call(t,r){return this.fn.marshalledCall(t,r,this.context,this.parameterEvaluator)}marshalledCall(t,r,a){return this.fn.marshalledCall(t,r,this.context,this.parameterEvaluator)}}class k extends F{constructor(t,r,a,o,s,u){super(t),this._lazyPt=[],this._hasZ=!1,this._hasM=!1,this._spRef=r,this._hasZ=a,this._hasM=o,this._cacheId=s,this._partId=u}get(t){if(this._lazyPt[t]===void 0){const r=this._elements[t];if(r===void 0)return;const a=this._hasZ,o=this._hasM;let s;s=a&&!o?new x(r[0],r[1],r[2],void 0,this._spRef):o&&!a?new x(r[0],r[1],void 0,r[2],this._spRef):a&&o?new x(r[0],r[1],r[2],r[3],this._spRef):new x(r[0],r[1],this._spRef),s.cache._arcadeCacheId=this._cacheId.toString()+"-"+this._partId.toString()+"-"+t.toString(),this._lazyPt[t]=s}return this._lazyPt[t]}equalityTest(t){return t===this||t!==null&&t instanceof k&&t.getUniqueHash()===this.getUniqueHash()}getUniqueHash(){return this._cacheId.toString()+"-"+this._partId.toString()}}class G extends F{constructor(t,r,a,o,s){super(t),this._lazyPath=[],this._hasZ=!1,this._hasM=!1,this._hasZ=a,this._hasM=o,this._spRef=r,this._cacheId=s}get(t){if(this._lazyPath[t]===void 0){const r=this._elements[t];if(r===void 0)return;this._lazyPath[t]=new k(r,this._spRef,this._hasZ,this._hasM,this._cacheId,t)}return this._lazyPath[t]}equalityTest(t){return t===this||t!==null&&t instanceof G&&t.getUniqueHash()===this.getUniqueHash()}getUniqueHash(){return this._cacheId.toString()}}class Fe{constructor(t){this.value=t}}class Me{constructor(t){this.value=t}}const g={type:"VOID"},xe=Symbol("BREAK"),Ze=Symbol("CONTINUE");function R(e,t,r){return t===""||t==null||t===r||t===r?e:e=e.split(t).join(r)}function U(e){return e instanceof O}function ee(e){return e instanceof $}function E(e){return!!y(e)||!!S(e)||!!c(e)||!!m(e)||!!h(e)||!!b(e)||e===null||e===g||typeof e=="number"}function ke(e,t){return e===void 0?t:e}function Ie(e){return e==null?"":C(e)||Z(e)?"Array":c(e)?"Date":h(e)?"Time":m(e)?"DateOnly":y(e)?"String":b(e)?"Boolean":S(e)?"Number":e?.declaredClass==="esri.arcade.Attachment"?"Attachment":e?.declaredClass==="esri.arcade.Portal"?"Portal":e?.declaredClass==="esri.arcade.Dictionary"?"Dictionary":oe(e)?"KnowledgeGraph":e instanceof $?"Module":te(e)?"Feature":e instanceof x?"Point":e instanceof H?"Polygon":e instanceof K?"Polyline":e instanceof V?"Multipoint":e instanceof W?"Extent":U(e)?"Function":re(e)?"FeatureSet":ae(e)?"FeatureSetCollection":e===g?"":typeof e=="number"&&isNaN(e)?"Number":"Unrecognized Type"}function y(e){return typeof e=="string"||e instanceof String}function b(e){return typeof e=="boolean"}function S(e){return typeof e=="number"}function Oe(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}function Re(e){return e instanceof I}function C(e){return Array.isArray(e)}function te(e){return e?.arcadeDeclaredClass==="esri.arcade.Feature"}function De(e){return e?.declaredClass==="esri.Graphic"}function At(e){return e instanceof gt}function re(e){return e?.declaredRootClass==="esri.arcade.featureset.support.FeatureSet"}function ve(e){return e?.declaredClass==="esri.arcade.Dictionary"}function ae(e){return e?.declaredRootClass==="esri.arcade.featureSetCollection"}function oe(e){return e?.declaredClass==="esri.rest.knowledgeGraph.KnowledgeGraph"}function Z(e){return e instanceof F}function c(e){return e instanceof w}function m(e){return e instanceof ft}function h(e){return e instanceof dt}function ne(e){return e!=null&&typeof e=="object"}function P(e){return e instanceof Date}function we(e,t,r,a,o){if(e.length<t||e.length>r)throw new T(a,n.WrongNumberOfParameters,o)}function _e(e){return e<0?-Math.round(-e):Math.round(e)}function se(e,t){return isNaN(e)||t==null||t===""?e.toString():(t=R(t,"\u2030",""),t=R(t,"\xA4",""),ht(e,{pattern:t}))}function B(e,t){return t==null||t===""?e.toISOString(!0):e.toFormat(ie(t),{locale:Ne(),numberingSystem:"latn"})}function ie(e,t=!1){e=e.replaceAll(/LTS|LT|L{1,4}|l{1,4}/g,"[$&]");let r="";const a=/(\[[^[]*\])|(\\)?([Hh]mm(ss)?|Mo|M{1,4}|Do|DDDo|D{1,4}|d{2,4}|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|Z{1,5}|.)/g;for(const o of e.match(a)||[])switch(o){case"D":r+="d";break;case"DD":r+="dd";break;case"DDD":r+="o";break;case"d":r+="c";break;case"ddd":r+="ccc";break;case"dddd":r+="cccc";break;case"M":r+="L";break;case"MM":r+="LL";break;case"MMM":r+="LLL";break;case"MMMM":r+="LLLL";break;case"YY":r+="yy";break;case"Y":case"YYYY":r+="yyyy";break;case"Q":r+="q";break;case"Z":r+="Z";break;case"ZZ":r+="ZZ";break;case"ZZZ":r+="ZZZ";break;case"ZZZZ":r+=t?"[ZZZZ]":"ZZZZ";break;case"ZZZZZ":r+=t?"[ZZZZZ]":"ZZZZZ";break;case"S":r+="'S'";break;case"SS":r+="'SS'";break;case"SSS":r+="u";break;case"A":case"a":r+="a";break;case"m":case"mm":case"h":case"hh":case"H":case"HH":case"s":case"ss":case"X":case"x":r+=o;break;default:o.length>=2&&o.slice(0,1)==="["&&o.slice(-1)==="]"?r+=`'${o.slice(1,-1)}'`:r+=`'${o}'`}return r}function i(e,t,r){switch(r){case">":return e>t;case"<":return e<t;case">=":return e>=t;case"<=":return e<=t}return!1}function Ue(e,t,r){if(e===null){if(t===null||t===g)return i(null,null,r);if(S(t))return i(0,t,r);if(y(t)||b(t))return i(0,d(t),r);if(c(t))return i(0,t.toNumber(),r);if(h(t)||m(t))return i(e,t.toNumber(),r)}if(e===g){if(t===null||t===g)return i(null,null,r);if(S(t))return i(0,t,r);if(y(t)||b(t))return i(0,d(t),r);if(c(t))return i(0,t.toNumber(),r);if(h(t)||m(t))return i(e,t.toNumber(),r)}else if(S(e)){if(S(t))return i(e,t,r);if(b(t))return i(e,d(t),r);if(t===null||t===g)return i(e,0,r);if(y(t))return i(e,d(t),r);if(c(t)||h(t)||m(t))return i(e,t.toNumber(),r)}else if(y(e)){if(y(t))return i(M(e),M(t),r);if(c(t)||h(t)||m(t))return i(d(e),t.toNumber(),r);if(S(t))return i(d(e),t,r);if(t===null||t===g)return i(d(e),0,r);if(b(t))return i(d(e),d(t),r)}else if(c(e)){if(c(t))return e.timeZone!==t.timeZone&&(e.isUnknownTimeZone?e=w.arcadeDateAndZoneToArcadeDate(e,t.timeZone):t.isUnknownTimeZone&&(t=w.arcadeDateAndZoneToArcadeDate(t,e.timeZone))),i(e.toNumber(),t.toNumber(),r);if(t===null||t===g)return i(e.toNumber(),0,r);if(S(t))return i(e.toNumber(),t,r);if(b(t)||y(t))return i(e.toNumber(),d(t),r);if(h(t))throw new T(null,n.CannotCompareDateAndTime,null);if(m(t))return i(e.toNumber(),t.toNumber(),r)}else if(b(e)){if(b(t))return i(e,t,r);if(S(t))return i(d(e),d(t),r);if(c(t)||h(t)||m(t))return i(d(e),t.toNumber(),r);if(t===null||t===g)return i(d(e),0,r);if(y(t))return i(d(e),d(t),r)}else if(m(e)){if(c(t))return i(e.toNumber(),t.toNumber(),r);if(t===null||t===g)return i(e.toNumber(),0,r);if(S(t))return i(e.toNumber(),t,r);if(b(t)||y(t))return i(e.toNumber(),d(t),r);if(h(t))throw new T(null,n.CannotCompareDateAndTime,null);if(m(t))return i(e.toNumber(),t.toNumber(),r)}else if(h(e)){if(c(t))throw new T(null,n.CannotCompareDateAndTime,null);if(t===null||t===g)return i(e.toNumber(),0,r);if(S(t))return i(e.toNumber(),t,r);if(b(t)||y(t))return i(e.toNumber(),d(t),r);if(h(t))return i(e.toNumber(),t.toNumber(),r);if(m(t))throw new T(null,n.CannotCompareDateAndTime,null)}return!!le(e,t)&&(r==="<="||r===">=")}function le(e,t){if(e===t||e===null&&t===g||t===null&&e===g)return!0;if(c(e)&&c(t)||h(e)&&h(t)||m(e)&&m(t))return e.equals(t);if(e instanceof G||e instanceof k)return e.equalityTest(t);if(e instanceof x&&t instanceof x){const r=e.cache._arcadeCacheId,a=t.cache._arcadeCacheId;if(r!=null)return r===a}return!!(ne(e)&&ne(t)&&(e._arcadeCacheId===t._arcadeCacheId&&e._arcadeCacheId!==void 0&&e._arcadeCacheId!==null||e._underlyingGraphic===t._underlyingGraphic&&e._underlyingGraphic!==void 0&&e._underlyingGraphic!==null))}function M(e,t){if(y(e))return e;if(e===null)return"";if(S(e))return se(e,t);if(b(e))return e.toString();if(c(e))return B(e,t);if(h(e)||m(e))return e.toFormat(t);if(e instanceof I)return JSON.stringify(e.toJSON());if(C(e)){const r=[];for(let a=0;a<e.length;a++)r[a]=J(e[a]);return"["+r.join(",")+"]"}if(e instanceof F){const r=[];for(let a=0;a<e.length();a++)r[a]=J(e.get(a));return"["+r.join(",")+"]"}return e!==null&&typeof e=="object"&&e.castToText!==void 0?e.castToText():U(e)?"object, Function":e===g?"":ee(e)?"object, Module":""}function Ee(e){const t=[];if(!C(e))return null;if(e instanceof F){for(let r=0;r<e.length();r++)t[r]=d(e.get(r));return t}for(let r=0;r<e.length;r++)t[r]=d(e[r]);return t}function ue(e,t,r=!1){if(y(e))return e;if(e===null)return"";if(S(e))return se(e,t);if(b(e))return e.toString();if(c(e))return B(e,t);if(h(e)||m(e))return e.toFormat(t);if(e instanceof I)return e instanceof W?'{"xmin":'+e.xmin.toString()+',"ymin":'+e.ymin.toString()+","+(e.hasZ?'"zmin":'+e.zmin.toString()+",":"")+(e.hasM?'"mmin":'+e.mmin.toString()+",":"")+'"xmax":'+e.xmax.toString()+',"ymax":'+e.ymax.toString()+","+(e.hasZ?'"zmax":'+e.zmax.toString()+",":"")+(e.hasM?'"mmax":'+e.mmax.toString()+",":"")+'"spatialReference":'+de(e.spatialReference)+"}":de(e.toJSON(),(a,o)=>a.key===o.key?0:a.key==="spatialReference"?1:o.key==="spatialReference"||a.key<o.key?-1:a.key>o.key?1:0);if(C(e)){const a=[];for(let o=0;o<e.length;o++)a[o]=J(e[o],r);return"["+a.join(",")+"]"}if(e instanceof F){const a=[];for(let o=0;o<e.length();o++)a[o]=J(e.get(o),r);return"["+a.join(",")+"]"}return e!==null&&typeof e=="object"&&e.castToText!==void 0?e.castToText(r):U(e)?"object, Function":e===g?"":ee(e)?"object, Module":""}function J(e,t=!1){if(e===null)return"null";if(b(e)||S(e)||y(e))return JSON.stringify(e);if(e instanceof I||e instanceof F||Array.isArray(e))return ue(e,null,t);if(c(e))return JSON.stringify(t?e.getTime():B(e,""));if(h(e)||m(e))return JSON.stringify(e.toString());if(e!==null&&typeof e=="object"){if(e.castToText!==void 0)return e.castToText(t)}else if(e===g)return"null";return"null"}function d(e,t){return S(e)?e:e===null||e===""?0:c(e)||m(e)||h(e)?NaN:b(e)?e?1:0:C(e)||e===""||e===void 0?NaN:t!==void 0&&y(e)?(t=R(t,"\u2030",""),t=R(t,"\xA4",""),yt(e,{pattern:t})):e===g?0:Number(e)}function Pe(e,t){if(c(e))return e;if(y(e)){const r=Ft(e,t);if(r)return w.dateTimeToArcadeDate(r)}return null}function Ft(e,t){const r=/ (\d\d)/,a=pt(t);let o=Ce.fromISO(e,{zone:a});return o.isValid||r.test(e)&&(e=e.replace(r,"T$1"),o=Ce.fromISO(e,{zone:t}),o.isValid)?o:null}function Le(e){return b(e)?e:y(e)?(e=e.toLowerCase())==="true":!!S(e)&&e!==0&&!isNaN(e)}function Mt(e,t){const r=JSON.parse(e);return r&&!r.spatialReference&&(r.spatialReference=t),st(r)}function ze(e,t){return e==null?null:(e.spatialReference!==null&&e.spatialReference!==void 0||(e.spatialReference=t),e)}function je(e){if(e===null)return null;if(e instanceof x)return e.x==="NaN"||e.x===null||isNaN(e.x)?null:e;if(e instanceof H){if(e.rings.length===0)return null;for(const t of e.rings)if(t.length>0)return e;return null}if(e instanceof K){if(e.paths.length===0)return null;for(const t of e.paths)if(t.length>0)return e;return null}return e instanceof V?e.points.length===0?null:e:e instanceof W?e.xmin==="NaN"||e.xmin===null||isNaN(e.xmin)?null:e:null}function ce(e,t){if(!e||!e.domain)return t;let r=null,a=null;if(c(t))r=t.toNumber();else if(m(t))r=t.toString();else if(h(t))r=t.toStorageString();else if(e.field.type==="string"||e.field.type==="esriFieldTypeString")r=M(t);else{if(t==null)return null;if(t==="")return t;r=d(t)}for(let o=0;o<e.domain.codedValues.length;o++){const s=e.domain.codedValues[o];s.code===r&&(a=s)}return a===null?M(t):a.name}function fe(e,t){if(!e||!e.domain)return t;let r=null;const a=M(t);for(let o=0;o<e.domain.codedValues.length;o++){const s=e.domain.codedValues[o];s.name===a&&(r=s)}return r===null?t:r.code}function L(e,t,r=null,a=null){if(!t||!t.fields)return null;let o,s,u=null;for(let N=0;N<t.fields.length;N++){const A=t.fields[N];A.name.toLowerCase()===e.toString().toLowerCase()&&(u=A)}if(u===null)throw new T(null,n.FieldNotFound,null,{key:e});let l=t.typeIdField,p="id",f=t.types;if(t.subtypeField&&(l=t.subtypeField,p="code",f=t.subtypes??[]),a===null&&r&&l)a=r.hasField(l)?r.field(l):null;else if(l&&a!==null){let N=!1;for(const A of f||[])if(a===A[p]){N=!0;break}if(!N){for(const A of f||[])if(a===A.name){a=A[p],N=!0;break}}N||(a=null,r&&l&&(a=r.hasField(l)?r.field(l):null))}return a!=null&&f.some(N=>N[p]===a&&(o=N.domains?.[u.name],o&&o.type==="inherited"&&(o=Be(u.name,t),s=!0),!0)),s||o||(o=Be(e,t)),{field:u,domain:o}}function Be(e,t){let r;return t.fields.some(a=>(a.name.toLowerCase()===e.toLowerCase()&&(r=a.domain),!!r)),r}function de(e,t){t||(t={}),typeof t=="function"&&(t={cmp:t});const r=typeof t.cycles=="boolean"&&t.cycles,a=t.cmp&&(o=t.cmp,function(u){return function(l,p){const f={key:l,value:u[l]},N={key:p,value:u[p]};return o(f,N)}});var o;const s=[];return function u(l){if(l?.toJSON&&typeof l.toJSON=="function"&&(l=l.toJSON()),l===void 0)return;if(typeof l=="number")return isFinite(l)?""+l:"null";if(typeof l!="object")return JSON.stringify(l);let p,f;if(Array.isArray(l)){for(f="[",p=0;p<l.length;p++)p&&(f+=","),f+=u(l[p])||"null";return f+"]"}if(l===null)return"null";if(s.includes(l)){if(r)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}const N=s.push(l)-1,A=Object.keys(l).sort(a?.(l));for(f="",p=0;p<A.length;p++){const be=A[p],Se=u(l[be]);Se&&(f&&(f+=","),f+=JSON.stringify(be)+":"+Se)}return s.splice(N,1),"{"+f+"}"}(e)}function Je(e){if(e===null)return null;const t=[];for(const r of e)r?.arcadeDeclaredClass&&r.arcadeDeclaredClass==="esri.arcade.Feature"?t.push(r.geometry()):t.push(r);return t}function D(e,t){if(!(t instanceof x))throw new T(null,n.InvalidParameter,null);e.push(t.hasZ?t.hasM?[t.x,t.y,t.z,t.m]:[t.x,t.y,t.z]:[t.x,t.y])}function Ye(e,t){if(C(e)||Z(e)){let r=!1,a=!1,o=[],s=t;if(C(e)){for(const u of e)D(o,u);o.length>0&&(s=e[0].spatialReference,r=e[0].hasZ,a=e[0].hasM)}else if(e instanceof k)o=e._elements,o.length>0&&(r=e._hasZ,a=e._hasM,s=e.get(0).spatialReference);else{if(!Z(e))throw new T(null,n.InvalidParameter,null);for(const u of e.toArray())D(o,u);o.length>0&&(s=e.get(0).spatialReference,r=e.get(0).hasZ===!0,a=e.get(0).hasM===!0)}return o.length===0?null:(it(o)||(o=o.slice().reverse()),new H({rings:[o],spatialReference:s,hasZ:r,hasM:a}))}return e}function Ge(e,t){if(C(e)||Z(e)){let r=!1,a=!1,o=[],s=t;if(C(e)){for(const u of e)D(o,u);o.length>0&&(s=e[0].spatialReference,r=e[0].hasZ===!0,a=e[0].hasM===!0)}else if(e instanceof k)o=e._elements,o.length>0&&(r=e._hasZ,a=e._hasM,s=e.get(0).spatialReference);else if(Z(e)){for(const u of e.toArray())D(o,u);o.length>0&&(s=e.get(0).spatialReference,r=e.get(0).hasZ===!0,a=e.get(0).hasM===!0)}return o.length===0?null:new K({paths:[o],spatialReference:s,hasZ:r,hasM:a})}return e}function qe(e,t){if(C(e)||Z(e)){let r=!1,a=!1,o=[],s=t;if(C(e)){for(const u of e)D(o,u);o.length>0&&(s=e[0].spatialReference,r=e[0].hasZ===!0,a=e[0].hasM===!0)}else if(e instanceof k)o=e._elements,o.length>0&&(r=e._hasZ,a=e._hasM,s=e.get(0).spatialReference);else if(Z(e)){for(const u of e.toArray())D(o,u);o.length>0&&(s=e.get(0).spatialReference,r=e.get(0).hasZ===!0,a=e.get(0).hasM===!0)}return o.length===0?null:new V({points:o,spatialReference:s,hasZ:r,hasM:a})}return e}function He(e,t=!1){const r=[];if(e===null)return r;if(C(e)===!0){for(let a=0;a<e.length;a++){const o=M(e[a]);o===""&&t!==!0||r.push(o)}return r}if(e instanceof F){for(let a=0;a<e.length();a++){const o=M(e.get(a));o===""&&t!==!0||r.push(o)}return r}if(E(e)){const a=M(e);return a===""&&t!==!0||r.push(a),r}return[]}let pe=0;function Ke(e){return pe++,pe%100==0?(pe=0,new Promise(t=>{setTimeout(()=>{t(e)},0)})):e}function Ve(e,t,r){switch(r){case"&":return e&t;case"|":return e|t;case"^":return e^t;case"<<":return e<<t;case">>":return e>>t;case">>>":return e>>>t}}function v(e,t=null){return e==null?null:b(e)||S(e)||y(e)?e:e instanceof I?t?.keepGeometryType===!0?e:e.toJSON():e instanceof F?e.toArray().map(r=>v(r,t)):Array.isArray(e)?e.map(r=>v(r,t)):P(e)?e:c(e)?e.toJSDate():h(e)?e.toString():m(e)?e.toJSDate():e!==null&&typeof e=="object"&&e.castAsJson!==void 0?e.castAsJson(t):null}async function xt(e,t,r,a,o){const s=await me(e,t,r);o[a]=s}async function me(e,t=null,r=null){if(e instanceof F&&(e=e.toArray()),e==null)return null;if(E(e)||e instanceof I||P(e)||c(e))return v(e,r);if(Array.isArray(e)){const a=[],o=[];for(const s of e)s===null||E(s)||s instanceof I||P(s)||c(s)?o.push(v(s,r)):(o.push(null),a.push(xt(s,t,r,o.length-1,o)));return a.length>0&&await Promise.all(a),o}return e!==null&&typeof e=="object"&&e.castAsJsonAsync!==void 0?e.castAsJsonAsync(t,r):null}function z(e){return he(e)?e.parent:e}function he(e){return e&&"declaredClass"in e&&e.declaredClass==="esri.layers.support.SubtypeSublayer"}function Zt(e){return e&&"declaredClass"in e&&e.declaredClass==="esri.layers.SubtypeGroupLayer"}function We(e,t,r){const a=z(e.fullSchema());return a===null||!a.fields?null:L(t,a,e,r)}function $e(e){const t=z(e.fullSchema());return t===null?null:t.fields?t.subtypeField?{subtypeField:t.subtypeField,subtypes:t.subtypes?t.subtypes.map(r=>({name:r.name,code:r.code})):[]}:t.typeIdField?{subtypeField:t.typeIdField,subtypes:t.types?t.types.map(r=>({name:r.name,code:r.id})):[]}:null:null}function Qe(e,t,r,a){const o=z(e.fullSchema());if(o===null||!o.fields)return null;const s=L(t,o,e,a);if(r===void 0)try{r=e.field(t)}catch{return null}return ce(s,r)}function Xe(e,t,r,a){const o=z(e.fullSchema());if(o===null||!o.fields)return null;if(r===void 0){try{r=e.field(t)}catch{return null}return r}return fe(L(t,o,e,a),r)}function et(e){return e?.timeZone??"system"}function tt(e){const t=z(e.fullSchema());if(t===null||!t.fields)return null;const r=[];for(const a of t.fields)r.push(mt(a));return{objectIdField:t.objectIdField,globalIdField:t.globalIdField??"",geometryType:Te[t.geometryType]===void 0?"":Te[t.geometryType],fields:r}}function rt(e,t){return e==="system"&&(e=w.systemTimeZoneCanonicalName),{version:at,engineVersion:lt,timeZone:e,spatialReference:t instanceof ut?t.toJSON():t,application:ct.applicationName??"",engine:"web",locale:Ne()}}const at="1.28",kt=Object.freeze(Object.defineProperty({__proto__:null,ImplicitResult:Me,ReturnResult:Fe,absRound:_e,arcadeVersion:at,autoCastArrayOfPointsToMultiPoint:qe,autoCastArrayOfPointsToPolygon:Ye,autoCastArrayOfPointsToPolyline:Ge,autoCastFeatureToGeometry:Je,binaryOperator:Ve,breakResult:xe,castAsJson:v,castAsJsonAsync:me,continueResult:Ze,defaultExecutingContext:rt,defaultTimeZone:et,defaultUndefined:ke,equalityTest:le,featureDomainCodeLookup:Xe,featureDomainValueLookup:Qe,featureFullDomain:We,featureSchema:tt,featureSubtypes:$e,fixNullGeometry:je,fixSpatialReference:ze,formatDate:B,formatNumber:se,getDomain:L,getDomainCode:fe,getDomainValue:ce,getType:Ie,greaterThanLessThan:Ue,isArray:C,isBoolean:b,isDate:c,isDateOnly:m,isDictionary:ve,isFeature:te,isFeatureSet:re,isFeatureSetCollection:ae,isFunctionParameter:U,isGeometry:Re,isGraphic:De,isImmutableArray:Z,isInteger:Oe,isJsDate:P,isKnowledgeGraph:oe,isModule:ee,isNumber:S,isObject:ne,isQuery:At,isSimpleType:E,isString:y,isSubtypeGrouplayer:Zt,isSubtypeSublayer:he,isTime:h,multiReplace:R,parseGeometryFromJson:Mt,pcCheck:we,stableStringify:de,standardiseDateFormat:ie,tick:Ke,toBoolean:Le,toDate:Pe,toNumber:d,toNumberArray:Ee,toString:M,toStringArray:He,toStringExplicit:ue,voidOperation:g},Symbol.toStringTag,{value:"Module"}));export{oe as $,ze as A,et as B,Qe as C,ce as D,C as E,Xe as F,fe as G,De as H,Ve as I,He as J,re as K,b as L,g as M,ue as N,xe as O,y as P,tt as Q,Ze as R,Le as S,ve as T,te as U,Oe as V,ae as W,Z as X,ke as Y,Re as Z,P as _,T as a,Ye as a0,Ge as a1,qe as a2,Ke as a3,he as a4,E as a5,v as a6,me as a7,k as a8,G as a9,Ie as aa,ie as ab,_e as ac,je as ad,Ee as ae,rt as af,ye as ag,kt as ah,St as ai,ge as aj,_ as ak,j as b,Ue as c,M as d,Tt as e,O as f,h as g,d as h,we as i,Pe as j,c as k,R as l,le as m,X as n,Je as o,L as p,We as q,n as r,$ as s,m as t,Nt as u,U as v,Fe as w,Me as x,$e as y,S as z};
