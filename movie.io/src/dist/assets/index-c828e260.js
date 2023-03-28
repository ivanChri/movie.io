import{j as e,S as v,L as y,u as w,a as u,B as g,I as S,b as _,r as s,F as E,T as k,C as x,c as L,d as z,e as I,A as P,R as D,f as p,g as O,s as R,h as T,i as A,k as C,l as V,m as B}from"./vendor-31e5e4f2.js";(function(){const n=document.createElement("link").relList;if(!(n&&n.supports&&n.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0})}function i(t){if(t.ep)return;t.ep=!0;const a=function(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}(t);fetch(t.href,a)}})();const b={},h=function(n,i,t){if(!i||i.length===0)return n();const a=document.getElementsByTagName("link");return Promise.all(i.map(r=>{if((r=function(l){return"/"+l}(r))in b)return;b[r]=!0;const o=r.endsWith(".css"),m=o?'[rel="stylesheet"]':"";if(t)for(let l=a.length-1;l>=0;l--){const d=a[l];if(d.href===r&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${m}`))return;const c=document.createElement("link");return c.rel=o?"stylesheet":"modulepreload",o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o?new Promise((l,d)=>{c.addEventListener("load",l),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))}):void 0})).then(()=>n())};function M(n){const i={padding:".9rem",fontSize:"1.4rem",color:"rgb(230, 230, 230)",display:"inline-block"};return e(v,{direction:n.direction,spacing:"34px","text-align":"center",bg:"inherit",display:n.view,children:[{route:"/",name:"Home"},{route:"/favorite",name:"Favorite"},{route:"/about",name:"About"}].map((t,a)=>e(y,{style:i,to:`${t.route}`,children:t.name},a))})}function N(n){const i=w();return u(g,{bg:"inherit",display:n.view||"block",children:[e(S,{placeholder:"search",focusBorderColor:"rgb(37, 37, 224)",size:"lg",border:"none",value:n.value,borderRadius:"32px",bg:"#192642",width:{base:"60",sm:"90%",md:"90%",lg:"60%",xl:"60%"},onChange:n.event}),e(_,{colorScheme:"telegram",p:"1.5rem",m:{base:"2",sm:"2",md:"3",lg:"1.5",xl:"1.5"},borderRadius:"10px",onClick:()=>{(t=>{if(t)return i(`/search/${t}`);alert("false")})(n.value),n.clearValue()},children:"Search"})]})}const $=s.lazy(()=>h(()=>import("./drawer-a8e6e126.js"),["assets/drawer-a8e6e126.js","assets/vendor-31e5e4f2.js"]));function F(){const n={base:"none",lg:"inline-block",md:"none",sm:"none",xl:"inline-block"},[i,t]=s.useState(""),a=d=>{t(d.target.value)},r=()=>{t("")},[o,m]=s.useState(window.innerWidth);window.addEventListener("resize",()=>{m(window.innerWidth)});const[c,l]=s.useState(!1);return s.useEffect(()=>(l(o<1e3),()=>{l(!1)}),[o]),e(g,{as:"header",p:"6",className:"header",w:"100%",bg:"brand.100",position:"fixed",top:"0",zIndex:"999",boxShadow:"dark-lg",children:u(E,{as:"nav",justify:"space-between",align:"center",w:"100%",children:[e(k,{as:"h1",fontSize:"1.8rem",children:e(y,{to:"/",children:"Movies.io"})}),e(M,{direction:"row",view:n}),e(N,{event:a,value:i,clearValue:r,view:n}),c&&e(s.Suspense,{children:e($,{event:a,clearValue:r,value:i})})]})})}function q(){return e(x,{height:"100%",children:e(L,{m:"auto",height:"100%",lineHeight:"80",p:"2",children:e(z,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"blue.500",size:"xl"})})})}function f(){return e(g,{height:"120vh",m:"auto",p:"2",children:e(q,{})})}const W=s.lazy(()=>h(()=>import("./home-e74386ff.js"),["assets/home-e74386ff.js","assets/vendor-31e5e4f2.js","assets/fetch-32ddba0c.js"])),j=s.lazy(()=>h(()=>import("./detailPage-3cc83cb8.js"),["assets/detailPage-3cc83cb8.js","assets/vendor-31e5e4f2.js","assets/fetch-32ddba0c.js"])),H=s.lazy(()=>h(()=>import("./searchResultPage-9d75dbd2.js"),["assets/searchResultPage-9d75dbd2.js","assets/vendor-31e5e4f2.js","assets/fetch-32ddba0c.js"]));function K(){const n=I();return e(P,{children:u(D,{location:n,children:[e(p,{path:"/",element:e(s.Suspense,{fallback:e(f,{}),children:e(W,{})})}),e(p,{path:"/detail/:media/:id",element:e(s.Suspense,{fallback:e(f,{}),children:e(j,{})})}),e(p,{path:"/search/:query",element:e(s.Suspense,{Fallback:e(f,{}),children:e(H,{})})})]},n.pathname)})}function U(){return u(O,{children:[e(F,{}),e("hr",{}),e(K,{})]})}const{Button:G,Input:J,Menu:Q,Spinner:X,Drawer:Y,Tabs:Z}=R.components,ee=T({components:{Button:G,Input:J,Menu:Q,Spinner:X,Drawer:Y,Tabs:Z},styles:{global:{body:{bg:"#111827",width:"100%",height:"100%",margin:0,padding:0,boxSizing:"border-box",fontFamily:"'Poppins','sans-serif'",color:"white"}}},colors:{brand:{100:"#233458",900:"#1D4ED8",600:"#606060",700:"rgba(13, 172, 234, 0.8)"}}});A.createRoot(document.getElementById("root")).render(e(C.StrictMode,{children:e(V,{children:e(B,{theme:ee,children:e(U,{})})})}));export{q as L,N as S,h as _};
