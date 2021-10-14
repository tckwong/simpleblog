(function(t){function e(e){for(var o,s,i=e[0],c=e[1],u=e[2],p=0,d=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},a=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"096f":function(t,e,n){"use strict";n("3308")},"1e28":function(t,e,n){"use strict";n("cdc8")},3308:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Home")],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("body",[n("div",[n("h1",[t._v("Blog Posting Website")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.postContent,expression:"postContent"}],attrs:{type:"text"},domProps:{value:t.postContent},on:{input:function(e){e.target.composing||(t.postContent=e.target.value)}}}),n("div",[n("button",{staticClass:"btn",on:{click:t.createPost}},[t._v("Post")])]),n("div",t._l(t.allPostData,(function(t){return n("Posts",{key:t.commentId,attrs:{id:t.id,content:t.content}})})),1)])])},i=[],c=(n("4e82"),n("bc3a")),u=n.n(c),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid-container"},[n("h2",{attrs:{id:"post-content"}},[t._v(t._s(t.content))]),n("div",[t.editBtnTgl?n("input",{directives:[{name:"model",rawName:"v-model",value:t.updatedPost,expression:"updatedPost"}],attrs:{type:"text"},domProps:{value:t.updatedPost},on:{input:function(e){e.target.composing||(t.updatedPost=e.target.value)}}}):t._e(),t.editBtnTgl?n("button",{staticClass:"postBtn",on:{click:t.updatePost}},[t._v("Update")]):t._e()]),n("div",{staticClass:"grid-container-inner"},[n("ul",[n("li",[n("button",{staticClass:"postBtn",on:{click:t.prepareUpdate}},[t._v("Update")])]),n("li",[n("button",{staticClass:"postBtn",on:{click:t.deletePost}},[t._v("Delete")])])])])])},p=[],d=(n("a9e3"),{name:"Posts",props:{id:Number,content:String},data:function(){return{editBtnTgl:!1,updatedPost:""}},methods:{prepareUpdate:function(){this.editBtnTgl=!0},updatePost:function(){u.a.request({url:"https://viadellapizza.ml/api/posts",method:"PATCH",headers:{"Content-Type":"application/json"},data:{id:this.id,content:this.updatedPost}}).then((function(t){console.log(t)})).catch((function(t){console.error("There was an error: "+t)}))},deletePost:function(){u.a.request({url:"https://viadellapizza.ml/api/posts",method:"DELETE",headers:{"Content-Type":"application/json"},data:{id:this.id}}).then((function(t){console.log(t)})).catch((function(t){console.error("There was an error: "+t)}))}}}),f=d,h=(n("1e28"),n("2877")),v=Object(h["a"])(f,l,p,!1,null,"02a46bee",null),m=v.exports,P={name:"Home",components:{Posts:m},data:function(){return{postContent:"",allPostData:[],newPostObj:{}}},methods:{retrievePost:function(){var t=this;u.a.request({url:"https://viadellapizza.ml/api/posts",method:"GET"}).then((function(e){console.log(e),t.allPostData=e.data,t.allPostData.sort((function(t,e){return new Date(e.createdAt)-new Date(t.createdAt)}))})).catch((function(t){console.error("There was an error: "+t)}))},createPost:function(){var t=this;u.a.request({url:"https://viadellapizza.ml/api/posts",method:"POST",headers:{"Content-Type":"application/json"},data:{content:this.postContent}}).then((function(e){console.log(e),t.newPostObj={content:e.data.content},t.allPostData.unshift(t.newPostObj),t.content="",t.retrievePost()})).catch((function(t){console.error("There was an error: "+t)}))}},mounted:function(){this.retrievePost()}},b=P,g=(n("096f"),Object(h["a"])(b,s,i,!1,null,"cf032dfa",null)),y=g.exports,w={name:"App",components:{Home:y}},_=w,j=(n("034f"),Object(h["a"])(_,r,a,!1,null,null,null)),O=j.exports,T=n("2f62");o["a"].use(T["a"]);var C=new T["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["a"].config.productionTip=!1,new o["a"]({store:C,render:function(t){return t(O)}}).$mount("#app")},"85ec":function(t,e,n){},cdc8:function(t,e,n){}});
//# sourceMappingURL=app.9c1da686.js.map