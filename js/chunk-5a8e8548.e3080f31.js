(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a8e8548"],{"7e6a":function(t,a,e){"use strict";var s=e("9c57"),i=e.n(s);i.a},9140:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("Layout",[s("PageHeader",{attrs:{title:t.title,items:t.items}}),"su"==t.user_type||"adm"==t.user_type?s("div",{staticClass:"row mb-1"},[s("div",{staticClass:"col-xl-4 mb-3 h-100"},[s("div",{staticClass:"card h-100"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"float-right ml-2"},[s("h4",{staticClass:"card-title"},[t._v(t._s(t.$t("dashboard.top-agent"))+" ")])]),s("div",[s("div",{staticClass:"mb-3 mr-3"},[s("img",{staticClass:"mr-3 rounded-circle avatar-md",attrs:{src:e("4b9b"),alt:"user-pic"}})]),s("div",[t.top_agent.name?s("h5",[s("b",[t._v(t._s(t.top_agent.name))])]):s("h5",[s("b",[t._v("-")])]),t.top_agent.birth_date?s("p",{staticClass:"text-muted mb-0"},[t._v(t._s(t.top_agent.birth_date))]):s("p",{staticClass:"text-muted mb-0"},[t._v("-")]),t.top_agent.email?s("p",{staticClass:"text-muted mb-0"},[t._v(t._s(t.top_agent.email))]):s("p",{staticClass:"text-muted mb-0"},[t._v("-")])])])]),s("div",{staticClass:"card-body border-top"},[s("div",{staticClass:"row pb-3"},[s("div",{staticClass:"col-sm-4"},[s("div",[s("p",{staticClass:"font-weight-medium mb-1"},[t._v(t._s(t.$t("dashboard.total-case")))]),t.top_agent.total?s("h2",[t._v(t._s(t.top_agent.total))]):s("h2",[s("i",{staticClass:"bx bx-loader bx-spin font-size-16 align-middle mr-2"})])])]),s("div",{staticClass:"col-sm-8"},[s("div",[s("p",{staticClass:"font-weight-medium mb-1"},[t._v(t._s(t.$t("user-management.region")))]),t.top_agent.region_name?s("h4",[t._v(t._s(t.top_agent.region_name))]):s("h4",[t._v("-")])])])])])])]),s("div",{staticClass:"col-xl-8 mb-3 h-100"},[s("div",{staticClass:"card"}),s("div",{staticClass:"row mt-0"},["su"==t.user_type?s("div",{staticClass:"col-sm-4 px-2"},[s("div",{staticClass:"card"},[s("router-link",{attrs:{to:"/user-management"}},[s("div",{staticClass:"card-body"},[s("p",{staticClass:"text-muted mb-4"},[s("i",{staticClass:"mdi mdi-account-box-outline h2 text-primary align-middle mb-0 mr-3"}),t._v(" "+t._s(t.$t("dashboard.total-admin"))+" ")]),s("div",{staticClass:"row pb-3"},[s("div",{staticClass:"col-6"},[s("div",[t.total_admin?s("h2",[t._v(t._s(t.total_admin))]):s("h2",[s("i",{staticClass:"bx bx-loader bx-spin font-size-16 align-middle mr-2"})]),s("p",{staticClass:"text-muted text-truncate mb-0"})])]),s("div",{staticClass:"col-6"},[s("div",[s("apexchart",{staticClass:"apex-charts",attrs:{height:"40",type:"area",dir:"ltr",series:t.ethereumChart.series,options:t.ethereumChart.chartOptions}})],1)])])])])],1)]):t._e(),s("div",{staticClass:"col-sm-4 px-2"},[s("div",{staticClass:"card"},[s("router-link",{attrs:{to:"/user-management"}},[s("div",{staticClass:"card-body"},[s("p",{staticClass:"text-muted mb-4"},[s("i",{staticClass:"mdi mdi-account-box-outline h2 text-primary align-middle mb-0 mr-3"}),t._v(" "+t._s(t.$t("dashboard.total-cs"))+" ")]),s("div",{staticClass:"row pb-3"},[s("div",{staticClass:"col-6"},[s("div",[t.total_cs?s("h2",[t._v(t._s(t.total_cs))]):s("h2",[s("i",{staticClass:"bx bx-loader bx-spin font-size-16 align-middle mr-2"})]),s("p",{staticClass:"text-muted text-truncate mb-0"})])]),s("div",{staticClass:"col-6"},[s("div",[s("apexchart",{staticClass:"apex-charts",attrs:{height:"40",type:"area",dir:"ltr",series:t.ethereumChart.series,options:t.ethereumChart.chartOptions}})],1)])])])])],1)]),s("div",{staticClass:"col-sm-4 px-2"},[s("div",{staticClass:"card"},[s("router-link",{attrs:{to:"/agent-management"}},[s("div",{staticClass:"card-body"},[s("p",{staticClass:"text-muted mb-4"},[s("i",{staticClass:"mdi mdi-account-box-outline h2 text-primary align-middle mb-0 mr-3"}),t._v(" "+t._s(t.$t("dashboard.total-agent"))+" ")]),s("div",{staticClass:"row pb-3"},[s("div",{staticClass:"col-6"},[s("div",[t.total_agent?s("h2",[t._v(t._s(t.total_agent))]):s("h2",[s("i",{staticClass:"bx bx-loader bx-spin font-size-16 align-middle mr-2"})]),s("p",{staticClass:"text-muted text-truncate mb-0"})])]),s("div",{staticClass:"col-6"},[s("div",[s("apexchart",{staticClass:"apex-charts",attrs:{height:"40",type:"area",dir:"ltr",series:t.ethereumChart.series,options:t.ethereumChart.chartOptions}})],1)])])])])],1)]),"adm"==t.user_type?s("div",{staticClass:"col-sm-4 px-2"},[s("div",{staticClass:"card"},[s("router-link",{attrs:{to:"/"}},[s("div",{staticClass:"card-body"},[s("p",{staticClass:"text-muted mb-4"},[s("i",{staticClass:"mdi mdi-account-box-outline h2 text-primary align-middle mb-0 mr-3"}),t._v(" "+t._s(t.$t("dashboard.total-subscription"))+" ")]),s("div",{staticClass:"row pb-3"},[s("div",{staticClass:"col-6"},[s("div",[t.total_subscribe||"0"==t.total_subscribe?s("h2",[t._v(t._s(t.total_subscribe))]):s("h2",[s("i",{staticClass:"bx bx-loader bx-spin font-size-16 align-middle mr-2"})]),s("p",{staticClass:"text-muted text-truncate mb-0"})])]),s("div",{staticClass:"col-6"},[s("div",[s("apexchart",{staticClass:"apex-charts",attrs:{height:"40",type:"area",dir:"ltr",series:t.ethereumChart.series,options:t.ethereumChart.chartOptions}})],1)])])])])],1)]):t._e()]),s("div",{staticClass:"row mt-3"},[s("div",{staticClass:"col-sm-4 px-2"},[s("div",{staticClass:"card"},[s("router-link",{attrs:{to:"/package"}},[s("div",{staticClass:"card-body"},[s("p",{staticClass:"text-muted mb-4"},[s("i",{staticClass:"mdi mdi-card-text-outline  h2 text-primary align-middle mb-0 mr-3"}),t._v(" "+t._s(t.$t("dashboard.total-packages"))+" ")]),s("div",{staticClass:"row pb-3"},[s("div",{staticClass:"col-6"},[s("div",[t.total_package?s("h2",[t._v(t._s(t.total_package))]):s("h2",[s("i",{staticClass:"bx bx-loader bx-spin font-size-16 align-middle mr-2"})]),s("p",{staticClass:"text-muted text-truncate mb-0"})])]),s("div",{staticClass:"col-6"},[s("div",[s("apexchart",{staticClass:"apex-charts",attrs:{height:"40",type:"area",dir:"ltr",series:t.ethereumChart.series,options:t.ethereumChart.chartOptions}})],1)])])])])],1)]),s("div",{staticClass:"col-sm-4 px-2"},[s("div",{staticClass:"card"},[s("router-link",{attrs:{to:"/region"}},[s("div",{staticClass:"card-body"},[s("p",{staticClass:"text-muted mb-4"},[s("i",{staticClass:"mdi mdi-map-marker-radius-outline h2 text-primary align-middle mb-0 mr-3"}),t._v(" "+t._s(t.$t("dashboard.total-region"))+" ")]),s("div",{staticClass:"row pb-3"},[s("div",{staticClass:"col-6"},[s("div",[t.total_region?s("h2",[t._v(t._s(t.total_region))]):s("h2",[s("i",{staticClass:"bx bx-loader bx-spin font-size-16 align-middle mr-2"})]),s("p",{staticClass:"text-muted text-truncate mb-0"})])]),s("div",{staticClass:"col-6"},[s("div",[s("apexchart",{staticClass:"apex-charts",attrs:{height:"40",type:"area",dir:"ltr",series:t.ethereumChart.series,options:t.ethereumChart.chartOptions}})],1)])])])])],1)]),s("div",{staticClass:"col-sm-4 px-2"},[s("div",{staticClass:"card"},[s("router-link",{attrs:{to:"/customer-management"}},[s("div",{staticClass:"card-body"},[s("p",{staticClass:"text-muted mb-4"},[s("i",{staticClass:"mdi mdi-map-marker-radius-outline h2 text-primary align-middle mb-0 mr-3"}),t._v(" "+t._s(t.$t("dashboard.total-customer"))+" ")]),s("div",{staticClass:"row pb-3"},[s("div",{staticClass:"col-6"},[s("div",[t.total_customer?s("h2",[t._v(t._s(t.total_customer))]):s("h2",[s("i",{staticClass:"bx bx-loader bx-spin font-size-16 align-middle mr-2"})]),s("p",{staticClass:"text-muted text-truncate mb-0"})])]),s("div",{staticClass:"col-6"},[s("div",[s("apexchart",{staticClass:"apex-charts",attrs:{height:"40",type:"area",dir:"ltr",series:t.ethereumChart.series,options:t.ethereumChart.chartOptions}})],1)])])])])],1)])])])]):t._e(),"su"==t.user_type||"adm"==t.user_type?s("div",{staticClass:"row mb-1"},[s("div",{staticClass:"col-xl-7 mb-3"},[s("div",{staticClass:"card h-100"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"float-right"}),s("h4",{staticClass:"card-title mb-2"},[t._v(t._s(t.$t("dashboard.case-report")))]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"mt-4"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("div",{staticClass:"mt-3"},[s("p",[t._v(t._s(t.$t("dashboard.total-case")))]),t.total_case?s("h4",[t._v(t._s(t.total_case))]):s("h4",[s("i",{staticClass:"bx bx-loader bx-spin font-size-16 align-middle mr-2"})])])]),s("div",{staticClass:"col-6"},[s("div",{staticClass:"mt-3"},[s("p",{staticClass:"mb-2"},[t._v(t._s(t.$t("dashboard.total-images")))]),t.total_upload?s("h4",[t._v(t._s(t.total_upload.images))]):s("h4",[s("i",{staticClass:"bx bx-loader bx-spin font-size-16 align-middle mr-2"})])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("div",{staticClass:"mt-3"},[s("p",{staticClass:"mb-2"},[t._v(t._s(t.$t("dashboard.total-report")))]),t.total_report?s("h4",[t._v(t._s(t.total_report))]):s("h4",[s("i",{staticClass:"bx bx-loader bx-spin font-size-16 align-middle mr-2"})])])]),s("div",{staticClass:"col-6"},[s("div",{staticClass:"mt-3"},[s("p",{staticClass:"mb-2"},[t._v(t._s(t.$t("dashboard.total-video")))]),t.total_upload?s("h4",[t._v(t._s(t.total_upload.videos))]):s("h4",[s("i",{staticClass:"bx bx-loader bx-spin font-size-16 align-middle mr-2"})])])])]),s("div",{staticClass:"mt-4"},[s("a",{staticClass:"btn btn-primary btn-sm",attrs:{href:"/case-management",target:"_blank"}},[t._v(" "+t._s(t.$t("all.view-more"))+" "),s("i",{staticClass:"mdi mdi-arrow-right ml-1"})])])])]),s("div",{staticClass:"col-lg-6"},[s("div",[s("apexchart",{staticClass:"apex-charts",attrs:{dir:"ltr",type:"radialBar",height:"300",series:t.caseReportChart.series,options:{chart:{height:300,type:"radialBar"},plotOptions:{radialBar:{offsetY:0,startAngle:0,endAngle:270,hollow:{margin:2,size:"30%",background:"transparent",image:void 0},track:{show:!0,startAngle:void 0,endAngle:void 0,background:"#f2f2f2",strokeWidth:"97%",opacity:1,margin:12,dropShadow:{enabled:!1,top:0,left:0,blur:3,opacity:.5}},fill:{colors:"#174F80"},dataLabels:{name:{show:!0,color:"#174F80",fontSize:"16px",fontWeight:600,offsetY:-10},value:{show:!0,color:"dark"==this.theme?"#eeeeee":"",fontSize:"14px",offsetY:4,formatter:function(t){return t+""}},total:{show:!0,label:"Total",color:"dark"==this.theme?"#eeeeee":"",fontSize:"14px",fontFamily:void 0,fontWeight:600,formatter:function(t){return t.globals.seriesTotals.reduce((function(t,a){return t+a}),0)}}}}},stroke:{lineCap:"round"},colors:t.x_color,labels:t.x_category,legend:{show:!0,position:"bottom",labels:{colors:"dark"==this.theme?"#eeeeee":"",useSeriesColors:!1}}}}})],1)])])])])]),s("div",{staticClass:"col-xl-5 mb-3"},[s("div",{staticClass:"card h-100"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title mb-3"},[t._v(t._s(t.$t("dashboard.finished-daily-report")))]),s("div",[s("div",{staticClass:"apex-charts",attrs:{id:"overview-chart",dir:"ltr"}},[s("div",{staticClass:"toolbar button-items text-center"}),s("apexchart",{staticClass:"apex-charts",attrs:{type:"area",height:"275",dir:"ltr",series:t.finishedDailyChart.series,options:{chart:{id:"pageview-chart",toolbar:{show:!1}},dataLabels:{enabled:!0},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},markers:{size:0,style:"hollow"},colors:["#174F80"],xaxis:{type:"category",categories:t.x_cat,labels:{show:!0,colors:"#174F80",hideOverlappingLabels:!1,style:{colors:"dark"==this.theme?"#eeeeee":""}}},yaxis:{labels:{show:!0,align:"right",minWidth:0,maxWidth:160,style:{colors:"dark"==this.theme?"#eeeeee":""}}},fill:{colors:"#174F80",type:"dark"==this.theme?"":"gradient"}}}})],1)])])])])]):t._e(),"cs"==t.user_type?s("div",{staticClass:"row mb-4"},[s("div",{staticClass:"col-xl-7"},[s("div",{staticClass:"card h-100"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"float-right"}),s("h4",{staticClass:"card-title mb-2"},[t._v(t._s(t.$t("dashboard.case-report")))]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"mt-4"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("div",{staticClass:"mt-3"},[s("p",[t._v(t._s(t.$t("dashboard.total-case")))]),t.total_case?s("h4",[t._v(t._s(t.total_case))]):s("h4",[t._v("-")])])]),s("div",{staticClass:"col-6"},[s("div",{staticClass:"mt-3"},[s("p",{staticClass:"mb-2"},[t._v(t._s(t.$t("dashboard.total-images")))]),t.total_upload?s("h4",[t._v(t._s(t.total_upload.images))]):s("h4",[t._v("-")])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("div",{staticClass:"mt-3"},[s("p",{staticClass:"mb-2"},[t._v(t._s(t.$t("dashboard.total-report")))]),t.total_report?s("h4",[t._v(t._s(t.total_report))]):s("h4",[t._v("-")])])]),s("div",{staticClass:"col-6"},[s("div",{staticClass:"mt-3"},[s("p",{staticClass:"mb-2"},[t._v(t._s(t.$t("dashboard.total-video")))]),t.total_upload?s("h4",[t._v(t._s(t.total_upload.videos))]):s("h4",[t._v("-")])])])]),s("div",{staticClass:"mt-4"},[s("a",{staticClass:"btn btn-primary btn-sm",attrs:{href:"/case-management",target:"_blank"}},[t._v(" "+t._s(t.$t("all.view-more"))+" "),s("i",{staticClass:"mdi mdi-arrow-right ml-1"})])])])]),s("div",{staticClass:"col-lg-6"},[s("div",[s("apexchart",{staticClass:"apex-charts",attrs:{dir:"ltr",type:"radialBar",height:"300",series:t.caseReportChart.series,options:{chart:{height:300,type:"radialBar"},plotOptions:{radialBar:{offsetY:0,startAngle:0,endAngle:270,hollow:{margin:2,size:"30%",background:"transparent",image:void 0},track:{show:!0,startAngle:void 0,endAngle:void 0,background:"#f2f2f2",strokeWidth:"97%",opacity:1,margin:12,dropShadow:{enabled:!1,top:0,left:0,blur:3,opacity:.5}},fill:{colors:"#174F80"},dataLabels:{name:{show:!0,color:"#174F80",fontSize:"16px",fontWeight:600,offsetY:-10},value:{show:!0,color:"dark"==this.theme?"#eeeeee":"",fontSize:"14px",offsetY:4,formatter:function(t){return t+""}},total:{show:!0,label:"Total",color:"dark"==this.theme?"#eeeeee":"",fontSize:"14px",fontFamily:void 0,fontWeight:600,formatter:function(t){return t.globals.seriesTotals.reduce((function(t,a){return t+a}),0)}}}}},stroke:{lineCap:"round"},colors:t.x_color,labels:t.x_category,legend:{show:!0,position:"bottom",labels:{colors:"dark"==this.theme?"#eeeeee":"",useSeriesColors:!1}}}}})],1)])])])])]),s("div",{staticClass:"col-xl-5"},[s("div",{staticClass:"card h-100"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title mb-3"},[t._v(t._s(t.$t("dashboard.finished-daily-report")))]),s("div",[s("div",{staticClass:"apex-charts",attrs:{id:"overview-chart",dir:"ltr"}},[s("div",{staticClass:"toolbar button-items text-center"}),s("apexchart",{staticClass:"apex-charts",attrs:{type:"area",height:"275",dir:"ltr",series:t.finishedDailyChart.series,options:{chart:{id:"pageview-chart",toolbar:{show:!1}},dataLabels:{enabled:!0},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},markers:{size:0,style:"hollow"},colors:["#174F80"],xaxis:{type:"category",categories:t.x_cat,labels:{show:!0,colors:"#174F80",hideOverlappingLabels:!1,style:{colors:"dark"==this.theme?"#eeeeee":""}}},yaxis:{labels:{show:!0,align:"right",minWidth:0,maxWidth:160,style:{colors:"dark"==this.theme?"#eeeeee":""}}},fill:{colors:"#174F80",type:"dark"==this.theme?"":"gradient"}}}})],1)])])])])]):t._e(),s("div",{staticClass:"row mb-4"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title mb-4"},[t._v(t._s(t.$t("dashboard.recent-report")))]),t.recent_report&&!t.loading_recent_report?s("div",{staticClass:"table-responsive mb-0"},[s("table",{staticClass:"table  table-nowrap"},[s("thead",{staticClass:"thead-white"},[s("tr",[s("th",{attrs:{width:"25%"}},[t._v(t._s(t.$t("case.id-case")))]),s("th",[t._v(t._s(t.$t("case.title")))]),s("th",{attrs:{width:"16%"}},[t._v("Status")]),s("th",{attrs:{width:"17%"}},[t._v(t._s(t.$t("all.created-at")))]),s("th",{staticClass:"text-center",attrs:{width:"7%"}},[t._v(t._s(t.$t("button.action")))])])]),s("tbody",t._l(t.recent_report,(function(a){return s("tr",{key:a.id_report},[s("td",[s("b",[t._v(t._s(a.name))]),t._v(" "),s("br"),s("span",{staticClass:"text-muted font-size-12"},[t._v(t._s(a.id_case))])]),s("td",[t._v(" "+t._s(a.title)+" ")]),s("td",["in_handling"==a.report_status?s("span",{staticClass:"badge-pill badge-soft-warning px-2 py-1 rounded"},[t._v(" "+t._s(a.report_status)+" ")]):t._e(),"accepted"==a.report_status?s("span",{staticClass:"badge-pill badge-soft-info px-2 py-1 rounded"},[t._v(" "+t._s(a.report_status)+" ")]):t._e(),"finished"==a.report_status?s("span",{staticClass:"badge-pill badge-soft-success px-2 py-1 rounded"},[t._v(" "+t._s(a.report_status)+" ")]):t._e()]),s("td",[t._v(" "+t._s(t.formatDate(a.created_at))+" ")]),s("td",{staticClass:"text-center"},[s("router-link",{attrs:{to:"/case-management-detail/"+a.id_case}},[s("button",{staticClass:"btn btn-primary btn-sm btn-rounded",attrs:{type:"button"}},[t._v(t._s(t.$t("all.details")))])])],1)])})),0)])]):t._e(),t.loading_recent_report?s("div",{staticClass:"row mt-5 mb-5 mx-auto"},[s("div",{staticClass:"col-12 p-5 m-4 text-center"},[s("div",{staticClass:"spinner-border text-secondary",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[t._v("Loading..")])])])]):t._e()])])])]),"su"==t.user_type||"adm"==t.user_type?s("div",{staticClass:"row mb-4"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title mb-4"},[t._v(t._s(t.$t("dashboard.agent-last-update")))]),t.agent_last_update&&!t.loading_agent_last?s("div",{staticClass:"table-responsive mb-0"},[s("table",{staticClass:"table"},[s("thead",{staticClass:"thead-white"},[s("tr",[s("th",{attrs:{width:"25%"}},[t._v(t._s(t.$t("user-management.agent")))]),s("th",[t._v("Email")]),s("th",{attrs:{width:"16%"}},[t._v("Status")]),s("th",{attrs:{width:"17%"}},[t._v(t._s(t.$t("all.updated")))]),s("th",{staticClass:"text-center",attrs:{width:"7%"}},[t._v(t._s(t.$t("button.action")))])])]),s("tbody",t._l(t.agent_last_update,(function(a){return s("tr",{key:a.id_agen},[s("td",[s("b",[t._v(t._s(a.name))]),t._v(" "),s("br"),s("span",{staticClass:"text-muted font-size-12"},[t._v(t._s(a.nik))])]),s("td",[t._v(" "+t._s(a.email)+" ")]),s("td",[a.is_ready?s("div",{staticClass:"mb-1"},[s("span",{staticClass:"badge badge-soft-success font-size-12 rounded"},[t._v(" "+t._s(t.$t("user-management.is-ready"))+" ")])]):t._e(),a.is_in_case?s("div",{staticClass:"mb-1"},[s("span",{staticClass:"badge badge-soft-warning font-size-12 p-1 rounded"},[t._v(" "+t._s(t.$t("user-management.is-in-case"))+" ")])]):t._e(),a.is_ready||a.is_in_case?t._e():s("span",{},[t._v(" - ")])]),s("td",[t._v(" "+t._s(t.formatDate(a.updated_at))+" ")]),s("td",{staticClass:"text-center"},[s("router-link",{attrs:{to:{name:"agent-management-detail",params:{id:a.id_agent}}}},[s("button",{staticClass:"btn btn-primary btn-sm btn-rounded",attrs:{type:"button"}},[t._v(t._s(t.$t("all.details")))])])],1)])})),0)])]):t._e(),t.loading_agent_last?s("div",{staticClass:"row mt-5 mb-5 mx-auto"},[s("div",{staticClass:"col-12 p-5 m-4 text-center"},[s("div",{staticClass:"spinner-border text-secondary",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[t._v("Loading..")])])])]):t._e()])])])]):t._e(),"su"==t.user_type||"adm"==t.user_type?s("div",{staticClass:"row mb-4"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title mb-4"},[t._v(t._s(t.$t("dashboard.top-agent")))]),t.top_agent_list&&!t.loading_top_agent?s("div",{staticClass:"table-responsive mb-0"},[s("table",{staticClass:"table"},[s("thead",{staticClass:"thead-white"},[s("tr",[s("th",{attrs:{width:"25%"}},[t._v(t._s(t.$t("user-management.name")))]),s("th",[t._v("Email")]),s("th",{attrs:{width:"16%"}},[t._v(t._s(t.$t("user-management.region")))]),s("th",{attrs:{width:"17%"}},[t._v(t._s(t.$t("dashboard.total-case")))]),s("th",{staticClass:"text-center",attrs:{width:"7%"}},[t._v(t._s(t.$t("button.action")))])])]),s("tbody",t._l(t.top_agent_list,(function(a){return s("tr",{key:a.id_agen},[s("td",[s("b",[t._v(t._s(a.name))]),t._v(" "),s("br"),s("span",{staticClass:"text-muted font-size-12"},[t._v(t._s(a.birth_date))])]),s("td",[t._v(" "+t._s(a.email)+" ")]),s("td",[t._v(" "+t._s(a.region_name)+" ("+t._s(a.region_number)+") ")]),s("td",[t._v(" "+t._s(a.total)+" ")]),s("td",{staticClass:"text-center"},[s("router-link",{attrs:{to:{name:"agent-management-detail",params:{id:a.id_agent}}}},[s("button",{staticClass:"btn btn-primary btn-sm btn-rounded",attrs:{type:"button"}},[t._v(" "+t._s(t.$t("all.details")))])])],1)])})),0)])]):t._e(),t.loading_top_agent?s("div",{staticClass:"row mt-5 mb-5 mx-auto"},[s("div",{staticClass:"col-12 p-5 m-4 text-center"},[s("div",{staticClass:"spinner-border text-secondary",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[t._v("Loading..")])])])]):t._e()])])])]):t._e()],1)},i=[],r=(e("a4d3"),e("e01a"),e("4160"),e("159b"),e("444f")),o=e("c2a4"),l=e("2579"),d=e("8d3b"),c=e("d4ec"),n=e("bee2"),h=e("bc3a"),m=e.n(h),p=e("6808"),_="http://secureme.api.xyz/api/",u=function(){function t(){Object(c["a"])(this,t)}return Object(n["a"])(t,[{key:"getTopAgent",value:function(){return m.a.get(_+"statistics/top-agent",{headers:Object(p["a"])()})}},{key:"getTotalAgent",value:function(){return m.a.get(_+"statistics/total-agents",{headers:Object(p["a"])()})}},{key:"getTotalAdmin",value:function(){return m.a.get(_+"statistics/total-admins",{headers:Object(p["a"])()})}},{key:"getTotalCs",value:function(){return m.a.get(_+"statistics/total-cs",{headers:Object(p["a"])()})}},{key:"getTotalCustomer",value:function(){return m.a.get(_+"statistics/total-customers",{headers:Object(p["a"])()})}},{key:"getTotalCase",value:function(){return m.a.get(_+"statistics/total-case",{headers:Object(p["a"])()})}},{key:"getTotalSubcribe",value:function(){return m.a.get(_+"statistics/total-subscription",{headers:Object(p["a"])()})}},{key:"getTotalPackage",value:function(){return m.a.get(_+"statistics/total-packages",{headers:Object(p["a"])()})}},{key:"getTotalRegion",value:function(){return m.a.get(_+"statistics/total-region",{headers:Object(p["a"])()})}},{key:"gettotalUpload",value:function(){return m.a.get(_+"statistics/total-uploads",{headers:Object(p["a"])()})}},{key:"getTopAgent",value:function(){return m.a.get(_+"statistics/top-agents",{headers:Object(p["a"])()})}},{key:"getTotalReport",value:function(){return m.a.get(_+"statistics/total-reports",{headers:Object(p["a"])()})}},{key:"getRecentReport",value:function(){return m.a.get(_+"statistics/recent-reports",{headers:Object(p["a"])()})}},{key:"getAgentLastUpdate",value:function(){return m.a.get(_+"statistics/agents-last-update",{headers:Object(p["a"])()})}},{key:"getFinishedDaily",value:function(){return m.a.get(_+"statistics/finished-daily-report",{headers:Object(p["a"])()})}},{key:"getCategoryReport",value:function(){return m.a.get(_+"statistics/total-report-by-category",{headers:Object(p["a"])()})}}]),t}(),g=new u,v=e("973b"),b=e("86b6"),C=e("c1df"),f=e.n(C),x=(e("13d5"),{series:[{name:"BTC",data:[[13273596e5,30.95],[1327446e6,31.34],[13275324e5,31.18],[13276188e5,31.05],[1327878e6,31],[13279644e5,30.95],[13280508e5,31.24],[13281372e5,31.29],[13282236e5,31.85],[13284828e5,31.86],[13285692e5,32.28],[13286556e5,32.1],[1328742e6,32.65],[13288284e5,32.21],[13290876e5,32.35],[1329174e6,32.44],[13292604e5,32.46],[13293468e5,32.86],[13294332e5,32.75],[13297788e5,32.54],[13298652e5,32.33],[13299516e5,32.97],[1330038e6,33.41],[13302972e5,33.27],[13303836e5,33.27],[133047e7,32.89],[13305564e5,33.1],[13306428e5,33.73],[1330902e6,33.22],[13309884e5,31.99],[13310748e5,32.41],[13311612e5,33.05],[13312476e5,33.64],[13315068e5,33.56],[13315932e5,34.22],[13316796e5,33.77],[1331766e6,34.17],[13318524e5,33.82],[13321116e5,34.51],[1332198e6,33.16],[13322844e5,33.56],[13323708e5,33.71],[13324572e5,33.81],[13327128e5,34.4],[13327992e5,34.63],[13328856e5,34.46],[1332972e6,34.48],[13330584e5,34.31],[13333176e5,34.7],[1333404e6,34.31],[13334904e5,33.46],[13335768e5,33.59],[13339224e5,33.22],[13340088e5,32.61],[13340952e5,33.01],[13341816e5,33.55],[1334268e6,33.18],[13345272e5,32.84],[13346136e5,33.84],[13347e8,33.39],[13347864e5,32.91],[13348728e5,33.06],[1335132e6,32.62],[13352184e5,32.4],[13353048e5,33.13],[13353912e5,33.26],[13354776e5,33.58],[13357368e5,33.55],[13358232e5,33.77],[13359096e5,33.76],[1335996e6,33.32],[13360824e5,32.61],[13363416e5,32.52],[1336428e6,32.67],[13365144e5,32.52],[13366008e5,31.92],[13366872e5,32.2],[13369464e5,32.23],[13370328e5,32.33],[13371192e5,32.36],[13372056e5,32.01],[1337292e6,31.31],[13375512e5,32.01],[13376376e5,32.01],[1337724e6,32.18],[13378104e5,31.54],[13378968e5,31.6],[13382424e5,32.05],[13383288e5,31.29],[13384152e5,31.05],[13385016e5,29.82],[13387608e5,30.31],[13388472e5,30.7],[13389336e5,31.69],[133902e7,31.32],[13391064e5,31.65],[13393656e5,31.13],[1339452e6,31.77],[13395384e5,31.79],[13396248e5,31.67],[13397112e5,32.39],[13399704e5,32.63],[13400568e5,32.89],[13401432e5,31.99],[13402296e5,31.23],[1340316e6,31.57],[13405752e5,30.84],[13406616e5,31.07],[1340748e6,31.41],[13408344e5,31.17],[13409208e5,32.37],[134118e7,32.19],[13412664e5,32.51],[13414392e5,32.53],[13415256e5,31.37],[13417848e5,30.43],[13418712e5,30.44],[13419576e5,30.2],[1342044e6,30.14],[13421304e5,30.65],[13423896e5,30.4],[1342476e6,30.65],[13425624e5,31.43],[13426488e5,31.89],[13427352e5,31.38],[13429944e5,30.64],[13430808e5,30.02],[13431672e5,30.33],[13432536e5,30.95],[134334e7,31.89],[13435992e5,31.01],[13436856e5,30.88],[1343772e6,30.69],[13438584e5,30.58],[13439448e5,32.02],[1344204e6,32.14],[13442904e5,32.37],[13443768e5,32.51],[13444632e5,32.65],[13445496e5,32.64],[13448088e5,32.27],[13448952e5,32.1],[13449816e5,32.91],[1345068e6,33.65],[13451544e5,33.8],[13454136e5,33.92],[13455e8,33.75],[13455864e5,33.84],[13456728e5,33.5],[13457592e5,32.26],[13460184e5,32.32],[13461048e5,32.06],[13461912e5,31.96],[13462776e5,31.46],[1346364e6,31.27],[13467096e5,31.43],[1346796e6,32.26],[13468824e5,32.79],[13469688e5,32.46],[1347228e6,32.13],[13473144e5,32.43],[13474008e5,32.42],[13474872e5,32.81],[13475736e5,33.34],[13478328e5,33.41],[13479192e5,32.57],[13480056e5,33.12],[1348092e6,34.53],[13481784e5,33.83],[13484376e5,33.41],[1348524e6,32.9],[13486104e5,32.53],[13486968e5,32.8],[13487832e5,32.44],[13490424e5,32.62],[13491288e5,32.57],[13492152e5,32.6],[13493016e5,32.68],[1349388e6,32.47],[13496472e5,32.23],[13497336e5,31.68],[134982e7,31.51],[13499064e5,31.78],[13499928e5,31.94],[1350252e6,32.33],[13503384e5,33.24],[13504248e5,33.44],[13505112e5,33.48],[13505976e5,33.24],[13508568e5,33.49],[13509432e5,33.31],[13510296e5,33.36],[1351116e6,33.4],[13512024e5,34.01],[1351638e6,34.02],[13517244e5,34.36],[13518108e5,34.39],[135207e7,34.24],[13521564e5,34.39],[13522428e5,33.47],[13523292e5,32.98],[13524156e5,32.9],[13526748e5,32.7],[13527612e5,32.54],[13528476e5,32.23],[1352934e6,32.64],[13530204e5,32.65],[13532796e5,32.92],[1353366e6,32.64],[13534524e5,32.84],[13536252e5,33.4],[13538844e5,33.3],[13539708e5,33.18],[13540572e5,33.88],[13541436e5,34.09],[135423e7,34.61],[13544892e5,34.7],[13545756e5,35.3],[1354662e6,35.4],[13547484e5,35.14],[13548348e5,35.48],[1355094e6,35.75],[13551804e5,35.54],[13552668e5,35.96],[13553532e5,35.53]]}],chartOptions:{chart:{type:"area",height:240,toolbar:"false"},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},markers:{size:0,style:"hollow"},xaxis:{type:"datetime",min:new Date("01 Mar 2012").getTime(),tickAmount:6},tooltip:{x:{format:"dd MMM yyyy"}},colors:["#174F80"],fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.6,opacityTo:.05,stops:[42,100,100,100]}}}}),y={series:[{name:"BTC",data:[12,14,2,47,42,15,47,75,65,19,14]}],chartOptions:{chart:{type:"area",height:40,sparkline:{enabled:!0}},stroke:{curve:"smooth",width:2},colors:["#174F80"],fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[25,100,100,100]}},tooltip:{fixed:{enabled:!1},x:{show:!1},marker:{show:!1}}}},w={series:[{name:"",data:[25,66,41,89,63,25,44,12,36,9,54]}],chartOptions:{chart:{type:"area",height:40,sparkline:{enabled:!0}},stroke:{curve:"smooth",width:2},colors:["#174F80"],fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[25,100,100,100]}},tooltip:{enabled:!1,fixed:{enabled:!1},x:{show:!1},marker:{show:!1}}}},k={series:[{name:"LTC",data:[35,53,93,47,54,24,47,75,65,19,14]}],chartOptions:{chart:{type:"area",height:40,sparkline:{enabled:!0}},stroke:{curve:"smooth",width:2},colors:["#174F80"],fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[25,100,100,100]}},tooltip:{fixed:{enabled:!1},x:{show:!1},marker:{show:!1}}}},$=[{id:1,color:"primary",name:"Buy BTC",date:"14 Mar, 2020",text:"0.016 BTC",price:"$125.20"},{id:2,color:"danger",name:"Sell ETH",date:"15 Mar, 2020",text:"0.56 ETH",price:"$112.34"},{id:3,color:"primary",name:"Buy LTC",date:"16 Mar, 2020",text:"1.88 LTC",price:"$94.22"},{id:4,color:"primary",name:"Buy ETH",date:"17 Mar, 2020",text:"0.42 ETH",price:"$84.32"},{id:5,color:"danger",name:"Sell BTC",date:"18 Mar, 2020",text:"0.018 BTC",price:"$145.80"},{id:6,color:"primary",name:"Buy BTC",date:"14 Mar, 2020",text:"0.016 BTC",price:"$125.20"},{id:7,color:"danger",name:"Sell ETH",date:"14 Mar, 2020",text:"0.56 ETH",price:"$112.34"}],T={page:{title:"Secure ME Dashboard",meta:[{name:"description",content:o.description}]},components:{Layout:r["a"],PageHeader:l["a"],simplebar:d["a"]},data:function(){var t={series:[{name:"Report",data:[]}]};return{user_type:b["a"].state.authBackend.user.type,overviewChart:x,transactionsData:$,bitconinChart:y,ethereumChart:w,litecoinChart:k,finishedDailyChart:t,caseReportChart:{series:[]},items:[{text:"Dashboards",href:"/"}],x_cat:[],theme:"",x_category:[],x_color:[],title:"Secure ME",total_agent:"",total_customer:"",total_subscribe:"",total_admin:"",total_cs:"",total_package:"",total_region:"",total_upload:"",total_case:"",total_report:"",top_agent:[],top_agent_list:"",recent_report:"",agent_last_update:"",loading_agent_last:!1,loading_top_agent:!1,loading_recent_report:!1}},methods:{list:function(){var t=this;v["a"].getProfile().then((function(a){t.user_type=a.data.data.admin.role})).catch((function(a){t.message=a.response.data.data}))},totalCase:function(){var t=this;g.getTotalCase().then((function(a){t.total_case=a.data.data})).catch((function(a){t.message=a.response.data.data}))},totalAdmin:function(){var t=this;g.getTotalAdmin().then((function(a){t.total_admin=a.data.data})).catch((function(a){t.message=a.response.data.data}))},totalCs:function(){var t=this;g.getTotalCs().then((function(a){t.total_cs=a.data.data})).catch((function(a){t.message=a.response.data.data}))},totalAgent:function(){var t=this;g.getTotalAgent().then((function(a){t.total_agent=a.data.data})).catch((function(a){t.message=a.response.data.data}))},totalSubcribe:function(){var t=this;console.log("mulai"),g.getTotalSubcribe().then((function(a){console.log(a.data.data),t.total_subscribe=a.data.data})).catch((function(a){t.message=a.response.data.data}))},totalCustomer:function(){var t=this;g.getTotalCustomer().then((function(a){t.total_customer=a.data.data})).catch((function(a){t.message=a.response.data.data}))},totalPackage:function(){var t=this;g.getTotalPackage().then((function(a){t.total_package=a.data.data})).catch((function(a){t.message=a.response.data.data}))},totalRegion:function(){var t=this;g.getTotalRegion().then((function(a){t.total_region=a.data.data})).catch((function(a){t.message=a.response.data.data}))},totalUpload:function(){var t=this;g.gettotalUpload().then((function(a){t.total_upload=a.data.data})).catch((function(a){t.message=a.response.data.data}))},topAgent:function(){var t=this;this.loading_top_agent=!0,g.getTopAgent().then((function(a){t.top_agent=a.data.data[0],t.top_agent_list=a.data.data,t.loading_top_agent=!1})).catch((function(a){t.message=a.response.data.data,t.loading_top_agent=!1}))},totalReport:function(){var t=this;g.getTotalReport().then((function(a){t.total_report=a.data.data})).catch((function(a){t.message=a.response.data.data}))},finishedDaily:function(){var t=this;g.getFinishedDaily().then((function(a){var e=a.data.data,s=e.sort((function(t,a){return new f.a(t.date).format("YYYYMMDDhhmmss")-new f.a(a.date).format("YYYYMMDDhhmmss")})),i=s;i.forEach((function(a){t.x_cat.push(a.label),t.finishedDailyChart.series[0].data.push(a.finished_daily_report)}))})).catch((function(a){t.message=a.response.data.data}))},CategoryReport:function(){var t=this;this.caseReportChart.series=[],this.x_color=[],g.getCategoryReport().then((function(a){var e=a.data.data;e.forEach((function(a){t.caseReportChart.series.push(a.total),t.x_category.push(a.category),"low"==a.category?t.x_color.push("#34C38F"):"medium"==a.category?t.x_color.push("#50A5F1"):"high"==a.category&&t.x_color.push("#CF5A5A")}))})).catch((function(a){t.message=a.response.data.data}))},RecentReport:function(){var t=this;this.loading_recent_report=!0,g.getRecentReport().then((function(a){t.recent_report=a.data.data,t.loading_recent_report=!1})).catch((function(a){t.message=a.response.data.data,t.loading_recent_report=!1}))},AgentLastReport:function(){var t=this;this.loading_agent_last=!0,g.getAgentLastUpdate().then((function(a){t.agent_last_update=a.data.data,t.loading_agent_last=!1})).catch((function(a){t.message=a.response.data.data,t.loading_agent_last=!1}))},formatDate:function(t){return f()(t).format("YYYY-MM-DD, hh:mm")}},mounted:function(){this.theme=localStorage.getItem("theme"),this.list(),this.topAgent(),this.totalCase(),this.totalCs(),this.totalAdmin(),this.totalSubcribe(),this.totalAgent(),this.totalCustomer(),this.totalPackage(),this.totalRegion(),this.totalUpload(),this.totalReport(),this.finishedDaily(),this.RecentReport(),this.AgentLastReport(),this.CategoryReport()}},O=T,z=(e("7e6a"),e("2877")),A=Object(z["a"])(O,s,i,!1,null,null,null);a["default"]=A.exports},"9c57":function(t,a,e){}}]);
//# sourceMappingURL=chunk-5a8e8548.e3080f31.js.map