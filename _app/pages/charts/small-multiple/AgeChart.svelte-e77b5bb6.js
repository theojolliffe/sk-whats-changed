import{S as E,i as I,s as S,e as d,w as v,k,c as C,a as b,x as w,m as D,d as h,b as M,g,y as T,I as q,q as u,o as _,B as y,p as A,T as B,a2 as G,a3 as V,n as F}from"../../../chunks/vendor-af039a36.js";import L from"./components/SmallMultipleWrapper.percent-range.svelte-9c0a8a74.js";import W from"./components/Legend.svelte-5acff017.js";import"./components/AxisY.svelte-eaadb608.js";import"./components/AxisX.svelte-a203bc03.js";import"./components/HeadLabel.svelte-219c0e8f.js";import"./components/LabelsAge.svelte-88d4d044.js";/* empty css                                                         */import"./components/Bar.svelte-b38b9809.js";function p(o,a,s){const r=o.slice();return r[7]=a[s],r[9]=s,r}function x(o){let a,s,r,c;return s=new L({props:{data:o[7],fullExtents:o[6],scale:z,extentGetters:o[5],nu:o[9],labels:o[1],xTickCal:o[2],xMax:o[3],topics:o[4]}}),{c(){a=d("div"),v(s.$$.fragment),r=k(),this.h()},l(n){a=C(n,"DIV",{class:!0});var t=b(a);w(s.$$.fragment,t),r=D(t),t.forEach(h),this.h()},h(){M(a,"class","chart-container svelte-5oxew")},m(n,t){g(n,a,t),T(s,a,null),q(a,r),c=!0},p(n,t){const f={};t&1&&(f.data=n[7]),t&2&&(f.labels=n[1]),t&4&&(f.xTickCal=n[2]),t&8&&(f.xMax=n[3]),t&16&&(f.topics=n[4]),s.$set(f)},i(n){c||(u(s.$$.fragment,n),c=!0)},o(n){_(s.$$.fragment,n),c=!1},d(n){n&&h(a),y(s)}}}function j(o){let a,s,r,c,n=o[0],t=[];for(let l=0;l<n.length;l+=1)t[l]=x(p(o,n,l));const f=l=>_(t[l],1,1,()=>{t[l]=null});return r=new W({props:{domain:[2001,2011],colors:["#DF0667","#3C388E"]}}),{c(){a=d("div");for(let l=0;l<t.length;l+=1)t[l].c();s=k(),v(r.$$.fragment),this.h()},l(l){a=C(l,"DIV",{class:!0});var i=b(a);for(let e=0;e<t.length;e+=1)t[e].l(i);i.forEach(h),s=D(l),w(r.$$.fragment,l),this.h()},h(){M(a,"class","group-container svelte-5oxew")},m(l,i){g(l,a,i);for(let e=0;e<t.length;e+=1)t[e].m(a,null);g(l,s,i),T(r,l,i),c=!0},p(l,[i]){if(i&127){n=l[0];let e;for(e=0;e<n.length;e+=1){const m=p(l,n,e);t[e]?(t[e].p(m,i),u(t[e],1)):(t[e]=x(m),t[e].c(),u(t[e],1),t[e].m(a,null))}for(F(),e=n.length;e<t.length;e+=1)f(e);A()}},i(l){if(!c){for(let i=0;i<n.length;i+=1)u(t[i]);u(r.$$.fragment,l),c=!0}},o(l){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)_(t[i]);_(r.$$.fragment,l),c=!1},d(l){l&&h(a),B(t,l),l&&h(s),y(r,l)}}}let z="individual";function H(o,a,s){let{chartData:r}=a,{labels:c}=a,{xTickCal:n}=a,{xMax:t}=a,{topics:f}=a;const l={x:e=>e.x,y:e=>e.y},i=G(V(r),l);return r.sort((e,m)=>m[m.length-1].y-e[e.length-1].y),o.$$set=e=>{"chartData"in e&&s(0,r=e.chartData),"labels"in e&&s(1,c=e.labels),"xTickCal"in e&&s(2,n=e.xTickCal),"xMax"in e&&s(3,t=e.xMax),"topics"in e&&s(4,f=e.topics)},[r,c,n,t,f,l,i]}class Y extends E{constructor(a){super();I(this,a,H,j,S,{chartData:0,labels:1,xTickCal:2,xMax:3,topics:4})}}export{Y as default};