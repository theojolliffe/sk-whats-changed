import{S as h,i as v,s as g,e as y,c as b,a as k,d as r,b as q,f as n,g as p,K as S,L as T,M as X,q as _,o as u,l as c,p as Y,G as C,n as D}from"../../../chunks/vendor-af039a36.js";const E=i=>({detail:i&1}),d=i=>({detail:i[0].detail});function m(i){let s,a;const l=i[3].default,e=C(l,i,i[2],d);return{c(){s=y("div"),e&&e.c(),this.h()},l(t){s=b(t,"DIV",{class:!0,style:!0});var o=k(s);e&&e.l(o),o.forEach(r),this.h()},h(){q(s,"class","tooltip svelte-tbh15h"),n(s,"top",i[0].detail.e.layerY-i[1]+"px"),n(s,"left",i[0].detail.e.layerX+"px")},m(t,o){p(t,s,o),e&&e.m(s,null),a=!0},p(t,o){e&&e.p&&(!a||o&5)&&S(e,l,t,t[2],a?X(l,t[2],o,E):T(t[2]),d),(!a||o&3)&&n(s,"top",t[0].detail.e.layerY-t[1]+"px"),(!a||o&1)&&n(s,"left",t[0].detail.e.layerX+"px")},i(t){a||(_(e,t),a=!0)},o(t){u(e,t),a=!1},d(t){t&&r(s),e&&e.d(t)}}}function G(i){let s,a,l=i[0].detail&&m(i);return{c(){l&&l.c(),s=c()},l(e){l&&l.l(e),s=c()},m(e,t){l&&l.m(e,t),p(e,s,t),a=!0},p(e,[t]){e[0].detail?l?(l.p(e,t),t&1&&_(l,1)):(l=m(e),l.c(),_(l,1),l.m(s.parentNode,s)):l&&(D(),u(l,1,1,()=>{l=null}),Y())},i(e){a||(_(l),a=!0)},o(e){u(l),a=!1},d(e){l&&l.d(e),e&&r(s)}}}function I(i,s,a){let{$$slots:l={},$$scope:e}=s,{evt:t={}}=s,{offset:o=35}=s;return i.$$set=f=>{"evt"in f&&a(0,t=f.evt),"offset"in f&&a(1,o=f.offset),"$$scope"in f&&a(2,e=f.$$scope)},[t,o,e,l]}class L extends h{constructor(s){super();v(this,s,I,G,g,{evt:0,offset:1})}}export{L as default};