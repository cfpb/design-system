(()=>{var Ta=Object.create;var Ue=Object.defineProperty;var ja=Object.getOwnPropertyDescriptor;var Tr=Object.getOwnPropertySymbols;var Oa=Object.prototype.hasOwnProperty,za=Object.prototype.propertyIsEnumerable;var Cr=(r,e)=>(e=Symbol[r])?e:Symbol.for("Symbol."+r),ge=r=>{throw TypeError(r)};var He=(r,e,t)=>e in r?Ue(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Ve=(r,e)=>{for(var t in e||(e={}))Oa.call(e,t)&&He(r,t,e[t]);if(Tr)for(var t of Tr(e))za.call(e,t)&&He(r,t,e[t]);return r};var jr=(r,e)=>Ue(r,"name",{value:e,configurable:!0});var y=(r,e)=>{for(var t in e)Ue(r,t,{get:e[t],enumerable:!0})};var Fe=r=>{var e;return[,,,Ta((e=r==null?void 0:r[Cr("metadata")])!=null?e:null)]},Ir=["class","method","getter","setter","accessor","field","value","get","set"],Ee=r=>r!==void 0&&typeof r!="function"?ge("Function expected"):r,Ca=(r,e,t,a,i)=>({kind:Ir[r],name:e,metadata:a,addInitializer:o=>t._?ge("Already initialized"):i.push(Ee(o||null))}),Ae=(r,e)=>He(e,Cr("metadata"),r[3]),F=(r,e,t,a)=>{for(var i=0,o=r[e>>1],n=o&&o.length;i<n;i++)e&1?o[i].call(t):a=o[i].call(t,a);return a},ve=(r,e,t,a,i,o)=>{var n,l,s,c,h,d=e&7,m=!!(e&8),f=!!(e&16),S=d>3?r.length+1:d?m?1:2:0,E=Ir[d+5],$=d>3&&(r[S-1]=[]),O=r[S]||(r[S]=[]),A=d&&(!f&&!m&&(i=i.prototype),d<5&&(d>3||!f)&&ja(d<4?i:{get[t](){return Or(this,o)},set[t](_){return zr(this,o,_)}},t));d?f&&d<4&&jr(o,(d>2?"set ":d>1?"get ":"")+t):jr(i,t);for(var I=a.length-1;I>=0;I--)c=Ca(d,t,s={},r[3],O),d&&(c.static=m,c.private=f,h=c.access={has:f?_=>Ia(i,_):_=>t in _},d^3&&(h.get=f?_=>(d^1?Or:Ge)(_,i,d^4?o:A.get):_=>_[t]),d>2&&(h.set=f?(_,g)=>zr(_,i,g,d^4?o:A.set):(_,g)=>_[t]=g)),l=(0,a[I])(d?d<4?f?o:A[E]:d>4?void 0:{get:A.get,set:A.set}:i,c),s._=1,d^4||l===void 0?Ee(l)&&(d>4?$.unshift(l):d?f?o=l:A[E]=l:i=l):typeof l!="object"||l===null?ge("Object expected"):(Ee(n=l.get)&&(A.get=n),Ee(n=l.set)&&(A.set=n),Ee(n=l.init)&&$.unshift(n));return d||Ae(r,i),A&&Ue(i,t,A),f?d^4?o:A:i},ye=(r,e,t)=>He(r,typeof e!="symbol"?e+"":e,t),kt=(r,e,t)=>e.has(r)||ge("Cannot "+t),Ia=(r,e)=>Object(e)!==e?ge('Cannot use the "in" operator on this value'):r.has(e),Or=(r,e,t)=>(kt(r,e,"read from private field"),t?t.call(r):e.get(r)),re=(r,e,t)=>e.has(r)?ge("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t),zr=(r,e,t,a)=>(kt(r,e,"write to private field"),a?a.call(r,t):e.set(r,t),t),Ge=(r,e,t)=>(kt(r,e,"access private method"),t);var St=(r,e,t)=>new Promise((a,i)=>{var o=s=>{try{l(t.next(s))}catch(c){i(c)}},n=s=>{try{l(t.throw(s))}catch(c){i(c)}},l=s=>s.done?a(s.value):Promise.resolve(s.value).then(o,n);l((t=t.apply(r,e)).next())});var Et={};y(Et,{default:()=>Ba});var Ba={};var At={};y(At,{default:()=>qa});var qa={};var $t={};y($t,{default:()=>Ra});var Ra={};var Dt={};y(Dt,{default:()=>Ua});var Ua={};var Lt={};y(Lt,{default:()=>Fa});var Fa={};var Tt={};y(Tt,{default:()=>Xa});var Xa={};var jt={};y(jt,{default:()=>Wa});var Wa={};var Ot={};y(Ot,{default:()=>Ya});var Ya={};var zt={};y(zt,{default:()=>Qa});var Qa={};var Ct={};y(Ct,{default:()=>ti});var ti={};var Xe={bpXS:{min:0,max:600},bpSM:{min:601,max:900},bpMED:{min:901,max:1020},bpLG:{min:1021,max:1200},bpXL:{min:1201}};function Ke(){let r=getComputedStyle(document.body).fontSize;return r=r===""?-1:r,parseFloat(r)}function ri(r,e){let t=r.min,a=r.max;Ke()>0&&Ke()!==16&&(t=t/16*Ke(),a=a/16*Ke());let o=t||0,n=a||Number.POSITIVE_INFINITY;return o<=e&&e<=n}function ai(r){let e={};r=r||window.innerWidth;let t;for(t in Xe)e[t]=ri(Xe[t],r);return e}var We="mobile",ii="tablet",oi="desktop";function It(r){let e=!1,t=ai();return(r===We&&t.bpXS||r===ii&&t.bpSM||r===oi&&(t.bpMED||t.bpLG||t.bpXL))&&(e=!0),e}var B="data-js-hook",Je="behavior_",Mt="state_";function j(){let r={};function e(i,o){return{}.hasOwnProperty.call(r,i)?r[i].push(o):r[i]=[o],this}function t(i,o){if(!{}.hasOwnProperty.call(r,i))return this;let n=r[i].indexOf(o);return n!==-1&&r[i].splice(n,1),this}function a(i,o){if(!{}.hasOwnProperty.call(r,i))return this;o=o||{};let n=r[i];for(let l=0,s=n.length;l<s;l++)n[l].call(this,o);return this}return this.addEventListener=e,this.removeEventListener=t,this.dispatchEvent=a,this.getRegisteredEvents=()=>r,this}function ae(r,e){if(!r)return!1;let t=r.getAttribute(B);return t?(t=t.split(" "),t.indexOf(e)>-1):!1}function z(r,e){if(ae(r,e))return e;if(e.indexOf(" ")!==-1){let a=B+" values cannot contain spaces!";throw new Error(a)}let t=r.getAttribute(B);return t!==null&&(e=t+" "+e),r.setAttribute(B,e),e}var Bt=Mt+"atomic_init";function ni(r,e){if(!r||!r.classList){let t=r+' is not valid. Check that element is a DOM node with class "'+e+'"';throw new Error(t)}return r}function li(r,e){let t=r.classList.contains(e)?r:r.querySelector("."+e);if(!t){let a=e+" not found on or in passed DOM node.";throw new Error(a)}return t}function P(r,e){return ni(r,e),li(r,e)}function N(r){return ae(r,Bt)?!1:(z(r,Bt),!0)}function R(r,e,t,a={}){let o=(t||document).querySelectorAll(r),n=[],l,s;for(let c=0,h=o.length;c<h;c++)s=o[c],ae(s,Bt)===!1&&(l=new e(s),l.init(a),n.push(l));return n}var Nt={};y(Nt,{default:()=>di});var di={};var qt={};y(qt,{default:()=>hi});var hi={};var Pt={};y(Pt,{default:()=>pi});var pi={};var Rt={};y(Rt,{default:()=>fi});var fi={};var Ht={};y(Ht,{default:()=>gi});var gi={};var xe="o-expandable";function Y(r){let e=P(r,xe),t,a,i,o,n;function l(){if(!N(e))return this;t=e.querySelector(`.${xe}__header`),a=e.querySelector(`.${xe}__content`),i=e.querySelector(`.${xe}__label`);let h=e.classList.contains(`${xe}--onload-open`);z(e,"behavior_flyout-menu"),z(t,"behavior_flyout-menu_trigger"),z(a,"behavior_flyout-menu_content");let d=h?M.CLASSES.MH_DEFAULT:M.CLASSES.MH_ZERO;return o=new M(a).init(d),n=new Z(e),n.setTransition(o,o.maxHeightZero,o.maxHeightDefault),n.init(h),n.addEventListener("expandbegin",()=>{a.classList.remove("u-hidden"),this.dispatchEvent("expandbegin",{target:this})}),n.addEventListener("collapseend",()=>{a.classList.add("u-hidden")}),this}function s(){return i.textContent.trim()}this.init=l,this.expand=()=>n.expand(),this.collapse=()=>n.collapse(),this.isExpanded=()=>n.isExpanded(),this.refresh=()=>n.getTransition().refresh(),this.getLabelText=s;let c=new j;return this.addEventListener=c.addEventListener,this.removeEventListener=c.removeEventListener,this.dispatchEvent=c.dispatchEvent,this}Y.BASE_CLASS=xe;Y.init=r=>R(`.${Y.BASE_CLASS}`,Y,r);var Ye="o-expandable-group";function Ze(r){let e=P(r,Ye),t=e.classList.contains(`${Ye}--accordion`),a,i;function o(l){let s=l.target;i&&i!==s&&i.collapse(),i=s}function n(l){return N(e)?(t&&(a=l,a.forEach(s=>{s.addEventListener("expandbegin",o)})),this):this}return this.init=n,this}Ze.BASE_CLASS=Ye;Ze.init=r=>{(r||document).querySelectorAll(`.${Ye}`).forEach(a=>{let i=R(`.${Y.BASE_CLASS}`,Y,a);new Ze(a).init(i)})};var _e="o-summary";function Qe(r){let e=P(r,_e),t=e.classList.contains(`${_e}--mobile`),a=e.querySelector(`.${_e}__content`),i=e.querySelector(`.${_e}__btn`),o,n,l;function s(){return N(e)?(window.addEventListener("load",c),this):this}function c(){window.removeEventListener("load",c),l=!f(),z(e,"behavior_flyout-menu"),z(a,"behavior_flyout-menu_content"),z(i,"behavior_flyout-menu_trigger"),n=new Z(e,!1),o=new M(a),o.init(l?M.CLASSES.MH_SUMMARY:M.CLASSES.MH_DEFAULT),n.setTransition(o,o.maxHeightSummary,o.maxHeightDefault),n.addEventListener("triggerclick",S),n.init(),m(),window.addEventListener("resize",m),"onorientationchange"in window&&window.addEventListener("orientationchange",m),e.addEventListener("focusin",h),a.addEventListener("click",d)}function h(g){!l&&g.target!==i&&(i.click(),e.removeEventListener("focusin",h))}function d(g){g.target.tagName!=="A"&&n.isExpanded()&&o.refresh()}function m(){f()?I():A()}function f(){return t&&!It(We)||a.scrollHeight<=88}function S(){n.addEventListener("expandend",E)}function E(){O(),window.removeEventListener("resize",m),window.removeEventListener("orientationchange",m),n.removeEventListener("expandend",E),n.suspend(),o.remove()}function $(){i.classList.remove("u-hidden")}function O(){i.classList.add("u-hidden")}function A(){return l&&(n.collapse(),o.animateOn(),$(),l=!1),!l}function I(){return l||(o.animateOff(),n.expand(),O(),l=!0),l}let _=new j;return this.addEventListener=_.addEventListener,this.removeEventListener=_.removeEventListener,this.dispatchEvent=_.dispatchEvent,this.init=s,this}Qe.BASE_CLASS=_e;Qe.init=r=>R(`.${_e}`,Qe,r);var $e="o-summary-minimal";function et(r){let e=P(r,$e),t=e.querySelector(`.${$e}__content`),a=e.querySelector(`.${$e}__btn`),i,o;function n(){return N(e)?(z(e,"behavior_flyout-menu"),z(t,"behavior_flyout-menu_content"),z(a,"behavior_flyout-menu_trigger"),window.addEventListener("load",l),this):this}function l(){window.removeEventListener("load",l),o=new Z(e,!1),i=new M(t),i.init(M.CLASSES.MH_SUMMARY),o.setTransition(i,i.maxHeightSummary,i.maxHeightDefault),o.init(),e.addEventListener("focusin",s),t.addEventListener("click",c),o.collapse(),i.animateOn()}function s(d){d.target!==a&&(a.click(),e.removeEventListener("focusin",s))}function c(d){d.target.tagName!=="A"&&o.isExpanded()&&i.refresh()}let h=new j;return this.addEventListener=h.addEventListener,this.removeEventListener=h.removeEventListener,this.dispatchEvent=h.dispatchEvent,this.init=n,this}et.BASE_CLASS=$e;et.init=r=>R(`.${$e}`,et,r);var Ut={};y(Ut,{default:()=>xi});var xi={};var Vt={};y(Vt,{default:()=>wi});var wi={};var Ft={};y(Ft,{default:()=>Si});var Si={};var Gt={};y(Gt,{default:()=>Ai});var Ai={};var Xt={};y(Xt,{default:()=>Di});var Di={};var Kt={};y(Kt,{default:()=>Ti});var Ti={};var Wt={};y(Wt,{default:()=>Oi});var Oi={};var Jt={};y(Jt,{default:()=>Ci});var Ci={};var Yt={};y(Yt,{default:()=>Mi});var Mi={};var Zt={};y(Zt,{default:()=>Ni});var Ni={};var Qt={};y(Qt,{default:()=>Pi});var Pi={};var er={};y(er,{default:()=>Hi});var Hi={};var tr={};y(tr,{default:()=>Vi});var Vi={};var rr={};y(rr,{default:()=>Gi});var Gi={};var ar={};y(ar,{default:()=>Ki});var Ki={};var ir={};y(ir,{default:()=>Ji});var Ji={};var or={};y(or,{default:()=>Zi});var Zi={};var nr={};y(nr,{default:()=>eo});var eo={};var lr={};y(lr,{default:()=>ro});var ro={};var sr={};y(sr,{default:()=>io});var io={};var tt=globalThis,rt=tt.ShadowRoot&&(tt.ShadyCSS===void 0||tt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dr=Symbol(),qr=new WeakMap,De=class{constructor(e,t,a){if(this._$cssResult$=!0,a!==dr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(rt&&e===void 0){let a=t!==void 0&&t.length===1;a&&(e=qr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&qr.set(t,e))}return e}toString(){return this.cssText}},we=r=>new De(typeof r=="string"?r:r+"",void 0,dr),Le=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((a,i,o)=>a+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new De(t,r,dr)},Pr=(r,e)=>{if(rt)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let a=document.createElement("style"),i=tt.litNonce;i!==void 0&&a.setAttribute("nonce",i),a.textContent=t.cssText,r.appendChild(a)}},cr=rt?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let a of e.cssRules)t+=a.cssText;return we(t)})(r):r;var{is:oo,defineProperty:no,getOwnPropertyDescriptor:lo,getOwnPropertyNames:so,getOwnPropertySymbols:co,getPrototypeOf:ho}=Object,Q=globalThis,Rr=Q.trustedTypes,uo=Rr?Rr.emptyScript:"",hr=Q.reactiveElementPolyfillSupport,Te=(r,e)=>r,je={toAttribute(r,e){switch(e){case Boolean:r=r?uo:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch(a){t=null}}return t}},at=(r,e)=>!oo(r,e),Hr={attribute:!0,type:String,converter:je,reflect:!1,useDefault:!1,hasChanged:at},Ur,Vr;(Ur=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(Vr=Q.litPropertyMetadata)!=null||(Q.litPropertyMetadata=new WeakMap);var W=class extends HTMLElement{static addInitializer(e){var t;this._$Ei(),((t=this.l)!=null?t:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Hr){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let a=Symbol(),i=this.getPropertyDescriptor(e,a,t);i!==void 0&&no(this.prototype,e,i)}}static getPropertyDescriptor(e,t,a){var n;let{get:i,set:o}=(n=lo(this.prototype,e))!=null?n:{get(){return this[t]},set(l){this[t]=l}};return{get:i,set(l){let s=i==null?void 0:i.call(this);o==null||o.call(this,l),this.requestUpdate(e,s,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return(t=this.elementProperties.get(e))!=null?t:Hr}static _$Ei(){if(this.hasOwnProperty(Te("elementProperties")))return;let e=ho(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Te("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Te("properties"))){let t=this.properties,a=[...so(t),...co(t)];for(let i of a)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[a,i]of t)this.elementProperties.set(a,i)}this._$Eh=new Map;for(let[t,a]of this.elementProperties){let i=this._$Eu(t,a);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let a=new Set(e.flat(1/0).reverse());for(let i of a)t.unshift(cr(i))}else e!==void 0&&t.push(cr(e));return t}static _$Eu(e,t){let a=t.attribute;return a===!1?void 0:typeof a=="string"?a:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t,a;((t=this._$EO)!=null?t:this._$EO=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((a=e.hostConnected)==null||a.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let a of t.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var t;let e=(t=this.shadowRoot)!=null?t:this.attachShadow(this.constructor.shadowRootOptions);return Pr(e,this.constructor.elementStyles),e}connectedCallback(){var e,t;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(a=>{var i;return(i=a.hostConnected)==null?void 0:i.call(a)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var a;return(a=t.hostDisconnected)==null?void 0:a.call(t)})}attributeChangedCallback(e,t,a){this._$AK(e,a)}_$ET(e,t){var o;let a=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,a);if(i!==void 0&&a.reflect===!0){let n=(((o=a.converter)==null?void 0:o.toAttribute)!==void 0?a.converter:je).toAttribute(t,a.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){var o,n,l,s;let a=this.constructor,i=a._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let c=a.getPropertyOptions(i),h=typeof c.converter=="function"?{fromAttribute:c.converter}:((o=c.converter)==null?void 0:o.fromAttribute)!==void 0?c.converter:je;this._$Em=i,this[i]=(s=(l=h.fromAttribute(t,c.type))!=null?l:(n=this._$Ej)==null?void 0:n.get(i))!=null?s:null,this._$Em=null}}requestUpdate(e,t,a){var i,o;if(e!==void 0){let n=this.constructor,l=this[e];if(a!=null||(a=n.getPropertyOptions(e)),!(((i=a.hasChanged)!=null?i:at)(l,t)||a.useDefault&&a.reflect&&l===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(n._$Eu(e,a))))return;this.C(e,t,a)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:a,reflect:i,wrapped:o},n){var l,s,c;a&&!((l=this._$Ej)!=null?l:this._$Ej=new Map).has(e)&&(this._$Ej.set(e,(s=n!=null?n:t)!=null?s:this[e]),o!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||a||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&((c=this._$Eq)!=null?c:this._$Eq=new Set).add(e))}_$EP(){return St(this,null,function*(){this.isUpdatePending=!0;try{yield this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&(yield e),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var a,i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((a=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[n,l]of this._$Ep)this[n]=l;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[n,l]of o){let{wrapped:s}=l,c=this[n];s!==!0||this._$AL.has(n)||c===void 0||this.C(n,void 0,l,c)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(o=>{var n;return(n=o.hostUpdate)==null?void 0:n.call(o)}),this.update(t)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(a=>{var i;return(i=a.hostUpdated)==null?void 0:i.call(a)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}},Fr;W.elementStyles=[],W.shadowRootOptions={mode:"open"},W[Te("elementProperties")]=new Map,W[Te("finalized")]=new Map,hr==null||hr({ReactiveElement:W}),((Fr=Q.reactiveElementVersions)!=null?Fr:Q.reactiveElementVersions=[]).push("2.1.0");var ze=globalThis,it=ze.trustedTypes,Gr=it?it.createPolicy("lit-html",{createHTML:r=>r}):void 0,br="$lit$",J=`lit$${Math.random().toFixed(9).slice(2)}$`,fr="?"+J,po=`<${fr}>`,ne=document,Ce=()=>ne.createComment(""),Ie=r=>r===null||typeof r!="object"&&typeof r!="function",mr=Array.isArray,Qr=r=>mr(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",ur=`[ 	
\f\r]`,Oe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xr=/-->/g,Kr=/>/g,ie=RegExp(`>|${ur}(?:([^\\s"'>=/]+)(${ur}*=${ur}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Wr=/'/g,Jr=/"/g,ea=/^(?:script|style|textarea|title)$/i,gr=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),ct=gr(1),Tn=gr(2),jn=gr(3),le=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),Yr=new WeakMap,oe=ne.createTreeWalker(ne,129);function ta(r,e){if(!mr(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Gr!==void 0?Gr.createHTML(e):e}var ra=(r,e)=>{let t=r.length-1,a=[],i,o=e===2?"<svg>":e===3?"<math>":"",n=Oe;for(let l=0;l<t;l++){let s=r[l],c,h,d=-1,m=0;for(;m<s.length&&(n.lastIndex=m,h=n.exec(s),h!==null);)m=n.lastIndex,n===Oe?h[1]==="!--"?n=Xr:h[1]!==void 0?n=Kr:h[2]!==void 0?(ea.test(h[2])&&(i=RegExp("</"+h[2],"g")),n=ie):h[3]!==void 0&&(n=ie):n===ie?h[0]===">"?(n=i!=null?i:Oe,d=-1):h[1]===void 0?d=-2:(d=n.lastIndex-h[2].length,c=h[1],n=h[3]===void 0?ie:h[3]==='"'?Jr:Wr):n===Jr||n===Wr?n=ie:n===Xr||n===Kr?n=Oe:(n=ie,i=void 0);let f=n===ie&&r[l+1].startsWith("/>")?" ":"";o+=n===Oe?s+po:d>=0?(a.push(c),s.slice(0,d)+br+s.slice(d)+J+f):s+J+(d===-2?l:f)}return[ta(r,o+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),a]},Me=class r{constructor({strings:e,_$litType$:t},a){let i;this.parts=[];let o=0,n=0,l=e.length-1,s=this.parts,[c,h]=ra(e,t);if(this.el=r.createElement(c,a),oe.currentNode=this.el.content,t===2||t===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=oe.nextNode())!==null&&s.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let d of i.getAttributeNames())if(d.endsWith(br)){let m=h[n++],f=i.getAttribute(d).split(J),S=/([.?@])?(.*)/.exec(m);s.push({type:1,index:o,name:S[2],strings:f,ctor:S[1]==="."?nt:S[1]==="?"?lt:S[1]==="@"?st:de}),i.removeAttribute(d)}else d.startsWith(J)&&(s.push({type:6,index:o}),i.removeAttribute(d));if(ea.test(i.tagName)){let d=i.textContent.split(J),m=d.length-1;if(m>0){i.textContent=it?it.emptyScript:"";for(let f=0;f<m;f++)i.append(d[f],Ce()),oe.nextNode(),s.push({type:2,index:++o});i.append(d[m],Ce())}}}else if(i.nodeType===8)if(i.data===fr)s.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(J,d+1))!==-1;)s.push({type:7,index:o}),d+=J.length-1}o++}}static createElement(e,t){let a=ne.createElement("template");return a.innerHTML=e,a}};function se(r,e,t=r,a){var n,l,s;if(e===le)return e;let i=a!==void 0?(n=t._$Co)==null?void 0:n[a]:t._$Cl,o=Ie(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,t,a)),a!==void 0?((s=t._$Co)!=null?s:t._$Co=[])[a]=i:t._$Cl=i),i!==void 0&&(e=se(r,i._$AS(r,e.values),i,a)),e}var ot=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var c;let{el:{content:t},parts:a}=this._$AD,i=((c=e==null?void 0:e.creationScope)!=null?c:ne).importNode(t,!0);oe.currentNode=i;let o=oe.nextNode(),n=0,l=0,s=a[0];for(;s!==void 0;){if(n===s.index){let h;s.type===2?h=new ke(o,o.nextSibling,this,e):s.type===1?h=new s.ctor(o,s.name,s.strings,this,e):s.type===6&&(h=new dt(o,this,e)),this._$AV.push(h),s=a[++l]}n!==(s==null?void 0:s.index)&&(o=oe.nextNode(),n++)}return oe.currentNode=ne,i}p(e){let t=0;for(let a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(e,a,t),t+=a.strings.length-2):a._$AI(e[t])),t++}},ke=class r{get _$AU(){var e,t;return(t=(e=this._$AM)==null?void 0:e._$AU)!=null?t:this._$Cv}constructor(e,t,a,i){var o;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=a,this.options=i,this._$Cv=(o=i==null?void 0:i.isConnected)!=null?o:!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=se(this,e,t),Ie(e)?e===L||e==null||e===""?(this._$AH!==L&&this._$AR(),this._$AH=L):e!==this._$AH&&e!==le&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Qr(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==L&&Ie(this._$AH)?this._$AA.nextSibling.data=e:this.T(ne.createTextNode(e)),this._$AH=e}$(e){var o;let{values:t,_$litType$:a}=e,i=typeof a=="number"?this._$AC(e):(a.el===void 0&&(a.el=Me.createElement(ta(a.h,a.h[0]),this.options)),a);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(t);else{let n=new ot(i,this),l=n.u(this.options);n.p(t),this.T(l),this._$AH=n}}_$AC(e){let t=Yr.get(e.strings);return t===void 0&&Yr.set(e.strings,t=new Me(e)),t}k(e){mr(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,a,i=0;for(let o of e)i===t.length?t.push(a=new r(this.O(Ce()),this.O(Ce()),this,this.options)):a=t[i],a._$AI(o),i++;i<t.length&&(this._$AR(a&&a._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var a;for((a=this._$AP)==null?void 0:a.call(this,!1,!0,t);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},de=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,a,i,o){this.type=1,this._$AH=L,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=L}_$AI(e,t=this,a,i){let o=this.strings,n=!1;if(o===void 0)e=se(this,e,t,0),n=!Ie(e)||e!==this._$AH&&e!==le,n&&(this._$AH=e);else{let l=e,s,c;for(e=o[0],s=0;s<o.length-1;s++)c=se(this,l[a+s],t,s),c===le&&(c=this._$AH[s]),n||(n=!Ie(c)||c!==this._$AH[s]),c===L?e=L:e!==L&&(e+=(c!=null?c:"")+o[s+1]),this._$AH[s]=c}n&&!i&&this.j(e)}j(e){e===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},nt=class extends de{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===L?void 0:e}},lt=class extends de{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==L)}},st=class extends de{constructor(e,t,a,i,o){super(e,t,a,i,o),this.type=5}_$AI(e,t=this){var n;if((e=(n=se(this,e,t,0))!=null?n:L)===le)return;let a=this._$AH,i=e===L&&a!==L||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,o=e!==L&&(a===L||i);i&&this.element.removeEventListener(this.name,this,a),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,a;typeof this._$AH=="function"?this._$AH.call((a=(t=this.options)==null?void 0:t.host)!=null?a:this.element,e):this._$AH.handleEvent(e)}},dt=class{constructor(e,t,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){se(this,e)}},aa={M:br,P:J,A:fr,C:1,L:ra,R:ot,D:Qr,V:se,I:ke,H:de,N:lt,U:st,B:nt,F:dt},pr=ze.litHtmlPolyfillSupport,Zr;pr==null||pr(Me,ke),((Zr=ze.litHtmlVersions)!=null?Zr:ze.litHtmlVersions=[]).push("3.3.0");var ia=(r,e,t)=>{var o,n;let a=(o=t==null?void 0:t.renderBefore)!=null?o:e,i=a._$litPart$;if(i===void 0){let l=(n=t==null?void 0:t.renderBefore)!=null?n:null;a._$litPart$=i=new ke(e.insertBefore(Ce(),l),l,void 0,t!=null?t:{})}return i._$AI(r),i};var ce=globalThis,G=class extends W{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,a;let e=super.createRenderRoot();return(a=(t=this.renderOptions).renderBefore)!=null||(t.renderBefore=e.firstChild),e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ia(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return le}},oa;G._$litElement$=!0,G.finalized=!0,(oa=ce.litElementHydrateSupport)==null||oa.call(ce,{LitElement:G});var vr=ce.litElementPolyfillSupport;vr==null||vr({LitElement:G});var na;((na=ce.litElementVersions)!=null?na:ce.litElementVersions=[]).push("4.2.0");var bo={attribute:!0,type:String,converter:je,reflect:!1,hasChanged:at},fo=(r=bo,e,t)=>{let{kind:a,metadata:i}=t,o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),a==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(t.name,r),a==="accessor"){let{name:n}=t;return{set(l){let s=e.get.call(this);e.set.call(this,l),this.requestUpdate(n,s,r)},init(l){return l!==void 0&&this.C(n,void 0,r,l),l}}}if(a==="setter"){let{name:n}=t;return function(l){let s=this[n];e.call(this,l),this.requestUpdate(n,s,r)}}throw Error("Unsupported decorator location: "+a)};function he(r){return(e,t)=>typeof t=="object"?fo(r,e,t):((a,i,o)=>{let n=i.hasOwnProperty(o);return i.constructor.createProperty(o,a),n?Object.getOwnPropertyDescriptor(i,o):void 0})(r,e,t)}var la=`@charset "UTF-8";
/*! normalize.css v2.1.3 | MIT License | git.io/normalize */
/* ==========================================================================
    Base
    ========================================================================== */
/**
  * 1. Set default font family to sans-serif.
  * 2. Prevent iOS text size adjust after orientation change, without disabling
  *    user zoom.
  */
html {
  font-family: sans-serif; /* 1 */
  -webkit-text-size-adjust: 100%;
          text-size-adjust: 100%; /* 2 */
}

/**
 * Remove default margin.
 */
body {
  margin: 0;
}

/* ==========================================================================
     Links
     ========================================================================== */
/**
 * Address \`outline\` inconsistency between Chrome and other browsers.
 */
a:focus {
  outline: thin dotted;
}

/**
 * Improve readability when focused and also mouse hovered in all browsers.
 */
a:active,
a:hover {
  outline: 0;
}

/* ==========================================================================
     Typography
     ========================================================================== */
/**
 * Address variable \`h1\` font-size and margin within \`section\` and \`article\`
 * contexts in Firefox 4+, Safari 5, and Chrome.
 */
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/**
 * Address differences between Firefox and other browsers.
 */
hr {
  box-sizing: content-box;
  height: 0;
}

/**
 * Correct font family set oddly in Safari 5 and Chrome.
 */
code,
kbd,
pre,
samp {
  font-family: monospace, serif;
  font-size: 1em;
}

/**
 * Improve readability of pre-formatted text in all browsers.
 */
pre {
  white-space: pre-wrap;
}

/**
 * Set consistent quote types.
 */
q {
  quotes: "\u201C" "\u201D" "\u2018" "\u2019";
}

/**
 * Address inconsistent and variable font size in all browsers.
 */
small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` affecting \`line-height\` in all browsers.
 */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

/* ==========================================================================
     Figures
     ========================================================================== */
/**
 * Address margin not present in IE 8/9 and Safari 5.
 */
figure {
  margin: 0;
}

/* ==========================================================================
     Forms
     ========================================================================== */
/**
 * Define consistent border, margin, and padding.
 */
fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

/**
 * 1. Correct \`color\` not being inherited in IE 8/9.
 * 2. Remove padding so people aren't caught out if they zero out fieldsets.
 */
legend {
  border: 0; /* 1 */
  padding: 0; /* 2 */
}

/**
 * 1. Correct font family not being inherited in all browsers.
 * 2. Correct font size not being inherited in all browsers.
 * 3. Address margins set differently in Firefox 4+, Safari 5, and Chrome.
 */
button,
input,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 2 */
  margin: 0; /* 3 */
}

/**
 * Address Firefox 4+ setting \`line-height\` on \`input\` using \`!important\` in
 * the UA stylesheet.
 */
button,
input {
  line-height: normal;
}

/**
 * Address inconsistent \`text-transform\` inheritance for \`button\` and \`select\`.
 * All other form control elements do not inherit \`text-transform\` values.
 * Correct \`button\` style inheritance in Chrome, Safari 5+, and IE 8+.
 * Correct \`select\` style inheritance in Firefox 4+ and Opera.
 */
button,
select {
  text-transform: none;
}

/**
 * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native \`audio\`
 *    and \`video\` controls.
 * 2. Correct inability to style clickable \`input\` types in iOS.
 * 3. Improve usability and consistency of cursor style between image-type
 *    \`input\` and others.
 */
button,
html input[type=button],
input[type=reset],
input[type=submit] {
  /* TODO: stylelint wants to convert \`appearance: button\` to \`appearance: auto\`
     Investigate why. */
  /* stylelint-disable */
  appearance: button; /* 2 */
  /* stylelint-enable */
  cursor: pointer; /* 3 */
}

/**
 * Re-set default cursor for disabled elements.
 */
button[disabled],
html input[disabled] {
  cursor: default;
}

/**
 * 1. Address box sizing set to \`content-box\` in IE 8/9/10.
 * 2. Remove excess padding in IE 8/9/10.
 */
input[type=checkbox],
input[type=radio] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * 1. Address \`appearance\` set to \`searchfield\` in Safari 5 and Chrome.
 * 2. Address \`box-sizing\` set to \`border-box\` in Safari 5 and Chrome.
 */
input[type=search] {
  appearance: textfield; /* 1 */
  box-sizing: content-box; /* 2 */
}

/**
 * Remove inner padding and search cancel button in Safari 5 and Chrome
 * on OS X.
 */
input[type=search]::-webkit-search-cancel-button,
input[type=search]::-webkit-search-decoration {
  appearance: none;
}

/**
 * Remove inner padding and border in Firefox 4+.
 */
button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

/**
 * 1. Remove default vertical scrollbar in IE 8/9.
 * 2. Improve readability and alignment in all browsers.
 */
textarea {
  overflow: auto; /* 1 */
  vertical-align: top; /* 2 */
}

/* ==========================================================================
     Tables
     ========================================================================== */
/**
 * Remove most spacing between table cells.
 */
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* ==========================================================================
   Design System
   Variables
   ========================================================================== */
:root {
  --input-text-default: var(--black);
  --input-text-disabled-default: var(--gray-dark);
  --input-text-placeholder-default: var(--gray-dark);
  --input-border-default: var(--gray-60);
  --input-border-disabled: var(--gray-60);
  --input-border-success: var(--green);
  --input-border-warning: var(--gold);
  --input-border-error: var(--red);
  --input-border-hover-default: var(--pacific);
  --input-border-focus-default: var(--pacific);
  --input-bg-default: var(--white);
  --input-bg-disabled-default: var(--gray-10);
  --form-alert-icon-color-default: var(--gray);
  --form-alert-icon-color-success: var(--green);
  --form-alert-icon-color-warning: var(--gold);
  --form-alert-icon-color-error: var(--red);
  --select-border-default: var(--gray-60);
  --select-border-width-default: 1px;
  --select-border-error: var(--red);
  --select-border-width-error: 2px;
  --select-border-hover-default: var(--pacific);
  --select-border-focus-default: var(--pacific);
  --select-bg-disabled-default: var(--gray-10);
  --select-icon-bg-default: var(--gray-10);
  --select-text-disabled-default: var(--gray-dark);
  --choice-border-default: var(--gray-60);
  --choice-border-disabled: var(--gray-60);
  --choice-border-success: var(--green);
  --choice-border-warning: var(--gold);
  --choice-border-error: var(--red);
  --choice-border-hover-default: var(--pacific);
  --choice-border-focus-default: var(--pacific);
  --choice-outline-focus-default: var(--pacific);
  --choice-bg-default: var(--white);
  --choice-bg-disabled: var(--gray-10);
  --choice-bg-selected-default: var(--pacific);
  --choice-bg-selected-disabled: var(--gray-40);
  --choice-bg-selected-focus-default: var(--pacific);
  --choice-label-disabled-default: var(--gray-dark);
}

/* ==========================================================================
   Design System
   Breakpoint variables.

   NOTE: If any of the values in this file are adjusted,
         they need to be adjusted in vars-breakpoints.js as well.
   ========================================================================== */
/* ==========================================================================
   Design System
   Grid mixins
   ========================================================================== */
/* stylelint-disable selector-class-pattern */
/* stylelint-disable selector-class-pattern */
/* stylelint-disable selector-class-pattern */
/* stylelint-disable selector-class-pattern */
/* ==========================================================================
   Design System
   Media queries
   ========================================================================== */
/* ==========================================================================
   Design System
   Base styles
   ========================================================================== */
/* ==========================================================================
   Design System
   Base styles
   ========================================================================== */
body {
  color: var(--black);
  font-family: var(--font-stack);
  font-size: 100%;
  line-height: 1.375;
  -webkit-font-smoothing: antialiased;
}

button,
input,
select,
textarea {
  font-family: var(--font-stack);
}

/*
 * On iOS Safari the input is collapsed till it's clicked.
 * This sets the default min width and height to what it would be if the
 * appearance was a textfield.
 */
input[type=date] {
  display: revert;
  min-width: 100px;
  min-height: 35px;
  padding-top: 0;
  padding-bottom: 0;
}
input[type=date].a-text-input--full {
  min-width: 100%;
}

hr {
  border: none;
  border-top: 1px solid var(--gray-40);
}

strong,
b {
  font-weight: 600;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
}

h1,
.h1 {
  font-size: 2.125em;
  font-weight: 600;
  letter-spacing: inherit;
  line-height: 1.25;
  text-transform: inherit;
  margin-bottom: 0.4411764706em;
}
p + h1, ul + h1, ol + h1, dl + h1, figure + h1, img + h1, table + h1, blockquote + h1,
p + .h1,
ul + .h1,
ol + .h1,
dl + .h1,
figure + .h1,
img + .h1,
table + .h1,
blockquote + .h1 {
  margin-top: 1.7647058824em;
}
@media only screen and (max-width: 37.5em) {
  p + h1, ul + h1, ol + h1, dl + h1, figure + h1, img + h1, table + h1, blockquote + h1,
  p + .h1,
  ul + .h1,
  ol + .h1,
  dl + .h1,
  figure + .h1,
  img + .h1,
  table + .h1,
  blockquote + .h1 {
    margin-top: 1.7307692308em;
  }
  h2 + h1, .h2 + h1, h3 + h1, .h3 + h1, h4 + h1, .h4 + h1, h5 + h1, .h5 + h1, h6 + h1, .h6 + h1,
  h2 + .h1,
  .h2 + .h1,
  h3 + .h1,
  .h3 + .h1,
  h4 + .h1,
  .h4 + .h1,
  h5 + .h1,
  .h5 + .h1,
  h6 + .h1,
  .h6 + .h1 {
    margin-top: 1.1538461538em;
  }
}
@media only screen and (max-width: 37.5em) {
  h1,
  .h1 {
    font-size: 1.625em;
    font-weight: 600;
    letter-spacing: inherit;
    line-height: 1.25;
    text-transform: inherit;
    margin-bottom: 0.5769230769em;
  }
  p + h1, ul + h1, ol + h1, dl + h1, figure + h1, img + h1, table + h1, blockquote + h1,
  p + .h1,
  ul + .h1,
  ol + .h1,
  dl + .h1,
  figure + .h1,
  img + .h1,
  table + .h1,
  blockquote + .h1 {
    margin-top: 1.7307692308em;
  }
  h1 + h1, .h1 + h1, h3 + h1, .h3 + h1, h4 + h1, .h4 + h1, h5 + h1, .h5 + h1, h6 + h1, .h6 + h1,
  h1 + .h1,
  .h1 + .h1,
  h3 + .h1,
  .h3 + .h1,
  h4 + .h1,
  .h4 + .h1,
  h5 + .h1,
  .h5 + .h1,
  h6 + .h1,
  .h6 + .h1 {
    margin-top: 1.1538461538em;
  }
}

h2,
.h2 {
  font-size: 1.625em;
  font-weight: 600;
  letter-spacing: inherit;
  line-height: 1.25;
  text-transform: inherit;
  margin-bottom: 0.5769230769em;
}
p + h2, ul + h2, ol + h2, dl + h2, figure + h2, img + h2, table + h2, blockquote + h2,
p + .h2,
ul + .h2,
ol + .h2,
dl + .h2,
figure + .h2,
img + .h2,
table + .h2,
blockquote + .h2 {
  margin-top: 1.7307692308em;
}
h1 + h2, .h1 + h2, h3 + h2, .h3 + h2, h4 + h2, .h4 + h2, h5 + h2, .h5 + h2, h6 + h2, .h6 + h2,
h1 + .h2,
.h1 + .h2,
h3 + .h2,
.h3 + .h2,
h4 + .h2,
.h4 + .h2,
h5 + .h2,
.h5 + .h2,
h6 + .h2,
.h6 + .h2 {
  margin-top: 1.1538461538em;
}
@media only screen and (max-width: 37.5em) {
  p + h2, ul + h2, ol + h2, dl + h2, figure + h2, img + h2, table + h2, blockquote + h2,
  p + .h2,
  ul + .h2,
  ol + .h2,
  dl + .h2,
  figure + .h2,
  img + .h2,
  table + .h2,
  blockquote + .h2 {
    margin-top: 1.3636363636em;
  }
}
@media only screen and (max-width: 37.5em) {
  h2,
  .h2 {
    font-size: 1.375em;
    font-weight: 600;
    letter-spacing: inherit;
    line-height: 1.25;
    text-transform: inherit;
    margin-bottom: 0.6818181818em;
  }
  p + h2, ul + h2, ol + h2, dl + h2, figure + h2, img + h2, table + h2, blockquote + h2, h1 + h2, .h1 + h2, h2 + h2, .h2 + h2, h4 + h2, .h4 + h2, h5 + h2, .h5 + h2, h6 + h2, .h6 + h2,
  p + .h2,
  ul + .h2,
  ol + .h2,
  dl + .h2,
  figure + .h2,
  img + .h2,
  table + .h2,
  blockquote + .h2,
  h1 + .h2,
  .h1 + .h2,
  h2 + .h2,
  .h2 + .h2,
  h4 + .h2,
  .h4 + .h2,
  h5 + .h2,
  .h5 + .h2,
  h6 + .h2,
  .h6 + .h2 {
    margin-top: 1.3636363636em;
  }
}

h3,
.h3 {
  font-size: 1.375em;
  font-weight: normal;
  letter-spacing: inherit;
  line-height: 1.25;
  text-transform: inherit;
  margin-bottom: 0.6818181818em;
}
p + h3, ul + h3, ol + h3, dl + h3, figure + h3, img + h3, table + h3, blockquote + h3, h1 + h3, .h1 + h3, h2 + h3, .h2 + h3, h4 + h3, .h4 + h3, h5 + h3, .h5 + h3, h6 + h3, .h6 + h3,
p + .h3,
ul + .h3,
ol + .h3,
dl + .h3,
figure + .h3,
img + .h3,
table + .h3,
blockquote + .h3,
h1 + .h3,
.h1 + .h3,
h2 + .h3,
.h2 + .h3,
h4 + .h3,
.h4 + .h3,
h5 + .h3,
.h5 + .h3,
h6 + .h3,
.h6 + .h3 {
  margin-top: 1.3636363636em;
}
@media only screen and (max-width: 37.5em) {
  h3,
  .h3 {
    font-size: 1.125em;
    font-weight: normal;
    letter-spacing: inherit;
    line-height: 1.25;
    text-transform: inherit;
    margin-bottom: 0.8333333333em;
  }
  p + h3, ul + h3, ol + h3, dl + h3, figure + h3, img + h3, table + h3, blockquote + h3, h1 + h3, .h1 + h3, h2 + h3, .h2 + h3, h3 + h3, .h3 + h3, h5 + h3, .h5 + h3, h6 + h3, .h6 + h3,
  p + .h3,
  ul + .h3,
  ol + .h3,
  dl + .h3,
  figure + .h3,
  img + .h3,
  table + .h3,
  blockquote + .h3,
  h1 + .h3,
  .h1 + .h3,
  h2 + .h3,
  .h2 + .h3,
  h3 + .h3,
  .h3 + .h3,
  h5 + .h3,
  .h5 + .h3,
  h6 + .h3,
  .h6 + .h3 {
    margin-top: 1.6666666667em;
  }
}

h4,
.h4 {
  font-size: 1.125em;
  font-weight: 500;
  letter-spacing: inherit;
  line-height: 1.25;
  text-transform: inherit;
  margin-bottom: 0.8333333333em;
}
p + h4, ul + h4, ol + h4, dl + h4, figure + h4, img + h4, table + h4, blockquote + h4, h1 + h4, .h1 + h4, h2 + h4, .h2 + h4, h3 + h4, .h3 + h4, h5 + h4, .h5 + h4, h6 + h4, .h6 + h4,
p + .h4,
ul + .h4,
ol + .h4,
dl + .h4,
figure + .h4,
img + .h4,
table + .h4,
blockquote + .h4,
h1 + .h4,
.h1 + .h4,
h2 + .h4,
.h2 + .h4,
h3 + .h4,
.h3 + .h4,
h5 + .h4,
.h5 + .h4,
h6 + .h4,
.h6 + .h4 {
  margin-top: 1.6666666667em;
}
@media only screen and (max-width: 37.5em) {
  h4,
  .h4 {
    margin-bottom: 0.625em;
    font-size: 1em;
    line-height: 1.125;
  }
}

h5,
.h5 {
  font-size: 0.875em;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1.25;
  text-transform: uppercase;
  margin-bottom: 1.0714285714em;
}
p + h5, ul + h5, ol + h5, dl + h5, figure + h5, img + h5, table + h5, blockquote + h5, h1 + h5, .h1 + h5, h2 + h5, .h2 + h5, h3 + h5, .h3 + h5, h4 + h5, .h4 + h5, h6 + h5, .h6 + h5,
p + .h5,
ul + .h5,
ol + .h5,
dl + .h5,
figure + .h5,
img + .h5,
table + .h5,
blockquote + .h5,
h1 + .h5,
.h1 + .h5,
h2 + .h5,
.h2 + .h5,
h3 + .h5,
.h3 + .h5,
h4 + .h5,
.h4 + .h5,
h6 + .h5,
.h6 + .h5 {
  margin-top: 2.1428571429em;
}

h6,
.h6 {
  font-size: 0.75em;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1.25;
  text-transform: uppercase;
  margin-bottom: 1.25em;
}
p + h6, ul + h6, ol + h6, dl + h6, figure + h6, img + h6, table + h6, blockquote + h6, h1 + h6, .h1 + h6, h2 + h6, .h2 + h6, h3 + h6, .h3 + h6, h4 + h6, .h4 + h6, h5 + h6, .h5 + h6,
p + .h6,
ul + .h6,
ol + .h6,
dl + .h6,
figure + .h6,
img + .h6,
table + .h6,
blockquote + .h6,
h1 + .h6,
.h1 + .h6,
h2 + .h6,
.h2 + .h6,
h3 + .h6,
.h3 + .h6,
h4 + .h6,
.h4 + .h6,
h5 + .h6,
.h5 + .h6 {
  margin-top: 2.5em;
}

.lead-paragraph {
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1.375em;
  font-weight: normal;
  letter-spacing: inherit;
  line-height: 1.25;
  text-transform: inherit;
}
@media only screen and (max-width: 37.5em) {
  .lead-paragraph {
    font-size: 1.125em;
    font-weight: normal;
    letter-spacing: inherit;
    line-height: 1.25;
    text-transform: inherit;
  }
}

.superheading {
  margin-bottom: 0.4166666667em;
  font-size: 3em;
  font-weight: normal;
  line-height: 1.25;
}

p,
ul,
ol,
dl,
figure,
table,
blockquote {
  margin-top: 0;
  margin-bottom: 0.9375em;
}
p:last-child,
ul:last-child,
ol:last-child,
dl:last-child,
figure:last-child,
table:last-child,
blockquote:last-child {
  margin-bottom: 0;
}

p + ul,
p + ol {
  margin-top: -0.3125em;
}

ul ul,
ol ol,
ul ol,
ol ul {
  margin-top: 0.5em;
}

li {
  margin-bottom: 0.5em;
}
li:last-child, nav li {
  margin-bottom: 0;
}

a {
  border-width: 0;
  border-style: dotted;
  border-color: var(--pacific);
  color: var(--pacific);
  text-decoration: none;
}
a:visited, a.visited {
  border-color: var(--teal);
  color: var(--teal);
}
a:hover, a.hover {
  border-style: solid;
  border-color: var(--pacific-dark);
  color: var(--pacific-dark);
}
a:focus, a.focus {
  border-style: solid;
  outline: thin dotted;
  outline-offset: 1px;
}
a:active, a.active {
  border-style: solid;
  border-color: var(--navy);
  color: var(--navy);
}

p a,
li a,
dd a {
  border-bottom-width: 1px;
}

nav a {
  border-bottom-width: 0;
}

ul {
  padding-left: 1.125em;
  list-style: square;
}

ul ul {
  list-style-type: circle;
}

ol {
  padding-left: 1.3125em;
}
ol li:nth-last-child(n+10),
ol li:nth-last-child(n+10) ~ li {
  margin-left: 0.5625rem;
}

ol ol {
  list-style-type: lower-alpha;
}
ol ol li {
  margin-left: 0 !important;
}

ol ol ol {
  list-style-type: lower-roman;
}

nav ul,
nav ol,
nav ul ul,
nav ol ol {
  list-style: none;
  list-style-image: none;
}

caption {
  margin-bottom: 0.625em;
  text-align: left;
}

th,
td {
  padding: 0.625em;
}
thead th,
thead td {
  padding: 0.7142857143em;
  background: var(--gray-5);
  color: var(--black);
  font-size: 1em;
  vertical-align: top;
}

thead,
tbody tr {
  border-bottom: 1px solid var(--gray);
}

th {
  font-weight: 600;
  text-align: left;
}
thead th h2,
thead th .h2,
thead th h3,
thead th .h3,
thead th h4,
thead th .h4,
thead th h5,
thead th .h5,
thead th h6,
thead th .h6 {
  margin: 0;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  text-transform: inherit;
}

blockquote {
  margin-right: 0.9375em;
  margin-left: 0.9375em;
}
@media only screen and (min-width: 37.5625em) {
  blockquote {
    margin-right: 1.875em;
    margin-left: 1.875em;
  }
}

img {
  max-width: 100%;
}

figure {
  margin-right: 0;
  margin-left: 0;
}
figure img {
  vertical-align: middle;
}

pre,
code {
  background: var(--gray-5);
  border-radius: 4px;
  color: var(--black);
  font-family: "Input Mono", Consolas, Monaco, "Courier New", monospace;
}

code {
  padding: 0.2307692308em 0.2307692308em 0;
  font-size: 0.8125em;
}

pre {
  display: block;
  padding: 0.625em 0.9375em;
  white-space: pre-wrap;
  overflow-wrap: break-word;
}
pre code {
  padding: 0;
  background-color: transparent;
}

/* ==========================================================================
   Design System
   Button Styling
   ========================================================================== */
button.a-btn::-moz-focus-inner,
input.a-btn::-moz-focus-inner {
  border: 0;
}

.a-btn {
  appearance: none;
  display: flex;
  gap: 0.625rem;
  box-sizing: border-box;
  padding: 0.5em 0.875em;
  border: 0;
  margin: 0;
  border-radius: 0.25em;
  cursor: pointer;
  font-size: 1em;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.1s;
  width: fit-content;
  height: fit-content;
  justify-content: center;
}
.a-btn, .a-btn:link, .a-btn:visited {
  background-color: var(--pacific);
  color: var(--white);
}
.a-btn:hover, .a-btn.hover, .a-btn:focus, .a-btn.focus {
  background-color: var(--pacific-dark);
  color: var(--white);
}
.a-btn:focus, .a-btn.focus {
  outline: 1px dotted var(--pacific);
  outline-offset: 1px;
}
.a-btn:active, .a-btn.active {
  background-color: var(--navy);
}
.a-btn--secondary, .a-btn--secondary:link, .a-btn--secondary:visited {
  background-color: var(--white);
  color: var(--pacific);
  box-shadow: 0 0 0 1px var(--pacific) inset;
}
.a-btn--secondary:hover, .a-btn--secondary.hover, .a-btn--secondary:focus, .a-btn--secondary.focus {
  background-color: var(--pacific-10);
  color: var(--pacific-dark);
  box-shadow: 0 0 0 1px var(--pacific-dark) inset;
}
.a-btn--secondary:focus, .a-btn--secondary.focus {
  outline-color: var(--pacific);
}
.a-btn--secondary:active, .a-btn--secondary.active {
  background-color: var(--pacific-20);
  color: var(--navy);
  box-shadow: 0 0 0 1px var(--navy) inset;
}
.a-btn--warning, .a-btn--warning:link, .a-btn--warning:visited {
  background-color: var(--red-mid-dark);
  color: var(--white);
}
.a-btn--warning:hover, .a-btn--warning.hover, .a-btn--warning:focus, .a-btn--warning.focus {
  background-color: var(--red-dark);
}
.a-btn--warning:focus, .a-btn--warning.focus {
  outline-color: var(--red-mid-dark);
}
.a-btn--warning:active, .a-btn--warning.active {
  background-color: var(--gray-dark);
}
.a-btn--disabled, .a-btn--disabled:link, .a-btn--disabled:visited, .a-btn--disabled:hover, .a-btn--disabled.hover, .a-btn--disabled:focus, .a-btn--disabled.focus, .a-btn--disabled:active, .a-btn--disabled.active, .a-btn[disabled], .a-btn[disabled]:link, .a-btn[disabled]:visited, .a-btn[disabled]:hover, .a-btn[disabled].hover, .a-btn[disabled]:focus, .a-btn[disabled].focus, .a-btn[disabled]:active, .a-btn[disabled].active {
  background-color: var(--gray-20);
  color: var(--gray-dark);
  cursor: default;
  cursor: not-allowed;
}
.a-btn--disabled:focus, .a-btn--disabled.focus, .a-btn[disabled]:focus, .a-btn[disabled].focus {
  outline-color: var(--gray-20);
}
@media only screen and (max-width: 37.5em) {
  .a-btn--full-on-xs {
    width: 100%;
  }
}
.a-btn:has(svg + span) span {
  order: 3;
}
.a-btn:has(span + svg) svg {
  order: 3;
  flex: none;
}
.a-btn:not(.a-btn--hide-icon):has(svg + span)::before, .a-btn:not(.a-btn--hide-icon):has(span + svg)::before {
  content: "";
  border-left: 1px solid var(--pacific-60);
  order: 2;
  place-self: normal;
}
.a-btn--secondary:has(svg)::before {
  border-color: var(--pacific-60) !important;
}
.a-btn--warning:has(svg)::before {
  border-color: var(--red-60) !important;
}
.a-btn--disabled:has(svg)::before, .a-btn[disabled]:has(svg)::before {
  border-color: var(--gray-60) !important;
}
.a-btn--hide-icon svg {
  display: none;
}

:host {
  display: flex;
  width: fit-content;
}`;var sa,da,ca,ue,yr,xr,pe=class extends(ca=G,da=[he()],sa=[he()],ca){constructor(){super(...arguments);re(this,yr,F(ue,8,this,!1)),F(ue,11,this);re(this,xr,F(ue,12,this)),F(ue,15,this)}get _btnClass(){let t="a-btn";switch(this.type){case"secondary":t+=" a-btn--secondary";break;case"warning":t+=" a-btn--warning";break;case"disabled":t+=" a-btn--disabled";break}return t}render(){return ct`
      <button class="${this._btnClass}" ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `}};ue=Fe(ca),yr=new WeakMap,xr=new WeakMap,ve(ue,4,"disabled",da,pe,yr),ve(ue,4,"type",sa,pe,xr),Ae(ue,pe),ye(pe,"styles",Le`
    ${we(la)}
  `);window.customElements.define("cfpb-button",pe);var{I:$l}=aa;var ha=r=>r.strings===void 0;var ua={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},_r=r=>(...e)=>({_$litDirective$:r,values:e}),ut=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,a){this._$Ct=e,this._$AM=t,this._$Ci=a}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var Be=(r,e)=>{var a;let t=r._$AN;if(t===void 0)return!1;for(let i of t)(a=i._$AO)==null||a.call(i,e,!1),Be(i,e);return!0},pt=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while((t==null?void 0:t.size)===0)},pa=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),yo(e)}};function go(r){this._$AN!==void 0?(pt(this),this._$AM=r,pa(this)):this._$AM=r}function vo(r,e=!1,t=0){let a=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(a))for(let o=t;o<a.length;o++)Be(a[o],!1),pt(a[o]);else a!=null&&(Be(a,!1),pt(a));else Be(this,r)}var yo=r=>{var e,t;r.type==ua.CHILD&&((e=r._$AP)!=null||(r._$AP=vo),(t=r._$AQ)!=null||(r._$AQ=go))},bt=class extends ut{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,a){super._$AT(e,t,a),pa(this),this.isConnected=e._$AU}_$AO(e,t=!0){var a,i;e!==this.isConnected&&(this.isConnected=e,e?(a=this.reconnected)==null||a.call(this):(i=this.disconnected)==null||i.call(this)),t&&(Be(this,e),pt(this))}setValue(e){if(ha(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};var Sr=()=>new kr,kr=class{},wr=new WeakMap,Er=_r(class extends bt{render(r){return L}update(r,[e]){var a;let t=e!==this.G;return t&&this.G!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=e,this.ht=(a=r.options)==null?void 0:a.host,this.rt(this.ct=r.element)),L}rt(r){var e;if(this.isConnected||(r=void 0),typeof this.G=="function"){let t=(e=this.ht)!=null?e:globalThis,a=wr.get(t);a===void 0&&(a=new WeakMap,wr.set(t,a)),a.get(this.G)!==void 0&&this.G.call(this.ht,void 0),a.set(this.G,r),r!==void 0&&this.G.call(this.ht,r)}else this.G.value=r}get lt(){var r,e,t;return typeof this.G=="function"?(e=wr.get((r=this.ht)!=null?r:globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var ba=`/* ==========================================================================
   Design System
   Variables
   ========================================================================== */
:root {
  --input-text-default: var(--black);
  --input-text-disabled-default: var(--gray-dark);
  --input-text-placeholder-default: var(--gray-dark);
  --input-border-default: var(--gray-60);
  --input-border-disabled: var(--gray-60);
  --input-border-success: var(--green);
  --input-border-warning: var(--gold);
  --input-border-error: var(--red);
  --input-border-hover-default: var(--pacific);
  --input-border-focus-default: var(--pacific);
  --input-bg-default: var(--white);
  --input-bg-disabled-default: var(--gray-10);
  --form-alert-icon-color-default: var(--gray);
  --form-alert-icon-color-success: var(--green);
  --form-alert-icon-color-warning: var(--gold);
  --form-alert-icon-color-error: var(--red);
  --select-border-default: var(--gray-60);
  --select-border-width-default: 1px;
  --select-border-error: var(--red);
  --select-border-width-error: 2px;
  --select-border-hover-default: var(--pacific);
  --select-border-focus-default: var(--pacific);
  --select-bg-disabled-default: var(--gray-10);
  --select-icon-bg-default: var(--gray-10);
  --select-text-disabled-default: var(--gray-dark);
  --choice-border-default: var(--gray-60);
  --choice-border-disabled: var(--gray-60);
  --choice-border-success: var(--green);
  --choice-border-warning: var(--gold);
  --choice-border-error: var(--red);
  --choice-border-hover-default: var(--pacific);
  --choice-border-focus-default: var(--pacific);
  --choice-outline-focus-default: var(--pacific);
  --choice-bg-default: var(--white);
  --choice-bg-disabled: var(--gray-10);
  --choice-bg-selected-default: var(--pacific);
  --choice-bg-selected-disabled: var(--gray-40);
  --choice-bg-selected-focus-default: var(--pacific);
  --choice-label-disabled-default: var(--gray-dark);
}

/* ==========================================================================
   Design System
   Breakpoint variables.

   NOTE: If any of the values in this file are adjusted,
         they need to be adjusted in vars-breakpoints.js as well.
   ========================================================================== */
/* ==========================================================================
   Design System
   Grid mixins
   ========================================================================== */
/* stylelint-disable selector-class-pattern */
/* stylelint-disable selector-class-pattern */
/* stylelint-disable selector-class-pattern */
/* stylelint-disable selector-class-pattern */
/* ==========================================================================
   Design System
   Media queries
   ========================================================================== */
/* ==========================================================================
   Design System
   Base styles
   ========================================================================== */
/* ==========================================================================
   Design System
   Button Styling
   ========================================================================== */
:host {
  display: flex;
  width: fit-content;
  flex-direction: column;
}

:host::part(upload-details)[hidden=true] {
  display: none;
}`;var fa,ma,ga,be,Ar,$r,Se,va,ya,fe=class extends(ga=G,ma=[he()],fa=[he()],ga){constructor(){super(...arguments);re(this,Se);re(this,Ar,F(be,8,this,!0)),F(be,11,this);re(this,$r,F(be,12,this,"")),F(be,15,this);ye(this,"fileInput",Sr());ye(this,"fileDetails",Sr())}render(){return ct`
      <cfpb-button
        type="secondary"
        @click="${()=>{this.fileInput.value.click()}}"
      >
        <slot></slot>
      </cfpb-button>
      <input
        id="file-upload"
        class="a-btn a-btn--secondary"
        type="file"
        hidden
        @input="${()=>Ge(this,Se,ya).call(this)}"
        ${Er(this.fileInput)}
      />
      <div
        part="upload-details"
        ?hidden=${this.areDetailHidden}
        ${Er(this.fileDetails)}
      >
        <h4>File added</h4>
        <ul>
          <li>${this.fileName}</li>
        </ul>
        <p>
          To remove or replace your file, select a new file and upload again.
        </p>
      </div>
    `}};be=Fe(ga),Ar=new WeakMap,$r=new WeakMap,Se=new WeakSet,va=function(t){let a=t;if(a.indexOf("\\")>-1){let i=a.split("\\");a=i[i.length-1]}return a},ya=function(){this.fileName=Ge(this,Se,va).call(this,this.fileInput.value.value),this.areDetailHidden=!1},ve(be,4,"areDetailHidden",ma,fe,Ar),ve(be,4,"fileName",fa,fe,$r),Ae(be,fe),ye(fe,"styles",Le`
    ${we(ba)}
  `);window.customElements.define("cfpb-file-upload",fe);var _o=document.createElement("template");_o.innerHTML=`
  <style>
      :host {
        font-size: 24px;
        font-family: arial;
      }
      article {
          display: flex;
          align-items: center;
      }
      label {
        background-color: rgb(239, 239, 239);
        border: 1px solid rgb(118, 118, 118);
        padding: 2px 6px 2px 6px;
        border-radius: 2px;
        margin-right: 5px;
      }
      button {
          border:0;
          background: transparent;
          cursor: pointer;
      }
      button::before {
          content: '\\2716';
      }
  </style>
  <article>
    <label part="button-upload" for="fileUpload">Upload</label>
    <section hidden>
      <span></span><button></button>
    </section>
  </article>
  <input hidden id="fileUpload" type="file" />
`;function ft(r,e){let t;if(ae(r,e))return t=r,t;if(r){let a="["+B+"="+e+"]";t=r.querySelector(a)}if(!t){let a=e+" behavior not found on passed DOM node!";throw new Error(a)}return t}var wo=Object.prototype.toString;var ko=Array.isArray||function(e){return wo.call(e)==="[object Array]"};function Dr(){return!!new RegExp(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i).test(navigator.userAgent)}var Ne=Je+"flyout-menu",So="["+B+"="+Ne;function Z(r,e=!0){let t=ft(r,Ne),a=A(r),i=ft(r,Ne+"_content"),o=0,n=0,l=1,s=2,c=3,h,d,m,f=me.bind(this),S=X.bind(this),E,$=!0,O=!1;function A(u){let p=[],b=u.querySelectorAll(`${So}_trigger]`),v,D,K;for(let V=b.length>>>0;V--;){for(K=!1,v=b[V],D=v.parentElement;D!==u;)D.getAttribute(B)&&D.getAttribute(B).split(" ").indexOf(Ne)!==-1?(K=!0,D=u):D=D.parentElement;K||p.unshift(b[V])}return p}function I(u=!1){return o=u?c:n,a.forEach(p=>{_("expanded",p,u),p.addEventListener("click",x.bind(this)),p.addEventListener("touchstart",g,{passive:!0}),p.addEventListener("mouseover",k.bind(this)),p.addEventListener("mouseout",T.bind(this))}),i.setAttribute("data-open",u?"true":"false"),e&&!u&&i.setAttribute("hidden",""),Re(),this}function _(u,p,b){let v=String(b);return p.setAttribute("aria-"+u,v),v}function g(){O=!0}function k(u){$||(O||this.dispatchEvent("triggerover",{target:this,trigger:u.target,type:"triggerover"}),O=!1)}function T(u){$||this.dispatchEvent("triggerout",{target:this,trigger:u.target,type:"triggerout"})}function x(u){if(!$)switch(this.dispatchEvent("triggerclick",{target:this,trigger:u.target,type:"triggerclick"}),u.preventDefault(),o){case n:case l:this.expand();break;case s:case c:this.collapse();break}}function C(){if(h==null||h.halt(),o===s||o===c)return this;if(o=s,e&&i.removeAttribute("hidden"),this.dispatchEvent("expandbegin",{target:this,type:"expandbegin"}),!d||!m)return S(),this;let u=h==null?void 0:h.isAnimated();return u&&h.addEventListener(w.END_EVENT,S),d(),u||S(),this}function q(){if(h==null||h.halt(),o===l||o===n)return this;for(let p=0,b=a.length;p<b;p++)_("expanded",a[p],!1);if(i.setAttribute("data-open","false"),o=l,this.dispatchEvent("collapsebegin",{target:this,type:"collapsebegin"}),!m||!d)return f(),this;let u=h==null?void 0:h.isAnimated();return u&&h.addEventListener(w.END_EVENT,f),m(),u||f(),this}function X(){o=c,i.setAttribute("data-open","true"),h&&h.removeEventListener(w.END_EVENT,S),this.dispatchEvent("expandend",{target:this,type:"expandend"});for(let u=0,p=a.length;u<p;u++)_("expanded",a[u],!0)}function me(){o=n,e&&i.setAttribute("hidden",""),h&&h.removeEventListener(w.END_EVENT,f),this.dispatchEvent("collapseend",{target:this,type:"collapseend"})}function Pe(u,p,b){h=u,p&&p!==m&&(m=p),b&&b!==d&&(d=b)}function yt(){h&&h.remove();let u;h=u,d=u,m=u}function xt(){return{container:t,content:i,trigger:a}}function Re(){return $&&($=!1),!$}function _t(){return $||($=!0),$}function wt(u){return E=u,this}let te=new j;return this.addEventListener=te.addEventListener,this.removeEventListener=te.removeEventListener,this.dispatchEvent=te.dispatchEvent,this.init=I,this.expand=C,this.collapse=q,this.setTransition=Pe,this.clearTransition=yt,this.getData=()=>E,this.getTransition=()=>h,this.getDom=xt,this.isAnimating=()=>o===s||o===l,this.isExpanded=()=>o===c,this.resume=Re,this.setData=wt,this.suspend=_t,Z.BASE_CLASS=Ne,this}var mt={CSS_PROPERTY:"opacity",BASE_CLASS:"u-alpha-transition",ALPHA_100:"u-alpha-100",ALPHA_0:"u-alpha-0"};function xa(r){let e=new j,t=new w(r,mt,this);function a(n){return t.init(n),this}function i(){return t.applyClass(mt.ALPHA_100),this}function o(){return t.applyClass(mt.ALPHA_0),this}return this.addEventListener=e.addEventListener,this.dispatchEvent=e.dispatchEvent,this.removeEventListener=e.removeEventListener,this.animateOff=t.animateOff,this.animateOn=t.animateOn,this.halt=t.halt,this.isAnimated=t.isAnimated,this.remove=t.remove,this.setElement=t.setElement,this.fadeIn=i,this.fadeOut=o,this.init=a,this}xa.CLASSES=mt;function w(r,e,t){let a=e,i=r;if(!t)throw new Error("Child transition argument must be defined!");let o=t,n,l,s,c=!1,h=!1,d=!1;if(typeof a.CSS_PROPERTY=="undefined"||typeof a.BASE_CLASS=="undefined")throw new Error("Transitions require CSS_PROPERTY and BASE_CLASS to be passed into BaseTransition.");function m(){l&&c?(i.addEventListener(l,s),o.dispatchEvent(w.BEGIN_EVENT,{target:o,type:w.BEGIN_EVENT}),i.classList.add(w.ANIMATING_CLASS),h=!0):(o.dispatchEvent(w.BEGIN_EVENT,{target:o,type:w.BEGIN_EVENT}),s())}function f(){i.removeEventListener(l,s)}function S(x){return x&&x.propertyName!==a.CSS_PROPERTY?!1:(f(),i.classList.remove(w.ANIMATING_CLASS),o.dispatchEvent(w.END_EVENT,{target:o,type:w.END_EVENT}),h=!1,!0)}function E(){let x;for(x in a)({}).hasOwnProperty.call(a,x)&&a[x]!==a.BASE_CLASS&&i.classList.contains(a[x])&&i.classList.remove(a[x])}function $(){h&&(i.style.webkitTransitionDuration="0",i.style.mozTransitionDuration="0",i.style.oTransitionDuration="0",i.style.transitionDuration="0",i.removeEventListener(l,s),s(),i.style.webkitTransitionDuration="",i.style.mozTransitionDuration="",i.style.oTransitionDuration="",i.style.transitionDuration="")}function O(){$(),E(),i.classList.remove(a.BASE_CLASS)}function A(){i.classList.remove(w.NO_ANIMATION_CLASS),c=!0}function I(){i.classList.add(w.NO_ANIMATION_CLASS),c=!1}function _(x){if(!x){let me="Element does not have TransitionEnd event. It may be null!";throw new Error(me)}let C,q={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},X;for(X in q)if({}.hasOwnProperty.call(q,X)&&typeof x.style[X]!="undefined"){C=q[X];break}return C}function g(x){O(),A(),i=x,i.classList.add(a.BASE_CLASS),l=_(i)}function k(x){if(c=!i.classList.contains(w.NO_ANIMATION_CLASS),s=S.bind(this),g(i),!x)throw new Error("Transition needs to be passed an initial CSS class on initialization!");return i.classList.add(x),this}function T(x){return d||(E(),d=!0),i.classList.contains(x)?!1:(f(),i.classList.remove(n),n=x,m(),i.classList.add(n),!0)}return this.animateOff=I,this.animateOn=A,this.applyClass=T,this.halt=$,this.init=k,this.isAnimated=()=>c,this.remove=O,this.setElement=g,this}w.BEGIN_EVENT="transitionbegin";w.END_EVENT="transitionend";w.NO_ANIMATION_CLASS="u-no-animation";w.ANIMATING_CLASS="u-is-animating";var qe={CSS_PROPERTY:"max-height",BASE_CLASS:"u-max-height-transition",MH_DEFAULT:"u-max-height-default",MH_SUMMARY:"u-max-height-summary",MH_ZERO:"u-max-height-zero"};function M(r){let e=new j,t=new w(r,qe,this),a=0;function i(){let m=r.scrollHeight+"px";r.style.maxHeight=m}function o(){window.removeEventListener("load",o),i()}function n(d){return t.init(d),window.addEventListener("load",o),window.addEventListener("resize",()=>{i()}),this}function l(){return i(),t.applyClass(qe.MH_DEFAULT),(!a||r.scrollHeight>a)&&(a=r.scrollHeight),this}function s(){return t.applyClass(qe.MH_SUMMARY),a=r.scrollHeight,this}function c(){return t.applyClass(qe.MH_ZERO),a=r.scrollHeight,this}function h(){return r.style.maxHeight="",t.remove()}return this.addEventListener=e.addEventListener,this.dispatchEvent=e.dispatchEvent,this.removeEventListener=e.removeEventListener,this.animateOff=t.animateOff,this.animateOn=t.animateOn,this.halt=t.halt,this.isAnimated=t.isAnimated,this.setElement=t.setElement,this.refresh=i,this.remove=h,this.init=n,this.maxHeightDefault=l,this.maxHeightSummary=s,this.maxHeightZero=c,this}M.CLASSES=qe;var ee={CSS_PROPERTY:"transform",BASE_CLASS:"u-move-transition",MOVE_TO_ORIGIN:"u-move-to-origin",MOVE_LEFT:"u-move-left",MOVE_LEFT_2X:"u-move-left-2x",MOVE_LEFT_3X:"u-move-left-3x",MOVE_RIGHT:"u-move-right",MOVE_UP:"u-move-up"};function _a(r){let e=new j,t=new w(r,ee,this);function a(s){return t.init(s),this}function i(){return t.applyClass(ee.MOVE_TO_ORIGIN),this}function o(s){s=s||1;let c=[ee.MOVE_LEFT,ee.MOVE_LEFT_2X,ee.MOVE_LEFT_3X];return t.applyClass(c[s-1]),this}function n(){return t.applyClass(ee.MOVE_RIGHT),this}function l(){return t.applyClass(ee.MOVE_UP),this}return this.addEventListener=e.addEventListener,this.dispatchEvent=e.dispatchEvent,this.removeEventListener=e.removeEventListener,this.animateOff=t.animateOff,this.animateOn=t.animateOn,this.halt=t.halt,this.isAnimated=t.isAnimated,this.setElement=t.setElement,this.remove=t.remove,this.init=a,this.moveLeft=()=>o(1),this.moveLeft2=()=>o(2),this.moveLeft3=()=>o(3),this.moveRight=n,this.moveToOrigin=i,this.moveUp=l,this}_a.CLASSES=ee;var Ao;function $o(r){return r.replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&")}function Do(r,e){return RegExp($o(e.trim()),"i").test(r)}function Lo(r,e,t){let a=r,i=e,o=(t==null?void 0:t.maxSelections)||5,n=[],l=[],s=[],c=[],h=-1;function d(g){return i+"-"+g.value.trim().replace(/\s+/g,"-").toLowerCase()}function m(){return l.length>=o}function f(g){let k,T=[],x=!1;for(let C=0,q=g.length;C<q;C++)k=g[C],x=m()?!1:k.defaultSelected,T.push({id:d(k),value:k.value,text:k.text,checked:x}),x&&l.push(C);return T}function S(){return n=f(a),this}function E(g){return n[g].checked=!n[g].checked,l.length<o&&n[g].checked?(l.push(g),l.sort(),!0):(n[g].checked=!1,l=l.filter(function(k){return k!==g}),!1)}function $(g,k,T,x){return Do(k.text,x)&&g.push(T),g}function O(g){return Object.prototype.toString.call(g)!=="[object String]"&&(g=""),c=s,n.length>0&&(s=n.reduce(function(k,T,x){return $(k,T,x,g)},[])),h=-1,s}function A(g){return n[g]}function I(g){let k=s.length,T=k===0?n.length:k;g<0?h=-1:g>=T?h=T-1:h=g}function _(){return h}return this.init=S,this.toggleOption=E,this.getSelectedIndices=function(){return l},this.isAtMaxSelections=m,this.filterIndices=O,this.clearFilter=function(){return s=c=[],Ao},this.getFilterIndices=function(){return s},this.getLastFilterIndices=function(){return c},this.getIndex=_,this.setIndex=I,this.resetIndex=function(){return h=-1,h},this.getOption=A,this}var wa=Lo;function H(r,e,t){let a=document.createElement(r);return Object.keys(t).forEach(i=>{let o=t[i];i in a?a[i]=o:a.setAttribute(i,o)}),e&&e.appendChild(a),a}var ka='<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="cf-icon-svg cf-icon-svg--error" viewBox="0 0 12 19"><path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"/></svg>';var Co=ka,U="o-multiselect",Io="a-checkbox",Mo="a-text-input",Sa="prev",gt="next",Lr="Enter",Bo=" ",Ea="Escape",No="ArrowUp",Aa="ArrowDown",$a="Tab",Da={renderTags:!0,maxSelections:5};function vt(r){r.classList.add(U);let e=P(r,U),t=!1,a,i,o,n,l,s,c,h,d,m,f,S=[],E;function $(){f.classList.remove("u-no-results"),f.classList.add("u-filtered");let u=o.getLastFilterIndices();for(let p=0,b=u.length;p<b;p++)S[u[p]].classList.remove("u-filter-match");u=o.getFilterIndices();for(let p=0,b=u.length;p<b;p++)S[u[p]].classList.add("u-filter-match")}function O(){f.classList.remove("u-filtered","u-no-results");for(let u=0,p=f.children.length;u<p;u++)f.children[u].classList.remove("u-filter-match");o.clearFilter()}function A(){f.classList.add("u-no-results"),f.classList.remove("u-filtered")}function I(u){return u.length>0?($(),!0):(A(),!1)}function _(u){O(),o.resetIndex();let p=o.filterIndices(u);I(p)}function g(){return s.classList.add("u-active"),m.classList.remove("u-invisible"),m.setAttribute("aria-hidden",!1),E.dispatchEvent("expandbegin",{target:E}),E}function k(){return s.classList.remove("u-active"),m.classList.add("u-invisible"),m.setAttribute("aria-hidden",!0),o.resetIndex(),E.dispatchEvent("collapsebegin",{target:E}),E}function T(u){u===gt?o.setIndex(o.getIndex()+1):u===Sa&&o.setIndex(o.getIndex()-1);let p=o.getIndex();if(p>-1){let b=p,v=o.getFilterIndices();v.length>0&&(b=v[p]);let K=o.getOption(b).value,La=f.querySelector('[data-option="'+K+'"]').querySelector("input");t=!0,La.focus()}else t=!1,d.focus()}function x(){d.value="",O()}function C(u){let p=u.target;p.tagName==="BUTTON"&&(u.preventDefault(),p.removeEventListener("click",C),p.querySelector("label").click())}function q(u){if(u.key===Bo||u.key===Lr){let p=u.target.querySelector("label");f.querySelector("#"+p.getAttribute("for")).click()}}function X(u){return a+"-"+u.value.trim().replace(/[^\w]/g,"-").toLowerCase()}function me(u,p){let b=X(p),v=H("li",null,{"data-option":p.value}),D=H("button",v,{type:"button",class:"a-tag-filter",innerHTML:"<label for="+b+">"+p.text+Co+"</label>"});u.appendChild(v),D.addEventListener("click",C),D.addEventListener("keydown",q)}function Pe(u){let p=o.getOption(u)||o.getOption(o.getIndex());if(p){if(p.checked){f.classList.contains("u-max-selections")&&f.classList.remove("u-max-selections");let b='[data-option="'+p.value+'"]',v=c.querySelector(b);typeof v!="undefined"&&v&&(c==null||c.removeChild(v))}else l!=null&&l.renderTags&&c&&me(c,p);o.toggleOption(u),o.isAtMaxSelections()&&f.classList.add("u-max-selections"),E.dispatchEvent("selectionsupdated",{target:E})}o.resetIndex(),t=!1,m.getAttribute("aria-hidden")==="false"&&d.focus()}function yt(u){Pe(Number(u.target.getAttribute("data-index"))),x()}function xt(){h.addEventListener("mousemove",function(b){let v=b.target;b.offsetX>v.offsetWidth-35?v.style.cursor="pointer":v.style.cursor="auto"}),h.addEventListener("mouseup",function(b){let v=b.target;b.offsetX>v.offsetWidth-35&&m.offsetHeight===140&&d.blur()}),d.addEventListener("input",function(){_(this.value)}),d.addEventListener("focus",function(){m.getAttribute("aria-hidden")==="true"&&g()}),d.addEventListener("blur",function(){!t&&m.getAttribute("aria-hidden")==="false"&&k()}),d.addEventListener("keydown",function(b){let v=b.key;m.getAttribute("aria-hidden")==="true"&&v!==$a&&g(),v===Lr?(b.preventDefault(),T(gt)):v===Ea?(x(),k()):v===Aa?T(gt):v===$a&&!b.shiftKey&&m.getAttribute("aria-hidden")==="false"&&k()}),f.addEventListener("mousedown",function(){t=!0}),f.addEventListener("keydown",function(b){let v=b.key,D=b.target,K=D.checked;if(v===Lr){b.preventDefault(),D.checked=!K;let V=new Event("change",{bubbles:!1,cancelable:!0});D.dispatchEvent(V)}else v===Ea?(d.focus(),k()):v===No?T(Sa):v===Aa&&T(gt)}),m.addEventListener("mousedown",function(b){b.target.tagName==="LABEL"&&(t=!0)});let u=f.querySelectorAll("input");for(let b=0,v=u.length;b<v;b++)u[b].addEventListener("change",yt);let p=c.querySelectorAll("button");for(let b=0,v=p.length;b<v;b++)p[b].addEventListener("click",C),p[b].addEventListener("keydown",q)}function Re(){s=document.createElement("div"),s.className=U,c=H("ul",null,{className:"m-tag-group"}),h=H("header",s,{className:U+"__header"}),d=H("input",h,{className:U+"__search "+Mo,type:"text",placeholder:i||"Select up to five",id:e.id,autocomplete:"off"}),m=H("fieldset",s,{className:U+"__fieldset u-invisible","aria-hidden":"true"});let u=U+"__options";o.isAtMaxSelections()&&(u+=" u-max-selections"),f=H("ul",m,{className:u});let p,b,v;for(let D=0,K=n.length;D<K;D++){p=n[D],b=X(p),v=o.getOption(D).checked;let V=H("li",f,{"data-option":p.value,"data-cy":"multiselect-option",class:"m-form-field m-form-field--checkbox"});H("input",V,{id:b,type:"checkbox",value:p.value,name:a,class:Io+" "+U+"__checkbox",checked:v,"data-index":D}),H("label",V,{for:b,textContent:p.text,className:U+"__label a-label"}),S.push(V),v&&(l!=null&&l.renderTags)&&me(c,p)}return s.insertBefore(c,h),e.parentNode.insertBefore(s,e),s.appendChild(e),s}function _t(u=Da){if(!N(e))return this;if(Dr())return this;if(E=this,a=e.name||e.id,i=e.getAttribute("placeholder"),n=e.options||[],l=Ve(Ve({},Da),u),n.length>0){o=new wa(n,a,l).init();let p=Re();e.parentNode.removeChild(e),e=p,N(e),xt()}return this}function wt(){return o}this.init=_t,this.expand=g,this.collapse=k;let te=new j;return this.addEventListener=te.addEventListener,this.removeEventListener=te.removeEventListener,this.dispatchEvent=te.dispatchEvent,this.getModel=wt,this.updateSelections=Pe,this.selectionClickHandler=C,this.selectionKeyDownHandler=q,this}vt.BASE_CLASS=U;vt.init=r=>R(`.${U}`,vt,void 0,r);})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
lit-html/directive.js:
lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=index.js.map
