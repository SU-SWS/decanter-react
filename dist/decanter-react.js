/*! For license information please see decanter-react.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types"),require("react-hero-icon")):"function"==typeof define&&define.amd?define(["react","prop-types","react-hero-icon"],t):"object"==typeof exports?exports.decanterReact=t(require("react"),require("prop-types"),require("react-hero-icon")):e.decanterReact=t(e.react,e["prop-types"],e["react-hero-icon"])}(self,(function(e,t,r){return function(){var s={991:function(e,t){var r;!function(){"use strict";var s=function(){function e(){}function t(e,t){for(var r=t.length,s=0;s<r;++s)a(e,t[s])}e.prototype=Object.create(null);var r={}.hasOwnProperty,s=/\s+/;function a(e,a){if(a){var n=typeof a;"string"===n?function(e,t){for(var r=t.split(s),a=r.length,n=0;n<a;++n)e[r[n]]=!0}(e,a):Array.isArray(a)?t(e,a):"object"===n?function(e,t){for(var s in t)r.call(t,s)&&(e[s]=!!t[s])}(e,a):"number"===n&&function(e,t){e[t]=!0}(e,a)}}return function(){for(var r=arguments.length,s=Array(r),a=0;a<r;a++)s[a]=arguments[a];var n=new e;t(n,s);var l=[];for(var o in n)n[o]&&l.push(o);return l.join(" ")}}();e.exports?(s.default=s,e.exports=s):void 0===(r=function(){return s}.apply(t,[]))||(e.exports=r)}()},184:function(e,t){var r;!function(){"use strict";var s={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=typeof r;if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)&&r.length){var l=a.apply(null,r);l&&e.push(l)}else if("object"===n)for(var o in r)s.call(r,o)&&r[o]&&e.push(o)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},229:function(e){"use strict";e.exports=t},297:function(t){"use strict";t.exports=e},84:function(e){"use strict";e.exports=r}},a={};function n(e){if(a[e])return a[e].exports;var t=a[e]={exports:{}};return s[e](t,t.exports,n),t.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l={};return function(){"use strict";n.r(l),n.d(l,{Alert:function(){return g},Button:function(){return m},GlobalFooter:function(){return O},IdentityBar:function(){return k},Logo:function(){return v},SrOnlyText:function(){return N},StyledLink:function(){return j}});var e=n(297),t=n.n(e),r=n(229),s=n.n(r);const a=n(184),o=["info","warning","error","success"],i=a("su-text-white hover:su-link-no-underline"),c=a("su-text-black su-link-black-true hover:su-link-no-underline"),u=["primary","secondary","none"],p=["big","small","minimal"];function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e}).apply(this,arguments)}const m=({className:e,children:r,onClick:s,ref:a,variant:l,size:o,type:i,isDisabled:c,...m})=>{const f=n(991),b={};if(l&&u.includes(l))switch(l){case"primary":b.variant=f("su-bg-digital-red su-text-white su-border-2 su-border-digital-red su-border-solid hover:su-border-black focus:su-border-black");break;case"secondary":b.variant=f("su-bg-transparent hover:su-bg-transparent focus:su-bg-transparent su-text-digital-red hover:su-text-black focus:su-text-black su-border-2 su-border-digital-red su-border-solid hover:su-border-black focus:su-border-black");break;case"none":b.variant=f("su-bg-transparent hover:su-bg-transparent focus:su-bg-transparent")}if(o&&p.includes(o))switch(o){case"big":b.size=f("su-px-34 su-py-15 su-text-20 md:su-text-24");break;case"small":b.size=f("su-px-19 su-py-9 su-text-16 md:su-text-18");break;case"minimal":b.size=f("su-p-0");break;default:b.size=f("su-px-26 su-py-10 su-text-16 md:su-text-20")}return c&&(b.disabled=f("su-bg-black-20 su-text-black su-border-2 su-border-black-20 su-border-solid su-pointer-events-none"),b.variant=f(b.variant,{"su-bg-digital-red":!1,"su-text-digital-red":!1,"su-border-digital-red":!1,"hover:su-border-black":!1,"focus:su-border-black":!1,"su-text-white":!1})),t().createElement("button",d({className:f("su-button",b.variant,b.size,b.disabled,e),ref:a,onClick:s,type:i,disabled:c},m),r)};m.propTypes={type:s().oneOf(["button","submit","reset"]),variant:s().oneOf(u),size:s().oneOf(p),isDisabled:s().bool,onClick:s().func,className:s().oneOfType([s().string,s().array,s().object]),children:s().oneOfType([s().string,s().element,s().node])},m.defaultProps={onClick:void 0,type:"button",isDisabled:!1,ref:null};var f=n(84),b=n.n(f);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e}).apply(this,arguments)}const g=({classes:r={},children:s,ref:a,...l})=>{var u,p,d,f;const g=n(991),y={},w={height:24,width:24},[x,v]=(0,e.useState)(!1);y.wrapper=g("su-bg-foggy-light"),y.dismiss=g(c,"hover:su-text-black focus:su-text-black"),l.isLargeIcon&&(w.height=60,w.width=60);let k=t().createElement(b(),h({icon:"bell",type:"outline",className:g({"su-inline-block":l.isIconTop},r.icon)},w));if(l.isLabelTop&&(y.label=g("su-rs-mb-neg1",{"su-inline-block":!l.isIconTop}),r.icon=g(r.icon,"su-inline-block")),l.isIconTop&&!l.isLabelTop&&(y.headerIcon=g(y.headerIcon,"su-block su-rs-mb-neg1")),l.type&&o.includes(l.type))switch(l.type){case"success":y.wrapper=g("su-bg-digital-green su-text-white su-link-white"),y.body=g(i),y.dismiss=g(i),k=t().createElement(b(),h({icon:"check-circle",type:"solid",className:g(r.icon)},w));break;case"warning":y.wrapper=g("su-bg-illuminating-dark"),y.body=g(c),y.dismiss=g(c,"hover:su-text-black"),k=t().createElement(b(),h({icon:"exclamation-circle",type:"solid",className:g(r.icon)},w));break;case"info":y.wrapper=g("su-bg-digital-blue su-text-white su-link-white"),y.body=g(i),y.dismiss=g(i),k=t().createElement(b(),h({icon:"information-circle",type:"solid",className:g(r.icon)},w));break;case"error":y.wrapper=g("su-bg-digital-red su-text-white su-link-white"),y.body=g(i),y.dismiss=g(i),k=t().createElement(b(),h({icon:"ban",type:"solid",className:g(r.icon)},w))}const E=null!==(u=l.icon)&&void 0!==u?u:k,N=t().createElement(m,{className:g("su-text-17 su-uppercase su-font-bold su-inline-block su-tracking-widest",y.dismiss,r.dismiss),"aria-label":"Dismiss Alert",onClick:()=>{v(!0)},variant:"none",size:"minimal"},"Dismiss ",t().createElement(b(),{icon:"x-circle",type:"solid",className:g("su-inline-block su--mt-3 su-h-25 su-w-25")})),O=null!==(p=l.dismissBtn)&&void 0!==p?p:N;return!0===x?null:t().createElement("div",{className:g("su-alert",y.wrapper,r.wrapper),ref:a},t().createElement("div",{className:g("su-cc su-flex su-flex-wrap su-rs-pt-1 su-rs-pb-neg1 sm:su-items-center",y.container,r.container)},l.hasDismiss&&t().createElement("div",{className:g("su-order-3 su-rs-ml-1 su-h-full su-items-end su-flex-shrink su-text-right su-w-full sm:su-w-auto",y.dismissWrapper,r.dismissWrapper)},O),t().createElement("div",{className:g("su-order-1 su-rs-mr-1 su-flex su-flex-shrink su-items-center su-mb-4 su-w-full su-pb-10 md:su-w-max",y.headerWrapper,r.headerWrapper)},l.hasIcon&&!l.isIconTop&&t().createElement("span",{className:g("su-mr-5 su-inline-block",y.headerIcon,r.headerIcon)},E),l.hasLabel&&!l.isLabelTop&&t().createElement("span",{className:g("su-inline-block su-uppercase su-font-bold su-text-17 su-tracking-widest",y.label,r.label)},null!==(d=l.label)&&void 0!==d?d:"Information")),t().createElement("div",{className:g("su-order-2 su-flex-1 su-flex-grow",y.bodyWrapper,r.bodyWrapper)},l.hasIcon&&l.isIconTop&&t().createElement("span",{className:g("su-mr-5 su-text-left su-ml-0",y.headerIcon,r.headerIcon)},E),l.hasLabel&&l.isLabelTop&&t().createElement("span",{className:g("su-uppercase su-font-bold su-text-17 su-tracking-widest",y.label,r.label)},null!==(f=l.label)&&void 0!==f?f:"Information"),l.heading&&t().createElement("h3",{className:g("su-type-2 su-mb-03em",y.bodyHeading,r.bodyHeading)},l.heading),t().createElement("div",{className:g("su-text-normal",y.body,r.body)},s),l.footer&&t().createElement("div",{className:g("su-rs-mt-0",y.footerWrapper,r.footerWrapper)},l.footer))))};g.propTypes={children:s().oneOfType([s().node,s().element,s().string]),dismissBtn:s().element,icon:s().element,label:s().string,heading:s().string,footer:s().oneOfType([s().node,s().element,s().string]),type:s().oneOf(o),isLargeIcon:s().bool,isLabelTop:s().bool,isIconTop:s().bool,hasDismiss:s().bool,hasIcon:s().bool,hasLabel:s().bool,classes:s().shape({wrapper:s().oneOfType([s().string,s().object,s().array]),container:s().oneOfType([s().string,s().object,s().array]),dismissWrapper:s().oneOfType([s().string,s().object,s().array]),headerWrapper:s().oneOfType([s().string,s().object,s().array]),headerIcon:s().oneOfType([s().string,s().object,s().array]),label:s().oneOfType([s().string,s().object,s().array]),bodyWrapper:s().oneOfType([s().string,s().object,s().array]),bodyHeading:s().oneOfType([s().string,s().object,s().array]),body:s().oneOfType([s().string,s().object,s().array]),footerWrapper:s().oneOfType([s().string,s().object,s().array])})},g.defaultProps={isLargeIcon:!1,isLabelTop:!1,isIconTop:!1,hasDismiss:!0,hasLabel:!0,hasIcon:!0,ref:null};const y=["cardinal-red","digital-red","black","white"],w=["cardinal-red","black","white"],x=["short","full","stacked"],v=({className:e,...r})=>{const s=n(991),a={};let l;if(r.color&&w.includes(r.color))switch(r.color){case"cardinal-red":a.logo=s("su-text-cardinal-red");break;case"black":a.logo=s("su-text-black hover:su-text-black focus:su-text-black");break;case"white":a.logo=s("su-text-white hover:su-text-white focus:su-text-white")}if(r.type&&x.includes(r.type))switch(r.type){case"short":l="Stanford";break;case"full":l="Stanford University";break;case"stacked":l=t().createElement(t().Fragment,null,"Stanford",t().createElement("br",null),"University")}return t().createElement("a",{className:s("su-logo",a.logo,e),href:"https://www.stanford.edu"},l)};v.propTypes={color:s().oneOf(w),type:s().oneOf(x),className:s().oneOfType([s().string,s().array,s().object])},v.defaultProps={color:"cardinal-red",type:"short"};const k=({className:e,...r})=>{const s=n(991),a={};if(r.color&&y.includes(r.color))switch(r.color){case"white":a.wrapper=s("su-bg-white"),a.logo="cardinal-red";break;case"cardinal-red":a.wrapper=s("su-bg-cardinal-red"),a.logo="white";break;case"digital-red":a.wrapper=s("su-bg-digital-red"),a.logo="white";break;case"black":a.wrapper=s("su-bg-black"),a.logo="white"}return t().createElement("div",{className:s("su-identity-bar su-pt-5 su-pb-1",a.wrapper,e)},t().createElement("div",{className:"su-cc"},t().createElement(v,{className:s("su-text-20"),color:a.logo,type:"full"})))};k.propTypes={color:s().oneOf(y),className:s().oneOfType([s().string,s().array,s().object])},k.defaultProps={color:"cardinal-red"};const E=["cardinal-red","digital-red","black"],N=e=>{var r;const s=null!==(r=e.srText)&&void 0!==r?r:"(link is external)";return t().createElement("span",{className:"su-sr-only"},s)};N.propTypes={srText:s().string},N.defaultProps={srText:"(link is external)"};const O=({className:e,...r})=>{const s=n(991),a={};if(r.color&&E.includes(r.color))switch(r.color){case"cardinal-red":a.wrapper=s("su-bg-cardinal-red");break;case"digital-red":a.wrapper=s("su-bg-digital-red");break;case"black":a.wrapper=s("su-bg-black")}return t().createElement("div",{className:s("su-global-footer su-body-basefont-20 su-rs-py-1 su-text-white su-link-white hover:su-link-white focus:su-link-white",a.wrapper,e)},t().createElement("div",{className:"su-cc su-flex su-flex-col lg:su-flex-row",title:"Common Stanford resources"},t().createElement("div",{className:"su-text-center su-mt-5 su-mb-9"},t().createElement(v,{className:s("su-type-3"),type:"stacked"})),t().createElement("div",{className:"lg:su-pl-45 xl:su-pl-50 su-text-left sm:su-text-center lg:su-text-left su-flex-grow"},t().createElement("nav",{"aria-label":"global footer menu",className:"su-flex su-flex-row sm:su-flex-col su-justify-center sm:su-items-center lg:su-items-start su-mb-10 su-link-no-underline hover:su-link-underline focus:su-link-underline"},t().createElement("ul",{className:"su-list-unstyled su-mb-10 sm:su-mb-4 su-mr-19 sm:su-mr-0 su-p-0 su-text-15 md:su-text-17 2xl:su-text-18 su-flex su-flex-col sm:su-flex-row"},t().createElement("li",{className:"sm:su-mr-10 md:su-mr-20 lg:su-mr-27"},t().createElement("a",{href:"https://www.stanford.edu"},"Stanford Home",t().createElement(N,null))),t().createElement("li",{className:"sm:su-mr-10 md:su-mr-20 lg:su-mr-27"},t().createElement("a",{href:"https://visit.stanford.edu/plan/"},"Maps & Directions",t().createElement(N,null))),t().createElement("li",{className:"sm:su-mr-10 md:su-mr-20 lg:su-mr-27"},t().createElement("a",{href:"https://www.stanford.edu/search/"},"Search Stanford",t().createElement(N,null))),t().createElement("li",null,t().createElement("a",{href:"https://emergency.stanford.edu"},"Emergency Info",t().createElement(N,null)))),t().createElement("ul",{className:"su-list-unstyled su-mb-10 sm:su-mb-0 su-ml-19 sm:su-ml-0 su-p-0 su-text-15 sm:su-text-14 md:su-text-15 xl:su-text-16 su-flex su-flex-col sm:su-flex-row sm:su-link-regular"},t().createElement("li",{className:"sm:su-mr-10 md:su-mr-20 lg:su-mr-27"},t().createElement("a",{href:"https://www.stanford.edu/site/terms/",title:"Terms of use for sites"},"Terms of Use",t().createElement(N,null))),t().createElement("li",{className:"sm:su-mr-10 md:su-mr-20 lg:su-mr-27"},t().createElement("a",{href:"https://www.stanford.edu/site/privacy/",title:"Privacy and cookie policy"},"Privacy",t().createElement(N,null))),t().createElement("li",{className:"sm:su-mr-10 md:su-mr-20 lg:su-mr-27"},t().createElement("a",{href:"https://uit.stanford.edu/security/copyright-infringement",title:"Report alleged copyright infringement"},"Copyright",t().createElement(N,null))),t().createElement("li",{className:"sm:su-mr-10 md:su-mr-20 lg:su-mr-27"},t().createElement("a",{href:"https://adminguide.stanford.edu/chapter-1/subchapter-5/policy-1-5-4",title:"Ownership and use of Stanford trademarks and images"},"Trademarks",t().createElement(N,null))),t().createElement("li",{className:"sm:su-mr-10 md:su-mr-20 lg:su-mr-27"},t().createElement("a",{href:"http://exploredegrees.stanford.edu/nonacademicregulations/nondiscrimination/",title:"Non-discrimination policy"},"Non-Discrimination",t().createElement(N,null))),t().createElement("li",null,t().createElement("a",{href:"https://www.stanford.edu/site/accessibility",title:"Report web accessibility issues"},"Accessibility",t().createElement(N,null))))),t().createElement("div",{className:"su-text-13 sm:su-text-14 su-text-center lg:su-text-left"},t().createElement("span",{className:"su-whitespace-no-wrap"},"© Stanford University."),t().createElement("span",{className:"su-whitespace-no-wrap"},"  Stanford, California 94305.")))))};function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e}).apply(this,arguments)}O.propTypes={color:s().oneOf(E),className:s().oneOfType([s().string,s().array,s().object])},O.defaultProps={color:"cardinal-red"};const j=e=>{const r={};let s=Object.assign({wrapper:"su-link"},e.classes);if(s=Object.assign(s,{action:{},download:{},external:{},internal:{},jump:{},more:{},video:{},button:{wrapper:"su-button"},buttonSecondary:{wrapper:"su-button su-button--secondary"},buttonBig:{wrapper:"su-button su-button--big"}}[e.variant]),void 0!==e.animate)switch(e.animate){case"down":s.wrapper+=" "+(null==r?void 0:r.animatedDown);break;case"left":s.wrapper+=" "+(null==r?void 0:r.animatedLeft);break;case"up":s.wrapper+=" "+(null==r?void 0:r.animatedUp);break;case"topRight":s.wrapper+=" "+(null==r?void 0:r.animatedTopRight);break;default:s.wrapper+=" "+(null==r?void 0:r.animatedRight)}return t().createElement("a",T({className:s.wrapper,href:e.href},e.attributes),e.children,s.icon&&s.icon)}}(),l}()}));