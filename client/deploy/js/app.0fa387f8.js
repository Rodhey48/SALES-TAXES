(function(t){function e(e){for(var n,s,c=e[0],i=e[1],u=e[2],d=0,m=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&m.push(a[s][0]),a[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);l&&l(e);while(m.length)m.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,c=1;c<r.length;c++){var i=r[c];0!==a[i]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},o=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=i;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("e792"),r("0cdd");var n=r("2b0e"),a=r("5f5b");r("ab8b"),r("2dd8");n["default"].use(a["a"]);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],c=(r("034f"),r("2877")),i={},u=Object(c["a"])(i,o,s,!1,null,null,null),l=u.exports,d=r("8c4f"),m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("div",{attrs:{id:"nav"}},[r("div",[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),r("router-link",{attrs:{to:"/carts"}},[t._v("Your Carts")]),t._v(" | "),r("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.logout.apply(null,arguments)}}},[t._v("Logout")])],1),t._m(0),r("div",{staticClass:"container d-flex justify-content-start flex-wrap"},[r("b-button",{attrs:{variant:"success"},on:{click:t.addProduct}},[t._v("Add Product")])],1),r("div",{staticClass:"container py-5 bg-transparent"},[r("div",{staticClass:"d-flex justify-content-center flex-wrap"},t._l(t.products,(function(t){return r("Card",{key:t.id,attrs:{el:t}})})),1)])])])},p=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-4 font-weight-bold text-center"},[r("h2",[t._v("List Of Products")])])}],f=r("1da1"),v=r("5530"),g=(r("96cf"),r("2f62")),b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-05 m-2"},[r("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"30rem","min-width":"20rem","min-height":"15rem"},attrs:{title:t.el.name,tag:"article"}},[r("b-card-text",[r("p",[t._v("Price : "+t._s(t.el.price))]),r("p",[t._v("Stock : "+t._s(t.el.stock))]),t.el.import?r("p",{staticClass:"text-danger"},[t._v("Import")]):t._e()]),r("b-button",{attrs:{href:"#",variant:"success"},on:{click:function(e){return e.preventDefault(),t.postAddCart(t.el.id)}}},[t._v("Add Cart")])],1)],1)},h=[],C={name:"Card",props:["el"],methods:Object(v["a"])({},Object(g["b"])(["postAddCart"]))},x=C,_=Object(c["a"])(x,b,h,!1,null,null,null),w=_.exports,k={name:"Home",components:{Card:w},computed:Object(v["a"])({},Object(g["d"])(["products"])),methods:Object(v["a"])(Object(v["a"])(Object(v["a"])({},Object(g["b"])(["getProducts"])),Object(g["c"])(["ISLOGIN","ISLOGOUT"])),{},{logout:function(){this.ISLOGOUT(),this.$router.push({name:"Login"})},addProduct:function(){this.$router.push({name:"AddProduct"})}}),created:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getProducts();case 2:localStorage.getItem("token")&&t.ISLOGIN();case 3:case"end":return e.stop()}}),e)})))()}},O=k,P=Object(c["a"])(O,m,p,!1,null,null,null),y=P.exports,j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container-fluid d-flex justify-content-center align-self-center mt-5",attrs:{id:"loginpage"}},[r("div",{staticClass:"card col-11 align-self-center"},[t._m(0),r("div",{staticClass:"card-body"},[r("form",{attrs:{action:"",id:"login-form"}},[r("div",{staticClass:"mb-3"},[r("label",{staticClass:"form-label",attrs:{for:"loginemail"}},[t._v("Email : ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formLogin.email,expression:"formLogin.email"}],staticClass:"form-control",attrs:{type:"email",id:"loginemail",placeholder:"Email"},domProps:{value:t.formLogin.email},on:{input:function(e){e.target.composing||t.$set(t.formLogin,"email",e.target.value)}}})]),r("div",{staticClass:"mb-3"},[r("label",{staticClass:"form-label",attrs:{for:"Password"}},[t._v("Password : ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formLogin.password,expression:"formLogin.password"}],staticClass:"form-control",attrs:{type:"password",id:"loginpassword",placeholder:"Password"},domProps:{value:t.formLogin.password},on:{input:function(e){e.target.composing||t.$set(t.formLogin,"password",e.target.value)}}})]),r("div",{staticClass:"col-12 text-center"},[r("Button",{attrs:{name:"Login"},on:{buttonClick:t.login}})],1),r("br")])])])])},R=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-header mx-auto bg-transparent font-weight-bold",staticStyle:{"font-size":"x-large","font-weight":"bold"}},[r("h3",{staticClass:"font-weight-bold"},[t._v("Login")])])}],L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.buttonClick.apply(null,arguments)}}},[t._v(" "+t._s(t.name)+" ")])},S=[],I={name:"Button",props:["name"],methods:{buttonClick:function(){this.$emit("buttonClick")}}},E=I,T=Object(c["a"])(E,L,S,!1,null,null,null),$=T.exports,A={name:"LoginPage",components:{Button:$},data:function(){return{formLogin:{email:"",password:""}}},methods:Object(v["a"])(Object(v["a"])({},Object(g["b"])(["postLogin","postGoogleLogin"])),{},{toRegister:function(){this.$router.push({name:"Register"})},login:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.postLogin(t.formLogin);case 2:t.isLogin&&t.$router.push({name:"Home"});case 3:case"end":return e.stop()}}),e)})))()}}),computed:Object(v["a"])({},Object(g["d"])(["isLogin"]))},B=A,G=Object(c["a"])(B,j,R,!1,null,null,null),H=G.exports,N=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"home",attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),r("router-link",{attrs:{to:"/carts"}},[t._v("Your Carts")])],1),r("div",{staticClass:"container py-5 bg-transparent"},[r("h2",[t._v("List Of Carts")]),r("div",{staticClass:"d-flex justify-content-center flex-wrap mt-4"},[r("b-list-group",{staticClass:"col-10"},t._l(t.carts,(function(e){return r("b-list-group-item",{key:e.id,staticClass:"d-flex justify-content-between align-items-center"},[r("div",{staticClass:"d-flex flex-column justify-content-start align-items-start"},[r("span",{staticClass:"font-weight-bold h5 text-wrap"},[t._v(t._s(e.Product.name))]),r("span",{staticClass:"font-italic"},[t._v("Price: "+t._s(e.Product.price)+" "),e.Product.import||e.Product.Category.tax?r("span",{staticClass:"text-danger"},[t._v(" + tax")]):t._e()]),r("a",{attrs:{href:"#"},on:{click:function(r){return t.deleteList(e.id)}}},[r("span",{staticClass:"text-danger"},[t._v("remove")])])]),r("b-badge",{attrs:{variant:"info",pill:""}},[r("span",{staticClass:"h5 p-1"},[t._v(t._s(e.items))])])],1)})),1)],1),r("div",{staticClass:"\n        d-flex\n        flex-column\n        justify-content-start\n        align-items-start\n        ml-5\n        px-2\n        mt-2\n      "},[r("b-button",{attrs:{variant:"success"},on:{click:t.buyProduct}},[t._v("Buy Product")])],1)])])},D=[],U=(r("d3b7"),r("159b"),{name:"Carts",computed:Object(v["a"])({},Object(g["d"])(["carts"])),methods:Object(v["a"])(Object(v["a"])({},Object(g["b"])(["getCarts","postBuyProduct","deleteChart"])),{},{buyProduct:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=[],t.carts.forEach((function(t){r.push(t.id)})),e.next=4,t.postBuyProduct(r);case 4:t.$router.push({name:"Receipt"});case 5:case"end":return e.stop()}}),e)})))()},deleteList:function(t){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.deleteChart(t);case 2:return r.next=4,e.getCarts();case 4:case"end":return r.stop()}}),r)})))()}}),created:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getCarts();case 2:case"end":return e.stop()}}),e)})))()}}),M=U,F=Object(c["a"])(M,N,D,!1,null,null,null),z=F.exports,J=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid mt-3"},[r("b-card-group",{attrs:{deck:""}},[r("b-card",{attrs:{header:"Receipt of your purchaes"}},[r("b-list-group",t._l(t.receipt.products,(function(e){return r("b-list-group-item",{key:e.name,attrs:{href:"#"}},[r("div",{staticClass:"d-flex flex-column justify-content-start align-items-start"},[r("span",{staticClass:"font-weight-bold h5 text-wrap"},[t._v(t._s(e.name))]),r("span",[t._v("Items: "+t._s(e.items)+" ")]),r("span",{staticClass:"font-italic"},[t._v("Price: "+t._s(e.price)+" ")])])])})),1),r("div",{staticClass:"\n          d-flex\n          flex-column\n          justify-content-start\n          align-items-start\n          mt-2\n        "},[r("span",{staticClass:"font-weight-bold"},[t._v("Tax Sales : "+t._s(t.receipt.salesTax))]),r("br"),r("span",{staticClass:"font-weight-bolder h5"},[t._v("Total Sales : "+t._s(t.receipt.total))])])],1)],1),r("b-button",{attrs:{variant:"primary"},on:{click:t.backHome}},[t._v("Back Home")])],1)},Y=[],q={name:"Receipt",computed:Object(v["a"])({},Object(g["d"])(["receipt"])),methods:{backHome:function(){this.$router.push({name:"Home"})}}},K=q,Q=Object(c["a"])(K,J,Y,!1,null,null,null),V=Q.exports,W=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"\n    container-fluid\n    d-flex\n    justify-content-center justify-align-center\n    flex-wrap\n    mt-3\n  "},[r("div",{staticClass:"ms-1"},[r("section",{staticClass:"section",attrs:{id:"form-add"}},[r("div",{staticClass:"card col-12"},[r("div",{staticClass:"card-header",staticStyle:{"font-size":"x-large","font-weight":"bold"},attrs:{id:"formHeader"}},[t._v(" Add Product ")]),r("div",{staticClass:"card-body"},[r("form",{staticClass:"row g-3",attrs:{action:"#",id:"form-add"}},[r("div",{staticClass:"col-md-10"},[r("label",{staticClass:"form-label",attrs:{for:"name"}},[t._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formProduct.name,expression:"formProduct.name"}],staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"Name"},domProps:{value:t.formProduct.name},on:{input:function(e){e.target.composing||t.$set(t.formProduct,"name",e.target.value)}}})]),r("div",{staticClass:"col-md-10 mt-2"},[r("label",{staticClass:"form-label",attrs:{for:"description"}},[t._v("Stock")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formProduct.stock,expression:"formProduct.stock"}],staticClass:"form-control",attrs:{type:"number",id:"description",placeholder:"Description"},domProps:{value:t.formProduct.stock},on:{input:function(e){e.target.composing||t.$set(t.formProduct,"stock",e.target.value)}}})]),r("div",{staticClass:"col-md-10 mt-2"},[r("label",{staticClass:"form-label",attrs:{for:"price"}},[t._v("Price")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formProduct.price,expression:"formProduct.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"Price"},domProps:{value:t.formProduct.price},on:{input:function(e){e.target.composing||t.$set(t.formProduct,"price",e.target.value)}}})]),r("div",{staticClass:"col-md-10 mt-2"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formProduct.import,expression:"formProduct.import"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"",id:"defaultCheck1"},domProps:{checked:Array.isArray(t.formProduct.import)?t._i(t.formProduct.import,"")>-1:t.formProduct.import},on:{change:function(e){var r=t.formProduct.import,n=e.target,a=!!n.checked;if(Array.isArray(r)){var o="",s=t._i(r,o);n.checked?s<0&&t.$set(t.formProduct,"import",r.concat([o])):s>-1&&t.$set(t.formProduct,"import",r.slice(0,s).concat(r.slice(s+1)))}else t.$set(t.formProduct,"import",a)}}}),r("label",{staticClass:"form-check-label",attrs:{for:"defaultCheck1"}},[t._v(" Product Import ")])]),r("div",{staticClass:"col-md-10 mt-2"},[r("label",{staticClass:"form-label",attrs:{for:"category"}},[t._v("Category Product")]),r("br"),r("select",{directives:[{name:"model",rawName:"v-model",value:t.formProduct.categoryId,expression:"formProduct.categoryId"}],staticClass:"form-select",attrs:{"aria-label":"Default select example",id:"category"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.formProduct,"categoryId",e.target.multiple?r:r[0])}}},[r("option",{attrs:{selected:"",value:"0"}},[t._v("select Category...")]),t._l(t.categories,(function(e){return r("option",{key:e.id,domProps:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])}))],2)]),r("div",{staticClass:"col-11 mt-5",attrs:{id:"buttonFormSubmit"}},[r("Button",{attrs:{name:"Add product"},on:{buttonClick:t.submitForm}}),r("Button",{staticClass:"ml-2",attrs:{name:"Back"},on:{buttonClick:t.backHome}})],1)])])])])])])},X=[],Z={name:"AddProduct",components:{Button:$},computed:Object(v["a"])({},Object(g["d"])(["categories"])),data:function(){return{formProduct:{name:"",stock:"",price:"",import:"",categoryId:"0"}}},methods:Object(v["a"])(Object(v["a"])({},Object(g["b"])(["getCategories","postAddProduct"])),{},{submitForm:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.postAddProduct(t.formProduct);case 2:t.$router.push({name:"Home"});case 3:case"end":return e.stop()}}),e)})))()},backHome:function(){this.$router.push({name:"Home"})}}),created:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getCategories();case 1:case"end":return e.stop()}}),e)})))()}},tt=Z,et=Object(c["a"])(tt,W,X,!1,null,null,null),rt=et.exports;n["default"].use(d["a"]);var nt=[{path:"/",name:"Home",component:y},{path:"/login",name:"Login",component:H},{path:"/carts",name:"Carts",component:z},{path:"/receipt",name:"Receipt",component:V},{path:"/addproduct",name:"AddProduct",component:rt}],at=new d["a"]({mode:"history",base:"/",routes:nt}),ot=at,st=r("bc3a"),ct=r.n(st),it=r("3d20"),ut=r.n(it),lt="https://sales-taxes-rodhey.herokuapp.com",dt=ut.a.mixin({toast:!0,position:"center",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(t){t.addEventListener("mouseenter",ut.a.stopTimer),t.addEventListener("mouseleave",ut.a.resumeTimer)}});n["default"].use(g["a"]);var mt=new g["a"].Store({state:{isLogin:!1,isRegister:!1,userLogin:"",products:[],categories:[],carts:[],receipt:{products:[],salesTax:"0",total:"0"}},mutations:{LOGIN:function(t,e){t.isLogin=!0,t.userLogin=e.username,localStorage.setItem("token",e.access_token),localStorage.setItem("User",e.username)},ISLOGIN:function(t){t.isLogin=!0,t.userLogin=localStorage.getItem("User")},GET_PRODUCT:function(t,e){t.products=e},GET_CATEGORIES:function(t,e){t.categories=e},GET_CARTS:function(t,e){t.carts=e},GET_RECEIPT:function(t,e){t.receipt=e},ISLOGOUT:function(t){localStorage.clear(),t.isLogin=!1}},actions:{postLogin:function(t,e){return Object(f["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,ct()({method:"post",url:"".concat(lt,"/login"),data:e});case 3:n=r.sent,t.commit("LOGIN",n.data),dt.fire({icon:"success",title:"Signed in successfully"}),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),ut.a.fire({icon:"error",title:"Oops...",text:r.t0.response.data.message});case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},getProducts:function(t){return Object(f["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ct()({method:"get",url:"".concat(lt,"/products"),headers:{access_token:localStorage.getItem("token")}});case 3:r=e.sent,t.commit("GET_PRODUCT",r.data),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getCategories:function(t){return Object(f["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ct()({method:"get",url:"".concat(lt,"/categories"),headers:{access_token:localStorage.getItem("token")}});case 3:r=e.sent,t.commit("GET_CATEGORIES",r.data),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getCarts:function(t){return Object(f["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ct()({method:"get",url:"".concat(lt,"/bucket"),headers:{access_token:localStorage.getItem("token")}});case 3:r=e.sent,t.commit("GET_CARTS",r.data),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},postAddCart:function(t,e){return Object(f["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ct()({method:"post",url:"".concat(lt,"/bucket/add/").concat(e),headers:{access_token:localStorage.getItem("token")}});case 3:r=t.sent,r.status,ut.a.fire({position:"center",icon:"success",title:"Product Add To cart",showConfirmButton:!1,timer:1500}),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),ut.a.fire({icon:"error",title:"Oops...",text:"Can't Add to Cart"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},postBuyProduct:function(t,e){return Object(f["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,ct()({method:"post",url:"".concat(lt,"/bucket/buy"),data:{idBucket:e},headers:{access_token:localStorage.getItem("token")}});case 3:n=r.sent,t.commit("GET_RECEIPT",n.data),ut.a.fire({position:"center",icon:"success",title:"Succes buy product",showConfirmButton:!1,timer:1500}),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),ut.a.fire({icon:"error",title:"Oops...",text:"Can't buy product"});case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},deleteChart:function(t,e){return Object(f["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ct()({method:"delete",url:"".concat(lt,"/bucket/").concat(e),headers:{access_token:localStorage.getItem("token")}});case 3:r=t.sent,r.status,ut.a.fire({position:"center",icon:"success",title:"Delete from cart",showConfirmButton:!1,timer:1500}),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0),ut.a.fire({icon:"error",title:"Oops...",text:"Can't delete from Cart"});case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()},postAddProduct:function(t,e){return Object(f["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ct()({method:"post",url:"".concat(lt,"/products"),data:e,headers:{access_token:localStorage.getItem("token")}});case 3:r=t.sent,r.status,ut.a.fire({position:"center",icon:"success",title:"Succes add product",showConfirmButton:!1,timer:1500}),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),ut.a.fire({icon:"error",title:"Oops...",text:"Can't add Product"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}},modules:{}});n["default"].config.productionTip=!1,new n["default"]({router:ot,store:mt,render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,e,r){}});
//# sourceMappingURL=app.0fa387f8.js.map