(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-765dfd30"],{"0dd8":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Layout",[i("PageHeader",{attrs:{title:t.title,items:t.items}}),i("div",{staticClass:"row mb-4"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-body"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"validationCustom01"}},[t._v(t._s(t.$t("article.title")))]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.article_title,expression:"form.article_title"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&t.$v.form.article_title.$error},attrs:{id:"validationCustom01",type:"text",placeholder:t.$t("article.title")},domProps:{value:t.form.article_title},on:{input:function(e){e.target.composing||t.$set(t.form,"article_title",e.target.value)}}}),t.submitted&&t.$v.form.article_title.$error?i("div",{staticClass:"invalid-feedback"},[t.$v.form.article_title.required?t._e():i("span",[t._v(t._s(t.$t("form.error.text")))])]):t._e()])]),i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"validationCustom01"}},[t._v(t._s(t.$t("article.desc")))]),i("ckeditor",{staticClass:"ck",class:{"is-invalid":t.submitted&&t.$v.form.article_desc.$error},attrs:{editor:t.editor},model:{value:t.form.article_desc,callback:function(e){t.$set(t.form,"article_desc",e)},expression:"form.article_desc"}}),t.submitted&&t.$v.form.article_desc.$error?i("div",{staticClass:"invalid-feedback"},[t.$v.form.article_desc.required?t._e():i("span",[t._v(t._s(t.$t("form.error.text")))])]):t._e()],1)]),i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"validationCustom01"}},[t._v(t._s(t.$t("article.image")))]),i("b-form-file",{class:{"is-invalid":t.submitted&&t.$v.form.article_pict.$error},attrs:{state:!0,placeholder:t.$t("user-management.choose"),"drop-placeholder":t.$t("user-management.drop"),accept:"image/*"},on:{change:t.ImageTarget}}),t.submitted&&t.$v.form.article_pict.$error?i("div",{staticClass:"invalid-feedback"},[t.$v.form.article_pict.required?t._e():i("span",[t._v(t._s(t.$t("form.error.text")))])]):t._e()],1)]),i("div",{staticClass:"col-md-12 text-right"},[i("router-link",{attrs:{to:"/article"}},[i("b-button",{staticClass:"mr-1",attrs:{size:"md",variant:"danger"}},[t._v(" "+t._s(t.$t("button.cancel.text"))+" ")])],1),i("b-button",{attrs:{size:"md",variant:"success"},on:{click:t.addArticles}},[t._v(" "+t._s(t.$t("button.save.text"))+" ")])],1)])])])])])],1)},r=[],s=(i("a4d3"),i("e01a"),i("b0c0"),i("2b0e")),c=(i("3d20"),i("444f")),o=i("2579"),l=i("c2a4"),d=i("b5ae"),n=i("973b"),m=i("1058"),u=i("3730"),f=i.n(u),v=i("fb3d"),_=i.n(v),p=i("86b6"),h=(i("c1df"),{page:{meta:[{name:"description",content:l.description}]},components:{Layout:c["a"],PageHeader:o["a"],ckeditor:f.a.component},data:function(){return{urlImage:"http://secureme.api.xyz/storage/",user_type:p["a"].state.authBackend.user.type,title:this.$t("article.article-management"),items:[{text:this.$t("menuitems.dashboards.text"),href:"#"},{text:this.$t("article.article-management"),active:!0}],editor:_.a,editorData:"<h5></h5>",form:{article_desc:"",article_title:"",article_pict:""},file:{article_pict:"",name:""},submitted:!1}},validations:{form:{article_desc:{required:d["required"]},article_title:{required:d["required"]},article_pict:{required:d["required"]}}},methods:{list:function(){var t=this;n["a"].getProfile().then((function(e){t.user_type=e.data.data.admin.role})).catch((function(e){t.message=e.response.data.data}))},ImageTarget:function(t){this.form.article_pict=t.target.files[0]},ImageEditTarget:function(t){this.file.article_pict=t.target.files[0],this.file.name=t.target.files[0].name},addArticles:function(t){var e=this;if(console.log("gooo"),this.submitted=!0,this.$v.form.$touch(),""==this.form.article_desc||""==this.form.article_title||""==this.form.article_pict)t.preventDefault();else{var i=new FormData;i.append("article_title",this.form.article_title),i.append("article_desc",this.form.article_desc),i.append("article_pict",this.form.article_pict,this.form.article_pict.name),console.log(i),m["a"].addArticle(i).then((function(t){s["default"].swal({position:"top-end",icon:"success",title:t.data.message,showConfirmButton:!1,timer:1e3}),e.$router.push("/article")})).catch((function(t){console.log(t)}))}}},beforeMount:function(){this.list()}}),b=h,g=(i("d938"),i("2877")),$=Object(g["a"])(b,a,r,!1,null,"755ba3f4",null);e["default"]=$.exports},"7ab9":function(t,e,i){},d938:function(t,e,i){"use strict";var a=i("7ab9"),r=i.n(a);r.a}}]);
//# sourceMappingURL=chunk-765dfd30.459e6ca9.js.map