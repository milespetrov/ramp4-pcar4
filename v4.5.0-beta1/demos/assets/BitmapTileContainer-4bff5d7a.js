import { eM as e, aa as u } from './main-9d6c9b53.js';
import { R } from './Bitmap-08855e10.js';
import { r as r$1 } from './TiledDisplayObject-82039bed.js';
import { w } from './WGLContainer-89d1a31a.js';
import { T } from './color-57c0ae12.js';
import { i } from './TileContainer-fd32a9cb.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
class r extends r$1{constructor(e,s,r,i,a,n,m=null){super(e,s,r,i,a,n),this.bitmap=new R(m,{immutable:!1,requestRenderOnSourceChangedEnabled:!1}),this.bitmap.coordScale=[a,n],this.bitmap.once("isReady",(()=>this.ready()));}destroy(){super.destroy(),this.bitmap.destroy();}beforeRender(e){super.beforeRender(e),this.bitmap.beforeRender(e);}afterRender(e){super.afterRender(e),this.bitmap.afterRender(e);}set stencilRef(e){this.bitmap.stencilRef=e;}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return {dvs:e(),tileMat3:e()}}setTransform(e){super.setTransform(e),this.bitmap.transforms.dvs=this.transforms.dvs;}onAttach(){this.bitmap.stage=this.stage;}onDetach(){this.bitmap&&(this.bitmap.stage=null);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
class n extends i{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(r$1){const t=this._tileInfoView.getTileBounds(u(),r$1),s=this._tileInfoView.getTileResolution(r$1.level),[n,o]=this._tileInfoView.tileInfo.size;return new r(r$1,s,t[0],t[3],n,o)}prepareRenderPasses(e){const i=e.registerRenderPass({name:"bitmap (tile)",brushes:[w.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:T.MAP});return [...super.prepareRenderPasses(e),i]}doRender(e){this.visible&&e.drawPhase===T.MAP&&super.doRender(e);}}

export { n };
