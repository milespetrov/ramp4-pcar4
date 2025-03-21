import{E as pe,aC as w,a9 as ye,aa as ce,n as M,U as W,bG as de,s as he,ic as me,f as a,id as fe,fq as O,k as t,o as s,q as X,A as _,by as ge,v as q,ie as be,dc as k,df as ve,bk as F,bp as we,a_ as H,fy as Y,de as ee,ig as Se,bQ as xe,ej as je,z as _e}from"./main-BriipcPO.js";import{v as L,p as E,j as Ie,n as Ee,c as Ve,b as Re,d as De,m as Me,A as te,z as ie}from"./UniqueValueRenderer-Bx7HA_Qt.js";import{e as Pe}from"./LRUCache-C4CRDkw0.js";import{r as Ne}from"./Version-DF6U3z2J.js";import{Z as qe}from"./FieldsIndex-BHkMY8QT.js";import{y as Te}from"./OverrideHelper-BmYUJZGL.js";import{J as Ce,R as Oe}from"./utils-SPbpQbmm.js";import{a as Fe,e as Le,c as Ae}from"./heatmapUtils-Qb9o_D6o.js";import{a as ke}from"./RendererLegendOptions-BXRB418c.js";const se="esri.renderers.support.DictionaryLoader",He={type:"CIMSimpleLineCallout",lineSymbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:.5,color:[0,0,0,255]}]}};let re=class{constructor(e,i,r){this.config=null,this.fieldMap=null,this.url=null,this._ongoingRequests=new Map,this._symbolCache=new Pe(100),this._dictionaryVersion=null,this._fieldIndex=null,this._dictionaryPromise=null,this.url=e,this.config=i,this.fieldMap=r}getSymbolFields(){return this._symbolFields}async getSymbolAsync(e,i){let r;this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(i));try{r=await this._dictionaryPromise}catch(y){if(pe(y))return this._dictionaryPromise=null,null}const o=this._dictionaryVersion?.greaterEqual(4,0),u={};if(this.fieldMap)for(const y of this._symbolFields){const d=Ce(this.fieldMap[y],this._fieldIndex);if(d){const n=e.attributes[d];u[y]=o?n:n!=null?""+e.attributes[d]:""}else u[y]=""}let l=null;try{l=r?.(u,i)}catch{return null}if(!l||typeof l!="string"||l==="invalid")return null;const c=l.split(";"),b=[],f=[];for(let y=0;y<c.length;y++){const d=c[y];if(d){if(d.includes("po:")){const n=d.slice(3).split("|");if(n.length===3){const x=n[0],j=n[1];let g=n[2];const N="countrylabel";if(x===N&&j==="TextString"){if(this.fieldMap!=null){let v=this.fieldMap[N];v==null&&(v=N,this.fieldMap[v]=v),e.attributes[v]=g}continue}if(j==="DashTemplate")g=g.split(" ").map(v=>Number(v));else if(j==="Color"){const v=new w(g).toRgba();g=[v[0],v[1],v[2],255*v[3]]}else g=Number(g);f.push({primitiveName:x,propertyName:j,value:g,defaultValue:null})}}else if(d.includes("|")){for(const n of d.split("|"))if(this._itemNames.has(n)){b.push(n);break}}else if(this._itemNames.has(d))b.push(d);else if(y===0){b.length=0;let n="Invalid_P";e.geometry!=null&&(ye(e.geometry)?n="Invalid_A":ce(e.geometry)&&(n="Invalid_L")),b.push(n);break}}}const D=e.geometry==null||!e.geometry.hasZ&&e.geometry.type==="point";return this._cimPartsToCIMSymbol(e,b,f,D,i)}async fetchResources(e){if(this._dictionaryPromise)return this._dictionaryPromise;if(!this.url)return void M.getLogger(se).error("no valid URL!");const i=W(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},signal:e!=null?e.signal:null}),[{data:r}]=await Promise.all([i,de()]);if(!r)throw this._dictionaryPromise=null,new he("esri.renderers.DictionaryRenderer","Bad dictionary data!");const{authoringInfo:o,dictionary_version:u,expression:l,itemsNames:c}=r,b=l;let f=!1;u&&(this._dictionaryVersion=Ne.parse(u),f=this._dictionaryVersion.greaterEqual(4,0)),this._refSymbolUrlTemplate=this.url+"/"+r.cimRefTemplateUrl,this._itemNames=new Set(c),this._symbolFields=o.symbol;const D={};if(this.config){const n=this.config;for(const x in n)D[x]=n[x]}if(o.configuration)for(const n of o.configuration)D.hasOwnProperty(n.name)||(D[n.name]=n.value);const y=[];if(e?.fields&&this.fieldMap)for(const n in this.fieldMap){const x=this.fieldMap[n],j=e.fields.filter(g=>g.name.toLowerCase()===x?.toLowerCase());j.length>0&&y.push({...j[0],type:f?j[0].type:"esriFieldTypeString"})}y.length>0&&(this._fieldIndex=new qe(y));const d=me(b,e!=null?e.spatialReference:null,y,D).then(n=>{const x={scale:0};return(j,g)=>{if(n==null)return null;const N=n.repurposeFeature({geometry:null,attributes:j});return x.scale=g!=null?g.scale??void 0:void 0,n.evaluate({$feature:N,$view:x},n.services)}}).catch(n=>(M.getLogger(se).error("Creating dictionary expression failed:",n),null));return this._dictionaryPromise=d,d}async _cimPartsToCIMSymbol(e,i,r,o,u){const l=new Array(i.length);for(let f=0;f<i.length;f++)l[f]=this._getSymbolPart(i[f],u);let c=await Promise.all(l);const b=this.fieldMap;if(b){c=a(c);for(const f of c)Te.applyDictionaryTextOverrides(f,e,b,this._fieldIndex,Oe(f))}return new fe({data:$e(c,r,o)})}async _getSymbolPart(e,i){const r=this._symbolCache.get(e);if(r)return r;if(this._ongoingRequests.has(e))return this._ongoingRequests.get(e).then(l=>l.data);const o=this._refSymbolUrlTemplate.replaceAll(/\{itemName\}/gi,e),u=W(o,{responseType:"json",query:{f:"json"},...i});this._ongoingRequests.set(e,u),u.finally(()=>this._ongoingRequests.delete(e));try{const l=await u;return this._symbolCache.put(e,l.data),l.data}catch(l){throw l}}};function $e(e,i,r){if(!e||e.length===0)return null;const o={...e[0]};if(e.length>1){o.effects=null,o.symbolLayers=[];for(const u of e){const l=u;if(l.effects!=null)for(const c of l.symbolLayers)c.effects==null?c.effects=l.effects:c.effects.unshift(...l.effects);o.symbolLayers.unshift(...l.symbolLayers)}}return r&&(o.callout=He),{type:"CIMSymbolReference",symbol:o,primitiveOverrides:i}}var $;let S=$=class extends L(E){constructor(e){super(e),this.config=null,this.fieldMap=null,this.scaleExpression=null,this.scaleExpressionTitle=null,this.url=null,this.type="dictionary"}get _loader(){return new re(this.url,this.config,this.fieldMap)}writeData(e,i){e&&(i.scalingExpressionInfo={expression:e,returnType:"number"})}writeVisualVariables(e,i,r,o){o?.origin||super.writeVisualVariables(e,i,r,o)}clone(){return new $({config:a(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:a(this.fieldMap),url:a(this.url),visualVariables:a(this.visualVariables)})}async getSymbolAsync(e,i){return this._loader.getSymbolAsync(e,i)}async collectRequiredFields(e,i){await this.collectVVRequiredFields(e,i),this.scaleExpression&&await O(e,i,this.scaleExpression);for(const r in this.fieldMap){const o=this.fieldMap[r];i.has(o)&&e.add(o)}}get arcadeRequired(){return!0}getSymbol(){return null}getSymbols(){return[]}getAttributeHash(){return this.visualVariables?.reduce((e,i)=>e+i.getAttributeHash(),"")??""}getMeshHash(){return`${this.url}-${JSON.stringify(this.fieldMap)}`}getSymbolFields(){return this._loader.getSymbolFields()}};t([s({type:re})],S.prototype,"_loader",null),t([s({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],S.prototype,"config",void 0),t([s({type:Object,json:{write:!0}})],S.prototype,"fieldMap",void 0),t([s({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],S.prototype,"scaleExpression",void 0),t([X("scaleExpression")],S.prototype,"writeData",null),t([s({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy(e){return{enabled:!!e&&!!this.scaleExpression}}}}})],S.prototype,"scaleExpressionTitle",void 0),t([s({type:String,json:{write:!0}})],S.prototype,"url",void 0),t([X("visualVariables")],S.prototype,"writeVisualVariables",null),S=$=t([_("esri.renderers.DictionaryRenderer")],S);const ze=S;var z;let I=z=class extends q{constructor(e){super(e),this.color=null,this.field=null,this.label=null,this.valueExpression=null,this.valueExpressionTitle=null}castField(e){return e==null?e:typeof e=="function"?(M.getLogger(this).error(".field: field must be a string value"),null):be(e)}getAttributeHash(){return`${this.field}-${this.valueExpression}`}clone(){return new z({color:this.color?.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};t([s({type:w,json:{type:[Number],write:!0}})],I.prototype,"color",void 0),t([s({type:String,json:{write:!0}})],I.prototype,"field",void 0),t([ge("field")],I.prototype,"castField",null),t([s({type:String,json:{write:!0}})],I.prototype,"label",void 0),t([s({type:String,json:{write:!0}})],I.prototype,"valueExpression",void 0),t([s({type:String,json:{write:!0}})],I.prototype,"valueExpressionTitle",void 0),I=z=t([_("esri.renderers.support.AttributeColorInfo")],I);const oe=I;var J;let A=J=class extends q{constructor(){super(...arguments),this.unit=null}clone(){return new J({unit:this.unit})}};t([s({type:String,json:{write:!0}})],A.prototype,"unit",void 0),A=J=t([_("esri.renderers.support.DotDensityLegendOptions")],A);const Je=A;var B;let h=B=class extends L(E){constructor(e){super(e),this.attributes=null,this.backgroundColor=new w([0,0,0,0]),this.dotBlendingEnabled=!0,this.dotShape="square",this.dotSize=1,this.legendOptions=null,this.outline=new k,this.dotValue=null,this.referenceScale=null,this.seed=1,this.type="dot-density"}calculateDotValue(e){if(this.referenceScale==null)return this.dotValue;const i=e/this.referenceScale*this.dotValue;return i<1?1:i}getSymbol(){return new ve({outline:this.outline})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}getAttributeHash(){return this.attributes?.reduce((e,i)=>e+i.getAttributeHash(),"")??""}getMeshHash(){return JSON.stringify(this.outline)}clone(){return new B({attributes:a(this.attributes),backgroundColor:a(this.backgroundColor),dotBlendingEnabled:a(this.dotBlendingEnabled),dotShape:a(this.dotShape),dotSize:a(this.dotSize),dotValue:a(this.dotValue),legendOptions:a(this.legendOptions),outline:a(this.outline),referenceScale:a(this.referenceScale),seed:a(this.seed),visualVariables:a(this.visualVariables),authoringInfo:a(this.authoringInfo)})}getControllerHash(){return`${this.attributes?.map(e=>e.field||e.valueExpression||"")}-${this.outline&&JSON.stringify(this.outline.toJSON())||""}`}async collectRequiredFields(e,i){await this.collectVVRequiredFields(e,i);for(const r of this.attributes??[])r.valueExpression&&await O(e,i,r.valueExpression),r.field&&e.add(r.field)}};t([s({type:[oe],json:{write:!0}})],h.prototype,"attributes",void 0),t([s({type:w,json:{write:!0}})],h.prototype,"backgroundColor",void 0),t([s({type:Boolean,json:{write:!0}})],h.prototype,"dotBlendingEnabled",void 0),t([s({type:String,json:{write:!1}})],h.prototype,"dotShape",void 0),t([s({type:Number,json:{write:!0}})],h.prototype,"dotSize",void 0),t([s({type:Je,json:{write:!0}})],h.prototype,"legendOptions",void 0),t([s({type:k,json:{default:null,write:!0}})],h.prototype,"outline",void 0),t([s({type:Number,json:{write:!0}})],h.prototype,"dotValue",void 0),t([s({type:Number,json:{write:!0}})],h.prototype,"referenceScale",void 0),t([s({type:Number,json:{write:!0}})],h.prototype,"seed",void 0),t([F({dotDensity:"dot-density"})],h.prototype,"type",void 0),h=B=t([_("esri.renderers.DotDensityRenderer")],h);const Be=h;var U;let T=U=class extends q{constructor(e){super(e),this.color=null,this.ratio=null}clone(){return new U({color:this.color&&this.color.clone(),ratio:this.ratio})}};t([s({type:w,json:{type:[we],default:null,write:!0}})],T.prototype,"color",void 0),t([s({type:Number,json:{write:!0}})],T.prototype,"ratio",void 0),T=U=t([_("esri.renderers.support.HeatmapColorStop")],T);const C=T;let P=class extends H(q){constructor(){super(...arguments),this.minLabel=null,this.maxLabel=null,this.title=null}};t([s({type:String,json:{write:!0}})],P.prototype,"minLabel",void 0),t([s({type:String,json:{write:!0}})],P.prototype,"maxLabel",void 0),t([s({type:String,json:{write:!0}})],P.prototype,"title",void 0),P=t([_("esri.renderers.support.HeatmapLegendOptions")],P);var Z;function ne(e){if(e!=null){const{maxDensity:i,minDensity:r,radius:o}=e;if(i!=null||r!=null||o!=null){const{blurRadius:u,maxPixelIntensity:l,minPixelIntensity:c,...b}=e;return b}}return e}let p=Z=class extends E{constructor(e){super(e),this.authoringInfo=null,this.colorStops=[new C({ratio:0,color:new w("rgba(255, 140, 0, 0)")}),new C({ratio:.75,color:new w("rgba(255, 140, 0, 1)")}),new C({ratio:.9,color:new w("rgba(255, 0,   0, 1)")})],this.field=null,this.legendOptions=null,this.maxDensity=.04,this.minDensity=0,this.radius=18,this.referenceScale=0,this.type="heatmap",this.valueExpression=null,this.valueExpressionTitle=null}normalizeCtorArgs(e){return ne(e)}get blurRadius(){return Fe(this.radius)}set blurRadius(e){const i=this.maxPixelIntensity,r=this.minPixelIntensity;this._set("radius",Le(e)),this._set("maxDensity",i*this._pixelIntensityToDensity),this._set("minDensity",r*this._pixelIntensityToDensity)}get maxPixelIntensity(){return this.maxDensity/this._pixelIntensityToDensity}set maxPixelIntensity(e){this._set("maxDensity",e*this._pixelIntensityToDensity)}get minPixelIntensity(){return this.minDensity/this._pixelIntensityToDensity}set minPixelIntensity(e){this._set("minDensity",e*this._pixelIntensityToDensity)}get _pixelIntensityToDensity(){return 24/(Ae**2*this.blurRadius**4)}read(e,i){e=ne(e),super.read(e,i)}getSymbol(){return new ee}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}async collectRequiredFields(e,i){const r=this.field,o=this.valueExpression;r&&typeof r=="string"&&Se(e,i,r),o&&typeof o=="string"&&await O(e,i,o)}getAttributeHash(){return""}getMeshHash(){return`${JSON.stringify(this.colorStops)}.${this.blurRadius}.${this.field}`}clone(){return new Z({authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),colorStops:a(this.colorStops),field:this.field,legendOptions:a(this.legendOptions),maxDensity:this.maxDensity,minDensity:this.minDensity,radius:this.radius,referenceScale:this.referenceScale,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};t([s({type:Ie,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],p.prototype,"authoringInfo",void 0),t([s({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],p.prototype,"blurRadius",null),t([s({type:[C],json:{write:!0}})],p.prototype,"colorStops",void 0),t([s({type:String,json:{write:!0}})],p.prototype,"field",void 0),t([s({type:P,json:{write:!0}})],p.prototype,"legendOptions",void 0),t([s({type:Number,json:{write:!0}})],p.prototype,"maxDensity",void 0),t([s({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],p.prototype,"maxPixelIntensity",null),t([s({type:Number,json:{write:!0}})],p.prototype,"minDensity",void 0),t([s({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],p.prototype,"minPixelIntensity",null),t([s({type:Number,cast:Y,json:{write:!0}})],p.prototype,"radius",void 0),t([s({type:Number,range:{min:0},json:{default:0,write:!0}})],p.prototype,"referenceScale",void 0),t([F({heatmap:"heatmap"})],p.prototype,"type",void 0),t([s({type:String,json:{write:!0,origins:{"web-document":{write:!1},"portal-item":{write:!1}}}})],p.prototype,"valueExpression",void 0),t([s({type:String})],p.prototype,"valueExpressionTitle",void 0),t([s({readOnly:!0})],p.prototype,"_pixelIntensityToDensity",null),p=Z=t([_("esri.renderers.HeatmapRenderer")],p);const le=p;let V=class extends H(q){constructor(){super(...arguments),this.color=new w([0,0,0,0]),this.label=null,this.threshold=0}};t([s({type:w,json:{write:!0}})],V.prototype,"color",void 0),t([s({type:String,json:{write:!0}})],V.prototype,"label",void 0),t([s({type:Number,range:{min:0,max:1},json:{write:!0}})],V.prototype,"threshold",void 0),V=t([_("esri.renderers.support.OthersCategory")],V);const Ue={base:Ve,key:"type",typeMap:{size:Re,opacity:De}};let m=class extends L(H(E)){constructor(e){super(e),this.attributes=null,this.backgroundFillSymbol=null,this.defaultColor=new w([0,0,0,0]),this.defaultLabel=null,this.holePercentage=0,this.othersCategory=new V,this.legendOptions=null,this.outline=null,this.size=12,this.type="pie-chart",this.visualVariables=null}getSymbol(){return new ee({size:this.size?this.size/2+(this.outline?.width||0):0})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol(),this.backgroundFillSymbol].filter(xe)}getAttributeHash(){return this.visualVariables?.reduce((e,i)=>e+i.getAttributeHash(),"")??""}getMeshHash(){return this.getSymbols().reduce((e,i)=>e+JSON.stringify(i),"")}async collectRequiredFields(e,i){await this.collectVVRequiredFields(e,i);for(const r of this.attributes)r.valueExpression&&await O(e,i,r.valueExpression),r.field&&e.add(r.field)}};t([s({type:[oe],json:{write:!0}})],m.prototype,"attributes",void 0),t([s(Ee)],m.prototype,"backgroundFillSymbol",void 0),t([s({type:w,json:{write:!0}})],m.prototype,"defaultColor",void 0),t([s({type:String,json:{write:!0}})],m.prototype,"defaultLabel",void 0),t([s({type:Number,range:{min:0,max:1},json:{write:!0}})],m.prototype,"holePercentage",void 0),t([s({type:V,json:{write:!0}})],m.prototype,"othersCategory",void 0),t([s({type:ke,json:{write:!0}})],m.prototype,"legendOptions",void 0),t([s({type:k,json:{default:null,write:!0}})],m.prototype,"outline",void 0),t([s({type:Number,cast:Y,json:{write:!0}})],m.prototype,"size",void 0),t([F({pieChart:"pie-chart"})],m.prototype,"type",void 0),t([s({types:[Ue]})],m.prototype,"visualVariables",void 0),m=t([_("esri.renderers.PieChartRenderer")],m);const Ze=m;var G;let R=G=class extends L(E){constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.type="simple"}async collectRequiredFields(e,i){await Promise.all([this.collectSymbolFields(e,i),this.collectVVRequiredFields(e,i)])}async collectSymbolFields(e,i){await Promise.all(this.getSymbols().map(r=>r.collectRequiredFields(e,i)))}getSymbol(e,i){return this.symbol}async getSymbolAsync(e,i){return this.symbol}getSymbols(){return this.symbol?[this.symbol]:[]}getAttributeHash(){return this.visualVariables?.reduce((e,i)=>e+i.getAttributeHash(),"")??""}getMeshHash(){return this.getSymbols().reduce((e,i)=>e+JSON.stringify(i),"")}get arcadeRequired(){return this.arcadeRequiredForVisualVariables}clone(){return new G({description:this.description,label:this.label,symbol:a(this.symbol),visualVariables:a(this.visualVariables),authoringInfo:a(this.authoringInfo)})}};t([s({type:String,json:{write:!0}})],R.prototype,"description",void 0),t([s({type:String,json:{write:!0}})],R.prototype,"label",void 0),t([s(Me)],R.prototype,"symbol",void 0),t([F({simple:"simple"})],R.prototype,"type",void 0),R=G=t([_("esri.renderers.SimpleRenderer")],R);const Q=R,ae={key:"type",base:E,typeMap:{heatmap:le,simple:Q,"unique-value":te,"class-breaks":ie,"dot-density":Be,dictionary:ze,"pie-chart":Ze},errorContext:"renderer"},Ge={key:"type",base:E,typeMap:{simple:Q,"unique-value":te,"class-breaks":ie,heatmap:le},errorContext:"renderer",validate:Qe};function Qe(e){switch(e.type){case"simple":return Ke(e);case"unique-value":return We(e);case"class-breaks":return Xe(e);case"heatmap":return e}}function Ke(e){if(e.symbol)return e;M.getLogger("esri.renderers.support.types").error("Removed invalid 'simple' renderer without a symbol from web scene.")}function We(e){const i=e.uniqueValueInfos,r=i?.filter(({symbol:o,label:u},l)=>(o||M.getLogger("esri.renderers.support.types").error(`Removed invalid unique value info ([${l}] ${u}) without a symbol from web scene.`),!!o));return r?.length!==i?.length&&(e.uniqueValueInfos=r),e}function Xe(e){const i=e.classBreakInfos,r=i?.filter(({symbol:o,label:u},l)=>(o||M.getLogger("esri.renderers.support.types").error(`Removed invalid class break info ([${l}] ${u}) without a symbol from web scene.`),!!o));return r?.length!==i?.length&&(e.classBreakInfos=r),e}function ue(e,i){return K(e,null,i)}const Ye=je({types:ae});function K(e,i,r){return e?e&&(e.styleName||e.styleUrl)&&e.type!=="uniqueValue"?(r?.messages&&r.messages.push(new _e("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+e.type+"'",{definition:e,context:r})),null):Ye(e,i,r):null}const et=Object.freeze(Object.defineProperty({__proto__:null,fromJSON:ue,read:K},Symbol.toStringTag,{value:"Module"}));export{et as j,C as l,ae as m,K as o,Q as p,ue as t,Ge as u};
