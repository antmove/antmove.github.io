webpackJsonp([4],{TO83:function(t,e){},jiQf:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("mvHQ"),a=s.n(o),i={name:"record",data:function(){return{records:[],record:"",delStatus:!1,evenClass:!1,gitee_access_token:"5ccb057685236622cbbc439d7d09aa86",gitee_gists_id:"f3ykdawniucqr7mes6zop26",github_access_token:"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",github_gists_id:"06bd8aa13a8953412d98f3c35a32876a",updated_at:0}},mounted:function(){this.getData(),this.gitHubGetData()},computed:{loopRecords:function(){return JSON.parse(a()(this.records)).reverse()}},watch:{delStatus:function(t){var e=this;t&&setTimeout(function(){e.evenClass=!0},100)}},methods:{onCopy:function(){$message.success("复制成功！")},onError:function(){},changeDeleteStatus:function(){this.delStatus=!this.delStatus,this.delStatus||(this.evenClass=!1,this.toRecord())},getData:function(){var t=this;this.$http.get("https://gitee.com/api/v5/gists/"+this.gitee_gists_id,{params:{access_token:this.gitee_access_token}}).then(function(e){if(200===e.status){var s=[];try{s=JSON.parse(e.data.files.record.content)}catch(t){}var o=new Date(e.data.updated_at).getTime();o>t.updated_at&&(t.records=s,t.updated_at=o)}else console.log(e)}).catch(function(t){console.log(t)})},gitHubGetData:function(){var t=this;this.$http.get("https://api.github.com/gists/"+this.github_gists_id,{}).then(function(e){if(200===e.status){var s=[];try{s=JSON.parse(e.data.files.record.content)}catch(t){console.log(t)}var o=new Date(e.data.updated_at).getTime();o>t.updated_at&&(t.records=s,t.updated_at=o)}else console.log(e)}).catch(function(t){console.log(t)})},toRecord:function(){var t={record:{content:a()(this.records)}},e=this.gitee_access_token;this.$http.patch("https://gitee.com/api/v5/gists/"+this.gitee_gists_id,{files:t,access_token:e},{}).then(function(t){200===t.status?console.log("success"):console.log("fail")}).catch(function(t){console.log(t)}),this.gitHubToRecord()},gitHubToRecord:function(){var t={record:{content:a()(this.records)}},e=this.github_access_token;this.$http.patch("https://api.github.com/gists/"+this.github_gists_id+"?access_token="+e,{files:t},{}).then(function(t){200===t.status?console.log("success"):console.log("fail")}).catch(function(t){console.log(t)})},addRecord:function(){this.records.push(this.record),this.record="",this.toRecord()},deleteRecord:function(t){if(!this.delStatus)return!1;var e=this.records.length-t-1;this.records.splice(e,1)}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"record"},[s("h1",[s("span",{on:{click:t.changeDeleteStatus}},[t._v("Record")])]),t._v(" "),s("div",{attrs:{id:"div"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.record,expression:"record"}],attrs:{type:"text",id:"textfield1",placeholder:"Something"},domProps:{value:t.record},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addRecord.apply(null,arguments)},input:function(e){e.target.composing||(t.record=e.target.value)}}}),t._v(" "),s("input",{attrs:{type:"button",name:"button",id:"button1",value:"记录"},on:{click:t.addRecord}})]),t._v(" "),s("div",{attrs:{id:"div2"}},t._l(t.loopRecords,function(e,o){return s("div",[s("span",{staticClass:"item",class:{delete:t.delStatus,deleteAnimation:t.delStatus&&o%2||t.evenClass&&!(o%2)},on:{click:function(e){return t.deleteRecord(o)}}},[s("a",{directives:[{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"},{name:"clipboard",rawName:"v-clipboard:copy",value:e,expression:"val",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],attrs:{href:-1===e.indexOf("http")?"javascript:;":e,target:-1===e.indexOf("http")?"":"_blank"}},[t._v(t._s(e))])])])}),0)])},staticRenderFns:[]};var n=s("VU/8")(i,c,!1,function(t){s("TO83")},"data-v-52654482",null);e.default=n.exports},mvHQ:function(t,e,s){t.exports={default:s("qkKv"),__esModule:!0}},qkKv:function(t,e,s){var o=s("FeBl"),a=o.JSON||(o.JSON={stringify:JSON.stringify});t.exports=function(t){return a.stringify.apply(a,arguments)}}});