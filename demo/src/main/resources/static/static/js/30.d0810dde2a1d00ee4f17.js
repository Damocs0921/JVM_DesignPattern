webpackJsonp([30],{"53DP":function(t,e,n){n("PiJ2");var o=n("VU/8")(n("f0y0"),n("iASY"),"data-v-93d86ae6",null);t.exports=o.exports},PiJ2:function(t,e,n){var o=n("ttWU");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n("rjj0")("fbd735fa",o,!0)},f0y0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("Msp2"),i=(n.n(o),n("Bfwr")),a=(n.n(i),n("rLAy")),r=(n.n(a),n("3BeM")),s=n("Y+qm"),d=n("rHil"),l=n.n(d),c=n("1DHf"),f=n.n(c),p=n("YxJB"),v=(n.n(p),n("3Lt7")),x=(n.n(v),n("rGqP")),u=(n.n(x),n("S8Wg")),g=n.n(u),b=n("I3G/"),m=n.n(b),_=n("mtWM"),h=n.n(_);m.a.use(r.a);var k=(n("PZHe"),n("gsSi"),n("fkXR"));k.push_event_app;h.a.defaults.timeout=15e3,m.a.use(s.a),e.default={created:function(){var t=decodeURI(this.$route.params.data);if(t.length>0){console.log("data:"+t);var e=JSON.parse(t);this.data=e.details}},methods:{onRefreshUi:function(){var t=this;this.$nextTick(function(){t.$refs.scroller.reset({top:0})})}},components:{Scroller:g.a,Group:l.a,Cell:f.a},data:function(){return{netErr:!1,data:[],errorMsg:"暂无数据"}}}},fkXR:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"push_event",function(){return r}),n.d(e,"push_event_app",function(){return a});var o=n("e3l2"),i=o.KTVmeBridge,a=function(t){var e=t.eventId,n=t.param,o={action:"event",data:"0",eventId:e,param:{}};if(n.map(function(t,e){o.param["param"+(0==e?"":e)]=t}),console.log("事件统计数据：",o),void 0!==window.appVersion)try{i.webToNativeRequest(o,"nativeHandler")}catch(t){}},r=function(t){var e=t.category,n=t.action,o=void 0===n?"点击":n,i=t.label,a=void 0===i?void 0:i,r=t.value,s=void 0===r?0:r;"undefined"!=typeof _czc&&_czc.push(["_trackEvent",e,o,a,s,void 0])}},gsSi:function(t,e,n){var o=n("e3l2"),i=o.KTVmeBridge,a=n("tpu8"),r=a.memoize(function(){var t={action:"invalid_token",data:""};try{i.webToNativeRequest(t,"nativeHandler")}catch(t){}});t.exports=function(t,e,n){9e4==t.ret?r():n()}},iASY:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("scroller",{ref:"scroller",staticStyle:{height:"100%",width:"100%"},attrs:{"lock-x":""}},[n("div",{staticClass:"box2 list-inner"},[t.netErr?n("div",{staticStyle:{"text-align":"center","font-size":"16px","margin-top":"50%",color:"#ccc"},on:{click:function(e){t.getData()}}},[t._v("\n                    网络错误，请点击重试\n                ")]):t._e(),t._v(" "),t.netErr?t._e():n("div",[t.data&&0==t.data.length?n("div",{staticStyle:{"text-align":"center","font-size":"16px","margin-top":"50%",color:"#ccc"}},[t._v("\n                        "+t._s(t.errorMsg)+"\n                    ")]):t._e(),t._v(" "),t.data.length>0?n("div",{staticStyle:{"margin-top":"12px"}},[n("div",{staticClass:"goods-list"},t._l(t.data,function(e){return n("div",{staticClass:"goods-item"},[n("div",{staticClass:"name"},[n("span",[t._v(t._s(e.name))])]),t._v(" "),n("div",{staticClass:"num"},[t._v(t._s(e.num))]),t._v(" "),n("div",{staticClass:"money"},[t._v("\n                                    "+t._s(e.money)),0==e.money.length?n("span",[t._v("--")]):t._e()])])}))]):t._e()])])])],1)},staticRenderFns:[]}},ttWU:function(t,e,n){e=t.exports=n("FZ+f")(),e.push([t.i,"\n.box[data-v-93d86ae6] {\n  background: #f2f2f2;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.box .goods-list[data-v-93d86ae6] {\n  padding-left: 15px;\n  padding-right: 15px;\n  background: #ffffff;\n  border-bottom: 1px solid #dfdfdf;\n}\n.box .goods-list .goods-item[data-v-93d86ae6]:last-child {\n  border-bottom: 0px none;\n}\n.box .goods-list .goods-item[data-v-93d86ae6] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #f4f4f4;\n  font-size: 14px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n}\n.box .goods-list .goods-item .name[data-v-93d86ae6] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  -webkit-box-align: left;\n  -webkit-align-items: left;\n          align-items: left;\n  color: #333;\n}\n.box .goods-list .goods-item .num[data-v-93d86ae6] {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 80px;\n          flex: 0 0 80px;\n  text-align: right;\n  color: #999;\n}\n.box .goods-list .goods-item .money[data-v-93d86ae6] {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 80px;\n          flex: 0 0 80px;\n  text-align: right;\n  color: #999;\n}\n",""])}});