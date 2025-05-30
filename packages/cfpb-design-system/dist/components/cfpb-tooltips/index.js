(()=>{var Ln=Object.create;var xr=Object.defineProperty;var $n=Object.getOwnPropertyDescriptor;var Pi=Object.getOwnPropertySymbols;var Cn=Object.prototype.hasOwnProperty,jn=Object.prototype.propertyIsEnumerable;var Hi=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),yt=t=>{throw TypeError(t)};var yr=(t,e,r)=>e in t?xr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,_r=(t,e)=>{for(var r in e||(e={}))Cn.call(e,r)&&yr(t,r,e[r]);if(Pi)for(var r of Pi(e))jn.call(e,r)&&yr(t,r,e[r]);return t};var zi=(t,e)=>xr(t,"name",{value:e,configurable:!0});var C=(t,e)=>{for(var r in e)xr(t,r,{get:e[r],enumerable:!0})};var wr=t=>{var e;return[,,,Ln((e=t==null?void 0:t[Hi("metadata")])!=null?e:null)]},Vi=["class","method","getter","setter","accessor","field","value","get","set"],Pt=t=>t!==void 0&&typeof t!="function"?yt("Function expected"):t,Mn=(t,e,r,o,i)=>({kind:Vi[t],name:e,metadata:o,addInitializer:a=>r._?yt("Already initialized"):i.push(Pt(a||null))}),zt=(t,e)=>yr(e,Hi("metadata"),t[3]),Ee=(t,e,r,o)=>{for(var i=0,a=t[e>>1],n=a&&a.length;i<n;i++)e&1?a[i].call(r):o=a[i].call(r,o);return o},xt=(t,e,r,o,i,a)=>{var n,l,s,p,c,h=e&7,b=!!(e&8),u=!!(e&16),k=h>3?t.length+1:h?b?1:2:0,_=Vi[h+5],S=h>3&&(t[k-1]=[]),D=t[k]||(t[k]=[]),A=h&&(!u&&!b&&(i=i.prototype),h<5&&(h>3||!u)&&$n(h<4?i:{get[r](){return Ri(this,a)},set[r](d){return qi(this,a,d)}},r));h?u&&h<4&&zi(a,(h>2?"set ":h>1?"get ":"")+r):zi(i,r);for(var $=o.length-1;$>=0;$--)p=Mn(h,r,s={},t[3],D),h&&(p.static=b,p.private=u,c=p.access={has:u?d=>In(i,d):d=>r in d},h^3&&(c.get=u?d=>(h^1?Ri:kr)(d,i,h^4?a:A.get):d=>d[r]),h>2&&(c.set=u?(d,v)=>qi(d,i,v,h^4?a:A.set):(d,v)=>d[r]=v)),l=(0,o[$])(h?h<4?u?a:A[_]:h>4?void 0:{get:A.get,set:A.set}:i,p),s._=1,h^4||l===void 0?Pt(l)&&(h>4?S.unshift(l):h?u?a=l:A[_]=l:i=l):typeof l!="object"||l===null?yt("Object expected"):(Pt(n=l.get)&&(A.get=n),Pt(n=l.set)&&(A.set=n),Pt(n=l.init)&&S.unshift(n));return h||zt(t,i),A&&xr(i,r,A),u?h^4?a:A:i},_t=(t,e,r)=>yr(t,typeof e!="symbol"?e+"":e,r),lo=(t,e,r)=>e.has(t)||yt("Cannot "+r),In=(t,e)=>Object(e)!==e?yt('Cannot use the "in" operator on this value'):t.has(e),Ri=(t,e,r)=>(lo(t,e,"read from private field"),r?r.call(t):e.get(t)),We=(t,e,r)=>e.has(t)?yt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),qi=(t,e,r,o)=>(lo(t,e,"write to private field"),o?o.call(t,r):e.set(t,r),r),kr=(t,e,r)=>(lo(t,e,"access private method"),r);var co=(t,e,r)=>new Promise((o,i)=>{var a=s=>{try{l(r.next(s))}catch(p){i(p)}},n=s=>{try{l(r.throw(s))}catch(p){i(p)}},l=s=>s.done?o(s.value):Promise.resolve(s.value).then(a,n);l((r=r.apply(t,e)).next())});var V="top",Z="bottom",J="right",G="left",Sr="auto",Pe=[V,Z,J,G],Le="start",Ge="end",Ui="clippingParents",Er="viewport",wt="popper",Fi="reference",po=Pe.reduce(function(t,e){return t.concat([e+"-"+Le,e+"-"+Ge])},[]),Ar=[].concat(Pe,[Sr]).reduce(function(t,e){return t.concat([e,e+"-"+Le,e+"-"+Ge])},[]),Nn="beforeRead",Bn="read",Pn="afterRead",zn="beforeMain",Rn="main",qn="afterMain",Hn="beforeWrite",Vn="write",Un="afterWrite",Wi=[Nn,Bn,Pn,zn,Rn,qn,Hn,Vn,Un];function te(t){return t?(t.nodeName||"").toLowerCase():null}function H(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function me(t){var e=H(t).Element;return t instanceof e||t instanceof Element}function Q(t){var e=H(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function kt(t){if(typeof ShadowRoot=="undefined")return!1;var e=H(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function Fn(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var o=e.styles[r]||{},i=e.attributes[r]||{},a=e.elements[r];!Q(a)||!te(a)||(Object.assign(a.style,o),Object.keys(i).forEach(function(n){var l=i[n];l===!1?a.removeAttribute(n):a.setAttribute(n,l===!0?"":l)}))})}function Wn(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(o){var i=e.elements[o],a=e.attributes[o]||{},n=Object.keys(e.styles.hasOwnProperty(o)?e.styles[o]:r[o]),l=n.reduce(function(s,p){return s[p]="",s},{});!Q(i)||!te(i)||(Object.assign(i.style,l),Object.keys(a).forEach(function(s){i.removeAttribute(s)}))})}}var Rt={name:"applyStyles",enabled:!0,phase:"write",fn:Fn,effect:Wn,requires:["computeStyles"]};function re(t){return t.split("-")[0]}var ve=Math.max,Xe=Math.min,$e=Math.round;function St(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function qt(){return!/^((?!chrome|android).)*safari/i.test(St())}function ue(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!1);var o=t.getBoundingClientRect(),i=1,a=1;e&&Q(t)&&(i=t.offsetWidth>0&&$e(o.width)/t.offsetWidth||1,a=t.offsetHeight>0&&$e(o.height)/t.offsetHeight||1);var n=me(t)?H(t):window,l=n.visualViewport,s=!qt()&&r,p=(o.left+(s&&l?l.offsetLeft:0))/i,c=(o.top+(s&&l?l.offsetTop:0))/a,h=o.width/i,b=o.height/a;return{width:h,height:b,top:c,right:p+h,bottom:c+b,left:p,x:p,y:c}}function Ye(t){var e=ue(t),r=t.offsetWidth,o=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-o)<=1&&(o=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:o}}function Ht(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&kt(r)){var o=e;do{if(o&&t.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function le(t){return H(t).getComputedStyle(t)}function ho(t){return["table","td","th"].indexOf(te(t))>=0}function ae(t){return((me(t)?t.ownerDocument:t.document)||window.document).documentElement}function Ce(t){return te(t)==="html"?t:t.assignedSlot||t.parentNode||(kt(t)?t.host:null)||ae(t)}function Gi(t){return!Q(t)||le(t).position==="fixed"?null:t.offsetParent}function Gn(t){var e=/firefox/i.test(St()),r=/Trident/i.test(St());if(r&&Q(t)){var o=le(t);if(o.position==="fixed")return null}var i=Ce(t);for(kt(i)&&(i=i.host);Q(i)&&["html","body"].indexOf(te(i))<0;){var a=le(i);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||e&&a.willChange==="filter"||e&&a.filter&&a.filter!=="none")return i;i=i.parentNode}return null}function ye(t){for(var e=H(t),r=Gi(t);r&&ho(r)&&le(r).position==="static";)r=Gi(r);return r&&(te(r)==="html"||te(r)==="body"&&le(r).position==="static")?e:r||Gn(t)||e}function Ke(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Je(t,e,r){return ve(t,Xe(e,r))}function Xi(t,e,r){var o=Je(t,e,r);return o>r?r:o}function Vt(){return{top:0,right:0,bottom:0,left:0}}function Ut(t){return Object.assign({},Vt(),t)}function Ft(t,e){return e.reduce(function(r,o){return r[o]=t,r},{})}var Xn=function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,Ut(typeof e!="number"?e:Ft(e,Pe))};function Yn(t){var e,r=t.state,o=t.name,i=t.options,a=r.elements.arrow,n=r.modifiersData.popperOffsets,l=re(r.placement),s=Ke(l),p=[G,J].indexOf(l)>=0,c=p?"height":"width";if(!(!a||!n)){var h=Xn(i.padding,r),b=Ye(a),u=s==="y"?V:G,k=s==="y"?Z:J,_=r.rects.reference[c]+r.rects.reference[s]-n[s]-r.rects.popper[c],S=n[s]-r.rects.reference[s],D=ye(a),A=D?s==="y"?D.clientHeight||0:D.clientWidth||0:0,$=_/2-S/2,d=h[u],v=A-b[c]-h[k],g=A/2-b[c]/2+$,L=Je(d,g,v),E=s;r.modifiersData[o]=(e={},e[E]=L,e.centerOffset=L-g,e)}}function Kn(t){var e=t.state,r=t.options,o=r.element,i=o===void 0?"[data-popper-arrow]":o;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||Ht(e.elements.popper,i)&&(e.elements.arrow=i))}var Yi={name:"arrow",enabled:!0,phase:"main",fn:Yn,effect:Kn,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function fe(t){return t.split("-")[1]}var Jn={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Zn(t,e){var r=t.x,o=t.y,i=e.devicePixelRatio||1;return{x:$e(r*i)/i||0,y:$e(o*i)/i||0}}function Ki(t){var e,r=t.popper,o=t.popperRect,i=t.placement,a=t.variation,n=t.offsets,l=t.position,s=t.gpuAcceleration,p=t.adaptive,c=t.roundOffsets,h=t.isFixed,b=n.x,u=b===void 0?0:b,k=n.y,_=k===void 0?0:k,S=typeof c=="function"?c({x:u,y:_}):{x:u,y:_};u=S.x,_=S.y;var D=n.hasOwnProperty("x"),A=n.hasOwnProperty("y"),$=G,d=V,v=window;if(p){var g=ye(r),L="clientHeight",E="clientWidth";if(g===H(r)&&(g=ae(r),le(g).position!=="static"&&l==="absolute"&&(L="scrollHeight",E="scrollWidth")),g=g,i===V||(i===G||i===J)&&a===Ge){d=Z;var j=h&&g===v&&v.visualViewport?v.visualViewport.height:g[L];_-=j-o.height,_*=s?1:-1}if(i===G||(i===V||i===Z)&&a===Ge){$=J;var M=h&&g===v&&v.visualViewport?v.visualViewport.width:g[E];u-=M-o.width,u*=s?1:-1}}var B=Object.assign({position:l},p&&Jn),P=c===!0?Zn({x:u,y:_},H(r)):{x:u,y:_};if(u=P.x,_=P.y,s){var R;return Object.assign({},B,(R={},R[d]=A?"0":"",R[$]=D?"0":"",R.transform=(v.devicePixelRatio||1)<=1?"translate("+u+"px, "+_+"px)":"translate3d("+u+"px, "+_+"px, 0)",R))}return Object.assign({},B,(e={},e[d]=A?_+"px":"",e[$]=D?u+"px":"",e.transform="",e))}function Qn(t){var e=t.state,r=t.options,o=r.gpuAcceleration,i=o===void 0?!0:o,a=r.adaptive,n=a===void 0?!0:a,l=r.roundOffsets,s=l===void 0?!0:l,p={placement:re(e.placement),variation:fe(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Ki(Object.assign({},p,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:n,roundOffsets:s})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Ki(Object.assign({},p,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var Ji={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Qn,data:{}};var Or={passive:!0};function es(t){var e=t.state,r=t.instance,o=t.options,i=o.scroll,a=i===void 0?!0:i,n=o.resize,l=n===void 0?!0:n,s=H(e.elements.popper),p=[].concat(e.scrollParents.reference,e.scrollParents.popper);return a&&p.forEach(function(c){c.addEventListener("scroll",r.update,Or)}),l&&s.addEventListener("resize",r.update,Or),function(){a&&p.forEach(function(c){c.removeEventListener("scroll",r.update,Or)}),l&&s.removeEventListener("resize",r.update,Or)}}var Zi={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:es,data:{}};var ts={left:"right",right:"left",bottom:"top",top:"bottom"};function Et(t){return t.replace(/left|right|bottom|top/g,function(e){return ts[e]})}var rs={start:"end",end:"start"};function Dr(t){return t.replace(/start|end/g,function(e){return rs[e]})}function Ze(t){var e=H(t),r=e.pageXOffset,o=e.pageYOffset;return{scrollLeft:r,scrollTop:o}}function Qe(t){return ue(ae(t)).left+Ze(t).scrollLeft}function mo(t,e){var r=H(t),o=ae(t),i=r.visualViewport,a=o.clientWidth,n=o.clientHeight,l=0,s=0;if(i){a=i.width,n=i.height;var p=qt();(p||!p&&e==="fixed")&&(l=i.offsetLeft,s=i.offsetTop)}return{width:a,height:n,x:l+Qe(t),y:s}}function uo(t){var e,r=ae(t),o=Ze(t),i=(e=t.ownerDocument)==null?void 0:e.body,a=ve(r.scrollWidth,r.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),n=ve(r.scrollHeight,r.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),l=-o.scrollLeft+Qe(t),s=-o.scrollTop;return le(i||r).direction==="rtl"&&(l+=ve(r.clientWidth,i?i.clientWidth:0)-a),{width:a,height:n,x:l,y:s}}function et(t){var e=le(t),r=e.overflow,o=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+i+o)}function Tr(t){return["html","body","#document"].indexOf(te(t))>=0?t.ownerDocument.body:Q(t)&&et(t)?t:Tr(Ce(t))}function ze(t,e){var r;e===void 0&&(e=[]);var o=Tr(t),i=o===((r=t.ownerDocument)==null?void 0:r.body),a=H(o),n=i?[a].concat(a.visualViewport||[],et(o)?o:[]):o,l=e.concat(n);return i?l:l.concat(ze(Ce(n)))}function At(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function os(t,e){var r=ue(t,!1,e==="fixed");return r.top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r}function Qi(t,e,r){return e===Er?At(mo(t,r)):me(e)?os(e,r):At(uo(ae(t)))}function is(t){var e=ze(Ce(t)),r=["absolute","fixed"].indexOf(le(t).position)>=0,o=r&&Q(t)?ye(t):t;return me(o)?e.filter(function(i){return me(i)&&Ht(i,o)&&te(i)!=="body"}):[]}function fo(t,e,r,o){var i=e==="clippingParents"?is(t):[].concat(e),a=[].concat(i,[r]),n=a[0],l=a.reduce(function(s,p){var c=Qi(t,p,o);return s.top=ve(c.top,s.top),s.right=Xe(c.right,s.right),s.bottom=Xe(c.bottom,s.bottom),s.left=ve(c.left,s.left),s},Qi(t,n,o));return l.width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l}function Wt(t){var e=t.reference,r=t.element,o=t.placement,i=o?re(o):null,a=o?fe(o):null,n=e.x+e.width/2-r.width/2,l=e.y+e.height/2-r.height/2,s;switch(i){case V:s={x:n,y:e.y-r.height};break;case Z:s={x:n,y:e.y+e.height};break;case J:s={x:e.x+e.width,y:l};break;case G:s={x:e.x-r.width,y:l};break;default:s={x:e.x,y:e.y}}var p=i?Ke(i):null;if(p!=null){var c=p==="y"?"height":"width";switch(a){case Le:s[p]=s[p]-(e[c]/2-r[c]/2);break;case Ge:s[p]=s[p]+(e[c]/2-r[c]/2);break;default:}}return s}function xe(t,e){e===void 0&&(e={});var r=e,o=r.placement,i=o===void 0?t.placement:o,a=r.strategy,n=a===void 0?t.strategy:a,l=r.boundary,s=l===void 0?Ui:l,p=r.rootBoundary,c=p===void 0?Er:p,h=r.elementContext,b=h===void 0?wt:h,u=r.altBoundary,k=u===void 0?!1:u,_=r.padding,S=_===void 0?0:_,D=Ut(typeof S!="number"?S:Ft(S,Pe)),A=b===wt?Fi:wt,$=t.rects.popper,d=t.elements[k?A:b],v=fo(me(d)?d:d.contextElement||ae(t.elements.popper),s,c,n),g=ue(t.elements.reference),L=Wt({reference:g,element:$,strategy:"absolute",placement:i}),E=At(Object.assign({},$,L)),j=b===wt?E:g,M={top:v.top-j.top+D.top,bottom:j.bottom-v.bottom+D.bottom,left:v.left-j.left+D.left,right:j.right-v.right+D.right},B=t.modifiersData.offset;if(b===wt&&B){var P=B[i];Object.keys(M).forEach(function(R){var oe=[J,Z].indexOf(R)>=0?1:-1,ie=[V,Z].indexOf(R)>=0?"y":"x";M[R]+=P[ie]*oe})}return M}function go(t,e){e===void 0&&(e={});var r=e,o=r.placement,i=r.boundary,a=r.rootBoundary,n=r.padding,l=r.flipVariations,s=r.allowedAutoPlacements,p=s===void 0?Ar:s,c=fe(o),h=c?l?po:po.filter(function(k){return fe(k)===c}):Pe,b=h.filter(function(k){return p.indexOf(k)>=0});b.length===0&&(b=h);var u=b.reduce(function(k,_){return k[_]=xe(t,{placement:_,boundary:i,rootBoundary:a,padding:n})[re(_)],k},{});return Object.keys(u).sort(function(k,_){return u[k]-u[_]})}function as(t){if(re(t)===Sr)return[];var e=Et(t);return[Dr(t),e,Dr(e)]}function ns(t){var e=t.state,r=t.options,o=t.name;if(!e.modifiersData[o]._skip){for(var i=r.mainAxis,a=i===void 0?!0:i,n=r.altAxis,l=n===void 0?!0:n,s=r.fallbackPlacements,p=r.padding,c=r.boundary,h=r.rootBoundary,b=r.altBoundary,u=r.flipVariations,k=u===void 0?!0:u,_=r.allowedAutoPlacements,S=e.options.placement,D=re(S),A=D===S,$=s||(A||!k?[Et(S)]:as(S)),d=[S].concat($).reduce(function(N,W){return N.concat(re(W)===Sr?go(e,{placement:W,boundary:c,rootBoundary:h,padding:p,flipVariations:k,allowedAutoPlacements:_}):W)},[]),v=e.rects.reference,g=e.rects.popper,L=new Map,E=!0,j=d[0],M=0;M<d.length;M++){var B=d[M],P=re(B),R=fe(B)===Le,oe=[V,Z].indexOf(P)>=0,ie=oe?"width":"height",U=xe(e,{placement:B,boundary:c,rootBoundary:h,altBoundary:b,padding:p}),Y=oe?R?J:G:R?Z:V;v[ie]>g[ie]&&(Y=Et(Y));var F=Et(Y),ee=[];if(a&&ee.push(U[P]<=0),l&&ee.push(U[Y]<=0,U[F]<=0),ee.every(function(N){return N})){j=B,E=!1;break}L.set(B,ee)}if(E)for(var f=k?3:1,y=function(W){var K=d.find(function(Ie){var De=L.get(Ie);if(De)return De.slice(0,W).every(function(ft){return ft})});if(K)return j=K,"break"},x=f;x>0;x--){var O=y(x);if(O==="break")break}e.placement!==j&&(e.modifiersData[o]._skip=!0,e.placement=j,e.reset=!0)}}var ea={name:"flip",enabled:!0,phase:"main",fn:ns,requiresIfExists:["offset"],data:{_skip:!1}};function ta(t,e,r){return r===void 0&&(r={x:0,y:0}),{top:t.top-e.height-r.y,right:t.right-e.width+r.x,bottom:t.bottom-e.height+r.y,left:t.left-e.width-r.x}}function ra(t){return[V,J,Z,G].some(function(e){return t[e]>=0})}function ss(t){var e=t.state,r=t.name,o=e.rects.reference,i=e.rects.popper,a=e.modifiersData.preventOverflow,n=xe(e,{elementContext:"reference"}),l=xe(e,{altBoundary:!0}),s=ta(n,o),p=ta(l,i,a),c=ra(s),h=ra(p);e.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:p,isReferenceHidden:c,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":h})}var oa={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:ss};function ls(t,e,r){var o=re(t),i=[G,V].indexOf(o)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,n=a[0],l=a[1];return n=n||0,l=(l||0)*i,[G,J].indexOf(o)>=0?{x:l,y:n}:{x:n,y:l}}function ds(t){var e=t.state,r=t.options,o=t.name,i=r.offset,a=i===void 0?[0,0]:i,n=Ar.reduce(function(c,h){return c[h]=ls(h,e.rects,a),c},{}),l=n[e.placement],s=l.x,p=l.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=s,e.modifiersData.popperOffsets.y+=p),e.modifiersData[o]=n}var ia={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:ds};function cs(t){var e=t.state,r=t.name;e.modifiersData[r]=Wt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var aa={name:"popperOffsets",enabled:!0,phase:"read",fn:cs,data:{}};function bo(t){return t==="x"?"y":"x"}function ps(t){var e=t.state,r=t.options,o=t.name,i=r.mainAxis,a=i===void 0?!0:i,n=r.altAxis,l=n===void 0?!1:n,s=r.boundary,p=r.rootBoundary,c=r.altBoundary,h=r.padding,b=r.tether,u=b===void 0?!0:b,k=r.tetherOffset,_=k===void 0?0:k,S=xe(e,{boundary:s,rootBoundary:p,padding:h,altBoundary:c}),D=re(e.placement),A=fe(e.placement),$=!A,d=Ke(D),v=bo(d),g=e.modifiersData.popperOffsets,L=e.rects.reference,E=e.rects.popper,j=typeof _=="function"?_(Object.assign({},e.rects,{placement:e.placement})):_,M=typeof j=="number"?{mainAxis:j,altAxis:j}:Object.assign({mainAxis:0,altAxis:0},j),B=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,P={x:0,y:0};if(g){if(a){var R,oe=d==="y"?V:G,ie=d==="y"?Z:J,U=d==="y"?"height":"width",Y=g[d],F=Y+S[oe],ee=Y-S[ie],f=u?-E[U]/2:0,y=A===Le?L[U]:E[U],x=A===Le?-E[U]:-L[U],O=e.elements.arrow,N=u&&O?Ye(O):{width:0,height:0},W=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Vt(),K=W[oe],Ie=W[ie],De=Je(0,L[U],N[U]),ft=$?L[U]/2-f-De-K-M.mainAxis:y-De-K-M.mainAxis,Ne=$?-L[U]/2+f+De+Ie+M.mainAxis:x+De+Ie+M.mainAxis,gt=e.elements.arrow&&ye(e.elements.arrow),lr=gt?d==="y"?gt.clientTop||0:gt.clientLeft||0:0,jt=(R=B==null?void 0:B[d])!=null?R:0,dr=Y+ft-jt-lr,cr=Y+Ne-jt,Mt=Je(u?Xe(F,dr):F,Y,u?ve(ee,cr):ee);g[d]=Mt,P[d]=Mt-Y}if(l){var It,pr=d==="x"?V:G,hr=d==="x"?Z:J,Te=g[v],Be=v==="y"?"height":"width",Nt=Te+S[pr],Ue=Te-S[hr],Bt=[V,G].indexOf(D)!==-1,mr=(It=B==null?void 0:B[v])!=null?It:0,ur=Bt?Nt:Te-L[Be]-E[Be]-mr+M.altAxis,fr=Bt?Te+L[Be]+E[Be]-mr-M.altAxis:Ue,gr=u&&Bt?Xi(ur,Te,fr):Je(u?ur:Nt,Te,u?fr:Ue);g[v]=gr,P[v]=gr-Te}e.modifiersData[o]=P}}var na={name:"preventOverflow",enabled:!0,phase:"main",fn:ps,requiresIfExists:["offset"]};function vo(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function yo(t){return t===H(t)||!Q(t)?Ze(t):vo(t)}function hs(t){var e=t.getBoundingClientRect(),r=$e(e.width)/t.offsetWidth||1,o=$e(e.height)/t.offsetHeight||1;return r!==1||o!==1}function xo(t,e,r){r===void 0&&(r=!1);var o=Q(e),i=Q(e)&&hs(e),a=ae(e),n=ue(t,i,r),l={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(o||!o&&!r)&&((te(e)!=="body"||et(a))&&(l=yo(e)),Q(e)?(s=ue(e,!0),s.x+=e.clientLeft,s.y+=e.clientTop):a&&(s.x=Qe(a))),{x:n.left+l.scrollLeft-s.x,y:n.top+l.scrollTop-s.y,width:n.width,height:n.height}}function ms(t){var e=new Map,r=new Set,o=[];t.forEach(function(a){e.set(a.name,a)});function i(a){r.add(a.name);var n=[].concat(a.requires||[],a.requiresIfExists||[]);n.forEach(function(l){if(!r.has(l)){var s=e.get(l);s&&i(s)}}),o.push(a)}return t.forEach(function(a){r.has(a.name)||i(a)}),o}function _o(t){var e=ms(t);return Wi.reduce(function(r,o){return r.concat(e.filter(function(i){return i.phase===o}))},[])}function wo(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function ko(t){var e=t.reduce(function(r,o){var i=r[o.name];return r[o.name]=i?Object.assign({},i,o,{options:Object.assign({},i.options,o.options),data:Object.assign({},i.data,o.data)}):o,r},{});return Object.keys(e).map(function(r){return e[r]})}var sa={placement:"bottom",modifiers:[],strategy:"absolute"};function la(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function da(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,o=r===void 0?[]:r,i=e.defaultOptions,a=i===void 0?sa:i;return function(l,s,p){p===void 0&&(p=a);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},sa,a),modifiersData:{},elements:{reference:l,popper:s},attributes:{},styles:{}},h=[],b=!1,u={state:c,setOptions:function(D){var A=typeof D=="function"?D(c.options):D;_(),c.options=Object.assign({},a,c.options,A),c.scrollParents={reference:me(l)?ze(l):l.contextElement?ze(l.contextElement):[],popper:ze(s)};var $=_o(ko([].concat(o,c.options.modifiers)));return c.orderedModifiers=$.filter(function(d){return d.enabled}),k(),u.update()},forceUpdate:function(){if(!b){var D=c.elements,A=D.reference,$=D.popper;if(la(A,$)){c.rects={reference:xo(A,ye($),c.options.strategy==="fixed"),popper:Ye($)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(M){return c.modifiersData[M.name]=Object.assign({},M.data)});for(var d=0;d<c.orderedModifiers.length;d++){if(c.reset===!0){c.reset=!1,d=-1;continue}var v=c.orderedModifiers[d],g=v.fn,L=v.options,E=L===void 0?{}:L,j=v.name;typeof g=="function"&&(c=g({state:c,options:E,name:j,instance:u})||c)}}}},update:wo(function(){return new Promise(function(S){u.forceUpdate(),S(c)})}),destroy:function(){_(),b=!0}};if(!la(l,s))return u;u.setOptions(p).then(function(S){!b&&p.onFirstUpdate&&p.onFirstUpdate(S)});function k(){c.orderedModifiers.forEach(function(S){var D=S.name,A=S.options,$=A===void 0?{}:A,d=S.effect;if(typeof d=="function"){var v=d({state:c,name:D,instance:u,options:$}),g=function(){};h.push(v||g)}})}function _(){h.forEach(function(S){return S()}),h=[]}return u}}var us=[Zi,aa,Ji,Rt,ia,ea,na,Yi,oa],So=da({defaultModifiers:us});var fs="tippy-box",ya="tippy-content",gs="tippy-backdrop",xa="tippy-arrow",_a="tippy-svg-arrow",tt={passive:!0,capture:!0},wa=function(){return document.body};function Eo(t,e,r){if(Array.isArray(t)){var o=t[e];return o==null?Array.isArray(r)?r[e]:r:o}return t}function $o(t,e){var r={}.toString.call(t);return r.indexOf("[object")===0&&r.indexOf(e+"]")>-1}function ka(t,e){return typeof t=="function"?t.apply(void 0,e):t}function ca(t,e){if(e===0)return t;var r;return function(o){clearTimeout(r),r=setTimeout(function(){t(o)},e)}}function bs(t){return t.split(/\s+/).filter(Boolean)}function Ot(t){return[].concat(t)}function pa(t,e){t.indexOf(e)===-1&&t.push(e)}function vs(t){return t.filter(function(e,r){return t.indexOf(e)===r})}function ys(t){return t.split("-")[0]}function $r(t){return[].slice.call(t)}function ha(t){return Object.keys(t).reduce(function(e,r){return t[r]!==void 0&&(e[r]=t[r]),e},{})}function Gt(){return document.createElement("div")}function Cr(t){return["Element","Fragment"].some(function(e){return $o(t,e)})}function xs(t){return $o(t,"NodeList")}function _s(t){return $o(t,"MouseEvent")}function ws(t){return!!(t&&t._tippy&&t._tippy.reference===t)}function ks(t){return Cr(t)?[t]:xs(t)?$r(t):Array.isArray(t)?t:$r(document.querySelectorAll(t))}function Ao(t,e){t.forEach(function(r){r&&(r.style.transitionDuration=e+"ms")})}function ma(t,e){t.forEach(function(r){r&&r.setAttribute("data-state",e)})}function Ss(t){var e,r=Ot(t),o=r[0];return o!=null&&(e=o.ownerDocument)!=null&&e.body?o.ownerDocument:document}function Es(t,e){var r=e.clientX,o=e.clientY;return t.every(function(i){var a=i.popperRect,n=i.popperState,l=i.props,s=l.interactiveBorder,p=ys(n.placement),c=n.modifiersData.offset;if(!c)return!0;var h=p==="bottom"?c.top.y:0,b=p==="top"?c.bottom.y:0,u=p==="right"?c.left.x:0,k=p==="left"?c.right.x:0,_=a.top-o+h>s,S=o-a.bottom-b>s,D=a.left-r+u>s,A=r-a.right-k>s;return _||S||D||A})}function Oo(t,e,r){var o=e+"EventListener";["transitionend","webkitTransitionEnd"].forEach(function(i){t[o](i,r)})}function ua(t,e){for(var r=e;r;){var o;if(t.contains(r))return!0;r=r.getRootNode==null||(o=r.getRootNode())==null?void 0:o.host}return!1}var Ae={isTouch:!1},fa=0;function As(){Ae.isTouch||(Ae.isTouch=!0,window.performance&&document.addEventListener("mousemove",Sa))}function Sa(){var t=performance.now();t-fa<20&&(Ae.isTouch=!1,document.removeEventListener("mousemove",Sa)),fa=t}function Os(){var t=document.activeElement;if(ws(t)){var e=t._tippy;t.blur&&!e.state.isVisible&&t.blur()}}function Ds(){document.addEventListener("touchstart",As,tt),window.addEventListener("blur",Os)}var Ts=typeof window!="undefined"&&typeof document!="undefined",Ls=Ts?!!window.msCrypto:!1;var $s={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},Cs={allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999},_e=Object.assign({appendTo:wa,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},$s,Cs),js=Object.keys(_e),Ms=function(e){var r=Object.keys(e);r.forEach(function(o){_e[o]=e[o]})};function Ea(t){var e=t.plugins||[],r=e.reduce(function(o,i){var a=i.name,n=i.defaultValue;if(a){var l;o[a]=t[a]!==void 0?t[a]:(l=_e[a])!=null?l:n}return o},{});return Object.assign({},t,r)}function Is(t,e){var r=e?Object.keys(Ea(Object.assign({},_e,{plugins:e}))):js,o=r.reduce(function(i,a){var n=(t.getAttribute("data-tippy-"+a)||"").trim();if(!n)return i;if(a==="content")i[a]=n;else try{i[a]=JSON.parse(n)}catch(l){i[a]=n}return i},{});return o}function ga(t,e){var r=Object.assign({},e,{content:ka(e.content,[t])},e.ignoreAttributes?{}:Is(t,e.plugins));return r.aria=Object.assign({},_e.aria,r.aria),r.aria={expanded:r.aria.expanded==="auto"?e.interactive:r.aria.expanded,content:r.aria.content==="auto"?e.interactive?null:"describedby":r.aria.content},r}var Ns=function(){return"innerHTML"};function To(t,e){t[Ns()]=e}function ba(t){var e=Gt();return t===!0?e.className=xa:(e.className=_a,Cr(t)?e.appendChild(t):To(e,t)),e}function va(t,e){Cr(e.content)?(To(t,""),t.appendChild(e.content)):typeof e.content!="function"&&(e.allowHTML?To(t,e.content):t.textContent=e.content)}function Lo(t){var e=t.firstElementChild,r=$r(e.children);return{box:e,content:r.find(function(o){return o.classList.contains(ya)}),arrow:r.find(function(o){return o.classList.contains(xa)||o.classList.contains(_a)}),backdrop:r.find(function(o){return o.classList.contains(gs)})}}function Aa(t){var e=Gt(),r=Gt();r.className=fs,r.setAttribute("data-state","hidden"),r.setAttribute("tabindex","-1");var o=Gt();o.className=ya,o.setAttribute("data-state","hidden"),va(o,t.props),e.appendChild(r),r.appendChild(o),i(t.props,t.props);function i(a,n){var l=Lo(e),s=l.box,p=l.content,c=l.arrow;n.theme?s.setAttribute("data-theme",n.theme):s.removeAttribute("data-theme"),typeof n.animation=="string"?s.setAttribute("data-animation",n.animation):s.removeAttribute("data-animation"),n.inertia?s.setAttribute("data-inertia",""):s.removeAttribute("data-inertia"),s.style.maxWidth=typeof n.maxWidth=="number"?n.maxWidth+"px":n.maxWidth,n.role?s.setAttribute("role",n.role):s.removeAttribute("role"),(a.content!==n.content||a.allowHTML!==n.allowHTML)&&va(p,t.props),n.arrow?c?a.arrow!==n.arrow&&(s.removeChild(c),s.appendChild(ba(n.arrow))):s.appendChild(ba(n.arrow)):c&&s.removeChild(c)}return{popper:e,onUpdate:i}}Aa.$$tippy=!0;var Bs=1,Lr=[],Do=[];function Ps(t,e){var r=ga(t,Object.assign({},_e,Ea(ha(e)))),o,i,a,n=!1,l=!1,s=!1,p=!1,c,h,b,u=[],k=ca(dr,r.interactiveDebounce),_,S=Bs++,D=null,A=vs(r.plugins),$={isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},d={id:S,reference:t,popper:Gt(),popperInstance:D,props:r,state:$,plugins:A,clearDelayTimeouts:ur,setProps:fr,setContent:gr,show:Sn,hide:En,hideWithInteractivity:An,enable:Bt,disable:mr,unmount:On,destroy:Dn};if(!r.render)return d;var v=r.render(d),g=v.popper,L=v.onUpdate;g.setAttribute("data-tippy-root",""),g.id="tippy-"+d.id,d.popper=g,t._tippy=d,g._tippy=d;var E=A.map(function(m){return m.fn(d)}),j=t.hasAttribute("aria-expanded");return gt(),f(),Y(),F("onCreate",[d]),r.showOnCreate&&Nt(),g.addEventListener("mouseenter",function(){d.props.interactive&&d.state.isVisible&&d.clearDelayTimeouts()}),g.addEventListener("mouseleave",function(){d.props.interactive&&d.props.trigger.indexOf("mouseenter")>=0&&oe().addEventListener("mousemove",k)}),d;function M(){var m=d.props.touch;return Array.isArray(m)?m:[m,0]}function B(){return M()[0]==="hold"}function P(){var m;return!!((m=d.props.render)!=null&&m.$$tippy)}function R(){return _||t}function oe(){var m=R().parentNode;return m?Ss(m):document}function ie(){return Lo(g)}function U(m){return d.state.isMounted&&!d.state.isVisible||Ae.isTouch||c&&c.type==="focus"?0:Eo(d.props.delay,m?0:1,_e.delay)}function Y(m){m===void 0&&(m=!1),g.style.pointerEvents=d.props.interactive&&!m?"":"none",g.style.zIndex=""+d.props.zIndex}function F(m,w,T){if(T===void 0&&(T=!0),E.forEach(function(I){I[m]&&I[m].apply(I,w)}),T){var z;(z=d.props)[m].apply(z,w)}}function ee(){var m=d.props.aria;if(m.content){var w="aria-"+m.content,T=g.id,z=Ot(d.props.triggerTarget||t);z.forEach(function(I){var se=I.getAttribute(w);if(d.state.isVisible)I.setAttribute(w,se?se+" "+T:T);else{var he=se&&se.replace(T,"").trim();he?I.setAttribute(w,he):I.removeAttribute(w)}})}}function f(){if(!(j||!d.props.aria.expanded)){var m=Ot(d.props.triggerTarget||t);m.forEach(function(w){d.props.interactive?w.setAttribute("aria-expanded",d.state.isVisible&&w===R()?"true":"false"):w.removeAttribute("aria-expanded")})}}function y(){oe().removeEventListener("mousemove",k),Lr=Lr.filter(function(m){return m!==k})}function x(m){if(!(Ae.isTouch&&(s||m.type==="mousedown"))){var w=m.composedPath&&m.composedPath()[0]||m.target;if(!(d.props.interactive&&ua(g,w))){if(Ot(d.props.triggerTarget||t).some(function(T){return ua(T,w)})){if(Ae.isTouch||d.state.isVisible&&d.props.trigger.indexOf("click")>=0)return}else F("onClickOutside",[d,m]);d.props.hideOnClick===!0&&(d.clearDelayTimeouts(),d.hide(),l=!0,setTimeout(function(){l=!1}),d.state.isMounted||K())}}}function O(){s=!0}function N(){s=!1}function W(){var m=oe();m.addEventListener("mousedown",x,!0),m.addEventListener("touchend",x,tt),m.addEventListener("touchstart",N,tt),m.addEventListener("touchmove",O,tt)}function K(){var m=oe();m.removeEventListener("mousedown",x,!0),m.removeEventListener("touchend",x,tt),m.removeEventListener("touchstart",N,tt),m.removeEventListener("touchmove",O,tt)}function Ie(m,w){ft(m,function(){!d.state.isVisible&&g.parentNode&&g.parentNode.contains(g)&&w()})}function De(m,w){ft(m,w)}function ft(m,w){var T=ie().box;function z(I){I.target===T&&(Oo(T,"remove",z),w())}if(m===0)return w();Oo(T,"remove",h),Oo(T,"add",z),h=z}function Ne(m,w,T){T===void 0&&(T=!1);var z=Ot(d.props.triggerTarget||t);z.forEach(function(I){I.addEventListener(m,w,T),u.push({node:I,eventType:m,handler:w,options:T})})}function gt(){B()&&(Ne("touchstart",jt,{passive:!0}),Ne("touchend",cr,{passive:!0})),bs(d.props.trigger).forEach(function(m){if(m!=="manual")switch(Ne(m,jt),m){case"mouseenter":Ne("mouseleave",cr);break;case"focus":Ne(Ls?"focusout":"blur",Mt);break;case"focusin":Ne("focusout",Mt);break}})}function lr(){u.forEach(function(m){var w=m.node,T=m.eventType,z=m.handler,I=m.options;w.removeEventListener(T,z,I)}),u=[]}function jt(m){var w,T=!1;if(!(!d.state.isEnabled||It(m)||l)){var z=((w=c)==null?void 0:w.type)==="focus";c=m,_=m.currentTarget,f(),!d.state.isVisible&&_s(m)&&Lr.forEach(function(I){return I(m)}),m.type==="click"&&(d.props.trigger.indexOf("mouseenter")<0||n)&&d.props.hideOnClick!==!1&&d.state.isVisible?T=!0:Nt(m),m.type==="click"&&(n=!T),T&&!z&&Ue(m)}}function dr(m){var w=m.target,T=R().contains(w)||g.contains(w);if(!(m.type==="mousemove"&&T)){var z=Be().concat(g).map(function(I){var se,he=I._tippy,bt=(se=he.popperInstance)==null?void 0:se.state;return bt?{popperRect:I.getBoundingClientRect(),popperState:bt,props:r}:null}).filter(Boolean);Es(z,m)&&(y(),Ue(m))}}function cr(m){var w=It(m)||d.props.trigger.indexOf("click")>=0&&n;if(!w){if(d.props.interactive){d.hideWithInteractivity(m);return}Ue(m)}}function Mt(m){d.props.trigger.indexOf("focusin")<0&&m.target!==R()||d.props.interactive&&m.relatedTarget&&g.contains(m.relatedTarget)||Ue(m)}function It(m){return Ae.isTouch?B()!==m.type.indexOf("touch")>=0:!1}function pr(){hr();var m=d.props,w=m.popperOptions,T=m.placement,z=m.offset,I=m.getReferenceClientRect,se=m.moveTransition,he=P()?Lo(g).arrow:null,bt=I?{getBoundingClientRect:I,contextElement:I.contextElement||R()}:t,Bi={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(br){var vt=br.state;if(P()){var Tn=ie(),so=Tn.box;["placement","reference-hidden","escaped"].forEach(function(vr){vr==="placement"?so.setAttribute("data-placement",vt.placement):vt.attributes.popper["data-popper-"+vr]?so.setAttribute("data-"+vr,""):so.removeAttribute("data-"+vr)}),vt.attributes.popper={}}}},Fe=[{name:"offset",options:{offset:z}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!se}},Bi];P()&&he&&Fe.push({name:"arrow",options:{element:he,padding:3}}),Fe.push.apply(Fe,(w==null?void 0:w.modifiers)||[]),d.popperInstance=So(bt,g,Object.assign({},w,{placement:T,onFirstUpdate:b,modifiers:Fe}))}function hr(){d.popperInstance&&(d.popperInstance.destroy(),d.popperInstance=null)}function Te(){var m=d.props.appendTo,w,T=R();d.props.interactive&&m===wa||m==="parent"?w=T.parentNode:w=ka(m,[T]),w.contains(g)||w.appendChild(g),d.state.isMounted=!0,pr()}function Be(){return $r(g.querySelectorAll("[data-tippy-root]"))}function Nt(m){d.clearDelayTimeouts(),m&&F("onTrigger",[d,m]),W();var w=U(!0),T=M(),z=T[0],I=T[1];Ae.isTouch&&z==="hold"&&I&&(w=I),w?o=setTimeout(function(){d.show()},w):d.show()}function Ue(m){if(d.clearDelayTimeouts(),F("onUntrigger",[d,m]),!d.state.isVisible){K();return}if(!(d.props.trigger.indexOf("mouseenter")>=0&&d.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(m.type)>=0&&n)){var w=U(!1);w?i=setTimeout(function(){d.state.isVisible&&d.hide()},w):a=requestAnimationFrame(function(){d.hide()})}}function Bt(){d.state.isEnabled=!0}function mr(){d.hide(),d.state.isEnabled=!1}function ur(){clearTimeout(o),clearTimeout(i),cancelAnimationFrame(a)}function fr(m){if(!d.state.isDestroyed){F("onBeforeUpdate",[d,m]),lr();var w=d.props,T=ga(t,Object.assign({},w,ha(m),{ignoreAttributes:!0}));d.props=T,gt(),w.interactiveDebounce!==T.interactiveDebounce&&(y(),k=ca(dr,T.interactiveDebounce)),w.triggerTarget&&!T.triggerTarget?Ot(w.triggerTarget).forEach(function(z){z.removeAttribute("aria-expanded")}):T.triggerTarget&&t.removeAttribute("aria-expanded"),f(),Y(),L&&L(w,T),d.popperInstance&&(pr(),Be().forEach(function(z){requestAnimationFrame(z._tippy.popperInstance.forceUpdate)})),F("onAfterUpdate",[d,m])}}function gr(m){d.setProps({content:m})}function Sn(){var m=d.state.isVisible,w=d.state.isDestroyed,T=!d.state.isEnabled,z=Ae.isTouch&&!d.props.touch,I=Eo(d.props.duration,0,_e.duration);if(!(m||w||T||z)&&!R().hasAttribute("disabled")&&(F("onShow",[d],!1),d.props.onShow(d)!==!1)){if(d.state.isVisible=!0,P()&&(g.style.visibility="visible"),Y(),W(),d.state.isMounted||(g.style.transition="none"),P()){var se=ie(),he=se.box,bt=se.content;Ao([he,bt],0)}b=function(){var Fe;if(!(!d.state.isVisible||p)){if(p=!0,g.offsetHeight,g.style.transition=d.props.moveTransition,P()&&d.props.animation){var no=ie(),br=no.box,vt=no.content;Ao([br,vt],I),ma([br,vt],"visible")}ee(),f(),pa(Do,d),(Fe=d.popperInstance)==null||Fe.forceUpdate(),F("onMount",[d]),d.props.animation&&P()&&De(I,function(){d.state.isShown=!0,F("onShown",[d])})}},Te()}}function En(){var m=!d.state.isVisible,w=d.state.isDestroyed,T=!d.state.isEnabled,z=Eo(d.props.duration,1,_e.duration);if(!(m||w||T)&&(F("onHide",[d],!1),d.props.onHide(d)!==!1)){if(d.state.isVisible=!1,d.state.isShown=!1,p=!1,n=!1,P()&&(g.style.visibility="hidden"),y(),K(),Y(!0),P()){var I=ie(),se=I.box,he=I.content;d.props.animation&&(Ao([se,he],z),ma([se,he],"hidden"))}ee(),f(),d.props.animation?P()&&Ie(z,d.unmount):d.unmount()}}function An(m){oe().addEventListener("mousemove",k),pa(Lr,k),k(m)}function On(){d.state.isVisible&&d.hide(),d.state.isMounted&&(hr(),Be().forEach(function(m){m._tippy.unmount()}),g.parentNode&&g.parentNode.removeChild(g),Do=Do.filter(function(m){return m!==d}),d.state.isMounted=!1,F("onHidden",[d]))}function Dn(){d.state.isDestroyed||(d.clearDelayTimeouts(),d.unmount(),lr(),delete t._tippy,d.state.isDestroyed=!0,F("onDestroy",[d]))}}function Xt(t,e){e===void 0&&(e={});var r=_e.plugins.concat(e.plugins||[]);Ds();var o=Object.assign({},e,{plugins:r}),i=ks(t);if(0)var a,n;var l=i.reduce(function(s,p){var c=p&&Ps(p,o);return c&&s.push(c),s},[]);return Cr(t)?l[0]:l}Xt.defaultProps=_e;Xt.setDefaultProps=Ms;Xt.currentInput=Ae;var Rm=Object.assign({},Rt,{effect:function(e){var r=e.state,o={popper:{position:r.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(r.elements.popper.style,o.popper),r.styles=o,r.elements.arrow&&Object.assign(r.elements.arrow.style,o.arrow)}});Xt.setDefaultProps({render:Aa});var Oa=Xt;var jr={bpXS:{min:0,max:600},bpSM:{min:601,max:900},bpMED:{min:901,max:1020},bpLG:{min:1021,max:1200},bpXL:{min:1201}};var Co={};C(Co,{default:()=>Rs});var Rs={};var jo={};C(jo,{default:()=>Hs});var Hs={};var Mo={};C(Mo,{default:()=>Us});var Us={};var Io={};C(Io,{default:()=>Ws});var Ws={};var No={};C(No,{default:()=>Xs});var Xs={};var Bo={};C(Bo,{default:()=>Ks});var Ks={};function Mr(){let t=getComputedStyle(document.body).fontSize;return t=t===""?-1:t,parseFloat(t)}function Js(t,e){let r=t.min,o=t.max;Mr()>0&&Mr()!==16&&(r=r/16*Mr(),o=o/16*Mr());let a=r||0,n=o||Number.POSITIVE_INFINITY;return a<=e&&e<=n}function Zs(t){let e={};t=t||window.innerWidth;let r;for(r in jr)e[r]=Js(jr[r],t);return e}var Ir="mobile",Qs="tablet",el="desktop";function Po(t){let e=!1,r=Zs();return(t===Ir&&r.bpXS||t===Qs&&r.bpSM||t===el&&(r.bpMED||r.bpLG||r.bpXL))&&(e=!0),e}var ge="data-js-hook",Nr="behavior_",zo="state_";function ne(){let t={};function e(i,a){return{}.hasOwnProperty.call(t,i)?t[i].push(a):t[i]=[a],this}function r(i,a){if(!{}.hasOwnProperty.call(t,i))return this;let n=t[i].indexOf(a);return n!==-1&&t[i].splice(n,1),this}function o(i,a){if(!{}.hasOwnProperty.call(t,i))return this;a=a||{};let n=t[i];for(let l=0,s=n.length;l<s;l++)n[l].call(this,a);return this}return this.addEventListener=e,this.removeEventListener=r,this.dispatchEvent=o,this.getRegisteredEvents=()=>t,this}function rt(t,e){if(!t)return!1;let r=t.getAttribute(ge);return r?(r=r.split(" "),r.indexOf(e)>-1):!1}function de(t,e){if(rt(t,e))return e;if(e.indexOf(" ")!==-1){let o=ge+" values cannot contain spaces!";throw new Error(o)}let r=t.getAttribute(ge);return r!==null&&(e=r+" "+e),t.setAttribute(ge,e),e}var Ro=zo+"atomic_init";function tl(t,e){if(!t||!t.classList){let r=t+' is not valid. Check that element is a DOM node with class "'+e+'"';throw new Error(r)}return t}function rl(t,e){let r=t.classList.contains(e)?t:t.querySelector("."+e);if(!r){let o=e+" not found on or in passed DOM node.";throw new Error(o)}return r}function we(t,e){return tl(t,e),rl(t,e)}function be(t){return rt(t,Ro)?!1:(de(t,Ro),!0)}function ce(t,e,r,o={}){let a=(r||document).querySelectorAll(t),n=[],l,s;for(let p=0,c=a.length;p<c;p++)s=a[p],rt(s,Ro)===!1&&(l=new e(s),l.init(o),n.push(l));return n}function Br(t,e){let r;if(rt(t,e))return r=t,r;if(t){let o="["+ge+"="+e+"]";r=t.querySelector(o)}if(!r){let o=e+" behavior not found on passed DOM node!";throw new Error(o)}return r}var ol=Object.prototype.toString;var il=Array.isArray||function(e){return ol.call(e)==="[object Array]"};function qo(){return!!new RegExp(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i).test(navigator.userAgent)}var Yt=Nr+"flyout-menu",al="["+ge+"="+Yt;function Re(t,e=!0){let r=Br(t,Yt),o=A(t),i=Br(t,Yt+"_content"),a=0,n=0,l=1,s=2,p=3,c,h,b,u=P.bind(this),k=B.bind(this),_,S=!0,D=!1;function A(f){let y=[],x=f.querySelectorAll(`${al}_trigger]`),O,N,W;for(let K=x.length>>>0;K--;){for(W=!1,O=x[K],N=O.parentElement;N!==f;)N.getAttribute(ge)&&N.getAttribute(ge).split(" ").indexOf(Yt)!==-1?(W=!0,N=f):N=N.parentElement;W||y.unshift(x[K])}return y}function $(f=!1){return a=f?p:n,o.forEach(y=>{d("expanded",y,f),y.addEventListener("click",E.bind(this)),y.addEventListener("touchstart",v,{passive:!0}),y.addEventListener("mouseover",g.bind(this)),y.addEventListener("mouseout",L.bind(this))}),i.setAttribute("data-open",f?"true":"false"),e&&!f&&i.setAttribute("hidden",""),U(),this}function d(f,y,x){let O=String(x);return y.setAttribute("aria-"+f,O),O}function v(){D=!0}function g(f){S||(D||this.dispatchEvent("triggerover",{target:this,trigger:f.target,type:"triggerover"}),D=!1)}function L(f){S||this.dispatchEvent("triggerout",{target:this,trigger:f.target,type:"triggerout"})}function E(f){if(!S)switch(this.dispatchEvent("triggerclick",{target:this,trigger:f.target,type:"triggerclick"}),f.preventDefault(),a){case n:case l:this.expand();break;case s:case p:this.collapse();break}}function j(){if(c==null||c.halt(),a===s||a===p)return this;if(a=s,e&&i.removeAttribute("hidden"),this.dispatchEvent("expandbegin",{target:this,type:"expandbegin"}),!h||!b)return k(),this;let f=c==null?void 0:c.isAnimated();return f&&c.addEventListener(q.END_EVENT,k),h(),f||k(),this}function M(){if(c==null||c.halt(),a===l||a===n)return this;for(let y=0,x=o.length;y<x;y++)d("expanded",o[y],!1);if(i.setAttribute("data-open","false"),a=l,this.dispatchEvent("collapsebegin",{target:this,type:"collapsebegin"}),!b||!h)return u(),this;let f=c==null?void 0:c.isAnimated();return f&&c.addEventListener(q.END_EVENT,u),b(),f||u(),this}function B(){a=p,i.setAttribute("data-open","true"),c&&c.removeEventListener(q.END_EVENT,k),this.dispatchEvent("expandend",{target:this,type:"expandend"});for(let f=0,y=o.length;f<y;f++)d("expanded",o[f],!0)}function P(){a=n,e&&i.setAttribute("hidden",""),c&&c.removeEventListener(q.END_EVENT,u),this.dispatchEvent("collapseend",{target:this,type:"collapseend"})}function R(f,y,x){c=f,y&&y!==b&&(b=y),x&&x!==h&&(h=x)}function oe(){c&&c.remove();let f;c=f,h=f,b=f}function ie(){return{container:r,content:i,trigger:o}}function U(){return S&&(S=!1),!S}function Y(){return S||(S=!0),S}function F(f){return _=f,this}let ee=new ne;return this.addEventListener=ee.addEventListener,this.removeEventListener=ee.removeEventListener,this.dispatchEvent=ee.dispatchEvent,this.init=$,this.expand=j,this.collapse=M,this.setTransition=R,this.clearTransition=oe,this.getData=()=>_,this.getTransition=()=>c,this.getDom=ie,this.isAnimating=()=>a===s||a===l,this.isExpanded=()=>a===p,this.resume=U,this.setData=F,this.suspend=Y,Re.BASE_CLASS=Yt,this}var Pr={CSS_PROPERTY:"opacity",BASE_CLASS:"u-alpha-transition",ALPHA_100:"u-alpha-100",ALPHA_0:"u-alpha-0"};function Da(t){let e=new ne,r=new q(t,Pr,this);function o(n){return r.init(n),this}function i(){return r.applyClass(Pr.ALPHA_100),this}function a(){return r.applyClass(Pr.ALPHA_0),this}return this.addEventListener=e.addEventListener,this.dispatchEvent=e.dispatchEvent,this.removeEventListener=e.removeEventListener,this.animateOff=r.animateOff,this.animateOn=r.animateOn,this.halt=r.halt,this.isAnimated=r.isAnimated,this.remove=r.remove,this.setElement=r.setElement,this.fadeIn=i,this.fadeOut=a,this.init=o,this}Da.CLASSES=Pr;function q(t,e,r){let o=e,i=t;if(!r)throw new Error("Child transition argument must be defined!");let a=r,n,l,s,p=!1,c=!1,h=!1;if(typeof o.CSS_PROPERTY=="undefined"||typeof o.BASE_CLASS=="undefined")throw new Error("Transitions require CSS_PROPERTY and BASE_CLASS to be passed into BaseTransition.");function b(){l&&p?(i.addEventListener(l,s),a.dispatchEvent(q.BEGIN_EVENT,{target:a,type:q.BEGIN_EVENT}),i.classList.add(q.ANIMATING_CLASS),c=!0):(a.dispatchEvent(q.BEGIN_EVENT,{target:a,type:q.BEGIN_EVENT}),s())}function u(){i.removeEventListener(l,s)}function k(E){return E&&E.propertyName!==o.CSS_PROPERTY?!1:(u(),i.classList.remove(q.ANIMATING_CLASS),a.dispatchEvent(q.END_EVENT,{target:a,type:q.END_EVENT}),c=!1,!0)}function _(){let E;for(E in o)({}).hasOwnProperty.call(o,E)&&o[E]!==o.BASE_CLASS&&i.classList.contains(o[E])&&i.classList.remove(o[E])}function S(){c&&(i.style.webkitTransitionDuration="0",i.style.mozTransitionDuration="0",i.style.oTransitionDuration="0",i.style.transitionDuration="0",i.removeEventListener(l,s),s(),i.style.webkitTransitionDuration="",i.style.mozTransitionDuration="",i.style.oTransitionDuration="",i.style.transitionDuration="")}function D(){S(),_(),i.classList.remove(o.BASE_CLASS)}function A(){i.classList.remove(q.NO_ANIMATION_CLASS),p=!0}function $(){i.classList.add(q.NO_ANIMATION_CLASS),p=!1}function d(E){if(!E){let P="Element does not have TransitionEnd event. It may be null!";throw new Error(P)}let j,M={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},B;for(B in M)if({}.hasOwnProperty.call(M,B)&&typeof E.style[B]!="undefined"){j=M[B];break}return j}function v(E){D(),A(),i=E,i.classList.add(o.BASE_CLASS),l=d(i)}function g(E){if(p=!i.classList.contains(q.NO_ANIMATION_CLASS),s=k.bind(this),v(i),!E)throw new Error("Transition needs to be passed an initial CSS class on initialization!");return i.classList.add(E),this}function L(E){return h||(_(),h=!0),i.classList.contains(E)?!1:(u(),i.classList.remove(n),n=E,b(),i.classList.add(n),!0)}return this.animateOff=$,this.animateOn=A,this.applyClass=L,this.halt=S,this.init=g,this.isAnimated=()=>p,this.remove=D,this.setElement=v,this}q.BEGIN_EVENT="transitionbegin";q.END_EVENT="transitionend";q.NO_ANIMATION_CLASS="u-no-animation";q.ANIMATING_CLASS="u-is-animating";var Kt={CSS_PROPERTY:"max-height",BASE_CLASS:"u-max-height-transition",MH_DEFAULT:"u-max-height-default",MH_SUMMARY:"u-max-height-summary",MH_ZERO:"u-max-height-zero"};function pe(t){let e=new ne,r=new q(t,Kt,this),o=0;function i(){let b=t.scrollHeight+"px";t.style.maxHeight=b}function a(){window.removeEventListener("load",a),i()}function n(h){return r.init(h),window.addEventListener("load",a),window.addEventListener("resize",()=>{i()}),this}function l(){return i(),r.applyClass(Kt.MH_DEFAULT),(!o||t.scrollHeight>o)&&(o=t.scrollHeight),this}function s(){return r.applyClass(Kt.MH_SUMMARY),o=t.scrollHeight,this}function p(){return r.applyClass(Kt.MH_ZERO),o=t.scrollHeight,this}function c(){return t.style.maxHeight="",r.remove()}return this.addEventListener=e.addEventListener,this.dispatchEvent=e.dispatchEvent,this.removeEventListener=e.removeEventListener,this.animateOff=r.animateOff,this.animateOn=r.animateOn,this.halt=r.halt,this.isAnimated=r.isAnimated,this.setElement=r.setElement,this.refresh=i,this.remove=c,this.init=n,this.maxHeightDefault=l,this.maxHeightSummary=s,this.maxHeightZero=p,this}pe.CLASSES=Kt;var qe={CSS_PROPERTY:"transform",BASE_CLASS:"u-move-transition",MOVE_TO_ORIGIN:"u-move-to-origin",MOVE_LEFT:"u-move-left",MOVE_LEFT_2X:"u-move-left-2x",MOVE_LEFT_3X:"u-move-left-3x",MOVE_RIGHT:"u-move-right",MOVE_UP:"u-move-up"};function Ta(t){let e=new ne,r=new q(t,qe,this);function o(s){return r.init(s),this}function i(){return r.applyClass(qe.MOVE_TO_ORIGIN),this}function a(s){s=s||1;let p=[qe.MOVE_LEFT,qe.MOVE_LEFT_2X,qe.MOVE_LEFT_3X];return r.applyClass(p[s-1]),this}function n(){return r.applyClass(qe.MOVE_RIGHT),this}function l(){return r.applyClass(qe.MOVE_UP),this}return this.addEventListener=e.addEventListener,this.dispatchEvent=e.dispatchEvent,this.removeEventListener=e.removeEventListener,this.animateOff=r.animateOff,this.animateOn=r.animateOn,this.halt=r.halt,this.isAnimated=r.isAnimated,this.setElement=r.setElement,this.remove=r.remove,this.init=o,this.moveLeft=()=>a(1),this.moveLeft2=()=>a(2),this.moveLeft3=()=>a(3),this.moveRight=n,this.moveToOrigin=i,this.moveUp=l,this}Ta.CLASSES=qe;var Dt="o-expandable";function He(t){let e=we(t,Dt),r,o,i,a,n;function l(){if(!be(e))return this;r=e.querySelector(`.${Dt}__header`),o=e.querySelector(`.${Dt}__content`),i=e.querySelector(`.${Dt}__label`);let c=e.classList.contains(`${Dt}--onload-open`);de(e,"behavior_flyout-menu"),de(r,"behavior_flyout-menu_trigger"),de(o,"behavior_flyout-menu_content");let h=c?pe.CLASSES.MH_DEFAULT:pe.CLASSES.MH_ZERO;return a=new pe(o).init(h),n=new Re(e),n.setTransition(a,a.maxHeightZero,a.maxHeightDefault),n.init(c),n.addEventListener("expandbegin",()=>{o.classList.remove("u-hidden"),this.dispatchEvent("expandbegin",{target:this})}),n.addEventListener("collapseend",()=>{o.classList.add("u-hidden")}),this}function s(){return i.textContent.trim()}this.init=l,this.expand=()=>n.expand(),this.collapse=()=>n.collapse(),this.isExpanded=()=>n.isExpanded(),this.refresh=()=>n.getTransition().refresh(),this.getLabelText=s;let p=new ne;return this.addEventListener=p.addEventListener,this.removeEventListener=p.removeEventListener,this.dispatchEvent=p.dispatchEvent,this}He.BASE_CLASS=Dt;He.init=t=>ce(`.${He.BASE_CLASS}`,He,t);var zr="o-expandable-group";function Rr(t){let e=we(t,zr),r=e.classList.contains(`${zr}--accordion`),o,i;function a(l){let s=l.target;i&&i!==s&&i.collapse(),i=s}function n(l){return be(e)?(r&&(o=l,o.forEach(s=>{s.addEventListener("expandbegin",a)})),this):this}return this.init=n,this}Rr.BASE_CLASS=zr;Rr.init=t=>{(t||document).querySelectorAll(`.${zr}`).forEach(o=>{let i=ce(`.${He.BASE_CLASS}`,He,o);new Rr(o).init(i)})};var Tt="o-summary";function qr(t){let e=we(t,Tt),r=e.classList.contains(`${Tt}--mobile`),o=e.querySelector(`.${Tt}__content`),i=e.querySelector(`.${Tt}__btn`),a,n,l;function s(){return be(e)?(window.addEventListener("load",p),this):this}function p(){window.removeEventListener("load",p),l=!u(),de(e,"behavior_flyout-menu"),de(o,"behavior_flyout-menu_content"),de(i,"behavior_flyout-menu_trigger"),n=new Re(e,!1),a=new pe(o),a.init(l?pe.CLASSES.MH_SUMMARY:pe.CLASSES.MH_DEFAULT),n.setTransition(a,a.maxHeightSummary,a.maxHeightDefault),n.addEventListener("triggerclick",k),n.init(),b(),window.addEventListener("resize",b),"onorientationchange"in window&&window.addEventListener("orientationchange",b),e.addEventListener("focusin",c),o.addEventListener("click",h)}function c(v){!l&&v.target!==i&&(i.click(),e.removeEventListener("focusin",c))}function h(v){v.target.tagName!=="A"&&n.isExpanded()&&a.refresh()}function b(){u()?$():A()}function u(){return r&&!Po(Ir)||o.scrollHeight<=88}function k(){n.addEventListener("expandend",_)}function _(){D(),window.removeEventListener("resize",b),window.removeEventListener("orientationchange",b),n.removeEventListener("expandend",_),n.suspend(),a.remove()}function S(){i.classList.remove("u-hidden")}function D(){i.classList.add("u-hidden")}function A(){return l&&(n.collapse(),a.animateOn(),S(),l=!1),!l}function $(){return l||(a.animateOff(),n.expand(),D(),l=!0),l}let d=new ne;return this.addEventListener=d.addEventListener,this.removeEventListener=d.removeEventListener,this.dispatchEvent=d.dispatchEvent,this.init=s,this}qr.BASE_CLASS=Tt;qr.init=t=>ce(`.${Tt}`,qr,t);var Jt="o-summary-minimal";function Hr(t){let e=we(t,Jt),r=e.querySelector(`.${Jt}__content`),o=e.querySelector(`.${Jt}__btn`),i,a;function n(){return be(e)?(de(e,"behavior_flyout-menu"),de(r,"behavior_flyout-menu_content"),de(o,"behavior_flyout-menu_trigger"),window.addEventListener("load",l),this):this}function l(){window.removeEventListener("load",l),a=new Re(e,!1),i=new pe(r),i.init(pe.CLASSES.MH_SUMMARY),a.setTransition(i,i.maxHeightSummary,i.maxHeightDefault),a.init(),e.addEventListener("focusin",s),r.addEventListener("click",p),a.collapse(),i.animateOn()}function s(h){h.target!==o&&(o.click(),e.removeEventListener("focusin",s))}function p(h){h.target.tagName!=="A"&&a.isExpanded()&&i.refresh()}let c=new ne;return this.addEventListener=c.addEventListener,this.removeEventListener=c.removeEventListener,this.dispatchEvent=c.dispatchEvent,this.init=n,this}Hr.BASE_CLASS=Jt;Hr.init=t=>ce(`.${Jt}`,Hr,t);var Ho={};C(Ho,{default:()=>dl});var dl={};var Vo={};C(Vo,{default:()=>pl});var pl={};var Uo={};C(Uo,{default:()=>ml});var ml={};var Fo={};C(Fo,{default:()=>fl});var fl={};var Wo={};C(Wo,{default:()=>bl});var bl={};var Go={};C(Go,{default:()=>yl});var yl={};var Xo={};C(Xo,{default:()=>_l});var _l={};var Yo={};C(Yo,{default:()=>kl});var kl={};var Ko={};C(Ko,{default:()=>El});var El={};var Al;function Ol(t){return t.replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&")}function Dl(t,e){return RegExp(Ol(e.trim()),"i").test(t)}function Tl(t,e,r){let o=t,i=e,a=(r==null?void 0:r.maxSelections)||5,n=[],l=[],s=[],p=[],c=-1;function h(v){return i+"-"+v.value.trim().replace(/\s+/g,"-").toLowerCase()}function b(){return l.length>=a}function u(v){let g,L=[],E=!1;for(let j=0,M=v.length;j<M;j++)g=v[j],E=b()?!1:g.defaultSelected,L.push({id:h(g),value:g.value,text:g.text,checked:E}),E&&l.push(j);return L}function k(){return n=u(o),this}function _(v){return n[v].checked=!n[v].checked,l.length<a&&n[v].checked?(l.push(v),l.sort(),!0):(n[v].checked=!1,l=l.filter(function(g){return g!==v}),!1)}function S(v,g,L,E){return Dl(g.text,E)&&v.push(L),v}function D(v){return Object.prototype.toString.call(v)!=="[object String]"&&(v=""),p=s,n.length>0&&(s=n.reduce(function(g,L,E){return S(g,L,E,v)},[])),c=-1,s}function A(v){return n[v]}function $(v){let g=s.length,L=g===0?n.length:g;v<0?c=-1:v>=L?c=L-1:c=v}function d(){return c}return this.init=k,this.toggleOption=_,this.getSelectedIndices=function(){return l},this.isAtMaxSelections=b,this.filterIndices=D,this.clearFilter=function(){return s=p=[],Al},this.getFilterIndices=function(){return s},this.getLastFilterIndices=function(){return p},this.getIndex=d,this.setIndex=$,this.resetIndex=function(){return c=-1,c},this.getOption=A,this}var ja=Tl;function ke(t,e,r){let o=document.createElement(t);return Object.keys(r).forEach(i=>{let a=r[i];i in o?o[i]=a:o.setAttribute(i,a)}),e&&e.appendChild(o),o}var Ma='<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="cf-icon-svg cf-icon-svg--error" viewBox="0 0 12 19"><path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"/></svg>';var Ml=Ma,Se="o-multiselect",Il="a-checkbox",Nl="a-text-input",Ia="prev",Vr="next",Jo="Enter",Bl=" ",Na="Escape",Pl="ArrowUp",Ba="ArrowDown",Pa="Tab",za={renderTags:!0,maxSelections:5};function Ur(t){t.classList.add(Se);let e=we(t,Se),r=!1,o,i,a,n,l,s,p,c,h,b,u,k=[],_;function S(){u.classList.remove("u-no-results"),u.classList.add("u-filtered");let f=a.getLastFilterIndices();for(let y=0,x=f.length;y<x;y++)k[f[y]].classList.remove("u-filter-match");f=a.getFilterIndices();for(let y=0,x=f.length;y<x;y++)k[f[y]].classList.add("u-filter-match")}function D(){u.classList.remove("u-filtered","u-no-results");for(let f=0,y=u.children.length;f<y;f++)u.children[f].classList.remove("u-filter-match");a.clearFilter()}function A(){u.classList.add("u-no-results"),u.classList.remove("u-filtered")}function $(f){return f.length>0?(S(),!0):(A(),!1)}function d(f){D(),a.resetIndex();let y=a.filterIndices(f);$(y)}function v(){return s.classList.add("u-active"),b.classList.remove("u-invisible"),b.setAttribute("aria-hidden",!1),_.dispatchEvent("expandbegin",{target:_}),_}function g(){return s.classList.remove("u-active"),b.classList.add("u-invisible"),b.setAttribute("aria-hidden",!0),a.resetIndex(),_.dispatchEvent("collapsebegin",{target:_}),_}function L(f){f===Vr?a.setIndex(a.getIndex()+1):f===Ia&&a.setIndex(a.getIndex()-1);let y=a.getIndex();if(y>-1){let x=y,O=a.getFilterIndices();O.length>0&&(x=O[y]);let W=a.getOption(x).value,Ie=u.querySelector('[data-option="'+W+'"]').querySelector("input");r=!0,Ie.focus()}else r=!1,h.focus()}function E(){h.value="",D()}function j(f){let y=f.target;y.tagName==="BUTTON"&&(f.preventDefault(),y.removeEventListener("click",j),y.querySelector("label").click())}function M(f){if(f.key===Bl||f.key===Jo){let y=f.target.querySelector("label");u.querySelector("#"+y.getAttribute("for")).click()}}function B(f){return o+"-"+f.value.trim().replace(/[^\w]/g,"-").toLowerCase()}function P(f,y){let x=B(y),O=ke("li",null,{"data-option":y.value}),N=ke("button",O,{type:"button",class:"a-tag-filter",innerHTML:"<label for="+x+">"+y.text+Ml+"</label>"});f.appendChild(O),N.addEventListener("click",j),N.addEventListener("keydown",M)}function R(f){let y=a.getOption(f)||a.getOption(a.getIndex());if(y){if(y.checked){u.classList.contains("u-max-selections")&&u.classList.remove("u-max-selections");let x='[data-option="'+y.value+'"]',O=p.querySelector(x);typeof O!="undefined"&&O&&(p==null||p.removeChild(O))}else l!=null&&l.renderTags&&p&&P(p,y);a.toggleOption(f),a.isAtMaxSelections()&&u.classList.add("u-max-selections"),_.dispatchEvent("selectionsupdated",{target:_})}a.resetIndex(),r=!1,b.getAttribute("aria-hidden")==="false"&&h.focus()}function oe(f){R(Number(f.target.getAttribute("data-index"))),E()}function ie(){c.addEventListener("mousemove",function(x){let O=x.target;x.offsetX>O.offsetWidth-35?O.style.cursor="pointer":O.style.cursor="auto"}),c.addEventListener("mouseup",function(x){let O=x.target;x.offsetX>O.offsetWidth-35&&b.offsetHeight===140&&h.blur()}),h.addEventListener("input",function(){d(this.value)}),h.addEventListener("focus",function(){b.getAttribute("aria-hidden")==="true"&&v()}),h.addEventListener("blur",function(){!r&&b.getAttribute("aria-hidden")==="false"&&g()}),h.addEventListener("keydown",function(x){let O=x.key;b.getAttribute("aria-hidden")==="true"&&O!==Pa&&v(),O===Jo?(x.preventDefault(),L(Vr)):O===Na?(E(),g()):O===Ba?L(Vr):O===Pa&&!x.shiftKey&&b.getAttribute("aria-hidden")==="false"&&g()}),u.addEventListener("mousedown",function(){r=!0}),u.addEventListener("keydown",function(x){let O=x.key,N=x.target,W=N.checked;if(O===Jo){x.preventDefault(),N.checked=!W;let K=new Event("change",{bubbles:!1,cancelable:!0});N.dispatchEvent(K)}else O===Na?(h.focus(),g()):O===Pl?L(Ia):O===Ba&&L(Vr)}),b.addEventListener("mousedown",function(x){x.target.tagName==="LABEL"&&(r=!0)});let f=u.querySelectorAll("input");for(let x=0,O=f.length;x<O;x++)f[x].addEventListener("change",oe);let y=p.querySelectorAll("button");for(let x=0,O=y.length;x<O;x++)y[x].addEventListener("click",j),y[x].addEventListener("keydown",M)}function U(){s=document.createElement("div"),s.className=Se,p=ke("ul",null,{className:"m-tag-group"}),c=ke("header",s,{className:Se+"__header"}),h=ke("input",c,{className:Se+"__search "+Nl,type:"text",placeholder:i||"Select up to five",id:e.id,autocomplete:"off"}),b=ke("fieldset",s,{className:Se+"__fieldset u-invisible","aria-hidden":"true"});let f=Se+"__options";a.isAtMaxSelections()&&(f+=" u-max-selections"),u=ke("ul",b,{className:f});let y,x,O;for(let N=0,W=n.length;N<W;N++){y=n[N],x=B(y),O=a.getOption(N).checked;let K=ke("li",u,{"data-option":y.value,"data-cy":"multiselect-option",class:"m-form-field m-form-field--checkbox"});ke("input",K,{id:x,type:"checkbox",value:y.value,name:o,class:Il+" "+Se+"__checkbox",checked:O,"data-index":N}),ke("label",K,{for:x,textContent:y.text,className:Se+"__label a-label"}),k.push(K),O&&(l!=null&&l.renderTags)&&P(p,y)}return s.insertBefore(p,c),e.parentNode.insertBefore(s,e),s.appendChild(e),s}function Y(f=za){if(!be(e))return this;if(qo())return this;if(_=this,o=e.name||e.id,i=e.getAttribute("placeholder"),n=e.options||[],l=_r(_r({},za),f),n.length>0){a=new ja(n,o,l).init();let y=U();e.parentNode.removeChild(e),e=y,be(e),ie()}return this}function F(){return a}this.init=Y,this.expand=v,this.collapse=g;let ee=new ne;return this.addEventListener=ee.addEventListener,this.removeEventListener=ee.removeEventListener,this.dispatchEvent=ee.dispatchEvent,this.getModel=F,this.updateSelections=R,this.selectionClickHandler=j,this.selectionKeyDownHandler=M,this}Ur.BASE_CLASS=Se;Ur.init=t=>ce(`.${Se}`,Ur,void 0,t);var Zo={};C(Zo,{default:()=>Rl});var Rl={};var Qo={};C(Qo,{default:()=>Hl});var Hl={};var ei={};C(ei,{default:()=>Ul});var Ul={};var ti={};C(ti,{default:()=>Wl});var Wl={};var ri={};C(ri,{default:()=>Xl});var Xl={};var oi={};C(oi,{default:()=>Kl});var Kl={};var ii={};C(ii,{default:()=>Zl});var Zl={};var ai={};C(ai,{default:()=>ed});var ed={};var ni={};C(ni,{default:()=>rd});var rd={};var si={};C(si,{default:()=>id});var id={};var li={};C(li,{default:()=>nd});var nd={};var di={};C(di,{default:()=>ld});var ld={};var ci={};C(ci,{default:()=>cd});var cd={};var pi={};C(pi,{default:()=>hd});var hd={};var hi={};C(hi,{default:()=>ud});var ud={};var mi={};C(mi,{default:()=>gd});var gd={};var ui={};C(ui,{default:()=>vd});var vd={};var fi={};C(fi,{default:()=>xd});var xd={};var gi={};C(gi,{default:()=>wd});var wd={};var bi={};C(bi,{default:()=>Sd});var Sd={};var Fr=globalThis,Wr=Fr.ShadowRoot&&(Fr.ShadyCSS===void 0||Fr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vi=Symbol(),Ra=new WeakMap,Zt=class{constructor(e,r,o){if(this._$cssResult$=!0,o!==vi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o,r=this.t;if(Wr&&e===void 0){let o=r!==void 0&&r.length===1;o&&(e=Ra.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Ra.set(r,e))}return e}toString(){return this.cssText}},Lt=t=>new Zt(typeof t=="string"?t:t+"",void 0,vi),Qt=(t,...e)=>{let r=t.length===1?t[0]:e.reduce((o,i,a)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[a+1],t[0]);return new Zt(r,t,vi)},qa=(t,e)=>{if(Wr)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let o=document.createElement("style"),i=Fr.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=r.cssText,t.appendChild(o)}},yi=Wr?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(let o of e.cssRules)r+=o.cssText;return Lt(r)})(t):t;var{is:Ed,defineProperty:Ad,getOwnPropertyDescriptor:Od,getOwnPropertyNames:Dd,getOwnPropertySymbols:Td,getPrototypeOf:Ld}=Object,Ve=globalThis,Ha=Ve.trustedTypes,$d=Ha?Ha.emptyScript:"",xi=Ve.reactiveElementPolyfillSupport,er=(t,e)=>t,tr={toAttribute(t,e){switch(e){case Boolean:t=t?$d:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(o){r=null}}return r}},Gr=(t,e)=>!Ed(t,e),Va={attribute:!0,type:String,converter:tr,reflect:!1,useDefault:!1,hasChanged:Gr},Ua,Fa;(Ua=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(Fa=Ve.litPropertyMetadata)!=null||(Ve.litPropertyMetadata=new WeakMap);var je=class extends HTMLElement{static addInitializer(e){var r;this._$Ei(),((r=this.l)!=null?r:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Va){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){let o=Symbol(),i=this.getPropertyDescriptor(e,o,r);i!==void 0&&Ad(this.prototype,e,i)}}static getPropertyDescriptor(e,r,o){var n;let{get:i,set:a}=(n=Od(this.prototype,e))!=null?n:{get(){return this[r]},set(l){this[r]=l}};return{get:i,set(l){let s=i==null?void 0:i.call(this);a==null||a.call(this,l),this.requestUpdate(e,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var r;return(r=this.elementProperties.get(e))!=null?r:Va}static _$Ei(){if(this.hasOwnProperty(er("elementProperties")))return;let e=Ld(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(er("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(er("properties"))){let r=this.properties,o=[...Dd(r),...Td(r)];for(let i of o)this.createProperty(i,r[i])}let e=this[Symbol.metadata];if(e!==null){let r=litPropertyMetadata.get(e);if(r!==void 0)for(let[o,i]of r)this.elementProperties.set(o,i)}this._$Eh=new Map;for(let[r,o]of this.elementProperties){let i=this._$Eu(r,o);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let r=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let i of o)r.unshift(yi(i))}else e!==void 0&&r.push(yi(e));return r}static _$Eu(e,r){let o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r,o;((r=this._$EO)!=null?r:this._$EO=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)==null||o.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){let e=new Map,r=this.constructor.elementProperties;for(let o of r.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var r;let e=(r=this.shadowRoot)!=null?r:this.attachShadow(this.constructor.shadowRootOptions);return qa(e,this.constructor.elementStyles),e}connectedCallback(){var e,r;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(r=this._$EO)==null||r.forEach(o=>{var i;return(i=o.hostConnected)==null?void 0:i.call(o)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var o;return(o=r.hostDisconnected)==null?void 0:o.call(r)})}attributeChangedCallback(e,r,o){this._$AK(e,o)}_$ET(e,r){var a;let o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(i!==void 0&&o.reflect===!0){let n=(((a=o.converter)==null?void 0:a.toAttribute)!==void 0?o.converter:tr).toAttribute(r,o.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,r){var a,n,l,s;let o=this.constructor,i=o._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let p=o.getPropertyOptions(i),c=typeof p.converter=="function"?{fromAttribute:p.converter}:((a=p.converter)==null?void 0:a.fromAttribute)!==void 0?p.converter:tr;this._$Em=i,this[i]=(s=(l=c.fromAttribute(r,p.type))!=null?l:(n=this._$Ej)==null?void 0:n.get(i))!=null?s:null,this._$Em=null}}requestUpdate(e,r,o){var i,a;if(e!==void 0){let n=this.constructor,l=this[e];if(o!=null||(o=n.getPropertyOptions(e)),!(((i=o.hasChanged)!=null?i:Gr)(l,r)||o.useDefault&&o.reflect&&l===((a=this._$Ej)==null?void 0:a.get(e))&&!this.hasAttribute(n._$Eu(e,o))))return;this.C(e,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:o,reflect:i,wrapped:a},n){var l,s,p;o&&!((l=this._$Ej)!=null?l:this._$Ej=new Map).has(e)&&(this._$Ej.set(e,(s=n!=null?n:r)!=null?s:this[e]),a!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(r=void 0),this._$AL.set(e,r)),i===!0&&this._$Em!==e&&((p=this._$Eq)!=null?p:this._$Eq=new Set).add(e))}_$EP(){return co(this,null,function*(){this.isUpdatePending=!0;try{yield this._$ES}catch(r){Promise.reject(r)}let e=this.scheduleUpdate();return e!=null&&(yield e),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o,i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((o=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[n,l]of this._$Ep)this[n]=l;this._$Ep=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[n,l]of a){let{wrapped:s}=l,p=this[n];s!==!0||this._$AL.has(n)||p===void 0||this.C(n,void 0,l,p)}}let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(i=this._$EO)==null||i.forEach(a=>{var n;return(n=a.hostUpdate)==null?void 0:n.call(a)}),this.update(r)):this._$EM()}catch(a){throw e=!1,this._$EM(),a}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(o=>{var i;return(i=o.hostUpdated)==null?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(e){}firstUpdated(e){}},Wa;je.elementStyles=[],je.shadowRootOptions={mode:"open"},je[er("elementProperties")]=new Map,je[er("finalized")]=new Map,xi==null||xi({ReactiveElement:je}),((Wa=Ve.reactiveElementVersions)!=null?Wa:Ve.reactiveElementVersions=[]).push("2.1.0");var or=globalThis,Xr=or.trustedTypes,Ga=Xr?Xr.createPolicy("lit-html",{createHTML:t=>t}):void 0,ki="$lit$",Me=`lit$${Math.random().toFixed(9).slice(2)}$`,Si="?"+Me,Cd=`<${Si}>`,at=document,ir=()=>at.createComment(""),ar=t=>t===null||typeof t!="object"&&typeof t!="function",Ei=Array.isArray,en=t=>Ei(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",_i=`[ 	
\f\r]`,rr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xa=/-->/g,Ya=/>/g,ot=RegExp(`>|${_i}(?:([^\\s"'>=/]+)(${_i}*=${_i}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ka=/'/g,Ja=/"/g,tn=/^(?:script|style|textarea|title)$/i,Ai=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),eo=Ai(1),Af=Ai(2),Of=Ai(3),nt=Symbol.for("lit-noChange"),X=Symbol.for("lit-nothing"),Za=new WeakMap,it=at.createTreeWalker(at,129);function rn(t,e){if(!Ei(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ga!==void 0?Ga.createHTML(e):e}var on=(t,e)=>{let r=t.length-1,o=[],i,a=e===2?"<svg>":e===3?"<math>":"",n=rr;for(let l=0;l<r;l++){let s=t[l],p,c,h=-1,b=0;for(;b<s.length&&(n.lastIndex=b,c=n.exec(s),c!==null);)b=n.lastIndex,n===rr?c[1]==="!--"?n=Xa:c[1]!==void 0?n=Ya:c[2]!==void 0?(tn.test(c[2])&&(i=RegExp("</"+c[2],"g")),n=ot):c[3]!==void 0&&(n=ot):n===ot?c[0]===">"?(n=i!=null?i:rr,h=-1):c[1]===void 0?h=-2:(h=n.lastIndex-c[2].length,p=c[1],n=c[3]===void 0?ot:c[3]==='"'?Ja:Ka):n===Ja||n===Ka?n=ot:n===Xa||n===Ya?n=rr:(n=ot,i=void 0);let u=n===ot&&t[l+1].startsWith("/>")?" ":"";a+=n===rr?s+Cd:h>=0?(o.push(p),s.slice(0,h)+ki+s.slice(h)+Me+u):s+Me+(h===-2?l:u)}return[rn(t,a+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]},nr=class t{constructor({strings:e,_$litType$:r},o){let i;this.parts=[];let a=0,n=0,l=e.length-1,s=this.parts,[p,c]=on(e,r);if(this.el=t.createElement(p,o),it.currentNode=this.el.content,r===2||r===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=it.nextNode())!==null&&s.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let h of i.getAttributeNames())if(h.endsWith(ki)){let b=c[n++],u=i.getAttribute(h).split(Me),k=/([.?@])?(.*)/.exec(b);s.push({type:1,index:a,name:k[2],strings:u,ctor:k[1]==="."?Kr:k[1]==="?"?Jr:k[1]==="@"?Zr:lt}),i.removeAttribute(h)}else h.startsWith(Me)&&(s.push({type:6,index:a}),i.removeAttribute(h));if(tn.test(i.tagName)){let h=i.textContent.split(Me),b=h.length-1;if(b>0){i.textContent=Xr?Xr.emptyScript:"";for(let u=0;u<b;u++)i.append(h[u],ir()),it.nextNode(),s.push({type:2,index:++a});i.append(h[b],ir())}}}else if(i.nodeType===8)if(i.data===Si)s.push({type:2,index:a});else{let h=-1;for(;(h=i.data.indexOf(Me,h+1))!==-1;)s.push({type:7,index:a}),h+=Me.length-1}a++}}static createElement(e,r){let o=at.createElement("template");return o.innerHTML=e,o}};function st(t,e,r=t,o){var n,l,s;if(e===nt)return e;let i=o!==void 0?(n=r._$Co)==null?void 0:n[o]:r._$Cl,a=ar(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==a&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),a===void 0?i=void 0:(i=new a(t),i._$AT(t,r,o)),o!==void 0?((s=r._$Co)!=null?s:r._$Co=[])[o]=i:r._$Cl=i),i!==void 0&&(e=st(t,i._$AS(t,e.values),i,o)),e}var Yr=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var p;let{el:{content:r},parts:o}=this._$AD,i=((p=e==null?void 0:e.creationScope)!=null?p:at).importNode(r,!0);it.currentNode=i;let a=it.nextNode(),n=0,l=0,s=o[0];for(;s!==void 0;){if(n===s.index){let c;s.type===2?c=new $t(a,a.nextSibling,this,e):s.type===1?c=new s.ctor(a,s.name,s.strings,this,e):s.type===6&&(c=new Qr(a,this,e)),this._$AV.push(c),s=o[++l]}n!==(s==null?void 0:s.index)&&(a=it.nextNode(),n++)}return it.currentNode=at,i}p(e){let r=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}},$t=class t{get _$AU(){var e,r;return(r=(e=this._$AM)==null?void 0:e._$AU)!=null?r:this._$Cv}constructor(e,r,o,i){var a;this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=i,this._$Cv=(a=i==null?void 0:i.isConnected)!=null?a:!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=st(this,e,r),ar(e)?e===X||e==null||e===""?(this._$AH!==X&&this._$AR(),this._$AH=X):e!==this._$AH&&e!==nt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):en(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==X&&ar(this._$AH)?this._$AA.nextSibling.data=e:this.T(at.createTextNode(e)),this._$AH=e}$(e){var a;let{values:r,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=nr.createElement(rn(o.h,o.h[0]),this.options)),o);if(((a=this._$AH)==null?void 0:a._$AD)===i)this._$AH.p(r);else{let n=new Yr(i,this),l=n.u(this.options);n.p(r),this.T(l),this._$AH=n}}_$AC(e){let r=Za.get(e.strings);return r===void 0&&Za.set(e.strings,r=new nr(e)),r}k(e){Ei(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,o,i=0;for(let a of e)i===r.length?r.push(o=new t(this.O(ir()),this.O(ir()),this,this.options)):o=r[i],o._$AI(a),i++;i<r.length&&(this._$AR(o&&o._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,r);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}},lt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,i,a){this.type=1,this._$AH=X,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=a,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=X}_$AI(e,r=this,o,i){let a=this.strings,n=!1;if(a===void 0)e=st(this,e,r,0),n=!ar(e)||e!==this._$AH&&e!==nt,n&&(this._$AH=e);else{let l=e,s,p;for(e=a[0],s=0;s<a.length-1;s++)p=st(this,l[o+s],r,s),p===nt&&(p=this._$AH[s]),n||(n=!ar(p)||p!==this._$AH[s]),p===X?e=X:e!==X&&(e+=(p!=null?p:"")+a[s+1]),this._$AH[s]=p}n&&!i&&this.j(e)}j(e){e===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},Kr=class extends lt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===X?void 0:e}},Jr=class extends lt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==X)}},Zr=class extends lt{constructor(e,r,o,i,a){super(e,r,o,i,a),this.type=5}_$AI(e,r=this){var n;if((e=(n=st(this,e,r,0))!=null?n:X)===nt)return;let o=this._$AH,i=e===X&&o!==X||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,a=e!==X&&(o===X||i);i&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,o;typeof this._$AH=="function"?this._$AH.call((o=(r=this.options)==null?void 0:r.host)!=null?o:this.element,e):this._$AH.handleEvent(e)}},Qr=class{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){st(this,e)}},an={M:ki,P:Me,A:Si,C:1,L:on,R:Yr,D:en,V:st,I:$t,H:lt,N:Jr,U:Zr,B:Kr,F:Qr},wi=or.litHtmlPolyfillSupport,Qa;wi==null||wi(nr,$t),((Qa=or.litHtmlVersions)!=null?Qa:or.litHtmlVersions=[]).push("3.3.0");var nn=(t,e,r)=>{var a,n;let o=(a=r==null?void 0:r.renderBefore)!=null?a:e,i=o._$litPart$;if(i===void 0){let l=(n=r==null?void 0:r.renderBefore)!=null?n:null;o._$litPart$=i=new $t(e.insertBefore(ir(),l),l,void 0,r!=null?r:{})}return i._$AI(t),i};var dt=globalThis,Oe=class extends je{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r,o;let e=super.createRenderRoot();return(o=(r=this.renderOptions).renderBefore)!=null||(r.renderBefore=e.firstChild),e}update(e){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=nn(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return nt}},sn;Oe._$litElement$=!0,Oe.finalized=!0,(sn=dt.litElementHydrateSupport)==null||sn.call(dt,{LitElement:Oe});var Oi=dt.litElementPolyfillSupport;Oi==null||Oi({LitElement:Oe});var ln;((ln=dt.litElementVersions)!=null?ln:dt.litElementVersions=[]).push("4.2.0");var jd={attribute:!0,type:String,converter:tr,reflect:!1,hasChanged:Gr},Md=(t=jd,e,r)=>{let{kind:o,metadata:i}=r,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),o==="setter"&&((t=Object.create(t)).wrapped=!0),a.set(r.name,t),o==="accessor"){let{name:n}=r;return{set(l){let s=e.get.call(this);e.set.call(this,l),this.requestUpdate(n,s,t)},init(l){return l!==void 0&&this.C(n,void 0,t,l),l}}}if(o==="setter"){let{name:n}=r;return function(l){let s=this[n];e.call(this,l),this.requestUpdate(n,s,t)}}throw Error("Unsupported decorator location: "+o)};function ct(t){return(e,r)=>typeof r=="object"?Md(t,e,r):((o,i,a)=>{let n=i.hasOwnProperty(a);return i.constructor.createProperty(a,o),n?Object.getOwnPropertyDescriptor(i,a):void 0})(t,e,r)}var dn=`@charset "UTF-8";
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
}`;var cn,pn,hn,pt,Di,Ti,ht=class extends(hn=Oe,pn=[ct()],cn=[ct()],hn){constructor(){super(...arguments);We(this,Di,Ee(pt,8,this,!1)),Ee(pt,11,this);We(this,Ti,Ee(pt,12,this)),Ee(pt,15,this)}get _btnClass(){let r="a-btn";switch(this.type){case"secondary":r+=" a-btn--secondary";break;case"warning":r+=" a-btn--warning";break;case"disabled":r+=" a-btn--disabled";break}return r}render(){return eo`
      <button class="${this._btnClass}" ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `}};pt=wr(hn),Di=new WeakMap,Ti=new WeakMap,xt(pt,4,"disabled",pn,ht,Di),xt(pt,4,"type",cn,ht,Ti),zt(pt,ht),_t(ht,"styles",Qt`
    ${Lt(dn)}
  `);window.customElements.define("cfpb-button",ht);var{I:kg}=an;var mn=t=>t.strings===void 0;var un={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Li=t=>(...e)=>({_$litDirective$:t,values:e}),ro=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,o){this._$Ct=e,this._$AM=r,this._$Ci=o}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};var sr=(t,e)=>{var o;let r=t._$AN;if(r===void 0)return!1;for(let i of r)(o=i._$AO)==null||o.call(i,e,!1),sr(i,e);return!0},oo=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while((r==null?void 0:r.size)===0)},fn=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),Pd(e)}};function Nd(t){this._$AN!==void 0?(oo(this),this._$AM=t,fn(this)):this._$AM=t}function Bd(t,e=!1,r=0){let o=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(o))for(let a=r;a<o.length;a++)sr(o[a],!1),oo(o[a]);else o!=null&&(sr(o,!1),oo(o));else sr(this,t)}var Pd=t=>{var e,r;t.type==un.CHILD&&((e=t._$AP)!=null||(t._$AP=Bd),(r=t._$AQ)!=null||(t._$AQ=Nd))},io=class extends ro{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,o){super._$AT(e,r,o),fn(this),this.isConnected=e._$AU}_$AO(e,r=!0){var o,i;e!==this.isConnected&&(this.isConnected=e,e?(o=this.reconnected)==null||o.call(this):(i=this.disconnected)==null||i.call(this)),r&&(sr(this,e),oo(this))}setValue(e){if(mn(this._$Ct))this._$Ct._$AI(e,this);else{let r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}};var ji=()=>new Ci,Ci=class{},$i=new WeakMap,Mi=Li(class extends io{render(t){return X}update(t,[e]){var o;let r=e!==this.G;return r&&this.G!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=e,this.ht=(o=t.options)==null?void 0:o.host,this.rt(this.ct=t.element)),X}rt(t){var e;if(this.isConnected||(t=void 0),typeof this.G=="function"){let r=(e=this.ht)!=null?e:globalThis,o=$i.get(r);o===void 0&&(o=new WeakMap,$i.set(r,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,e,r;return typeof this.G=="function"?(e=$i.get((t=this.ht)!=null?t:globalThis))==null?void 0:e.get(this.G):(r=this.G)==null?void 0:r.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var gn=`/* ==========================================================================
   Design System
   Variables
   ========================================================================== */
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
}`;var bn,vn,yn,mt,Ii,Ni,Ct,xn,_n,ut=class extends(yn=Oe,vn=[ct()],bn=[ct()],yn){constructor(){super(...arguments);We(this,Ct);We(this,Ii,Ee(mt,8,this,!0)),Ee(mt,11,this);We(this,Ni,Ee(mt,12,this,"")),Ee(mt,15,this);_t(this,"fileInput",ji());_t(this,"fileDetails",ji())}render(){return eo`
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
        @input="${()=>kr(this,Ct,_n).call(this)}"
        ${Mi(this.fileInput)}
      />
      <div
        part="upload-details"
        ?hidden=${this.areDetailHidden}
        ${Mi(this.fileDetails)}
      >
        <h4>File added</h4>
        <ul>
          <li>${this.fileName}</li>
        </ul>
        <p>
          To remove or replace your file, select a new file and upload again.
        </p>
      </div>
    `}};mt=wr(yn),Ii=new WeakMap,Ni=new WeakMap,Ct=new WeakSet,xn=function(r){let o=r;if(o.indexOf("\\")>-1){let i=o.split("\\");o=i[i.length-1]}return o},_n=function(){this.fileName=kr(this,Ct,xn).call(this,this.fileInput.value.value),this.areDetailHidden=!1},xt(mt,4,"areDetailHidden",vn,ut,Ii),xt(mt,4,"fileName",bn,ut,Ni),zt(mt,ut),_t(ut,"styles",Qt`
    ${Lt(gn)}
  `);window.customElements.define("cfpb-file-upload",ut);var Rd=document.createElement("template");Rd.innerHTML=`
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
`;var wn={};C(wn,{default:()=>Hd});var Hd={};var kn="data-tooltip";function ao(t){let e=t.getAttribute(kn);function r(){return this.tooltip=Oa(t,{theme:"cfpb",maxWidth:450,content:function(o){let i=o.parentElement.querySelector(`#${e}`),a=document.createElement("div"),n=document.importNode(i.content,!0);return a.appendChild(n),a},plugins:[{name:"hideOnEsc",defaultValue:!0,fn({hide:o}){function i(a){a.key==="Escape"&&o()}return{onShow(){document.body.addEventListener("keydown",i)},onHide(){document.body.removeEventListener("keydown",i)}}}}]})}return this.init=r,this.tooltip=null,this}ao.BASE_ATTRIBUTE=kn;ao.init=t=>ce(`[${ao.BASE_ATTRIBUTE}]`,ao,t);})();
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
