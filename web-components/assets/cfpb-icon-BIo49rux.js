import{i as e}from"./preload-helper-DSZW49bw.js";import{Ht as t,Kt as n,Lt as r,Rt as i,Wt as a}from"./iframe-D3TXMcqr.js";import{n as o,r as s,t as c}from"./shared-config-M0e26I87.js";var l,u=e((()=>{l=`:host{--icon-mask-image-url:"";vertical-align:middle;height:1.1875em;color:var(--icon-color,inherit);display:inline-block}:host([spin]){transform-origin:50%;animation:1.25s linear infinite spin-animation}@keyframes spin-animation{0%{transform:rotate(0)}to{transform:rotate(359deg)}}span{-webkit-mask-image:var(--icon-mask-image-url);-webkit-mask-image:var(--icon-mask-image-url);mask-image:var(--icon-mask-image-url);background-color:currentColor;line-height:0;display:inline-block;-webkit-mask-position:50%;mask-position:50%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}img{opacity:0;height:1.1875em}`})),d,f=e((()=>{r(),s(),u(),d=class e extends i{static styles=a`
    ${n(l)}
  `;static properties={name:{type:String},spin:{type:Boolean,attribute:!0}};render(){if(!this.name)return null;let e=`${o().iconPath+this.name}.svg`;return t`<span style="--icon-mask-image-url:url('${e}')">
      <img
        src="${e}"
        loading="lazy"
        decoding="async"
        alt=""
        aria-hidden="true"
      />
    </span>`}static init(){c(`cfpb-icon`,e)}}}));export{f as n,d as t};