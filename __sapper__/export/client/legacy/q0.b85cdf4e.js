import{_ as t,a as e,b as n,c as i,i as a,s,d as o,S as r,f as c,t as u,j as h,k as l,l as m,g as f,m as d,H as v,n as p,o as w,e as g,q as y,h as b,u as q,p as k,I}from"./client.502dfe18.js";function T(t){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,s=e(t);if(i){var o=e(this).constructor;a=Reflect.construct(s,arguments,o)}else a=s.apply(this,arguments);return n(this,a)}}function D(t,e,n){var i=t.slice();return i[3]=e[n].id,i[4]=e[n].name,i[5]=e[n].time,i[6]=e[n].description,i[8]=n,i}function E(t){var e,n,i,a,s,o,r,g,y=t[4]+"",b=t[5]+"",q=t[6]+"";return{c:function(){e=c("div"),n=u(t[8]),i=u(y),a=u(" ("),s=u(b),o=u(")"),r=c("div"),g=u(q),this.h()},l:function(c){e=h(c,"DIV",{class:!0});var u=l(e);n=m(u,t[8]),i=m(u,y),a=m(u," ("),s=m(u,b),o=m(u,")"),u.forEach(f),r=h(c,"DIV",{class:!0});var d=l(r);g=m(d,q),d.forEach(f),this.h()},h:function(){d(e,"class","num svelte-m0bqhn"),d(r,"class","svelte-m0bqhn"),v(r,"active",t[0])},m:function(t,c){p(t,e,c),w(e,n),w(e,i),w(e,a),w(e,s),w(e,o),p(t,r,c),w(r,g)},p:function(t,e){1&e&&v(r,"active",t[0])},d:function(t){t&&f(e),t&&f(r)}}}function R(t){for(var e,n,i,a,s,o=t[1],r=[],v=0;v<o.length;v+=1)r[v]=E(D(t,o,v));return{c:function(){e=g(),n=c("h2"),i=u("This test contains 10 unique privacy tests that will take you about 30 minutes to complete. Throught the test, we will provide..."),a=g(),s=c("div");for(var t=0;t<r.length;t+=1)r[t].c();this.h()},l:function(t){y('[data-svelte="svelte-1mhs4ds"]',document.head).forEach(f),e=b(t),n=h(t,"H2",{});var o=l(n);i=m(o,"This test contains 10 unique privacy tests that will take you about 30 minutes to complete. Throught the test, we will provide..."),o.forEach(f),a=b(t),s=h(t,"DIV",{class:!0});for(var c=l(s),u=0;u<r.length;u+=1)r[u].l(c);c.forEach(f),this.h()},h:function(){document.title="Quiz Overview",d(s,"class","svelte-m0bqhn")},m:function(t,o){p(t,e,o),p(t,n,o),w(n,i),p(t,a,o),p(t,s,o);for(var c=0;c<r.length;c+=1)r[c].m(s,null)},p:function(t,e){var n=q(e,1)[0];if(3&n){var i;for(o=t[1],i=0;i<o.length;i+=1){var a=D(t,o,i);r[i]?r[i].p(a,n):(r[i]=E(a),r[i].c(),r[i].m(s,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=o.length}},i:k,o:k,d:function(t){t&&f(e),t&&f(n),t&&f(a),t&&f(s),I(r,t)}}}function S(t,e,n){return[!0,[{id:"q1",name:"Webcam Challenge",time:"2mins",description:"If your computer has a built-in camera, also known as a webcam, you should know that it can be used to spy on you. And no, this is not just science fiction as a recent survey conducted by HP shows that 10% in the U.S. either know someone whose webcam was hacked or have had their own webcam hacked. In this challenge, we are going to walk you through the best practice to avoid this risk."},{id:"q2",name:"Browser Choice",time:"3mins"},{id:"q3",name:"Privacy Setting",time:"4mins"},{id:"q4",name:"Https everywhere",time:"4mins"},{id:"q5",name:"Location Services (phone needed)",time:"3mins"},{id:"q6",name:"Tracker blocker",time:"3mins"},{id:"q7",name:"location Tracking",time:"1mins"},{id:"q8",name:"Mobile keyboard",time:"5mins"},{id:"q9",name:"Messenger platform",time:"2mins"},{id:"q10",name:"iot",time:"2mins"}]]}var H=function(e){t(c,r);var n=T(c);function c(t){var e;return i(this,c),e=n.call(this),a(o(e),t,S,R,s,{}),e}return c}();export default H;