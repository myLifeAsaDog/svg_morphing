webpackJsonp([1],{"84a9":function(t,e){},BpKH:function(t,e){},ItIu:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),r=n("7QTg"),s=n("4ywN"),a=["M0 125 L300 125 L300 175 L0 175 Z","M125 0 L175 0 L175 300 L125 300 Z","M150 50 L250 150 L150 250 L50 150 Z","M100,50 L200 50 L200 150 L100 200 Z"],o={name:"animation-content",props:{currentPage:{type:Number,default:0}},data:function(){return{beforePathData:a[0]}},watch:{currentPage:function(t,e){this.beforePathData=0===t?0:a[e],Object(s.a)({targets:"#svgContent path",duration:500,easing:"easeInOutQuad",d:a[t]})}}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("aside",[e("svg",{attrs:{id:"svgContent",width:"300px",height:"300px"}},[e("path",{attrs:{d:this.beforePathData,fill:"red"}})])])},staticRenderFns:[]};var u=n("VU/8")(o,p,!1,function(t){n("ItIu")},null,null).exports,l={name:"svg-content",props:{currentPage:{type:Number,default:0}},computed:{pathData:function(){return a[this.currentPage]}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"300px",height:"300px"}},[e("path",{attrs:{d:this.pathData,fill:"red"}})])},staticRenderFns:[]},d=n("VU/8")(l,c,!1,null,null,null).exports,h=(n("BpKH"),{name:"swipe-content",components:{Swiper:r.Swiper,SwiperSlide:r.SwiperSlide,AnimationContent:u,SvgContent:d},data:function(){return{currentPage:0,isDuringSlide:!1,swiperOption:{speed:500,navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"},pagination:{el:".swiper-pagination"}}}},computed:{swiper:function(){return this.$refs.swipeWrapper&&this.$refs.swipeWrapper.$swiper}},mounted:function(){var t=this;this.swiper.on("slideChange",function(){t.onSlideChange(t)})},methods:{setSlideFlg:function(t){this.isDuringSlide=t},onSlideChange:function(t){this.currentPage=t.swiper.activeIndex}}}),g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("animation-content",{directives:[{name:"show",rawName:"v-show",value:t.isDuringSlide,expression:"isDuringSlide"}],attrs:{"current-page":t.currentPage}}),t._v(" "),n("swiper",{ref:"swipeWrapper",staticClass:"swiper",attrs:{options:t.swiperOption},on:{slideChangeTransitionStart:function(e){return t.setSlideFlg(!0)},slideChangeTransitionEnd:function(e){return t.setSlideFlg(!1)}}},[t._l(4,function(e){return n("swiper-slide",{key:e},[n("h2",[t._v("CONTENT "+t._s(e))]),t._v(" "),n("div",{staticClass:"svgArea"},[n("svg-content",{directives:[{name:"show",rawName:"v-show",value:!t.isDuringSlide,expression:"!isDuringSlide"}],attrs:{"current-page":e-1}})],1)])}),t._v(" "),n("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),t._v(" "),n("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"}),t._v(" "),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var v={name:"App",components:{SwipeContent:n("VU/8")(h,g,!1,function(t){n("uMyB")},null,null).exports}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("main",{attrs:{id:"app"}},[e("header",[this._v("SVG MORPHING")]),this._v(" "),e("swipe-content")],1)},staticRenderFns:[]};var w=n("VU/8")(v,f,!1,function(t){n("84a9")},null,null).exports;i.default.config.productionTip=!1,new i.default({el:"#app",components:{App:w},template:"<App/>"})},uMyB:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.js.map