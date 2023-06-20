(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a26be256"],{7424:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container",staticStyle:{"padding-top":"10px"}},[a("el-tabs",{on:{"tab-click":e.switchTab},model:{value:e.tabName,callback:function(t){e.tabName=t},expression:"tabName"}},[a("el-tab-pane",{attrs:{label:"系统配置",name:"system"}},[e.form?a("el-form",{ref:"systemForm",staticStyle:{padding:"30px 0"},attrs:{model:e.form,rules:e.formRules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"系统名称",prop:"system_title"}},[a("el-input",{attrs:{placeholder:"系统标题",size:"small"},model:{value:e.form["system_title"],callback:function(t){e.$set(e.form,"system_title",t)},expression:"form['system_title']"}})],1),a("el-form-item",{attrs:{label:"后台logo",prop:"system_logo"}},[a("el-input",{attrs:{placeholder:"输入图片地址或上传图片",size:"small"},model:{value:e.form["system_logo"],callback:function(t){e.$set(e.form,"system_logo",t)},expression:"form['system_logo']"}}),a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"",data:{type:"system_logo"},"http-request":e.uploadImage,"show-file-list":!1,multiple:!1}},[e.form["system_logo"]?a("img",{staticClass:"avatar",staticStyle:{height:"50px",width:"auto"},attrs:{src:e.form["system_logo"]}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon",staticStyle:{width:"210px",height:"50px","line-height":"50px"}})]),a("span",[e._v("210x50像素")])],1),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:e.doSubmit}},[e._v("保 存")])],1)],1):e._e()],1),a("el-tab-pane",{attrs:{label:"ChatGPT参数配置",name:"chatgpt"}},[e.form?a("el-form",{ref:"chatgptForm",staticStyle:{padding:"30px 0"},attrs:{model:e.form,rules:e.formRules,"label-width":"160px"}},[a("el-form-item",{attrs:{label:"apiKey",prop:"apikey"}},[a("el-input",{attrs:{placeholder:"ChatGPT接口密钥",size:"small"},model:{value:e.form["apikey"],callback:function(t){e.$set(e.form,"apikey",t)},expression:"form['apikey']"}}),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",size:"small"},on:{click:e.getBalance}},[e._v("查询余额")]),e.balance?a("p",{staticStyle:{color:"#ff8800","font-size":"15px","font-weight":"bold"}},[e._v("总：$"+e._s(e.balance.total_granted)+"，已用：$"+e._s(e.balance.total_used)+"，剩余：$"+e._s(e.balance.total_available))]):e._e()],1),a("el-form-item",{attrs:{label:"温度(temperature)",prop:"temperature"}},[a("el-input",{attrs:{placeholder:"0-1，默认0.6",size:"small"},model:{value:e.form["temperature"],callback:function(t){e.$set(e.form,"temperature",t)},expression:"form['temperature']"}}),a("p",[e._v("取值0-1之间，默认0.9。越大回答问题越灵活，越像真人。")])],1),a("el-form-item",{attrs:{label:"最大长度(max_tokens)",prop:"max_tokens"}},[a("el-input",{attrs:{placeholder:"默认150",size:"small"},model:{value:e.form["max_tokens"],callback:function(t){e.$set(e.form,"max_tokens",t)},expression:"form['max_tokens']"}}),a("p",[e._v("每次回答的最大字符长度。如果设置过小，回答中间可能被切断。如果设置过大，则可能产生更多的计费。")])],1),a("el-form-item",{attrs:{label:"模型(model)",prop:"model"}},[a("el-select",{attrs:{size:"small"},model:{value:e.form["model"],callback:function(t){e.$set(e.form,"model",t)},expression:"form['model']"}},e._l(e.engines,(function(t,l){return a("el-option",{key:l,attrs:{label:t.name,value:t.name}},[e._v(e._s(t.name)+" ")])})),1),a("p",[e._v("默认：text-davinci-003")])],1),a("el-form-item",{attrs:{label:"新用户免费送",prop:"free_num"}},[a("el-input",{staticStyle:{width:"100px"},attrs:{size:"small"},model:{value:e.form["free_num"],callback:function(t){e.$set(e.form,"free_num",t)},expression:"form['free_num']"}}),e._v(" 条 ")],1),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:e.doSubmit}},[e._v("保 存")])],1)],1):e._e()],1),a("el-tab-pane",{attrs:{label:"支付配置",name:"pay"}},[e.form?a("el-form",{ref:"payForm",staticStyle:{padding:"30px 0"},attrs:{model:e.form,rules:e.formRules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"商户号",prop:"mch_id"}},[a("el-input",{attrs:{placeholder:"微信商户号",size:"small"},model:{value:e.form["mch_id"],callback:function(t){e.$set(e.form,"mch_id",t)},expression:"form['mch_id']"}})],1),a("el-form-item",{attrs:{label:"Api_v2密钥",prop:"key"}},[a("el-input",{attrs:{placeholder:"微信商户号v2密钥",size:"small"},model:{value:e.form["key"],callback:function(t){e.$set(e.form,"key",t)},expression:"form['key']"}})],1),a("el-form-item",{attrs:{label:"cert证书"}},[a("el-upload",{attrs:{action:"",data:{type:"cert"},"before-upload":e.uploadPemCheck,"http-request":e.uploadPem,"show-file-list":!1,multiple:!1}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("选择文件")])],1),e.form.apiclient_cert?a("span",{staticClass:"upload_status"},[e._v("已上传")]):e._e()],1),a("el-form-item",{attrs:{label:"key证书"}},[a("el-upload",{attrs:{action:"",data:{type:"key"},"before-upload":e.uploadPemCheck,"http-request":e.uploadPem,"show-file-list":!1,multiple:!1}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("选择文件")])],1),e.form.apiclient_key?a("span",{staticClass:"upload_status"},[e._v("已上传")]):e._e()],1),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:e.doSubmit}},[e._v("保 存")])],1)],1):e._e()],1),a("el-tab-pane",{attrs:{label:"流量主广告配置",name:"ad"}},[e.form?a("el-form",{ref:"adForm",staticStyle:{padding:"30px 0"},attrs:{model:e.form,rules:e.formRules,"label-width":"180px"}},[a("el-form-item",{attrs:{label:"首页插屏广告",prop:"inter_is_open"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.form["inter_is_open"],callback:function(t){e.$set(e.form,"inter_is_open",t)},expression:"form['inter_is_open']"}})],1),a("el-form-item",{attrs:{label:"插屏广告位ID",prop:"inter_unit_id"}},[a("el-input",{attrs:{size:"small"},model:{value:e.form["inter_unit_id"],callback:function(t){e.$set(e.form,"inter_unit_id",t)},expression:"form['inter_unit_id']"}}),a("p",{staticStyle:{color:"#666",margin:"0"}},[e._v("首页插屏广告的广告位ID，每隔6小时显示一次")])],1),a("el-form-item",{attrs:{label:"首页底部banner广告",prop:"banner_is_open"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.form["banner_is_open"],callback:function(t){e.$set(e.form,"banner_is_open",t)},expression:"form['banner_is_open']"}})],1),a("el-form-item",{attrs:{label:"banner广告位ID",prop:"banner_unit_id"}},[a("el-input",{attrs:{size:"small"},model:{value:e.form["banner_unit_id"],callback:function(t){e.$set(e.form,"banner_unit_id",t)},expression:"form['banner_unit_id']"}}),a("p",{staticStyle:{color:"#666",margin:"0"}},[e._v("首页底部banner广告的广告位ID")])],1),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:e.doSubmit}},[e._v("保 存")])],1)],1):e._e()],1),a("el-tab-pane",{attrs:{label:"关于我们",name:"about"}},[a("el-form",{ref:"aboutForm",staticStyle:{width:"550px",padding:"30px 0"},attrs:{model:e.form,rules:e.formRules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"关于我们",prop:"content"}},[a("el-input",{attrs:{type:"textarea",rows:20,placeholder:"请输入内容",size:"small"},model:{value:e.form["content"],callback:function(t){e.$set(e.form,"content",t)},expression:"form['content']"}})],1),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:e.doSubmit}},[e._v("保 存")])],1)],1)],1)],1)],1)},r=[],s=(a("7b4c"),a("5f17"),a("90e7")),o=a("91b6"),i={data:function(){return{tabName:"system",form:null,engines:[],balance:null,formRules:{apikey:[{required:!0,message:"此项必填",trigger:"blur"}],mch_id:[{required:!0,message:"此项必填",trigger:"blur"}],key:[{required:!0,message:"此项必填",trigger:"blur"}]}}},mounted:function(){this.getSetting()},methods:{getSetting:function(){var e=this;Object(s["c"])({name:this.tabName}).then((function(t){e.form=t.data,"chatgpt"===e.tabName&&t.data.apikey&&e.getBalance()}))},getEngines:function(){var e=this;Object(s["b"])().then((function(t){e.engines=t.data}))},getBalance:function(){var e=this;Object(s["a"])({apikey:this.form.apikey}).then((function(t){e.balance=t.data}))},switchTab:function(){this.getSetting(),"chatgpt"===this.tabName&&this.getEngines()},doSubmit:function(){var e=this,t=null;"system"===this.tabName?t=this.$refs.systemForm:"pay"===this.tabName?t=this.$refs.payForm:"chatgpt"===this.tabName?t=this.$refs.chatgptForm:"ad"===this.tabName?t=this.$refs.adForm:"about"===this.tabName&&(t=this.$refs.aboutForm),t&&t.validate((function(t){t?Object(s["d"])({name:e.tabName,data:JSON.stringify(e.form)}).then((function(t){e.getSetting(),e.$message({message:t.message,type:"success",duration:1500})})):e.$message({message:"请填写必填项",type:"error",duration:1500})}))},uploadImage:function(e){var t=this,a=new FormData;a.append("file",e.file),e.data&&a.append("data",JSON.stringify(e.data)),Object(o["a"])(a).then((function(a){"system_logo"===e.data.type&&t.$set(t.form,"system_logo",a.data.path),t.$message.success("上传成功")}))},uploadPemCheck:function(e){if("pem"!==e.name.substr(-3))return this.$message({showClose:!0,message:"请上传后缀为.pem的证书文件",type:"warning"}),!1},uploadPem:function(e){var t=this,a=new FormData;a.append("file",e.file),e.data&&a.append("data",JSON.stringify(e.data)),Object(o["b"])(a).then((function(a){"cert"===e.data.type?t.$set(t.form,"apiclient_cert",a.data):"key"===e.data.type&&t.$set(t.form,"apiclient_key",a.data),t.$message.success("上传成功")}))}}},n=i,m=(a("a722"),a("88de"),a("3427")),c=Object(m["a"])(n,l,r,!1,null,"591f245d",null);t["default"]=c.exports},"80a7":function(e,t,a){},"88de":function(e,t,a){"use strict";a("80a7")},"90e7":function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return s})),a.d(t,"d",(function(){return o})),a.d(t,"a",(function(){return i}));var l=a("b775");function r(e){return Object(l["a"])({url:"/setting/getSetting",method:"post",data:e})}function s(e){return Object(l["a"])({url:"/setting/getEngines",method:"post",data:e})}function o(e){return Object(l["a"])({url:"/setting/setSetting",method:"post",data:e})}function i(e){return Object(l["a"])({url:"/setting/getBalance",method:"post",data:e})}},"91b6":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return s}));var l=a("b775");function r(e){return Object(l["a"])({url:"/upload/image",method:"post",data:e})}function s(e){return Object(l["a"])({url:"/upload/pem",method:"post",data:e})}},a722:function(e,t,a){"use strict";a("e25d")},e25d:function(e,t,a){}}]);