(this["webpackJsonpbtc-converter"]=this["webpackJsonpbtc-converter"]||[]).push([[0],{115:function(e,t,n){},187:function(e,t,n){},188:function(e,t,n){"use strict";n.r(t);var r,c=n(0),a=n.n(c),u=n(27),s=n.n(u),i=(n(115),n(82)),o=n(35),l=n.n(o),b=n(47),j=n(50),f=n(198),d=n(197),p=n(194),m=n(192),h=n(193),O=n(195),x=n(196),v=n(106),y=n(108),g=n(11),w=function(e){var t,n,r=e.amount,c=e.currency,a=e.onRemove;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(p.a.Item,{label:c.code,children:Object(g.jsx)(x.a,{value:c.rate_float&&r?(t=r*c.rate_float,n=c.code,new Intl.NumberFormat("en-US",{style:"currency",currency:n}).format(t)):void 0})}),Object(g.jsx)(v.a,{type:"link",onClick:function(){return a(c.code)},children:Object(g.jsx)(y.a,{})})]})},k="".concat("https://api.coindesk.com","/v1/bpi/currentprice.json"),F=function(){var e=Object(b.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.prev=3,e.next=6,n.json();case 6:n.parsedBody=e.sent,e.next=11;break;case 9:e.prev=9,e.t0=e.catch(3);case 11:if(n.ok){e.next=13;break}throw new Error(n.statusText);case 13:return e.abrupt("return",n);case 14:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(b.a)(l.a.mark((function e(){var t,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(k);case 2:if(t=e.sent,!(n=t.parsedBody)){e.next=7;break}return r={chartName:n.chartName,disclaimer:n.disclaimer,time:n.time,currencies:Object.values(n.bpi)},e.abrupt("return",r);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();!function(e){e[e.USD=0]="USD",e[e.GBP=1]="GBP",e[e.EUR=2]="EUR"}(r||(r={}));var C=f.a.Content,S=d.a.Option,B=function(){var e=p.a.useForm(),t=Object(j.a)(e,1)[0],n=Object.values(r).filter((function(e){return!(parseInt(e.toString())>=0)})),a=Object(c.useState)(0),u=Object(j.a)(a,2),s=u[0],o=u[1],x=Object(c.useState)(n),v=Object(j.a)(x,2),y=v[0],k=v[1],F=Object(c.useState)({}),B=Object(j.a)(F,2),N=B[0],E=B[1];Object(c.useEffect)((function(){function e(){return(e=Object(b.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:(t=e.sent)&&E(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var P=function(e){k(Object(i.a)(y.filter((function(t){return t!==e}))))};return Object(g.jsx)(f.a,{className:"btc-wrapper",children:Object(g.jsx)(C,{children:Object(g.jsx)(m.a,{children:Object(g.jsx)(h.a,{offset:8,children:Object(g.jsxs)(p.a,{layout:"inline",form:t,children:[Object(g.jsx)(p.a.Item,{label:"Btc Number",name:"btcNumber",rules:[{required:!0,message:"Please input BFC number !"}],children:Object(g.jsx)(O.a,{onInput:function(e){return e?o(parseInt(e)):e},min:0})}),(null===N||void 0===N?void 0:N.currencies)&&y.map((function(e){var t,n=null!==(t=N.currencies.find((function(t){return t.code===e})))&&void 0!==t?t:{};return console.log("curencyItem",n),Object(g.jsx)(w,{amount:s,currency:n,onRemove:P},e)})),y.length!==n.length&&Object(g.jsx)(p.a.Item,{name:"missedCurrencies",label:"Add currency",children:Object(g.jsx)(d.a,{onChange:function(e){k([].concat(Object(i.a)(y),[e])),t.setFieldsValue({missedCurrencies:null})},style:{width:"100px"},children:n.filter((function(e){return!y.includes(e)})).map((function(e){return Object(g.jsx)(S,{value:e,children:e},e)}))})})]})})})})})};n(186),n(187);var N=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(B,{})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,199)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,u=t.getTTFB;n(e),r(e),c(e),a(e),u(e)}))};s.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(N,{})}),document.getElementById("root")),E()}},[[188,1,2]]]);
//# sourceMappingURL=main.9f5afca3.chunk.js.map