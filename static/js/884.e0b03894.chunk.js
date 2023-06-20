"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[884],{436:function(e,t,n){n.d(t,{Df:function(){return p},TP:function(){return f},V0:function(){return d},tx:function(){return w},zv:function(){return g}});var r=n(861),a=n(687),c=n.n(a),o=n(243),s=n(596),i="db647ca802bc56bfe4b5510b06bf37f2",u="https://api.themoviedb.org/3/";function p(){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(u,"trending/movie/day?api_key=").concat(i)).catch((function(e){e.response||e.request,s.Am.error("Oops!!!Something went wrong, please reload the page and try again")}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(u,"movie/").concat(t,"?api_key=").concat(i)).catch((function(e){e.response||e.request,s.Am.error("Oops!!!Something went wrong, please reload the page and try again")}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(u,"search/movie?query=").concat(t,"&api_key=").concat(i)).catch((function(e){e.response||e.request,s.Am.error("Oops!!!Something went wrong, please reload the page and try again")}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(u,"movie/").concat(t,"/credits?api_key=").concat(i)).catch((function(e){e.response||e.request,s.Am.error("Oops!!!Something went wrong, please reload the page and try again")}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(u,"movie/").concat(t,"/reviews?api_key=").concat(i)).catch((function(e){e.response||e.request,s.Am.error("Oops!!!Something went wrong, please reload the page and try again")}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},884:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(433),a=n(439),c=n(436),o=n(791),s=n(689),i=n(87),u=n(184);function p(){var e,t,n=(0,s.UO)().movieID,p=(0,o.useState)(""),h=(0,a.Z)(p,2),f=h[0],l=h[1],d=(0,o.useState)(""),v=(0,a.Z)(d,2),g=v[0],m=v[1],w=(0,o.useState)(),x=(0,a.Z)(w,2),y=x[0],j=x[1],b=(0,o.useState)(),Z=(0,a.Z)(b,2),k=Z[0],_=Z[1],S=(0,o.useState)(""),O=(0,a.Z)(S,2),A=O[0],q=O[1],U=(0,o.useState)([]),D=(0,a.Z)(U,2),C=D[0],G=D[1],T=(0,s.TH)(),F=(0,o.useRef)(null!==(e=null===(t=T.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies");return(0,o.useEffect)((function(){(0,c.TP)(n).then((function(e){var t=e.data;console.log(e),l(t.title),m(t.poster_path),j(new Date(t.release_date).getFullYear()),_(Math.round(10*t.vote_average)),q(t.overview),t.genres.map((function(e){var t=e.name;return G((function(e){return[].concat((0,r.Z)(e),[t])}))}))}))}),[n]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.rU,{to:F.current,children:"Go back"}),(0,u.jsxs)("h2",{children:[f," (",y,")"]}),(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(g),alt:""}),(0,u.jsxs)("p",{children:[" User Score: ",k,"%"]}),(0,u.jsx)("h3",{children:"Overview "}),(0,u.jsx)("p",{children:A}),(0,u.jsx)("h4",{children:"Genres"}),(0,u.jsx)("p",{children:C.join(", ")}),(0,u.jsx)("hr",{}),(0,u.jsx)("p",{children:"Additional information"}),(0,u.jsx)(i.rU,{to:"cast",children:"Cast"}),(0,u.jsx)("br",{}),(0,u.jsx)(i.rU,{to:"reviews",children:"Reviews"}),(0,u.jsx)(o.Suspense,{fallback:(0,u.jsx)("div",{children:"LOADING..."}),children:(0,u.jsx)(s.j3,{})})]})}}}]);
//# sourceMappingURL=884.e0b03894.chunk.js.map