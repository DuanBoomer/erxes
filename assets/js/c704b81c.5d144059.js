(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5615],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return g}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),l=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=r,m=d["".concat(u,".").concat(g)]||d[g]||p[g]||o;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62793:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var i=n(74034),r=n(79973),o=(n(67294),n(3905)),a={id:"contributing-guide",title:"Contributing guide"},s={unversionedId:"getting-started/contributing-guide",id:"getting-started/contributing-guide",isDocsHomePage:!1,title:"Contributing guide",description:"Contributing to Erxes",source:"@site/docs/getting-started/contributing-guide.md",sourceDirName:"getting-started",slug:"/getting-started/contributing-guide",permalink:"/getting-started/contributing-guide",editUrl:"https://github.com/erxes/erxes/edit/erxes-docs-blog/docs/docs/getting-started/contributing-guide.md",version:"current",lastUpdatedBy:"M. Munkhsaihan",lastUpdatedAt:1621341581,formattedLastUpdatedAt:"5/18/2021",frontMatter:{id:"contributing-guide",title:"Contributing guide"}},u=[{value:"Contributing to Erxes",id:"contributing-to-erxes",children:[{value:"Found a Bug?",id:"found-a-bug",children:[]},{value:"Missing a Feature?",id:"missing-a-feature",children:[]}]},{value:"Submission Guidelines",id:"submission-guidelines",children:[{value:"Submitting an Issue",id:"submitting-an-issue",children:[]},{value:"Your First Contribution",id:"your-first-contribution",children:[]}]},{value:"Swag for Contributions",id:"swag-for-contributions",children:[]}],l={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"contributing-to-erxes"},"Contributing to Erxes"),(0,o.kt)("p",null,"We would love for you to contribute to Erxes and help make it even better than it is today! As a contributor, here are the guidelines we would like you to follow:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#found-a-bug"},"Issues and Bugs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#missing-a-feature"},"Feature Requests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#submission-guidelines"},"Submission Guidelines")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#coding-standards"},"Coding Standards")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#commit-message-guidelines"},"Commit Message Guidelines")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#swag-for-contributions"},"Swag for Contributions"))),(0,o.kt)("h3",{id:"found-a-bug"},"Found a Bug?"),(0,o.kt)("p",null,"If you find a bug in the source code, you can help us by ",(0,o.kt)("a",{parentName:"p",href:"#submitting-an-issue"},"submitting an issue")," to our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/erxes/erxes"},"GitHub Repository"),". Even better, you can ",(0,o.kt)("a",{parentName:"p",href:"#submitting-a-pull-request-pr"},"submit a Pull Request")," with a fix."),(0,o.kt)("h3",{id:"missing-a-feature"},"Missing a Feature?"),(0,o.kt)("p",null,"You can request a new feature by ","[submitting an issue]"," to our GitHub Repository. If you would like to ",(0,o.kt)("em",{parentName:"p"},"implement")," a new feature, please submit an issue with a proposal for your work first, to be sure that we can use it. Please consider what kind of change it is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For a ",(0,o.kt)("strong",{parentName:"p"},"Major Feature"),", first open an issue and outline your proposal so that it can be discussed. This will also allow us to better coordinate our efforts, prevent duplication of work, and help you to craft the change so that it is successfully accepted into the project.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Small Features")," can be crafted and directly ",(0,o.kt)("a",{parentName:"p",href:"#submitting-a-pull-request-pr"},"submitted as a Pull Request"),"."))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"submission-guidelines"},"Submission Guidelines"),(0,o.kt)("h3",{id:"submitting-an-issue"},"Submitting an Issue"),(0,o.kt)("p",null,"Before you submit an issue, please search the issue tracker, maybe an issue for your problem already exists and the discussion might inform you of workarounds readily available."),(0,o.kt)("p",null,"We want to fix all the issues as soon as possible, but before fixing a bug we need to reproduce and confirm it. In order to reproduce bugs, we will systematically ask you to provide a minimal reproduction. Having a minimal reproducible scenario gives us a wealth of important information without going back & forth to you with additional questions."),(0,o.kt)("p",null,"A minimal reproduction allows us to quickly confirm a bug (or point out a coding problem) as well as confirm that we are fixing the right problem."),(0,o.kt)("p",null,"We will be insisting on a minimal reproduction scenario in order to save maintainers time and ultimately be able to fix more bugs. Interestingly, from our experience users often find coding problems themselves while preparing a minimal reproduction. We understand that sometimes it might be hard to extract essential bits of code from a larger code-base but we really need to isolate the problem before we can fix it."),(0,o.kt)("p",null,"Unfortunately, we are not able to investigate / fix bugs without a minimal reproduction, so if we don't hear back from you we are going to close an issue that doesn't have enough info to be reproduced."),(0,o.kt)("p",null,"You can file new issues by selecting from our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/erxes/erxes/issues/new/choose"},"new issue templates")," and filling out the issue template."),(0,o.kt)("h3",{id:"your-first-contribution"},"Your First Contribution"),(0,o.kt)("p",null,"Working on your first Pull Request? You can learn how from this ",(0,o.kt)("em",{parentName:"p"},"free")," series, ",(0,o.kt)("a",{parentName:"p",href:"https://app.egghead.io/playlists/how-to-contribute-to-an-open-source-project-on-github"},"How to Contribute to an Open Source Project on GitHub"),"."),(0,o.kt)("h2",{id:"swag-for-contributions"},"Swag for Contributions"),(0,o.kt)("p",null,"To show our appreciation, we are sending everyone who contributes to erxes a special package, which includes a t-shirt and stickers. ",(0,o.kt)("a",{parentName:"p",href:"https://erxes.io/hubspot-alternative-erxes-swag"},"Click here")," to claim your swag. (Worldwide free shipping included!)"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://erxes.io/static/images/swag.gif",alt:"erxes Swag"})))}c.isMDXComponent=!0}}]);