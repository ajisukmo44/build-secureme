(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-252cb7e3"],{1331:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),i=(0,r.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=i},"2a12":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),i=function(e){return(0,r.withParams)({type:"maxLength",max:e},(function(t){return!(0,r.req)(t)||(0,r.len)(t)<=e}))};t.default=i},3360:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),i=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.withParams)({type:"and"},(function(){for(var e=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return t.length>0&&t.reduce((function(t,a){return t&&a.apply(e,r)}),!0)}))};t.default=i},"3a54":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),i=(0,r.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=i},"45b8":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),i=(0,r.regex)("numeric",/^[0-9]*$/);t.default=i},"46bc":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),i=function(e){return(0,r.withParams)({type:"maxValue",max:e},(function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t.default=i},"5d75":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),i=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/,n=(0,r.regex)("email",i);t.default=n},"5db3":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),i=function(e){return(0,r.withParams)({type:"minLength",min:e},(function(t){return!(0,r.req)(t)||(0,r.len)(t)>=e}))};t.default=i},6008:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Layout",[a("PageHeader",{attrs:{title:e.title,items:e.items}}),a("div",{staticClass:"row mb-4"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[e.loading?a("div",{staticClass:"row mt-5 mb-5 pb-4 mx-auto"},[a("div",{staticClass:"col-12 p-5 m-4 text-center"},[e.loading?a("div",{staticClass:"spinner-border text-secondary",attrs:{role:"status"}},[a("span",{staticClass:"sr-only"},[e._v("Loading..")])]):e._e()])]):e._e(),"su"==e.user_type||"adm"==e.user_type?a("div",[e.loading?e._e():a("div",{staticClass:"row mb-0"},[a("div",{staticClass:"col-5 col-xl-7"},[a("div",{},[a("b-button",{staticClass:"btn mr-1",attrs:{variant:"success"},on:{click:e.addPackageModal}},[e._v(" "+e._s(e.$t("button.add.text"))+" "),a("i",{staticClass:"mdi mdi-plus mr-1"})]),a("b-modal",{attrs:{id:"modal-add",centered:"",bordered:"",title:e.$t("button.add.text"),"title-class":"font-18","ok-title":e.$t("button.save.text"),"cancel-title":e.$t("button.cancel.text")},scopedSlots:e._u([{key:"modal-footer",fn:function(t){var r=t.cancel;return[a("b-button",{attrs:{size:"md",variant:"danger"},on:{click:function(e){return r()}}},[e._v(" "+e._s(e.$t("button.cancel.text"))+" ")]),a("b-button",{attrs:{size:"md",variant:"success"},on:{click:e.addPackages}},[e._v(" "+e._s(e.$t("button.save.text"))+" ")])]}}],null,!1,2891381601)},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"validationCustom01"}},[e._v(e._s(e.$t("package.name")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.package_name,expression:"form.package_name"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.form.package_name.$error},attrs:{id:"validationCustom01",type:"text",placeholder:e.$t("package.name")},domProps:{value:e.form.package_name},on:{input:function(t){t.target.composing||e.$set(e.form,"package_name",t.target.value)}}}),e.submitted&&e.$v.form.package_name.$error?a("div",{staticClass:"invalid-feedback"},[e.$v.form.package_name.required?e._e():a("span",[e._v(e._s(e.$t("form.error.text")))])]):e._e()])]),a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"validationCustom01"}},[e._v(e._s(e.$t("package.description")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.package_desc,expression:"form.package_desc"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.form.package_desc.$error},attrs:{id:"validationCustom01",type:"text",placeholder:e.$t("package.description")},domProps:{value:e.form.package_desc},on:{input:function(t){t.target.composing||e.$set(e.form,"package_desc",t.target.value)}}}),e.submitted&&e.$v.form.package_desc.$error?a("div",{staticClass:"invalid-feedback"},[e.$v.form.package_desc.required?e._e():a("span",[e._v(e._s(e.$t("form.error.text")))])]):e._e()])]),a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"validationCustom01"}},[e._v(e._s(e.$t("package.price")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.price,expression:"form.price"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.form.price.$error},attrs:{id:"validationCustom01",type:"number",placeholder:e.$t("package.price")},domProps:{value:e.form.price},on:{input:function(t){t.target.composing||e.$set(e.form,"price",t.target.value)}}}),e.submitted&&e.$v.form.price.$error?a("div",{staticClass:"invalid-feedback"},[e.$v.form.price.required?e._e():a("span",[e._v(e._s(e.$t("form.error.text")))])]):e._e()])]),a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"validationCustom02"}},[e._v(e._s(e.$t("package.duration")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.package_duration,expression:"form.package_duration"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.form.package_duration.$error},attrs:{id:"validationCustom01",type:"number",placeholder:e.$t("package.duration")},domProps:{value:e.form.package_duration},on:{input:function(t){t.target.composing||e.$set(e.form,"package_duration",t.target.value)}}}),e.submitted&&e.$v.form.package_duration.$error?a("div",{staticClass:"invalid-feedback"},[e.$v.form.package_duration.required?e._e():a("span",[e._v(e._s(e.$t("form.error.text")))])]):e._e()])]),a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"validationCustom01"}},[e._v(e._s(e.$t("package.unit")))]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.unit,expression:"form.unit"}],staticClass:"custom-select",class:{"is-invalid":e.submitted&&e.$v.form.unit.$error},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.form,"unit",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"Day"}},[e._v(e._s(e.$t("all.day")))]),a("option",{attrs:{value:"Month"}},[e._v(e._s(e.$t("all.month")))]),a("option",{attrs:{value:"Year"}},[e._v(e._s(e.$t("all.year")))])]),e.submitted&&e.$v.form.unit.$error?a("div",{staticClass:"invalid-feedback"},[e.$v.form.unit.required?e._e():a("span",[e._v(e._s(e.$t("form.error.text")))])]):e._e()])]),a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.is_vvip,expression:"form.is_vvip"}],staticClass:"custom-control-input",attrs:{id:"invalidCheck",type:"checkbox","false-value":0,"true-value":1},domProps:{checked:Array.isArray(e.form.is_vvip)?e._i(e.form.is_vvip,null)>-1:e._q(e.form.is_vvip,1)},on:{change:function(t){var a=e.form.is_vvip,r=t.target,i=r.checked?1:0;if(Array.isArray(a)){var n=null,o=e._i(a,n);r.checked?o<0&&e.$set(e.form,"is_vvip",a.concat([n])):o>-1&&e.$set(e.form,"is_vvip",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.form,"is_vvip",i)}}}),a("label",{staticClass:"custom-control-label",attrs:{for:"invalidCheck"}},[e._v(e._s(e.$t("package.is-vvip")))])])])])])]),a("b-dropdown",{ref:"dropdown",staticClass:"btn-group mr-2 mb-2 mb-sm-0 border rounded",attrs:{variant:"white"}},[a("template",{slot:"button-content"},[e._v(" "+e._s(e.$t("table.show-label"))+" "),a("i",{staticClass:"mdi mdi-chevron-down ml-2"})]),e._l(e.pageOptions,(function(t){return a("span",{key:t},[a("button",{staticClass:"dropdown-item",on:{click:function(a){return e.perPageSelect(t)}}},[t==e.perPage?a("span",{staticClass:"text-success"},[a("b",[e._v(" "+e._s(t)+" ")])]):a("span",[e._v(e._s(t))])])])}))],2),e.selected[0]?a("b-dropdown",{staticClass:"btn-group mr-2 mb-2 mb-sm-0 border",attrs:{variant:"white"}},[a("template",{slot:"button-content"},[e._v(" "+e._s(e.$t("button.bulk-action"))+" "),a("i",{staticClass:"mdi mdi-chevron-down ml-2"})]),a("button",{staticClass:"dropdown-item",on:{click:function(t){return e.bulkAction()}}},[e._v(e._s(e.$t("button.hapus.text")))])],2):e._e()],1)]),a("div",{staticClass:"col-4 col-xl-3"}),a("div",{staticClass:"col-3 col-xl-2"},[a("div",{staticClass:"form-group has-search"},[a("span",{staticClass:"bx bx-search-alt search-icon form-control-feedback"}),a("b-form-input",{staticClass:"form-control",attrs:{type:"search",placeholder:e.$t("navbar.search.text")},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})],1)])])]):e._e(),e.loading?e._e():a("div",{staticClass:"table-responsive mb-0",class:{"pb-5":e.rows<10}},["adm"==e.user_type||"su"==e.user_type?a("div",[a("b-table",{attrs:{items:e.tableData,fields:e.fields,bordered:"",striped:"",responsive:"sm","per-page":e.perPage,"current-page":e.currentPage,"sort-desc":e.sortDesc,filter:e.filter,"filter-included-fields":e.filterOn},on:{"update:sortDesc":function(t){e.sortDesc=t},"update:sort-desc":function(t){e.sortDesc=t},filtered:e.onFiltered},scopedSlots:e._u([{key:"head(bulk)",fn:function(){return[a("b-form-checkbox",{staticClass:"text-center mt-0",on:{change:e.select},model:{value:e.selectAll,callback:function(t){e.selectAll=t},expression:"selectAll"}})]},proxy:!0},{key:"cell(bulk)",fn:function(t){return[a("b-form-checkbox",{staticClass:"text-center mb-0",attrs:{value:t.item.id_package},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})]}},{key:"cell(package_name)",fn:function(t){return[a("div",[e._v(e._s(t.item.package_name)+" "),t.item.is_vvip?a("i",{staticClass:"bx bxs-bookmark-star ml-0 text-success",attrs:{title:"VVIP"}}):e._e()])]}},{key:"cell(actions)",fn:function(t){return[a("b-button",{staticClass:"btn btn-sm mr-1",attrs:{variant:"info"},on:{click:function(a){return e.editPackages(t.item.id_package,t.item.package_name,t.item.package_desc,t.item.price,t.item.package_duration,t.item.unit,t.item.is_vvip)}}},[a("i",{staticClass:"bx bx-pencil"})]),a("b-modal",{ref:"ref-modal-edit",attrs:{id:"modal-edit"+t.item.id_package,centered:"",title:e.$t("button.update.text"),"title-class":"font-17","ok-title":e.$t("button.update.text"),"cancel-title":e.$t("button.cancel.text")},scopedSlots:e._u([{key:"modal-footer",fn:function(r){var i=r.cancel;return[a("b-button",{attrs:{size:"md",variant:"danger"},on:{click:function(e){return i()}}},[e._v(" "+e._s(e.$t("button.cancel.text"))+" ")]),a("b-button",{attrs:{size:"md",variant:"success"},on:{click:function(a){return e.updatePackages(a,t.item.id_package)}}},[e._v(" "+e._s(e.$t("button.save.text"))+" ")])]}}],null,!0)},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"validationCustom01"}},[e._v(e._s(e.$t("package.name")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.package_name,expression:"form.package_name"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.form.package_name.$error},attrs:{id:"validationCustom01",type:"text",placeholder:e.$t("package.name")},domProps:{value:e.form.package_name},on:{input:function(t){t.target.composing||e.$set(e.form,"package_name",t.target.value)}}}),e.submitted&&e.$v.form.package_name.$error?a("div",{staticClass:"invalid-feedback"},[e.$v.form.package_name.required?e._e():a("span",[e._v(e._s(e.$t("form.error.text")))])]):e._e()])]),a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"validationCustom01"}},[e._v(e._s(e.$t("package.description")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.package_desc,expression:"form.package_desc"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.form.package_desc.$error},attrs:{id:"validationCustom01",type:"text",placeholder:e.$t("package.description")},domProps:{value:e.form.package_desc},on:{input:function(t){t.target.composing||e.$set(e.form,"package_desc",t.target.value)}}}),e.submitted&&e.$v.form.package_desc.$error?a("div",{staticClass:"invalid-feedback"},[e.$v.form.package_desc.required?e._e():a("span",[e._v(e._s(e.$t("form.error.text")))])]):e._e()])]),a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"validationCustom01"}},[e._v(e._s(e.$t("package.price")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.price,expression:"form.price"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.form.price.$error},attrs:{id:"validationCustom01",type:"number",placeholder:e.$t("package.price")},domProps:{value:e.form.price},on:{input:function(t){t.target.composing||e.$set(e.form,"price",t.target.value)}}}),e.submitted&&e.$v.form.price.$error?a("div",{staticClass:"invalid-feedback"},[e.$v.form.price.required?e._e():a("span",[e._v(e._s(e.$t("form.error.text")))])]):e._e()])]),a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"validationCustom02"}},[e._v(e._s(e.$t("package.duration")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.package_duration,expression:"form.package_duration"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.form.package_duration.$error},attrs:{id:"validationCustom01",type:"number",placeholder:e.$t("package.duration")},domProps:{value:e.form.package_duration},on:{input:function(t){t.target.composing||e.$set(e.form,"package_duration",t.target.value)}}}),e.submitted&&e.$v.form.package_duration.$error?a("div",{staticClass:"invalid-feedback"},[e.$v.form.package_duration.required?e._e():a("span",[e._v(e._s(e.$t("form.error.text")))])]):e._e()])]),a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"validationCustom01"}},[e._v(e._s(e.$t("package.unit")))]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.unit,expression:"form.unit"}],staticClass:"custom-select",class:{"is-invalid":e.submitted&&e.$v.form.unit.$error},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.form,"unit",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"Day"}},[e._v(e._s(e.$t("all.day")))]),a("option",{attrs:{value:"Month"}},[e._v(e._s(e.$t("all.month")))]),a("option",{attrs:{value:"Year"}},[e._v(e._s(e.$t("all.year")))])]),e.submitted&&e.$v.form.unit.$error?a("div",{staticClass:"invalid-feedback"},[e.$v.form.unit.required?e._e():a("span",[e._v(e._s(e.$t("form.error.text")))])]):e._e()])]),a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.is_vvip,expression:"form.is_vvip"}],staticClass:"custom-control-input",attrs:{id:"invalidCheck",type:"checkbox","false-value":0,"true-value":1},domProps:{checked:Array.isArray(e.form.is_vvip)?e._i(e.form.is_vvip,null)>-1:e._q(e.form.is_vvip,1)},on:{change:function(t){var a=e.form.is_vvip,r=t.target,i=r.checked?1:0;if(Array.isArray(a)){var n=null,o=e._i(a,n);r.checked?o<0&&e.$set(e.form,"is_vvip",a.concat([n])):o>-1&&e.$set(e.form,"is_vvip",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.form,"is_vvip",i)}}}),a("label",{staticClass:"custom-control-label",attrs:{for:"invalidCheck"}},[e._v(e._s(e.$t("package.is-vvip")))])])])])])]),a("b-button",{staticClass:"btn btn-sm",attrs:{variant:"danger"},on:{click:function(a){return e.deletePackages(t.item.id_package)}}},[a("i",{staticClass:"bx bx-trash"})])]}}],null,!1,3017503086)})],1):e._e(),e.tableData[0]||e.loading?e._e():a("div",[a("div",{staticClass:"row  mt-5 mb-5 pb-4 mx-auto"},[a("div",{staticClass:"col-12  p-5 my-5 text-center"},[a("span",{staticClass:"text-secondary"},[e._v(e._s(e.$t("all.dnf")))])])])])]),e.rows>10&&"su"==e.user_type?a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 text-left"},[a("div",{staticClass:"text-muted float-left"},[e._v(" "+e._s(e.$t("table.show-label"))+" "),a("b",[e._v(e._s(e.perPage)+" ")]),e._v(e._s(e.$t("table.entri-label"))+" ")])]),a("div",{staticClass:"col-6 text-right"},[a("div",{staticClass:"dataTables_paginate paging_simple_numbers float-right"},[a("ul",{staticClass:"pagination pagination-rounded mb-0"},[a("b-pagination",{attrs:{"total-rows":e.rows,"per-page":e.perPage},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)])])]):e._e()])])])])],1)},i=[],n=(a("a4d3"),a("e01a"),a("4160"),a("159b"),a("2b0e")),o=a("3d20"),s=a.n(o),c=a("444f"),u=a("2579"),l=a("c2a4"),d=a("b5ae"),f=a("973b"),m=a("d4ec"),p=a("bee2"),v=a("bc3a"),_=a.n(v),g=a("6808"),b="http://secureme.api.xyz/api/",h=function(){function e(){Object(m["a"])(this,e)}return Object(p["a"])(e,[{key:"getAllPackage",value:function(){return _.a.get(b+"packages",{headers:Object(g["a"])()})}},{key:"addPackage",value:function(e){return _.a.post(b+"packages",e,{headers:Object(g["a"])()})}},{key:"updatePackage",value:function(e,t){return _.a.patch(b+"packages/"+e,t,{headers:Object(g["a"])()})}},{key:"deletePackage",value:function(e){return _.a.delete(b+"packages/"+e,{headers:Object(g["a"])()})}},{key:"bulkDeletePackage",value:function(e){return _.a.post(b+"packages/bulk-delete",e,{headers:Object(g["a"])()})}}]),e}(),k=new h,y=a("86b6"),P=a("c1df"),$=a.n(P),C={page:{meta:[{name:"description",content:l.description}]},components:{Layout:c["a"],PageHeader:u["a"]},data:function(){return{urlImage:"http://secureme.api.xyz/storage/avatar/",user_type:y["a"].state.authBackend.user.type,title:this.$t("package.package-management"),items:[{text:this.$t("menuitems.dashboards.text"),href:"#"},{text:this.$t("package.package-management"),active:!0}],loading:!1,tableData:[],totalRows:1,currentPage:1,perPage:10,pageOptions:[10,25,50,100],filter:null,filterOn:[],sortDesc:!1,selected:[],selectAll:!1,fields:[{key:"id_package",thClass:"d-none",tdClass:"d-none"},{key:"bulk",thStyle:{width:"2%"},label:"#"},{key:"package_name",sortable:!0,label:this.$t("package.name")},{key:"package_desc",sortable:!0,label:this.$t("package.description")},{key:"price",sortable:!0,label:this.$t("package.price")},{key:"package_duration",sortable:!0,label:this.$t("package.duration")},{key:"unit",sortable:!0,label:this.$t("package.unit")},{key:"actions",thStyle:{width:"10%"},class:"text-center",label:this.$t("button.action")}],form:{package_name:"",package_desc:"",price:"",package_duration:"",unit:"",is_vvip:0},show:{new:!1,conf:!1},submitted:!1}},validations:{form:{package_name:{required:d["required"]},package_desc:{required:d["required"]},price:{required:d["required"]},package_duration:{required:d["required"]},unit:{required:d["required"]}}},computed:{rows:function(){return this.tableData.length}},methods:{select:function(){if(this.selected=[],!this.selectAll)for(var e in this.tableData)this.selected.push(this.tableData[e].id_package)},list:function(){var e=this;f["a"].getProfile().then((function(t){e.user_type=t.data.data.admin.role})).catch((function(t){e.message=t.response.data.data}))},getPackage:function(){var e=this;this.loading=!0,k.getAllPackage().then((function(t){e.tableData=[],t.data.data.forEach((function(t){var a={id_package:t.id_package,package_name:t.package_name,package_desc:t.package_desc,price:t.price,package_duration:t.package_duration,unit:t.unit,is_vvip:t.is_vvip,created_at:e.formatDate(t.created_at),updated_at:e.formatDate(t.updated_at)};e.tableData.push(a),e.loading=!1}))})).catch((function(t){e.loading=!1,console.log(t)}))},getPackageUpdate:function(){var e=this;k.getAllPackage().then((function(t){e.tableData=[],t.data.data.forEach((function(t){var a={id_package:t.id_package,package_name:t.package_name,package_desc:t.package_desc,price:t.price,package_duration:t.package_duration,unit:t.unit,is_vvip:t.is_vvip,created_at:e.formatDate(t.created_at),updated_at:e.formatDate(t.updated_at)};e.tableData.push(a)}))})).catch((function(e){console.log(e)}))},addPackageModal:function(){this.$bvModal.show("modal-add"),this.form.package_name="",this.form.package_desc="",this.form.price="",this.form.package_duration="",this.form.unit="",this.form.is_vvip=0},addPackages:function(e){var t=this;if(this.submitted=!0,this.$v.form.$touch(),""==this.form.package_name||""==this.form.package_desc||""==this.form.price||""==this.form.package_duration||""==this.form.unit)e.preventDefault();else{var a={package_name:this.form.package_name,package_desc:this.form.package_desc,price:this.form.price,package_duration:this.form.package_duration,unit:this.form.unit,is_vvip:this.form.is_vvip};k.addPackage(a).then((function(e){n["default"].swal({position:"top-end",icon:"success",title:e.data.message,showConfirmButton:!1,timer:1500}),t.resetForm(),t.$v.$reset(),t.$bvModal.hide("modal-add"),t.getPackageUpdate()})).catch((function(e){console.log(e)}))}},editPackages:function(e,t,a,r,i,n,o){this.$bvModal.show("modal-edit"+e),this.form.package_name=t,this.form.package_desc=a,this.form.price=r,this.form.package_duration=i,this.form.unit=n,this.form.is_vvip=o},updatePackages:function(e,t){var a=this;if(this.submitted=!0,this.$v.form.$touch(),""==this.form.package_name||""==this.form.package_desc||""==this.form.price||""==this.form.package_duration||""==this.form.unit)e.preventDefault();else{var r={package_name:this.form.package_name,id_package:this.form.id_package,package_desc:this.form.package_desc,price:this.form.price,package_duration:this.form.package_duration,unit:this.form.unit,is_vvip:this.form.is_vvip};k.updatePackage(t,r).then((function(e){var t=e.data.data.id_package;n["default"].swal({position:"top-end",icon:"success",title:e.data.message,showConfirmButton:!1,timer:1500}),a.$bvModal.hide("modal-edit"+t),a.getPackageUpdate(),a.resetForm(),a.$v.$reset()})).catch((function(e){console.log(e)}))}},deletePackages:function(e){var t=this;s.a.fire({title:this.$t("button.delete.modal.confirmText[0]"),text:this.$t("button.delete.modal.confirmText[1]"),icon:"warning",showCancelButton:!0,confirmButtonColor:"#34c38f",cancelButtonColor:"#f46a6a",cancelButtonText:this.$t("button.cancel.text"),confirmButtonText:this.$t("button.delete.text")}).then((function(a){a.isConfirmed&&k.deletePackage(e).then((function(e){t.getPackageUpdate(),s.a.fire({position:"top-end",icon:"success",title:e.data.message,showConfirmButton:!1,timer:1500})})).catch((function(e){console.log(e)}))}))},bulkAction:function(){var e=this;s.a.fire({title:this.$t("button.delete.modal.confirmText[0]"),text:this.$t("button.delete.modal.confirmText[1]"),icon:"warning",showCancelButton:!0,confirmButtonColor:"#34c38f",cancelButtonColor:"#f46a6a",cancelButtonText:this.$t("button.cancel.text"),confirmButtonText:this.$t("button.delete.text")}).then((function(t){if(t.isConfirmed){var a=e.selected;k.bulkDeletePackage(a).then((function(t){e.selected=[],e.getPackageUpdate(),s.a.fire({position:"top-end",icon:"success",title:t.data.message,showConfirmButton:!1,timer:1500})})).catch((function(e){console.log(e)}))}}))},onFiltered:function(e){this.totalRows=e.length,this.currentPage=1},onDelete:function(e){console.log("delete data:",e)},onView:function(e){console.log("details data:",e)},perPageSelect:function(e){this.perPage=e,console.log(this.perPage),this.$refs.dropdown.hide()},resetForm:function(){var e=this;setTimeout((function(){e.form.id_package="",e.form.package_name="",e.form.package_desc="",e.form.price="",e.form.package_duration="",e.form.unit="",e.form.is_vvip=0}),2e3)},formatDate:function(e){return $()(e).format("YYYY-MM-DD, hh:mm")}},beforeMount:function(){this.list()},mounted:function(){this.getPackage(),this.totalRows=this.items.length}},x=C,w=(a("a3e8"),a("2877")),A=Object(w["a"])(x,r,i,!1,null,"4adb40f0",null);t["default"]=A.exports},6235:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),i=(0,r.regex)("alpha",/^[a-zA-Z]*$/);t.default=i},6417:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),i=function(e){return(0,r.withParams)({type:"not"},(function(t,a){return!(0,r.req)(t)||!e.call(this,t,a)}))};t.default=i},"772d":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),i=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,n=(0,r.regex)("url",i);t.default=n},"78ef":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return r.default}}),t.regex=t.ref=t.len=t.req=void 0;var r=i(a("8750"));function i(e){return e&&e.__esModule?e:{default:e}}function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}var o=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===n(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=o;var s=function(e){return Array.isArray(e)?e.length:"object"===n(e)?Object.keys(e).length:String(e).length};t.len=s;var c=function(e,t,a){return"function"===typeof e?e.call(t,a):a[e]};t.ref=c;var u=function(e,t){return(0,r.default)({type:e},(function(e){return!o(e)||t.test(e)}))};t.regex=u},8750:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r="web"===Object({NODE_ENV:"production",VUE_APP_APIKEY:"",VUE_APP_APPId:"",VUE_APP_AUTHDOMAIN:"",VUE_APP_BASE_API_URL:"http://secureme.api.xyz/api/",VUE_APP_BASE_API_URL_AVATAR:"http://secureme.api.xyz/storage/avatar/",VUE_APP_BASE_API_URL_IMAGE:"http://secureme.api.xyz/storage/",VUE_APP_DATABASEURL:"db.xyz",VUE_APP_DEFAULT_AUTH:"auth-backendx",VUE_APP_DEFAULT_THEME:"light",VUE_APP_I18N_FALLBACK_LOCALE:"en",VUE_APP_I18N_LOCALE:"en",VUE_APP_MEASUREMENTID:"",VUE_APP_MESSAGINGSENDERID:"",VUE_APP_PROJECTId:"",VUE_APP_STORAGEBUCKET:"",BASE_URL:"/"}).BUILD?a("cb69").withParams:a("0234").withParams,i=r;t.default=i},"91d3":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,r.withParams)({type:"macAddress"},(function(t){if(!(0,r.req)(t))return!0;if("string"!==typeof t)return!1;var a="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==a&&(6===a.length||8===a.length)&&a.every(n)}))};t.default=i;var n=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},a3e8:function(e,t,a){"use strict";var r=a("cbe3"),i=a.n(r);i.a},aa82:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),i=function(e){return(0,r.withParams)({type:"requiredIf",prop:e},(function(t,a){return!(0,r.ref)(e,this,a)||(0,r.req)(t)}))};t.default=i},b5ae:function(e,t,a){"use strict";function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return C.default}}),t.helpers=void 0;var i=O(a("6235")),n=O(a("3a54")),o=O(a("45b8")),s=O(a("ec11")),c=O(a("5d75")),u=O(a("c99d")),l=O(a("91d3")),d=O(a("2a12")),f=O(a("5db3")),m=O(a("d4f4")),p=O(a("aa82")),v=O(a("e652")),_=O(a("b6cb")),g=O(a("772d")),b=O(a("d294")),h=O(a("3360")),k=O(a("6417")),y=O(a("eb66")),P=O(a("46bc")),$=O(a("1331")),C=O(a("c301")),x=A(a("78ef"));function w(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return w=function(){return e},e}function A(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var t=w();if(t&&t.has(e))return t.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=i?Object.getOwnPropertyDescriptor(e,n):null;o&&(o.get||o.set)?Object.defineProperty(a,n,o):a[n]=e[n]}return a.default=e,t&&t.set(e,a),a}function O(e){return e&&e.__esModule?e:{default:e}}t.helpers=x},b6cb:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),i=function(e){return(0,r.withParams)({type:"sameAs",eq:e},(function(t,a){return t===(0,r.ref)(e,this,a)}))};t.default=i},c301:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),i=(0,r.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=i},c99d:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),i=(0,r.withParams)({type:"ipAddress"},(function(e){if(!(0,r.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(n)}));t.default=i;var n=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,a){"use strict";(function(e){function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var r="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},i=function(e,t){return"object"===a(e)&&void 0!==t?t:e((function(){}))},n=r.vuelidate?r.vuelidate.withParams:i;t.withParams=n}).call(this,a("c8ba"))},cbe3:function(e,t,a){},d294:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),i=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.withParams)({type:"or"},(function(){for(var e=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return t.length>0&&t.reduce((function(t,a){return t||a.apply(e,r)}),!1)}))};t.default=i},d4f4:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),i=(0,r.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,r.req)(e.trim()):(0,r.req)(e)}));t.default=i},e652:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),i=function(e){return(0,r.withParams)({type:"requiredUnless",prop:e},(function(t,a){return!!(0,r.ref)(e,this,a)||(0,r.req)(t)}))};t.default=i},eb66:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),i=function(e){return(0,r.withParams)({type:"minValue",min:e},(function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t.default=i},ec11:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),i=function(e,t){return(0,r.withParams)({type:"between",min:e,max:t},(function(a){return!(0,r.req)(a)||(!/\s/.test(a)||a instanceof Date)&&+e<=+a&&+t>=+a}))};t.default=i}}]);
//# sourceMappingURL=chunk-252cb7e3.77b1a2ea.js.map