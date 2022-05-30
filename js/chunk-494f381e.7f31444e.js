(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-494f381e"],{1148:function(t,e,a){"use strict";var i=a("a691"),n=a("1d80");t.exports="".repeat||function(t){var e=String(n(this)),a="",s=i(t);if(s<0||s==1/0)throw RangeError("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(e+=e))1&s&&(a+=e);return a}},"2e62":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("PageHeader",{attrs:{title:t.title,items:t.items}}),a("div",{staticClass:"row mb-4"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card h-100"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-7"},[a("b-button",{staticClass:"btn",attrs:{variant:"primary"}},[a("i",{staticClass:"bx bx-map-pin mr-1"}),t._v(" "+t._s(t.$t("agen-detail.current-location"))+" ")])],1),a("div",{staticClass:"col-sm-3 text-right p-0"},[a("div",{staticClass:"form-group mb-3"},[a("date-picker",{staticClass:"text-center",attrs:{placeholder:t.$t("agen-detail.date-range"),range:"","append-to-body":"",lang:"en",confirm:""},model:{value:t.daterange,callback:function(e){t.daterange=e},expression:"daterange"}})],1)]),a("div",{staticClass:"col-sm-2  text-right pl-1"},[a("b-button",{staticClass:"btn btn-block ",class:{"disabled ":t.loading_tracking},attrs:{variant:"success"},on:{click:t.Tracking}},[t.loading_tracking?a("b-spinner",{attrs:{variant:"light",small:""}}):t._e(),t._v(" "+t._s(t.$t("agen-detail.track"))+" ")],1)],1)]),a("GmapMap",{ref:"mymap",staticClass:"maps",attrs:{center:t.center,zoom:t.zoom,options:t.mapTheme()},on:{click:t.measureDistance}},[a("div",{ref:"custom",staticClass:"flex flex-col items-center custom-control"},[a("button",{staticClass:"mb-2 mr-2 px-2 py-2 text-xs rounded-sm shadow hover:bg-gray-200 pointer",class:1==t.measure_distance?"bg-info":"bg-white",attrs:{title:"Measure Distance"},on:{click:function(e){return t.distanceMode()}}},[a("img",{attrs:{src:"https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-distance-maps-and-locations-those-icons-lineal-color-those-icons-2.png"}})]),t._v(" "),a("br"),a("button",{staticClass:"mb-2 mr-2 bg-white px-2 py-2 text-xs rounded-sm shadow pointer",attrs:{title:"Point of Interest"},on:{click:function(e){return t.poiView()}}},[a("img",{attrs:{src:1==t.poi?"https://img.icons8.com/glyph-neue/24/24991f/point-of-interest.png":"https://img.icons8.com/glyph-neue/24/525252/point-of-interest.png"}})])]),1==t.firstpoint.on?a("GmapMarker",{ref:"first_point",attrs:{label:{text:"0 km",color:"dark"==t.theme?"#e5e7eb":"#000000",fontWeight:"bold"},clickable:!0,options:{position:{lat:parseFloat(t.firstpoint.lat),lng:parseFloat(t.firstpoint.lng)}},icon:{url:"dark"==t.theme?"https://img.icons8.com/windows/30/e5e7eb/wind-speed-less-1.png":"https://img.icons8.com/windows/30/000000/wind-speed-less-1.png",width:50,height:50,textSize:12,anchor:{x:14,y:16},labelOrigin:{x:5,y:-5}}},on:{click:function(e){return t.unsetDistanceMarker("first")}}}):t._e(),1==t.secondpoint.on?a("GmapMarker",{ref:"second_point",attrs:{label:{text:t.distance+" km",color:"dark"==t.theme?"#e5e7eb":"#000000",fontWeight:"bold"},clickable:!0,options:{position:{lat:parseFloat(t.secondpoint.lat),lng:parseFloat(t.secondpoint.lng)}},icon:{url:"dark"==t.theme?"https://img.icons8.com/windows/30/e5e7eb/wind-speed-less-1.png":"https://img.icons8.com/windows/30/000000/wind-speed-less-1.png",width:50,height:50,textSize:12,anchor:{x:16,y:16},labelOrigin:{x:5,y:-5}}},on:{click:function(e){return t.unsetDistanceMarker("second")}}}):t._e(),1==t.firstpoint.on&&1==t.secondpoint.on?a("GmapPolyline",{attrs:{options:{strokeColor:"dark"==t.theme?"#9ca3af":"#212121",strokeOpacity:.8,strokeWeight:3},path:[{lat:t.firstpoint.lat,lng:t.firstpoint.lng},{lat:t.secondpoint.lat,lng:t.secondpoint.lng}],editable:!1}}):t._e(),t.result_tracking[0]?a("GmapPolyline",{attrs:{options:{strokeColor:"dark"==t.theme?"#9ca3af":"#212121",strokeOpacity:.8,strokeWeight:3},path:t.path,editable:!1}}):t._e(),t._l(t.trackerpoint,(function(e,i){return a("GmapMarker",{key:e.id,attrs:{label:{text:String(i+1),color:(t.theme,"#e5e7eb"),fontWeight:"bold"},clickable:!0,options:{position:{lat:parseFloat(e.lat),lng:parseFloat(e.lng)}},icon:{url:"dark"==t.theme?"https://img.icons8.com/ios-filled/50/991b1b/street-view.png":"https://img.icons8.com/ios-filled/50/EF4444/street-view.png",textSize:12,anchor:{x:25,y:45},labelOrigin:{x:25,y:22}}},on:{click:function(a){return t.openMarker(e.id)}}},[a("GmapInfoWindow",{attrs:{closeclick:!0,opened:t.openedMarkerID===e.id},on:{closeclick:function(e){return t.openMarker(null)}}},[a("div",[a("h6",[t._v("LatLong : "+t._s(e.lat)+", "+t._s(e.lng))]),a("h6",[t._v(t._s(t.$t("agen-detail.date-time"))+" : "+t._s(t.formatDate(e.date)))])])])],1)}))],2)],1)])]),a("div",{staticClass:"col-12"},[a("div",{staticClass:"card h-100"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[a("b",[t._v(t._s(t.$t("agen-detail.tracking-record")))])]),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered text-muted"},[t.result_tracking[0]?a("thead",[a("tr",[a("th",{staticClass:"text-center",attrs:{width:"3%"}},[t._v("#")]),a("th",[t._v(t._s(t.$t("agen-detail.date-time")))]),a("th",[t._v(t._s(t.$t("agen-detail.location"))+" ")])])]):t._e(),t.result_tracking[0]?a("tbody",t._l(t.result_tracking,(function(e){return a("tr",{key:e.id},[a("td",{staticClass:"text-center",attrs:{width:"3%"}},[a("b-form-checkbox",{staticClass:"text-center mt-0",attrs:{checked:t.setCheck(e.id)},on:{change:function(a){return t.setTrackerPoint(e.id,e.lat,e.lng,e.delivery_time)}}})],1),a("td",[t._v(" "+t._s(t.formatDate(e.delivery_time)))]),a("td",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[t._v(" "+t._s(e.coordinate)+" ")]),a("div",{staticClass:"col-sm-6 text-right"},t._l(t.trackerpoint,(function(i,n){return a("span",{key:i.id},[i.id==e.id?a("b",{staticClass:"p-1 text-md font-bold mt-2"},[t._v(t._s(n+1))]):t._e()])})),0)])])])})),0):t._e(),t.result_tracking[0]?t._e():a("tbody",[a("tr",[a("td",{staticClass:"text-center text-muted p-5",attrs:{colspan:"3"}},[t._v(t._s(t.$t("all.dnf")))])])])])])])])])]),a("div",{staticClass:"row mb-4"},[a("div",{staticClass:"col-6"},[a("div",{staticClass:"card h-100"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[a("b",[t._v(t._s(t.$t("agen-detail.agent-info")))])]),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered text-muted"},[a("tbody",[a("tr",[a("td",{attrs:{width:"25%"}},[t._v(t._s(t.$t("user-management.name")))]),a("td",[t._v(t._s(t.agent.name))])]),a("tr",[a("td",[t._v("NIK")]),a("td",[t._v(t._s(t.agent.nik))])]),a("tr",[a("td",[t._v(t._s(t.$t("user-management.birth-date")))]),a("td",[t._v(t._s(t.agent.birth_date))])]),a("tr",[a("td",[t._v(t._s(t.$t("user-management.gender")))]),a("td",["L"==t.agent.gender?a("span",[t._v(t._s(t.$t("user-management.male")))]):t._e(),"P"==t.agent.gender?a("span",[t._v(t._s(t.$t("user-management.female")))]):t._e()])]),a("tr",[a("td",[t._v(t._s(t.$t("user-management.email")))]),a("td",[t._v(t._s(t.agent.email))])]),a("tr",[a("td",[t._v(t._s(t.$t("user-management.phone")))]),a("td",[t._v(t._s(t.agent.phone))])]),a("tr",[a("td",[t._v(t._s(t.$t("user-management.address")))]),a("td",[t._v(t._s(t.agent.address))])]),a("tr",[a("td",[t._v(t._s(t.$t("user-management.region")))]),t.agent.region?a("td",[t._v(t._s(t.agent.region.region_name)+" ("+t._s(t.agent.region.region_number)+")")]):t._e()]),a("tr",[a("td",[t._v(t._s(t.$t("user-management.agent-status")))]),a("td",[t.agent.auto_recieve?a("span",{staticClass:"badge-pill badge-soft-info px-2 py-1 rounded mr-1"},[t._v(" "+t._s(t.$t("user-management.auto-recieve"))+" ")]):t._e(),t.agent.is_in_case?a("span",{staticClass:"badge-pill badge-soft-warning px-2 py-1 rounded mr-1"},[t._v(" "+t._s(t.$t("user-management.is-in-case"))+" ")]):t._e(),t.agent.is_ready?a("span",{staticClass:"badge-pill badge-soft-success px-2 py-1 rounded mr-1"},[t._v(" "+t._s(t.$t("user-management.is-ready"))+" ")]):t._e()])]),a("tr",[a("td",[t._v(t._s(t.$t("all.updated-at")))]),a("td",[t._v(t._s(t.agent.updated_at))])]),a("tr",[a("td",[t._v(t._s(t.$t("all.created-at")))]),a("td",[t._v(t._s(t.agent.created_at))])])])])])])])]),a("div",{staticClass:"col-6"},[a("div",{staticClass:"card h-100"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[a("b",[t._v(t._s(t.$t("agen-detail.device-info")))])]),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered text-muted"},[t.agent.device?a("tbody",[a("tr",[a("td",{attrs:{width:"25%"}},[t._v(t._s(t.$t("agen-detail.model")))]),a("td",[t._v(t._s(t.agent.device.model))])]),a("tr",[a("td",[t._v("ID")]),a("td",[t._v(t._s(t.agent.device.id))])]),a("tr",[a("td",[t._v("SDK")]),a("td",[t._v(t._s(t.agent.device.sdk))])]),a("tr",[a("td",[t._v(t._s(t.$t("agen-detail.manufacture")))]),a("td",[t._v(t._s(t.agent.device.manufacture))])]),a("tr",[a("td",[t._v(t._s(t.$t("agen-detail.brand")))]),a("td",[t._v(t._s(t.agent.device.brand))])]),a("tr",[a("td",[t._v(t._s(t.$t("agen-detail.user")))]),a("td",[t._v(t._s(t.agent.device.user))])]),a("tr",[a("td",[t._v(t._s(t.$t("agen-detail.type")))]),a("td",[t._v(t._s(t.agent.device.type))])]),a("tr",[a("td",[t._v(t._s(t.$t("agen-detail.base")))]),a("td",[t._v(t._s(t.agent.device.base))])]),a("tr",[a("td",[t._v(t._s(t.$t("agen-detail.incremental")))]),a("td",[t._v(t._s(t.agent.device.incremental))])]),a("tr",[a("td",[t._v(t._s(t.$t("agen-detail.board")))]),a("td",[t._v(t._s(t.agent.device.board))])]),a("tr",[a("td",[t._v(t._s(t.$t("agen-detail.host")))]),a("td",[t._v(t._s(t.agent.device.host))])]),a("tr",[a("td",[t._v(t._s(t.$t("agen-detail.finger-print")))]),a("td",[t._v(t._s(t.agent.device.fingerprint))])]),a("tr",[a("td",[t._v(t._s(t.$t("agen-detail.version-code")))]),a("td",[t._v(t._s(t.agent.device.versioncode))])])]):a("tbody",[a("tr",[a("td",{attrs:{width:"25%"}},[t._v(t._s(t.$t("agen-detail.model")))]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v("ID")]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v("SDK")]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v(t._s(t.$t("agen-detail.manufacture")))]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v(t._s(t.$t("agen-detail.brand")))]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v(t._s(t.$t("agen-detail.user")))]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v(t._s(t.$t("agen-detail.type")))]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v(t._s(t.$t("agen-detail.base")))]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v(t._s(t.$t("agen-detail.incremental")))]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v(t._s(t.$t("agen-detail.board")))]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v(t._s(t.$t("agen-detail.host")))]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v(t._s(t.$t("agen-detail.finger-print")))]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v(t._s(t.$t("agen-detail.version-code")))]),a("td",[t._v("-")])])])])])])])])])],1)},n=[],s=(a("a4d3"),a("e01a"),a("4160"),a("d81d"),a("a434"),a("b0c0"),a("b680"),a("159b"),a("3d20"),a("444f")),r=a("2579"),o=a("c2a4"),l=a("6fb1"),c=(a("86b6"),a("c1df")),d=a.n(c),p=a("ec45"),g=a("5c47"),u=a("8e5f"),f=a.n(u),h={page:{meta:[{name:"description",content:o.description}]},components:{Layout:s["a"],PageHeader:r["a"],DatePicker:p["a"],Switches:g["a"],Multiselect:f.a},data:function(){var t=[{url:"/static/rec50.png",width:50,height:50,textSize:12,textColor:"#fff",anchorText:[19,0]}];return{id:this.$route.params.id,urlImage:"http://localhost:8003/storage/avatar/",user_type:"",agent:"",theme:"",daterange:"",loading_tracking:!1,result_tracking:[],title:this.$t("user-management.agen-management-detail"),items:[{text:this.$t("menuitems.dashboards.text"),href:"#"},{text:this.$t("user-management.agen-management"),href:"#"},{text:this.$t("user-management.agen-management-detail"),active:!0}],markers:[{position:{lat:-7.783992353559322,lng:110.37170620265111}},{position:{lat:-7.77062298441253,lng:110.46041339623409}}],maploc:[],openedMarkerID:null,clusterIcon:t,track_location:!0,path:[],drawpath:!1,measure_distance:!1,distance:"",poi:!1,firstpoint:{on:!1,lat:0,lng:0},secondpoint:{on:!1,lat:0,lng:0},start_point:{lat:0,lng:0},end_point:{lat:0,lng:0},trackerpoint:[],center:{lat:-2.687944013464189,lng:117.81568343337175},zoom:5,line1:[]}},methods:{getAgent:function(){var t=this;l["a"].getDetailAgent(this.id).then((function(e){t.agent="";var a={id_agent:e.data.data.id_agent,nik:e.data.data.nik,address:e.data.data.address,birth_date:e.data.data.birth_date,agent_location:e.data.data.agent_location,agent_status:e.data.data.agent_status,is_ready:e.data.data.is_ready,is_in_case:e.data.data.is_in_case,auto_recieve:e.data.data.auto_recieve,device_name:e.data.data.device_name,device_token:e.data.data.device_token,id_region:e.data.data.id_region,name:e.data.data.account.name,phone:e.data.data.account.phone,gender:e.data.data.account.gender,email:e.data.data.account.email,email_verified_at:e.data.data.account.email_verified_at,profile_pict:e.data.data.account.profile_pict,is_active:e.data.data.account.is_active,active_until:e.data.data.account.active_until,is_login:e.data.data.account.is_login,device:e.data.data.device,region:e.data.data.region,created_at:t.formatDate(e.data.data.created_at),updated_at:t.formatDate(e.data.data.updated_at)};t.agent=a})).catch((function(t){console.log(t)}))},mapTheme:function(){var t={styles:[{elementType:"geometry",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.stroke",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.fill",stylers:[{color:"#746855"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:1==this.poi?[{color:"#d59563"}]:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.icon",stylers:1==this.poi?[]:[{visibility:"off"}]},{featureType:"poi.park",elementType:"geometry",stylers:1==this.poi?[{color:"#d59563"}]:[{visibility:"off"}]},{featureType:"poi.park",elementType:"labels.icon",stylers:1==this.poi?[]:[{visibility:"off"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:1==this.poi?[{color:"#d59563"}]:[{visibility:"off"}]},{featureType:"poi.business",stylers:1==this.poi?[{color:"#d59563"}]:[{visibility:"off"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#38414e"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#212a37"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#9ca5b3"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#746855"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#1f2835"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#f3d19c"}]},{featureType:"transit",elementType:"geometry",stylers:1==this.poi?[{color:"#d59563"}]:[{visibility:"off"}]},{featureType:"transit",elementType:"labels.icon",stylers:1==this.poi?[]:[{visibility:"off"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:1==this.poi?[{color:"#d59563"}]:[{visibility:"off"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#515c6d"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#17263c"}]}]},e={styles:[{featureType:"poi",elementType:"labels.text.fill",stylers:1==this.poi?[{visibility:"on"}]:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.icon",stylers:1==this.poi?[{visibility:"on"}]:[{visibility:"off"}]},{featureType:"poi.park",elementType:"geometry",stylers:1==this.poi?[{visibility:"on"}]:[{visibility:"off"}]},{featureType:"poi.park",elementType:"labels.icon",stylers:1==this.poi?[{visibility:"on"}]:[{visibility:"off"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:1==this.poi?[{visibility:"on"}]:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:1==this.poi?[{visibility:"on"}]:[{visibility:"off"}]},{featureType:"transit",elementType:"labels.icon",stylers:1==this.poi?[{visibility:"on"}]:[{visibility:"off"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:1==this.poi?[{visibility:"on"}]:[{visibility:"off"}]}]};return"dark"!=this.theme?e:t},measureDistance:function(t){1==this.measure_distance?this.setDistanceMarker(t.latLng.lat(),t.latLng.lng()):console.log("Normal Mode")},getDistance:function(){var t=parseFloat(this.firstpoint.lat),e=parseFloat(this.firstpoint.lng),a=parseFloat(this.secondpoint.lat),i=parseFloat(this.secondpoint.lng),n=(google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(t,e),new google.maps.LatLng(a,i))/1e3).toFixed(2);this.distance=n},setDistanceMarker:function(t,e){0==this.firstpoint.on?(this.firstpoint.on=!0,this.firstpoint.lat=t,this.firstpoint.lng=e):0==this.secondpoint.on?(this.secondpoint.on=!0,this.secondpoint.lat=t,this.secondpoint.lng=e):this.resetDistanceMarker(),this.getDistance()},unsetDistanceMarker:function(t){"first"==t?(this.firstpoint.on=!1,this.firstpoint.lat=0,this.firstpoint.lng=0):"second"==t&&(this.secondpoint.on=!1,this.secondpoint.lat=0,this.secondpoint.lng=0)},resetDistanceMarker:function(){this.firstpoint.on=!1,this.firstpoint.lat=0,this.firstpoint.lng=0,this.secondpoint.on=!1,this.secondpoint.lat=0,this.secondpoint.lng=0},distanceMode:function(){1==this.measure_distance?(this.measure_distance=!1,this.resetDistanceMarker()):this.measure_distance=!0},poiView:function(){1==this.poi?(this.poi=!1,console.log("poi->",this.poi)):(this.poi=!0,console.log("poi->",this.poi))},Tracking:function(){var t=this;this.loading_tracking=!0,this.result_tracking=[],this.trackerpoint=[];var e=this.daterange,a=e[0],i=e[1],n=this.formatDateRange(a),s=this.formatDateRange(i),r={date_start:n,date_end:s};console.log(r),l["a"].TrackingAgent(this.id,r).then((function(e){console.log(e.data.data),t.loading_tracking=!1,e.data.data.forEach((function(e){var a={id:e.id,id_user:e.id_user,lat:e.lat,lng:e.lng,updated_at:e.updated_at,coordinate:e.coordinate,created_at:e.created_at,delivery_time:e.delivery_time};t.result_tracking.push(a)}))})).catch((function(e){console.log(e),t.loading_tracking=!1}))},openMarker:function(t){this.openedMarkerID=t},trafficMode:function(){this.$refs.mymap.$mapPromise.then((function(t){var e=new google.maps.TrafficLayer;e.setMap(t)}))},setCheck:function(t){for(var e=0;e<this.line1.length;e++)if(t==this.line1[e].id)return!0;return!1},setTrackerPoint:function(t,e,a,i){var n=this,s={id:t,lat:e,lng:a,date:i};console.log(s),this.$refs.mymap.$mapPromise.then((function(i){if(0==n.trackerpoint.length)console.log("ifff"),n.trackerpoint.push(s),n.path.push({lat:parseFloat(e),lng:parseFloat(a)}),n.center={lat:parseFloat(e),lng:parseFloat(a)},n.zoom=12,n.line1.push({id:t});else if(console.log("else"),"unchecked"==n.checkTrackerPoint(t))n.trackerpoint.push(s),n.path.push({lat:parseFloat(e),lng:parseFloat(a)}),n.center={lat:parseFloat(e),lng:parseFloat(a)},n.zoom=12,n.line1.push({id:t});else if("checked"==n.checkTrackerPoint(t)){var r="",o="";n.trackerpoint.map((function(e,a){e.id==t&&(r=a)})),n.path.map((function(t,a){parseFloat(t.lat)==parseFloat(e)&&(o=a)})),n.trackerpoint.splice(r,1),n.path.splice(o,1),n.zoom=12;for(var l=0;l<n.line1.length;l++)n.line1[l].path.setMap(null);n.line1.push({id:t,path:new google.maps.Polyline({map:i,strokeColor:"dark"==n.theme?"#991b1b":"#EF4444",stokeOpacity:.5,strokeWeight:2,geodesic:!0,path:n.path})})}}))},checkTrackerPoint:function(t){for(var e=0;e<this.trackerpoint.length;e++)if(t==this.trackerpoint[e].id)return"checked";return"unchecked"},setControl:function(){var t=this.$refs.custom;this.$refs.mymap.$mapPromise.then((function(e){e.controls[google.maps.ControlPosition.RIGHT_CENTER].push(t)}))},startIcon:function(){var t={path:"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z",fillColor:"blue",fillOpacity:1,strokeColor:"#636363",strokeWeight:.5,rotation:0,scale:1.8,anchor:new google.maps.Point(0,0)};return t},endIcon:function(){var t={path:"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z",fillColor:"green",fillOpacity:1,strokeColor:"#636363",strokeWeight:.5,rotation:0,scale:1.8,anchor:new google.maps.Point(0,0)};return t},formatDateRange:function(t){return d()(t).format("YYYY-MM-DD")},formatDate:function(t){return d()(t).format("YYYY-MM-DD, hh:mm:ss")}},mounted:function(){this.getAgent(),this.theme=localStorage.getItem("theme"),this.setControl(),this.trafficMode()}},m=h,_=(a("3bd1"),a("2877")),v=Object(_["a"])(m,i,n,!1,null,"43ba9932",null);e["default"]=v.exports},"3bd1":function(t,e,a){"use strict";var i=a("e2ee"),n=a.n(i);n.a},"408a":function(t,e,a){var i=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=i(t))throw TypeError("Incorrect invocation");return+t}},"6fb1":function(t,e,a){"use strict";var i=a("d4ec"),n=a("bee2"),s=a("bc3a"),r=a.n(s),o=a("6808"),l="http:http://secureme.api.xyz/api/",c=function(){function t(){Object(i["a"])(this,t)}return Object(n["a"])(t,[{key:"getAllAgent",value:function(){return r.a.get(l+"agent",{headers:Object(o["a"])()})}},{key:"getDetailAgent",value:function(t){return r.a.get(l+"agent/"+t,{headers:Object(o["a"])()})}},{key:"TrackingAgent",value:function(t,e){return r.a.get(l+"track/"+t,{headers:Object(o["a"])(),params:e})}},{key:"addAgent",value:function(t){return r.a.post(l+"agent",t,{headers:Object(o["a"])()})}},{key:"updateAgent",value:function(t,e){return r.a.patch(l+"agent/"+t,e,{headers:Object(o["a"])()})}},{key:"updatePasswordAgent",value:function(t){return r.a.post(l+"admin/reset-password",t,{headers:Object(o["a"])()})}},{key:"deleteAgent",value:function(t){return r.a.delete(l+"agent/"+t,{headers:Object(o["a"])()})}},{key:"bulkDeleteAgent",value:function(t){return r.a.post(l+"agent/bulk-delete",t,{headers:Object(o["a"])()})}}]),t}();e["a"]=new c},a434:function(t,e,a){"use strict";var i=a("23e7"),n=a("23cb"),s=a("a691"),r=a("50c4"),o=a("7b0b"),l=a("65f0"),c=a("8418"),d=a("1dde"),p=a("ae40"),g=d("splice"),u=p("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,h=Math.min,m=9007199254740991,_="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!g||!u},{splice:function(t,e){var a,i,d,p,g,u,v=o(this),y=r(v.length),b=n(t,y),k=arguments.length;if(0===k?a=i=0:1===k?(a=0,i=y-b):(a=k-2,i=h(f(s(e),0),y-b)),y+a-i>m)throw TypeError(_);for(d=l(v,i),p=0;p<i;p++)g=b+p,g in v&&c(d,p,v[g]);if(d.length=i,a<i){for(p=b;p<y-i;p++)g=p+i,u=p+a,g in v?v[u]=v[g]:delete v[u];for(p=y;p>y-i+a;p--)delete v[p-1]}else if(a>i)for(p=y-i;p>b;p--)g=p+i-1,u=p+a-1,g in v?v[u]=v[g]:delete v[u];for(p=0;p<a;p++)v[p+b]=arguments[p+2];return v.length=y-i+a,d}})},b680:function(t,e,a){"use strict";var i=a("23e7"),n=a("a691"),s=a("408a"),r=a("1148"),o=a("d039"),l=1..toFixed,c=Math.floor,d=function(t,e,a){return 0===e?a:e%2===1?d(t,e-1,a*t):d(t*t,e/2,a)},p=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},g=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){l.call({})}));i({target:"Number",proto:!0,forced:g},{toFixed:function(t){var e,a,i,o,l=s(this),g=n(t),u=[0,0,0,0,0,0],f="",h="0",m=function(t,e){var a=-1,i=e;while(++a<6)i+=t*u[a],u[a]=i%1e7,i=c(i/1e7)},_=function(t){var e=6,a=0;while(--e>=0)a+=u[e],u[e]=c(a/t),a=a%t*1e7},v=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==u[t]){var a=String(u[t]);e=""===e?a:e+r.call("0",7-a.length)+a}return e};if(g<0||g>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(f="-",l=-l),l>1e-21)if(e=p(l*d(2,69,1))-69,a=e<0?l*d(2,-e,1):l/d(2,e,1),a*=4503599627370496,e=52-e,e>0){m(0,a),i=g;while(i>=7)m(1e7,0),i-=7;m(d(10,i,1),0),i=e-1;while(i>=23)_(1<<23),i-=23;_(1<<i),m(1,1),_(2),h=v()}else m(0,a),m(1<<-e,0),h=v()+r.call("0",g);return g>0?(o=h.length,h=f+(o<=g?"0."+r.call("0",g-o)+h:h.slice(0,o-g)+"."+h.slice(o-g))):h=f+h,h}})},e2ee:function(t,e,a){}}]);
//# sourceMappingURL=chunk-494f381e.7f31444e.js.map