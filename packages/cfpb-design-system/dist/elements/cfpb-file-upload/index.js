(()=>{var be=Object.create;var dt=Object.defineProperty;var Se=Object.getOwnPropertyDescriptor;var Bt=(i,t)=>(t=Symbol[i])?t:Symbol.for("Symbol."+i),U=i=>{throw TypeError(i)};var It=(i,t,e)=>t in i?dt(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Dt=(i,t)=>dt(i,"name",{value:t,configurable:!0});var jt=i=>{var t;return[,,,be((t=i==null?void 0:i[Bt("metadata")])!=null?t:null)]},qt=["class","method","getter","setter","accessor","field","value","get","set"],R=i=>i!==void 0&&typeof i!="function"?U("Function expected"):i,Ee=(i,t,e,s,r)=>({kind:qt[i],name:t,metadata:s,addInitializer:o=>e._?U("Already initialized"):r.push(R(o||null))}),pt=(i,t)=>It(t,Bt("metadata"),i[3]),H=(i,t,e,s)=>{for(var r=0,o=i[t>>1],n=o&&o.length;r<n;r++)t&1?o[r].call(e):s=o[r].call(e,s);return s},ut=(i,t,e,s,r,o)=>{var n,l,a,h,d,c=t&7,f=!!(t&8),u=!!(t&16),y=c>3?i.length+1:c?f?1:2:0,Rt=qt[c+5],Ht=c>3&&(i[y-1]=[]),ve=i[y]||(i[y]=[]),m=c&&(!u&&!f&&(r=r.prototype),c<5&&(c>3||!u)&&Se(c<4?r:{get[e](){return kt(this,o)},set[e]($){return Lt(this,o,$)}},e));c?u&&c<4&&Dt(o,(c>2?"set ":c>1?"get ":"")+e):Dt(r,e);for(var ct=s.length-1;ct>=0;ct--)h=Ee(c,e,a={},i[3],ve),c&&(h.static=f,h.private=u,d=h.access={has:u?$=>xe(r,$):$=>e in $},c^3&&(d.get=u?$=>(c^1?kt:K)($,r,c^4?o:m.get):$=>$[e]),c>2&&(d.set=u?($,ht)=>Lt($,r,ht,c^4?o:m.set):($,ht)=>$[e]=ht)),l=(0,s[ct])(c?c<4?u?o:m[Rt]:c>4?void 0:{get:m.get,set:m.set}:r,h),a._=1,c^4||l===void 0?R(l)&&(c>4?Ht.unshift(l):c?u?o=l:m[Rt]=l:r=l):typeof l!="object"||l===null?U("Object expected"):(R(n=l.get)&&(m.get=n),R(n=l.set)&&(m.set=n),R(n=l.init)&&Ht.unshift(n));return c||pt(i,r),m&&dt(r,e,m),u?c^4?o:m:r},G=(i,t,e)=>It(i,typeof t!="symbol"?t+"":t,e),ft=(i,t,e)=>t.has(i)||U("Cannot "+e),xe=(i,t)=>Object(t)!==t?U('Cannot use the "in" operator on this value'):i.has(t),kt=(i,t,e)=>(ft(i,t,"read from private field"),e?e.call(i):t.get(i)),W=(i,t,e)=>t.has(i)?U("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),Lt=(i,t,e,s)=>(ft(i,t,"write to private field"),s?s.call(i,e):t.set(i,e),e),K=(i,t,e)=>(ft(i,t,"access private method"),e);var $t=(i,t,e)=>new Promise((s,r)=>{var o=a=>{try{l(e.next(a))}catch(h){r(h)}},n=a=>{try{l(e.throw(a))}catch(h){r(h)}},l=a=>a.done?s(a.value):Promise.resolve(a.value).then(o,n);l((e=e.apply(i,t)).next())});var Z=globalThis,J=Z.ShadowRoot&&(Z.ShadyCSS===void 0||Z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,mt=Symbol(),zt=new WeakMap,D=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==mt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(J&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=zt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&zt.set(e,t))}return t}toString(){return this.cssText}},Q=i=>new D(typeof i=="string"?i:i+"",void 0,mt),_t=(i,...t)=>{let e=i.length===1?i[0]:t.reduce((s,r,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[o+1],i[0]);return new D(e,i,mt)},Vt=(i,t)=>{if(J)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),r=Z.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}},gt=J?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return Q(e)})(i):i;var{is:Ce,defineProperty:we,getOwnPropertyDescriptor:Pe,getOwnPropertyNames:Te,getOwnPropertySymbols:Me,getPrototypeOf:Ue}=Object,A=globalThis,Gt=A.trustedTypes,Ne=Gt?Gt.emptyScript:"",yt=A.reactiveElementPolyfillSupport,k=(i,t)=>i,L={toAttribute(i,t){switch(t){case Boolean:i=i?Ne:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch(s){e=null}}return e}},Y=(i,t)=>!Ce(i,t),Wt={attribute:!0,type:String,converter:L,reflect:!1,useDefault:!1,hasChanged:Y},Kt,Zt;(Kt=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(Zt=A.litPropertyMetadata)!=null||(A.litPropertyMetadata=new WeakMap);var _=class extends HTMLElement{static addInitializer(t){var e;this._$Ei(),((e=this.l)!=null?e:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Wt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&we(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){var n;let{get:r,set:o}=(n=Pe(this.prototype,t))!=null?n:{get(){return this[e]},set(l){this[e]=l}};return{get:r,set(l){let a=r==null?void 0:r.call(this);o==null||o.call(this,l),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var e;return(e=this.elementProperties.get(t))!=null?e:Wt}static _$Ei(){if(this.hasOwnProperty(k("elementProperties")))return;let t=Ue(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(k("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(k("properties"))){let e=this.properties,s=[...Te(e),...Me(e)];for(let r of s)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift(gt(r))}else t!==void 0&&e.push(gt(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$EO)!=null?e:this._$EO=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)==null||s.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var e;let t=(e=this.shadowRoot)!=null?e:this.attachShadow(this.constructor.shadowRootOptions);return Vt(t,this.constructor.elementStyles),t}connectedCallback(){var t,e;(t=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(s=>{var r;return(r=s.hostConnected)==null?void 0:r.call(s)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){var o;let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){let n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:L).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){var o,n,l,a;let s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let h=s.getPropertyOptions(r),d=typeof h.converter=="function"?{fromAttribute:h.converter}:((o=h.converter)==null?void 0:o.fromAttribute)!==void 0?h.converter:L;this._$Em=r,this[r]=(a=(l=d.fromAttribute(e,h.type))!=null?l:(n=this._$Ej)==null?void 0:n.get(r))!=null?a:null,this._$Em=null}}requestUpdate(t,e,s){var r,o;if(t!==void 0){let n=this.constructor,l=this[t];if(s!=null||(s=n.getPropertyOptions(t)),!(((r=s.hasChanged)!=null?r:Y)(l,e)||s.useDefault&&s.reflect&&l===((o=this._$Ej)==null?void 0:o.get(t))&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:o},n){var l,a,h;s&&!((l=this._$Ej)!=null?l:this._$Ej=new Map).has(t)&&(this._$Ej.set(t,(a=n!=null?n:e)!=null?a:this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&((h=this._$Eq)!=null?h:this._$Eq=new Set).add(t))}_$EP(){return $t(this,null,function*(){this.isUpdatePending=!0;try{yield this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&(yield t),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s,r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((s=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[n,l]of this._$Ep)this[n]=l;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[n,l]of o){let{wrapped:a}=l,h=this[n];a!==!0||this._$AL.has(n)||h===void 0||this.C(n,void 0,l,h)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(r=this._$EO)==null||r.forEach(o=>{var n;return(n=o.hostUpdate)==null?void 0:n.call(o)}),this.update(e)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}},Jt;_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[k("elementProperties")]=new Map,_[k("finalized")]=new Map,yt==null||yt({ReactiveElement:_}),((Jt=A.reactiveElementVersions)!=null?Jt:A.reactiveElementVersions=[]).push("2.1.0");var I=globalThis,X=I.trustedTypes,Qt=X?X.createPolicy("lit-html",{createHTML:i=>i}):void 0,bt="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,St="?"+g,Oe=`<${St}>`,E=document,j=()=>E.createComment(""),q=i=>i===null||typeof i!="object"&&typeof i!="function",Et=Array.isArray,ie=i=>Et(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",At=`[ 	
\f\r]`,B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Yt=/-->/g,Xt=/>/g,b=RegExp(`>|${At}(?:([^\\s"'>=/]+)(${At}*=${At}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ft=/'/g,te=/"/g,re=/^(?:script|style|textarea|title)$/i,xt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),oe=xt(1),Ke=xt(2),Ze=xt(3),x=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),ee=new WeakMap,S=E.createTreeWalker(E,129);function ne(i,t){if(!Et(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Qt!==void 0?Qt.createHTML(t):t}var ae=(i,t)=>{let e=i.length-1,s=[],r,o=t===2?"<svg>":t===3?"<math>":"",n=B;for(let l=0;l<e;l++){let a=i[l],h,d,c=-1,f=0;for(;f<a.length&&(n.lastIndex=f,d=n.exec(a),d!==null);)f=n.lastIndex,n===B?d[1]==="!--"?n=Yt:d[1]!==void 0?n=Xt:d[2]!==void 0?(re.test(d[2])&&(r=RegExp("</"+d[2],"g")),n=b):d[3]!==void 0&&(n=b):n===b?d[0]===">"?(n=r!=null?r:B,c=-1):d[1]===void 0?c=-2:(c=n.lastIndex-d[2].length,h=d[1],n=d[3]===void 0?b:d[3]==='"'?te:Ft):n===te||n===Ft?n=b:n===Yt||n===Xt?n=B:(n=b,r=void 0);let u=n===b&&i[l+1].startsWith("/>")?" ":"";o+=n===B?a+Oe:c>=0?(s.push(h),a.slice(0,c)+bt+a.slice(c)+g+u):a+g+(c===-2?l:u)}return[ne(i,o+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},z=class i{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let o=0,n=0,l=t.length-1,a=this.parts,[h,d]=ae(t,e);if(this.el=i.createElement(h,s),S.currentNode=this.el.content,e===2||e===3){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(r=S.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(let c of r.getAttributeNames())if(c.endsWith(bt)){let f=d[n++],u=r.getAttribute(c).split(g),y=/([.?@])?(.*)/.exec(f);a.push({type:1,index:o,name:y[2],strings:u,ctor:y[1]==="."?tt:y[1]==="?"?et:y[1]==="@"?st:w}),r.removeAttribute(c)}else c.startsWith(g)&&(a.push({type:6,index:o}),r.removeAttribute(c));if(re.test(r.tagName)){let c=r.textContent.split(g),f=c.length-1;if(f>0){r.textContent=X?X.emptyScript:"";for(let u=0;u<f;u++)r.append(c[u],j()),S.nextNode(),a.push({type:2,index:++o});r.append(c[f],j())}}}else if(r.nodeType===8)if(r.data===St)a.push({type:2,index:o});else{let c=-1;for(;(c=r.data.indexOf(g,c+1))!==-1;)a.push({type:7,index:o}),c+=g.length-1}o++}}static createElement(t,e){let s=E.createElement("template");return s.innerHTML=t,s}};function C(i,t,e=i,s){var n,l,a;if(t===x)return t;let r=s!==void 0?(n=e._$Co)==null?void 0:n[s]:e._$Cl,o=q(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),o===void 0?r=void 0:(r=new o(i),r._$AT(i,e,s)),s!==void 0?((a=e._$Co)!=null?a:e._$Co=[])[s]=r:e._$Cl=r),r!==void 0&&(t=C(i,r._$AS(i,t.values),r,s)),t}var F=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var h;let{el:{content:e},parts:s}=this._$AD,r=((h=t==null?void 0:t.creationScope)!=null?h:E).importNode(e,!0);S.currentNode=r;let o=S.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new N(o,o.nextSibling,this,t):a.type===1?d=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(d=new it(o,this,t)),this._$AV.push(d),a=s[++l]}n!==(a==null?void 0:a.index)&&(o=S.nextNode(),n++)}return S.currentNode=E,r}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},N=class i{get _$AU(){var t,e;return(e=(t=this._$AM)==null?void 0:t._$AU)!=null?e:this._$Cv}constructor(t,e,s,r){var o;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=(o=r==null?void 0:r.isConnected)!=null?o:!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),q(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==x&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ie(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&q(this._$AH)?this._$AA.nextSibling.data=t:this.T(E.createTextNode(t)),this._$AH=t}$(t){var o;let{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=z.createElement(ne(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(e);else{let n=new F(r,this),l=n.u(this.options);n.p(e),this.T(l),this._$AH=n}}_$AC(t){let e=ee.get(t.strings);return e===void 0&&ee.set(t.strings,e=new z(t)),e}k(t){Et(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,r=0;for(let o of t)r===e.length?e.push(s=new i(this.O(j()),this.O(j()),this,this.options)):s=e[r],s._$AI(o),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){let r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},w=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(t,e=this,s,r){let o=this.strings,n=!1;if(o===void 0)t=C(this,t,e,0),n=!q(t)||t!==this._$AH&&t!==x,n&&(this._$AH=t);else{let l=t,a,h;for(t=o[0],a=0;a<o.length-1;a++)h=C(this,l[s+a],e,a),h===x&&(h=this._$AH[a]),n||(n=!q(h)||h!==this._$AH[a]),h===p?t=p:t!==p&&(t+=(h!=null?h:"")+o[a+1]),this._$AH[a]=h}n&&!r&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},tt=class extends w{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},et=class extends w{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}},st=class extends w{constructor(t,e,s,r,o){super(t,e,s,r,o),this.type=5}_$AI(t,e=this){var n;if((t=(n=C(this,t,e,0))!=null?n:p)===x)return;let s=this._$AH,r=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==p&&(s===p||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)==null?void 0:e.host)!=null?s:this.element,t):this._$AH.handleEvent(t)}},it=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}},le={M:bt,P:g,A:St,C:1,L:ae,R:F,D:ie,V:C,I:N,H:w,N:et,U:st,B:tt,F:it},vt=I.litHtmlPolyfillSupport,se;vt==null||vt(z,N),((se=I.litHtmlVersions)!=null?se:I.litHtmlVersions=[]).push("3.3.0");var ce=(i,t,e)=>{var o,n;let s=(o=e==null?void 0:e.renderBefore)!=null?o:t,r=s._$litPart$;if(r===void 0){let l=(n=e==null?void 0:e.renderBefore)!=null?n:null;s._$litPart$=r=new N(t.insertBefore(j(),l),l,void 0,e!=null?e:{})}return r._$AI(i),r};var P=globalThis,v=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,s;let t=super.createRenderRoot();return(s=(e=this.renderOptions).renderBefore)!=null||(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ce(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return x}},he;v._$litElement$=!0,v.finalized=!0,(he=P.litElementHydrateSupport)==null||he.call(P,{LitElement:v});var Ct=P.litElementPolyfillSupport;Ct==null||Ct({LitElement:v});var de;((de=P.litElementVersions)!=null?de:P.litElementVersions=[]).push("4.2.0");var{I:ls}=le;var pe=i=>i.strings===void 0;var ue={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},wt=i=>(...t)=>({_$litDirective$:i,values:t}),rt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var V=(i,t)=>{var s;let e=i._$AN;if(e===void 0)return!1;for(let r of e)(s=r._$AO)==null||s.call(r,t,!1),V(r,t);return!0},ot=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while((e==null?void 0:e.size)===0)},fe=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),De(t)}};function Re(i){this._$AN!==void 0?(ot(this),this._$AM=i,fe(this)):this._$AM=i}function He(i,t=!1,e=0){let s=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(s))for(let o=e;o<s.length;o++)V(s[o],!1),ot(s[o]);else s!=null&&(V(s,!1),ot(s));else V(this,i)}var De=i=>{var t,e;i.type==ue.CHILD&&((t=i._$AP)!=null||(i._$AP=He),(e=i._$AQ)!=null||(i._$AQ=Re))},nt=class extends rt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),fe(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,r;t!==this.isConnected&&(this.isConnected=t,t?(s=this.reconnected)==null||s.call(this):(r=this.disconnected)==null||r.call(this)),e&&(V(this,t),ot(this))}setValue(t){if(pe(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};var Mt=()=>new Tt,Tt=class{},Pt=new WeakMap,Ut=wt(class extends nt{render(i){return p}update(i,[t]){var s;let e=t!==this.G;return e&&this.G!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.G=t,this.ht=(s=i.options)==null?void 0:s.host,this.rt(this.ct=i.element)),p}rt(i){var t;if(this.isConnected||(i=void 0),typeof this.G=="function"){let e=(t=this.ht)!=null?t:globalThis,s=Pt.get(e);s===void 0&&(s=new WeakMap,Pt.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,i),i!==void 0&&this.G.call(this.ht,i)}else this.G.value=i}get lt(){var i,t,e;return typeof this.G=="function"?(t=Pt.get((i=this.ht)!=null?i:globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var ke={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:Y},Le=(i=ke,t,e)=>{let{kind:s,metadata:r}=e,o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),s==="setter"&&((i=Object.create(i)).wrapped=!0),o.set(e.name,i),s==="accessor"){let{name:n}=e;return{set(l){let a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,i)},init(l){return l!==void 0&&this.C(n,void 0,i,l),l}}}if(s==="setter"){let{name:n}=e;return function(l){let a=this[n];t.call(this,l),this.requestUpdate(n,a,i)}}throw Error("Unsupported decorator location: "+s)};function at(i){return(t,e)=>typeof e=="object"?Le(i,t,e):((s,r,o)=>{let n=r.hasOwnProperty(o);return r.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(r,o):void 0})(i,t,e)}var $e=`/* ==========================================================================
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
}`;var me,_e,ge,T,Nt,Ot,O,ye,Ae,M=class extends(ge=v,_e=[at()],me=[at()],ge){constructor(){super(...arguments);W(this,O);W(this,Nt,H(T,8,this,!0)),H(T,11,this);W(this,Ot,H(T,12,this,"")),H(T,15,this);G(this,"fileInput",Mt());G(this,"fileDetails",Mt())}render(){return oe`
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
        @input="${()=>K(this,O,Ae).call(this)}"
        ${Ut(this.fileInput)}
      />
      <div
        part="upload-details"
        ?hidden=${this.areDetailHidden}
        ${Ut(this.fileDetails)}
      >
        <h4>File added</h4>
        <ul>
          <li>${this.fileName}</li>
        </ul>
        <p>
          To remove or replace your file, select a new file and upload again.
        </p>
      </div>
    `}};T=jt(ge),Nt=new WeakMap,Ot=new WeakMap,O=new WeakSet,ye=function(e){let s=e;if(s.indexOf("\\")>-1){let r=s.split("\\");s=r[r.length-1]}return s},Ae=function(){this.fileName=K(this,O,ye).call(this,this.fileInput.value.value),this.areDetailHidden=!1},ut(T,4,"areDetailHidden",_e,M,Nt),ut(T,4,"fileName",me,M,Ot),pt(T,M),G(M,"styles",_t`
    ${Q($e)}
  `);window.customElements.define("cfpb-file-upload",M);var Ie=document.createElement("template");Ie.innerHTML=`
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
`;})();
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
lit-html/directive.js:
lit-html/async-directive.js:
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

lit-html/directive-helpers.js:
lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
