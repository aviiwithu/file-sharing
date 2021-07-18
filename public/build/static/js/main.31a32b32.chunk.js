(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(e,n,t){},35:function(e,n,t){},62:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),i=t(28),s=t.n(i),o=(t(34),t(35),t(1)),l=function(){return Object(o.jsx)("div",{className:"headingContainer",children:Object(o.jsx)("h2",{className:"heading",children:"File Sharing"})})},r=t(10),d=t(12),j=t.n(d),u=t(13),m=t.n(u);m.a.config();var p=function(){var e=Object(c.useState)(),n=Object(r.a)(e,2),t=n[0],a=n[1],i=Object(c.useState)(),s=Object(r.a)(i,2),l=s[0],d=s[1];Object(c.useEffect)((function(){}),[t,l]);var u=function(e){var n="".concat("https://file--sharing.herokuapp.com","/api/files"),t=new FormData;t.append("myFile",e),j()({url:n,method:"post",data:t,onUploadProgress:function(e){var n=parseInt(100*e.loaded/e.total);d(n)}}).then((function(e){var n=e.data;a(n)})).catch((function(e){return console.log(e)}))};return Object(o.jsxs)("div",{className:"mainContainer",children:[Object(o.jsx)("div",{className:"dropZoneContainer",children:Object(o.jsxs)("div",{className:"dropZone",onDrop:function(e){return function(e){e.preventDefault(),e.stopPropagation(),u(e.dataTransfer.files[0])}(e)},onDragOver:function(e){return function(e){e.preventDefault(),e.stopPropagation()}(e)},children:[Object(o.jsx)("div",{className:"iconContainer",children:Object(o.jsx)("img",{src:"/images/upload-icon.png",alt:"upload icon",className:"uploadIcon"})}),Object(o.jsx)("input",{type:"file",name:"myFile",id:"fileInput",onChange:function(e){u(e.target.files[0]),a()}}),Object(o.jsxs)("div",{className:"title",children:["Drop your Files here or ",Object(o.jsx)("span",{className:"browseBtn",onClick:function(){document.getElementById("fileInput").click()},children:"browser"})]}),l<100?Object(o.jsxs)("div",{className:"loading",style:{width:"".concat(l,"%")},children:[l+"%","..completed"]}):t&&Object(o.jsxs)("div",{className:"downloadLink",children:[Object(o.jsx)("input",{type:"text",className:"link",readOnly:!0,value:t.file}),Object(o.jsx)("img",{src:"/images/copy-icon.svg",className:"copyIcon",alt:"copy icon",onClick:function(){document.getElementsByClassName("link")[0].select(),document.execCommand("copy")}})]})]})}),Object(o.jsx)("div",{className:"imageContainer",children:Object(o.jsx)("img",{src:"/images/upload-icon.svg",alt:"upload icon",className:"outerImg"})})]})},h=t(2);m.a.config();var b=function(){var e=Object(h.f)(),n=Object(c.useState)(),t=Object(r.a)(n,2),a=t[0],i=t[1];return Object(c.useEffect)((function(){j()({url:"".concat("https://file--sharing.herokuapp.com","/files/").concat(e.uuid),method:"get"}).then((function(e){var n=e.data;return i(n)})).catch((function(e){return console.log(e)}))}),[e.uuid]),Object(o.jsx)("div",{className:"downloadContainer",children:a?Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("img",{src:"/images/download-icon.png",alt:"download icon",className:"downloadIcon"}),Object(o.jsx)("h2",{className:"title",children:"Your file is ready to download"}),Object(o.jsx)("p",{className:"subTitle",children:"Link expires in 24 hours"}),Object(o.jsx)("p",{className:"fileName",children:a.name}),Object(o.jsxs)("p",{className:"fileSize",children:[parseInt(a.size/1024)," KB"]}),Object(o.jsx)("a",{href:a.downloadLink,children:Object(o.jsx)("button",{className:"downloadBtn",children:" Download "})})]}):Object(o.jsx)("img",{src:"/images/loading-icon-animated.svg",alt:"loading icon"})})};var f=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{}),Object(o.jsxs)(h.c,{children:[Object(o.jsx)(h.a,{path:"/",exact:!0,component:p}),Object(o.jsx)(h.a,{path:"/download/:uuid",exact:!0,component:b})]})]})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,63)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,i=n.getLCP,s=n.getTTFB;t(e),c(e),a(e),i(e),s(e)}))},g=t(11);s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(g.a,{children:Object(o.jsx)(f,{})})}),document.getElementById("root")),O()}},[[62,1,2]]]);
//# sourceMappingURL=main.31a32b32.chunk.js.map