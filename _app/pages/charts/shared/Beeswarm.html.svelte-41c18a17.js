import{S as N,i as O,s as P,e as C,t as Q,k as U,c as v,a as I,h as X,d as b,m as Y,b as M,f,g as R,I as x,j as Z,R as V,T as $,F as ee,W as _}from"../../../chunks/vendor-af039a36.js";function j(l,t,o){const s=l.slice();return s[19]=t[o],s}function F(l){let t,o,s=l[7].getTitle(l[19])+"",n,h;return{c(){t=C("div"),o=C("title"),n=Q(s),h=U(),this.h()},l(e){t=v(e,"DIV",{class:!0,style:!0});var r=I(t);o=v(r,"TITLE",{});var g=I(o);n=X(g,s),g.forEach(b),h=Y(r),r.forEach(b),this.h()},h(){M(t,"class","bee svelte-d0i8e2"),f(t,"background",l[5](l[19])),f(t,"border-color",l[2]),f(t,"border-width",l[1]),f(t,"left",l[19].x+"px"),f(t,"top",l[6]-l[0]-l[3]-l[1]/2-l[19].y+"px"),f(t,"width",l[0]*2+"px"),f(t,"height",l[0]*2+"px")},m(e,r){R(e,t,r),x(t,o),x(o,n),x(t,h)},p(e,r){r&144&&s!==(s=e[7].getTitle(e[19])+"")&&Z(n,s),r&48&&f(t,"background",e[5](e[19])),r&4&&f(t,"border-color",e[2]),r&2&&f(t,"border-width",e[1]),r&16&&f(t,"left",e[19].x+"px"),r&91&&f(t,"top",e[6]-e[0]-e[3]-e[1]/2-e[19].y+"px"),r&1&&f(t,"width",e[0]*2+"px"),r&1&&f(t,"height",e[0]*2+"px")},d(e){e&&b(t)}}}function te(l){let t,o=l[4],s=[];for(let n=0;n<o.length;n+=1)s[n]=F(j(l,o,n));return{c(){t=C("div");for(let n=0;n<s.length;n+=1)s[n].c();this.h()},l(n){t=v(n,"DIV",{class:!0});var h=I(t);for(let e=0;e<s.length;e+=1)s[e].l(h);h.forEach(b),this.h()},h(){M(t,"class","bee-group")},m(n,h){R(n,t,h);for(let e=0;e<s.length;e+=1)s[e].m(t,null)},p(n,[h]){if(h&255){o=n[4];let e;for(e=0;e<o.length;e+=1){const r=j(n,o,e);s[e]?s[e].p(r,h):(s[e]=F(r),s[e].c(),s[e].m(t,null))}for(;e<s.length;e+=1)s[e].d(1);s.length=o.length}},i:V,o:V,d(n){n&&b(t),$(s,n)}}}function le(l,t,o){let s,n,h,e,r,g,T;const{data:W,xGet:z,zGet:E,padding:se,height:G,config:q,custom:B}=ee("LayerCake");_(l,W,i=>o(15,e=i)),_(l,z,i=>o(14,h=i)),_(l,E,i=>o(5,r=i)),_(l,G,i=>o(6,g=i)),_(l,q,i=>o(16,n=i)),_(l,B,i=>o(7,T=i));let{r:k=3}=t,{strokeWidth:p=0}=t,{strokeColor:D="#fff"}=t,{spacing:y=1.5}=t;function A(i,{rds:H=1,x:J=m=>m}={}){const m=H**2,L=i.map(a=>({x:J(a),[n.z]:a[n.z],data:a})).sort((a,c)=>a.x-c.x),K=.001;let d=null,w=null;function S(a,c){let u=d;for(;u;){if(m-K>(u.x-a)**2+(u.y-c)**2)return!0;u=u.next}return!1}for(const a of L){for(;d&&d.x<a.x-m;)d=d.next;if(S(a.x,a.y=0)){let c=d;a.y=1/0;do{let u=c.y+Math.sqrt(m-(c.x-a.x)**2);u<a.y&&!S(a.x,u)&&(a.y=u),c=c.next}while(c)}a.next=null,d===null?d=w=a:w=w.next=a}return L}return l.$$set=i=>{"r"in i&&o(0,k=i.r),"strokeWidth"in i&&o(1,p=i.strokeWidth),"strokeColor"in i&&o(2,D=i.strokeColor),"spacing"in i&&o(3,y=i.spacing)},l.$$.update=()=>{l.$$.dirty&49163&&o(4,s=A(e,{rds:k*2+y+p,x:h}))},[k,p,D,y,s,r,g,T,W,z,E,G,q,B,h,e]}class oe extends N{constructor(t){super();O(this,t,le,te,P,{r:0,strokeWidth:1,strokeColor:2,spacing:3})}}export{oe as default};