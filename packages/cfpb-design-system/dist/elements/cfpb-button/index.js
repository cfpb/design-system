(()=>{var rt=Object.create;var Q=Object.defineProperty;var ot=Object.getOwnPropertyDescriptor;var Se=(o,e)=>(e=Symbol[o])?e:Symbol.for("Symbol."+o),P=o=>{throw TypeError(o)};var Ee=(o,e,t)=>e in o?Q(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var we=(o,e)=>Q(o,"name",{value:e,configurable:!0});var ke=o=>{var e;return[,,,rt((e=o==null?void 0:o[Se("metadata")])!=null?e:null)]},Ce=["class","method","getter","setter","accessor","field","value","get","set"],q=o=>o!==void 0&&typeof o!="function"?P("Function expected"):o,nt=(o,e,t,i,r)=>({kind:Ce[o],name:e,metadata:i,addInitializer:s=>t._?P("Already initialized"):r.push(q(s||null))}),Y=(o,e)=>Ee(e,Se("metadata"),o[3]),U=(o,e,t,i)=>{for(var r=0,s=o[e>>1],n=s&&s.length;r<n;r++)e&1?s[r].call(t):i=s[r].call(t,i);return i},ee=(o,e,t,i,r,s)=>{var n,h,a,d,c,l=e&7,m=!!(e&8),p=!!(e&16),y=l>3?o.length+1:l?m?1:2:0,$e=Ce[l+5],_e=l>3&&(o[y-1]=[]),it=o[y]||(o[y]=[]),b=l&&(!p&&!m&&(r=r.prototype),l<5&&(l>3||!p)&&ot(l<4?r:{get[t](){return xe(this,s)},set[t](f){return Ae(this,s,f)}},t));l?p&&l<4&&we(s,(l>2?"set ":l>1?"get ":"")+t):we(r,t);for(var G=i.length-1;G>=0;G--)d=nt(l,t,a={},o[3],it),l&&(d.static=m,d.private=p,c=d.access={has:p?f=>st(r,f):f=>t in f},l^3&&(c.get=p?f=>(l^1?xe:at)(f,r,l^4?s:b.get):f=>f[t]),l>2&&(c.set=p?(f,X)=>Ae(f,r,X,l^4?s:b.set):(f,X)=>f[t]=X)),h=(0,i[G])(l?l<4?p?s:b[$e]:l>4?void 0:{get:b.get,set:b.set}:r,d),a._=1,l^4||h===void 0?q(h)&&(l>4?_e.unshift(h):l?p?s=h:b[$e]=h:r=h):typeof h!="object"||h===null?P("Object expected"):(q(n=h.get)&&(b.get=n),q(n=h.set)&&(b.set=n),q(n=h.init)&&_e.unshift(n));return l||Y(o,r),b&&Q(r,t,b),p?l^4?s:b:r},Pe=(o,e,t)=>Ee(o,typeof e!="symbol"?e+"":e,t),te=(o,e,t)=>e.has(o)||P("Cannot "+t),st=(o,e)=>Object(e)!==e?P('Cannot use the "in" operator on this value'):o.has(e),xe=(o,e,t)=>(te(o,e,"read from private field"),t?t.call(o):e.get(o)),ie=(o,e,t)=>e.has(o)?P("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(o):e.set(o,t),Ae=(o,e,t,i)=>(te(o,e,"write to private field"),i?i.call(o,t):e.set(o,t),t),at=(o,e,t)=>(te(o,e,"access private method"),t);var re=(o,e,t)=>new Promise((i,r)=>{var s=a=>{try{h(t.next(a))}catch(d){r(d)}},n=a=>{try{h(t.throw(a))}catch(d){r(d)}},h=a=>a.done?i(a.value):Promise.resolve(a.value).then(s,n);h((t=t.apply(o,e)).next())});var B=globalThis,F=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,oe=Symbol(),ze=new WeakMap,R=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==oe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(F&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=ze.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ze.set(t,e))}return e}toString(){return this.cssText}},V=o=>new R(typeof o=="string"?o:o+"",void 0,oe),ne=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((i,r,s)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[s+1],o[0]);return new R(t,o,oe)},Oe=(o,e)=>{if(F)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let i=document.createElement("style"),r=B.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,o.appendChild(i)}},se=F?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return V(t)})(o):o;var{is:ht,defineProperty:lt,getOwnPropertyDescriptor:dt,getOwnPropertyNames:ct,getOwnPropertySymbols:pt,getPrototypeOf:ut}=Object,v=globalThis,qe=v.trustedTypes,mt=qe?qe.emptyScript:"",ae=v.reactiveElementPolyfillSupport,T=(o,e)=>o,M={toAttribute(o,e){switch(e){case Boolean:o=o?mt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch(i){t=null}}return t}},W=(o,e)=>!ht(o,e),Ue={attribute:!0,type:String,converter:M,reflect:!1,useDefault:!1,hasChanged:W},Re,Te;(Re=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(Te=v.litPropertyMetadata)!=null||(v.litPropertyMetadata=new WeakMap);var g=class extends HTMLElement{static addInitializer(e){var t;this._$Ei(),((t=this.l)!=null?t:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ue){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&lt(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){var n;let{get:r,set:s}=(n=dt(this.prototype,e))!=null?n:{get(){return this[t]},set(h){this[t]=h}};return{get:r,set(h){let a=r==null?void 0:r.call(this);s==null||s.call(this,h),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return(t=this.elementProperties.get(e))!=null?t:Ue}static _$Ei(){if(this.hasOwnProperty(T("elementProperties")))return;let e=ut(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T("properties"))){let t=this.properties,i=[...ct(t),...pt(t)];for(let r of i)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(let[t,i]of this.elementProperties){let r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let r of i)t.unshift(se(r))}else e!==void 0&&t.push(se(e));return t}static _$Eu(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$EO)!=null?t:this._$EO=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)==null||i.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var t;let e=(t=this.shadowRoot)!=null?t:this.attachShadow(this.constructor.shadowRootOptions);return Oe(e,this.constructor.elementStyles),e}connectedCallback(){var e,t;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostConnected)==null?void 0:r.call(i)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var s;let i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){let n=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:M).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){var s,n,h,a;let i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let d=i.getPropertyOptions(r),c=typeof d.converter=="function"?{fromAttribute:d.converter}:((s=d.converter)==null?void 0:s.fromAttribute)!==void 0?d.converter:M;this._$Em=r,this[r]=(a=(h=c.fromAttribute(t,d.type))!=null?h:(n=this._$Ej)==null?void 0:n.get(r))!=null?a:null,this._$Em=null}}requestUpdate(e,t,i){var r,s;if(e!==void 0){let n=this.constructor,h=this[e];if(i!=null||(i=n.getPropertyOptions(e)),!(((r=i.hasChanged)!=null?r:W)(h,t)||i.useDefault&&i.reflect&&h===((s=this._$Ej)==null?void 0:s.get(e))&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:s},n){var h,a,d;i&&!((h=this._$Ej)!=null?h:this._$Ej=new Map).has(e)&&(this._$Ej.set(e,(a=n!=null?n:t)!=null?a:this[e]),s!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&((d=this._$Eq)!=null?d:this._$Eq=new Set).add(e))}_$EP(){return re(this,null,function*(){this.isUpdatePending=!0;try{yield this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&(yield e),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i,r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((i=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[n,h]of this._$Ep)this[n]=h;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[n,h]of s){let{wrapped:a}=h,d=this[n];a!==!0||this._$AL.has(n)||d===void 0||this.C(n,void 0,h,d)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}},Me;g.elementStyles=[],g.shadowRootOptions={mode:"open"},g[T("elementProperties")]=new Map,g[T("finalized")]=new Map,ae==null||ae({ReactiveElement:g}),((Me=v.reactiveElementVersions)!=null?Me:v.reactiveElementVersions=[]).push("2.1.0");var N=globalThis,K=N.trustedTypes,He=K?K.createPolicy("lit-html",{createHTML:o=>o}):void 0,Fe="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,Ve="?"+$,ft=`<${Ve}>`,A=document,D=()=>A.createComment(""),j=o=>o===null||typeof o!="object"&&typeof o!="function",fe=Array.isArray,bt=o=>fe(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",he=`[ 	
\f\r]`,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ne=/-->/g,De=/>/g,w=RegExp(`>|${he}(?:([^\\s"'>=/]+)(${he}*=${he}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),je=/'/g,Ie=/"/g,We=/^(?:script|style|textarea|title)$/i,be=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),Ke=be(1),kt=be(2),Ct=be(3),S=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Le=new WeakMap,x=A.createTreeWalker(A,129);function Ze(o,e){if(!fe(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return He!==void 0?He.createHTML(e):e}var gt=(o,e)=>{let t=o.length-1,i=[],r,s=e===2?"<svg>":e===3?"<math>":"",n=H;for(let h=0;h<t;h++){let a=o[h],d,c,l=-1,m=0;for(;m<a.length&&(n.lastIndex=m,c=n.exec(a),c!==null);)m=n.lastIndex,n===H?c[1]==="!--"?n=Ne:c[1]!==void 0?n=De:c[2]!==void 0?(We.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=w):c[3]!==void 0&&(n=w):n===w?c[0]===">"?(n=r!=null?r:H,l=-1):c[1]===void 0?l=-2:(l=n.lastIndex-c[2].length,d=c[1],n=c[3]===void 0?w:c[3]==='"'?Ie:je):n===Ie||n===je?n=w:n===Ne||n===De?n=H:(n=w,r=void 0);let p=n===w&&o[h+1].startsWith("/>")?" ":"";s+=n===H?a+ft:l>=0?(i.push(d),a.slice(0,l)+Fe+a.slice(l)+$+p):a+$+(l===-2?h:p)}return[Ze(o,s+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},I=class o{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let s=0,n=0,h=e.length-1,a=this.parts,[d,c]=gt(e,t);if(this.el=o.createElement(d,i),x.currentNode=this.el.content,t===2||t===3){let l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(r=x.nextNode())!==null&&a.length<h;){if(r.nodeType===1){if(r.hasAttributes())for(let l of r.getAttributeNames())if(l.endsWith(Fe)){let m=c[n++],p=r.getAttribute(l).split($),y=/([.?@])?(.*)/.exec(m);a.push({type:1,index:s,name:y[2],strings:p,ctor:y[1]==="."?ce:y[1]==="?"?pe:y[1]==="@"?ue:O}),r.removeAttribute(l)}else l.startsWith($)&&(a.push({type:6,index:s}),r.removeAttribute(l));if(We.test(r.tagName)){let l=r.textContent.split($),m=l.length-1;if(m>0){r.textContent=K?K.emptyScript:"";for(let p=0;p<m;p++)r.append(l[p],D()),x.nextNode(),a.push({type:2,index:++s});r.append(l[m],D())}}}else if(r.nodeType===8)if(r.data===Ve)a.push({type:2,index:s});else{let l=-1;for(;(l=r.data.indexOf($,l+1))!==-1;)a.push({type:7,index:s}),l+=$.length-1}s++}}static createElement(e,t){let i=A.createElement("template");return i.innerHTML=e,i}};function z(o,e,t=o,i){var n,h,a;if(e===S)return e;let r=i!==void 0?(n=t._$Co)==null?void 0:n[i]:t._$Cl,s=j(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((h=r==null?void 0:r._$AO)==null||h.call(r,!1),s===void 0?r=void 0:(r=new s(o),r._$AT(o,t,i)),i!==void 0?((a=t._$Co)!=null?a:t._$Co=[])[i]=r:t._$Cl=r),r!==void 0&&(e=z(o,r._$AS(o,e.values),r,i)),e}var de=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var d;let{el:{content:t},parts:i}=this._$AD,r=((d=e==null?void 0:e.creationScope)!=null?d:A).importNode(t,!0);x.currentNode=r;let s=x.nextNode(),n=0,h=0,a=i[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new L(s,s.nextSibling,this,e):a.type===1?c=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(c=new me(s,this,e)),this._$AV.push(c),a=i[++h]}n!==(a==null?void 0:a.index)&&(s=x.nextNode(),n++)}return x.currentNode=A,r}p(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},L=class o{get _$AU(){var e,t;return(t=(e=this._$AM)==null?void 0:e._$AU)!=null?t:this._$Cv}constructor(e,t,i,r){var s;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=(s=r==null?void 0:r.isConnected)!=null?s:!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=z(this,e,t),j(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==S&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):bt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==u&&j(this._$AH)?this._$AA.nextSibling.data=e:this.T(A.createTextNode(e)),this._$AH=e}$(e){var s;let{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=I.createElement(Ze(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(t);else{let n=new de(r,this),h=n.u(this.options);n.p(t),this.T(h),this._$AH=n}}_$AC(e){let t=Le.get(e.strings);return t===void 0&&Le.set(e.strings,t=new I(e)),t}k(e){fe(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,r=0;for(let s of e)r===t.length?t.push(i=new o(this.O(D()),this.O(D()),this,this.options)):i=t[r],i._$AI(s),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){let r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},O=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,s){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}_$AI(e,t=this,i,r){let s=this.strings,n=!1;if(s===void 0)e=z(this,e,t,0),n=!j(e)||e!==this._$AH&&e!==S,n&&(this._$AH=e);else{let h=e,a,d;for(e=s[0],a=0;a<s.length-1;a++)d=z(this,h[i+a],t,a),d===S&&(d=this._$AH[a]),n||(n=!j(d)||d!==this._$AH[a]),d===u?e=u:e!==u&&(e+=(d!=null?d:"")+s[a+1]),this._$AH[a]=d}n&&!r&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},ce=class extends O{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}},pe=class extends O{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}},ue=class extends O{constructor(e,t,i,r,s){super(e,t,i,r,s),this.type=5}_$AI(e,t=this){var n;if((e=(n=z(this,e,t,0))!=null?n:u)===S)return;let i=this._$AH,r=e===u&&i!==u||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==u&&(i===u||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)==null?void 0:t.host)!=null?i:this.element,e):this._$AH.handleEvent(e)}},me=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){z(this,e)}};var le=N.litHtmlPolyfillSupport,Be;le==null||le(I,L),((Be=N.litHtmlVersions)!=null?Be:N.litHtmlVersions=[]).push("3.3.0");var Je=(o,e,t)=>{var s,n;let i=(s=t==null?void 0:t.renderBefore)!=null?s:e,r=i._$litPart$;if(r===void 0){let h=(n=t==null?void 0:t.renderBefore)!=null?n:null;i._$litPart$=r=new L(e.insertBefore(D(),h),h,void 0,t!=null?t:{})}return r._$AI(o),r};var E=globalThis,_=class extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;let e=super.createRenderRoot();return(i=(t=this.renderOptions).renderBefore)!=null||(t.renderBefore=e.firstChild),e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Je(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return S}},Ge;_._$litElement$=!0,_.finalized=!0,(Ge=E.litElementHydrateSupport)==null||Ge.call(E,{LitElement:_});var ge=E.litElementPolyfillSupport;ge==null||ge({LitElement:_});var Xe;((Xe=E.litElementVersions)!=null?Xe:E.litElementVersions=[]).push("4.2.0");var yt={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:W},vt=(o=yt,e,t)=>{let{kind:i,metadata:r}=t,s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),i==="setter"&&((o=Object.create(o)).wrapped=!0),s.set(t.name,o),i==="accessor"){let{name:n}=t;return{set(h){let a=e.get.call(this);e.set.call(this,h),this.requestUpdate(n,a,o)},init(h){return h!==void 0&&this.C(n,void 0,o,h),h}}}if(i==="setter"){let{name:n}=t;return function(h){let a=this[n];e.call(this,h),this.requestUpdate(n,a,o)}}throw Error("Unsupported decorator location: "+i)};function Z(o){return(e,t)=>typeof t=="object"?vt(o,e,t):((i,r,s)=>{let n=r.hasOwnProperty(s);return r.constructor.createProperty(s,i),n?Object.getOwnPropertyDescriptor(r,s):void 0})(o,e,t)}var Qe=`@charset "UTF-8";
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
}`;var Ye,et,tt,k,ye,ve,C=class extends(tt=_,et=[Z()],Ye=[Z()],tt){constructor(){super(...arguments);ie(this,ye,U(k,8,this,!1)),U(k,11,this);ie(this,ve,U(k,12,this)),U(k,15,this)}get _btnClass(){let t="a-btn";switch(this.type){case"secondary":t+=" a-btn--secondary";break;case"warning":t+=" a-btn--warning";break;case"disabled":t+=" a-btn--disabled";break}return t}render(){return Ke`
      <button class="${this._btnClass}" ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `}};k=ke(tt),ye=new WeakMap,ve=new WeakMap,ee(k,4,"disabled",et,C,ye),ee(k,4,"type",Ye,C,ve),Y(k,C),Pe(C,"styles",ne`
    ${V(Qe)}
  `);window.customElements.define("cfpb-button",C);})();
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
*/
//# sourceMappingURL=index.js.map
