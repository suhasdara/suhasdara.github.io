(self.webpackChunkthe_suhas_space=self.webpackChunkthe_suhas_space||[]).push([[853],{6132:function(e,t,a){"use strict";var r=a(2122),n=a(7294),c=a(5900),s=a.n(c);t.Z=function(e){return n.forwardRef((function(t,a){return n.createElement("div",(0,r.Z)({},t,{ref:a,className:s()(t.className,e)}))}))}},2007:function(e,t,a){"use strict";var r=a(7294),n=function(e){return new Date(e).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})};t.Z=function(e){var t=e.startDates,a=e.endDates;return r.createElement(r.Fragment,null,t.map((function(e,c){return r.createElement("span",{key:c},r.createElement("span",{className:"d-inline-block"},n(e)),r.createElement("span",{className:"d-inline-block"}," - "),r.createElement("span",{className:"d-inline-block"},n(a[c]),c!==t.length-1&&","," "))})))}},5602:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return R}});var r=a(7294),n=a(8870),c=(0,n.Z)("card-deck"),s=a(3246),l=a(3751),i=a(2122),m=a(9756),o=a(5900),d=a.n(o),u=a(9541),f=a(6132),v=a(9503),p=r.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,c=e.variant,s=e.as,l=void 0===s?"img":s,o=(0,m.Z)(e,["bsPrefix","className","variant","as"]),f=(0,u.vE)(a,"card-img");return r.createElement(l,(0,i.Z)({ref:t,className:d()(c?f+"-"+c:f,n)},o))}));p.displayName="CardImg",p.defaultProps={variant:null};var E=p,b=(0,f.Z)("h5"),g=(0,f.Z)("h6"),h=(0,n.Z)("card-body"),Z=(0,n.Z)("card-title",{Component:b}),N=(0,n.Z)("card-subtitle",{Component:g}),k=(0,n.Z)("card-link",{Component:"a"}),x=(0,n.Z)("card-text",{Component:"p"}),y=(0,n.Z)("card-header"),D=(0,n.Z)("card-footer"),P=(0,n.Z)("card-img-overlay"),w=r.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,c=e.bg,s=e.text,l=e.border,o=e.body,f=e.children,p=e.as,E=void 0===p?"div":p,b=(0,m.Z)(e,["bsPrefix","className","bg","text","border","body","children","as"]),g=(0,u.vE)(a,"card"),Z=(0,r.useMemo)((function(){return{cardHeaderBsPrefix:g+"-header"}}),[g]);return r.createElement(v.Z.Provider,{value:Z},r.createElement(E,(0,i.Z)({ref:t},b,{className:d()(n,g,c&&"bg-"+c,s&&"text-"+s,l&&"border-"+l)}),o?r.createElement(h,null,f):f))}));w.displayName="Card",w.defaultProps={body:!1},w.Img=E,w.Title=Z,w.Subtitle=N,w.Body=h,w.Link=k,w.Text=x,w.Header=y,w.Footer=D,w.ImgOverlay=P;var C=w,S=a(5444),I=a(2007);var j=function(e){var t=e.title,a=e.imgSrc,n=e.startDates,c=e.endDates,s=e.link;return r.createElement(C,{className:"bg-light text-center mb-3"},r.createElement(C.Img,{src:a,variant:"top"}),r.createElement(C.Body,null,r.createElement(C.Title,{className:"text-dark"},t),r.createElement(C.Subtitle,{className:"text-muted small"},r.createElement(I.Z,{startDates:n,endDates:c}))),r.createElement(S.Link,{to:s,className:"stretched-link"}))};function R(e){var t=e.data.allMarkdownRemark.edges;return r.createElement(s.Z,{active:"projects"},r.createElement(l.Z,{title:"Projects"}),r.createElement("div",{className:"pt-5"},r.createElement("h1",{className:"text-center text-light"},"Projects"),r.createElement(c,{className:"d-flex flex-row flex-wrap justify-content-center pt-3"},t.map((function(e){return r.createElement(j,{key:e.node.id,title:e.node.frontmatter.title,link:e.node.frontmatter.slug,startDates:e.node.frontmatter.startDates,endDates:e.node.frontmatter.endDates,imgSrc:e.node.frontmatter.image.childImageSharp.fluid.src})})))))}}}]);
//# sourceMappingURL=component---src-pages-projects-js-3e6ca4031ed6d611c070.js.map