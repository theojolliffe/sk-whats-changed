import{S as M,i as P,s as Q,$ as v,a0 as w,a as A,d as c,b as r,g as m,f as V,I as U,O as W,T as X,l as z,R as D,F as Z,W as E,t as b,h as T,j as C}from"../../../../chunks/vendor-af039a36.js";function G(i,l,e){const n=i.slice();return n[23]=l[e],n[25]=e,n}function H(i){let l,e,n=i[15],t=[];for(let f=0;f<n.length;f+=1)t[f]=K(G(i,n,f));return{c(){l=v("g");for(let f=0;f<t.length;f+=1)t[f].c();this.h()},l(f){l=w(f,"g",{class:!0,transform:!0});var u=A(l);for(let _=0;_<t.length;_+=1)t[_].l(u);u.forEach(c),this.h()},h(){r(l,"class","axis y-axis"),r(l,"transform",e="translate("+-i[16].left+", 0)")},m(f,u){m(f,l,u);for(let _=0;_<t.length;_+=1)t[_].m(l,null)},p(f,u){if(u&258047){n=f[15];let _;for(_=0;_<n.length;_+=1){const d=G(f,n,_);t[_]?t[_].p(d,u):(t[_]=K(d),t[_].c(),t[_].m(l,null))}for(;_<t.length;_+=1)t[_].d(1);t.length=n.length}u&65536&&e!==(e="translate("+-f[16].left+", 0)")&&r(l,"transform",e)},d(f){f&&c(l),X(t,f)}}}function J(i){let l,e,n;return{c(){l=v("line"),this.h()},l(t){l=w(t,"line",{x2:!0,y1:!0,y2:!0,stroke:!0,class:!0}),A(l).forEach(c),this.h()},h(){r(l,"x2","100%"),r(l,"y1",e=i[5]+(i[13]?i[14].bandwidth()/2:0)),r(l,"y2",n=i[5]+(i[13]?i[14].bandwidth()/2:0)),r(l,"stroke",i[9]),r(l,"class","svelte-1ypvook"),W(l,"baseline",i[11])},m(t,f){m(t,l,f)},p(t,f){f&24608&&e!==(e=t[5]+(t[13]?t[14].bandwidth()/2:0))&&r(l,"y1",e),f&24608&&n!==(n=t[5]+(t[13]?t[14].bandwidth()/2:0))&&r(l,"y2",n),f&512&&r(l,"stroke",t[9]),f&2048&&W(l,"baseline",t[11])},d(t){t&&c(l)}}}function x(i){let l=i[3](i[23])+"",e;return{c(){e=b(l)},l(n){e=T(n,l)},m(n,t){m(n,e,t)},p(n,t){t&32776&&l!==(l=n[3](n[23])+"")&&C(e,l)},d(n){n&&c(e)}}}function p(i){let l,e=i[3](i[23])+"",n,t;return{c(){l=b(i[0]),n=b(e),t=b(i[1])},l(f){l=T(f,i[0]),n=T(f,e),t=T(f,i[1])},m(f,u){m(f,l,u),m(f,n,u),m(f,t,u)},p(f,u){u&1&&C(l,f[0]),u&32776&&e!==(e=f[3](f[23])+"")&&C(n,e),u&2&&C(t,f[1])},d(f){f&&c(l),f&&c(n),f&&c(t)}}}function K(i){let l,e,n,t,f,u,_,d,h=i[2]!==!1&&J(i);function S(s,o){return s[25]==s[15].length-1?p:x}let y=S(i),k=y(i);return{c(){l=v("g"),h&&h.c(),e=v("text"),k.c(),this.h()},l(s){l=w(s,"g",{class:!0,transform:!0});var o=A(l);h&&h.l(o),e=w(o,"text",{x:!0,y:!0,dx:!0,dy:!0,fill:!0,style:!0});var g=A(e);k.l(g),g.forEach(c),o.forEach(c),this.h()},h(){r(e,"x",n=i[4]-10),r(e,"y",t=i[5]+(i[13]?i[14].bandwidth()/2:0)-3),r(e,"dx",f=i[13]?3:i[6]),r(e,"dy",u=i[13]?4:i[7]),r(e,"fill",i[10]),V(e,"text-anchor",i[13]?"end":i[8]),r(l,"class",_="tick tick-"+i[23]+" svelte-1ypvook"),r(l,"transform",d="translate("+(i[17][0]+(i[13]?i[16].left:0))+", "+i[14](i[23])+")")},m(s,o){m(s,l,o),h&&h.m(l,null),U(l,e),k.m(e,null)},p(s,o){s[2]!==!1?h?h.p(s,o):(h=J(s),h.c(),h.m(l,e)):h&&(h.d(1),h=null),y===(y=S(s))&&k?k.p(s,o):(k.d(1),k=y(s),k&&(k.c(),k.m(e,null))),o&16&&n!==(n=s[4]-10)&&r(e,"x",n),o&24608&&t!==(t=s[5]+(s[13]?s[14].bandwidth()/2:0)-3)&&r(e,"y",t),o&8256&&f!==(f=s[13]?3:s[6])&&r(e,"dx",f),o&8320&&u!==(u=s[13]?4:s[7])&&r(e,"dy",u),o&1024&&r(e,"fill",s[10]),o&8448&&V(e,"text-anchor",s[13]?"end":s[8]),o&32768&&_!==(_="tick tick-"+s[23]+" svelte-1ypvook")&&r(l,"class",_),o&253952&&d!==(d="translate("+(s[17][0]+(s[13]?s[16].left:0))+", "+s[14](s[23])+")")&&r(l,"transform",d)},d(s){s&&c(l),h&&h.d(),k.d()}}}function $(i){let l,e=i[12]==0&&H(i);return{c(){e&&e.c(),l=z()},l(n){e&&e.l(n),l=z()},m(n,t){e&&e.m(n,t),m(n,l,t)},p(n,[t]){n[12]==0?e?e.p(n,t):(e=H(n),e.c(),e.m(l.parentNode,l)):e&&(e.d(1),e=null)},i:D,o:D,d(n){e&&e.d(n),n&&c(l)}}}function ee(i,l,e){let n,t,f,u,_;const{padding:d,xRange:h,xScale:S,yScale:y}=Z("LayerCake");E(i,d,a=>e(16,u=a)),E(i,h,a=>e(17,_=a)),E(i,y,a=>e(14,f=a));let{ticks:k=4}=l,{prefix:s=""}=l,{suffix:o=""}=l,{gridlines:g=!1}=l,{formatTick:R=a=>a}=l,{xTick:Y=0}=l,{yTick:j=0}=l,{dxTick:q=0}=l,{dyTick:B=-4}=l,{textAnchor:F="start"}=l,{lineColor:I="#aaa"}=l,{textColor:L="#666"}=l,{solid:N=!1}=l,{nu:O}=l;return i.$$set=a=>{"ticks"in a&&e(21,k=a.ticks),"prefix"in a&&e(0,s=a.prefix),"suffix"in a&&e(1,o=a.suffix),"gridlines"in a&&e(2,g=a.gridlines),"formatTick"in a&&e(3,R=a.formatTick),"xTick"in a&&e(4,Y=a.xTick),"yTick"in a&&e(5,j=a.yTick),"dxTick"in a&&e(6,q=a.dxTick),"dyTick"in a&&e(7,B=a.dyTick),"textAnchor"in a&&e(8,F=a.textAnchor),"lineColor"in a&&e(9,I=a.lineColor),"textColor"in a&&e(10,L=a.textColor),"solid"in a&&e(11,N=a.solid),"nu"in a&&e(12,O=a.nu)},i.$$.update=()=>{i.$$.dirty&16384&&e(13,n=typeof f.bandwidth=="function"),i.$$.dirty&2121728&&e(15,t=Array.isArray(k)?k:n?f.domain():f.ticks(k))},[s,o,g,R,Y,j,q,B,F,I,L,N,O,n,f,t,u,_,d,h,y,k]}class ie extends M{constructor(l){super();P(this,l,ee,$,Q,{ticks:21,prefix:0,suffix:1,gridlines:2,formatTick:3,xTick:4,yTick:5,dxTick:6,dyTick:7,textAnchor:8,lineColor:9,textColor:10,solid:11,nu:12})}}export{ie as default};