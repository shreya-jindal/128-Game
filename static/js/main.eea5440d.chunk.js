(this.webpackJsonpgame2048=this.webpackJsonpgame2048||[]).push([[0],{10:function(e,t,r){},12:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),o=r(4),a=r.n(o),i=(r(9),r(2));r(10);function u(e,t){if(e.length!==t.length)return!1;for(var r in e)if(e[r]instanceof Array&&t[r]instanceof Array){if(!u(e[r],t[r]))return!1}else if(e[r]!==t[r])return!1;return!0}var s=function(e){var t=e.map((function(e){return e.map((function(e){return e}))})),r=[];if(e.map((function(t,n){return t.map((function(t,c){if(!e[n][c])return r.push({x:n,y:c})}))})),0===r.length)return t;var n=r[Math.floor(Math.random()*r.length)],c=Math.random()>.5?2:4;return t[n.x][n.y]=c,t},l=function(e){return e.map((function(t){var r=t.filter((function(e){return e}));return r=Array(e.length-r.length).fill(0).concat(r)}))},j=function(e){for(var t=Number(localStorage.getItem("Score")),r=Number(localStorage.getItem("BestScore")),n=0;n<e.length;n++)for(var c=e[n],o=c.length-1;o>0;o--)c[o]===c[o-1]&&(c[o]*=2,c[o-1]=0,void 0!==t&&(t+=c[o]),r=t>r?t:r,localStorage.setItem("Score",t.toString()),localStorage.setItem("BestScore",r.toString()));return e},m=function(e){return e.map((function(e){return e.map((function(e){return e}))})).map((function(e){return e.reverse()}))},d=function(e){return e[0].map((function(t,r){return e.map((function(e){return e[r]}))}))};function f(e){var t=e.map((function(e){return e.map((function(e){return e}))})),r=l(t);return r=j(r),u(r=l(r),t)?t:r=s(r)}function b(e){var t=e.map((function(e){return e.map((function(e){return e}))})),r=m(t);return r=l(r),r=j(r),r=l(r),u(r=m(r),t)?t:r=s(r)}function v(e){var t=e.map((function(e){return e.map((function(e){return e}))})),r=d(t);return r=l(r),r=j(r),r=l(r),u(r=d(r),t)?t:r=s(r)}function h(e){var t=e.map((function(e){return e.map((function(e){return e}))})),r=d(t);return r=m(r),r=l(r),r=j(r),r=l(r),r=m(r),u(r=d(r),e)?t:r=s(r)}function O(){var e=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];return e=s(e),e=s(e),localStorage.setItem("Score","0"),e}var g=r(0),S=function(e){var t=e.RowKey;return Object(g.jsx)("tr",{children:t.map((function(e,t){return Object(g.jsx)(x,{number:e},t)}))})},x=function(e){var t=e.number,r="cell",n=t?"".concat(t):" ";return t&&(r+=" color-".concat(t)),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("td",{children:Object(g.jsx)("div",{className:r,children:Object(g.jsx)("div",{className:"number",children:n})})})})},p=function(){var e=Object(n.useState)([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]),t=Object(i.a)(e,2),r=t[0],c=t[1],o=Object(n.useState)(0),a=Object(i.a)(o,2),s=a[0],l=a[1],j=Object(n.useState)(0),m=Object(i.a)(j,2),d=m[0],x=m[1],p=Object(n.useState)(void 0),N=Object(i.a)(p,2),w=N[0],I=N[1];Object(n.useEffect)((function(){c(O()),localStorage.setItem("Score","0"),localStorage.setItem("BestScore","0")}),[]),Object(n.useEffect)((function(){return void 0===w&&window.addEventListener("keydown",y),function(){window.removeEventListener("keydown",y)}})),Object(n.useEffect)((function(){var e=Number(localStorage.getItem("Score")),t=Number(localStorage.getItem("BestScore"));void 0!==e&&(l(e),x(t));var n=function(e){for(var t=0;t<e.length;t++)for(var r=0;r<e[0].length;r++)if(128===e[t][r])return!0;return!1}(r),c=function(e){if(0===e.map((function(e){return e.reduce((function(e,t){return e+t}))})).reduce((function(e,t){return e+t})))return!1;var t=Number(localStorage.getItem("Score")),r=Number(localStorage.getItem("BestScore"));return u(e,f(e))&&u(e,b(e))&&u(e,h(e))&&u(e,v(e))?(localStorage.setItem("Score",t),localStorage.setItem("BestScore",r),!0):(void 0!==t&&(localStorage.setItem("Score",t),localStorage.setItem("BestScore",r)),!1)}(r);n&&I("Congrations!! \n You Win!!"),c&&I("  Oops! \nGame Over!")}),[r]);var y=function(e){switch(e.preventDefault(),e.key){case"ArrowUp":c(h(r));break;case"ArrowDown":c(v(r));break;case"ArrowRight":c(f(r));break;case"ArrowLeft":c(b(r))}};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"Title",children:[Object(g.jsx)("div",{className:"cell",children:Object(g.jsx)("div",{className:"number",children:"1"})}),Object(g.jsx)("div",{className:"cell color-2",children:Object(g.jsx)("div",{className:"number",children:"2"})}),Object(g.jsx)("div",{className:"cell color-8",children:Object(g.jsx)("div",{className:"number",children:"8"})}),Object(g.jsx)("div",{className:"Game",children:Object(g.jsx)("div",{className:"number",children:"GAME"})})]}),Object(g.jsxs)("div",{className:"ScoresContainer",children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{children:"Score :"}),Object(g.jsx)("div",{children:"".concat(s)})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{children:"Best Score:"}),Object(g.jsx)("div",{children:"".concat(d)})]}),Object(g.jsx)("button",{type:"button",onClick:function(){I(void 0),c(O)},children:" Restart "})]}),Object(g.jsxs)("div",{className:"message-position",children:[Object(g.jsx)("table",{children:Object(g.jsx)("tbody",{children:r.map((function(e,t){return Object(g.jsx)(S,{RowKey:e},t)}))})}),void 0!==w?Object(g.jsx)("div",{className:"message",children:Object(g.jsx)("pre",{children:w})}):""]}),Object(g.jsx)("div",{className:"instruction",children:"Join via Arrow Keys and get to the 128 tile!"})]})};a.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(p,{})}),document.getElementById("root"))},9:function(e,t,r){}},[[12,1,2]]]);
//# sourceMappingURL=main.eea5440d.chunk.js.map