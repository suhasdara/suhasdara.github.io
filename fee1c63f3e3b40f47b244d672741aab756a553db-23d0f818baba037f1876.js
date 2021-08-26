"use strict";(self.webpackChunkthe_suhas_space=self.webpackChunkthe_suhas_space||[]).push([[719],{6594:function(e,a,t){var s=t(7462),l=t(3366),i=t(5900),r=t.n(i),n=t(7294),o=t(9541),c=t(6306),d=["bsPrefix","variant","size","active","className","block","type","as"],m=n.forwardRef((function(e,a){var t=e.bsPrefix,i=e.variant,m=e.size,f=e.active,u=e.className,v=e.block,b=e.type,p=e.as,x=(0,l.Z)(e,d),N=(0,o.vE)(t,"btn"),E=r()(u,N,f&&"active",i&&N+"-"+i,v&&N+"-block",m&&N+"-"+m);if(x.href)return n.createElement(c.Z,(0,s.Z)({},x,{as:p,ref:a,className:r()(E,x.disabled&&"disabled")}));a&&(x.ref=a),b?x.type=b:p||(x.type="button");var y=p||"button";return n.createElement(y,(0,s.Z)({},x,{className:E}))}));m.displayName="Button",m.defaultProps={variant:"primary",active:!1,disabled:!1},a.Z=m},7408:function(e,a,t){var s=t(7462),l=t(3366),i=t(5900),r=t.n(i),n=t(7294),o=t(9541),c=["bsPrefix","className","as"],d=["xl","lg","md","sm","xs"],m=n.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,m=e.as,f=void 0===m?"div":m,u=(0,l.Z)(e,c),v=(0,o.vE)(t,"col"),b=[],p=[];return d.forEach((function(e){var a,t,s,l=u[e];if(delete u[e],"object"==typeof l&&null!=l){var i=l.span;a=void 0===i||i,t=l.offset,s=l.order}else a=l;var r="xs"!==e?"-"+e:"";a&&b.push(!0===a?""+v+r:""+v+r+"-"+a),null!=s&&p.push("order"+r+"-"+s),null!=t&&p.push("offset"+r+"-"+t)})),b.length||b.push(v),n.createElement(f,(0,s.Z)({},u,{ref:a,className:r().apply(void 0,[i].concat(b,p))}))}));m.displayName="Col",a.Z=m},6187:function(e,a,t){var s=t(7462),l=t(3366),i=t(5900),r=t.n(i),n=t(7294),o=t(9541),c=["bsPrefix","fluid","as","className"],d=n.forwardRef((function(e,a){var t=e.bsPrefix,i=e.fluid,d=e.as,m=void 0===d?"div":d,f=e.className,u=(0,l.Z)(e,c),v=(0,o.vE)(t,"container"),b="string"==typeof i?"-"+i:"-fluid";return n.createElement(m,(0,s.Z)({ref:a},u,{className:r()(f,i?""+v+b:v)}))}));d.displayName="Container",d.defaultProps={fluid:!1},a.Z=d},6669:function(e,a,t){t.d(a,{Z:function(){return ee}});var s=t(7294),l=t(7462),i=t(3366),r=t(5900),n=t.n(r),o=(t(7526),["as","className","type","tooltip"]),c=s.forwardRef((function(e,a){var t=e.as,r=void 0===t?"div":t,c=e.className,d=e.type,m=void 0===d?"valid":d,f=e.tooltip,u=void 0!==f&&f,v=(0,i.Z)(e,o);return s.createElement(r,(0,l.Z)({},v,{ref:a,className:n()(c,m+"-"+(u?"tooltip":"feedback"))}))}));c.displayName="Feedback";var d=c,m=s.createContext({controlId:void 0}),f=t(9541),u=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],v=s.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,o=e.bsCustomPrefix,c=e.className,d=e.type,v=void 0===d?"checkbox":d,b=e.isValid,p=void 0!==b&&b,x=e.isInvalid,N=void 0!==x&&x,E=e.isStatic,y=e.as,h=void 0===y?"input":y,P=(0,i.Z)(e,u),Z=(0,s.useContext)(m),C=Z.controlId,I=Z.custom?[o,"custom-control-input"]:[r,"form-check-input"],w=I[0],F=I[1];return r=(0,f.vE)(w,F),s.createElement(h,(0,l.Z)({},P,{ref:a,type:v,id:t||C,className:n()(c,r,p&&"is-valid",N&&"is-invalid",E&&"position-static")}))}));v.displayName="FormCheckInput";var b=v,p=["bsPrefix","bsCustomPrefix","className","htmlFor"],x=s.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bsCustomPrefix,o=e.className,c=e.htmlFor,d=(0,i.Z)(e,p),u=(0,s.useContext)(m),v=u.controlId,b=u.custom?[r,"custom-control-label"]:[t,"form-check-label"],x=b[0],N=b[1];return t=(0,f.vE)(x,N),s.createElement("label",(0,l.Z)({},d,{ref:a,htmlFor:c||v,className:n()(o,t)}))}));x.displayName="FormCheckLabel";var N=x,E=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],y=s.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,o=e.bsCustomPrefix,c=e.inline,u=void 0!==c&&c,v=e.disabled,p=void 0!==v&&v,x=e.isValid,y=void 0!==x&&x,h=e.isInvalid,P=void 0!==h&&h,Z=e.feedbackTooltip,C=void 0!==Z&&Z,I=e.feedback,w=e.className,F=e.style,k=e.title,g=void 0===k?"":k,R=e.type,V=void 0===R?"checkbox":R,L=e.label,S=e.children,z=e.custom,O=e.as,_=void 0===O?"input":O,M=(0,i.Z)(e,E),T="switch"===V||z,A=T?[o,"custom-control"]:[r,"form-check"],H=A[0],j=A[1];r=(0,f.vE)(H,j);var B=(0,s.useContext)(m).controlId,G=(0,s.useMemo)((function(){return{controlId:t||B,custom:T}}),[B,T,t]),q=T||null!=L&&!1!==L&&!S,D=s.createElement(b,(0,l.Z)({},M,{type:"switch"===V?"checkbox":V,ref:a,isValid:y,isInvalid:P,isStatic:!q,disabled:p,as:_}));return s.createElement(m.Provider,{value:G},s.createElement("div",{style:F,className:n()(w,r,T&&"custom-"+V,u&&r+"-inline")},S||s.createElement(s.Fragment,null,D,q&&s.createElement(N,{title:g},L),(y||P)&&s.createElement(d,{type:y?"valid":"invalid",tooltip:C},I))))}));y.displayName="FormCheck",y.Input=b,y.Label=N;var h=y,P=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],Z=s.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,o=e.bsCustomPrefix,c=e.className,d=e.isValid,u=e.isInvalid,v=e.lang,b=e.as,p=void 0===b?"input":b,x=(0,i.Z)(e,P),N=(0,s.useContext)(m),E=N.controlId,y=N.custom?[o,"custom-file-input"]:[r,"form-control-file"],h=y[0],Z=y[1];return r=(0,f.vE)(h,Z),s.createElement(p,(0,l.Z)({},x,{ref:a,id:t||E,type:"file",lang:v,className:n()(c,r,d&&"is-valid",u&&"is-invalid")}))}));Z.displayName="FormFileInput";var C=Z,I=["bsPrefix","bsCustomPrefix","className","htmlFor"],w=s.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bsCustomPrefix,o=e.className,c=e.htmlFor,d=(0,i.Z)(e,I),u=(0,s.useContext)(m),v=u.controlId,b=u.custom?[r,"custom-file-label"]:[t,"form-file-label"],p=b[0],x=b[1];return t=(0,f.vE)(p,x),s.createElement("label",(0,l.Z)({},d,{ref:a,htmlFor:c||v,className:n()(o,t),"data-browse":d["data-browse"]}))}));w.displayName="FormFileLabel";var F=w,k=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],g=s.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,o=e.bsCustomPrefix,c=e.disabled,u=void 0!==c&&c,v=e.isValid,b=void 0!==v&&v,p=e.isInvalid,x=void 0!==p&&p,N=e.feedbackTooltip,E=void 0!==N&&N,y=e.feedback,h=e.className,P=e.style,Z=e.label,I=e.children,w=e.custom,g=e.lang,R=e["data-browse"],V=e.as,L=void 0===V?"div":V,S=e.inputAs,z=void 0===S?"input":S,O=(0,i.Z)(e,k),_=w?[o,"custom"]:[r,"form-file"],M=_[0],T=_[1];r=(0,f.vE)(M,T);var A=(0,s.useContext)(m).controlId,H=(0,s.useMemo)((function(){return{controlId:t||A,custom:w}}),[A,w,t]),j=null!=Z&&!1!==Z&&!I,B=s.createElement(C,(0,l.Z)({},O,{ref:a,isValid:b,isInvalid:x,disabled:u,as:z,lang:g}));return s.createElement(m.Provider,{value:H},s.createElement(L,{style:P,className:n()(h,r,w&&"custom-file")},I||s.createElement(s.Fragment,null,w?s.createElement(s.Fragment,null,B,j&&s.createElement(F,{"data-browse":R},Z)):s.createElement(s.Fragment,null,j&&s.createElement(F,null,Z),B),(b||x)&&s.createElement(d,{type:b?"valid":"invalid",tooltip:E},y))))}));g.displayName="FormFile",g.Input=C,g.Label=F;var R=g,V=(t(2473),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),L=s.forwardRef((function(e,a){var t,r,o=e.bsPrefix,c=e.bsCustomPrefix,d=e.type,u=e.size,v=e.htmlSize,b=e.id,p=e.className,x=e.isValid,N=void 0!==x&&x,E=e.isInvalid,y=void 0!==E&&E,h=e.plaintext,P=e.readOnly,Z=e.custom,C=e.as,I=void 0===C?"input":C,w=(0,i.Z)(e,V),F=(0,s.useContext)(m).controlId,k=Z?[c,"custom"]:[o,"form-control"],g=k[0],R=k[1];if(o=(0,f.vE)(g,R),h)(r={})[o+"-plaintext"]=!0,t=r;else if("file"===d){var L;(L={})[o+"-file"]=!0,t=L}else if("range"===d){var S;(S={})[o+"-range"]=!0,t=S}else if("select"===I&&Z){var z;(z={})[o+"-select"]=!0,z[o+"-select-"+u]=u,t=z}else{var O;(O={})[o]=!0,O[o+"-"+u]=u,t=O}return s.createElement(I,(0,l.Z)({},w,{type:d,size:v,ref:a,readOnly:P,id:b||F,className:n()(p,t,N&&"is-valid",y&&"is-invalid")}))}));L.displayName="FormControl";var S=Object.assign(L,{Feedback:d}),z=["bsPrefix","className","children","controlId","as"],O=s.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.children,c=e.controlId,d=e.as,u=void 0===d?"div":d,v=(0,i.Z)(e,z);t=(0,f.vE)(t,"form-group");var b=(0,s.useMemo)((function(){return{controlId:c}}),[c]);return s.createElement(m.Provider,{value:b},s.createElement(u,(0,l.Z)({},v,{ref:a,className:n()(r,t)}),o))}));O.displayName="FormGroup";var _=O,M=t(7408),T=["as","bsPrefix","column","srOnly","className","htmlFor"],A=s.forwardRef((function(e,a){var t=e.as,r=void 0===t?"label":t,o=e.bsPrefix,c=e.column,d=e.srOnly,u=e.className,v=e.htmlFor,b=(0,i.Z)(e,T),p=(0,s.useContext)(m).controlId;o=(0,f.vE)(o,"form-label");var x="col-form-label";"string"==typeof c&&(x=x+" "+x+"-"+c);var N=n()(u,o,d&&"sr-only",c&&x);return v=v||p,c?s.createElement(M.Z,(0,l.Z)({ref:a,as:"label",className:N,htmlFor:v},b)):s.createElement(r,(0,l.Z)({ref:a,className:N,htmlFor:v},b))}));A.displayName="FormLabel",A.defaultProps={column:!1,srOnly:!1};var H=A,j=["bsPrefix","className","as","muted"],B=s.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.as,c=void 0===o?"small":o,d=e.muted,m=(0,i.Z)(e,j);return t=(0,f.vE)(t,"form-text"),s.createElement(c,(0,l.Z)({},m,{ref:a,className:n()(r,t,d&&"text-muted")}))}));B.displayName="FormText";var G=B,q=s.forwardRef((function(e,a){return s.createElement(h,(0,l.Z)({},e,{ref:a,type:"switch"}))}));q.displayName="Switch",q.Input=h.Input,q.Label=h.Label;var D=q,J=t(8870),K=["bsPrefix","inline","className","validated","as"],Q=(0,J.Z)("form-row"),U=s.forwardRef((function(e,a){var t=e.bsPrefix,r=e.inline,o=e.className,c=e.validated,d=e.as,m=void 0===d?"form":d,u=(0,i.Z)(e,K);return t=(0,f.vE)(t,"form"),s.createElement(m,(0,l.Z)({},u,{ref:a,className:n()(o,c&&"was-validated",r&&t+"-inline")}))}));U.displayName="Form",U.defaultProps={inline:!1},U.Row=Q,U.Group=_,U.Control=S,U.Check=h,U.File=R,U.Switch=D,U.Label=H,U.Text=G;var W=U,X=t(6594),Y=t(5401),$=t(7133);var ee=function(e){var a=e.text,t=e.className,l=(0,s.useState)(!1),i=l[0],r=l[1];return s.createElement(s.Fragment,null,s.createElement(X.Z,{variant:"light",onClick:function(){return r(!i)},className:t},a),s.createElement(Y.Z,{centered:!0,show:i,onHide:function(){return r(!i)},dialogClassName:"modal-subscribe"},s.createElement($.Z,{className:"bg-light d-flex align-items-center",closeButton:!0},s.createElement("h4",{className:"bg-light text-dark mb-0"},"Subscribe to new blog posts")),s.createElement(W,{action:"https://gmail.us5.list-manage.com/subscribe/post?u=626abcd702a19dae66e0ec0f5&id=2c3a2cbe64",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",className:"mb-1 d-flex flex-column align-items-center",target:"_blank",noValidate:!0,onSubmit:function(){return r(!i)}},s.createElement(W.Label,{htmlFor:"mce-EMAIL",className:"d-none",visuallyHidden:!0},"Email"),s.createElement(W.Control,{type:"email",name:"EMAIL",className:"d-inline m-2",id:"mce-EMAIL",placeholder:"name@example.com",style:{width:"90%"},required:!0}),s.createElement("div",{style:{position:"absolute",left:-5e3,ariaHidden:!0}},s.createElement(W.Control,{type:"text",name:"b_626abcd702a19dae66e0ec0f5_2c3a2cbe64",tabIndex:"-1"})),s.createElement(X.Z,{type:"submit",name:"subscribe",variant:"dark",id:"mc-embedded-subscribe"},"Subscribe"))))}}}]);
//# sourceMappingURL=fee1c63f3e3b40f47b244d672741aab756a553db-23d0f818baba037f1876.js.map