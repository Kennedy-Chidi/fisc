(window.webpackJsonp=window.webpackJsonp||[]).push([[45,25,26],{352:function(t,e,n){var content=n(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("3d6686f9",content,!0,{sourceMap:!1})},353:function(t,e,n){var content=n(364);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("33d3c6b4",content,!0,{sourceMap:!1})},354:function(t,e,n){"use strict";n.r(e);var o=n(8),r=(n(49),{methods:{logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),c=(n(363),n(57)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"nav-section wf-section"},[e("div",{staticClass:"navbar w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"navbar-content-holder"},[e("div",[e("nuxt-link",{staticClass:"brand-logo",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[e("img",{staticClass:"site-logo",attrs:{src:"/fiscal-logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{attrs:{id:"ytWidget"}})],1),t._v(" "),e("nav",{staticClass:"nav-menu w-nav-menu",attrs:{role:"navigation"}},[e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[t._v("Home")]),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:{path:"/about",query:{username:t.$route.query.username}}}},[t._v("About Us")]),t._v(" "),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:{path:"/plan",query:{username:t.$route.query.username}}}},[t._v("Plan")]),t._v(" "),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:{path:"/contact",query:{username:t.$route.query.username}}}},[t._v("Contact")]),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:{path:"/faq",query:{username:t.$route.query.username}}}},[t._v("Faq")]),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:{path:"/news",query:{username:t.$route.query.username}}}},[t._v("News")]),t._v(" "),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:{path:"/signup",query:{username:t.$route.query.username}}}},[t._v("Signup")]),t._v(" "),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:{path:"/login",query:{username:t.$route.query.username}}}},[t._v("login")])],1),t._v(" "),t._m(0)])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"menu-button w-nav-button"},[t("div",{staticClass:"icon w-icon-nav-menu"})])}],!1,null,null,null);e.default=component.exports},359:function(t,e,n){"use strict";n(352)},360:function(t,e,n){var o=n(150)((function(i){return i[1]}));o.push([t.i,".img-logo{width:120px}label.email{font-size:12px;font-weight:300}.input-icon-flexer input{color:#fff}@media screen and (max-width:425px){.footer-social-media{display:none}}",""]),o.locals={},t.exports=o},361:function(t,e,n){"use strict";n.r(e);var o=n(8),r=(n(49),n(20),n(93),n(13),n(39),n(26),{data:function(){return{company:"",address:"",phone:"",email:"",about:"",response:"",isError:!1,showResponse:!1,onRequest:!1,emailError:!1}},methods:{loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",e.async=!0,e.id="translator";var n=document.querySelector("#footer");n?n.appendChild(e):console.error("Could not find app node to append script element")},setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},checkErrorInputs:function(input,data){if("email"==input){if(""==data||!data||!/^\S+@\S+\.\S+$/.test(data))return this.$el.querySelector(".email").classList.add("error"),this.isError=!1,this.emailError=!0,void(this.onRequest=!1);this.$el.querySelector(".email").classList.remove("error"),this.isError=!0,this.emailError=!1}},callResponse:function(t,e){var n=this;this.response=t,this.isError=e,this.showResponse=!0,this.onRequest=!1,setTimeout((function(){n.showResponse=!1}),6e3)},clearInputs:function(){this.email=""},setArray:function(){this.checkArray=[{name:"email",data:this.email}]},processEmail:function(){var t=this;this.onRequest=!0,this.setArray(),this.checkArray.forEach((function(e){t.checkErrorInputs(e.name,e.data)})),this.isError&&setTimeout((function(){t.callResponse("Thanks for subscribing successfully",!1)}),4e3)},getAbout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/about");case 3:n=e.sent,t.about=n.data.data[0],e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getCompany:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return n=e.sent,e.next=6,n.data.data;case 6:t.company=e.sent,t.address=n.data.data.media[0],t.phone=n.data.data.media[2],e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.response.data);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}},mounted:function(){this.loadScript(),this.getAbout(),this.setFileURL(),this.getCompany()}}),c=(n(359),n(57)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"footer wf-section",attrs:{id:"footer"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"footer-content-holder"},[e("div",{staticClass:"inner-footer"},[e("div",{staticClass:"footer-logo-part"},[e("div",{staticClass:"footer-logo-holder"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{staticClass:"img-logo",attrs:{src:"/fiscal-logo.png",loading:"lazy",alt:""}})])],1),t._v(" "),e("div",{staticClass:"footer-texts-holder"},[t.about.content?e("div",{staticClass:"footer-top-text",domProps:{innerHTML:t._s("".concat(t.about.content.substring(0,300),"..."))}}):t._e()])]),t._v(" "),e("div",{staticClass:"footer-other-page"},[t._m(0),t._v(" "),e("div",{staticClass:"footer-page-flexer"},[e("div",{staticClass:"each-footer-page"},[e("div",{staticClass:"each-pages-holder"},[e("h4",{staticClass:"sub-footer-text"},[e("nuxt-link",{staticClass:"link-3",attrs:{to:"/about"}},[t._v("About")])],1)]),t._v(" "),e("div",{staticClass:"each-pages-holder"},[e("h4",{staticClass:"sub-footer-text"},[e("nuxt-link",{staticClass:"link-3",attrs:{to:"/plan"}},[t._v("Plan")])],1)]),t._v(" "),e("div",{staticClass:"each-pages-holder"},[e("h4",{staticClass:"sub-footer-text"},[e("nuxt-link",{staticClass:"link-3",attrs:{to:"/contact"}},[t._v("Contact")])],1)]),t._v(" "),e("div",{staticClass:"each-pages-holder"},[e("h4",{staticClass:"sub-footer-text"},[e("nuxt-link",{staticClass:"link-3",attrs:{to:"/news"}},[t._v("Blog")])],1)])]),t._v(" "),e("div",{staticClass:"each-footer-page"},[e("div",{staticClass:"each-pages-holder"},[e("h4",{staticClass:"sub-footer-text"},[e("nuxt-link",{staticClass:"link-3",attrs:{to:"/signup"}},[t._v("Get Started")])],1)]),t._v(" "),e("div",{staticClass:"each-pages-holder"},[e("h4",{staticClass:"sub-footer-text"},[e("nuxt-link",{staticClass:"link-3",attrs:{to:"/login"}},[t._v("Login")])],1)]),t._v(" "),e("div",{staticClass:"each-pages-holder"},[e("h4",{staticClass:"sub-footer-text"},[e("nuxt-link",{staticClass:"link-3",attrs:{to:"/forgotten-password"}},[t._v("Forgotten Password")])],1)])])])]),t._v(" "),e("div",{staticClass:"sucribe-other-page"},[t._m(1),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"footer-input-holder"},[e("div",{staticClass:"footer-input-block w-form"},[t.showResponse?e("div",{staticClass:"sign-label response",class:{error:t.isError}},[t._v("\n                "+t._s(t.response)+"\n              ")]):t._e(),t._v(" "),e("label",{directives:[{name:"show",rawName:"v-show",value:t.emailError,expression:"emailError"}],staticClass:"label email error",attrs:{for:""}},[t._v("Please Enter a valid username")]),t._v(" "),e("form",[e("div",{staticClass:"input-icon-flexer"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"text-field w-input",attrs:{type:"email",maxlength:"256",name:"email-2",placeholder:"Enter Your Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),t.onRequest?e("div",{staticClass:"footer-yellow-icon"},[e("img",{staticClass:"image-22",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/64832b870db34f71153d13fc_loader-icon%201.svg",loading:"lazy",alt:""}})]):e("div",{staticClass:"footer-yellow-icon",on:{click:t.processEmail}},[e("img",{staticClass:"image-22",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473ead14eeb1ff94ab83e2a_long-arrow-right-icon%201.svg",loading:"lazy",alt:""}})])])])])])]),t._v(" "),t._m(3)]),t._v(" "),e("div",{staticClass:"footer-buttom-line"}),t._v(" "),e("div",{staticClass:"buttom-text-holder"},[e("div",{staticClass:"footer-buttom-text"},[t._v("\n          Copyright © 2016-"+t._s((new Date).getFullYear())+"\n          "+t._s(t.company.companyName)+"\n          All rights reserved\n        ")])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"footer-header-holder"},[t("h1",{staticClass:"footer-header"},[this._v("Quick Links"),t("br")])])},function(){var t=this._self._c;return t("div",{staticClass:"footer-header-holder"},[t("h1",{staticClass:"footer-header"},[this._v("Subscribe"),t("br")])])},function(){var t=this._self._c;return t("div",{staticClass:"light-text-holder"},[t("div",{staticClass:"footer-top-text lighting"},[this._v("\n              Sign up for Alerts, Special Offers and Global Market Updates.\n            ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer-social-media"},[e("div",{staticClass:"footer-header-holder"},[e("h1",{staticClass:"footer-header"},[t._v("Instagram Feed"),e("br")])]),t._v(" "),e("div",{staticClass:"media-box-flexer"},[e("a",{staticClass:"each-media-box w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-23",attrs:{src:"/images/gold-bg.jpg",loading:"lazy",alt:""}})]),e("a",{staticClass:"each-media-box w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-23",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473f13f107043aab0901250_17876975147110586-s.jpg",loading:"lazy",alt:""}})]),e("a",{staticClass:"each-media-box w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-23",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473f16afe15e42cfa74711f_17881737650044870-s.jpg",loading:"lazy",alt:""}})]),e("a",{staticClass:"each-media-box w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-23",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473f1a2107043aab0905487_17894578420782119-s.jpg",loading:"lazy",alt:""}})]),e("a",{staticClass:"each-media-box w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-23",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473f1c9101c81b742891c86_17983664692318714-s.jpg",loading:"lazy",alt:""}})]),e("a",{staticClass:"each-media-box w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-23",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473f1e9101c81b742892fb2_18187364980025823-s.jpg",loading:"lazy",alt:""}})])])])}],!1,null,null,null);e.default=component.exports},363:function(t,e,n){"use strict";n(353)},364:function(t,e,n){var o=n(150)((function(i){return i[1]}));o.push([t.i,".site-logo{max-width:140px}",""]),o.locals={},t.exports=o},390:function(t,e,n){"use strict";var o=n(2),r=n(240).trim;o({target:"String",proto:!0,forced:n(391)("trim")},{trim:function(){return r(this)}})},391:function(t,e,n){var o=n(96).PROPER,r=n(4),c=n(241);t.exports=function(t){return r((function(){return!!c[t]()||"​᠎"!=="​᠎"[t]()||o&&c[t].name!==t}))}},414:function(t,e,n){var content=n(450);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("0a1f6612",content,!0,{sourceMap:!1})},449:function(t,e,n){"use strict";n(414)},450:function(t,e,n){var o=n(150)((function(i){return i[1]}));o.push([t.i,".button-black{cursor:pointer}",""]),o.locals={},t.exports=o},536:function(t,e,n){"use strict";n.r(e);n(58),n(26);var o=n(28),r=n(8),c=(n(49),n(93),n(20),n(390),n(354)),l={data:function(){return{company:"",address:"",phone:"",content:"",name:"",email:"",email1:"",response:"",isError:!1,showResponse:!1,onRequest:!1}},methods:Object(o.a)({loadScript:function(){var t=document.getElementById("script"),e=document.getElementById("script1");null!=t&&document.body.removeChild(t),null!=e&&document.body.removeChild(e);var script=document.createElement("script"),n=document.createElement("script");script.type="text/javascript",n.type="text/javascript",script.src="/script/home.js",n.src="/script/smartSupp.js",script.async=!0,n.async=!0,script.id="script",n.id="script1";var o=document.querySelector("#footer");o?(o.appendChild(script),o.appendChild(n)):console.error("Could not find app node to append script element")},clearInputs:function(){this.email1="",this.name="",this.content=""},callResponse:function(t,e){var n=this;this.response=t,this.isError=e,this.showResponse=!0,this.onRequest=!1,setTimeout((function(){n.showResponse=!1}),6e3)},getCompany:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:n=e.sent,t.company=n.data.data[0],t.media=t.company.media,t.loadScript(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},sendMessage:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var form;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.onRequest=!0,!(""==t.name||t.name.length<2)){e.next=4;break}return t.callResponse("Please write a valid name.",!0),e.abrupt("return");case 4:if(""!=t.email1&&t.email1&&/^\S+@\S+\.\S+$/.test(t.email1)){e.next=7;break}return t.callResponse("Please provide a valid email.",!0),e.abrupt("return");case 7:if(!(""==t.content.trim()||t.content.length<30)){e.next=10;break}return t.callResponse("Sorry content must be at least 30 characters long.",!0),e.abrupt("return");case 10:return form={name:t.name,email:t.email1,content:t.content},e.prev=11,e.next=14,t.$axios.post("/emails/send-message",form);case 14:t.callResponse("Message sent successfully",!1),t.clearInputs(),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(11),t.callResponse(e.t0.response.data.message);case 21:case"end":return e.stop()}}),e,null,[[11,18]])})))()}},"getCompany",(function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return n=e.sent,e.next=6,n.data.data;case 6:t.company=e.sent,t.address=n.data.data.media[0],t.email=n.data.data.media[1],t.phone=n.data.data.media[2],e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0.response.data);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()})),mounted:function(){this.loadScript(),this.getCompany()},computed:{FILE_URL:function(){return this.$store.state.fileURL}},components:{HomeDarkNavigation:c.default}},d=(n(449),n(57)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact"},[e("home-dark-navigation"),t._v(" "),e("section",{staticClass:"contact-hero-section wf-section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"about-hero-content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"switch-side"},[e("div",{staticClass:"contact-info-content"},[t._m(2),t._v(" "),e("div",{staticClass:"top-contact-line"}),t._v(" "),t._m(3),t._v(" "),e("div",{staticClass:"contact-details-content"},[t.address?e("div",{staticClass:"contact-details-each"},[e("img",{staticClass:"details-locate-icon",attrs:{src:"".concat(t.FILE_URL,"/").concat(t.address.icon),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"text-info"},[t._v("\n                  "+t._s(t.address.text)+"\n                ")])]):t._e(),t._v(" "),t.email?e("div",{staticClass:"contact-details-each"},[e("img",{staticClass:"details-locate-icon",attrs:{src:"".concat(t.FILE_URL,"/").concat(t.email.icon),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"text-info"},[t._v("\n                  "+t._s(t.email.text)+"\n                ")])]):t._e(),t._v(" "),t.phone?e("div",{staticClass:"contact-details-each"},[e("img",{staticClass:"details-locate-icon",attrs:{src:"".concat(t.FILE_URL,"/").concat(t.phone.icon),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"text-info"},[t._v("\n                  "+t._s(t.phone.text)+"\n                ")])]):t._e()])]),t._v(" "),e("div",{staticClass:"inputer-contact-holder"},[e("div",{staticClass:"contact-form w-form"},[e("div",[e("div",{staticClass:"contact-input-flexer"},[e("div",{staticClass:"first-row"},[e("div",{staticClass:"input-lenght-holder"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input-contact-space w-input",attrs:{type:"text",maxlength:"256",placeholder:"Enter Your name*"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),t._m(4),t._v(" "),e("div",{staticClass:"input-lenght-holder"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email1,expression:"email1"}],staticClass:"input-contact-space w-input",attrs:{type:"email",maxlength:"256",name:"email",placeholder:"Enter Your Email*"},domProps:{value:t.email1},on:{input:function(e){e.target.composing||(t.email1=e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"second-row"},[t._m(5),t._v(" "),e("div",{staticClass:"input-lenght-holder"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"contact-textarea w-input",attrs:{placeholder:"Example Text",maxlength:"5000",id:"field",name:"field"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})]),t._v(" "),t.showResponse?e("div",{staticClass:"label error"},[t._v("\n                      "+t._s(t.response)+"\n                    ")]):t._e(),t._v(" "),t.onRequest?e("div",{staticClass:"button-black"},[e("img",{staticClass:"image-38",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/64832b870db34f71153d13fc_loader-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("h5",{staticClass:"yellow-slide-header black"},[t._v("Processing")]),t._v(" "),e("img",{staticClass:"image-34",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/646ca40b5abf546bdb737529_line-angle-right-icon%201.svg",loading:"lazy",alt:""}})]):e("div",{staticClass:"button-black",on:{click:t.sendMessage}},[e("h5",{staticClass:"yellow-slide-header black"},[t._v("Submit")]),t._v(" "),e("img",{staticClass:"image-34",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/646ca40b5abf546bdb737529_line-angle-right-icon%201.svg",loading:"lazy",alt:""}})])])])])])])])])])]),t._v(" "),e("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.8641442514245!2d8.541453115622526!3d47.37556997916998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa0a8054efe3d%3A0xc7ed310d46fc1e1c!2sLimmatquai%20122%2C%208001%20Z%C3%BCrich%2C%20Switzerland!5e0!3m2!1sen!2sng!4v1688372135603!5m2!1sen!2sng",width:"100%",height:"450",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}}),t._v(" "),e("home-footer")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-hint-holder"},[e("div",{staticClass:"top-nav-content"},[e("div",{staticClass:"nav-link-text"},[e("a",{staticClass:"home-link",attrs:{href:"#"}},[t._v("Home")])])]),t._v(" "),e("img",{staticClass:"hero-arrow-push",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6474006295fb51d4b877cd82_line-angle-right-icon%20(1)%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"nav-link-text"},[t._v("Company overviiew")])])},function(){var t=this._self._c;return t("div",{staticClass:"contact-top-holder"},[t("h1",{staticClass:"section-head"},[this._v("Contact two")])])},function(){var t=this._self._c;return t("div",{staticClass:"contact-text-holder"},[t("div",{staticClass:"assit-texts"},[this._v("\n                Please let us know if you have a question, want to leave a\n                comment, or would like further information about Blockchain\n                WP.\n              ")])])},function(){var t=this._self._c;return t("div",{staticClass:"contact-sign-holder"},[t("h1",{staticClass:"mini-header"},[this._v("Contact Details")])])},function(){var t=this._self._c;return t("div",{staticClass:"input-lenght-holder"},[t("input",{staticClass:"input-contact-space w-input",attrs:{type:"text",maxlength:"256",name:"name-3",placeholder:"Title"}})])},function(){var t=this._self._c;return t("div",{staticClass:"input-lenght-holder"},[t("input",{staticClass:"input-contact-space w-input",attrs:{type:"text",maxlength:"256",placeholder:"Subject"}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HomeDarkNavigation:n(354).default,HomeFooter:n(361).default})}}]);