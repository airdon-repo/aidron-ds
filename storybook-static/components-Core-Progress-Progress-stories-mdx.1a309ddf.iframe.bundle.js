"use strict";(self.webpackChunk_aidron_aidron_ds=self.webpackChunk_aidron_aidron_ds||[]).push([[7682],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Core/Progress/Progress.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Users_fernandocamilotti_Desktop_Projetos_Personal_aidron_ds_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs"),_Progress__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Core/Progress/Progress.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code"},(0,_Users_fernandocamilotti_Desktop_Projetos_Personal_aidron_ds_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Core/Progress/Docs",parameters:{previewTabs:{canvas:{hidden:!0}}}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"progress",children:"Progress"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Os indicadores de progresso expressam um tempo de espera não especificado ou exibem a duração de um processo."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,{mdxSource:'<Progress determinate value={60} width="128px" /><Progress determinate value={60} circular width="128px" /><Progress width="128px" /><Progress circular width="128px" />',children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Progress__WEBPACK_IMPORTED_MODULE_2__.E,{determinate:!0,value:60,width:"128px"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Progress__WEBPACK_IMPORTED_MODULE_2__.E,{determinate:!0,value:60,circular:!0,width:"128px"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Progress__WEBPACK_IMPORTED_MODULE_2__.E,{width:"128px"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Progress__WEBPACK_IMPORTED_MODULE_2__.E,{circular:!0,width:"128px"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"anatomia",children:"Anatomia"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li,{children:"Indicator."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li,{children:"Track."}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"design-tokens",children:"Design Tokens"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"$border-radius-sm"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"variações",children:"Variações"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li,{children:"Light Mode."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li,{children:"Dark Mode."}),"\n"]})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Core/Progress/Docs",parameters:{previewTabs:{canvas:{hidden:!0}}},tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_Users_fernandocamilotti_Desktop_Projetos_Personal_aidron_ds_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["__page"]},"./src/components/Core/Progress/Progress.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Progress});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const linearProgress=styled_components__WEBPACK_IMPORTED_MODULE_2__.F4`
  0% {
    left: -35%;
    right: 100%;
  }
  60% {
    left: 100%;
    right: -90%;
  }
  100% {
    left: 100%;
    right: -90%;
  }
`,linearProgressFeedback=styled_components__WEBPACK_IMPORTED_MODULE_2__.F4`
  0% {
    left: -200%;
    right: 100%;
  }
  60% {
    left: 107%;
    right: -8%;
  }
  100% {
    left: 107%;
    right: -8%;
  }
`,circularProgress=styled_components__WEBPACK_IMPORTED_MODULE_2__.F4`
  0% {
    transform-origin: 50% 50%;
  }
  100% {
    transform: rotate(360deg);
  }
`,circularProgressInner=styled_components__WEBPACK_IMPORTED_MODULE_2__.F4`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0px;
  }
  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }
  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`,StyledProgress=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  &.circular:not(.controlled) {
    animation-name: ${circularProgress};
    svg {
      circle {
        animation-name: ${circularProgressInner};
      }
    }
  }
  .progress-bar {
    &:first-child {
      animation-name: ${linearProgress};
    }
    &:last-child {
      animation-name: ${linearProgressFeedback};
    }
  }
`,Progress=({width,circular,determinate,value})=>{return determinate?circular?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledProgress,{"data-testid":"progress",className:["ragnarok","progress","circular","controlled"].join(" "),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle",{cx:"12",cy:"12",r:"11",fill:"none",strokeWidth:"2",style:{strokeDashoffset:(scale=value,80-scale/100*69+"px")}})})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("progress",{"data-testid":"progress",max:"100",value:value?value.toString():0,style:circular?{}:{width},className:["ragnarok","progress"].join(" ")}):circular?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledProgress,{"data-testid":"progress",className:["ragnarok","progress","circular"].join(" "),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle",{cx:"12",cy:"12",r:"11",fill:"none",strokeWidth:"2"})})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(StyledProgress,{"data-testid":"progress",style:circular?{}:{width},className:["ragnarok","progress"].join(" "),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"progress-bar"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"progress-bar"})]});var scale};Progress.displayName="Progress",Progress.propTypes={width:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,circular:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,determinate:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,value:prop_types__WEBPACK_IMPORTED_MODULE_3___default().number},Progress.defaultProps={width:"100%",circular:void 0,determinate:void 0,value:0},Progress.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{width:{defaultValue:{value:"'100%'",computed:!1},description:"Component's width",type:{name:"string"},required:!1},circular:{defaultValue:{value:"undefined",computed:!0},description:"Should it be circular?",type:{name:"bool"},required:!1},determinate:{defaultValue:{value:"undefined",computed:!0},description:"Has a determinate progress?",type:{name:"bool"},required:!1},value:{defaultValue:{value:"0",computed:!1},description:"If it is determinate, what is the value of it?",type:{name:"number"},required:!1}}}}}]);