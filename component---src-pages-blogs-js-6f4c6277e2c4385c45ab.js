"use strict";(self.webpackChunkthe_suhas_space=self.webpackChunkthe_suhas_space||[]).push([[296],{2623:function(e,t,a){var l=a(7462),n=a(3366),r=a(5900),c=a.n(r),m=a(7294),o=a(9541),s=["bsPrefix","variant","pill","className","as"],i=m.forwardRef((function(e,t){var a=e.bsPrefix,r=e.variant,i=e.pill,u=e.className,f=e.as,d=void 0===f?"span":f,p=(0,n.Z)(e,s),E=(0,o.vE)(a,"badge");return m.createElement(d,(0,l.Z)({ref:t},p,{className:c()(u,E,i&&E+"-pill",r&&E+"-"+r)}))}));i.displayName="Badge",i.defaultProps={pill:!1},t.Z=i},6644:function(e,t,a){a.d(t,{Z:function(){return p}});var l=a(7294),n=a(6187),r=a(994),c=a(7408),m=a(2623),o=a(5444),s=a(7506),i=a(3751);function u(e){var t=e.title,a=e.date,n=e.timeToRead,m=e.excerpt,s=e.link;return a=(a=new Date(a)).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}),l.createElement(r.Z,{className:"py-3"},l.createElement(c.Z,null,l.createElement(r.Z,null,l.createElement(c.Z,{className:"blog-first-col d-flex flex-column justify-content-center px-0",md:"10",xs:"12"},l.createElement(o.Link,{to:s},l.createElement("h3",{className:"text-light mb-md-2 mb-1"},t))),l.createElement(c.Z,{className:"blog-second-col d-flex flex-column justify-content-center align-items-md-end px-0",md:"2",xs:"12"},l.createElement("h5",{className:"text-muted mb-md-0 mb-1"},a))),l.createElement(r.Z,null,l.createElement(c.Z,{className:"d-flex flex-column justify-content-center px-0"},l.createElement("h6",{className:"my-0 font-weight-normal"},l.createElement("strong",null,l.createElement("em",null,n," min. read: ")),l.createElement("span",{dangerouslySetInnerHTML:{__html:m}})," ",l.createElement(o.Link,{to:s},"Read more"))))))}u.defaultProps={excerpt:""};var f=u,d=a(6669);function p(e){var t=e.data,a=t.posts.edges,u=t.tags.group,p=0;return t.tags.group.forEach((function(e){return p+=e.totalCount})),l.createElement(s.Z,{active:"blogs"},l.createElement(i.Z,{title:"Blogs"}),l.createElement("div",{className:"pt-5"},l.createElement(n.Z,null,l.createElement(r.Z,{className:"pb-1"},l.createElement(c.Z,null),l.createElement(c.Z,null,l.createElement("h1",{className:"text-center text-light"},"Blogs")),l.createElement(c.Z,{className:"d-flex flex-column align-items-end"},l.createElement(d.Z,{text:"Subscribe"}))),l.createElement(r.Z,{className:"pb-2 d-flex flex-row justify-content-center"},"●",l.createElement(o.Link,{to:"/blogs/",className:"mx-2 mb-1 py-0 btn btn-dark",activeStyle:{color:"#212529",backgroundColor:"#f8f9fa",borderColor:"#f8f9fa"}},"All ",l.createElement(m.Z,{pill:!0,variant:"info"},p)),"●",u.map((function(e,t){return l.createElement(o.Link,{key:t,to:"/blogs="+e.fieldValue+"/",className:"ml-2 mb-1 py-0 btn btn-dark",activeStyle:{color:"#212529",backgroundColor:"#f8f9fa",borderColor:"#f8f9fa"}},e.fieldValue[0].toUpperCase()+e.fieldValue.slice(1)," ",l.createElement(m.Z,{pill:!0,variant:"info"},e.totalCount))}))),a.map((function(e){return l.createElement(f,{key:e.node.id,title:e.node.frontmatter.title,date:e.node.frontmatter.date,link:e.node.frontmatter.slug,excerpt:e.node.fields.excerpt_html,timeToRead:Math.ceil(1.25*e.node.timeToRead)})})))))}},6188:function(e,t,a){a.r(t),a.d(t,{default:function(){return r}});var l=a(7294),n=a(6644);function r(e){var t=e.data;return l.createElement(n.Z,{data:t})}}}]);
//# sourceMappingURL=component---src-pages-blogs-js-6f4c6277e2c4385c45ab.js.map