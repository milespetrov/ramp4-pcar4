import{al as n,u as s,v as t,D as a,B as d}from"./main-CZM6prq-.js";var i;const r=new n({asc:"ascending",desc:"descending"});let e=i=class extends d{constructor(o){super(o),this.field=null,this.valueExpression=null,this.order="ascending"}clone(){return new i({field:this.field,valueExpression:this.valueExpression,order:this.order})}};s([t({type:String,json:{write:!0}})],e.prototype,"field",void 0),s([t({type:String,json:{write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],e.prototype,"valueExpression",void 0),s([t({type:r.apiValues,json:{type:r.jsonValues,read:r.read,write:r.write}})],e.prototype,"order",void 0),e=i=s([a("esri.layers.support.OrderByInfo")],e);const l=e;export{l as a};
