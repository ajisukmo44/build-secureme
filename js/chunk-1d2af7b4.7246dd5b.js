(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d2af7b4"],{7006:function(e,s,t){e.exports=t.p+"img/profile-img.ba4e037e.png"},e347:function(e,s,t){e.exports=t.p+"img/logo.4dbbacd2.svg"},ffd4:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("Layout",[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-8 col-lg-6 col-xl-5"},[a("div",{staticClass:"card overflow-hidden"},[a("div",{staticClass:"bg-soft-primary"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-7"},[a("div",{staticClass:"text-primary p-4"},[a("h5",{staticClass:"text-primary"},[e._v("Free Register")]),a("p",[e._v("Get your free Skote account now.")])])]),a("div",{staticClass:"col-5 align-self-end"},[a("img",{staticClass:"img-fluid",attrs:{src:t("7006"),alt:""}})])])]),a("div",{staticClass:"card-body pt-0"},[a("div",[a("router-link",{attrs:{tag:"a",to:"/"}},[a("div",{staticClass:"avatar-md profile-user-wid mb-4"},[a("span",{staticClass:"avatar-title rounded-circle bg-light"},[a("img",{staticClass:"rounded-circle",attrs:{src:t("e347"),alt:"",height:"34"}})])])])],1),a("b-alert",{staticClass:"mt-3",attrs:{variant:"success",dismissible:""},model:{value:e.registerSuccess,callback:function(s){e.registerSuccess=s},expression:"registerSuccess"}},[e._v("Registration successfull.")]),a("b-alert",{staticClass:"mt-3",attrs:{variant:"danger",dismissible:""},model:{value:e.isRegisterError,callback:function(s){e.isRegisterError=s},expression:"isRegisterError"}},[e._v(e._s(e.regError))]),e.notification.message?a("div",{class:"alert "+e.notification.type},[e._v(e._s(e.notification.message))]):e._e(),a("b-form",{staticClass:"p-2",on:{submit:function(s){return s.preventDefault(),e.tryToRegisterIn(s)}}},[a("b-form-group",{attrs:{id:"email-group",label:"Username","label-for":"username"}},[a("b-form-input",{class:{"is-invalid":e.submitted&&e.$v.user.username.$error},attrs:{id:"username",type:"text",placeholder:"Enter username"},model:{value:e.user.username,callback:function(s){e.$set(e.user,"username",s)},expression:"user.username"}}),e.submitted&&!e.$v.user.username.required?a("div",{staticClass:"invalid-feedback"},[e._v("Username is required.")]):e._e()],1),a("b-form-group",{attrs:{id:"fullname-group",label:"Email","label-for":"email"}},[a("b-form-input",{class:{"is-invalid":e.submitted&&e.$v.user.email.$error},attrs:{id:"email",type:"email",placeholder:"Enter email"},model:{value:e.user.email,callback:function(s){e.$set(e.user,"email",s)},expression:"user.email"}}),e.submitted&&e.$v.user.email.$error?a("div",{staticClass:"invalid-feedback"},[e.$v.user.email.required?e._e():a("span",[e._v("Email is required.")]),e.$v.user.email.email?e._e():a("span",[e._v("Please enter valid email.")])]):e._e()],1),a("b-form-group",{attrs:{id:"password-group",label:"Password","label-for":"password"}},[a("b-form-input",{class:{"is-invalid":e.submitted&&e.$v.user.password.$error},attrs:{id:"password",type:"password",placeholder:"Enter password"},model:{value:e.user.password,callback:function(s){e.$set(e.user,"password",s)},expression:"user.password"}}),e.submitted&&!e.$v.user.password.required?a("div",{staticClass:"invalid-feedback"},[e._v("Password is required.")]):e._e()],1),a("div",{staticClass:"mt-4"},[a("b-button",{staticClass:"btn-block",attrs:{type:"submit",variant:"primary"}},[e._v("Register")])],1),a("div",{staticClass:"mt-4 text-center"},[a("p",{staticClass:"mb-0"},[e._v(" By registering you agree to the Skote "),a("a",{staticClass:"text-primary",attrs:{href:"javascript: void(0);"}},[e._v("Terms of Use")])])])],1)],1)]),a("div",{staticClass:"mt-5 text-center"},[a("p",[e._v(" Already have an account ? "),a("router-link",{staticClass:"font-weight-medium text-primary",attrs:{tag:"a",to:"/login"}},[e._v("Login")])],1),a("p",[e._v(" © "+e._s((new Date).getFullYear())+" Skote. Crafted with "),a("i",{staticClass:"mdi mdi-heart text-danger"}),e._v(" by Themesbrand ")])])])])])},r=[],i=(t("a4d3"),t("e01a"),t("5530")),l=t("4d77"),o=t("29b0"),n=t("c2a4"),u=t("2f62"),c=t("b5ae"),d={page:{title:"Register",meta:[{name:"description",content:n.description}]},components:{Layout:o["a"]},data:function(){return{user:{username:"",email:"",password:""},submitted:!1,regError:null,tryingToRegister:!1,isRegisterError:!1,registerSuccess:!1}},validations:{user:{username:{required:c["required"]},email:{required:c["required"],email:c["email"]},password:{required:c["required"]}}},computed:Object(i["a"])({},Object(u["d"])("authfack",["status"]),{notification:function(){return this.$store?this.$store.state.notification:null}}),methods:Object(i["a"])({},l["c"],{},l["authFackMethods"],{},l["f"],{tryToRegisterIn:function(){if(this.submitted=!0,this.$v.$touch(),!this.$v.$invalid){var e=this.user,s=e.email,t=e.username,a=e.password;s&&t&&a&&this.registeruser(this.user)}}})},m=d,v=t("2877"),p=Object(v["a"])(m,a,r,!1,null,null,null);s["default"]=p.exports}}]);
//# sourceMappingURL=chunk-1d2af7b4.7246dd5b.js.map