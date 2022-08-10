(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4543],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53962:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var r=n(74034),a=n(79973),o=(n(67294),n(3905)),i={id:"commit",title:"Commit messages conventions"},s={unversionedId:"getting-started/commit",id:"getting-started/commit",isDocsHomePage:!1,title:"Commit messages conventions",description:"Commit Message Guidelines",source:"@site/docs/getting-started/commit-message.md",sourceDirName:"getting-started",slug:"/getting-started/commit",permalink:"/getting-started/commit",editUrl:"https://github.com/erxes/erxes/edit/erxes-docs-blog/docs/docs/getting-started/commit-message.md",version:"current",lastUpdatedBy:"M. Munkhsaihan",lastUpdatedAt:1621341581,formattedLastUpdatedAt:"5/18/2021",frontMatter:{id:"commit",title:"Commit messages conventions"}},l=[{value:"Commit Message Guidelines",id:"commit-message-guidelines",children:[{value:"Commit Message Format",id:"commit-message-format",children:[]},{value:"Revert",id:"revert",children:[]},{value:"Type",id:"type",children:[]},{value:"Scope",id:"scope",children:[]},{value:"Subject",id:"subject",children:[]},{value:"Body",id:"body",children:[]},{value:"Footer",id:"footer",children:[]},{value:"Examples",id:"examples",children:[]}]}],p={toc:l};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"commit-message-guidelines"},"Commit Message Guidelines"),(0,o.kt)("p",null,"We have very precise rules over how our git commit messages can be formatted. This leads to ",(0,o.kt)("strong",{parentName:"p"},"more readable messages")," that are easy to follow when looking through the ",(0,o.kt)("strong",{parentName:"p"},"project history"),". But also, we use the git commit messages to ",(0,o.kt)("strong",{parentName:"p"},"generate the erxes change log"),"."),(0,o.kt)("p",null,"We use Angular convention ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog-angular/README.md"},"preset.")),(0,o.kt)("h3",{id:"commit-message-format"},"Commit Message Format"),(0,o.kt)("p",null,"A commit message consists of a ",(0,o.kt)("strong",{parentName:"p"},"header"),", ",(0,o.kt)("strong",{parentName:"p"},"body")," and ",(0,o.kt)("strong",{parentName:"p"},"footer"),". The header has a ",(0,o.kt)("strong",{parentName:"p"},"type"),", ",(0,o.kt)("strong",{parentName:"p"},"scope")," and ",(0,o.kt)("strong",{parentName:"p"},"subject"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"<type>(<scope>): <subject>\n<BLANK LINE>\n<body>\n<BLANK LINE>\n<footer>\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"header")," is mandatory and the ",(0,o.kt)("strong",{parentName:"p"},"scope")," of the header is optional."),(0,o.kt)("p",null,"The footer should contain a ",(0,o.kt)("a",{parentName:"p",href:"https://help.github.com/articles/closing-issues-via-commit-messages/"},"closing reference to an issue")," if any."),(0,o.kt)("h3",{id:"revert"},"Revert"),(0,o.kt)("p",null,"If the commit reverts a previous commit, it should begin with ",(0,o.kt)("inlineCode",{parentName:"p"},"revert:"),", followed by the header of the reverted commit. In the body it should say: ",(0,o.kt)("inlineCode",{parentName:"p"},"This reverts commit <hash>."),", where the hash is the SHA of the commit being reverted."),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("p",null,"Must be one of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"feat"),": A new feature"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"fix"),": A bug fix"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"perf"),": A code change that improves performance"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"refactor"),": A code change that neither fixes a bug nor adds a feature"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"style"),": Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"test"),": Adding missing tests or correcting existing tests")),(0,o.kt)("p",null,"If the prefix is ",(0,o.kt)("inlineCode",{parentName:"p"},"feat"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"fix")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"perf"),", it will appear in the changelog. However if there is any ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"BREAKING CHANGE")),", the commit will always appear in the changelog."),(0,o.kt)("h3",{id:"scope"},"Scope"),(0,o.kt)("p",null,"The scope could be anything specifying place of the commit change. For example ",(0,o.kt)("inlineCode",{parentName:"p"},"deal"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"inbox"),", etc..."),(0,o.kt)("h3",{id:"subject"},"Subject"),(0,o.kt)("p",null,"The subject contains succinct description of the change:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'use the imperative, present tense: "change" not "changed" nor "changes"'),(0,o.kt)("li",{parentName:"ul"},"don't capitalize first letter"),(0,o.kt)("li",{parentName:"ul"},"no dot (.) at the end")),(0,o.kt)("h3",{id:"body"},"Body"),(0,o.kt)("p",null,"Just as in the ",(0,o.kt)("strong",{parentName:"p"},"subject"),', use the imperative, present tense: "change" not "changed" nor "changes".\nThe body should include the motivation for the change and contrast this with previous behavior.'),(0,o.kt)("h3",{id:"footer"},"Footer"),(0,o.kt)("p",null,"The footer should contain any information about ",(0,o.kt)("strong",{parentName:"p"},"Breaking Changes")," and is also the place to\nreference GitHub issues that this commit ",(0,o.kt)("strong",{parentName:"p"},"Closes"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Breaking Changes")," should start with the word ",(0,o.kt)("inlineCode",{parentName:"p"},"BREAKING CHANGE:")," with a space or two newlines. The rest of the commit message is then used for this."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,'Appears under "Features" header, inbox subheader:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"feat(inbox): add 'graphiteWidth' option\n")),(0,o.kt)("p",null,'Appears under "Bug Fixes" header, graphite subheader, with a link to issue #28:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"fix(graphite): stop graphite breaking when width < 0.1\nCloses #28\n")),(0,o.kt)("p",null,'Appears under "Performance Improvements" header, and under "Breaking Changes" with the breaking change explanation:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"perf(inbox): remove graphiteWidth option\nBREAKING CHANGE: The graphiteWidth option has been removed. The default graphite width of 10mm is always used for performance reason.\n")),(0,o.kt)("p",null,"The following commit ",(0,o.kt)("inlineCode",{parentName:"p"},"667ecc1"),' do not appear in the changelog if they are under the same release. If not, the revert commit appears under the "Reverts" header.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"revert: feat(inbox): add 'graphiteWidth' option\nThis reverts commit 667ecc1654a317a13331b17617d973392f415f02.\n")))}c.isMDXComponent=!0}}]);