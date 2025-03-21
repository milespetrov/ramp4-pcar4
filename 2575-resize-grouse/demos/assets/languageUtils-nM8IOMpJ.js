import{r as K,aQ as kn,bx as x,bF as V,aV as W,bG as Q,aw as X,cK as k,ax as fn,av as sn,b5 as In,h6 as On,eS as wn,D as Dn,K as Rn}from"./main-BGj2Vmyg.js";import{m as w,n as vn,a as _n,h as Un}from"./TimeOnly-e2WPpEqu.js";import{t as F}from"./ImmutableArray-BPVd6ESQ.js";import{u as En,w as un}from"./shared-AQsoHnHD.js";import{l as Ln,p as Pn}from"./number-ADFPcfkA.js";import{b as zn}from"./Query-4tc89DuT.js";let dn=class{};var o;(function(n){n.AsyncNotEnabled="AsyncNotEnabled",n.ModulesNotSupported="ModulesNotSupported",n.CircularModules="CircularModules",n.CannotCompareDateAndTime="CannotCompareDateAndTime",n.NeverReach="NeverReach",n.UnsupportedHashType="UnsupportedHashType",n.InvalidParameter="InvalidParameter",n.FeatureSetDoesNotHaveSubtypes="FeatureSetDoesNotHaveSubtypes",n.UnexpectedToken="UnexpectedToken",n.Unrecognized="Unrecognized",n.UnrecognizedType="UnrecognizedType",n.MaximumCallDepth="MaximumCallDepth",n.BooleanConditionRequired="BooleanConditionRequired",n.TypeNotAllowedInFeature="TypeNotAllowedInFeature",n.KeyMustBeString="KeyMustBeString",n.WrongNumberOfParameters="WrongNumberOfParameters",n.CallNonFunction="CallNonFunction",n.NoFunctionInTemplateLiteral="NoFunctionInTemplateLiteral",n.NoFunctionInDictionary="NoFunctionInDictionary",n.NoFunctionInArray="NoFunctionInArray",n.AssignModuleFunction="AssignModuleFunction",n.LogicExpressionOrAnd="LogicExpressionOrAnd",n.LogicalExpressionOnlyBoolean="LogicalExpressionOnlyBoolean",n.FunctionNotFound="FunctionNotFound",n.InvalidMemberAccessKey="InvalidMemberAccessKey",n.UnsupportedUnaryOperator="UnsupportUnaryOperator",n.InvalidIdentifier="InvalidIdentifier",n.MemberOfNull="MemberOfNull",n.UnsupportedOperator="UnsupportedOperator",n.Cancelled="Cancelled",n.ModuleAccessorMustBeString="ModuleAccessorMustBeString",n.ModuleExportNotFound="ModuleExportNotFound",n.Immutable="Immutable",n.OutOfBounds="OutOfBounds",n.IllegalResult="IllegalResult",n.FieldNotFound="FieldNotFound",n.PortalRequired="PortalRequired",n.LogicError="LogicError",n.ArrayAccessorMustBeNumber="ArrayAccessMustBeNumber",n.KeyAccessorMustBeString="KeyAccessorMustBeString",n.WrongSpatialReference="WrongSpatialReference",n.CannotChangeTimeZoneTime="CannotChangeTimeZoneTime",n.CannotChangeTimeZoneDateOnly="CannotChangeTimeZoneDateOnly"})(o||(o={}));const pn={[o.TypeNotAllowedInFeature]:"Feature attributes only support dates, numbers, strings, guids.",[o.LogicError]:"Logic error - {reason}",[o.CannotCompareDateAndTime]:"Cannot compare date or dateonly with timeonly types",[o.NeverReach]:"Encountered unreachable logic",[o.AsyncNotEnabled]:"Async Arcade must be enabled for this script",[o.ModuleAccessorMustBeString]:"Module accessor must be a string",[o.ModuleExportNotFound]:"Module has no export with provided identifier",[o.ModulesNotSupported]:"Current profile does not support modules",[o.ArrayAccessorMustBeNumber]:"Array accessor must be a number",[o.FunctionNotFound]:"Function not found",[o.FieldNotFound]:"Key not found - {key}",[o.CircularModules]:"Circular module dependencies are not allowed",[o.Cancelled]:"Execution cancelled",[o.UnsupportedHashType]:"Type not supported in hash function",[o.IllegalResult]:"Value is not a supported return type",[o.PortalRequired]:"Portal is required",[o.InvalidParameter]:"Invalid parameter",[o.WrongNumberOfParameters]:"Call with wrong number of parameters",[o.Unrecognized]:"Unrecognized code structure",[o.UnrecognizedType]:"Unrecognized type",[o.WrongSpatialReference]:"Cannot work with geometry in this spatial reference. It is different to the execution spatial reference",[o.BooleanConditionRequired]:"Conditions must use booleans",[o.NoFunctionInDictionary]:"Dictionaries cannot contain functions.",[o.NoFunctionInArray]:"Arrays cannot contain functions.",[o.NoFunctionInTemplateLiteral]:"Template Literals do not expect functions by value.",[o.KeyAccessorMustBeString]:"Accessor must be a string",[o.KeyMustBeString]:"Object keys must be a string",[o.Immutable]:"Object is immutable",[o.UnexpectedToken]:"Unexpected token",[o.MemberOfNull]:"Cannot access property of null object",[o.MaximumCallDepth]:"Exceeded maximum function depth",[o.OutOfBounds]:"Out of bounds",[o.InvalidIdentifier]:"Identifier not recognized",[o.CallNonFunction]:"Expression is not a function",[o.InvalidMemberAccessKey]:"Cannot access value using a key of this type",[o.AssignModuleFunction]:"Cannot assign function to module variable",[o.UnsupportedUnaryOperator]:"Unsupported unary operator",[o.UnsupportedOperator]:"Unsupported operator",[o.LogicalExpressionOnlyBoolean]:"Logical expressions must be boolean",[o.LogicExpressionOrAnd]:"Logical expression can only be combined with || or &&",[o.CannotChangeTimeZoneTime]:"Cannot change the timezone of a Time",[o.CannotChangeTimeZoneDateOnly]:"Cannot change the timezone of a DateOnly",[o.FeatureSetDoesNotHaveSubtypes]:"FeatureSet does not have subtypes"};let $n=class extends Error{constructor(...e){super(...e)}};class E extends $n{constructor(e,r){super(nn(r)+e.message,{cause:e}),this.loc=null,Error.captureStackTrace&&Error.captureStackTrace(this,E),r?.loc&&(this.loc=r.loc)}}class A extends Error{constructor(e,r,t,a){super("Execution error - "+nn(t)+K(pn[r],a)),this.loc=null,this.declaredRootClass="esri.arcade.arcadeexecutionerror",Error.captureStackTrace&&Error.captureStackTrace(this,A),t?.loc&&(this.loc=t.loc)}}function nn(n){return n&&n.loc?`Line : ${n.loc.start?.line}, ${n.loc.start?.column}: `:""}class mn extends Error{constructor(e,r,t,a){super("Compilation error - "+nn(t)+K(pn[r],a)),this.loc=null,this.declaredRootClass="esri.arcade.arcadecompilationerror",Error.captureStackTrace&&Error.captureStackTrace(this,mn),t?.loc&&(this.loc=t.loc)}}let ve=class hn extends Error{constructor(){super("Uncompilable code structures"),this.declaredRootClass="esri.arcade.arcadeuncompilableerror",Error.captureStackTrace&&Error.captureStackTrace(this,hn)}};function _e(n,e,r){return r.declaredRootClass==="esri.arcade.arcadeexecutionerror"||r.declaredRootClass==="esri.arcade.arcadecompilationerror"?r.loc===null&&e?.loc?new E(r,{cause:r}):r:(r.declaredRootClass==="esri.arcade.featureset.support.featureseterror"||r.declaredRootClass==="esri.arcade.featureset.support.sqlerror"||r.declaredRootClass,e?.loc?new E(r,{cause:r}):r)}var L;(function(n){n.UnrecognizedUri="UnrecognizedUri",n.UnsupportedUriProtocol="UnsupportedUriProtocol"})(L||(L={}));const Jn={[L.UnrecognizedUri]:"Unrecognized uri - {uri}",[L.UnsupportedUriProtocol]:"Unrecognized uri protocol"};class yn extends Error{constructor(e,r){super(K(Jn[e],r)),this.declaredRootClass="esri.arcade.arcademoduleerror",Error.captureStackTrace&&Error.captureStackTrace(this,yn)}}class D{constructor(){}}function ln(n,e,r){if(n instanceof D&&!(n instanceof G)){const t=new G;return t.fn=n,t.parameterEvaluator=r,t.context=e,t}return n}class Ue extends D{constructor(e){super(),this.fn=e}createFunction(e){return(...r)=>this.fn(e,{preparsed:!0,arguments:r})}call(e,r){return this.fn(e,r)}marshalledCall(e,r,t,a){return a(e,r,(s,c,u)=>{u=u.map(f=>f instanceof D&&!(f instanceof G)?ln(f,e,a):f);const p=this.call(t,{args:u});return kn(p)?p.then(f=>ln(f,t,a)):p})}}class G extends D{constructor(){super(...arguments),this.fn=null,this.context=null}createFunction(e){return this.fn.createFunction(this.context)}call(e,r){return this.fn.marshalledCall(e,r,this.context,this.parameterEvaluator)}marshalledCall(e,r,t){return this.fn.marshalledCall(e,r,this.context,this.parameterEvaluator)}}class I extends F{constructor(e,r,t,a,s,c){super(e),this._lazyPt=[],this._hasZ=!1,this._hasM=!1,this._spRef=r,this._hasZ=t,this._hasM=a,this._cacheId=s,this._partId=c}get(e){if(this._lazyPt[e]===void 0){const r=this._elements[e];if(r===void 0)return;const t=this._hasZ,a=this._hasM;let s;s=t&&!a?new x(r[0],r[1],r[2],void 0,this._spRef):a&&!t?new x(r[0],r[1],void 0,r[2],this._spRef):t&&a?new x(r[0],r[1],r[2],r[3],this._spRef):new x(r[0],r[1],this._spRef),s.cache._arcadeCacheId=this._cacheId.toString()+"-"+this._partId.toString()+"-"+e.toString(),this._lazyPt[e]=s}return this._lazyPt[e]}equalityTest(e){return e===this||e!==null&&e instanceof I&&e.getUniqueHash()===this.getUniqueHash()}getUniqueHash(){return this._cacheId.toString()+"-"+this._partId.toString()}}class en extends F{constructor(e,r,t,a,s){super(e),this._lazyPath=[],this._hasZ=!1,this._hasM=!1,this._hasZ=t,this._hasM=a,this._spRef=r,this._cacheId=s}get(e){if(this._lazyPath[e]===void 0){const r=this._elements[e];if(r===void 0)return;this._lazyPath[e]=new I(r,this._spRef,this._hasZ,this._hasM,this._cacheId,e)}return this._lazyPath[e]}equalityTest(e){return e===this||e!==null&&e instanceof en&&e.getUniqueHash()===this.getUniqueHash()}getUniqueHash(){return this._cacheId.toString()}}class jn{constructor(e){this.value=e}}class Bn{constructor(e){this.value=e}}const g={type:"VOID"},qn=Symbol("BREAK"),Gn=Symbol("CONTINUE");function R(n,e,r){return e===""||e==null||e===r||e===r?n:n=n.split(e).join(r)}function J(n){return n instanceof D}function rn(n){return n instanceof dn}function P(n){return!!y(n)||!!N(n)||!!d(n)||!!m(n)||!!h(n)||!!b(n)||n===null||n===g||typeof n=="number"}function Yn(n,e){return n===void 0?e:n}function Hn(n){return n==null?"":C(n)||Z(n)?"Array":d(n)?"Date":h(n)?"Time":m(n)?"DateOnly":y(n)?"String":b(n)?"Boolean":N(n)?"Number":n?.declaredClass==="esri.arcade.Attachment"?"Attachment":n?.declaredClass==="esri.arcade.Portal"?"Portal":n?.declaredClass==="esri.arcade.Dictionary"?"Dictionary":Sn(n)?"KnowledgeGraph":n instanceof dn?"Module":gn(n)?"Feature":n instanceof x?"Point":n instanceof V?"Polygon":n instanceof W?"Polyline":n instanceof Q?"Multipoint":n instanceof X?"Extent":J(n)?"Function":bn(n)?"FeatureSet":Nn(n)?"FeatureSetCollection":n===g?"":typeof n=="number"&&isNaN(n)?"Number":"Unrecognized Type"}function y(n){return typeof n=="string"||n instanceof String}function b(n){return typeof n=="boolean"}function N(n){return typeof n=="number"}function Kn(n){return typeof n=="number"&&isFinite(n)&&Math.floor(n)===n}function Vn(n){return n instanceof k}function C(n){return Array.isArray(n)}function gn(n){return n?.arcadeDeclaredClass==="esri.arcade.Feature"}function Wn(n){return n?.declaredClass==="esri.Graphic"}function Qn(n){return n instanceof zn}function bn(n){return n?.declaredRootClass==="esri.arcade.featureset.support.FeatureSet"}function Xn(n){return n?.declaredClass==="esri.arcade.Dictionary"}function Nn(n){return n?.declaredRootClass==="esri.arcade.featureSetCollection"}function Sn(n){return n?.declaredClass==="esri.rest.knowledgeGraph.KnowledgeGraph"}function Z(n){return n instanceof F}function d(n){return n instanceof w}function m(n){return n instanceof vn}function h(n){return n instanceof _n}function Y(n){return n!=null&&typeof n=="object"}function z(n){return n instanceof Date}function ne(n,e,r,t,a){if(n.length<e||n.length>r)throw new A(t,o.WrongNumberOfParameters,a)}function ee(n){return n<0?-Math.round(-n):Math.round(n)}function tn(n,e){return isNaN(n)||e==null||e===""?n.toString():(e=R(e,"‰",""),e=R(e,"¤",""),Ln(n,{pattern:e}))}function j(n,e){return e==null||e===""?n.toISOString(!0):n.toFormat(Cn(e),{locale:fn(),numberingSystem:"latn"})}function Cn(n,e=!1){n=n.replaceAll(/LTS|LT|L{1,4}|l{1,4}/g,"[$&]");let r="";const t=/(\[[^[]*\])|(\\)?([Hh]mm(ss)?|Mo|M{1,4}|Do|DDDo|D{1,4}|d{2,4}|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|Z{1,5}|.)/g;for(const a of n.match(t)||[])switch(a){case"D":r+="d";break;case"DD":r+="dd";break;case"DDD":r+="o";break;case"d":r+="c";break;case"ddd":r+="ccc";break;case"dddd":r+="cccc";break;case"M":r+="L";break;case"MM":r+="LL";break;case"MMM":r+="LLL";break;case"MMMM":r+="LLLL";break;case"YY":r+="yy";break;case"Y":case"YYYY":r+="yyyy";break;case"Q":r+="q";break;case"Z":r+="Z";break;case"ZZ":r+="ZZ";break;case"ZZZ":r+="ZZZ";break;case"ZZZZ":r+=e?"[ZZZZ]":"ZZZZ";break;case"ZZZZZ":r+=e?"[ZZZZZ]":"ZZZZZ";break;case"S":r+="'S'";break;case"SS":r+="'SS'";break;case"SSS":r+="u";break;case"A":case"a":r+="a";break;case"m":case"mm":case"h":case"hh":case"H":case"HH":case"s":case"ss":case"X":case"x":r+=a;break;default:a.length>=2&&a.slice(0,1)==="["&&a.slice(-1)==="]"?r+=`'${a.slice(1,-1)}'`:r+=`'${a}'`}return r}function i(n,e,r){switch(r){case">":return n>e;case"<":return n<e;case">=":return n>=e;case"<=":return n<=e}return!1}function re(n,e,r){if(n===null){if(e===null||e===g)return i(null,null,r);if(N(e))return i(0,e,r);if(y(e)||b(e))return i(0,l(e),r);if(d(e))return i(0,e.toNumber(),r);if(h(e)||m(e))return i(n,e.toNumber(),r)}if(n===g){if(e===null||e===g)return i(null,null,r);if(N(e))return i(0,e,r);if(y(e)||b(e))return i(0,l(e),r);if(d(e))return i(0,e.toNumber(),r);if(h(e)||m(e))return i(n,e.toNumber(),r)}else if(N(n)){if(N(e))return i(n,e,r);if(b(e))return i(n,l(e),r);if(e===null||e===g)return i(n,0,r);if(y(e))return i(n,l(e),r);if(d(e)||h(e)||m(e))return i(n,e.toNumber(),r)}else if(y(n)){if(y(e))return i(M(n),M(e),r);if(d(e)||h(e)||m(e))return i(l(n),e.toNumber(),r);if(N(e))return i(l(n),e,r);if(e===null||e===g)return i(l(n),0,r);if(b(e))return i(l(n),l(e),r)}else if(d(n)){if(d(e))return n.timeZone!==e.timeZone&&(n.isUnknownTimeZone?n=w.arcadeDateAndZoneToArcadeDate(n,e.timeZone):e.isUnknownTimeZone&&(e=w.arcadeDateAndZoneToArcadeDate(e,n.timeZone))),i(n.toNumber(),e.toNumber(),r);if(e===null||e===g)return i(n.toNumber(),0,r);if(N(e))return i(n.toNumber(),e,r);if(b(e)||y(e))return i(n.toNumber(),l(e),r);if(h(e))throw new A(null,o.CannotCompareDateAndTime,null);if(m(e))return i(n.toNumber(),e.toNumber(),r)}else if(b(n)){if(b(e))return i(n,e,r);if(N(e))return i(l(n),l(e),r);if(d(e)||h(e)||m(e))return i(l(n),e.toNumber(),r);if(e===null||e===g)return i(l(n),0,r);if(y(e))return i(l(n),l(e),r)}else if(m(n)){if(d(e))return i(n.toNumber(),e.toNumber(),r);if(e===null||e===g)return i(n.toNumber(),0,r);if(N(e))return i(n.toNumber(),e,r);if(b(e)||y(e))return i(n.toNumber(),l(e),r);if(h(e))throw new A(null,o.CannotCompareDateAndTime,null);if(m(e))return i(n.toNumber(),e.toNumber(),r)}else if(h(n)){if(d(e))throw new A(null,o.CannotCompareDateAndTime,null);if(e===null||e===g)return i(n.toNumber(),0,r);if(N(e))return i(n.toNumber(),e,r);if(b(e)||y(e))return i(n.toNumber(),l(e),r);if(h(e))return i(n.toNumber(),e.toNumber(),r);if(m(e))throw new A(null,o.CannotCompareDateAndTime,null)}return!!Tn(n,e)&&(r==="<="||r===">=")}function Tn(n,e){if(n===e||n===null&&e===g||e===null&&n===g)return!0;if(d(n)&&d(e)||h(n)&&h(e)||m(n)&&m(e))return n.equals(e);if(n instanceof en||n instanceof I)return n.equalityTest(e);if(n instanceof x&&e instanceof x){const r=n.cache._arcadeCacheId,t=e.cache._arcadeCacheId;if(r!=null)return r===t}return!!(Y(n)&&Y(e)&&(n._arcadeCacheId===e._arcadeCacheId&&n._arcadeCacheId!==void 0&&n._arcadeCacheId!==null||n._underlyingGraphic===e._underlyingGraphic&&n._underlyingGraphic!==void 0&&n._underlyingGraphic!==null))}function M(n,e){if(y(n))return n;if(n===null)return"";if(N(n))return tn(n,e);if(b(n))return n.toString();if(d(n))return j(n,e);if(h(n)||m(n))return n.toFormat(e);if(n instanceof k)return JSON.stringify(n.toJSON());if(C(n)){const r=[];for(let t=0;t<n.length;t++)r[t]=$(n[t]);return"["+r.join(",")+"]"}if(n instanceof F){const r=[];for(let t=0;t<n.length();t++)r[t]=$(n.get(t));return"["+r.join(",")+"]"}return n!==null&&typeof n=="object"&&n.castToText!==void 0?n.castToText():J(n)?"object, Function":n===g?"":rn(n)?"object, Module":""}function te(n){const e=[];if(!C(n))return null;if(n instanceof F){for(let r=0;r<n.length();r++)e[r]=l(n.get(r));return e}for(let r=0;r<n.length;r++)e[r]=l(n[r]);return e}function U(n,e,r=!1){if(y(n))return n;if(n===null)return"";if(N(n))return tn(n,e);if(b(n))return n.toString();if(d(n))return j(n,e);if(h(n)||m(n))return n.toFormat(e);if(n instanceof k)return n instanceof X?'{"xmin":'+n.xmin.toString()+',"ymin":'+n.ymin.toString()+","+(n.hasZ?'"zmin":'+n.zmin.toString()+",":"")+(n.hasM?'"mmin":'+n.mmin.toString()+",":"")+'"xmax":'+n.xmax.toString()+',"ymax":'+n.ymax.toString()+","+(n.hasZ?'"zmax":'+n.zmax.toString()+",":"")+(n.hasM?'"mmax":'+n.mmax.toString()+",":"")+'"spatialReference":'+H(n.spatialReference)+"}":H(n.toJSON(),(t,a)=>t.key===a.key?0:t.key==="spatialReference"?1:a.key==="spatialReference"||t.key<a.key?-1:t.key>a.key?1:0);if(C(n)){const t=[];for(let a=0;a<n.length;a++)t[a]=$(n[a],r);return"["+t.join(",")+"]"}if(n instanceof F){const t=[];for(let a=0;a<n.length();a++)t[a]=$(n.get(a),r);return"["+t.join(",")+"]"}return n!==null&&typeof n=="object"&&n.castToText!==void 0?n.castToText(r):J(n)?"object, Function":n===g?"":rn(n)?"object, Module":""}function $(n,e=!1){if(n===null)return"null";if(b(n)||N(n)||y(n))return JSON.stringify(n);if(n instanceof k||n instanceof F||Array.isArray(n))return U(n,null,e);if(d(n))return JSON.stringify(e?n.getTime():j(n,""));if(h(n)||m(n))return JSON.stringify(n.toString());if(n!==null&&typeof n=="object"){if(n.castToText!==void 0)return n.castToText(e)}else if(n===g)return"null";return"null"}function l(n,e){return N(n)?n:n===null||n===""?0:d(n)||m(n)||h(n)?NaN:b(n)?n?1:0:C(n)||n===""||n===void 0?NaN:e!==void 0&&y(n)?(e=R(e,"‰",""),e=R(e,"¤",""),Pn(n,{pattern:e})):n===g?0:Number(n)}function ae(n,e){if(d(n))return n;if(y(n)){const r=oe(n,e);if(r)return w.dateTimeToArcadeDate(r)}return null}function oe(n,e){const r=/ (\d\d)/,t=Un(e);let a=sn.fromISO(n,{zone:t});return a.isValid||r.test(n)&&(n=n.replace(r,"T$1"),a=sn.fromISO(n,{zone:e}),a.isValid)?a:null}function ie(n){return b(n)?n:y(n)?(n=n.toLowerCase())==="true":!!N(n)&&n!==0&&!isNaN(n)}function se(n,e){const r=JSON.parse(n);return r&&!r.spatialReference&&(r.spatialReference=e),In(r)}function ue(n,e){return n==null?null:(n.spatialReference!==null&&n.spatialReference!==void 0||(n.spatialReference=e),n)}function le(n){if(n===null)return null;if(n instanceof x)return n.x==="NaN"||n.x===null||isNaN(n.x)?null:n;if(n instanceof V){if(n.rings.length===0)return null;for(const e of n.rings)if(e.length>0)return n;return null}if(n instanceof W){if(n.paths.length===0)return null;for(const e of n.paths)if(e.length>0)return n;return null}return n instanceof Q?n.points.length===0?null:n:n instanceof X?n.xmin==="NaN"||n.xmin===null||isNaN(n.xmin)?null:n:null}function An(n,e){if(!n||!n.domain)return e;let r=null,t=null;if(d(e))r=e.toNumber();else if(m(e))r=e.toString();else if(h(e))r=e.toStorageString();else if(n.field.type==="string"||n.field.type==="esriFieldTypeString")r=M(e);else{if(e==null)return null;if(e==="")return e;r=l(e)}for(let a=0;a<n.domain.codedValues.length;a++){const s=n.domain.codedValues[a];s.code===r&&(t=s)}return t===null?M(e):t.name}function Fn(n,e){if(!n||!n.domain)return e;let r=null;const t=M(e);for(let a=0;a<n.domain.codedValues.length;a++){const s=n.domain.codedValues[a];s.name===t&&(r=s)}return r===null?e:r.code}function B(n,e,r=null,t=null){if(!e||!e.fields)return null;let a,s,c=null;for(let S=0;S<e.fields.length;S++){const T=e.fields[S];T.name.toLowerCase()===n.toString().toLowerCase()&&(c=T)}if(c===null)throw new A(null,o.FieldNotFound,null,{key:n});let u=e.typeIdField,p="id",f=e.types;if(e.subtypeField&&(u=e.subtypeField,p="code",f=e.subtypes??[]),t===null&&r&&u)t=r.hasField(u)?r.field(u):null;else if(u&&t!==null){let S=!1;for(const T of f||[])if(t===T[p]){S=!0;break}if(!S){for(const T of f||[])if(t===T.name){t=T[p],S=!0;break}}S||(t=null,r&&u&&(t=r.hasField(u)?r.field(u):null))}return t!=null&&f.some(S=>S[p]===t&&(a=S.domains?.[c.name],a&&a.type==="inherited"&&(a=cn(c.name,e),s=!0),!0)),s||a||(a=cn(n,e)),{field:c,domain:a}}function cn(n,e){let r;return e.fields.some(t=>(t.name.toLowerCase()===n.toLowerCase()&&(r=t.domain),!!r)),r}function H(n,e){e||(e={}),typeof e=="function"&&(e={cmp:e});const r=typeof e.cycles=="boolean"&&e.cycles,t=e.cmp&&(a=e.cmp,function(c){return function(u,p){const f={key:u,value:c[u]},S={key:p,value:c[p]};return a(f,S)}});var a;const s=[];return function c(u){if(u?.toJSON&&typeof u.toJSON=="function"&&(u=u.toJSON()),u===void 0)return;if(typeof u=="number")return isFinite(u)?""+u:"null";if(typeof u!="object")return JSON.stringify(u);let p,f;if(Array.isArray(u)){for(f="[",p=0;p<u.length;p++)p&&(f+=","),f+=c(u[p])||"null";return f+"]"}if(u===null)return"null";if(s.includes(u)){if(r)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}const S=s.push(u)-1,T=Object.keys(u).sort(t?.(u));for(f="",p=0;p<T.length;p++){const an=T[p],on=c(u[an]);on&&(f&&(f+=","),f+=JSON.stringify(an)+":"+on)}return s.splice(S,1),"{"+f+"}"}(n)}function ce(n){if(n===null)return null;const e=[];for(const r of n)r?.arcadeDeclaredClass&&r.arcadeDeclaredClass==="esri.arcade.Feature"?e.push(r.geometry()):e.push(r);return e}function O(n,e){if(!(e instanceof x))throw new A(null,o.InvalidParameter,null);n.push(e.hasZ?e.hasM?[e.x,e.y,e.z,e.m]:[e.x,e.y,e.z]:[e.x,e.y])}function fe(n,e){if(C(n)||Z(n)){let r=!1,t=!1,a=[],s=e;if(C(n)){for(const c of n)O(a,c);a.length>0&&(s=n[0].spatialReference,r=n[0].hasZ,t=n[0].hasM)}else if(n instanceof I)a=n._elements,a.length>0&&(r=n._hasZ,t=n._hasM,s=n.get(0).spatialReference);else{if(!Z(n))throw new A(null,o.InvalidParameter,null);for(const c of n.toArray())O(a,c);a.length>0&&(s=n.get(0).spatialReference,r=n.get(0).hasZ===!0,t=n.get(0).hasM===!0)}return a.length===0?null:(On(a)||(a=a.slice().reverse()),new V({rings:[a],spatialReference:s,hasZ:r,hasM:t}))}return n}function de(n,e){if(C(n)||Z(n)){let r=!1,t=!1,a=[],s=e;if(C(n)){for(const c of n)O(a,c);a.length>0&&(s=n[0].spatialReference,r=n[0].hasZ===!0,t=n[0].hasM===!0)}else if(n instanceof I)a=n._elements,a.length>0&&(r=n._hasZ,t=n._hasM,s=n.get(0).spatialReference);else if(Z(n)){for(const c of n.toArray())O(a,c);a.length>0&&(s=n.get(0).spatialReference,r=n.get(0).hasZ===!0,t=n.get(0).hasM===!0)}return a.length===0?null:new W({paths:[a],spatialReference:s,hasZ:r,hasM:t})}return n}function pe(n,e){if(C(n)||Z(n)){let r=!1,t=!1,a=[],s=e;if(C(n)){for(const c of n)O(a,c);a.length>0&&(s=n[0].spatialReference,r=n[0].hasZ===!0,t=n[0].hasM===!0)}else if(n instanceof I)a=n._elements,a.length>0&&(r=n._hasZ,t=n._hasM,s=n.get(0).spatialReference);else if(Z(n)){for(const c of n.toArray())O(a,c);a.length>0&&(s=n.get(0).spatialReference,r=n.get(0).hasZ===!0,t=n.get(0).hasM===!0)}return a.length===0?null:new Q({points:a,spatialReference:s,hasZ:r,hasM:t})}return n}function me(n,e=!1){const r=[];if(n===null)return r;if(C(n)===!0){for(let t=0;t<n.length;t++){const a=M(n[t]);a===""&&e!==!0||r.push(a)}return r}if(n instanceof F){for(let t=0;t<n.length();t++){const a=M(n.get(t));a===""&&e!==!0||r.push(a)}return r}if(P(n)){const t=M(n);return t===""&&e!==!0||r.push(t),r}return[]}let q=0;function he(n){return q++,q%100==0?(q=0,new Promise(e=>{setTimeout(()=>{e(n)},0)})):n}function ye(n,e,r){switch(r){case"&":return n&e;case"|":return n|e;case"^":return n^e;case"<<":return n<<e;case">>":return n>>e;case">>>":return n>>>e}}function v(n,e=null){return n==null?null:b(n)||N(n)||y(n)?n:n instanceof k?e?.keepGeometryType===!0?n:n.toJSON():n instanceof F?n.toArray().map(r=>v(r,e)):Array.isArray(n)?n.map(r=>v(r,e)):z(n)?n:d(n)?n.toJSDate():h(n)?n.toString():m(n)?n.toJSDate():n!==null&&typeof n=="object"&&n.castAsJson!==void 0?n.castAsJson(e):null}async function ge(n,e,r,t,a){const s=await xn(n,e,r);a[t]=s}async function xn(n,e=null,r=null){if(n instanceof F&&(n=n.toArray()),n==null)return null;if(P(n)||n instanceof k||z(n)||d(n))return v(n,r);if(Array.isArray(n)){const t=[],a=[];for(const s of n)s===null||P(s)||s instanceof k||z(s)||d(s)?a.push(v(s,r)):(a.push(null),t.push(ge(s,e,r,a.length-1,a)));return t.length>0&&await Promise.all(t),a}return n!==null&&typeof n=="object"&&n.castAsJsonAsync!==void 0?n.castAsJsonAsync(e,r):null}function _(n){return Mn(n)?n.parent:n}function Mn(n){return n&&"declaredClass"in n&&n.declaredClass==="esri.layers.support.SubtypeSublayer"}function be(n){return n&&"declaredClass"in n&&n.declaredClass==="esri.layers.SubtypeGroupLayer"}function Ne(n,e,r){const t=_(n.fullSchema());return t===null||!t.fields?null:B(e,t,n,r)}function Se(n){const e=_(n.fullSchema());return e===null?null:e.fields?e.subtypeField?{subtypeField:e.subtypeField,subtypes:e.subtypes?e.subtypes.map(r=>({name:r.name,code:r.code})):[]}:e.typeIdField?{subtypeField:e.typeIdField,subtypes:e.types?e.types.map(r=>({name:r.name,code:r.id})):[]}:null:null}function Ce(n,e,r,t){const a=_(n.fullSchema());if(a===null||!a.fields)return null;const s=B(e,a,n,t);if(r===void 0)try{r=n.field(e)}catch{return null}return An(s,r)}function Te(n,e,r,t){const a=_(n.fullSchema());if(a===null||!a.fields)return null;if(r===void 0){try{r=n.field(e)}catch{return null}return r}return Fn(B(e,a,n,t),r)}function Ae(n){return n?.timeZone??"system"}function Fe(n){const e=_(n.fullSchema());if(e===null||!e.fields)return null;const r=[];for(const t of e.fields)r.push(En(t));return{objectIdField:e.objectIdField,globalIdField:e.globalIdField??"",geometryType:un[e.geometryType]===void 0?"":un[e.geometryType],fields:r}}function xe(n,e){return n==="system"&&(n=w.systemTimeZoneCanonicalName),{version:Zn,engineVersion:wn,timeZone:n,spatialReference:e instanceof Dn?e.toJSON():e,application:Rn.applicationName??"",engine:"web",locale:fn()}}const Zn="1.28",Ee=Object.freeze(Object.defineProperty({__proto__:null,ImplicitResult:Bn,ReturnResult:jn,absRound:ee,arcadeVersion:Zn,autoCastArrayOfPointsToMultiPoint:pe,autoCastArrayOfPointsToPolygon:fe,autoCastArrayOfPointsToPolyline:de,autoCastFeatureToGeometry:ce,binaryOperator:ye,breakResult:qn,castAsJson:v,castAsJsonAsync:xn,continueResult:Gn,defaultExecutingContext:xe,defaultTimeZone:Ae,defaultUndefined:Yn,equalityTest:Tn,featureDomainCodeLookup:Te,featureDomainValueLookup:Ce,featureFullDomain:Ne,featureSchema:Fe,featureSubtypes:Se,fixNullGeometry:le,fixSpatialReference:ue,formatDate:j,formatNumber:tn,getDomain:B,getDomainCode:Fn,getDomainValue:An,getType:Hn,greaterThanLessThan:re,isArray:C,isBoolean:b,isDate:d,isDateOnly:m,isDictionary:Xn,isFeature:gn,isFeatureSet:bn,isFeatureSetCollection:Nn,isFunctionParameter:J,isGeometry:Vn,isGraphic:Wn,isImmutableArray:Z,isInteger:Kn,isJsDate:z,isKnowledgeGraph:Sn,isModule:rn,isNumber:N,isObject:Y,isQuery:Qn,isSimpleType:P,isString:y,isSubtypeGrouplayer:be,isSubtypeSublayer:Mn,isTime:h,multiReplace:R,parseGeometryFromJson:se,pcCheck:ne,stableStringify:H,standardiseDateFormat:Cn,tick:he,toBoolean:ie,toDate:ae,toNumber:l,toNumberArray:te,toString:M,toStringArray:me,toStringExplicit:U,voidOperation:g},Symbol.toStringTag,{value:"Module"}));export{Sn as $,ue as A,Ae as B,Ce as C,An as D,C as E,Te as F,Fn as G,Wn as H,ye as I,me as J,bn as K,b as L,g as M,U as N,qn as O,y as P,Fe as Q,Gn as R,ie as S,Xn as T,gn as U,Kn as V,Nn as W,Z as X,Yn as Y,Vn as Z,z as _,A as a,fe as a0,de as a1,pe as a2,he as a3,Mn as a4,P as a5,v as a6,xn as a7,I as a8,en as a9,Hn as aa,Cn as ab,ee as ac,le as ad,te as ae,xe as af,mn as ag,Ee as ah,ve as ai,yn as aj,L as ak,G as b,re as c,M as d,Ue as e,D as f,h as g,l as h,ne as i,ae as j,d as k,R as l,Tn as m,ln as n,ce as o,B as p,Ne as q,o as r,dn as s,m as t,_e as u,J as v,jn as w,Bn as x,Se as y,N as z};
