webpackJsonp([1],{"+cAf":function(e,t,s){"use strict";var n=s("/Ygy");t.a={components:{SeaMap:n.a},name:"vessel-view",props:{vessel:null},data:function(){return{imgUrl:"static/vessel-images",showBigMap:!1}},computed:{selectedVessel:function(){return this.$store.getters.selectedVessel},isSelected:function(){return!(!this.vessel||!this.selectedVessel)&&this.selectedVessel.MMSI===this.vessel.MMSI}}}},"/SrT":function(e,t,s){"use strict";function n(e){s("SOl2")}var a=s("+cAf"),i=s("4F4x"),o=s("VU/8"),r=n,l=o(a.a,i.a,r,"data-v-359e6ad6",null);t.a=l.exports},"/Ygy":function(e,t,s){"use strict";function n(e){s("kbP0")}var a=s("FupW"),i=s("O7Fb"),o=s("VU/8"),r=n,l=o(a.a,i.a,r,null,null);t.a=l.exports},"/yRs":function(e,t,s){"use strict";function n(e){s("E4dI")}Object.defineProperty(t,"__esModule",{value:!0});var a=s("diQi"),i=s.n(a),o=s("wvUL"),r=s("VU/8"),l=n,c=r(i.a,o.a,l,null,null);t.default=c.exports},"1Hcy":function(e,t,s){"use strict";t.a={data:function(){return{focus:!1,searchText:""}},computed:{appendIcon:function(){return""!==this.searchText?"clear":""}},methods:{clearSearchText:function(){this.searchText=""}},watch:{searchText:function(){this.$store.commit("setSearchText",this.searchText)}}}},"4F4x":function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",[s("v-card-text",{staticClass:"grey lighten-3"},[s("v-container",{attrs:{fluid:"","grid-list-md":""}},[s("v-layout",{attrs:{row:"",wrap:""}},[e.showBigMap?e._e():s("v-flex",{attrs:{"d-flex":"",xs12:"",sm12:"",md6:""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{"d-flex":""}},[s("v-card",[s("v-card-media",{attrs:{src:e.imgUrl+"/"+e.vessel.MMSI+".jpg",height:"200px"}}),e._v(" "),s("v-card-title",{attrs:{"primary-title":""}},[s("div",[s("h3",{staticClass:"headline mb-0"},[e._v(e._s(e.vessel.Ship_name))]),e._v(" "),s("div",[e._v("MMSI: "+e._s(e.vessel.MMSI))]),e._v(" "),s("div",[e._v("SOG: "+e._s(e.vessel.SOG)+" knots - COG: "+e._s(e.vessel.COG)+"°")]),e._v(" "),s("div",[e._v("Latitude: "+e._s(e.vessel.Latitude)+" Longitude: "+e._s(e.vessel.Longitude))]),e._v(" "),s("div",[e._v("Last updated: "+e._s(new Date(e.vessel.Time_stamp).toLocaleString()))])])]),e._v(" "),s("v-card-actions",[e._e()],1)],1)],1)],1)],1),e._v(" "),s("v-flex",{attrs:{"d-flex":"",xs12:"",sm12:"",md6:"",id:"map"}},[s("v-card",[s("v-flex",{attrs:{"d-flex":"",xs12:""}},[e.isSelected?s("sea-map",{attrs:{vessel:e.vessel},on:{showBigMap:function(t){e.showBigMap=!e.showBigMap}}}):e._e()],1)],1)],1)],1)],1)],1)],1)},a=[],i={render:n,staticRenderFns:a};t.a=i},"5Ym2":function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",{attrs:{id:"app-toolbar",toolbar:""}},[s("app-header"),e._v(" "),s("main",[s("v-container",{staticStyle:{"margin-top":"70px"},attrs:{fluid:""}},[s("router-view")],1)],1),e._v(" "),s("v-snackbar",{attrs:{timeout:6e3,top:!0},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[s("v-icon",{attrs:{dark:"",left:""}},[e._v("error")]),s("span",{staticClass:"ml-2"},[e._v(e._s(e.error))]),e._v(" "),s("v-btn",{staticClass:"pink--text",attrs:{flat:""},nativeOn:{click:function(t){e.snackbar=!1}}},[e._v("Close")])],1)],1)},a=[],i={render:n,staticRenderFns:a};t.a=i},"5ZbH":function(e,t,s){"use strict";function n(e){s("EPS6")}Object.defineProperty(t,"__esModule",{value:!0});var a=s("kXiA"),i=s.n(a),o=s("uB3l"),r=s("VU/8"),l=n,c=r(i.a,o.a,l,null,null);t.default=c.exports},"5cLx":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("Vj7G"),a=s.n(n),i=s("CRpD"),o=s("VU/8"),r=o(a.a,i.a,null,null,null);t.default=r.exports},CRpD:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{ref:"flyaway"},[e._t("default")],2)])},a=[],i={render:n,staticRenderFns:a};t.a=i},DO9f:function(e,t){},E4dI:function(e,t){},EPS6:function(e,t){},Fs1H:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-toolbar",{staticClass:"red darken-2",attrs:{fixed:"",dark:""}},[s("v-toolbar-title",[e._v("Ais-Tracker")]),e._v(" "),s("v-spacer"),e._v(" "),s("v-btn",{attrs:{icon:""},on:{click:function(t){e.sheetVisable=!e.sheetVisable}}},[s("v-icon",[e._v("settings")])],1),e._v(" "),e.extendedToolBar?s("tool-bar",{attrs:{slot:"extension"},slot:"extension"}):e._e()],1),e._v(" "),s("div",{staticClass:"text-xs-center"},[s("v-bottom-sheet",{model:{value:e.sheetVisable,callback:function(t){e.sheetVisable=t},expression:"sheetVisable"}},[s("v-list",[s("v-list-tile",[s("v-slider",{attrs:{label:"Track Path (minutes)",max:1e3,"thumb-label":""},model:{value:e.pathInMinutes,callback:function(t){e.pathInMinutes=t},expression:"pathInMinutes"}}),e._v(" "),s("v-btn",{attrs:{icon:""},on:{click:function(t){e.sheetVisable=!e.sheetVisable}}},[s("v-icon",[e._v("close")])],1)],1)],1)],1)],1)],1)},a=[],i={render:n,staticRenderFns:a};t.a=i},FupW:function(e,t,s){"use strict";var n=s("sA6N"),a=(s.n(n),s("/5sW")),i=s("ZHE1");a.a.use(n,{load:{key:"AIzaSyCCFWll4oEjXml1BVeZ3-x1TZphNVx8yko",v:"3"}});var o=function(e){this.tileSize=new e.maps.Size(256,256),this.maxZoom=19,this.getTile=function(e,t,s){var n=s.createElement("DIV");return n.style.width="600px",n.style.height="400px",n.style.backgroundImage="url(http://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=sjokartraster&zoom="+t+"&x="+e.x+"&y="+e.y+")",n}};t.a={props:{vessel:null},data:function(){return{center:{lat:parseFloat(this.vessel.Decimal_Latitude),lng:parseFloat(this.vessel.Decimal_Longitude)},markers:[{position:{lat:parseFloat(this.vessel.Decimal_Latitude),lng:parseFloat(this.vessel.Decimal_Longitude)}}],showSeaMap:!1,zoom:12,showBigMap:!1,followVessel:!0,style:"width: 100%; height: 400px"}},computed:{selectedVessel:function(){return this.$store.getters.selectedVessel},seaMapIcon:function(){return this.showSeaMap?"layers_clear":"layers"},bigMapIcon:function(){return this.showBigMap?(this.style="width: 100%; height: 600px","fullscreen"):(this.style="width: 100%; height: 400px","fullscreen_exit")},followVesselIcon:function(){return this.followVessel?"gps_fixed":"gps_not_fixed"},path:function(){return this.$store.getters.selectedVesselPath},pathInMinutes:function(){return this.$store.getters.pathInMinutes}},watch:{selectedVessel:function(){console.log("watch: selectedVessel"),a.a.$gmapDefaultResizeBus.$emit("resize")},vessel:function(){console.log("vessel update: ",this.vessel.MMSI),this.vessel.MMSI===this.selectedVessel.MMSI&&(this.$store.dispatch("addToPath",{lat:parseFloat(this.vessel.Decimal_Latitude),lng:parseFloat(this.vessel.Decimal_Longitude)}),this.followVessel&&(this.center={lat:parseFloat(this.vessel.Decimal_Latitude),lng:parseFloat(this.vessel.Decimal_Longitude)}),this.markers=[{position:{lat:parseFloat(this.vessel.Decimal_Latitude),lng:parseFloat(this.vessel.Decimal_Longitude)}}])},showSeaMap:function(){this.showSeaMap?this.$refs.seaMap.$mapObject.setMapTypeId("sjokartraster"):this.$refs.seaMap.$mapObject.setMapTypeId("roadmap")},showBigMap:function(){this.$emit("showBigMap"),a.a.$gmapDefaultResizeBus.$emit("resize")},followVessel:function(){console.log("watch: followVessel"),this.centerToVessel()},pathInMinutes:function(){console.log("watch: pathInMinutes"),this.vessel.MMSI===this.selectedVessel.MMSI&&this.refetchPath()}},methods:{centerToVessel:function(){console.log("method: centerToVessel"),this.followVessel&&this.$refs.seaMap.$mapObject.setCenter(this.markers[0].position)},refetchPath:function(){console.log("method: refetchPath");var e=new Date,t=s.i(i.a)(e).subtract(this.pathInMinutes,"minutes").toDate();this.$store.dispatch("fetchSelectedVesselPath",{mmsi:this.selectedVessel.MMSI,fromUTC:t.toUTCString(),toUTC:e.toUTCString()})}},mounted:function(){var e=this;this.$refs.seaMap&&this.$refs.seaMap.$mapCreated.then(function(){e.$refs.seaMap.$mapObject.mapTypes.set("sjokartraster",new o(window.google))})},created:function(){console.log("created: ",this.vessel.MMSI)}}},HCTz:function(e,t,s){"use strict";var n=s("epUk"),a=s("g7Jj"),i=s("emCR");t.a={components:{SearchField:n.a,DataTimePicker:a.a,ToolBar:i.a},name:"app-header",data:function(){return{imgUrl:"https://s3.us-east-2.amazonaws.com/rs-storage-01/vessel-images",items:[{title:"Live View",icon:"gps_fixed"},{title:"Historical View",icon:"access_time"},{title:"Location View",icon:"location_on"}],sheetVisable:!1,extendedToolBar:!0}},computed:{filterMovingVessels:{get:function(){return this.$store.getters.filterMovingVessels},set:function(e){this.$store.dispatch("setFilterMovingVessels",!this.filterMovingVessels)}},vessels:function(){return this.$store.getters.vessels},pathInMinutes:{get:function(){return this.$store.getters.pathInMinutes},set:function(e){this.$store.dispatch("setPathInMinutes",e)}}},methods:{setSearchText:function(e){this.$store.dispatch("setSearchText",e)}}}},Imrw:function(e,t,s){"use strict";t.a={computed:{filterMovingVessels:{get:function(){return this.$store.getters.filterMovingVessels},set:function(e){this.$store.dispatch("setFilterMovingVessels",!this.filterMovingVessels)}}}}},JA6j:function(e,t,s){"use strict";var n=s("/SrT"),a=s("ZHE1");t.a={components:{VesselView:n.a},data:function(){return{imgUrl:"static/vessel-images"}},computed:{filterMovingVessels:function(){return this.$store.getters.filterMovingVessels},vessels:function(){return this.$store.getters.vessels},selectedVessel:function(){return this.$store.getters.selectedVessel}},methods:{isVesselMoving:function(e){return e.SOG>1},matchSearchPattern:function(e){return e.Ship_name.toUpperCase().includes(this.$store.getters.searchText.toUpperCase())},selectVessel:function(e){this.$store.dispatch("selectVessel",e);var t=new Date,n=s.i(a.a)(t).subtract(this.$store.getters.pathInMinutes,"minutes").toDate();this.$store.dispatch("fetchSelectedVesselPath",{mmsi:e.MMSI,fromUTC:n.toUTCString(),toUTC:t.toUTCString()})}}}},KY9n:function(e,t){},M93x:function(e,t,s){"use strict";var n=s("xJD8"),a=s("5Ym2"),i=s("VU/8"),o=i(n.a,a.a,null,null,null);t.a=o.exports},MfM3:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{ref:"input",attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.value}})},a=[],i={render:n,staticRenderFns:a};t.a=i},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("/5sW"),a=s("3EgV"),i=s.n(a),o=s("tLfa"),r=(s.n(o),s("M93x")),l=s("YaEn"),c=s("wtEF"),u=s("sA6N");s.n(u);n.a.use(u,{load:{key:"AIzaSyCCFWll4oEjXml1BVeZ3-x1TZphNVx8yko",v:"3"}}),n.a.use(i.a),n.a.config.productionTip=!1,new n.a({store:c.a,el:"#app",router:l.a,render:function(e){return e(r.a)}})},O7Fb:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("gmap-map",{ref:"seaMap",style:e.style,attrs:{center:e.center,zoom:e.zoom,options:{disableDefaultUI:!0},"map-type-id":"roadmap"},on:{dragend:e.centerToVessel}},[e._l(e.markers,function(t,n){return s("gmap-marker",{key:n,attrs:{position:t.position,clickable:!0,draggable:!1},on:{click:function(s){e.center=t.position}}})}),e._v(" "),s("gmap-polyline",{attrs:{path:e.path}})],2),e._v(" "),s("v-btn",{staticClass:"blue",attrs:{id:"maptype",dark:"",small:"",absolute:"",top:"",right:"",fab:""},on:{click:function(t){e.showSeaMap=!e.showSeaMap}}},[s("v-icon",[e._v(e._s(e.seaMapIcon))])],1),e._v(" "),s("v-btn",{staticClass:"green",attrs:{id:"zoomup",dark:"",small:"",absolute:"",bottom:"",right:"",fab:""},on:{click:function(t){e.zoom++}}},[s("v-icon",[e._v("add")])],1),e._v(" "),s("v-btn",{staticClass:"red",attrs:{id:"zoomdown",dark:"",small:"",absolute:"",bottom:"",right:"",fab:""},on:{click:function(t){e.zoom--}}},[s("v-icon",[e._v("remove")])],1),e._v(" "),s("v-btn",{staticClass:"deep-orange",attrs:{id:"bigMap",dark:"",small:"",absolute:"",top:"",left:"",fab:""},on:{click:function(t){e.showBigMap=!e.showBigMap}}},[s("v-icon",[e._v(e._s(e.bigMapIcon))])],1),e._v(" "),s("v-btn",{staticClass:"pink",attrs:{id:"followVessel",dark:"",small:"",absolute:"",top:"",right:"",fab:""},on:{click:function(t){e.followVessel=!e.followVessel}}},[s("v-icon",[e._v(e._s(e.followVesselIcon))])],1)],1)},a=[],i={render:n,staticRenderFns:a};t.a=i},QTMN:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-layout",{staticClass:"tool-bar",attrs:{row:""}},[s("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.searchButtonClicked||e.historyButtonClicked||e.filterButtonClicked,expression:"searchButtonClicked||historyButtonClicked||filterButtonClicked"}],attrs:{icon:""},on:{click:e.clearClicked}},[s("v-icon",[e._v("arrow_back")])],1),e._v(" "),s("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.showSearchButton,expression:"showSearchButton"}],attrs:{icon:""},on:{click:function(t){e.searchButtonClicked=!0}}},[s("v-icon",[e._v("search")])],1),e._v(" "),s("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.showHistoryButton,expression:"showHistoryButton"}],attrs:{icon:""},on:{click:function(t){e.historyButtonClicked=!0}}},[s("v-icon",[e._v("history")])],1),e._v(" "),s("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.showFilterButton,expression:"showFilterButton"}],attrs:{icon:""},on:{click:function(t){e.filterButtonClicked=!0}}},[s("v-icon",[e._v("filter_list")])],1),e._v(" "),s("search-field",{directives:[{name:"show",rawName:"v-show",value:e.searchButtonClicked,expression:"searchButtonClicked"}]}),e._v(" "),s("date-time-picker",{directives:[{name:"show",rawName:"v-show",value:e.historyButtonClicked,expression:"historyButtonClicked"}]}),e._v(" "),s("moving-vessel-switch",{directives:[{name:"show",rawName:"v-show",value:e.filterButtonClicked,expression:"filterButtonClicked"}]})],1)},a=[],i={render:n,staticRenderFns:a};t.a=i},SOl2:function(e,t){},YI6p:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("jIen"),a=s.n(n),i=s("mYB1"),o=s("VU/8"),r=o(a.a,i.a,null,null,null);t.default=r.exports},YaEn:function(e,t,s){"use strict";var n=s("/5sW"),a=s("/ocq"),i=s("tGyV");n.a.use(a.a),t.a=new a.a({routes:[{path:"/",name:"VesselListView",component:i.a}]})},crLN:function(e,t){},emCR:function(e,t,s){"use strict";function n(e){s("crLN")}var a=s("yvZU"),i=s("QTMN"),o=s("VU/8"),r=n,l=o(a.a,i.a,r,"data-v-419595fc",null);t.a=l.exports},epUk:function(e,t,s){"use strict";function n(e){s("DO9f")}var a=s("1Hcy"),i=s("ica/"),o=s("VU/8"),r=n,l=o(a.a,i.a,r,"data-v-691ee6d3",null);t.a=l.exports},g7Jj:function(e,t,s){"use strict";function n(e){s("xbdv")}var a=s("z+b6"),i=s("od5d"),o=s("VU/8"),r=n,l=o(a.a,i.a,r,"data-v-436fb878",null);t.a=l.exports},"ica/":function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-layout",{staticClass:"search-field-bar",attrs:{row:""}},[s("v-text-field",{attrs:{"hide-details":"","single-line":"","prepend-icon":"search",solo:"","append-icon":e.appendIcon,appendIconCb:e.clearSearchText},on:{focus:function(t){e.focus=!0},blur:function(t){e.focus=!1}},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}})],1)},a=[],i={render:n,staticRenderFns:a};t.a=i},kbP0:function(e,t){},mYB1:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",[s("span",{domProps:{textContent:e._s(e.label)}}),e._v(" "),s("input",{ref:"input",class:e.className,attrs:{type:"text",placeholder:e.placeholder}})])},a=[],i={render:n,staticRenderFns:a};t.a=i},od5d:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-layout",{attrs:{row:""}},[s("v-menu",{attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-right":40,"max-width":"290px","min-width":"290px"},model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[s("v-text-field",{staticClass:"mr-1 date-time-field",attrs:{slot:"activator",label:"date","prepend-icon":"event",readonly:"",solo:""},slot:"activator",model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),e._v(" "),s("v-date-picker",{attrs:{"no-title":"",scrollable:"",autosave:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),e._v(" "),s("v-menu",{attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-right":40,"max-width":"290px","min-width":"290px"},model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[s("v-text-field",{staticClass:"mr-1 date-time-field",attrs:{slot:"activator",label:"time","prepend-icon":"access_time",readonly:"",solo:""},slot:"activator",model:{value:e.time,callback:function(t){e.time=t},expression:"time"}}),e._v(" "),s("v-time-picker",{attrs:{autosave:""},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}})],1)],1)},a=[],i={render:n,staticRenderFns:a};t.a=i},preG:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("osty"),a=s.n(n),i=s("MfM3"),o=s("VU/8"),r=o(a.a,i.a,null,null,null);t.default=r.exports},rxyd:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-layout",{attrs:{row:""}},[s("v-switch",{staticClass:"switch",attrs:{color:"white",dark:"",label:"Moving Vessels"},model:{value:e.filterMovingVessels,callback:function(t){e.filterMovingVessels=t},expression:"filterMovingVessels"}})],1)},a=[],i={render:n,staticRenderFns:a};t.a=i},tGyV:function(e,t,s){"use strict";var n=s("JA6j"),a=s("uEgn"),i=s("VU/8"),o=i(n.a,a.a,null,null,null);t.a=o.exports},tLfa:function(e,t){},teIl:function(e,t,s){"use strict";var n=s("HCTz"),a=s("Fs1H"),i=s("VU/8"),o=i(n.a,a.a,null,null,null);t.a=o.exports},uB3l:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vue-map-container"},[s("div",{ref:"vue-map",staticClass:"vue-map"}),e._v(" "),s("div",{staticClass:"vue-map-hidden"},[e._t("default")],2),e._v(" "),e._t("visible")],2)},a=[],i={render:n,staticRenderFns:a};t.a=i},uEgn:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("v-layout",{attrs:{row:"",wrap:"",dark:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-expansion-panel",{attrs:{popout:""}},e._l(e.vessels,function(t,n){return s("v-expansion-panel-content",{directives:[{name:"show",rawName:"v-show",value:e.isVesselMoving(t)&&e.matchSearchPattern(t)||!e.filterMovingVessels&&e.matchSearchPattern(t),expression:"isVesselMoving(vessel)&&matchSearchPattern(vessel) || !filterMovingVessels&&matchSearchPattern(vessel)"}],key:t.MMSI,nativeOn:{click:function(s){e.selectVessel(t)}}},[s("div",{attrs:{slot:"header"},slot:"header"},[s("v-list-tile",{attrs:{avatar:""}},[s("v-list-tile-avatar",[s("img",{attrs:{src:e.imgUrl+"/"+t.MMSI+".jpg",alt:""}})]),e._v(" "),s("v-list-tile-content",[e._v("\n                "+e._s(t.Ship_name)+"\n              ")])],1)],1),e._v(" "),s("vessel-view",{attrs:{vessel:t}})],1)}))],1)],1)],1)},a=[],i={render:n,staticRenderFns:a};t.a=i},uslO:function(e,t,s){function n(e){return s(a(e))}function a(e){var t=i[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var i={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};n.keys=function(){return Object.keys(i)},n.resolve=a,e.exports=n,n.id="uslO"},wtEF:function(e,t,s){"use strict";s.d(t,"a",function(){return r});var n=s("/5sW"),a=s("NYxO"),i=s("mtWM"),o=s.n(i);n.a.use(a.a);var r=new a.a.Store({state:{filterMovingVessels:!1,vessels:[],searchText:"",selectedVessel:null,selectedVesselPath:[],pathInMinutes:120,errors:[]},getters:{filterMovingVessels:function(e){return e.filterMovingVessels},vessels:function(e){return e.vessels},searchText:function(e){return e.searchText},selectedVessel:function(e){return e.selectedVessel},selectedVesselPath:function(e){return e.selectedVesselPath},pathInMinutes:function(e){return e.pathInMinutes},errors:function(e){return e.errors.pop()}},mutations:{setFilterMovingVessels:function(e,t){e.filterMovingVessels=t},fetchVessels:function(e,t){e.vessels=t},setSearchText:function(e,t){e.searchText=t},selectVessel:function(e,t){e.selectedVessel=t},fetchSelectedVesselPath:function(e,t){e.selectedVesselPath=t},setPathInMinutes:function(e,t){e.pathInMinutes=t},addToPath:function(e,t){e.selectedVesselPath.push(t)},addError:function(e,t){e.errors.push(t)}},actions:{setFilterMovingVessels:function(e,t){(0,e.commit)("setFilterMovingVessels",t)},fetchVessels:function(e,t){var s=e.commit;o.a.get(t).then(function(e){s("fetchVessels",e.data)}).catch(function(e){s("addError",e)})},setSearchText:function(e,t){(0,e.commit)("setSearchText",t)},selectVessel:function(e,t){(0,e.commit)("selectVessel",t)},fetchSelectedVesselPath:function(e,t){var s=e.commit;o.a.get("https://aistracker.herokuapp.com/api/get_positions/"+t.mmsi+"/"+t.fromUTC+"/"+t.toUTC).then(function(e){s("fetchSelectedVesselPath",e.data.map(function(e){return{lat:e.Decimal_Latitude,lng:e.Decimal_Longitude,date:e.Time_stamp}}))}).catch(function(e){s("addError",e)})},setPathInMinutes:function(e,t){(0,e.commit)("setPathInMinutes",t)},addToPath:function(e,t){(0,e.commit)("addToPath",t)}}})},wvUL:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vue-street-view-pano-container"},[s("div",{ref:"vue-street-view-pano",staticClass:"vue-street-view-pano"}),e._v(" "),e._t("default")],2)},a=[],i={render:n,staticRenderFns:a};t.a=i},xJD8:function(e,t,s){"use strict";var n=s("teIl"),a=null;t.a={components:{AppHeader:n.a},data:function(){return{drawer:null,items:[{title:"Live View",icon:"gps_fixed"},{title:"Historical View",icon:"access_time"},{title:"Location View",icon:"location_on"}],snackbar:!1}},computed:{error:function(){var e=this.$store.getters.errors;if(e)return this.snackbar=!0,e.message}},created:function(){var e=this;this.$store.dispatch("fetchVessels","https://ais.rs.no/aktive_pos.json"),a=setInterval(function(){e.$store.dispatch("fetchVessels","https://ais.rs.no/aktive_pos.json")},1e4)},destroyed:function(){clearInterval(a)}}},xbdv:function(e,t){},yWqa:function(e,t,s){"use strict";function n(e){s("KY9n")}var a=s("Imrw"),i=s("rxyd"),o=s("VU/8"),r=n,l=o(a.a,i.a,r,"data-v-d5524432",null);t.a=l.exports},yvZU:function(e,t,s){"use strict";var n=s("epUk"),a=s("g7Jj"),i=s("yWqa");t.a={components:{SearchField:n.a,DateTimePicker:a.a,MovingVesselSwitch:i.a},data:function(){return{searchButtonClicked:!1,historyButtonClicked:!1,filterButtonClicked:!1,showBackButtonClicked:!1,showSearchButton:!0,showHistoryButton:!0,showFilterButton:!0}},methods:{clearClicked:function(){this.searchButtonClicked=!1,this.historyButtonClicked=!1,this.filterButtonClicked=!1,this.backButtonClicked=!1},showAllButtons:function(){this.showSearchButton=!0,this.showHistoryButton=!0,this.showFilterButton=!0,this.showBackButton=!1},hideAllButtons:function(){this.showSearchButton=!1,this.showHistoryButton=!1,this.showFilterButton=!1,this.showBackButton=!0}},watch:{searchButtonClicked:function(){this.searchButtonClicked?this.hideAllButtons():this.showAllButtons()},historyButtonClicked:function(){this.historyButtonClicked?this.hideAllButtons():this.showAllButtons()},filterButtonClicked:function(){this.filterButtonClicked?this.hideAllButtons():this.showAllButtons()}}}},"z+b6":function(e,t,s){"use strict";t.a={data:function(){return{date:null,menu:!1,modal:!1,time:null,menu2:!1,modal2:!1,expanded:!1}}}}},["NHnr"]);
//# sourceMappingURL=app.685993a6d0d30b4cde3a.js.map