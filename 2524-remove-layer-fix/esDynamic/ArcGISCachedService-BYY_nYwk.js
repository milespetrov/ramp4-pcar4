import{k as t,o,u as m,B as v,A as x}from"./main-DJHcSGyV.js";import{z as d}from"./TileInfo-BkDppar9.js";import{e as S}from"./TileInfoTilemapCache-DTgEsEW1.js";import{T as I}from"./TilemapCache-BXlKKkP2.js";const O=f=>{let e=class extends f{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}destroy(){this.tilemapCache?.destroy?.()}readMinScale(s,l){return l.minLOD!=null&&l.maxLOD!=null?s:0}readMaxScale(s,l){return l.minLOD!=null&&l.maxLOD!=null?s:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(s,l,h){const y=l.capabilities?.includes("Tilemap");let{minLOD:i,maxLOD:r,minScale:p,maxScale:c}=l;if(i==null&&r==null&&p!==0&&c!==0){const a=n=>Math.round(1e4*n)/1e4;p=a(p||l.tileInfo.lods[0].scale),c=a(c||l.tileInfo.lods[l.tileInfo.lods.length-1].scale);for(const n of l.tileInfo.lods){const u=a(n.scale);i=u>=p?n.level:i,r=u>=c?n.level:r}}if(y)return new I({layer:this,minLOD:i,maxLOD:r});if(l.tileInfo){const a=new d;return a.read(l.tileInfo,h),new S(a,i,r)}return null}};return t([o({json:{read:{source:"copyrightText"}}})],e.prototype,"copyright",void 0),t([o()],e.prototype,"minScale",void 0),t([m("service","minScale")],e.prototype,"readMinScale",null),t([o()],e.prototype,"maxScale",void 0),t([m("service","maxScale")],e.prototype,"readMaxScale",null),t([o({type:v})],e.prototype,"spatialReference",void 0),t([o({readOnly:!0})],e.prototype,"supportsBlankTile",null),t([o({type:d})],e.prototype,"tileInfo",void 0),t([o()],e.prototype,"tilemapCache",void 0),t([m("service","tilemapCache",["capabilities","tileInfo"])],e.prototype,"readTilemapCache",null),t([o()],e.prototype,"version",void 0),e=t([x("esri.layers.mixins.ArcGISCachedService")],e),e};export{O as p};
