import{ax as h,k as i,o as s,b2 as R,A as w,v as S,f as r}from"./main-BqyZdgF9.js";import{b as v}from"./Query-P1CyJjn-.js";import{p as j}from"./TimeExtent-Ch7KCsKO.js";var c;const d=new h({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),m=new h({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let e=c=class extends S{constructor(t){super(t),this.where=null,this.geometry=null,this.spatialRelationship="intersects",this.distance=void 0,this.objectIds=null,this.units=null,this.timeExtent=null}createQuery(t={}){const{where:a,geometry:n,spatialRelationship:l,timeExtent:o,objectIds:p,units:u,distance:y}=this;return new v({geometry:r(n),objectIds:r(p),spatialRelationship:l,timeExtent:r(o),where:a,units:u,distance:y,...t})}clone(){const{where:t,geometry:a,spatialRelationship:n,timeExtent:l,objectIds:o,units:p,distance:u}=this;return new c({geometry:r(a),objectIds:r(o),spatialRelationship:n,timeExtent:r(l),where:t,units:p,distance:u})}};i([s({type:String,json:{write:!0}})],e.prototype,"where",void 0),i([s({types:R,json:{write:!0}})],e.prototype,"geometry",void 0),i([s({type:d.apiValues,json:{name:"spatialRel",read:{reader:d.read},write:{allowNull:!1,writer:d.write,overridePolicy(){return{enabled:this.geometry!=null}}}}})],e.prototype,"spatialRelationship",void 0),i([s({type:Number,json:{write:{overridePolicy(t){return{enabled:t!=null&&this.geometry!=null}}}}})],e.prototype,"distance",void 0),i([s({type:[Number],json:{write:!0}})],e.prototype,"objectIds",void 0),i([s({type:m.apiValues,json:{read:m.read,write:{writer:m.write,overridePolicy(t){return{enabled:t!=null&&this.geometry!=null}}}}})],e.prototype,"units",void 0),i([s({type:j,json:{write:!0}})],e.prototype,"timeExtent",void 0),e=c=i([w("esri.layers.support.FeatureFilter")],e);const b=e;export{b as default};
