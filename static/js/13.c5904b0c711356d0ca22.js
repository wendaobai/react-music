webpackJsonp([13],{743:function(t,e,n){var o=n(4)(n(805),n(979),null,null,null);t.exports=o.exports},805:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(176),s=n.n(o),u=n(174),i=n.n(u),a=n(21),r=n.n(a);e.default={methods:{getAuth:function(){var t=this;this.axios.post(this.myConfig.code.auth+"/api/authority",{}).then(function(e){var n=e.data;if("10000"==n.head.code){t.$store.dispatch("setAuthority",n.body),t.$store.dispatch("setAuthSelect",n.body.menus[0]),localStorage.setItem("headMenu",n.body.menus[0].menuId),localStorage.setItem("setAuthSelect",r()(n.body.menus[0]));var o=[],u=[];!function t(e){for(var n in e)o=o.concat(e[n].ops),u.push(e[n].menuUri),e[n].childMenu&&t(e[n].childMenu)}(n.body.menus);for(var a in o)u.push(o[a].opUri);u=i()(new s.a(u)),t.$store.dispatch("setAuthOps",u)}})}},created:function(){this.getAuth()},watch:{$route:function(){this.getAuth()}}}},979:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goods-main"},[n("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=13.c5904b0c711356d0ca22.js.map