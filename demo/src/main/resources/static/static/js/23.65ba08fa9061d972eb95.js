webpackJsonp([23],{"6lla":function(t,e,n){t.exports=n.p+"static/img/open2.80ca9f2.png"},"7gT3":function(t,e,n){e=t.exports=n("FZ+f")(),e.push([t.i,"\n.box[data-v-afcff2ac] {\n  background: #f2f2f2;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n}\n.box .head[data-v-afcff2ac] {\n  width: 100%;\n}\n.box .list[data-v-afcff2ac] {\n  width: 100%;\n  position: relative;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n}\n.box .list .list-inner[data-v-afcff2ac] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.select-date[data-v-afcff2ac] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  background: #fff;\n}\n.show-time[data-v-afcff2ac] {\n  background: #f2f2f2;\n  padding: 0px 15px;\n  height: 45px;\n  line-height: 45px;\n  color: #898989;\n  font-size: 12px;\n  overflow: hidden;\n  border-bottom: 1px solid #e5e5e5;\n}\n",""])},JUeW:function(t,e,n){t.exports=n.p+"static/img/member.cc363f1.png"},Om10:function(t,e,n){t.exports=n.p+"static/img/lock2.7c4c690.png"},Sx9Z:function(t,e,n){var i=n("7gT3");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("0f13e5fa",i,!0)},"bjb+":function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box"},[i("div",{staticClass:"head"},[0!=t.details.length||t.netErr?t._e():i("div",{staticStyle:{"text-align":"center","font-size":"16px","margin-top":"50%",color:"#ccc"}},[t._v("暂无数据")]),t._v(" "),t.netErr?i("div",{staticStyle:{"text-align":"center","font-size":"16px","margin-top":"50%",color:"#ccc"},on:{click:function(e){t.getData()}}},[t._v("网络错误，请点击重试")]):t._e()]),t._v(" "),i("div",{staticClass:"list"},[i("div",{staticClass:"list-inner"},[i("scroller",{ref:"scroller",staticStyle:{height:"100%",width:"100%"},attrs:{"lock-x":""}},[i("div",{staticClass:"box2"},[t._l(t.details,function(e,a){return i("group",{key:a,staticClass:"store",staticStyle:{"margin-bottom":"15px"}},[i("div",{staticClass:"ui-border-b",staticStyle:{color:"#050505","font-size":"16px","line-height":"42px",height:"36px","padding-left":"15px"}},[t._v(t._s(e.companyName))]),t._v(" "),i("div",{staticStyle:{width:"100%"}},[i("table",{staticStyle:{width:"100%","font-size":"14px",color:"#58575d"},attrs:{cellspacing:"0",cellpadding:"0"}},t._l(e.user,function(a,o){return i("tr",{key:o,staticStyle:{"line-height":"36px"}},[i("td",{staticClass:"ui-border-b",staticStyle:{width:"35%","padding-left":"15px","text-align":"left","vertical-align":"middle"}},[i("img",{staticStyle:{width:"15px",height:"15px","vertical-align":"middle"},attrs:{src:n("JUeW")}}),t._v(" "),i("span",{staticStyle:{"vertical-align":"middle"}},[t._v(t._s(a.userName))])]),t._v(" "),i("td",{staticClass:"ui-border-b",staticStyle:{width:"30%","padding-left":"15px","text-align":"left"}},[t._v(t._s(a.title))]),t._v(" "),i("td",{staticClass:"ui-border-b",staticStyle:{width:"30%","padding-left":"15px","text-align":"left"}},[t._v(t._s(a.phone))]),t._v(" "),i("td",{staticClass:"ui-border-b",staticStyle:{"min-width":"45px","text-align":"right","padding-right":"15px"}},[1!=a.titleId?i("div",[1==a.status?i("a",{on:{click:function(n){t.updateStatus(a,e.companyId,a.userId,0)}}},[i("img",{staticStyle:{width:"25px",height:"25px","vertical-align":"middle"},attrs:{src:n("6lla")}})]):t._e(),t._v(" "),0==a.status?i("a",{on:{click:function(n){t.updateStatus(a,e.companyId,a.userId,1)}}},[i("img",{staticStyle:{width:"25px",height:"25px","vertical-align":"middle"},attrs:{src:n("Om10")}})]):t._e()]):i("div")])])}))])])}),t._v(" "),t.details.length>0?i("div",{staticStyle:{"padding-left":"15px","padding-right":"15px","font-size":"12px",color:"#666"}},[t._v("当前暂不支持新增和删除帐号，紧急情况可先禁用帐号后联系相关人员删除")]):t._e()],2)])],1)]),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("x-dialog",{attrs:{"hide-on-blur":!0,scroll:!1},model:{value:t.showDlg,callback:function(e){t.showDlg=e},expression:"showDlg"}},[i("div",[i("div",{staticStyle:{"margin-top":"20px","margin-bottom":"20px",height:"30px","line-height":"30px",color:"#424244"}},[t._v(t._s(t.msg))]),t._v(" "),i("div",{staticStyle:{"padding-left":"20px","padding-right":"20px","padding-bottom":"20px","padding-top":"5px"}},[i("div",{staticStyle:{height:"35px",float:"left","line-height":"35px","font-size":"16px",width:"48%",border:"1px solid rgb(46, 131, 244)",color:"rgb(46, 131, 244)","border-radius":"5px"},on:{click:function(e){t.showDlg=!1}}},[t._v("取消")]),t._v(" "),i("div",{staticStyle:{height:"35px",float:"right","line-height":"35px",color:"#fff","font-size":"16px",width:"48%",background:"rgb(46, 131, 244)","border-radius":"5px"},on:{click:function(e){t.okDlg()}}},[t._v("确认")]),t._v(" "),i("div",{staticStyle:{clear:"both"}})])])])],1)])},staticRenderFns:[]}},dOXa:function(t,e,n){n("Sx9Z");var i=n("VU/8")(n("lkV7"),n("bjb+"),"data-v-afcff2ac",null);t.exports=i.exports},fkXR:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"push_event",function(){return r}),n.d(e,"push_event_app",function(){return o});var i=n("e3l2"),a=i.KTVmeBridge,o=function(t){var e=t.eventId,n=t.param,i={action:"event",data:"0",eventId:e,param:{}};if(n.map(function(t,e){i.param["param"+(0==e?"":e)]=t}),console.log("事件统计数据：",i),void 0!==window.appVersion)try{a.webToNativeRequest(i,"nativeHandler")}catch(t){}},r=function(t){var e=t.category,n=t.action,i=void 0===n?"点击":n,a=t.label,o=void 0===a?void 0:a,r=t.value,s=void 0===r?0:r;"undefined"!=typeof _czc&&_czc.push(["_trackEvent",e,i,o,s,void 0])}},gsSi:function(t,e,n){var i=n("e3l2"),a=i.KTVmeBridge,o=n("tpu8"),r=o.memoize(function(){var t={action:"invalid_token",data:""};try{a.webToNativeRequest(t,"nativeHandler")}catch(t){}});t.exports=function(t,e,n){9e4==t.ret?r():n()}},lkV7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Xxa5"),a=n.n(i),o=n("exGp"),r=n.n(o),s=n("//Fk"),c=n.n(s),l=n("Gvdl"),d=(n.n(l),n("I3G/")),u=n.n(d),p=n("63CM"),f=n("/kga"),g=n.n(f),x=n("UNGY"),h=n.n(x),v=n("2sLL"),m=n.n(v),b=n("rLAy"),_=n.n(b),w=n("rHil"),y=n.n(w),k=n("1DHf"),S=n.n(k),U=n("odqc"),D=n.n(U),C=n("Znkm"),I=n.n(C),A=n("Msp2"),j=n.n(A),T=n("Bfwr"),z=(n.n(T),n("Y+qm")),R=n("YxJB"),$=n.n(R),E=n("3Lt7"),G=n.n(E),V=n("rGqP"),W=(n.n(V),n("S8Wg")),B=n.n(W),L=n("mtWM"),N=n.n(L),X=n("miWI"),q=(n("tpu8"),n("PZHe")),F=n("gsSi"),H=n("fkXR"),M=(H.push_event,H.push_event_app,n("e3l2"));M.KTVmeBridge;N.a.defaults.timeout=15e3,u.a.use(z.a),e.default={directives:{TransferDom:p.a},created:function(){this.getData()},methods:{okDlg:function(){this.dlgRes(!0),this.showDlg=!1},openDlg:function(t){var e=this;return this.msg=t,this.showDlg=!0,new c.a(function(t,n){e.dlgRes=t})},updateStatus:function(t,e,n,i){var o=this;return r()(a.a.mark(function r(){var s,c,l,d,u,p,f;return a.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(0!=i){a.next=6;break}return a.next=3,o.openDlg("是否禁用该用户？");case 3:s=a.sent,a.next=9;break;case 6:return a.next=8,o.openDlg("是否启用该用户？");case 8:s=a.sent;case 9:if(s){a.next=11;break}return a.abrupt("return");case 11:return o.$vux.loading.show({text:"加载中"}),a.prev=12,c=X.getAccountUpdateUrl(e,n,i),console.log("请求地址",c),a.next=17,q.asyncGetCompanyInfo();case 17:return l=a.sent,d=l.token,u=l.secid,a.next=22,N.a.post(c,{},{headers:{"x-auth-token":d,"x-auth-secid":u}});case 22:p=a.sent,f=p.data,o.$vux.loading.hide(),console.log("返回数据",f),0==f.ret&&(t.status=i),a.next=32;break;case 29:a.prev=29,a.t0=a.catch(12),o.$vux.loading.hide();case 32:case"end":return a.stop()}},r,o,[[12,29]])}))()},onRefreshUi:function(){var t=this;this.$nextTick(function(){t.$refs.scroller.reset({top:0})})},getData:function(){var t=this;this.$vux.loading.show({text:"加载中"}),q.getCompanyInfo(function(e){var n=e.token,i=e.secid,a="";a=X.getCompanyListUrl(),t.total=-1,t.details=[],t.netErr=!1,N.a.post(a,{},{headers:{"x-auth-token":n,"x-auth-secid":i}}).then(function(e){var n=e.data;t.$vux.loading.hide(),F(n,{},function(){console.log(n),0==n.ret&&(t.details=n.data,console.log(t.details)),t.onRefreshUi()})}).catch(function(e){t.$vux.loading.hide(),t.netErr=!0,console.log(e),t.onRefreshUi()})})}},components:{Datetime:h.a,XButton:m.a,Toast:_.a,Tab:D.a,TabItem:I.a,Actionsheet:j.a,Flexbox:$.a,FlexboxItem:G.a,Scroller:B.a,Group:y.a,Cell:S.a,XDialog:g.a},data:function(){return document.title="帐号管理",{msg:"",netErr:!1,total:-1,details:{},showDlg:!1,dlgRes:null}}}},miWI:function(t,e,n){var i=n("CWSs");t.exports={getCompanyListUrl:function(){return i.createAjaxUrl("account/company_list")},getAccountUpdateUrl:function(t,e,n){return i.createAjaxUrl("account/update?companyId="+t+"&userId="+e+"&status="+n)},getAccountUserUrl:function(){return i.createAjaxUrl("account/user_list")},addAccountUserUrl:function(){return i.createAjaxUrl("account/new")},updateAccountUserUrl:function(){return i.createAjaxUrl("account/update_user")},updateAccountStatesUrl:function(){return i.createAjaxUrl("account/update_status")}}}});