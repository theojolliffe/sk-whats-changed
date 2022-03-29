import{S as z,i as G,s as W,F as y,W as n,aA as F}from"../../../chunks/vendor-af039a36.js";function S(o,c,i){let r,h,p,g,_,u;const{data:f,xGet:m,yGet:x,width:v,height:w}=y("LayerCake");n(o,f,t=>i(11,g=t)),n(o,m,t=>i(13,u=t)),n(o,x,t=>i(12,_=t)),n(o,v,t=>i(9,p=t)),n(o,w,t=>i(8,h=t));let{diameter:d}=c;const{gl:b}=y("gl");n(o,b,t=>i(7,r=t));function C(){if(r){const t=r.canvas,a=t.clientWidth,e=t.clientHeight;(t.width!==a||t.height!==e)&&(t.width=a,t.height=e),r.viewport(0,0,t.width,t.height)}}let s;function k(){r&&(s=F({gl:r,extensions:["oes_standard_derivatives"]}),s.clear({color:[0,0,0,0],depth:1}),s({frag:`
				#extension GL_OES_standard_derivatives : enable
				precision mediump float;
				uniform vec3 fill_color;
				uniform vec3 stroke_color;
				varying float s_s;
				void main () {

					vec2 cxy = 2.0 * gl_PointCoord - 1.0;

					float dist = dot(cxy, cxy);

					float delta = fwidth(dist);

					float alpha = 1.0 - smoothstep(1.0 - delta, 1.0 + delta, dist);

					float outer_edge_center = 1.0 - s_s;
					float stroke = 1.0 - smoothstep(outer_edge_center - delta, outer_edge_center + delta, dist);

					// gl_FragColor = vec4(fill_color,1.0) * alpha;
					gl_FragColor = vec4( mix(stroke_color, fill_color, stroke), 1.0 ) * alpha;
					gl_FragColor.rgb *= gl_FragColor.a;
				}`,vert:`
				precision mediump float;
				attribute vec2 position;
				attribute float r;
				attribute float stroke_size;

				varying float s_s;

				uniform float stage_width;
				uniform float stage_height;

				// http://peterbeshai.com/beautifully-animate-points-with-webgl-and-regl.html
				vec2 normalizeCoords(vec2 position) {
					// read in the positions into x and y vars
					float x = position[0];
					float y = position[1];
					return vec2(
						2.0 * ((x / stage_width) - 0.5),
						// invert y to treat [0,0] as bottom left in pixel space
						-(2.0 * ((y / stage_height) - 0.5))
					);
				}

				void main () {
					s_s = stroke_size;
					gl_PointSize = r;
					gl_Position = vec4(normalizeCoords(position), 0.0, 1.0);
				}`,attributes:{position:(a,e)=>e.points.map(l=>[u(l),_(l)]),r:(a,e)=>e.points.map(l=>e.pointWidth),stroke_size:(a,e)=>e.points.map(l=>0)},uniforms:{fill_color:[.6705882352941176,0,.8392156862745098],stroke_color:[0,0,0],stage_width:s.context("drawingBufferWidth"),stage_height:s.context("drawingBufferHeight")},count:(a,e)=>e.points.length,primitive:"points",blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"src alpha",dstRGB:"one minus src alpha",dstAlpha:"one minus src alpha"}},depth:{enable:!1}})({pointWidth:d,points:g}))}return o.$$set=t=>{"diameter"in t&&i(6,d=t.diameter)},o.$$.update=()=>{o.$$.dirty&896&&(C(),k())},[f,m,x,v,w,b,d,r,h,p]}class A extends z{constructor(c){super();G(this,c,S,null,W,{diameter:6})}}export{A as default};
