import{S as H,i as J,s as K,$ as x,a0 as w,a as A,d as c,b as a,g as D,t as M,h as N,O,I as E,j as P,R as V,F as Q,W}from"../../../../chunks/vendor-af039a36.js";function z(t){let e;return{c(){e=x("line"),this.h()},l(l){e=w(l,"line",{class:!0,y1:!0,y2:!0,x1:!0,x2:!0,stroke:!0}),A(e).forEach(c),this.h()},h(){a(e,"class","baseline svelte-ej8ad5"),a(e,"y1",t[10]),a(e,"y2","0"),a(e,"x1","0"),a(e,"x2","0"),a(e,"stroke",t[5])},m(l,f){D(l,e,f)},p(l,f){f&1024&&a(e,"y1",l[10]),f&32&&a(e,"stroke",l[5])},d(l){l&&c(e)}}}function U(t){let e,l,f,k,_,u,o=t[7]+"%",g,d,h,m,b,r=t[0]===!0&&z(t);return{c(){e=x("g"),l=x("g"),f=x("line"),u=x("text"),g=M(o),r&&r.c(),this.h()},l(n){e=w(n,"g",{class:!0});var s=A(e);l=w(s,"g",{class:!0,transform:!0});var T=A(l);f=w(T,"line",{y1:!0,y2:!0,x1:!0,x2:!0,stroke:!0,class:!0}),A(f).forEach(c),u=w(T,"text",{x:!0,y:!0,dx:!0,dy:!0,"text-anchor":!0,fill:!0});var y=A(u);g=N(y,o),y.forEach(c),T.forEach(c),r&&r.l(s),s.forEach(c),this.h()},h(){a(f,"y1",k=t[10]*-1),a(f,"y2",_=t[10]*-1+t[10]),a(f,"x1","0"),a(f,"x2","0"),a(f,"stroke",t[5]),a(f,"class","svelte-ej8ad5"),O(f,"baseline",t[6]),a(u,"x",d=t[1]||t[8]?t[9].bandwidth()/2:0),a(u,"y",t[2]),a(u,"dx",h=t[13](t[7])=="start"?t[3]-2:t[13](t[7])=="end"?t[3]+2:t[3]),a(u,"dy",t[4]),a(u,"text-anchor",m=t[13](t[7])),a(u,"fill",t[5]),a(l,"class","tick svelte-ej8ad5"),a(l,"transform",b="translate("+t[9](t[7])+","+t[10]+")"),a(e,"class","axis x-axis")},m(n,s){D(n,e,s),E(e,l),E(l,f),E(l,u),E(u,g),r&&r.m(e,null)},p(n,[s]){s&1024&&k!==(k=n[10]*-1)&&a(f,"y1",k),s&1024&&_!==(_=n[10]*-1+n[10])&&a(f,"y2",_),s&32&&a(f,"stroke",n[5]),s&64&&O(f,"baseline",n[6]),s&128&&o!==(o=n[7]+"%")&&P(g,o),s&770&&d!==(d=n[1]||n[8]?n[9].bandwidth()/2:0)&&a(u,"x",d),s&4&&a(u,"y",n[2]),s&136&&h!==(h=n[13](n[7])=="start"?n[3]-2:n[13](n[7])=="end"?n[3]+2:n[3])&&a(u,"dx",h),s&16&&a(u,"dy",n[4]),s&128&&m!==(m=n[13](n[7]))&&a(u,"text-anchor",m),s&32&&a(u,"fill",n[5]),s&1664&&b!==(b="translate("+n[9](n[7])+","+n[10]+")")&&a(l,"transform",b),n[0]===!0?r?r.p(n,s):(r=z(n),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},i:V,o:V,d(n){n&&c(e),r&&r.d()}}}function Y(t,e,l){let f,k,_,u;const{data:o,width:g,height:d,xScale:h,yScale:m,yRange:b}=Q("LayerCake");W(t,d,i=>l(10,u=i)),W(t,h,i=>l(9,_=i));let{gridlines:r=!0}=e,{formatTick:n=i=>i}=e,{baseline:s=!1}=e,{flipped:T=!1}=e,{snapTicks:y=!1}=e,{ticks:C=void 0}=e,{prefix:S=""}=e,{suffix:j=""}=e,{xTick:R=void 0}=e,{yTick:X=15}=e,{dxTick:q=0}=e,{dyTick:v=0}=e,{lineColor:B="#aaa"}=e,{textColor:F="#666"}=e,{solid:I=!1}=e,{xTickCal:L}=e;function G(i){if(y===!0){if(i===0)return"start";if(i===k.length-1)return"end"}return"middle"}return t.$$set=i=>{"gridlines"in i&&l(14,r=i.gridlines),"formatTick"in i&&l(15,n=i.formatTick),"baseline"in i&&l(0,s=i.baseline),"flipped"in i&&l(16,T=i.flipped),"snapTicks"in i&&l(17,y=i.snapTicks),"ticks"in i&&l(18,C=i.ticks),"prefix"in i&&l(19,S=i.prefix),"suffix"in i&&l(20,j=i.suffix),"xTick"in i&&l(1,R=i.xTick),"yTick"in i&&l(2,X=i.yTick),"dxTick"in i&&l(3,q=i.dxTick),"dyTick"in i&&l(4,v=i.dyTick),"lineColor"in i&&l(5,B=i.lineColor),"textColor"in i&&l(21,F=i.textColor),"solid"in i&&l(6,I=i.solid),"xTickCal"in i&&l(7,L=i.xTickCal)},t.$$.update=()=>{t.$$.dirty&512&&l(8,f=typeof _.bandwidth=="function"),t.$$.dirty&262912&&(k=Array.isArray(C)?C:f?_.domain():_.ticks(C))},[s,R,X,q,v,B,I,L,f,_,u,d,h,G,r,n,T,y,C,S,j,F]}class p extends H{constructor(e){super();J(this,e,Y,U,K,{gridlines:14,formatTick:15,baseline:0,flipped:16,snapTicks:17,ticks:18,prefix:19,suffix:20,xTick:1,yTick:2,dxTick:3,dyTick:4,lineColor:5,textColor:21,solid:6,xTickCal:7})}}export{p as default};
