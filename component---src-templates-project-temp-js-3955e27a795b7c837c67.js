(self.webpackChunkthe_suhas_space=self.webpackChunkthe_suhas_space||[]).push([[751],{2623:function(e,t,a){"use strict";var n=a(2122),r=a(9756),l=a(5900),s=a.n(l),m=a(7294),c=a(9541),i=m.forwardRef((function(e,t){var a=e.bsPrefix,l=e.variant,i=e.pill,o=e.className,u=e.as,f=void 0===u?"span":u,d=(0,r.Z)(e,["bsPrefix","variant","pill","className","as"]),p=(0,c.vE)(a,"badge");return m.createElement(f,(0,n.Z)({ref:t},d,{className:s()(o,p,i&&p+"-pill",l&&p+"-"+l)}))}));i.displayName="Badge",i.defaultProps={pill:!1},t.Z=i},2007:function(e,t,a){"use strict";var n=a(7294),r=function(e){return new Date(e).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})};t.Z=function(e){var t=e.startDates,a=e.endDates;return console.log(t),console.log(a),n.createElement(n.Fragment,null,t.map((function(e,l){return n.createElement(n.Fragment,null,n.createElement("span",{className:"d-inline-block"},r(e)),n.createElement("span",{className:"d-inline-block"}," - "),n.createElement("span",{className:"d-inline-block"},r(a[l]),l!==t.length-1&&","," "))})))}},7086:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return i}});var n=a(7294),r=a(2623),l=a(3246),s=a(3751),m=a(2007),c=a(3855);function i(e){var t=e.data.markdownRemark;return n.createElement(l.Z,null,n.createElement(s.Z,{title:t.frontmatter.title}),n.createElement("div",{className:"pt-5"},n.createElement("h1",{className:"text-light mb-3"},t.frontmatter.title),n.createElement("h4",{className:"text-muted small mb-3"},n.createElement(m.Z,{startDates:t.frontmatter.startDates,endDates:t.frontmatter.endDates})),t.frontmatter.languages&&n.createElement("div",{className:"mb-1"},n.createElement("p",{className:"d-flex align-items-center mb-0"},"Languages used: ",t.frontmatter.languages.map((function(e){return n.createElement(n.Fragment,null,n.createElement(r.Z,{pill:!0,variant:"light"},e)," ")})))),t.frontmatter.tools&&n.createElement("div",{className:"mb-1"},n.createElement("p",{className:"d-flex align-items-center mb-0"},"Tools used: ",t.frontmatter.tools.map((function(e){return n.createElement(n.Fragment,null,n.createElement(r.Z,{pill:!0,variant:"light"},e)," ")})))),n.createElement("div",{className:"mb-2"},n.createElement("p",{className:"mb-0"},n.createElement("a",{href:t.frontmatter.repository,rel:"noopener noreferrer",target:"_blank"},"Link to Repository"))),n.createElement("div",{className:"mb-1 text-center"},n.createElement(c.Z,{src:t.frontmatter.image.childImageSharp.fluid.src,alt:t.frontmatter.title,height:300})),n.createElement("div",{className:"mt-4",dangerouslySetInnerHTML:{__html:t.html}})))}}}]);
//# sourceMappingURL=component---src-templates-project-temp-js-3955e27a795b7c837c67.js.map