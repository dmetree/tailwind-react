(this["webpackJsonptailwind-react"]=this["webpackJsonptailwind-react"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),c=a.n(l),o=(a(9),a(1));var s=function(e){var t=e.image,a=t.tags.split(",");return r.a.createElement("div",null,r.a.createElement("div",{className:"max-w-sm rounded overflow-hidden shadow-lg"},r.a.createElement("img",{src:t.webformatURL,alt:"",className:"w-full"}),r.a.createElement("div",{className:"px-6 py-4"},r.a.createElement("div",{className:"font-bold text-purple-500 text-xl mb-2"},"Photo by ",t.user),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Views: "),t.views),r.a.createElement("li",null,r.a.createElement("strong",null,"Downloads: "),t.downloads),r.a.createElement("li",null,r.a.createElement("strong",null,"Likes: "),t.likes))),r.a.createElement("div",{className:"px-6 py-4"},a.map((function(e){return r.a.createElement("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2 my-1",key:e},"#",e)})))))};var m=function(e){var t=e.searchText,a=Object(n.useState)(""),l=Object(o.a)(a,2),c=l[0],s=l[1];return r.a.createElement("div",{className:"max-w-sm rounded overflow-hidden my-10 mx-auto"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(c)},className:"w-full max-w-sm"},r.a.createElement("div",{className:"flex items-center border-b border-b-2 border-teal-500 py-2"},r.a.createElement("input",{onChange:function(e){return s(e.target.value)},className:"appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-2 px-2 focus:outline-none",type:"text",placeholder:"Search for a picture of..."}),r.a.createElement("button",{className:"flex-shrink-1 bg-teal-500 hover:bg-teal-700  border-teal-500 hover:border-teal-700 text-sm border-4  text-white py 1 px-2 rounded",type:"submit"},"Search"))))};var i=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!0),i=Object(o.a)(c,2),u=i[0],d=i[1],p=Object(n.useState)(""),f=Object(o.a)(p,2),b=f[0],x=f[1];return Object(n.useEffect)((function(){fetch("https://pixabay.com/api/?key=".concat("16024350-27adc187f4b1360dbc690950f","&q=").concat(b,"&image_type=photo")).then((function(e){return e.json()})).then((function(e){console.log(e),l(e.hits),d(!1)})).catch((function(e){return console.log(e)}))}),[b]),r.a.createElement("div",null,r.a.createElement(m,{searchText:function(e){return x(e)}}),r.a.createElement("div",{className:"container mx-auto"},!u&&0===a.length&&r.a.createElement("h2",{className:"text-6xl text-center mx-auto mt-32"},"Nothing found. Try something else"),u?r.a.createElement("h2",{className:"text-6xl text-center mx-auto mt-32"},"Loading..."):r.a.createElement("div",{className:"grid grid-cols-3 gap-4"},a.map((function(e){return r.a.createElement(s,{key:e.id,image:e})})))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i,null)),document.getElementById("root"))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.1aa6c071.chunk.js.map