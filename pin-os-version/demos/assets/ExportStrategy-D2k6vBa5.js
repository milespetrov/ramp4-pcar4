import{bV as E,q as d,u as l,C as N,aF as H,dD as P,G as w,bI as $,J as q,db as T,dA as z}from"./main-DCUo5ucN.js";import{z as C}from"./TileInfo-CnxweRcW.js";import{S as I}from"./Bitmap-D2L03qFG.js";import{h as A}from"./Tile-DjNPXLdp.js";import{e as B}from"./TileKey-CGYro60U.js";const U=Math.PI/180;function V(i){return i*U}function k(i,e){const r=V(e.rotation),t=Math.abs(Math.cos(r)),s=Math.abs(Math.sin(r)),[o,n]=e.size;return i[0]=Math.round(n*s+o*t),i[1]=Math.round(n*t+o*s),i}function D(i,e,r,t){const[s,o]=e,[n,a]=t,m=.5*r;return i[0]=s-m*n,i[1]=o-m*a,i[2]=s+m*n,i[3]=o+m*a,i}const u=E(),c=[0,0],_=new B(0,0,0,0),y={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1};let h=class extends H{constructor(i){super(i),this._imagePromise=null,this.bitmaps=[],this.hidpi=y.hidpi,this.imageMaxWidth=y.imageMaxWidth,this.imageMaxHeight=y.imageMaxHeight,this.imageRotationSupported=y.imageRotationSupported,this.imageNormalizationSupported=y.imageNormalizationSupported,this.update=P(async(e,r)=>{if(w(r),!e.stationary||this.destroyed)return;const t=e.state,s=$(t.spatialReference),o=this.hidpi?e.pixelRatio:1,n=t.worldScreenWidth>0,a=n&&this.imageNormalizationSupported&&t.worldScreenWidth<t.size[0],m=Math.round((this.imageMaxWidth??0)/o),f=Math.round((this.imageMaxHeight??0)/o);a?(c[0]=t.worldScreenWidth,c[1]=t.size[1]):this.imageRotationSupported?(c[0]=t.size[0],c[1]=t.size[1]):k(c,t);const M=Math.floor(c[0])>m||Math.floor(c[1])>f,S=s&&(t.extent.xmin<s.valid[0]||t.extent.xmax>s.valid[1]),v=!this.imageNormalizationSupported&&S,x=!M&&!v,b=this.imageRotationSupported?t.rotation:0,W=this.container.children.slice();if(x){const p=a?t.paddedViewState.center:t.center;this._imagePromise=this._singleExport(t,c,p,t.resolution,b,o,r)}else{let p=Math.min(m,f);n&&(p=Math.min(t.worldScreenWidth,p),p=Math.round(t.worldScreenWidth/Math.ceil(t.worldScreenWidth/p))),this._imagePromise=this._tiledExport(t,p,o,r)}try{const p=await this._imagePromise??[];w(r);const R=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=p;for(const g of W)p.includes(g)||R.push(g.fadeOut().then(()=>{g.remove(),g.destroy()}));for(const g of p)R.push(g.fadeIn());await Promise.all(R)}catch(p){this._imagePromise=null,q(p)}},5e3),this.updateExports=P(async e=>{const r=[];for(const t of this.container.children){if(!t.visible||!t.stage)return;r.push(e(t).then(()=>{t.invalidateTexture(),t.requestRender()}))}this._imagePromise=T(r).then(()=>this._imagePromise=null),await this._imagePromise})}destroy(){this.bitmaps.forEach(i=>i.destroy()),this.bitmaps=[]}get updating(){return!this.destroyed&&this._imagePromise!==null}async _export(i,e,r,t,s,o){const n=await this.fetchSource(i,Math.floor(e*s),Math.floor(r*s),{rotation:t,pixelRatio:s,signal:o});w(o);const a=new I(null,!0);return a.x=i.xmin,a.y=i.ymax,a.resolution=i.width/e,a.rotation=t,a.pixelRatio=s,a.opacity=0,this.container.addChild(a),await a.setSourceAsync(n,o),w(o),a}async _singleExport(i,e,r,t,s,o,n){D(u,r,t,e);const a=z(u,i.spatialReference);return[await this._export(a,e[0],e[1],s,o,n)]}_tiledExport(i,e,r,t){const s=C.create({size:e,spatialReference:i.spatialReference,scales:[i.scale]}),o=new A(s),n=o.getTileCoverage(i);if(!n)return null;const a=[];return n.forEach((m,f,M,S)=>{_.set(m,f,M,0),o.getTileBounds(u,_);const v=z(u,i.spatialReference);a.push(this._export(v,e,e,0,r,t).then(x=>(S!==0&&(_.set(m,f,M,S),o.getTileBounds(u,_),x.x=u[0],x.y=u[3]),x)))}),Promise.all(a)}};d([l()],h.prototype,"_imagePromise",void 0),d([l()],h.prototype,"bitmaps",void 0),d([l()],h.prototype,"container",void 0),d([l()],h.prototype,"fetchSource",void 0),d([l()],h.prototype,"hidpi",void 0),d([l()],h.prototype,"imageMaxWidth",void 0),d([l()],h.prototype,"imageMaxHeight",void 0),d([l()],h.prototype,"imageRotationSupported",void 0),d([l()],h.prototype,"imageNormalizationSupported",void 0),d([l()],h.prototype,"requestUpdate",void 0),d([l()],h.prototype,"updating",null),h=d([N("esri.views.2d.layers.support.ExportStrategy")],h);const K=h;export{K as _};
