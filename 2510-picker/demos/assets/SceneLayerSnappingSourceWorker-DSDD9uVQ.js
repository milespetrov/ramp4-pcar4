import{q as y,C as v,aC as p,G as L,cy as m}from"./main-Cndq3wrU.js";import{q as l,p as _,u as h}from"./vec32-CvXXzGj2.js";import{v as x,b as j,j as P}from"./lineSegment-WkcO6lme.js";import{E as S,U as f,i as w}from"./sphere-CdoTC0XG.js";import{Y as b}from"./Octree-BAysI7t-.js";import{m as $}from"./edgeProcessing-B1Ec7tVe.js";import"./preload-helper-ExcqyqRp.js";import"./common-DQOJ18NT.js";import"./plane-BxG9wPVH.js";import"./vec42-CKs01hkn.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-CSKppSlJ.js";import"./quatf64-aQ5IuZRd.js";import"./vec2f64-B7N_6o8F.js";import"./vec4f64-CMoMXWBi.js";import"./mat4-BKi56vQE.js";import"./mat3-XZDRtl20.js";import"./Util-C4yWdKVH.js";import"./deduplicate-CLCD6Ous.js";import"./Indices-Dbf0VJ9p.js";import"./InterleavedLayout-D2aOqMx6.js";import"./BufferView-CJyNGqy5.js";import"./vec2-DGVIkCvT.js";import"./types-D0PSWh4d.js";import"./VertexAttribute-BdZWZuT1.js";import"./glUtil-BuljoYCz.js";import"./enums-Dk3osxpS.js";import"./VertexElementDescriptor-BOD-G50G.js";const I=1e3;function V(t,o,i){const n=S(),e=f(n);return l(e,e,t,.5),l(e,e,o,.5),n[3]=_(e,t),h(e,e,i),n}let g=class{constructor(){this._idToComponent=new Map,this._components=new b(t=>t.bounds),this._edges=new b(t=>t.bounds),this._tmpLineSegment=x(),this._tmpP1=p(),this._tmpP2=p(),this._tmpP3=p(),this.remoteClient=null}async fetchCandidates(t,o){await Promise.resolve(),L(o),await this._ensureEdgeLocations(t,o);const i=[];return this._edges.forEachNeighbor(n=>(this._addCandidates(t,n,i),i.length<I),t.bounds),{result:{candidates:i}}}async _ensureEdgeLocations(t,o){const i=[];if(this._components.forEachNeighbor(s=>{if(s.info==null){const{id:c,uid:r}=s;i.push({id:c,uid:r})}return!0},t.bounds),!i.length)return;const n={components:i},e=await this.remoteClient.invoke("fetchAllEdgeLocations",n,o??{});for(const s of e.components)this._setFetchEdgeLocations(s)}async add(t){const o=new u(t.id,t.bounds);return this._idToComponent.set(o.id,o),this._components.add([o]),{result:{}}}async remove(t){const o=this._idToComponent.get(t.id);if(o){const i=[];this._edges.forEachNeighbor(n=>(n.component===o&&i.push(n),!0),o.bounds),this._edges.remove(i),this._components.remove([o]),this._idToComponent.delete(o.id)}return{result:{}}}_setFetchEdgeLocations(t){const o=this._idToComponent.get(t.id);if(o==null||t.uid!==o.uid)return;const i=$.createView(t.locations),n=new Array(i.count),e=p(),s=p();for(let d=0;d<i.count;d++){i.position0.getVec(d,e),i.position1.getVec(d,s);const a=V(e,s,t.origin),E=new T(o,d,a);n[d]=E}this._edges.add(n);const{objectIds:c,origin:r}=t;o.info={locations:i,objectIds:c,origin:r}}_addCandidates(t,o,i){const{info:n}=o.component,{origin:e,objectIds:s}=n,c=n.locations,r=c.position0.getVec(o.index,this._tmpP1),d=c.position1.getVec(o.index,this._tmpP2);h(r,r,e),h(d,d,e);const a=s[c.componentIndex.get(o.index)];this._addEdgeCandidate(t,a,r,d,i),C(t,a,r,i),C(t,a,d,i)}_addEdgeCandidate(t,o,i,n,e){if(!t.returnEdge)return;const s=f(t.bounds),c=j(i,n,this._tmpLineSegment),r=P(c,s,this._tmpP3);w(t.bounds,r)&&e.push({type:"edge",objectId:o,target:m(r),distance:_(s,r),start:m(i),end:m(n)})}};g=y([v("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],g);const dt=g;function C(t,o,i,n){if(!t.returnVertex||!w(t.bounds,i))return;const e=f(t.bounds);n.push({type:"vertex",objectId:o,target:m(i),distance:_(e,i)})}class u{constructor(o,i){this.id=o,this.bounds=i,this.info=null,this.uid=++u.uid}}u.uid=0;class T{constructor(o,i,n){this.component=o,this.index=i,this.bounds=n}}export{dt as default};
