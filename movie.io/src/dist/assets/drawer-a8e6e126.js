import{n as c,o as t,r as m,a,g as d,j as e,p,D as u,M as h,q as b,t as f,v as k,T as v,w as g,S as z,L as o}from"./vendor-31e5e4f2.js";import{S as A}from"./index-c828e260.js";var L=c({displayName:"HamburgerIcon",viewBox:"0 0 24 24",d:"M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"});function M(i){const{isOpen:s,onClose:n,onOpen:r}=t(),l=m.useRef();return a(d,{children:[e(p,{ref:l,"aria-label":"navigation-button",colorScheme:"inherit",size:"lg",onClick:r,icon:e(L,{}),fontSize:"2rem",p:"1",display:["block","block","block","none"]}),a(u,{isOpen:s,placement:"top",onClose:n,finalFocusRef:l,children:[e(h,{}),a(b,{bg:"#233458",children:[e(f,{fontSize:"1.5rem"}),e(k,{children:e(v,{fontSize:"1.8rem",children:"Movies.io"})}),a(g,{mb:"4",children:[a(z,{direction:"column",spacing:"24px","text-align":"center",mb:"4",mt:"2",bg:"inherit",children:[e(o,{className:"link",to:"/",onClick:n,children:"Home"}),e(o,{className:"link",to:"/about",onClick:n,children:"About"}),e(o,{className:"link",to:"/favorite",onClick:n,children:"Favorite"})]}),e(A,{event:i.event,clearValue:i.clearValue,value:i.value})]})]})]})]})}export{M as default};