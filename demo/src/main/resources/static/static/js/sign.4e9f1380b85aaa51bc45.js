webpackJsonp([45],{"+KE2":function(t,e){},"2sLL":function(t,e,n){n("xOyr");var o=n("VU/8")(n("TCOM"),n("ynfr"),null,null);t.exports=o.exports},"5mBz":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-toast"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),n("transition",{attrs:{name:t.currentTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[n("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):n("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},staticRenderFns:[]}},"8aB6":function(t,e){},Bfwr:function(t,e,n){n("NuxV");var o=n("VU/8")(n("Z5JB"),n("Tr9N"),null,null);t.exports=o.exports},CWSs:function(t,e,n){var o=n("JmRA"),i=o.getConfig,a=i();t.exports={createAjaxUrl:function(t){return a.api_url+t},createPageUrl:function(t){},createSSEUrl:function(t){return a.sse_url+t}}},DWri:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"box"},[o("section",{staticClass:"header"},[o("img",{staticClass:"logo",attrs:{src:n("wndS"),alt:""}}),t._v(" "),o("div",{staticClass:"content"},[o("p",[o("span",[t._v("累计签到")]),o("span",{staticClass:"day-count"},[t._v(t._s(t.dayCount))]),o("span",[t._v("天")])]),t._v(" "),o("x-button",{class:["btn",{over:2==t.signStatu},{"not-start":0==t.signStatu}],attrs:{disabled:t.signed||1!=t.signStatu},nativeOn:{click:function(e){t.signIn()}}}),t._v(" "),o("span",{staticClass:"last",on:{click:t.seeLast}})],1)]),t._v(" "),o("section",{staticClass:"sign-list"},[o("div",{staticClass:"sign-container"},[0==t.totalCount?o("p",[t._v("\n                哇噢 ~ 一大波营销短信来袭,快去签到吧!\n            ")]):t._e(),t._v(" "),t.totalCount>0?o("p",[t._v("^_^恭喜，签到获得营销短信 "),o("span",{staticStyle:{color:"#f9524c"}},[t._v(t._s(t.totalCount))]),t._v(" 条")]):t._e(),t._v(" "),o("div",{staticClass:"list"},[o("scroller",{ref:"scroller",staticClass:"scroller",attrs:{height:"150px","lock-x":"","scrollbar-y":!1,bounce:!0},on:{"on-scroll":t.onScroll}},[o("div",t._l(t.dataList,function(e,n){return o("div",[o("div",{staticClass:"item"},[o("span",{staticClass:"company"},[t._v(t._s(e.companyName))])]),t._v(" "),t._l(e.detail,function(e,n){return o("div",{staticClass:"item"},[o("span",{staticClass:"name"},[t._v(t._s(e.userName))]),o("span",{staticClass:"value"},[t._v("为本店贡献了 "+t._s(e.smsCount)+" 条")])])})],2)}))])],1)])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"desc"},[n("p",{staticClass:"title"},[t._v("活动规则")]),t._v(" "),n("p",[n("span",{staticStyle:{"font-weight":"bold"}},[t._v("活动时间:")]),t._v(" "),n("span",[t._v("7月1日 ~ 7月31日")])]),t._v(" "),n("p",{staticStyle:{"font-weight":"bold"}},[t._v("活动内容:")]),t._v(" "),n("p",[t._v("1.用户登录App后点击签到，每签到1天，可获得10条CRM营销短信，累计签到达10天，所在商家即可获得CRM营销短信100条；")]),t._v(" "),n("p",[t._v("2.累计签到达20天，即可获得200条，以此类推；")]),t._v(" "),n("p",[t._v("3.若用户绑定多个商家，每个商家都可获得对应的签到短信；")]),t._v(" "),n("p",{staticStyle:{"font-weight":"bold"}},[t._v("注意事项:")]),t._v(" "),n("p",[t._v("1.累计签到天数≥10天的用户才有获赠短信的资格，若用户签到天数低于10天则不赠送；")]),t._v(" "),n("p",[t._v("2.签到所获得短信排名前3的商家，分别将额外获得5000、3000、1000条短信；")]),t._v(" "),n("p",[t._v("3.活动结束后的5个工作日内，我们将根据用户所绑定的商家，直接进行短信充值，充值成功后，我们将以短信形式告知，敬请留意；")]),t._v(" "),n("p",{staticClass:"footer"},[t._v("本活动最终解释权归K米所有")])])}]}},JmRA:function(t,e,n){var o=n("Q3LO");t.exports={getConfig:function(){var t="http://kmtest.ktvme.com:3053";switch(o){case 1:case 2:return{api_url:"/manager_app/",sse_url:"/mgr_upload/"};case 3:return{api_url:t+"/manager_app/",sse_url:t+"/mgr_upload/"}}}}},M93x:function(t,e,n){n("qWxT");var o=n("VU/8")(n("xzd6"),n("jLwv"),null,null);t.exports=o.exports},NuxV:function(t,e){},P2Kv:function(t,e,n){"use strict";function o(t){return JSON.parse(a()(t))}Object.defineProperty(e,"__esModule",{value:!0});var i=n("mvHQ"),a=n.n(i),s=n("BEQ0"),u=n.n(s),r=n("WTNC"),l=n.n(r),c=n("ypEt"),d=n.n(c),p=n("qbvd"),f=n.n(p),h=function(){return{content:"Pull Down To Refresh",height:60,autoRefresh:!1,downContent:"Pull Down To Refresh",upContent:"Release To Refresh",loadingContent:"Loading...",clsPrefix:"xs-plugin-pulldown-"}},v=function(){return{content:"Pull Up To Refresh",pullUpHeight:60,height:40,autoRefresh:!1,downContent:"Release To Refresh",upContent:"Pull Up To Refresh",loadingContent:"Loading...",clsPrefix:"xs-plugin-pullup-"}};e.default={name:"scroller",props:{value:{type:Object,default:function(){return{pulldownStatus:"",pullupStatus:""}}},height:String,lockX:Boolean,lockY:Boolean,scrollbarX:Boolean,scrollbarY:Boolean,bounce:{type:Boolean,default:!0},useOriginScroll:{type:Boolean,default:!1},useTransition:{type:Boolean,default:!0},preventDefault:{type:Boolean,default:!1},stopPropagation:Boolean,boundryCheck:{type:Boolean,default:!0},gpuAcceleration:{type:Boolean,default:!0},usePulldown:{type:Boolean,default:!1},usePullup:{type:Boolean,default:!1},pulldownConfig:{type:Object,default:function(){return{}}},pullupConfig:{type:Object,default:function(){return{}}},enableHorizontalSwiping:{type:Boolean,default:!1},scrollBottomOffset:{type:Number,default:0}},methods:{reset:function(t,e,n){t&&(void 0!==t.left&&this._xscroll.scrollLeft(t.left,e,n),void 0!==t.top&&this._xscroll.scrollTop(t.top,e,n)),this._xscroll&&this._xscroll.resetSize()},donePulldown:function(){var t=this;this.pulldown.reset(function(){t.reset()}),this.currentValue.pulldownStatus="default"},disablePullup:function(){this.pullup.stop(),this.currentValue.pullupStatus="disabled"},enablePullup:function(){this.currentValue.pullupStatus="default",this.pullup.restart()},donePullup:function(){this.pullup.complete(),this.reset(),this.currentValue.pullupStatus="default"},getStyles:function(){var t=this.height;!this.height&&this.$el&&!this.$el.style.height&&this.lockX&&(t=document.documentElement.clientHeight+"px",this.reset()),this.height&&0===this.height.indexOf("-")&&(t=document.documentElement.clientHeight+parseInt(this.height)+"px"),this.styles={height:""+t}}},created:function(){var t=this;this.value?this.currentValue=this.value:this.currentValue={pulldownStatus:"",pullupStatus:""},this.handleOrientationchange=function(){setTimeout(function(){t.reset()},100)}},data:function(){return{currentValue:{},styles:{}}},watch:{currentValue:{handler:function(t){this.$emit("input",o(t))},deep:!0},height:function(){this.getStyles()},value:{handler:function(t){"default"===t.pullupStatus&&"default"!==this.currentValue.pullupStatus&&this.donePullup(),"default"===t.pulldownStatus&&"default"!==this.currentValue.pulldownStatus&&this.donePulldown(),"disabled"===t.pullupStatus&&"disabled"!==this.currentValue.pullupStatus&&this.disablePullup(),"enabled"===t.pullupStatus&&"disabled"===this.currentValue.pullupStatus&&this.enablePullup()},deep:!0}},mounted:function(){var t=this;this.uuid=Math.random().toString(36).substring(3,8),this.$nextTick(function(){t.$el.setAttribute("id","vux-scroller-"+t.uuid);var e=null;if(t.$slots.default&&(e=t.$slots.default[0].elm),!e)throw new Error("no content is found");if(t._xscroll=new l.a({renderTo:"#vux-scroller-"+t.uuid,lockX:t.lockX,lockY:t.lockY,scrollbarX:t.scrollbarX,scrollbarY:t.scrollbarY,content:e,bounce:t.bounce,useOriginScroll:t.useOriginScroll,useTransition:t.useTransition,preventDefault:t.preventDefault,boundryCheck:t.boundryCheck,gpuAcceleration:t.gpuAcceleration,stopPropagation:t.stopPropagation}),t._xscroll.on("scroll",function(){if(t._xscroll){var e=t._xscroll.getScrollTop();t.$emit("on-scroll",{top:e,left:t._xscroll.getScrollLeft()});e>=t._xscroll.containerHeight-t._xscroll.height-t.scrollBottomOffset&&t.$emit("on-scroll-bottom")}}),t.usePulldown){var n=t.$slots.pulldown,o=u()(h(),t.pulldownConfig);n&&(o.container=n[0].elm),t.pulldown=new d.a(o),t._xscroll.plug(t.pulldown),t.pulldown.on("loading",function(e){t.$emit("on-pulldown-loading",t.uuid)}),t.pulldown.on("statuschange",function(e){t.currentValue.pulldownStatus=e.newVal})}if(t.usePullup){var i=t.$slots.pullup,a=u()(v(),t.pullupConfig);i&&(a.container=i[0].elm),t.pullup=new f.a(a),t._xscroll.plug(t.pullup),t.pullup.on("loading",function(e){t.$emit("on-pullup-loading",t.uuid)}),t.pullup.on("statuschange",function(e){t.currentValue.pullupStatus=e.newVal})}t.enableHorizontalSwiping&&(t._xscroll.on("panstart",function(e){2!==e.direction&&4!==e.direction||(e.preventDefault(),t.scrollbarY&&(t._xscroll.userConfig.scrollbarY=!1),t._xscroll.userConfig.lockY=!0)}),t._xscroll.on("panend",function(){t.scrollbarY&&(t._xscroll.userConfig.scrollbarY=!0),t._xscroll.userConfig.lockY=!1})),t._xscroll.render(),window.addEventListener("orientationchange",t.handleOrientationchange,!1)}),this.getStyles()},updated:function(){this.reset()},beforeDestroy:function(){this.pullup&&(this._xscroll.unplug(this.pullup),this.pullup.pluginDestructor()),this.pulldown&&(this._xscroll.unplug(this.pulldown),this.pulldown.pluginDestructor()),window.removeEventListener("orientationchange",this.handleOrientationchange,!1),this._xscroll.destroy(),this._xscroll=null}}},PZHe:function(t,e,n){"use strict";function o(){return void 0!==h.userType?h.userType:0}function i(){return 1==v}function a(t){if(1==v)t(h);else{var e={action:"company",data:""};try{p.webToNativeRequestWithCallBack(e,"nativeHandler",function(e){"string"==typeof e&&(e=JSON.parse(e));var n=e,o=n.access_token,i=n.sec_id,a=n.ext,s=n.company_ext,u=n.test;t({token:o,secid:i,ext:a,company_ext:s,test:u})})}catch(t){}}}function s(t){if(1==v)t(["revenue","visitor","memberstore","box-account","market-account","member-consume"]);else try{var e={action:"report",data:""};console.log("调用获取报表选项的js sdk接口"),p.webToNativeRequestWithCallBack(e,"nativeHandler",function(e){"string"==typeof e&&(e=JSON.parse(e)),console.log("调用jsapi获得选中报表:",e),t(e)})}catch(t){}}function u(){return void 0!==h.companycode?h.companycode:""}function r(){return void 0!==h.voucher?h.voucher:""}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"getShowReport",function(){return s}),n.d(e,"getCompanyInfo",function(){return g}),n.d(e,"getUserType",function(){return o}),n.d(e,"isDev",function(){return i}),n.d(e,"getCompanyCodeByUrl",function(){return u}),n.d(e,"asyncGetCompanyInfo",function(){return _}),n.d(e,"getVoucherByUrl",function(){return r});var l=n("//Fk"),c=n.n(l),d=n("e3l2"),p=d.KTVmeBridge,f=n("OAwv"),h=f.parse(window.location.search),v=3;h.token&&h.secid&&(v=1),console.log(h),console.log("env="+v);var g=function(){return function(t){t({token:"7BF15A94362A75F83EF10A7FBC4BA675",secid:"7BF15A94362A75F83EF10A7FBC4BA675"})}}(),_=function(){return new c.a(function(t,e){a(function(e){t(e)})})}},Q3LO:function(t,e){t.exports=1},S8Wg:function(t,e,n){n("U3AK");var o=n("VU/8")(n("P2Kv"),n("z80F"),null,null);t.exports=o.exports},TCOM:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("0FxO");e.default={name:"x-button",props:{type:{default:"default"},disabled:Boolean,mini:Boolean,plain:Boolean,text:String,actionType:String,showLoading:Boolean,link:[String,Object],gradients:{type:Array,validator:function(t){return 2===t.length}}},methods:{onClick:function(){!this.disabled&&n.i(o.a)(this.link,this.$router)}},computed:{noBorder:function(){return Array.isArray(this.gradients)},buttonStyle:function(){if(this.gradients)return{background:"linear-gradient(90deg, "+this.gradients[0]+", "+this.gradients[1]+")",color:"#FFFFFF"}},classes:function(){return[{"weui-btn_disabled":!this.plain&&this.disabled,"weui-btn_plain-disabled":this.plain&&this.disabled,"weui-btn_mini":this.mini,"vux-x-button-no-border":this.noBorder},this.plain?"":"weui-btn_"+this.type,this.plain?"weui-btn_plain-"+this.type:"",this.showLoading?"weui-btn_loading":""]}}}},Tr9N:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading",class:t.text?"":"vux-loading-no-text"},[n("div",{staticClass:"weui-mask_transparent"}),t._v(" "),n("div",{staticClass:"weui-toast",style:{position:t.position}},[n("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2):t._e()])])])},staticRenderFns:[]}},U3AK:function(t,e){},Z5JB:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(t){this.$emit("update:show",t)}}}},e3l2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var e=n("mvHQ"),o=n.n(e),i=n("ifoU"),a=n.n(i),s=n("pFYg"),u=n.n(s);!function(e,o){"object"===u()(t)&&t&&t.exports?t.exports=function(){return o()}():"function"==typeof define&&n("nErl")?define([],o):e.KTVmeBridge=o()}(this,function(){function t(t){p&&p.debug&&t&&t.length>0&&console.log(t)}function e(e){if(i)try{window.WebViewJavascriptBridge?e(WebViewJavascriptBridge):document.addEventListener("WebViewJavascriptBridgeReady",function(){e(WebViewJavascriptBridge)},!1)}catch(e){t(e.toString())}else if(s){if(window.WebViewJavascriptBridge)return e(WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(e);window.WVJBCallbacks=[e];var n=document.createElement("iframe");n.style.display="none",n.src="wvjbscheme://__BRIDGE_LOADED__",document.documentElement.appendChild(n),setTimeout(function(){document.documentElement.removeChild(n)},0)}else t("not support"),e(void 0)}var n=navigator.userAgent,i=n.indexOf("Android")>-1||n.indexOf("Adr")>-1,s=!!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),r=new a.a,l=new a.a,c={action:"",data:"",appid:"",authtoken:""};e(function(e){void 0!==e&&(i&&e.init(function(t,e){}),e.registerHandler("jsHandler",function(e,n){if(e){var o=JSON.parse(e);t(o);var i=o.action,a=o.data;if(r.has(i))r.get(i)(a,n);else if("PageStatusChange"===i){var s=l.get("onPageStatusChange");s&&s(a)}else if("NativeButtonClick"==i){if(a.type&&1==a.type){var u=l.get("onRightBtnClick");u&&u(a.data||"")}}else t("!!!无法处理协议:"+i)}}))});var d=function(){for(var t,e,n={},o=0,i=arguments.length;o<i;o++)if(t=arguments[o],"object"===(void 0===t?"undefined":u()(t)))for(e in t)"boolean"==typeof t[e]?n[e]=t[e]:t[e]&&(n[e]=t[e]);return n},p={version:"1.0.2",debug:!1,authconifg:{appid:"",authtoken:""},navigation:{},authstatus:!1,webToNativeRequest:function(n,i){n||(n=c),e(function(e){if(void 0!==e)try{var a=n;"authvertify"!=n.action&&(a=d({},n,p.authconifg)),e.callHandler(i,o()(a))}catch(e){t("bridge callHandler exception happened!")}})},webToNativeRequestWithCallBack:function(n,i,a){n||(n=c),e(function(e){if(void 0===e)return void t("bridge not initialize");try{var s=n;"authvertify"!=n.action&&(s=d({},n,p.authconifg)),e.callHandler(i,o()(s),a)}catch(e){t("bridge callHandler exception happened!")}})},registerHandler:function(t,e){r.set(t,e)},regEvent:function(t,e){r.set(t,e)}};return p.config=function(e){var n={appid:"",authtoken:""};p.authconifg=d(n,e);var o={action:"authvertify",data:p.authconifg};t("进入config函数");var i=this;p&&p.webToNativeRequestWithCallBack(o,"nativeHandler",function(t){"string"==typeof t&&(t=JSON.parse(t));var e=l.get("onReady");"0"===t.code?(i.authstatus=!0,e&&e(t)):(i.authstatus=!1,e&&e(t))})},p.onReady=function(t){t&&"function"==typeof t&&l.set("onReady",t)},p.onPageStatusChange=function(t){t&&"function"==typeof t&&l.set("onPageStatusChange",t)},p.enableDebugMode=function(t){window.onerror=function(e,n,o,i){if("function"==typeof t)t({message:e,script:n,line:o,column:i});else{var a=[];a.push("\n错误信息：",e),a.push("\n出错文件：",n),a.push("\n出错位置：",o+"行，"+i+"列"),alert(a.join(""))}}},p.webToAppWxpay=function(t,e){var n={action:"wxpay",data:""};n=d(n,t),p&&p.webToNativeRequestWithCallBack(n,"nativeHandler",function(t){"string"==typeof t&&(t=JSON.parse(t)),"function"==typeof e&&e(t)})},p.webToAppAlipay=function(t,e){var n={action:"alipay",data:""};n=d(n,t),p&&p.webToNativeRequestWithCallBack(n,"nativeHandler",function(t){"string"==typeof t&&(t=JSON.parse(t)),"function"==typeof e&&e(t)})},p.getCompanyInfo=function(t,e){var n={action:"company",data:t};p&&p.webToNativeRequestWithCallBack(n,"nativeHandler",function(t){"string"==typeof t&&(t=JSON.parse(t)),"function"==typeof e&&e(t)})},p.getUserInfo=function(t,e){var n={action:"user_info",data:t};p&&p.webToNativeRequestWithCallBack(n,"nativeHandler",function(t){"string"==typeof t&&(t=JSON.parse(t)),"function"==typeof e&&e(t)})},p.event=function(t){var e={action:"event",data:"0",eventId:t.eventId,param:{param1:t.param}};console.log("事件统计数据：",e),p&&p.webToNativeRequest(e,"nativeHandler")},p.goToWebPage=function(t){var e={action:"push_web",data:t.url,type:t.type?t.type:"",tag:t.pageTag?t.pageTag:"",ext:t.navigation?o()(t.navigation):o()({})};p&&p.webToNativeRequest(e,"nativeHandler")},p.closePage=function(t){var e={action:"pop_web",data:"",target:t.target};p&&p.webToNativeRequest(e,"nativeHandler")},p.getAppVersion=function(t){var e={action:"version",data:{}};p&&p.webToNativeRequestWithCallBack(e,"nativeHandler",function(e){"string"==typeof e&&(e=JSON.parse(e)),"function"==typeof t&&t(e)})},p.invalidUserToken=function(t){var e={action:"invalid_token",data:t};p&&p.webToNativeRequest(e,"nativeHandler")},p.encrypt=function(t){var e={action:"encrypt",data:t.data,sign:t.sign};p&&p.webToNativeRequestWithCallBack(e,"nativeHandler",function(e){"string"==typeof e&&(e=JSON.parse(e)),"function"==typeof t.cb&&t.cb(e)})},p.updateUI=function(t){var e={action:"ui",data:t};p&&p.webToNativeRequest(e,"nativeHandler")},p.setupNavigation=function(t){t.rightButtonType&&2==t.rightButtonType&&t.onClickRightButton&&"function"==typeof t.onClickRightButton&&l.set("onRightBtnClick",t.onClickRightButton);var e={action:"navigation",data:t};p&&p.webToNativeRequest(e,"nativeHandler")},p.userRight=function(t){var e={action:"user_rights",data:t.data||""};p&&p.webToNativeRequestWithCallBack(e,"nativeHandler",function(e){"string"==typeof e&&(e=JSON.parse(e)),"function"==typeof t.cb&&t.cb(e)})},p})}.call(e,n("f1Eh")(t))},fkXR:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"push_event",function(){return s}),n.d(e,"push_event_app",function(){return a});var o=n("e3l2"),i=o.KTVmeBridge,a=function(t){var e=t.eventId,n=t.param,o={action:"event",data:"0",eventId:e,param:{}};if(n.map(function(t,e){o.param["param"+(0==e?"":e)]=t}),console.log("事件统计数据：",o),void 0!==window.appVersion)try{i.webToNativeRequest(o,"nativeHandler")}catch(t){}},s=function(t){var e=t.category,n=t.action,o=void 0===n?"点击":n,i=t.label,a=void 0===i?void 0:i,s=t.value,u=void 0===s?0:s;"undefined"!=typeof _czc&&_czc.push(["_trackEvent",e,o,a,u,void 0])}},"gVo/":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("//Fk"),i=n.n(o),a=n("I3G/"),s=n.n(a),u=n("2sLL"),r=n.n(u),l=n("rLAy"),c=(n.n(l),n("3BeM")),d=n("Bfwr"),p=(n.n(d),n("Y+qm")),f=n("S8Wg"),h=n.n(f),v=n("tpu8"),g=n.n(v),_=n("mtWM"),w=n.n(_);s.a.use(p.a),s.a.use(c.a),w.a.defaults.timeout=1e4;var y=n("e3l2"),m=y.KTVmeBridge,x=n("fkXR"),b=x.push_event_app,C=n("PZHe"),S=n("CWSs");e.default={created:function(){document.title="签到送短信"},data:function(){return{token:"",secid:"",scrollTop:0,dayCount:0,dataList:[],totalCount:0,signed:!1,signStatu:0}},computed:{canNotSubmit:function(){return!1}},components:{XButton:r.a,Scroller:h.a},mounted:function(){this.getSignDataList(!0)},methods:{seeLast:function(){var t={action:"push_web",data:"https://w.url.cn/s/AbJVeiR",title:"签到榜单"};try{m.webToNativeRequest(t,"nativeHandler")}catch(t){}b({eventId:"event_sign_send_msg_last",param:[]})},signIn:function(){var t=this;return 0==this.signStatu?void this.$vux.toast.show({text:"活动未开始哦~",type:"text",width:"200px"}):2==this.signStatu?void this.$vux.toast.show({text:"活动已结束了哦~",type:"text",width:"200px"}):this.signed?void this.$vux.toast.show({text:"您今天已经签到过了哦~",type:"text",width:"200px"}):(this.$vux.loading.show({text:"正在签到"}),this.getUserToken().then(function(e){var n=e.token,o=e.secid;w.a.post(S.createAjaxUrl("biz/sign/in"),{},{headers:{"x-auth-token":n,"x-auth-secid":o}}).then(function(e){if(console.log(e),t.$vux.loading.hide(),0==e.data.ret&&e.data.data){t.$vux.toast.show({text:"签到成功，祝您生意兴隆～",type:"text",width:"200px"}),t.getSignDataList(!1)}else console.log(data.msg),t.$vux.toast.show({text:data.msg,type:"text",width:"200px"})}).catch(function(e){t.$vux.loading.hide()})}),void b({eventId:"event_sign_send_msg_submit",param:[]}))},onScroll:function(t){this.scrollTop=t},refreshScroll:function(){var t=this;this.$nextTick(function(){t.$refs.scroller.reset({top:t.scrollTop})})},getUserToken:function(){var t=this;return new i.a(function(e){g.a.isEmpty(t.token)||g.a.isEmpty(t.secid)?(console.log("request token and secid"),C.getCompanyInfo(function(n){var o=n.token,i=n.secid;t.token=o,t.secid=i,e({token:o,secid:i})})):(console.log("successed token and secid, get from cache"),e({token:t.token,secid:t.secid}))})},getSignDataList:function(t){var e=this;t&&this.$vux.loading.show({text:"加载中"});try{this.getUserToken().then(function(n){var o=n.token,i=n.secid;console.log("token="+o+" secid="+i),w.a.post(S.createAjaxUrl("biz/sign/page"),{},{headers:{"x-auth-token":o,"x-auth-secid":i}}).then(function(n){if(console.log(n),0==n.data.ret&&"Array"===g.a.type(n.data.data.detail)){e.totalCount=0;var o=n.data.data.detail.map(function(t){return e.totalCount+=t.smsCount,t});e.dataList=o,e.signed=n.data.data.signed,void 0!==n.data.data.signDayCount&&(e.dayCount=n.data.data.signDayCount),e.signStatu=n.data.data.status}e.refreshScroll(),t&&e.$vux.loading.hide()}).catch(function(n){console.log(n),t&&e.$vux.loading.hide()})})}catch(t){console.log(t),this.$vux.loading.hide()}}}}},jLwv:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},nEJf:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("I3G/"),i=n.n(o),a=n("v5o6"),s=n.n(a),u=n("/ocq"),r=n("M93x"),l=n.n(r),c=n("tavZ"),d=n.n(c),p=n("Lw6n");n.n(p);i.a.use(u.a);var f=[{path:"/",component:d.a}],h=new u.a({routes:f});s.a.attach(document.body),document.querySelector("body").addEventListener("touchstart",function(t){}),function(){function t(e){return e>=10||n[e]<n[e+1]&&t(e+1)}function e(t){return t>=19||n[t]>n[t+1]&&e(t+1)}var n=[];document.querySelector("body").addEventListener("touchstart",function(o){var i=o.touches[0].clientY;n.length>=20&&n.splice(0,1),n.push(i),n.length>=20&&t(0)&&e(10)&&(document.querySelector("#__vconsole").style.display="block")})}(),new i.a({router:h,render:function(t){return t(l.a)}}).$mount("#app-box")},nQpb:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("xNvf");e.default={name:"toast",mixins:[o.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}},qWxT:function(t,e){},rLAy:function(t,e,n){n("+KE2");var o=n("VU/8")(n("nQpb"),n("5mBz"),null,null);t.exports=o.exports},tavZ:function(t,e,n){n("8aB6");var o=n("VU/8")(n("gVo/"),n("DWri"),"data-v-e1253516",null);t.exports=o.exports},wndS:function(t,e,n){t.exports=n.p+"static/img/sign_top.c2e5ddc.jpg"},xOyr:function(t,e){},xzd6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{isHideConsole:!0}}}},ynfr:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"weui-btn",class:t.classes,style:t.buttonStyle,attrs:{disabled:t.disabled,type:t.actionType},on:{click:t.onClick}},[t.showLoading?n("i",{staticClass:"weui-loading"}):t._e(),t._v(" "),t._t("default",[t._v(t._s(t.text))])],2)},staticRenderFns:[]}},z80F:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:t.styles},[n("div",{staticClass:"xs-container"},[t._t("default"),t._v(" "),t._t("pulldown"),t._v(" "),t._t("pullup")],2)])},staticRenderFns:[]}}},["nEJf"]);