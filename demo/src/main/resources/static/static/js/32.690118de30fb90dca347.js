webpackJsonp([32],{"3M7t":function(t,e,n){e=t.exports=n("FZ+f")(),e.push([t.i,"\n.vux-datetime[data-v-2fb07bb8] {\n  background: #fff;\n  color: #000000;\n}\n#box[data-v-2fb07bb8] {\n  width: 100%;\n}\n#box .vux-tap-active[data-v-2fb07bb8] {\n  color: #000000;\n}\n#box .font-color[data-v-2fb07bb8] {\n  color: yellow;\n}\n#box .mes[data-v-2fb07bb8] {\n  font-size: 12px;\n  padding: 13px 10px;\n}\n#box .confirm[data-v-2fb07bb8] {\n  width: 100%;\n  height: 45px;\n  text-align: center;\n  line-height: 45px;\n  background: #ffffff;\n  color: #f43530;\n}\n#box .dialogA p[data-v-2fb07bb8] {\n  font-size: 20px;\n  text-align: center;\n  padding: 20px;\n}\n#box .dialogA .dialogBottom[data-v-2fb07bb8] {\n  padding: 15px;\n  padding-top: 5px;\n}\n#box .dialogA .dialogBottom .cancel[data-v-2fb07bb8] {\n  height: 35px;\n  float: left;\n  line-height: 35px;\n  font-size: 16px;\n  width: 48%;\n  background: #ffb85b;\n  color: #fff;\n  border-radius: 5px;\n}\n#box .dialogA .dialogBottom .ok[data-v-2fb07bb8] {\n  height: 35px;\n  float: right;\n  line-height: 35px;\n  color: #fff;\n  font-size: 16px;\n  width: 48%;\n  background: #2e83f4;\n  border-radius: 5px;\n}\n",""])},W4hs:function(t,e,n){var a=n("CWSs");t.exports={getUpdateUserStatusUrl:function(){return a.createAjaxUrl("userStatus/updateDate")},getBattlereportIsExistUrl:function(){return a.createAjaxUrl("biz/user/data/exist")},getDataRemoveUrl:function(){return a.createAjaxUrl("biz/user/data/remove")},getDataUploadUrl:function(){return a.createAjaxUrl("biz/user/data/load")}}},bo5a:function(t,e,n){var a=n("3M7t");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("e065aa62",a,!0)},dMH1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("I3G/"),o=n.n(a),i=n("mtWM"),s=n.n(i),l=n("UNGY"),u=n.n(l),c=n("rLAy"),r=n.n(c),d=n("1DHf"),f=n.n(d),v=n("rHil"),h=n.n(v),x=n("3BeM"),g=n("/kga"),b=n.n(g),m=n("Msp2"),p=n.n(m),D=n("Y+qm"),k=n("W4hs");o.a.use(x.a),o.a.use(D.a);var w=n("PZHe"),y=n("e3l2");y.KTVmeBridge;e.default={components:{Datetime:u.a,Toast:r.a,Cell:f.a,Group:h.a,XDialog:b.a,Actionsheet:p.a},created:function(){var t=new Date,e=new Date(t.getTime()-864e5),n=e.getFullYear(),a=e.getMonth()+1,o=e.getDate();a<10&&(a="0"+a),o<10&&(o="0"+o);var i=n+"-"+a+"-"+o;this.lastYear=n-1,console.log("去年:"+this.lastYear),this.value1=i,this.value2=i,this.yesterday=i},data:function(){return{value1:"",value2:"",yesterday:"",lastYear:2018,isLoading:!1,showDeleteDialog:!1,showAction:!1,idxMenu:0,menus:[{key:"menu_upload",name:"数据上传",prompt:"如出现数据不一致或某日没有数据显示等情况，可使用数据同步。选择时间后，点击【确认执行】，等待30分钟后，数据即可显示；"},{key:"menu_delete",name:"数据删除",prompt:"数据删除请确认线下系统已经删除,否则会自动同步数据"}]}},computed:{actionsheetMenus:function(){var t={};return this.menus.forEach(function(e,n,a){t[e.key]=e.name}),t}},methods:{onClickMenu:function(t){this.showAction=!0},selectedMenu:function(t,e){console.log("选择菜单: "+t+" - "+e);var n=-1;this.menus.forEach(function(e,a){if(t==e.key)return n=a,!1}),console.log("选择的操作:"+n),-1!=n&&(this.idxMenu=n)},onSelectDate:function(){if(new Date(this.value1)>new Date(this.value2))return void this.$vux.toast.show({text:"开始时间必须早于结束时间",type:"text"})},onConfirm:function(){if(new Date(this.value1)>new Date(this.value2))return void this.$vux.toast.show({text:"开始时间必须早于结束时间",type:"text"});"menu_delete"==this.menus[this.idxMenu].key?this.showDeleteDialog=!0:this.submitUpload()},submitDelete:function(){var t=this;if(this.showDeleteDialog=!1,this.isLoading)return void console.log("正在请求中");this.$vux.loading.show({text:"正在加载中..."}),this.isLoading=!0,w.getCompanyInfo(function(e){var n=e.token,a=e.secid,o=k.getDataRemoveUrl(),i=t.value1,l=t.value2;s.a.post(o,{beginDate:i,endDate:l},{headers:{"x-auth-token":n,"x-auth-secid":a}}).then(function(e){var n=e.data;0==n.ret?t.$vux.toast.text(n.msg||"数据删除成功~","middle"):t.$vux.toast.text(n.msg||"数据删除失败~","middle")}).catch(function(e){t.$vux.toast.text("服务偷懒了,请稍后再试~","middle")}).finally(function(){t.$vux.loading.hide(),t.isLoading=!1})})},submitUpload:function(){var t=this;if(this.isLoading)return void console.log("正在请求中");this.$vux.loading.show({text:"正在加载中..."}),this.isLoading=!0,w.getCompanyInfo(function(e){var n=e.token,a=e.secid,o=k.getDataUploadUrl(),i=t.value1,l=t.value2;s.a.post(o,{beginDate:i,endDate:l},{headers:{"x-auth-token":n,"x-auth-secid":a}}).then(function(e){var n=e.data;0==n.ret?t.$vux.toast.text(n.msg||"数据上传处理操作~","middle"):t.$vux.toast.text(n.msg||"数据上传处理失败~","middle")}).catch(function(e){t.$vux.toast.text("服务偷懒了,请稍后再试~","middle")}).finally(function(){t.$vux.loading.hide(),t.isLoading=!1})})}}}},"eia/":function(t,e,n){n("bo5a");var a=n("VU/8")(n("dMH1"),n("qjhi"),"data-v-2fb07bb8",null);t.exports=a.exports},qjhi:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"box"}},[n("group",[n("cell",{staticClass:"cell",attrs:{title:"数据操作",value:t.menus[t.idxMenu].name,"is-link":!0},nativeOn:{click:function(e){return t.onClickMenu(e)}}}),t._v(" "),n("datetime",{attrs:{"min-year":t.lastYear,"clear-text":"开始时间",title:"开始时间"},on:{"on-confirm":function(e){t.onSelectDate(0)}},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),t._v(" "),n("datetime",{attrs:{"end-date":t.yesterday,"clear-text":"结束时间",title:"结束时间"},on:{"on-confirm":function(e){t.onSelectDate(1)}},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1),t._v(" "),n("p",{staticClass:"mes"},[t._v(t._s(t.menus[t.idxMenu].prompt))]),t._v(" "),n("p",{staticClass:"confirm",on:{click:t.onConfirm}},[t._v("确认执行")]),t._v(" "),n("actionsheet",{attrs:{menus:t.actionsheetMenus,"show-cancel":!0,"close-on-clicking-mask":!0},on:{"on-click-menu":t.selectedMenu},model:{value:t.showAction,callback:function(e){t.showAction=e},expression:"showAction"}}),t._v(" "),n("x-dialog",{staticClass:"dialogA",attrs:{"hide-on-blur":!0},model:{value:t.showDeleteDialog,callback:function(e){t.showDeleteDialog=e},expression:"showDeleteDialog"}},[n("p",{staticClass:"msg"},[t._v("确定删除报表吗?")]),t._v(" "),n("div",{staticClass:"dialogBottom"},[n("div",{staticClass:"cancel",on:{click:function(e){t.showDeleteDialog=!1}}},[t._v("取消")]),t._v(" "),n("div",{staticClass:"ok",on:{click:t.submitDelete}},[t._v("确认")]),t._v(" "),n("div",{staticStyle:{clear:"both"}})])])],1)},staticRenderFns:[]}}});