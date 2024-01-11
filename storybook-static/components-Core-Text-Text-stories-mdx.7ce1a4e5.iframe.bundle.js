"use strict";(self.webpackChunk_aidron_aidron_ds=self.webpackChunk_aidron_aidron_ds||[]).push([[4394],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Core/Text/Text.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Users_fernandocamilotti_Desktop_Projetos_Personal_aidron_ds_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs"),_Text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Core/Text/Text.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code"},(0,_Users_fernandocamilotti_Desktop_Projetos_Personal_aidron_ds_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Core/Text/Docs",parameters:{previewTabs:{canvas:{hidden:!0}}}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"text",children:"Text"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Text serve para mostrar linhas de texto de acordo com o estilo."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,{mdxSource:'<Text size="sm">{"Lorem Ipsum Dolor Sit Amet"}</Text><Text size="xs">{"Lorem Ipsum Dolor Sit Amet"}</Text><Text size="xxs">{"Lorem Ipsum Dolor Sit Amet"}</Text>',children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_2__.x,{size:"sm",children:"Lorem Ipsum Dolor Sit Amet"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_2__.x,{size:"xs",children:"Lorem Ipsum Dolor Sit Amet"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_2__.x,{size:"xxs",children:"Lorem Ipsum Dolor Sit Amet"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"anatomia",children:"Anatomia"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li,{children:"Container"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"design-tokens",children:"Design Tokens"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"$font-family-primary"}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"$font-family-secondary"}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"$font-weight-regular"}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"$font-weight-bold"}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"$font-size-sm"}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"$font-size-xs"}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"$font-size-xxs"}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"$line-height-long-text"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"variações",children:"Variações"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li,{children:"Light Mode."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li,{children:"Dark Mode."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li,{children:"Tamanho."}),"\n"]})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Core/Text/Docs",parameters:{previewTabs:{canvas:{hidden:!0}}},tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_Users_fernandocamilotti_Desktop_Projetos_Personal_aidron_ds_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["__page"]},"./src/components/Core/Text/Text.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Text=({size,weight,label,allcaps,children,className})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{allcaps:allcaps?1:0,"data-testid":"text-body",className:["ragnarok","text",`text-body-${size}-${weight}`,className,allcaps?"text-decoration-allcaps":""].join(" "),children:children||label});Text.displayName="Text",Text.propTypes={size:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["xxs","xs","sm"]),weight:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["bold","regular"]),allcaps:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,label:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string},Text.defaultProps={size:"sm",weight:"regular",allcaps:!1,label:"Lorem Ipsum Dolor Sit Amet"},Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{size:{defaultValue:{value:"'sm'",computed:!1},description:"How big should the text be?",type:{name:"enum",value:[{value:"'xxs'",computed:!1},{value:"'xs'",computed:!1},{value:"'sm'",computed:!1}]},required:!1},weight:{defaultValue:{value:"'regular'",computed:!1},description:"How the text should pop?",type:{name:"enum",value:[{value:"'bold'",computed:!1},{value:"'regular'",computed:!1}]},required:!1},allcaps:{defaultValue:{value:"false",computed:!1},description:"Should it be uppercase?",type:{name:"bool"},required:!1},label:{defaultValue:{value:"'Lorem Ipsum Dolor Sit Amet'",computed:!1},description:"Heading contents",type:{name:"string"},required:!1}}}}}]);