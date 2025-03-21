import{e as At}from"./deduplicate-BOEAMBfD.js";import{H as L}from"./InterleavedLayout-logKPhZK.js";import{e as l}from"./VertexAttribute-DqD5S0a2.js";import{t as H}from"./glUtil-n1JOrdV3.js";import{aA as T,bX as k,cC as Et,eI as st,aP as Tt,h4 as wt}from"./main-IAmJgjpH.js";import{p as Mt,o as q,s as at,P as Q,K as vt,_ as rt,c as it,A as ct,u as Rt}from"./vec32-y13TmVN1.js";const lt=L().vec3f(l.POSITION).u16(l.COMPONENTINDEX).freeze(),Pt=L().vec2u8(l.SIDENESS).freeze();H(Pt);const Y=L().vec3f(l.POSITION0).vec3f(l.POSITION1).vec2i16(l.NORMALCOMPRESSED).u16(l.COMPONENTINDEX).u8(l.VARIANTOFFSET,{glNormalized:!0}).u8(l.VARIANTSTROKE).u8(l.VARIANTEXTENSION,{glNormalized:!0}).freeze(),Z=L().vec3f(l.POSITION0).vec3f(l.POSITION1).vec2i16(l.NORMALCOMPRESSED).vec2i16(l.NORMAL2COMPRESSED).u16(l.COMPONENTINDEX).u8(l.VARIANTOFFSET,{glNormalized:!0}).u8(l.VARIANTSTROKE).u8(l.VARIANTEXTENSION,{glNormalized:!0}).freeze();l.POSITION0,l.POSITION1,l.COMPONENTINDEX,l.VARIANTOFFSET,l.VARIANTSTROKE,l.VARIANTEXTENSION,l.NORMALCOMPRESSED,l.NORMAL2COMPRESSED,l.SIDENESS;let yt=class{constructor(){this.position0=T(),this.position1=T(),this.faceNormal0=T(),this.faceNormal1=T(),this.componentIndex=0,this.cosAngle=0}};const _=-1;function ut(t,n,o){const a=t.vertices.position,r=t.vertices.componentIndex,c=O.position0,p=O.position1,d=O.faceNormal0,m=O.faceNormal1,{edges:i,normals:h}=Lt(t),N=i.length/4,A=n.allocate(N);let V=0;const B=N,w=o?.allocate(B);let X=0,e=0,s=0;z.length=0;for(let g=0;g<N;++g){const v=4*g;a.getVec(i.data[v],c),a.getVec(i.data[v+1],p);const D=z.pushNew();D.index=4*g,D.length=Mt(c,p)}z.sort((g,v)=>v.length-g.length);const f=new Array,u=new Array;z.forAll(({length:g,index:v})=>{const D=i.data[v],St=i.data[v+1],et=i.data[v+2],nt=i.data[v+3],ot=nt===_;if(a.getVec(D,c),a.getVec(St,p),ot){const E=3*et;q(d,h.data[E],h.data[E+1],h.data[E+2]),at(m,d),O.componentIndex=r.get(D),O.cosAngle=Q(d,m)}else{let E=3*et;if(q(d,h.data[E],h.data[E+1],h.data[E+2]),E=3*nt,q(m,h.data[E],h.data[E+1],h.data[E+2]),O.componentIndex=r.get(D),O.cosAngle=Q(d,m),Ct(O,Ft))return;O.cosAngle<-.9999&&at(m,d)}e+=g,s++,ot||Vt(O,Xt)?(n.write(A,V++,O),f.push(g)):Dt(O,ht)&&(w&&o&&o.write(w,X++,O),u.push(g))});const S=new Float32Array(f.reverse()),M=new Float32Array(u.reverse()),R=w&&o?{instancesData:w.slice(0,X),lodInfo:{lengths:M}}:void 0;return{regular:{instancesData:A.slice(0,V),lodInfo:{lengths:S}},silhouette:R,averageEdgeLength:e/s}}function Vt(t,n){return t.cosAngle<n}function Ct(t,n){return t.cosAngle>n}function Dt(t,n){const o=Et(t.cosAngle);return vt(ft,t.position1,t.position0),o*(Q(rt(xt,t.faceNormal0,t.faceNormal1),ft)>0?-1:1)>n}function Lt(t){const n=t.faces.length/3,o=t.faces,a=t.neighbors,r=t.vertices.position;I.length=j.length=0;for(let c=0;c<n;c++){const p=3*c,d=a[p],m=a[p+1],i=a[p+2],h=o[p],N=o[p+1],A=o[p+2];r.getVec(h,C),r.getVec(N,U),r.getVec(A,W),it(U,U,C),it(W,W,C),rt(C,U,W),ct(C,C),j.pushArray(C),(d===_||h<N)&&(I.push(h),I.push(N),I.push(c),I.push(d)),(m===_||N<A)&&(I.push(N),I.push(A),I.push(c),I.push(m)),(i===_||A<h)&&(I.push(A),I.push(h),I.push(c),I.push(i))}return{edges:I,normals:j}}class bt{constructor(){this.index=0,this.length=0}}const z=new k({allocator:t=>t||new bt,deallocator:null}),I=new k({deallocator:null}),j=new k({deallocator:null}),O=new yt,xt=T(),ft=T(),C=T(),U=T(),W=T(),ht=st(4),Ft=Math.cos(ht),Bt=st(35),Xt=Math.cos(Bt);function pt(t,n,o){const a=n/3,r=new Uint32Array(o+1),c=new Uint32Array(o+1),p=(e,s)=>{e<s?r[e+1]++:c[s+1]++};for(let e=0;e<a;e++){const s=t[3*e],f=t[3*e+1],u=t[3*e+2];p(s,f),p(f,u),p(u,s)}let d=0,m=0;for(let e=0;e<o;e++){const s=r[e+1],f=c[e+1];r[e+1]=d,c[e+1]=m,d+=s,m+=f}const i=new Uint32Array(6*a),h=r[o],N=(e,s,f)=>{if(e<s){const u=r[e+1]++;i[2*u]=s,i[2*u+1]=f}else{const u=c[s+1]++;i[2*h+2*u]=e,i[2*h+2*u+1]=f}};for(let e=0;e<a;e++){const s=t[3*e],f=t[3*e+1],u=t[3*e+2];N(s,f,e),N(f,u,e),N(u,s,e)}const A=(e,s)=>{const f=2*e,u=s-e;for(let S=1;S<u;S++){const M=i[f+2*S],R=i[f+2*S+1];let g=S-1;for(;g>=0&&i[f+2*g]>M;g--)i[f+2*g+2]=i[f+2*g],i[f+2*g+3]=i[f+2*g+1];i[f+2*g+2]=M,i[f+2*g+3]=R}};for(let e=0;e<o;e++)A(r[e],r[e+1]),A(h+c[e],h+c[e+1]);const V=new Int32Array(3*a),B=(e,s)=>e===t[3*s]?0:e===t[3*s+1]?1:e===t[3*s+2]?2:-1,w=(e,s)=>{const f=B(e,s);V[3*s+f]=-1},X=(e,s,f,u)=>{const S=B(e,s);V[3*s+S]=u;const M=B(f,u);V[3*u+M]=s};for(let e=0;e<o;e++){let s=r[e];const f=r[e+1];let u=c[e];const S=c[e+1];for(;s<f&&u<S;){const M=i[2*s],R=i[2*h+2*u];M===R?(X(e,i[2*s+1],R,i[2*h+2*u+1]),s++,u++):M<R?(w(e,i[2*s+1]),s++):(w(R,i[2*h+2*u+1]),u++)}for(;s<f;)w(e,i[2*s+1]),s++;for(;u<S;)w(i[2*h+2*u],i[2*h+2*u+1]),u++}return V}function G(t,n,o,a,r,c=2){const p=1/(Math.abs(o)+Math.abs(a)+Math.abs(r)),d=o*p,m=a*p,i=r<=0?(d>=0?1:-1)*(1-Math.abs(m)):d,h=r<=0?(m>=0?1:-1)*(1-Math.abs(d)):m,N=n*c;t[N]=gt(i),t[N+1]=gt(h)}function gt(t){return Tt(Math.round(32767*t),-32767,32767)}const J=.7;let dt=class{updateSettings(t){this.settings=t,this._edgeHashFunction=t.reducedPrecision?zt:_t}write(t,n,o){K.seed=this._edgeHashFunction(o);const a=K.getIntRange(0,255),r=K.getIntRange(0,this.settings.variants-1),c=K.getFloat(),p=255*(.5*Ut(-(1-Math.min(c/J,1))+Math.max(0,c-J)/(1-J),1.2)+.5);t.position0.setVec(n,o.position0),t.position1.setVec(n,o.position1),t.componentIndex.set(n,o.componentIndex),t.variantOffset.set(n,a),t.variantStroke.set(n,r),t.variantExtension.set(n,p)}};const P=new Float32Array(6),y=new Uint32Array(P.buffer),b=new Uint32Array(1);function _t(t){return P[0]=t.position0[0],P[1]=t.position0[1],P[2]=t.position0[2],P[3]=t.position1[0],P[4]=t.position1[1],P[5]=t.position1[2],b[0]=31*(31*(31*(31*(31*(166811+y[0])+y[1])+y[2])+y[3])+y[4])+y[5],b[0]}function zt(t){const n=P;n[0]=x(t.position0[0]),n[1]=x(t.position0[1]),n[2]=x(t.position0[2]),n[3]=x(t.position1[0]),n[4]=x(t.position1[1]),n[5]=x(t.position1[2]),b[0]=5381;for(let o=0;o<y.length;o++)b[0]=31*b[0]+y[o];return b[0]}const Nt=1e4;function x(t){return Math.round(t*Nt)/Nt}function Ut(t,n){return Math.abs(t)**n*Math.sign(t)}class ${constructor(){this._commonWriter=new dt}updateSettings(n){this._commonWriter.updateSettings(n)}allocate(n){return Y.createBuffer(n)}write(n,o,a){this._commonWriter.write(n,o,a),Rt(F,a.faceNormal0,a.faceNormal1),ct(F,F);const{typedBuffer:r,typedBufferStride:c}=n.normalCompressed;G(r,o,F[0],F[1],F[2],c)}}$.Layout=Y,$.glLayout=H(Y,1);class tt{constructor(){this._commonWriter=new dt}updateSettings(n){this._commonWriter.updateSettings(n)}allocate(n){return Z.createBuffer(n)}write(n,o,a){this._commonWriter.write(n,o,a);{const{typedBuffer:r,typedBufferStride:c}=n.normalCompressed;G(r,o,a.faceNormal0[0],a.faceNormal0[1],a.faceNormal0[2],c)}{const{typedBuffer:r,typedBufferStride:c}=n.normal2Compressed;G(r,o,a.faceNormal1[0],a.faceNormal1[1],a.faceNormal1[2],c)}}}tt.Layout=Z,tt.glLayout=H(Z,1);const F=T(),K=new wt;function Wt(t){const n=mt(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return It.updateSettings(t.writerSettings),Ot.updateSettings(t.writerSettings),ut(n,It,Ot)}function mt(t,n,o,a){if(n){const p=pt(o,a,t.count);return new Kt(o,a,p,t)}const r=At(t.buffer,t.stride/4,{originalIndices:o,originalIndicesLength:a}),c=pt(r.indices,a,r.uniqueCount);return{faces:r.indices,facesLength:r.indices.length,neighbors:c,vertices:lt.createView(r.buffer)}}class Kt{constructor(n,o,a,r){this.faces=n,this.facesLength=o,this.neighbors=a,this.vertices=r}}const It=new $,Ot=new tt,Ht=L().vec3f(l.POSITION0).vec3f(l.POSITION1),kt=L().vec3f(l.POSITION0).vec3f(l.POSITION1).u16(l.COMPONENTINDEX);export{lt as E,Ht as d,Wt as f,kt as m,ut as p,mt as u};
