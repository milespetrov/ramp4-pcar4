import{k as c,o as v,q as s,u as h,v as y,z as a,A as m,Y as f,$ as w,B as u,C as S}from"./main-CFpM9i38.js";var o;const l=c()({orthometric:"gravity-related-height",gravity_related_height:"gravity-related-height",ellipsoidal:"ellipsoidal"}),p=l.jsonValues.slice();v(p,"orthometric");const n=c()({meter:"meters",foot:"feet","us-foot":"us-feet","clarke-foot":"clarke-feet","clarke-yard":"clarke-yards","clarke-link":"clarke-links","sears-yard":"sears-yards","sears-foot":"sears-feet","sears-chain":"sears-chains","benoit-1895-b-chain":"benoit-1895-b-chains","indian-yard":"indian-yards","indian-1937-yard":"indian-1937-yards","gold-coast-foot":"gold-coast-feet","sears-1922-truncated-chain":"sears-1922-truncated-chains","50-kilometers":"50-kilometers","150-kilometers":"150-kilometers"});let r=o=class extends m{constructor(e){super(e),this.heightModel="gravity-related-height",this.heightUnit="meters",this.vertCRS=null}writeHeightModel(e,t,i){return l.write(e,t,i)}readHeightModel(e,t,i){return l.read(e)||(i?.messages&&i.messages.push(M(e,{context:i})),null)}readHeightUnit(e,t,i){return n.read(e)||(i?.messages&&i.messages.push(g(e,{context:i})),null)}readHeightUnitService(e,t,i){return f(e)||n.read(e)||(i?.messages&&i.messages.push(g(e,{context:i})),null)}readVertCRS(e,t){return t.vertCRS||t.ellipsoid||t.geoid}clone(){return new o({heightModel:this.heightModel,heightUnit:this.heightUnit,vertCRS:this.vertCRS})}equals(e){return!!e&&(this===e||this.heightModel===e.heightModel&&this.heightUnit===e.heightUnit&&this.vertCRS===e.vertCRS)}static deriveUnitFromSR(e,t){const i=w(t);return new o({heightModel:e.heightModel,heightUnit:i??void 0,vertCRS:e.vertCRS})}write(e,t){return t={origin:"web-scene",...t},super.write(e,t)}static fromJSON(e){if(!e)return null;const t=new o;return t.read(e,{origin:"web-scene"}),t}};function g(e,t){return new u("height-unit:unsupported",`Height unit of value '${e}' is not supported`,t)}function M(e,t){return new u("height-model:unsupported",`Height model of value '${e}' is not supported`,t)}s([h({type:l.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:p,default:"ellipsoidal"}}}})],r.prototype,"heightModel",void 0),s([y("web-scene","heightModel")],r.prototype,"writeHeightModel",null),s([a(["web-scene","service"],"heightModel")],r.prototype,"readHeightModel",null),s([h({type:n.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:n.jsonValues,write:n.write}}}})],r.prototype,"heightUnit",void 0),s([a("web-scene","heightUnit")],r.prototype,"readHeightUnit",null),s([a("service","heightUnit")],r.prototype,"readHeightUnitService",null),s([h({type:String,constructOnly:!0,json:{origins:{"web-scene":{write:!0}}}})],r.prototype,"vertCRS",void 0),s([a("service","vertCRS",["vertCRS","ellipsoid","geoid"])],r.prototype,"readVertCRS",null),r=o=s([S("esri.geometry.HeightModelInfo")],r);const R=r;export{R as v};
