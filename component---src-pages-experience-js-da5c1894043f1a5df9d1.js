(self.webpackChunkthe_suhas_space=self.webpackChunkthe_suhas_space||[]).push([[622],{7408:function(e,t,a){"use strict";var n=a(2122),r=a(9756),s=a(5900),l=a.n(s),c=a(7294),i=a(9541),o=["xl","lg","md","sm","xs"],m=c.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,m=e.as,u=void 0===m?"div":m,f=(0,r.Z)(e,["bsPrefix","className","as"]),d=(0,i.vE)(a,"col"),p=[],E=[];return o.forEach((function(e){var t,a,n,r=f[e];if(delete f[e],"object"==typeof r&&null!=r){var s=r.span;t=void 0===s||s,a=r.offset,n=r.order}else t=r;var l="xs"!==e?"-"+e:"";t&&p.push(!0===t?""+d+l:""+d+l+"-"+t),null!=n&&E.push("order"+l+"-"+n),null!=a&&E.push("offset"+l+"-"+a)})),p.length||p.push(d),c.createElement(u,(0,n.Z)({},f,{ref:t,className:l().apply(void 0,[s].concat(p,E))}))}));m.displayName="Col",t.Z=m},6187:function(e,t,a){"use strict";var n=a(2122),r=a(9756),s=a(5900),l=a.n(s),c=a(7294),i=a(9541),o=c.forwardRef((function(e,t){var a=e.bsPrefix,s=e.fluid,o=e.as,m=void 0===o?"div":o,u=e.className,f=(0,r.Z)(e,["bsPrefix","fluid","as","className"]),d=(0,i.vE)(a,"container"),p="string"==typeof s?"-"+s:"-fluid";return c.createElement(m,(0,n.Z)({ref:t},f,{className:l()(u,s?""+d+p:d)}))}));o.displayName="Container",o.defaultProps={fluid:!1},t.Z=o},2007:function(e,t,a){"use strict";var n=a(7294),r=function(e){return new Date(e).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})};t.Z=function(e){var t=e.startDates,a=e.endDates;return n.createElement(n.Fragment,null,t.map((function(e,s){return n.createElement("span",{key:s},n.createElement("span",{className:"d-inline-block"},r(e)),n.createElement("span",{className:"d-inline-block"}," - "),n.createElement("span",{className:"d-inline-block"},r(a[s]),s!==t.length-1&&","," "))})))}},3532:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var n=a(7294),r=a(6187),s=a(3246),l=a(3751),c=a(994),i=a(7408),o=a(5444),m=a(2007);var u=function(e){var t=e.title,a=e.company,r=e.imgSrc,s=e.startDates,l=e.endDates,u=e.link;return n.createElement(c.Z,{className:"py-2"},n.createElement(i.Z,{className:"first-col"},n.createElement(o.Link,{to:u},n.createElement("img",{src:r,alt:a+" logo",title:a+" logo",height:100}))),n.createElement(i.Z,{className:"second-col d-flex flex-column justify-content-center px-0"},n.createElement(o.Link,{to:u},n.createElement("h3",{className:"text-light mb-2"},t)),n.createElement("h5",{className:"text-muted"},n.createElement(m.Z,{startDates:s,endDates:l}))))};function f(e){var t=e.data.allMarkdownRemark.edges;return n.createElement(s.Z,{active:"experience"},n.createElement(l.Z,{title:"Experience"}),n.createElement("div",{className:"pt-5"},n.createElement("h1",{className:"text-center text-light"},"Experience"),n.createElement(r.Z,{className:"pt-3"},t.map((function(e){return n.createElement(u,{key:e.node.id,title:e.node.frontmatter.title,company:e.node.frontmatter.company,link:e.node.frontmatter.slug,startDates:e.node.frontmatter.startDates,endDates:e.node.frontmatter.endDates,imgSrc:e.node.frontmatter.image.childImageSharp.fluid.src})})))))}}}]);
//# sourceMappingURL=component---src-pages-experience-js-da5c1894043f1a5df9d1.js.map