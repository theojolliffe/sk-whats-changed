import{S as W,i as j,s as A,$ as g,a0 as p,a as m,d as u,b as n,g as q,I as E,T as L,R as D,F as B,W as k}from"../../chunks/vendor-af039a36.js";function P(r,t,i){const l=r.slice();return l[14]=t[i],l}function F(r,t,i){const l=r.slice();return l[17]=t[i],l[19]=i,l}function H(r){let t,i,l,a;return{c(){t=g("circle"),this.h()},l(s){t=p(s,"circle",{cx:!0,cy:!0,r:!0,fill:!0,class:!0}),m(t).forEach(u),this.h()},h(){n(t,"cx",i=r[17]),n(t,"cy",l=r[4](r[14])+r[1]),n(t,"r",r[0]),n(t,"fill",a=r[5](r[6].x[r[19]])),n(t,"class","svelte-1mc14eq")},m(s,o){q(s,t,o)},p(s,o){o&12&&i!==(i=s[17])&&n(t,"cx",i),o&22&&l!==(l=s[4](s[14])+s[1])&&n(t,"cy",l),o&1&&n(t,"r",s[0]),o&96&&a!==(a=s[5](s[6].x[s[19]]))&&n(t,"fill",a)},d(s){s&&u(t)}}}function I(r){let t,i,l,a,s,o,_,v,y,c,b,C,w,M,G=r[3](r[14]),f=[];for(let e=0;e<G.length;e+=1)f[e]=H(F(r,G,e));return{c(){t=g("g"),i=g("defs"),l=g("linearGradient"),a=g("stop"),s=g("stop"),o=g("defs"),_=g("linearGradient"),v=g("stop"),y=g("stop"),c=g("rect");for(let e=0;e<f.length;e+=1)f[e].c();this.h()},l(e){t=p(e,"g",{class:!0});var d=m(t);i=p(d,"defs",{});var h=m(i);l=p(h,"linearGradient",{id:!0,gradientTransform:!0});var S=m(l);a=p(S,"stop",{offset:!0,"stop-color":!0}),m(a).forEach(u),s=p(S,"stop",{offset:!0,"stop-color":!0}),m(s).forEach(u),S.forEach(u),h.forEach(u),o=p(d,"defs",{});var z=m(o);_=p(z,"linearGradient",{id:!0,gradientTransform:!0});var T=m(_);v=p(T,"stop",{offset:!0,"stop-color":!0}),m(v).forEach(u),y=p(T,"stop",{offset:!0,"stop-color":!0}),m(y).forEach(u),T.forEach(u),z.forEach(u),c=p(d,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0,opacity:!0}),m(c).forEach(u);for(let R=0;R<f.length;R+=1)f[R].l(d);d.forEach(u),this.h()},h(){n(a,"offset","5%"),n(a,"stop-color","#3C388E10"),n(s,"offset","95%"),n(s,"stop-color","#3C388E80"),n(l,"id","myGradient"),n(l,"gradientTransform","rotate(0)"),n(v,"offset","5%"),n(v,"stop-color","#3C388E80"),n(y,"offset","95%"),n(y,"stop-color","#3C388E10"),n(_,"id","myGradientRev"),n(_,"gradientTransform","rotate(0)"),n(c,"x",b=Math.min(...r[3](r[14]))),n(c,"y",C=r[4](r[14])+r[1]-7),n(c,"width",w=Math.max(...r[3](r[14]))-Math.min(...r[3](r[14]))),n(c,"height","14"),n(c,"fill",M=r[14][2021]-r[14][2011]>0?"url('#myGradient')":"url('#myGradientRev')"),n(c,"opacity","0.85"),n(t,"class","dot-row")},m(e,d){q(e,t,d),E(t,i),E(i,l),E(l,a),E(l,s),E(t,o),E(o,_),E(_,v),E(_,y),E(t,c);for(let h=0;h<f.length;h+=1)f[h].m(t,null)},p(e,d){if(d&12&&b!==(b=Math.min(...e[3](e[14])))&&n(c,"x",b),d&22&&C!==(C=e[4](e[14])+e[1]-7)&&n(c,"y",C),d&12&&w!==(w=Math.max(...e[3](e[14]))-Math.min(...e[3](e[14])))&&n(c,"width",w),d&4&&M!==(M=e[14][2021]-e[14][2011]>0?"url('#myGradient')":"url('#myGradientRev')")&&n(c,"fill",M),d&127){G=e[3](e[14]);let h;for(h=0;h<G.length;h+=1){const S=F(e,G,h);f[h]?f[h].p(S,d):(f[h]=H(S),f[h].c(),f[h].m(t,null))}for(;h<f.length;h+=1)f[h].d(1);f.length=G.length}},d(e){e&&u(t),L(f,e)}}}function J(r){let t,i=r[2],l=[];for(let a=0;a<i.length;a+=1)l[a]=I(P(r,i,a));return{c(){t=g("g");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){t=p(a,"g",{class:!0});var s=m(t);for(let o=0;o<l.length;o+=1)l[o].l(s);s.forEach(u),this.h()},h(){n(t,"class","dot-plot")},m(a,s){q(a,t,s);for(let o=0;o<l.length;o+=1)l[o].m(t,null)},p(a,[s]){if(s&127){i=a[2];let o;for(o=0;o<i.length;o+=1){const _=P(a,i,o);l[o]?l[o].p(_,s):(l[o]=I(_),l[o].c(),l[o].m(t,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=i.length}},i:D,o:D,d(a){a&&u(t),L(l,a)}}}function K(r,t,i){let l,a,s,o,_,v,y;const{data:c,xGet:b,yGet:C,yScale:w,zScale:M,config:G}=B("LayerCake");k(r,c,e=>i(2,s=e)),k(r,b,e=>i(3,o=e)),k(r,C,e=>i(4,_=e)),k(r,w,e=>i(13,a=e)),k(r,M,e=>i(5,v=e)),k(r,G,e=>i(6,y=e));let{r:f=7}=t;return r.$$set=e=>{"r"in e&&i(0,f=e.r)},r.$$.update=()=>{r.$$.dirty&8192&&i(1,l=a.bandwidth()/2)},[f,l,s,o,_,v,y,c,b,C,w,M,G,a]}class O extends W{constructor(t){super();j(this,t,K,J,A,{r:0})}}export{O as default};