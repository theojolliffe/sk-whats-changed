import{S as x,i as E,s as w,e as f,w as p,k as q,c as u,a as d,x as _,d as c,m as B,b as g,g as h,I as C,y as v,q as y,o as $,B as b,a2 as k,a3 as D}from"../../../chunks/vendor-af039a36.js";import H from"./components/SmallMultipleWrapper.percent-range.svelte-5c0e95db.js";import I from"./components/Legend.svelte-907d90f5.js";import"./components/AxisY.svelte-9704d2ec.js";import"./components/AxisX.svelte-73b0504e.js";/* empty css                                                              */import"./components/LabelsAge.svelte-a33e1099.js";/* empty css                                                          */import"./components/Bar.svelte-8266ec37.js";function S(l){let a,r,e,i,n,o;return e=new H({props:{data:l[0],fullExtents:l[3],scale:G,extentGetters:l[2],nu:0,labels:l[1]}}),n=new I({props:{domain:[2001,2011],colors:["#DF0667","#3C388E"]}}),{c(){a=f("div"),r=f("div"),p(e.$$.fragment),i=q(),p(n.$$.fragment),this.h()},l(t){a=u(t,"DIV",{class:!0});var s=d(a);r=u(s,"DIV",{class:!0});var m=d(r);_(e.$$.fragment,m),m.forEach(c),s.forEach(c),i=B(t),_(n.$$.fragment,t),this.h()},h(){g(r,"class","chart-container svelte-t0sykq"),g(a,"class","group-container svelte-t0sykq")},m(t,s){h(t,a,s),C(a,r),v(e,r,null),h(t,i,s),v(n,t,s),o=!0},p(t,[s]){const m={};s&1&&(m.data=t[0]),s&2&&(m.labels=t[1]),e.$set(m)},i(t){o||(y(e.$$.fragment,t),y(n.$$.fragment,t),o=!0)},o(t){$(e.$$.fragment,t),$(n.$$.fragment,t),o=!1},d(t){t&&c(a),b(e),t&&c(i),b(n,t)}}}let G="individual";function V(l,a,r){let{data:e}=a,{labels:i}=a;console.log("HB data",e);const n={x:t=>t.x,y:t=>t.y},o=k(D(e),n);return e.sort((t,s)=>s[s.length-1].y-t[t.length-1].y),l.$$set=t=>{"data"in t&&r(0,e=t.data),"labels"in t&&r(1,i=t.labels)},[e,i,n,o]}class N extends x{constructor(a){super();E(this,a,V,S,w,{data:0,labels:1})}}export{N as default};
