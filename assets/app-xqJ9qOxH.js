/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yi(e,t){const n=new Set(e.split(","));return t?l=>n.has(l.toLowerCase()):l=>n.has(l)}const Te={},_n=[],it=()=>{},hd=()=>!1,dl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Bi=e=>e.startsWith("onUpdate:"),Re=Object.assign,wi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},fd=Object.prototype.hasOwnProperty,de=(e,t)=>fd.call(e,t),ee=Array.isArray,Gn=e=>ar(e)==="[object Map]",vd=e=>ar(e)==="[object Set]",re=e=>typeof e=="function",ie=e=>typeof e=="string",ir=e=>typeof e=="symbol",ke=e=>e!==null&&typeof e=="object",Go=e=>(ke(e)||re(e))&&re(e.then)&&re(e.catch),md=Object.prototype.toString,ar=e=>md.call(e),Ed=e=>ar(e).slice(8,-1),gd=e=>ar(e)==="[object Object]",Di=e=>ie(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Un=yi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),or=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},bd=/-(\w)/g,ut=or(e=>e.replace(bd,(t,n)=>n?n.toUpperCase():"")),_d=/\B([A-Z])/g,Sn=or(e=>e.replace(_d,"-$1").toLowerCase()),pl=or(e=>e.charAt(0).toUpperCase()+e.slice(1)),Dr=or(e=>e?`on${pl(e)}`:""),Kt=(e,t)=>!Object.is(e,t),Lr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Wl=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ad=e=>{const t=parseFloat(e);return isNaN(t)?e:t},yd=e=>{const t=ie(e)?Number(e):NaN;return isNaN(t)?e:t};let _a;const Uo=()=>_a||(_a=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Li(e){if(ee(e)){const t={};for(let n=0;n<e.length;n++){const l=e[n],r=ie(l)?Ld(l):Li(l);if(r)for(const i in r)t[i]=r[i]}return t}else if(ie(e)||ke(e))return e}const Bd=/;(?![^(]*\))/g,wd=/:([^]+)/,Dd=/\/\*[^]*?\*\//g;function Ld(e){const t={};return e.replace(Dd,"").split(Bd).forEach(n=>{if(n){const l=n.split(wd);l.length>1&&(t[l[0].trim()]=l[1].trim())}}),t}function Ti(e){let t="";if(ie(e))t=e;else if(ee(e))for(let n=0;n<e.length;n++){const l=Ti(e[n]);l&&(t+=l+" ")}else if(ke(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Td="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cd=yi(Td);function Wo(e){return!!e||e===""}/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xe;class kd{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Xe,!t&&Xe&&(this.index=(Xe.scopes||(Xe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Xe;try{return Xe=this,t()}finally{Xe=n}}}on(){Xe=this}off(){Xe=this.parent}stop(t){if(this._active){let n,l;for(n=0,l=this.effects.length;n<l;n++)this.effects[n].stop();for(n=0,l=this.cleanups.length;n<l;n++)this.cleanups[n]();if(this.scopes)for(n=0,l=this.scopes.length;n<l;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Pd(e,t=Xe){t&&t.active&&t.effects.push(e)}function Jo(){return Xe}function Id(e){Xe&&Xe.cleanups.push(e)}let on;class Ci{constructor(t,n,l,r){this.fn=t,this.trigger=n,this.scheduler=l,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Pd(this,r)}get dirty(){if(this._dirtyLevel===1){cn();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(xd(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),un()}return this._dirtyLevel>=2}set dirty(t){this._dirtyLevel=t?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Wt,n=on;try{return Wt=!0,on=this,this._runnings++,Aa(this),this.fn()}finally{ya(this),this._runnings--,on=n,Wt=t}}stop(){var t;this.active&&(Aa(this),ya(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function xd(e){return e.value}function Aa(e){e._trackId++,e._depsLength=0}function ya(e){if(e.deps&&e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Ko(e.deps[t],e);e.deps.length=e._depsLength}}function Ko(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let Wt=!0,Xr=0;const Yo=[];function cn(){Yo.push(Wt),Wt=!1}function un(){const e=Yo.pop();Wt=e===void 0?!0:e}function ki(){Xr++}function Pi(){for(Xr--;!Xr&&Zr.length;)Zr.shift()()}function Qo(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const l=e.deps[e._depsLength];l!==t?(l&&Ko(l,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Zr=[];function Xo(e,t,n){ki();for(const l of e.keys())if(l._dirtyLevel<t&&e.get(l)===l._trackId){const r=l._dirtyLevel;l._dirtyLevel=t,r===0&&(l._shouldSchedule=!0,l.trigger())}Zo(e),Pi()}function Zo(e){for(const t of e.keys())t.scheduler&&t._shouldSchedule&&(!t._runnings||t.allowRecurse)&&e.get(t)===t._trackId&&(t._shouldSchedule=!1,Zr.push(t.scheduler))}const es=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Jl=new WeakMap,sn=Symbol(""),ei=Symbol("");function Ke(e,t,n){if(Wt&&on){let l=Jl.get(e);l||Jl.set(e,l=new Map);let r=l.get(n);r||l.set(n,r=es(()=>l.delete(n))),Qo(on,r)}}function xt(e,t,n,l,r,i){const a=Jl.get(e);if(!a)return;let s=[];if(t==="clear")s=[...a.values()];else if(n==="length"&&ee(e)){const c=Number(l);a.forEach((u,d)=>{(d==="length"||!ir(d)&&d>=c)&&s.push(u)})}else switch(n!==void 0&&s.push(a.get(n)),t){case"add":ee(e)?Di(n)&&s.push(a.get("length")):(s.push(a.get(sn)),Gn(e)&&s.push(a.get(ei)));break;case"delete":ee(e)||(s.push(a.get(sn)),Gn(e)&&s.push(a.get(ei)));break;case"set":Gn(e)&&s.push(a.get(sn));break}ki();for(const c of s)c&&Xo(c,2);Pi()}function Od(e,t){var n;return(n=Jl.get(e))==null?void 0:n.get(t)}const Rd=yi("__proto__,__v_isRef,__isVue"),ts=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ir)),Ba=Sd();function Sd(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const l=se(this);for(let i=0,a=this.length;i<a;i++)Ke(l,"get",i+"");const r=l[t](...n);return r===-1||r===!1?l[t](...n.map(se)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){cn(),ki();const l=se(this)[t].apply(this,n);return Pi(),un(),l}}),e}function Fd(e){const t=se(this);return Ke(t,"has",e),t.hasOwnProperty(e)}class ns{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,l){const r=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return l===(r?i?Kd:as:i?is:rs).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(l)?t:void 0;const a=ee(t);if(!r){if(a&&de(Ba,n))return Reflect.get(Ba,n,l);if(n==="hasOwnProperty")return Fd}const s=Reflect.get(t,n,l);return(ir(n)?ts.has(n):Rd(n))||(r||Ke(t,"get",n),i)?s:Ne(s)?a&&Di(n)?s:s.value:ke(s)?r?Rt(s):hl(s):s}}class ls extends ns{constructor(t=!1){super(!1,t)}set(t,n,l,r){let i=t[n];if(!this._shallow){const c=Tn(i);if(!Kl(l)&&!Tn(l)&&(i=se(i),l=se(l)),!ee(t)&&Ne(i)&&!Ne(l))return c?!1:(i.value=l,!0)}const a=ee(t)&&Di(n)?Number(n)<t.length:de(t,n),s=Reflect.set(t,n,l,r);return t===se(r)&&(a?Kt(l,i)&&xt(t,"set",n,l):xt(t,"add",n,l)),s}deleteProperty(t,n){const l=de(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&l&&xt(t,"delete",n,void 0),r}has(t,n){const l=Reflect.has(t,n);return(!ir(n)||!ts.has(n))&&Ke(t,"has",n),l}ownKeys(t){return Ke(t,"iterate",ee(t)?"length":sn),Reflect.ownKeys(t)}}class Vd extends ns{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Md=new ls,$d=new Vd,Nd=new ls(!0),Ii=e=>e,sr=e=>Reflect.getPrototypeOf(e);function Pl(e,t,n=!1,l=!1){e=e.__v_raw;const r=se(e),i=se(t);n||(Kt(t,i)&&Ke(r,"get",t),Ke(r,"get",i));const{has:a}=sr(r),s=l?Ii:n?Ri:tl;if(a.call(r,t))return s(e.get(t));if(a.call(r,i))return s(e.get(i));e!==r&&e.get(t)}function Il(e,t=!1){const n=this.__v_raw,l=se(n),r=se(e);return t||(Kt(e,r)&&Ke(l,"has",e),Ke(l,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function xl(e,t=!1){return e=e.__v_raw,!t&&Ke(se(e),"iterate",sn),Reflect.get(e,"size",e)}function wa(e){e=se(e);const t=se(this);return sr(t).has.call(t,e)||(t.add(e),xt(t,"add",e,e)),this}function Da(e,t){t=se(t);const n=se(this),{has:l,get:r}=sr(n);let i=l.call(n,e);i||(e=se(e),i=l.call(n,e));const a=r.call(n,e);return n.set(e,t),i?Kt(t,a)&&xt(n,"set",e,t):xt(n,"add",e,t),this}function La(e){const t=se(this),{has:n,get:l}=sr(t);let r=n.call(t,e);r||(e=se(e),r=n.call(t,e)),l&&l.call(t,e);const i=t.delete(e);return r&&xt(t,"delete",e,void 0),i}function Ta(){const e=se(this),t=e.size!==0,n=e.clear();return t&&xt(e,"clear",void 0,void 0),n}function Ol(e,t){return function(l,r){const i=this,a=i.__v_raw,s=se(a),c=t?Ii:e?Ri:tl;return!e&&Ke(s,"iterate",sn),a.forEach((u,d)=>l.call(r,c(u),c(d),i))}}function Rl(e,t,n){return function(...l){const r=this.__v_raw,i=se(r),a=Gn(i),s=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,u=r[e](...l),d=n?Ii:t?Ri:tl;return!t&&Ke(i,"iterate",c?ei:sn),{next(){const{value:p,done:f}=u.next();return f?{value:p,done:f}:{value:s?[d(p[0]),d(p[1])]:d(p),done:f}},[Symbol.iterator](){return this}}}}function Vt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function jd(){const e={get(i){return Pl(this,i)},get size(){return xl(this)},has:Il,add:wa,set:Da,delete:La,clear:Ta,forEach:Ol(!1,!1)},t={get(i){return Pl(this,i,!1,!0)},get size(){return xl(this)},has:Il,add:wa,set:Da,delete:La,clear:Ta,forEach:Ol(!1,!0)},n={get(i){return Pl(this,i,!0)},get size(){return xl(this,!0)},has(i){return Il.call(this,i,!0)},add:Vt("add"),set:Vt("set"),delete:Vt("delete"),clear:Vt("clear"),forEach:Ol(!0,!1)},l={get(i){return Pl(this,i,!0,!0)},get size(){return xl(this,!0)},has(i){return Il.call(this,i,!0)},add:Vt("add"),set:Vt("set"),delete:Vt("delete"),clear:Vt("clear"),forEach:Ol(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Rl(i,!1,!1),n[i]=Rl(i,!0,!1),t[i]=Rl(i,!1,!0),l[i]=Rl(i,!0,!0)}),[e,n,t,l]}const[Hd,zd,qd,Gd]=jd();function xi(e,t){const n=t?e?Gd:qd:e?zd:Hd;return(l,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?l:Reflect.get(de(n,r)&&r in l?n:l,r,i)}const Ud={get:xi(!1,!1)},Wd={get:xi(!1,!0)},Jd={get:xi(!0,!1)},rs=new WeakMap,is=new WeakMap,as=new WeakMap,Kd=new WeakMap;function Yd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qd(e){return e.__v_skip||!Object.isExtensible(e)?0:Yd(Ed(e))}function hl(e){return Tn(e)?e:Oi(e,!1,Md,Ud,rs)}function os(e){return Oi(e,!1,Nd,Wd,is)}function Rt(e){return Oi(e,!0,$d,Jd,as)}function Oi(e,t,n,l,r){if(!ke(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const a=Qd(e);if(a===0)return e;const s=new Proxy(e,a===2?l:n);return r.set(e,s),s}function An(e){return Tn(e)?An(e.__v_raw):!!(e&&e.__v_isReactive)}function Tn(e){return!!(e&&e.__v_isReadonly)}function Kl(e){return!!(e&&e.__v_isShallow)}function ss(e){return An(e)||Tn(e)}function se(e){const t=e&&e.__v_raw;return t?se(t):e}function cs(e){return Wl(e,"__v_skip",!0),e}const tl=e=>ke(e)?hl(e):e,Ri=e=>ke(e)?Rt(e):e;class us{constructor(t,n,l,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ci(()=>t(this._value),()=>Wn(this,1),()=>this.dep&&Zo(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=l}get value(){const t=se(this);return(!t._cacheable||t.effect.dirty)&&Kt(t._value,t._value=t.effect.run())&&Wn(t,2),Si(t),t.effect._dirtyLevel>=1&&Wn(t,1),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Xd(e,t,n=!1){let l,r;const i=re(e);return i?(l=e,r=it):(l=e.get,r=e.set),new us(l,r,i||!r,n)}function Si(e){Wt&&on&&(e=se(e),Qo(on,e.dep||(e.dep=es(()=>e.dep=void 0,e instanceof us?e:void 0))))}function Wn(e,t=2,n){e=se(e);const l=e.dep;l&&Xo(l,t)}function Ne(e){return!!(e&&e.__v_isRef===!0)}function X(e){return ds(e,!1)}function Se(e){return ds(e,!0)}function ds(e,t){return Ne(e)?e:new Zd(e,t)}class Zd{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:se(t),this._value=n?t:tl(t)}get value(){return Si(this),this._value}set value(t){const n=this.__v_isShallow||Kl(t)||Tn(t);t=n?t:se(t),Kt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:tl(t),Wn(this,2))}}function vt(e){return Ne(e)?e.value:e}const ep={get:(e,t,n)=>vt(Reflect.get(e,t,n)),set:(e,t,n,l)=>{const r=e[t];return Ne(r)&&!Ne(n)?(r.value=n,!0):Reflect.set(e,t,n,l)}};function ps(e){return An(e)?e:new Proxy(e,ep)}class tp{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:l}=t(()=>Si(this),()=>Wn(this));this._get=n,this._set=l}get value(){return this._get()}set value(t){this._set(t)}}function hs(e){return new tp(e)}class np{constructor(t,n,l){this._object=t,this._key=n,this._defaultValue=l,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Od(se(this._object),this._key)}}class lp{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Fn(e,t,n){return Ne(e)?e:re(e)?new lp(e):ke(e)&&arguments.length>1?rp(e,t,n):X(e)}function rp(e,t,n){const l=e[t];return Ne(l)?l:new np(e,t,n)}/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Jt(e,t,n,l){let r;try{r=l?e(...l):e()}catch(i){fl(i,t,n)}return r}function ot(e,t,n,l){if(re(e)){const i=Jt(e,t,n,l);return i&&Go(i)&&i.catch(a=>{fl(a,t,n)}),i}const r=[];for(let i=0;i<e.length;i++)r.push(ot(e[i],t,n,l));return r}function fl(e,t,n,l=!0){const r=t?t.vnode:null;if(t){let i=t.parent;const a=t.proxy,s=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,a,s)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){Jt(c,null,10,[e,a,s]);return}}ip(e,n,r,l)}function ip(e,t,n,l=!0){console.error(e)}let nl=!1,ti=!1;const je=[];let Bt=0;const yn=[];let Ht=null,ln=0;const fs=Promise.resolve();let Fi=null;function dn(e){const t=Fi||fs;return e?t.then(this?e.bind(this):e):t}function ap(e){let t=Bt+1,n=je.length;for(;t<n;){const l=t+n>>>1,r=je[l],i=ll(r);i<e||i===e&&r.pre?t=l+1:n=l}return t}function cr(e){(!je.length||!je.includes(e,nl&&e.allowRecurse?Bt+1:Bt))&&(e.id==null?je.push(e):je.splice(ap(e.id),0,e),vs())}function vs(){!nl&&!ti&&(ti=!0,Fi=fs.then(ms))}function op(e){const t=je.indexOf(e);t>Bt&&je.splice(t,1)}function sp(e){ee(e)?yn.push(...e):(!Ht||!Ht.includes(e,e.allowRecurse?ln+1:ln))&&yn.push(e),vs()}function Ca(e,t,n=nl?Bt+1:0){for(;n<je.length;n++){const l=je[n];if(l&&l.pre){if(e&&l.id!==e.uid)continue;je.splice(n,1),n--,l()}}}function Yl(e){if(yn.length){const t=[...new Set(yn)].sort((n,l)=>ll(n)-ll(l));if(yn.length=0,Ht){Ht.push(...t);return}for(Ht=t,ln=0;ln<Ht.length;ln++)Ht[ln]();Ht=null,ln=0}}const ll=e=>e.id==null?1/0:e.id,cp=(e,t)=>{const n=ll(e)-ll(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ms(e){ti=!1,nl=!0,je.sort(cp);try{for(Bt=0;Bt<je.length;Bt++){const t=je[Bt];t&&t.active!==!1&&Jt(t,null,14)}}finally{Bt=0,je.length=0,Yl(),nl=!1,Fi=null,(je.length||yn.length)&&ms()}}function up(e,t,...n){if(e.isUnmounted)return;const l=e.vnode.props||Te;let r=n;const i=t.startsWith("update:"),a=i&&t.slice(7);if(a&&a in l){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:p,trim:f}=l[d]||Te;f&&(r=n.map(v=>ie(v)?v.trim():v)),p&&(r=n.map(Ad))}let s,c=l[s=Dr(t)]||l[s=Dr(ut(t))];!c&&i&&(c=l[s=Dr(Sn(t))]),c&&ot(c,e,6,r);const u=l[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,ot(u,e,6,r)}}function Es(e,t,n=!1){const l=t.emitsCache,r=l.get(e);if(r!==void 0)return r;const i=e.emits;let a={},s=!1;if(!re(e)){const c=u=>{const d=Es(u,t,!0);d&&(s=!0,Re(a,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!s?(ke(e)&&l.set(e,null),null):(ee(i)?i.forEach(c=>a[c]=null):Re(a,i),ke(e)&&l.set(e,a),a)}function ur(e,t){return!e||!dl(t)?!1:(t=t.slice(2).replace(/Once$/,""),de(e,t[0].toLowerCase()+t.slice(1))||de(e,Sn(t))||de(e,t))}let at=null,gs=null;function Ql(e){const t=at;return at=e,gs=e&&e.type.__scopeId||null,t}function dp(e,t=at,n){if(!t||e._n)return e;const l=(...r)=>{l._d&&Na(-1);const i=Ql(t);let a;try{a=e(...r)}finally{Ql(i),l._d&&Na(1)}return a};return l._n=!0,l._c=!0,l._d=!0,l}function Tr(e){const{type:t,vnode:n,proxy:l,withProxy:r,props:i,propsOptions:[a],slots:s,attrs:c,emit:u,render:d,renderCache:p,data:f,setupState:v,ctx:g,inheritAttrs:B}=e;let y,A;const T=Ql(e);try{if(n.shapeFlag&4){const C=r||l,M=C;y=ft(d.call(M,C,p,i,v,f,g)),A=c}else{const C=t;y=ft(C.length>1?C(i,{attrs:c,slots:s,emit:u}):C(i,null)),A=t.props?c:pp(c)}}catch(C){Qn.length=0,fl(C,e,1),y=Pe(ct)}let _=y;if(A&&B!==!1){const C=Object.keys(A),{shapeFlag:M}=_;C.length&&M&7&&(a&&C.some(Bi)&&(A=hp(A,a)),_=Yt(_,A))}return n.dirs&&(_=Yt(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),y=_,Ql(T),y}const pp=e=>{let t;for(const n in e)(n==="class"||n==="style"||dl(n))&&((t||(t={}))[n]=e[n]);return t},hp=(e,t)=>{const n={};for(const l in e)(!Bi(l)||!(l.slice(9)in t))&&(n[l]=e[l]);return n};function fp(e,t,n){const{props:l,children:r,component:i}=e,{props:a,children:s,patchFlag:c}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return l?ka(l,a,u):!!a;if(c&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const f=d[p];if(a[f]!==l[f]&&!ur(u,f))return!0}}}else return(r||s)&&(!s||!s.$stable)?!0:l===a?!1:l?a?ka(l,a,u):!0:!!a;return!1}function ka(e,t,n){const l=Object.keys(t);if(l.length!==Object.keys(e).length)return!0;for(let r=0;r<l.length;r++){const i=l[r];if(t[i]!==e[i]&&!ur(n,i))return!0}return!1}function vp({vnode:e,parent:t},n){for(;t;){const l=t.subTree;if(l.suspense&&l.suspense.activeBranch===e&&(l.el=e.el),l===e)(e=t.vnode).el=n,t=t.parent;else break}}const bs="components";function st(e,t){return Ep(bs,e,!0,t)||e}const mp=Symbol.for("v-ndc");function Ep(e,t,n=!0,l=!1){const r=at||$e;if(r){const i=r.type;if(e===bs){const s=p1(i,!1);if(s&&(s===t||s===ut(t)||s===pl(ut(t))))return i}const a=Pa(r[e]||i[e],t)||Pa(r.appContext[e],t);return!a&&l?i:a}}function Pa(e,t){return e&&(e[t]||e[ut(t)]||e[pl(ut(t))])}const gp=e=>e.__isSuspense;function _s(e,t){t&&t.pendingBranch?ee(e)?t.effects.push(...e):t.effects.push(e):sp(e)}const bp=Symbol.for("v-scx"),_p=()=>ve(bp);function Vi(e,t){return Mi(e,null,t)}const Sl={};function fe(e,t,n){return Mi(e,t,n)}function Mi(e,t,{immediate:n,deep:l,flush:r,once:i,onTrack:a,onTrigger:s}=Te){if(t&&i){const L=t;t=(...F)=>{L(...F),M()}}const c=$e,u=L=>l===!0?L:En(L,l===!1?1:void 0);let d,p=!1,f=!1;if(Ne(e)?(d=()=>e.value,p=Kl(e)):An(e)?(d=()=>u(e),p=!0):ee(e)?(f=!0,p=e.some(L=>An(L)||Kl(L)),d=()=>e.map(L=>{if(Ne(L))return L.value;if(An(L))return u(L);if(re(L))return Jt(L,c,2)})):re(e)?t?d=()=>Jt(e,c,2):d=()=>(v&&v(),ot(e,c,3,[g])):d=it,t&&l){const L=d;d=()=>En(L())}let v,g=L=>{v=_.onStop=()=>{Jt(L,c,4),v=_.onStop=void 0}},B;if(gl)if(g=it,t?n&&ot(t,c,3,[d(),f?[]:void 0,g]):d(),r==="sync"){const L=_p();B=L.__watcherHandles||(L.__watcherHandles=[])}else return it;let y=f?new Array(e.length).fill(Sl):Sl;const A=()=>{if(!(!_.active||!_.dirty))if(t){const L=_.run();(l||p||(f?L.some((F,O)=>Kt(F,y[O])):Kt(L,y)))&&(v&&v(),ot(t,c,3,[L,y===Sl?void 0:f&&y[0]===Sl?[]:y,g]),y=L)}else _.run()};A.allowRecurse=!!t;let T;r==="sync"?T=A:r==="post"?T=()=>We(A,c&&c.suspense):(A.pre=!0,c&&(A.id=c.uid),T=()=>cr(A));const _=new Ci(d,it,T),C=Jo(),M=()=>{_.stop(),C&&wi(C.effects,_)};return t?n?A():y=_.run():r==="post"?We(_.run.bind(_),c&&c.suspense):_.run(),B&&B.push(M),M}function Ap(e,t,n){const l=this.proxy,r=ie(e)?e.includes(".")?As(l,e):()=>l[e]:e.bind(l,l);let i;re(t)?i=t:(i=t.handler,n=t);const a=El(this),s=Mi(r,i.bind(l),n);return a(),s}function As(e,t){const n=t.split(".");return()=>{let l=e;for(let r=0;r<n.length&&l;r++)l=l[n[r]];return l}}function En(e,t,n=0,l){if(!ke(e)||e.__v_skip)return e;if(t&&t>0){if(n>=t)return e;n++}if(l=l||new Set,l.has(e))return e;if(l.add(e),Ne(e))En(e.value,t,n,l);else if(ee(e))for(let r=0;r<e.length;r++)En(e[r],t,n,l);else if(vd(e)||Gn(e))e.forEach(r=>{En(r,t,n,l)});else if(gd(e))for(const r in e)En(e[r],t,n,l);return e}function yt(e,t,n,l){const r=e.dirs,i=t&&t.dirs;for(let a=0;a<r.length;a++){const s=r[a];i&&(s.oldValue=i[a].value);let c=s.dir[l];c&&(cn(),ot(c,n,8,[e.el,s,e,t]),un())}}const zt=Symbol("_leaveCb"),Fl=Symbol("_enterCb");function ys(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return _e(()=>{e.isMounted=!0}),Ni(()=>{e.isUnmounting=!0}),e}const nt=[Function,Array],Bs={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nt,onEnter:nt,onAfterEnter:nt,onEnterCancelled:nt,onBeforeLeave:nt,onLeave:nt,onAfterLeave:nt,onLeaveCancelled:nt,onBeforeAppear:nt,onAppear:nt,onAfterAppear:nt,onAppearCancelled:nt},yp={name:"BaseTransition",props:Bs,setup(e,{slots:t}){const n=Vn(),l=ys();let r;return()=>{const i=t.default&&$i(t.default(),!0);if(!i||!i.length)return;let a=i[0];if(i.length>1){for(const B of i)if(B.type!==ct){a=B;break}}const s=se(e),{mode:c}=s;if(l.isLeaving)return Cr(a);const u=Ia(a);if(!u)return Cr(a);const d=rl(u,s,l,n);il(u,d);const p=n.subTree,f=p&&Ia(p);let v=!1;const{getTransitionKey:g}=u.type;if(g){const B=g();r===void 0?r=B:B!==r&&(r=B,v=!0)}if(f&&f.type!==ct&&(!rn(u,f)||v)){const B=rl(f,s,l,n);if(il(f,B),c==="out-in")return l.isLeaving=!0,B.afterLeave=()=>{l.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Cr(a);c==="in-out"&&u.type!==ct&&(B.delayLeave=(y,A,T)=>{const _=ws(l,f);_[String(f.key)]=f,y[zt]=()=>{A(),y[zt]=void 0,delete d.delayedLeave},d.delayedLeave=T})}return a}}},Bp=yp;function ws(e,t){const{leavingVNodes:n}=e;let l=n.get(t.type);return l||(l=Object.create(null),n.set(t.type,l)),l}function rl(e,t,n,l){const{appear:r,mode:i,persisted:a=!1,onBeforeEnter:s,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:p,onLeave:f,onAfterLeave:v,onLeaveCancelled:g,onBeforeAppear:B,onAppear:y,onAfterAppear:A,onAppearCancelled:T}=t,_=String(e.key),C=ws(n,e),M=(O,R)=>{O&&ot(O,l,9,R)},L=(O,R)=>{const j=R[1];M(O,R),ee(O)?O.every(Y=>Y.length<=1)&&j():O.length<=1&&j()},F={mode:i,persisted:a,beforeEnter(O){let R=s;if(!n.isMounted)if(r)R=B||s;else return;O[zt]&&O[zt](!0);const j=C[_];j&&rn(e,j)&&j.el[zt]&&j.el[zt](),M(R,[O])},enter(O){let R=c,j=u,Y=d;if(!n.isMounted)if(r)R=y||c,j=A||u,Y=T||d;else return;let H=!1;const te=O[Fl]=Ce=>{H||(H=!0,Ce?M(Y,[O]):M(j,[O]),F.delayedLeave&&F.delayedLeave(),O[Fl]=void 0)};R?L(R,[O,te]):te()},leave(O,R){const j=String(e.key);if(O[Fl]&&O[Fl](!0),n.isUnmounting)return R();M(p,[O]);let Y=!1;const H=O[zt]=te=>{Y||(Y=!0,R(),te?M(g,[O]):M(v,[O]),O[zt]=void 0,C[j]===e&&delete C[j])};C[j]=e,f?L(f,[O,H]):H()},clone(O){return rl(O,t,n,l)}};return F}function Cr(e){if(vl(e))return e=Yt(e),e.children=null,e}function Ia(e){return vl(e)?e.children?e.children[0]:void 0:e}function il(e,t){e.shapeFlag&6&&e.component?il(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function $i(e,t=!1,n){let l=[],r=0;for(let i=0;i<e.length;i++){let a=e[i];const s=n==null?a.key:String(n)+String(a.key!=null?a.key:i);a.type===Ze?(a.patchFlag&128&&r++,l=l.concat($i(a.children,t,s))):(t||a.type!==ct)&&l.push(s!=null?Yt(a,{key:s}):a)}if(r>1)for(let i=0;i<l.length;i++)l[i].patchFlag=-2;return l}/*! #__NO_SIDE_EFFECTS__ */function $(e,t){return re(e)?Re({name:e.name},t,{setup:e}):e}const Jn=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function b(e){re(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:l,delay:r=200,timeout:i,suspensible:a=!0,onError:s}=e;let c=null,u,d=0;const p=()=>(d++,c=null,f()),f=()=>{let v;return c||(v=c=t().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),s)return new Promise((B,y)=>{s(g,()=>B(p()),()=>y(g),d+1)});throw g}).then(g=>v!==c&&c?c:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),u=g,g)))};return $({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return u},setup(){const v=$e;if(u)return()=>kr(u,v);const g=T=>{c=null,fl(T,v,13,!l)};if(a&&v.suspense||gl)return f().then(T=>()=>kr(T,v)).catch(T=>(g(T),()=>l?Pe(l,{error:T}):null));const B=X(!1),y=X(),A=X(!!r);return r&&setTimeout(()=>{A.value=!1},r),i!=null&&setTimeout(()=>{if(!B.value&&!y.value){const T=new Error(`Async component timed out after ${i}ms.`);g(T),y.value=T}},i),f().then(()=>{B.value=!0,v.parent&&vl(v.parent.vnode)&&(v.parent.effect.dirty=!0,cr(v.parent.update))}).catch(T=>{g(T),y.value=T}),()=>{if(B.value&&u)return kr(u,v);if(y.value&&l)return Pe(l,{error:y.value});if(n&&!A.value)return Pe(n)}}})}function kr(e,t){const{ref:n,props:l,children:r,ce:i}=t.vnode,a=Pe(e,l,r);return a.ref=n,a.ce=i,delete t.vnode.ce,a}const vl=e=>e.type.__isKeepAlive;function wp(e,t){Ds(e,"a",t)}function Dp(e,t){Ds(e,"da",t)}function Ds(e,t,n=$e){const l=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(dr(t,l,n),n){let r=n.parent;for(;r&&r.parent;)vl(r.parent.vnode)&&Lp(l,t,n,r),r=r.parent}}function Lp(e,t,n,l){const r=dr(t,e,l,!0);ml(()=>{wi(l[t],r)},n)}function dr(e,t,n=$e,l=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;cn();const s=El(n),c=ot(t,n,e,a);return s(),un(),c});return l?r.unshift(i):r.push(i),i}}const St=e=>(t,n=$e)=>(!gl||e==="sp")&&dr(e,(...l)=>t(...l),n),Tp=St("bm"),_e=St("m"),Cp=St("bu"),Ls=St("u"),Ni=St("bum"),ml=St("um"),kp=St("sp"),Pp=St("rtg"),Ip=St("rtc");function xp(e,t=$e){dr("ec",e,t)}const ni=e=>e?js(e)?qi(e)||e.proxy:ni(e.parent):null,Kn=Re(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ni(e.parent),$root:e=>ni(e.root),$emit:e=>e.emit,$options:e=>ji(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,cr(e.update)}),$nextTick:e=>e.n||(e.n=dn.bind(e.proxy)),$watch:e=>Ap.bind(e)}),Pr=(e,t)=>e!==Te&&!e.__isScriptSetup&&de(e,t),Op={get({_:e},t){const{ctx:n,setupState:l,data:r,props:i,accessCache:a,type:s,appContext:c}=e;let u;if(t[0]!=="$"){const v=a[t];if(v!==void 0)switch(v){case 1:return l[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(Pr(l,t))return a[t]=1,l[t];if(r!==Te&&de(r,t))return a[t]=2,r[t];if((u=e.propsOptions[0])&&de(u,t))return a[t]=3,i[t];if(n!==Te&&de(n,t))return a[t]=4,n[t];li&&(a[t]=0)}}const d=Kn[t];let p,f;if(d)return t==="$attrs"&&Ke(e,"get",t),d(e);if((p=s.__cssModules)&&(p=p[t]))return p;if(n!==Te&&de(n,t))return a[t]=4,n[t];if(f=c.config.globalProperties,de(f,t))return f[t]},set({_:e},t,n){const{data:l,setupState:r,ctx:i}=e;return Pr(r,t)?(r[t]=n,!0):l!==Te&&de(l,t)?(l[t]=n,!0):de(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:l,appContext:r,propsOptions:i}},a){let s;return!!n[a]||e!==Te&&de(e,a)||Pr(t,a)||(s=i[0])&&de(s,a)||de(l,a)||de(Kn,a)||de(r.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:de(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function xa(e){return ee(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let li=!0;function Rp(e){const t=ji(e),n=e.proxy,l=e.ctx;li=!1,t.beforeCreate&&Oa(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:a,watch:s,provide:c,inject:u,created:d,beforeMount:p,mounted:f,beforeUpdate:v,updated:g,activated:B,deactivated:y,beforeDestroy:A,beforeUnmount:T,destroyed:_,unmounted:C,render:M,renderTracked:L,renderTriggered:F,errorCaptured:O,serverPrefetch:R,expose:j,inheritAttrs:Y,components:H,directives:te,filters:Ce}=t;if(u&&Sp(u,l,null),a)for(const ne in a){const J=a[ne];re(J)&&(l[ne]=J.bind(n))}if(r){const ne=r.call(n,n);ke(ne)&&(e.data=hl(ne))}if(li=!0,i)for(const ne in i){const J=i[ne],xe=re(J)?J.bind(n,n):re(J.get)?J.get.bind(n,n):it,bt=!re(J)&&re(J.set)?J.set.bind(n):it,tt=w({get:xe,set:bt});Object.defineProperty(l,ne,{enumerable:!0,configurable:!0,get:()=>tt.value,set:Ve=>tt.value=Ve})}if(s)for(const ne in s)Ts(s[ne],l,n,ne);if(c){const ne=re(c)?c.call(n):c;Reflect.ownKeys(ne).forEach(J=>{Et(J,ne[J])})}d&&Oa(d,e,"c");function W(ne,J){ee(J)?J.forEach(xe=>ne(xe.bind(n))):J&&ne(J.bind(n))}if(W(Tp,p),W(_e,f),W(Cp,v),W(Ls,g),W(wp,B),W(Dp,y),W(xp,O),W(Ip,L),W(Pp,F),W(Ni,T),W(ml,C),W(kp,R),ee(j))if(j.length){const ne=e.exposed||(e.exposed={});j.forEach(J=>{Object.defineProperty(ne,J,{get:()=>n[J],set:xe=>n[J]=xe})})}else e.exposed||(e.exposed={});M&&e.render===it&&(e.render=M),Y!=null&&(e.inheritAttrs=Y),H&&(e.components=H),te&&(e.directives=te)}function Sp(e,t,n=it){ee(e)&&(e=ri(e));for(const l in e){const r=e[l];let i;ke(r)?"default"in r?i=ve(r.from||l,r.default,!0):i=ve(r.from||l):i=ve(r),Ne(i)?Object.defineProperty(t,l,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[l]=i}}function Oa(e,t,n){ot(ee(e)?e.map(l=>l.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ts(e,t,n,l){const r=l.includes(".")?As(n,l):()=>n[l];if(ie(e)){const i=t[e];re(i)&&fe(r,i)}else if(re(e))fe(r,e.bind(n));else if(ke(e))if(ee(e))e.forEach(i=>Ts(i,t,n,l));else{const i=re(e.handler)?e.handler.bind(n):t[e.handler];re(i)&&fe(r,i,e)}}function ji(e){const t=e.type,{mixins:n,extends:l}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,s=i.get(t);let c;return s?c=s:!r.length&&!n&&!l?c=t:(c={},r.length&&r.forEach(u=>Xl(c,u,a,!0)),Xl(c,t,a)),ke(t)&&i.set(t,c),c}function Xl(e,t,n,l=!1){const{mixins:r,extends:i}=t;i&&Xl(e,i,n,!0),r&&r.forEach(a=>Xl(e,a,n,!0));for(const a in t)if(!(l&&a==="expose")){const s=Fp[a]||n&&n[a];e[a]=s?s(e[a],t[a]):t[a]}return e}const Fp={data:Ra,props:Sa,emits:Sa,methods:qn,computed:qn,beforeCreate:ze,created:ze,beforeMount:ze,mounted:ze,beforeUpdate:ze,updated:ze,beforeDestroy:ze,beforeUnmount:ze,destroyed:ze,unmounted:ze,activated:ze,deactivated:ze,errorCaptured:ze,serverPrefetch:ze,components:qn,directives:qn,watch:Mp,provide:Ra,inject:Vp};function Ra(e,t){return t?e?function(){return Re(re(e)?e.call(this,this):e,re(t)?t.call(this,this):t)}:t:e}function Vp(e,t){return qn(ri(e),ri(t))}function ri(e){if(ee(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ze(e,t){return e?[...new Set([].concat(e,t))]:t}function qn(e,t){return e?Re(Object.create(null),e,t):t}function Sa(e,t){return e?ee(e)&&ee(t)?[...new Set([...e,...t])]:Re(Object.create(null),xa(e),xa(t??{})):t}function Mp(e,t){if(!e)return t;if(!t)return e;const n=Re(Object.create(null),e);for(const l in t)n[l]=ze(e[l],t[l]);return n}function Cs(){return{app:null,config:{isNativeTag:hd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $p=0;function Np(e,t){return function(l,r=null){re(l)||(l=Re({},l)),r!=null&&!ke(r)&&(r=null);const i=Cs(),a=new WeakSet;let s=!1;const c=i.app={_uid:$p++,_component:l,_props:r,_container:null,_context:i,_instance:null,version:f1,get config(){return i.config},set config(u){},use(u,...d){return a.has(u)||(u&&re(u.install)?(a.add(u),u.install(c,...d)):re(u)&&(a.add(u),u(c,...d))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,d){return d?(i.components[u]=d,c):i.components[u]},directive(u,d){return d?(i.directives[u]=d,c):i.directives[u]},mount(u,d,p){if(!s){const f=Pe(l,r);return f.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&t?t(f,u):e(f,u,p),s=!0,c._container=u,u.__vue_app__=c,qi(f.component)||f.component.proxy}},unmount(){s&&(e(null,c._container),delete c._container.__vue_app__)},provide(u,d){return i.provides[u]=d,c},runWithContext(u){Zl=c;try{return u()}finally{Zl=null}}};return c}}let Zl=null;function Et(e,t){if($e){let n=$e.provides;const l=$e.parent&&$e.parent.provides;l===n&&(n=$e.provides=Object.create(l)),n[e]=t}}function ve(e,t,n=!1){const l=$e||at;if(l||Zl){const r=l?l.parent==null?l.vnode.appContext&&l.vnode.appContext.provides:l.parent.provides:Zl._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&re(t)?t.call(l&&l.proxy):t}}function jp(e,t,n,l=!1){const r={},i={};Wl(i,pr,1),e.propsDefaults=Object.create(null),ks(e,t,r,i);for(const a in e.propsOptions[0])a in r||(r[a]=void 0);n?e.props=l?r:os(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function Hp(e,t,n,l){const{props:r,attrs:i,vnode:{patchFlag:a}}=e,s=se(r),[c]=e.propsOptions;let u=!1;if((l||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let f=d[p];if(ur(e.emitsOptions,f))continue;const v=t[f];if(c)if(de(i,f))v!==i[f]&&(i[f]=v,u=!0);else{const g=ut(f);r[g]=ii(c,s,g,v,e,!1)}else v!==i[f]&&(i[f]=v,u=!0)}}}else{ks(e,t,r,i)&&(u=!0);let d;for(const p in s)(!t||!de(t,p)&&((d=Sn(p))===p||!de(t,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(r[p]=ii(c,s,p,void 0,e,!0)):delete r[p]);if(i!==s)for(const p in i)(!t||!de(t,p))&&(delete i[p],u=!0)}u&&xt(e,"set","$attrs")}function ks(e,t,n,l){const[r,i]=e.propsOptions;let a=!1,s;if(t)for(let c in t){if(Un(c))continue;const u=t[c];let d;r&&de(r,d=ut(c))?!i||!i.includes(d)?n[d]=u:(s||(s={}))[d]=u:ur(e.emitsOptions,c)||(!(c in l)||u!==l[c])&&(l[c]=u,a=!0)}if(i){const c=se(n),u=s||Te;for(let d=0;d<i.length;d++){const p=i[d];n[p]=ii(r,c,p,u[p],e,!de(u,p))}}return a}function ii(e,t,n,l,r,i){const a=e[n];if(a!=null){const s=de(a,"default");if(s&&l===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&re(c)){const{propsDefaults:u}=r;if(n in u)l=u[n];else{const d=El(r);l=u[n]=c.call(null,t),d()}}else l=c}a[0]&&(i&&!s?l=!1:a[1]&&(l===""||l===Sn(n))&&(l=!0))}return l}function Ps(e,t,n=!1){const l=t.propsCache,r=l.get(e);if(r)return r;const i=e.props,a={},s=[];let c=!1;if(!re(e)){const d=p=>{c=!0;const[f,v]=Ps(p,t,!0);Re(a,f),v&&s.push(...v)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!c)return ke(e)&&l.set(e,_n),_n;if(ee(i))for(let d=0;d<i.length;d++){const p=ut(i[d]);Fa(p)&&(a[p]=Te)}else if(i)for(const d in i){const p=ut(d);if(Fa(p)){const f=i[d],v=a[p]=ee(f)||re(f)?{type:f}:Re({},f);if(v){const g=$a(Boolean,v.type),B=$a(String,v.type);v[0]=g>-1,v[1]=B<0||g<B,(g>-1||de(v,"default"))&&s.push(p)}}}const u=[a,s];return ke(e)&&l.set(e,u),u}function Fa(e){return e[0]!=="$"}function Va(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ma(e,t){return Va(e)===Va(t)}function $a(e,t){return ee(t)?t.findIndex(n=>Ma(n,e)):re(t)&&Ma(t,e)?0:-1}const Is=e=>e[0]==="_"||e==="$stable",Hi=e=>ee(e)?e.map(ft):[ft(e)],zp=(e,t,n)=>{if(t._n)return t;const l=dp((...r)=>Hi(t(...r)),n);return l._c=!1,l},xs=(e,t,n)=>{const l=e._ctx;for(const r in e){if(Is(r))continue;const i=e[r];if(re(i))t[r]=zp(r,i,l);else if(i!=null){const a=Hi(i);t[r]=()=>a}}},Os=(e,t)=>{const n=Hi(t);e.slots.default=()=>n},qp=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=se(t),Wl(t,"_",n)):xs(t,e.slots={})}else e.slots={},t&&Os(e,t);Wl(e.slots,pr,1)},Gp=(e,t,n)=>{const{vnode:l,slots:r}=e;let i=!0,a=Te;if(l.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(Re(r,t),!n&&s===1&&delete r._):(i=!t.$stable,xs(t,r)),a=t}else t&&(Os(e,t),a={default:1});if(i)for(const s in r)!Is(s)&&a[s]==null&&delete r[s]};function er(e,t,n,l,r=!1){if(ee(e)){e.forEach((f,v)=>er(f,t&&(ee(t)?t[v]:t),n,l,r));return}if(Jn(l)&&!r)return;const i=l.shapeFlag&4?qi(l.component)||l.component.proxy:l.el,a=r?null:i,{i:s,r:c}=e,u=t&&t.r,d=s.refs===Te?s.refs={}:s.refs,p=s.setupState;if(u!=null&&u!==c&&(ie(u)?(d[u]=null,de(p,u)&&(p[u]=null)):Ne(u)&&(u.value=null)),re(c))Jt(c,s,12,[a,d]);else{const f=ie(c),v=Ne(c),g=e.f;if(f||v){const B=()=>{if(g){const y=f?de(p,c)?p[c]:d[c]:c.value;r?ee(y)&&wi(y,i):ee(y)?y.includes(i)||y.push(i):f?(d[c]=[i],de(p,c)&&(p[c]=d[c])):(c.value=[i],e.k&&(d[e.k]=c.value))}else f?(d[c]=a,de(p,c)&&(p[c]=a)):v&&(c.value=a,e.k&&(d[e.k]=a))};r||g?B():(B.id=-1,We(B,n))}}}let Mt=!1;const Up=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",Wp=e=>e.namespaceURI.includes("MathML"),Vl=e=>{if(Up(e))return"svg";if(Wp(e))return"mathml"},Ml=e=>e.nodeType===8;function Jp(e){const{mt:t,p:n,o:{patchProp:l,createText:r,nextSibling:i,parentNode:a,remove:s,insert:c,createComment:u}}=e,d=(_,C)=>{if(!C.hasChildNodes()){n(null,_,C),Yl(),C._vnode=_;return}Mt=!1,p(C.firstChild,_,null,null,null),Yl(),C._vnode=_,Mt&&console.error("Hydration completed but contains mismatches.")},p=(_,C,M,L,F,O=!1)=>{const R=Ml(_)&&_.data==="[",j=()=>B(_,C,M,L,F,R),{type:Y,ref:H,shapeFlag:te,patchFlag:Ce}=C;let De=_.nodeType;C.el=_,Ce===-2&&(O=!1,C.dynamicChildren=null);let W=null;switch(Y){case Cn:De!==3?C.children===""?(c(C.el=r(""),a(_),_),W=_):W=j():(_.data!==C.children&&(Mt=!0,_.data=C.children),W=i(_));break;case ct:T(_)?(W=i(_),A(C.el=_.content.firstChild,_,M)):De!==8||R?W=j():W=i(_);break;case Yn:if(R&&(_=i(_),De=_.nodeType),De===1||De===3){W=_;const ne=!C.children.length;for(let J=0;J<C.staticCount;J++)ne&&(C.children+=W.nodeType===1?W.outerHTML:W.data),J===C.staticCount-1&&(C.anchor=W),W=i(W);return R?i(W):W}else j();break;case Ze:R?W=g(_,C,M,L,F,O):W=j();break;default:if(te&1)(De!==1||C.type.toLowerCase()!==_.tagName.toLowerCase())&&!T(_)?W=j():W=f(_,C,M,L,F,O);else if(te&6){C.slotScopeIds=F;const ne=a(_);if(R?W=y(_):Ml(_)&&_.data==="teleport start"?W=y(_,_.data,"teleport end"):W=i(_),t(C,ne,null,M,L,Vl(ne),O),Jn(C)){let J;R?(J=Pe(Ze),J.anchor=W?W.previousSibling:ne.lastChild):J=_.nodeType===3?Ns(""):Pe("div"),J.el=_,C.component.subTree=J}}else te&64?De!==8?W=j():W=C.type.hydrate(_,C,M,L,F,O,e,v):te&128&&(W=C.type.hydrate(_,C,M,L,Vl(a(_)),F,O,e,p))}return H!=null&&er(H,null,L,C),W},f=(_,C,M,L,F,O)=>{O=O||!!C.dynamicChildren;const{type:R,props:j,patchFlag:Y,shapeFlag:H,dirs:te,transition:Ce}=C,De=R==="input"||R==="option";if(De||Y!==-1){te&&yt(C,null,M,"created");let W=!1;if(T(_)){W=Rs(L,Ce)&&M&&M.vnode.props&&M.vnode.props.appear;const J=_.content.firstChild;W&&Ce.beforeEnter(J),A(J,_,M),C.el=_=J}if(H&16&&!(j&&(j.innerHTML||j.textContent))){let J=v(_.firstChild,C,_,M,L,F,O);for(;J;){Mt=!0;const xe=J;J=J.nextSibling,s(xe)}}else H&8&&_.textContent!==C.children&&(Mt=!0,_.textContent=C.children);if(j)if(De||!O||Y&48)for(const J in j)(De&&(J.endsWith("value")||J==="indeterminate")||dl(J)&&!Un(J)||J[0]===".")&&l(_,J,null,j[J],void 0,void 0,M);else j.onClick&&l(_,"onClick",null,j.onClick,void 0,void 0,M);let ne;(ne=j&&j.onVnodeBeforeMount)&&lt(ne,M,C),te&&yt(C,null,M,"beforeMount"),((ne=j&&j.onVnodeMounted)||te||W)&&_s(()=>{ne&&lt(ne,M,C),W&&Ce.enter(_),te&&yt(C,null,M,"mounted")},L)}return _.nextSibling},v=(_,C,M,L,F,O,R)=>{R=R||!!C.dynamicChildren;const j=C.children,Y=j.length;for(let H=0;H<Y;H++){const te=R?j[H]:j[H]=ft(j[H]);if(_)_=p(_,te,L,F,O,R);else{if(te.type===Cn&&!te.children)continue;Mt=!0,n(null,te,M,null,L,F,Vl(M),O)}}return _},g=(_,C,M,L,F,O)=>{const{slotScopeIds:R}=C;R&&(F=F?F.concat(R):R);const j=a(_),Y=v(i(_),C,j,M,L,F,O);return Y&&Ml(Y)&&Y.data==="]"?i(C.anchor=Y):(Mt=!0,c(C.anchor=u("]"),j,Y),Y)},B=(_,C,M,L,F,O)=>{if(Mt=!0,C.el=null,O){const Y=y(_);for(;;){const H=i(_);if(H&&H!==Y)s(H);else break}}const R=i(_),j=a(_);return s(_),n(null,C,j,R,M,L,Vl(j),F),R},y=(_,C="[",M="]")=>{let L=0;for(;_;)if(_=i(_),_&&Ml(_)&&(_.data===C&&L++,_.data===M)){if(L===0)return i(_);L--}return _},A=(_,C,M)=>{const L=C.parentNode;L&&L.replaceChild(_,C);let F=M;for(;F;)F.vnode.el===C&&(F.vnode.el=F.subTree.el=_),F=F.parent},T=_=>_.nodeType===1&&_.tagName.toLowerCase()==="template";return[d,p]}const We=_s;function Kp(e){return Yp(e,Jp)}function Yp(e,t){const n=Uo();n.__VUE__=!0;const{insert:l,remove:r,patchProp:i,createElement:a,createText:s,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:f,setScopeId:v=it,insertStaticContent:g}=e,B=(m,E,D,I=null,P=null,V=null,q=void 0,S=null,N=!!E.dynamicChildren)=>{if(m===E)return;m&&!rn(m,E)&&(I=k(m),Ve(m,P,V,!0),m=null),E.patchFlag===-2&&(N=!1,E.dynamicChildren=null);const{type:x,ref:U,shapeFlag:Z}=E;switch(x){case Cn:y(m,E,D,I);break;case ct:A(m,E,D,I);break;case Yn:m==null&&T(E,D,I,q);break;case Ze:H(m,E,D,I,P,V,q,S,N);break;default:Z&1?M(m,E,D,I,P,V,q,S,N):Z&6?te(m,E,D,I,P,V,q,S,N):(Z&64||Z&128)&&x.process(m,E,D,I,P,V,q,S,N,K)}U!=null&&P&&er(U,m&&m.ref,V,E||m,!E)},y=(m,E,D,I)=>{if(m==null)l(E.el=s(E.children),D,I);else{const P=E.el=m.el;E.children!==m.children&&u(P,E.children)}},A=(m,E,D,I)=>{m==null?l(E.el=c(E.children||""),D,I):E.el=m.el},T=(m,E,D,I)=>{[m.el,m.anchor]=g(m.children,E,D,I,m.el,m.anchor)},_=({el:m,anchor:E},D,I)=>{let P;for(;m&&m!==E;)P=f(m),l(m,D,I),m=P;l(E,D,I)},C=({el:m,anchor:E})=>{let D;for(;m&&m!==E;)D=f(m),r(m),m=D;r(E)},M=(m,E,D,I,P,V,q,S,N)=>{E.type==="svg"?q="svg":E.type==="math"&&(q="mathml"),m==null?L(E,D,I,P,V,q,S,N):R(m,E,P,V,q,S,N)},L=(m,E,D,I,P,V,q,S)=>{let N,x;const{props:U,shapeFlag:Z,transition:Q,dirs:le}=m;if(N=m.el=a(m.type,V,U&&U.is,U),Z&8?d(N,m.children):Z&16&&O(m.children,N,null,I,P,Ir(m,V),q,S),le&&yt(m,null,I,"created"),F(N,m,m.scopeId,q,I),U){for(const ge in U)ge!=="value"&&!Un(ge)&&i(N,ge,null,U[ge],V,m.children,I,P,Oe);"value"in U&&i(N,"value",null,U.value,V),(x=U.onVnodeBeforeMount)&&lt(x,I,m)}le&&yt(m,null,I,"beforeMount");const ae=Rs(P,Q);ae&&Q.beforeEnter(N),l(N,E,D),((x=U&&U.onVnodeMounted)||ae||le)&&We(()=>{x&&lt(x,I,m),ae&&Q.enter(N),le&&yt(m,null,I,"mounted")},P)},F=(m,E,D,I,P)=>{if(D&&v(m,D),I)for(let V=0;V<I.length;V++)v(m,I[V]);if(P){let V=P.subTree;if(E===V){const q=P.vnode;F(m,q,q.scopeId,q.slotScopeIds,P.parent)}}},O=(m,E,D,I,P,V,q,S,N=0)=>{for(let x=N;x<m.length;x++){const U=m[x]=S?qt(m[x]):ft(m[x]);B(null,U,E,D,I,P,V,q,S)}},R=(m,E,D,I,P,V,q)=>{const S=E.el=m.el;let{patchFlag:N,dynamicChildren:x,dirs:U}=E;N|=m.patchFlag&16;const Z=m.props||Te,Q=E.props||Te;let le;if(D&&tn(D,!1),(le=Q.onVnodeBeforeUpdate)&&lt(le,D,E,m),U&&yt(E,m,D,"beforeUpdate"),D&&tn(D,!0),x?j(m.dynamicChildren,x,S,D,I,Ir(E,P),V):q||J(m,E,S,null,D,I,Ir(E,P),V,!1),N>0){if(N&16)Y(S,E,Z,Q,D,I,P);else if(N&2&&Z.class!==Q.class&&i(S,"class",null,Q.class,P),N&4&&i(S,"style",Z.style,Q.style,P),N&8){const ae=E.dynamicProps;for(let ge=0;ge<ae.length;ge++){const Le=ae[ge],Me=Z[Le],pt=Q[Le];(pt!==Me||Le==="value")&&i(S,Le,Me,pt,P,m.children,D,I,Oe)}}N&1&&m.children!==E.children&&d(S,E.children)}else!q&&x==null&&Y(S,E,Z,Q,D,I,P);((le=Q.onVnodeUpdated)||U)&&We(()=>{le&&lt(le,D,E,m),U&&yt(E,m,D,"updated")},I)},j=(m,E,D,I,P,V,q)=>{for(let S=0;S<E.length;S++){const N=m[S],x=E[S],U=N.el&&(N.type===Ze||!rn(N,x)||N.shapeFlag&70)?p(N.el):D;B(N,x,U,null,I,P,V,q,!0)}},Y=(m,E,D,I,P,V,q)=>{if(D!==I){if(D!==Te)for(const S in D)!Un(S)&&!(S in I)&&i(m,S,D[S],null,q,E.children,P,V,Oe);for(const S in I){if(Un(S))continue;const N=I[S],x=D[S];N!==x&&S!=="value"&&i(m,S,x,N,q,E.children,P,V,Oe)}"value"in I&&i(m,"value",D.value,I.value,q)}},H=(m,E,D,I,P,V,q,S,N)=>{const x=E.el=m?m.el:s(""),U=E.anchor=m?m.anchor:s("");let{patchFlag:Z,dynamicChildren:Q,slotScopeIds:le}=E;le&&(S=S?S.concat(le):le),m==null?(l(x,D,I),l(U,D,I),O(E.children||[],D,U,P,V,q,S,N)):Z>0&&Z&64&&Q&&m.dynamicChildren?(j(m.dynamicChildren,Q,D,P,V,q,S),(E.key!=null||P&&E===P.subTree)&&Ss(m,E,!0)):J(m,E,D,U,P,V,q,S,N)},te=(m,E,D,I,P,V,q,S,N)=>{E.slotScopeIds=S,m==null?E.shapeFlag&512?P.ctx.activate(E,D,I,q,N):Ce(E,D,I,P,V,q,N):De(m,E,N)},Ce=(m,E,D,I,P,V,q)=>{const S=m.component=o1(m,I,P);if(vl(m)&&(S.ctx.renderer=K),s1(S),S.asyncDep){if(P&&P.registerDep(S,W),!m.el){const N=S.subTree=Pe(ct);A(null,N,E,D)}}else W(S,m,E,D,P,V,q)},De=(m,E,D)=>{const I=E.component=m.component;if(fp(m,E,D))if(I.asyncDep&&!I.asyncResolved){ne(I,E,D);return}else I.next=E,op(I.update),I.effect.dirty=!0,I.update();else E.el=m.el,I.vnode=E},W=(m,E,D,I,P,V,q)=>{const S=()=>{if(m.isMounted){let{next:U,bu:Z,u:Q,parent:le,vnode:ae}=m;{const vn=Fs(m);if(vn){U&&(U.el=ae.el,ne(m,U,q)),vn.asyncDep.then(()=>{m.isUnmounted||S()});return}}let ge=U,Le;tn(m,!1),U?(U.el=ae.el,ne(m,U,q)):U=ae,Z&&Lr(Z),(Le=U.props&&U.props.onVnodeBeforeUpdate)&&lt(Le,le,U,ae),tn(m,!0);const Me=Tr(m),pt=m.subTree;m.subTree=Me,B(pt,Me,p(pt.el),k(pt),m,P,V),U.el=Me.el,ge===null&&vp(m,Me.el),Q&&We(Q,P),(Le=U.props&&U.props.onVnodeUpdated)&&We(()=>lt(Le,le,U,ae),P)}else{let U;const{el:Z,props:Q}=E,{bm:le,m:ae,parent:ge}=m,Le=Jn(E);if(tn(m,!1),le&&Lr(le),!Le&&(U=Q&&Q.onVnodeBeforeMount)&&lt(U,ge,E),tn(m,!0),Z&&Ae){const Me=()=>{m.subTree=Tr(m),Ae(Z,m.subTree,m,P,null)};Le?E.type.__asyncLoader().then(()=>!m.isUnmounted&&Me()):Me()}else{const Me=m.subTree=Tr(m);B(null,Me,D,I,m,P,V),E.el=Me.el}if(ae&&We(ae,P),!Le&&(U=Q&&Q.onVnodeMounted)){const Me=E;We(()=>lt(U,ge,Me),P)}(E.shapeFlag&256||ge&&Jn(ge.vnode)&&ge.vnode.shapeFlag&256)&&m.a&&We(m.a,P),m.isMounted=!0,E=D=I=null}},N=m.effect=new Ci(S,it,()=>cr(x),m.scope),x=m.update=()=>{N.dirty&&N.run()};x.id=m.uid,tn(m,!0),x()},ne=(m,E,D)=>{E.component=m;const I=m.vnode.props;m.vnode=E,m.next=null,Hp(m,E.props,I,D),Gp(m,E.children,D),cn(),Ca(m),un()},J=(m,E,D,I,P,V,q,S,N=!1)=>{const x=m&&m.children,U=m?m.shapeFlag:0,Z=E.children,{patchFlag:Q,shapeFlag:le}=E;if(Q>0){if(Q&128){bt(x,Z,D,I,P,V,q,S,N);return}else if(Q&256){xe(x,Z,D,I,P,V,q,S,N);return}}le&8?(U&16&&Oe(x,P,V),Z!==x&&d(D,Z)):U&16?le&16?bt(x,Z,D,I,P,V,q,S,N):Oe(x,P,V,!0):(U&8&&d(D,""),le&16&&O(Z,D,I,P,V,q,S,N))},xe=(m,E,D,I,P,V,q,S,N)=>{m=m||_n,E=E||_n;const x=m.length,U=E.length,Z=Math.min(x,U);let Q;for(Q=0;Q<Z;Q++){const le=E[Q]=N?qt(E[Q]):ft(E[Q]);B(m[Q],le,D,null,P,V,q,S,N)}x>U?Oe(m,P,V,!0,!1,Z):O(E,D,I,P,V,q,S,N,Z)},bt=(m,E,D,I,P,V,q,S,N)=>{let x=0;const U=E.length;let Z=m.length-1,Q=U-1;for(;x<=Z&&x<=Q;){const le=m[x],ae=E[x]=N?qt(E[x]):ft(E[x]);if(rn(le,ae))B(le,ae,D,null,P,V,q,S,N);else break;x++}for(;x<=Z&&x<=Q;){const le=m[Z],ae=E[Q]=N?qt(E[Q]):ft(E[Q]);if(rn(le,ae))B(le,ae,D,null,P,V,q,S,N);else break;Z--,Q--}if(x>Z){if(x<=Q){const le=Q+1,ae=le<U?E[le].el:I;for(;x<=Q;)B(null,E[x]=N?qt(E[x]):ft(E[x]),D,ae,P,V,q,S,N),x++}}else if(x>Q)for(;x<=Z;)Ve(m[x],P,V,!0),x++;else{const le=x,ae=x,ge=new Map;for(x=ae;x<=Q;x++){const Qe=E[x]=N?qt(E[x]):ft(E[x]);Qe.key!=null&&ge.set(Qe.key,x)}let Le,Me=0;const pt=Q-ae+1;let vn=!1,Ea=0;const Nn=new Array(pt);for(x=0;x<pt;x++)Nn[x]=0;for(x=le;x<=Z;x++){const Qe=m[x];if(Me>=pt){Ve(Qe,P,V,!0);continue}let At;if(Qe.key!=null)At=ge.get(Qe.key);else for(Le=ae;Le<=Q;Le++)if(Nn[Le-ae]===0&&rn(Qe,E[Le])){At=Le;break}At===void 0?Ve(Qe,P,V,!0):(Nn[At-ae]=x+1,At>=Ea?Ea=At:vn=!0,B(Qe,E[At],D,null,P,V,q,S,N),Me++)}const ga=vn?Qp(Nn):_n;for(Le=ga.length-1,x=pt-1;x>=0;x--){const Qe=ae+x,At=E[Qe],ba=Qe+1<U?E[Qe+1].el:I;Nn[x]===0?B(null,At,D,ba,P,V,q,S,N):vn&&(Le<0||x!==ga[Le]?tt(At,D,ba,2):Le--)}}},tt=(m,E,D,I,P=null)=>{const{el:V,type:q,transition:S,children:N,shapeFlag:x}=m;if(x&6){tt(m.component.subTree,E,D,I);return}if(x&128){m.suspense.move(E,D,I);return}if(x&64){q.move(m,E,D,K);return}if(q===Ze){l(V,E,D);for(let Z=0;Z<N.length;Z++)tt(N[Z],E,D,I);l(m.anchor,E,D);return}if(q===Yn){_(m,E,D);return}if(I!==2&&x&1&&S)if(I===0)S.beforeEnter(V),l(V,E,D),We(()=>S.enter(V),P);else{const{leave:Z,delayLeave:Q,afterLeave:le}=S,ae=()=>l(V,E,D),ge=()=>{Z(V,()=>{ae(),le&&le()})};Q?Q(V,ae,ge):ge()}else l(V,E,D)},Ve=(m,E,D,I=!1,P=!1)=>{const{type:V,props:q,ref:S,children:N,dynamicChildren:x,shapeFlag:U,patchFlag:Z,dirs:Q}=m;if(S!=null&&er(S,null,D,m,!0),U&256){E.ctx.deactivate(m);return}const le=U&1&&Q,ae=!Jn(m);let ge;if(ae&&(ge=q&&q.onVnodeBeforeUnmount)&&lt(ge,E,m),U&6)_t(m.component,D,I);else{if(U&128){m.suspense.unmount(D,I);return}le&&yt(m,null,E,"beforeUnmount"),U&64?m.type.remove(m,E,D,P,K,I):x&&(V!==Ze||Z>0&&Z&64)?Oe(x,E,D,!1,!0):(V===Ze&&Z&384||!P&&U&16)&&Oe(N,E,D),I&&Ye(m)}(ae&&(ge=q&&q.onVnodeUnmounted)||le)&&We(()=>{ge&&lt(ge,E,m),le&&yt(m,null,E,"unmounted")},D)},Ye=m=>{const{type:E,el:D,anchor:I,transition:P}=m;if(E===Ze){Lt(D,I);return}if(E===Yn){C(m);return}const V=()=>{r(D),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(m.shapeFlag&1&&P&&!P.persisted){const{leave:q,delayLeave:S}=P,N=()=>q(D,V);S?S(m.el,V,N):N()}else V()},Lt=(m,E)=>{let D;for(;m!==E;)D=f(m),r(m),m=D;r(E)},_t=(m,E,D)=>{const{bum:I,scope:P,update:V,subTree:q,um:S}=m;I&&Lr(I),P.stop(),V&&(V.active=!1,Ve(q,m,E,D)),S&&We(S,E),We(()=>{m.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},Oe=(m,E,D,I=!1,P=!1,V=0)=>{for(let q=V;q<m.length;q++)Ve(m[q],E,D,I,P)},k=m=>m.shapeFlag&6?k(m.component.subTree):m.shapeFlag&128?m.suspense.next():f(m.anchor||m.el);let G=!1;const z=(m,E,D)=>{m==null?E._vnode&&Ve(E._vnode,null,null,!0):B(E._vnode||null,m,E,null,null,null,D),G||(G=!0,Ca(),Yl(),G=!1),E._vnode=m},K={p:B,um:Ve,m:tt,r:Ye,mt:Ce,mc:O,pc:J,pbc:j,n:k,o:e};let ce,Ae;return t&&([ce,Ae]=t(K)),{render:z,hydrate:ce,createApp:Np(z,ce)}}function Ir({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function tn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Rs(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ss(e,t,n=!1){const l=e.children,r=t.children;if(ee(l)&&ee(r))for(let i=0;i<l.length;i++){const a=l[i];let s=r[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=r[i]=qt(r[i]),s.el=a.el),n||Ss(a,s)),s.type===Cn&&(s.el=a.el)}}function Qp(e){const t=e.slice(),n=[0];let l,r,i,a,s;const c=e.length;for(l=0;l<c;l++){const u=e[l];if(u!==0){if(r=n[n.length-1],e[r]<u){t[l]=r,n.push(l);continue}for(i=0,a=n.length-1;i<a;)s=i+a>>1,e[n[s]]<u?i=s+1:a=s;u<e[n[i]]&&(i>0&&(t[l]=n[i-1]),n[i]=l)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}function Fs(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Fs(t)}const Xp=e=>e.__isTeleport,Ze=Symbol.for("v-fgt"),Cn=Symbol.for("v-txt"),ct=Symbol.for("v-cmt"),Yn=Symbol.for("v-stc"),Qn=[];let mt=null;function Zp(e=!1){Qn.push(mt=e?null:[])}function e1(){Qn.pop(),mt=Qn[Qn.length-1]||null}let al=1;function Na(e){al+=e}function Vs(e){return e.dynamicChildren=al>0?mt||_n:null,e1(),al>0&&mt&&mt.push(e),e}function Q2(e,t,n,l,r,i){return Vs($s(e,t,n,l,r,i,!0))}function t1(e,t,n,l,r){return Vs(Pe(e,t,n,l,r,!0))}function ai(e){return e?e.__v_isVNode===!0:!1}function rn(e,t){return e.type===t.type&&e.key===t.key}const pr="__vInternal",Ms=({key:e})=>e??null,Ul=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ie(e)||Ne(e)||re(e)?{i:at,r:e,k:t,f:!!n}:e:null);function $s(e,t=null,n=null,l=0,r=null,i=e===Ze?0:1,a=!1,s=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ms(t),ref:t&&Ul(t),scopeId:gs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:l,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:at};return s?(zi(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=ie(n)?8:16),al>0&&!a&&mt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&mt.push(c),c}const Pe=n1;function n1(e,t=null,n=null,l=0,r=null,i=!1){if((!e||e===mp)&&(e=ct),ai(e)){const s=Yt(e,t,!0);return n&&zi(s,n),al>0&&!i&&mt&&(s.shapeFlag&6?mt[mt.indexOf(e)]=s:mt.push(s)),s.patchFlag|=-2,s}if(h1(e)&&(e=e.__vccOpts),t){t=l1(t);let{class:s,style:c}=t;s&&!ie(s)&&(t.class=Ti(s)),ke(c)&&(ss(c)&&!ee(c)&&(c=Re({},c)),t.style=Li(c))}const a=ie(e)?1:gp(e)?128:Xp(e)?64:ke(e)?4:re(e)?2:0;return $s(e,t,n,l,r,a,i,!0)}function l1(e){return e?ss(e)||pr in e?Re({},e):e:null}function Yt(e,t,n=!1){const{props:l,ref:r,patchFlag:i,children:a}=e,s=t?r1(l||{},t):l;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Ms(s),ref:t&&t.ref?n&&r?ee(r)?r.concat(Ul(t)):[r,Ul(t)]:Ul(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ze?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Yt(e.ssContent),ssFallback:e.ssFallback&&Yt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Ns(e=" ",t=0){return Pe(Cn,null,e,t)}function X2(e,t){const n=Pe(Yn,null,e);return n.staticCount=t,n}function Z2(e="",t=!1){return t?(Zp(),t1(ct,null,e)):Pe(ct,null,e)}function ft(e){return e==null||typeof e=="boolean"?Pe(ct):ee(e)?Pe(Ze,null,e.slice()):typeof e=="object"?qt(e):Pe(Cn,null,String(e))}function qt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Yt(e)}function zi(e,t){let n=0;const{shapeFlag:l}=e;if(t==null)t=null;else if(ee(t))n=16;else if(typeof t=="object")if(l&65){const r=t.default;r&&(r._c&&(r._d=!1),zi(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(pr in t)?t._ctx=at:r===3&&at&&(at.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else re(t)?(t={default:t,_ctx:at},n=32):(t=String(t),l&64?(n=16,t=[Ns(t)]):n=8);e.children=t,e.shapeFlag|=n}function r1(...e){const t={};for(let n=0;n<e.length;n++){const l=e[n];for(const r in l)if(r==="class")t.class!==l.class&&(t.class=Ti([t.class,l.class]));else if(r==="style")t.style=Li([t.style,l.style]);else if(dl(r)){const i=t[r],a=l[r];a&&i!==a&&!(ee(i)&&i.includes(a))&&(t[r]=i?[].concat(i,a):a)}else r!==""&&(t[r]=l[r])}return t}function lt(e,t,n,l=null){ot(e,t,7,[n,l])}const i1=Cs();let a1=0;function o1(e,t,n){const l=e.type,r=(t?t.appContext:e.appContext)||i1,i={uid:a1++,vnode:e,type:l,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new kd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ps(l,r),emitsOptions:Es(l,r),emit:null,emitted:null,propsDefaults:Te,inheritAttrs:l.inheritAttrs,ctx:Te,data:Te,props:Te,attrs:Te,slots:Te,refs:Te,setupState:Te,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=up.bind(null,i),e.ce&&e.ce(i),i}let $e=null;const Vn=()=>$e||at;let tr,oi;{const e=Uo(),t=(n,l)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(l),i=>{r.length>1?r.forEach(a=>a(i)):r[0](i)}};tr=t("__VUE_INSTANCE_SETTERS__",n=>$e=n),oi=t("__VUE_SSR_SETTERS__",n=>gl=n)}const El=e=>{const t=$e;return tr(e),e.scope.on(),()=>{e.scope.off(),tr(t)}},ja=()=>{$e&&$e.scope.off(),tr(null)};function js(e){return e.vnode.shapeFlag&4}let gl=!1;function s1(e,t=!1){t&&oi(t);const{props:n,children:l}=e.vnode,r=js(e);jp(e,n,r,t),qp(e,l);const i=r?c1(e,t):void 0;return t&&oi(!1),i}function c1(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=cs(new Proxy(e.ctx,Op));const{setup:l}=n;if(l){const r=e.setupContext=l.length>1?d1(e):null,i=El(e);cn();const a=Jt(l,e,0,[e.props,r]);if(un(),i(),Go(a)){if(a.then(ja,ja),t)return a.then(s=>{Ha(e,s,t)}).catch(s=>{fl(s,e,0)});e.asyncDep=a}else Ha(e,a,t)}else Hs(e,t)}function Ha(e,t,n){re(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ke(t)&&(e.setupState=ps(t)),Hs(e,n)}let za;function Hs(e,t,n){const l=e.type;if(!e.render){if(!t&&za&&!l.render){const r=l.template||ji(e).template;if(r){const{isCustomElement:i,compilerOptions:a}=e.appContext.config,{delimiters:s,compilerOptions:c}=l,u=Re(Re({isCustomElement:i,delimiters:s},a),c);l.render=za(r,u)}}e.render=l.render||it}{const r=El(e);cn();try{Rp(e)}finally{un(),r()}}}function u1(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Ke(e,"get","$attrs"),t[n]}}))}function d1(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return u1(e)},slots:e.slots,emit:e.emit,expose:t}}function qi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ps(cs(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Kn)return Kn[n](e)},has(t,n){return n in t||n in Kn}}))}function p1(e,t=!0){return re(e)?e.displayName||e.name:e.name||t&&e.__name}function h1(e){return re(e)&&"__vccOpts"in e}const w=(e,t)=>Xd(e,t,gl);function o(e,t,n){const l=arguments.length;return l===2?ke(t)&&!ee(t)?ai(t)?Pe(e,null,[t]):Pe(e,t):Pe(e,null,t):(l>3?n=Array.prototype.slice.call(arguments,2):l===3&&ai(n)&&(n=[n]),Pe(e,t,n))}const f1="3.4.15";/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const v1="http://www.w3.org/2000/svg",m1="http://www.w3.org/1998/Math/MathML",Gt=typeof document<"u"?document:null,qa=Gt&&Gt.createElement("template"),E1={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,l)=>{const r=t==="svg"?Gt.createElementNS(v1,e):t==="mathml"?Gt.createElementNS(m1,e):Gt.createElement(e,n?{is:n}:void 0);return e==="select"&&l&&l.multiple!=null&&r.setAttribute("multiple",l.multiple),r},createText:e=>Gt.createTextNode(e),createComment:e=>Gt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Gt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,l,r,i){const a=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{qa.innerHTML=l==="svg"?`<svg>${e}</svg>`:l==="mathml"?`<math>${e}</math>`:e;const s=qa.content;if(l==="svg"||l==="mathml"){const c=s.firstChild;for(;c.firstChild;)s.appendChild(c.firstChild);s.removeChild(c)}t.insertBefore(s,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},$t="transition",jn="animation",kn=Symbol("_vtc"),Qt=(e,{slots:t})=>o(Bp,qs(e),t);Qt.displayName="Transition";const zs={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},g1=Qt.props=Re({},Bs,zs),nn=(e,t=[])=>{ee(e)?e.forEach(n=>n(...t)):e&&e(...t)},Ga=e=>e?ee(e)?e.some(t=>t.length>1):e.length>1:!1;function qs(e){const t={};for(const H in e)H in zs||(t[H]=e[H]);if(e.css===!1)return t;const{name:n="v",type:l,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=a,appearToClass:d=s,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=e,g=b1(r),B=g&&g[0],y=g&&g[1],{onBeforeEnter:A,onEnter:T,onEnterCancelled:_,onLeave:C,onLeaveCancelled:M,onBeforeAppear:L=A,onAppear:F=T,onAppearCancelled:O=_}=t,R=(H,te,Ce)=>{jt(H,te?d:s),jt(H,te?u:a),Ce&&Ce()},j=(H,te)=>{H._isLeaving=!1,jt(H,p),jt(H,v),jt(H,f),te&&te()},Y=H=>(te,Ce)=>{const De=H?F:T,W=()=>R(te,H,Ce);nn(De,[te,W]),Ua(()=>{jt(te,H?c:i),Ct(te,H?d:s),Ga(De)||Wa(te,l,B,W)})};return Re(t,{onBeforeEnter(H){nn(A,[H]),Ct(H,i),Ct(H,a)},onBeforeAppear(H){nn(L,[H]),Ct(H,c),Ct(H,u)},onEnter:Y(!1),onAppear:Y(!0),onLeave(H,te){H._isLeaving=!0;const Ce=()=>j(H,te);Ct(H,p),Us(),Ct(H,f),Ua(()=>{H._isLeaving&&(jt(H,p),Ct(H,v),Ga(C)||Wa(H,l,y,Ce))}),nn(C,[H,Ce])},onEnterCancelled(H){R(H,!1),nn(_,[H])},onAppearCancelled(H){R(H,!0),nn(O,[H])},onLeaveCancelled(H){j(H),nn(M,[H])}})}function b1(e){if(e==null)return null;if(ke(e))return[xr(e.enter),xr(e.leave)];{const t=xr(e);return[t,t]}}function xr(e){return yd(e)}function Ct(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[kn]||(e[kn]=new Set)).add(t)}function jt(e,t){t.split(/\s+/).forEach(l=>l&&e.classList.remove(l));const n=e[kn];n&&(n.delete(t),n.size||(e[kn]=void 0))}function Ua(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let _1=0;function Wa(e,t,n,l){const r=e._endId=++_1,i=()=>{r===e._endId&&l()};if(n)return setTimeout(i,n);const{type:a,timeout:s,propCount:c}=Gs(e,t);if(!a)return l();const u=a+"end";let d=0;const p=()=>{e.removeEventListener(u,f),i()},f=v=>{v.target===e&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},s+1),e.addEventListener(u,f)}function Gs(e,t){const n=window.getComputedStyle(e),l=g=>(n[g]||"").split(", "),r=l(`${$t}Delay`),i=l(`${$t}Duration`),a=Ja(r,i),s=l(`${jn}Delay`),c=l(`${jn}Duration`),u=Ja(s,c);let d=null,p=0,f=0;t===$t?a>0&&(d=$t,p=a,f=i.length):t===jn?u>0&&(d=jn,p=u,f=c.length):(p=Math.max(a,u),d=p>0?a>u?$t:jn:null,f=d?d===$t?i.length:c.length:0);const v=d===$t&&/\b(transform|all)(,|$)/.test(l(`${$t}Property`).toString());return{type:d,timeout:p,propCount:f,hasTransform:v}}function Ja(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,l)=>Ka(n)+Ka(e[l])))}function Ka(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Us(){return document.body.offsetHeight}function A1(e,t,n){const l=e[kn];l&&(t=(t?[t,...l]:[...l]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const y1=Symbol("_vod"),B1=Symbol("");function w1(e,t,n){const l=e.style,r=l.display,i=ie(n);if(n&&!i){if(t&&!ie(t))for(const a in t)n[a]==null&&si(l,a,"");for(const a in n)si(l,a,n[a])}else if(i){if(t!==n){const a=l[B1];a&&(n+=";"+a),l.cssText=n}}else t&&e.removeAttribute("style");y1 in e&&(l.display=r)}const Ya=/\s*!important$/;function si(e,t,n){if(ee(n))n.forEach(l=>si(e,t,l));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const l=D1(e,t);Ya.test(n)?e.setProperty(Sn(l),n.replace(Ya,""),"important"):e[l]=n}}const Qa=["Webkit","Moz","ms"],Or={};function D1(e,t){const n=Or[t];if(n)return n;let l=ut(t);if(l!=="filter"&&l in e)return Or[t]=l;l=pl(l);for(let r=0;r<Qa.length;r++){const i=Qa[r]+l;if(i in e)return Or[t]=i}return t}const Xa="http://www.w3.org/1999/xlink";function L1(e,t,n,l,r){if(l&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Xa,t.slice(6,t.length)):e.setAttributeNS(Xa,t,n);else{const i=Cd(t);n==null||i&&!Wo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function T1(e,t,n,l,r,i,a){if(t==="innerHTML"||t==="textContent"){l&&a(l,r,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const u=s==="OPTION"?e.getAttribute("value"):e.value,d=n??"";u!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=Wo(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function C1(e,t,n,l){e.addEventListener(t,n,l)}function k1(e,t,n,l){e.removeEventListener(t,n,l)}const Za=Symbol("_vei");function P1(e,t,n,l,r=null){const i=e[Za]||(e[Za]={}),a=i[t];if(l&&a)a.value=l;else{const[s,c]=I1(t);if(l){const u=i[t]=R1(l,r);C1(e,s,u,c)}else a&&(k1(e,s,a,c),i[t]=void 0)}}const eo=/(?:Once|Passive|Capture)$/;function I1(e){let t;if(eo.test(e)){t={};let l;for(;l=e.match(eo);)e=e.slice(0,e.length-l[0].length),t[l[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Sn(e.slice(2)),t]}let Rr=0;const x1=Promise.resolve(),O1=()=>Rr||(x1.then(()=>Rr=0),Rr=Date.now());function R1(e,t){const n=l=>{if(!l._vts)l._vts=Date.now();else if(l._vts<=n.attached)return;ot(S1(l,n.value),t,5,[l])};return n.value=e,n.attached=O1(),n}function S1(e,t){if(ee(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(l=>r=>!r._stopped&&l&&l(r))}else return t}const to=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,F1=(e,t,n,l,r,i,a,s,c)=>{const u=r==="svg";t==="class"?A1(e,l,u):t==="style"?w1(e,n,l):dl(t)?Bi(t)||P1(e,t,n,l,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):V1(e,t,l,u))?T1(e,t,l,i,a,s,c):(t==="true-value"?e._trueValue=l:t==="false-value"&&(e._falseValue=l),L1(e,t,l,u))};function V1(e,t,n,l){if(l)return!!(t==="innerHTML"||t==="textContent"||t in e&&to(t)&&re(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return to(t)&&ie(n)?!1:t in e}const Ws=new WeakMap,Js=new WeakMap,nr=Symbol("_moveCb"),no=Symbol("_enterCb"),Ks={name:"TransitionGroup",props:Re({},g1,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Vn(),l=ys();let r,i;return Ls(()=>{if(!r.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!z1(r[0].el,n.vnode.el,a))return;r.forEach(N1),r.forEach(j1);const s=r.filter(H1);Us(),s.forEach(c=>{const u=c.el,d=u.style;Ct(u,a),d.transform=d.webkitTransform=d.transitionDuration="";const p=u[nr]=f=>{f&&f.target!==u||(!f||/transform$/.test(f.propertyName))&&(u.removeEventListener("transitionend",p),u[nr]=null,jt(u,a))};u.addEventListener("transitionend",p)})}),()=>{const a=se(e),s=qs(a);let c=a.tag||Ze;r=i,i=t.default?$i(t.default()):[];for(let u=0;u<i.length;u++){const d=i[u];d.key!=null&&il(d,rl(d,s,l,n))}if(r)for(let u=0;u<r.length;u++){const d=r[u];il(d,rl(d,s,l,n)),Ws.set(d,d.el.getBoundingClientRect())}return Pe(c,null,i)}}},M1=e=>delete e.mode;Ks.props;const $1=Ks;function N1(e){const t=e.el;t[nr]&&t[nr](),t[no]&&t[no]()}function j1(e){Js.set(e,e.el.getBoundingClientRect())}function H1(e){const t=Ws.get(e),n=Js.get(e),l=t.left-n.left,r=t.top-n.top;if(l||r){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${l}px,${r}px)`,i.transitionDuration="0s",e}}function z1(e,t,n){const l=e.cloneNode(),r=e[kn];r&&r.forEach(s=>{s.split(/\s+/).forEach(c=>c&&l.classList.remove(c))}),n.split(/\s+/).forEach(s=>s&&l.classList.add(s)),l.style.display="none";const i=t.nodeType===1?t:t.parentNode;i.appendChild(l);const{hasTransform:a}=Gs(l);return i.removeChild(l),a}const q1=Re({patchProp:F1},E1);let Sr,lo=!1;function G1(){return Sr=lo?Sr:Kp(q1),lo=!0,Sr}const U1=(...e)=>{const t=G1().createApp(...e),{mount:n}=t;return t.mount=l=>{const r=J1(l);if(r)return n(r,!0,W1(r))},t};function W1(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function J1(e){return ie(e)?document.querySelector(e):e}const K1="modulepreload",Y1=function(e){return"/pinkpig/"+e},ro={},h=function(t,n,l){let r=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link");r=Promise.all(n.map(a=>{if(a=Y1(a),a in ro)return;ro[a]=!0;const s=a.endsWith(".css"),c=s?'[rel="stylesheet"]':"";if(!!l)for(let p=i.length-1;p>=0;p--){const f=i[p];if(f.href===a&&(!s||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${c}`))return;const d=document.createElement("link");if(d.rel=s?"stylesheet":K1,s||(d.as="script",d.crossOrigin=""),d.href=a,document.head.appendChild(d),s)return new Promise((p,f)=>{d.addEventListener("load",p),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})}))}return r.then(()=>t()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},Q1={"v-8daa1a0e":()=>h(()=>import("./index.html-ibkdGA84.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-184f4da6":()=>h(()=>import("./intro.html-VEF0ZusF.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-42631b81":()=>h(()=>import("./blog_and_pinkpig.html-AFvOFeIL.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-555f1323":()=>h(()=>import("./tools.html-07OuYGth.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-14bb3657":()=>h(()=>import("./youtube_channel.html-QpTsrp5k.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-24570c18":()=>h(()=>import("./AntDesign.html-5NgDnkhT.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-528d934c":()=>h(()=>import("./CSS.html-DWW8u9ge.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-d36a0dfa":()=>h(()=>import("./Expo.html-lJQuUz4Q.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5094eae3":()=>h(()=>import("./Frontend.html-a7NJdFWI.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-403a3f0a":()=>h(()=>import("./HTML.html-9wodgV5c.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0aa93d70":()=>h(()=>import("./JavaScript.html-lvtDI2LR.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-595e895a":()=>h(()=>import("./Practice.html-lui81Yar.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7cfacf5e":()=>h(()=>import("./React.html-b8iVrI2O.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-73fe7652":()=>h(()=>import("./npm.html-cf-i0MG_.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5ebd06e4":()=>h(()=>import("./CSAPP.html-DfrX1UAP.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-24cc1dfd":()=>h(()=>import("./Netty.html-p8gk6fJ_.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-00585f4c":()=>h(()=>import("./RPC.html-7C88YC2N.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0346fffe":()=>h(()=>import("./操作系统.html-1QgCNUH3.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3f681e4a":()=>h(()=>import("./浏览器技能.html-BDECznX2.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0293a47f":()=>h(()=>import("./网络.html-36AG3eKy.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-076351c7":()=>h(()=>import("./计算机技能.html-H-ZX4k04.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3f1675d0":()=>h(()=>import("./commen_mistakes.html-mGgYvOuL.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4e8dace0":()=>h(()=>import("./grammar.html-H-3z-vXH.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-218d24c2":()=>h(()=>import("./new_concept_english3.html--aWr1mmm.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-d36e9eb6":()=>h(()=>import("./new_concept_english_detail.html-MQS8h2D6.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-072ac7bc":()=>h(()=>import("./pronunciation.html-d7en6ro-.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7fa1d5cc":()=>h(()=>import("./sentence_pattern_and_expression.html-bv8MyCdJ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-26fd8e01":()=>h(()=>import("./llm_resources.html-i9D8ymtB.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1f1acd79":()=>h(()=>import("./open_interpreter.html-OonIxWRM.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-65bb1c98":()=>h(()=>import("./Git使用手册.html--rWVZDjM.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7d97f2e1":()=>h(()=>import("./IDEA_Keymap.html-oa0K3y1z.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-46241083":()=>h(()=>import("./IDEA_Problem_and_plugin.html-S07wVB3Y.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-48af1746":()=>h(()=>import("./Markdown.html-p0NdC-RI.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7d1017de":()=>h(()=>import("./Maven--java包管理工具.html-1fgii2ME.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-775875fc":()=>h(()=>import("./Poetry--python包管理工具.html-k_s-bX6Y.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-fccae644":()=>h(()=>import("./photoshop.html-kcZA9JjG.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-62eb8a96":()=>h(()=>import("./quick_recovery.html-57YZ5vgN.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-d2057044":()=>h(()=>import("./多层迷宫.html-5S0uvLI1.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-43972504":()=>h(()=>import("./算法提升.html-3eGbfge7.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0f689b5e":()=>h(()=>import("./经典题汇总（每个细分类限定10题以内）.html-q2-dePgM.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-157caa3e":()=>h(()=>import("./Java8学习笔记.html-gBdmNduj.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4af0c92c":()=>h(()=>import("./基础.html-1_ocEQ4I.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-f2bf4518":()=>h(()=>import("./集合.html-B3Wp3Upx.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0bbbc80c":()=>h(()=>import("./juc.html-gl7Xq0UJ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7175977a":()=>h(()=>import("./jvm.html-ZAK0WB8C.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5a0477de":()=>h(()=>import("./spring.html-D6cEh02G.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-51044ade":()=>h(()=>import("./careers.html-yiJQBxx-.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-37a74a3e":()=>h(()=>import("./common.html-8eP_H2he.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-54b95250":()=>h(()=>import("./communication.html-Ws1GaxQj.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-14d7492e":()=>h(()=>import("./computers.html-E9ZVn5M0.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-94444e6e":()=>h(()=>import("./describing_something.html-qB30C2Nz.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-73f7931c":()=>h(()=>import("./dreams.html-KfGof6S4.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-45d3c224":()=>h(()=>import("./graduating.html-P8cgR_ex.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5b7b0868":()=>h(()=>import("./greetings.html-5eDIKNUU.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-10e72e36":()=>h(()=>import("./hobbies.html-j7YJS0Uj.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-743566bc":()=>h(()=>import("./immigration.html-N3b_zhs7.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2045e392":()=>h(()=>import("./introducing_someone.html-8g3aWQlk.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-305c80b8":()=>h(()=>import("./phone.html-83IoFm_-.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-9f61d83c":()=>h(()=>import("./routine.html-HbuB0pac.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-54f0115c":()=>h(()=>import("./time_and_weather.html-iKp7YvRN.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-228608e7":()=>h(()=>import("./traits.html-2kgfa3hS.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-181b7599":()=>h(()=>import("./agent.html-6lb4xXi7.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-e204e076":()=>h(()=>import("./computer_use.html-peJhAY_z.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-be085578":()=>h(()=>import("./learning_resources.html-kWSqgTvd.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-cb2232bc":()=>h(()=>import("./same.html-VkYZOA7A.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0ac6637d":()=>h(()=>import("./langchain.html-DiLu1TNX.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4fede924":()=>h(()=>import("./langchain1.html-N8fuBmmQ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-530d2aeb":()=>h(()=>import("./langchain_source_code.html-RdRBg4zJ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0ea70910":()=>h(()=>import("./langgraph.html-epN2amRI.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-a137010a":()=>h(()=>import("./langsmith.html-NA1uMsEv.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5e3adc79":()=>h(()=>import("./streamlit.html-DaOhEev2.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7e750b23":()=>h(()=>import("./langchain.html-v5I8Kifm.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5820ecde":()=>h(()=>import("./langchain_source_code.html-OCzKdjxH.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-6d60977e":()=>h(()=>import("./llama.html-9cDrSRNR.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4f165190":()=>h(()=>import("./llama_advanced.html-naBkMCZ4.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2a21b47c":()=>h(()=>import("./llm_summary.html-6bAj0cAx.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5c2cf7c2":()=>h(()=>import("./streamlit.html-EAzWk0RM.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-a54f7fc6":()=>h(()=>import("./transformer.html-Bksj3dyy.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-30abaebb":()=>h(()=>import("./rag_opensource.html-j7xWlgzI.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-c4f0754c":()=>h(()=>import("./GraphQL.html-zq9chJmn.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1af18ea2":()=>h(()=>import("./MicroService.html-gqQ9Z22K.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3ff1b585":()=>h(()=>import("./MybatisPlus.html-sXrDLPET.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0cae3b8e":()=>h(()=>import("./mq.html-NsDzST8S.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1bc2e808":()=>h(()=>import("./SQL.html-h6ZRnzFD.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-e54ef570":()=>h(()=>import("./mysql.html-NJkB6CdL.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1711ecd4":()=>h(()=>import("./redis.html-BLmZTn6L.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-10a57fd4":()=>h(()=>import("./Docker.html-eiI8tiKy.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7a676898":()=>h(()=>import("./K8S.html-hVxZM-yZ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-6492c18a":()=>h(()=>import("./linux.html-6BddWckV.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-6cb78bf8":()=>h(()=>import("./01_python_environment.html-ECBOX7G8.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-03f9b3a9":()=>h(()=>import("./02_python_data_type.html-SsgcwWnj.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-c0b42d56":()=>h(()=>import("./03_python_operator.html-WW78TP0B.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5d4edd97":()=>h(()=>import("./04_python_method.html-gy5ccBYv.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5e83cd2f":()=>h(()=>import("./05_python_builtin_module.html-W4QAcEOF.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-50f65248":()=>h(()=>import("./06_python_popular_package.html-4W72Pdg1.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-623af120":()=>h(()=>import("./01_ai_concept.html-FUCs1g0L.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-53146c6c":()=>h(()=>import("./02_neural_net_train.html-nC9FySn1.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-29ecd1c4":()=>h(()=>import("./03_pytorch_operation.html-yukjJeR7.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-49b144a6":()=>h(()=>import("./04_pytorch_practice_nn.html-6bU2zAkC.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-fcfa8cfa":()=>h(()=>import("./05_linear_nn.html-V-M3_Tfb.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-6243a8a0":()=>h(()=>import("./06_heterogeneous_graph.html-ljs05wDt.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-07b0d73f":()=>h(()=>import("./AI_evolution.html-dPUJTcbb.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-47de591e":()=>h(()=>import("./0.时空复杂度.html-H3Qs0219.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-75d3a2dc":()=>h(()=>import("./1.分治思想_递归实现.html-ZR8C9fAr.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-26125280":()=>h(()=>import("./2.二进制_位运算.html-IPYNI70m.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-12fb0380":()=>h(()=>import("./3.排序.html-oDCsHciu.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5c8fd235":()=>h(()=>import("./4.二分查找.html-6XjBZtvX.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-9ec393a6":()=>h(()=>import("./5.动态规划_贪心.html-JlAVeSTu.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7a0c1079":()=>h(()=>import("./6.字符串.html-H_Kw0VHp.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4f8851a7":()=>h(()=>import("./7.数学.html-JB3Fd046.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-256607b4":()=>h(()=>import("./8.算法技巧.html-0zv2JKDG.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-03df395c":()=>h(()=>import("./1.数组.html-2pX8ASkd.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-bd02b22a":()=>h(()=>import("./2.链表.html-MDTUDdof.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4839127c":()=>h(()=>import("./3.栈.html-VhlnLXDW.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-b87c95c4":()=>h(()=>import("./4.队列.html-5RW94C74.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-8fc60358":()=>h(()=>import("./5.堆（优先队列）.html-9UtOuX_z.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-ace54172":()=>h(()=>import("./6.树.html-eY_fw8EL.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4c2ade96":()=>h(()=>import("./7.图.html-C6zmof_l.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-44f0f74b":()=>h(()=>import("./8.哈希表（散列表）.html-rEshAQ6r.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-80fcc67e":()=>h(()=>import("./Java语言基础.html-zkZgse3g.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-a0decba4":()=>h(()=>import("./python算法刷题语法快速恢复.html-MwR2aQKw.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3706649a":()=>h(()=>import("./404.html-ELYBSFNe.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2c0d0d85":()=>h(()=>import("./index.html-0a3wtf0M.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-06198984":()=>h(()=>import("./index.html-ndBqxueE.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2d0a8026":()=>h(()=>import("./index.html-ZtH9hb0Y.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-58f42cfe":()=>h(()=>import("./index.html-FhfXXQqd.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7449895b":()=>h(()=>import("./index.html-Y18Gk6ug.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-d440f426":()=>h(()=>import("./index.html-PYFEr-gw.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1c04b77c":()=>h(()=>import("./index.html-n6sTAWGG.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-ffb97496":()=>h(()=>import("./index.html-SpiN3Ual.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-14c69af4":()=>h(()=>import("./index.html-lySh48SJ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-6cec18aa":()=>h(()=>import("./index.html-QLcoUYFo.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-6cec0ebc":()=>h(()=>import("./index.html-OkAhqWR6.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-211a2a4e":()=>h(()=>import("./index.html-WjAYn9Z-.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2475b666":()=>h(()=>import("./index.html-ayy3EF9I.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0876f6e5":()=>h(()=>import("./index.html-s_gR8OaW.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4d33be9e":()=>h(()=>import("./index.html-ErRX4wOI.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-d5bc86d2":()=>h(()=>import("./index.html-kLIVwRrx.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-90dbc286":()=>h(()=>import("./index.html-dwZlzFOb.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-90d6a21c":()=>h(()=>import("./index.html-oeeST0kk.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-aff0f4ac":()=>h(()=>import("./index.html-MDiPagDx.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4d194044":()=>h(()=>import("./index.html-RmQTNmcI.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-305ad879":()=>h(()=>import("./index.html-uTiIdO0F.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0d7f5047":()=>h(()=>import("./index.html-TrYac60Q.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-999f5dde":()=>h(()=>import("./index.html-OWFxg9Im.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-8ad07150":()=>h(()=>import("./index.html-PfTXE4w9.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-d29f74b6":()=>h(()=>import("./index.html--tUsRM8W.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3a6ecd2a":()=>h(()=>import("./index.html-ik3y9HJ8.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0d24d936":()=>h(()=>import("./index.html-2LBMckbl.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-6c4287d9":()=>h(()=>import("./index.html-avJpz5gY.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-63cd5dba":()=>h(()=>import("./index.html-aX5SAJZk.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1c7252b6":()=>h(()=>import("./index.html-7kqkDjc1.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2238661c":()=>h(()=>import("./index.html-11KJ3gwb.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5c1239d5":()=>h(()=>import("./index.html-LQuERQvK.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-566bcbdb":()=>h(()=>import("./index.html-6iizFISA.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5bc93818":()=>h(()=>import("./index.html-qSCg3dme.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-744d024e":()=>h(()=>import("./index.html-3AOtZ1O7.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-e52c881c":()=>h(()=>import("./index.html-NUrjn_rx.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-154dc4c4":()=>h(()=>import("./index.html-ZkjR0Tnl.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-01560935":()=>h(()=>import("./index.html-4fJRFXlS.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-924078b8":()=>h(()=>import("./index.html-P-PEBKdE.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2836033f":()=>h(()=>import("./index.html-Drd3Fdts.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-494b3a18":()=>h(()=>import("./index.html-0Zni0yS2.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-59a1d161":()=>h(()=>import("./index.html-iJmuibHr.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-65f226fa":()=>h(()=>import("./index.html-bUj5_ism.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4c399930":()=>h(()=>import("./index.html-x4TH_xzP.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-78cbe7bb":()=>h(()=>import("./index.html-yZYnH68c.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-da453c94":()=>h(()=>import("./index.html-M3KBctL2.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-bdd621d8":()=>h(()=>import("./index.html-8WjFejoc.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-83049d70":()=>h(()=>import("./index.html-KzgtbF_l.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-04391248":()=>h(()=>import("./index.html-xtYkLxjR.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-e6c5fb30":()=>h(()=>import("./index.html-xfwIgr3s.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2cae7d96":()=>h(()=>import("./index.html-AVn-_fFT.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-084b0ce7":()=>h(()=>import("./index.html-V6IelPdJ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4f072b45":()=>h(()=>import("./index.html-wvgAZYvE.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-143a738c":()=>h(()=>import("./index.html-Bp62bPd5.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-23ce7695":()=>h(()=>import("./index.html-FTMRL3lu.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5e25924e":()=>h(()=>import("./index.html-Ob7dvR-M.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-55c05ce3":()=>h(()=>import("./index.html-2oWEcuGm.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5d23f08d":()=>h(()=>import("./index.html-Di6h8Ky1.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-fcd998da":()=>h(()=>import("./index.html-5GuLlprQ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5ac057c7":()=>h(()=>import("./index.html-dbwd_1YG.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-689f2654":()=>h(()=>import("./index.html-dQ2QFe76.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-e54ce78e":()=>h(()=>import("./index.html-DKIbv2Jr.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-29324574":()=>h(()=>import("./index.html-kmPKSOrX.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-9727c2c8":()=>h(()=>import("./index.html-PjKCTcgX.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-b30c33a0":()=>h(()=>import("./index.html-j0J10-eI.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-245f5676":()=>h(()=>import("./index.html-WHhL-UfW.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-66c3b96c":()=>h(()=>import("./index.html-FHbtXQBu.js"),__vite__mapDeps([])).then(({data:e})=>e)},X1=JSON.parse('{"base":"/pinkpig/","lang":"en-US","title":"Liz","description":"Follow your heart","head":[["link",{"rel":"icon","herf":"/blogger.png"}],["link",{"rel":"icon","href":"/pinkpig/blogger.png"}]],"locales":{}}');var Z1=([e,t,n])=>e==="meta"&&t.name?`${e}.${t.name}`:["title","base"].includes(e)?e:e==="template"&&t.id?`${e}.${t.id}`:JSON.stringify([e,t,n]),e0=e=>{const t=new Set,n=[];return e.forEach(l=>{const r=Z1(l);t.has(r)||(t.add(r),n.push(l))}),n},t0=e=>e[0]==="/"?e:`/${e}`,Gi=e=>e[e.length-1]==="/"||e.endsWith(".html")?e:`${e}/`,pn=e=>/^(https?:)?\/\//.test(e),n0=/.md((\?|#).*)?$/,ol=(e,t="/")=>!!(pn(e)||e.startsWith("/")&&!e.startsWith(t)&&!n0.test(e)),Ys=e=>/^[a-z][a-z0-9+.-]*:/.test(e),hr=e=>Object.prototype.toString.call(e)==="[object Object]",Ui=e=>e[e.length-1]==="/"?e.slice(0,-1):e,Qs=e=>e[0]==="/"?e.slice(1):e,l0=(e,t)=>{const n=Object.keys(e).sort((l,r)=>{const i=r.split("/").length-l.split("/").length;return i!==0?i:r.length-l.length});for(const l of n)if(t.startsWith(l))return l;return"/"};const Xs={"v-8daa1a0e":b(()=>h(()=>import("./index.html-41HqeZXA.js"),__vite__mapDeps([0,1]))),"v-184f4da6":b(()=>h(()=>import("./intro.html-rMNDMOZM.js"),__vite__mapDeps([2,1]))),"v-42631b81":b(()=>h(()=>import("./blog_and_pinkpig.html-HfjO_7mB.js"),__vite__mapDeps([3,1]))),"v-555f1323":b(()=>h(()=>import("./tools.html-sNJa_3QD.js"),__vite__mapDeps([4,1]))),"v-14bb3657":b(()=>h(()=>import("./youtube_channel.html-nn6Hu7NU.js"),__vite__mapDeps([5,1]))),"v-24570c18":b(()=>h(()=>import("./AntDesign.html-VH-uG_6K.js"),__vite__mapDeps([6,1]))),"v-528d934c":b(()=>h(()=>import("./CSS.html-KR8LF2Kw.js"),__vite__mapDeps([7,1]))),"v-d36a0dfa":b(()=>h(()=>import("./Expo.html--4BBR8Pg.js"),__vite__mapDeps([8,1]))),"v-5094eae3":b(()=>h(()=>import("./Frontend.html-e-IMH8M1.js"),__vite__mapDeps([9,1]))),"v-403a3f0a":b(()=>h(()=>import("./HTML.html-Sr3xTNvY.js"),__vite__mapDeps([10,1]))),"v-0aa93d70":b(()=>h(()=>import("./JavaScript.html--wmH4Lk-.js"),__vite__mapDeps([11,1]))),"v-595e895a":b(()=>h(()=>import("./Practice.html-PGSGtGaN.js"),__vite__mapDeps([12,1]))),"v-7cfacf5e":b(()=>h(()=>import("./React.html-9ONxww6c.js"),__vite__mapDeps([13,1]))),"v-73fe7652":b(()=>h(()=>import("./npm.html-0NLC7NKp.js"),__vite__mapDeps([14,1]))),"v-5ebd06e4":b(()=>h(()=>import("./CSAPP.html-tWV84siV.js"),__vite__mapDeps([15,1]))),"v-24cc1dfd":b(()=>h(()=>import("./Netty.html-R5sCojMF.js"),__vite__mapDeps([16,1]))),"v-00585f4c":b(()=>h(()=>import("./RPC.html-tRDol0uA.js"),__vite__mapDeps([17,1]))),"v-0346fffe":b(()=>h(()=>import("./操作系统.html-64gzIVDY.js"),__vite__mapDeps([18,1]))),"v-3f681e4a":b(()=>h(()=>import("./浏览器技能.html-qze-cLLh.js"),__vite__mapDeps([19,1]))),"v-0293a47f":b(()=>h(()=>import("./网络.html-AURgjG-5.js"),__vite__mapDeps([20,1]))),"v-076351c7":b(()=>h(()=>import("./计算机技能.html-vYP6bOxt.js"),__vite__mapDeps([21,1]))),"v-3f1675d0":b(()=>h(()=>import("./commen_mistakes.html-nFup_XQB.js"),__vite__mapDeps([22,1]))),"v-4e8dace0":b(()=>h(()=>import("./grammar.html-UF6mUZfQ.js"),__vite__mapDeps([23,1]))),"v-218d24c2":b(()=>h(()=>import("./new_concept_english3.html-q1iWZSA0.js"),__vite__mapDeps([24,1]))),"v-d36e9eb6":b(()=>h(()=>import("./new_concept_english_detail.html-fPLdMJrk.js"),__vite__mapDeps([25,1]))),"v-072ac7bc":b(()=>h(()=>import("./pronunciation.html-j5SrWqWB.js"),__vite__mapDeps([26,1]))),"v-7fa1d5cc":b(()=>h(()=>import("./sentence_pattern_and_expression.html-APTc5N13.js"),__vite__mapDeps([27,1]))),"v-26fd8e01":b(()=>h(()=>import("./llm_resources.html-qfbJ9U3j.js"),__vite__mapDeps([28,1]))),"v-1f1acd79":b(()=>h(()=>import("./open_interpreter.html-XOb11wS2.js"),__vite__mapDeps([29,1]))),"v-65bb1c98":b(()=>h(()=>import("./Git使用手册.html-shdflV84.js"),__vite__mapDeps([30,1]))),"v-7d97f2e1":b(()=>h(()=>import("./IDEA_Keymap.html-2fRAoDQ1.js"),__vite__mapDeps([31,1]))),"v-46241083":b(()=>h(()=>import("./IDEA_Problem_and_plugin.html-fTE_igkP.js"),__vite__mapDeps([32,1]))),"v-48af1746":b(()=>h(()=>import("./Markdown.html-WWDB0HAk.js"),__vite__mapDeps([33,1]))),"v-7d1017de":b(()=>h(()=>import("./Maven--java包管理工具.html-lXYs8g76.js"),__vite__mapDeps([34,1]))),"v-775875fc":b(()=>h(()=>import("./Poetry--python包管理工具.html-oQR_sBu2.js"),__vite__mapDeps([35,1]))),"v-fccae644":b(()=>h(()=>import("./photoshop.html-8Jl2GPmP.js"),__vite__mapDeps([36,1]))),"v-62eb8a96":b(()=>h(()=>import("./quick_recovery.html-tgawecAh.js"),__vite__mapDeps([37,1]))),"v-d2057044":b(()=>h(()=>import("./多层迷宫.html-qYDQ4cHw.js"),__vite__mapDeps([38,1]))),"v-43972504":b(()=>h(()=>import("./算法提升.html-BoBvreaj.js"),__vite__mapDeps([39,1]))),"v-0f689b5e":b(()=>h(()=>import("./经典题汇总（每个细分类限定10题以内）.html-ay6FvOwW.js"),__vite__mapDeps([40,1]))),"v-157caa3e":b(()=>h(()=>import("./Java8学习笔记.html-k-nuagiM.js"),__vite__mapDeps([41,1]))),"v-4af0c92c":b(()=>h(()=>import("./基础.html-xjmuKt3A.js"),__vite__mapDeps([42,1]))),"v-f2bf4518":b(()=>h(()=>import("./集合.html-eRxNEVQc.js"),__vite__mapDeps([43,1]))),"v-0bbbc80c":b(()=>h(()=>import("./juc.html-u3STy994.js"),__vite__mapDeps([44,1]))),"v-7175977a":b(()=>h(()=>import("./jvm.html-LMlfo5te.js"),__vite__mapDeps([45,1]))),"v-5a0477de":b(()=>h(()=>import("./spring.html-gdI4oyFi.js"),__vite__mapDeps([46,1]))),"v-51044ade":b(()=>h(()=>import("./careers.html-ksvKpPMB.js"),__vite__mapDeps([47,1]))),"v-37a74a3e":b(()=>h(()=>import("./common.html-IU0SMmSE.js"),__vite__mapDeps([48,1]))),"v-54b95250":b(()=>h(()=>import("./communication.html-pr7ezyQF.js"),__vite__mapDeps([49,1]))),"v-14d7492e":b(()=>h(()=>import("./computers.html-stRC2EIh.js"),__vite__mapDeps([50,1]))),"v-94444e6e":b(()=>h(()=>import("./describing_something.html--TdCRaXe.js"),__vite__mapDeps([51,1]))),"v-73f7931c":b(()=>h(()=>import("./dreams.html-5x7synT6.js"),__vite__mapDeps([52,1]))),"v-45d3c224":b(()=>h(()=>import("./graduating.html-cx87tpjJ.js"),__vite__mapDeps([53,1]))),"v-5b7b0868":b(()=>h(()=>import("./greetings.html-uSQlHCkG.js"),__vite__mapDeps([54,1]))),"v-10e72e36":b(()=>h(()=>import("./hobbies.html-_dkdPT47.js"),__vite__mapDeps([55,1]))),"v-743566bc":b(()=>h(()=>import("./immigration.html-QXIAuDIV.js"),__vite__mapDeps([56,1]))),"v-2045e392":b(()=>h(()=>import("./introducing_someone.html-JgQqnSzd.js"),__vite__mapDeps([57,1]))),"v-305c80b8":b(()=>h(()=>import("./phone.html-sr4eH6Hi.js"),__vite__mapDeps([58,1]))),"v-9f61d83c":b(()=>h(()=>import("./routine.html-Jfq0-PgT.js"),__vite__mapDeps([59,1]))),"v-54f0115c":b(()=>h(()=>import("./time_and_weather.html-BvmNyKKA.js"),__vite__mapDeps([60,1]))),"v-228608e7":b(()=>h(()=>import("./traits.html-bIsZ_Zjf.js"),__vite__mapDeps([61,1]))),"v-181b7599":b(()=>h(()=>import("./agent.html-j9bmlKs5.js"),__vite__mapDeps([62,1]))),"v-e204e076":b(()=>h(()=>import("./computer_use.html-S0eQJqvb.js"),__vite__mapDeps([63,1]))),"v-be085578":b(()=>h(()=>import("./learning_resources.html-F99Vuign.js"),__vite__mapDeps([64,1]))),"v-cb2232bc":b(()=>h(()=>import("./same.html-EQ1iIndB.js"),__vite__mapDeps([65,1]))),"v-0ac6637d":b(()=>h(()=>import("./langchain.html-VA7lK0Ve.js"),__vite__mapDeps([66,1]))),"v-4fede924":b(()=>h(()=>import("./langchain1.html--3M8qdlJ.js"),__vite__mapDeps([67,1]))),"v-530d2aeb":b(()=>h(()=>import("./langchain_source_code.html-Do_LF_Hq.js"),__vite__mapDeps([68,1]))),"v-0ea70910":b(()=>h(()=>import("./langgraph.html-s3SEsH8K.js"),__vite__mapDeps([69,1]))),"v-a137010a":b(()=>h(()=>import("./langsmith.html-YKbdmO2D.js"),__vite__mapDeps([70,1]))),"v-5e3adc79":b(()=>h(()=>import("./streamlit.html-DWJE0fER.js"),__vite__mapDeps([71,1]))),"v-7e750b23":b(()=>h(()=>import("./langchain.html-YiyHxO5G.js"),__vite__mapDeps([72,1]))),"v-5820ecde":b(()=>h(()=>import("./langchain_source_code.html-kWqKFmF1.js"),__vite__mapDeps([73,1]))),"v-6d60977e":b(()=>h(()=>import("./llama.html-P2B1cSQp.js"),__vite__mapDeps([74,1]))),"v-4f165190":b(()=>h(()=>import("./llama_advanced.html-cBIqyMeq.js"),__vite__mapDeps([75,1]))),"v-2a21b47c":b(()=>h(()=>import("./llm_summary.html--mR3-pXk.js"),__vite__mapDeps([76,1]))),"v-5c2cf7c2":b(()=>h(()=>import("./streamlit.html-uzzhP6xv.js"),__vite__mapDeps([77,1]))),"v-a54f7fc6":b(()=>h(()=>import("./transformer.html--R_cApvX.js"),__vite__mapDeps([78,1]))),"v-30abaebb":b(()=>h(()=>import("./rag_opensource.html-nDIRNT08.js"),__vite__mapDeps([79,1]))),"v-c4f0754c":b(()=>h(()=>import("./GraphQL.html-X7zgNzaT.js"),__vite__mapDeps([80,1]))),"v-1af18ea2":b(()=>h(()=>import("./MicroService.html-TMNQ3rJU.js"),__vite__mapDeps([81,1]))),"v-3ff1b585":b(()=>h(()=>import("./MybatisPlus.html-gDEpoDGc.js"),__vite__mapDeps([82,1]))),"v-0cae3b8e":b(()=>h(()=>import("./mq.html-m5ABbaEt.js"),__vite__mapDeps([83,1]))),"v-1bc2e808":b(()=>h(()=>import("./SQL.html-pqEmLHZ-.js"),__vite__mapDeps([84,1]))),"v-e54ef570":b(()=>h(()=>import("./mysql.html-WwWhBCrV.js"),__vite__mapDeps([85,1]))),"v-1711ecd4":b(()=>h(()=>import("./redis.html-HyjkEkVz.js"),__vite__mapDeps([86,1]))),"v-10a57fd4":b(()=>h(()=>import("./Docker.html-cuGcHSdq.js"),__vite__mapDeps([87,1]))),"v-7a676898":b(()=>h(()=>import("./K8S.html-kUpKVtye.js"),__vite__mapDeps([88,1]))),"v-6492c18a":b(()=>h(()=>import("./linux.html-9VEoSi6l.js"),__vite__mapDeps([89,1]))),"v-6cb78bf8":b(()=>h(()=>import("./01_python_environment.html-SyAjOzKo.js"),__vite__mapDeps([90,1]))),"v-03f9b3a9":b(()=>h(()=>import("./02_python_data_type.html-kyRLxNqz.js"),__vite__mapDeps([91,1]))),"v-c0b42d56":b(()=>h(()=>import("./03_python_operator.html-L8Y-lPgH.js"),__vite__mapDeps([92,1]))),"v-5d4edd97":b(()=>h(()=>import("./04_python_method.html-0nhI9pUV.js"),__vite__mapDeps([93,1]))),"v-5e83cd2f":b(()=>h(()=>import("./05_python_builtin_module.html-u7FT-2_f.js"),__vite__mapDeps([94,1]))),"v-50f65248":b(()=>h(()=>import("./06_python_popular_package.html-t9aEraMh.js"),__vite__mapDeps([95,1]))),"v-623af120":b(()=>h(()=>import("./01_ai_concept.html-80ZsA-Ta.js"),__vite__mapDeps([96,1]))),"v-53146c6c":b(()=>h(()=>import("./02_neural_net_train.html-8eDcLfYq.js"),__vite__mapDeps([97,1]))),"v-29ecd1c4":b(()=>h(()=>import("./03_pytorch_operation.html-myNgNDll.js"),__vite__mapDeps([98,1]))),"v-49b144a6":b(()=>h(()=>import("./04_pytorch_practice_nn.html-9sV-DvnL.js"),__vite__mapDeps([99,1]))),"v-fcfa8cfa":b(()=>h(()=>import("./05_linear_nn.html-BJdnuqX2.js"),__vite__mapDeps([100,1]))),"v-6243a8a0":b(()=>h(()=>import("./06_heterogeneous_graph.html-IuLOOFWR.js"),__vite__mapDeps([101,1]))),"v-07b0d73f":b(()=>h(()=>import("./AI_evolution.html-YLVI7ad3.js"),__vite__mapDeps([102,1]))),"v-47de591e":b(()=>h(()=>import("./0.时空复杂度.html-Nmy1F4S5.js"),__vite__mapDeps([103,1]))),"v-75d3a2dc":b(()=>h(()=>import("./1.分治思想_递归实现.html-5onzQAfv.js"),__vite__mapDeps([104,1]))),"v-26125280":b(()=>h(()=>import("./2.二进制_位运算.html-kT2bu1Y9.js"),__vite__mapDeps([105,1]))),"v-12fb0380":b(()=>h(()=>import("./3.排序.html-W2bgmKNA.js"),__vite__mapDeps([106,1]))),"v-5c8fd235":b(()=>h(()=>import("./4.二分查找.html-_qSj591b.js"),__vite__mapDeps([107,1]))),"v-9ec393a6":b(()=>h(()=>import("./5.动态规划_贪心.html-m7VXSbOi.js"),__vite__mapDeps([108,1]))),"v-7a0c1079":b(()=>h(()=>import("./6.字符串.html-ufZABTbG.js"),__vite__mapDeps([109,1]))),"v-4f8851a7":b(()=>h(()=>import("./7.数学.html-1ajCDo20.js"),__vite__mapDeps([110,1]))),"v-256607b4":b(()=>h(()=>import("./8.算法技巧.html-uGDTWrda.js"),__vite__mapDeps([111,1]))),"v-03df395c":b(()=>h(()=>import("./1.数组.html-xVM6SM0y.js"),__vite__mapDeps([112,1]))),"v-bd02b22a":b(()=>h(()=>import("./2.链表.html--JfRFVGd.js"),__vite__mapDeps([113,1]))),"v-4839127c":b(()=>h(()=>import("./3.栈.html-qDQyhXPO.js"),__vite__mapDeps([114,1]))),"v-b87c95c4":b(()=>h(()=>import("./4.队列.html-T2FCmPCl.js"),__vite__mapDeps([115,1]))),"v-8fc60358":b(()=>h(()=>import("./5.堆（优先队列）.html-nksJH-Zl.js"),__vite__mapDeps([116,1]))),"v-ace54172":b(()=>h(()=>import("./6.树.html-3RsTrOHr.js"),__vite__mapDeps([117,1]))),"v-4c2ade96":b(()=>h(()=>import("./7.图.html--KfG84_A.js"),__vite__mapDeps([118,1]))),"v-44f0f74b":b(()=>h(()=>import("./8.哈希表（散列表）.html-Po9C0fiS.js"),__vite__mapDeps([119,1]))),"v-80fcc67e":b(()=>h(()=>import("./Java语言基础.html-0ovfBFbQ.js"),__vite__mapDeps([120,1]))),"v-a0decba4":b(()=>h(()=>import("./python算法刷题语法快速恢复.html-xknXD1DM.js"),__vite__mapDeps([121,1]))),"v-3706649a":b(()=>h(()=>import("./404.html-OA1futfo.js"),__vite__mapDeps([122,1]))),"v-2c0d0d85":b(()=>h(()=>import("./index.html-E9D75Zv6.js"),__vite__mapDeps([123,1]))),"v-06198984":b(()=>h(()=>import("./index.html-8wr7BRRy.js"),__vite__mapDeps([124,1]))),"v-2d0a8026":b(()=>h(()=>import("./index.html-LfgT2FHw.js"),__vite__mapDeps([125,1]))),"v-58f42cfe":b(()=>h(()=>import("./index.html-X-RRQoV0.js"),__vite__mapDeps([126,1]))),"v-7449895b":b(()=>h(()=>import("./index.html-uSAvxYyZ.js"),__vite__mapDeps([127,1]))),"v-d440f426":b(()=>h(()=>import("./index.html-KfG1V5PO.js"),__vite__mapDeps([128,1]))),"v-1c04b77c":b(()=>h(()=>import("./index.html-Up1RZqYl.js"),__vite__mapDeps([129,1]))),"v-ffb97496":b(()=>h(()=>import("./index.html-claCdTWt.js"),__vite__mapDeps([130,1]))),"v-14c69af4":b(()=>h(()=>import("./index.html-TQYDUCAi.js"),__vite__mapDeps([131,1]))),"v-6cec18aa":b(()=>h(()=>import("./index.html-vxgnK0Yj.js"),__vite__mapDeps([132,1]))),"v-6cec0ebc":b(()=>h(()=>import("./index.html-jpku8z0t.js"),__vite__mapDeps([133,1]))),"v-211a2a4e":b(()=>h(()=>import("./index.html-BD6mYftW.js"),__vite__mapDeps([134,1]))),"v-2475b666":b(()=>h(()=>import("./index.html-kT9YXN17.js"),__vite__mapDeps([135,1]))),"v-0876f6e5":b(()=>h(()=>import("./index.html-9WkpHa7C.js"),__vite__mapDeps([136,1]))),"v-4d33be9e":b(()=>h(()=>import("./index.html-dyCtBBf7.js"),__vite__mapDeps([137,1]))),"v-d5bc86d2":b(()=>h(()=>import("./index.html-p-sSDd9o.js"),__vite__mapDeps([138,1]))),"v-90dbc286":b(()=>h(()=>import("./index.html-6hBKx621.js"),__vite__mapDeps([139,1]))),"v-90d6a21c":b(()=>h(()=>import("./index.html-H2yQradS.js"),__vite__mapDeps([140,1]))),"v-aff0f4ac":b(()=>h(()=>import("./index.html-KTZg910M.js"),__vite__mapDeps([141,1]))),"v-4d194044":b(()=>h(()=>import("./index.html-3R9SpTUy.js"),__vite__mapDeps([142,1]))),"v-305ad879":b(()=>h(()=>import("./index.html-VVgVg29D.js"),__vite__mapDeps([143,1]))),"v-0d7f5047":b(()=>h(()=>import("./index.html-08763243.js"),__vite__mapDeps([144,1]))),"v-999f5dde":b(()=>h(()=>import("./index.html-6Caj3i0s.js"),__vite__mapDeps([145,1]))),"v-8ad07150":b(()=>h(()=>import("./index.html-l8cFiQc1.js"),__vite__mapDeps([146,1]))),"v-d29f74b6":b(()=>h(()=>import("./index.html-aQaf-gkR.js"),__vite__mapDeps([147,1]))),"v-3a6ecd2a":b(()=>h(()=>import("./index.html-p5OXEfoe.js"),__vite__mapDeps([148,1]))),"v-0d24d936":b(()=>h(()=>import("./index.html-dq1c-PSv.js"),__vite__mapDeps([149,1]))),"v-6c4287d9":b(()=>h(()=>import("./index.html-Ang2r9pD.js"),__vite__mapDeps([150,1]))),"v-63cd5dba":b(()=>h(()=>import("./index.html-Tiz9Z4fX.js"),__vite__mapDeps([151,1]))),"v-1c7252b6":b(()=>h(()=>import("./index.html-ztbbAXPH.js"),__vite__mapDeps([152,1]))),"v-2238661c":b(()=>h(()=>import("./index.html-TY0sPtHL.js"),__vite__mapDeps([153,1]))),"v-5c1239d5":b(()=>h(()=>import("./index.html-Ov0IPhcv.js"),__vite__mapDeps([154,1]))),"v-566bcbdb":b(()=>h(()=>import("./index.html-zRhmgZ5B.js"),__vite__mapDeps([155,1]))),"v-5bc93818":b(()=>h(()=>import("./index.html-qAehpLO4.js"),__vite__mapDeps([156,1]))),"v-744d024e":b(()=>h(()=>import("./index.html-VNAsDJcA.js"),__vite__mapDeps([157,1]))),"v-e52c881c":b(()=>h(()=>import("./index.html-oJeKwjmB.js"),__vite__mapDeps([158,1]))),"v-154dc4c4":b(()=>h(()=>import("./index.html-gNL79UIs.js"),__vite__mapDeps([159,1]))),"v-01560935":b(()=>h(()=>import("./index.html-wJoCOqz0.js"),__vite__mapDeps([160,1]))),"v-924078b8":b(()=>h(()=>import("./index.html-o_xqezwl.js"),__vite__mapDeps([161,1]))),"v-2836033f":b(()=>h(()=>import("./index.html-jk8ksAHK.js"),__vite__mapDeps([162,1]))),"v-494b3a18":b(()=>h(()=>import("./index.html-NGBwOHtg.js"),__vite__mapDeps([163,1]))),"v-59a1d161":b(()=>h(()=>import("./index.html-Icb-O762.js"),__vite__mapDeps([164,1]))),"v-65f226fa":b(()=>h(()=>import("./index.html-nKQ30gPC.js"),__vite__mapDeps([165,1]))),"v-4c399930":b(()=>h(()=>import("./index.html-dxvpG3wB.js"),__vite__mapDeps([166,1]))),"v-78cbe7bb":b(()=>h(()=>import("./index.html-mBpxcHAo.js"),__vite__mapDeps([167,1]))),"v-da453c94":b(()=>h(()=>import("./index.html-pkyQH5DL.js"),__vite__mapDeps([168,1]))),"v-bdd621d8":b(()=>h(()=>import("./index.html-rRBcO6_A.js"),__vite__mapDeps([169,1]))),"v-83049d70":b(()=>h(()=>import("./index.html-xnH3Cxa_.js"),__vite__mapDeps([170,1]))),"v-04391248":b(()=>h(()=>import("./index.html-kjyZSNLc.js"),__vite__mapDeps([171,1]))),"v-e6c5fb30":b(()=>h(()=>import("./index.html-5gqjPcNY.js"),__vite__mapDeps([172,1]))),"v-2cae7d96":b(()=>h(()=>import("./index.html-9HyGgZwN.js"),__vite__mapDeps([173,1]))),"v-084b0ce7":b(()=>h(()=>import("./index.html-yIxAHbuK.js"),__vite__mapDeps([174,1]))),"v-4f072b45":b(()=>h(()=>import("./index.html-m6BD2kF2.js"),__vite__mapDeps([175,1]))),"v-143a738c":b(()=>h(()=>import("./index.html-myavQ-rj.js"),__vite__mapDeps([176,1]))),"v-23ce7695":b(()=>h(()=>import("./index.html-jEa3KabI.js"),__vite__mapDeps([177,1]))),"v-5e25924e":b(()=>h(()=>import("./index.html-jGh6LX5G.js"),__vite__mapDeps([178,1]))),"v-55c05ce3":b(()=>h(()=>import("./index.html-CC2c9XG8.js"),__vite__mapDeps([179,1]))),"v-5d23f08d":b(()=>h(()=>import("./index.html-RIaHS9kw.js"),__vite__mapDeps([180,1]))),"v-fcd998da":b(()=>h(()=>import("./index.html-fPGrhCOC.js"),__vite__mapDeps([181,1]))),"v-5ac057c7":b(()=>h(()=>import("./index.html-PvtlLDnr.js"),__vite__mapDeps([182,1]))),"v-689f2654":b(()=>h(()=>import("./index.html-aVcBC897.js"),__vite__mapDeps([183,1]))),"v-e54ce78e":b(()=>h(()=>import("./index.html-Nb8lyMZ1.js"),__vite__mapDeps([184,1]))),"v-29324574":b(()=>h(()=>import("./index.html-kShIESG9.js"),__vite__mapDeps([185,1]))),"v-9727c2c8":b(()=>h(()=>import("./index.html-fM3j4ymz.js"),__vite__mapDeps([186,1]))),"v-b30c33a0":b(()=>h(()=>import("./index.html-RXpqfxnW.js"),__vite__mapDeps([187,1]))),"v-245f5676":b(()=>h(()=>import("./index.html-4vWNqDVT.js"),__vite__mapDeps([188,1]))),"v-66c3b96c":b(()=>h(()=>import("./index.html-LZrTz4pQ.js"),__vite__mapDeps([189,1])))};var r0=Symbol(""),Zs=Symbol(""),i0=Rt({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),Ee=()=>{const e=ve(Zs);if(!e)throw new Error("pageData() is called without provider.");return e},ec=Symbol(""),ye=()=>{const e=ve(ec);if(!e)throw new Error("usePageFrontmatter() is called without provider.");return e},tc=Symbol(""),a0=()=>{const e=ve(tc);if(!e)throw new Error("usePageHead() is called without provider.");return e},o0=Symbol(""),nc=Symbol(""),lc=()=>{const e=ve(nc);if(!e)throw new Error("usePageLang() is called without provider.");return e},rc=Symbol(""),s0=()=>{const e=ve(rc);if(!e)throw new Error("usePageLayout() is called without provider.");return e},c0=X(Q1),Wi=Symbol(""),Ft=()=>{const e=ve(Wi);if(!e)throw new Error("useRouteLocale() is called without provider.");return e},gn=X(X1),ic=()=>gn,ac=Symbol(""),bl=()=>{const e=ve(ac);if(!e)throw new Error("useSiteLocaleData() is called without provider.");return e},u0=Symbol(""),d0="Layout",p0="NotFound",kt=hl({resolveLayouts:e=>e.reduce((t,n)=>({...t,...n.layouts}),{}),resolvePageData:async e=>{const t=c0.value[e];return await(t==null?void 0:t())??i0},resolvePageFrontmatter:e=>e.frontmatter,resolvePageHead:(e,t,n)=>{const l=ie(t.description)?t.description:n.description,r=[...ee(t.head)?t.head:[],...n.head,["title",{},e],["meta",{name:"description",content:l}]];return e0(r)},resolvePageHeadTitle:(e,t)=>[e.title,t.title].filter(n=>!!n).join(" | "),resolvePageLang:(e,t)=>e.lang||t.lang||"en-US",resolvePageLayout:(e,t)=>{let n;if(e.path){const l=e.frontmatter.layout;ie(l)?n=l:n=d0}else n=p0;return t[n]},resolveRouteLocale:(e,t)=>l0(e,t),resolveSiteLocaleData:(e,t)=>({...e,...e.locales[t]})}),fr=$({name:"ClientOnly",setup(e,t){const n=X(!1);return _e(()=>{n.value=!0}),()=>{var l,r;return n.value?(r=(l=t.slots).default)==null?void 0:r.call(l):null}}}),oc=$({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(e){const t=Ee(),n=w(()=>Xs[e.pageKey||t.value.key]);return()=>n.value?o(n.value):o("div","404 Not Found")}}),wt=(e={})=>e,Be=e=>pn(e)?e:`/pinkpig/${Qs(e)}`;const h0={};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const mn=typeof window<"u";function f0(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const me=Object.assign;function Fr(e,t){const n={};for(const l in t){const r=t[l];n[l]=gt(r)?r.map(e):e(r)}return n}const Xn=()=>{},gt=Array.isArray,v0=/\/$/,m0=e=>e.replace(v0,"");function Vr(e,t,n="/"){let l,r={},i="",a="";const s=t.indexOf("#");let c=t.indexOf("?");return s<c&&s>=0&&(c=-1),c>-1&&(l=t.slice(0,c),i=t.slice(c+1,s>-1?s:t.length),r=e(i)),s>-1&&(l=l||t.slice(0,s),a=t.slice(s,t.length)),l=_0(l??t,n),{fullPath:l+(i&&"?")+i+a,path:l,query:r,hash:a}}function E0(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function io(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function g0(e,t,n){const l=t.matched.length-1,r=n.matched.length-1;return l>-1&&l===r&&Pn(t.matched[l],n.matched[r])&&sc(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Pn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function sc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!b0(e[n],t[n]))return!1;return!0}function b0(e,t){return gt(e)?ao(e,t):gt(t)?ao(t,e):e===t}function ao(e,t){return gt(t)?e.length===t.length&&e.every((n,l)=>n===t[l]):e.length===1&&e[0]===t}function _0(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),l=e.split("/"),r=l[l.length-1];(r===".."||r===".")&&l.push("");let i=n.length-1,a,s;for(a=0;a<l.length;a++)if(s=l[a],s!==".")if(s==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+l.slice(a-(a===l.length?1:0)).join("/")}var sl;(function(e){e.pop="pop",e.push="push"})(sl||(sl={}));var Zn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Zn||(Zn={}));function A0(e){if(!e)if(mn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),m0(e)}const y0=/^[^#]+#/;function B0(e,t){return e.replace(y0,"#")+t}function w0(e,t){const n=document.documentElement.getBoundingClientRect(),l=e.getBoundingClientRect();return{behavior:t.behavior,left:l.left-n.left-(t.left||0),top:l.top-n.top-(t.top||0)}}const vr=()=>({left:window.pageXOffset,top:window.pageYOffset});function D0(e){let t;if("el"in e){const n=e.el,l=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?l?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=w0(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function oo(e,t){return(history.state?history.state.position-t:-1)+e}const ci=new Map;function L0(e,t){ci.set(e,t)}function T0(e){const t=ci.get(e);return ci.delete(e),t}let C0=()=>location.protocol+"//"+location.host;function cc(e,t){const{pathname:n,search:l,hash:r}=t,i=e.indexOf("#");if(i>-1){let s=r.includes(e.slice(i))?e.slice(i).length:1,c=r.slice(s);return c[0]!=="/"&&(c="/"+c),io(c,"")}return io(n,e)+l+r}function k0(e,t,n,l){let r=[],i=[],a=null;const s=({state:f})=>{const v=cc(e,location),g=n.value,B=t.value;let y=0;if(f){if(n.value=v,t.value=f,a&&a===g){a=null;return}y=B?f.position-B.position:0}else l(v);r.forEach(A=>{A(n.value,g,{delta:y,type:sl.pop,direction:y?y>0?Zn.forward:Zn.back:Zn.unknown})})};function c(){a=n.value}function u(f){r.push(f);const v=()=>{const g=r.indexOf(f);g>-1&&r.splice(g,1)};return i.push(v),v}function d(){const{history:f}=window;f.state&&f.replaceState(me({},f.state,{scroll:vr()}),"")}function p(){for(const f of i)f();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function so(e,t,n,l=!1,r=!1){return{back:e,current:t,forward:n,replaced:l,position:window.history.length,scroll:r?vr():null}}function P0(e){const{history:t,location:n}=window,l={value:cc(e,n)},r={value:t.state};r.value||i(l.value,{back:null,current:l.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const p=e.indexOf("#"),f=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+c:C0()+e+c;try{t[d?"replaceState":"pushState"](u,"",f),r.value=u}catch(v){console.error(v),n[d?"replace":"assign"](f)}}function a(c,u){const d=me({},t.state,so(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,d,!0),l.value=c}function s(c,u){const d=me({},r.value,t.state,{forward:c,scroll:vr()});i(d.current,d,!0);const p=me({},so(l.value,c,null),{position:d.position+1},u);i(c,p,!1),l.value=c}return{location:l,state:r,push:s,replace:a}}function I0(e){e=A0(e);const t=P0(e),n=k0(e,t.state,t.location,t.replace);function l(i,a=!0){a||n.pauseListeners(),history.go(i)}const r=me({location:"",base:e,go:l,createHref:B0.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function x0(e){return typeof e=="string"||e&&typeof e=="object"}function uc(e){return typeof e=="string"||typeof e=="symbol"}const Pt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},dc=Symbol("");var co;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(co||(co={}));function In(e,t){return me(new Error,{type:e,[dc]:!0},t)}function Tt(e,t){return e instanceof Error&&dc in e&&(t==null||!!(e.type&t))}const uo="[^/]+?",O0={sensitive:!1,strict:!1,start:!0,end:!0},R0=/[.+*?^${}()[\]/\\]/g;function S0(e,t){const n=me({},O0,t),l=[];let r=n.start?"^":"";const i=[];for(const u of e){const d=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let p=0;p<u.length;p++){const f=u[p];let v=40+(n.sensitive?.25:0);if(f.type===0)p||(r+="/"),r+=f.value.replace(R0,"\\$&"),v+=40;else if(f.type===1){const{value:g,repeatable:B,optional:y,regexp:A}=f;i.push({name:g,repeatable:B,optional:y});const T=A||uo;if(T!==uo){v+=10;try{new RegExp(`(${T})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${g}" (${T}): `+C.message)}}let _=B?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;p||(_=y&&u.length<2?`(?:/${_})`:"/"+_),y&&(_+="?"),r+=_,v+=20,y&&(v+=-8),B&&(v+=-20),T===".*"&&(v+=-50)}d.push(v)}l.push(d)}if(n.strict&&n.end){const u=l.length-1;l[u][l[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const a=new RegExp(r,n.sensitive?"":"i");function s(u){const d=u.match(a),p={};if(!d)return null;for(let f=1;f<d.length;f++){const v=d[f]||"",g=i[f-1];p[g.name]=v&&g.repeatable?v.split("/"):v}return p}function c(u){let d="",p=!1;for(const f of e){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const v of f)if(v.type===0)d+=v.value;else if(v.type===1){const{value:g,repeatable:B,optional:y}=v,A=g in u?u[g]:"";if(gt(A)&&!B)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const T=gt(A)?A.join("/"):A;if(!T)if(y)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${g}"`);d+=T}}return d||"/"}return{re:a,score:l,keys:i,parse:s,stringify:c}}function F0(e,t){let n=0;for(;n<e.length&&n<t.length;){const l=t[n]-e[n];if(l)return l;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function V0(e,t){let n=0;const l=e.score,r=t.score;for(;n<l.length&&n<r.length;){const i=F0(l[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-l.length)===1){if(po(l))return 1;if(po(r))return-1}return r.length-l.length}function po(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const M0={type:0,value:""},$0=/[a-zA-Z0-9_]/;function N0(e){if(!e)return[[]];if(e==="/")return[[M0]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=0,l=n;const r=[];let i;function a(){i&&r.push(i),i=[]}let s=0,c,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;s<e.length;){if(c=e[s++],c==="\\"&&n!==2){l=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),a()):c===":"?(p(),n=1):f();break;case 4:f(),n=l;break;case 1:c==="("?n=2:$0.test(c)?f():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&s--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&s--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),p(),a(),r}function j0(e,t,n){const l=S0(N0(e.path),n),r=me(l,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function H0(e,t){const n=[],l=new Map;t=vo({strict:!1,end:!0,sensitive:!1},t);function r(d){return l.get(d)}function i(d,p,f){const v=!f,g=z0(d);g.aliasOf=f&&f.record;const B=vo(t,d),y=[g];if("alias"in d){const _=typeof d.alias=="string"?[d.alias]:d.alias;for(const C of _)y.push(me({},g,{components:f?f.record.components:g.components,path:C,aliasOf:f?f.record:g}))}let A,T;for(const _ of y){const{path:C}=_;if(p&&C[0]!=="/"){const M=p.record.path,L=M[M.length-1]==="/"?"":"/";_.path=p.record.path+(C&&L+C)}if(A=j0(_,p,B),f?f.alias.push(A):(T=T||A,T!==A&&T.alias.push(A),v&&d.name&&!fo(A)&&a(d.name)),g.children){const M=g.children;for(let L=0;L<M.length;L++)i(M[L],A,f&&f.children[L])}f=f||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&c(A)}return T?()=>{a(T)}:Xn}function a(d){if(uc(d)){const p=l.get(d);p&&(l.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(a),p.alias.forEach(a))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&l.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function s(){return n}function c(d){let p=0;for(;p<n.length&&V0(d,n[p])>=0&&(d.record.path!==n[p].record.path||!pc(d,n[p]));)p++;n.splice(p,0,d),d.record.name&&!fo(d)&&l.set(d.record.name,d)}function u(d,p){let f,v={},g,B;if("name"in d&&d.name){if(f=l.get(d.name),!f)throw In(1,{location:d});B=f.record.name,v=me(ho(p.params,f.keys.filter(T=>!T.optional).map(T=>T.name)),d.params&&ho(d.params,f.keys.map(T=>T.name))),g=f.stringify(v)}else if("path"in d)g=d.path,f=n.find(T=>T.re.test(g)),f&&(v=f.parse(g),B=f.record.name);else{if(f=p.name?l.get(p.name):n.find(T=>T.re.test(p.path)),!f)throw In(1,{location:d,currentLocation:p});B=f.record.name,v=me({},p.params,d.params),g=f.stringify(v)}const y=[];let A=f;for(;A;)y.unshift(A.record),A=A.parent;return{name:B,path:g,params:v,matched:y,meta:G0(y)}}return e.forEach(d=>i(d)),{addRoute:i,resolve:u,removeRoute:a,getRoutes:s,getRecordMatcher:r}}function ho(e,t){const n={};for(const l of t)l in e&&(n[l]=e[l]);return n}function z0(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:q0(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function q0(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const l in e.components)t[l]=typeof n=="object"?n[l]:n;return t}function fo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function G0(e){return e.reduce((t,n)=>me(t,n.meta),{})}function vo(e,t){const n={};for(const l in e)n[l]=l in t?t[l]:e[l];return n}function pc(e,t){return t.children.some(n=>n===e||pc(e,n))}const hc=/#/g,U0=/&/g,W0=/\//g,J0=/=/g,K0=/\?/g,fc=/\+/g,Y0=/%5B/g,Q0=/%5D/g,vc=/%5E/g,X0=/%60/g,mc=/%7B/g,Z0=/%7C/g,Ec=/%7D/g,eh=/%20/g;function Ji(e){return encodeURI(""+e).replace(Z0,"|").replace(Y0,"[").replace(Q0,"]")}function th(e){return Ji(e).replace(mc,"{").replace(Ec,"}").replace(vc,"^")}function ui(e){return Ji(e).replace(fc,"%2B").replace(eh,"+").replace(hc,"%23").replace(U0,"%26").replace(X0,"`").replace(mc,"{").replace(Ec,"}").replace(vc,"^")}function nh(e){return ui(e).replace(J0,"%3D")}function lh(e){return Ji(e).replace(hc,"%23").replace(K0,"%3F")}function rh(e){return e==null?"":lh(e).replace(W0,"%2F")}function lr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function ih(e){const t={};if(e===""||e==="?")return t;const l=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<l.length;++r){const i=l[r].replace(fc," "),a=i.indexOf("="),s=lr(a<0?i:i.slice(0,a)),c=a<0?null:lr(i.slice(a+1));if(s in t){let u=t[s];gt(u)||(u=t[s]=[u]),u.push(c)}else t[s]=c}return t}function mo(e){let t="";for(let n in e){const l=e[n];if(n=nh(n),l==null){l!==void 0&&(t+=(t.length?"&":"")+n);continue}(gt(l)?l.map(i=>i&&ui(i)):[l&&ui(l)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function ah(e){const t={};for(const n in e){const l=e[n];l!==void 0&&(t[n]=gt(l)?l.map(r=>r==null?null:""+r):l==null?l:""+l)}return t}const oh=Symbol(""),Eo=Symbol(""),mr=Symbol(""),Ki=Symbol(""),di=Symbol("");function Hn(){let e=[];function t(l){return e.push(l),()=>{const r=e.indexOf(l);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Ut(e,t,n,l,r){const i=l&&(l.enterCallbacks[r]=l.enterCallbacks[r]||[]);return()=>new Promise((a,s)=>{const c=p=>{p===!1?s(In(4,{from:n,to:t})):p instanceof Error?s(p):x0(p)?s(In(2,{from:t,to:p})):(i&&l.enterCallbacks[r]===i&&typeof p=="function"&&i.push(p),a())},u=e.call(l&&l.instances[r],t,n,c);let d=Promise.resolve(u);e.length<3&&(d=d.then(c)),d.catch(p=>s(p))})}function Mr(e,t,n,l){const r=[];for(const i of e)for(const a in i.components){let s=i.components[a];if(!(t!=="beforeRouteEnter"&&!i.instances[a]))if(sh(s)){const u=(s.__vccOpts||s)[t];u&&r.push(Ut(u,n,l,i,a))}else{let c=s();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${i.path}"`));const d=f0(u)?u.default:u;i.components[a]=d;const f=(d.__vccOpts||d)[t];return f&&Ut(f,n,l,i,a)()}))}}return r}function sh(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function pi(e){const t=ve(mr),n=ve(Ki),l=w(()=>t.resolve(vt(e.to))),r=w(()=>{const{matched:c}=l.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const f=p.findIndex(Pn.bind(null,d));if(f>-1)return f;const v=go(c[u-2]);return u>1&&go(d)===v&&p[p.length-1].path!==v?p.findIndex(Pn.bind(null,c[u-2])):f}),i=w(()=>r.value>-1&&ph(n.params,l.value.params)),a=w(()=>r.value>-1&&r.value===n.matched.length-1&&sc(n.params,l.value.params));function s(c={}){return dh(c)?t[vt(e.replace)?"replace":"push"](vt(e.to)).catch(Xn):Promise.resolve()}return{route:l,href:w(()=>l.value.href),isActive:i,isExactActive:a,navigate:s}}const ch=$({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:pi,setup(e,{slots:t}){const n=hl(pi(e)),{options:l}=ve(mr),r=w(()=>({[bo(e.activeClass,l.linkActiveClass,"router-link-active")]:n.isActive,[bo(e.exactActiveClass,l.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:o("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),uh=ch;function dh(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ph(e,t){for(const n in t){const l=t[n],r=e[n];if(typeof l=="string"){if(l!==r)return!1}else if(!gt(r)||r.length!==l.length||l.some((i,a)=>i!==r[a]))return!1}return!0}function go(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const bo=(e,t,n)=>e??t??n,hh=$({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const l=ve(di),r=w(()=>e.route||l.value),i=ve(Eo,0),a=w(()=>{let u=vt(i);const{matched:d}=r.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),s=w(()=>r.value.matched[a.value]);Et(Eo,w(()=>a.value+1)),Et(oh,s),Et(di,r);const c=X();return fe(()=>[c.value,s.value,e.name],([u,d,p],[f,v,g])=>{d&&(d.instances[p]=u,v&&v!==d&&u&&u===f&&(d.leaveGuards.size||(d.leaveGuards=v.leaveGuards),d.updateGuards.size||(d.updateGuards=v.updateGuards))),u&&d&&(!v||!Pn(d,v)||!f)&&(d.enterCallbacks[p]||[]).forEach(B=>B(u))},{flush:"post"}),()=>{const u=r.value,d=e.name,p=s.value,f=p&&p.components[d];if(!f)return _o(n.default,{Component:f,route:u});const v=p.props[d],g=v?v===!0?u.params:typeof v=="function"?v(u):v:null,y=o(f,me({},g,t,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return _o(n.default,{Component:y,route:u})||y}}});function _o(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const gc=hh;function fh(e){const t=H0(e.routes,e),n=e.parseQuery||ih,l=e.stringifyQuery||mo,r=e.history,i=Hn(),a=Hn(),s=Hn(),c=Se(Pt);let u=Pt;mn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Fr.bind(null,k=>""+k),p=Fr.bind(null,rh),f=Fr.bind(null,lr);function v(k,G){let z,K;return uc(k)?(z=t.getRecordMatcher(k),K=G):K=k,t.addRoute(K,z)}function g(k){const G=t.getRecordMatcher(k);G&&t.removeRoute(G)}function B(){return t.getRoutes().map(k=>k.record)}function y(k){return!!t.getRecordMatcher(k)}function A(k,G){if(G=me({},G||c.value),typeof k=="string"){const E=Vr(n,k,G.path),D=t.resolve({path:E.path},G),I=r.createHref(E.fullPath);return me(E,D,{params:f(D.params),hash:lr(E.hash),redirectedFrom:void 0,href:I})}let z;if("path"in k)z=me({},k,{path:Vr(n,k.path,G.path).path});else{const E=me({},k.params);for(const D in E)E[D]==null&&delete E[D];z=me({},k,{params:p(E)}),G.params=p(G.params)}const K=t.resolve(z,G),ce=k.hash||"";K.params=d(f(K.params));const Ae=E0(l,me({},k,{hash:th(ce),path:K.path})),m=r.createHref(Ae);return me({fullPath:Ae,hash:ce,query:l===mo?ah(k.query):k.query||{}},K,{redirectedFrom:void 0,href:m})}function T(k){return typeof k=="string"?Vr(n,k,c.value.path):me({},k)}function _(k,G){if(u!==k)return In(8,{from:G,to:k})}function C(k){return F(k)}function M(k){return C(me(T(k),{replace:!0}))}function L(k){const G=k.matched[k.matched.length-1];if(G&&G.redirect){const{redirect:z}=G;let K=typeof z=="function"?z(k):z;return typeof K=="string"&&(K=K.includes("?")||K.includes("#")?K=T(K):{path:K},K.params={}),me({query:k.query,hash:k.hash,params:"path"in K?{}:k.params},K)}}function F(k,G){const z=u=A(k),K=c.value,ce=k.state,Ae=k.force,m=k.replace===!0,E=L(z);if(E)return F(me(T(E),{state:typeof E=="object"?me({},ce,E.state):ce,force:Ae,replace:m}),G||z);const D=z;D.redirectedFrom=G;let I;return!Ae&&g0(l,K,z)&&(I=In(16,{to:D,from:K}),tt(K,K,!0,!1)),(I?Promise.resolve(I):j(D,K)).catch(P=>Tt(P)?Tt(P,2)?P:bt(P):J(P,D,K)).then(P=>{if(P){if(Tt(P,2))return F(me({replace:m},T(P.to),{state:typeof P.to=="object"?me({},ce,P.to.state):ce,force:Ae}),G||D)}else P=H(D,K,!0,m,ce);return Y(D,K,P),P})}function O(k,G){const z=_(k,G);return z?Promise.reject(z):Promise.resolve()}function R(k){const G=Lt.values().next().value;return G&&typeof G.runWithContext=="function"?G.runWithContext(k):k()}function j(k,G){let z;const[K,ce,Ae]=vh(k,G);z=Mr(K.reverse(),"beforeRouteLeave",k,G);for(const E of K)E.leaveGuards.forEach(D=>{z.push(Ut(D,k,G))});const m=O.bind(null,k,G);return z.push(m),Oe(z).then(()=>{z=[];for(const E of i.list())z.push(Ut(E,k,G));return z.push(m),Oe(z)}).then(()=>{z=Mr(ce,"beforeRouteUpdate",k,G);for(const E of ce)E.updateGuards.forEach(D=>{z.push(Ut(D,k,G))});return z.push(m),Oe(z)}).then(()=>{z=[];for(const E of Ae)if(E.beforeEnter)if(gt(E.beforeEnter))for(const D of E.beforeEnter)z.push(Ut(D,k,G));else z.push(Ut(E.beforeEnter,k,G));return z.push(m),Oe(z)}).then(()=>(k.matched.forEach(E=>E.enterCallbacks={}),z=Mr(Ae,"beforeRouteEnter",k,G),z.push(m),Oe(z))).then(()=>{z=[];for(const E of a.list())z.push(Ut(E,k,G));return z.push(m),Oe(z)}).catch(E=>Tt(E,8)?E:Promise.reject(E))}function Y(k,G,z){s.list().forEach(K=>R(()=>K(k,G,z)))}function H(k,G,z,K,ce){const Ae=_(k,G);if(Ae)return Ae;const m=G===Pt,E=mn?history.state:{};z&&(K||m?r.replace(k.fullPath,me({scroll:m&&E&&E.scroll},ce)):r.push(k.fullPath,ce)),c.value=k,tt(k,G,z,m),bt()}let te;function Ce(){te||(te=r.listen((k,G,z)=>{if(!_t.listening)return;const K=A(k),ce=L(K);if(ce){F(me(ce,{replace:!0}),K).catch(Xn);return}u=K;const Ae=c.value;mn&&L0(oo(Ae.fullPath,z.delta),vr()),j(K,Ae).catch(m=>Tt(m,12)?m:Tt(m,2)?(F(m.to,K).then(E=>{Tt(E,20)&&!z.delta&&z.type===sl.pop&&r.go(-1,!1)}).catch(Xn),Promise.reject()):(z.delta&&r.go(-z.delta,!1),J(m,K,Ae))).then(m=>{m=m||H(K,Ae,!1),m&&(z.delta&&!Tt(m,8)?r.go(-z.delta,!1):z.type===sl.pop&&Tt(m,20)&&r.go(-1,!1)),Y(K,Ae,m)}).catch(Xn)}))}let De=Hn(),W=Hn(),ne;function J(k,G,z){bt(k);const K=W.list();return K.length?K.forEach(ce=>ce(k,G,z)):console.error(k),Promise.reject(k)}function xe(){return ne&&c.value!==Pt?Promise.resolve():new Promise((k,G)=>{De.add([k,G])})}function bt(k){return ne||(ne=!k,Ce(),De.list().forEach(([G,z])=>k?z(k):G()),De.reset()),k}function tt(k,G,z,K){const{scrollBehavior:ce}=e;if(!mn||!ce)return Promise.resolve();const Ae=!z&&T0(oo(k.fullPath,0))||(K||!z)&&history.state&&history.state.scroll||null;return dn().then(()=>ce(k,G,Ae)).then(m=>m&&D0(m)).catch(m=>J(m,k,G))}const Ve=k=>r.go(k);let Ye;const Lt=new Set,_t={currentRoute:c,listening:!0,addRoute:v,removeRoute:g,hasRoute:y,getRoutes:B,resolve:A,options:e,push:C,replace:M,go:Ve,back:()=>Ve(-1),forward:()=>Ve(1),beforeEach:i.add,beforeResolve:a.add,afterEach:s.add,onError:W.add,isReady:xe,install(k){const G=this;k.component("RouterLink",uh),k.component("RouterView",gc),k.config.globalProperties.$router=G,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>vt(c)}),mn&&!Ye&&c.value===Pt&&(Ye=!0,C(r.location).catch(ce=>{}));const z={};for(const ce in Pt)Object.defineProperty(z,ce,{get:()=>c.value[ce],enumerable:!0});k.provide(mr,G),k.provide(Ki,os(z)),k.provide(di,c);const K=k.unmount;Lt.add(k),k.unmount=function(){Lt.delete(k),Lt.size<1&&(u=Pt,te&&te(),te=null,c.value=Pt,Ye=!1,ne=!1),K()}}};function Oe(k){return k.reduce((G,z)=>G.then(()=>R(z)),Promise.resolve())}return _t}function vh(e,t){const n=[],l=[],r=[],i=Math.max(t.matched.length,e.matched.length);for(let a=0;a<i;a++){const s=t.matched[a];s&&(e.matched.find(u=>Pn(u,s))?l.push(s):n.push(s));const c=e.matched[a];c&&(t.matched.find(u=>Pn(u,c))||r.push(c))}return[n,l,r]}function Ue(){return ve(mr)}function Dt(){return ve(Ki)}var qe=Uint8Array,bn=Uint16Array,mh=Int32Array,bc=new qe([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),_c=new qe([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Eh=new qe([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ac=function(e,t){for(var n=new bn(31),l=0;l<31;++l)n[l]=t+=1<<e[l-1];for(var r=new mh(n[30]),l=1;l<30;++l)for(var i=n[l];i<n[l+1];++i)r[i]=i-n[l]<<5|l;return{b:n,r}},yc=Ac(bc,2),Bc=yc.b,gh=yc.r;Bc[28]=258,gh[258]=28;var bh=Ac(_c,0),_h=bh.b,hi=new bn(32768);for(var we=0;we<32768;++we){var Nt=(we&43690)>>1|(we&21845)<<1;Nt=(Nt&52428)>>2|(Nt&13107)<<2,Nt=(Nt&61680)>>4|(Nt&3855)<<4,hi[we]=((Nt&65280)>>8|(Nt&255)<<8)>>1}var el=function(e,t,n){for(var l=e.length,r=0,i=new bn(t);r<l;++r)e[r]&&++i[e[r]-1];var a=new bn(t);for(r=1;r<t;++r)a[r]=a[r-1]+i[r-1]<<1;var s;if(n){s=new bn(1<<t);var c=15-t;for(r=0;r<l;++r)if(e[r])for(var u=r<<4|e[r],d=t-e[r],p=a[e[r]-1]++<<d,f=p|(1<<d)-1;p<=f;++p)s[hi[p]>>c]=u}else for(s=new bn(l),r=0;r<l;++r)e[r]&&(s[r]=hi[a[e[r]-1]++]>>15-e[r]);return s},_l=new qe(288);for(var we=0;we<144;++we)_l[we]=8;for(var we=144;we<256;++we)_l[we]=9;for(var we=256;we<280;++we)_l[we]=7;for(var we=280;we<288;++we)_l[we]=8;var wc=new qe(32);for(var we=0;we<32;++we)wc[we]=5;var Ah=el(_l,9,1),yh=el(wc,5,1),$r=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},ht=function(e,t,n){var l=t/8|0;return(e[l]|e[l+1]<<8)>>(t&7)&n},Nr=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},Bh=function(e){return(e+7)/8|0},Yi=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new qe(e.subarray(t,n))},wh=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],rt=function(e,t,n){var l=new Error(t||wh[e]);if(l.code=e,Error.captureStackTrace&&Error.captureStackTrace(l,rt),!n)throw l;return l},Dh=function(e,t,n,l){var r=e.length,i=l?l.length:0;if(!r||t.f&&!t.l)return n||new qe(0);var a=!n,s=a||t.i!=2,c=t.i;a&&(n=new qe(r*3));var u=function(ce){var Ae=n.length;if(ce>Ae){var m=new qe(Math.max(Ae*2,ce));m.set(n),n=m}},d=t.f||0,p=t.p||0,f=t.b||0,v=t.l,g=t.d,B=t.m,y=t.n,A=r*8;do{if(!v){d=ht(e,p,1);var T=ht(e,p+1,3);if(p+=3,T)if(T==1)v=Ah,g=yh,B=9,y=5;else if(T==2){var L=ht(e,p,31)+257,F=ht(e,p+10,15)+4,O=L+ht(e,p+5,31)+1;p+=14;for(var R=new qe(O),j=new qe(19),Y=0;Y<F;++Y)j[Eh[Y]]=ht(e,p+Y*3,7);p+=F*3;for(var H=$r(j),te=(1<<H)-1,Ce=el(j,H,1),Y=0;Y<O;){var De=Ce[ht(e,p,te)];p+=De&15;var _=De>>4;if(_<16)R[Y++]=_;else{var W=0,ne=0;for(_==16?(ne=3+ht(e,p,3),p+=2,W=R[Y-1]):_==17?(ne=3+ht(e,p,7),p+=3):_==18&&(ne=11+ht(e,p,127),p+=7);ne--;)R[Y++]=W}}var J=R.subarray(0,L),xe=R.subarray(L);B=$r(J),y=$r(xe),v=el(J,B,1),g=el(xe,y,1)}else rt(1);else{var _=Bh(p)+4,C=e[_-4]|e[_-3]<<8,M=_+C;if(M>r){c&&rt(0);break}s&&u(f+C),n.set(e.subarray(_,M),f),t.b=f+=C,t.p=p=M*8,t.f=d;continue}if(p>A){c&&rt(0);break}}s&&u(f+131072);for(var bt=(1<<B)-1,tt=(1<<y)-1,Ve=p;;Ve=p){var W=v[Nr(e,p)&bt],Ye=W>>4;if(p+=W&15,p>A){c&&rt(0);break}if(W||rt(2),Ye<256)n[f++]=Ye;else if(Ye==256){Ve=p,v=null;break}else{var Lt=Ye-254;if(Ye>264){var Y=Ye-257,_t=bc[Y];Lt=ht(e,p,(1<<_t)-1)+Bc[Y],p+=_t}var Oe=g[Nr(e,p)&tt],k=Oe>>4;Oe||rt(3),p+=Oe&15;var xe=_h[k];if(k>3){var _t=_c[k];xe+=Nr(e,p)&(1<<_t)-1,p+=_t}if(p>A){c&&rt(0);break}s&&u(f+131072);var G=f+Lt;if(f<xe){var z=i-xe,K=Math.min(xe,G);for(z+f<0&&rt(3);f<K;++f)n[f]=l[z+f]}for(;f<G;++f)n[f]=n[f-xe]}}t.l=v,t.p=Ve,t.b=f,t.f=d,v&&(d=1,t.m=B,t.d=g,t.n=y)}while(!d);return f!=n.length&&a?Yi(n,0,f):n.subarray(0,f)},Lh=new qe(0),Th=function(e,t){return((e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31)&&rt(6,"invalid zlib data"),(e[1]>>5&1)==+!t&&rt(6,"invalid zlib data: "+(e[1]&32?"need":"unexpected")+" dictionary"),(e[1]>>3&4)+2};function Ch(e,t){return Dh(e.subarray(Th(e,t&&t.dictionary),-4),{i:2},t&&t.out,t&&t.dictionary)}var Ao=typeof TextEncoder<"u"&&new TextEncoder,fi=typeof TextDecoder<"u"&&new TextDecoder,kh=0;try{fi.decode(Lh,{stream:!0}),kh=1}catch{}var Ph=function(e){for(var t="",n=0;;){var l=e[n++],r=(l>127)+(l>223)+(l>239);if(n+r>e.length)return{s:t,r:Yi(e,n-1)};r?r==3?(l=((l&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,t+=String.fromCharCode(55296|l>>10,56320|l&1023)):r&1?t+=String.fromCharCode((l&31)<<6|e[n++]&63):t+=String.fromCharCode((l&15)<<12|(e[n++]&63)<<6|e[n++]&63):t+=String.fromCharCode(l)}};function Ih(e,t){if(t){for(var n=new qe(e.length),l=0;l<e.length;++l)n[l]=e.charCodeAt(l);return n}if(Ao)return Ao.encode(e);for(var r=e.length,i=new qe(e.length+(e.length>>1)),a=0,s=function(d){i[a++]=d},l=0;l<r;++l){if(a+5>i.length){var c=new qe(a+8+(r-l<<1));c.set(i),i=c}var u=e.charCodeAt(l);u<128||t?s(u):u<2048?(s(192|u>>6),s(128|u&63)):u>55295&&u<57344?(u=65536+(u&1047552)|e.charCodeAt(++l)&1023,s(240|u>>18),s(128|u>>12&63),s(128|u>>6&63),s(128|u&63)):(s(224|u>>12),s(128|u>>6&63),s(128|u&63))}return Yi(i,0,a)}function xh(e,t){if(t){for(var n="",l=0;l<e.length;l+=16384)n+=String.fromCharCode.apply(null,e.subarray(l,l+16384));return n}else{if(fi)return fi.decode(e);var r=Ph(e),i=r.s,n=r.r;return n.length&&rt(8),i}}const pe=({name:e="",color:t="currentColor"},{slots:n})=>{var l;return o("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${e}-icon`],viewBox:"0 0 1024 1024",fill:t,"aria-label":`${e} icon`},(l=n.default)==null?void 0:l.call(n))};pe.displayName="IconBase";const Dc=({size:e=48,stroke:t=4,wrapper:n=!0,height:l=2*e})=>{const r=o("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,preserveAspectRatio:"xMidYMid",viewBox:"25 25 50 50"},[o("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",keyTimes:"0;1",repeatCount:"indefinite",values:"0;360"}),o("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round"},[o("animate",{attributeName:"stroke-dasharray",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"1,200;90,200;1,200"}),o("animate",{attributeName:"stroke-dashoffset",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"0;-35px;-125px"})])]);return n?o("div",{class:"loading-icon-wrapper",style:`display:flex;align-items:center;justify-content:center;height:${l}px`},r):r};Dc.displayName="LoadingIcon";const Lc=(e,{slots:t})=>{var n;return(n=t.default)==null?void 0:n.call(t)},Oh=e=>/\b(?:Android|iPhone)/i.test(e),Rh=e=>/version\/([\w.]+) .*(mobile ?safari|safari)/i.test(e),Sh=e=>[/\((ipad);[-\w),; ]+apple/i,/applecoremedia\/[\w.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i].some(t=>t.test(e)),Qi=(e="")=>{if(e){if(typeof e=="number")return new Date(e);const t=Date.parse(e.toString());if(!Number.isNaN(t))return new Date(t)}return null},Er=(e,t)=>{let n=1;for(let l=0;l<e.length;l++)n+=e.charCodeAt(l),n+=n<<10,n^=n>>6;return n+=n<<3,n^=n>>11,n%t};/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Tc=Array.isArray,Fh=e=>typeof e=="function",Vh=e=>typeof e=="string";var Xi=e=>/^(https?:)?\/\//.test(e),Mh=/.md((\?|#).*)?$/,$h=(e,t="/")=>!!(Xi(e)||e.startsWith("/")&&!e.startsWith(t)&&!Mh.test(e)),Cc=e=>Object.prototype.toString.call(e)==="[object Object]";function Nh(){const e=X(!1);return Vn()&&_e(()=>{e.value=!0}),e}function jh(e){return Nh(),w(()=>!!e())}const jr=e=>typeof e=="number",Ot=e=>typeof e=="string",xn=(e,t)=>Ot(e)&&e.startsWith(t),$l=(e,t)=>Ot(e)&&e.endsWith(t),hn=Object.entries,Hh=Object.fromEntries,dt=Object.keys,zh=e=>(e.endsWith(".md")&&(e=`${e.slice(0,-3)}.html`),!e.endsWith("/")&&!e.endsWith(".html")&&(e=`${e}.html`),e=e.replace(/(^|\/)(?:README|index).html$/i,"$1"),e),kc=e=>{const[t,n=""]=e.split("#");return t?`${zh(t)}${n?`#${n}`:""}`:e},yo=e=>Cc(e)&&Ot(e.name),cl=(e,t=!1)=>e?Tc(e)?e.map(n=>Ot(n)?{name:n}:yo(n)?n:null).filter(n=>n!==null):Ot(e)?[{name:e}]:yo(e)?[e]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${t?"":"| false"} | undefined\`, but got`,e),[]):[],Pc=(e,t)=>{if(e){if(Tc(e)&&e.every(Ot))return e;if(Ot(e))return[e];console.error(`Expect ${t||"value"} to be \`string[] | string | undefined\`, but got`,e)}return[]},Ic=e=>Pc(e,"category"),xc=e=>Pc(e,"tag"),gr=e=>xn(e,"/");let qh=class{constructor(){this.messageElements={};const t="message-container",n=document.getElementById(t);n?this.containerElement=n:(this.containerElement=document.createElement("div"),this.containerElement.id=t,document.body.appendChild(this.containerElement))}pop(t,n=2e3){const l=document.createElement("div"),r=Date.now();return l.className="message move-in",l.innerHTML=t,this.containerElement.appendChild(l),this.messageElements[r]=l,n>0&&setTimeout(()=>{this.close(r)},n),r}close(t){if(t){const n=this.messageElements[t];n.classList.remove("move-in"),n.classList.add("move-out"),n.addEventListener("animationend",()=>{n.remove(),delete this.messageElements[t]})}else dt(this.messageElements).forEach(n=>this.close(Number(n)))}destroy(){document.body.removeChild(this.containerElement)}};const Oc=/#.*$/u,Gh=e=>{const t=Oc.exec(e);return t?t[0]:""},Bo=e=>decodeURI(e).replace(Oc,"").replace(/(index)?\.html$/i,"").replace(/(README|index)?\.md$/i,""),Rc=(e,t)=>{if(t===void 0)return!1;const n=Bo(e.path),l=Bo(t),r=Gh(t);return r?r===e.hash&&(!l||n===l):n===l},wo=e=>{const t=atob(e);return xh(Ch(Ih(t,!0)))},Uh=e=>Xi(e)?e:`https://github.com/${e}`,Sc=e=>!Xi(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,On=(e,...t)=>{const n=e.resolve(...t),l=n.matched[n.matched.length-1];if(!(l!=null&&l.redirect))return n;const{redirect:r}=l,i=Fh(r)?r(n):r,a=Vh(i)?{path:i}:i;return On(e,{hash:n.hash,query:n.query,params:n.params,...a})},Wh=e=>{var t;if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)&&!(e.currentTarget&&((t=e.currentTarget.getAttribute("target"))!=null&&t.match(/\b_blank\b/i))))return e.preventDefault(),!0},Ie=({to:e="",class:t="",...n},{slots:l})=>{var s;const r=Ue(),i=kc(e),a=(c={})=>Wh(c)?r.push(e).catch():Promise.resolve();return o("a",{...n,class:["vp-link",t],href:xn(i,"/")?Be(i):i,onClick:a},(s=l.default)==null?void 0:s.call(l))};Ie.displayName="VPLink";const Fc=()=>o(pe,{name:"github"},()=>o("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));Fc.displayName="GitHubIcon";const Vc=()=>o(pe,{name:"gitlab"},()=>o("path",{d:"M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z"}));Vc.displayName="GitLabIcon";const Mc=()=>o(pe,{name:"gitee"},()=>o("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));Mc.displayName="GiteeIcon";const $c=()=>o(pe,{name:"bitbucket"},()=>o("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));$c.displayName="BitbucketIcon";const Nc=()=>o(pe,{name:"source"},()=>o("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));Nc.displayName="SourceIcon";const et=(e,t)=>{var l;const n=(l=(t==null?void 0:t._instance)||Vn())==null?void 0:l.appContext.components;return n?e in n||ut(e)in n||pl(ut(e))in n:!1},Jh=()=>jh(()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator),Kh=()=>{const e=Jh();return w(()=>e.value&&/\b(?:Android|iPhone)/i.test(navigator.userAgent))},Mn=e=>{const t=Ft();return w(()=>e[t.value])};function Do(e,t){var n;const l=Se();return Vi(()=>{l.value=e()},{...t,flush:(n=t==null?void 0:t.flush)!=null?n:"sync"}),Rt(l)}function Zi(e,t){let n,l,r;const i=X(!0),a=()=>{i.value=!0,r()};fe(e,a,{flush:"sync"});const s=typeof t=="function"?t:t.get,c=typeof t=="function"?void 0:t.set,u=hs((d,p)=>(l=d,r=p,{get(){return i.value&&(n=s(),i.value=!1),l(),n},set(f){c==null||c(f)}}));return Object.isExtensible(u)&&(u.trigger=a),u}function $n(e){return Jo()?(Id(e),!0):!1}function Ge(e){return typeof e=="function"?e():vt(e)}const Al=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Yh=Object.prototype.toString,Qh=e=>Yh.call(e)==="[object Object]",ul=()=>{},Lo=Xh();function Xh(){var e,t;return Al&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function jc(e,t){function n(...l){return new Promise((r,i)=>{Promise.resolve(e(()=>t.apply(this,l),{fn:t,thisArg:this,args:l})).then(r).catch(i)})}return n}const Hc=e=>e();function Zh(e,t=!0,n=!0,l=!1){let r=0,i,a=!0,s=ul,c;const u=()=>{i&&(clearTimeout(i),i=void 0,s(),s=ul)};return p=>{const f=Ge(e),v=Date.now()-r,g=()=>c=p();return u(),f<=0?(r=Date.now(),g()):(v>f&&(n||!a)?(r=Date.now(),g()):t&&(c=new Promise((B,y)=>{s=l?y:B,i=setTimeout(()=>{r=Date.now(),a=!0,B(g()),u()},Math.max(0,f-v))})),!n&&!i&&(i=setTimeout(()=>a=!0,f)),a=!1,c)}}function ef(e=Hc){const t=X(!0);function n(){t.value=!1}function l(){t.value=!0}const r=(...i)=>{t.value&&e(...i)};return{isActive:Rt(t),pause:n,resume:l,eventFilter:r}}function tf(e){let t;function n(){return t||(t=e()),t}return n.reset=async()=>{const l=t;t=void 0,l&&await l},n}function zc(e){return e||Vn()}function nf(...e){if(e.length!==1)return Fn(...e);const t=e[0];return typeof t=="function"?Rt(hs(()=>({get:t,set:ul}))):X(t)}function lf(e,t=200,n=!1,l=!0,r=!1){return jc(Zh(t,n,l,r),e)}function rf(e,t,n={}){const{eventFilter:l=Hc,...r}=n;return fe(e,jc(l,t),r)}function af(e,t,n={}){const{eventFilter:l,...r}=n,{eventFilter:i,pause:a,resume:s,isActive:c}=ef(l);return{stop:rf(e,t,{...r,eventFilter:i}),pause:a,resume:s,isActive:c}}function br(e,t=!0,n){zc()?_e(e,n):t?e():dn(e)}function of(e,t){zc(t)&&ml(e,t)}function sf(e,t,n={}){const{immediate:l=!0}=n,r=X(!1);let i=null;function a(){i&&(clearTimeout(i),i=null)}function s(){r.value=!1,a()}function c(...u){a(),r.value=!0,i=setTimeout(()=>{r.value=!1,i=null,e(...u)},Ge(t))}return l&&(r.value=!0,Al&&c()),$n(s),{isPending:Rt(r),start:c,stop:s}}function rr(e=!1,t={}){const{truthyValue:n=!0,falsyValue:l=!1}=t,r=Ne(e),i=X(e);function a(s){if(arguments.length)return i.value=s,i.value;{const c=Ge(n);return i.value=i.value===c?Ge(l):c,i.value}}return r?a:[i,a]}function It(e){var t;const n=Ge(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Xt=Al?window:void 0,qc=Al?window.document:void 0,Gc=Al?window.navigator:void 0;function Fe(...e){let t,n,l,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,l,r]=e,t=Xt):[t,n,l,r]=e,!t)return ul;Array.isArray(n)||(n=[n]),Array.isArray(l)||(l=[l]);const i=[],a=()=>{i.forEach(d=>d()),i.length=0},s=(d,p,f,v)=>(d.addEventListener(p,f,v),()=>d.removeEventListener(p,f,v)),c=fe(()=>[It(t),Ge(r)],([d,p])=>{if(a(),!d)return;const f=Qh(p)?{...p}:p;i.push(...n.flatMap(v=>l.map(g=>s(d,v,g,f))))},{immediate:!0,flush:"post"}),u=()=>{c(),a()};return $n(u),u}function cf(){const e=X(!1);return Vn()&&_e(()=>{e.value=!0}),e}function yl(e){const t=cf();return w(()=>(t.value,!!e()))}function Uc(e,t={}){const{window:n=Xt}=t,l=yl(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const i=X(!1),a=u=>{i.value=u.matches},s=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",a):r.removeListener(a))},c=Vi(()=>{l.value&&(s(),r=n.matchMedia(Ge(e)),"addEventListener"in r?r.addEventListener("change",a):r.addListener(a),i.value=r.matches)});return $n(()=>{c(),s(),r=void 0}),i}function To(e,t={}){const{controls:n=!1,navigator:l=Gc}=t,r=yl(()=>l&&"permissions"in l);let i;const a=typeof e=="string"?{name:e}:e,s=X(),c=()=>{i&&(s.value=i.state)},u=tf(async()=>{if(r.value){if(!i)try{i=await l.permissions.query(a),Fe(i,"change",c),c()}catch{s.value="prompt"}return i}});return u(),n?{state:s,isSupported:r,query:u}:s}function uf(e={}){const{navigator:t=Gc,read:n=!1,source:l,copiedDuring:r=1500,legacy:i=!1}=e,a=yl(()=>t&&"clipboard"in t),s=To("clipboard-read"),c=To("clipboard-write"),u=w(()=>a.value||i),d=X(""),p=X(!1),f=sf(()=>p.value=!1,r);function v(){a.value&&s.value!=="denied"?t.clipboard.readText().then(A=>{d.value=A}):d.value=y()}u.value&&n&&Fe(["copy","cut"],v);async function g(A=Ge(l)){u.value&&A!=null&&(a.value&&c.value!=="denied"?await t.clipboard.writeText(A):B(A),d.value=A,p.value=!0,f.start())}function B(A){const T=document.createElement("textarea");T.value=A??"",T.style.position="absolute",T.style.opacity="0",document.body.appendChild(T),T.select(),document.execCommand("copy"),T.remove()}function y(){var A,T,_;return(_=(T=(A=document==null?void 0:document.getSelection)==null?void 0:A.call(document))==null?void 0:T.toString())!=null?_:""}return{isSupported:u,text:d,copied:p,copy:g}}const Nl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},jl="__vueuse_ssr_handlers__",df=pf();function pf(){return jl in Nl||(Nl[jl]=Nl[jl]||{}),Nl[jl]}function hf(e,t){return df[e]||t}function ff(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const vf={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Co="vueuse-storage";function ea(e,t,n,l={}){var r;const{flush:i="pre",deep:a=!0,listenToStorageChanges:s=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:d,window:p=Xt,eventFilter:f,onError:v=R=>{console.error(R)},initOnMounted:g}=l,B=(d?Se:X)(typeof t=="function"?t():t);if(!n)try{n=hf("getDefaultStorage",()=>{var R;return(R=Xt)==null?void 0:R.localStorage})()}catch(R){v(R)}if(!n)return B;const y=Ge(t),A=ff(y),T=(r=l.serializer)!=null?r:vf[A],{pause:_,resume:C}=af(B,()=>M(B.value),{flush:i,deep:a,eventFilter:f});return p&&s&&br(()=>{Fe(p,"storage",O),Fe(p,Co,F),g&&O()}),g||O(),B;function M(R){try{if(R==null)n.removeItem(e);else{const j=T.write(R),Y=n.getItem(e);Y!==j&&(n.setItem(e,j),p&&p.dispatchEvent(new CustomEvent(Co,{detail:{key:e,oldValue:Y,newValue:j,storageArea:n}})))}}catch(j){v(j)}}function L(R){const j=R?R.newValue:n.getItem(e);if(j==null)return c&&y!=null&&n.setItem(e,T.write(y)),y;if(!R&&u){const Y=T.read(j);return typeof u=="function"?u(Y,y):A==="object"&&!Array.isArray(Y)?{...y,...Y}:Y}else return typeof j!="string"?j:T.read(j)}function F(R){O(R.detail)}function O(R){if(!(R&&R.storageArea!==n)){if(R&&R.key==null){B.value=y;return}if(!(R&&R.key!==e)){_();try{(R==null?void 0:R.newValue)!==T.write(B.value)&&(B.value=L(R))}catch(j){v(j)}finally{R?dn(C):C()}}}}}function mf(e){return Uc("(prefers-color-scheme: dark)",e)}function Ef(e,t,n={}){const{window:l=Xt,...r}=n;let i;const a=yl(()=>l&&"ResizeObserver"in l),s=()=>{i&&(i.disconnect(),i=void 0)},c=w(()=>Array.isArray(e)?e.map(p=>It(p)):[It(e)]),u=fe(c,p=>{if(s(),a.value&&l){i=new ResizeObserver(t);for(const f of p)f&&i.observe(f,r)}},{immediate:!0,flush:"post",deep:!0}),d=()=>{s(),u()};return $n(d),{isSupported:a,stop:d}}function gf(e,t={width:0,height:0},n={}){const{window:l=Xt,box:r="content-box"}=n,i=w(()=>{var p,f;return(f=(p=It(e))==null?void 0:p.namespaceURI)==null?void 0:f.includes("svg")}),a=X(t.width),s=X(t.height),{stop:c}=Ef(e,([p])=>{const f=r==="border-box"?p.borderBoxSize:r==="content-box"?p.contentBoxSize:p.devicePixelContentBoxSize;if(l&&i.value){const v=It(e);if(v){const g=l.getComputedStyle(v);a.value=Number.parseFloat(g.width),s.value=Number.parseFloat(g.height)}}else if(f){const v=Array.isArray(f)?f:[f];a.value=v.reduce((g,{inlineSize:B})=>g+B,0),s.value=v.reduce((g,{blockSize:B})=>g+B,0)}else a.value=p.contentRect.width,s.value=p.contentRect.height},n);br(()=>{const p=It(e);p&&(a.value="offsetWidth"in p?p.offsetWidth:t.width,s.value="offsetHeight"in p?p.offsetHeight:t.height)});const u=fe(()=>It(e),p=>{a.value=p?t.width:0,s.value=p?t.height:0});function d(){c(),u()}return{width:a,height:s,stop:d}}const ko=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function ta(e,t={}){const{document:n=qc,autoExit:l=!1}=t,r=w(()=>{var A;return(A=It(e))!=null?A:n==null?void 0:n.querySelector("html")}),i=X(!1),a=w(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(A=>n&&A in n||r.value&&A in r.value)),s=w(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(A=>n&&A in n||r.value&&A in r.value)),c=w(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(A=>n&&A in n||r.value&&A in r.value)),u=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(A=>n&&A in n),d=yl(()=>r.value&&n&&a.value!==void 0&&s.value!==void 0&&c.value!==void 0),p=()=>u?(n==null?void 0:n[u])===r.value:!1,f=()=>{if(c.value){if(n&&n[c.value]!=null)return n[c.value];{const A=r.value;if((A==null?void 0:A[c.value])!=null)return!!A[c.value]}}return!1};async function v(){if(!(!d.value||!i.value)){if(s.value)if((n==null?void 0:n[s.value])!=null)await n[s.value]();else{const A=r.value;(A==null?void 0:A[s.value])!=null&&await A[s.value]()}i.value=!1}}async function g(){if(!d.value||i.value)return;f()&&await v();const A=r.value;a.value&&(A==null?void 0:A[a.value])!=null&&(await A[a.value](),i.value=!0)}async function B(){await(i.value?v():g())}const y=()=>{const A=f();(!A||A&&p())&&(i.value=A)};return Fe(n,ko,y,!1),Fe(()=>It(r),ko,y,!1),l&&$n(v),{isSupported:d,isFullscreen:i,enter:g,exit:v,toggle:B}}function Hr(e){return typeof Window<"u"&&e instanceof Window?e.document.documentElement:typeof Document<"u"&&e instanceof Document?e.documentElement:e}function zr(e,t=ul,n={}){const{immediate:l=!0,manual:r=!1,type:i="text/javascript",async:a=!0,crossOrigin:s,referrerPolicy:c,noModule:u,defer:d,document:p=qc,attrs:f={}}=n,v=X(null);let g=null;const B=T=>new Promise((_,C)=>{const M=O=>(v.value=O,_(O),O);if(!p){_(!1);return}let L=!1,F=p.querySelector(`script[src="${Ge(e)}"]`);F?F.hasAttribute("data-loaded")&&M(F):(F=p.createElement("script"),F.type=i,F.async=a,F.src=Ge(e),d&&(F.defer=d),s&&(F.crossOrigin=s),u&&(F.noModule=u),c&&(F.referrerPolicy=c),Object.entries(f).forEach(([O,R])=>F==null?void 0:F.setAttribute(O,R)),L=!0),F.addEventListener("error",O=>C(O)),F.addEventListener("abort",O=>C(O)),F.addEventListener("load",()=>{F.setAttribute("data-loaded","true"),t(F),M(F)}),L&&(F=p.head.appendChild(F)),T||M(F)}),y=(T=!0)=>(g||(g=B(T)),g),A=()=>{if(!p)return;g=null,v.value&&(v.value=null);const T=p.querySelector(`script[src="${Ge(e)}"]`);T&&p.head.removeChild(T)};return l&&!r&&br(y),r||of(A),{scriptTag:v,load:y,unload:A}}function Wc(e){const t=window.getComputedStyle(e);if(t.overflowX==="scroll"||t.overflowY==="scroll"||t.overflowX==="auto"&&e.clientWidth<e.scrollWidth||t.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const n=e.parentNode;return!n||n.tagName==="BODY"?!1:Wc(n)}}function bf(e){const t=e||window.event,n=t.target;return Wc(n)?!1:t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)}const Hl=new WeakMap;function Jc(e,t=!1){const n=X(t);let l=null,r;fe(nf(e),s=>{const c=Hr(Ge(s));if(c){const u=c;Hl.get(u)||Hl.set(u,r),n.value&&(u.style.overflow="hidden")}},{immediate:!0});const i=()=>{const s=Hr(Ge(e));!s||n.value||(Lo&&(l=Fe(s,"touchmove",c=>{bf(c)},{passive:!1})),s.style.overflow="hidden",n.value=!0)},a=()=>{var s;const c=Hr(Ge(e));!c||!n.value||(Lo&&(l==null||l()),c.style.overflow=(s=Hl.get(c))!=null?s:"",Hl.delete(c),n.value=!1)};return $n(a),w({get(){return n.value},set(s){s?i():a()}})}function _f(e={}){const{window:t=Xt,behavior:n="auto"}=e;if(!t)return{x:X(0),y:X(0)};const l=X(t.scrollX),r=X(t.scrollY),i=w({get(){return l.value},set(s){scrollTo({left:s,behavior:n})}}),a=w({get(){return r.value},set(s){scrollTo({top:s,behavior:n})}});return Fe(t,"scroll",()=>{l.value=t.scrollX,r.value=t.scrollY},{capture:!1,passive:!0}),{x:i,y:a}}function Af(e={}){const{window:t=Xt,initialWidth:n=Number.POSITIVE_INFINITY,initialHeight:l=Number.POSITIVE_INFINITY,listenOrientation:r=!0,includeScrollbar:i=!0}=e,a=X(n),s=X(l),c=()=>{t&&(i?(a.value=t.innerWidth,s.value=t.innerHeight):(a.value=t.document.documentElement.clientWidth,s.value=t.document.documentElement.clientHeight))};if(c(),br(c),Fe("resize",c,{passive:!0}),r){const u=Uc("(orientation: portrait)");fe(u,()=>c())}return{width:a,height:s}}var yf=$({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(e){const t=w(()=>{const l=["font-icon icon"],r=`fas fa-${e.icon}`;return l.push("fa-fw fa-sm"),l.push(e.icon.includes(" ")?e.icon:r),l}),n=w(()=>{const l={};return e.color&&(l.color=e.color),e.size&&(l["font-size"]=Number.isNaN(Number(e.size))?e.size:`${e.size}px`),dt(l).length?l:null});return()=>e.icon?o("span",{key:e.icon,class:t.value,style:n.value}):null}});const Kc=({type:e="info",text:t="",vertical:n,color:l},{slots:r})=>{var i;return o("span",{class:["vp-badge",e,{diy:l}],style:{verticalAlign:n??!1,backgroundColor:l??!1}},((i=r.default)==null?void 0:i.call(r))||t)};Kc.displayName="Badge";const Yc=({title:e,desc:t="",logo:n,background:l,color:r,link:i})=>{const a=[n?o("img",{class:"vp-card-logo",src:Be(n),loading:"lazy","no-view":""}):null,o("div",{class:"vp-card-content"},[o("div",{class:"vp-card-title",innerHTML:e}),o("hr"),o("div",{class:"vp-card-desc",innerHTML:t})])],s={};return l&&(s.background=l),r&&(s.color=r),i?ol(i)?o("a",{class:"vp-card",href:i,target:"_blank",style:s},a):o(Ie,{to:i,class:"vp-card",style:s},()=>a):o("div",{class:"vp-card",style:s},a)};Yc.displayName="VPCard";const Po=e=>ie(e)?e:`${e}px`,Bf=(e,t=0)=>{const n=Se(),l=w(()=>Po(vt(e.width)||"100%")),r=X("auto"),i=c=>{if(ie(c)){const[u,d]=c.split(":"),p=Number(u)/Number(d);if(!Number.isNaN(p))return p}return typeof c=="number"?c:16/9},a=c=>{const u=vt(e.height),d=i(vt(e.ratio));return u?Po(u):`${Number(c)/d+vt(t)}px`},s=()=>{n.value&&(r.value=a(n.value.clientWidth))};return _e(()=>{s(),Ne(t)&&fe(t,s),Fe("orientationchange",s),Fe("resize",s)}),{el:n,width:l,height:r,resize:s}},wf=e=>pn(e)?e:Be(e);var Df={"/":{hint:"<p>This browser does not support embedding PDFs. Please download the PDF to view it: <a href='[url]' target='_blank'>Download PDF</a></p>"}};const qr=e=>{console.error("[PDF]: "+e)},Lf=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)},Tf=e=>e==="string"?document.querySelector(e):e instanceof HTMLElement?e:document.body,Cf=e=>{let t="";return e&&(t+=hn(e).map(([n,l])=>n==="noToolbar"?`toolbar=${l?0:1}`:`${encodeURIComponent(n)}=${encodeURIComponent(l)}`).join("&"),t&&(t=`#${t.slice(0,t.length-1)}`)),t},kf=(e,t,n,l,r)=>{Lf(t);const i=`${e==="pdfjs"?`${Gi(Be(null))}web/viewer.html?file=${encodeURIComponent(n)}`:n}${Cf(l)}`,a=e==="pdfjs"||e==="iframe"?"iframe":"embed",s=document.createElement(a);return s.className="pdf-viewer",s.type="application/pdf",s.title=r,s.src=i,s instanceof HTMLIFrameElement&&(s.allow="fullscreen"),t.classList.add("pdf-viewer-container"),t.appendChild(s),t.getElementsByTagName(a)[0]},Pf=(e,t=null,{title:n,hint:l,options:r={}})=>{var g,B;if(typeof window>"u"||!((g=window==null?void 0:window.navigator)!=null&&g.userAgent))return null;const{navigator:i}=window,{userAgent:a}=i,s=window.Promise!==void 0,c=Sh(a)||Oh(a),u=!c&&Rh(a),d=!c&&/firefox/i.test(a)&&a.split("rv:").length>1?parseInt(a.split("rv:")[1].split(".")[0],10)>18:!1,p=!c&&(s||d);if(!ie(e))return qr("URL is not valid"),null;const f=Tf(t);if(!f)return qr("Target element cannot be determined"),null;const v=n||((B=/\/([^/]+).pdf/.exec(e))==null?void 0:B[1])||"PDF Viewer";return p||!c?kf(u?"iframe":"embed",f,e,r,v):(f.innerHTML=l.replace(/\[url\]/g,e),qr("This browser does not support embedded PDFs"),null)};var If=$({name:"PDF",props:{url:{type:String,required:!0},title:{type:String,default:""},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:void 0},ratio:{type:[String,Number],default:16/9},page:{type:[String,Number],default:1},noToolbar:Boolean,zoom:{type:[String,Number],default:100}},setup(e){const{el:t,width:n,height:l,resize:r}=Bf(e),i=Mn(Df);return _e(()=>{Pf(wf(e.url),t.value,{title:e.title,hint:i.value.hint,options:{page:e.page,noToolbar:e.noToolbar,zoom:e.zoom}}),r()}),()=>o("div",{class:"pdf-viewer-wrapper",ref:t,style:{width:n.value,height:l.value}})}});const Qc=()=>o(pe,{name:"back-to-top"},()=>[o("path",{d:"M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z"}),o("path",{d:"m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z"})]);Qc.displayName="BackToTopIcon";var xf={"/":{backToTop:"Back to top"}},Of=$({name:"BackToTop",props:{threshold:{type:Number,default:100},noProgress:Boolean},setup(e){const t=ye(),n=Mn(xf),l=Se(),{height:r}=gf(l),{height:i}=Af(),{y:a}=_f(),s=w(()=>t.value.backToTop!==!1&&a.value>e.threshold),c=w(()=>a.value/(r.value-i.value)*100);return _e(()=>{l.value=document.body}),()=>o(Qt,{name:"fade"},()=>s.value?o("button",{type:"button",class:"vp-back-to-top-button","aria-label":n.value.backToTop,"data-balloon-pos":"left",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[e.noProgress?null:o("span",{class:"vp-scroll-progress",role:"progressbar","aria-labelledby":"loadinglabel","aria-valuenow":c.value},o("svg",o("circle",{cx:"50%",cy:"50%",style:{"stroke-dasharray":`calc(${Math.PI*c.value}% - ${4*Math.PI}px) calc(${Math.PI*100}% - ${4*Math.PI}px)`}}))),o(Qc)]):null)}});const Rf=wt({enhance:({app:e})=>{et("FontIcon")||e.component("FontIcon",yf),et("Badge")||e.component("Badge",Kc),et("VPCard")||e.component("VPCard",Yc),et("PDF")||e.component("PDF",If)},setup:()=>{zr("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}}),zr("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}}),zr("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}})},rootComponents:[()=>o(Of,{})]});function Sf(e,t,n){var l,r,i;t===void 0&&(t=50),n===void 0&&(n={});var a=(l=n.isImmediate)!=null&&l,s=(r=n.callback)!=null&&r,c=n.maxWait,u=Date.now(),d=[];function p(){if(c!==void 0){var v=Date.now()-u;if(v+t>=c)return c-v}return t}var f=function(){var v=[].slice.call(arguments),g=this;return new Promise(function(B,y){var A=a&&i===void 0;if(i!==void 0&&clearTimeout(i),i=setTimeout(function(){if(i=void 0,u=Date.now(),!a){var _=e.apply(g,v);s&&s(_),d.forEach(function(C){return(0,C.resolve)(_)}),d=[]}},p()),A){var T=e.apply(g,v);return s&&s(T),B(T)}d.push({resolve:B,reject:y})})};return f.cancel=function(v){i!==void 0&&clearTimeout(i),d.forEach(function(g){return(0,g.reject)(v)}),d=[]},f}const Ff=({headerLinkSelector:e,headerAnchorSelector:t,delay:n,offset:l=5})=>{const r=Ue(),a=Sf(()=>{var B,y;const s=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(s-0)<l){Io(r,"");return}const u=window.innerHeight+s,d=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),p=Math.abs(d-u)<l,f=Array.from(document.querySelectorAll(e)),g=Array.from(document.querySelectorAll(t)).filter(A=>f.some(T=>T.hash===A.hash));for(let A=0;A<g.length;A++){const T=g[A],_=g[A+1],C=s>=(((B=T.parentElement)==null?void 0:B.offsetTop)??0)-l,M=!_||s<(((y=_.parentElement)==null?void 0:y.offsetTop)??0)-l;if(!(C&&M))continue;const F=decodeURIComponent(r.currentRoute.value.hash),O=decodeURIComponent(T.hash);if(F===O)return;if(p){for(let R=A+1;R<g.length;R++)if(F===decodeURIComponent(g[R].hash))return}Io(r,O);return}},n);_e(()=>{window.addEventListener("scroll",a)}),Ni(()=>{window.removeEventListener("scroll",a)})},Io=async(e,t)=>{const{scrollBehavior:n}=e.options;e.options.scrollBehavior=void 0,await e.replace({query:e.currentRoute.value.query,hash:t}).finally(()=>e.options.scrollBehavior=n)},Vf=".vp-sidebar-link, .toc-link",Mf=".header-anchor",$f=200,Nf=5,jf=wt({setup(){Ff({headerLinkSelector:Vf,headerAnchorSelector:Mf,delay:$f,offset:Nf})}});let Xc=e=>ie(e.title)?{title:e.title}:null;const Zc=Symbol(""),Hf=e=>{Xc=e},zf=()=>ve(Zc),qf=e=>{e.provide(Zc,Xc)};var Gf={"/":{title:"Catalog",empty:"No catalog"}},Uf=$({name:"AutoCatalog",props:{base:{type:String,default:""},level:{type:Number,default:3},index:Boolean,hideHeading:Boolean},setup(e){const t=zf(),n=Mn(Gf),l=Ee(),r=Ue(),i=ic(),a=Se(r.getRoutes().filter(({path:c})=>$l(c,".html")&&!$l(c,"/index.html")||$l(c,"/")).map(({meta:c,path:u})=>{const d=t(c);if(!d)return null;const p=u.split("/").length;return{level:$l(u,"/")?p-2:p-1,base:u.replace(/\/[^/]+\/?$/,"/"),path:u,...d}}).filter(c=>Cc(c)&&ie(c.title))),s=w(()=>{const c=e.base?t0(Gi(e.base)):l.value.path.replace(/\/[^/]+$/,"/"),u=c.split("/").length-2,d=[];return a.value.filter(({level:p,path:f})=>{if(!xn(f,c)||f===c)return!1;if(c==="/"){const v=dt(i.value.locales).filter(g=>g!=="/");if(f==="/404.html"||v.some(g=>xn(f,g)))return!1}return p-u<=e.level}).sort(({title:p,level:f,order:v},{title:g,level:B,order:y})=>f-B||(jr(v)?jr(y)?v>0?y>0?v-y:-1:y<0?v-y:1:v:jr(y)?y:p.localeCompare(g))).forEach(p=>{var g;const{base:f,level:v}=p;switch(v-u){case 1:{d.push(p);break}case 2:{const B=d.find(y=>y.path===f);B&&(B.children??(B.children=[])).push(p);break}default:{const B=d.find(y=>y.path===f.replace(/\/[^/]+\/$/,"/"));if(B){const y=(g=B.children)==null?void 0:g.find(A=>A.path===f);y&&(y.children??(y.children=[])).push(p)}}}}),d});return()=>{const c=s.value.some(u=>u.children);return o("div",{class:["vp-catalog-wrapper",{index:e.index}]},[e.hideHeading?null:o("h2",{class:"vp-catalog-main-title"},n.value.title),s.value.length?o(e.index?"ol":"ul",{class:["vp-catalogs",{deep:c}]},s.value.map(({children:u=[],title:d,path:p,content:f})=>{const v=o(Ie,{class:"vp-catalog-title",to:p},()=>f?o(f):d);return o("li",{class:"vp-catalog"},c?[o("h3",{id:d,class:["vp-catalog-child-title",{"has-children":u.length}]},[o("a",{href:`#${d}`,class:"header-anchor","aria-hidden":!0},"#"),v]),u.length?o(e.index?"ol":"ul",{class:"vp-child-catalogs"},u.map(({children:g=[],content:B,path:y,title:A})=>o("li",{class:"vp-child-catalog"},[o("div",{class:["vp-catalog-sub-title",{"has-children":g.length}]},[o("a",{href:`#${A}`,class:"header-anchor"},"#"),o(Ie,{class:"vp-catalog-title",to:y},()=>B?o(B):A)]),g.length?o(e.index?"ol":"div",{class:e.index?"vp-sub-catalogs":"vp-sub-catalogs-wrapper"},g.map(({content:T,path:_,title:C})=>e.index?o("li",{class:"vp-sub-catalog"},o(Ie,{to:_},()=>T?o(T):C)):o(Ie,{class:"vp-sub-catalog-link",to:_},()=>T?o(T):C))):null]))):null]:o("div",{class:"vp-catalog-child-title"},v))})):o("p",{class:"vp-empty-catalog"},n.value.empty)])}}}),Wf=wt({enhance:({app:e})=>{qf(e),et("AutoCatalog",e)||e.component("AutoCatalog",Uf)}});const Jf=o("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[o("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),o("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),eu=$({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(e){const t=Ft(),n=w(()=>e.locales[t.value]??{openInNewWindow:"open in new window"});return()=>o("span",[Jf,o("span",{class:"external-link-icon-sr-only"},n.value.openInNewWindow)])}});var Kf={};const Yf=Kf,Qf=wt({enhance({app:e}){e.component("ExternalLinkIcon",o(eu,{locales:Yf}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const ue={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:e=>{const t=ue.isStarted();e=Gr(e,ue.settings.minimum,1),ue.status=e===1?null:e;const n=ue.render(!t),l=n.querySelector(ue.settings.barSelector),r=ue.settings.speed,i=ue.settings.easing;return n.offsetWidth,Xf(a=>{zl(l,{transform:"translate3d("+xo(e)+"%,0,0)",transition:"all "+r+"ms "+i}),e===1?(zl(n,{transition:"none",opacity:"1"}),n.offsetWidth,setTimeout(function(){zl(n,{transition:"all "+r+"ms linear",opacity:"0"}),setTimeout(function(){ue.remove(),a()},r)},r)):setTimeout(()=>a(),r)}),ue},isStarted:()=>typeof ue.status=="number",start:()=>{ue.status||ue.set(0);const e=()=>{setTimeout(()=>{ue.status&&(ue.trickle(),e())},ue.settings.trickleSpeed)};return ue.settings.trickle&&e(),ue},done:e=>!e&&!ue.status?ue:ue.inc(.3+.5*Math.random()).set(1),inc:e=>{let t=ue.status;return t?(typeof e!="number"&&(e=(1-t)*Gr(Math.random()*t,.1,.95)),t=Gr(t+e,0,.994),ue.set(t)):ue.start()},trickle:()=>ue.inc(Math.random()*ue.settings.trickleRate),render:e=>{if(ue.isRendered())return document.getElementById("nprogress");Oo(document.documentElement,"nprogress-busy");const t=document.createElement("div");t.id="nprogress",t.innerHTML=ue.settings.template;const n=t.querySelector(ue.settings.barSelector),l=e?"-100":xo(ue.status||0),r=document.querySelector(ue.settings.parent);return zl(n,{transition:"all 0 linear",transform:"translate3d("+l+"%,0,0)"}),r!==document.body&&Oo(r,"nprogress-custom-parent"),r==null||r.appendChild(t),t},remove:()=>{Ro(document.documentElement,"nprogress-busy"),Ro(document.querySelector(ue.settings.parent),"nprogress-custom-parent");const e=document.getElementById("nprogress");e&&Zf(e)},isRendered:()=>!!document.getElementById("nprogress")},Gr=(e,t,n)=>e<t?t:e>n?n:e,xo=e=>(-1+e)*100,Xf=function(){const e=[];function t(){const n=e.shift();n&&n(t)}return function(n){e.push(n),e.length===1&&t()}}(),zl=function(){const e=["Webkit","O","Moz","ms"],t={};function n(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(s,c){return c.toUpperCase()})}function l(a){const s=document.body.style;if(a in s)return a;let c=e.length;const u=a.charAt(0).toUpperCase()+a.slice(1);let d;for(;c--;)if(d=e[c]+u,d in s)return d;return a}function r(a){return a=n(a),t[a]??(t[a]=l(a))}function i(a,s,c){s=r(s),a.style[s]=c}return function(a,s){for(const c in s){const u=s[c];u!==void 0&&Object.prototype.hasOwnProperty.call(s,c)&&i(a,c,u)}}}(),tu=(e,t)=>(typeof e=="string"?e:na(e)).indexOf(" "+t+" ")>=0,Oo=(e,t)=>{const n=na(e),l=n+t;tu(n,t)||(e.className=l.substring(1))},Ro=(e,t)=>{const n=na(e);if(!tu(e,t))return;const l=n.replace(" "+t+" "," ");e.className=l.substring(1,l.length-1)},na=e=>(" "+(e.className||"")+" ").replace(/\s+/gi," "),Zf=e=>{e&&e.parentNode&&e.parentNode.removeChild(e)},ev=()=>{_e(()=>{const e=Ue(),t=new Set;t.add(e.currentRoute.value.path),e.beforeEach(n=>{t.has(n.path)||ue.start()}),e.afterEach(n=>{t.add(n.path),ue.done()})})},tv=wt({setup(){ev()}}),nv=JSON.parse(`{"encrypt":{},"author":{"name":"Liz","url":"https://github.com/liz-in-tech"},"logo":"/blogger.png","repo":"https://github.com/liz-in-tech","docsDir":"src","blog":{"description":"","intro":"/intro.html","medias":{"GitHub":"https://github.com/liz-in-tech"}},"displayFooter":false,"editLink":false,"lastUpdated":false,"contributors":false,"locales":{"/":{"lang":"en-US","navbarLocales":{"langName":"English","selectLangAriaLabel":"Select language"},"metaLocales":{"author":"Author","date":"Writing Date","origin":"Original","views":"Page views","category":"Category","tag":"Tag","readingTime":"Reading Time","words":"Words","toc":"On This Page","prev":"Prev","next":"Next","lastUpdated":"Last update","contributors":"Contributors","editLink":"Edit this page","print":"Print"},"blogLocales":{"article":"Articles","articleList":"Article List","category":"Category","tag":"Tag","timeline":"Timeline","timelineTitle":"Yesterday Once More!","all":"All","intro":"Personal Intro","star":"Star","empty":"No $text"},"paginationLocales":{"prev":"Prev","next":"Next","navigate":"Jump to","action":"Go","errorText":"Please enter a number between 1 and $page !"},"outlookLocales":{"themeColor":"Theme Color","darkmode":"Theme Mode","fullscreen":"Full Screen"},"routeLocales":{"skipToContent":"Skip to main content","notFoundTitle":"Page not found","notFoundMsg":["There’s nothing here.","How did we get here?","That’s a Four-Oh-Four.","Looks like we've got some broken links."],"back":"Go back","home":"Take me home","openInNewWindow":"Open in new window"},"navbar":[{"text":"Channel","link":"/channel/"},{"text":"Language","link":"/language/"},{"text":"LLM","link":"/llm/"},{"text":"Python","link":"/python/"},{"text":"Java","link":"/java/"},{"text":"Frontend","link":"/frontend/"},{"text":"Middleware","link":"/middleware/"},{"text":"CS","link":"/cs/"},{"text":"Operations","link":"/operations/"},{"text":"Tools","link":"/tools/"}],"sidebar":{"/channel/":[{"text":"Channel","icon":"book","collapsible":true,"children":"structure"}],"/language/":[{"text":"Language","icon":"book","collapsible":true,"children":"structure"}],"/llm/":[{"text":"Llm","icon":"book","collapsible":true,"children":"structure"}],"/python/":[{"text":"Python","icon":"book","collapsible":true,"children":"structure"}],"/java/":[{"text":"Java","icon":"book","collapsible":true,"children":"structure"}],"/frontend/":[{"text":"Frontend","icon":"book","collapsible":true,"children":"structure"}],"/middleware/":[{"text":"Middleware","icon":"book","collapsible":true,"children":"structure"}],"/cs/":[{"text":"CS","icon":"book","collapsible":true,"children":"structure"}],"/operations/":[{"text":"Operations","icon":"book","collapsible":true,"children":"structure"}],"/tools/":[{"text":"Tools","icon":"book","collapsible":true,"children":"structure"}],"/":[{"text":"Blog","icon":"book","collapsible":true,"children":"structure"}]}}}}`),lv=X(nv),nu=()=>lv,lu=Symbol(""),rv=()=>{const e=ve(lu);if(!e)throw new Error("useThemeLocaleData() is called without provider.");return e},iv=(e,t)=>{const{locales:n,...l}=e;return{...l,...n==null?void 0:n[t]}},av=wt({enhance({app:e}){const t=nu(),n=e._context.provides[Wi],l=w(()=>iv(t.value,n.value));e.provide(lu,l),Object.defineProperties(e.config.globalProperties,{$theme:{get(){return t.value}},$themeLocale:{get(){return l.value}}})}});var ov={"/":{copy:"Copy code",copied:"Copied",hint:"Copied successfully"}},sv=['.theme-hope-content div[class*="language-"] pre'];const cv=800,uv=2e3,dv=ov,pv=sv,So=!1,Ur=new Map,hv=()=>{const{copy:e}=uf({legacy:!0}),t=Mn(dv),n=Ee(),l=Kh(),r=s=>{if(!s.hasAttribute("copy-code-registered")){const c=document.createElement("button");c.type="button",c.classList.add("copy-code-button"),c.innerHTML='<div class="copy-icon" />',c.setAttribute("aria-label",t.value.copy),c.setAttribute("data-copied",t.value.copied),s.parentElement&&s.parentElement.insertBefore(c,s),s.setAttribute("copy-code-registered","")}},i=()=>{dn().then(()=>setTimeout(()=>{pv.forEach(s=>{document.querySelectorAll(s).forEach(r)})},cv))},a=(s,c,u)=>{let{innerText:d=""}=c;/language-(shellscript|shell|bash|sh|zsh)/.test(s.classList.toString())&&(d=d.replace(/^ *(\$|>) /gm,"")),e(d).then(()=>{u.classList.add("copied"),clearTimeout(Ur.get(u));const p=setTimeout(()=>{u.classList.remove("copied"),u.blur(),Ur.delete(u)},uv);Ur.set(u,p)})};_e(()=>{(!l.value||So)&&i(),Fe("click",s=>{const c=s.target;if(c.matches('div[class*="language-"] > button.copy')){const u=c.parentElement,d=c.nextElementSibling;d&&a(u,d,c)}else if(c.matches('div[class*="language-"] div.copy-icon')){const u=c.parentElement,d=u.parentElement,p=u.nextElementSibling;p&&a(d,p,u)}}),fe(()=>n.value.path,()=>{(!l.value||So)&&i()})})};var fv=wt({setup:()=>{hv()}});const ql=ea("VUEPRESS_CODE_TAB_STORE",{});var vv=$({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},slots:Object,setup(e,{slots:t}){const n=X(e.active),l=Se([]),r=()=>{e.tabId&&(ql.value[e.tabId]=e.data[n.value].id)},i=(u=n.value)=>{n.value=u<l.value.length-1?u+1:0,l.value[n.value].focus()},a=(u=n.value)=>{n.value=u>0?u-1:l.value.length-1,l.value[n.value].focus()},s=(u,d)=>{u.key===" "||u.key==="Enter"?(u.preventDefault(),n.value=d):u.key==="ArrowRight"?(u.preventDefault(),i()):u.key==="ArrowLeft"&&(u.preventDefault(),a()),e.tabId&&(ql.value[e.tabId]=e.data[n.value].id)},c=()=>{if(e.tabId){const u=e.data.findIndex(({id:d})=>ql.value[e.tabId]===d);if(u!==-1)return u}return e.active};return _e(()=>{n.value=c(),fe(()=>ql.value[e.tabId],(u,d)=>{if(e.tabId&&u!==d){const p=e.data.findIndex(({id:f})=>f===u);p!==-1&&(n.value=p)}})}),()=>e.data.length?o("div",{class:"vp-code-tabs"},[o("div",{class:"vp-code-tabs-nav",role:"tablist"},e.data.map(({id:u},d)=>{const p=d===n.value;return o("button",{type:"button",ref:f=>{f&&(l.value[d]=f)},class:["vp-code-tab-nav",{active:p}],role:"tab","aria-controls":`codetab-${e.id}-${d}`,"aria-selected":p,onClick:()=>{n.value=d,r()},onKeydown:f=>s(f,d)},t[`title${d}`]({value:u,isActive:p}))})),e.data.map(({id:u},d)=>{const p=d===n.value;return o("div",{class:["vp-code-tab",{active:p}],id:`codetab-${e.id}-${d}`,role:"tabpanel","aria-expanded":p},[o("div",{class:"vp-code-tab-title"},t[`title${d}`]({value:u,isActive:p})),t[`tab${d}`]({value:u,isActive:p})])})]):null}});const ru=({active:e=!1},{slots:t})=>{var n;return o("div",{class:["code-group-item",{active:e}],"aria-selected":e},(n=t.default)==null?void 0:n.call(t))};ru.displayName="CodeGroupItem";const mv=$({name:"CodeGroup",slots:Object,setup(e,{slots:t}){const n=X(-1),l=Se([]),r=(s=n.value)=>{n.value=s<l.value.length-1?s+1:0,l.value[n.value].focus()},i=(s=n.value)=>{n.value=s>0?s-1:l.value.length-1,l.value[n.value].focus()},a=(s,c)=>{s.key===" "||s.key==="Enter"?(s.preventDefault(),n.value=c):s.key==="ArrowRight"?(s.preventDefault(),r(c)):s.key==="ArrowLeft"&&(s.preventDefault(),i(c))};return()=>{var c;const s=(((c=t.default)==null?void 0:c.call(t))||[]).filter(u=>u.type.name==="CodeGroupItem").map(u=>(u.props===null&&(u.props={}),u));return s.length===0?null:(n.value<0||n.value>s.length-1?(n.value=s.findIndex(u=>"active"in u.props),n.value===-1&&(n.value=0)):s.forEach((u,d)=>{u.props.active=d===n.value}),o("div",{class:"code-group"},[o("div",{class:"code-group-nav"},s.map((u,d)=>{const p=d===n.value;return o("button",{type:"button",ref:f=>{f&&(l.value[d]=f)},class:["code-group-nav-tab",{active:p}],"aria-pressed":p,"aria-expanded":p,onClick:()=>{n.value=d},onKeydown:f=>a(f,d)},u.props.title)})),s]))}}}),Ev='<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>',gv='<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>';var bv={useBabel:!1,jsLib:[],cssLib:[],codepenLayout:"left",codepenEditors:"101",babel:"https://unpkg.com/@babel/standalone/babel.min.js",vue:"https://unpkg.com/vue/dist/vue.global.prod.js",react:"https://unpkg.com/react/umd/react.production.min.js",reactDOM:"https://unpkg.com/react-dom/umd/react-dom.production.min.js"};const Wr=bv,Fo={html:{types:["html","slim","haml","md","markdown","vue"],map:{html:"none",vue:"none",md:"markdown"}},js:{types:["js","javascript","coffee","coffeescript","ts","typescript","ls","livescript"],map:{js:"none",javascript:"none",coffee:"coffeescript",ls:"livescript",ts:"typescript"}},css:{types:["css","less","sass","scss","stylus","styl"],map:{css:"none",styl:"stylus"}}},_v=(e,t,n)=>{const l=document.createElement(e);return hr(t)&&dt(t).forEach(r=>{if(r.indexOf("data"))l[r]=t[r];else{const i=r.replace("data","");l.dataset[i]=t[r]}}),n&&n.forEach(r=>{l.appendChild(r)}),l},la=e=>({...Wr,...e,jsLib:Array.from(new Set([...Wr.jsLib||[],...e.jsLib||[]])),cssLib:Array.from(new Set([...Wr.cssLib||[],...e.cssLib||[]]))}),Bn=(e,t)=>{if(e[t]!==void 0)return e[t];const n=new Promise(l=>{var i;const r=document.createElement("script");r.src=t,(i=document.querySelector("body"))==null||i.appendChild(r),r.onload=()=>{l()}});return e[t]=n,n},Av=(e,t)=>{if(t.css&&Array.from(e.childNodes).every(n=>n.nodeName!=="STYLE")){const n=_v("style",{innerHTML:t.css});e.appendChild(n)}},yv=(e,t,n)=>{const l=n.getScript();if(l&&Array.from(t.childNodes).every(r=>r.nodeName!=="SCRIPT")){const r=document.createElement("script");r.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${e} .vp-code-demo-display').shadowRoot;
${l}}`)),t.appendChild(r)}},Bv=e=>{const t=dt(e),n={html:[],js:[],css:[],isLegal:!1};return["html","js","css"].forEach(l=>{const r=t.filter(i=>Fo[l].types.includes(i));if(r.length){const i=r[0];n[l]=[e[i].replace(/^\n|\n$/g,""),Fo[l].map[i]||i]}}),n.isLegal=(!n.html.length||n.html[1]==="none")&&(!n.js.length||n.js[1]==="none")&&(!n.css.length||n.css[1]==="none"),n},iu=e=>e.replace(/<br \/>/g,"<br>").replace(/<((\S+)[^<]*?)\s+\/>/g,"<$1></$2>"),au=e=>`<div id="app">
${iu(e)}
</div>`,wv=e=>`${e.replace("export default ","const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/,"")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`,Dv=e=>e.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u,"Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u,"Vue.createApp({$1}).mount('#app')").trim(),ou=e=>`(function(exports){var module={};module.exports=exports;${e};return module.exports.__esModule?module.exports.default:module.exports;})({})`,Lv=(e,t)=>{const n=la(t),l=e.js[0]||"";return{...n,html:iu(e.html[0]||""),js:l,css:e.css[0]||"",isLegal:e.isLegal,getScript:()=>{var r;return n.useBabel?((r=window.Babel.transform(l,{presets:["es2015"]}))==null?void 0:r.code)||"":l}}},Tv=/<template>([\s\S]+)<\/template>/u,Cv=/<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u,kv=/<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u,Pv=(e,t)=>{const n=la(t),l=e.html[0]||"",r=Tv.exec(l),i=Cv.exec(l),a=kv.exec(l),s=r?r[1].replace(/^\n|\n$/g,""):"",[c="",u=""]=i?[i[4].replace(/^\n|\n$/g,""),i[3]]:[],[d="",p=""]=a?[a[4].replace(/^\n|\n$/g,""),a[3]]:[],f=u===""&&(p===""||p==="css");return{...n,html:au(s),js:Dv(c),css:d,isLegal:f,jsLib:[n.vue,...n.jsLib],getScript:()=>{var g,B;const v=t.useBabel?((B=(g=window.Babel)==null?void 0:g.transform(c,{presets:["es2015"]}))==null?void 0:B.code)||"":c.replace(/export\s+default/u,"return");return`const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${ou(v)};appOptions.template=\`${s.replace("`",'\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`}}},Iv=(e,t)=>{const n=la(t);return{...n,html:au(""),js:wv(e.js[0]||""),css:e.css[0]||(e.js[0]?e.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/,"$1").trim():""),isLegal:e.isLegal,jsLib:[n.react,n.reactDOM,...n.jsLib],jsx:!0,getScript:()=>{var r,i;const l=((i=(r=window.Babel)==null?void 0:r.transform(e.js[0]||"",{presets:["es2015","react"]}))==null?void 0:i.code)||"";return`window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${ou(l)}))`}}},wn={},xv=e=>Promise.all([Bn(wn,e.babel),Bn(wn,e.react),Bn(wn,e.reactDOM)]),Ov=e=>{const t=[Bn(wn,e.vue)];return e.useBabel&&t.push(Bn(wn,e.babel)),Promise.all(t)},Rv=e=>e.useBabel?Bn(wn,e.babel):Promise.resolve();var Sv=$({name:"CodeDemo",props:{id:{type:String,required:!0},type:{type:String,default:"normal"},title:{type:String,default:""},config:{type:String,default:""},code:{type:String,required:!0}},slots:Object,setup(e,{slots:t}){const[n,l]=rr(!1),r=Se(),i=Se(),a=X("0"),s=X(!1),c=w(()=>JSON.parse(e.config?wo(e.config):"{}")),u=w(()=>{const g=JSON.parse(wo(e.code));return Bv(g)}),d=w(()=>e.type==="react"?Iv(u.value,c.value):e.type==="vue"?Pv(u.value,c.value):Lv(u.value,c.value)),p=w(()=>d.value.isLegal),f=(g=!1)=>{const B=r.value.attachShadow({mode:"open"}),y=document.createElement("div");y.classList.add("code-demo-app"),B.appendChild(y),p.value?(g&&(y.innerHTML=d.value.html),Av(B,d.value),yv(e.id,B,d.value),a.value="0"):a.value="auto",s.value=!0},v=()=>{switch(e.type){case"react":return xv(d.value).then(()=>f());case"vue":return Ov(d.value).then(()=>f());default:return Rv(d.value).then(()=>f(!0))}};return Fe("beforeprint",()=>{l(!0)}),_e(()=>{setTimeout(()=>{v()},800)}),()=>{var g;return o("div",{class:"vp-code-demo",id:e.id},[o("div",{class:"vp-code-demo-header"},[d.value.isLegal?o("button",{type:"button",title:"toggle","aria-hidden":!0,class:["vp-code-demo-toggle-button",n.value?"down":"end"],onClick:()=>{a.value=n.value?"0":`${i.value.clientHeight+13.8}px`,l()}}):null,e.title?o("span",{class:"vp-code-demo-title"},decodeURIComponent(e.title)):null,d.value.isLegal&&d.value.jsfiddle!==!1?o("form",{class:"code-demo-jsfiddle",target:"_blank",action:"https://jsfiddle.net/api/post/library/pure/",method:"post"},[o("input",{type:"hidden",name:"html",value:d.value.html}),o("input",{type:"hidden",name:"js",value:d.value.js}),o("input",{type:"hidden",name:"css",value:d.value.css}),o("input",{type:"hidden",name:"wrap",value:"1"}),o("input",{type:"hidden",name:"panel_js",value:"3"}),o("input",{type:"hidden",name:"resources",value:[...d.value.cssLib,...d.value.jsLib].join(",")}),o("button",{type:"submit",class:"jsfiddle-button",innerHTML:gv,"aria-label":"JSFiddle","data-balloon-pos":"up"})]):null,!d.value.isLegal||d.value.codepen!==!1?o("form",{class:"code-demo-codepen",target:"_blank",action:"https://codepen.io/pen/define",method:"post"},[o("input",{type:"hidden",name:"data",value:JSON.stringify({html:d.value.html,js:d.value.js,css:d.value.css,js_external:d.value.jsLib.join(";"),css_external:d.value.cssLib.join(";"),layout:d.value.codepenLayout,html_pre_processor:u.value?u.value.html[1]:"none",js_pre_processor:u.value?u.value.js[1]:d.value.jsx?"babel":"none",css_pre_processor:u.value?u.value.css[1]:"none",editors:d.value.codepenEditors})}),o("button",{type:"submit",innerHTML:Ev,class:"codepen-button","aria-label":"Codepen","data-balloon-pos":"up"})]):null]),s.value?null:o(Dc,{class:"vp-code-demo-loading"}),o("div",{ref:r,class:"vp-code-demo-display",style:{display:p.value&&s.value?"block":"none"}}),o("div",{class:"vp-code-demo-code-wrapper",style:{height:a.value}},o("div",{ref:i,class:"vp-code-demo-codes"},(g=t.default)==null?void 0:g.call(t)))])}}}),Fv=$({name:"MdDemo",props:{id:{type:String,required:!0},title:{type:String,default:""}},slots:Object,setup(e,{slots:t}){const[n,l]=rr(!1),r=Se(),i=X("0");return Fe("beforeprint",()=>{l(!0)}),()=>{var a,s;return o("div",{class:"vp-md-demo",id:e.id},[o("div",{class:"vp-md-demo-header"},[o("button",{type:"button",title:"toggle","aria-hidden":!0,class:["vp-md-demo-toggle-button",n.value?"down":"end"],onClick:()=>{i.value=n.value?"0":`${r.value.clientHeight+13.8}px`,l()}}),e.title?decodeURIComponent(e.title):null]),o("div",{class:"vp-md-demo-display"},(a=t.default)==null?void 0:a.call(t)),o("div",{class:"vp-md-demo-code-wrapper",style:{height:i.value}},o("div",{ref:r,class:"vp-md-demo-codes"},(s=t.code)==null?void 0:s.call(t)))])}}});const Vv=()=>{Fe("beforeprint",()=>{document.querySelectorAll("details").forEach(e=>{e.open=!0})})},Jr=ea("VUEPRESS_TAB_STORE",{});var Mv=$({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},slots:Object,setup(e,{slots:t}){const n=X(e.active),l=Se([]),r=()=>{e.tabId&&(Jr.value[e.tabId]=e.data[n.value].id)},i=(u=n.value)=>{n.value=u<l.value.length-1?u+1:0,l.value[n.value].focus()},a=(u=n.value)=>{n.value=u>0?u-1:l.value.length-1,l.value[n.value].focus()},s=(u,d)=>{u.key===" "||u.key==="Enter"?(u.preventDefault(),n.value=d):u.key==="ArrowRight"?(u.preventDefault(),i()):u.key==="ArrowLeft"&&(u.preventDefault(),a()),r()},c=()=>{if(e.tabId){const u=e.data.findIndex(({id:d})=>Jr.value[e.tabId]===d);if(u!==-1)return u}return e.active};return _e(()=>{n.value=c(),fe(()=>Jr.value[e.tabId],(u,d)=>{if(e.tabId&&u!==d){const p=e.data.findIndex(({id:f})=>f===u);p!==-1&&(n.value=p)}})}),()=>e.data.length?o("div",{class:"vp-tabs"},[o("div",{class:"vp-tabs-nav",role:"tablist"},e.data.map(({id:u},d)=>{const p=d===n.value;return o("button",{type:"button",ref:f=>{f&&(l.value[d]=f)},class:["vp-tab-nav",{active:p}],role:"tab","aria-controls":`tab-${e.id}-${d}`,"aria-selected":p,onClick:()=>{n.value=d,r()},onKeydown:f=>s(f,d)},t[`title${d}`]({value:u,isActive:p}))})),e.data.map(({id:u},d)=>{const p=d===n.value;return o("div",{class:["vp-tab",{active:p}],id:`tab-${e.id}-${d}`,role:"tabpanel","aria-expanded":p},[o("div",{class:"vp-tab-title"},t[`title${d}`]({value:u,isActive:p})),t[`tab${d}`]({value:u,isActive:p})])})]):null}});const $v=wt({enhance:({app:e})=>{e.component("CodeTabs",vv),et("CodeGroup",e)||e.component("CodeGroup",mv),et("CodeGroupItem",e)||e.component("CodeGroupItem",ru),e.component("CodeDemo",Sv),e.component("MdDemo",Fv),e.component("Tabs",Mv)},setup:()=>{Vv()}});let Nv={};const su=Symbol(""),jv=()=>ve(su),Hv=e=>{e.provide(su,Nv)};var zv={"/":{closeTitle:"Close",downloadTitle:"Download Image",fullscreenTitle:"Switch to full screen",zoomTitle:"Zoom in/out",arrowPrevTitle:"Prev (Arrow Left)",arrowNextTitle:"Next (Arrow Right)"}};const qv=".theme-hope-content :not(a) > img:not([no-view])",Gv=zv,Uv=800,Wv='<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>',Jv=e=>ie(e)?Array.from(document.querySelectorAll(e)):e.map(t=>Array.from(document.querySelectorAll(t))).flat(),cu=e=>new Promise((t,n)=>{e.complete?t({type:"image",element:e,src:e.src,width:e.naturalWidth,height:e.naturalHeight,alt:e.alt,msrc:e.src}):(e.onload=()=>t(cu(e)),e.onerror=l=>n(l))}),Kv=()=>{const e=Mn(Gv),t=ye(),n=Ee(),{isSupported:l,toggle:r}=ta(),i=jv();let a;const s=w(()=>t.value.photoSwipe===!1?!1:t.value.photoSwipe||qv),c=d=>{d.on("uiRegister",()=>{l&&d.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{r()}}),d.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:(p,f)=>{p.setAttribute("download",""),p.setAttribute("target","_blank"),p.setAttribute("rel","noopener"),f.on("change",()=>{p.setAttribute("href",f.currSlide.data.src)})}}),d.ui.registerElement({name:"bulletsIndicator",className:"photo-swipe-bullets-indicator",appendTo:"wrapper",onInit:(p,f)=>{const v=[];let g=-1;for(let B=0;B<f.getNumItems();B++){const y=document.createElement("div");y.className="photo-swipe-bullet",y.onclick=A=>{f.goTo(v.indexOf(A.target))},v.push(y),p.appendChild(y)}f.on("change",()=>{g>=0&&v[g].classList.remove("active"),v[f.currIndex].classList.add("active"),g=f.currIndex})}})})},u=async()=>{if(s.value)return Promise.all([h(()=>import("./photoswipe.esm-08_zHRDQ.js"),__vite__mapDeps([])),dn().then(()=>new Promise(d=>setTimeout(d,Uv)).then(()=>Jv(s.value)))]).then(([{default:d},p])=>{const f=p.map(v=>({html:Wv,element:v,msrc:v.src}));p.forEach((v,g)=>{const B=()=>{a=new d({preloaderDelay:0,showHideAnimationType:"zoom",...e.value,...i,dataSource:f,index:g,closeOnVerticalDrag:!0,wheelToZoom:!1}),c(a),a.addFilter("thumbEl",()=>v),a.addFilter("placeholderSrc",()=>v.src),a.init()};v.style.cursor="zoom-in",v.addEventListener("click",()=>{B()}),v.addEventListener("keypress",({key:y})=>{y==="Enter"&&B()})}),p.forEach((v,g)=>{cu(v).then(B=>{f.splice(g,1,B),a==null||a.refreshSlideContent(g)})})})};_e(()=>{Fe("wheel",()=>{a==null||a.close()}),fe(()=>n.value.path,u,{immediate:!0})})};var Yv=wt({enhance:({app:e})=>{Hv(e)},setup:()=>{Kv()}}),Vo={"/":{word:"About $word words",less1Minute:"Less than 1 minute",time:"About $time min"}};const uu=()=>{const e=Ee();return w(()=>e.value.readingTime??null)},vi=typeof Vo>"u"?null:Vo,du=(e,t)=>{const{minutes:n,words:l}=e,{less1Minute:r,word:i,time:a}=t;return{time:n<1?r:a.replace("$time",Math.round(n).toString()),words:i.replace("$word",l.toString())}},Mo={words:"",time:""},pu=()=>vi?Mn(vi):w(()=>null),Qv=()=>{if(typeof vi>"u")return w(()=>Mo);const e=uu(),t=pu();return w(()=>e.value&&t.value?du(e.value,t.value):Mo)},Zt=()=>nu(),oe=()=>rv(),fn=()=>{const e=Zt();return w(()=>!!e.value.pure)};var Kr=$({name:"EmptyComponent",setup:()=>()=>null});const Xv="719px",Zv="1440px",e8="false",ra={mobileBreakPoint:Xv,pcBreakPoint:Zv,enableThemeColor:e8},ia={"/channel/":["youtube_channel","tools","blog_and_pinkpig"],"/language/":["commen_mistakes","grammar","new_concept_english3","new_concept_english_detail","pronunciation","sentence_pattern_and_expression",{text:"Topics",prefix:"topics/",collapsible:!0,children:["careers","common","communication","computers","describing_something","dreams","graduating","greetings","hobbies","immigration","introducing_someone","phone","routine","time_and_weather","traits"]}],"/llm/":["llm_resources",{text:"Agent",prefix:"agent/",collapsible:!0,children:["agent"]},{text:"Computer Use",prefix:"computer_use/",collapsible:!0,children:["same","computer_use","learning_resources"]},{text:"Langchain",prefix:"langchain/",collapsible:!0,children:["langchain1","langgraph","langsmith","streamlit","langchain","langchain_source_code"]},{text:"Llm",prefix:"llm/",collapsible:!0,children:["llama","llama_advanced","llm_summary","streamlit","transformer","langchain","langchain_source_code"]},"open_interpreter",{text:"Rag",prefix:"rag/",collapsible:!0,children:["rag_opensource"]}],"/python/":[{text:"Python",prefix:"python/",collapsible:!0,children:["06_python_popular_package","04_python_method","05_python_builtin_module","02_python_data_type","03_python_operator","01_python_environment"]},{text:"Pytorch",prefix:"pytorch/",collapsible:!0,children:["AI_evolution","06_heterogeneous_graph","05_linear_nn","01_ai_concept","04_pytorch_practice_nn","03_pytorch_operation","02_neural_net_train"]}],"/java/":[{text:"Basic",prefix:"basic/",collapsible:!0,children:["Java8学习笔记","基础","集合"]},{text:"Juc",prefix:"juc/",collapsible:!0,children:["juc"]},{text:"Jvm",prefix:"jvm/",collapsible:!0,children:["jvm"]},{text:"Spring",prefix:"spring/",collapsible:!0,children:["spring"]}],"/frontend/":["AntDesign","CSS","Expo","Frontend","HTML","JavaScript","npm","React","Practice"],"/middleware/":[{text:"Graphql",prefix:"graphql/",collapsible:!0,children:["GraphQL"]},{text:"Micro Service",prefix:"micro_service/",collapsible:!0,children:["MybatisPlus","MicroService"]},{text:"Mq",prefix:"mq/",collapsible:!0,children:["mq"]},{text:"Mysql",prefix:"mysql/",collapsible:!0,children:["mysql","SQL"]},{text:"Redis",prefix:"redis/",collapsible:!0,children:["redis"]}],"/cs/":[{text:"Code",prefix:"code/",collapsible:!0,children:[{text:"Algorithm",prefix:"algorithm/",collapsible:!0,children:["4.二分查找","/cs/code/algorithm/2.%E4%BA%8C%E8%BF%9B%E5%88%B6_%E4%BD%8D%E8%BF%90%E7%AE%97.html","/cs/code/algorithm/1.%E5%88%86%E6%B2%BB%E6%80%9D%E6%83%B3_%E9%80%92%E5%BD%92%E5%AE%9E%E7%8E%B0.html","/cs/code/algorithm/5.%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92_%E8%B4%AA%E5%BF%83.html","0.时空复杂度","6.字符串","3.排序","7.数学","8.算法技巧"]},{text:"Data Structure",prefix:"data_structure/",collapsible:!0,children:["8.哈希表（散列表）","7.图","5.堆（优先队列）","1.数组","3.栈","6.树","2.链表","4.队列"]},{text:"Language",prefix:"language/",collapsible:!0,children:["Java语言基础","python算法刷题语法快速恢复"]},"多层迷宫","quick_recovery","算法提升","经典题汇总（每个细分类限定10题以内）"]},"CSAPP","Netty","RPC","操作系统","浏览器技能","网络","计算机技能"],"/operations/":[{text:"Docker",prefix:"docker/",collapsible:!0,children:["Docker","K8S"]},{text:"Linux",prefix:"linux/",collapsible:!0,children:["linux"]}],"/tools/":["Git使用手册","IDEA_Problem_and_plugin","IDEA_Keymap","Markdown","Maven--java包管理工具","photoshop","Poetry--python包管理工具"],"/":["","intro",{text:"Channel",prefix:"channel/",collapsible:!0,children:["youtube_channel","tools","blog_and_pinkpig"]},{text:"Cs",prefix:"cs/",collapsible:!0,children:[{text:"Code",prefix:"code/",collapsible:!0,children:[{text:"Algorithm",prefix:"algorithm/",collapsible:!0,children:["4.二分查找","/cs/code/algorithm/2.%E4%BA%8C%E8%BF%9B%E5%88%B6_%E4%BD%8D%E8%BF%90%E7%AE%97.html","/cs/code/algorithm/1.%E5%88%86%E6%B2%BB%E6%80%9D%E6%83%B3_%E9%80%92%E5%BD%92%E5%AE%9E%E7%8E%B0.html","/cs/code/algorithm/5.%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92_%E8%B4%AA%E5%BF%83.html","0.时空复杂度","6.字符串","3.排序","7.数学","8.算法技巧"]},{text:"Data Structure",prefix:"data_structure/",collapsible:!0,children:["8.哈希表（散列表）","7.图","5.堆（优先队列）","1.数组","3.栈","6.树","2.链表","4.队列"]},{text:"Language",prefix:"language/",collapsible:!0,children:["Java语言基础","python算法刷题语法快速恢复"]},"多层迷宫","quick_recovery","算法提升","经典题汇总（每个细分类限定10题以内）"]},"CSAPP","Netty","RPC","操作系统","浏览器技能","网络","计算机技能"]},{text:"Frontend",prefix:"frontend/",collapsible:!0,children:["AntDesign","CSS","Expo","Frontend","HTML","JavaScript","npm","React","Practice"]},{text:"Java",prefix:"java/",collapsible:!0,children:[{text:"Basic",prefix:"basic/",collapsible:!0,children:["Java8学习笔记","基础","集合"]},{text:"Juc",prefix:"juc/",collapsible:!0,children:["juc"]},{text:"Jvm",prefix:"jvm/",collapsible:!0,children:["jvm"]},{text:"Spring",prefix:"spring/",collapsible:!0,children:["spring"]}]},{text:"Language",prefix:"language/",collapsible:!0,children:["commen_mistakes","grammar","new_concept_english3","new_concept_english_detail","pronunciation","sentence_pattern_and_expression",{text:"Topics",prefix:"topics/",collapsible:!0,children:["careers","common","communication","computers","describing_something","dreams","graduating","greetings","hobbies","immigration","introducing_someone","phone","routine","time_and_weather","traits"]}]},{text:"Llm",prefix:"llm/",collapsible:!0,children:["llm_resources",{text:"Agent",prefix:"agent/",collapsible:!0,children:["agent"]},{text:"Computer Use",prefix:"computer_use/",collapsible:!0,children:["same","computer_use","learning_resources"]},{text:"Langchain",prefix:"langchain/",collapsible:!0,children:["langchain1","langgraph","langsmith","streamlit","langchain","langchain_source_code"]},{text:"Llm",prefix:"llm/",collapsible:!0,children:["llama","llama_advanced","llm_summary","streamlit","transformer","langchain","langchain_source_code"]},"open_interpreter",{text:"Rag",prefix:"rag/",collapsible:!0,children:["rag_opensource"]}]},{text:"Middleware",prefix:"middleware/",collapsible:!0,children:[{text:"Graphql",prefix:"graphql/",collapsible:!0,children:["GraphQL"]},{text:"Micro Service",prefix:"micro_service/",collapsible:!0,children:["MybatisPlus","MicroService"]},{text:"Mq",prefix:"mq/",collapsible:!0,children:["mq"]},{text:"Mysql",prefix:"mysql/",collapsible:!0,children:["mysql","SQL"]},{text:"Redis",prefix:"redis/",collapsible:!0,children:["redis"]}]},{text:"Operations",prefix:"operations/",collapsible:!0,children:[{text:"Docker",prefix:"docker/",collapsible:!0,children:["Docker","K8S"]},{text:"Linux",prefix:"linux/",collapsible:!0,children:["linux"]}]},{text:"Python",prefix:"python/",collapsible:!0,children:[{text:"Python",prefix:"python/",collapsible:!0,children:["06_python_popular_package","04_python_method","05_python_builtin_module","02_python_data_type","03_python_operator","01_python_environment"]},{text:"Pytorch",prefix:"pytorch/",collapsible:!0,children:["AI_evolution","06_heterogeneous_graph","05_linear_nn","01_ai_concept","04_pytorch_practice_nn","03_pytorch_operation","02_neural_net_train"]}]},{text:"Tools",prefix:"tools/",collapsible:!0,children:["Git使用手册","IDEA_Problem_and_plugin","IDEA_Keymap","Markdown","Maven--java包管理工具","photoshop","Poetry--python包管理工具"]}]},hu=e=>{const{icon:t="",color:n,size:l}=e,r=n||l?{}:null;return n&&(r.color=n),l&&(r.height=Number.isNaN(Number(l))?l:`${l}px`),pn(t)?o("img",{class:"icon",src:t,alt:"","no-view":"",style:r}):gr(t)?o("img",{class:"icon",src:Be(t),alt:"","aria-hidden":"","no-view":"",style:r}):o(st("FontIcon"),e)};hu.displayName="HopeIcon";var He=hu;const Bl=()=>{const e=Ue(),t=Dt();return n=>{if(n)if(gr(n))t.path!==n&&e.push(n);else if(Ys(n))window&&window.open(n);else{const l=t.path.slice(0,t.path.lastIndexOf("/"));e.push(`${l}/${encodeURI(n)}`)}}},fu=()=>{const e=oe(),t=ye();return w(()=>{const{author:n}=t.value;return n?cl(n):n===!1?[]:cl(e.value.author,!1)})},t8=()=>{const e=ye(),t=ve(Symbol.for("categoryMap"));return w(()=>Ic(e.value.category).map(n=>{var l;return{name:n,path:((l=t==null?void 0:t.value.map[n])==null?void 0:l.path)||""}}))},n8=()=>{const e=ye(),t=ve(Symbol.for("tagMap"));return w(()=>xc(e.value.tag).map(n=>{var l;return{name:n,path:((l=t==null?void 0:t.value.map[n])==null?void 0:l.path)||""}}))},l8=()=>{const e=ye(),t=Ee();return w(()=>{const n=Qi(e.value.date);if(n)return n;const{createdTime:l}=t.value.git||{};return l?new Date(l):null})},r8=()=>{const e=oe(),t=Ee(),n=ye(),l=fu(),r=t8(),i=n8(),a=l8(),s=uu(),c=Qv(),u=w(()=>({author:l.value,category:r.value,date:a.value,localizedDate:t.value.localizedDate,tag:i.value,isOriginal:n.value.isOriginal||!1,readingTime:s.value,readingTimeLocale:c.value,pageview:"pageview"in n.value?n.value.pageview:!0})),d=w(()=>"pageInfo"in n.value?n.value.pageInfo:"pageInfo"in e.value?e.value.pageInfo:null);return{info:u,items:d}},{mobileBreakPoint:i8,pcBreakPoint:a8}=ra,$o=e=>e.endsWith("px")?Number(e.slice(0,-2)):null,wl=()=>{const e=X(!1),t=X(!1),n=()=>{e.value=window.innerWidth<=($o(i8)??719),t.value=window.innerWidth>=($o(a8)??1440)};return _e(()=>{n(),Fe("resize",n,!1),Fe("orientationchange",n,!1)}),{isMobile:e,isPC:t}},vu=Symbol(""),Dl=()=>{const e=ve(vu);if(!e)throw new Error("useDarkmode() is called without provider.");return e},o8=e=>{const t=Zt(),n=mf(),l=w(()=>t.value.darkmode||"switch"),r=ea("vuepress-theme-hope-scheme","auto"),i=w(()=>{const s=l.value;return s==="disable"?!1:s==="enable"?!0:s==="auto"?n.value:s==="toggle"?r.value==="dark":r.value==="dark"||r.value==="auto"&&n.value}),a=w(()=>{const s=l.value;return s==="switch"||s==="toggle"});e.provide(vu,{canToggle:a,config:l,isDarkmode:i,status:r}),Object.defineProperties(e.config.globalProperties,{$isDarkmode:{get:()=>i.value}})},s8=()=>{const{config:e,isDarkmode:t,status:n}=Dl();Vi(()=>{e.value==="disable"?n.value="light":e.value==="enable"&&(n.value="dark")}),_e(()=>{fe(t,l=>document.documentElement.setAttribute("data-theme",l?"dark":"light"),{immediate:!0})})};var Je=$({name:"AutoLink",inheritAttrs:!1,props:{config:{type:Object,required:!0},exact:Boolean,noExternalLinkIcon:Boolean},emits:["focusout"],slots:Object,setup(e,{attrs:t,emit:n,slots:l}){const r=Dt(),i=ic(),a=Fn(e,"config"),s=w(()=>pn(a.value.link)),c=w(()=>!s.value&&Ys(a.value.link)),u=w(()=>a.value.target||(s.value?"_blank":void 0)),d=w(()=>u.value==="_blank"),p=w(()=>!s.value&&!c.value&&!d.value),f=w(()=>a.value.rel||(d.value?"noopener noreferrer":void 0)),v=w(()=>a.value.ariaLabel||a.value.text),g=w(()=>{if(e.exact)return!1;const y=dt(i.value.locales);return y.length?y.every(A=>A!==a.value.link):a.value.link!=="/"}),B=w(()=>p.value?a.value.activeMatch?new RegExp(a.value.activeMatch).test(r.path):g.value?xn(r.path,a.value.link):r.path===a.value.link:!1);return()=>{const{before:y,after:A,default:T}=l,{text:_,icon:C,link:M}=a.value;return p.value?o(Ie,{to:M,"aria-label":v.value,...t,class:["nav-link",{active:B.value},t.class],onFocusout:()=>n("focusout")},()=>T?T():[y?y():o(He,{icon:C}),_,A==null?void 0:A()]):o("a",{href:M,rel:f.value,target:u.value,"aria-label":v.value,...t,class:["nav-link",t.class],onFocusout:()=>n("focusout")},T?T():[y?y():o(He,{icon:C}),_,e.noExternalLinkIcon?null:o(eu),A==null?void 0:A()])}}});const Rn=(e,t,n=!1)=>"activeMatch"in t?new RegExp(t.activeMatch).test(e.path):Rc(e,t.link)?!0:t.children&&!n?t.children.some(l=>Rn(e,l)):!1,mu=(e,t)=>t.type==="group"?t.children.some(n=>n.type==="group"?mu(e,n):n.type==="page"&&Rn(e,n,!0))||"prefix"in t&&Rc(e,t.prefix):!1,Eu=(e,t)=>ie(e.link)?o(Je,{...t,config:e}):o("p",t,[o(He,{icon:e.icon}),e.text]),gu=e=>{const t=Dt();return e?o("ul",{class:"vp-sidebar-sub-headers"},e.map(n=>o("li",{class:"vp-sidebar-sub-header"},[Eu(n,{class:["vp-sidebar-link","vp-heading",{active:Rn(t,n,!0)}]}),gu(n.children)]))):null};var be=(e=>(e.type="y",e.title="t",e.shortTitle="s",e.icon="i",e.author="a",e.date="d",e.localizedDate="l",e.category="c",e.tag="g",e.isEncrypted="n",e.isOriginal="o",e.readingTime="r",e.excerpt="e",e.sticky="u",e.cover="v",e.index="I",e.order="O",e))(be||{}),bu=(e=>(e.article="a",e.home="h",e.slide="s",e.page="p",e))(bu||{});const an=(e="",t="")=>gr(t)?t:`${Gi(e)}${t}`,Dn=(e,t,n=!1)=>{let l=On(e,kc(encodeURI(t)));l.name==="404"&&(l=On(e,t));const{fullPath:r,meta:i,name:a}=l;return{text:!n&&i[be.shortTitle]?i[be.shortTitle]:i[be.title]||t,link:a==="404"?t:r,...i[be.icon]?{icon:i[be.icon]}:{}}},_r=(e,t,n)=>n>0?t.map(l=>({type:"heading",text:l.title,link:`${e.path}#${l.slug}`,children:_r(e,l.children,n-1)})):[],mi=({config:e,router:t,page:n,headerDepth:l,prefix:r=""})=>{const i=(a,s=r)=>{var u;const c=ie(a)?Dn(t,an(s,a)):a.link?{...a,...ol(a.link)?{}:{link:Dn(t,an(s,a.link)).link}}:a;if("children"in c){const d=an(s,c.prefix),p=c.children==="structure"?ia[d]:c.children;return{type:"group",...c,prefix:d,children:p.map(f=>i(f,d))}}return{type:"page",...c,children:c.link===n.path?_r(n,((u=n.headers[0])==null?void 0:u.level)===1?n.headers[0].children:n.headers,l):[]}};return e.map(a=>i(a))},c8=({config:e,router:t,page:n,headerDepth:l})=>{const r=dt(e).sort((i,a)=>a.length-i.length);for(const i of r)if(xn(decodeURI(n.path),i)){const a=e[i];return a?mi({config:a==="structure"?ia[i]:a==="heading"?_r(n,n.headers,l):a,router:t,page:n,headerDepth:l,prefix:i}):[]}return console.warn(`${n.path} is missing sidebar config.`),[]},u8=({config:e,router:t,routeLocale:n,page:l,headerDepth:r})=>e==="heading"?_r(l,l.headers,r):e==="structure"?mi({config:ia[n],router:t,page:l,headerDepth:r,prefix:n}):ee(e)?mi({config:e,router:t,page:l,headerDepth:r}):hr(e)?c8({config:e,router:t,page:l,headerDepth:r}):[],_u=Symbol(""),d8=()=>{const e=ye(),t=oe(),n=Ee(),l=Ft(),r=Ue(),i=w(()=>e.value.home?!1:e.value.sidebar??t.value.sidebar??"structure"),a=w(()=>e.value.headerDepth??t.value.headerDepth??2),s=Zi(()=>[i.value,a.value,n.value.path,null],()=>u8({config:i.value,router:r,routeLocale:l.value,page:n.value,headerDepth:a.value}));Et(_u,s)},aa=()=>{const e=ve(_u);if(!e)throw new Error("useSidebarItems() is called without provider.");return e};var p8=$({name:"PageFooter",setup(){const e=Zt(),t=oe(),n=ye(),l=fu(),r=w(()=>{const{copyright:u,footer:d}=n.value;return d!==!1&&!!(u||d||t.value.displayFooter)}),i=w(()=>{const{footer:u}=n.value;return u===!1?!1:ie(u)?u:t.value.footer||""}),a=w(()=>l.value.map(({name:u})=>u).join(", ")),s=u=>`Copyright © ${new Date().getFullYear()} ${a.value} ${u?`${u} Licensed`:""}`,c=w(()=>{const{copyright:u,license:d=""}=n.value,{license:p}=e.value,{copyright:f}=t.value;return u??(d?s(d):ie(f)?f:a.value||p?s(p):!1)});return()=>r.value?o("footer",{class:"vp-footer-wrapper"},[i.value?o("div",{class:"vp-footer",innerHTML:i.value}):null,c.value?o("div",{class:"vp-copyright",innerHTML:c.value}):null]):null}}),h8=$({name:"NavbarDropdownLink",props:{config:{type:Object,required:!0}},slots:Object,setup(e,{slots:t}){const n=Ee(),l=Fn(e,"config"),r=w(()=>l.value.ariaLabel||l.value.text),i=X(!1);fe(()=>n.value.path,()=>{i.value=!1});const a=s=>{s.detail===0&&(i.value=!i.value)};return()=>{var s;return o("div",{class:["dropdown-wrapper",{open:i.value}]},[o("button",{type:"button",class:"dropdown-title","aria-label":r.value,onClick:a},[((s=t.title)==null?void 0:s.call(t))||o("span",{class:"title"},[o(He,{icon:l.value.icon}),e.config.text]),o("span",{class:"arrow"}),o("ul",{class:"nav-dropdown"},l.value.children.map((c,u)=>{const d=u===l.value.children.length-1;return o("li",{class:"dropdown-item"},"children"in c?[o("h4",{class:"dropdown-subtitle"},c.link?o(Je,{config:c,onFocusout:()=>{c.children.length===0&&d&&(i.value=!1)}}):o("span",c.text)),o("ul",{class:"dropdown-subitem-wrapper"},c.children.map((p,f)=>o("li",{class:"dropdown-subitem"},o(Je,{config:p,onFocusout:()=>{f===c.children.length-1&&d&&(i.value=!1)}}))))]:o(Je,{config:c,onFocusout:()=>{d&&(i.value=!1)}}))}))])])}}});const Au=(e,t,n="")=>ie(t)?Dn(e,an(n,t)):"children"in t?{...t,...t.link&&!ol(t.link)?Dn(e,an(n,t.link)):{},children:t.children.map(l=>Au(e,l,an(n,t.prefix)))}:{...t,link:ol(t.link)?t.link:Dn(e,an(n,t.link)).link},yu=()=>{const e=oe(),t=Ue(),n=()=>(e.value.navbar||[]).map(l=>Au(t,l));return Zi(()=>e.value.navbar,()=>n())},f8=()=>{const e=oe(),t=w(()=>e.value.repo||null),n=w(()=>t.value?Uh(t.value):null),l=w(()=>t.value?Sc(t.value):null),r=w(()=>n.value?e.value.repoLabel??(l.value===null?"Source":l.value):null);return w(()=>!n.value||!r.value||e.value.repoDisplay===!1?null:{type:l.value||"Source",label:r.value,link:n.value})};var v8=$({name:"NavScreenDropdown",props:{config:{type:Object,required:!0}},setup(e){const t=Ee(),n=Fn(e,"config"),l=w(()=>n.value.ariaLabel||n.value.text),r=X(!1);fe(()=>t.value.path,()=>{r.value=!1});const i=(a,s)=>s[s.length-1]===a;return()=>[o("button",{type:"button",class:["nav-screen-dropdown-title",{active:r.value}],"aria-label":l.value,onClick:()=>{r.value=!r.value}},[o("span",{class:"title"},[o(He,{icon:n.value.icon}),e.config.text]),o("span",{class:["arrow",r.value?"down":"end"]})]),o("ul",{class:["nav-screen-dropdown",{hide:!r.value}]},n.value.children.map(a=>o("li",{class:"dropdown-item"},"children"in a?[o("h4",{class:"dropdown-subtitle"},a.link?o(Je,{config:a,onFocusout:()=>{i(a,n.value.children)&&a.children.length===0&&(r.value=!1)}}):o("span",a.text)),o("ul",{class:"dropdown-subitem-wrapper"},a.children.map(s=>o("li",{class:"dropdown-subitem"},o(Je,{config:s,onFocusout:()=>{i(s,a.children)&&i(a,n.value.children)&&(r.value=!1)}}))))]:o(Je,{config:a,onFocusout:()=>{i(a,n.value.children)&&(r.value=!1)}}))))]}}),m8=$({name:"NavScreenLinks",setup(){const e=yu();return()=>e.value.length?o("nav",{class:"nav-screen-links"},e.value.map(t=>o("div",{class:"navbar-links-item"},"children"in t?o(v8,{config:t}):o(Je,{config:t})))):null}});const Bu=()=>o(pe,{name:"dark"},()=>o("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));Bu.displayName="DarkIcon";const wu=()=>o(pe,{name:"light"},()=>o("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));wu.displayName="LightIcon";const Du=()=>o(pe,{name:"auto"},()=>o("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));Du.displayName="AutoIcon";const Lu=()=>o(pe,{name:"enter-fullscreen"},()=>o("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));Lu.displayName="EnterFullScreenIcon";const Tu=()=>o(pe,{name:"cancel-fullscreen"},()=>o("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));Tu.displayName="CancelFullScreenIcon";const Cu=()=>o(pe,{name:"outlook"},()=>[o("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);Cu.displayName="OutlookIcon";var ku=$({name:"AppearanceSwitch",setup(){const{config:e,isDarkmode:t,status:n}=Dl(),l=fn(),r=()=>{e.value==="switch"?n.value={light:"dark",dark:"auto",auto:"light"}[n.value]:n.value=n.value==="light"?"dark":"light"},i=async a=>{if(!(document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!l.value)||!a){r();return}const s=a.clientX,c=a.clientY,u=Math.hypot(Math.max(s,innerWidth-s),Math.max(c,innerHeight-c)),d=t.value;await document.startViewTransition(async()=>{r(),await dn()}).ready,t.value!==d&&document.documentElement.animate({clipPath:t.value?[`circle(${u}px at ${s}px ${c}px)`,`circle(0px at ${s}px ${c}px)`]:[`circle(0px at ${s}px ${c}px)`,`circle(${u}px at ${s}px ${c}px)`]},{duration:400,pseudoElement:t.value?"::view-transition-old(root)":"::view-transition-new(root)"})};return()=>o("button",{type:"button",id:"appearance-switch",onClick:i},[o(Du,{style:{display:n.value==="auto"?"block":"none"}}),o(Bu,{style:{display:n.value==="dark"?"block":"none"}}),o(wu,{style:{display:n.value==="light"?"block":"none"}})])}}),E8=$({name:"AppearanceMode",setup(){const e=oe(),{canToggle:t}=Dl(),n=w(()=>e.value.outlookLocales.darkmode);return()=>t.value?o("div",{class:"appearance-wrapper"},[o("label",{class:"appearance-title",for:"appearance-switch"},n.value),o(ku)]):null}});const Yr="VUEPRESS_THEME_COLOR";var g8=$({name:"ThemeColorPicker",props:{themeColor:{type:Object,required:!0}},setup(e){const t=(n="")=>{const l=document.documentElement.classList,r=dt(e.themeColor);if(!n){localStorage.removeItem(Yr),l.remove(...r);return}l.remove(...r.filter(i=>i!==n)),l.add(n),localStorage.setItem(Yr,n)};return _e(()=>{const n=localStorage.getItem(Yr);n&&t(n)}),()=>o("ul",{id:"theme-color-picker"},[o("li",o("span",{class:"theme-color",onClick:()=>t()})),hn(e.themeColor).map(([n,l])=>o("li",o("span",{style:{background:l},onClick:()=>t(n)})))])}});const Ln=ra.enableThemeColor==="true",b8=Ln?Hh(hn(ra).filter(([e])=>e.startsWith("theme-"))):{};var _8=$({name:"ThemeColor",setup(){const e=oe(),t=w(()=>e.value.outlookLocales.themeColor);return()=>Ln?o("div",{class:"theme-color-wrapper"},[o("label",{class:"theme-color-title",for:"theme-color-picker"},t.value),o(g8,{themeColor:b8})]):null}}),Pu=$({name:"ToggleFullScreenButton",setup(){const e=oe(),{isSupported:t,isFullscreen:n,toggle:l}=ta(),r=w(()=>e.value.outlookLocales.fullscreen);return()=>t?o("div",{class:"full-screen-wrapper"},[o("label",{class:"full-screen-title",for:"full-screen-switch"},r.value),o("button",{type:"button",id:"full-screen-switch",class:"full-screen",ariaPressed:n.value,onClick:()=>l()},n.value?o(Tu):o(Lu))]):null}}),Iu=$({name:"OutlookSettings",setup(){const e=Zt(),t=fn(),n=w(()=>!t.value&&e.value.fullscreen);return()=>o(fr,()=>[Ln?o(_8):null,o(E8),n.value?o(Pu):null])}}),A8=$({name:"NavScreen",props:{show:Boolean},emits:["close"],slots:Object,setup(e,{emit:t,slots:n}){const l=Ee(),{isMobile:r}=wl(),i=Se(),a=Jc(i);return _e(()=>{i.value=document.body,fe(r,s=>{!s&&e.show&&(a.value=!1,t("close"))}),fe(()=>l.value.path,()=>{a.value=!1,t("close")})}),ml(()=>{a.value=!1}),()=>o(Qt,{name:"fade",onEnter:()=>{a.value=!0},onAfterLeave:()=>{a.value=!1}},()=>{var s,c;return e.show?o("div",{id:"nav-screen"},o("div",{class:"vp-nav-screen-container"},[(s=n.before)==null?void 0:s.call(n),o(m8),o("div",{class:"vp-outlook-wrapper"},o(Iu)),(c=n.after)==null?void 0:c.call(n)])):null})}}),y8=$({name:"NavbarBrand",setup(){const e=Ft(),t=bl(),n=oe(),l=w(()=>n.value.home||e.value),r=w(()=>t.value.title),i=w(()=>n.value.navTitle??r.value),a=w(()=>n.value.logo?Be(n.value.logo):null),s=w(()=>n.value.logoDark?Be(n.value.logoDark):null);return()=>o(Ie,{to:l.value,class:"vp-brand"},()=>[a.value?o("img",{class:["vp-nav-logo",{light:!!s.value}],src:a.value,alt:""}):null,s.value?o("img",{class:["vp-nav-logo dark"],src:s.value,alt:""}):null,i.value?o("span",{class:["vp-site-name",{"hide-in-pad":a.value&&n.value.hideSiteNameOnMobile!==!1}]},i.value):null])}}),B8=$({name:"NavbarLinks",setup(){const e=yu();return()=>e.value.length?o("nav",{class:"vp-nav-links"},e.value.map(t=>o("div",{class:"nav-item hide-in-mobile"},"children"in t?o(h8,{config:t}):o(Je,{config:t})))):null}}),w8=$({name:"RepoLink",components:{BitbucketIcon:$c,GiteeIcon:Mc,GitHubIcon:Fc,GitLabIcon:Vc,SourceIcon:Nc},setup(){const e=f8();return()=>e.value?o("div",{class:"nav-item vp-repo"},o("a",{class:"vp-repo-link",href:e.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":e.value.label},o(st(`${e.value.type}Icon`),{style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}});const xu=({active:e=!1},{emit:t})=>o("button",{type:"button",class:["vp-toggle-navbar-button",{"is-active":e}],"aria-label":"Toggle Navbar","aria-expanded":e,"aria-controls":"nav-screen",onClick:()=>t("toggle")},o("span",[o("span",{class:"vp-top"}),o("span",{class:"vp-middle"}),o("span",{class:"vp-bottom"})]));xu.displayName="ToggleNavbarButton";var D8=xu;const Ei=(e,{emit:t})=>o("button",{type:"button",class:"vp-toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>t("toggle")},o("span",{class:"icon"}));Ei.displayName="ToggleSidebarButton",Ei.emits=["toggle"];var L8=Ei,T8=$({name:"OutlookButton",setup(){const{isSupported:e}=ta(),t=Zt(),n=fn(),l=Ee(),{canToggle:r}=Dl(),i=X(!1),a=w(()=>!n.value&&t.value.fullscreen&&e);return fe(()=>l.value.path,()=>{i.value=!1}),()=>r.value||a.value||Ln?o("div",{class:"nav-item hide-in-mobile"},r.value&&!a.value&&!Ln?o(ku):a.value&&!r.value&&!Ln?o(Pu):o("button",{type:"button",class:["outlook-button",{open:i.value}],tabindex:"-1","aria-hidden":!0},[o(Cu),o("div",{class:"outlook-dropdown"},o(Iu))])):null}}),C8=$({name:"NavBar",emits:["toggleSidebar"],slots:Object,setup(e,{emit:t,slots:n}){const l=oe(),{isMobile:r}=wl(),i=X(!1),a=w(()=>{const{navbarAutoHide:d="mobile"}=l.value;return d!=="none"&&(d==="always"||r.value)}),s=w(()=>l.value.navbarLayout||{start:["Brand"],center:["Links"],end:["Language","Repo","Outlook","Search"]}),c={Brand:y8,Language:Kr,Links:B8,Repo:w8,Outlook:T8,Search:et("Docsearch")?st("Docsearch"):et("SearchBox")?st("SearchBox"):Kr},u=d=>c[d]??(et(d)?st(d):Kr);return()=>{var d,p,f,v,g,B;return[o("header",{id:"navbar",class:["vp-navbar",{"auto-hide":a.value,"hide-icon":l.value.navbarIcon===!1}]},[o("div",{class:"vp-navbar-start"},[o(L8,{onToggle:()=>{i.value&&(i.value=!1),t("toggleSidebar")}}),(d=n.startBefore)==null?void 0:d.call(n),(s.value.start||[]).map(y=>o(u(y))),(p=n.startAfter)==null?void 0:p.call(n)]),o("div",{class:"vp-navbar-center"},[(f=n.centerBefore)==null?void 0:f.call(n),(s.value.center||[]).map(y=>o(u(y))),(v=n.centerAfter)==null?void 0:v.call(n)]),o("div",{class:"vp-navbar-end"},[(g=n.endBefore)==null?void 0:g.call(n),(s.value.end||[]).map(y=>o(u(y))),(B=n.endAfter)==null?void 0:B.call(n),o(D8,{active:i.value,onToggle:()=>{i.value=!i.value}})])]),o(A8,{show:i.value,onClose:()=>{i.value=!1}},{before:()=>{var y;return(y=n.screenTop)==null?void 0:y.call(n)},after:()=>{var y;return(y=n.screenBottom)==null?void 0:y.call(n)}})]}}}),k8=$({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(e){const t=Dt();return()=>[Eu(e.config,{class:["vp-sidebar-link",`vp-sidebar-${e.config.type}`,{active:Rn(t,e.config,!0)}],exact:!0}),gu(e.config.children)]}}),P8=$({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:["toggle"],setup(e,{emit:t}){const n=Dt(),l=w(()=>Rn(n,e.config)),r=w(()=>Rn(n,e.config,!0));return()=>{const{collapsible:i,children:a=[],icon:s,prefix:c,link:u,text:d}=e.config;return o("section",{class:"vp-sidebar-group"},[o(i?"button":"p",{class:["vp-sidebar-heading",{clickable:i||u,exact:r.value,active:l.value}],...i?{type:"button",onClick:()=>t("toggle"),onKeydown:p=>{p.key==="Enter"&&t("toggle")}}:{}},[o(He,{icon:s}),u?o(Je,{class:"vp-sidebar-title",config:{text:d,link:u},noExternalLinkIcon:!0}):o("span",{class:"vp-sidebar-title"},d),i?o("span",{class:["vp-arrow",e.open?"down":"end"]}):null]),e.open||!i?o(Ou,{key:c,config:a}):null])}}}),Ou=$({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(e){const t=Dt(),n=X(-1),l=r=>{n.value=r===n.value?-1:r};return fe(()=>t.path,()=>{const r=e.config.findIndex(i=>mu(t,i));n.value=r},{immediate:!0,flush:"post"}),()=>o("ul",{class:"vp-sidebar-links"},e.config.map((r,i)=>o("li",r.type==="group"?o(P8,{config:r,open:i===n.value,onToggle:()=>l(i)}):o(k8,{config:r}))))}}),I8=$({name:"SideBar",slots:Object,setup(e,{slots:t}){const n=Dt(),l=oe(),r=aa(),i=Se();return _e(()=>{fe(()=>n.hash,a=>{const s=document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${n.path}${a}"]`);if(!s)return;const{top:c,height:u}=i.value.getBoundingClientRect(),{top:d,height:p}=s.getBoundingClientRect();d<c?s.scrollIntoView(!0):d+p>c+u&&s.scrollIntoView(!1)},{immediate:!0})}),()=>{var a,s,c;return o("aside",{ref:i,id:"sidebar",class:["vp-sidebar",{"hide-icon":l.value.sidebarIcon===!1}]},[(a=t.top)==null?void 0:a.call(t),((s=t.default)==null?void 0:s.call(t))||o(Ou,{config:r.value}),(c=t.bottom)==null?void 0:c.call(t)])}}}),oa=$({name:"CommonWrapper",props:{containerClass:{type:String,default:""},noNavbar:Boolean,noSidebar:Boolean,noToc:Boolean},slots:Object,setup(e,{slots:t}){const n=Ue(),l=Ee(),r=ye(),i=oe(),{isMobile:a,isPC:s}=wl(),[c,u]=rr(!1),[d,p]=rr(!1),f=aa(),v=X(!1),g=w(()=>e.noNavbar||r.value.navbar===!1||i.value.navbar===!1?!1:!!(l.value.title||i.value.logo||i.value.repo||i.value.navbar)),B=w(()=>e.noSidebar?!1:r.value.sidebar!==!1&&f.value.length!==0&&!r.value.home),y=w(()=>e.noToc||r.value.home?!1:r.value.toc||i.value.toc!==!1&&r.value.toc!==!1),A={x:0,y:0},T=L=>{A.x=L.changedTouches[0].clientX,A.y=L.changedTouches[0].clientY},_=L=>{const F=L.changedTouches[0].clientX-A.x,O=L.changedTouches[0].clientY-A.y;Math.abs(F)>Math.abs(O)*1.5&&Math.abs(F)>40&&(F>0&&A.x<=80?u(!0):u(!1))},C=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;let M=0;return Fe("scroll",lf(()=>{const L=C();L<=58||L<M?v.value=!1:M+200<L&&!c.value&&(v.value=!0),M=L},300,!0)),fe(a,L=>{L||u(!1)}),_e(()=>{const L=Jc(document.body);fe(c,O=>{L.value=O});const F=n.afterEach(()=>{u(!1)});ml(()=>{L.value=!1,F()})}),()=>o(et("GlobalEncrypt")?st("GlobalEncrypt"):Lc,()=>o("div",{class:["theme-container",{"no-navbar":!g.value,"no-sidebar":!B.value&&!(t.sidebar||t.sidebarTop||t.sidebarBottom),"has-toc":y.value,"hide-navbar":v.value,"sidebar-collapsed":!a.value&&!s.value&&d.value,"sidebar-open":a.value&&c.value},e.containerClass,r.value.containerClass||""],onTouchStart:T,onTouchEnd:_},[g.value?o(C8,{onToggleSidebar:()=>u()},{startBefore:()=>{var L;return(L=t.navbarStartBefore)==null?void 0:L.call(t)},startAfter:()=>{var L;return(L=t.navbarStartAfter)==null?void 0:L.call(t)},centerBefore:()=>{var L;return(L=t.navbarCenterBefore)==null?void 0:L.call(t)},centerAfter:()=>{var L;return(L=t.navbarCenterAfter)==null?void 0:L.call(t)},endBefore:()=>{var L;return(L=t.navbarEndBefore)==null?void 0:L.call(t)},endAfter:()=>{var L;return(L=t.navbarEndAfter)==null?void 0:L.call(t)},screenTop:()=>{var L;return(L=t.navScreenTop)==null?void 0:L.call(t)},screenBottom:()=>{var L;return(L=t.navScreenBottom)==null?void 0:L.call(t)}}):null,o(Qt,{name:"fade"},()=>c.value?o("div",{class:"vp-sidebar-mask",onClick:()=>u(!1)}):null),o(Qt,{name:"fade"},()=>a.value?null:o("div",{class:"toggle-sidebar-wrapper",onClick:()=>p()},o("span",{class:["arrow",d.value?"end":"start"]}))),o(I8,{},{...t.sidebar?{default:()=>t.sidebar()}:{},top:()=>{var L;return(L=t.sidebarTop)==null?void 0:L.call(t)},bottom:()=>{var L;return(L=t.sidebarBottom)==null?void 0:L.call(t)}}),t.default(),o(p8)]))}}),he=$({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25},appear:Boolean},slots:Object,setup(e,{slots:t}){const n=r=>{r.style.transition=`transform ${e.duration}s ease-in-out ${e.delay}s, opacity ${e.duration}s ease-in-out ${e.delay}s`,r.style.transform="translateY(-20px)",r.style.opacity="0"},l=r=>{r.style.transform="translateY(0)",r.style.opacity="1"};return()=>o(e.type==="single"?Qt:$1,{name:"drop",appear:e.appear,onAppear:n,onAfterAppear:l,onEnter:n,onAfterEnter:l,onBeforeLeave:n},()=>t.default())}});const gi=({custom:e})=>o(oc,{class:["theme-hope-content",{custom:e}]});gi.displayName="MarkdownContent",gi.props={custom:Boolean};var sa=gi;const Ru=()=>o(pe,{name:"author"},()=>o("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));Ru.displayName="AuthorIcon";const Su=()=>o(pe,{name:"calendar"},()=>o("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));Su.displayName="CalendarIcon";const Fu=()=>o(pe,{name:"category"},()=>o("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));Fu.displayName="CategoryIcon";const Vu=()=>o(pe,{name:"print"},()=>o("path",{d:"M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"}));Vu.displayName="PrintIcon";const Mu=()=>o(pe,{name:"tag"},()=>o("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));Mu.displayName="TagIcon";const $u=()=>o(pe,{name:"timer"},()=>o("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));$u.displayName="TimerIcon";const Nu=()=>o(pe,{name:"word"},()=>[o("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),o("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);Nu.displayName="WordIcon";const en=()=>{const e=oe();return w(()=>e.value.metaLocales)};var x8=$({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0},pure:Boolean},setup(e){const t=en();return()=>e.author.length?o("span",{class:"page-author-info","aria-label":`${t.value.author}${e.pure?"":"🖊"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[o(Ru),o("span",e.author.map(n=>n.url?o("a",{class:"page-author-item",href:n.url,target:"_blank",rel:"noopener noreferrer"},n.name):o("span",{class:"page-author-item"},n.name))),o("span",{property:"author",content:e.author.map(n=>n.name).join(", ")})]):null}}),O8=$({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0},pure:Boolean},setup(e){const t=Ue(),n=Ee(),l=en(),r=(i,a="")=>{a&&n.value.path!==a&&(i.preventDefault(),t.push(a))};return()=>e.category.length?o("span",{class:"page-category-info","aria-label":`${l.value.category}${e.pure?"":"🌈"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[o(Fu),e.category.map(({name:i,path:a})=>o("span",{class:["page-category-item",{[`category${Er(i,9)}`]:!e.pure,clickable:a}],role:a?"navigation":"",onClick:s=>r(s,a)},i)),o("meta",{property:"articleSection",content:e.category.map(({name:i})=>i).join(",")})]):null}}),R8=$({name:"DateInfo",inheritAttrs:!1,props:{date:{type:Object,default:null},localizedDate:{type:String,default:""},pure:Boolean},setup(e){const t=lc(),n=en();return()=>e.date?o("span",{class:"page-date-info","aria-label":`${n.value.date}${e.pure?"":"📅"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[o(Su),o("span",o(fr,()=>e.localizedDate||e.date.toLocaleDateString(t.value))),o("meta",{property:"datePublished",content:e.date.toISOString()||""})]):null}}),S8=$({name:"OriginalInfo",inheritAttrs:!1,props:{isOriginal:Boolean},setup(e){const t=en();return()=>e.isOriginal?o("span",{class:"page-original-info"},t.value.origin):null}}),F8=$({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(e){const t=en(),n=w(()=>{if(!e.readingTime)return null;const{minutes:l}=e.readingTime;return l<1?"PT1M":`PT${Math.round(l)}M`});return()=>{var l,r;return(l=e.readingTimeLocale)!=null&&l.time?o("span",{class:"page-reading-time-info","aria-label":`${t.value.readingTime}${e.pure?"":"⌛"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[o($u),o("span",(r=e.readingTimeLocale)==null?void 0:r.time),o("meta",{property:"timeRequired",content:n.value})]):null}}}),V8=$({name:"TagInfo",inheritAttrs:!1,props:{tag:{type:Array,default:()=>[]},pure:Boolean},setup(e){const t=Ue(),n=Ee(),l=en(),r=(i,a="")=>{a&&n.value.path!==a&&(i.preventDefault(),t.push(a))};return()=>e.tag.length?o("span",{class:"page-tag-info","aria-label":`${l.value.tag}${e.pure?"":"🏷"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[o(Mu),e.tag.map(({name:i,path:a})=>o("span",{class:["page-tag-item",{[`tag${Er(i,9)}`]:!e.pure,clickable:a}],role:a?"navigation":"",onClick:s=>r(s,a)},i)),o("meta",{property:"keywords",content:e.tag.map(({name:i})=>i).join(",")})]):null}}),M8=$({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(e){const t=en();return()=>{var n,l,r;return(n=e.readingTimeLocale)!=null&&n.words?o("span",{class:"page-word-info","aria-label":`${t.value.words}${e.pure?"":"🔠"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[o(Nu),o("span",(l=e.readingTimeLocale)==null?void 0:l.words),o("meta",{property:"wordCount",content:(r=e.readingTime)==null?void 0:r.words})]):null}}}),ju=$({name:"PageInfo",components:{AuthorInfo:x8,CategoryInfo:O8,DateInfo:R8,OriginalInfo:S8,PageViewInfo:()=>null,ReadingTimeInfo:F8,TagInfo:V8,WordInfo:M8},props:{items:{type:[Array,Boolean],default:()=>["Author","Original","Date","PageView","ReadingTime","Category","Tag"]},info:{type:Object,required:!0}},setup(e){const t=fn();return()=>e.items?o("div",{class:"page-info"},e.items.map(n=>o(st(`${n}Info`),{...e.info,pure:t.value}))):null}}),$8=$({name:"PrintButton",setup(){const e=Zt(),t=oe();return()=>e.value.print===!1?null:o("button",{type:"button",class:"print-button",title:t.value.metaLocales.print,onClick:()=>{window.print()}},o(Vu))}});const N8=({title:e,level:t,slug:n})=>o(Ie,{to:`#${n}`,class:["toc-link",`level${t}`]},()=>e),bi=(e,t)=>{const n=Dt();return e.length&&t>0?o("ul",{class:"toc-list"},e.map(l=>{const r=bi(l.children,t-1);return[o("li",{class:["toc-item",{active:n.hash===`#${l.slug}`}]},N8(l)),r?o("li",r):null]})):null};var Hu=$({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},slots:Object,setup(e,{slots:t}){const n=Dt(),l=Ee(),r=en(),i=Se(),a=X("-1.7rem"),s=u=>{var d;(d=i.value)==null||d.scrollTo({top:u,behavior:"smooth"})},c=()=>{if(i.value){const u=document.querySelector(".toc-item.active");u?a.value=`${u.getBoundingClientRect().top-i.value.getBoundingClientRect().top+i.value.scrollTop}px`:a.value="-1.7rem"}else a.value="-1.7rem"};return _e(()=>{fe(()=>n.hash,u=>{if(i.value){const d=document.querySelector(`#toc a.toc-link[href$="${u}"]`);if(!d)return;const{top:p,height:f}=i.value.getBoundingClientRect(),{top:v,height:g}=d.getBoundingClientRect();v<p?s(i.value.scrollTop+v-p):v+g>p+f&&s(i.value.scrollTop+v+g-p-f)}}),fe(()=>n.fullPath,c,{flush:"post",immediate:!0})}),()=>{var d,p;const u=e.items.length?bi(e.items,e.headerDepth):l.value.headers?bi(l.value.headers,e.headerDepth):null;return u?o("div",{class:"toc-place-holder"},[o("aside",{id:"toc"},[(d=t.before)==null?void 0:d.call(t),o("div",{class:"toc-header"},[r.value.toc,o($8)]),o("div",{class:"toc-wrapper",ref:i},[u,o("div",{class:"toc-marker",style:{top:a.value}})]),(p=t.after)==null?void 0:p.call(t)])]):null}}}),ca=$({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(e){const t=Ee(),n=oe(),l=Se(),r=({target:i})=>{const a=document.querySelector(i.hash);if(a){const s=()=>{a.removeAttribute("tabindex"),a.removeEventListener("blur",s)};a.setAttribute("tabindex","-1"),a.addEventListener("blur",s),a.focus(),window.scrollTo(0,0)}};return _e(()=>{fe(()=>t.value.path,()=>l.value.focus())}),()=>[o("span",{ref:l,tabindex:"-1"}),o("a",{href:`#${e.content}`,class:"vp-skip-link sr-only",onClick:r},n.value.routeLocales.skipToContent)]}});let Qr=null,zn=null;const j8={wait:()=>Qr,pending:()=>{Qr=new Promise(e=>zn=e)},resolve:()=>{zn==null||zn(),Qr=null,zn=null}},zu=()=>j8;var H8=$({name:"FadeSlideY",slots:Object,setup(e,{slots:t}){const{resolve:n,pending:l}=zu();return()=>o(Qt,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:n,onBeforeLeave:l},()=>{var r;return(r=t.default)==null?void 0:r.call(t)})}});const z8=(e,t)=>{const n=e.replace(t,"/").split("/"),l=[];let r=Ui(t);return n.forEach((i,a)=>{a!==n.length-1?(r+=`${i}/`,l.push({link:r,name:i||"Home"})):i!==""&&(r+=i,l.push({link:r,name:i}))}),l},qu=(e,{slots:t})=>{var p,f;const{bgImage:n,bgImageDark:l,bgImageStyle:r,color:i,description:a,image:s,imageDark:c,header:u,features:d=[]}=e;return o("div",{class:"vp-feature-wrapper"},[n?o("div",{class:["vp-feature-bg",{light:l}],style:[{"background-image":`url(${n})`},r]}):null,l?o("div",{class:"vp-feature-bg dark",style:[{"background-image":`url(${l})`},r]}):null,o("div",{class:"vp-feature",style:i?{color:i}:{}},[((p=t.image)==null?void 0:p.call(t,e))||[s?o("img",{class:["vp-feature-image",{light:c}],src:Be(s),alt:""}):null,c?o("img",{class:"vp-feature-image dark",src:Be(c),alt:""}):null],((f=t.info)==null?void 0:f.call(t,e))||[u?o("h2",{class:"vp-feature-header"},u):null,a?o("p",{class:"vp-feature-description",innerHTML:a}):null],d.length?o("div",{class:"vp-features"},d.map(({icon:v,title:g,details:B,link:y})=>{const A=[o("h3",{class:"vp-feature-title"},[o(He,{icon:v}),o("span",{innerHTML:g})]),o("p",{class:"vp-feature-details",innerHTML:B})];return y?ol(y)?o("a",{class:"vp-feature-item link",href:y,"aria-label":g,target:"_blank"},A):o(Ie,{class:"vp-feature-item link",to:y,"aria-label":g},()=>A):o("div",{class:"vp-feature-item"},A)})):null])])};qu.displayName="FeaturePanel";var No=qu,q8=$({name:"HeroInfo",slots:Object,setup(e,{slots:t}){const n=ye(),l=bl(),r=w(()=>n.value.heroFullScreen??!1),i=w(()=>{const{heroText:u,tagline:d}=n.value;return{text:u??l.value.title??"Hello",tagline:d??l.value.description??"",isFullScreen:r.value}}),a=w(()=>{const{heroText:u,heroImage:d,heroImageDark:p,heroAlt:f,heroImageStyle:v}=n.value;return{image:d?Be(d):null,imageDark:p?Be(p):null,heroStyle:v,alt:f||u||"",isFullScreen:r.value}}),s=w(()=>{const{bgImage:u,bgImageDark:d,bgImageStyle:p}=n.value;return{image:Ot(u)?Be(u):null,imageDark:Ot(d)?Be(d):null,bgStyle:p,isFullScreen:r.value}}),c=w(()=>n.value.actions??[]);return()=>{var u,d,p;return o("header",{class:["vp-hero-info-wrapper",{fullscreen:r.value}]},[((u=t.heroBg)==null?void 0:u.call(t,s.value))||[s.value.image?o("div",{class:["vp-hero-mask",{light:s.value.imageDark}],style:[{"background-image":`url(${s.value.image})`},s.value.bgStyle]}):null,s.value.imageDark?o("div",{class:"vp-hero-mask dark",style:[{"background-image":`url(${s.value.imageDark})`},s.value.bgStyle]}):null],o("div",{class:"vp-hero-info"},[((d=t.heroImage)==null?void 0:d.call(t,a.value))||o(he,{appear:!0,type:"group"},()=>[a.value.image?o("img",{key:"light",class:["vp-hero-image",{light:a.value.imageDark}],style:a.value.heroStyle,src:a.value.image,alt:a.value.alt}):null,a.value.imageDark?o("img",{key:"dark",class:"vp-hero-image dark",style:a.value.heroStyle,src:a.value.imageDark,alt:a.value.alt}):null]),((p=t.heroInfo)==null?void 0:p.call(t,i.value))??o("div",{class:"vp-hero-infos"},[i.value.text?o(he,{appear:!0,delay:.04},()=>o("h1",{id:"main-title"},i.value.text)):null,i.value.tagline?o(he,{appear:!0,delay:.08},()=>o("p",{id:"main-description",innerHTML:i.value.tagline})):null,c.value.length?o(he,{appear:!0,delay:.12},()=>o("p",{class:"vp-hero-actions"},c.value.map(f=>o(Je,{class:["vp-hero-action",f.type||"default"],config:f,noExternalLinkIcon:!0},f.icon?{before:()=>o(He,{icon:f.icon})}:{})))):null])])])}}});const Gu=(e,{slots:t})=>{var f,v,g;const{bgImage:n,bgImageDark:l,bgImageStyle:r,color:i,description:a,image:s,imageDark:c,header:u,highlights:d=[],type:p="un-order"}=e;return o("div",{class:"vp-highlight-wrapper",style:i?{color:i}:{}},[n?o("div",{class:["vp-highlight-bg",{light:l}],style:[{"background-image":`url(${n})`},r]}):null,l?o("div",{class:"vp-highlight-bg dark",style:[{"background-image":`url(${l})`},r]}):null,o("div",{class:"vp-highlight"},[((f=t.image)==null?void 0:f.call(t,e))||[s?o("img",{class:["vp-highlight-image",{light:c}],src:Be(s),alt:""}):null,c?o("img",{class:"vp-highlight-image dark",src:Be(c),alt:""}):null],((v=t.info)==null?void 0:v.call(t,e))||[o("div",{class:"vp-highlight-info-wrapper"},o("div",{class:"vp-highlight-info"},[u?o("h2",{class:"vp-highlight-header",innerHTML:u}):null,a?o("p",{class:"vp-highlight-description",innerHTML:a}):null,((g=t.highlights)==null?void 0:g.call(t,d))||o(p==="order"?"ol":p==="no-order"?"dl":"ul",{class:"vp-highlights"},d.map(({icon:B,title:y,details:A,link:T})=>{const _=[o(p==="no-order"?"dt":"h3",{class:"vp-highlight-title"},[B?o(He,{class:"vp-highlight-icon",icon:B}):null,o("span",{innerHTML:y})]),A?o(p==="no-order"?"dd":"p",{class:"vp-highlight-details",innerHTML:A}):null];return o(p==="no-order"?"div":"li",{class:["vp-highlight-item-wrapper",{link:T}]},T?$h(T)?o("a",{class:"vp-highlight-item link",href:T,"aria-label":y,target:"_blank"},_):o(Ie,{class:"vp-highlight-item link",to:T,"aria-label":y},()=>_):o("div",{class:"vp-highlight-item"},_))}))]))]])])};Gu.displayName="HighlightPanel";var G8=Gu,U8=$({name:"HomePage",slots:Object,setup(e,{slots:t}){const n=fn(),l=ye(),r=w(()=>{const{features:a}=l.value;return ee(a)?a:null}),i=w(()=>{const{highlights:a}=l.value;return ee(a)?a:null});return()=>{var a,s,c,u;return o("main",{id:"main-content",class:["vp-project-home ",{pure:n.value}],"aria-labelledby":l.value.heroText===null?"":"main-title"},[(a=t.top)==null?void 0:a.call(t),o(q8),((s=i.value)==null?void 0:s.map(d=>"features"in d?o(No,d):o(G8,d)))||(r.value?o(he,{appear:!0,delay:.24},()=>o(No,{features:r.value})):null),(c=t.center)==null?void 0:c.call(t),o(he,{appear:!0,delay:.32},()=>o(sa)),(u=t.bottom)==null?void 0:u.call(t)])}}}),W8=$({name:"BreadCrumb",setup(){const e=Ue(),t=Ee(),n=Ft(),l=ye(),r=oe(),i=Se([]),a=w(()=>(l.value.breadcrumb||l.value.breadcrumb!==!1&&r.value.breadcrumb!==!1)&&i.value.length>1),s=w(()=>l.value.breadcrumbIcon||l.value.breadcrumbIcon!==!1&&r.value.breadcrumbIcon!==!1),c=()=>{const u=e.getRoutes(),d=z8(t.value.path,n.value).map(({link:p,name:f})=>{const v=u.find(g=>g.path===p);if(v){const{meta:g,path:B}=On(e,v.path);return{title:g[be.shortTitle]||g[be.title]||f,icon:g[be.icon],path:B}}return null}).filter(p=>p!==null);d.length>1&&(i.value=d)};return _e(()=>{fe(()=>t.value.path,c,{immediate:!0})}),()=>o("nav",{class:["vp-breadcrumb",{disable:!a.value}]},a.value?o("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},i.value.map((u,d)=>o("li",{class:{"is-active":i.value.length-1===d},property:"itemListElement",typeof:"ListItem"},[o(Ie,{to:u.path,property:"item",typeof:"WebPage"},()=>[s.value?o(He,{icon:u.icon}):null,o("span",{property:"name"},u.title||"Unknown")]),o("meta",{property:"position",content:d+1})]))):[])}});const jo=(e,t)=>t===!1?!1:ie(t)?Dn(e,t,!0):hr(t)?t:null,_i=(e,t,n)=>{const l=e.findIndex(r=>r.link===t);if(l!==-1){const r=e[l+n];return r!=null&&r.link?r:null}for(const r of e)if(r.children){const i=_i(r.children,t,n);if(i)return i}return null};var J8=$({name:"PageNav",setup(){const e=oe(),t=ye(),n=aa(),l=Ee(),r=Ue(),i=Bl(),a=w(()=>{const c=jo(r,t.value.prev);return c===!1?null:c||(e.value.prevLink===!1?null:_i(n.value,l.value.path,-1))}),s=w(()=>{const c=jo(r,t.value.next);return c===!1?null:c||(e.value.nextLink===!1?null:_i(n.value,l.value.path,1))});return Fe("keydown",c=>{c.altKey&&(c.key==="ArrowRight"?s.value&&(i(s.value.link),c.preventDefault()):c.key==="ArrowLeft"&&a.value&&(i(a.value.link),c.preventDefault()))}),()=>a.value||s.value?o("nav",{class:"vp-page-nav"},[a.value?o(Je,{class:"prev",config:a.value},()=>{var c,u;return[o("div",{class:"hint"},[o("span",{class:"arrow start"}),e.value.metaLocales.prev]),o("div",{class:"link"},[o(He,{icon:(c=a.value)==null?void 0:c.icon}),(u=a.value)==null?void 0:u.text])]}):null,s.value?o(Je,{class:"next",config:s.value},()=>{var c,u;return[o("div",{class:"hint"},[e.value.metaLocales.next,o("span",{class:"arrow end"})]),o("div",{class:"link"},[(c=s.value)==null?void 0:c.text,o(He,{icon:(u=s.value)==null?void 0:u.icon})])]}):null]):null}});const K8={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},Y8=({docsRepo:e,docsBranch:t,docsDir:n,filePathRelative:l,editLinkPattern:r})=>{if(!l)return null;const i=Sc(e);let a;return r?a=r:i!==null&&(a=K8[i]),a?a.replace(/:repo/,pn(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,Qs(`${Ui(n)}/${l}`)):null},Q8=()=>{const e=oe(),t=Ee(),n=ye();return w(()=>{const{repo:l,docsRepo:r=l,docsBranch:i="main",docsDir:a="",editLink:s,editLinkPattern:c=""}=e.value;if(!(n.value.editLink??s??!0)||!r)return null;const u=Y8({docsRepo:r,docsBranch:i,docsDir:a,editLinkPattern:c,filePathRelative:t.value.filePathRelative});return u?{text:e.value.metaLocales.editLink,link:u}:null})},X8=()=>{const e=bl(),t=oe(),n=Ee(),l=ye();return w(()=>{var r,i;return!(l.value.lastUpdated??t.value.lastUpdated??!0)||!((r=n.value.git)!=null&&r.updatedTime)?null:new Date((i=n.value.git)==null?void 0:i.updatedTime).toLocaleString(e.value.lang)})},Z8=()=>{const e=oe(),t=Ee(),n=ye();return w(()=>{var l;return n.value.contributors??e.value.contributors??!0?((l=t.value.git)==null?void 0:l.contributors)??null:null})};var e2=$({name:"PageTitle",setup(){const e=Ee(),t=ye(),n=oe(),{info:l,items:r}=r8();return()=>o("div",{class:"vp-page-title"},[o("h1",[n.value.titleIcon===!1?null:o(He,{icon:t.value.icon}),e.value.title]),o(ju,{info:l.value,...r.value===null?{}:{items:r.value}}),o("hr")])}});const Uu=()=>o(pe,{name:"edit"},()=>[o("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),o("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);Uu.displayName="EditIcon";var t2=$({name:"PageMeta",setup(){const e=oe(),t=Q8(),n=X8(),l=Z8();return()=>{const{metaLocales:r}=e.value;return o("footer",{class:"page-meta"},[t.value?o("div",{class:"meta-item edit-link"},o(Je,{class:"label",config:t.value},{before:()=>o(Uu)})):null,o("div",{class:"meta-item git-info"},[n.value?o("div",{class:"update-time"},[o("span",{class:"label"},`${r.lastUpdated}: `),o(fr,()=>o("span",{class:"info"},n.value))]):null,l.value&&l.value.length?o("div",{class:"contributors"},[o("span",{class:"label"},`${r.contributors}: `),l.value.map(({email:i,name:a},s)=>[o("span",{class:"contributor",title:`email: ${i}`},a),s!==l.value.length-1?",":""])]):null])])}}}),n2=$({name:"NormalPage",slots:Object,setup(e,{slots:t}){const n=ye(),{isDarkmode:l}=Dl(),r=oe(),i=w(()=>n.value.toc||n.value.toc!==!1&&r.value.toc!==!1);return()=>o("main",{id:"main-content",class:"vp-page"},o(et("LocalEncrypt")?st("LocalEncrypt"):Lc,()=>{var a,s,c,u;return[(a=t.top)==null?void 0:a.call(t),n.value.cover?o("div",{class:"page-cover"},o("img",{src:Be(n.value.cover),alt:"","no-view":""})):null,o(W8),o(e2),i.value?o(Hu,{headerDepth:n.value.headerDepth??r.value.headerDepth??2},{before:()=>{var d;return(d=t.tocBefore)==null?void 0:d.call(t)},after:()=>{var d;return(d=t.tocAfter)==null?void 0:d.call(t)}}):null,(s=t.contentBefore)==null?void 0:s.call(t),o(sa),(c=t.contentAfter)==null?void 0:c.call(t),o(t2),o(J8),et("CommentService")?o(st("CommentService"),{darkmode:l.value}):null,(u=t.bottom)==null?void 0:u.call(t)]}))}}),l2=$({name:"Layout",slots:Object,setup(e,{slots:t}){const n=Zt(),l=oe(),r=Ee(),i=ye(),{isMobile:a}=wl(),s=w(()=>{var c,u;return((c=l.value.blog)==null?void 0:c.sidebarDisplay)||((u=n.value.blog)==null?void 0:u.sidebarDisplay)||"mobile"});return()=>[o(ca),o(oa,{},{default:()=>{var c;return((c=t.default)==null?void 0:c.call(t))||(i.value.home?o(U8):o(H8,()=>o(n2,{key:r.value.path},{top:()=>{var u;return(u=t.top)==null?void 0:u.call(t)},bottom:()=>{var u;return(u=t.bottom)==null?void 0:u.call(t)},contentBefore:()=>{var u;return(u=t.contentBefore)==null?void 0:u.call(t)},contentAfter:()=>{var u;return(u=t.contentAfter)==null?void 0:u.call(t)},tocBefore:()=>{var u;return(u=t.tocBefore)==null?void 0:u.call(t)},tocAfter:()=>{var u;return(u=t.tocAfter)==null?void 0:u.call(t)}})))},...s.value!=="none"?{navScreenBottom:()=>o(st("BloggerInfo"))}:{},...!a.value&&s.value==="always"?{sidebar:()=>o(st("BloggerInfo"))}:{}})]}}),r2=$({name:"NotFoundHint",setup(){const e=oe(),t=()=>{const n=e.value.routeLocales.notFoundMsg;return n[Math.floor(Math.random()*n.length)]};return()=>o("div",{class:"not-found-hint"},[o("p",{class:"error-code"},"404"),o("h1",{class:"error-title"},e.value.routeLocales.notFoundTitle),o("p",{class:"error-hint"},t())])}}),i2=$({name:"NotFound",slots:Object,setup(e,{slots:t}){const n=Ft(),l=oe(),{navigate:r}=pi({to:l.value.home??n.value});return()=>[o(ca),o(oa,{noSidebar:!0},()=>{var i;return o("main",{id:"main-content",class:"vp-page not-found"},((i=t.default)==null?void 0:i.call(t))||[o(r2),o("div",{class:"actions"},[o("button",{type:"button",class:"action-button",onClick:()=>{window.history.go(-1)}},l.value.routeLocales.back),o("button",{type:"button",class:"action-button",onClick:()=>r()},l.value.routeLocales.home)])])})]}});const a2={GitHub:'<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>'},o2={category:{"/":{path:"/category/",map:{Channel:{path:"/category/channel/",keys:["v-42631b81"]},Conversation:{path:"/category/conversation/",keys:["v-218d24c2","v-d36e9eb6","v-3f1675d0","v-4e8dace0","v-072ac7bc","v-7fa1d5cc","v-51044ade","v-37a74a3e","v-54b95250","v-14d7492e","v-94444e6e","v-73f7931c","v-45d3c224","v-5b7b0868","v-10e72e36","v-743566bc","v-2045e392","v-305c80b8","v-9f61d83c","v-54f0115c","v-228608e7"]},LLM:{path:"/category/llm/",keys:["v-2a21b47c","v-6d60977e","v-4f165190","v-a54f7fc6","v-5e3adc79","v-5c2cf7c2","v-07b0d73f","v-530d2aeb","v-5820ecde","v-181b7599","v-0ac6637d","v-0ea70910","v-a137010a","v-7e750b23"]},Python:{path:"/category/python/",keys:["v-50f65248","v-5e83cd2f","v-5d4edd97","v-c0b42d56","v-03f9b3a9","v-6cb78bf8"]},Pytorch:{path:"/category/pytorch/",keys:["v-6243a8a0","v-fcfa8cfa","v-49b144a6","v-29ecd1c4","v-53146c6c","v-623af120"]}}}},tag:{"/":{path:"/tag/",map:{Blog:{path:"/tag/blog/",keys:["v-42631b81"]},"Knowledge Base":{path:"/tag/knowledge-base/",keys:["v-42631b81"]},"Commen Mistakes":{path:"/tag/commen-mistakes/",keys:["v-3f1675d0"]},Grammar:{path:"/tag/grammar/",keys:["v-218d24c2","v-d36e9eb6","v-4e8dace0"]},Pronunciation:{path:"/tag/pronunciation/",keys:["v-072ac7bc"]},"Sentence Pattern and Expression":{path:"/tag/sentence-pattern-and-expression/",keys:["v-7fa1d5cc"]},Careers:{path:"/tag/careers/",keys:["v-51044ade"]},Common:{path:"/tag/common/",keys:["v-37a74a3e"]},Communication:{path:"/tag/communication/",keys:["v-54b95250"]},Computers:{path:"/tag/computers/",keys:["v-14d7492e"]},"Describing something":{path:"/tag/describing-something/",keys:["v-94444e6e"]},"Dreams and Wishes":{path:"/tag/dreams-and-wishes/",keys:["v-73f7931c"]},Graduating:{path:"/tag/graduating/",keys:["v-45d3c224"]},Greetings:{path:"/tag/greetings/",keys:["v-5b7b0868"]},Hobbies:{path:"/tag/hobbies/",keys:["v-10e72e36"]},Immigration:{path:"/tag/immigration/",keys:["v-743566bc"]},Introduction:{path:"/tag/introduction/",keys:["v-2045e392"]},"Phone and email":{path:"/tag/phone-and-email/",keys:["v-305c80b8"]},Routine:{path:"/tag/routine/",keys:["v-9f61d83c"]},Time:{path:"/tag/time/",keys:["v-54f0115c"]},Traits:{path:"/tag/traits/",keys:["v-228608e7"]},LLM:{path:"/tag/llm/",keys:["v-2a21b47c","v-6d60977e","v-4f165190","v-a54f7fc6","v-5e3adc79","v-5c2cf7c2","v-07b0d73f","v-530d2aeb","v-5820ecde","v-181b7599","v-0ac6637d","v-0ea70910","v-a137010a","v-7e750b23"]},Python:{path:"/tag/python/",keys:["v-50f65248","v-5e83cd2f","v-5d4edd97","v-c0b42d56","v-03f9b3a9","v-6cb78bf8"]},Pytorch:{path:"/tag/pytorch/",keys:["v-6243a8a0","v-fcfa8cfa","v-49b144a6","v-29ecd1c4","v-53146c6c","v-623af120"]}}}}},s2={article:{"/":{path:"/article/",keys:["v-62eb8a96","v-d2057044","v-65bb1c98","v-26fd8e01","v-1f1acd79","v-30abaebb","v-218d24c2","v-d36e9eb6","v-555f1323","v-14bb3657","v-24570c18","v-528d934c","v-d36a0dfa","v-5094eae3","v-403a3f0a","v-0aa93d70","v-595e895a","v-7cfacf5e","v-73fe7652","v-5ebd06e4","v-24cc1dfd","v-00585f4c","v-0346fffe","v-3f681e4a","v-0293a47f","v-076351c7","v-7d97f2e1","v-46241083","v-48af1746","v-7d1017de","v-775875fc","v-fccae644","v-43972504","v-0f689b5e","v-157caa3e","v-4af0c92c","v-f2bf4518","v-0bbbc80c","v-7175977a","v-5a0477de","v-e204e076","v-be085578","v-cb2232bc","v-4fede924","v-c4f0754c","v-1af18ea2","v-3ff1b585","v-0cae3b8e","v-1bc2e808","v-e54ef570","v-1711ecd4","v-10a57fd4","v-7a676898","v-6492c18a","v-47de591e","v-75d3a2dc","v-26125280","v-12fb0380","v-5c8fd235","v-9ec393a6","v-7a0c1079","v-4f8851a7","v-256607b4","v-03df395c","v-bd02b22a","v-4839127c","v-b87c95c4","v-8fc60358","v-ace54172","v-4c2ade96","v-44f0f74b","v-80fcc67e","v-a0decba4","v-42631b81","v-2a21b47c","v-6d60977e","v-4f165190","v-a54f7fc6","v-6243a8a0","v-5e3adc79","v-5c2cf7c2","v-07b0d73f","v-530d2aeb","v-5820ecde","v-181b7599","v-0ac6637d","v-0ea70910","v-a137010a","v-7e750b23","v-fcfa8cfa","v-49b144a6","v-29ecd1c4","v-53146c6c","v-3f1675d0","v-4e8dace0","v-072ac7bc","v-7fa1d5cc","v-51044ade","v-37a74a3e","v-54b95250","v-14d7492e","v-94444e6e","v-73f7931c","v-45d3c224","v-5b7b0868","v-10e72e36","v-743566bc","v-2045e392","v-305c80b8","v-9f61d83c","v-54f0115c","v-228608e7","v-623af120","v-50f65248","v-5e83cd2f","v-5d4edd97","v-c0b42d56","v-03f9b3a9","v-6cb78bf8"]}},star:{"/":{path:"/star/",keys:[]}},timeline:{"/":{path:"/timeline/",keys:["v-62eb8a96","v-d2057044","v-65bb1c98","v-26fd8e01","v-1f1acd79","v-30abaebb","v-218d24c2","v-d36e9eb6","v-555f1323","v-14bb3657","v-24570c18","v-528d934c","v-d36a0dfa","v-5094eae3","v-403a3f0a","v-0aa93d70","v-595e895a","v-7cfacf5e","v-73fe7652","v-5ebd06e4","v-24cc1dfd","v-00585f4c","v-0346fffe","v-3f681e4a","v-0293a47f","v-076351c7","v-7d97f2e1","v-46241083","v-48af1746","v-7d1017de","v-775875fc","v-fccae644","v-43972504","v-0f689b5e","v-157caa3e","v-4af0c92c","v-f2bf4518","v-0bbbc80c","v-7175977a","v-5a0477de","v-e204e076","v-be085578","v-cb2232bc","v-4fede924","v-c4f0754c","v-1af18ea2","v-3ff1b585","v-0cae3b8e","v-1bc2e808","v-e54ef570","v-1711ecd4","v-10a57fd4","v-7a676898","v-6492c18a","v-47de591e","v-75d3a2dc","v-26125280","v-12fb0380","v-5c8fd235","v-9ec393a6","v-7a0c1079","v-4f8851a7","v-256607b4","v-03df395c","v-bd02b22a","v-4839127c","v-b87c95c4","v-8fc60358","v-ace54172","v-4c2ade96","v-44f0f74b","v-80fcc67e","v-a0decba4","v-42631b81","v-2a21b47c","v-6d60977e","v-4f165190","v-a54f7fc6","v-6243a8a0","v-5e3adc79","v-5c2cf7c2","v-07b0d73f","v-530d2aeb","v-5820ecde","v-181b7599","v-0ac6637d","v-0ea70910","v-a137010a","v-7e750b23","v-fcfa8cfa","v-49b144a6","v-29ecd1c4","v-53146c6c","v-3f1675d0","v-4e8dace0","v-072ac7bc","v-7fa1d5cc","v-51044ade","v-37a74a3e","v-54b95250","v-14d7492e","v-94444e6e","v-73f7931c","v-45d3c224","v-5b7b0868","v-10e72e36","v-743566bc","v-2045e392","v-305c80b8","v-9f61d83c","v-54f0115c","v-228608e7","v-623af120","v-50f65248","v-5e83cd2f","v-5d4edd97","v-c0b42d56","v-03f9b3a9","v-6cb78bf8"]}}},c2=Se(o2),Ho=Rt(c2),Wu=e=>{const t=Ee(),n=ye(),l=Ue(),r=Ft();return w(()=>{var u;const i=e??((u=n.value.blog)==null?void 0:u.key)??"";if(!i)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};const a=l.getRoutes();if(!Ho.value[i])throw new Error(`useBlogCategory: key ${i} is invalid`);const s=Ho.value[i][r.value],c={path:s.path,map:{}};for(const d in s.map){const p=s.map[d];c.map[d]={path:p.path,items:[]};for(const f of p.keys){const v=a.find(({name:g})=>g===f);if(v){const g=On(l,v.path);c.map[d].items.push({path:g.path,info:g.meta})}}t.value.path===p.path&&(c.currentItems=c.map[d].items)}return c})},u2=Se(s2),zo=Rt(u2),Ar=e=>{const t=ye(),n=Ue(),l=Ft();return w(()=>{var c;const r=e??((c=t.value.blog)==null?void 0:c.key)??"";if(!r)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!zo.value[r])throw new Error(`useBlogType: key ${e} is invalid`);const i=n.getRoutes(),a=zo.value[r][l.value],s={path:a.path,items:[]};for(const u of a.keys){const d=i.find(({name:p})=>p===u);if(d){const p=On(n,d.path);s.items.push({path:p.path,info:p.meta})}}return s})},Ju=()=>o(pe,{name:"lock"},()=>o("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));Ju.displayName="LockIcon";var d2=[];const Ku=Symbol.for("categoryMap"),Ll=()=>{const e=ve(Ku);if(!e)throw new Error("useCategoryMap() is called without provider.");return e},p2=()=>{const e=Wu("category");Et(Ku,e)},Tl=()=>{const e=Zt(),t=oe();return w(()=>({...e.value.blog,...t.value.blog}))},Yu=Symbol.for("tagMap"),Cl=()=>{const e=ve(Yu);if(!e)throw new Error("useTagMap() is called without provider.");return e},h2=()=>{const e=Wu("tag");Et(Yu,e)},f2=e=>{const t=oe();return w(()=>{const{[be.author]:n}=e.value;return n?cl(n):n===!1?[]:cl(t.value.author,!1)})},v2=e=>{const t=Ll();return w(()=>Ic(e.value[be.category]).map(n=>({name:n,path:t.value.map[n].path})))},m2=e=>{const t=Cl();return w(()=>xc(e.value[be.tag]).map(n=>({name:n,path:t.value.map[n].path})))},E2=e=>w(()=>{const{[be.date]:t}=e.value;return Qi(t)}),g2=e=>{const t=Fn(e,"info"),n=Tl(),l=f2(t),r=v2(t),i=m2(t),a=E2(t),s=pu(),c=w(()=>({author:l.value,category:r.value,date:a.value,localizedDate:t.value[be.localizedDate]||"",tag:i.value,isOriginal:t.value[be.isOriginal]||!1,readingTime:t.value[be.readingTime]||null,readingTimeLocale:t.value[be.readingTime]&&s.value?du(t.value[be.readingTime],s.value):null,pageview:e.path})),u=w(()=>n.value.articleInfo);return{info:c,items:u}},Qu=Symbol(""),kl=()=>{const e=ve(Qu);if(!e)throw new Error("useArticles() is called without provider.");return e},b2=()=>{const e=Ar("article");Et(Qu,e)},Xu=Symbol(""),ua=()=>{const e=ve(Xu);if(!e)throw new Error("useStars() is called without provider.");return e},_2=()=>{const e=Ar("star");Et(Xu,e)},Zu=Symbol(""),da=()=>{const e=ve(Zu);if(!e)throw new Error("useTimelines() is called without provider.");return e},A2=()=>{const e=Ar("timeline"),t=w(()=>{const n=[];return e.value.items.forEach(({info:l,path:r})=>{const i=Qi(l[be.date]),a=i==null?void 0:i.getFullYear(),s=i?i.getMonth()+1:null,c=i==null?void 0:i.getDate();a&&s&&c&&((!n[0]||n[0].year!==a)&&n.unshift({year:a,items:[]}),n[0].items.push({date:`${s}/${c}`,info:l,path:r}))}),{...e.value,config:n.reverse()}});Et(Zu,t)},y2=()=>{b2(),p2(),_2(),h2(),A2()};var B2=$({name:"SocialMedia",setup(){const e=Tl(),t=fn(),n=w(()=>{const l=e.value.medias;return l?hn(l).map(([r,i])=>({name:r,icon:a2[r],url:i})):[]});return()=>n.value.length?o("div",{class:"vp-social-medias"},n.value.map(({name:l,icon:r,url:i})=>o("a",{class:"vp-social-media",href:i,rel:"noopener noreferrer",target:"_blank","aria-label":l,...t.value?{}:{"data-balloon-pos":"up"},innerHTML:r}))):null}}),pa=$({name:"BloggerInfo",setup(){const e=Tl(),t=bl(),n=oe(),l=kl(),r=Ll(),i=Cl(),a=da(),s=Bl(),c=w(()=>{var f;return e.value.name||((f=cl(n.value.author)[0])==null?void 0:f.name)||t.value.title}),u=w(()=>e.value.avatar||n.value.logo),d=w(()=>n.value.blogLocales),p=w(()=>e.value.intro);return()=>{const{article:f,category:v,tag:g,timeline:B}=d.value,y=[[l.value.path,l.value.items.length,f],[r.value.path,dt(r.value.map).length,v],[i.value.path,dt(i.value.map).length,g],[a.value.path,a.value.items.length,B]];return o("div",{class:"vp-blogger-info",vocab:"https://schema.org/",typeof:"Person"},[o("div",{class:"vp-blogger",...p.value?{style:{cursor:"pointer"},"aria-label":d.value.intro,"data-balloon-pos":"down",role:"link",onClick:()=>s(p.value)}:{}},[u.value?o("img",{class:["vp-blogger-avatar",{round:e.value.roundAvatar}],src:Be(u.value),property:"image",alt:"Blogger Avatar",loading:"lazy"}):null,c.value?o("div",{class:"vp-blogger-name",property:"name"},c.value):null,e.value.description?o("div",{class:"vp-blogger-description",innerHTML:e.value.description}):null,p.value?o("meta",{property:"url",content:Be(p.value)}):null]),o("div",{class:"vp-blog-counts"},y.map(([A,T,_])=>o(Ie,{class:"vp-blog-count",to:A},()=>[o("div",{class:"count"},T),o("div",_)]))),o(B2)])}}});const ha=()=>o(pe,{name:"category"},()=>o("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));ha.displayName="CategoryIcon";const fa=()=>o(pe,{name:"tag"},()=>o("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));fa.displayName="TagIcon";const va=()=>o(pe,{name:"timeline"},()=>o("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));va.displayName="TimelineIcon";const ed=()=>o(pe,{name:"slides"},()=>o("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));ed.displayName="SlideIcon";const td=()=>o(pe,{name:"sticky"},()=>[o("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);td.displayName="StickyIcon";const yr=()=>o(pe,{name:"article"},()=>o("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));yr.displayName="ArticleIcon";const nd=()=>o(pe,{name:"book"},()=>o("path",{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"}));nd.displayName="BookIcon";const ld=()=>o(pe,{name:"link"},()=>o("path",{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"}));ld.displayName="LinkIcon";const rd=()=>o(pe,{name:"project"},()=>o("path",{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"}));rd.displayName="ProjectIcon";const id=()=>o(pe,{name:"friend"},()=>o("path",{d:"M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"}));id.displayName="FriendIcon";const Ai=()=>o(pe,{name:"slide-down"},()=>o("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));Ai.displayName="SlideDownIcon";const ad=()=>o("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"empty-icon",viewBox:"0 0 1024 1024",innerHTML:'<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'});ad.displayName="EmptyIcon";var w2=$({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},slots:Object,setup(e,{slots:t}){const n=Fn(e,"info"),{info:l,items:r}=g2(e);return()=>{var f,v,g;const{[be.title]:i,[be.type]:a,[be.isEncrypted]:s=!1,[be.cover]:c,[be.excerpt]:u,[be.sticky]:d}=n.value,p=l.value;return o("div",{class:"vp-article-wrapper"},o("article",{class:"vp-article-item",vocab:"https://schema.org/",typeof:"Article"},[((f=t.cover)==null?void 0:f.call(t,{cover:c}))||(c?[o("img",{class:"vp-article-cover",src:Be(c),loading:"lazy"}),o("meta",{property:"image",content:Be(c)})]:[]),d?o(td):null,o(Ie,{to:e.path},()=>{var B;return((B=t.title)==null?void 0:B.call(t,{title:i,isEncrypted:s,type:a}))||o("header",{class:"vp-article-title"},[s?o(Ju):null,a===bu.slide?o(ed):null,o("span",{property:"headline"},i)])}),((v=t.excerpt)==null?void 0:v.call(t,{excerpt:u}))||(u?o("div",{class:"vp-article-excerpt",innerHTML:u}):null),o("hr",{class:"vp-article-hr"}),((g=t.info)==null?void 0:g.call(t,{info:p}))||o(ju,{info:p,...r.value?{items:r.value}:{}})]))}}}),D2=$({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:["updateCurrentPage"],setup(e,{emit:t}){let n;const l=oe(),r=X(""),i=w(()=>l.value.paginationLocales),a=w(()=>Math.ceil(e.total/e.perPage)),s=w(()=>!!a.value&&a.value!==1),c=w(()=>a.value<7?!1:e.current>4),u=w(()=>a.value<7?!1:e.current<a.value-3),d=w(()=>{const{current:v}=e;let g=1,B=a.value;const y=[];a.value>=7&&(v<=4&&v<a.value-3?(g=1,B=5):v>4&&v>=a.value-3?(B=a.value,g=a.value-4):a.value>7&&(g=v-2,B=v+2));for(let A=g;A<=B;A++)y.push(A);return y}),p=v=>t("updateCurrentPage",v),f=v=>{const g=parseInt(v);g<=a.value&&g>0?p(g):n.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${i.value.errorText.replace(/\$page/g,a.value.toString())}`)};return _e(()=>{n=new qh}),()=>o("div",{class:"vp-pagination"},s.value?o("nav",{class:"vp-pagination-list"},[o("div",{class:"vp-pagination-number "},[e.current>1?o("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>p(e.current-1)},i.value.prev):null,c.value?[o("div",{role:"navigation",onClick:()=>p(1)},1),o("div",{class:"ellipsis"},"...")]:null,d.value.map(v=>o("div",{key:v,class:{active:e.current===v},role:"navigation",onClick:()=>p(v)},v)),u.value?[o("div",{class:"ellipsis"},"..."),o("div",{role:"navigation",onClick:()=>p(a.value)},a.value)]:null,e.current<a.value?o("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>p(e.current+1)},i.value.next):null]),o("div",{class:"vp-pagination-nav"},[o("label",{for:"navigation-text"},`${i.value.navigate}: `),o("input",{id:"navigation-text",value:r.value,onInput:({target:v})=>{r.value=v.value},onKeydown:v=>{v.key==="Enter"&&(v.preventDefault(),f(r.value))}}),o("button",{class:"vp-pagination-button",role:"navigation",title:i.value.action,onClick:()=>f(r.value)},i.value.action)])]):[])}}),ma=$({name:"ArticleList",props:{items:{type:Array,default:()=>[]}},setup(e){const t=Dt(),n=Ue(),l=Tl(),r=X(1),i=w(()=>l.value.articlePerPage||10),a=w(()=>e.items.slice((r.value-1)*i.value,r.value*i.value)),s=async c=>{r.value=c;const u={...t.query};!(u.page===c.toString()||c===1&&!u.page)&&(c===1?delete u.page:u.page=c.toString(),await n.push({path:t.path,query:u}))};return _e(()=>{const{page:c}=t.query;s(c?Number(c):1),fe(r,()=>{const u=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,u)},100)})}),()=>o("div",{id:"article-list",class:"vp-article-list",role:"feed"},a.value.length?[...a.value.map(({info:c,path:u},d)=>o(he,{appear:!0,delay:d*.04},()=>o(w2,{key:u,info:c,path:u}))),o(D2,{current:r.value,perPage:i.value,total:e.items.length,onUpdateCurrentPage:s})]:o(ad))}}),od=$({name:"CategoryList",setup(){const e=Ee(),t=Ll();return()=>o("ul",{class:"vp-category-list"},hn(t.value.map).sort(([,n],[,l])=>l.items.length-n.items.length).map(([n,{path:l,items:r}])=>o("li",{class:["vp-category",`vp-category${Er(n,9)}`,{active:l===e.value.path}]},o(Ie,{to:l},()=>[n,o("span",{class:"count"},r.length)]))))}}),sd=$({name:"TagList",setup(){const e=ye(),t=Cl(),n=l=>{var r;return l===((r=e.value.blog)==null?void 0:r.name)};return()=>o("ul",{class:"tag-list-wrapper"},hn(t.value.map).sort(([,l],[,r])=>r.items.length-l.items.length).map(([l,{path:r,items:i}])=>o("li",{class:["tag",`tag${Er(l,9)}`,{active:n(l)}]},o(Ie,{to:r},()=>[l,o("span",{class:"tag-num"},i.length)]))))}}),L2=$({name:"TimelineList",setup(){const e=oe(),t=da(),n=Bl(),l=w(()=>e.value.blogLocales.timeline);return()=>o("div",{class:"timeline-list-wrapper"},[o("div",{class:"timeline-list-title",onClick:()=>n(t.value.path)},[o(va),o("span",{class:"num"},t.value.items.length),l.value]),o("hr"),o("div",{class:"timeline-content"},o("ul",{class:"timeline-list"},t.value.config.map(({year:r,items:i},a)=>o(he,{appear:!0,delay:.08*(a+1)},()=>o("li",[o("h3",{class:"timeline-year"},r),o("ul",{class:"timeline-year-wrapper"},i.map(({date:s,info:c,path:u})=>o("li",{class:"timeline-item"},[o("span",{class:"timeline-date"},s),o(Ie,{class:"timeline-title",to:u},()=>c[be.title])])))])))))])}});const T2={article:yr,category:ha,tag:fa,timeline:va};var cd=$({name:"InfoList",setup(){const e=oe(),t=kl(),n=Ll(),l=w(()=>dt(n.value.map).length),r=ua(),i=Cl(),a=w(()=>dt(i.value.map).length),s=Bl(),c=X("article"),u=w(()=>e.value.blogLocales);return()=>o("div",{class:"vp-blog-infos"},[o("div",{class:"vp-blog-type-switcher"},hn(T2).map(([d,p])=>o("button",{type:"button",class:"vp-blog-type-button",onClick:()=>{c.value=d}},o("div",{class:["icon-wrapper",{active:c.value===d}],"aria-label":u.value[d],"data-balloon-pos":"up"},o(p))))),o(he,()=>c.value==="article"?o("div",{class:"vp-star-article-wrapper"},[o("div",{class:"title",onClick:()=>s(t.value.path)},[o(yr),o("span",{class:"num"},t.value.items.length),u.value.article]),o("hr"),r.value.items.length?o("ul",{class:"vp-star-articles"},r.value.items.map(({info:d,path:p},f)=>o(he,{appear:!0,delay:.08*(f+1)},()=>o("li",{class:"vp-star-article"},o(Ie,{to:p},()=>d[be.title]))))):o("div",{class:"vp-star-article-empty"},u.value.empty.replace("$text",u.value.star))]):c.value==="category"?o("div",{class:"vp-category-wrapper"},[l.value?[o("div",{class:"title",onClick:()=>s(n.value.path)},[o(ha),o("span",{class:"num"},l.value),u.value.category]),o("hr"),o(he,{delay:.04},()=>o(od))]:o("div",{class:"vp-category-empty"},u.value.empty.replace("$text",u.value.category))]):c.value==="tag"?o("div",{class:"vp-tag-wrapper"},[a.value?[o("div",{class:"title",onClick:()=>s(i.value.path)},[o(fa),o("span",{class:"num"},a.value),u.value.tag]),o("hr"),o(he,{delay:.04},()=>o(sd))]:o("div",{class:"vp-tag-empty"},u.value.empty.replace("$text",u.value.tag))]):o(he,()=>o(L2)))])}}),Br=$({name:"BlogWrapper",slots:Object,setup(e,{slots:t}){const{isMobile:n}=wl();return()=>[o(ca),o(oa,{noSidebar:!0,noToc:!0},{default:()=>t.default(),navScreenBottom:()=>o(pa),...n.value?{sidebar:()=>o(cd)}:{}})]}});const ud=()=>o("aside",{class:"vp-blog-info-wrapper"},[o(he,()=>o(pa)),o(he,{delay:.04},()=>o(cd))]);ud.displayName="InfoPanel";var wr=ud,C2=$({name:"BlogPage",setup(){const e=Ee(),t=ye(),n=Ll(),l=Cl();return()=>{const{key:r="",name:i=""}=t.value.blog||{},a=i?r==="category"?n.value.map[i].items:r==="tag"?l.value.map[i].items:[]:[];return o(Br,()=>o("div",{class:"vp-page vp-blog"},o("div",{class:"blog-page-wrapper"},[o("main",{id:"main-content",class:"vp-blog-main"},[o(he,()=>r==="category"?o(od):r==="tag"?o(sd):null),i?o(he,{appear:!0,delay:.24},()=>o(ma,{key:e.value.path,items:a})):null]),o(he,{delay:.16},()=>o(wr,{key:"blog"}))])))}}});const k2="//theme-hope-assets.vuejs.press/hero/default.jpg";var P2=$({name:"BlogHero",slots:Object,setup(e,{slots:t}){const n=ye(),l=bl(),r=Se(),i=w(()=>n.value.heroFullScreen??!1),a=w(()=>{const{heroText:c,heroImage:u,heroImageDark:d,heroAlt:p,heroImageStyle:f,tagline:v}=n.value;return{text:c??l.value.title??"Hello",image:u?Be(u):null,imageDark:d?Be(d):null,heroStyle:f,alt:p||c||"",tagline:v??"",isFullScreen:i.value}}),s=w(()=>{const{bgImage:c,bgImageDark:u,bgImageStyle:d}=n.value;return{image:ie(c)?Be(c):c===!1?null:k2,imageDark:ie(u)?Be(u):null,bgStyle:d,isFullScreen:i.value}});return()=>{var c,u;return n.value.hero===!1?null:o("div",{ref:r,class:["vp-blog-hero",{fullscreen:i.value,"no-bg":!s.value.image}]},[((c=t.heroBg)==null?void 0:c.call(t,s.value))||[s.value.image?o("div",{class:["vp-blog-mask",{light:s.value.imageDark}],style:[{background:`url(${s.value.image}) center/cover no-repeat`},s.value.bgStyle]}):null,s.value.imageDark?o("div",{class:"vp-blog-mask dark",style:[{background:`url(${s.value.imageDark}) center/cover no-repeat`},s.value.bgStyle]}):null],((u=t.heroInfo)==null?void 0:u.call(t,a.value))||[o(he,{appear:!0,type:"group",delay:.04},()=>[a.value.image?o("img",{key:"light",class:["vp-blog-hero-image",{light:a.value.imageDark}],style:a.value.heroStyle,src:a.value.image,alt:a.value.alt}):null,a.value.imageDark?o("img",{key:"dark",class:"vp-blog-hero-image dark",style:a.value.heroStyle,src:a.value.imageDark,alt:a.value.alt}):null]),o(he,{appear:!0,delay:.08},()=>a.value.text?o("h1",{class:"vp-blog-hero-title"},a.value.text):null),o(he,{appear:!0,delay:.12},()=>a.value.tagline?o("p",{class:"vp-blog-hero-description",innerHTML:a.value.tagline}):null)],a.value.isFullScreen?o("button",{type:"button",class:"slide-down-button",onClick:()=>{window.scrollTo({top:r.value.clientHeight,behavior:"smooth"})}},[o(Ai),o(Ai)]):null])}}});const I2=["link","article","book","project","friend"];var x2=$({name:"ProjectPanel",components:{ArticleIcon:yr,BookIcon:nd,FriendIcon:id,LinkIcon:ld,ProjectIcon:rd},props:{items:{type:Array,required:!0}},setup(e){const t=fn(),n=Bl(),l=(r="",i="icon")=>I2.includes(r)?o(st(`${r}-icon`)):pn(r)?o("img",{class:"vp-project-image",src:r,alt:i}):gr(r)?o("img",{class:"vp-project-image",src:Be(r),alt:i}):o(He,{icon:r});return()=>o("div",{class:"vp-project-panel"},e.items.map(({icon:r,link:i,name:a,desc:s},c)=>o("div",{class:["vp-project-card",{[`project${c%9}`]:!t.value}],onClick:()=>n(i)},[l(r,a),o("div",{class:"vp-project-name"},a),o("div",{class:"vp-project-desc"},s)])))}}),O2=$({name:"BlogHome",setup(){const e=kl(),t=ye(),n=w(()=>t.value.projects??[]);return()=>o("div",{class:"vp-page vp-blog"},[o(P2),o("div",{class:"blog-page-wrapper"},[o("main",{id:"main-content",class:"vp-blog-main"},[n.value.length?o(he,{appear:!0,delay:.16},()=>o(x2,{items:n.value})):null,o(he,{appear:!0,delay:.24},()=>o(ma,{items:e.value.items}))]),o(he,{appear:!0,delay:.16},()=>o(wr,{key:"blog"}))]),o(he,{appear:!0,delay:.28},()=>o(sa))])}});const dd=()=>o(Br,()=>o(O2));dd.displayName="BlogHomeLayout";var R2=dd,S2=$({name:"ArticleType",setup(){const e=Ee(),t=Ft(),n=oe(),l=kl(),r=ua(),i=w(()=>{const a=n.value.blogLocales;return[{text:a.all,path:l.value.path},{text:a.star,path:r.value.path},...d2.map(({key:s,path:c})=>({text:a[s],path:c.replace(/^\//,t.value)}))]});return()=>o("ul",{class:"vp-article-type-wrapper"},i.value.map(a=>o("li",{class:["vp-article-type",{active:a.path===e.value.path}]},o(Ie,{to:a.path},()=>a.text))))}}),F2=$({name:"BlogPage",setup(){const e=Ar(),t=ye(),n=Ee(),l=kl(),r=ua(),i=w(()=>{const{key:a="",type:s}=t.value.blog||{};return a==="star"?r.value.items:s==="type"&&a?e.value.items:l.value.items});return()=>o(Br,()=>o("div",{class:"vp-page vp-blog"},o("div",{class:"blog-page-wrapper"},[o("main",{id:"main-content",class:"vp-blog-main"},[o(he,()=>o(S2)),o(he,{appear:!0,delay:.24},()=>o(ma,{key:n.value.path,items:i.value}))]),o(he,{delay:.16},()=>o(wr,{key:"blog"}))])))}}),V2=$({name:"TimelineItems",setup(){const e=Tl(),t=oe(),n=da(),l=w(()=>e.value.timeline||t.value.blogLocales.timelineTitle),r=w(()=>n.value.config.map(({year:i})=>({title:i.toString(),level:2,slug:i.toString(),children:[]})));return()=>o("div",{class:"timeline-wrapper"},o("ul",{class:"timeline-content"},[o(he,()=>o("li",{class:"motto"},l.value)),o(Hu,{items:r.value}),n.value.config.map(({year:i,items:a},s)=>o(he,{appear:!0,delay:.08*(s+1),type:"group"},()=>[o("h3",{key:"title",id:i,class:"timeline-year-title"},o("span",i)),o("li",{key:"content",class:"timeline-year-list"},[o("ul",{class:"timeline-year-wrapper"},a.map(({date:c,info:u,path:d})=>o("li",{class:"timeline-item"},[o("span",{class:"timeline-date"},c),o(Ie,{class:"timeline-title",to:d},()=>u[be.title])])))])]))]))}});const pd=()=>o(Br,()=>o("div",{class:"vp-page vp-blog"},o("div",{class:"blog-page-wrapper"},[o("main",{id:"main-content",class:"vp-blog-main"},[o(he,{appear:!0,delay:.24},()=>o(V2))]),o(he,{delay:.16},()=>o(wr,{key:"blog"}))])));pd.displayName="Timeline";var M2=pd;Hf(e=>{const t=e.t,n=e.I!==!1,l=e.i;return n?{title:t,content:l?()=>[o(He,{icon:l}),t]:null,order:e.O,index:e.I}:null});const $2=wt({enhance:({app:e,router:t})=>{const{scrollBehavior:n}=t.options;t.options.scrollBehavior=async(...l)=>(await zu().wait(),n(...l)),o8(e),e.component("HopeIcon",He),e.component("VPLink",Ie),e.component("BloggerInfo",pa)},setup:()=>{s8(),d8(),y2()},layouts:{Layout:l2,NotFound:i2,BlogCategory:C2,BlogHome:R2,BlogType:F2,Timeline:M2}}),Gl=[h0,Rf,jf,Wf,Qf,tv,av,fv,$v,Yv,$2],N2=[["v-8daa1a0e","/",{y:"h",t:"Blog",i:"home"},["/README.md"]],["v-184f4da6","/intro.html",{y:"p",t:"About Me",i:"user"},[":md"]],["v-42631b81","/channel/blog_and_pinkpig.html",{d:173016e7,l:"October 29, 2024",c:["Channel"],g:["Blog","Knowledge Base"],e:`<h1> 博客和知识库</h1>
`,r:{minutes:1.89,words:567},y:"a",t:"博客和知识库",i:"lightbulb"},[":md"]],["v-555f1323","/channel/tools.html",{d:1730220137e3,e:`<h1> tools</h1>
<h2> clip</h2>
<ul>
<li>pr
<ul>
<li>good</li>
</ul>
</li>
<li>必剪
<ul>
<li>素材</li>
</ul>
</li>
</ul>
<h2> subtitle</h2>
<ul>
<li>https://downsub.com/
<ul>
<li>download subtitle file</li>
<li>download video with subtitle</li>
<li>download biolingual subtitle</li>
</ul>
</li>
</ul>
<h2> translate</h2>`,r:{minutes:.08,words:23},y:"a",t:"tools"},[":md"]],["v-14bb3657","/channel/youtube_channel.html",{d:1730220137e3,e:`<h1> Open Youtube Channel</h1>
<h2> Reference Video</h2>
<p>https://www.youtube.com/watch?v=zEcNHMosmrU&amp;t=168s</p>
<h2> have old channel, how to create a new channel?</h2>
<ul>
<li>right up corner</li>
<li>settings</li>
<li>add or manage your channel (you can see all channel and add channel)</li>
<li>create a channel</li>
</ul>`,r:{minutes:.65,words:196},y:"a",t:"Open Youtube Channel"},[":md"]],["v-24570c18","/frontend/AntDesign.html",{d:1730220137e3,e:`<h1> AntDesign</h1>
<p><a href="https://preview.pro.ant.design/dashboard/analysis" target="_blank" rel="noopener noreferrer">Ant Design Pro Preview</a> <br>
<a href="https://pro.ant.design/" target="_blank" rel="noopener noreferrer">Ant Design Pro</a> <br>
<a href="https://procomponents.ant.design/" target="_blank" rel="noopener noreferrer">ProComponents</a> <br>
<a href="https://www.eggjs.org/" target="_blank" rel="noopener noreferrer">EggJS-企业级Node.js开发框架</a> <br>
<a href="https://github.com/websemantics/awesome-ant-design" target="_blank" rel="noopener noreferrer">https://github.com/websemantics/awesome-ant-design</a> <br></p>`,r:{minutes:.14,words:41},y:"a",t:"AntDesign",i:"lightbulb"},[":md"]],["v-528d934c","/frontend/CSS.html",{d:1730220137e3,e:`<h1> CSS</h1>
<h1> Resolution</h1>
<p>内容超出了页面，看不到底部的内容了，如何加上滚轴？ <br>
overflow-y: auto !important; <br></p>
<h1> Knowledge</h1>
<p>1、引入样式表（3种方式） <br></p>
<ul>
<li>内联样式- 在HTML元素中使用"style"<strong>属性</strong> <br></li>
<li>内部样式表 -在HTML文档头部 &lt;head&gt; 区域使用&lt;style&gt;<strong>元素</strong> 来包含CSS <br></li>
<li>外部样式表 - 使用外部 CSS<strong>文件</strong>，在HTML文档头部 &lt;head&gt; 区域使用&lt;link&gt;引入 <br></li>
</ul>`,r:{minutes:1.31,words:394},y:"a",t:"CSS",i:"lightbulb"},[":md"]],["v-d36a0dfa","/frontend/Expo.html",{d:1730220137e3,e:`<h1> Expo</h1>
<p>expo <br>
<a href="https://expo.dev/tools" target="_blank" rel="noopener noreferrer">https://expo.dev/tools</a> <br>
expo snack
<a href="https://snack.expo.dev/" target="_blank" rel="noopener noreferrer">https://snack.expo.dev/</a> <br>
 <br></p>
<p><a href="https://www.newline.co/30-days-of-react-native" target="_blank" rel="noopener noreferrer">https://www.newline.co/30-days-of-react-native</a> <br>
这里展示了用expo的教学 <br></p>`,r:{minutes:.15,words:45},y:"a",t:"Expo",i:"lightbulb"},[":md"]],["v-5094eae3","/frontend/Frontend.html",{d:1730220137e3,e:`<h1> Frontend</h1>
<p><a href="https://www.yuque.com/fe9/basic" target="_blank" rel="noopener noreferrer">前端九部——入门者手册</a> <br>
<a href="https://www.yuque.com/fe9/select" target="_blank" rel="noopener noreferrer">前端九部——精选集</a> <br>
<a href="https://github.com/frontend9" target="_blank" rel="noopener noreferrer">前端九部github</a> <br>
<a href="https://github.com/zenany/zenany.github.io/blob/master/_posts/about_frontend.md" target="_blank" rel="noopener noreferrer">前端开发漫游指南</a> <br>
<a href="https://www.yuque.com/mind-palace" target="_blank" rel="noopener noreferrer">大猫智库</a> <br>
<a href="https://segmentfault.com/a/1190000007326671" target="_blank" rel="noopener noreferrer">前端跨域整理</a> <br>
<a href="https://segmentfault.com/a/1190000006672214" target="_blank" rel="noopener noreferrer">WEB前端安全那些事儿</a> <br>
<a href="https://github.com/xiaosansiji/cookbook-of-webdev/blob/master/performance-optimization/index.md" target="_blank" rel="noopener noreferrer">Web站点性能优化</a> <br>
<a href="http://www.ruanyifeng.com/blog/2016/08/http.html" target="_blank" rel="noopener noreferrer">阮一峰HTTP协议入门</a> <br>
<a href="https://blog.csdn.net/nanjingshida/article/details/72775687" target="_blank" rel="noopener noreferrer">chrome调试技巧</a> <br>
脚手架：<a href="https://github.com/sorrycc/roadhog" target="_blank" rel="noopener noreferrer">https://github.com/sorrycc/roadhog</a> <br>
roadmap	<a href="https://github.com/kamranahmedse/developer-roadmap" target="_blank" rel="noopener noreferrer">https://github.com/kamranahmedse/developer-roadmap</a> <br>
HTML+CSS+JavaScript ES6+Typescript+Less+React+Nodejs+Npm+Webpack <br>
路线图创建	<a href="https://balsamiq.com/wireframes/desktop/" target="_blank" rel="noopener noreferrer">https://balsamiq.com/wireframes/desktop/</a> <br></p>`,r:{minutes:6.51,words:1952},y:"a",t:"Frontend",i:"lightbulb"},[":md"]],["v-403a3f0a","/frontend/HTML.html",{d:1730220137e3,e:`<h1> HTML</h1>
<p>超文本标记语言（英语：HyperText Markup Language，简称：HTML） <br>
<a href="https://www.runoob.com/tags/ref-byfunc.html" target="_blank" rel="noopener noreferrer">HTML参考手册-菜鸟教程</a> <br>
<a href="https://www.runoob.com/html/html-tutorial.html" target="_blank" rel="noopener noreferrer">HTML菜鸟教程</a> <br>
使用技巧 <br>
1、查看网页源代码：鼠标右键，选择“查看网页源代码” <br>
<em>2、VS Code 和 Sublime Text 还可以配合 Emmet 插件来提高编码速度。</em> <br>
<em>Emmet 官网：</em><a href="http://emmet.io/" target="_blank" rel="noopener noreferrer">http://emmet.io/</a> <br></p>`,r:{minutes:3.75,words:1126},y:"a",t:"HTML",i:"lightbulb"},[":md"]],["v-0aa93d70","/frontend/JavaScript.html",{d:1730220137e3,e:`<h1> JavaScript</h1>
<p>github <br>
<a href="https://github.com/Asabeneh/30-Days-Of-JavaScript" target="_blank" rel="noopener noreferrer">https://github.com/Asabeneh/30-Days-Of-JavaScript</a> <br>
<a href="https://github.com/biaochenxuying/blog" target="_blank" rel="noopener noreferrer">https://github.com/biaochenxuying/blog</a> <br>
<a href="https://github.com/course-dasheng/fe-algorithm" target="_blank" rel="noopener noreferrer">https://github.com/course-dasheng/fe-algorithm</a> <br></p>`,r:{minutes:2.99,words:898},y:"a",t:"JavaScript",i:"lightbulb"},[":md"]],["v-595e895a","/frontend/Practice.html",{d:1730220137e3,e:`<h1> 简书实践</h1>
<h1> 课程导学</h1>
<p><a href="https://coding.imooc.com/class/229.html#Anchor" target="_blank" rel="noopener noreferrer">https://coding.imooc.com/class/229.html#Anchor</a> <br></p>
<h2> 课程内容</h2>
<p> <br></p>
<h2> 项目</h2>
<p> <br></p>
<h2> 技术点</h2>
<p> <br></p>
<h2> 学习前提</h2>
<p> <br></p>`,r:{minutes:30.49,words:9146},y:"a",t:"简书实践",i:"lightbulb"},[":md"]],["v-7cfacf5e","/frontend/React.html",{d:1730220137e3,e:`<h1> React</h1>
<p>学习资源 <br>
官方文档	<a href="https://zh-hans.reactjs.org/" target="_blank" rel="noopener noreferrer">https://zh-hans.reactjs.org/</a> <br>
菜鸟教程	<a href="https://www.runoob.com/react/react-tutorial.html" target="_blank" rel="noopener noreferrer">https://www.runoob.com/react/react-tutorial.html</a> <br>
项目实战：<a href="https://coding.imooc.com/class/229.html#Anchor" target="_blank" rel="noopener noreferrer">https://coding.imooc.com/class/229.html#Anchor</a> <br></p>`,r:{minutes:1.45,words:435},y:"a",t:"React",i:"lightbulb"},[":md"]],["v-73fe7652","/frontend/npm.html",{d:1730220137e3,e:`<h1> NPM</h1>
<h1> <a href="https://cloud.tencent.com/developer/article/1372949" target="_blank" rel="noopener noreferrer">npm使用国内镜像加速</a></h1>
<p> <br>
npm install有依赖问题，可以尝试 <br></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install --legacy-peer-deps &lt;br/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:4.69,words:1407},y:"a",t:"NPM",i:"lightbulb"},[":md"]],["v-5ebd06e4","/cs/CSAPP.html",{d:1730220137e3,e:`<h1> CSAPP</h1>
<p>英文版：CSAPP（Computer Systems: A Programmer's Perspective） <br>
中文版：深入理解计算机系统 <br>
讲义：<a href="https://fengmuzi2003.gitbook.io/csapp3e/" target="_blank" rel="noopener noreferrer">CSAPP重点解读</a> <br>
官网：<a href="http://csapp.cs.cmu.edu/" target="_blank" rel="noopener noreferrer">CS:APP3e</a> <br>
自学关心的地方：Student Site（有一些推荐的不错的书和工具，也有实验链接） <br>
 <br></p>`,r:{minutes:.42,words:127},y:"a",t:"CSAPP",i:"lightbulb"},[":md"]],["v-24cc1dfd","/cs/Netty.html",{d:1730220137e3,e:`<h1> Netty</h1>
<h2> 同步/异步，阻塞非阻塞</h2>
<p>在等待数据阶段：发起网络调用后，在服务端没准备好数据的情况下。客户端阻塞，则为阻塞IO；网络调用立即返回，则为非阻塞IO <br></p>
<p>在数据传输阶段: 如果发起网络调用的线程还可以做其它事情则为异步，否则为同步 <br></p>
<h2> BIO</h2>
<p>下图为MySQL Connector-Java 的架构，为典型的BIO: <br></p>
<p> <br></p>
<p>如果把这个架构改成NIO的: <br>
 <br></p>
<p>为什么MySQL 不使用NIO的模式: <br></p>`,r:{minutes:12.36,words:3709},y:"a",t:"Netty",i:"lightbulb"},[":md"]],["v-00585f4c","/cs/RPC.html",{d:1730220137e3,e:`<h1> RPC</h1>
<p>有了解过dubbo吗，简单介绍下dubbo结构。 <br>
如何做服务隔离。简单介绍下hystrix。 <br>
如何设计个rpc框架。 <br></p>
<h1> Dubbo</h1>
<h2> 服务注册/发现</h2>
<p>Dubbo的服务注册与发现机制: <br>
 <br></p>
<p>4类角色: 消费者、提供者、注册中心、Monitor <br></p>
<h2> Registry原理</h2>
<p>以Dubbo最常用的Zookeeper来介绍 <br></p>
<p>zk里的存储: <br>
 <br>
每一个服务的存储的目录结构为/dubbo/{serviceName} ，   其中serviceName为Provider的{包名}.{类名} <br>
下面有4个子文件夹，分别存储: <br></p>`,r:{minutes:8.57,words:2571},y:"a",t:"RPC",i:"lightbulb"},[":md"]],["v-0346fffe","/cs/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F.html",{d:1730220137e3,e:`<h1> 操作系统</h1>
<ul>
<li><a href="#%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F">操作系统</a></li>
<li><a href="#%E5%BF%AB%E9%80%9F%E6%8E%8C%E6%8F%A1%E9%9D%A2%E8%AF%95">快速掌握面试</a>
<ul>
<li><a href="#1-%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E5%92%8C%E7%A1%AC%E4%BB%B6%E4%B9%8B%E9%97%B4%E7%9A%84%E5%AA%92%E4%BB%8B-">1. 操作系统：应用程序和硬件之间的媒介 </a></li>
<li><a href="#2-%E5%B9%B6%E5%8F%91%E5%B9%B6%E8%A1%8C%E8%BF%9B%E7%A8%8B%E7%BA%BF%E7%A8%8B%E5%8D%8F%E7%A8%8B-">2. 并发&amp;并行，进程&amp;线程&amp;协程 </a></li>
<li><a href="#3-%E8%BF%9B%E7%A8%8B%E4%B8%8A%E4%B8%8B%E6%96%87%E5%88%87%E6%8D%A2%E7%BA%BF%E7%A8%8B%E4%B8%8A%E4%B8%8B%E6%96%87%E5%88%87%E6%8D%A2-">3. 进程上下文切换&amp;线程上下文切换 </a></li>
<li><a href="#4-%E7%94%A8%E6%88%B7%E6%80%81%E5%86%85%E6%A0%B8%E6%80%81%E7%B3%BB%E7%BB%9F%E8%B0%83%E7%94%A8%E7%94%A8%E6%88%B7%E6%80%81%E9%80%9A%E8%BF%87%E7%B3%BB%E7%BB%9F%E8%B0%83%E7%94%A8%E5%88%87%E6%8D%A2%E5%88%B0%E5%86%85%E6%A0%B8%E6%80%81-">4. 用户态&amp;内核态，系统调用：用户态通过系统调用切换到内核态 </a></li>
<li><a href="#5-%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E7%9A%84%E8%BF%9B%E7%A8%8B%E7%BA%BF%E7%A8%8B%E6%9C%89%E5%93%AA%E4%BA%9B%E7%8A%B6%E6%80%81notejava%E6%98%AF6%E7%A7%8D%E7%8A%B6%E6%80%81%E5%88%9B%E5%BB%BA%E5%B0%B1%E7%BB%AA%E8%BF%90%E8%A1%8C%E9%98%BB%E5%A1%9E%E7%BB%93%E6%9D%9F-">5. 操作系统的进程/线程有哪些状态（Note:Java是6种状态）：创建，就绪，运行，阻塞，结束 </a></li>
<li><a href="#6-%E8%BF%9B%E7%A8%8B%E9%97%B4%E9%80%9A%E4%BF%A17%E7%A7%8D-">6. 进程间通信（7种） </a></li>
<li><a href="#7-%E8%BF%9B%E7%A8%8B%E7%9A%84%E8%B0%83%E5%BA%A6%E7%AE%97%E6%B3%95-">7. 进程的调度算法 </a></li>
<li><a href="#8-%E7%BA%BF%E7%A8%8B%E9%97%B4%E5%90%8C%E6%AD%A5-">8. 线程间同步 </a></li>
<li><a href="#9-%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E7%9A%84%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86-">9. 操作系统的内存管理 </a></li>
<li><a href="#10-%E5%B8%B8%E8%A7%81%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86%E6%9C%BA%E5%88%B6-">10. 常见内存管理机制 </a></li>
<li><a href="#11-%E9%A1%B5%E5%BC%8F%E7%AE%A1%E7%90%86%E9%87%8D%E8%A6%81%E6%A6%82%E5%BF%B5%E5%BF%AB%E8%A1%A8%E5%A4%9A%E7%BA%A7%E9%A1%B5%E8%A1%A8-">11. 页式管理重要概念：快表&amp;多级页表 </a></li>
<li><a href="#12-%E8%99%9A%E6%8B%9F%E5%86%85%E5%AD%98%E8%99%9A%E6%8B%9F%E5%9C%B0%E5%9D%80%E7%89%A9%E7%90%86%E5%86%85%E5%AD%98%E7%89%A9%E7%90%86%E5%9C%B0%E5%9D%80-">12. 虚拟内存（虚拟地址）&amp;物理内存（物理地址） </a></li>
<li><a href="#13-%E4%BA%A4%E6%8D%A2%E7%A9%BA%E9%97%B4%E7%A3%81%E7%9B%98%E4%B8%8A%E7%94%A8%E4%BA%8E%E6%89%A9%E5%B1%95%E5%86%85%E5%AD%98%E7%9A%84%E4%B8%80%E5%9D%97%E7%A9%BA%E9%97%B4%E5%B0%B1%E5%8F%AB%E4%BA%A4%E6%8D%A2%E7%A9%BA%E9%97%B4-">13. 交换空间：磁盘上用于扩展内存的一块空间，就叫交换空间。 </a></li>
<li><a href="#14-%E9%A1%B5%E9%9D%A2%E7%BD%AE%E6%8D%A2%E7%AE%97%E6%B3%95-">14. 页面置换算法 </a></li>
</ul>
</li>
<li><a href="#%E5%8C%BA%E5%88%86io%E5%AF%86%E9%9B%86%E5%86%85%E5%AD%98%E5%AF%86%E9%9B%86%E5%92%8C%E8%AE%A1%E7%AE%97%E5%AF%86%E9%9B%86">区分IO密集、内存密集和计算密集</a></li>
<li><a href="#java-%E4%B8%AD-io-%E6%B5%81%E5%88%86%E4%B8%BA%E5%87%A0%E7%A7%8D">Java 中 IO 流分为几种?</a>
<ul>
<li><a href="#%E6%97%A2%E7%84%B6%E6%9C%89%E4%BA%86%E5%AD%97%E8%8A%82%E6%B5%81%E4%B8%BA%E4%BB%80%E4%B9%88%E8%BF%98%E8%A6%81%E6%9C%89%E5%AD%97%E7%AC%A6%E6%B5%81">既然有了字节流,为什么还要有字符流?</a></li>
</ul>
</li>
<li><a href="#bionioaio">BIO、NIO、AIO</a>
<ul>
<li><a href="#io%E6%B1%87%E6%80%BB%E8%A1%A8%E6%A6%82%E8%A7%88">IO汇总表概览</a></li>
<li><a href="#%E4%BA%94%E5%A4%A7io%E6%A8%A1%E5%9E%8B%E7%8B%AD%E4%B9%89nio">五大IO模型（狭义NIO）</a></li>
<li><a href="#bio-%E9%98%BB%E5%A1%9Eio-blocking-io">BIO (阻塞I/O, blocking I/O)</a></li>
<li><a href="#nioio%E5%A4%9A%E8%B7%AF%E5%A4%8D%E7%94%A8-%E9%9D%9E%E9%98%BB%E5%A1%9Eio-noblocking-io">NIO/IO多路复用 (非阻塞I/O, noblocking I/O)</a>
<ul>
<li><a href="#bio%E4%B8%8Enio%E7%9A%84%E5%8C%BA%E5%88%AB">BIO与NIO的区别</a></li>
<li><a href="#nio%E4%B8%89%E5%A4%A7%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6selector%E9%80%89%E6%8B%A9%E5%99%A8channel%E9%80%9A%E9%81%93buffer%E7%BC%93%E5%86%B2%E5%99%A8">NIO三大核心组件：Selector（选择器）、Channel（通道）、Buffer（缓冲器）</a></li>
<li><a href="#io%E5%A4%9A%E8%B7%AF%E5%A4%8D%E7%94%A8%E7%9A%84%E4%B8%89%E7%A7%8D%E5%AE%9E%E7%8E%B0%E6%9C%BA%E5%88%B6">I/O多路复用的三种实现机制</a>
<ul>
<li><a href="#select%E4%B8%8Epoll">select与poll</a></li>
<li><a href="#epoll">epoll</a></li>
<li><a href="#%E6%AF%94%E8%BE%83">比较</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#aio-%E5%BC%82%E6%AD%A5ioasynchronous-io">AIO (异步I/O,Asynchronous I/O)</a></li>
</ul>
</li>
</ul>`,r:{minutes:16.52,words:4955},y:"a",t:"操作系统",i:"lightbulb"},["/cs/操作系统.html","/cs/操作系统.md",":md"]],["v-3f681e4a","/cs/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8A%80%E8%83%BD.html",{d:1730220137e3,e:`<h1> 浏览器技能</h1>
<h1> 快捷键</h1>
<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>切换下一个</td>
<td>Ctrl+Tab</td>
</tr>
<tr>
<td>关闭当前网页</td>
<td>Ctrl+W</td>
</tr>
<tr>
<td>恢复被关掉的网页</td>
<td>Ctrl+Shift+T</td>
</tr>
<tr>
<td>打开历史记录</td>
<td>Ctrl+H</td>
</tr>
</tbody>
</table>
<h1> 选择</h1>`,r:{minutes:3.3,words:990},y:"a",t:"浏览器技能",i:"lightbulb"},["/cs/浏览器技能.html","/cs/浏览器技能.md",":md"]],["v-0293a47f","/cs/%E7%BD%91%E7%BB%9C.html",{d:1730220137e3,e:`<h1> 网络</h1>
<ul>
<li><a href="#%E7%BD%91%E7%BB%9C">网络</a></li>
<li><a href="#%E5%BF%AB%E9%80%9F%E6%8E%8C%E6%8F%A1%E9%9D%A2%E8%AF%95">快速掌握面试</a>
<ul>
<li><a href="#1-%E7%BD%91%E7%BB%9C%E5%88%86%E5%B1%82osi%E5%8F%82%E8%80%83%E6%A8%A1%E5%9E%8Btcpip%E5%8F%82%E8%80%83%E6%A8%A1%E5%9E%8B%E4%BA%94%E5%B1%82%E5%8F%82%E8%80%83%E6%A8%A1%E5%9E%8B-">1. 网络分层：OSI参考模型、TCP/IP参考模型、五层参考模型 </a></li>
<li><a href="#2-tcp%E4%B8%8Eudp%E5%8C%BA%E5%88%AB-">2. TCP与UDP区别 </a></li>
<li><a href="#3-tcp%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E5%92%8C%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B-">3. TCP三次握手和四次挥手 </a></li>
<li><a href="#4-%E6%B5%8F%E8%A7%88%E5%99%A8%E8%BE%93%E5%85%A5url%E5%88%B0%E9%A1%B5%E9%9D%A2%E6%98%BE%E7%A4%BA%E7%9A%84%E8%BF%87%E7%A8%8B%E6%89%93%E5%BC%80%E7%BD%91%E9%A1%B5%E7%9A%84%E6%95%B4%E4%B8%AA%E8%BF%87%E7%A8%8B%E4%BC%9A%E4%BD%BF%E7%94%A8%E5%93%AA%E4%BA%9B%E5%8D%8F%E8%AE%AE-">4. 浏览器输入url到页面显示的过程（打开网页的整个过程会使用哪些协议） </a></li>
<li><a href="#5-%E7%8A%B6%E6%80%81%E7%A0%81-">5. 状态码 </a></li>
<li><a href="#6-http%E9%95%BF%E8%BF%9E%E6%8E%A5%E7%9F%AD%E8%BF%9E%E6%8E%A5-">6. HTTP长连接&amp;短连接 </a></li>
<li><a href="#7-http10-11-20-30%E7%9A%84%E5%8C%BA%E5%88%AB-">7. HTTP/1.0, 1.1, 2.0, 3.0的区别 </a></li>
<li><a href="#8-httphttps-">8. HTTP&amp;HTTPS </a></li>
<li><a href="#9-http%E4%B8%8Erpc%E7%9A%84%E5%8C%BA%E5%88%AB-">9. HTTP与RPC的区别 </a></li>
<li><a href="#10-cookiesession-">10. Cookie&amp;Session </a></li>
<li><a href="#11--uri%E5%92%8Curl%E7%9A%84%E5%8C%BA%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88--">11.  URI和URL的区别是什么?  </a></li>
<li><a href="#12--getpost-">12.  GET&amp;POST </a></li>
<li><a href="#13--ipmac-">13.  IP&amp;MAC </a></li>
</ul>
</li>
<li><a href="#%E4%B8%80%E7%BD%91%E7%BB%9C%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84">一、网络体系结构</a>
<ul>
<li><a href="#%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5">基本概念</a></li>
<li><a href="#%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84%E5%88%86%E5%B1%82%E7%BB%93%E6%9E%84">计算机网络体系结构——分层结构</a></li>
<li><a href="#%E6%80%A7%E8%83%BD%E6%8C%87%E6%A0%87">性能指标</a>
<ul>
<li><a href="#%E9%80%9F%E7%8E%87%E5%B8%A6%E5%AE%BD%E5%90%9E%E5%90%90%E9%87%8F">速率、带宽、吞吐量</a></li>
<li><a href="#%E6%97%B6%E5%BB%B6%E6%97%B6%E5%BB%B6%E5%B8%A6%E5%AE%BD%E7%A7%AF%E5%BE%80%E8%BF%94%E6%97%B6%E9%97%B4rtt%E5%88%A9%E7%94%A8%E7%8E%87">时延、时延带宽积、往返时间RTT、利用率</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E4%BA%8C%E4%BC%A0%E8%BE%93%E4%BB%8B%E8%B4%A8%E7%AC%AC0%E5%B1%82">二、传输介质（第0层）</a>
<ul>
<li><a href="#%E5%AF%BC%E5%90%91%E6%80%A7%E4%BC%A0%E8%BE%93%E4%BB%8B%E8%B4%A8">导向性传输介质</a>
<ul>
<li><a href="#%E5%8F%8C%E7%BB%9E%E7%BA%BF">双绞线</a></li>
<li><a href="#%E5%90%8C%E8%BD%B4%E7%94%B5%E7%BC%86">同轴电缆</a></li>
<li><a href="#%E5%85%89%E7%BA%A4">光纤</a></li>
</ul>
</li>
<li><a href="#%E9%9D%9E%E5%AF%BC%E5%90%91%E6%80%A7%E4%BC%A0%E8%BE%93%E4%BB%8B%E8%B4%A8">非导向性传输介质</a></li>
</ul>
</li>
<li><a href="#%E4%B8%89%E7%89%A9%E7%90%86%E5%B1%82%E7%AC%AC%E4%B8%80%E5%B1%82">三、物理层（第一层）</a>
<ul>
<li><a href="#%E7%89%A9%E7%90%86%E5%B1%82%E8%AE%BE%E5%A4%87">物理层设备</a>
<ul>
<li><a href="#%E4%B8%AD%E7%BB%A7%E5%99%A8">中继器</a></li>
<li><a href="#%E9%9B%86%E7%BA%BF%E5%99%A8">集线器</a></li>
</ul>
</li>
<li><a href="#%E6%95%B0%E6%8D%AE%E9%80%9A%E4%BF%A1%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86">数据通信基础知识</a>
<ul>
<li><a href="#%E6%95%B0%E6%8D%AE%E9%80%9A%E4%BF%A1%E6%A8%A1%E5%9E%8B">数据通信模型</a></li>
<li><a href="#%E6%95%B0%E6%8D%AE%E9%80%9A%E4%BF%A1%E7%9B%B8%E5%85%B3%E6%9C%AF%E8%AF%AD">数据通信相关术语</a></li>
<li><a href="#%E6%95%B0%E6%8D%AE%E9%80%9A%E4%BF%A1%E6%96%B9%E5%BC%8F%E5%88%86%E7%B1%BB">数据通信方式分类</a>
<ul>
<li><a href="#%E5%8D%95%E5%B7%A5%E5%8D%8A%E5%8F%8C%E5%B7%A5%E5%85%A8%E5%8F%8C%E5%B7%A5%E9%80%9A%E4%BF%A1">单工、半双工、全双工通信</a></li>
<li><a href="#%E4%B8%B2%E8%A1%8C%E5%B9%B6%E8%A1%8C%E9%80%9A%E4%BF%A1">串行、并行通信</a></li>
<li><a href="#%E5%90%8C%E6%AD%A5%E5%BC%82%E6%AD%A5%E9%80%9A%E4%BF%A1">同步、异步通信</a></li>
</ul>
</li>
<li><a href="#%E6%95%B0%E6%8D%AE%E4%BA%A4%E6%8D%A2%E6%96%B9%E5%BC%8F">数据交换方式</a>
<ul>
<li><a href="#%E7%94%B5%E8%B7%AF%E4%BA%A4%E6%8D%A2%E5%BB%BA%E7%AB%8B%E7%89%A9%E7%90%86%E8%BF%9E%E6%8E%A5%E4%BA%A4%E6%8D%A2%E6%96%B9%E5%BC%8F">电路交换（建立物理连接交换方式）</a></li>
<li><a href="#%E6%8A%A5%E6%96%87%E4%BA%A4%E6%8D%A2%E5%AD%98%E5%82%A8%E8%BD%AC%E5%8F%91%E4%BA%A4%E6%8D%A2%E6%96%B9%E5%BC%8F">报文交换（存储转发交换方式）</a></li>
<li><a href="#%E5%88%86%E7%BB%84%E4%BA%A4%E6%8D%A2%E5%AD%98%E5%82%A8%E8%BD%AC%E5%8F%91%E4%BA%A4%E6%8D%A2%E6%96%B9%E5%BC%8F">分组交换（存储转发交换方式）</a>
<ul>
<li><a href="#%E6%95%B0%E6%8D%AE%E6%8A%A5%E6%96%B9%E5%BC%8F%E5%AD%98%E5%82%A8%E8%BD%AC%E5%8F%91%E4%BA%A4%E6%8D%A2%E6%96%B9%E5%BC%8F">数据报方式（存储转发交换方式）</a></li>
<li><a href="#%E8%99%9A%E7%94%B5%E8%B7%AF%E6%96%B9%E5%BC%8F%E5%BB%BA%E7%AB%8B%E9%80%BB%E8%BE%91%E8%BF%9E%E6%8E%A5%E4%BA%A4%E6%8D%A2%E6%96%B9%E5%BC%8F">虚电路方式（建立逻辑连接交换方式）</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E7%A0%81%E5%85%83%E9%80%9F%E7%8E%87%E6%B3%A2%E7%89%B9%E5%B8%A6%E5%AE%BD">码元、速率、波特、带宽</a></li>
<li><a href="#%E5%A5%88%E6%B0%8F%E5%87%86%E5%88%99%E9%A6%99%E5%86%9C%E5%AE%9A%E7%90%86">奈氏准则&amp;香农定理</a></li>
<li><a href="#%E7%BC%96%E7%A0%81%E8%B0%83%E5%88%B6">编码&amp;调制</a>
<ul>
<li><a href="#%E7%BC%96%E7%A0%81%E8%BD%AC%E4%B8%BA%E6%95%B0%E5%AD%97%E4%BF%A1%E5%8F%B7">编码（转为数字信号）</a>
<ul>
<li><a href="#%E6%95%B0%E5%AD%97%E6%95%B0%E6%8D%AE%E7%BC%96%E7%A0%81%E4%B8%BA%E6%95%B0%E5%AD%97%E4%BF%A1%E5%8F%B7">数字数据编码为数字信号</a></li>
<li><a href="#%E6%A8%A1%E6%8B%9F%E6%95%B0%E6%8D%AE%E7%BC%96%E7%A0%81%E4%B8%BA%E6%95%B0%E5%AD%97%E4%BF%A1%E5%8F%B7">模拟数据编码为数字信号</a></li>
</ul>
</li>
<li><a href="#%E8%B0%83%E5%88%B6%E8%BD%AC%E4%B8%BA%E6%A8%A1%E6%8B%9F%E4%BF%A1%E5%8F%B7">调制（转为模拟信号）</a>
<ul>
<li><a href="#%E6%95%B0%E5%AD%97%E6%95%B0%E6%8D%AE%E8%B0%83%E5%88%B6%E4%B8%BA%E6%A8%A1%E6%8B%9F%E4%BF%A1%E5%8F%B7">数字数据调制为模拟信号</a></li>
<li><a href="#%E6%A8%A1%E6%8B%9F%E6%95%B0%E6%8D%AE%E8%B0%83%E5%88%B6%E4%B8%BA%E6%A8%A1%E6%8B%9F%E4%BF%A1%E5%8F%B7">模拟数据调制为模拟信号</a></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E5%9B%9B%E6%95%B0%E6%8D%AE%E9%93%BE%E8%B7%AF%E5%B1%82%E7%AC%AC%E4%BA%8C%E5%B1%82">四、数据链路层（第二层）</a>
<ul>
<li><a href="#%E9%93%BE%E8%B7%AF%E5%B1%82%E8%AE%BE%E5%A4%87">链路层设备</a>
<ul>
<li><a href="#%E7%BD%91%E6%A1%A5">网桥</a></li>
<li><a href="#%E4%BA%A4%E6%8D%A2%E6%9C%BA">交换机</a></li>
</ul>
</li>
<li><a href="#%E9%93%BE%E8%B7%AF%E5%B1%82%E7%9A%84%E5%8A%9F%E8%83%BD">链路层的功能</a>
<ul>
<li><a href="#%E5%B0%81%E8%A3%85%E6%88%90%E5%B8%A7%E9%80%8F%E6%98%8E%E4%BC%A0%E8%BE%93">封装成帧&amp;透明传输</a></li>
<li><a href="#%E5%B7%AE%E9%94%99%E6%8E%A7%E5%88%B6%E6%A3%80%E9%94%99%E7%BC%96%E7%A0%81">差错控制（检错编码）</a></li>
<li><a href="#%E6%B5%81%E9%87%8F%E6%8E%A7%E5%88%B6%E5%92%8C%E5%8F%AF%E9%9D%A0%E4%BC%A0%E8%BE%93%E6%9C%BA%E5%88%B6">流量控制和可靠传输机制</a></li>
</ul>
</li>
<li><a href="#%E9%93%BE%E8%B7%AF%E5%B1%82%E7%9A%84%E4%B8%A4%E7%A7%8D%E4%BF%A1%E9%81%93%E4%BB%8B%E8%B4%A8%E8%AE%BF%E9%97%AE%E6%8E%A7%E5%88%B6">链路层的两种信道&amp;介质访问控制</a></li>
<li><a href="#%E5%B1%80%E5%9F%9F%E7%BD%91">局域网</a>
<ul>
<li><a href="#%E5%B1%80%E5%9F%9F%E7%BD%91%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5%E5%92%8C%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84">局域网基本概念和体系结构</a></li>
<li><a href="#%E5%B1%80%E5%9F%9F%E7%BD%91%E7%9A%84%E5%88%86%E7%B1%BB">局域网的分类</a>
<ul>
<li><a href="#%E4%BB%A5%E5%A4%AA%E7%BD%918023">以太网802.3</a></li>
<li><a href="#%E6%97%A0%E7%BA%BF%E5%B1%80%E5%9F%9F%E7%BD%9180211">无线局域网802.11</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E5%B9%BF%E5%9F%9F%E7%BD%91">广域网</a>
<ul>
<li><a href="#%E5%B9%BF%E5%9F%9F%E7%BD%91%E4%BD%BF%E7%94%A8%E7%9A%84%E9%93%BE%E8%B7%AF%E5%B1%82%E5%8D%8F%E8%AE%AE">广域网使用的链路层协议</a>
<ul>
<li><a href="#ppp%E5%8D%8F%E8%AE%AE">PPP协议</a></li>
<li><a href="#hdlc%E5%8D%8F%E8%AE%AE">HDLC协议</a></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E4%BA%94%E7%BD%91%E7%BB%9C%E5%B1%82%E7%AC%AC%E4%B8%89%E5%B1%82">五、网络层（第三层）</a>
<ul>
<li><a href="#%E7%BD%91%E7%BB%9C%E5%B1%82%E8%AE%BE%E5%A4%87%E8%B7%AF%E7%94%B1%E5%99%A8">网络层设备——路由器</a></li>
<li><a href="#%E7%BD%91%E7%BB%9C%E5%B1%82%E7%9A%84%E5%8A%9F%E8%83%BD">网络层的功能</a>
<ul>
<li><a href="#%E8%B7%AF%E7%94%B1%E9%80%89%E6%8B%A9%E4%B8%8E%E5%88%86%E7%BB%84%E8%BD%AC%E5%8F%91">路由选择与分组转发</a></li>
<li><a href="#%E5%BC%82%E6%9E%84%E7%BD%91%E7%BB%9C%E4%BA%92%E8%81%94">异构网络互联</a></li>
<li><a href="#%E6%8B%A5%E5%A1%9E%E6%8E%A7%E5%88%B6">拥塞控制</a></li>
</ul>
</li>
<li><a href="#ipv4%E5%9C%B0%E5%9D%80">IPv4地址</a></li>
<li><a href="#ip%E6%95%B0%E6%8D%AE%E6%8A%A5%E6%A0%BC%E5%BC%8F">IP数据报格式</a></li>
<li><a href="#ip%E6%95%B0%E6%8D%AE%E6%8A%A5%E5%88%86%E7%89%87">IP数据报分片</a></li>
<li><a href="#%E7%BD%91%E7%BB%9C%E5%9C%B0%E5%9D%80%E8%BD%AC%E6%8D%A2nat">网络地址转换（NAT）</a></li>
<li><a href="#%E5%AD%90%E7%BD%91%E5%88%92%E5%88%86%E5%AD%90%E7%BD%91%E6%8E%A9%E7%A0%81">子网划分&amp;子网掩码</a></li>
<li><a href="#%E6%9E%84%E6%88%90%E8%B6%85%E7%BD%91%E6%97%A0%E5%88%86%E7%B1%BB%E7%BC%96%E5%9D%80%E6%96%B9%E6%B3%95cidr">构成超网（无分类编址方法CIDR）</a></li>
<li><a href="#ipv6">IPv6</a></li>
<li><a href="#%E7%A7%BB%E5%8A%A8ip">移动IP</a></li>
<li><a href="#ip%E7%BB%84%E6%92%AD">IP组播</a></li>
<li><a href="#%E5%8D%8F%E8%AE%AE">协议</a>
<ul>
<li><a href="#arp%E5%8D%8F%E8%AE%AE">ARP协议</a></li>
<li><a href="#dhcp%E5%8D%8F%E8%AE%AE">DHCP协议</a></li>
<li><a href="#icmp%E5%8D%8F%E8%AE%AE">ICMP协议</a></li>
<li><a href="#%E4%B8%89%E7%A7%8D%E8%B7%AF%E7%94%B1%E5%8D%8F%E8%AE%AE%E8%B7%AF%E7%94%B1%E7%AE%97%E6%B3%95">三种路由协议&amp;路由算法</a>
<ul>
<li><a href="#ospf%E5%8D%8F%E8%AE%AE%E5%8F%8A%E9%93%BE%E8%B7%AF%E7%8A%B6%E6%80%81%E7%AE%97%E6%B3%95">OSPF协议及链路状态算法</a></li>
<li><a href="#rip%E5%8D%8F%E8%AE%AE%E5%8F%8A%E8%B7%9D%E7%A6%BB%E5%90%91%E9%87%8F%E7%AE%97%E6%B3%95">RIP协议及距离向量算法</a></li>
<li><a href="#bgp%E5%8D%8F%E8%AE%AE">BGP协议</a></li>
</ul>
</li>
<li><a href="#igmp%E5%8D%8F%E8%AE%AE%E4%B8%8E%E7%BB%84%E6%92%AD%E8%B7%AF%E7%94%B1%E9%80%89%E6%8B%A9%E5%8D%8F%E8%AE%AE">IGMP协议与组播路由选择协议</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E5%85%AD%E4%BC%A0%E8%BE%93%E5%B1%82%E7%AC%AC%E5%9B%9B%E5%B1%82">六、传输层（第四层）</a>
<ul>
<li><a href="#tcp%E5%8D%8F%E8%AE%AE">TCP协议</a></li>
<li><a href="#udp%E5%8D%8F%E8%AE%AE">UDP协议</a></li>
</ul>
</li>
<li><a href="#%E4%B8%83%E5%BA%94%E7%94%A8%E5%B1%82%E7%AC%AC%E4%BA%94%E5%B1%82">七、应用层（第五层）</a>
<ul>
<li><a href="#%E7%BD%91%E7%BB%9C%E5%BA%94%E7%94%A8%E6%A8%A1%E5%9E%8B">网络应用模型</a>
<ul>
<li><a href="#cs">C/S</a></li>
<li><a href="#p2p">P2P</a></li>
</ul>
</li>
<li><a href="#%E4%B8%87%E7%BB%B4%E7%BD%91%E5%92%8Chttp%E5%8D%8F%E8%AE%AE">万维网和HTTP协议</a></li>
<li><a href="#%E5%9F%9F%E5%90%8D%E8%A7%A3%E6%9E%90%E7%B3%BB%E7%BB%9Fdns">域名解析系统DNS</a></li>
<li><a href="#%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AEftp">文件传输协议FTP</a></li>
<li><a href="#%E7%94%B5%E5%AD%90%E9%82%AE%E4%BB%B6">电子邮件</a></li>
</ul>
</li>
</ul>`,r:{minutes:23.37,words:7010},y:"a",t:"网络",i:"lightbulb"},["/cs/网络.html","/cs/网络.md",":md"]],["v-076351c7","/cs/%E8%AE%A1%E7%AE%97%E6%9C%BA%E6%8A%80%E8%83%BD.html",{d:1730220137e3,e:`<h1> 计算机技能</h1>
<h1> 常识</h1>
<p>1、每充满电后拔掉电源并不会保护电池，插上电源不会用电池，拔掉会用电池，反而对电池不好。能充电就一直充电，充着电用，才能发挥笔记本更高的性能</p>
<p>2、金山打字通练习打字 Note:有双拼，一个格子两个字母（做到不看键盘）</p>
<p>3、尽量用键盘快捷键，次用触摸板，最好不用鼠标（做到不用鼠标和触摸板）</p>
<p>4、浏览器的插件，快捷键，设置等（做到精通）</p>
<h1> 技巧</h1>
<p>1、C盘文件夹迁移</p>
<p>C盘容易爆满，把除系统文件以外的其他文件和文件夹放在其他盘，不要放C盘</p>
<p>把特殊文件夹（视频，图片，文档，下载等）从C盘移到其他盘：在其他盘新建同名文件夹，将C盘的特殊文件夹（右键-&gt;属性-&gt;位置）更换为其他盘的空文件夹位置</p>`,r:{minutes:3.45,words:1035},y:"a",t:"计算机技能",i:"lightbulb"},["/cs/计算机技能.html","/cs/计算机技能.md",":md"]],["v-3f1675d0","/language/commen_mistakes.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Commen Mistakes"],e:`<h1> Commen Mistakes</h1>
`,r:{minutes:2.44,words:731},y:"a",t:"Commen Mistakes",i:"lightbulb"},[":md"]],["v-4e8dace0","/language/grammar.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Grammar"],e:`<h1> Grammar</h1>
<blockquote>
<p>Don't think that mastering the entire set of grammar rules is necessary to learn Language well.  Once you've grasped the core grammar, you're already well on your way. The rest is just about continuous accumulation and improvement.</p>
<p>Remember, the sole purpose of grammar is to build sentences.</p>
</blockquote>
`,r:{minutes:16.8,words:5039},y:"a",t:"Grammar",i:"lightbulb"},[":md"]],["v-218d24c2","/language/new_concept_english3.html",{d:17338752e5,l:"December 11, 2024",c:["Conversation"],g:["Grammar"],e:`<h1> New Concept English</h1>
<h2> Resources</h2>
<ul>
<li>https://www.ha85.com/lessons/173</li>
<li>https://nce.koolearn.com/20150928/782997.html</li>
</ul>
<h2> Lesson1</h2>
<p>【课文】</p>
<p>Where must the puma have come from?</p>
<p>Pumas are large, cat-like animals which are found in America. When reports came into London Zoo that a wild puma had been spotted forty-five miles south of London, they were not taken seriously. However, as the evidence began to accumulate, experts from the Zoo felt obliged to investigate, for the descriptions given by people who claimed to have seen the puma were extraordinarily similar.</p>`,r:{minutes:27.8,words:8340},y:"a",t:"New Concept English",i:"lightbulb"},[":md"]],["v-d36e9eb6","/language/new_concept_english_detail.html",{d:17338752e5,l:"December 11, 2024",c:["Conversation"],g:["Grammar"],e:`<h1> New Concept English Sentences</h1>
<h2> Summary</h2>
<p>总结：</p>
<ul>
<li>句式
<ul>
<li>定语从句:that/省略that/which/who/where</li>
<li>名词性从句
<ul>
<li>主语从句：why</li>
<li>宾语从句:that / 省略that / whether</li>
<li>同位语从句:that</li>
</ul>
</li>
<li>状语从句
<ul>
<li>时间状语从句:when / whenever / as / while / until / every time /after+句子 / after+非谓语动词</li>
<li>地点状语从句:where / wherever</li>
<li>条件状语从句:unless / if</li>
<li>原因状语从句:for/as</li>
<li>方式状语从句：as(正如，如同，好像)</li>
<li>让步状语从句：though / even if / whatever</li>
<li>比较状语从句：than / while</li>
</ul>
</li>
<li>并列句:and / but / not only..but</li>
<li>转折词:however</li>
<li>让步状语短语：despite
<ul>
<li>Despite" 是一个介词，后面不跟句子，通常接名词或动名词，构成让步状语短语</li>
</ul>
</li>
<li>非谓语动词：非谓语动词做后置定语 / 介词+非谓语动词 / 非谓语动词做状语</li>
<li>介词短语做后置定语:on</li>
<li>被动语态</li>
<li>形式主语：It has been said that / it may be possible to do sth / It is （almost/quite） impossible to do sth / it is extremely difficult to do sth / It was revealed that</li>
<li>形式宾语：make it possible to do sth</li>
<li>there be</li>
</ul>
</li>
<li>时态
<ul>
<li>一般现在时</li>
<li>现在进行时</li>
<li>现在完成时</li>
<li>一般过去时</li>
<li>过去进行时</li>
<li>过去完成时</li>
<li>过去将来时</li>
<li>一般将来时</li>
</ul>
</li>
</ul>`,r:{minutes:6.98,words:2094},y:"a",t:"New Concept English Sentences",i:"lightbulb"},[":md"]],["v-072ac7bc","/language/pronunciation.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Pronunciation"],e:`<h1> Pronunciation</h1>
`,r:{minutes:6.08,words:1824},y:"a",t:"Pronunciation",i:"lightbulb"},[":md"]],["v-7fa1d5cc","/language/sentence_pattern_and_expression.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Sentence Pattern and Expression"],e:`<h1> Sentence Pattern and Expression</h1>
`,r:{minutes:24.08,words:7223},y:"a",t:"Sentence Pattern and Expression",i:"lightbulb"},[":md"]],["v-26fd8e01","/llm/llm_resources.html",{d:1733965976e3,e:`<ul>
<li>
<p>学习资源（哥哥给的资料）</p>
<ul>
<li>53AI(会收集其他区地方的优秀文章) https://53ai.com/news/RAG/2024081119702.html</li>
<li>2024大语言模型入门指南：从小白到高手(基础篇) 硬件资源篇 https://www.bilibili.com/read/cv34509617/</li>
<li>feishu（解决掉）
<ul>
<li>一站式AI产品经理入门指南 https://v11enp9ok1h.feishu.cn/wiki/QVNRw7sYpiqKvCkAKwec6Zqanzd</li>
<li>吃透RAG https://kwz55xptfhg.feishu.cn/wiki/Qgn0whTmribxeGkAzvscgLcwnFY</li>
</ul>
</li>
<li>Github
<ul>
<li>面试
<ul>
<li>大语言大模型（LLMs） 算法（应用）工程师相关的知识及面试题（fork:416, star:3.7k）https://github.com/wdndev/llm_interview_note</li>
<li>LLMs九层妖塔（fork:174, star:1.8k） https://github.com/km1994/LLMsNineStoryDemonTower</li>
<li>AIGC-interview/CV-interview/LLMs-interview面试问题与答案集合仓（fork:172, star:1.7k）https://github.com/315386775/DeepLearing-Interview-Awesome-2024</li>
</ul>
</li>
<li>其他
<ul>
<li>技术原理以及实战经验（大模型工程化、大模型应用落地）（fork:1.1k, star:10.5k）https://github.com/liguodongiot/llm-action</li>
<li>RAG_Techniques(foreign, fork:856, star:8.5k)https://github.com/NirDiamant/RAG_Techniques</li>
<li>DataWhale(fork:1.5k,star:11.9k)https://github.com/datawhalechina/llm-cookbook</li>
<li>DataWhale(fork:583,star:4.7k)https://github.com/datawhalechina/llm-universe</li>
</ul>
</li>
</ul>
</li>
<li>非LLM
<ul>
<li>关于Python的面试题 https://github.com/taizilongxu/interview_python</li>
<li>The Document is All You Need 一站式LLM底层技术原理 https://s3tlxskbq3.feishu.cn/docx/NyPqdCKraoXz9gxNVCfcIFdnnAc</li>
</ul>
</li>
</ul>
</li>
<li>
<p>项目</p>
<ul>
<li>https://github.com/karthik-codex/Autogen_GraphRAG_Ollama</li>
<li>unwindai
<ul>
<li>https://www.theunwindai.com/</li>
<li>https://github.com/Shubhamsaboo/awesome-llm-apps</li>
<li>Build AI Research Agent with Memory to search Academic Papers
<ul>
<li>https://www.theunwindai.com/p/build-ai-research-agent-with-memory-to-search-academic-papers</li>
</ul>
</li>
</ul>
</li>
<li>中文医疗（github上搜这4个字）</li>
</ul>
</li>
<li>
<p>备选可参与的开源项目</p>
<ul>
<li>RAG方向
<ul>
<li>https://github.com/Marker-Inc-Korea/AutoRAG</li>
<li>https://www.cnblogs.com/tgzhu/p/18084409</li>
</ul>
</li>
<li>视频会议摘要和问答</li>
<li>语音大模型</li>
<li>面试总结</li>
<li>英语雅思助教</li>
</ul>
</li>
</ul>`,r:{minutes:1.31,words:394},y:"a",t:""},[":md"]],["v-1f1acd79","/llm/open_interpreter.html",{d:1733965976e3,e:`<h1> Open Interpreter</h1>
<h2> Scope</h2>
<p>我们的工作范围是什么？
Open Interpreter 包含两个相互支持的项目，其范围如下：
core 项目，致力于研究如何让语言模型安全地控制计算机。目前，这意味着要创建一个语言模型可以操作的实时代码执行环境。
终端接口（terminal_interface），这是一种纯文本方式，供用户指挥运行在core 内的 LLM。这包括将内核连接到各种本地和托管 LLM 的功能（内核本身不应该知道这些 LLM）。
什么不在我们的范围内？
我们的指导思想是极简主义，因此我们还决定明确将以下内容视为范围之外：
运行代码之外的核心附加功能。
在terminal_interface中与 LLM 进行文本之外的更复杂交互（但文本中可以包含图片或视频等更复杂输入的文件路径）。</p>`,r:{minutes:1.28,words:385},y:"a",t:"Open Interpreter"},[":md"]],["v-65bb1c98","/tools/Git%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C.html",{d:1736490684e3,e:`<h1> Git使用手册</h1>
<h2> 基本概念</h2>
<p>工作区(在电脑上能看到的目录) <br>
暂存区(git add之后的状态) <br>
版本库(git commit之后的状态) <br>
远程仓库 <br></p>
<h2> 初始操作</h2>
<div class="language-<br/> line-numbers-mode" data-ext="<br/>"><pre class="language-<br/>"><code>//查看用户名和邮箱地址： &lt;br/&gt;
git config user.name &lt;br/&gt;
git config user.email &lt;br/&gt;

//设置姓名和邮箱地址 &lt;br/&gt;
git config --global user.name "zz" &lt;br/&gt;
git config --global user.email "xxx@163.com" &lt;br/&gt;

// 设置代理 (这里走的是socks5协议，注意改代理服务器ip和端口)  两条命令要同时运行 &lt;br/&gt;
git config --global http.https://github.com.proxy socks5://127.0.0.1:10808 &lt;br/&gt;
git config --global https.https://github.com.proxy socks5://127.0.0.1:10808 &lt;br/&gt;

//查看git设置列表信息 &lt;br/&gt;
git config --list &lt;br/&gt;

//设置SSH Key &lt;br/&gt;
ssh-keygen -t rsa -C 'xxx@163.com'(第一次回车，第二次输入密码，第三次再次输入密码) &lt;br/&gt;
//查看SSH Key(~表示用户目录，比如我的windows就是C:\\Users\\Administrator) &lt;br/&gt;
cat ~/.ssh/id_rsa.pub &lt;br/&gt;
//验证ssh key是否添加成功，两个里看需求进行连接测试 &lt;br/&gt;
ssh -T git@gitlab.com &lt;br/&gt;
ssh -T git@github.com &lt;br/&gt;

//初始化仓库 &lt;br/&gt;
git init &lt;br/&gt;
\`\`\` &lt;br/&gt;
## 常用操作
### 日常操作
#### 场景1：提交
\`\`\` &lt;br/&gt;
git pull --rebase origin xxx &lt;br/&gt;
git add .//工作区的修改添加到暂存区 &lt;br/&gt;
git commit -m "修改readme"//暂存区提交到版本库 &lt;br/&gt;
git push origin xxx &lt;br/&gt;
git checkout dev //切换分支 &lt;br/&gt;
git checkout -b zlz_test //新建分支 &lt;br/&gt;
\`\`\` &lt;br/&gt;
#### 场景2：查看
\`\`\` &lt;br/&gt;
git status//查看状态 &lt;br/&gt;
git diff//在没add之前，查看工作区和暂存区的区别 &lt;br/&gt;
git diff HEAD//查看工作区和版本库的区别 &lt;br/&gt;
git diff head --readme.txt//查看指定文件的工作区和版本库的区别 &lt;br/&gt;
\`\`\` &lt;br/&gt;
#### 场景3：暂存
\`\`\` &lt;br/&gt;
git stash//把当前工作现场“储藏”起来，等以后恢复现场后继续工作 &lt;br/&gt;
git stash pop//恢复的同时把stash内容也删了 &lt;br/&gt;
git stash list//查看储藏记录列表 &lt;br/&gt;

stash信息解读 &lt;br/&gt;
stash@{index}: WIP on [分支名]: [最近一次的commitID] [最近一次的提交信息] &lt;br/&gt;
Note：如果多次stash &lt;br/&gt;
\`\`\` &lt;br/&gt;
### rebase操作
#### 合并多条commit记录
##### 0.只能rebase你自己使用的分支，永远不要rebase一个和别人共用的分支
##### 1.看提交记录，确定要从哪个commit开始合并
如果要把上次合到主分支之后的代码提交都合并，那就选合到主分支的那个commit作为本次合并的base记录，注意这个commit并不会包括进来，左开右闭。 &lt;br/&gt;
\`\`\` &lt;br/&gt;
git log --graph --oneline &lt;br/&gt;

Note：上下键滚动、Q键退出 &lt;br/&gt;
\`\`\` &lt;br/&gt;
##### 2.执行git rebase -i命令
\`\`\` &lt;br/&gt;
git rebase -i base_commit_id &lt;br/&gt;
\`\`\` &lt;br/&gt;
##### 3.出现如下界面，按i进入编辑，把除了第一个以外的pick的都改成s，按Esc退出编辑，按:wq保存
Note：s是squash的缩写 &lt;br/&gt;
![image.png](images/Git使用手册-1.png) &lt;br/&gt;
##### 4.出现如下界面，按i进入编辑，把第一条提交信息改成合并后想展示的提交信息，把除了第一条以外的提交信息用#注释掉，按Esc退出编辑，按:wq保存
![image.png](images/Git使用手册-2.png) &lt;br/&gt;
##### 5.再看提交记录，多个commit已经合并成一条记录，完成
#### 提交记录不出现pull
##### 1.执行git pull --rebase
\`\`\` &lt;br/&gt;
git pull --rebase origin xxx_branch &lt;br/&gt;
\`\`\` &lt;br/&gt;
##### 2.如果报错，进行stash暂存，重新执行git pull --rebase
\`\`\` &lt;br/&gt;
Note：执行时必须保持工作区干净,否则报如下错误，需提交或暂存工作区修改内容 &lt;br/&gt;
error: cannot pull with rebase: You have unstaged changes. &lt;br/&gt;
error: please commit or stash them. &lt;br/&gt;
\`\`\` &lt;br/&gt;
\`\`\` &lt;br/&gt;
git stash &lt;br/&gt;

git pull --rebase origin xxx_branch &lt;br/&gt;
\`\`\` &lt;br/&gt;
##### 3.1.如果出现冲突，解决冲突
##### 去IDEA看冲突文件，手动解决好冲突，然后执行如下命令
\`\`\` &lt;br/&gt;
git add one.md &lt;br/&gt;

git rebase --continue &lt;br/&gt;
\`\`\` &lt;br/&gt;
##### 3.2.如果出现冲突，放弃本次rebase操作
\`\`\` &lt;br/&gt;
git rebase --abort &lt;br/&gt;
\`\`\` &lt;br/&gt;
### 分支操作
\`\`\` &lt;br/&gt;
git branch//查看本地分支 &lt;br/&gt;
git branch -a//查看远程分支和本地分支 &lt;br/&gt;
git branch -r//查看远程分支 &lt;br/&gt;
git branch dev//创建 &lt;br/&gt;
git branch -D local_branch_name  //删除本地分支 &lt;br/&gt;
git checkout -b dev(本地分支名称) origin/develop(远程分支名称)  //建立和远程分支一致的本地分支 &lt;br/&gt;
git checkout -b dev//创建并切换 &lt;br/&gt;
git checkout dev//切换 &lt;br/&gt;
git checkout -//切换到上一个分支 &lt;br/&gt;
(在master分支上操作,不推荐)git merge dev//把dev分支的工作成果合并到master分支上 &lt;br/&gt;
(在master分支上操作,推荐)git merge --no-ff -m "merge with no-ff" dev//--no-ff参数，表示禁用Fast forward &lt;br/&gt;
//在merge时生成一个新的commit，这样，从分支历史上就可以看出分支信息 &lt;br/&gt;
git branch -D dev//删除dev分支 &lt;br/&gt;
\`\`\` &lt;br/&gt;
### 远程操作
\`\`\` &lt;br/&gt;
git remote//查看远程库的信息 &lt;br/&gt;
git remote -v//显示更详细的信息 &lt;br/&gt;
git push -u origin dev//推送分支并建立关联(第一次推送)(如果远程仓库没有此分支,就会创建对应的远程分支) &lt;br/&gt;
git push origin master//上传本地指定分支到远程仓库 &lt;br/&gt;
git push//推送到对应的远程仓库 &lt;br/&gt;
git push -f//强推 &lt;br/&gt;
git pull//获取最新的远程仓库分支 &lt;br/&gt;
git pull origin master//取回远程仓库的变化，并与本地分支合并 &lt;br/&gt;


git branch --set-upstream-to=origin/dev dev//关联本地分支和远程分支 &lt;br/&gt;
git remote add origin git@github.com:wangjiax9/practice.git //关联远程仓库 &lt;br/&gt;
git clone git@github.com:michaelliao/gitskills.git//克隆一个本地库 &lt;br/&gt;
git checkout -b dev origin/dev//创建远程分支对应的本地分支并切换过来 &lt;br/&gt;
git clone -b &lt;branch name&gt; [remote repository address]//克隆某一个特定的远程分支（推荐此） &lt;br/&gt;
例如：git checkout -b dev git@github.com:michaelliao/gitskills.git  --&gt; 然后导入已有的git项目 &lt;br/&gt;

\`\`\` &lt;br/&gt;
### 暂存操作
stash 藏 &lt;br/&gt;
将当前未提交的修改（即，工作区的修改和暂存区的修改）先暂时储藏起来 &lt;br/&gt;
一般操作：现有分支暂存，切到主分支，拉新分支改bug提交，再切回原分支 &lt;br/&gt;
Q1：把未提交的暂存起来，但不切分支，在该分支上修改提交 &lt;br/&gt;
Q2：把未提交的暂存起来，但从现有分支切新分支，在新分支修改提交，再切回原分支 &lt;br/&gt;
## 历史操作
\`\`\` &lt;br/&gt;
git log//穿梭前，用git log可以查看提交历史，以便确定要回退到哪个版本 &lt;br/&gt;
git log --pretty=oneline//查看提交历史,简化显示 &lt;br/&gt;
git log --graph//以图表形式查看分支 &lt;br/&gt;
git log --graph --pretty=oneline --abbrev-commit//以图表形式查看分支,简化显示 &lt;br/&gt;
git reflog//要重返未来，用git reflog查看命令历史，以便确定要回到未来的哪个版本 &lt;br/&gt;
git checkout -- file//可以丢弃工作区的修改 &lt;br/&gt;
git reset HEAD file//把暂存区的修改撤销掉（unstage），重新放回工作区 &lt;br/&gt;
git reset --hard head^//退到上一个版本 &lt;br/&gt;
git reset --hard head^^//退到上两个版本 &lt;br/&gt;
git reset --hard 1094a//退到版本号为1094a的版本（版本号不用写全） &lt;br/&gt;
\`\`\` &lt;br/&gt;
## 不常用操作
\`\`\`shell &lt;br/&gt;
## 删除 untracked files
git clean -f//连 untracked 的目录也一起删掉 &lt;br/&gt;
git clean -fd//连 gitignore 的untrack 文件/目录也一起删掉 （慎用，一般这个是用来删掉编译出来的 .o之类的文件用的） &lt;br/&gt;
git clean -xfd//在用上述 git clean 前，强烈建议加上 -n 参数来先看看会删掉哪些文件，防止重要文件被误删，如下 &lt;br/&gt;
git clean -nf &lt;br/&gt;
git clean -nfd &lt;br/&gt;
git clean -nxfd &lt;br/&gt;
\`\`\` &lt;br/&gt;
## 问题解决记录

## git pull之后进入特殊界面
![image.png](images/Git使用手册-3.png) &lt;br/&gt;
解决：不是错误。按ESC，输入":wp"，按回车键退出 &lt;br/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:6.47,words:1941},y:"a",t:"Git使用手册",i:"lightbulb"},["/tools/Git使用手册.html","/tools/Git使用手册.md",":md"]],["v-7d97f2e1","/tools/IDEA_Keymap.html",{d:1730220137e3,e:`<h1> IDEA快捷键</h1>
<h2> 查看一个类的构造函数有哪些</h2>
<p>方法一：类前面加new，类后面不要加括号，按住ctrl点一下该类，会出现它的构造函数如下图

方法二：类前面加new，类后面加括号，ctrl+p，会出现它的构造函数如下图
</p>
<h2> 常用快捷键按重要性依次排序:  <br></h2>
<ul>
<li>Ctrl+Z: 撤销更改  <br></li>
<li>Ctrl+Shift+Z: 恢复被撤销的内容  <br></li>
<li>Ctrl+E: 查看最近改过的各种文件(以及各种好用的快捷键)  <br></li>
<li>Alt+Enter: 显示IDEA推测你要完成的操作，高级的代码补全  <br></li>
<li>Ctrl+Shift+F: 查找代码片段用  <br></li>
<li>Alt+F7: 跟踪一个Object的usage，一个个检查，比ctrl + 左键点击好用得多  <br></li>
<li>Shift Shift: 查找文件或类用  <br></li>
<li>Alt+9: 查看Git的历史提交记录  <br></li>
<li>拖黑后Ctrl+"/": 注释，取消注释  <br></li>
<li>F2: 跳到当前代码下一个报错的地方  <br></li>
<li>Alt+ ←/→: 在打开的文件中切换  <br></li>
<li>Ctrl+Alt+←/→: 跳到上一次/下一次看过的代码段  <br></li>
<li>Ctrl+Alt+L: 自动优化当前文件代码格式  <br></li>
</ul>`,r:{minutes:2.23,words:669},y:"a",t:"IDEA快捷键",i:"lightbulb"},[":md"]],["v-46241083","/tools/IDEA_Problem_and_plugin.html",{d:1730220137e3,e:`<h1> IDEA常见问题及插件</h1>
<h2> 一、常用插件</h2>
<ul>
<li>Alibaba Java Coding Guidelines(XenoAmess TPM) : 代码检查用这个  <br></li>
<li>RestfulTool: 通过URL直接定位到对应controller代码 <br></li>
<li>Maven Helper: 分析Maven项目的package依赖冲突 <br></li>
<li>POJO to JSON: 要为类生成代码直接在类定义处右键就能copy json了，省时省力 <br></li>
<li>Github Copilot: AI补全代码，学生可以免费申请 <br></li>
<li>Sonar Lint: 扫描 bug, vulnerabilities and code smell，同时也是code review好帮手 <br></li>
<li>Database Navigator: 数据库插件，聊胜于无 （不建议使用，只能查看，无法创建表，还是用DBeaver算了） <br></li>
<li>Git Commit Template : 提交git commit模板，有利于团队管理提交代码  <br></li>
<li>Spring Assistant ：在idea中添加Spring Initializr工具；支持.yml提示【特别提醒：亲测很难用，maven导包会报错，直接用官网方式创建SpringBoot脚手架项目】 <br></li>
<li>GitToolBox：查看每行代码最后一个修改的人 <br></li>
<li>lombok：通过注解自动生成set,get,equals,constructor,toString</li>
</ul>`,r:{minutes:5.98,words:1794},y:"a",t:"IDEA常见问题及插件",i:"lightbulb"},[":md"]],["v-48af1746","/tools/Markdown.html",{d:1730220137e3,e:`<h1> Markdown</h1>
<h2> 对勾&amp;打叉</h2>
<p>✕<br>
✓</p>
<h2> 链接</h2>
<p><a href="https://www.youtube.com/watch?v=ahnGLM-RC1Y" target="_blank" rel="noopener noreferrer">OpenAI:A Survey of Techniques for Maximizing LLM Performance</a></p>
<h2> md基本语法</h2>
<p>引用：&gt;大于号</p>
<p>换行：后面空2个空格，或者空一行，或者<br></p>`,r:{minutes:.82,words:246},y:"a",t:"Markdown",i:"lightbulb"},[":md"]],["v-7d1017de","/tools/Maven--java%E5%8C%85%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7.html",{d:1730220137e3,e:`<h1> Maven--java包管理工具</h1>
<ul>
<li><a href="#maven--java%E5%8C%85%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7">Maven--java包管理工具</a>
<ul>
<li><a href="#%E4%B8%80%E7%AE%80%E4%BB%8B">一、简介</a>
<ul>
<li><a href="#%E4%B8%80%E4%BB%80%E4%B9%88%E6%98%AFmaven">（一）什么是Maven</a></li>
<li><a href="#%E4%BA%8Cmaven%E8%83%BD%E5%81%9A%E4%BB%80%E4%B9%88">（二）maven能做什么</a></li>
<li><a href="#%E4%B8%89maven%E6%96%87%E4%BB%B6%E7%BB%93%E6%9E%84">（三）maven文件结构</a></li>
</ul>
</li>
<li><a href="#%E4%BA%8C%E4%BD%BF%E7%94%A8">二、使用</a>
<ul>
<li><a href="#%E4%B8%80%E5%AE%98%E7%BD%91%E4%B8%8B%E8%BD%BDwindow%E7%B3%BB%E7%BB%9F">（一）官网下载（window系统）</a></li>
<li><a href="#%E4%BA%8C%E8%A7%A3%E5%8E%8B">（二）解压</a></li>
<li><a href="#%E4%B8%89%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F">（三）配置环境变量</a></li>
<li><a href="#%E5%9B%9B%E9%85%8D%E7%BD%AEsettingsxml">（四）配置settings.xml</a></li>
<li><a href="#%E4%BA%94idea%E9%85%8D%E7%BD%AE%E8%87%AA%E5%B7%B1%E7%9A%84maven">（五）IDEA配置自己的maven</a></li>
<li><a href="#%E5%85%AD%E7%94%A8idea%E5%88%9B%E5%BB%BAmaven%E9%A1%B9%E7%9B%AE">（六）用IDEA创建maven项目</a></li>
<li><a href="#%E4%B8%83%E5%BC%95%E5%85%A5%E4%BE%9D%E8%B5%96">（七）引入依赖</a></li>
<li><a href="#%E5%85%AB%E5%BC%95%E5%85%A5%E6%8F%92%E4%BB%B6">（八）引入插件</a></li>
</ul>
</li>
<li><a href="#%E4%B8%89maven%E5%9F%BA%E7%A1%80%E6%93%8D%E4%BD%9C">三、maven基础操作</a>
<ul>
<li><a href="#%E4%B8%80%E4%BB%93%E5%BA%93">（一）仓库</a></li>
<li><a href="#%E4%BA%8C%E9%85%8D%E7%BD%AE">（二）配置</a></li>
<li><a href="#%E4%B8%89gav%E5%9D%90%E6%A0%87">（三）gav坐标</a></li>
<li><a href="#%E5%9B%9B%E6%93%8D%E4%BD%9C%E5%91%BD%E4%BB%A4%E4%B8%8E%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F">（四）操作命令与生命周期</a></li>
<li><a href="#%E4%BA%94%E4%BE%9D%E8%B5%96%E8%8C%83%E5%9B%B4%E7%AE%A1%E7%90%86">（五）依赖范围管理</a></li>
<li><a href="#%E5%85%AD%E7%88%B6%E5%AD%90%E9%A1%B9%E7%9B%AE%E4%BE%9D%E8%B5%96%E4%BC%A0%E9%80%92">（六）父子项目依赖传递</a></li>
<li><a href="#%E4%B8%83%E9%A1%B9%E7%9B%AE%E8%81%9A%E5%90%88%E7%BB%9F%E4%B8%80%E7%AE%A1%E7%90%86">（七）项目聚合统一管理</a></li>
<li><a href="#%E5%85%AB%E9%A1%B9%E7%9B%AE%E4%B8%AD%E7%9A%84%E4%BE%9D%E8%B5%96%E5%86%B2%E7%AA%81">（八）项目中的依赖冲突</a>
<ul>
<li><a href="#%E6%8E%92%E5%8C%85-maven-helper">排包: maven helper</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#pom%E6%96%87%E4%BB%B6%E8%A7%A3%E6%9E%90">POM文件解析</a>
<ul>
<li><a href="#scope%E8%AF%A6%E8%A7%A3">scope详解</a></li>
</ul>
</li>
<li><a href="#%E5%B8%B8%E8%A7%81%E9%94%99%E8%AF%AF">常见错误</a>
<ul>
<li><a href="#since-maven-381-http-repositories-are-blocked">Since Maven 3.8.1 http repositories are blocked.</a></li>
<li><a href="#could-not-find-artifact-orgspringframeworkbootspring-boot-starter-parentpom320release-in-central">Could not find artifact org.springframework.boot:spring-boot-starter-parent:pom:3.2.0.RELEASE in central</a></li>
</ul>
</li>
</ul>
</li>
</ul>`,r:{minutes:12.25,words:3674},y:"a",t:"Maven--java包管理工具",i:"lightbulb"},["/tools/Maven--java包管理工具.html","/tools/Maven--java包管理工具.md",":md"]],["v-775875fc","/tools/Poetry--python%E5%8C%85%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7.html",{d:1730220137e3,e:`<h1> Poetry--python包管理工具</h1>
<p>https://blog.csdn.net/Python966/article/details/134134702</p>
`,r:{minutes:.04,words:11},y:"a",t:"Poetry--python包管理工具",i:"lightbulb"},["/tools/Poetry--python包管理工具.html","/tools/Poetry--python包管理工具.md",":md"]],["v-fccae644","/tools/photoshop.html",{d:1730220137e3,e:`<h1> Photoshop</h1>
<h2> 图层选择快捷键 Ctrl + t</h2>
`,r:{minutes:.03,words:10},y:"a",t:"Photoshop"},[":md"]],["v-62eb8a96","/cs/code/quick_recovery.html",{d:1736562259e3,e:`<h1> 快速恢复30题</h1>
<ul>
<li>1.链表（5题）
<ul>
<li>206 反转链表</li>
<li>92 反转链表 II</li>
<li>25 K个一组翻转链表</li>
<li>142 环形链表 II</li>
<li>143 重排链表</li>
</ul>
</li>
<li>2.动态规划（5题）
<ul>
<li>70 爬楼梯</li>
<li>1143 最长公共子序列</li>
<li>64 最小路径和</li>
<li>5 最长回文子串</li>
<li>300 最长上升子序列</li>
</ul>
</li>
<li>3.树（3题）
<ul>
<li>102 二叉树的层次遍历</li>
<li>103 二叉树的锯齿形层序遍历</li>
<li>236 二叉树的最近公共祖先</li>
</ul>
</li>
<li>4.DFS（3题）
<ul>
<li>46 全排列</li>
<li>51 N皇后</li>
<li>200 岛屿数量</li>
</ul>
</li>
<li>5.BFS（3题）
<ul>
<li>1926 迷宫中离入口最近的出口</li>
<li>210 课程表 II</li>
<li>127 单词接龙</li>
</ul>
</li>
<li>6.队列/堆（1题）
<ul>
<li>239 滑动窗口最大值（方法一：单调队列，方法二：优先队列/堆）</li>
</ul>
</li>
<li>7.栈（3题）
<ul>
<li>739 每日温度 (方法：单调栈)</li>
<li>155 最小栈</li>
<li>224 基本计算器（方法：计算器=多位数+加减+乘除+括号）</li>
</ul>
</li>
<li>8.哈希表（2题）
<ul>
<li>3 无重复字符的最长子串（滑动窗口+哈希）</li>
<li>146 LRU 缓存</li>
</ul>
</li>
<li>9.二分查找（1题）
<ul>
<li>33 旋转过的排序数组</li>
</ul>
</li>
<li>10.排序（4题）
<ul>
<li>56 合并区间</li>
<li>215 数组中的第K个最大元素（编程实现 O(n) 时间复杂度内找到一组数据的第 K 大元素）</li>
<li>912 排序数组（用于练习O(nlogn)的排序）-练习2种排序：快排/归并排序</li>
</ul>
</li>
</ul>`,r:{minutes:1.15,words:346},y:"a",t:"快速恢复30题",i:"lightbulb"},[":md"]],["v-d2057044","/cs/code/%E5%A4%9A%E5%B1%82%E8%BF%B7%E5%AE%AB.html",{d:1736496376e3,e:`<h1> 多层迷宫</h1>
<h2> 题目</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Description

You are trapped in a 3D dungeon and need to find the quickest way out! The dungeon is composed of unit cubes which may or may not be filled with rock. It takes one minute to move one unit north, south, east, west, up or down. You cannot move diagonally and the maze is surrounded by solid rock on all sides.

Is an escape possible? If yes, how long will it take?

Input

The input consists of a number of dungeons. Each dungeon description starts with a line containing three integers L, R and C (all limited to 30 in size).
L is the number of levels making up the dungeon.
R and C are the number of rows and columns making up the plan of each level.
Then there will follow L blocks of R lines each containing C characters. Each character describes one cell of the dungeon. A cell full of rock is indicated by a '#' and empty cells are represented by a '.'. Your starting position is indicated by 'S' and the exit by the letter 'E'. There's a single blank line after each level. Input is terminated by three zeroes for L, R and C.

Output

Each maze generates one line of output. If it is possible to reach the exit, print a line of the form
Escaped in x minute(s).

where x is replaced by the shortest time it takes to escape.
If it is not possible to escape, print the line
Trapped!
Sample Input

3 4 5
S....
.###.
.##..
###.#

#####
#####
##.##
##...

#####
#####
#.###
####E

1 3 3
S##
#E#
###

0 0 0
Sample Output

Escaped in 11 minute(s).
Trapped!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.93,words:579},y:"a",t:"多层迷宫",i:"lightbulb"},["/cs/code/多层迷宫.html","/cs/code/多层迷宫.md",":md"]],["v-43972504","/cs/code/%E7%AE%97%E6%B3%95%E6%8F%90%E5%8D%87.html",{d:1730220137e3,e:`<h1> 算法提升</h1>
<h1> 刷题（持续练习，刻意练习不熟悉的数据结构和算法，反复回顾）</h1>
<p>刷算法 <br>
1.限时10分钟想思路，如果想不出来直接看题解，节省时间，试着根据题解写代码，还写不出来，直接看题解代码，理解后复现 <br>
2.重复刷题：时间久了会生疏，需重复刷找回记忆 <br>
3.写解题报告 <br>
写解题步骤，供忘记了快速想起来，减少重复刷题的遍数 <br></p>
<p>Note:面试时，注重沟通和交流，把面试官当作之后的同事伙伴，一起交流问题 <br>
题库：力扣 <br>
做题：把所有想到的方法过一遍，<strong>时刻想到时空复杂度</strong>，选择时空复杂度最优的 <br>
关键：3分学，7分练，动手写，总结自己的代码模板 <br>
合格程序员的第一步：算法和数据结构 <br>
 <br>
1.看题，边界范围，可通过范围知道可能的解法（询问题目细节，边界条件，可能的极端错误情况） <br>
2.想尽可能多的解，找到最佳解（所有可能的解法都和面试官沟通一遍） <br>
3.代码实现 <br>
4.学习别人的代码 <br>
 <br></p>`,r:{minutes:2.04,words:612},y:"a",t:"算法提升",i:"lightbulb"},["/cs/code/算法提升.html","/cs/code/算法提升.md",":md"]],["v-0f689b5e","/cs/code/%E7%BB%8F%E5%85%B8%E9%A2%98%E6%B1%87%E6%80%BB%EF%BC%88%E6%AF%8F%E4%B8%AA%E7%BB%86%E5%88%86%E7%B1%BB%E9%99%90%E5%AE%9A10%E9%A2%98%E4%BB%A5%E5%86%85%EF%BC%89.html",{d:1730220137e3,e:`<h1> 经典题汇总（每个细分类限定10题以内）</h1>
<p>%代表做不出来的次数<br>
&amp;代表做出来的次数</p>
<ul>
<li><a href="#%E7%BB%8F%E5%85%B8%E9%A2%98%E6%B1%87%E6%80%BB%E6%AF%8F%E4%B8%AA%E7%BB%86%E5%88%86%E7%B1%BB%E9%99%90%E5%AE%9A10%E9%A2%98%E4%BB%A5%E5%86%85">经典题汇总（每个细分类限定10题以内）</a></li>
<li><a href="#%E6%95%B0%E7%BB%84">数组</a></li>
<li><a href="#%E5%8F%8C%E6%8C%87%E9%92%88%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3">双指针&amp;滑动窗口</a></li>
<li><a href="#%E9%93%BE%E8%A1%A8">链表</a></li>
<li><a href="#%E6%A0%91">树</a>
<ul>
<li><a href="#%E7%BA%BF%E6%AE%B5%E6%A0%91">线段树</a></li>
</ul>
</li>
<li><a href="#%E5%9B%BE">!图</a>
<ul>
<li><a href="#dfs">DFS</a>
<ul>
<li><a href="#%E5%9B%9E%E6%BA%AF%E5%88%87%E8%AE%B0%E5%B0%86%E6%96%B0%E7%94%9F%E6%88%90%E7%9A%84curlist%E6%94%BE%E5%85%A5res%E6%97%B6%E8%A6%81%E5%88%9B%E5%BB%BA%E6%96%B0%E7%9A%84list%E5%8D%B3resaddnew-arraylistcurlist%E4%B8%8D%E7%84%B6%E5%B0%B1%E4%BC%9A%E8%A2%AB%E6%94%B9%E6%8E%89">回溯（切记：将新生成的curList放入res时，要创建新的list，即res.add(new ArrayList(curList))，不然就会被改掉）</a></li>
<li><a href="#%E5%B9%B6%E6%9F%A5%E9%9B%86%E5%B9%B6%E6%9F%A5%E9%9B%86%E8%83%BD%E5%81%9A%E7%9A%84%E9%A2%98%E4%B9%9F%E5%8F%AF%E4%BB%A5%E7%94%A8dfs%E6%88%96bfs%E5%81%9A%E6%88%91%E9%80%89%E6%8B%A9%E7%94%A8dfs%E6%9D%A5%E5%81%9A">并查集（并查集能做的题，也可以用DFS或BFS做，我选择用DFS来做）</a></li>
</ul>
</li>
<li><a href="#bfs%E5%A6%82%E6%9E%9C%E5%9B%BE%E6%98%AF%E7%9F%A9%E9%98%B5%E5%BE%80%E4%B8%8A%E4%B8%8B%E5%B7%A6%E5%8F%B34%E4%B8%AA%E6%96%B9%E5%90%91%E7%A7%BB%E5%8A%A8%E6%9C%80%E5%A5%BD%E7%94%A8for%E5%BE%AA%E7%8E%AF%E5%AE%9E%E7%8E%B0%E8%80%8C%E4%B8%8D%E6%98%AF%E5%86%994%E6%AC%A1%E7%9B%B8%E4%BC%BC%E7%9A%84%E4%BB%A3%E7%A0%81">BFS（如果图是矩阵，往上下左右4个方向移动，最好用for循环实现，而不是写4次相似的代码）</a></li>
<li><a href="#%E6%8B%93%E6%89%91%E6%8E%92%E5%BA%8F">拓扑排序</a></li>
</ul>
</li>
<li><a href="#%E6%A0%88%E5%8D%95%E8%B0%83%E6%A0%88">!栈&amp;单调栈</a></li>
<li><a href="#%E9%98%9F%E5%88%97">队列</a></li>
<li><a href="#%E5%A0%86">堆</a></li>
<li><a href="#%E5%93%88%E5%B8%8C%E8%A1%A8">哈希表</a></li>
<li><a href="#%E6%A8%A1%E6%8B%9F%E6%9E%9A%E4%B8%BE">模拟/枚举</a></li>
<li><a href="#%E9%80%92%E5%BD%92">递归</a></li>
<li><a href="#%E6%8E%92%E5%BA%8F">排序</a></li>
<li><a href="#%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE%E7%BB%86%E8%8A%82%E5%BE%88%E9%9A%BE%E6%8A%8A%E6%8F%A1%E5%A4%9A%E7%BB%83">二分查找(细节很难把握，多练)</a></li>
<li><a href="#%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E8%B4%AA%E5%BF%83%E8%83%BD%E7%94%A8%E8%B4%AA%E5%BF%83%E6%B1%82%E8%A7%A3%E7%9A%84%E4%B8%80%E5%AE%9A%E8%83%BD%E7%94%A8%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92">动态规划（贪心：能用贪心求解的一定能用动态规划）</a></li>
<li><a href="#%E8%B4%AA%E5%BF%83%E5%8C%BA%E9%97%B4%E9%9B%86%E5%90%88">贪心&amp;区间集合</a></li>
<li><a href="#%E5%AD%97%E7%AC%A6%E4%B8%B2">字符串</a></li>
<li><a href="#%E6%95%B0%E5%AD%A6">数学</a>
<ul>
<li><a href="#%E5%BF%AB%E9%80%9F%E5%B9%82">快速幂</a></li>
<li><a href="#%E4%BC%97%E6%95%B0%E6%91%A9%E5%B0%94%E6%8A%95%E7%A5%A8%E6%B3%95">众数（摩尔投票法）</a></li>
</ul>
</li>
<li><a href="#%E4%BD%8D%E8%BF%90%E7%AE%97">位运算</a></li>
</ul>`,r:{minutes:10.76,words:3228},y:"a",t:"经典题汇总（每个细分类限定10题以内）",i:"lightbulb"},["/cs/code/经典题汇总（每个细分类限定10题以内）.html","/cs/code/经典题汇总（每个细分类限定10题以内）.md",":md"]],["v-157caa3e","/java/basic/Java8%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html",{d:1730220137e3,e:`<h1> Java8学习笔记</h1>
<ul>
<li><a href="#java8%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0">Java8学习笔记</a></li>
<li><a href="#%E4%B8%80%E8%A1%8C%E4%B8%BA%E5%8F%82%E6%95%B0%E5%8C%96">一、行为参数化</a></li>
<li><a href="#%E4%BA%8Clambda%E8%A1%A8%E8%BE%BE%E5%BC%8F">二、Lambda表达式</a></li>
<li><a href="#%E4%B8%89%E5%87%BD%E6%95%B0%E5%BC%8F%E6%8E%A5%E5%8F%A3">三、函数式接口</a></li>
<li><a href="#%E5%9B%9B%E6%96%B9%E6%B3%95%E5%BC%95%E7%94%A8">四、方法引用</a></li>
<li><a href="#%E4%BA%94stream-api">五、Stream API</a></li>
<li><a href="#%E5%85%ADoptional%E7%B1%BB">六、Optional类</a></li>
<li><a href="#%E4%B8%83%E4%B8%BE%E4%BE%8B">七、举例</a></li>
<li><a href="#50jdk18-%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B%E6%96%B0%E7%89%B9%E6%80%A7-">50.JDK1.8 都有哪些新特性？ </a></li>
<li><a href="#51lambda-%E8%A1%A8%E8%BE%BE%E5%BC%8F%E4%BA%86%E8%A7%A3%E5%A4%9A%E5%B0%91">51.Lambda 表达式了解多少？</a></li>
<li><a href="#52optional-%E4%BA%86%E8%A7%A3%E5%90%97">52.Optional 了解吗？</a></li>
<li><a href="#53stream-%E6%B5%81%E7%94%A8%E8%BF%87%E5%90%97">53.Stream 流用过吗？</a></li>
</ul>`,r:{minutes:13.94,words:4183},y:"a",t:"Java8学习笔记",i:"lightbulb"},["/java/basic/Java8学习笔记.html","/java/basic/Java8学习笔记.md",":md"]],["v-4af0c92c","/java/basic/%E5%9F%BA%E7%A1%80.html",{d:1730220137e3,e:`<h1> 基础</h1>
<ul>
<li><a href="#%E5%9F%BA%E7%A1%80">基础</a></li>
<li><a href="#%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1">面向对象</a>
<ul>
<li><a href="#1java-%E8%AF%AD%E8%A8%80%E6%9C%89%E5%93%AA%E4%BA%9B%E7%89%B9%E7%82%B9">1、Java 语言有哪些特点？</a></li>
<li><a href="#2%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1">2、面向对象</a>
<ul>
<li><a href="#1%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E4%B8%8E%E9%9D%A2%E5%90%91%E8%BF%87%E7%A8%8B%E5%A4%84%E7%90%86%E9%97%AE%E9%A2%98%E7%9A%84%E4%B8%8D%E5%90%8C%E8%A7%92%E5%BA%A6">（1）面向对象与面向过程（处理问题的不同角度）</a></li>
<li><a href="#2%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E4%B8%89%E5%A4%A7%E7%89%B9%E6%80%A7%E5%B0%81%E8%A3%85%E7%BB%A7%E6%89%BF%E5%A4%9A%E6%80%81">（2）面向对象三大特性：封装、继承、多态</a></li>
<li><a href="#3%E5%B0%81%E8%A3%85">（3）封装</a>
<ul>
<li><a href="#%E8%AE%BF%E9%97%AE%E4%BF%AE%E9%A5%B0%E7%AC%A6">访问修饰符</a></li>
</ul>
</li>
<li><a href="#4%E7%BB%A7%E6%89%BF">（4）继承</a></li>
<li><a href="#5%E5%A4%9A%E6%80%81">（5）多态</a>
<ul>
<li><a href="#%E9%87%8D%E8%BD%BD%E4%B8%8E%E9%87%8D%E5%86%99">重载与重写</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#3%E6%8E%A5%E5%8F%A3%E4%B8%8E%E6%8A%BD%E8%B1%A1%E7%B1%BB">3、接口与抽象类</a></li>
<li><a href="#4object%E7%B1%BB%E7%9A%84%E6%96%B9%E6%B3%95">4、Object类的方法</a></li>
<li><a href="#5final%E5%85%B3%E9%94%AE%E5%AD%97">5、final关键字</a></li>
<li><a href="#6finalfinallyfinalize%E7%9A%84%E5%8C%BA%E5%88%AB">6、final、finally、finalize的区别</a></li>
<li><a href="#7%E4%B8%8Eequals">7、==与equals</a></li>
<li><a href="#8hashcode%E4%B8%8Eequals">8、hashCode与equals</a></li>
<li><a href="#9%E6%B7%B1%E6%8B%B7%E8%B4%9D%E4%B8%8E%E6%B5%85%E6%8B%B7%E8%B4%9D">9、深拷贝与浅拷贝</a></li>
<li><a href="#10java%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E5%BC%8F">10、Java创建对象的方式</a></li>
<li><a href="#11new%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1%E7%9A%84%E8%BF%87%E7%A8%8B%E4%BA%86%E8%A7%A3%E5%90%97">11、new创建对象的过程了解吗？</a></li>
<li><a href="#12%E5%8F%8D%E5%B0%84%E6%9C%BA%E5%88%B6">12、反射机制</a></li>
<li><a href="#13%E5%BA%8F%E5%88%97%E5%8C%96">13、序列化</a>
<ul>
<li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E5%BA%8F%E5%88%97%E5%8C%96%E4%BB%80%E4%B9%88%E6%98%AF%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96">什么是序列化？什么是反序列化？</a></li>
<li><a href="#%E8%AF%B4%E8%AF%B4%E6%9C%89%E5%87%A0%E7%A7%8D%E5%BA%8F%E5%88%97%E5%8C%96%E6%96%B9%E5%BC%8F">说说有几种序列化方式？</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B">数据类型</a>
<ul>
<li><a href="#1java%E6%9C%89%E5%93%AA%E4%BA%9B%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B">1、Java有哪些数据类型</a></li>
<li><a href="#2%E8%87%AA%E5%8A%A8%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2%E5%BC%BA%E5%88%B6%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2">2、自动类型转换&amp;强制类型转换</a></li>
<li><a href="#3%E8%87%AA%E5%8A%A8%E6%8B%86%E7%AE%B1%E8%87%AA%E5%8A%A8%E8%A3%85%E7%AE%B1">3、自动拆箱&amp;自动装箱</a></li>
<li><a href="#4switch-case%E7%9A%84%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8F%AF%E4%BB%A5%E6%98%AF%E4%BB%80%E4%B9%88%E7%B1%BB%E5%9E%8B">4、switch case的表达式可以是什么类型？</a></li>
<li><a href="#5string-%E7%B1%BB%E5%8F%AF%E4%BB%A5%E8%A2%AB%E7%BB%A7%E6%89%BF%E5%90%97">5、String 类可以被继承吗？</a></li>
<li><a href="#6stringstringbuffer%E4%B8%8Estringbuilder">6、String、StringBuffer与StringBuilder</a></li>
<li><a href="#7string-str1--new-stringabc%E5%92%8C-string-str2--abc-%E7%9A%84%E5%8C%BA%E5%88%AB">7、String str1 = new String("abc")和 String str2 = "abc" 的区别？</a></li>
<li><a href="#8%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%8B%BC%E6%8E%A5jdk18%E4%BC%98%E5%8C%96">8、字符串拼接jdk1.8优化</a></li>
<li><a href="#9integer-a-127integer-b--127integer-c-128integer-d--128%E7%9B%B8%E7%AD%89%E5%90%97">9、Integer a= 127，Integer b = 127；Integer c= 128，Integer d = 128；，相等吗?</a></li>
<li><a href="#10double%E4%B8%8Ebigdecimal">10、double与BigDecimal</a></li>
<li><a href="#11%E6%B3%9B%E5%9E%8B%E7%B1%BB%E5%9E%8B%E5%8F%82%E6%95%B0%E5%8C%96">11、泛型（类型参数化）</a></li>
</ul>
</li>
<li><a href="#%E5%BC%82%E5%B8%B8">异常</a>
<ul>
<li><a href="#1java%E4%B8%AD%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86%E4%BD%93%E7%B3%BB">1、Java中异常处理体系</a></li>
<li><a href="#2%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86%E6%96%B9%E5%BC%8F">2、异常处理方式</a></li>
<li><a href="#3%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86%E8%A6%81%E7%82%B9">3、异常处理要点</a></li>
<li><a href="#4%E4%B8%89%E9%81%93%E7%BB%8F%E5%85%B8%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86%E4%BB%A3%E7%A0%81%E9%A2%98">4、三道经典异常处理代码题</a></li>
</ul>
</li>
</ul>`,r:{minutes:24.5,words:7350},y:"a",t:"基础",i:"lightbulb"},["/java/basic/基础.html","/java/basic/基础.md",":md"]],["v-f2bf4518","/java/basic/%E9%9B%86%E5%90%88.html",{d:1730220137e3,e:`<h1> 集合</h1>
<ul>
<li><a href="#%E9%9B%86%E5%90%88">集合</a></li>
<li><a href="#%E4%BA%8C%E9%9B%86%E5%90%88">二、集合</a>
<ul>
<li><a href="#%E4%B8%80comparator%E4%B8%8Ecomparable%E5%AE%9E%E7%8E%B0%E8%87%AA%E5%AE%9A%E4%B9%89%E7%B1%BB%E6%8E%92%E5%BA%8F">（一）Comparator与Comparable实现自定义类排序</a></li>
<li><a href="#%E4%BA%8Clist-%E5%AF%B9%E4%BB%98%E9%A1%BA%E5%BA%8F%E7%9A%84%E5%A5%BD%E5%B8%AE--set-%E6%B3%A8%E9%87%8D%E7%8B%AC%E7%9A%84%E6%80%A7%E8%B4%A8--map-key%E6%9D%A5%E6%90%9C%E7%B4%A2%E7%9A%84%E4%B8%93%E5%AE%B6">（二）List (对付顺序的好帮⼿)  、Set (注重独⼀⽆⼆的性质)  、Map (⽤Key来搜索的专家)</a></li>
<li><a href="#%E4%B8%89arraylist%E5%BA%95%E5%B1%82%E6%98%AFobject%E6%95%B0%E7%BB%84linkedlist%E5%BA%95%E5%B1%82%E6%98%AF%E5%8F%8C%E5%90%91%E9%93%BE%E8%A1%A8%E4%B8%8Evector%E4%BF%9D%E8%AF%81%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%E8%80%8Carraylist%E4%B8%8Elinkedlist%E4%B8%8D%E4%BF%9D%E8%AF%81%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8">（三）ArrayList（底层是Object数组）、LinkedList（底层是双向链表）与Vector（保证线程安全，而ArrayList与LinkedList不保证线程安全）</a></li>
<li><a href="#%E5%9B%9Bhashmaphashtablehashsetconcurrenthashmaplinkedhashmaptreemap">（四）HashMap、Hashtable、HashSet、ConcurrentHashMap、LinkedHashMap、TreeMap</a>
<ul>
<li><a href="#1hashmap%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8">（1）HashMap（⾮线程安全）</a></li>
<li><a href="#2hashtable%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%E6%98%AF%E5%85%A8%E8%A1%A8%E9%94%81%E6%80%A7%E8%83%BD%E5%B7%AE-%E5%9F%BA%E6%9C%AC%E8%A2%AB%E6%B7%98%E6%B1%B0">（2）HashTable（线程安全，是全表锁，性能差， 基本被淘汰）</a></li>
<li><a href="#3hashset%E5%BA%95%E5%B1%82%E5%B0%B1%E6%98%AF%E5%9F%BA%E4%BA%8Ehashmap%E5%AE%9E%E7%8E%B0%E7%9A%84%E6%A3%80%E6%9F%A5%E9%87%8D%E5%A4%8D%E6%97%B6%E5%85%88%E7%94%A8hashcode%E5%90%8E%E7%94%A8equals">（3）HashSet（底层就是基于HashMap实现的，检查重复时，先用hashcode()，后用equals()）</a></li>
<li><a href="#4concurrenthashmap">（4）ConcurrentHashMap</a></li>
<li><a href="#5linkedhashmap">（5）LinkedHashMap</a></li>
<li><a href="#6treemap-%E7%BA%A2%E6%A0%91%E5%B9%B3%E8%A1%A1%E7%9A%84%E6%8E%92%E5%BA%8F%E5%8F%89%E6%A0%91">（6）TreeMap： 红⿊树(⾃平衡的排序⼆叉树)</a></li>
</ul>
</li>
<li><a href="#%E4%BA%94copyonwritearraylist%E9%81%BF%E5%85%8D%E5%B9%B6%E5%8F%91%E4%BF%AE%E6%94%B9%E5%BC%82%E5%B8%B8">（五）CopyOnWriteArrayList避免并发修改异常</a></li>
<li><a href="#%E5%85%AD%E6%8A%8A%E9%9B%86%E5%90%88%E5%8C%85%E8%A3%85%E6%88%90%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%E7%9A%84">（六）把集合包装成线程安全的</a></li>
</ul>
</li>
</ul>`,r:{minutes:6.51,words:1952},y:"a",t:"集合",i:"lightbulb"},["/java/basic/集合.html","/java/basic/集合.md",":md"]],["v-0bbbc80c","/java/juc/juc.html",{d:1730220137e3,e:`<h1> JUC</h1>
<p><a href="./JUC.pdf">查看PDF文件</a></p>
`,r:{minutes:.03,words:9},y:"a",t:"JUC",i:"lightbulb"},[":md"]],["v-7175977a","/java/jvm/jvm.html",{d:1730220137e3,e:`<h1> JVM</h1>
<p><a href="./JVM.pdf">查看PDF文件</a></p>
`,r:{minutes:.03,words:9},y:"a",t:"JVM",i:"lightbulb"},[":md"]],["v-5a0477de","/java/spring/spring.html",{d:1730220137e3,e:`<h1> Spring</h1>
<p><a href="./Spring.pdf">查看PDF文件</a></p>
`,r:{minutes:.03,words:9},y:"a",t:"Spring",i:"lightbulb"},[":md"]],["v-51044ade","/language/topics/careers.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Careers"],e:`<h1> Careers</h1>
`,r:{minutes:6.63,words:1990},y:"a",t:"Careers",i:"lightbulb"},[":md"]],["v-37a74a3e","/language/topics/common.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Common"],e:`<h1> Common</h1>
`,r:{minutes:6.44,words:1931},y:"a",t:"Common",i:"lightbulb"},[":md"]],["v-54b95250","/language/topics/communication.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Communication"],e:`<h1> Communication</h1>
`,r:{minutes:6.18,words:1854},y:"a",t:"Communication",i:"lightbulb"},[":md"]],["v-14d7492e","/language/topics/computers.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Computers"],e:`<h1> Computers</h1>
`,r:{minutes:1.38,words:413},y:"a",t:"Computers",i:"lightbulb"},[":md"]],["v-94444e6e","/language/topics/describing_something.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Describing something"],e:`<h1> Describing something</h1>
`,r:{minutes:.38,words:114},y:"a",t:"Describing something",i:"lightbulb"},[":md"]],["v-73f7931c","/language/topics/dreams.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Dreams and Wishes"],e:`<h1> Dreams and Wishes</h1>
`,r:{minutes:.82,words:247},y:"a",t:"Dreams and Wishes",i:"lightbulb"},[":md"]],["v-45d3c224","/language/topics/graduating.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Graduating"],e:`<h1> Graduating</h1>
`,r:{minutes:1.06,words:317},y:"a",t:"Graduating",i:"lightbulb"},[":md"]],["v-5b7b0868","/language/topics/greetings.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Greetings"],e:`<h1> Greetings</h1>
`,r:{minutes:1.77,words:530},y:"a",t:"Greetings",i:"lightbulb"},[":md"]],["v-10e72e36","/language/topics/hobbies.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Hobbies"],e:`<h1> Hobbies</h1>
`,r:{minutes:3.15,words:944},y:"a",t:"Hobbies",i:"lightbulb"},[":md"]],["v-743566bc","/language/topics/immigration.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Immigration"],e:`<h1> Immigration</h1>
`,r:{minutes:.43,words:130},y:"a",t:"Immigration",i:"lightbulb"},[":md"]],["v-2045e392","/language/topics/introducing_someone.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Introduction"],e:`<h1> Introduction</h1>
`,r:{minutes:4.61,words:1383},y:"a",t:"Introduction",i:"lightbulb"},[":md"]],["v-305c80b8","/language/topics/phone.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Phone and email"],e:`<h1> Phone and email</h1>
`,r:{minutes:1.42,words:425},y:"a",t:"Phone and email",i:"lightbulb"},[":md"]],["v-9f61d83c","/language/topics/routine.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Routine"],e:`<h1> Routine</h1>
`,r:{minutes:1.41,words:424},y:"a",t:"Routine",i:"lightbulb"},[":md"]],["v-54f0115c","/language/topics/time_and_weather.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Time"],e:`<h1> Time &amp; Weather &amp; seasons</h1>
`,r:{minutes:1.87,words:561},y:"a",t:"Time & Weather & seasons",i:"lightbulb"},[":md"]],["v-228608e7","/language/topics/traits.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Traits"],e:`<h1> Traits</h1>
`,r:{minutes:.36,words:108},y:"a",t:"Traits",i:"lightbulb"},[":md"]],["v-181b7599","/llm/agent/agent.html",{d:17064e8,l:"January 28, 2024",c:["LLM"],g:["LLM"],e:`<h1> Agent</h1>
<h2> AI Agent四种设计方式</h2>
<h2> AI Agent4种设计模式</h2>
<p>https://blog.csdn.net/weixin_40774379/article/details/139133605</p>
<h2> 趋势：大语言模型的Agent化</h2>
<p>大语言模型的Agent化，将语言模型转变为具备自主决策和执行能力的智能体。这意味着模型不仅能生成文本，还能理解上下文、制定计划并与外部环境交互，从而执行任务，如自动化客服、数据分析或个人助手等。</p>
<p>大语言模型的Agent化是在大模型本身基础上融合了Agent应用，加入了反思、工具应用等技术元素，使得大语言模型本身就成为一个AI Agent。
从而让大模型多了更多的功能，而不需要普通用户再去考虑复杂的提示词或者再去学习如何添加更多的功能。</p>`,r:{minutes:1.53,words:460},y:"a",t:"Agent",i:"lightbulb"},[":md"]],["v-e204e076","/llm/computer_use/computer_use.html",{d:1730220137e3,e:`<h1> Claude 3.5 Sonnet: Computer use</h1>
`,r:{minutes:1.59,words:478},y:"a",t:"Claude 3.5 Sonnet: Computer use",i:"lightbulb"},[":md"]],["v-be085578","/llm/computer_use/learning_resources.html",{d:1730220137e3,e:`<h1> 学习资源</h1>
<ul>
<li>53ai.com</li>
<li>公众号"王吉伟"</li>
</ul>
`,r:{minutes:.04,words:11},y:"a",t:"学习资源"},[":md"]],["v-cb2232bc","/llm/computer_use/same.html",{d:1730220137e3,e:`<h1> AI Agent操作PC界面</h1>
<h2> 关键词</h2>
<p>RPA (Robotic Process Automation) 机器人流程自动化
RPA Agent<br>
Hyperautomation 超自动化
GUI (graphical user interface) 图形用户界面</p>
<h2> 趋势：大语言模型的Agent化</h2>
<p>大语言模型的Agent化，将语言模型转变为具备自主决策和执行能力的智能体。这意味着模型不仅能生成文本，还能理解上下文、制定计划并与外部环境交互，从而执行任务，如自动化客服、数据分析或个人助手等。</p>
<p>大语言模型的Agent化是在大模型本身基础上融合了Agent应用，加入了反思、工具应用等技术元素，使得大语言模型本身就成为一个AI Agent。
从而让大模型多了更多的功能，而不需要普通用户再去考虑复杂的提示词或者再去学习如何添加更多的功能。</p>`,r:{minutes:8.06,words:2417},y:"a",t:"AI Agent操作PC界面"},[":md"]],["v-0ac6637d","/llm/langchain/langchain.html",{d:17064e8,l:"January 28, 2024",c:["LLM"],g:["LLM"],e:`<h1> 一文带你了解LangChain: 使用大语言模型构建强大的应用程序</h1>
<blockquote>
<p>从架构图入手，一步步带你了解LangChain的方方面面</p>
</blockquote>
<ul>
<li>
<ol>
<li>LangChain是什么</li>
</ol>
</li>
<li>
<ol start="2">
<li>LangChain的架构图告诉了我们什么信息</li>
</ol>
</li>
<li>
<ol start="3">
<li>你不得不知的一些核心模块</li>
</ol>
</li>
<li>
<ol start="4">
<li>通过简单的示例代码感受下各模块的作用</li>
</ol>
</li>
</ul>
`,r:{minutes:5.65,words:1696},y:"a",t:"一文带你了解LangChain: 使用大语言模型构建强大的应用程序",i:"lightbulb"},[":md"]],["v-4fede924","/llm/langchain/langchain1.html",{d:1730220137e3,y:"a",t:""},[":md"]],["v-530d2aeb","/llm/langchain/langchain_source_code.html",{d:17064864e5,l:"January 29, 2024",c:["LLM"],g:["LLM"],e:`<h1> 从源码视角，窥探LangChain的运行逻辑</h1>
<blockquote>
<p>通过解读Chain的源码和AgentExecutor的源码，带你了解各个模块是如何关联在一起的</p>
</blockquote>
<ul>
<li>
<ol>
<li>LangChain的基类</li>
</ol>
</li>
<li>
<ol start="2">
<li>LCEL与Runnable</li>
</ol>
</li>
<li>
<ol start="3">
<li>Chain</li>
</ol>
</li>
<li>
<ol start="4">
<li>AgentExecutor</li>
</ol>
</li>
</ul>
`,r:{minutes:5.34,words:1602},y:"a",t:"从源码视角，窥探LangChain的运行逻辑",i:"lightbulb"},[":md"]],["v-0ea70910","/llm/langchain/langgraph.html",{d:17064e8,l:"January 28, 2024",c:["LLM"],g:["LLM"],e:`<h1> LangGraph: 复杂 Agent 开发框架</h1>
`,r:{minutes:.09,words:27},y:"a",t:"LangGraph: 复杂 Agent 开发框架",i:"lightbulb"},[":md"]],["v-a137010a","/llm/langchain/langsmith.html",{d:17064e8,l:"January 28, 2024",c:["LLM"],g:["LLM"],e:`<h1> LangSmith: 使用大语言模型构建强大的应用程序</h1>
`,r:{minutes:.29,words:87},y:"a",t:"LangSmith: 使用大语言模型构建强大的应用程序",i:"lightbulb"},[":md"]],["v-5e3adc79","/llm/langchain/streamlit.html",{d:17084736e5,l:"February 21, 2024",c:["LLM"],g:["LLM"],e:`<h1> streamlit构建对话式应用程序</h1>
<ul>
<li>
<ol>
<li>构建对话界面所需的组件</li>
</ol>
</li>
<li>
<ol start="2">
<li>对话界面完整流程</li>
</ol>
</li>
<li>
<ol start="3">
<li>流式输出assistant消息的改造</li>
</ol>
</li>
<li>
<ol start="4">
<li>构建封装ChatGPT的应用</li>
</ol>
</li>
</ul>
`,r:{minutes:1.9,words:570},y:"a",t:"streamlit构建对话式应用程序",i:"lightbulb"},[":md"]],["v-7e750b23","/llm/llm/langchain.html",{d:17064e8,l:"January 28, 2024",c:["LLM"],g:["LLM"],e:`<h1> 一文带你了解LangChain: 使用大语言模型构建强大的应用程序</h1>
<blockquote>
<p>从架构图入手，一步步带你了解LangChain的方方面面</p>
</blockquote>
<ul>
<li>
<ol>
<li>LangChain是什么</li>
</ol>
</li>
<li>
<ol start="2">
<li>LangChain的架构图告诉了我们什么信息</li>
</ol>
</li>
<li>
<ol start="3">
<li>你不得不知的一些核心模块</li>
</ol>
</li>
<li>
<ol start="4">
<li>通过简单的示例代码感受下各模块的作用</li>
</ol>
</li>
</ul>
`,r:{minutes:5.67,words:1702},y:"a",t:"一文带你了解LangChain: 使用大语言模型构建强大的应用程序",i:"lightbulb"},[":md"]],["v-5820ecde","/llm/llm/langchain_source_code.html",{d:17064864e5,l:"January 29, 2024",c:["LLM"],g:["LLM"],e:`<h1> 从源码视角，窥探LangChain的运行逻辑</h1>
<blockquote>
<p>通过解读Chain的源码和AgentExecutor的源码，带你了解各个模块是如何关联在一起的</p>
</blockquote>
<ul>
<li>
<ol>
<li>LangChain的基类</li>
</ol>
</li>
<li>
<ol start="2">
<li>LCEL与Runnable</li>
</ol>
</li>
<li>
<ol start="3">
<li>Chain</li>
</ol>
</li>
<li>
<ol start="4">
<li>AgentExecutor</li>
</ol>
</li>
</ul>
`,r:{minutes:5.34,words:1602},y:"a",t:"从源码视角，窥探LangChain的运行逻辑",i:"lightbulb"},[":md"]],["v-6d60977e","/llm/llm/llama.html",{d:17172e8,l:"June 1, 2024",c:["LLM"],g:["LLM"],e:`<h1> Llama源码解读</h1>
<ul>
<li>
<ol>
<li>About</li>
</ol>
</li>
<li>
<ol start="2">
<li>模型总体架构</li>
</ol>
</li>
<li>
<ol start="3">
<li>超参数</li>
</ol>
</li>
<li>
<ol start="4">
<li>张量维度转换</li>
</ol>
</li>
<li>
<ol start="5">
<li>可训练参数量</li>
</ol>
</li>
<li>
<ol start="6">
<li>源码</li>
</ol>
</li>
</ul>
`,r:{minutes:5.86,words:1757},y:"a",t:"Llama源码解读",i:"lightbulb"},[":md"]],["v-4f165190","/llm/llm/llama_advanced.html",{d:17172e8,l:"June 1, 2024",c:["LLM"],g:["LLM"],e:`<h1> Llama进阶</h1>
<ul>
<li>
<ol>
<li>LayerNorm(Layer Normalization，层归一化)</li>
</ol>
</li>
<li>
<ol start="2">
<li>Attention</li>
</ol>
</li>
<li>
<ol start="3">
<li>超参数</li>
</ol>
</li>
<li>
<ol start="4">
<li>张量维度转换</li>
</ol>
</li>
<li>
<ol start="5">
<li>可训练参数量</li>
</ol>
</li>
<li>
<ol start="6">
<li>源码</li>
</ol>
</li>
</ul>
`,r:{minutes:5.02,words:1507},y:"a",t:"Llama进阶",i:"lightbulb"},[":md"]],["v-2a21b47c","/llm/llm/llm_summary.html",{d:17188416e5,l:"June 20, 2024",c:["LLM"],g:["LLM"],e:`<h1> LLM汇总</h1>
<ul>
<li>
<ol>
<li>LLM性能评估平台</li>
</ol>
</li>
<li>
<ol start="2">
<li>LLM组织和模型</li>
</ol>
</li>
</ul>
`,r:{minutes:2.76,words:829},y:"a",t:"LLM汇总",i:"lightbulb"},[":md"]],["v-5c2cf7c2","/llm/llm/streamlit.html",{d:17084736e5,l:"February 21, 2024",c:["LLM"],g:["LLM"],e:`<h1> streamlit构建对话式应用程序</h1>
<ul>
<li>
<ol>
<li>构建对话界面所需的组件</li>
</ol>
</li>
<li>
<ol start="2">
<li>对话界面完整流程</li>
</ol>
</li>
<li>
<ol start="3">
<li>流式输出assistant消息的改造</li>
</ol>
</li>
<li>
<ol start="4">
<li>构建封装ChatGPT的应用</li>
</ol>
</li>
</ul>
`,r:{minutes:1.9,words:570},y:"a",t:"streamlit构建对话式应用程序",i:"lightbulb"},[":md"]],["v-a54f7fc6","/llm/llm/transformer.html",{d:17165088e5,l:"May 24, 2024",c:["LLM"],g:["LLM"],e:`<h1> Transformer源码解读</h1>
<ul>
<li>
<ol>
<li>About</li>
</ol>
</li>
<li>
<ol start="2">
<li>模型总体架构</li>
</ol>
</li>
<li>
<ol start="3">
<li>超参数</li>
</ol>
</li>
<li>
<ol start="4">
<li>张量维度转换</li>
</ol>
</li>
<li>
<ol start="5">
<li>可训练参数量</li>
</ol>
</li>
<li>
<ol start="6">
<li>源码</li>
</ol>
</li>
</ul>
`,r:{minutes:24.4,words:7321},y:"a",t:"Transformer源码解读",i:"lightbulb"},[":md"]],["v-30abaebb","/llm/rag/rag_opensource.html",{d:1733965976e3,e:`<h1> RAG Open Source</h1>
<p>Note：着重关注多模态RAG</p>
<h2> 信息汇总</h2>
<h2> 很重要（按这个写博客）</h2>
<p>每天看2篇论文：
https://huggingface.co/papers</p>
<p>https://github.com/togethercomputer/together-cookbook</p>
<h3> intro-llm-rag(教学)</h3>
<p>https://github.com/zahaby/intro-llm-rag</p>
<h3> RAG_Techniques(教学)</h3>
<p>https://github.com/NirDiamant/RAG_Techniques</p>`,r:{minutes:1.43,words:429},y:"a",t:"RAG Open Source"},[":md"]],["v-c4f0754c","/middleware/graphql/GraphQL.html",{d:1730220137e3,e:`<h1> GraphQL</h1>
<p><a href="https://hasura.io/learn/graphql/intro-graphql/introduction/" target="_blank" rel="noopener noreferrer">https://hasura.io/learn/graphql/intro-graphql/introduction/</a> <br></p>
<p><a href="https://graphql.cn/learn/" target="_blank" rel="noopener noreferrer">https://graphql.cn/learn/</a> <br></p>`,r:{minutes:.05,words:15},y:"a",t:"GraphQL",i:"lightbulb"},[":md"]],["v-1af18ea2","/middleware/micro_service/MicroService.html",{d:1730220137e3,e:`<h1> 微服务</h1>
<h2> 1、对微服务的理解</h2>
<p>按业务拆分，每个服务只关注一个业务，具有独立性，独立进程，独立部署，独立数据存储</p>
<h2> 2、服务注册与服务发现、以及服务间调用</h2>
<p>相关概念：服务与实例</p>
<p>服务名称：每个服务在服务注册中心的标识，相当于Java中的类名。
服务实例：网络中提供服务的实例，具有IP和端口，相当于Java中的对象，一个实例即为运行在服务器上的一个进
程。</p>
<p>场景：</p>
<p>注册中心（服务端）</p>
<p>服务A有多实例，实现了负载均衡（作为客户端，注册到注册中心）</p>
<p>服务B有多实例，实现了负载均衡（作为客户端，注册到注册中心）</p>`,r:{minutes:5.89,words:1767},y:"a",t:"微服务",i:"lightbulb"},[":md"]],["v-3ff1b585","/middleware/micro_service/MybatisPlus.html",{d:1730220137e3,e:`<h1> Mybatis Plus</h1>
<p>MyBatis-Plus（简称 MP）是一个 MyBatis 的增强工具，在 MyBatis 的基础上只做增强不做改变，为简化开发、提高效率而生。</p>
<p>特性：

架构：
</p>
`,r:{minutes:.18,words:54},y:"a",t:"Mybatis Plus",i:"lightbulb"},[":md"]],["v-0cae3b8e","/middleware/mq/mq.html",{d:1730220137e3,e:`<h1> RocketMQ</h1>
<p><a href="./RocketMQ.pdf">查看PDF文件</a></p>
`,r:{minutes:.03,words:9},y:"a",t:"RocketMQ",i:"lightbulb"},[":md"]],["v-1bc2e808","/middleware/mysql/SQL.html",{d:1730220137e3,e:`<h1> SQL</h1>
<ul>
<li><a href="#sql">SQL</a></li>
<li><a href="#sql-1">SQL</a>
<ul>
<li><a href="#%E5%85%B3%E8%81%94%E6%9F%A5%E8%AF%A2">关联查询</a></li>
<li><a href="#having%E4%B8%8Ewhere">having与where</a></li>
<li><a href="#%E6%B7%BB%E5%8A%A0%E4%B8%80%E5%88%97">添加一列</a></li>
<li><a href="#%E8%81%9A%E5%90%88%E5%87%BD%E6%95%B0">聚合函数</a></li>
<li><a href="#%E7%AA%97%E5%8F%A3%E5%87%BD%E6%95%B0-%E6%B7%BB%E5%8A%A0%E6%8E%92%E5%90%8D%E5%88%97%E6%8E%92%E5%90%8Dtop-n">窗口函数-添加排名列(排名，top n)</a>
<ul>
<li><a href="#%E7%AA%97%E5%8F%A3%E5%87%BD%E6%95%B0-%E5%85%B3%E9%94%AE%E5%AD%97overpartitionorder">窗口函数 关键字：over,partition,order</a></li>
<li><a href="#%E6%8E%92%E5%90%8D-rankdense_rankrow_number">排名 rank,dense_rank,row_number</a></li>
<li><a href="#%E8%81%9A%E5%90%88%E5%87%BD%E6%95%B0%E4%BD%9C%E4%B8%BA%E7%AA%97%E5%8F%A3%E5%87%BD%E6%95%B0">聚合函数作为窗口函数</a></li>
</ul>
</li>
<li><a href="#%E9%A1%BA%E5%BA%8F">顺序</a></li>
<li><a href="#%E5%8E%BB%E9%87%8Ddistinct">去重distinct</a></li>
<li><a href="#%E5%8C%85%E5%90%ABin">包含in</a></li>
<li><a href="#%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%A4%84%E7%90%86">字符串处理</a>
<ul>
<li><a href="#%E5%AD%90%E4%B8%B2-substrstrstart-------substrstrstartlen">子串 substr(str,start)   |    substr(str,start,len)</a></li>
<li><a href="#%E5%AD%90%E4%B8%B2-leftstrlen---rightstrlen">子串 left(str,len)  | right(str,len)</a></li>
<li><a href="#%E5%8F%8D%E8%BD%AC-reversestr">反转 reverse(str)</a></li>
<li><a href="#%E6%8B%BC%E6%8E%A5-concat">拼接 concat</a></li>
</ul>
</li>
<li><a href="#%E6%97%B6%E9%97%B4%E5%A4%84%E7%90%86">时间处理</a>
<ul>
<li><a href="#%E8%AE%A1%E7%AE%97%E6%97%B6%E9%97%B4%E5%B7%AE-timestampdiff%E8%AE%A1%E7%AE%97%E7%B2%92%E5%BA%A6%E5%BC%80%E5%A7%8B%E6%97%B6%E9%97%B4%E7%BB%93%E6%9D%9F%E6%97%B6%E9%97%B4">计算时间差 timestampdiff(计算粒度,开始时间,结束时间)</a></li>
</ul>
</li>
<li><a href="#%E5%9B%9B%E8%88%8D%E4%BA%94%E5%85%A5%E4%B8%8E%E5%8F%96%E6%95%B4">四舍五入与取整</a></li>
</ul>
</li>
<li><a href="#other">other</a>
<ul>
<li><a href="#1distinct%E5%85%B3%E9%94%AE%E5%AD%97%E5%BF%85%E9%A1%BB%E7%9B%B4%E6%8E%A5%E6%94%BE%E5%9C%A8%E5%88%97%E5%90%8D%E7%9A%84%E5%89%8D%E9%9D%A2%E5%85%B3%E9%94%AE%E5%AD%97%E4%BD%9C%E7%94%A8%E4%BA%8E%E6%89%80%E6%9C%89%E8%A6%81%E6%9F%A5%E7%9A%84%E5%88%97-">1.Distinct关键字（必须直接放在列名的前面；关键字作用于所有要查的列） </a></li>
<li><a href="#2%E8%A1%8C%E6%95%B0%E9%99%90%E5%88%B6-">2.行数限制： </a></li>
<li><a href="#3%E6%B3%A8%E9%87%8A-">3.	注释 </a></li>
<li><a href="#4%E6%8E%92%E5%BA%8F-">4.	排序 </a></li>
<li><a href="#5where-">5.	Where </a></li>
<li><a href="#6%E9%80%9A%E9%85%8D%E7%AC%A6%E7%94%A8%E6%9D%A5%E5%8C%B9%E9%85%8D%E5%80%BC%E7%9A%84%E4%B8%80%E9%83%A8%E5%88%86%E7%9A%84%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6-">6.	通配符（用来匹配值的一部分的特殊字符） </a></li>
<li><a href="#7%E6%8B%BC%E6%8E%A5%E5%AD%97%E6%AE%B5-">7.	拼接字段 </a></li>
<li><a href="#8%E8%81%9A%E9%9B%86%E5%87%BD%E6%95%B0-">8.	聚集函数 </a></li>
<li><a href="#9%E5%88%86%E7%BB%84%E6%95%B0%E6%8D%AE-">9.分组数据 </a></li>
<li><a href="#10select%E5%AD%90%E5%8F%A5%E5%8F%8A%E5%85%B6%E9%A1%BA%E5%BA%8F-">10.Select子句及其顺序 </a></li>
<li><a href="#11%E5%AD%90%E6%9F%A5%E8%AF%A2note%E4%BD%9C%E4%B8%BA%E5%AD%90%E6%9F%A5%E8%AF%A2%E7%9A%84select%E8%AF%AD%E5%8F%A5%E5%8F%AA%E8%83%BD%E6%9F%A5%E8%AF%A2%E5%8D%95%E4%B8%AA%E5%88%97%E4%BC%81%E5%9B%BE%E6%A3%80%E7%B4%A2%E5%A4%9A%E4%B8%AA%E5%88%97%E5%B0%86%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E5%AD%90%E6%9F%A5%E8%AF%A2%E5%B8%B8%E7%94%A8%E4%BA%8Ewhere%E5%AD%90%E5%8F%A5%E7%9A%84in%E6%93%8D%E4%BD%9C%E7%AC%A6%E4%B8%AD-">11.子查询（NOTE:作为子查询的SELECT语句只能查询单个列。企图检索多个列将返回错误。子查询常用于where子句的in操作符中） </a></li>
<li><a href="#12%E8%81%94%E7%BB%93%E8%81%94%E7%BB%93%E6%98%AF%E4%B8%80%E7%A7%8D%E6%9C%BA%E5%88%B6%E7%94%A8%E6%9D%A5%E5%9C%A8%E4%B8%80%E6%9D%A1select%E8%AF%AD%E5%8F%A5%E4%B8%AD%E5%85%B3%E8%81%94%E8%A1%A8%E5%9B%A0%E6%AD%A4%E7%A7%B0%E4%B8%BA%E8%81%94%E7%BB%93-">12.	联结（联结是一种机制，用来在一条select语句中关联表，因此称为联结） </a></li>
<li><a href="#13%E7%BB%84%E5%90%88%E6%9F%A5%E8%AF%A2%E4%BD%BF%E7%94%A8union%E5%BE%88%E7%AE%80%E5%8D%95%E6%89%80%E8%A6%81%E5%81%9A%E7%9A%84%E5%8F%AA%E6%98%AF%E7%BB%99%E5%87%BA%E6%AF%8F%E6%9D%A1select%E8%AF%AD%E5%8F%A5%E5%9C%A8%E5%90%84%E6%9D%A1%E8%AF%AD%E5%8F%A5%E4%B9%8B%E9%97%B4%E6%94%BE%E4%B8%8A%E5%85%B3%E9%94%AE%E5%AD%97union-">13.	组合查询（使用union很简单，所要做的只是给出每条select语句，在各条语句之间放上关键字union） </a></li>
<li><a href="#14%E8%A7%86%E5%9B%BE-">14.	视图 </a></li>
<li><a href="#15-%E5%AD%98%E5%82%A8%E8%BF%87%E7%A8%8B-">15. 存储过程 </a></li>
</ul>
</li>
</ul>`,r:{minutes:11.83,words:3548},y:"a",t:"SQL",i:"lightbulb"},[":md"]],["v-e54ef570","/middleware/mysql/mysql.html",{d:1730220137e3,e:`<h1> MySQL</h1>
<p><a href="./MySQL.pdf">查看PDF文件</a></p>
`,r:{minutes:.03,words:9},y:"a",t:"MySQL",i:"lightbulb"},[":md"]],["v-1711ecd4","/middleware/redis/redis.html",{d:1730220137e3,e:`<h1> Redis</h1>
<p><a href="./Redis.pdf">查看PDF文件</a></p>
`,r:{minutes:.03,words:9},y:"a",t:"Redis",i:"lightbulb"},[":md"]],["v-10a57fd4","/operations/docker/Docker.html",{d:1730220137e3,e:`<h1> Docker</h1>
<h1> 运维工作进化论</h1>
<h2> 小试牛刀</h2>
<p> <br>
 <br></p>
<h2> 初露锋芒</h2>
<p> <br>
 <br>
 <br></p>
<h2> 小有名气</h2>
<p> <br>
 <br>
 <br></p>
<h2> 名动一方</h2>
<p> <br>
 <br>
 <br></p>
<h2> 一派宗师</h2>
<p> <br>
 <br></p>
<h2> 千古留名</h2>
<p> <br>
 <br></p>
<h1> 容器</h1>
<h2> 什么是容器</h2>
<p> <br>
 <br>
 <br>
 <br></p>`,r:{minutes:22.53,words:6758},y:"a",t:"Docker",i:"lightbulb"},[":md"]],["v-7a676898","/operations/docker/K8S.html",{d:1730220137e3,e:`<h1> K8S</h1>
<p> <br>
 <br>
 <br></p>
<p>changeset  优点：1.分发  2.复用 <br></p>
`,r:{minutes:.12,words:37},y:"a",t:"K8S",i:"lightbulb"},[":md"]],["v-6492c18a","/operations/linux/linux.html",{d:1730220137e3,e:`<h1> Linux</h1>
<p><a href="./Linux.pdf">查看PDF文件</a></p>
`,r:{minutes:.03,words:9},y:"a",t:"Linux",i:"lightbulb"},[":md"]],["v-6cb78bf8","/python/python/01_python_environment.html",{d:16543872e5,l:"June 5, 2022",c:["Python"],g:["Python"],e:`<h1> 搭建Python开发环境，使用pip进行包管理</h1>
<ul>
<li>
<ol>
<li>适用范围</li>
</ol>
</li>
<li>
<ol start="2">
<li>Python开发环境</li>
</ol>
</li>
<li>
<ol start="3">
<li>包管理工具pip</li>
</ol>
</li>
<li>
<ol start="4">
<li>pip 命令</li>
</ol>
</li>
</ul>
`,r:{minutes:7.38,words:2213},y:"a",t:"搭建Python开发环境，使用pip进行包管理",i:"lightbulb"},[":md"]],["v-03f9b3a9","/python/python/02_python_data_type.html",{d:1654992e6,l:"June 12, 2022",c:["Python"],g:["Python"],e:`<h1> Python的数据类型</h1>
<ul>
<li>
<ol>
<li>数据类型</li>
</ol>
</li>
<li>
<ol start="2">
<li>String操作</li>
</ol>
</li>
<li>
<ol start="3">
<li>List操作</li>
</ol>
</li>
<li>
<ol start="4">
<li>Tuple操作</li>
</ol>
</li>
<li>
<ol start="5">
<li>Set操作</li>
</ol>
</li>
<li>
<ol start="6">
<li>Dictionary操作</li>
</ol>
</li>
</ul>
`,r:{minutes:14.14,words:4241},y:"a",t:"Python的数据类型",i:"lightbulb"},[":md"]],["v-c0b42d56","/python/python/03_python_operator.html",{d:16555104e5,l:"June 18, 2022",c:["Python"],g:["Python"],e:`<h1> Python的运算符</h1>
<ul>
<li>
<ol>
<li>变量与常量</li>
</ol>
</li>
<li>
<ol start="2">
<li>运算符 Operators</li>
</ol>
</li>
<li>
<ol start="3">
<li>注释 Comment</li>
</ol>
</li>
</ul>
`,r:{minutes:3.22,words:967},y:"a",t:"Python的运算符",i:"lightbulb"},[":md"]],["v-5d4edd97","/python/python/04_python_method.html",{d:1655856e6,l:"June 22, 2022",c:["Python"],g:["Python"],e:`<h1> Python的函数</h1>
<ul>
<li>
<ol>
<li>顺序/选择/循环语句</li>
</ol>
</li>
<li>
<ol start="2">
<li>函数 Functions</li>
</ol>
</li>
<li>
<ol start="3">
<li>内置函数 built-in functions</li>
</ol>
</li>
<li>
<ol start="4">
<li>高阶函数</li>
</ol>
</li>
<li>
<ol start="5">
<li>内置高阶函数</li>
</ol>
</li>
</ul>
`,r:{minutes:7.4,words:2220},y:"a",t:"Python的函数",i:"lightbulb"},[":md"]],["v-5e83cd2f","/python/python/05_python_builtin_module.html",{d:16563744e5,l:"June 28, 2022",c:["Python"],g:["Python"],e:`<h1> Python的包与模块</h1>
<ul>
<li>
<ol>
<li>包、模块与__init__.py</li>
</ol>
</li>
<li>
<ol start="2">
<li>Python文件内部</li>
</ol>
</li>
<li>
<ol start="3">
<li>python内置模块</li>
</ol>
</li>
<li>
<ol start="4">
<li>应用</li>
</ol>
</li>
</ul>
`,r:{minutes:8.29,words:2488},y:"a",t:"Python的包与模块",i:"lightbulb"},[":md"]],["v-50f65248","/python/python/06_python_popular_package.html",{d:16568064e5,l:"July 3, 2022",c:["Python"],g:["Python"],e:`<h1> Python受欢迎的第三方包</h1>
<ul>
<li>
<ol>
<li>Numpy</li>
</ol>
</li>
<li>
<ol start="2">
<li>Pandas</li>
</ol>
</li>
<li>
<ol start="3">
<li>Requests</li>
</ol>
</li>
<li>
<ol start="4">
<li>Flask</li>
</ol>
</li>
<li>
<ol start="5">
<li>更多</li>
</ol>
</li>
</ul>
`,r:{minutes:5.08,words:1525},y:"a",t:"Python受欢迎的第三方包",i:"lightbulb"},[":md"]],["v-623af120","/python/pytorch/01_ai_concept.html",{d:16573248e5,l:"July 9, 2022",c:["Pytorch"],g:["Pytorch"],e:`<h1> 人工智能概念解读</h1>
<ul>
<li>
<ol>
<li>机器学习、深度学习与强化学习</li>
</ol>
</li>
<li>
<ol start="2">
<li>有监督学习、半监督学习、无监督学习</li>
</ol>
</li>
<li>
<ol start="3">
<li>在线学习和离线学习</li>
</ol>
</li>
<li>
<ol start="4">
<li>回归，分类与多标签分类</li>
</ol>
</li>
<li>
<ol start="5">
<li>推荐与搜索</li>
</ol>
</li>
</ul>
`,r:{minutes:4.47,words:1342},y:"a",t:"人工智能概念解读",i:"lightbulb"},[":md"]],["v-53146c6c","/python/pytorch/02_neural_net_train.html",{d:16577568e5,l:"July 14, 2022",c:["Pytorch"],g:["Pytorch"],e:`<h1> 神经网络训练要点解读</h1>
<ul>
<li>
<ol>
<li>整体目标</li>
</ol>
</li>
<li>
<ol start="2">
<li>损失函数：量化模型的有效性</li>
</ol>
</li>
<li>
<ol start="3">
<li>优化算法（梯度下降,gradient descent）：调整模型参数以优化目标函数的算法</li>
</ol>
</li>
<li>
<ol start="4">
<li>超参数</li>
</ol>
</li>
</ul>
`,r:{minutes:2.2,words:659},y:"a",t:"神经网络训练要点解读",i:"lightbulb"},[":md"]],["v-29ecd1c4","/python/pytorch/03_pytorch_operation.html",{d:16581024e5,l:"July 18, 2022",c:["Pytorch"],g:["Pytorch"],e:`<h1> 张量Tensor操作</h1>
<ul>
<li>
<ol>
<li>标量，向量，矩阵与张量</li>
</ol>
</li>
<li>
<ol start="2">
<li>初始化张量</li>
</ol>
</li>
<li>
<ol start="3">
<li>张量的属性</li>
</ol>
</li>
<li>
<ol start="4">
<li>张量的基本运算</li>
</ol>
</li>
<li>
<ol start="5">
<li>求和与求平均值</li>
</ol>
</li>
<li>
<ol start="6">
<li>求乘积</li>
</ol>
</li>
<li>
<ol start="7">
<li>求向量的模/范数</li>
</ol>
</li>
<li>
<ol start="8">
<li>求梯度</li>
</ol>
</li>
</ul>
`,r:{minutes:9.7,words:2909},y:"a",t:"张量Tensor操作",i:"lightbulb"},[":md"]],["v-49b144a6","/python/pytorch/04_pytorch_practice_nn.html",{d:16585344e5,l:"July 23, 2022",c:["Pytorch"],g:["Pytorch"],e:`<h1> 使用PyTorch进行深度学习实践</h1>
<ul>
<li>
<ol start="0">
<li>Pytorch的API</li>
</ol>
</li>
<li>
<ol>
<li>数据加载和预处理</li>
</ol>
</li>
<li>
<ol start="2">
<li>定义网络模型</li>
</ol>
</li>
<li>
<ol start="3">
<li>定义损失函数和优化器</li>
</ol>
</li>
<li>
<ol start="4">
<li>训练网络</li>
</ol>
</li>
<li>
<ol start="5">
<li>测试网络</li>
</ol>
</li>
<li>
<ol start="6">
<li>保存和加载模型</li>
</ol>
</li>
<li>
<ol start="7">
<li>GPU加速</li>
</ol>
</li>
<li>
<ol start="8">
<li>使用TensorBoard进行可视化</li>
</ol>
</li>
</ul>
`,r:{minutes:9.06,words:2718},y:"a",t:"使用PyTorch进行深度学习实践",i:"lightbulb"},[":md"]],["v-fcfa8cfa","/python/pytorch/05_linear_nn.html",{d:16590528e5,l:"July 29, 2022",c:["Pytorch"],g:["Pytorch"],e:`<h1> Pytorch实战线性神经网络</h1>
<ul>
<li>
<ol>
<li>Pytorch实现线性回归</li>
</ol>
</li>
<li>
<ol start="2">
<li>Pytorch实现softmax回归</li>
</ol>
</li>
</ul>
`,r:{minutes:8.74,words:2621},y:"a",t:"Pytorch实战线性神经网络",i:"lightbulb"},[":md"]],["v-6243a8a0","/python/pytorch/06_heterogeneous_graph.html",{d:17091648e5,l:"February 29, 2024",c:["Pytorch"],g:["Pytorch"],e:`<h1> PyG Heterogeneous Graph Practice</h1>
<h2> 同构图与异构图</h2>
<figure><figcaption>同构图与异构图</figcaption></figure>
<h3> 同构图</h3>
<p>不区分节点和边的类型，节点和边都只有一种类型</p>
<p>点类型+边类型=2</p>
<p>例如，在社交网络中，可以想象node只有‘人’这一个种类，edge只有‘认识’这一种连接。而人和人要么认识，要么不认识。</p>
<h3> 异构图</h3>
<p>点的类型或边的类型超过一种</p>
<p>点类型+边类型&gt;2</p>
<p>现实世界中，大多数图都是异构图，表示了关于不同类型实体及其不同类型关系的信息。不同类型的点和边的特征表示类型和维度可以不相同。</p>`,r:{minutes:1.92,words:575},y:"a",t:"PyG Heterogeneous Graph Practice",i:"lightbulb"},[":md"]],["v-07b0d73f","/python/pytorch/AI_evolution.html",{d:17084736e5,l:"February 21, 2024",c:["LLM"],g:["LLM"],e:`<h1> AI发展历程</h1>
`,r:{minutes:3.46,words:1039},y:"a",t:"AI发展历程",i:"lightbulb"},[":md"]],["v-47de591e","/cs/code/algorithm/0.%E6%97%B6%E7%A9%BA%E5%A4%8D%E6%9D%82%E5%BA%A6.html",{d:1730220137e3,e:`<h1> 复杂度分析 Complexity Analysis</h1>
<h2> 1. 大O复杂度表示法</h2>
<p>T(n) = O(f(n))</p>
<ul>
<li>T(n)表示代码执行时间</li>
<li>n表示数据规模大小</li>
<li>f(n)表示每行代码执行次数总和</li>
</ul>
<p>表示代码执行时间/所需空间随数据规模增长的变化趋势。</p>
<p>Note：只是表示一种变化趋势，不是具体的执行时间/空间大小。低阶、常量、系数被忽略，只记录最大量级就可以了。</p>
<h2> 2. 复杂度计算</h2>
<ol>
<li>最大值法则（非嵌套代码）：总复杂度等于量级最大的那段代码的复杂度 <br></li>
</ol>`,r:{minutes:5.63,words:1690},y:"a",t:"复杂度分析 Complexity Analysis",i:"lightbulb"},["/cs/code/algorithm/0.时空复杂度.html","/cs/code/algorithm/0.时空复杂度.md",":md"]],["v-75d3a2dc","/cs/code/algorithm/1.%E5%88%86%E6%B2%BB%E6%80%9D%E6%83%B3_%E9%80%92%E5%BD%92%E5%AE%9E%E7%8E%B0.html",{d:1730220137e3,e:`<h1> 分治思想与递归实现</h1>
<h2> 算法的两种实现方式</h2>
<p>正如数据结构中，所有的数据结构都由数组或链表实现。 <br>
Note：数据结构的底层存储只有数组和链表两种 <br>
数组：栈、队列、堆、树、图(邻接矩阵) <br>
链表：栈、队列、堆、树、图(邻接表) <br></p>
<p>在算法中，所有的算法都由迭代或递归实现。 <br>
迭代：可以实现所有算法，所有的递归都可转换为迭代。动态规划可以看做是通过迭代实现分治思想的别称。 <br>
递归：分治思想的算法，也就是有子问题的算法，除了动态规划是自底向上通过迭代实现，其他的算法都是自顶向下，都可用递归实现 <br></p>`,r:{minutes:12.53,words:3760},y:"a",t:"分治思想与递归实现",i:"lightbulb"},["/cs/code/algorithm/1.分治思想_递归实现.html","/cs/code/algorithm/1.分治思想&递归实现.html","/cs/code/algorithm/1.%E5%88%86%E6%B2%BB%E6%80%9D%E6%83%B3&%E9%80%92%E5%BD%92%E5%AE%9E%E7%8E%B0.html","/cs/code/algorithm/1.分治思想&递归实现.md","/cs/code/algorithm/1.%E5%88%86%E6%B2%BB%E6%80%9D%E6%83%B3&%E9%80%92%E5%BD%92%E5%AE%9E%E7%8E%B0.md"]],["v-26125280","/cs/code/algorithm/2.%E4%BA%8C%E8%BF%9B%E5%88%B6_%E4%BD%8D%E8%BF%90%E7%AE%97.html",{d:1730220137e3,e:`<h1> 二进制与位运算</h1>
<p><a href="https://www.runoob.com/w3cnote/bit-operation.html" target="_blank" rel="noopener noreferrer">链接</a> <br>
左移变大 （*2） <br>
右移变小（/2） <br>
奇数（二进制末位是1） <br>
偶数（二进制末位是0） <br>
x&amp;1 == 1   可以判断末位是否是1 <br>
x &gt;&gt;= 1  末位去掉一位 <br></p>
<h2> 位运算</h2>
<p> <br>
基本原理 <br></p>
<p>0s 表示一串 0，1s 表示一串 1。 <br></p>`,r:{minutes:4.23,words:1269},y:"a",t:"二进制与位运算",i:"lightbulb"},["/cs/code/algorithm/2.二进制_位运算.html","/cs/code/algorithm/2.二进制&位运算.html","/cs/code/algorithm/2.%E4%BA%8C%E8%BF%9B%E5%88%B6&%E4%BD%8D%E8%BF%90%E7%AE%97.html","/cs/code/algorithm/2.二进制&位运算.md","/cs/code/algorithm/2.%E4%BA%8C%E8%BF%9B%E5%88%B6&%E4%BD%8D%E8%BF%90%E7%AE%97.md"]],["v-12fb0380","/cs/code/algorithm/3.%E6%8E%92%E5%BA%8F.html",{d:1730220137e3,e:`<h1> 排序</h1>
<h1> 排序算法的分析与评价</h1>
<h2> 执行效率</h2>
<h3> 最好情况、最坏情况、平均情况下的时间复杂度</h3>
<p>对于要排序的数据，有的接近有序，有的完全无序。有序度不同的数据，对于排序的执行时间肯定是有影响的，我们要知道排序算法在不同数据下的性能表现。   <br></p>
<h4> 平均复杂度分析：有序度&amp;逆序度</h4>
<p><strong>有序度：<em><em>是数组中具有有序关系的元素对的个数。 <br>
对于一个倒序排列的数组，比如 6，5，4，3，2，1，有序度是 0；对于一个完全有序的数组，比如 1，2，3，4，5，6，有序度就是1+2+...+(n-1)=n</em>(n-1)/2，也就是 1+2+3+4+5=15。 <br>
<strong>满有序度</strong>：我们把这种完全有序的数组的有序度叫作满有序度。   <br>
 <br>
<strong>逆序度</strong>：定义正好跟有序度相反。 <br>
 <br>
<strong>公式</strong>：<strong>逆序度 = 满有序度 - 有序度</strong> <br>
我们排序的过程就是一种增加有序度，减少逆序度的过程，最后达到满有序度，就说明排序完成了。  <br>
拿冒泡排序的例子来说明。要排序的数组的初始状态是 4，5，6，3， 2，1 ，其中，有序元素对有 (4，5) (4，6)(5，6)，所以有序度是 3。n=6，所以排序完成之后终态的满有序度为 n</em>(n-1)/2=15。   <br>
 <br>
冒泡排序包含两个操作原子，<strong>比较</strong>和</strong>交换**。每交换一次，有序度就加 1。不管算法怎么改 进，<strong>交换次数总是确定的，即为逆序度</strong>，也就是n*(n-1)/2减去初始有序度。 <br>
此例中就是 15– 3=12，要进行 12 次交换操作。 对于包含 n 个数据的数组进行冒泡排序，平均交换次数是多少呢？最坏情况下，初始状态的有序度是 0，所以要进行 n*(n-1)/2 次交换。最好情况下，初始状态的有序度是 n*(n-1)/2，就不需要进行交换。我们可以取个中间值 n*(n-1)/4，来表示初始有序度既不是很高也不是很低的平均情况。 换句话说，平均情况下，需要 n*(n-1)/4 次交换操作，比较操作肯定要比交换操作多，而复杂度的上限是 O(n)，所以平均情况下的时间复杂度就是 O(n)。  <br>
这个平均时间复杂度推导过程其实并不严格，但是很多时候很实用，毕竟概率论的定量分析太复杂，不太好用。 <br></p>`,r:{minutes:23.65,words:7094},y:"a",t:"排序",i:"lightbulb"},["/cs/code/algorithm/3.排序.html","/cs/code/algorithm/3.排序.md",":md"]],["v-5c8fd235","/cs/code/algorithm/4.%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.html",{d:1730220137e3,e:`<h1> 二分查找</h1>
<h2> 对数列的要求</h2>
<ol>
<li>有序的（排好序的，无序的需要提前排序） <br></li>
<li>存在上下界（限定数量或区间范围。否则需要对不定长的边界做处理，来找到明确上下界） <br></li>
<li>能够通过索引访问其中的元素（数组适合，链表非常不适合） <br></li>
<li>不常变动的，不要求动态增删的情形下查找（否则，应采用AVL树，即自平衡的二叉查找树） <br></li>
<li>数据量不能超级大（针对实际应用，要考虑内存限制） <br></li>
</ol>
<p>数据量太大就不适合二分查找了。 <br>
二分查找的底层需要依赖数组这种数据结构，而数组为了支持随机访问的特性，要求内存空 间连续，对内存的要求比较苛刻。比如，我们有 1GB 大小的数据，如果希望用数组来存 储，那就需要 1GB 的连续内存空间。   <br>
注意这里的“连续”二字，也就是说，即便有 2GB 的内存空间剩余，但是如果这剩余的 2GB 内存空间都是零散的，没有连续的 1GB 大小的内存空间，那照样无法申请一个 1GB 大小的数组。而我们的二分查找是作用在数组这种数据结构之上的，所以太大的数据用数组 存储就比较吃力了，也就不能用二分查找了。   <br></p>`,r:{minutes:5.28,words:1583},y:"a",t:"二分查找",i:"lightbulb"},["/cs/code/algorithm/4.二分查找.html","/cs/code/algorithm/4.二分查找.md",":md"]],["v-9ec393a6","/cs/code/algorithm/5.%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92_%E8%B4%AA%E5%BF%83.html",{d:1730220137e3,e:`<h1> 动态规划与贪心</h1>
<p>动态规划适合用来求解最优问题，比如求最大值、最小值等。 <br></p>
<h2> 动态规划基础步骤</h2>
<p> <br>
1.建立dp数组（确定是一维、二维还是多维，也可后续进行变更。从小往大考虑，1维能不能表示出来，1维不行的话，考虑2维） <br>
2.根据题意，描述dp数组每一个格的含义 <br>
3.已知dp[i][j]能推出哪些格，或者通过哪些格能推出dp[i][j]，推导动态转移矩阵 <br>
4.根据dp[i][j]能推导出的位置，确定往dp数组填入内容的顺序（是从上到下，从左到右，从左下角到右上角，还是从左上角到右下角） <br>
5.初始化dp数组 <br>
6.循环填满dp数组 <br>
7.根据需要从dp数组获取对应信息 <br></p>`,r:{minutes:6.38,words:1913},y:"a",t:"动态规划与贪心",i:"lightbulb"},["/cs/code/algorithm/5.动态规划_贪心.html","/cs/code/algorithm/5.动态规划&贪心.html","/cs/code/algorithm/5.%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92&%E8%B4%AA%E5%BF%83.html","/cs/code/algorithm/5.动态规划&贪心.md","/cs/code/algorithm/5.%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92&%E8%B4%AA%E5%BF%83.md"]],["v-7a0c1079","/cs/code/algorithm/6.%E5%AD%97%E7%AC%A6%E4%B8%B2.html",{d:1730220137e3,e:`<h1> 字符串</h1>
<h2> 哈希</h2>
<p>假如要把字符串映射到数组中的某个地方: <br></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">hash</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token keyword">int</span> h <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
        h <span class="token operator">=</span> h <span class="token operator">*</span> <span class="token number">31</span> <span class="token operator">+</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token punctuation">}</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token keyword">return</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span> <span class="token operator">%</span> n<span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.25,words:974},y:"a",t:"字符串",i:"lightbulb"},["/cs/code/algorithm/6.字符串.html","/cs/code/algorithm/6.字符串.md",":md"]],["v-4f8851a7","/cs/code/algorithm/7.%E6%95%B0%E5%AD%A6.html",{d:1730220137e3,e:`<h1> 数学</h1>
<h2> Acwing</h2>
<p><a href="https://zhuanlan.zhihu.com/p/643391309" target="_blank" rel="noopener noreferrer">参考笔记</a> <br>
数论：质数、约数、欧拉函数、快速幂、扩展欧几里得算法、中国剩余定理 <br>
高斯消元 <br>
组合计数 <br>
容斥原理 <br>
简单博弈论 <br>
 <br></p>
<h3> 质数（又称素数）</h3>
<p>概念：在大于1的整数中，如果只包含1和本身这两个约数，则称为质数或素数。 <br></p>
<h4> 质数的判定——试除法   时间复杂度：O(sqrt(n))</h4>`,r:{minutes:9.93,words:2979},y:"a",t:"数学",i:"lightbulb"},["/cs/code/algorithm/7.数学.html","/cs/code/algorithm/7.数学.md",":md"]],["v-256607b4","/cs/code/algorithm/8.%E7%AE%97%E6%B3%95%E6%8A%80%E5%B7%A7.html",{d:1730220137e3,e:`<h1> 算法技巧</h1>
<h2> 前缀和 &amp; 差分</h2>
<p>前缀和与差分是互逆的 <br></p>
<h2> 双指针</h2>
<p>举例: <br></p>
<ol>
<li>指向不同序列: 两个有序数组/链表的合并 <br></li>
<li>指向相同序列: 快排的双坑法, KMP, 链表判环 <br></li>
</ol>
<p>核心思想: <br>
利用某些性质，只枚举O(n)个状态 <br></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 不用双指针，则O(n^2) &lt;br/&gt;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">&lt;</span>n<span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token punctuation">}</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// 用双指针，两个指针总共移动的次数不超过k*n，所以为O(n) &lt;br/&gt;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j <span class="token operator">&amp;&amp;</span> <span class="token function">check</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">++</span>j<span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.39,words:418},y:"a",t:"算法技巧",i:"lightbulb"},["/cs/code/algorithm/8.算法技巧.html","/cs/code/algorithm/8.算法技巧.md",":md"]],["v-03df395c","/cs/code/data_structure/1.%E6%95%B0%E7%BB%84.html",{d:1730220137e3,e:`<h1> 数组</h1>
<h2> 特点</h2>
<ol>
<li>属于线性表 <br></li>
</ol>
<p>线性表，只有前后两个方向：数组、链表、栈、队列 <br>
非线性表：树、图 <br></p>
<ol start="2">
<li>连续的内存空间和相同类型的数据 <br></li>
<li>优：随机访问O(1) <br></li>
</ol>
<p>随机访问是指通过下标访问。 <br>
查找 != 随机访问，即便是排好序的用二分查找，时间复杂度为O(logn)） <br></p>
<ol start="4">
<li>缺：增删元素要做大量的数据搬移工作(O(n) <br></li>
</ol>`,r:{minutes:2.38,words:713},y:"a",t:"数组",i:"lightbulb"},["/cs/code/data_structure/1.数组.html","/cs/code/data_structure/1.数组.md",":md"]],["v-bd02b22a","/cs/code/data_structure/2.%E9%93%BE%E8%A1%A8.html",{d:1730220137e3,e:`<h1> 链表</h1>
<h2> 链表分类</h2>
<h3> 单链表</h3>
<p>每个结点由两部分组成，data和next。 <br>
特殊结点：头结点、尾结点 <br>
头结点：第一个结点，用来记录链表的基地址，有了它，我们就可以遍历得到整条链表。 <br>
尾结点：指针指向空地址NULL，表示这是链表上最后一个结点。 <br></p>
<h3> 循环链表</h3>
<p>循环链表与单链表的区别，仅在于尾结点，尾结点指针指向链表的头结点，适合处理环形结构的数据。 <br></p>
<h3> 双向链表（在实际软件开发中更加常用）</h3>
<p>每个结点由三部分组成，数据data，后继指针next，前驱指针prev。 <br>
特点： <br>
占用更多存储空间，支持两个方向，更灵活。 <br>
支持O(1)找到前驱结点。在需要用到上一个结点时，用双向链表可以很容易知道上一个结点，而用单链表，需要用双指针，保留上一个结点和当前结点的位置。插入和删除当前结点，都需要用到上一个结点。 <br>
查找有序链表时，可以根据要查找的值决定往前还是往后找。 <br>
Java中，双向链表的应用：LinkedList、LinkedHashMap <br></p>`,r:{minutes:12.19,words:3656},y:"a",t:"链表",i:"lightbulb"},["/cs/code/data_structure/2.链表.html","/cs/code/data_structure/2.链表.md",":md"]],["v-4839127c","/cs/code/data_structure/3.%E6%A0%88.html",{d:1730220137e3,e:`<h1> 栈</h1>
<h1> 单调栈</h1>
<p>单调栈：元素按从小到大或从大到小排列，具有单调性 <br></p>
`,r:{minutes:.1,words:29},y:"a",t:"栈",i:"lightbulb"},["/cs/code/data_structure/3.栈.html","/cs/code/data_structure/3.栈.md",":md"]],["v-b87c95c4","/cs/code/data_structure/4.%E9%98%9F%E5%88%97.html",{d:1730220137e3,e:`<h1> 队列</h1>
<p>（1）队列也是一种“操作受限”的线性表，只支持两种基本操作：入队（队尾）和出队 （队头）  <br>
（2）顺序队列和链式队列 <br>
顺序队列：用数组实现 <br>
针对队尾满了，对头还有很多空位，解决方案：循环队列；一旦队尾满了，整体移到前面（不如循环队列） <br>
链式队列：用链表实现 <br>
（3）循环队列 <br>
要想写出没有 bug 的循环队列实现代码，关键要确定好队空和队满的判定条件。 <br>
队满判定条件：head=tail <br>
队满判定条件：(tail+1)%n=head <br>
（4）阻塞队列与并发队列 <br>
阻塞队列、并发队列，底层都还是队列这种数 据结构，只不过在之上附加了很多其他功能。阻塞队列就是入队、出队操作可以阻塞，并发 队列就是队列的操作多线程安全。   <br>
（5）应用 <br>
算法中应用：广度优先搜索 <br></p>`,r:{minutes:3.72,words:1117},y:"a",t:"队列",i:"lightbulb"},["/cs/code/data_structure/4.队列.html","/cs/code/data_structure/4.队列.md",":md"]],["v-8fc60358","/cs/code/data_structure/5.%E5%A0%86%EF%BC%88%E4%BC%98%E5%85%88%E9%98%9F%E5%88%97%EF%BC%89.html",{d:1730220137e3,e:`<h1> 堆（优先队列）</h1>
<h2> 概念（关键词：堆、完全二叉树、优先队列）</h2>
<p>只要满足以下这两点，它就是一个堆： <br></p>
<ol>
<li>堆是一个<strong>完全二叉树</strong> <br></li>
<li>堆中每一个节点的值都必须大于等于（或小于等于）其子树中每个节点的值 <br></li>
</ol>
<p>特性：堆顶拥有最高优先级；每个父节点的优先级高于子节点的优先级。 <br></p>
<h2> 分类</h2>
<h3> 大根堆（大顶堆）</h3>
<p>概念：每个节点的值都大于等于子树中每个节点值的堆 <br>
特点：堆顶元素存储的是堆中数据的最大值 <br></p>`,r:{minutes:12.82,words:3845},y:"a",t:"堆（优先队列）",i:"lightbulb"},["/cs/code/data_structure/5.堆（优先队列）.html","/cs/code/data_structure/5.堆（优先队列）.md",":md"]],["v-ace54172","/cs/code/data_structure/6.%E6%A0%91.html",{d:1730220137e3,e:`<h1> 树</h1>
<h2> 概念</h2>
<p>高度、深度、层 <br>
 <br>
 <br></p>
<h2> 二叉树</h2>
<h3> 二叉树的存储：链表与数组</h3>
<p>顺序存储法： 一般情况下，为了方便计算子节点，根节点会存储在下标为 1 的位置。如果节点 X 存储在数组中下标为 i 的位置，下标为 2 * i 的位置存储的就是左子节点，下标为 2 * i + 1 的位置存储的就是右子节点。反过来，下标为 i/2 的位置存储就是它的父节点。  <br></p>
<h3> 完全二叉树</h3>
<p>满二叉树是完全二叉树的一种特殊情况 <br>
如果某棵二叉树是一棵完全二叉树，那用数组存储无疑是最节省内存的一种方式。   <br>
这也是为什么完全二叉树会单独拎出来的原因，也是为什么完全二叉树要求最后一层的子节点都靠左的原因。   <br>
当我们讲到堆和堆排序的时候，你会发现，堆其实就是一种完全二叉树，最常用的存储方式就是数组。   <br></p>`,r:{minutes:43.88,words:13165},y:"a",t:"树",i:"lightbulb"},["/cs/code/data_structure/6.树.html","/cs/code/data_structure/6.树.md",":md"]],["v-4c2ade96","/cs/code/data_structure/7.%E5%9B%BE.html",{d:1730220137e3,e:`<h1> 图</h1>
<h2> 基本概念</h2>
<p>顶点（vertex）、边（edge） <br>
度（degree）、入度（In-degree）、出度（Out-degree） <br>
树、森林、环 <br>
无向图、有向图、完全有向图、完全无向图 <br>
连通图、联通分量 <br>
带权图（weighted graph）：每条边都有一个权重（weight） <br></p>
<h2> 图的存储</h2>
<h3> 邻接矩阵</h3>
<p>( Adjacency Matrix）--用空间换时间 <br>
 <br>
优：存储简单，获取两个顶点的关系高效。方便计算， 可以将很多图的运算转换成矩阵之间的运算。比如求解最短路径问题时会提到一个Floyd-Warshall 算法，就是利用矩阵循环相乘若干次得到结果。  <br>
缺：无向图有一半空间是浪费的，稀疏图绝大部分的存储空间都被浪费了。   <br></p>`,r:{minutes:29.18,words:8753},y:"a",t:"图",i:"lightbulb"},["/cs/code/data_structure/7.图.html","/cs/code/data_structure/7.图.md",":md"]],["v-44f0f74b","/cs/code/data_structure/8.%E5%93%88%E5%B8%8C%E8%A1%A8%EF%BC%88%E6%95%A3%E5%88%97%E8%A1%A8%EF%BC%89.html",{d:1730220137e3,e:`<h1> 哈希表</h1>
<p>hashset或桶（下标模拟hash） <br></p>
<h1> 一致性哈希</h1>
<p><a href="https://zhuanlan.zhihu.com/p/129049724" target="_blank" rel="noopener noreferrer">一致性哈希</a> <br>
可以保证当机器增加或者减少时，节点之间的数据迁移只限于两个节点之间，不会造成全局的网络问题。 <br></p>
`,r:{minutes:.24,words:71},y:"a",t:"哈希表",i:"lightbulb"},["/cs/code/data_structure/8.哈希表（散列表）.html","/cs/code/data_structure/8.哈希表（散列表）.md",":md"]],["v-80fcc67e","/cs/code/language/Java%E8%AF%AD%E8%A8%80%E5%9F%BA%E7%A1%80.html",{d:1730220137e3,e:`<h1> Java语言基础</h1>
<p>"对语言的熟悉程度" <br></p>
<ul>
<li><a href="#java%E8%AF%AD%E8%A8%80%E5%9F%BA%E7%A1%80">Java语言基础</a>
<ul>
<li><a href="#%E5%AF%BC%E5%8C%85%E6%B1%87%E6%80%BB">导包汇总</a>
<ul>
<li><a href="#%E5%9F%BA%E6%9C%AC%E5%8C%85%E8%A3%85%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B">基本/包装数据类型</a></li>
<li><a href="#%E7%BB%A7%E6%89%BF">继承</a></li>
<li><a href="#%E5%A4%9A%E6%80%81-%E7%88%B6%E7%B1%BB%E5%BC%95%E7%94%A8%E6%8C%87%E5%90%91%E5%AD%90%E7%B1%BB%E5%AF%B9%E8%B1%A1">多态-父类引用指向子类对象</a></li>
<li><a href="#%E6%8E%A5%E5%8F%A3">接口</a></li>
<li><a href="#%E6%B3%9B%E5%9E%8B-%E7%B1%BB%E5%9E%8B%E5%8F%82%E6%95%B0%E5%8C%96">泛型-类型参数化</a></li>
<li><a href="#lambda%E8%A1%A8%E8%BE%BE%E5%BC%8F--%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0%E5%8C%96">lambda表达式- 函数参数化</a></li>
<li><a href="#io">IO</a>
<ul>
<li><a href="#%E8%BE%93%E5%87%BA">输出</a></li>
<li><a href="#%E8%BE%93%E5%85%A5">输入</a></li>
</ul>
</li>
<li><a href="#biginteger">BigInteger</a></li>
<li><a href="#character">Character*</a></li>
<li><a href="#string">String*</a></li>
<li><a href="#stringbuilder">StringBuilder*</a></li>
<li><a href="#sort">sort</a></li>
<li><a href="#arrays">Arrays</a></li>
<li><a href="#collections-%E9%80%9A%E7%94%A8">Collections 通用*</a></li>
<li><a href="#list">List*</a></li>
<li><a href="#queuestackpirorityqueue%E5%A0%86%E4%BC%98%E5%85%88%E9%98%9F%E5%88%97">Queue&amp;Stack*&amp;PirorityQueue（堆==优先队列）</a></li>
<li><a href="#map">Map</a></li>
<li><a href="#set">Set</a></li>
<li><a href="#objects">Objects</a></li>
</ul>
</li>
<li><a href="#%E7%BD%91%E6%98%93%E8%AF%AD%E6%B3%95%E6%80%BB%E7%BB%93">网易语法总结</a></li>
<li><a href="#%E7%BC%96%E7%A0%81%E8%A7%84%E8%8C%83">编码规范</a></li>
</ul>
</li>
</ul>`,r:{minutes:9.56,words:2869},y:"a",t:"Java语言基础",i:"lightbulb"},["/cs/code/language/Java语言基础.html","/cs/code/language/Java语言基础.md",":md"]],["v-a0decba4","/cs/code/language/python%E7%AE%97%E6%B3%95%E5%88%B7%E9%A2%98%E8%AF%AD%E6%B3%95%E5%BF%AB%E9%80%9F%E6%81%A2%E5%A4%8D.html",{d:1730220137e3,e:`<h1> Python算法刷题语法快速恢复</h1>
<h2> 关键词</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>and 与  
or  或  
not 非  
in  包含  
is 等于（比较对象）  
== 等于（比较值）  
True  真  
False 假  
None  空
nonlocal 局部函数用全局变量
math.inf 最大值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.3,words:989},y:"a",t:"Python算法刷题语法快速恢复",i:"lightbulb"},["/cs/code/language/python算法刷题语法快速恢复.html","/cs/code/language/python算法刷题语法快速恢复.md",":md"]],["v-3706649a","/404.html",{y:"p",t:""},[]],["v-2c0d0d85","/channel/",{y:"p",t:"Channel"},[]],["v-06198984","/frontend/",{y:"p",t:"Frontend"},[]],["v-2d0a8026","/cs/",{y:"p",t:"Cs"},[]],["v-58f42cfe","/language/",{y:"p",t:"Language"},[]],["v-7449895b","/llm/",{y:"p",t:"Llm"},[]],["v-d440f426","/tools/",{y:"p",t:"Tools"},[]],["v-1c04b77c","/cs/code/",{y:"p",t:"Code"},[]],["v-ffb97496","/java/basic/",{y:"p",t:"Basic"},[]],["v-14c69af4","/java/",{y:"p",t:"Java"},[]],["v-6cec18aa","/java/juc/",{y:"p",t:"Juc"},[]],["v-6cec0ebc","/java/jvm/",{y:"p",t:"Jvm"},[]],["v-211a2a4e","/java/spring/",{y:"p",t:"Spring"},[]],["v-2475b666","/language/topics/",{y:"p",t:"Topics"},[]],["v-0876f6e5","/llm/agent/",{y:"p",t:"Agent"},[]],["v-4d33be9e","/llm/computer_use/",{y:"p",t:"Computer Use"},[]],["v-d5bc86d2","/llm/langchain/",{y:"p",t:"Langchain"},[]],["v-90dbc286","/llm/llm/",{y:"p",t:"Llm"},[]],["v-90d6a21c","/llm/rag/",{y:"p",t:"Rag"},[]],["v-aff0f4ac","/middleware/graphql/",{y:"p",t:"Graphql"},[]],["v-4d194044","/middleware/",{y:"p",t:"Middleware"},[]],["v-305ad879","/middleware/micro_service/",{y:"p",t:"Micro Service"},[]],["v-0d7f5047","/middleware/mq/",{y:"p",t:"Mq"},[]],["v-999f5dde","/middleware/mysql/",{y:"p",t:"Mysql"},[]],["v-8ad07150","/middleware/redis/",{y:"p",t:"Redis"},[]],["v-d29f74b6","/operations/docker/",{y:"p",t:"Docker"},[]],["v-3a6ecd2a","/operations/",{y:"p",t:"Operations"},[]],["v-0d24d936","/operations/linux/",{y:"p",t:"Linux"},[]],["v-6c4287d9","/python/python/",{y:"p",t:"Python"},[]],["v-63cd5dba","/python/",{y:"p",t:"Python"},[]],["v-1c7252b6","/python/pytorch/",{y:"p",t:"Pytorch"},[]],["v-2238661c","/cs/code/algorithm/",{y:"p",t:"Algorithm"},[]],["v-5c1239d5","/cs/code/data_structure/",{y:"p",t:"Data Structure"},[]],["v-566bcbdb","/cs/code/language/",{y:"p",t:"Language"},[]],["v-5bc93818","/category/",{y:"p",t:"Category",I:!1},[]],["v-744d024e","/tag/",{y:"p",t:"Tag",I:!1},[]],["v-e52c881c","/article/",{y:"p",t:"Articles",I:!1},[]],["v-154dc4c4","/star/",{y:"p",t:"Star",I:!1},[]],["v-01560935","/timeline/",{y:"p",t:"Timeline",I:!1},[]],["v-924078b8","/category/channel/",{y:"p",t:"Channel Category",I:!1},[]],["v-2836033f","/tag/blog/",{y:"p",t:"Tag: Blog",I:!1},[]],["v-494b3a18","/category/conversation/",{y:"p",t:"Conversation Category",I:!1},[]],["v-59a1d161","/tag/knowledge-base/",{y:"p",t:"Tag: Knowledge Base",I:!1},[]],["v-65f226fa","/category/llm/",{y:"p",t:"LLM Category",I:!1},[]],["v-4c399930","/tag/commen-mistakes/",{y:"p",t:"Tag: Commen Mistakes",I:!1},[]],["v-78cbe7bb","/category/python/",{y:"p",t:"Python Category",I:!1},[]],["v-da453c94","/tag/grammar/",{y:"p",t:"Tag: Grammar",I:!1},[]],["v-bdd621d8","/category/pytorch/",{y:"p",t:"Pytorch Category",I:!1},[]],["v-83049d70","/tag/pronunciation/",{y:"p",t:"Tag: Pronunciation",I:!1},[]],["v-04391248","/tag/sentence-pattern-and-expression/",{y:"p",t:"Tag: Sentence Pattern and Expression",I:!1},[]],["v-e6c5fb30","/tag/careers/",{y:"p",t:"Tag: Careers",I:!1},[]],["v-2cae7d96","/tag/common/",{y:"p",t:"Tag: Common",I:!1},[]],["v-084b0ce7","/tag/communication/",{y:"p",t:"Tag: Communication",I:!1},[]],["v-4f072b45","/tag/computers/",{y:"p",t:"Tag: Computers",I:!1},[]],["v-143a738c","/tag/describing-something/",{y:"p",t:"Tag: Describing something",I:!1},[]],["v-23ce7695","/tag/dreams-and-wishes/",{y:"p",t:"Tag: Dreams and Wishes",I:!1},[]],["v-5e25924e","/tag/graduating/",{y:"p",t:"Tag: Graduating",I:!1},[]],["v-55c05ce3","/tag/greetings/",{y:"p",t:"Tag: Greetings",I:!1},[]],["v-5d23f08d","/tag/hobbies/",{y:"p",t:"Tag: Hobbies",I:!1},[]],["v-fcd998da","/tag/immigration/",{y:"p",t:"Tag: Immigration",I:!1},[]],["v-5ac057c7","/tag/introduction/",{y:"p",t:"Tag: Introduction",I:!1},[]],["v-689f2654","/tag/phone-and-email/",{y:"p",t:"Tag: Phone and email",I:!1},[]],["v-e54ce78e","/tag/routine/",{y:"p",t:"Tag: Routine",I:!1},[]],["v-29324574","/tag/time/",{y:"p",t:"Tag: Time",I:!1},[]],["v-9727c2c8","/tag/traits/",{y:"p",t:"Tag: Traits",I:!1},[]],["v-b30c33a0","/tag/llm/",{y:"p",t:"Tag: LLM",I:!1},[]],["v-245f5676","/tag/python/",{y:"p",t:"Tag: Python",I:!1},[]],["v-66c3b96c","/tag/pytorch/",{y:"p",t:"Tag: Pytorch",I:!1},[]]];var qo=$({name:"Vuepress",setup(){const e=s0();return()=>o(e.value)}}),j2=()=>N2.reduce((e,[t,n,l,r])=>(e.push({name:t,path:n,component:qo,meta:l},{path:n.endsWith("/")?n+"index.html":n.substring(0,n.length-5),redirect:n},...r.map(i=>({path:i===":md"?n.substring(0,n.length-5)+".md":i,redirect:n}))),e),[{name:"404",path:"/:catchAll(.*)",component:qo}]),H2=I0,z2=()=>{const e=fh({history:H2(Ui("/pinkpig/")),routes:j2(),scrollBehavior:(t,n,l)=>l||(t.hash?{el:t.hash}:{top:0})});return e.beforeResolve(async(t,n)=>{var l;(t.path!==n.path||n===Pt)&&([t.meta._data]=await Promise.all([kt.resolvePageData(t.name),(l=Xs[t.name])==null?void 0:l.__asyncLoader()]))}),e},q2=e=>{e.component("ClientOnly",fr),e.component("Content",oc)},G2=(e,t,n)=>{const l=Do(()=>t.currentRoute.value.path),r=Do(()=>kt.resolveRouteLocale(gn.value.locales,l.value)),i=Zi(l,()=>t.currentRoute.value.meta._data),a=w(()=>kt.resolveLayouts(n)),s=w(()=>kt.resolveSiteLocaleData(gn.value,r.value)),c=w(()=>kt.resolvePageFrontmatter(i.value)),u=w(()=>kt.resolvePageHeadTitle(i.value,s.value)),d=w(()=>kt.resolvePageHead(u.value,c.value,s.value)),p=w(()=>kt.resolvePageLang(i.value,s.value)),f=w(()=>kt.resolvePageLayout(i.value,a.value));return e.provide(r0,a),e.provide(Zs,i),e.provide(ec,c),e.provide(o0,u),e.provide(tc,d),e.provide(nc,p),e.provide(rc,f),e.provide(Wi,r),e.provide(ac,s),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get:()=>c.value},$head:{get:()=>d.value},$headTitle:{get:()=>u.value},$lang:{get:()=>p.value},$page:{get:()=>i.value},$routeLocale:{get:()=>r.value},$site:{get:()=>gn.value},$siteLocale:{get:()=>s.value},$withBase:{get:()=>Be}}),{layouts:a,pageData:i,pageFrontmatter:c,pageHead:d,pageHeadTitle:u,pageLang:p,pageLayout:f,routeLocale:r,siteData:gn,siteLocaleData:s}},U2=()=>{const e=a0(),t=lc(),n=X([]),l=()=>{e.value.forEach(i=>{const a=W2(i);a&&n.value.push(a)})},r=()=>{document.documentElement.lang=t.value,n.value.forEach(i=>{i.parentNode===document.head&&document.head.removeChild(i)}),n.value.splice(0,n.value.length),e.value.forEach(i=>{const a=J2(i);a!==null&&(document.head.appendChild(a),n.value.push(a))})};Et(u0,r),_e(()=>{l(),r(),fe(()=>e.value,r)})},W2=([e,t,n=""])=>{const l=Object.entries(t).map(([s,c])=>ie(c)?`[${s}=${JSON.stringify(c)}]`:c===!0?`[${s}]`:"").join(""),r=`head > ${e}${l}`;return Array.from(document.querySelectorAll(r)).find(s=>s.innerText===n)||null},J2=([e,t,n])=>{if(!ie(e))return null;const l=document.createElement(e);return hr(t)&&Object.entries(t).forEach(([r,i])=>{ie(i)?l.setAttribute(r,i):i===!0&&l.setAttribute(r,"")}),ie(n)&&l.appendChild(document.createTextNode(n)),l},K2=U1,Y2=async()=>{var n;const e=K2({name:"VuepressApp",setup(){var l;U2();for(const r of Gl)(l=r.setup)==null||l.call(r);return()=>[o(gc),...Gl.flatMap(({rootComponents:r=[]})=>r.map(i=>o(i)))]}}),t=z2();q2(e),G2(e,t,Gl);for(const l of Gl)await((n=l.enhance)==null?void 0:n.call(l,{app:e,router:t,siteData:gn}));return e.use(t),{app:e,router:t}};Y2().then(({app:e,router:t})=>{t.isReady().then(()=>{e.mount("#app")})});export{$s as a,Ns as b,Q2 as c,Y2 as createVueApp,Z2 as d,Pe as e,X2 as f,Zp as o,st as r,dp as w};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index.html-41HqeZXA.js","assets/plugin-vue_export-helper-x3n3nnut.js","assets/intro.html-rMNDMOZM.js","assets/blog_and_pinkpig.html-HfjO_7mB.js","assets/tools.html-sNJa_3QD.js","assets/youtube_channel.html-nn6Hu7NU.js","assets/AntDesign.html-VH-uG_6K.js","assets/CSS.html-KR8LF2Kw.js","assets/Expo.html--4BBR8Pg.js","assets/Frontend.html-e-IMH8M1.js","assets/HTML.html-Sr3xTNvY.js","assets/JavaScript.html--wmH4Lk-.js","assets/Practice.html-PGSGtGaN.js","assets/React.html-9ONxww6c.js","assets/npm.html-0NLC7NKp.js","assets/CSAPP.html-tWV84siV.js","assets/Netty.html-R5sCojMF.js","assets/RPC.html-tRDol0uA.js","assets/操作系统.html-64gzIVDY.js","assets/浏览器技能.html-qze-cLLh.js","assets/网络.html-AURgjG-5.js","assets/计算机技能.html-vYP6bOxt.js","assets/commen_mistakes.html-nFup_XQB.js","assets/grammar.html-UF6mUZfQ.js","assets/new_concept_english3.html-q1iWZSA0.js","assets/new_concept_english_detail.html-fPLdMJrk.js","assets/pronunciation.html-j5SrWqWB.js","assets/sentence_pattern_and_expression.html-APTc5N13.js","assets/llm_resources.html-qfbJ9U3j.js","assets/open_interpreter.html-XOb11wS2.js","assets/Git使用手册.html-shdflV84.js","assets/IDEA_Keymap.html-2fRAoDQ1.js","assets/IDEA_Problem_and_plugin.html-fTE_igkP.js","assets/Markdown.html-WWDB0HAk.js","assets/Maven--java包管理工具.html-lXYs8g76.js","assets/Poetry--python包管理工具.html-oQR_sBu2.js","assets/photoshop.html-8Jl2GPmP.js","assets/quick_recovery.html-tgawecAh.js","assets/多层迷宫.html-qYDQ4cHw.js","assets/算法提升.html-BoBvreaj.js","assets/经典题汇总（每个细分类限定10题以内）.html-ay6FvOwW.js","assets/Java8学习笔记.html-k-nuagiM.js","assets/基础.html-xjmuKt3A.js","assets/集合.html-eRxNEVQc.js","assets/juc.html-u3STy994.js","assets/jvm.html-LMlfo5te.js","assets/spring.html-gdI4oyFi.js","assets/careers.html-ksvKpPMB.js","assets/common.html-IU0SMmSE.js","assets/communication.html-pr7ezyQF.js","assets/computers.html-stRC2EIh.js","assets/describing_something.html--TdCRaXe.js","assets/dreams.html-5x7synT6.js","assets/graduating.html-cx87tpjJ.js","assets/greetings.html-uSQlHCkG.js","assets/hobbies.html-_dkdPT47.js","assets/immigration.html-QXIAuDIV.js","assets/introducing_someone.html-JgQqnSzd.js","assets/phone.html-sr4eH6Hi.js","assets/routine.html-Jfq0-PgT.js","assets/time_and_weather.html-BvmNyKKA.js","assets/traits.html-bIsZ_Zjf.js","assets/agent.html-j9bmlKs5.js","assets/computer_use.html-S0eQJqvb.js","assets/learning_resources.html-F99Vuign.js","assets/same.html-EQ1iIndB.js","assets/langchain.html-VA7lK0Ve.js","assets/langchain1.html--3M8qdlJ.js","assets/langchain_source_code.html-Do_LF_Hq.js","assets/langgraph.html-s3SEsH8K.js","assets/langsmith.html-YKbdmO2D.js","assets/streamlit.html-DWJE0fER.js","assets/langchain.html-YiyHxO5G.js","assets/langchain_source_code.html-kWqKFmF1.js","assets/llama.html-P2B1cSQp.js","assets/llama_advanced.html-cBIqyMeq.js","assets/llm_summary.html--mR3-pXk.js","assets/streamlit.html-uzzhP6xv.js","assets/transformer.html--R_cApvX.js","assets/rag_opensource.html-nDIRNT08.js","assets/GraphQL.html-X7zgNzaT.js","assets/MicroService.html-TMNQ3rJU.js","assets/MybatisPlus.html-gDEpoDGc.js","assets/mq.html-m5ABbaEt.js","assets/SQL.html-pqEmLHZ-.js","assets/mysql.html-WwWhBCrV.js","assets/redis.html-HyjkEkVz.js","assets/Docker.html-cuGcHSdq.js","assets/K8S.html-kUpKVtye.js","assets/linux.html-9VEoSi6l.js","assets/01_python_environment.html-SyAjOzKo.js","assets/02_python_data_type.html-kyRLxNqz.js","assets/03_python_operator.html-L8Y-lPgH.js","assets/04_python_method.html-0nhI9pUV.js","assets/05_python_builtin_module.html-u7FT-2_f.js","assets/06_python_popular_package.html-t9aEraMh.js","assets/01_ai_concept.html-80ZsA-Ta.js","assets/02_neural_net_train.html-8eDcLfYq.js","assets/03_pytorch_operation.html-myNgNDll.js","assets/04_pytorch_practice_nn.html-9sV-DvnL.js","assets/05_linear_nn.html-BJdnuqX2.js","assets/06_heterogeneous_graph.html-IuLOOFWR.js","assets/AI_evolution.html-YLVI7ad3.js","assets/0.时空复杂度.html-Nmy1F4S5.js","assets/1.分治思想_递归实现.html-5onzQAfv.js","assets/2.二进制_位运算.html-kT2bu1Y9.js","assets/3.排序.html-W2bgmKNA.js","assets/4.二分查找.html-_qSj591b.js","assets/5.动态规划_贪心.html-m7VXSbOi.js","assets/6.字符串.html-ufZABTbG.js","assets/7.数学.html-1ajCDo20.js","assets/8.算法技巧.html-uGDTWrda.js","assets/1.数组.html-xVM6SM0y.js","assets/2.链表.html--JfRFVGd.js","assets/3.栈.html-qDQyhXPO.js","assets/4.队列.html-T2FCmPCl.js","assets/5.堆（优先队列）.html-nksJH-Zl.js","assets/6.树.html-3RsTrOHr.js","assets/7.图.html--KfG84_A.js","assets/8.哈希表（散列表）.html-Po9C0fiS.js","assets/Java语言基础.html-0ovfBFbQ.js","assets/python算法刷题语法快速恢复.html-xknXD1DM.js","assets/404.html-OA1futfo.js","assets/index.html-E9D75Zv6.js","assets/index.html-8wr7BRRy.js","assets/index.html-LfgT2FHw.js","assets/index.html-X-RRQoV0.js","assets/index.html-uSAvxYyZ.js","assets/index.html-KfG1V5PO.js","assets/index.html-Up1RZqYl.js","assets/index.html-claCdTWt.js","assets/index.html-TQYDUCAi.js","assets/index.html-vxgnK0Yj.js","assets/index.html-jpku8z0t.js","assets/index.html-BD6mYftW.js","assets/index.html-kT9YXN17.js","assets/index.html-9WkpHa7C.js","assets/index.html-dyCtBBf7.js","assets/index.html-p-sSDd9o.js","assets/index.html-6hBKx621.js","assets/index.html-H2yQradS.js","assets/index.html-KTZg910M.js","assets/index.html-3R9SpTUy.js","assets/index.html-VVgVg29D.js","assets/index.html-08763243.js","assets/index.html-6Caj3i0s.js","assets/index.html-l8cFiQc1.js","assets/index.html-aQaf-gkR.js","assets/index.html-p5OXEfoe.js","assets/index.html-dq1c-PSv.js","assets/index.html-Ang2r9pD.js","assets/index.html-Tiz9Z4fX.js","assets/index.html-ztbbAXPH.js","assets/index.html-TY0sPtHL.js","assets/index.html-Ov0IPhcv.js","assets/index.html-zRhmgZ5B.js","assets/index.html-qAehpLO4.js","assets/index.html-VNAsDJcA.js","assets/index.html-oJeKwjmB.js","assets/index.html-gNL79UIs.js","assets/index.html-wJoCOqz0.js","assets/index.html-o_xqezwl.js","assets/index.html-jk8ksAHK.js","assets/index.html-NGBwOHtg.js","assets/index.html-Icb-O762.js","assets/index.html-nKQ30gPC.js","assets/index.html-dxvpG3wB.js","assets/index.html-mBpxcHAo.js","assets/index.html-pkyQH5DL.js","assets/index.html-rRBcO6_A.js","assets/index.html-xnH3Cxa_.js","assets/index.html-kjyZSNLc.js","assets/index.html-5gqjPcNY.js","assets/index.html-9HyGgZwN.js","assets/index.html-yIxAHbuK.js","assets/index.html-m6BD2kF2.js","assets/index.html-myavQ-rj.js","assets/index.html-jEa3KabI.js","assets/index.html-jGh6LX5G.js","assets/index.html-CC2c9XG8.js","assets/index.html-RIaHS9kw.js","assets/index.html-fPGrhCOC.js","assets/index.html-PvtlLDnr.js","assets/index.html-aVcBC897.js","assets/index.html-Nb8lyMZ1.js","assets/index.html-kShIESG9.js","assets/index.html-fM3j4ymz.js","assets/index.html-RXpqfxnW.js","assets/index.html-4vWNqDVT.js","assets/index.html-LZrTz4pQ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}