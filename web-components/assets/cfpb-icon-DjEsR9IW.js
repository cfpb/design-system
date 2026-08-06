import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{S as t,b as n,m as r,p as i,v as a}from"./iframe-CilnoSqD.js";import{n as o,r as s,t as c}from"./shared-config-C3YDVRVZ.js";var l;function u(){return(u=e((()=>{l=`:host{--icon-mask-image-url:"";vertical-align:middle;height:1.1875em;color:var(--icon-color,inherit);display:inline-block}:host([spin]){transform-origin:50%;animation:1.25s linear infinite spin-animation}@keyframes spin-animation{0%{transform:rotate(0)}to{transform:rotate(359deg)}}span{-webkit-mask-image:var(--icon-mask-image-url);-webkit-mask-image:var(--icon-mask-image-url);mask-image:var(--icon-mask-image-url);background-color:currentColor;line-height:0;display:inline-block;-webkit-mask-position:50%;mask-position:50%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}img{opacity:0;height:1.1875em}`})))()}var d;function f(){return(f=e((()=>{i(),s(),u(),d=class e extends r{static styles=n`
    ${t(l)}
  `;static properties={name:{type:String},spin:{type:Boolean,attribute:!0}};render(){if(!this.name)return null;let e=`${o().iconPath+this.name}.svg`;return a`<span style="--icon-mask-image-url:url('${e}')">
      <img
        src="${e}"
        loading="lazy"
        decoding="async"
        alt=""
        aria-hidden="true"
      />
    </span>`}static init(){c(`cfpb-icon`,e)}}})))()}export{f as n,d as t};