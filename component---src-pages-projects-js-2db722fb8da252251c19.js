"use strict";(self.webpackChunkthe_suhas_space=self.webpackChunkthe_suhas_space||[]).push([[853],{6132:function(e,t,a){var r=a(7462),n=a(7294),c=a(5900),l=a.n(c);t.Z=function(e){return n.forwardRef((function(t,a){return n.createElement("div",(0,r.Z)({},t,{ref:a,className:l()(t.className,e)}))}))}},2007:function(e,t,a){var r=a(7294),n=function(e){return new Date(e).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})};t.Z=function(e){var t=e.startDates,a=e.endDates;return r.createElement(r.Fragment,null,t.map((function(e,c){return r.createElement("span",{key:c},r.createElement("span",{className:"d-inline-block"},n(e)),r.createElement("span",{className:"d-inline-block"}," - "),r.createElement("span",{className:"d-inline-block"},"2099-12-31T00:00:00.000Z"===a[c]?"Current":n(a[c]),c!==t.length-1&&","),c!==t.length-1&&r.createElement("span",{className:"d-inline-block"}," and "))})))}},5602:function(e,t,a){a.r(t),a.d(t,{default:function(){return B}});var r=a(7294),n=a(8870),c=(0,n.Z)("card-deck"),l=a(7506),s=a(3751),i=a(7462),m=a(3366),o=a(5900),d=a.n(o),u=a(9541),f=a(6132),v=a(9503),p=["bsPrefix","className","variant","as"],E=r.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,c=e.variant,l=e.as,s=void 0===l?"img":l,o=(0,m.Z)(e,p),f=(0,u.vE)(a,"card-img");return r.createElement(s,(0,i.Z)({ref:t,className:d()(c?f+"-"+c:f,n)},o))}));E.displayName="CardImg",E.defaultProps={variant:null};var b=E,g=["bsPrefix","className","bg","text","border","body","children","as"],h=(0,f.Z)("h5"),N=(0,f.Z)("h6"),Z=(0,n.Z)("card-body"),x=(0,n.Z)("card-title",{Component:h}),k=(0,n.Z)("card-subtitle",{Component:N}),y=(0,n.Z)("card-link",{Component:"a"}),D=(0,n.Z)("card-text",{Component:"p"}),P=(0,n.Z)("card-header"),w=(0,n.Z)("card-footer"),C=(0,n.Z)("card-img-overlay"),j=r.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,c=e.bg,l=e.text,s=e.border,o=e.body,f=e.children,p=e.as,E=void 0===p?"div":p,b=(0,m.Z)(e,g),h=(0,u.vE)(a,"card"),N=(0,r.useMemo)((function(){return{cardHeaderBsPrefix:h+"-header"}}),[h]);return r.createElement(v.Z.Provider,{value:N},r.createElement(E,(0,i.Z)({ref:t},b,{className:d()(n,h,c&&"bg-"+c,l&&"text-"+l,s&&"border-"+s)}),o?r.createElement(Z,null,f):f))}));j.displayName="Card",j.defaultProps={body:!1},j.Img=b,j.Title=x,j.Subtitle=k,j.Body=Z,j.Link=y,j.Text=D,j.Header=P,j.Footer=w,j.ImgOverlay=C;var S=j,I=a(5444),R=a(2007),T=function(e){return r.createElement("div",{className:"d-flex justify-content-center align-items-center pb-2 card-img-top-div"},r.createElement("img",e))};var _=function(e){var t=e.title,a=e.imgSrc,n=e.startDates,c=e.endDates,l=e.link;return r.createElement(S,{className:"bg-light text-center mb-3"},r.createElement(S.Img,{as:T,src:a,variant:"top"}),r.createElement(S.Body,{className:"d-flex flex-column justify-content-center"},r.createElement(S.Title,{className:"text-dark"},t),r.createElement(S.Subtitle,{className:"text-muted small"},r.createElement(R.Z,{startDates:n,endDates:c}))),r.createElement(I.Link,{to:l,className:"stretched-link"}))};function B(e){var t=e.data.allMarkdownRemark.edges;return r.createElement(l.Z,{active:"projects"},r.createElement(s.Z,{title:"Projects"}),r.createElement("div",{className:"pt-5"},r.createElement("h1",{className:"text-center text-light"},"Projects"),r.createElement(c,{className:"d-flex flex-row flex-wrap justify-content-center pt-3"},t.map((function(e){return r.createElement(_,{key:e.node.id,title:e.node.frontmatter.title,link:e.node.frontmatter.slug,startDates:e.node.frontmatter.startDates,endDates:e.node.frontmatter.endDates,imgSrc:e.node.frontmatter.image.childImageSharp.fluid.src})})))))}}}]);
//# sourceMappingURL=component---src-pages-projects-js-2db722fb8da252251c19.js.map