(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{jK0j:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return s})),t.d(n,"default",(function(){return d}));var r=t("wx14"),a=t("zLVn"),o=(t("q1tI"),t("7ljp")),i=t("hhGP"),s=(t("qKvR"),{});void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/Deployment/Performance.md"}});var l={_frontmatter:s},c=i.a;function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)(c,Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"performance"},"Performance"),Object(o.b)("p",null,"We have no performance figures of Spark yet. Spark is already being used in production scenarios, so it is fit for real use. If you have measured performance of Spark yourself, please share the results!"),Object(o.b)("p",null,"In the near future we will develop performance tests for Spark to get you an idea whether or how it will fit your performance needs. "),Object(o.b)("p",null,"If you are concerned Spark will not handle your load as fast as you would like, consider the following possibilities for spreading the load."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"If you are FHIR-enabling multiple source systems, you could provide every system with it's own FHIR front-end, implemented by Spark. Instead of feeding data from all the source systems into one instance of Spark. You will however need a way to route requests to the correct instance of Spark. ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"If there is a logical attribute in your data to split the whole set into multiple sets, you could deploy Spark multiple times, each one on a 'shard' of the data. You will need a way to route requests to the correct instance of Spark, based on the chosen attribute.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"MongoDB supports sharding, as described in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.mongodb.com/manual/sharding/"}),"MongoDB documentation"),". You will have to choose a shard key based upon expected use. To use this in Spark, you will probably have to tweak the Spark Mongo implementation."))),Object(o.b)("style",{className:"grvsc-styles"},"\n  .grvsc-container {\n    overflow: auto;\n    position: relative;\n    -webkit-overflow-scrolling: touch;\n    padding-top: 1rem;\n    padding-top: var(--grvsc-padding-top, var(--grvsc-padding-v, 1rem));\n    padding-bottom: 1rem;\n    padding-bottom: var(--grvsc-padding-bottom, var(--grvsc-padding-v, 1rem));\n    border-radius: 8px;\n    border-radius: var(--grvsc-border-radius, 8px);\n    font-feature-settings: normal;\n    line-height: 1.4;\n  }\n  \n  .grvsc-code {\n    display: table;\n  }\n  \n  .grvsc-line {\n    display: table-row;\n    box-sizing: border-box;\n    width: 100%;\n    position: relative;\n  }\n  \n  .grvsc-line > * {\n    position: relative;\n  }\n  \n  .grvsc-gutter-pad {\n    display: table-cell;\n    padding-left: 0.75rem;\n    padding-left: calc(var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem)) / 2);\n  }\n  \n  .grvsc-gutter {\n    display: table-cell;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n  }\n  \n  .grvsc-gutter::before {\n    content: attr(data-content);\n  }\n  \n  .grvsc-source {\n    display: table-cell;\n    padding-left: 1.5rem;\n    padding-left: var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem));\n    padding-right: 1.5rem;\n    padding-right: var(--grvsc-padding-right, var(--grvsc-padding-h, 1.5rem));\n  }\n  \n  .grvsc-source:empty::after {\n    content: ' ';\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n  }\n  \n  .grvsc-gutter + .grvsc-source {\n    padding-left: 0.75rem;\n    padding-left: calc(var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem)) / 2);\n  }\n  \n  /* Line transformer styles */\n  \n  .grvsc-has-line-highlighting > .grvsc-code > .grvsc-line::before {\n    content: ' ';\n    position: absolute;\n    width: 100%;\n  }\n  \n  .grvsc-line-diff-add::before {\n    background-color: var(--grvsc-line-diff-add-background-color, rgba(0, 255, 60, 0.2));\n  }\n  \n  .grvsc-line-diff-del::before {\n    background-color: var(--grvsc-line-diff-del-background-color, rgba(255, 0, 20, 0.2));\n  }\n  \n  .grvsc-line-number {\n    padding: 0 2px;\n    text-align: right;\n    opacity: 0.7;\n  }\n  \n"))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/Deployment/Performance.md"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-deployment-performance-md-3db4dae6f1ee57f48f78.js.map