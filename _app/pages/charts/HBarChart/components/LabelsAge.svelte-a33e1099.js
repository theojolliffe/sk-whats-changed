import{S as E,i as G,s as j,l as h,g as v,$ as c,t as w,a0 as g,a as b,d as o,h as A,b as s,I as y,j as D,R as S,F as M,W as N}from"../../../../chunks/vendor-af039a36.js";function x(i){let t,e=i[0].detail.data&&C(i);return{c(){e&&e.c(),t=h()},l(a){e&&e.l(a),t=h()},m(a,l){e&&e.m(a,l),v(a,t,l)},p(a,l){a[0].detail.data?e?e.p(a,l):(e=C(a),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},d(a){e&&e.d(a),a&&o(t)}}}function C(i){let t,e,a,l,n=i[0].detail.data.x+": "+Math.round(i[0].detail.data.y*10)/10+"%",_,p,u;return{c(){t=c("g"),e=c("rect"),l=c("text"),_=w(n),this.h()},l(r){t=g(r,"g",{class:!0});var d=b(t);e=g(d,"rect",{fill:!0,x:!0,y:!0,transform:!0,width:!0,height:!0,rx:!0}),b(e).forEach(o),l=g(d,"text",{class:!0,transform:!0,fill:!0,x:!0,y:!0});var m=b(l);_=A(m,n),m.forEach(o),d.forEach(o),this.h()},h(){s(e,"fill","rgba(255,255,255,0.9)"),s(e,"x",-20),s(e,"y",a=i[1](i[0].detail.data)+(i[0].detail.data.g==2021?10:0)-10),s(e,"transform","translate(5,-25)"),s(e,"width","270"),s(e,"height","25"),s(e,"rx","15"),s(l,"class","label-bold svelte-gjdahk"),s(l,"transform","translate(0,-7)"),s(l,"fill","#333"),s(l,"x",p=10),s(l,"y",u=i[1](i[0].detail.data)+(i[0].detail.data.g==2021?10:0)-10),s(t,"class","label-group")},m(r,d){v(r,t,d),y(t,e),y(t,l),y(l,_)},p(r,d){d&3&&a!==(a=r[1](r[0].detail.data)+(r[0].detail.data.g==2021?10:0)-10)&&s(e,"y",a),d&1&&n!==(n=r[0].detail.data.x+": "+Math.round(r[0].detail.data.y*10)/10+"%")&&D(_,n),d&3&&u!==(u=r[1](r[0].detail.data)+(r[0].detail.data.g==2021?10:0)-10)&&s(l,"y",u)},d(r){r&&o(t)}}}function q(i){let t,e=i[0].detail&&x(i);return{c(){e&&e.c(),t=h()},l(a){e&&e.l(a),t=h()},m(a,l){e&&e.m(a,l),v(a,t,l)},p(a,[l]){a[0].detail?e?e.p(a,l):(e=x(a),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:S,o:S,d(a){e&&e.d(a),a&&o(t)}}}function F(i,t,e){let a;const{data:l,xScale:n,yScale:_,xDomain:p,y:u,xGet:r,yGet:d,Domain:m,custom:I}=M("LayerCake");N(i,d,f=>e(1,a=f));let{hovered:k=null}=t,{ageLabel:L=null}=t;return i.$$set=f=>{"hovered"in f&&e(3,k=f.hovered),"ageLabel"in f&&e(0,L=f.ageLabel)},[L,a,d,k]}class W extends E{constructor(t){super();G(this,t,F,q,j,{hovered:3,ageLabel:0})}}export{W as default};