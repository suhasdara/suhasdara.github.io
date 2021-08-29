"use strict";(self.webpackChunkthe_suhas_space=self.webpackChunkthe_suhas_space||[]).push([[679],{6594:function(e,a,t){var l=t(7462),s=t(3366),r=t(5900),i=t.n(r),n=t(7294),o=t(9541),c=t(6306),d=["bsPrefix","variant","size","active","className","block","type","as"],m=n.forwardRef((function(e,a){var t=e.bsPrefix,r=e.variant,m=e.size,f=e.active,u=e.className,v=e.block,b=e.type,p=e.as,x=(0,s.Z)(e,d),N=(0,o.vE)(t,"btn"),E=i()(u,N,f&&"active",r&&N+"-"+r,v&&N+"-block",m&&N+"-"+m);if(x.href)return n.createElement(c.Z,(0,l.Z)({},x,{as:p,ref:a,className:i()(E,x.disabled&&"disabled")}));a&&(x.ref=a),b?x.type=b:p||(x.type="button");var h=p||"button";return n.createElement(h,(0,l.Z)({},x,{className:E}))}));m.displayName="Button",m.defaultProps={variant:"primary",active:!1,disabled:!1},a.Z=m},7408:function(e,a,t){var l=t(7462),s=t(3366),r=t(5900),i=t.n(r),n=t(7294),o=t(9541),c=["bsPrefix","className","as"],d=["xl","lg","md","sm","xs"],m=n.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,m=e.as,f=void 0===m?"div":m,u=(0,s.Z)(e,c),v=(0,o.vE)(t,"col"),b=[],p=[];return d.forEach((function(e){var a,t,l,s=u[e];if(delete u[e],"object"==typeof s&&null!=s){var r=s.span;a=void 0===r||r,t=s.offset,l=s.order}else a=s;var i="xs"!==e?"-"+e:"";a&&b.push(!0===a?""+v+i:""+v+i+"-"+a),null!=l&&p.push("order"+i+"-"+l),null!=t&&p.push("offset"+i+"-"+t)})),b.length||b.push(v),n.createElement(f,(0,l.Z)({},u,{ref:a,className:i().apply(void 0,[r].concat(b,p))}))}));m.displayName="Col",a.Z=m},6187:function(e,a,t){var l=t(7462),s=t(3366),r=t(5900),i=t.n(r),n=t(7294),o=t(9541),c=["bsPrefix","fluid","as","className"],d=n.forwardRef((function(e,a){var t=e.bsPrefix,r=e.fluid,d=e.as,m=void 0===d?"div":d,f=e.className,u=(0,s.Z)(e,c),v=(0,o.vE)(t,"container"),b="string"==typeof r?"-"+r:"-fluid";return n.createElement(m,(0,l.Z)({ref:a},u,{className:i()(f,r?""+v+b:v)}))}));d.displayName="Container",d.defaultProps={fluid:!1},a.Z=d},6669:function(e,a,t){t.d(a,{Z:function(){return ee}});var l=t(7294),s=t(7462),r=t(3366),i=t(5900),n=t.n(i),o=(t(7526),["as","className","type","tooltip"]),c=l.forwardRef((function(e,a){var t=e.as,i=void 0===t?"div":t,c=e.className,d=e.type,m=void 0===d?"valid":d,f=e.tooltip,u=void 0!==f&&f,v=(0,r.Z)(e,o);return l.createElement(i,(0,s.Z)({},v,{ref:a,className:n()(c,m+"-"+(u?"tooltip":"feedback"))}))}));c.displayName="Feedback";var d=c,m=l.createContext({controlId:void 0}),f=t(9541),u=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],v=l.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,o=e.bsCustomPrefix,c=e.className,d=e.type,v=void 0===d?"checkbox":d,b=e.isValid,p=void 0!==b&&b,x=e.isInvalid,N=void 0!==x&&x,E=e.isStatic,h=e.as,y=void 0===h?"input":h,P=(0,r.Z)(e,u),Z=(0,l.useContext)(m),w=Z.controlId,C=Z.custom?[o,"custom-control-input"]:[i,"form-check-input"],I=C[0],g=C[1];return i=(0,f.vE)(I,g),l.createElement(y,(0,s.Z)({},P,{ref:a,type:v,id:t||w,className:n()(c,i,p&&"is-valid",N&&"is-invalid",E&&"position-static")}))}));v.displayName="FormCheckInput";var b=v,p=["bsPrefix","bsCustomPrefix","className","htmlFor"],x=l.forwardRef((function(e,a){var t=e.bsPrefix,i=e.bsCustomPrefix,o=e.className,c=e.htmlFor,d=(0,r.Z)(e,p),u=(0,l.useContext)(m),v=u.controlId,b=u.custom?[i,"custom-control-label"]:[t,"form-check-label"],x=b[0],N=b[1];return t=(0,f.vE)(x,N),l.createElement("label",(0,s.Z)({},d,{ref:a,htmlFor:c||v,className:n()(o,t)}))}));x.displayName="FormCheckLabel";var N=x,E=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],h=l.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,o=e.bsCustomPrefix,c=e.inline,u=void 0!==c&&c,v=e.disabled,p=void 0!==v&&v,x=e.isValid,h=void 0!==x&&x,y=e.isInvalid,P=void 0!==y&&y,Z=e.feedbackTooltip,w=void 0!==Z&&Z,C=e.feedback,I=e.className,g=e.style,F=e.title,k=void 0===F?"":F,R=e.type,S=void 0===R?"checkbox":R,V=e.label,L=e.children,z=e.custom,O=e.as,_=void 0===O?"input":O,M=(0,r.Z)(e,E),T="switch"===S||z,A=T?[o,"custom-control"]:[i,"form-check"],H=A[0],j=A[1];i=(0,f.vE)(H,j);var B=(0,l.useContext)(m).controlId,G=(0,l.useMemo)((function(){return{controlId:t||B,custom:T}}),[B,T,t]),q=T||null!=V&&!1!==V&&!L,Y=l.createElement(b,(0,s.Z)({},M,{type:"switch"===S?"checkbox":S,ref:a,isValid:h,isInvalid:P,isStatic:!q,disabled:p,as:_}));return l.createElement(m.Provider,{value:G},l.createElement("div",{style:g,className:n()(I,i,T&&"custom-"+S,u&&i+"-inline")},L||l.createElement(l.Fragment,null,Y,q&&l.createElement(N,{title:k},V),(h||P)&&l.createElement(d,{type:h?"valid":"invalid",tooltip:w},C))))}));h.displayName="FormCheck",h.Input=b,h.Label=N;var y=h,P=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],Z=l.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,o=e.bsCustomPrefix,c=e.className,d=e.isValid,u=e.isInvalid,v=e.lang,b=e.as,p=void 0===b?"input":b,x=(0,r.Z)(e,P),N=(0,l.useContext)(m),E=N.controlId,h=N.custom?[o,"custom-file-input"]:[i,"form-control-file"],y=h[0],Z=h[1];return i=(0,f.vE)(y,Z),l.createElement(p,(0,s.Z)({},x,{ref:a,id:t||E,type:"file",lang:v,className:n()(c,i,d&&"is-valid",u&&"is-invalid")}))}));Z.displayName="FormFileInput";var w=Z,C=["bsPrefix","bsCustomPrefix","className","htmlFor"],I=l.forwardRef((function(e,a){var t=e.bsPrefix,i=e.bsCustomPrefix,o=e.className,c=e.htmlFor,d=(0,r.Z)(e,C),u=(0,l.useContext)(m),v=u.controlId,b=u.custom?[i,"custom-file-label"]:[t,"form-file-label"],p=b[0],x=b[1];return t=(0,f.vE)(p,x),l.createElement("label",(0,s.Z)({},d,{ref:a,htmlFor:c||v,className:n()(o,t),"data-browse":d["data-browse"]}))}));I.displayName="FormFileLabel";var g=I,F=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],k=l.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,o=e.bsCustomPrefix,c=e.disabled,u=void 0!==c&&c,v=e.isValid,b=void 0!==v&&v,p=e.isInvalid,x=void 0!==p&&p,N=e.feedbackTooltip,E=void 0!==N&&N,h=e.feedback,y=e.className,P=e.style,Z=e.label,C=e.children,I=e.custom,k=e.lang,R=e["data-browse"],S=e.as,V=void 0===S?"div":S,L=e.inputAs,z=void 0===L?"input":L,O=(0,r.Z)(e,F),_=I?[o,"custom"]:[i,"form-file"],M=_[0],T=_[1];i=(0,f.vE)(M,T);var A=(0,l.useContext)(m).controlId,H=(0,l.useMemo)((function(){return{controlId:t||A,custom:I}}),[A,I,t]),j=null!=Z&&!1!==Z&&!C,B=l.createElement(w,(0,s.Z)({},O,{ref:a,isValid:b,isInvalid:x,disabled:u,as:z,lang:k}));return l.createElement(m.Provider,{value:H},l.createElement(V,{style:P,className:n()(y,i,I&&"custom-file")},C||l.createElement(l.Fragment,null,I?l.createElement(l.Fragment,null,B,j&&l.createElement(g,{"data-browse":R},Z)):l.createElement(l.Fragment,null,j&&l.createElement(g,null,Z),B),(b||x)&&l.createElement(d,{type:b?"valid":"invalid",tooltip:E},h))))}));k.displayName="FormFile",k.Input=w,k.Label=g;var R=k,S=(t(2473),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),V=l.forwardRef((function(e,a){var t,i,o=e.bsPrefix,c=e.bsCustomPrefix,d=e.type,u=e.size,v=e.htmlSize,b=e.id,p=e.className,x=e.isValid,N=void 0!==x&&x,E=e.isInvalid,h=void 0!==E&&E,y=e.plaintext,P=e.readOnly,Z=e.custom,w=e.as,C=void 0===w?"input":w,I=(0,r.Z)(e,S),g=(0,l.useContext)(m).controlId,F=Z?[c,"custom"]:[o,"form-control"],k=F[0],R=F[1];if(o=(0,f.vE)(k,R),y)(i={})[o+"-plaintext"]=!0,t=i;else if("file"===d){var V;(V={})[o+"-file"]=!0,t=V}else if("range"===d){var L;(L={})[o+"-range"]=!0,t=L}else if("select"===C&&Z){var z;(z={})[o+"-select"]=!0,z[o+"-select-"+u]=u,t=z}else{var O;(O={})[o]=!0,O[o+"-"+u]=u,t=O}return l.createElement(C,(0,s.Z)({},I,{type:d,size:v,ref:a,readOnly:P,id:b||g,className:n()(p,t,N&&"is-valid",h&&"is-invalid")}))}));V.displayName="FormControl";var L=Object.assign(V,{Feedback:d}),z=["bsPrefix","className","children","controlId","as"],O=l.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,o=e.children,c=e.controlId,d=e.as,u=void 0===d?"div":d,v=(0,r.Z)(e,z);t=(0,f.vE)(t,"form-group");var b=(0,l.useMemo)((function(){return{controlId:c}}),[c]);return l.createElement(m.Provider,{value:b},l.createElement(u,(0,s.Z)({},v,{ref:a,className:n()(i,t)}),o))}));O.displayName="FormGroup";var _=O,M=t(7408),T=["as","bsPrefix","column","srOnly","className","htmlFor"],A=l.forwardRef((function(e,a){var t=e.as,i=void 0===t?"label":t,o=e.bsPrefix,c=e.column,d=e.srOnly,u=e.className,v=e.htmlFor,b=(0,r.Z)(e,T),p=(0,l.useContext)(m).controlId;o=(0,f.vE)(o,"form-label");var x="col-form-label";"string"==typeof c&&(x=x+" "+x+"-"+c);var N=n()(u,o,d&&"sr-only",c&&x);return v=v||p,c?l.createElement(M.Z,(0,s.Z)({ref:a,as:"label",className:N,htmlFor:v},b)):l.createElement(i,(0,s.Z)({ref:a,className:N,htmlFor:v},b))}));A.displayName="FormLabel",A.defaultProps={column:!1,srOnly:!1};var H=A,j=["bsPrefix","className","as","muted"],B=l.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,o=e.as,c=void 0===o?"small":o,d=e.muted,m=(0,r.Z)(e,j);return t=(0,f.vE)(t,"form-text"),l.createElement(c,(0,s.Z)({},m,{ref:a,className:n()(i,t,d&&"text-muted")}))}));B.displayName="FormText";var G=B,q=l.forwardRef((function(e,a){return l.createElement(y,(0,s.Z)({},e,{ref:a,type:"switch"}))}));q.displayName="Switch",q.Input=y.Input,q.Label=y.Label;var Y=q,D=t(8870),J=["bsPrefix","inline","className","validated","as"],K=(0,D.Z)("form-row"),Q=l.forwardRef((function(e,a){var t=e.bsPrefix,i=e.inline,o=e.className,c=e.validated,d=e.as,m=void 0===d?"form":d,u=(0,r.Z)(e,J);return t=(0,f.vE)(t,"form"),l.createElement(m,(0,s.Z)({},u,{ref:a,className:n()(o,c&&"was-validated",i&&t+"-inline")}))}));Q.displayName="Form",Q.defaultProps={inline:!1},Q.Row=K,Q.Group=_,Q.Control=L,Q.Check=y,Q.File=R,Q.Switch=Y,Q.Label=H,Q.Text=G;var U=Q,W=t(6594),X=t(5401),$=t(7133);var ee=function(e){var a=e.text,t=e.className,s=(0,l.useState)(!1),r=s[0],i=s[1];return l.createElement(l.Fragment,null,l.createElement(W.Z,{variant:"danger",onClick:function(){return i(!r)},className:t+" font-weight-bold"},a),l.createElement(X.Z,{centered:!0,show:r,onHide:function(){return i(!r)},dialogClassName:"modal-subscribe"},l.createElement($.Z,{className:"bg-light d-flex align-items-center",closeButton:!0},l.createElement("h4",{className:"bg-light text-dark mb-0"},"Subscribe to new blog posts")),l.createElement(U,{action:"https://gmail.us5.list-manage.com/subscribe/post?u=626abcd702a19dae66e0ec0f5&id=2c3a2cbe64",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",className:"mb-1 d-flex flex-column align-items-center",target:"_blank",noValidate:!0,onSubmit:function(){return i(!r)}},l.createElement(U.Label,{htmlFor:"mce-EMAIL",className:"d-none",visuallyHidden:!0},"Email"),l.createElement(U.Control,{type:"email",name:"EMAIL",className:"d-inline m-2",id:"mce-EMAIL",placeholder:"name@example.com",style:{width:"90%"},required:!0}),l.createElement("div",{style:{position:"absolute",left:-5e3,ariaHidden:!0}},l.createElement(U.Control,{type:"text",name:"b_626abcd702a19dae66e0ec0f5_2c3a2cbe64",tabIndex:"-1"})),l.createElement(W.Z,{type:"submit",name:"subscribe",variant:"danger",className:"font-weight-bold",id:"mc-embedded-subscribe"},"Subscribe")),l.createElement("p",{className:"text-dark text-center mb-1"},l.createElement("small",null,"You can instead subscribe via ",l.createElement("a",{href:"/rss.xml"},"RSS")," elsewhere"))))}}}]);
//# sourceMappingURL=1f7a1e317deb6f679edf2553d304721106db1456-6c99e90d963f3174ecba.js.map