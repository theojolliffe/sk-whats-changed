import{S as m,i as b,s as F,F as C,W as l,aC as S,au as P,av as W}from"../../../chunks/vendor-af039a36.js";function w(c,o,i){let h,s,e,n,a,f;const{data:_,width:d,height:j,zGet:z}=C("LayerCake");l(c,_,t=>i(14,f=t)),l(c,d,t=>i(13,a=t)),l(c,j,t=>i(12,n=t));const{ctx:r}=C("canvas");l(c,r,t=>i(11,e=t));let{projection:u}=o,{fill:k="#fff"}=o,{stroke:g="#ccc"}=o,{strokeWidth:x=1}=o,{features:y=f}=o;return c.$$set=t=>{"projection"in t&&i(4,u=t.projection),"fill"in t&&i(5,k=t.fill),"stroke"in t&&i(6,g=t.stroke),"strokeWidth"in t&&i(7,x=t.strokeWidth),"features"in t&&i(8,y=t.features)},c.$$.update=()=>{c.$$.dirty&28688&&i(10,h=u().fitSize([a,n],f)),c.$$.dirty&1024&&i(9,s=S(h)),c.$$.dirty&15328&&e&&S&&(P(e,a,n),e.clearRect(0,0,a,n),y.features.forEach(t=>{e.beginPath(),s.context(e),s(t),W(r,e.fillStyle=k,e),e.fill(),W(r,e.lineWidth=x,e),W(r,e.strokeStyle=g,e),e.stroke()}))},[_,d,j,r,u,k,g,x,y,s,h,e,n,a,f]}class E extends m{constructor(o){super();b(this,o,w,null,F,{projection:4,fill:5,stroke:6,strokeWidth:7,features:8})}}export{E as default};
