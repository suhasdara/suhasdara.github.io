"use strict";(self.webpackChunkthe_suhas_space=self.webpackChunkthe_suhas_space||[]).push([[425],{2623:function(e,t,a){var n=a(7462),r=a(3366),l=a(5900),m=a.n(l),s=a(7294),c=a(9541),i=["bsPrefix","variant","pill","className","as"],o=s.forwardRef((function(e,t){var a=e.bsPrefix,l=e.variant,o=e.pill,f=e.className,u=e.as,d=void 0===u?"span":u,p=(0,r.Z)(e,i),E=(0,c.vE)(a,"badge");return s.createElement(d,(0,n.Z)({ref:t},p,{className:m()(f,E,o&&E+"-pill",l&&E+"-"+l)}))}));o.displayName="Badge",o.defaultProps={pill:!1},t.Z=o},2007:function(e,t,a){var n=a(7294),r=function(e){return new Date(e).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})};t.Z=function(e){var t=e.startDates,a=e.endDates;return n.createElement(n.Fragment,null,t.map((function(e,l){return n.createElement("span",{key:l},n.createElement("span",{className:"d-inline-block"},r(e)),n.createElement("span",{className:"d-inline-block"}," - "),n.createElement("span",{className:"d-inline-block"},"2099-12-31T00:00:00.000Z"===a[l]?"Current":r(a[l]),l!==t.length-1&&","),l!==t.length-1&&n.createElement("span",{className:"d-inline-block"}," and "))})))}},6631:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var n=a(7294),r=a(2623),l=a(7506),m=a(3751),s=a(2007);function c(e){var t=e.data.markdownRemark;return n.createElement(l.Z,null,n.createElement(m.Z,{title:t.frontmatter.title}),n.createElement("div",{className:"pt-5"},n.createElement("h1",{className:"text-light mb-3"},t.frontmatter.title),n.createElement("h4",{className:"text-muted mb-3"},n.createElement(s.Z,{startDates:t.frontmatter.startDates,endDates:t.frontmatter.endDates})),n.createElement("div",{className:"mb-1"},n.createElement("p",{className:"d-flex align-items-center mb-0"},"Company: ",n.createElement("a",{href:t.frontmatter.companyLink,rel:"noopener noreferrer",target:"_blank",className:"d-inline-flex align-items-center"},n.createElement("img",{src:t.frontmatter.image.childImageSharp.fluid.src,alt:t.frontmatter.title,height:16})," ",t.frontmatter.company))),t.frontmatter.languages&&n.createElement("div",{className:"mb-1"},n.createElement("p",{className:"d-flex flex-wrap align-items-center mb-0"},"Languages used: ",t.frontmatter.languages.map((function(e,t){return n.createElement("span",{key:t},n.createElement(r.Z,{pill:!0,variant:"light"},e)," ")})))),t.frontmatter.tools&&n.createElement("div",{className:"mb-1"},n.createElement("p",{className:"d-flex flex-wrap align-items-center mb-0"},"Tools used: ",t.frontmatter.tools.map((function(e,t){return n.createElement("span",{key:t},n.createElement(r.Z,{pill:!0,variant:"light"},e)," ")})))),n.createElement("div",{className:"mt-4",dangerouslySetInnerHTML:{__html:t.html}})))}}}]);
//# sourceMappingURL=component---src-templates-experience-temp-js-a574eb6bc7c200989f30.js.map