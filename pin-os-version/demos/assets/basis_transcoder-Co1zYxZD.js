var Wt,pn=(Wt=typeof document<"u"?document.currentScript?.src:void 0,function(he={}){var _t,Z,c=Object.assign({},he),de=new Promise((t,e)=>{_t=t,Z=e}),fe=!0,Ft=Object.assign({},c),F="";function ve(t){return c.locateFile?c.locateFile(t,F):F+t}typeof document<"u"&&document.currentScript&&(F=document.currentScript.src),Wt&&(F=Wt),F=F.startsWith("blob:")?"":F.substr(0,F.replace(/[?#].*/,"").lastIndexOf("/")+1);var N,X,ye=c.print||console.log.bind(console),D=c.printErr||console.error.bind(console);Object.assign(c,Ft),Ft=null,c.arguments&&c.arguments,c.thisProgram&&c.thisProgram,c.quit&&c.quit,c.wasmBinary&&(N=c.wasmBinary);var S,g,x,M,I,f,St,Ot,jt=!1;function kt(){var t=X.buffer;c.HEAP8=S=new Int8Array(t),c.HEAP16=x=new Int16Array(t),c.HEAPU8=g=new Uint8Array(t),c.HEAPU16=M=new Uint16Array(t),c.HEAP32=I=new Int32Array(t),c.HEAPU32=f=new Uint32Array(t),c.HEAPF32=St=new Float32Array(t),c.HEAPF64=Ot=new Float64Array(t)}var Et=[],Rt=[],Dt=[];function me(){if(c.preRun)for(typeof c.preRun=="function"&&(c.preRun=[c.preRun]);c.preRun.length;)we(c.preRun.shift());pt(Et)}function ge(){pt(Rt)}function $e(){if(c.postRun)for(typeof c.postRun=="function"&&(c.postRun=[c.postRun]);c.postRun.length;)be(c.postRun.shift());pt(Dt)}function we(t){Et.unshift(t)}function Te(t){Rt.unshift(t)}function be(t){Dt.unshift(t)}var E=0,z=null;function Ce(t){E++,c.monitorRunDependencies?.(E)}function Pe(t){if(E--,c.monitorRunDependencies?.(E),E==0&&z){var e=z;z=null,e()}}function xt(t){c.onAbort?.(t),D(t="Aborted("+t+")"),jt=!0,t+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(t);throw Z(e),e}var Y,Ae="data:application/octet-stream;base64,",It=t=>t.startsWith(Ae);function We(){var t="basis_transcoder.wasm";return It(t)?t:ve(t)}function Vt(t){if(t==Y&&N)return new Uint8Array(N);throw"both async and sync fetching of the wasm failed"}function _e(t){return!N&&fe&&typeof fetch=="function"?fetch(t,{credentials:"same-origin"}).then(e=>{if(!e.ok)throw`failed to load wasm binary file at '${t}'`;return e.arrayBuffer()}).catch(()=>Vt(t)):Promise.resolve().then(()=>Vt(t))}function Ht(t,e,r){return _e(t).then(n=>WebAssembly.instantiate(n,e)).then(r,n=>{D(`failed to asynchronously prepare wasm: ${n}`),xt(n)})}function Fe(t,e,r,n){return t||typeof WebAssembly.instantiateStreaming!="function"||It(e)||typeof fetch!="function"?Ht(e,r,n):fetch(e,{credentials:"same-origin"}).then(a=>WebAssembly.instantiateStreaming(a,r).then(n,function(o){return D(`wasm streaming compile failed: ${o}`),D("falling back to ArrayBuffer instantiation"),Ht(e,r,n)}))}function Se(){return{a:cn}}function Oe(){var t=Se();function e(n,a){return A=n.exports,X=A.L,kt(),Lt=A.Q,Te(A.M),Pe(),A}function r(n){e(n.instance)}if(Ce(),c.instantiateWasm)try{return c.instantiateWasm(t,e)}catch(n){D(`Module.instantiateWasm callback failed with error: ${n}`),Z(n)}return Y||(Y=We()),Fe(N,Y,t,r).catch(Z),{}}var pt=t=>{for(;t.length>0;)t.shift()(c)};c.noExitRuntime;class je{constructor(e){this.excPtr=e,this.ptr=e-24}set_type(e){f[this.ptr+4>>2]=e}get_type(){return f[this.ptr+4>>2]}set_destructor(e){f[this.ptr+8>>2]=e}get_destructor(){return f[this.ptr+8>>2]}set_caught(e){e=e?1:0,S[this.ptr+12]=e}get_caught(){return S[this.ptr+12]!=0}set_rethrown(e){e=e?1:0,S[this.ptr+13]=e}get_rethrown(){return S[this.ptr+13]!=0}init(e,r){this.set_adjusted_ptr(0),this.set_type(e),this.set_destructor(r)}set_adjusted_ptr(e){f[this.ptr+16>>2]=e}get_adjusted_ptr(){return f[this.ptr+16>>2]}get_exception_ptr(){if(se(this.get_type()))return f[this.excPtr>>2];var e=this.get_adjusted_ptr();return e!==0?e:this.excPtr}}var ke=(t,e,r)=>{throw new je(t).init(e,r),t},Ee=()=>{xt("")},tt={},ht=t=>{for(;t.length;){var e=t.pop();t.pop()(e)}};function q(t){return this.fromWireType(f[t>>2])}var Ut,Bt,V,H={},R={},et={},rt=t=>{throw new Ut(t)},O=(t,e,r)=>{function n(i){var s=r(i);s.length!==t.length&&rt("Mismatched type converter count");for(var l=0;l<t.length;++l)C(t[l],s[l])}t.forEach(function(i){et[i]=e});var a=new Array(e.length),o=[],u=0;e.forEach((i,s)=>{R.hasOwnProperty(i)?a[s]=R[i]:(o.push(i),H.hasOwnProperty(i)||(H[i]=[]),H[i].push(()=>{a[s]=R[i],++u===o.length&&n(a)}))}),o.length===0&&n(a)},Re=t=>{var e=tt[t];delete tt[t];var r=e.rawConstructor,n=e.rawDestructor,a=e.fields,o=a.map(u=>u.getterReturnType).concat(a.map(u=>u.setterArgumentType));O([t],o,u=>{var i={};return a.forEach((s,l)=>{var p=s.fieldName,h=u[l],v=s.getter,y=s.getterContext,T=u[l+a.length],B=s.setter,j=s.setterContext;i[p]={read:k=>h.fromWireType(v(y,k)),write:(k,Q)=>{var w=[];B(j,k,T.toWireType(w,Q)),ht(w)}}}),[{name:e.name,fromWireType:s=>{var l={};for(var p in i)l[p]=i[p].read(s);return n(s),l},toWireType:(s,l)=>{for(var p in i)if(!(p in l))throw new TypeError(`Missing field: "${p}"`);var h=r();for(p in i)i[p].write(h,l[p]);return s!==null&&s.push(n,h),h},argPackAdvance:P,readValueFromPointer:q,destructorFunction:n}]})},De=(t,e,r,n,a)=>{},xe=()=>{for(var t=new Array(256),e=0;e<256;++e)t[e]=String.fromCharCode(e);Bt=t},m=t=>{for(var e="",r=t;g[r];)e+=Bt[g[r++]];return e},d=t=>{throw new V(t)};function Ie(t,e,r={}){var n=e.name;if(t||d(`type "${n}" must have a positive integer typeid pointer`),R.hasOwnProperty(t)){if(r.ignoreDuplicateRegistrations)return;d(`Cannot register type '${n}' twice`)}if(R[t]=e,delete et[t],H.hasOwnProperty(t)){var a=H[t];delete H[t],a.forEach(o=>o())}}function C(t,e,r={}){if(!("argPackAdvance"in e))throw new TypeError("registerType registeredInstance requires argPackAdvance");return Ie(t,e,r)}var G,P=8,Ve=(t,e,r,n)=>{C(t,{name:e=m(e),fromWireType:function(a){return!!a},toWireType:function(a,o){return o?r:n},argPackAdvance:P,readValueFromPointer:function(a){return this.fromWireType(g[a])},destructorFunction:null})},He=t=>({count:t.count,deleteScheduled:t.deleteScheduled,preservePointerOnDelete:t.preservePointerOnDelete,ptr:t.ptr,ptrType:t.ptrType,smartPtr:t.smartPtr,smartPtrType:t.smartPtrType}),dt=t=>{function e(r){return r.$$.ptrType.registeredClass.name}d(e(t)+" instance already deleted")},ft=!1,Nt=t=>{},Ue=t=>{t.smartPtr?t.smartPtrType.rawDestructor(t.smartPtr):t.ptrType.registeredClass.rawDestructor(t.ptr)},Mt=t=>{t.count.value-=1,t.count.value===0&&Ue(t)},zt=(t,e,r)=>{if(e===r)return t;if(r.baseClass===void 0)return null;var n=zt(t,e,r.baseClass);return n===null?null:r.downcast(n)},qt={},Be=()=>Object.keys(J).length,Ne=()=>{var t=[];for(var e in J)J.hasOwnProperty(e)&&t.push(J[e]);return t},L=[],vt=()=>{for(;L.length;){var t=L.pop();t.$$.deleteScheduled=!1,t.delete()}},Me=t=>{G=t,L.length&&G&&G(vt)},ze=()=>{c.getInheritedInstanceCount=Be,c.getLiveInheritedInstances=Ne,c.flushPendingDeletes=vt,c.setDelayFunction=Me},J={},qe=(t,e)=>{for(e===void 0&&d("ptr should not be undefined");t.baseClass;)e=t.upcast(e),t=t.baseClass;return e},Ge=(t,e)=>(e=qe(t,e),J[e]),nt=(t,e)=>(e.ptrType&&e.ptr||rt("makeClassHandle requires ptr and ptrType"),!!e.smartPtrType!=!!e.smartPtr&&rt("Both smartPtrType and smartPtr must be specified"),e.count={value:1},K(Object.create(t,{$$:{value:e,writable:!0}})));function Le(t){var e=this.getPointee(t);if(!e)return this.destructor(t),null;var r=Ge(this.registeredClass,e);if(r!==void 0){if(r.$$.count.value===0)return r.$$.ptr=e,r.$$.smartPtr=t,r.clone();var n=r.clone();return this.destructor(t),n}function a(){return this.isSmartPointer?nt(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:e,smartPtrType:this,smartPtr:t}):nt(this.registeredClass.instancePrototype,{ptrType:this,ptr:t})}var o,u=this.registeredClass.getActualType(e),i=qt[u];if(!i)return a.call(this);o=this.isConst?i.constPointerType:i.pointerType;var s=zt(e,this.registeredClass,o.registeredClass);return s===null?a.call(this):this.isSmartPointer?nt(o.registeredClass.instancePrototype,{ptrType:o,ptr:s,smartPtrType:this,smartPtr:t}):nt(o.registeredClass.instancePrototype,{ptrType:o,ptr:s})}var K=t=>typeof FinalizationRegistry>"u"?(K=e=>e,t):(ft=new FinalizationRegistry(e=>{Mt(e.$$)}),K=e=>{var r=e.$$;if(r.smartPtr){var n={$$:r};ft.register(e,n,e)}return e},Nt=e=>ft.unregister(e),K(t)),Je=()=>{Object.assign(at.prototype,{isAliasOf(t){if(!(this instanceof at)||!(t instanceof at))return!1;var e=this.$$.ptrType.registeredClass,r=this.$$.ptr;t.$$=t.$$;for(var n=t.$$.ptrType.registeredClass,a=t.$$.ptr;e.baseClass;)r=e.upcast(r),e=e.baseClass;for(;n.baseClass;)a=n.upcast(a),n=n.baseClass;return e===n&&r===a},clone(){if(this.$$.ptr||dt(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var t=K(Object.create(Object.getPrototypeOf(this),{$$:{value:He(this.$$)}}));return t.$$.count.value+=1,t.$$.deleteScheduled=!1,t},delete(){this.$$.ptr||dt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&d("Object already scheduled for deletion"),Nt(this),Mt(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||dt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&d("Object already scheduled for deletion"),L.push(this),L.length===1&&G&&G(vt),this.$$.deleteScheduled=!0,this}})};function at(){}var U=(t,e)=>Object.defineProperty(e,"name",{value:t}),Gt=(t,e,r)=>{if(t[e].overloadTable===void 0){var n=t[e];t[e]=function(...a){return t[e].overloadTable.hasOwnProperty(a.length)||d(`Function '${r}' called with an invalid number of arguments (${a.length}) - expects one of (${t[e].overloadTable})!`),t[e].overloadTable[a.length].apply(this,a)},t[e].overloadTable=[],t[e].overloadTable[n.argCount]=n}},yt=(t,e,r)=>{c.hasOwnProperty(t)?((r===void 0||c[t].overloadTable!==void 0&&c[t].overloadTable[r]!==void 0)&&d(`Cannot register public name '${t}' twice`),Gt(c,t,t),c.hasOwnProperty(r)&&d(`Cannot register multiple overloads of a function with the same number of arguments (${r})!`),c[t].overloadTable[r]=e):(c[t]=e,r!==void 0&&(c[t].numArguments=r))},Ke=48,Qe=57,Ze=t=>{if(t===void 0)return"_unknown";var e=(t=t.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return e>=Ke&&e<=Qe?`_${t}`:t};function Xe(t,e,r,n,a,o,u,i){this.name=t,this.constructor=e,this.instancePrototype=r,this.rawDestructor=n,this.baseClass=a,this.getActualType=o,this.upcast=u,this.downcast=i,this.pureVirtualFunctions=[]}var mt=(t,e,r)=>{for(;e!==r;)e.upcast||d(`Expected null or instance of ${r.name}, got an instance of ${e.name}`),t=e.upcast(t),e=e.baseClass;return t};function Ye(t,e){if(e===null)return this.isReference&&d(`null is not a valid ${this.name}`),0;e.$$||d(`Cannot pass "${Ct(e)}" as a ${this.name}`),e.$$.ptr||d(`Cannot pass deleted object as a pointer of type ${this.name}`);var r=e.$$.ptrType.registeredClass;return mt(e.$$.ptr,r,this.registeredClass)}function tr(t,e){var r;if(e===null)return this.isReference&&d(`null is not a valid ${this.name}`),this.isSmartPointer?(r=this.rawConstructor(),t!==null&&t.push(this.rawDestructor,r),r):0;e&&e.$$||d(`Cannot pass "${Ct(e)}" as a ${this.name}`),e.$$.ptr||d(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&e.$$.ptrType.isConst&&d(`Cannot convert argument of type ${e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name} to parameter type ${this.name}`);var n=e.$$.ptrType.registeredClass;if(r=mt(e.$$.ptr,n,this.registeredClass),this.isSmartPointer)switch(e.$$.smartPtr===void 0&&d("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:e.$$.smartPtrType===this?r=e.$$.smartPtr:d(`Cannot convert argument of type ${e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:r=e.$$.smartPtr;break;case 2:if(e.$$.smartPtrType===this)r=e.$$.smartPtr;else{var a=e.clone();r=this.rawShare(r,$.toHandle(()=>a.delete())),t!==null&&t.push(this.rawDestructor,r)}break;default:d("Unsupporting sharing policy")}return r}function er(t,e){if(e===null)return this.isReference&&d(`null is not a valid ${this.name}`),0;e.$$||d(`Cannot pass "${Ct(e)}" as a ${this.name}`),e.$$.ptr||d(`Cannot pass deleted object as a pointer of type ${this.name}`),e.$$.ptrType.isConst&&d(`Cannot convert argument of type ${e.$$.ptrType.name} to parameter type ${this.name}`);var r=e.$$.ptrType.registeredClass;return mt(e.$$.ptr,r,this.registeredClass)}var rr=()=>{Object.assign(ot.prototype,{getPointee(t){return this.rawGetPointee&&(t=this.rawGetPointee(t)),t},destructor(t){this.rawDestructor?.(t)},argPackAdvance:P,readValueFromPointer:q,fromWireType:Le})};function ot(t,e,r,n,a,o,u,i,s,l,p){this.name=t,this.registeredClass=e,this.isReference=r,this.isConst=n,this.isSmartPointer=a,this.pointeeType=o,this.sharingPolicy=u,this.rawGetPointee=i,this.rawConstructor=s,this.rawShare=l,this.rawDestructor=p,a||e.baseClass!==void 0?this.toWireType=tr:n?(this.toWireType=Ye,this.destructorFunction=null):(this.toWireType=er,this.destructorFunction=null)}var Lt,Jt,Kt=(t,e,r)=>{c.hasOwnProperty(t)||rt("Replacing nonexistent public symbol"),c[t].overloadTable!==void 0&&r!==void 0?c[t].overloadTable[r]=e:(c[t]=e,c[t].argCount=r)},nr=(t,e,r)=>(t=t.replace(/p/g,"i"),(0,c["dynCall_"+t])(e,...r)),it=[],Qt=t=>{var e=it[t];return e||(t>=it.length&&(it.length=t+1),it[t]=e=Lt.get(t)),e},ar=(t,e,r=[])=>t.includes("j")?nr(t,e,r):Qt(e)(...r),or=(t,e)=>(...r)=>ar(t,e,r),b=(t,e)=>{function r(){return t.includes("j")?or(t,e):Qt(e)}t=m(t);var n=r();return typeof n!="function"&&d(`unknown function pointer with signature ${t}: ${e}`),n},ir=(t,e)=>{var r=U(e,function(n){this.name=e,this.message=n;var a=new Error(n).stack;a!==void 0&&(this.stack=this.toString()+`
`+a.replace(/^Error(:[^\n]*)?\n/,""))});return r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},r},Zt=t=>{var e=ie(t),r=m(e);return _(e),r},st=(t,e)=>{var r=[],n={};function a(o){n[o]||R[o]||(et[o]?et[o].forEach(a):(r.push(o),n[o]=!0))}throw e.forEach(a),new Jt(`${t}: `+r.map(Zt).join([", "]))},sr=(t,e,r,n,a,o,u,i,s,l,p,h,v)=>{p=m(p),o=b(a,o),i&&=b(u,i),l&&=b(s,l),v=b(h,v);var y=Ze(p);yt(y,function(){st(`Cannot construct ${p} due to unbound types`,[n])}),O([t,e,r],n?[n]:[],T=>{var B,j;T=T[0],j=n?(B=T.registeredClass).instancePrototype:at.prototype;var k=U(p,function(...At){if(Object.getPrototypeOf(this)!==Q)throw new V("Use 'new' to construct "+p);if(w.constructor_body===void 0)throw new V(p+" has no accessible constructor");var pe=w.constructor_body[At.length];if(pe===void 0)throw new V(`Tried to invoke ctor of ${p} with invalid number of parameters (${At.length}) - expected (${Object.keys(w.constructor_body).toString()}) parameters instead!`);return pe.apply(this,At)}),Q=Object.create(j,{constructor:{value:k}});k.prototype=Q;var w=new Xe(p,k,Q,v,B,o,i,l);w.baseClass&&(w.baseClass.__derivedClasses??=[],w.baseClass.__derivedClasses.push(w));var ln=new ot(p,w,!0,!1,!1),ce=new ot(p+"*",w,!1,!1,!1),le=new ot(p+" const*",w,!1,!0,!1);return qt[t]={pointerType:ce,constPointerType:le},Kt(y,k),[ln,ce,le]})},gt=(t,e)=>{for(var r=[],n=0;n<t;n++)r.push(f[e+4*n>>2]);return r};function Xt(t){for(var e=1;e<t.length;++e)if(t[e]!==null&&t[e].destructorFunction===void 0)return!0;return!1}function Yt(t,e){if(!(t instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof t} which is not a function`);var r=U(t.name||"unknownFunctionName",function(){});r.prototype=t.prototype;var n=new r,a=t.apply(n,e);return a instanceof Object?a:n}function ur(t,e,r,n){for(var a=Xt(t),o=t.length,u="",i="",s=0;s<o-2;++s)u+=(s!==0?", ":"")+"arg"+s,i+=(s!==0?", ":"")+"arg"+s+"Wired";var l=`
        return function (${u}) {
        if (arguments.length !== ${o-2}) {
          throwBindingError('function ' + humanName + ' called with ' + arguments.length + ' arguments, expected ${o-2}');
        }`;a&&(l+=`var destructors = [];
`);var p=a?"destructors":"null",h=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];for(e&&(l+="var thisWired = classParam['toWireType']("+p+`, this);
`),s=0;s<o-2;++s)l+="var arg"+s+"Wired = argType"+s+"['toWireType']("+p+", arg"+s+`);
`,h.push("argType"+s);if(e&&(i="thisWired"+(i.length>0?", ":"")+i),l+=(r||n?"var rv = ":"")+"invoker(fn"+(i.length>0?", ":"")+i+`);
`,a)l+=`runDestructors(destructors);
`;else for(s=e?1:2;s<t.length;++s){var v=s===1?"thisWired":"arg"+(s-2)+"Wired";t[s].destructorFunction!==null&&(l+=`${v}_dtor(${v});
`,h.push(`${v}_dtor`))}return r&&(l+=`var ret = retType['fromWireType'](rv);
return ret;
`),[h,l+=`}
`]}function $t(t,e,r,n,a,o){var u=e.length;u<2&&d("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var i=e[1]!==null&&r!==null,s=Xt(e),l=e[0].name!=="void",p=[t,d,n,a,ht,e[0],e[1]],h=0;h<u-2;++h)p.push(e[h+2]);if(!s)for(h=i?1:2;h<e.length;++h)e[h].destructorFunction!==null&&p.push(e[h].destructorFunction);let[v,y]=ur(e,i,l,o);v.push(y);var T=Yt(Function,v)(...p);return U(t,T)}var cr=(t,e,r,n,a,o)=>{var u=gt(e,r);a=b(n,a),O([],[t],i=>{var s=`constructor ${(i=i[0]).name}`;if(i.registeredClass.constructor_body===void 0&&(i.registeredClass.constructor_body=[]),i.registeredClass.constructor_body[e-1]!==void 0)throw new V(`Cannot register multiple constructors with identical number of parameters (${e-1}) for class '${i.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return i.registeredClass.constructor_body[e-1]=()=>{st(`Cannot construct ${i.name} due to unbound types`,u)},O([],u,l=>(l.splice(1,0,null),i.registeredClass.constructor_body[e-1]=$t(s,l,null,a,o),[])),[]})},te=t=>{const e=(t=t.trim()).indexOf("(");return e!==-1?t.substr(0,e):t},lr=(t,e,r,n,a,o,u,i,s)=>{var l=gt(r,n);e=m(e),e=te(e),o=b(a,o),O([],[t],p=>{var h=`${(p=p[0]).name}.${e}`;function v(){st(`Cannot call ${h} due to unbound types`,l)}e.startsWith("@@")&&(e=Symbol[e.substring(2)]),i&&p.registeredClass.pureVirtualFunctions.push(e);var y=p.registeredClass.instancePrototype,T=y[e];return T===void 0||T.overloadTable===void 0&&T.className!==p.name&&T.argCount===r-2?(v.argCount=r-2,v.className=p.name,y[e]=v):(Gt(y,e,h),y[e].overloadTable[r-2]=v),O([],l,B=>{var j=$t(h,B,p,o,u,s);return y[e].overloadTable===void 0?(j.argCount=r-2,y[e]=j):y[e].overloadTable[r-2]=j,[]}),[]})},pr=(t,e,r)=>{t=m(t),O([],[e],n=>(n=n[0],c[t]=n.fromWireType(r),[]))},wt=[],W=[],Tt=t=>{t>9&&--W[t+1]==0&&(W[t]=void 0,wt.push(t))},hr=()=>W.length/2-5-wt.length,dr=()=>{W.push(0,1,void 0,1,null,1,!0,1,!1,1),c.count_emval_handles=hr},$={toValue:t=>(t||d("Cannot use deleted val. handle = "+t),W[t]),toHandle:t=>{switch(t){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const e=wt.pop()||W.length;return W[e]=t,W[e+1]=1,e}}}},fr={name:"emscripten::val",fromWireType:t=>{var e=$.toValue(t);return Tt(t),e},toWireType:(t,e)=>$.toHandle(e),argPackAdvance:P,readValueFromPointer:q,destructorFunction:null},vr=t=>C(t,fr),yr=(t,e,r)=>{switch(e){case 1:return r?function(n){return this.fromWireType(S[n])}:function(n){return this.fromWireType(g[n])};case 2:return r?function(n){return this.fromWireType(x[n>>1])}:function(n){return this.fromWireType(M[n>>1])};case 4:return r?function(n){return this.fromWireType(I[n>>2])}:function(n){return this.fromWireType(f[n>>2])};default:throw new TypeError(`invalid integer width (${e}): ${t}`)}},mr=(t,e,r,n)=>{function a(){}e=m(e),a.values={},C(t,{name:e,constructor:a,fromWireType:function(o){return this.constructor.values[o]},toWireType:(o,u)=>u.value,argPackAdvance:P,readValueFromPointer:yr(e,r,n),destructorFunction:null}),yt(e,a)},bt=(t,e)=>{var r=R[t];return r===void 0&&d(`${e} has unknown type ${Zt(t)}`),r},gr=(t,e,r)=>{var n=bt(t,"enum");e=m(e);var a=n.constructor,o=Object.create(n.constructor.prototype,{value:{value:r},constructor:{value:U(`${n.name}_${e}`,function(){})}});a.values[r]=o,a[e]=o},Ct=t=>{if(t===null)return"null";var e=typeof t;return e==="object"||e==="array"||e==="function"?t.toString():""+t},$r=(t,e)=>{switch(e){case 4:return function(r){return this.fromWireType(St[r>>2])};case 8:return function(r){return this.fromWireType(Ot[r>>3])};default:throw new TypeError(`invalid float width (${e}): ${t}`)}},wr=(t,e,r)=>{C(t,{name:e=m(e),fromWireType:n=>n,toWireType:(n,a)=>a,argPackAdvance:P,readValueFromPointer:$r(e,r),destructorFunction:null})},Tr=(t,e,r,n,a,o,u)=>{var i=gt(e,r);t=m(t),t=te(t),a=b(n,a),yt(t,function(){st(`Cannot call ${t} due to unbound types`,i)},e-1),O([],i,s=>{var l=[s[0],null].concat(s.slice(1));return Kt(t,$t(t,l,null,a,o,u),e-1),[]})},br=(t,e,r)=>{switch(e){case 1:return r?n=>S[n]:n=>g[n];case 2:return r?n=>x[n>>1]:n=>M[n>>1];case 4:return r?n=>I[n>>2]:n=>f[n>>2];default:throw new TypeError(`invalid integer width (${e}): ${t}`)}},Cr=(t,e,r,n,a)=>{e=m(e);var o=l=>l;if(n===0){var u=32-8*r;o=l=>l<<u>>>u}var i=e.includes("unsigned"),s=(l,p)=>{};C(t,{name:e,fromWireType:o,toWireType:i?function(l,p){return s(p,this.name),p>>>0}:function(l,p){return s(p,this.name),p},argPackAdvance:P,readValueFromPointer:br(e,r,n!==0),destructorFunction:null})},Pr=(t,e,r)=>{var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][e];function a(o){var u=f[o>>2],i=f[o+4>>2];return new n(S.buffer,i,u)}C(t,{name:r=m(r),fromWireType:a,argPackAdvance:P,readValueFromPointer:a},{ignoreDuplicateRegistrations:!0})},Ar=(t,e,r,n)=>{if(!(n>0))return 0;for(var a=r,o=r+n-1,u=0;u<t.length;++u){var i=t.charCodeAt(u);if(i>=55296&&i<=57343&&(i=65536+((1023&i)<<10)|1023&t.charCodeAt(++u)),i<=127){if(r>=o)break;e[r++]=i}else if(i<=2047){if(r+1>=o)break;e[r++]=192|i>>6,e[r++]=128|63&i}else if(i<=65535){if(r+2>=o)break;e[r++]=224|i>>12,e[r++]=128|i>>6&63,e[r++]=128|63&i}else{if(r+3>=o)break;e[r++]=240|i>>18,e[r++]=128|i>>12&63,e[r++]=128|i>>6&63,e[r++]=128|63&i}}return e[r]=0,r-a},Wr=(t,e,r)=>Ar(t,g,e,r),_r=t=>{for(var e=0,r=0;r<t.length;++r){var n=t.charCodeAt(r);n<=127?e++:n<=2047?e+=2:n>=55296&&n<=57343?(e+=4,++r):e+=3}return e},ee=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,re=(t,e,r)=>{for(var n=e+r,a=e;t[a]&&!(a>=n);)++a;if(a-e>16&&t.buffer&&ee)return ee.decode(t.subarray(e,a));for(var o="";e<a;){var u=t[e++];if(128&u){var i=63&t[e++];if((224&u)!=192){var s=63&t[e++];if((u=(240&u)==224?(15&u)<<12|i<<6|s:(7&u)<<18|i<<12|s<<6|63&t[e++])<65536)o+=String.fromCharCode(u);else{var l=u-65536;o+=String.fromCharCode(55296|l>>10,56320|1023&l)}}else o+=String.fromCharCode((31&u)<<6|i)}else o+=String.fromCharCode(u)}return o},Fr=(t,e)=>t?re(g,t,e):"",Sr=(t,e)=>{var r=(e=m(e))==="std::string";C(t,{name:e,fromWireType(n){var a,o=f[n>>2],u=n+4;if(r)for(var i=u,s=0;s<=o;++s){var l=u+s;if(s==o||g[l]==0){var p=Fr(i,l-i);a===void 0?a=p:(a+="\0",a+=p),i=l+1}}else{var h=new Array(o);for(s=0;s<o;++s)h[s]=String.fromCharCode(g[u+s]);a=h.join("")}return _(n),a},toWireType(n,a){var o;a instanceof ArrayBuffer&&(a=new Uint8Array(a));var u=typeof a=="string";u||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int8Array||d("Cannot pass non-string to std::string"),o=r&&u?_r(a):a.length;var i=Pt(4+o+1),s=i+4;if(f[i>>2]=o,r&&u)Wr(a,s,o+1);else if(u)for(var l=0;l<o;++l){var p=a.charCodeAt(l);p>255&&(_(s),d("String has UTF-16 code units that do not fit in 8 bits")),g[s+l]=p}else for(l=0;l<o;++l)g[s+l]=a[l];return n!==null&&n.push(_,i),i},argPackAdvance:P,readValueFromPointer:q,destructorFunction(n){_(n)}})},ne=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Or=(t,e)=>{for(var r=t,n=r>>1,a=n+e/2;!(n>=a)&&M[n];)++n;if((r=n<<1)-t>32&&ne)return ne.decode(g.subarray(t,r));for(var o="",u=0;!(u>=e/2);++u){var i=x[t+2*u>>1];if(i==0)break;o+=String.fromCharCode(i)}return o},jr=(t,e,r)=>{if(r??=2147483647,r<2)return 0;for(var n=e,a=(r-=2)<2*t.length?r/2:t.length,o=0;o<a;++o){var u=t.charCodeAt(o);x[e>>1]=u,e+=2}return x[e>>1]=0,e-n},kr=t=>2*t.length,Er=(t,e)=>{for(var r=0,n="";!(r>=e/4);){var a=I[t+4*r>>2];if(a==0)break;if(++r,a>=65536){var o=a-65536;n+=String.fromCharCode(55296|o>>10,56320|1023&o)}else n+=String.fromCharCode(a)}return n},Rr=(t,e,r)=>{if(r??=2147483647,r<4)return 0;for(var n=e,a=n+r-4,o=0;o<t.length;++o){var u=t.charCodeAt(o);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&t.charCodeAt(++o)),I[e>>2]=u,(e+=4)+4>a)break}return I[e>>2]=0,e-n},Dr=t=>{for(var e=0,r=0;r<t.length;++r){var n=t.charCodeAt(r);n>=55296&&n<=57343&&++r,e+=4}return e},xr=(t,e,r)=>{var n,a,o,u;r=m(r),e===2?(n=Or,a=jr,u=kr,o=i=>M[i>>1]):e===4&&(n=Er,a=Rr,u=Dr,o=i=>f[i>>2]),C(t,{name:r,fromWireType:i=>{for(var s,l=f[i>>2],p=i+4,h=0;h<=l;++h){var v=i+4+h*e;if(h==l||o(v)==0){var y=n(p,v-p);s===void 0?s=y:(s+="\0",s+=y),p=v+e}}return _(i),s},toWireType:(i,s)=>{typeof s!="string"&&d(`Cannot pass non-string to C++ string type ${r}`);var l=u(s),p=Pt(4+l+e);return f[p>>2]=l/e,a(s,p+4,l+e),i!==null&&i.push(_,p),p},argPackAdvance:P,readValueFromPointer:q,destructorFunction(i){_(i)}})},Ir=(t,e,r,n,a,o)=>{tt[t]={name:m(e),rawConstructor:b(r,n),rawDestructor:b(a,o),fields:[]}},Vr=(t,e,r,n,a,o,u,i,s,l)=>{tt[t].fields.push({fieldName:m(e),getterReturnType:r,getter:b(n,a),getterContext:o,setterArgumentType:u,setter:b(i,s),setterContext:l})},Hr=(t,e)=>{C(t,{isVoid:!0,name:e=m(e),argPackAdvance:0,fromWireType:()=>{},toWireType:(r,n)=>{}})},Ur=(t,e,r)=>g.copyWithin(t,e,e+r),ae=(t,e,r)=>{var n=[],a=t.toWireType(n,r);return n.length&&(f[e>>2]=$.toHandle(n)),a},Br=(t,e,r)=>(t=$.toValue(t),e=bt(e,"emval::as"),ae(e,r,t)),ut=[],Nr=(t,e,r,n)=>(t=ut[t])(null,e=$.toValue(e),r,n),Mr={},ct=t=>{var e=Mr[t];return e===void 0?m(t):e},zr=(t,e,r,n,a)=>(t=ut[t])(e=$.toValue(e),e[r=ct(r)],n,a),oe=()=>typeof globalThis=="object"?globalThis:Function("return this")(),qr=t=>t===0?$.toHandle(oe()):(t=ct(t),$.toHandle(oe()[t])),Gr=t=>{var e=ut.length;return ut.push(t),e},Lr=(t,e)=>{for(var r=new Array(t),n=0;n<t;++n)r[n]=bt(f[e+4*n>>2],"parameter "+n);return r},Jr=(t,e,r)=>{var n=Lr(t,e),a=n.shift();t--;var o=`return function (obj, func, destructorsRef, args) {
`,u=0,i=[];r===0&&i.push("obj");for(var s=["retType"],l=[a],p=0;p<t;++p)i.push("arg"+p),s.push("argType"+p),l.push(n[p]),o+=`  var arg${p} = argType${p}.readValueFromPointer(args${u?"+"+u:""});
`,u+=n[p].argPackAdvance;o+=`  var rv = ${r===1?"new func":"func.call"}(${i.join(", ")});
`,a.isVoid||(s.push("emval_returnValue"),l.push(ae),o+=`  return emval_returnValue(retType, destructorsRef, rv);
`),o+=`};
`,s.push(o);var h=Yt(Function,s)(...l),v=`methodCaller<(${n.map(y=>y.name).join(", ")}) => ${a.name}>`;return Gr(U(v,h))},Kr=t=>(t=ct(t),$.toHandle(c[t])),Qr=(t,e)=>(t=$.toValue(t),e=$.toValue(e),$.toHandle(t[e])),Zr=t=>{t>9&&(W[t+1]+=1)},Xr=t=>$.toHandle(ct(t)),Yr=t=>{var e=$.toValue(t);ht(e),Tt(t)},tn=()=>2147483648,en=t=>{var e=(t-X.buffer.byteLength+65535)/65536;try{return X.grow(e),kt(),1}catch{}},rn=t=>{var e=g.length;t>>>=0;var r=tn();if(t>r)return!1;for(var n=(i,s)=>i+(s-i%s)%s,a=1;a<=4;a*=2){var o=e*(1+.2/a);o=Math.min(o,t+100663296);var u=Math.min(r,n(Math.max(t,o),65536));if(en(u))return!0}return!1},nn=t=>52;function an(t,e,r,n,a){return 70}var on=[null,[],[]],sn=(t,e)=>{var r=on[t];e===0||e===10?((t===1?ye:D)(re(r,0)),r.length=0):r.push(e)},un=(t,e,r,n)=>{for(var a=0,o=0;o<r;o++){var u=f[e>>2],i=f[e+4>>2];e+=8;for(var s=0;s<i;s++)sn(t,g[u+s]);a+=i}return f[n>>2]=a,0};Ut=c.InternalError=class extends Error{constructor(t){super(t),this.name="InternalError"}},xe(),V=c.BindingError=class extends Error{constructor(t){super(t),this.name="BindingError"}},Je(),ze(),rr(),Jt=c.UnboundTypeError=ir(Error,"UnboundTypeError"),dr();var lt,cn={K:ke,G:Ee,s:Re,C:De,I:Ve,w:sr,v:cr,d:lr,m:pr,H:vr,o:mr,a:gr,A:wr,k:Tr,l:Cr,f:Pr,z:Sr,u:xr,t:Ir,c:Vr,J:Hr,F:Ur,n:Br,q:Nr,p:zr,b:Tt,x:qr,i:Jr,r:Kr,g:Qr,j:Zr,h:Xr,e:Yr,D:rn,E:nn,B:an,y:un},A=Oe(),ie=t=>(ie=A.N)(t),Pt=t=>(Pt=A.O)(t),_=t=>(_=A.P)(t),se=t=>(se=A.R)(t);function ue(){function t(){lt||(lt=!0,c.calledRun=!0,jt||(ge(),_t(c),c.onRuntimeInitialized&&c.onRuntimeInitialized(),$e()))}E>0||(me(),E>0||(c.setStatus?(c.setStatus("Running..."),setTimeout(function(){setTimeout(function(){c.setStatus("")},1),t()},1)):t()))}if(c.dynCall_jiji=(t,e,r,n,a)=>(c.dynCall_jiji=A.S)(t,e,r,n,a),z=function t(){lt||ue(),lt||(z=t)},c.preInit)for(typeof c.preInit=="function"&&(c.preInit=[c.preInit]);c.preInit.length>0;)c.preInit.pop()();return ue(),de});export{pn as default};
