webpackJsonp([1],{"/yRs":function(t,e,s){"use strict";function a(t){s("E4dI")}var n=s("diQi"),i=s("wvUL"),r=s("VU/8"),l=a,o=r(n.a,i.a,l,null,null);e.a=o.exports},0:function(t,e){},"5Ym2":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{attrs:{id:"example-2",toolbar:""}},[s("v-navigation-drawer",{attrs:{temporary:"",light:"",overflow:"",absolute:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[s("v-list",{staticClass:"pa-1"},[s("v-list-tile",{attrs:{avatar:""}},[s("v-list-tile-avatar",[s("img",{attrs:{src:"static/v.png"}})]),t._v(" "),s("v-list-tile-content",[s("v-list-tile-title",[t._v("Tracker Views")])],1)],1)],1),t._v(" "),s("v-list",{staticClass:"pt-0",attrs:{dense:""}},[s("v-divider"),t._v(" "),t._l(t.items,function(e){return s("v-list-tile",{key:e.title,on:{click:function(){t.alert("koko")}}},[s("v-list-tile-action",[s("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),s("v-list-tile-content",[s("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)})],2)],1),t._v(" "),s("v-toolbar",{staticClass:"white--text indigo",attrs:{fixed:"",dark:""}},[s("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),s("v-toolbar-title",[t._v("RS Ais-Tracker")]),t._v(" "),s("v-spacer"),t._v(" "),s("v-btn",{staticClass:"btn--flat",on:{click:function(e){e.stopPropagation(),t.sheetVisable=!t.sheetVisable}}},[s("v-icon",{attrs:{left:""}},[t._v("settings")]),t._v("Options")],1)],1),t._v(" "),s("main",[s("v-container",{attrs:{fluid:""}},[s("router-view",{attrs:{onlyMovingVessels:t.onlyMovingVessels}})],1)],1),t._v(" "),s("div",{staticClass:"text-xs-center"},[s("v-bottom-sheet",{model:{value:t.sheetVisable,callback:function(e){t.sheetVisable=e},expression:"sheetVisable"}},[s("v-list",[s("v-subheader",[t._v("Options")]),t._v(" "),s("v-list-tile",[s("v-switch",{attrs:{label:"filter moving vessels"},model:{value:t.onlyMovingVessels,callback:function(e){t.onlyMovingVessels=e},expression:"onlyMovingVessels"}})],1)],1)],1)],1)],1)},n=[],i={render:a,staticRenderFns:n};e.a=i},"5ZbH":function(t,e,s){"use strict";function a(t){s("EPS6")}var n=s("kXiA"),i=s("uB3l"),r=s("VU/8"),l=a,o=r(n.a,i.a,l,null,null);e.a=o.exports},"5cLx":function(t,e,s){"use strict";var a=s("Vj7G"),n=s("CRpD"),i=s("VU/8"),r=i(a.a,n.a,null,null,null);e.a=r.exports},"7t3Y":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-layout",{attrs:{row:"",wrap:"",dark:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-expansion-panel",{attrs:{popout:""}},t._l(t.movingVessels,function(e,a){return s("v-expansion-panel-content",{key:e.MMSI,nativeOn:{click:function(s){t.reloadMap(e)}}},[s("div",{attrs:{slot:"header"},slot:"header"},[s("v-list-tile",{attrs:{avatar:""}},[s("v-list-tile-avatar",[s("img",{attrs:{src:t.imgUrl+"/"+e.MMSI+".jpg"}})]),t._v(" "),s("v-list-tile-content",[s("v-list-tile-title",[t._v("\n                "+t._s(e.Ship_name)+"\n              ")]),t._v(" "),s("v-list-tile-sub-title",[t._v("\n                "+t._s(e.MMSI)+"\n              ")])],1)],1)],1),t._v(" "),s("v-card",[s("v-card-text",{staticClass:"grey lighten-3"},[s("v-container",{attrs:{fluid:"","grid-list-md":""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{"d-flex":"",xs12:"",sm12:"",md6:""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{"d-flex":""}},[s("v-card",[s("v-card-media",{attrs:{src:t.imgUrl+"/"+e.MMSI+".jpg",height:"200px"}}),t._v(" "),s("v-card-title",{attrs:{"primary-title":""}},[s("div",[s("h3",{staticClass:"headline mb-0"},[t._v(t._s(e.Ship_name))]),t._v(" "),s("div",[t._v("SOG: "+t._s(e.SOG)+" knots - COG: "+t._s(e.COG)+"°")]),t._v(" "),s("div",[t._v("Latitude: "+t._s(e.Latitude)+" Longitude: "+t._s(e.Longitude))]),t._v(" "),s("div",[t._v("Last updated: "+t._s(new Date(e.Time_stamp).toLocaleString()))])])]),t._v(" "),s("v-card-actions",[s("v-btn",{staticClass:"orange--text",attrs:{flat:""}},[t._v("Share")]),t._v(" "),s("v-btn",{staticClass:"orange--text",attrs:{flat:""},on:{click:function(e){t.showMap=!t.showMap}}},[t._v("Toggle Map")])],1)],1)],1)],1)],1),t._v(" "),s("v-flex",{attrs:{"d-flex":"",xs12:"",sm12:"",md6:""}},[s("v-card",[s("gmap-map",{staticStyle:{width:"100%","min-height":"400px"},attrs:{center:t.center,zoom:12}},[t._l(t.markers,function(e,a){return s("gmap-marker",{key:a,attrs:{position:e.position,icon:e.icon,clickable:!0,draggable:!0},on:{click:function(s){t.center=e.position}}})}),t._v(" "),s("gmap-polyline",{attrs:{path:t.paths}})],2)],1)],1)],1)],1)],1)],1)],1)}))],1)],1),t._v(" "),s("v-snackbar",{attrs:{timeout:t.timeout,success:"success"===t.context,info:"info"===t.context,warning:"warning"===t.context,error:"error"===t.context,primary:"primary"===t.context,secondary:"secondary"===t.context,"multi-line":"multi-line"===t.mode,vertical:"vertical"===t.mode},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.text)+"\n    "),s("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1)],1)},n=[],i={render:a,staticRenderFns:n};e.a=i},CRpD:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{ref:"flyaway"},[t._t("default")],2)])},n=[],i={render:a,staticRenderFns:n};e.a=i},DetP:function(t,e,s){"use strict";var a=s("/5sW");e.a={props:["onlyMovingVessels"],data:function(){return{imgUrl:"https://s3.us-east-2.amazonaws.com/rs-storage-01/vessel-images",center:{lat:0,lng:0},markers:[],vessels:[],paths:[],selectedVessel:null,snackbar:!1,context:"",mode:"",timeout:3e3,text:""}},methods:{reloadMap:function(t){this.selectedVessel=t;var e=t.Long_Lat_Time.split(",");e=e.filter(function(t,e){return(e+1)%3}),this.markers=[{position:{lat:parseFloat(e[1]),lng:parseFloat(e[0])}}],this.center={lat:parseFloat(e[1]),lng:parseFloat(e[0])},this.paths=[];for(var s=0;s<e.length;s+=2)this.paths.push({lat:parseFloat(e[s+1]),lng:parseFloat(e[s])});a.a.$gmapDefaultResizeBus.$emit("resize")},showMsgBox:function(t,e){this.text=t,this.context=e,this.snackbar=!0}},computed:{movingVessels:function(){return this.onlyMovingVessels?this.vessels.filter(function(t){return n(t)}):this.vessels}},watch:{vessels:function(){var t=this;if(this.selectedVessel){var e=this.vessels.find(function(e){return e.MMSI===t.selectedVessel.MMSI});e.Time_stamp!==this.selectedVessel.Time_stamp&&(this.reloadMap(e),n(this.selectedVessel)?this.showMsgBox(this.selectedVessel.Ship_name+": info updated","info"):this.showMsgBox(this.selectedVessel.Ship_name+" has stopped!","error"))}}},created:function(){var t=this;this.$http.get("http://ais.rs.no/aktive.json").then(function(e){t.vessels=e.data}),setInterval(function(){console.log("update intervall"),t.$http.get("http://ais.rs.no/aktive.json").then(function(e){t.vessels=e.data})},5e3)}};var n=function(t){return t.SOG>1}},E4dI:function(t,e){},EPS6:function(t,e){},M93x:function(t,e,s){"use strict";var a=s("xJD8"),n=s("5Ym2"),i=s("VU/8"),r=i(a.a,n.a,null,null,null);e.a=r.exports},MfM3:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{ref:"input",attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.value}})},n=[],i={render:a,staticRenderFns:n};e.a=i},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("/5sW"),n=s("3EgV"),i=s.n(n),r=s("tLfa"),l=(s.n(r),s("M93x")),o=s("YaEn"),c=s("sA6N"),v=s("ORbq");a.a.use(v.a),a.a.use(i.a),a.a.config.productionTip=!1,a.a.use(c,{load:{key:"AIzaSyAkkr1PCZqPd2S4-tX0ociz2-_mtdQsUcg",v:"3"}}),new a.a({el:"#app",router:o.a,render:function(t){return t(l.a)}})},XaSM:function(t,e,s){"use strict";var a=s("DetP"),n=s("7t3Y"),i=s("VU/8"),r=i(a.a,n.a,null,null,null);e.a=r.exports},YI6p:function(t,e,s){"use strict";var a=s("jIen"),n=s("mYB1"),i=s("VU/8"),r=i(a.a,n.a,null,null,null);e.a=r.exports},YaEn:function(t,e,s){"use strict";var a=s("/5sW"),n=s("/ocq"),i=s("XaSM");a.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"VesselsLiveView",component:i.a}]})},mYB1:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",[s("span",{domProps:{textContent:t._s(t.label)}}),t._v(" "),s("input",{ref:"input",class:t.className,attrs:{type:"text",placeholder:t.placeholder}})])},n=[],i={render:a,staticRenderFns:n};e.a=i},preG:function(t,e,s){"use strict";var a=s("osty"),n=s("MfM3"),i=s("VU/8"),r=i(a.a,n.a,null,null,null);e.a=r.exports},tLfa:function(t,e){},uB3l:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vue-map-container"},[s("div",{ref:"vue-map",staticClass:"vue-map"}),t._v(" "),s("div",{staticClass:"vue-map-hidden"},[t._t("default")],2),t._v(" "),t._t("visible")],2)},n=[],i={render:a,staticRenderFns:n};e.a=i},wvUL:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vue-street-view-pano-container"},[s("div",{ref:"vue-street-view-pano",staticClass:"vue-street-view-pano"}),t._v(" "),t._t("default")],2)},n=[],i={render:a,staticRenderFns:n};e.a=i},xJD8:function(t,e,s){"use strict";e.a={data:function(){return{drawer:null,items:[{title:"Live View",icon:"gps_fixed"},{title:"Historical View",icon:"access_time"},{title:"Location View",icon:"location_on"}],sheetVisable:!1,onlyMovingVessels:!0}}}}},["NHnr"]);
//# sourceMappingURL=app.298684b8791f77534854.js.map