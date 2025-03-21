import{k as e,o as t,A as i,v as h,ax as k,bk as f,g as D,f as o,aC as I,bp as O}from"./main-IAmJgjpH.js";import{a as v,b as K}from"./RendererLegendOptions-B2cHl7Dn.js";var T;let c=T=class extends h{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new T({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};e([t({type:String,json:{write:!0}})],c.prototype,"field",void 0),e([t({type:Number,nonNullable:!0,json:{write:!0}})],c.prototype,"minValue",void 0),e([t({type:Number,nonNullable:!0,json:{write:!0}})],c.prototype,"maxValue",void 0),c=T=e([i("esri.renderers.support.pointCloud.ColorModulation")],c);const N=c,w=new k({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let b=class extends h{};e([t({type:w.apiValues,readOnly:!0,nonNullable:!0,json:{type:w.jsonValues,read:!1,write:w.write}})],b.prototype,"type",void 0),b=e([i("esri.renderers.support.pointCloud.PointSizeAlgorithm")],b);const g=b;var V;let y=V=class extends g{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new V({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};e([f({pointCloudFixedSizeAlgorithm:"fixed-size"})],y.prototype,"type",void 0),e([t({type:Number,nonNullable:!0,json:{write:!0}})],y.prototype,"size",void 0),e([t({type:Boolean,json:{write:!0}})],y.prototype,"useRealWorldSymbolSizes",void 0),y=V=e([i("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],y);const A=y;var j;let m=j=class extends g{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new j({scaleFactor:this.scaleFactor})}};e([f({pointCloudSplatAlgorithm:"splat"})],m.prototype,"type",void 0),e([t({type:Number,value:1,nonNullable:!0,json:{write:!0}})],m.prototype,"scaleFactor",void 0),m=j=e([i("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],m);const B=m,q={key:"type",base:g,typeMap:{"fixed-size":A,splat:B}},C=D()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let l=class extends h{constructor(s){super(s),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:o(this.pointSizeAlgorithm),colorModulation:o(this.colorModulation),pointsPerInch:o(this.pointsPerInch)}}};e([t({type:C.apiValues,readOnly:!0,nonNullable:!0,json:{type:C.jsonValues,read:!1,write:C.write}})],l.prototype,"type",void 0),e([t({types:q,json:{write:!0}})],l.prototype,"pointSizeAlgorithm",void 0),e([t({type:N,json:{write:!0}})],l.prototype,"colorModulation",void 0),e([t({json:{write:!0},nonNullable:!0,type:Number})],l.prototype,"pointsPerInch",void 0),l=e([i("esri.renderers.PointCloudRenderer")],l),function(s){s.fieldTransformTypeKebabDict=new k({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"})}(l||(l={}));const r=l;var S;let n=S=class extends h{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new S({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:o(this.color)})}};e([t({type:String,json:{write:!0}})],n.prototype,"description",void 0),e([t({type:String,json:{write:!0}})],n.prototype,"label",void 0),e([t({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],n.prototype,"minValue",void 0),e([t({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],n.prototype,"maxValue",void 0),e([t({type:I,json:{type:[O],write:!0}})],n.prototype,"color",void 0),n=S=e([i("esri.renderers.support.pointCloud.ColorClassBreakInfo")],n);const M=n;var x;let p=x=class extends r{constructor(s){super(s),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new x({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:o(this.colorClassBreakInfos),legendOptions:o(this.legendOptions)})}};e([f({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],p.prototype,"type",void 0),e([t({json:{write:!0},type:String})],p.prototype,"field",void 0),e([t({type:v,json:{write:!0}})],p.prototype,"legendOptions",void 0),e([t({type:r.fieldTransformTypeKebabDict.apiValues,json:{type:r.fieldTransformTypeKebabDict.jsonValues,read:r.fieldTransformTypeKebabDict.read,write:r.fieldTransformTypeKebabDict.write}})],p.prototype,"fieldTransformType",void 0),e([t({type:[M],json:{write:!0}})],p.prototype,"colorClassBreakInfos",void 0),p=x=e([i("esri.renderers.PointCloudClassBreaksRenderer")],p);const F=p;var z;let a=z=class extends r{constructor(s){super(s),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new z({...this.cloneProperties(),field:o(this.field),fieldTransformType:o(this.fieldTransformType),stops:o(this.stops),legendOptions:o(this.legendOptions)})}};e([f({pointCloudStretchRenderer:"point-cloud-stretch"})],a.prototype,"type",void 0),e([t({json:{write:!0},type:String})],a.prototype,"field",void 0),e([t({type:v,json:{write:!0}})],a.prototype,"legendOptions",void 0),e([t({type:r.fieldTransformTypeKebabDict.apiValues,json:{type:r.fieldTransformTypeKebabDict.jsonValues,read:r.fieldTransformTypeKebabDict.read,write:r.fieldTransformTypeKebabDict.write}})],a.prototype,"fieldTransformType",void 0),e([t({type:[K],json:{write:!0}})],a.prototype,"stops",void 0),a=z=e([i("esri.renderers.PointCloudStretchRenderer")],a);const U=a;var R;let u=R=class extends h{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new R({description:this.description,label:this.label,values:o(this.values),color:o(this.color)})}};e([t({type:String,json:{write:!0}})],u.prototype,"description",void 0),e([t({type:String,json:{write:!0}})],u.prototype,"label",void 0),e([t({type:[String],json:{write:!0}})],u.prototype,"values",void 0),e([t({type:I,json:{type:[O],write:!0}})],u.prototype,"color",void 0),u=R=e([i("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],u);const W=u;var P;let d=P=class extends r{constructor(s){super(s),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new P({...this.cloneProperties(),field:o(this.field),fieldTransformType:o(this.fieldTransformType),colorUniqueValueInfos:o(this.colorUniqueValueInfos),legendOptions:o(this.legendOptions)})}};e([f({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],d.prototype,"type",void 0),e([t({json:{write:!0},type:String})],d.prototype,"field",void 0),e([t({type:r.fieldTransformTypeKebabDict.apiValues,json:{type:r.fieldTransformTypeKebabDict.jsonValues,read:r.fieldTransformTypeKebabDict.read,write:r.fieldTransformTypeKebabDict.write}})],d.prototype,"fieldTransformType",void 0),e([t({type:[W],json:{write:!0}})],d.prototype,"colorUniqueValueInfos",void 0),e([t({type:v,json:{write:!0}})],d.prototype,"legendOptions",void 0),d=P=e([i("esri.renderers.PointCloudUniqueValueRenderer")],d);const G=d;export{G as a,U as b,r as c,F as d};
