webpackJsonp([1,2,4,5,6],{"9djp":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("IHPB"),o=n.n(r),a=(n("ZLEe"),n("aA9S")),i=n.n(a),s=n("3cXf"),u=n.n(s),c=n("aozt"),p=n.n(c);var d=["https://www.easy-mock.com/mock/5c6ead0e37202863fa565925"],l=function(t,e){return function(n){return(n=n||{}).opts&&n.opts.data&&n.opts.data.experiment_id&&(n.opts.data.hash=CryptoJS.AES.encrypt(u()(n.opts.data),key).toString()),p()(i()({},{url:n.url,baseURL:t,method:n.method,withCredentials:!0,Authorization:e},n.opts)).then(function(t){return t.data})}}.apply(void 0,o()(d));function v(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"get",url:"/api/v1/page/detail",opts:t})}function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"get",url:"/api/v1/page/list",opts:t})}function m(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"get",url:"/api/v1/component/detail",opts:t})}function g(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"post",url:"/api/v1/page/operate",opts:t})}function _(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"get",url:"/api/v1/tpl/detail",opts:t})}function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"get",url:"/api/v1/tpl/list",opts:t})}function C(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"post",url:"/api/login",opts:t})}function y(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"get",url:"/ssoagentlogin/logoutAndGetLoginUrl",opts:t})}function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"get",url:"/api/getUserInfo",opts:t})}function E(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"post",url:"/api/v1/image/upload",opts:t})}function w(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"get",url:"/api/v1/page/releaseResult",opts:t})}function I(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"get",url:"/api/v1/page/delete",opts:t})}function k(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"post",url:"/api/v1/page/clone",opts:t})}function S(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"post",url:"/api/v1/page/forceSSR",opts:t})}function P(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"post",url:"/api/v1/page/update",opts:t})}function U(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"post",url:"/api/v1/channel/addRecord",opts:t})}function x(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"get",url:"/api/v1/channel/list",opts:t})}function A(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"post",url:"/api/v1/channel/delete",opts:t})}function O(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"get",url:"/api/v2/view/list",opts:t})}function j(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"get",url:"/api/v2/view/detail",opts:t})}function L(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"get",url:"/api/v1/page/allList",opts:t})}function R(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"post",url:"/api/v1/admin/add",opts:t})}function M(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"get",url:"/api/v1/admin/list",opts:t})}function N(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"get",url:"/api/v1/admin/delete",opts:t})}function J(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"get",url:"/api/v1/analysis/list",opts:t})}function Z(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"post",url:"/api/v1/group/add",opts:t})}function $(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"get",url:"/api/v1/group/list",opts:t})}function z(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"post",url:"/api/v1/group/update",opts:t})}function K(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"get",url:"/api/v1/group/groupPages",opts:t})}function B(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"post",url:"/api/v1/group/delete",opts:t})}function q(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"get",url:"/api/v1/es/list",opts:t})}function X(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"get",url:"/api/v1/es/log",opts:t})}function F(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"get",url:"/api/v2/compadmin/complist",opts:t})}function V(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"post",url:"/api/v2/compadmin/adddependence",opts:t})}function G(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"get",url:"/api/v2/compadmin/getdependence",opts:t})}function T(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"post",url:"/api/v2/compadmin/updatecompdependence",opts:t})}function W(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"get",url:"/api/v2/compadmin/templatelist",opts:t})}function H(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({method:"post",url:"/api/v2/compadmin/updatetemplatecomp",opts:t})}n.d(e,"api_v1_page_clone_post",function(){return k}),n.d(e,"rose_page_detail_get",function(){return v}),n.d(e,"rose_page_list_get",function(){return f}),n.d(e,"rose_component_detail_get",function(){return m}),n.d(e,"rose_page_operate_post",function(){return g}),n.d(e,"rose_tpl_detail_get",function(){return _}),n.d(e,"rose_tpl_list_get",function(){return h}),n.d(e,"api_v1_login_post",function(){return C}),n.d(e,"api_v1_image_upload_post",function(){return E}),n.d(e,"api_v1_page_release_result_get",function(){return w}),n.d(e,"api_v1_page_delete_get",function(){return I}),n.d(e,"api_v1_channel_addRecord_post",function(){return U}),n.d(e,"api_v1_channel_list_get",function(){return x}),n.d(e,"api_v1_channel_delete_post",function(){return A}),n.d(e,"api_v2_view_list_get",function(){return O}),n.d(e,"api_v2_view_detail_get",function(){return j}),n.d(e,"api_v1_page_allList_get",function(){return L}),n.d(e,"api_v1_admin_add_post",function(){return R}),n.d(e,"api_v1_admin_list_get",function(){return M}),n.d(e,"api_v1_admin_delete_get",function(){return N}),n.d(e,"api_v1_analysis_list_get",function(){return J}),n.d(e,"api_v1_group_add_post",function(){return Z}),n.d(e,"api_v1_group_list_get",function(){return $}),n.d(e,"api_v1_es_list_get",function(){return q}),n.d(e,"api_v1_es_log_get",function(){return X}),n.d(e,"api_v1_group_update_post",function(){return z}),n.d(e,"api_v1_group_groupPages_get",function(){return K}),n.d(e,"api_v1_group_delete_post",function(){return B}),n.d(e,"api_v1_page_update_post",function(){return P}),n.d(e,"api_v1_getUserInfo_get",function(){return b}),n.d(e,"api_v1_logout_post",function(){return y}),n.d(e,"api_v2_compadmin_complist",function(){return F}),n.d(e,"api_v2_compadmin_adddependence",function(){return V}),n.d(e,"api_v2_compadmin_getdependence",function(){return G}),n.d(e,"api_v2_compadmin_updatecompdependence",function(){return T}),n.d(e,"api_v2_compadmin_templatelist",function(){return W}),n.d(e,"api_v2_compadmin_updatetemplatecomp",function(){return H}),n.d(e,"api_v1_page_forceSSR",function(){return S})},"A+vO":function(t,e){},Grvf:function(t,e){},"K/ZM":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("KQ6f"),o=n("lC5x"),a=n.n(o),i=n("J0Oq"),s=n.n(i),u=n("RgZf"),c=n("4YfN"),p=n.n(c),d=n("R4Sj"),l=n("hRKE"),v=n.n(l),f=n("3cXf"),m=n.n(f),g=[],_={render:function(t){var e=this;return this.editor=this.components[this.currentEditor].editor,t("Collapse",{props:{value:"1"}},this.editor.map(function(n,r){return n.rely&&n.rely.value!==e.components[e.currentEditor].data[n.rely.key]?t("i"):(g=[],e.rootConfig=e.components[e.currentEditor].data,t("Panel",{props:{name:""+(r+1)}},[n.blockName,t("div",{slot:"content"},e.getChildNodes(t,e.components[e.currentEditor].data,n.settings))]))}))},data:function(){return{editor:"",rootConfig:""}},methods:p()({},Object(d.b)(["updateSortUIProps"]),{createLabelElement:function(t){return t.createElement("span",{class:"label",domProps:{innerHTML:(t.require?"<i>* </i>":"")+t.desc}})},createAlignElement:function(t){return t.createElement("div",{class:"option"},["left","center","right"].map(function(e){return t.createElement("i",{class:["iconfont","icon-"+e],on:{click:function(){t.bind[t.key]=e}}})}))},createSelectElement:function(t){var e=t.bind[t.key]instanceof Array;return t.createElement("i-select",{class:"option",props:{value:e?m()(t.bind[t.key]):t.bind[t.key]},on:{input:function(n){t.bind[t.key]=e?JSON.parse(n):n}}},t.config.options.map(function(n){return t.createElement("i-option",{props:{value:e?m()(n.value):n.value}},n.label)}))},createBasicElement:function(t){return t.createElement(t.el,{class:"option",props:p()({value:t.config.needEscape?unescape(t.bind[t.key]):t.bind[t.key]},t.config.props),on:{input:function(e){t.bind[t.key]=t.config.needEscape?escape(e):e}}})},createVueEditor:function(t){return t.createElement("div",[t.createElement("vue-editor",{class:"option",props:{editorToolbar:t.config.toolBar,value:unescape(t.bind[t.key])},on:{input:function(e){t.bind[t.key]=escape(e)}}})])},createEditorElement:function(t){var e=null;switch(t.config.type){case"align":e=this.createAlignElement(t);break;case"i-select":e=this.createSelectElement(t);break;case"vue-editor":e=this.createVueEditor(t);break;default:e=this.createBasicElement(t)}return e},getChildNodes:function(t,e,n,r){var o=this,a=void 0,i=function(i){a=n[""+(r&&isNaN(r)?r+"."+i:i)];var s=e[i]instanceof Array&&"object"!==e[i][0];if(e.hasOwnProperty(i)&&("object"!==v()(e[i])||s)&&a){var u;if((u=a.rely)&&o.rootConfig[u.key]===u.value)return;if(a.fork){for(var c=a.fork.key.split("."),p=0,d=o.rootConfig[c[p]];p<c.length-1;)d=d[c[++p]];if(d!==a.fork.value)return}g.push(t("div",{class:"form-item"},[o.createLabelElement({createElement:t,require:a.require,desc:a.label}),o.createEditorElement.call(o,{createElement:t,el:a.type,bind:e,key:i,config:a})]))}else"object"===v()(e[i])&&o.getChildNodes(t,e[i],n,i)};if(!(e instanceof Array)){for(var s in e)i(s);return g}e.forEach(function(t,e){i(e)})}}),computed:p()({},Object(d.c)(["currentEditor","components","sortUI"])),watch:{components:{deep:!0,handler:function(t){this.updateSortUIProps({key:"components",value:t})}}}};var h=n("C7Lr")(_,null,!1,function(t){n("aX3u")},null,null).exports,C={data:function(){return{commonColors:{hex:"#fe2f41"}}},methods:p()({},Object(d.b)(["updateSortUIProps"])),computed:p()({},Object(d.c)(["sortUI","currentEditor"])),components:{editor:h}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"left-menu"},[n("div",{staticClass:"common-editor"},[n("Collapse",{attrs:{value:"1"}},[n("Panel",{attrs:{name:"1"}},[t._v("\n        基础布局设置\n        "),n("div",{attrs:{slot:"content"},slot:"content"},[n("div",{staticClass:"form-item"},[n("span",{staticClass:"label"},[n("i",[t._v("* ")]),t._v("项目title：")]),t._v(" "),n("i-input",{staticClass:"option",attrs:{value:t.sortUI.title},on:{input:function(e){return t.updateSortUIProps({key:"title",value:e})}}})],1),t._v(" "),n("div",{staticClass:"form-item"},[n("span",{staticClass:"label"},[t._v("设置背景色：")]),t._v(" "),n("i-input",{staticClass:"option",attrs:{value:t.sortUI.bgColor},on:{input:function(e){return t.updateSortUIProps({key:"bgColor",value:e})}}})],1)])])],1)],1),t._v(" "),n("div",{staticClass:"left-editor-container"},[-1!==t.currentEditor?n("editor"):t._e()],1)])},staticRenderFns:[]};var b=n("C7Lr")(C,y,!1,function(t){n("A+vO")},null,null).exports,E={data:function(){return{viewId:"",releaseStatus:0,previewImg:"",frameSrc:""}},created:function(){this.frameSrc="preview/index",window.addEventListener("message",function(t){t.source!==window&&t.data})},operateMsg:function(t,e,n){var r="",o="";switch(t){case 1:r="保存成功",o=n||"保存失败";break;case 3:r="测试地址："+("https://web.u51.com/luban-project-"+this.pageId+"/index.html"),o=n||"发布测试失败";break;case 4:r="线上地址："+("https://web.u51.com/luban-project-"+this.pageId+"/index.html"),o=n||"发布线上失败"}this.$notice[e]({type:e,description:"success"===e?r:o,message:"success"===e?"成功":"错误",duration:30})},operate:function(t,e){var n=this;return s()(a.a.mark(function r(){var o;return a.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n.$emit("loading",e),o={type:t,previewImg:n.previewImg,templateId:n.templateId,templateConfig:n.sortUI},r.prev=2,r.next=5,lubanAPI.luban_page_operate_post({data:o});case 5:n.$emit("loaded"),n.operateMsg(t,"success"),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(2),n.$emit("loaded"),n.operateMsg(t,"error",r.t0.response?r.t0.response.data.message:"");case 13:n.saveConfig();case 14:case"end":return r.stop()}},r,n,[[2,9]])}))()}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"editor-container"},[e("div",{staticClass:"main-container"},[e("div",{staticClass:"control-container"}),this._v(" "),e("iframe",{staticClass:"pre-view",attrs:{id:"frame",frameborder:"0",src:this.frameSrc}})])])},staticRenderFns:[]};var I=n("C7Lr")(E,w,!1,function(t){n("lK9B")},null,null).exports,k={props:{canUse:{type:Array,default:[]},status:{type:Number}},methods:p()({},Object(d.b)(["addComponent"]),{addCp:function(t){this.addComponent(JSON.parse(m()(t)))}}),computed:p()({},Object(d.c)(["components","state"]))},S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right-menu"},[n("div",{staticClass:"basic-ui"},[n("Collapse",{attrs:{value:"0"}},t._l(t.canUse,function(e,r){return n("Panel",{key:r,attrs:{name:""+r}},[t._v("\n        "+t._s(e.name)+"\n        "),n("div",{attrs:{slot:"content"},slot:"content"},t._l(e.components,function(r){return n("div",{staticClass:"app-aside-list",on:{click:function(e){return t.addCp(r)}}},["system"!==e.type?n("img",{staticClass:"short-cut",attrs:{src:r.src}}):t._e(),t._v(" "),n("span",{staticClass:"aside-item-ele"},[t._v(t._s(r.description))])])}),0)])}),1)],1)])},staticRenderFns:[]};var P={name:"App",components:{leftMenu:b,mainContainer:I,rightMenu:n("C7Lr")(k,S,!1,function(t){n("Zx8h")},null,null).exports},data:function(){return{canUse:[]}},mounted:function(){var t=this;return s()(a.a.mark(function e(){var n,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.roseApi.rose_tpl_detail_get();case 2:n=e.sent,r=n.data,t.canUse=r.canUse;case 5:case"end":return e.stop()}},e,t)}))()}},U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pg-index"},[e("left-menu"),this._v(" "),e("main-container"),this._v(" "),e("right-menu",{attrs:{canUse:this.canUse}})],1)},staticRenderFns:[]};var x=n("C7Lr")(P,U,!1,function(t){n("wtez")},null,null).exports,A=n("hVI7"),O=n("rMOL"),j=n.n(O);n("Grvf");r.default.config.productionTip=!1,r.default.use(j.a),new r.default({el:"#app",store:A.default,components:{App:x},template:"<App/>"})},RgZf:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("9djp");n.d(e,"roseApi",function(){return r})},Zx8h:function(t,e){},aX3u:function(t,e){},hVI7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("R4Sj"),o=n("3cXf"),a=n.n(o),i={setCurrentPage:function(t,e){t.currentPage=e,t.currentEditor=-1},saveConfig:function(t,e){t.save=e},currentEditor:function(t,e){t.currentEditor=e},addComponent:function(t,e){t.currentEditor>=0?t.sortUI[t.currentPage].components.splice(t.currentEditor+1,0,JSON.parse(a()(e))):t.sortUI[t.currentPage].components.push(JSON.parse(a()(e))),t.currentEditor=t.currentEditor>=0?t.currentEditor+1:t.sortUI[t.currentPage].components.length-1},updateSortUIProps:function(t,e){var n=e.key,r=e.value;t.sortUI[t.currentPage][n]=r},removeComponent:function(t,e){t.currentEditor=-1,t.sortUI[t.currentPage].components.splice(e,1)},syncState:function(t,e){void 0!==e.currentPage&&(t.currentPage=e.currentPage),void 0!==e.currentEditor&&(t.currentEditor=e.currentEditor),void 0!==e.sortUI&&(t.sortUI=e.sortUI)},clearWorkbench:function(t){t.currentEditor=-1,t.save=!0,t.currentPage=0,t.sortUI=[{title:"标题",bgColor:"#fe2f41",bgImage:"",bgSize:null,service:"",channel:"",components:[]}]},addConfig:function(t){t.sortUI.push({title:"标题",bgColor:"#fe2f41",bgImage:"",bgSize:null,service:"",channel:"",components:[]})}},s=n("lC5x"),u=n.n(s),c=n("aA9S"),p=n.n(c),d=n("J0Oq"),l=n.n(d),v=function(t){window.parent.postMessage(t,location.origin+"/")},f=function(t){window.frames[0]&&window.frames[0].postMessage(t,location.origin)},m=n("RgZf"),g={setCurrentPage:function(t,e){var n=t.commit,r=t.state;n("setCurrentPage",e),f({type:"syncState",value:r})},saveConfig:function(t){var e=t.commit;t.state;e("saveConfig",!(arguments.length>1&&void 0!==arguments[1])||arguments[1])},clearWorkbench:function(t){(0,t.commit)("clearWorkbench")},selectComponent:function(t,e){var n=t.commit,r=t.state;n("currentEditor",e),n("saveConfig",!1),v({type:"syncState",value:r})},addComponent:function(t,e){var n=this,r=t.commit,o=t.state;return l()(u.a.mark(function t(){var a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.roseApi.rose_component_detail_get({params:{name:e.name}});case 2:(a=t.sent).data.data.style=a.data.data.style||{container:{}},r("addComponent",p()({},e,a.data)),r("saveConfig",!1),f({type:"syncState",value:o});case 7:case"end":return t.stop()}},t,n)}))()},removeComponent:function(t,e){var n=t.commit,r=t.state;n("removeComponent",e),n("saveConfig",!1),v({type:"syncState",value:r})},updateSortUIProps:function(t,e){var n=t.commit,r=t.state;n("updateSortUIProps",{key:e.key,value:e.value}),n("saveConfig",!1),f({type:"syncState",value:r})},syncState:function(t,e){var n=t.commit,r=t.state;n("syncState",e),n("saveConfig",!1),f({type:"syncState",value:r})},addConfig:function(t){var e=t.commit,n=t.state;e("addConfig"),f({type:"syncState",value:n})}};n("KQ6f").default.use(r.a);var _=new r.a.Store({state:{save:!0,currentEditor:-1,currentPage:0,sortUI:[{title:"标题",bgColor:"#fe2f41",bgImage:"",bgSize:null,service:"",components:[]}]},mutations:i,actions:g,getters:{currentEditor:function(t){return t.currentEditor},components:function(t){return t.sortUI[t.currentPage]?t.sortUI[t.currentPage].components:[]},sortUI:function(t){return t.sortUI[t.currentPage]},state:function(t){return t},currentPage:function(t){return t.currentPage},save:function(t){return t.save}}});e.default=_;window.addEventListener("message",function(t){t.source!==window&&"loaded"!==t.data&&_.dispatch(t.data.type,t.data.value)})},lK9B:function(t,e){},wtez:function(t,e){}},["K/ZM"]);
//# sourceMappingURL=index.f39a0aba15edcc19d225.js.map