import{s as g,n as N,cl as U}from"./main-Cndq3wrU.js";import"./enums-CmIX1y88.js";import{p as Y,m as L,s as B}from"./Texture-B1672GXi.js";import{U as f,C as h}from"./enums-Dk3osxpS.js";import"./Program-BfE4CHfz.js";import{t as P}from"./VertexElementDescriptor-BOD-G50G.js";import{t as R,n as k}from"./vec2f32-BbH2jxlN.js";let m=class p{constructor(t,e,r,i,s,a,o){this.instanceId=t,this.textureKey=e,this.indexStart=r,this.indexCount=i,this.vertexStart=s,this.vertexCount=a,this.overlaps=o}updateBaseOffsets(t){this.vertexStart+=t.vertexFrom,this.indexStart+=t.indexFrom}clone(){return new p(this.instanceId,this.textureKey,this.indexStart,this.indexCount,this.vertexStart,this.vertexCount,this.overlaps)}static write(t,e,r,i,s,a,o,c){t.push(e),t.push(r),t.push(i),t.push(s),t.push(a),t.push(o),t.push(c)}serialize(t){return t.push(this.instanceId),t.push(this.textureKey),t.push(this.indexStart),t.push(this.indexCount),t.push(this.vertexStart),t.push(this.vertexCount),t.push(this.overlaps),t}static deserialize(t){const e=t.readInt32(),r=t.readInt32(),i=t.readInt32(),s=t.readInt32(),a=t.readInt32(),o=t.readInt32(),c=t.readInt32();return new p(e,r,i,s,a,o,c)}};m.byteSizeHint=7*Uint32Array.BYTES_PER_ELEMENT;function I(n,t){if(t!==null){n.push(t.length);for(const e of t)e.serialize(n);return n}n.push(0)}function M(n,t,e){const r=n.readInt32(),i=new Array(r);for(let s=0;s<i.length;s++)i[s]=t.deserialize(n,e);return i}let H=class S{constructor(t,e){this.id=t,this.sortKey=e,this.records=[]}serialize(t){return t.push(this.id),t.writeF32(this.sortKey),I(t,this.records),t}static deserialize(t){const e=t.readInt32(),r=t.readF32(),i=new S(e,r);return i.records=M(t,m)??[],i}};H.byteSizeHint=2*Uint32Array.BYTES_PER_ELEMENT+m.byteSizeHint;const x=()=>N.getLogger("esri.views.2d.engine.webgl.Utils");function Q(n){switch(n){case f.UNSIGNED_BYTE:return 1;case f.UNSIGNED_SHORT_4_4_4_4:return 2;case f.FLOAT:return 4;default:return void x().error(new g("webgl-utils",`Unable to handle type ${n}`))}}function Z(n){switch(n){case f.UNSIGNED_BYTE:return Uint8Array;case f.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case f.FLOAT:return Float32Array;default:return void x().error(new g("webgl-utils",`Unable to handle type ${n}`))}}function C(n){const t=new Map;for(const e in n){const r=n[e];let i=0;t.set(e,r.map(s=>{const a=new P(s.name,s.count,s.type,i,0,s.normalized||!1);return i+=s.count*B(s.type),a})),t.get(e).forEach(s=>s.stride=i)}return t}const v=n=>{const t=new Map;for(const e in n)for(const r of n[e])t.set(r.name,r.location);return t},z=n=>{const t={};return n.forEach((e,r)=>t[r]=e?.length?e[0].stride:0),t},d=new Map,tt=(n,t)=>{if(!d.has(n)){const e=C(t),r={strides:z(e),bufferLayouts:e,attributes:v(t)};d.set(n,r)}return d.get(n)},et=n=>n.includes("data:image/svg+xml");function rt(n){const t=[];for(let e=0;e<n.length;e++)t.push(n.charCodeAt(e));return t}function nt(n,t,e){const r=new Y(t.width,t.height);return r.dataType=t.dataType,t.depth&&(r.depth=t.depth),t.flipped&&(r.flipped=t.flipped),t.hasMipmap&&(r.hasMipmap=t.hasMipmap),r.internalFormat=t.internalFormat,t.isImmutable&&(r.isImmutable=t.isImmutable),t.isOpaque&&(r.isOpaque=t.isOpaque),t.maxAnisotropy&&(r.maxAnisotropy=t.maxAnisotropy),r.pixelFormat=t.pixelFormat,t.preMultiplyAlpha&&(r.preMultiplyAlpha=t.preMultiplyAlpha),t.samplingMode&&(r.samplingMode=t.samplingMode),t.target&&(r.target=t.target),r.uniform=t.uniform,t.unpackAlignment&&(r.unpackAlignment=t.unpackAlignment),t.wrapMode&&(r.wrapMode=t.wrapMode),new L(n,r,e)}function it(n){return"url"in n&&"urlHash"in n?{...n,url:""}:n}class l{constructor(t,e,r,i){this.transformedX=0,this.transformedY=0,this.center=R(t,e),this.centerT=k(),this.halfWidth=r/2,this.halfHeight=i/2,this.width=r,this.height=i}get x(){return this.center[0]}get y(){return this.center[1]}get blX(){return this.center[0]+this.halfWidth}get blY(){return this.center[1]+this.halfHeight}get trX(){return this.center[0]-this.halfWidth}get trY(){return this.center[1]-this.halfHeight}get xmin(){return this.x-this.halfWidth}get xmax(){return this.x+this.halfWidth}get ymin(){return this.y-this.halfHeight}get ymax(){return this.y+this.halfHeight}set x(t){this.center[0]=t}set y(t){this.center[1]=t}clone(){return new l(this.x,this.y,this.width,this.height)}serialize(t){return t.writeF32(this.center[0]),t.writeF32(this.center[1]),t.push(this.width),t.push(this.height),t}findCollisionDelta(t,e=4){const r=Math.abs(t.centerT[0]-this.centerT[0]),i=Math.abs(t.centerT[1]-this.centerT[1]),s=(t.halfWidth+this.halfWidth+e)/r,a=(t.halfHeight+this.halfHeight+e)/i,o=Math.min(s,a);return Math.log2(o)}extend(t){const e=Math.min(this.xmin,t.xmin),r=Math.min(this.ymin,t.ymin),i=Math.max(this.xmax,t.xmax)-e,s=Math.max(this.ymax,t.ymax)-r,a=e+i/2,o=r+s/2;this.width=i,this.height=s,this.halfWidth=i/2,this.halfHeight=s/2,this.x=a,this.y=o}static deserialize(t){const e=t.readF32(),r=t.readF32(),i=t.readInt32(),s=t.readInt32();return new l(e,r,i,s)}}const w=new Float32Array(1),O=new Uint32Array(w.buffer);function D(n){return w[0]=n,O[0]}function st(n,t){return 65535&n|t<<16}function y(n){const t=D(n),e=t>>>31;let r=t>>>23&255,i=8388607&t;return r-=127,r>15?e<<15|31744:r<-25?0:(r<-14&&(i+=8388608,i/=2**(-14-r),r=-15),r+=15,i/=8192,i=G(i,1023),e<<15|r<<10|i)}function G(n,t){const e=Math.floor(n),r=n-e;return e<t&&(r>.5||r===.5&&e%2==1)?e+1:e}function T(n){let t=n>>>15,e=n>>10&31,r=1023&n;return t=t?-1:1,e-=15,r/=1024,e>-15?r+=1:e=-14,t*2**e*r}function at(n){const t=n.map(({name:e,count:r,type:i})=>`${e}.${r}.${i}`).join(",");return U(t)}function u(n,t,e,r,i,s,a){if(n.primitiveName===t){let o=r?.readWithDefault(i,s,n[e]&&a);return n.type==="text"&&(o=o.toString()),void(n[e]=o)}if("type"in n&&n.type!=null){if(n.effects)for(const o of n.effects)u(o,t,e,r,i,s,a);switch(n.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(n.symbolLayers)for(const o of n.symbolLayers)u(o,t,e,r,i,s,a);break;case"CIMTextSymbol":n.symbol&&u(n.symbol,t,e,r,i,s,a);break;case"CIMHatchFill":n.lineSymbol&&u(n.lineSymbol,t,e,r,i,s,a);break;case"CIMPictureMarker":case"CIMCharacterMarker":case"CIMVectorMarker":if(n.markerPlacement&&u(n.markerPlacement,t,e,r,i,s,a),n.type==="CIMVectorMarker"&&n.markerGraphics)for(const o of n.markerGraphics)u(o,t,e,r,i,s,a),u(o.symbol,t,e,r,i,s,a)}}}const W=400;function ot(n){const t=n.width;return n.effects!=null?W:Math.max(1.25*t,8)}function ht(n,t,e,r){const i=e.packPrecisionFactor??1;switch(e.type){case h.BYTE:if(e.count===1)n.setInt8(r+e.offset,t*i);else for(let s=0;s<e.count;s++){const a=s*Int8Array.BYTES_PER_ELEMENT;n.setInt8(r+e.offset+a,t[s]*i)}break;case h.UNSIGNED_BYTE:if(e.count===1)n.setUint8(r+e.offset,t*i);else for(let s=0;s<e.count;s++){const a=s*Uint8Array.BYTES_PER_ELEMENT;n.setUint8(r+e.offset+a,t[s]*i)}break;case h.SHORT:if(e.count===1)n.setInt16(r+e.offset,t*i,!0);else for(let s=0;s<e.count;s++){const a=s*Int16Array.BYTES_PER_ELEMENT;n.setInt16(r+e.offset+a,t[s]*i,!0)}break;case h.UNSIGNED_SHORT:if(e.count===1)n.setUint16(r+e.offset,t*i,!0);else for(let s=0;s<e.count;s++){const a=s*Uint16Array.BYTES_PER_ELEMENT;n.setUint16(r+e.offset+a,t[s]*i,!0)}break;case h.INT:if(e.count===1)n.setInt32(r+e.offset,t*i,!0);else for(let s=0;s<e.count;s++){const a=s*Int32Array.BYTES_PER_ELEMENT;n.setInt32(r+e.offset+a,t[s]*i,!0)}break;case h.UNSIGNED_INT:if(e.count===1)n.setUint32(r+e.offset,t*i,!0);else for(let s=0;s<e.count;s++){const a=s*Uint32Array.BYTES_PER_ELEMENT;n.setUint32(r+e.offset+a,t[s]*i,!0)}break;case h.FLOAT:if(e.count===1)n.setFloat32(r+e.offset,t*i,!0);else for(let s=0;s<e.count;s++){const a=s*Float32Array.BYTES_PER_ELEMENT;n.setFloat32(r+e.offset+a,t[s]*i,!0)}break;case h.HALF_FLOAT:if(e.count===1)n.setUint16(r+e.offset,y(t*i),!0);else for(let s=0;s<e.count;s++){const a=s*Uint16Array.BYTES_PER_ELEMENT;n.setUint16(r+e.offset+a,y(t[s]*i),!0)}}}function ct(n,t,e){switch(t.type){case h.BYTE:{if(t.count===1)return n.getInt8(e+t.offset);const r=[];for(let i=0;i<t.count;i++){const s=i*Int8Array.BYTES_PER_ELEMENT;r.push(n.getInt8(e+t.offset+s))}return r}case h.UNSIGNED_BYTE:{if(t.count===1)return n.getUint8(e+t.offset);const r=[];for(let i=0;i<t.count;i++){const s=i*Uint8Array.BYTES_PER_ELEMENT;r.push(n.getUint8(e+t.offset+s))}return r}case h.SHORT:{if(t.count===1)return n.getInt16(e+t.offset,!0);const r=[];for(let i=0;i<t.count;i++){const s=i*Int16Array.BYTES_PER_ELEMENT;r.push(n.getInt16(e+t.offset+s,!0))}return r}case h.UNSIGNED_SHORT:{if(t.count===1)return n.getUint16(e+t.offset,!0);const r=[];for(let i=0;i<t.count;i++){const s=i*Uint16Array.BYTES_PER_ELEMENT;r.push(n.getUint16(e+t.offset+s,!0))}return r}case h.INT:{if(t.count===1)return n.getInt32(e+t.offset,!0);const r=[];for(let i=0;i<t.count;i++){const s=i*Int32Array.BYTES_PER_ELEMENT;r.push(n.getInt32(e+t.offset+s,!0))}return r}case h.UNSIGNED_INT:{if(t.count===1)return n.getUint32(e+t.offset,!0);const r=[];for(let i=0;i<t.count;i++){const s=i*Uint32Array.BYTES_PER_ELEMENT;r.push(n.getUint32(e+t.offset+s,!0))}return r}case h.FLOAT:{if(t.count===1)return n.getFloat32(e+t.offset,!0);const r=[];for(let i=0;i<t.count;i++){const s=i*Float32Array.BYTES_PER_ELEMENT;r.push(n.getFloat32(e+t.offset+s,!0))}return r}case h.HALF_FLOAT:{if(t.count===1)return T(n.getUint16(e+t.offset,!0));const r=[];for(let i=0;i<t.count;i++){const s=i*Uint16Array.BYTES_PER_ELEMENT;r.push(T(n.getUint16(e+t.offset+s,!0)))}return r}}}class F{constructor(t,e,r,i,s,a,o,c,E=[]){this.entityTexel=t,this.anchorX=e,this.anchorY=r,this.directionX=i,this.directionY=s,this.maxScale=a,this.minScale=o,this.referenceBounds=c,this.bounds=E}serialize(t){t.push(this.entityTexel),t.writeF32(this.anchorX),t.writeF32(this.anchorY),t.writeF32(this.directionX),t.writeF32(this.directionY),t.writeF32(this.maxScale),t.writeF32(this.minScale),this.referenceBounds===null?(t.writeF32(0),t.writeF32(0),t.writeF32(0)):(t.writeF32(this.referenceBounds.size),t.writeF32(this.referenceBounds.offsetX),t.writeF32(this.referenceBounds.offsetY)),I(t,this.bounds)}static deserialize(t){const e=t.readInt32(),r=t.readF32(),i=t.readF32(),s=t.readF32(),a=t.readF32(),o=t.readF32(),c=t.readF32(),E=t.readF32(),_=t.readF32(),A=t.readF32(),b=M(t,l)??[];return new F(e,r,i,s,a,o,c,{size:E,offsetX:_,offsetY:A},b)}}export{rt as A,nt as T,m as a,tt as b,Q as c,Z as d,at as e,st as f,ot as g,ct as h,l as i,it as j,M as n,ht as o,F as r,H as s,u as t,et as y};
