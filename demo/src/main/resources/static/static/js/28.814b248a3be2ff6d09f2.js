webpackJsonp([28],{E70p:function(t,e,o){e=t.exports=o("FZ+f")(),e.push([t.i,"\n#discount[data-v-8bea61aa] {\n  overflow: hidden;\n}\n#discount .weui-cell[data-v-8bea61aa] {\n  font-size: 16px;\n}\n#discount .btn[data-v-8bea61aa] {\n  width: 90%;\n  margin-top: 40px;\n  background: #2780f8;\n  color: #fff;\n  letter-spacing: 5px;\n}\n#discount .error[data-v-8bea61aa] {\n  color: #999;\n  text-align: center;\n  padding-top: 50%;\n}\n@media screen and (mix-width: 380px) {\n#discount .weui-cell[data-v-8bea61aa] {\n    padding: 15px 20px;\n}\n}\n",""])},FdDE:function(t,e,o){var n=o("E70p");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o("rjj0")("86977572",n,!0)},PtV2:function(t,e,o){var n=o("CWSs");t.exports={cancelBookingUrl3PX:function(){return n.createAjaxUrl("/biz/3px/cancel_booking")},cancelBookingUrl:function(){return n.createAjaxUrl("/biz/3p/cancel_booking")},get3pLogUrl:function(){return n.createAjaxUrl("biz/3p_log/list")},getRoomPresentSendUrl:function(){return n.createAjaxUrl("biz/3px/present/wine")},getRoomPresentLimitUrl:function(){return n.createAjaxUrl("biz/3px/present/limit")},getGoodsDetailUrl:function(){return n.createAjaxUrl("biz/3p/present/set")},getGoodsListUrl:function(){return n.createAjaxUrl("biz/3px/present/menu")},getRoomOrderUrl:function(){return n.createAjaxUrl("biz/3px/booking")},getRoomDiscountUrl:function(){return n.createAjaxUrl("biz/3px/discount")},getRoomDiscountLimitUrl:function(){return n.createAjaxUrl("biz/3px/discount/limit")},getRoomListUrl:function(){return n.createAjaxUrl("rooms/states")},getRoomListUrl2:function(){return n.createAjaxUrl("biz3/box_states")},getRoomInfoUrl:function(t){return""==t?n.createAjaxUrl("biz3/box_info?companycode="+t):n.createAjaxUrl("biz3/jumpin_box?companycode="+t)},getRoomMemberInfoUrl:function(){return n.createAjaxUrl("nbs/member_info")},getRoomSendWish:function(){return n.createAjaxUrl("biz/wish/info")},getSendWishPageUrl:function(t){return t?"http://www.ktvme.com/bless/merchants":"http://192.168.97.106/bless/merchants?kpm_channel=01230123"},roomStaetConvert:function(t){var e={1:[1,"空闲"],2:[2,"结帐"],7:[2,"结帐"],3:[3,"预订"],4:[4,"锁定"],14:[4,"锁定"],5:[5,"使用"],10:[10,"带客"],12:[12,"故障"],16:[16,"买钟"],17:[17,"清洁"],22:[22,"测机"]};return void 0==e[t]?[0,"非开房"]:e[t]},colorMap:{0:"#000",1:"#7ecae4",7:"#57bc54",2:"#57bc54",4:"#2882d8",5:"#dc5563",3:"#9958b4",6:"#dc5563",8:"#dc5563",9:"#dc5563",10:"#e2551d",12:"#54575d",16:"#fea531",17:"#22BCBC",18:"#dc5563",19:"#dc5563",22:"#AD1488"}}},c2Kd:function(t,e,o){o("FdDE");var n=o("VU/8")(o("flSr"),o("ro/A"),"data-v-8bea61aa",null);t.exports=n.exports},flSr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("mvHQ"),a=o.n(n),i=o("I3G/"),r=o.n(i),s=o("mtWM"),c=o.n(s),l=o("1DHf"),u=o.n(l),d=o("rHil"),m=o.n(d),g=o("pDNl"),p=o.n(g),f=o("7Ah8"),h=o.n(f),v=o("UNGY"),x=o.n(v),b=o("2sLL"),R=o.n(b),S=o("rLAy"),U=o.n(S),D=o("Y+qm"),k=o("PtV2"),j=o("PZHe"),w=o("gsSi"),_=o("e3l2"),$=_.KTVmeBridge;r.a.use(D.a),e.default={components:{Group:m.a,Cell:u.a,XInput:p.a,PopupPicker:h.a,Datetime:x.a,XButton:R.a,Toast:U.a,LoadingPlugin:D.a},mounted:function(){this.init()},computed:{RoomrateList:function(){for(var t=[[]],e=this.RoomMin;e<=100;e++)t[0].push(e+"%");return t},GoodsrateList:function(){for(var t=[[]],e=this.GoodsMin;e<=100;e++)t[0].push(e+"%");return t}},data:function(){return{RoomMin:0,GoodsMin:0,onFetching:!1,currentRoomState:{},limitData:{},show:!1,mes:"",isShow:!1,errorMes:"",userObj:{}}},methods:{init:function(){localStorage.getItem("currentRoomState")&&(this.currentRoomState=JSON.parse(localStorage.getItem("currentRoomState"))),localStorage.getItem("userObjCopy")&&(this.userObj=JSON.parse(localStorage.getItem("userObjCopy"))),document.title=this.currentRoomState.roomName+"包厢打折",this.getData()},goBack:function(){history.back()},getData:function(){var t=this;this.$vux.loading.show({text:"加载中"}),j.getCompanyInfo(function(e){var o=e.token,n=e.secid,i=k.getRoomDiscountLimitUrl(),r=t.currentRoomState.roomid,s=t.currentRoomState.opencheckoutid,l=t.userObj.user,u=t.userObj.pass;console.log(l+"---"+u),console.log("包厢ID"+r),$.encrypt({data:a()({StaffCode:l,checkoutID:s,password:u,roomID:r}),sign:"1",cb:function(e){0==e.code?(console.log("加密结果a:"+e.data),c.a.post(i,{data:e.data},{headers:{"x-auth-token":o,"x-auth-secid":n}}).then(function(e){var o=e.data;w(o,{},function(){if(t.$vux.loading.hide(),console.log("接收打折限额数据：",o),0==o.ret){console.log("显示 打折页面"),t.isShow=!0,t.limitData=o.data;var e=t.limitData.roomdiscountrate+"%",n=t.limitData.goodsdiscountrate+"%";t.$store.state.RoomRate=e.split(),t.$store.state.GoodsRate=n.split(),t.GoodsMin=t.limitData.goodsmindiscountrate,t.RoomMin=t.limitData.roommindiscountrate}else t.isShow=!1,t.errorMes=o.msg})}).catch(function(e){t.$vux.loading.hide(),t.errorMes="服务出现小问题,请稍后再试!!",t.isShow=!1,console.log("服务出现小问题,请稍后再试!catch")})):(t.$vux.loading.hide(),t.isShow=!1,console.log("加密失败:"+e.msg))}})})},toDiscount:function(){var t=this;this.onFetching||(this.onFetching=!0,console.log(123),this.$vux.loading.show({text:"加载中"}),j.getCompanyInfo(function(e){var o=e.token,n=e.secid,i=k.getRoomDiscountUrl(),r=t.currentRoomState.roomid,s=t.currentRoomState.roomName,l=t.currentRoomState.opencheckoutid,u=t.$store.state.GoodsRate.join(),d=t.$store.state.RoomRate.join(),m=u.slice(0,u.length-1),g=d.slice(0,d.length-1),p=(t.$store.state.timestamp,t.userObj.user),f=t.userObj.pass;console.log("商品打折:"+m),console.log("房费打折:"+g),$.encrypt({data:a()({StaffCode:p,checkoutID:l,goodsDiscountRate:m,password:f,roomDiscountRate:g,roomID:r,roomName:s}),sign:"1",cb:function(e){0==e.code?(console.log("加密结果:"+e.data),c.a.post(i,{data:e.data},{headers:{"x-auth-token":o,"x-auth-secid":n}}).then(function(e){var o=e.data;w(o,{},function(){t.$vux.loading.hide(),console.log("接收数据：",o),0==o.ret?(localStorage.setItem("isSend",!0),t.show=!0,t.mes="打折成功",setTimeout(function(){t.goBack()},2e3)):(t.show=!0,t.mes=o.msg,setTimeout(function(){t.goBack()},2e3))})}).catch(function(e){t.$vux.loading.hide(),t.mes="服务出现小问题,请稍后再试!",setTimeout(function(){t.goBack()},2e3)})):(t.$vux.loading.hide(),console.log("加密失败:"+e.msg))}})}),setTimeout(function(){t.onFetching=!1},1e3))}}}},gsSi:function(t,e,o){var n=o("e3l2"),a=n.KTVmeBridge,i=o("tpu8"),r=i.memoize(function(){var t={action:"invalid_token",data:""};try{a.webToNativeRequest(t,"nativeHandler")}catch(t){}});t.exports=function(t,e,o){9e4==t.ret?r():o()}},"ro/A":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"discount"}},[t.isShow?t._e():o("p",{staticClass:"error",on:{click:function(e){t.getData()}}},[t._v(t._s(t.errorMes))]),t._v(" "),t.isShow?o("div",[o("group",{attrs:{title:"打折信息"}},[o("cell",{attrs:{title:"打折人",value:t.limitData.discountman}}),t._v(" "),o("cell",{attrs:{title:"优惠额度",value:t.limitData.staffdiscountlimit}}),t._v(" "),o("cell",{attrs:{title:"可用额度",value:t.limitData.staffavailablelimit}})],1),t._v(" "),o("group",{attrs:{title:"房费打折"}},[o("cell",{attrs:{title:"最低折率",value:t.limitData.roommindiscountrate+"%"}}),t._v(" "),o("popup-picker",{attrs:{title:"房费折率",data:t.RoomrateList},model:{value:t.$store.state.RoomRate,callback:function(e){t.$set(t.$store.state,"RoomRate",e)},expression:"$store.state.RoomRate"}})],1),t._v(" "),o("group",{attrs:{title:"商品打折"}},[o("cell",{attrs:{title:"最低折率",value:t.limitData.goodsmindiscountrate+"%"}}),t._v(" "),o("popup-picker",{attrs:{title:"商品折率",data:t.GoodsrateList},model:{value:t.$store.state.GoodsRate,callback:function(e){t.$set(t.$store.state,"GoodsRate",e)},expression:"$store.state.GoodsRate"}})],1),t._v(" "),o("toast",{attrs:{type:"text"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t._v(t._s(t.mes))]),t._v(" "),o("x-button",{staticClass:"btn",nativeOn:{click:function(e){return t.toDiscount(e)}}},[t._v("一键打折")])],1):t._e()])},staticRenderFns:[]}}});