(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{171:function(n,t,r){"use strict";var o=r(9),e=r(2),u=r(18),i=r(94),a=r(95),c=r(12),l=r(172),s=r(96);e(e.S+e.F*!r(72)(function(n){Array.from(n)}),"Array",{from:function(n){var t,r,e,v,f=u(n),d="function"==typeof this?this:Array,m=arguments.length,h=m>1?arguments[1]:void 0,p=void 0!==h,w=0,_=s(f);if(p&&(h=o(h,m>2?arguments[2]:void 0,2)),null==_||d==Array&&a(_))for(r=new d(t=c(f.length));t>w;w++)l(r,w,p?h(f[w],w):f[w]);else for(v=_.call(f),r=new d;!(e=v.next()).done;w++)l(r,w,p?i(v,h,[e.value,w],!0):e.value);return r.length=w,r}})},172:function(n,t,r){"use strict";var o=r(8),e=r(52);n.exports=function(n,t,r){t in n?o.f(n,t,e(0,r)):n[t]=r}},173:function(n,t,r){"use strict";var o=r(2),e=r(23),u=r(18),i=r(5),a=[].sort,c=[1,2,3];o(o.P+o.F*(i(function(){c.sort(void 0)})||!i(function(){c.sort(null)})||!r(19)(a)),"Array",{sort:function(n){return void 0===n?a.call(u(this)):a.call(u(this),e(n))}})},178:function(n,t,r){"use strict";r.r(t);r(97),r(171),r(173);var o={name:"random",data:function(){return{value:"",count:1}},methods:{random:function(){this.value=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return Array.from({length:100},function(n,t){return t+1}).sort(function(){return Math.random()-.5}).slice(0,n)}(this.count)}}},e=r(0),u=Object(e.a)(o,function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",[r("button",{on:{click:n.random}},[n._v("随机数字")]),n._v(" "),r("label",{attrs:{for:""}},[n._v("随机数组长度：")]),n._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:n.count,expression:"count"}],attrs:{type:"number",placeholder:"数量"},domProps:{value:n.count},on:{input:function(t){t.target.composing||(n.count=t.target.value)}}}),n._v(" "),r("p",[n._v("\n    点击上面的按钮随机出来数字："+n._s(n.value)+"\n  ")])])},[],!1,null,null,null);t.default=u.exports}}]);