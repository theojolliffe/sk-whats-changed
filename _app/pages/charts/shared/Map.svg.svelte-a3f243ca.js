import{S as T,i as U,s as X,$ as S,a0 as E,a as P,d as m,b as h,g as q,P as p,aw as Y,U as B,R as C,T as H,F as I,W as d,a1 as J,aC as K,aD as N}from"../../../chunks/vendor-af039a36.js";function F(e,t,l){const a=e.slice();return a[21]=t[l],a}function M(e){let t,l,a,u,n;function o(...r){return e[19](e[21],...r)}return{c(){t=S("path"),this.h()},l(r){t=E(r,"path",{class:!0,fill:!0,stroke:!0,"stroke-width":!0,d:!0}),P(t).forEach(m),this.h()},h(){h(t,"class","feature-path svelte-u3wqx1"),h(t,"fill",l=e[0]||e[5](e[21].properties)),h(t,"stroke",e[1]),h(t,"stroke-width",e[2]),h(t,"d",a=e[4](e[21]))},m(r,s){q(r,t,s),u||(n=[p(t,"mouseover",o),p(t,"mousemove",function(){Y(e[11](e[21]))&&e[11](e[21]).apply(this,arguments)})],u=!0)},p(r,s){e=r,s&41&&l!==(l=e[0]||e[5](e[21].properties))&&h(t,"fill",l),s&2&&h(t,"stroke",e[1]),s&4&&h(t,"stroke-width",e[2]),s&24&&a!==(a=e[4](e[21]))&&h(t,"d",a)},d(r){r&&m(t),u=!1,B(n)}}}function O(e){let t,l,a,u=e[3],n=[];for(let o=0;o<u.length;o+=1)n[o]=M(F(e,u,o));return{c(){t=S("g");for(let o=0;o<n.length;o+=1)n[o].c();this.h()},l(o){t=E(o,"g",{class:!0});var r=P(t);for(let s=0;s<n.length;s+=1)n[s].l(r);r.forEach(m),this.h()},h(){h(t,"class","map-group")},m(o,r){q(o,t,r);for(let s=0;s<n.length;s+=1)n[s].m(t,null);l||(a=p(t,"mouseout",e[20]),l=!0)},p(o,[r]){if(r&3135){u=o[3];let s;for(s=0;s<u.length;s+=1){const f=F(o,u,s);n[s]?n[s].p(f,r):(n[s]=M(f),n[s].c(),n[s].m(t,null))}for(;s<n.length;s+=1)n[s].d(1);n.length=u.length}},i:C,o:C,d(o){o&&m(t),H(n,o),l=!1,a()}}}function Q(e,t,l){let a,u,n,o,r,s,f;const{data:v,width:w,height:y,zGet:R}=I("LayerCake");d(e,v,i=>l(16,o=i)),d(e,w,i=>l(18,s=i)),d(e,y,i=>l(17,r=i)),d(e,R,i=>l(5,f=i));let{projection:g}=t,{fixedAspectRatio:c=void 0}=t,{fill:b=void 0}=t,{stroke:j="#333"}=t,{strokeWidth:W=.5}=t,{features:z=o.features}=t;const _=J();function D(i){return function(k){N(this),k.layerX!==0&&k.layerY!==0&&_("mousemove",{e:k,props:i.properties})}}const G=(i,A)=>_("mousemove",{e:A,props:i.properties}),L=i=>_("mouseout");return e.$$set=i=>{"projection"in i&&l(12,g=i.projection),"fixedAspectRatio"in i&&l(13,c=i.fixedAspectRatio),"fill"in i&&l(0,b=i.fill),"stroke"in i&&l(1,j=i.stroke),"strokeWidth"in i&&l(2,W=i.strokeWidth),"features"in i&&l(3,z=i.features)},e.$$.update=()=>{e.$$.dirty&401408&&l(15,a=c?[100,100/c]:[s,r]),e.$$.dirty&102400&&l(14,u=g().fitSize(a,o)),e.$$.dirty&16384&&l(4,n=K(u))},[b,j,W,z,n,f,v,w,y,R,_,D,g,c,u,a,o,r,s,G,L]}class Z extends T{constructor(t){super();U(this,t,Q,O,X,{projection:12,fixedAspectRatio:13,fill:0,stroke:1,strokeWidth:2,features:3})}}export{Z as default};
