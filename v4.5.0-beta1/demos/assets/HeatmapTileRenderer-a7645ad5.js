import { gl as l, e, k as a$1, gm as u } from './main-9d6c9b53.js';
import { n } from './BitmapTileContainer-4bff5d7a.js';
import { o as o$1 } from './BaseTileRenderer-05d0a38b.js';
import './preload-helper-a4975f27.js';
import './Bitmap-08855e10.js';
import './Container-27245200.js';
import './definitions-281daf3f.js';
import './enums-1f7f0b0a.js';
import './Texture-18319b8f.js';
import './TiledDisplayObject-82039bed.js';
import './WGLContainer-89d1a31a.js';
import './VertexArrayObject-608196bc.js';
import './VertexElementDescriptor-a439aa9a.js';
import './color-57c0ae12.js';
import './enums-9c1aeae9.js';
import './ProgramTemplate-79dfe502.js';
import './MaterialKey-ec3a4118.js';
import './utils-51e1bdcd.js';
import './StyleDefinition-1998cf52.js';
import './config-c354710d.js';
import './GeometryUtils-7c55c6d6.js';
import './earcut-336027d9.js';
import './TileContainer-fd32a9cb.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
class i{constructor(){this.gradient=null,this.height=512,this.intensities=null,this.width=512;}render(i){l(i,512,this.intensities,this.gradient,this.minDensity,this.maxDensity);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let o=class extends o$1{constructor(e){super(e),this._intensityInfo={minDensity:0,maxDensity:0},this.type="heatmap",this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new n(e.tileInfoView);}createTile(e){const t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t}onConfigUpdate(){const e=this.layer.renderer;if("heatmap"===e.type){const{minDensity:t,maxDensity:r,colorStops:s}=e;this._intensityInfo.minDensity=t,this._intensityInfo.maxDensity=r,this._gradient=u(s),this.tiles.forEach((e=>{const i=e.bitmap.source;i&&(i.minDensity=t,i.maxDensity=r,i.gradient=this._gradient,e.bitmap.invalidateTexture());}));}}hitTest(){return Promise.resolve([])}install(e){e.addChild(this._container);}uninstall(e){this._container.removeAllChildren(),e.removeChild(this._container);}disposeTile(e){this._container.removeChild(e),e.destroy();}supportsRenderer(e){return e&&"heatmap"===e.type}onTileData(e){const t=this.tiles.get(e.tileKey);if(!t)return;const i$1=e.intensityInfo,{minDensity:r,maxDensity:s}=this._intensityInfo,o=t.bitmap.source||new i;o.intensities=i$1&&i$1.matrix||null,o.minDensity=r,o.maxDensity=s,o.gradient=this._gradient,t.bitmap.source=o,this._container.addChild(t),this._container.requestRender(),this.requestUpdate();}onTileError(e){console.error(e);}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(e,t){return console.error(e),Promise.reject()}};o=e([a$1("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],o);const a=o;

export { a as default };
