"use strict";(self.webpackChunkthe_suhas_space=self.webpackChunkthe_suhas_space||[]).push([[296],{7408:function(e,t,a){var n=a(7462),l=a(3366),r=a(5900),s=a.n(r),c=a(7294),i=a(9541),m=["bsPrefix","className","as"],o=["xl","lg","md","sm","xs"],d=c.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,d=e.as,f=void 0===d?"div":d,u=(0,l.Z)(e,m),p=(0,i.vE)(a,"col"),v=[],h=[];return o.forEach((function(e){var t,a,n,l=u[e];if(delete u[e],"object"==typeof l&&null!=l){var r=l.span;t=void 0===r||r,a=l.offset,n=l.order}else t=l;var s="xs"!==e?"-"+e:"";t&&v.push(!0===t?""+p+s:""+p+s+"-"+t),null!=n&&h.push("order"+s+"-"+n),null!=a&&h.push("offset"+s+"-"+a)})),v.length||v.push(p),c.createElement(f,(0,n.Z)({},u,{ref:t,className:s().apply(void 0,[r].concat(v,h))}))}));d.displayName="Col",t.Z=d},6187:function(e,t,a){var n=a(7462),l=a(3366),r=a(5900),s=a.n(r),c=a(7294),i=a(9541),m=["bsPrefix","fluid","as","className"],o=c.forwardRef((function(e,t){var a=e.bsPrefix,r=e.fluid,o=e.as,d=void 0===o?"div":o,f=e.className,u=(0,l.Z)(e,m),p=(0,i.vE)(a,"container"),v="string"==typeof r?"-"+r:"-fluid";return c.createElement(d,(0,n.Z)({ref:t},u,{className:s()(f,r?""+p+v:p)}))}));o.displayName="Container",o.defaultProps={fluid:!1},t.Z=o},4992:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(7294),l=a(6187),r=a(7506),s=a(3751),c=a(994),i=a(7408),m=a(5444);var o=function(e){var t=e.title,a=e.date,l=e.timeToRead,r=e.link;return a=(a=new Date(a)).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}),n.createElement(c.Z,{className:"py-2"},n.createElement(i.Z,{className:"main-col d-flex flex-column justify-content-center px-0"},n.createElement(m.Link,{to:r},n.createElement("h3",{className:"text-light mb-2"},t)),n.createElement("h5",{className:"text-muted"},n.createElement("p",{className:"my-0"},n.createElement("span",{className:"d-inline-block"},a)),n.createElement("p",{className:"my-0"},n.createElement("span",{className:"d-inline-block"},l," min. read")))))};function d(e){var t=e.data.allMarkdownRemark.edges;return n.createElement(r.Z,{active:"blogs"},n.createElement(s.Z,{title:"Blogs"}),n.createElement("div",{className:"pt-5"},n.createElement("h1",{className:"text-center text-light"},"Blogs"),n.createElement(l.Z,{className:"pt-3"},t.map((function(e){return n.createElement(o,{key:e.node.id,title:e.node.frontmatter.title,date:e.node.frontmatter.date,link:e.node.frontmatter.slug,timeToRead:e.node.timeToRead})})))))}}}]);
//# sourceMappingURL=component---src-pages-blogs-js-b39d0b9c34efd5280dd7.js.map