(window.webpackJsonp=window.webpackJsonp||[]).push([[56,25,26],{352:function(t,e,n){var content=n(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("3d6686f9",content,!0,{sourceMap:!1})},353:function(t,e,n){var content=n(364);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("33d3c6b4",content,!0,{sourceMap:!1})},354:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(49),{methods:{logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),c=(n(363),n(57)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"nav-section wf-section"},[e("div",{staticClass:"navbar w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"navbar-content-holder"},[e("div",[e("nuxt-link",{staticClass:"brand-logo",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[e("img",{staticClass:"site-logo",attrs:{src:"/fiscal-logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{attrs:{id:"ytWidget"}})],1),t._v(" "),e("nav",{staticClass:"nav-menu w-nav-menu",attrs:{role:"navigation"}},[e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[t._v("Home")]),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:{path:"/about",query:{username:t.$route.query.username}}}},[t._v("About Us")]),t._v(" "),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:{path:"/plan",query:{username:t.$route.query.username}}}},[t._v("Plan")]),t._v(" "),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:{path:"/contact",query:{username:t.$route.query.username}}}},[t._v("Contact")]),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:{path:"/faq",query:{username:t.$route.query.username}}}},[t._v("Faq")]),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:{path:"/news",query:{username:t.$route.query.username}}}},[t._v("News")]),t._v(" "),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:{path:"/signup",query:{username:t.$route.query.username}}}},[t._v("Signup")]),t._v(" "),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:{path:"/login",query:{username:t.$route.query.username}}}},[t._v("login")])],1),t._v(" "),t._m(0)])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"menu-button w-nav-button"},[t("div",{staticClass:"icon w-icon-nav-menu"})])}],!1,null,null,null);e.default=component.exports},359:function(t,e,n){"use strict";n(352)},360:function(t,e,n){var r=n(150)((function(i){return i[1]}));r.push([t.i,".img-logo{width:120px}label.email{font-size:12px;font-weight:300}.input-icon-flexer input{color:#fff}@media screen and (max-width:425px){.footer-social-media{display:none}}",""]),r.locals={},t.exports=r},361:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(49),n(20),n(93),n(13),n(39),n(26),{data:function(){return{company:"",address:"",phone:"",email:"",about:"",response:"",isError:!1,showResponse:!1,onRequest:!1,emailError:!1}},methods:{loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",e.async=!0,e.id="translator";var n=document.querySelector("#footer");n?n.appendChild(e):console.error("Could not find app node to append script element")},setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},checkErrorInputs:function(input,data){if("email"==input){if(""==data||!data||!/^\S+@\S+\.\S+$/.test(data))return this.$el.querySelector(".email").classList.add("error"),this.isError=!1,this.emailError=!0,void(this.onRequest=!1);this.$el.querySelector(".email").classList.remove("error"),this.isError=!0,this.emailError=!1}},callResponse:function(t,e){var n=this;this.response=t,this.isError=e,this.showResponse=!0,this.onRequest=!1,setTimeout((function(){n.showResponse=!1}),6e3)},clearInputs:function(){this.email=""},setArray:function(){this.checkArray=[{name:"email",data:this.email}]},processEmail:function(){var t=this;this.onRequest=!0,this.setArray(),this.checkArray.forEach((function(e){t.checkErrorInputs(e.name,e.data)})),this.isError&&setTimeout((function(){t.callResponse("Thanks for subscribing successfully",!1)}),4e3)},getAbout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/about");case 3:n=e.sent,t.about=n.data.data[0],e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getCompany:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return n=e.sent,e.next=6,n.data.data;case 6:t.company=e.sent,t.address=n.data.data.media[0],t.phone=n.data.data.media[2],e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.response.data);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}},mounted:function(){this.loadScript(),this.getAbout(),this.setFileURL(),this.getCompany()}}),c=(n(359),n(57)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"footer wf-section",attrs:{id:"footer"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"footer-content-holder"},[e("div",{staticClass:"inner-footer"},[e("div",{staticClass:"footer-logo-part"},[e("div",{staticClass:"footer-logo-holder"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{staticClass:"img-logo",attrs:{src:"/fiscal-logo.png",loading:"lazy",alt:""}})])],1),t._v(" "),e("div",{staticClass:"footer-texts-holder"},[t.about.content?e("div",{staticClass:"footer-top-text",domProps:{innerHTML:t._s("".concat(t.about.content.substring(0,300),"..."))}}):t._e()])]),t._v(" "),e("div",{staticClass:"footer-other-page"},[t._m(0),t._v(" "),e("div",{staticClass:"footer-page-flexer"},[e("div",{staticClass:"each-footer-page"},[e("div",{staticClass:"each-pages-holder"},[e("h4",{staticClass:"sub-footer-text"},[e("nuxt-link",{staticClass:"link-3",attrs:{to:"/about"}},[t._v("About")])],1)]),t._v(" "),e("div",{staticClass:"each-pages-holder"},[e("h4",{staticClass:"sub-footer-text"},[e("nuxt-link",{staticClass:"link-3",attrs:{to:"/plan"}},[t._v("Plan")])],1)]),t._v(" "),e("div",{staticClass:"each-pages-holder"},[e("h4",{staticClass:"sub-footer-text"},[e("nuxt-link",{staticClass:"link-3",attrs:{to:"/contact"}},[t._v("Contact")])],1)]),t._v(" "),e("div",{staticClass:"each-pages-holder"},[e("h4",{staticClass:"sub-footer-text"},[e("nuxt-link",{staticClass:"link-3",attrs:{to:"/news"}},[t._v("Blog")])],1)])]),t._v(" "),e("div",{staticClass:"each-footer-page"},[e("div",{staticClass:"each-pages-holder"},[e("h4",{staticClass:"sub-footer-text"},[e("nuxt-link",{staticClass:"link-3",attrs:{to:"/signup"}},[t._v("Get Started")])],1)]),t._v(" "),e("div",{staticClass:"each-pages-holder"},[e("h4",{staticClass:"sub-footer-text"},[e("nuxt-link",{staticClass:"link-3",attrs:{to:"/login"}},[t._v("Login")])],1)]),t._v(" "),e("div",{staticClass:"each-pages-holder"},[e("h4",{staticClass:"sub-footer-text"},[e("nuxt-link",{staticClass:"link-3",attrs:{to:"/forgotten-password"}},[t._v("Forgotten Password")])],1)])])])]),t._v(" "),e("div",{staticClass:"sucribe-other-page"},[t._m(1),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"footer-input-holder"},[e("div",{staticClass:"footer-input-block w-form"},[t.showResponse?e("div",{staticClass:"sign-label response",class:{error:t.isError}},[t._v("\n                "+t._s(t.response)+"\n              ")]):t._e(),t._v(" "),e("label",{directives:[{name:"show",rawName:"v-show",value:t.emailError,expression:"emailError"}],staticClass:"label email error",attrs:{for:""}},[t._v("Please Enter a valid username")]),t._v(" "),e("form",[e("div",{staticClass:"input-icon-flexer"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"text-field w-input",attrs:{type:"email",maxlength:"256",name:"email-2",placeholder:"Enter Your Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),t.onRequest?e("div",{staticClass:"footer-yellow-icon"},[e("img",{staticClass:"image-22",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/64832b870db34f71153d13fc_loader-icon%201.svg",loading:"lazy",alt:""}})]):e("div",{staticClass:"footer-yellow-icon",on:{click:t.processEmail}},[e("img",{staticClass:"image-22",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473ead14eeb1ff94ab83e2a_long-arrow-right-icon%201.svg",loading:"lazy",alt:""}})])])])])])]),t._v(" "),t._m(3)]),t._v(" "),e("div",{staticClass:"footer-buttom-line"}),t._v(" "),e("div",{staticClass:"buttom-text-holder"},[e("div",{staticClass:"footer-buttom-text"},[t._v("\n          Copyright © 2016-"+t._s((new Date).getFullYear())+"\n          "+t._s(t.company.companyName)+"\n          All rights reserved\n        ")])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"footer-header-holder"},[t("h1",{staticClass:"footer-header"},[this._v("Quick Links"),t("br")])])},function(){var t=this._self._c;return t("div",{staticClass:"footer-header-holder"},[t("h1",{staticClass:"footer-header"},[this._v("Subscribe"),t("br")])])},function(){var t=this._self._c;return t("div",{staticClass:"light-text-holder"},[t("div",{staticClass:"footer-top-text lighting"},[this._v("\n              Sign up for Alerts, Special Offers and Global Market Updates.\n            ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer-social-media"},[e("div",{staticClass:"footer-header-holder"},[e("h1",{staticClass:"footer-header"},[t._v("Instagram Feed"),e("br")])]),t._v(" "),e("div",{staticClass:"media-box-flexer"},[e("a",{staticClass:"each-media-box w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-23",attrs:{src:"/images/gold-bg.jpg",loading:"lazy",alt:""}})]),e("a",{staticClass:"each-media-box w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-23",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473f13f107043aab0901250_17876975147110586-s.jpg",loading:"lazy",alt:""}})]),e("a",{staticClass:"each-media-box w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-23",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473f16afe15e42cfa74711f_17881737650044870-s.jpg",loading:"lazy",alt:""}})]),e("a",{staticClass:"each-media-box w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-23",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473f1a2107043aab0905487_17894578420782119-s.jpg",loading:"lazy",alt:""}})]),e("a",{staticClass:"each-media-box w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-23",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473f1c9101c81b742891c86_17983664692318714-s.jpg",loading:"lazy",alt:""}})]),e("a",{staticClass:"each-media-box w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-23",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473f1e9101c81b742892fb2_18187364980025823-s.jpg",loading:"lazy",alt:""}})])])])}],!1,null,null,null);e.default=component.exports},363:function(t,e,n){"use strict";n(353)},364:function(t,e,n){var r=n(150)((function(i){return i[1]}));r.push([t.i,".site-logo{max-width:140px}",""]),r.locals={},t.exports=r},538:function(t,e,n){"use strict";n.r(e);var r=n(8),o=n(143),c=(n(49),n(32),n(13),n(453),n(30),n(460),n(461),n(462),n(465),n(466),n(467),n(468),n(470),n(472),n(474),n(476),n(477),n(478),n(479),n(480),n(482),n(31),n(52),n(39),{data:function(){return{banner:"",faqs:[],faqCategories:[]}},methods:{loadScript:function(){var t=document.getElementById("script"),e=document.getElementById("script1");null!=t&&document.body.removeChild(t),null!=e&&document.body.removeChild(e);var script=document.createElement("script"),n=document.createElement("script");script.type="text/javascript",n.type="text/javascript",script.src="/script/home.js",n.src="/script/smartSupp.js",script.async=!0,n.async=!0,script.id="script",n.id="script1";var r=document.querySelector("#footer");r?(r.appendChild(script),r.appendChild(n)):console.error("Could not find app node to append script element")},filteredFAQ:function(data){return this.faqs.filter((function(t){return t.category===data}))},getFaqCategories:function(data){this.faqCategories=Object(o.a)(new Set(data.map((function(t){return t.category}))))},toggleQuestion:function(t){this.checkFAQs(this.faqs),t.checked=!t.checked},checkFAQs:function(data){return data.forEach((function(t){t.checked=!1})),data},getFaqs:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/faq/?limit=60");case 3:return n=e.sent,t.getFaqCategories(n.data.data),e.next=7,t.checkFAQs(n.data.data);case 7:t.faqs=e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},getBanner:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/banner/?bannerCategory=FAQ");case 3:n=e.sent,t.banner=n.data.data[0],e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.loadScript(),this.getBanner(),this.getFaqs()},components:{HomeDarkNavigation:n(354).default}}),l=n(57),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"faq"},[e("home-dark-navigation"),t._v(" "),t._m(0),t._v(" "),e("section",{staticClass:"faq-section-two wf-section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"faq-two-content"},[e("div",{staticClass:"faq-content-holder"},t._l(t.faqCategories,(function(n){return e("div",{key:n._id,staticClass:"each-faq"},[e("div",{staticClass:"faq-top-holder"},[e("h1",{staticClass:"lite"},[t._v(t._s(n))])]),t._v(" "),t._l(t.filteredFAQ(n),(function(n){return e("div",{key:n._id,staticClass:"faq-inner-content"},[e("div",{staticClass:"top-inner-content",on:{click:function(e){return t.toggleQuestion(n)}}},[e("div",{staticClass:"faq-top-holds"},[e("h1",{staticClass:"mini-header home-blog"},[t._v(t._s(n.question))])]),t._v(" "),e("img",{staticClass:"image-36",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/64715010c2a4c330484f431d_plus-svgrepo-com%201.svg",loading:"lazy",alt:""}})]),t._v(" "),n.checked?e("div",{staticClass:"holds-text"},[e("div",{staticClass:"mini-texts off",domProps:{innerHTML:t._s(n.answer)}})]):t._e()])}))],2)})),0)])])]),t._v(" "),e("home-footer")],1)}),[function(){var t=this,e=t._self._c;return e("section",{staticClass:"faq-hero wf-section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"short-content-holder"},[e("div",{staticClass:"top-hint-holder dark"},[e("div",{staticClass:"top-nav-content"},[e("div",{staticClass:"nav-link-text white"},[e("a",{staticClass:"home-link white",attrs:{href:"#"}},[t._v("Home")])])]),t._v(" "),e("img",{staticClass:"hero-arrow-push",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/648022a70480e81309435a42_arrow-up-337-svgrepo-com%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"nav-link-text white"},[t._v("Faq")])]),t._v(" "),e("div",{staticClass:"news-head-holder"},[e("h1",{staticClass:"section-head off"},[t._v("Faq")])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HomeDarkNavigation:n(354).default,HomeFooter:n(361).default})}}]);