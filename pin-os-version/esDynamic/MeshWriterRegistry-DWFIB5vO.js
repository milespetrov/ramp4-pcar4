import{o as E,n as ve,p as Me,q as Pe,f as te,s as A,e as M}from"./UpdateTracking2D-CrccE4XT.js";import{be as D,hP as be,aC as we,bQ as T,f as Ie,s as Se,n as ke}from"./main-C6lijZBn.js";import{m as N}from"./definitions-DJSdSb77.js";import{c as Ae,f as B,m as ie,N as se,P as q,g as ze,i as Le,l as Ee,T as De,s as Be,_ as Re,a as Te,b as Fe,h as Ce,o as Ge,d as Oe,e as We,j as Ve}from"./PieChartMeshWriter-ocPnoPB4.js";import{C as S}from"./enums-DBi1-Mm2.js";import{M as je,n as Z,a as re}from"./Tile-hNafhmdo.js";import{o as k,B as ne,v as Y,u as Ne,l as oe}from"./vec2-tHZ6OaOy.js";import{t as ae}from"./vec2f32-CVhmN3Me.js";import{n as z}from"./vec2f64-CeODonrJ.js";import{h as qe,r as ce}from"./featureConversionUtils-26BsmIPK.js";import{s as X}from"./OptimizedFeature-EIithYlr.js";import{r as le,t as Ze}from"./LabelMetric-hVsiJR7T.js";import{e as F}from"./constants-Bqe1QJ4u.js";import{o as he,e as Ye}from"./grouping-DS9Gu-DB.js";import{c as Xe}from"./AttributeStore-B42e5DuP.js";let Qe=class extends Ae{};function He(r){const{sprite:e,isMapAligned:t,colorLocked:s,scaleSymbolsProportionally:i,isStroke:n}=r;let o=0;return t&&(o|=B(E.bitset.isMapAligned)),s&&(o|=B(E.bitset.colorLocked)),e.sdf&&(o|=B(E.bitset.isSDF)),i&&(o|=B(E.bitset.scaleSymbolsProportionally)),n&&(o|=B(E.bitset.isStroke)),o}let Ue=class extends Qe{get vertexSpec(){return{createComputedParams:r=>{let{pixelDimensions:e,texelDimensions:t,baseSize:s,referenceSize:i,strokeWidth:n,sizeRatio:o}=r;e||(e=r.sprite.sdf?[0,0]:[r.sprite.width,r.sprite.height]),t||(t=r.sprite.sdf?[0,0]:e),s=D(s),i=D(i),n=D(n);const a=(r.sprite.sdfDecodeCoeff??1)*o;return{...r,pixelDimensions:e,texelDimensions:t,baseSize:s,referenceSize:i,strokeWidth:n,sdfDecodeCoeff:a}},optionalAttributes:{zoomRange:{type:S.SHORT,count:2,packPrecisionFactor:N,pack:({scaleInfo:r},{tileInfo:e})=>ie(r,e)}},attributes:{id:{type:S.UNSIGNED_BYTE,count:3,pack:"id"},bitset:{type:S.UNSIGNED_BYTE,count:1,pack:He},pos:{type:S.SHORT,count:2,pack:"position",packPrecisionFactor:1},offset:{type:S.FLOAT,count:2,packAlternating:{count:4,pack:r=>{const e=r.texelDimensions;return[[-.5*e[0],-.5*e[1]],[.5*e[0],-.5*e[1]],[-.5*e[0],.5*e[1]],[.5*e[0],.5*e[1]]]}}},uv:{type:S.SHORT,count:2,packPrecisionFactor:1,packAlternating:{count:4,packTessellation:({texXmax:r,texXmin:e,texYmax:t,texYmin:s})=>[[e,s],[r,s],[e,t],[r,t]]}},animationPointerAndBaseSizeAndReferenceSize:{type:S.UNSIGNED_SHORT,count:4,packPrecisionFactor:1,pack:({animations:r,baseSize:e,referenceSize:t})=>[r.dataColumn,r.dataRow,e,t]},sizing:{type:S.UNSIGNED_SHORT,count:4,packPrecisionFactor:8,pack:({strokeWidth:r,pixelDimensions:e,baseSize:t,sprite:s,sizeRatio:i})=>{const n=Math.max(t*s.width/s.height,t),o=s.sdfDecodeCoeff*n*i;return[e[0],e[1],r,o]}},angle:{type:S.BYTE,count:1,packTessellation:({angle:r})=>r}}}}_write(r,e){const t=this.evaluatedMeshParams.sprite,{textureBinding:s}=t;r.recordStart(this.instanceId,this.attributeLayout,s);const i=e.getDisplayId();if(e.geometryType==="esriGeometryPolygon"){const n=e.readCentroidForDisplay();if(!n)return;const[o,a]=n.coords;this._writeQuad(r,i,o,a)}else if(e.geometryType==="esriGeometryPoint"){const n=e.readXForDisplay(),o=e.readYForDisplay();this._writeQuad(r,i,n,o)}else{const n=e.readGeometryForDisplay();if(n){const{angleToLine:o}=this.evaluatedMeshParams;if(o){let a=!0,c=null,d=null;n.forEachVertex((l,u)=>{if(c!=null&&d!=null){const h=Math.atan2(u-d,l-c)/ve;a&&(this._writeQuad(r,i,c,d,h),a=!1),this._writeQuad(r,i,l,u,h)}c=l,d=u})}else n.forEachVertex((a,c)=>{this._writeQuad(r,i,a,c)})}}r.recordEnd()}_writeQuad(r,e,t,s,i=0){const n=this.evaluatedMeshParams.sprite,{rect:o}=n,a=o.x+2,c=o.y+2,d=o.x+o.width-2,l=o.y+o.height-2,u=r.vertexCount();r.recordBounds(t,s,64,64);const h={texXmin:a,texYmin:c,texXmax:d,texYmax:l,angle:i};for(let _=0;_<4;_++)this._writeVertex(r,e,t,s,h);r.indexEnsureSize(6),r.indexWrite(u),r.indexWrite(u+1),r.indexWrite(u+2),r.indexWrite(u+1),r.indexWrite(u+3),r.indexWrite(u+2)}};function ue(r,e,t){return r[0]=e[0]-t[0],r[1]=e[1]-t[1],r}function de(r,e){return Math.sqrt(r*r+e*e)}function fe(r){const e=de(r[0],r[1]);r[0]/=e,r[1]/=e}function $e(r,e){return de(r[0]-e[0],r[1]-e[1])}function Je(r,e){return r[e+1]}function me(r){return r.length-1}function Ke(r){let e=0;for(let t=0;t<me(r);t++)e+=et(r,t);return e}function et(r,e,t=1){let[s,i]=Je(r,e);return[s,i]=[Math.round(s),Math.round(i)],Math.sqrt(s*s+i*i)*t}let tt=class ${constructor(e,t,s,i,n){this._segments=e,this._index=t,this._distance=s,this._xStart=i,this._yStart=n,this._done=!1}static create(e){return new $(e,0,0,e[0][0],e[0][1])}clone(){return new $(this._segments,this._index,this._distance,this.xStart,this.yStart)}equals(e){return this._index===e._index||e._index===this._index-1&&(this._distance===0||e._distance===1)||e._index===this._index+1&&(this._distance===1||e._distance===0)}leq(e){return this._index<e._index||this._index===e._index&&this._distance<=e._distance}geq(e){return this._index>e._index||this._index===e._index&&this._distance>=e._distance}get _segment(){return this._segments[this._index+1]}get angle(){const e=this.dy,t=(0*e+-1*-this.dx)/(1*this.length);let s=Math.acos(t);return e>0&&(s=2*Math.PI-s),s}get xStart(){return this._xStart}get yStart(){return this._yStart}get x(){return this.xStart+this.distance*this.dx}get y(){return this.yStart+this.distance*this.dy}get dx(){return this._segment[0]}get dy(){return this._segment[1]}get xMidpoint(){return this.xStart+.5*this.dx}get yMidpoint(){return this.yStart+.5*this.dy}get xEnd(){return this.xStart+this.dx}get yEnd(){return this.yStart+this.dy}get length(){const{dx:e,dy:t}=this;return Math.sqrt(e*e+t*t)}get remainingLength(){return this.length*(1-this._distance)}get backwardLength(){return this.length*this._distance}get distance(){return this._distance}get done(){return this._done}hasPrev(){return this._index-1>=0}hasNext(){return this._index+1<me(this._segments)}next(){return this.hasNext()?(this._xStart+=this.dx,this._yStart+=this.dy,this._distance=0,this._index+=1,this):null}prev(){return this.hasPrev()?(this._index-=1,this._xStart-=this.dx,this._yStart-=this.dy,this._distance=1,this):(this._done=!0,null)}_seekBackwards(e,t){const s=this.backwardLength;if(e<=s)return this._distance=(s-e)/this.length,this;let i=this.backwardLength;for(;this.prev();){if(i+this.length>e)return this._seekBackwards(e-i);i+=this.length}return this._distance=0,t?this:null}seek(e,t=!1){if(e<0)return this._seekBackwards(Math.abs(e),t);if(e<=this.remainingLength)return this._distance=(this.backwardLength+e)/this.length,this;let s=this.remainingLength;for(;this.next();){if(s+this.length>e)return this.seek(e-s,t);s+=this.length}return this._distance=1,t?this:null}};function Q(r,e,t,s=!0){const i=Ke(r),n=tt.create(r),o=i/2;if(!s)return n.seek(o),void(Math.abs(n.x)<F&&Math.abs(n.y)<F&&t(n.clone(),0,o+0*e,i));const a=Math.max((i-e)/2,0),c=Math.floor(a/e),d=o-c*e;n.seek(d);for(let l=-c;l<=c;l++)Math.abs(n.x)<F&&Math.abs(n.y)<F&&t(n.clone(),l,o+l*e,i),n.seek(e)}function H(r,e){const t=e;for(let s=0;s<r.length;s++){let i=r[s];it(i,t);const n=[];n.push(i[0]);for(let o=1;o<i.length;o++){const[a,c]=i[o-1],[d,l]=i[o],u=d-a,h=l-c;n.push([u,h])}r[s]=n,i=n}return r}function it(r,e){if(e<=0)return;const t=r.length;if(t<3)return;const s=[];let i=0;s.push(0);for(let l=1;l<t;l++)i+=$e(r[l],r[l-1]),s.push(i);e=Math.min(e,.2*i);const n=[];n.push(r[0][0]),n.push(r[0][1]);const o=r[t-1][0],a=r[t-1][1],c=ue([0,0],r[0],r[1]);fe(c),r[0][0]+=e*c[0],r[0][1]+=e*c[1],ue(c,r[t-1],r[t-2]),fe(c),r[t-1][0]+=e*c[0],r[t-1][1]+=e*c[1];for(let l=1;l<t;l++)s[l]+=e;s[t-1]+=e;const d=.5*e;for(let l=1;l<t-1;l++){let u=0,h=0,_=0;for(let m=l-1;m>=0&&!(s[m+1]<s[l]-d);m--){const f=d+s[m+1]-s[l],p=s[m+1]-s[m],g=s[l]-s[m]<d?1:f/p;if(Math.abs(g)<1e-6)break;const y=g*g,v=g*f-.5*y*p,P=g*p/e,x=r[m+1],I=r[m][0]-x[0],b=r[m][1]-x[1];u+=P/v*(x[0]*g*f+.5*y*(f*I-p*x[0])-y*g*p*I/3),h+=P/v*(x[1]*g*f+.5*y*(f*b-p*x[1])-y*g*p*b/3),_+=P}for(let m=l+1;m<t&&!(s[m-1]>s[l]+d);m++){const f=d-s[m-1]+s[l],p=s[m]-s[m-1],g=s[m]-s[l]<d?1:f/p;if(Math.abs(g)<1e-6)break;const y=g*g,v=g*f-.5*y*p,P=g*p/e,x=r[m-1],I=r[m][0]-x[0],b=r[m][1]-x[1];u+=P/v*(x[0]*g*f+.5*y*(f*I-p*x[0])-y*g*p*I/3),h+=P/v*(x[1]*g*f+.5*y*(f*b-p*x[1])-y*g*p*b/3),_+=P}n.push(u/_),n.push(h/_)}n.push(o),n.push(a);for(let l=0,u=0;l<t;l++)r[l][0]=n[u++],r[l][1]=n[u++]}const C=1,L=0,st=128,rt=be(r=>{let e=0;if(r===0)return 1/0;for(;!(r%2);)e++,r/=2;return e});class nt extends se{constructor(){super(...arguments),this._zoomLevel=0}_write(e,t,s,i){if(this._zoomLevel=i||0,s!=null)throw new Error("InternalError: EffectGeometry not support for LabelMeshWriter");switch(t.geometryType){case"esriGeometryPoint":{const n=t.readXForDisplay(),o=t.readYForDisplay();this._writePoint(e,n,o,t);break}case"esriGeometryEnvelope":case"esriGeometryPolygon":case"esriGeometryMultipoint":{const n=t.readCentroidForDisplay();if(!n)return;const[o,a]=n.coords;this._writePoint(e,o,a,t);break}case"esriGeometryPolyline":this._writeLines(e,t)}}_createLineLabelMetric(e,t,s,i){const n=te(e),o=this.evaluatedMeshParams.horizontalAlignment==="right"?-1:1,a=this.evaluatedMeshParams.verticalAlignment==="bottom"?-1:1,c=this.evaluatedMeshParams.scaleInfo?.maxScale??0,d=this.evaluatedMeshParams.scaleInfo?.minScale??0;return new le(n,t,s,o,a,c,d,i??null)}_writePoint(e,t,s,i){const n=this._getShaping();if(!n)return;const o=i.getDisplayId(),a=Me(this.evaluatedMeshParams.horizontalAlignment),c=Pe(this.evaluatedMeshParams.verticalAlignment),d=this.evaluatedMeshParams.scaleInfo?.maxScale??0,l=this.evaluatedMeshParams.scaleInfo?.minScale??0,u=te(i.getDisplayId()),h=this._getPointReferenceBounds()||{offsetX:0,offsetY:0,size:0};e.metricStart(new le(u,t,s,a,c,d,l,h)),this._writeGlyphs(e,o,t,s,n,0,h),e.metricBoxWrite(n.boundsT),e.metricEnd()}_getPointReferenceBounds(){if(!this._references)return null;for(const e of this._references){const t=e.getBoundsInfo();if(t)return t}return null}_writeLines(e,t){const{scaleInfo:s,verticalAlignment:i}=this.evaluatedMeshParams,n=this.evaluatedMeshParams.repeatLabelDistance||128,o=this._getShaping("middle");if(!o)return;const a=(d,l,u,h)=>this._placeSubdivGlyphs(d,l,u,h),c=(o.bounds.width+n)/(1<<C);this._current={out:e,id:t.getDisplayId(),shaping:o,zoomRange:ie(s,this.getTileInfo()),referenceBounds:this._getPointReferenceBounds()||{offsetX:0,offsetY:0,size:0},offsetDirection:null},this._verticalPlacement=i==="bottom"?"above":i==="top"?"below":null,this._verticalPlacement?this._writeAboveAndBelowAlong(t,a,c):this._writeCenterAlong(t,a,c)}_writeAboveAndBelowAlong(e,t,s){const{repeatLabel:i}=this.evaluatedMeshParams,{shaping:n}=this._current,o=n.bounds.halfHeight,a=e.readGeometryForDisplay();if(!a)return;const c=new X;qe(c,a,!1,!1,"esriGeometryPolyline",1);const d=pe(new X,c,o),l=pe(new X,c,-o),u=ce(l,"esriGeometryPolyline",!1,!1),h=ce(d,"esriGeometryPolyline",!1,!1),_=H(h.paths,n.bounds.width),m=H(u.paths,n.bounds.width);this._current.offsetDirection="above";for(const f of _)Q(f,s,t,!!i);this._current.offsetDirection="below";for(const f of m)Q(f,s,t,!!i)}_writeCenterAlong(e,t,s){const{repeatLabel:i}=this.evaluatedMeshParams,{shaping:n}=this._current,o=H(e.readLegacyGeometryForDisplay().paths,n.bounds.width);for(const a of o)Q(a,s,t,!!i)}_placeSubdivGlyphs(e,t,s,i){const{allowOverrun:n,labelPosition:o,repeatLabelDistance:a}=this.evaluatedMeshParams,c=this._current.zoomRange[0],d=rt(t),l=this._current.shaping.bounds.width/(1<<C),u=Math.sqrt(a||st)/(1<<C),h=Math.min(s,i-s),_=this._current.shaping.isMultiline?q:Math.log2(h/(u+l/2)),m=t===0?_:Math.min(d,_),f=Math.max(c,this._zoomLevel+C-m),p=this._zoomLevel-f,g=this._current.shaping.bounds.width/2*2**p;this._current.shaping.isMultiline?t===0&&this._placeStraight(e,f):n&&p<0?this._placeStraightAlong(e,c):o==="parallel"?this._placeStraightAlong(e,f):o==="curved"&&this._placeCurved(e,f,g)}_placeStraight(e,t){const{out:s,id:i,shaping:n,referenceBounds:o}=this._current,{x:a,y:c}=e;s.metricStart(this._createLineLabelMetric(i,a,c)),s.metricBoxWrite(n.boundsT);const d=e.angle*(180/Math.PI)%360,l=(e.angle*(180/Math.PI)+180)%360;this._writeGlyphs(s,i,a,c,n,0,o,{clipAngle:d,mapAligned:!0,isLineLabel:!0,minZoom:t}),this._writeGlyphs(s,i,a,c,n,0,o,{clipAngle:l,mapAligned:!0,isLineLabel:!0,minZoom:t}),s.metricEnd()}_placeCurved(e,t,s){const{out:i,id:n}=this._current;i.metricStart(this._createLineLabelMetric(n,e.x,e.y));const o=e.clone(),a=e.angle*(180/Math.PI)%360,c=(e.angle*(180/Math.PI)+180)%360;this._verticalPlacement&&this._verticalPlacement!==this._current.offsetDirection||(this._placeFirst(o,t,1,a),this._placeBack(e,o,t,s,1,a),this._placeForward(e,o,t,s,1,a)),this._verticalPlacement&&this._verticalPlacement===this._current.offsetDirection||(this._placeFirst(o,t,0,c),this._placeBack(e,o,t,s,0,c),this._placeForward(e,o,t,s,0,c)),i.metricEnd()}_placeStraightAlong(e,t){const{out:s,id:i,shaping:n,zoomRange:o,referenceBounds:a}=this._current,{boxBorderLineColor:c,boxBackgroundColor:d}=this.evaluatedMeshParams,l=e.clone(),u=e.angle*(180/Math.PI)%360,h=(e.angle*(180/Math.PI)+180)%360,_=n.glyphs.length>0&&!(!c&&!d);if(s.metricStart(this._createLineLabelMetric(i,e.x,e.y)),_){const m=Math.max(t,o[0],0),f=Math.min(q,o[1]),p=je(Z(),-e.angle),g={minZoom:m,maxZoom:f,clipAngle:u,mapAligned:!0,isLineLabel:!0},y=D(this.evaluatedMeshParams.offsetX),v=D(this.evaluatedMeshParams.offsetY);if(!this._verticalPlacement||this._verticalPlacement===this._current.offsetDirection){const P=ae(y,-1*v),[x,I]=n.shapeBackground(re(Z(),p,P));s.recordStart(this.instanceId,this.attributeLayout,n.glyphs[0].textureBinding);const b=2*Math.max(x.width,x.height);s.recordBounds(e.x+x.x,e.y+x.y,b,b),this._writeTextBox(s,i,e.x,e.y,I,a,g),s.recordEnd()}if(!this._verticalPlacement||this._verticalPlacement!==this._current.offsetDirection){const P=ae(y,v),[x,I]=n.shapeBackground(re(Z(),p,P));g.clipAngle=h,s.recordStart(this.instanceId,this.attributeLayout,n.glyphs[0].textureBinding);const b=2*Math.max(x.width,x.height);s.recordBounds(e.x+x.x,e.y+x.y,b,b),this._writeTextBox(s,i,e.x,e.y,I,a,g),s.recordEnd()}}this._verticalPlacement&&this._verticalPlacement!==this._current.offsetDirection||this._placeFirst(l,t,1,u,!0),this._verticalPlacement&&this._verticalPlacement===this._current.offsetDirection||this._placeFirst(l,t,0,h,!0),s.metricEnd()}_placeBack(e,t,s,i,n,o){const a=e.clone();let c=e.backwardLength+L;for(;a.prev()&&!(c>=i);)this._placeOnSegment(a,t,c,s,-1,n,o),c+=a.length+L}_placeForward(e,t,s,i,n,o){const a=e.clone();let c=e.remainingLength+L;for(;a.next()&&!(c>=i);)this._placeOnSegment(a,t,c,s,1,n,o),c+=a.length+L}_placeFirst(e,t,s,i,n=!1){const{out:o,id:a,shaping:c,zoomRange:d,referenceBounds:l}=this._current,u=c.glyphs;for(const h of u){const _=h.x>c.bounds.x?s:1-s,m=_*e.remainingLength+(1-_)*e.backwardLength,f=Math.abs(h.x+h.width/2-c.bounds.x),p=Math.max(0,this._zoomLevel+Math.log2(f/(m+L))),g=Math.max(t,n?0:p);h.maxZoom=Math.min(d[1],q),h.angle=e.angle+(1-s)*Math.PI,h.minZoom=Math.max(d[0],g),this._writeLineGlyph(o,a,e.x,e.y,c.bounds,h,i,l,!0),(s||this._current.offsetDirection)&&this._isVisible(h.minZoom,h.maxZoom)&&o.metricBoxWrite(h.bounds)}}_placeOnSegment(e,t,s,i,n,o,a){const{out:c,id:d,shaping:l,referenceBounds:u}=this._current,h=l.glyphs,_=e.dx/e.length,m=e.dy/e.length,f={x:e.x+s*-n*_,y:e.y+s*-n*m};for(const p of h){const g=p.x>l.bounds.x?o:1-o;if(!(g&&n===1||!g&&n===-1))continue;const y=Math.abs(p.x+p.width/2-l.bounds.x),v=Math.max(0,this._zoomLevel+Math.log2(y/s)-.1),P=Math.max(i,this._zoomLevel+Math.log2(y/(s+e.length+L)));v!==0&&(p.angle=e.angle+(1-o)*Math.PI,p.minZoom=P,p.maxZoom=v,this._writeLineGlyph(c,d,f.x,f.y,l.bounds,p,a,u,!0),(o||this._current.offsetDirection)&&this._isVisible(p.minZoom,p.maxZoom)&&c.metricBoxWrite(p.bounds))}}_writeLineGlyph(e,t,s,i,n,o,a,c,d){const l=s+n.x,u=i+n.y,h=2*(this.evaluatedMeshParams.minPixelBuffer?this.evaluatedMeshParams.minPixelBuffer/this._textMeshTransformProps.fontSize:1),_=Math.max(n.width,n.height)*h;e.recordStart(this.instanceId,this.attributeLayout,o.textureBinding),e.recordBounds(l,u,_,_);const{texcoords:m,offsets:f}=o,{fontSize:p,haloSize:g,outlineSize:y}=this._textMeshTransformProps;this._writeQuad(e,t,s,i,{texcoords:m,offsets:f,fontSize:p,haloSize:g,outlineSize:y,color:ze(this.evaluatedMeshParams.color),isBackground:!1,referenceBounds:c,minZoom:Math.max(this._current.zoomRange[0],o.minZoom),maxZoom:Math.min(this._current.zoomRange[1],o.maxZoom),clipAngle:a,mapAligned:d,isLineLabel:!0}),e.recordEnd()}_isVisible(e,t){const s=Math.floor(this._zoomLevel*N)/N;return e<=s&&s<=t}}function pe(r,e,t){const{coords:s,lengths:i}=e,n=z(),o=z(),a=z(),c=z(),d=z(),l=z(),u=2;let h=0;for(let _=0;_<i.length;_++){const m=i[_];for(let f=0;f<m;f++){const p=u*(f+h-1),g=u*(f+h),y=u*(f+h+1);f>0?k(n,s[p],s[p+1]):k(n,0,0),k(o,s[g],s[g+1]),f<m-1?k(a,s[y],s[y+1]):k(a,0,0),f===0?k(c,0,0):(ne(c,o,n),Y(c,c),k(c,c[1],-c[0])),f===m-1?k(d,0,0):(ne(d,a,o),Y(d,d),k(d,d[1],-d[0])),Ne(l,c,d),Y(l,l);const v=l[0]*d[0]+l[1]*d[1];v!==0&&oe(l,l,v),oe(l,l,t),r.coords.push(o[0]+l[0],o[1]+l[1])}r.lengths.push(m),h+=m}return r}function G(r){return r instanceof O?r:typeof r=="object"&&"type"in r?ct[r.type].hydrate(r):new R(r)}class O{constructor(e){this.inputs=e}encode(){const e=[];for(const t of this.inputs)e.push(...t.encode());return e.push(...this.instructions),e}}let R=class extends O{constructor(r){super([]),this.value=r}simplify(){return this}get instructions(){if(Array.isArray(this.value)){const[r,e,t,s]=this.value;return s!=null?A.vector4.encode([r,e||0,t||0,s]):A.vector3.encode([r,e||0,t||0])}return A.scalar.encode(this.value)}},ot=class J extends O{constructor(e,t){super([t]),this._config=e,this._parent=t}static hydrate(e){return new J(e,G(e.parent))}simplify(){if(this._config.relativeTranslation||this._config.absoluteScale)return this;const e=this._parent.simplify();if(!(e instanceof R))return this;const[t,s,i,n]=e.value,o=this._config.translation.from[0],a=this._config.translation.from[1],c=this._config.rotation.from,d=this._config.scale.from;if(o===this._config.translation.to[0]&&a===this._config.translation.to[1]&&c===this._config.rotation.to&&d===this._config.scale.to){const l=i+c,u=n*d,h=Math.sin(i),_=Math.cos(i);return new R([_*n*o-h*n*a+t,h*n*o+_*n*a+s,l,u])}return new J(this._config,e)}get instructions(){return A.animatedTransform.encode(this._config)}},at=class K extends O{constructor(e,t){super([t]),this._config=e,this._parent=t}static hydrate(e){return new K(e,G(e.parent))}simplify(){const e=this._parent.simplify();if(!(e instanceof R))return this;const[t,s,i,n]=e.value,o=this._config.color.from[0],a=this._config.color.from[1],c=this._config.color.from[2];let d=this._config.color.from[3];const l=this._config.opacity.from;return o===this._config.color.to[0]&&a===this._config.color.to[1]&&c===this._config.color.to[2]&&d===this._config.color.to[3]&&l===this._config.opacity.to?(d*=l,new R([t*o,s*a,i*c,n*d])):new K(this._config,e)}get instructions(){return A.animatedColor.encode(this._config)}};const ct={AnimatedTransform:ot,AnimatedColor:at};function lt(r){return _e(r.map(e=>w(e)).map(e=>G(e).simplify()))}function ht(r){const e=[];return e.push(r.transform),e.push(r.fromColor),e.push(r.toColor),e.push(r.colorMix),e.push(r.toOpacity),e.push(r.opacityMix),e}function _e(r){const e=[],t=[];let s=0;for(const i of r){const n=[...i.encode(),...A.ret.encode()];e.push([s+r.length,0,0,0]),t.push(...n),s+=n.length}return[...e,...t]}async function U(r,e){const t=r;let s;if(typeof t=="number"||typeof t=="string"||typeof t=="boolean")s=t;else if(Array.isArray(t))s=await Promise.all(t.map(i=>U(i,e)));else if(typeof t=="object")if("valueExpressionInfo"in t){const{valueExpressionInfo:i}=t,{expression:n}=i;s={...t,computed:await e.createComputedField({expression:n})}}else{s={};for(const i in t)s[i]=await U(t[i],e)}return s}function w(r,e,t){function s(o){if(!("computed"in o))return o;let a=o.computed.readWithDefault(e,t,[255*o.defaultValue[0],255*o.defaultValue[1],255*o.defaultValue[2],o.defaultValue[3]]);if(typeof a=="string"){const c=we.fromString(a);c&&(a=[c.r,c.g,c.b,c.a])}return a}const i=r;let n;if(typeof i=="number"||typeof i=="string"||typeof i=="boolean")n=i;else if(Array.isArray(i))n=i.map(o=>w(o,e,t));else if(typeof i=="object")if("type"in i&&i.type!=null&&i.type==="Process")switch(i.op){case"ArcadeColor":{const o=w(i.value,e,t);W(Array.isArray(o)&&o.length===4),n=[o[0]/255,o[1]/255,o[2]/255,o[3]]}break;case"Transparency":{const o=w(i.value,e,t);W(typeof o=="number"),n=1-o/100}break;case"Divide":{const o=w(i.left,e,t);W(typeof o=="number");const a=w(i.right,e,t);W(typeof a=="number"),n=o/a}break;case"Random":{const o=w(i.seed,e,t),a=w(i.min,e,t),c=w(i.max,e,t),d=e.getObjectId(),l=he(d||0);n=a+Ye(l,o)*(c-a)}}else if("computed"in i)n=s(i);else{n={};for(const o in i)n[o]=w(i[o],e,t)}return n}function W(r){if(!r)throw new Error("Assertion failed.")}class ge extends Xe{constructor(e){super(),this._value=e}resize(e){}read(e,t){return this._value}readWithDefault(e,t,s){return this._value}referencesScale(){return!1}referencesGeometry(){return!1}}const ut=()=>ke.getLogger("esri.views.2d.engine.webgl.shaderGraph.techniques.mesh.MeshWriterInputEvaluator");async function V(r,e,t=!1){const{defaultValue:s,valueExpressionInfo:i,value:n}=e;if(i){const{expression:o}=i,a=await r.createComputedField({expression:o},t);return a?{...e,computed:a,defaultValue:s}:null}return{...e,computed:new ge(n),defaultValue:s}}async function ye(r,e){const{valueExpressionInfo:t}=e,{expression:s}=t,i=await r.createComputedField({expression:s});return i?{...e,computed:i}:null}function xe(r){return typeof r=="object"&&r!=null&&(!(!("valueExpressionInfo"in r)||!r.valueExpressionInfo)||"type"in r&&r.type==="Process"&&"op"in r&&r.op==="Random")}function j(r){if(Array.isArray(r)){for(const e of r)if(j(e))return!0}if(typeof r=="object"){if(xe(r))return!0;for(const e in r)if(j(r[e]))return!0}return!1}class ee{static async create(e,t,s){const i={},n=new Map,o=new Map,a=new Map,c=new Map,d=new Map,l=new Map;for(const u in s){const h=s[u];if(h!=null&&typeof h=="object")if(Array.isArray(h)){if(typeof h[0]=="object")throw new Error(`InternalError: Cannot handle ${u}. Nested array params are not supported`);i[u]=h}else if("valueExpressionInfo"in h){if(h.value){i[u]=h.value;continue}const _=await ye(e,h);if(!_){i[u]=h.defaultValue;continue}n.set(u,_),i[u]=null}else switch(h.type){case"cim-effect-infos":if(h.effectInfos.some(_=>_.overrides.length)){o.set(u,{effects:await Promise.all(h.effectInfos.map(async _=>{const m=_.overrides.map(f=>V(e,f));return{effect:_.effect,compiledOverrides:(await Promise.all(m)).filter(T)}}))});break}i[u]=h.effectInfos.map(_=>_.effect);break;case"cim-marker-placement-param":h.overrides.length&&a.set(u,{placementInfo:h,compiledOverrides:(await Promise.all(h.overrides.map(_=>V(e,_)))).filter(T)}),i[u]=h.placement;break;case"text-rasterization-param":{if(h.overrides.length){const m=h.overrides.map(f=>V(e,f,h.useLegacyLabelEvaluationRules));c.set(u,{compiledOverrides:(await Promise.all(m)).filter(T),rasterizationParam:h,objectIdToResourceId:new Map});continue}const _={type:"cim-rasterization-info",resource:h.resource};i[u]=await t.fetchResourceImmediate(_)??null;break}case"sprite-rasterization-param":{if(h.overrides.length){const m=h.overrides.map(f=>V(e,f));c.set(u,{compiledOverrides:(await Promise.all(m)).filter(T),rasterizationParam:h,objectIdToResourceId:new Map});continue}if(h.resource.type==="animated"){c.set(u,{compiledOverrides:[],rasterizationParam:h,objectIdToResourceId:new Map});continue}const _={type:"cim-rasterization-info",resource:h.resource};i[u]=await t.fetchResourceImmediate(_)??null;break}case"cim-marker-transform-param":{const{params:_}=h;if(j(_)){const m={compiledMarkerInfos:[]};await Promise.all(_.map(async f=>{const p={props:{}};for(const g in f)if(xe(f[g])){const y=await ye(e,f[g]);p.compiledExpressionMap||(p.compiledExpressionMap=new Map);const v=p.compiledExpressionMap;y&&v.set(g,y)}else p.props[g]=f[g];m.compiledMarkerInfos.push(p)})),d.set(u,m)}else i[u]={type:"cim-marker-transform-info",infos:_};break}case"animation-params":{const{params:_}=h,m=ht(_);if(j(m)){const f=await Promise.all(m.map(p=>U(p,e)));l.set(u,{params:f,propertyIdToResourceId:new Map,key:u})}else{const f=lt(m),p=await t.fetchResourceImmediate({type:"animation-info",resource:f});p!=null&&p.type==="sprite"&&(i[u]={dataRow:p.rect.y,dataColumn:p.rect.x})}break}default:i[u]=h}else i[u]=h}return new ee(s,i,n,o,a,c,d,l)}constructor(e,t,s,i,n,o,a,c){this.inputMeshParams=e,this._resolvedMeshParams=t,this._dynamicProperties=s,this._dynamicEffectProperties=i,this._dynamicPlacementProperties=n,this._dynamicAsyncProperties=o,this._dynamicTransformProperties=a,this._dynamicAsyncAnimations=c,this.evaluator=d=>d}get hasDynamicProperties(){return!!(this._dynamicProperties.size||this._dynamicAsyncProperties.size||this._dynamicEffectProperties.size||this._dynamicTransformProperties.size||this._dynamicPlacementProperties.size||this._dynamicAsyncAnimations.size)}get evaluatedMeshParams(){return this._evaluatedMeshParams||(this._evaluatedMeshParams=this.evaluator(this._resolvedMeshParams)),this._evaluatedMeshParams}enqueueRequest(e,t,s){for(const i of this._dynamicAsyncProperties.values()){const n=Ie(i.rasterizationParam.resource);i.rasterizationParam.resource.type==="animated"&&i.rasterizationParam.resource.randomizeStartTime&&(n.primitiveName="__RESERVED__PRIMITIVE__NAME__",n.startGroup=he(t.getObjectId()||0));for(const{primitiveName:a,propertyName:c,computed:d,defaultValue:l,valueExpressionInfo:u}of i.compiledOverrides)try{const h=i.rasterizationParam.resource.type==="animated"?n.primitiveName:a;Ze(n,h,c,d,t,s,l)}catch(h){ut().errorOnce(new Se("invalid-arcade-expression",`Encountered an error when evaluating the arcade expression '${u?.expression}' (primitive: '${a}', property: '${c}')`,h))}const o=e.enqueueRequest({type:"cim-rasterization-info",resource:n});i.objectIdToResourceId.set(t.getObjectId(),o)}for(const i of this._dynamicAsyncAnimations.values()){const n=i.params.map(c=>w(c,t,s)).map(G).map(c=>c.simplify()),o=_e(n),a=e.enqueueRequest({type:"animation-info",resource:o});i.propertyIdToResourceId.set(t.getObjectId()+"."+i.key,a)}}evaluateMeshParams(e,t,s){for(const[i,n]of this._dynamicProperties.entries())this._resolvedMeshParams[i]=n.computed.readWithDefault(t,s,n.defaultValue);for(const[i,n]of this._dynamicPlacementProperties.entries())for(const{computed:o,defaultValue:a,propertyName:c}of n.compiledOverrides){const d=o.readWithDefault(t,s,a);n.placementInfo.placement[c]=d,this._resolvedMeshParams[i]=n.placementInfo.placement}for(const[i,n]of this._dynamicEffectProperties.entries())for(const o of n.effects){for(const{computed:a,defaultValue:c,propertyName:d}of o.compiledOverrides){const l=a.readWithDefault(t,s,c);o.effect[d]=l}this._resolvedMeshParams[i]=n.effects.map(a=>a.effect)}for(const[i,n]of this._dynamicTransformProperties.entries()){const o={type:"cim-marker-transform-info",infos:[]};for(const a of n.compiledMarkerInfos){const c={...a.props};if(a.compiledExpressionMap)for(const[d,l]of a.compiledExpressionMap){const u=l.computed.readWithDefault(t,s,l.defaultValue);c[d]=typeof u=="number"||typeof u=="boolean"?u:l.defaultValue}o.infos.push(c)}this._resolvedMeshParams[i]=o}for(const[i,n]of this._dynamicAsyncProperties.entries()){const o=n.objectIdToResourceId.get(t.getObjectId());if(o==null)continue;const a=e.getResource(o);this._resolvedMeshParams[i]=a}for(const[i,n]of this._dynamicAsyncAnimations.entries()){const o=n.propertyIdToResourceId.get(t.getObjectId()+"."+i);if(o==null)continue;const a=e.getResource(o);this._resolvedMeshParams[i]={dataRow:a.rect.y,dataColumn:a.rect.x}}return this._evaluatedMeshParams=this.evaluator(this._resolvedMeshParams),this.evaluatedMeshParams}}class dt{async createMeshWriter(e,t,s,i){const n=this._getMeshWriter(i.techniqueType),o=await ee.create(e,t,i.inputParams),a=new n(i.id,o,i.optionalAttributes,s);return await a.loadDependencies(),a}_getMeshWriter(e){switch(e){case M.Fill:return Ve;case M.DotDensity:return We;case M.ComplexFill:return Oe;case M.PatternFill:return Ge;case M.OutlineFill:return Ce;case M.PatternOutlineFill:return Fe;case M.ComplexOutlineFill:return Te;case M.Marker:return Re;case M.PieChart:return Be;case M.Text:return se;case M.Line:return De;case M.TexturedLine:return Ee;case M.Heatmap:return Le;case M.Label:return nt;case M.AnimatedMarker:return Ue;default:throw new Error("Internal Error: Mesh writer not in the registry")}}}export{dt as j,ge as r};
