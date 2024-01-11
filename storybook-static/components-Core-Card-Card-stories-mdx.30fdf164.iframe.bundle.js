"use strict";(self.webpackChunk_aidron_aidron_ds=self.webpackChunk_aidron_aidron_ds||[]).push([[4307],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Core/Card/Card.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Users_fernandocamilotti_Desktop_Projetos_Personal_aidron_ds_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs"),_Card__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Core/Card/Card.jsx"),_Heading__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Core/Heading/index.js"),_Icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Core/Icon/index.js"),_Text__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Core/Text/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code"},(0,_Users_fernandocamilotti_Desktop_Projetos_Personal_aidron_ds_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Core/Card/Docs",parameters:{previewTabs:{canvas:{hidden:!0}}}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h1,{id:"card",children:"Card"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.p,{children:"Os cartões contêm conteúdo e ações sobre um único assunto."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,{mdxSource:'<Card><div><Heading size="md"><p>{"Title"}</p><span className="icon-wrapper"><Icon icon="share-2" /><Icon icon="more-vertical" /><Icon icon="x" /></span></Heading><Text>{"Lorem Ipsum Dolor Sit Amet"}</Text></div></Card>',children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Card__WEBPACK_IMPORTED_MODULE_2__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Heading__WEBPACK_IMPORTED_MODULE_3__.X,{size:"md",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.p,{children:"Title"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span",{className:"icon-wrapper",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_4__.J,{icon:"share-2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_4__.J,{icon:"more-vertical"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_4__.J,{icon:"x"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_5__.x,{children:"Lorem Ipsum Dolor Sit Amet"})]})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h2,{id:"anatomia",children:"Anatomia"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.li,{children:"Container"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.li,{children:"Title (opcional)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.li,{children:"Description (opcional)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.li,{children:"Actions (opcional)"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h2,{id:"design-tokens",children:"Design Tokens"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"$border-radius-sm"}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"$spacing-inset-sm"}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"$spacing-inline-md"}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"$elevation-level-light-1"}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"$elevation-level-dark-1"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h2,{id:"variações",children:"Variações"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.li,{children:"Light Mode."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.li,{children:"Dark Mode."}),"\n"]})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Core/Card/Docs",parameters:{previewTabs:{canvas:{hidden:!0}}},tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_Users_fernandocamilotti_Desktop_Projetos_Personal_aidron_ds_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["__page"]},"./src/components/Core/Card/Card.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Card});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Card=({children,...args})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{"data-testid":"card",className:["ragnarok","card"].join(" "),...args,children});Card.displayName="Card",Card.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node},Card.defaultProps={children:"Lorem Ipsum Dolor Sit Amet"},Card.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{defaultValue:{value:"'Lorem Ipsum Dolor Sit Amet'",computed:!1},description:"Card contents",type:{name:"node"},required:!1}}}},"./src/components/Core/Heading/Heading.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Heading});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Heading=({size,allcaps,label,children,className})=>{switch(size){case"display":default:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1",{"data-testid":"heading",className:["ragnarok","heading","text-display",allcaps?"text-decoration-allcaps":"",className].join(" "),children:children||label});case"xl":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2",{"data-testid":"heading",className:["ragnarok","heading","text-heading-xl",allcaps?"text-decoration-allcaps":"",className].join(" "),children:children||label});case"lg":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3",{"data-testid":"heading",className:["ragnarok","heading","text-heading-lg",allcaps?"text-decoration-allcaps":"",className].join(" "),children:children||label});case"md":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4",{"data-testid":"heading",className:["ragnarok","heading","text-heading-md",allcaps?"text-decoration-allcaps":"",className].join(" "),children:children||label});case"sm":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4",{"data-testid":"heading",className:["ragnarok","heading","text-heading-sm",allcaps?"text-decoration-allcaps":"",className].join(" "),children:children||label})}};Heading.propTypes={size:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["display","xl","lg","md","sm"]),allcaps:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,label:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string},Heading.defaultProps={size:"display",allcaps:!1,label:"Lorem Ipsum Dolor Sit Amet"},Heading.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{size:{defaultValue:{value:"'display'",computed:!1},description:"How big should the heading be?",type:{name:"enum",value:[{value:"'display'",computed:!1},{value:"'xl'",computed:!1},{value:"'lg'",computed:!1},{value:"'md'",computed:!1},{value:"'sm'",computed:!1}]},required:!1},allcaps:{defaultValue:{value:"false",computed:!1},description:"Should it be uppercase?",type:{name:"bool"},required:!1},label:{defaultValue:{value:"'Lorem Ipsum Dolor Sit Amet'",computed:!1},description:"Heading contents",type:{name:"string"},required:!1}}}},"./src/components/Core/Heading/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>_Heading__WEBPACK_IMPORTED_MODULE_0__.X});var _Heading__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Core/Heading/Heading.jsx")},"./src/components/Core/Icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>_Icon__WEBPACK_IMPORTED_MODULE_0__.J});var _Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Core/Icon/Icon.jsx")},"./src/components/Core/Text/Text.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Text=({size,weight,label,allcaps,children,className})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{allcaps:allcaps?1:0,"data-testid":"text-body",className:["ragnarok","text",`text-body-${size}-${weight}`,className,allcaps?"text-decoration-allcaps":""].join(" "),children:children||label});Text.displayName="Text",Text.propTypes={size:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["xxs","xs","sm"]),weight:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["bold","regular"]),allcaps:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,label:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string},Text.defaultProps={size:"sm",weight:"regular",allcaps:!1,label:"Lorem Ipsum Dolor Sit Amet"},Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{size:{defaultValue:{value:"'sm'",computed:!1},description:"How big should the text be?",type:{name:"enum",value:[{value:"'xxs'",computed:!1},{value:"'xs'",computed:!1},{value:"'sm'",computed:!1}]},required:!1},weight:{defaultValue:{value:"'regular'",computed:!1},description:"How the text should pop?",type:{name:"enum",value:[{value:"'bold'",computed:!1},{value:"'regular'",computed:!1}]},required:!1},allcaps:{defaultValue:{value:"false",computed:!1},description:"Should it be uppercase?",type:{name:"bool"},required:!1},label:{defaultValue:{value:"'Lorem Ipsum Dolor Sit Amet'",computed:!1},description:"Heading contents",type:{name:"string"},required:!1}}}},"./src/components/Core/Text/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>_Text__WEBPACK_IMPORTED_MODULE_0__.x});var _Text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Core/Text/Text.jsx")}}]);