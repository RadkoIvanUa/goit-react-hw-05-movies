"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[390],{390:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var r=n(433),a=n(439),c=n(436),o=n(791),i=n(689),u=n(596),s=n(184);function p(){var t=(0,i.UO)().movieID,e=(0,o.useState)([]),n=(0,a.Z)(e,2),p=n[0],f=n[1],h=(0,o.useState)(!0),g=(0,a.Z)(h,2),d=g[0],m=g[1];return(0,o.useEffect)((function(){(0,c.zv)(t).then((function(t){if(0===t.data.cast.length)return m(!1),void u.Am.info("We don`t have any info about cast of this movie");f((0,r.Z)(t.data.cast))}))}),[t]),d?(0,s.jsx)("ul",{children:p.map((function(t){var e=t.profile_path,n=t.name,r=t.character,a=t.id;return(0,s.jsxs)("li",{children:[e?(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e),alt:"Actor",width:"200px",height:"300px"}):(0,s.jsx)("img",{src:"https://i.imgur.com/JQ8ngUd.png",alt:"Actor",width:"200px",height:"300px"}),(0,s.jsx)("p",{children:n}),(0,s.jsx)("p",{children:r})]},a)}))}):(0,s.jsx)(u.Ix,{})}},436:function(t,e,n){n.d(e,{Df:function(){return p},TP:function(){return h},V0:function(){return d},tx:function(){return w},zv:function(){return l}});var r=n(861),a=n(687),c=n.n(a),o=n(243),i=n(596),u="db647ca802bc56bfe4b5510b06bf37f2",s="https://api.themoviedb.org/3/";function p(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(s,"trending/movie/day?api_key=").concat(u)).catch((function(t){t.response||t.request,i.Am.error("Oops!!!Something went wrong, please reload the page and try again")}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(s,"movie/").concat(e,"?api_key=").concat(u)).catch((function(t){t.response||t.request,i.Am.error("Oops!!!Something went wrong, please reload the page and try again")}));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(s,"search/movie?query=").concat(e,"&api_key=").concat(u)).catch((function(t){t.response||t.request,i.Am.error("Oops!!!Something went wrong, please reload the page and try again")}));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(s,"movie/").concat(e,"/credits?api_key=").concat(u)).catch((function(t){t.response||t.request,i.Am.error("Oops!!!Something went wrong, please reload the page and try again")}));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(u)).catch((function(t){t.response||t.request,i.Am.error("Oops!!!Something went wrong, please reload the page and try again")}));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=390.76414eaf.chunk.js.map