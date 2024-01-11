"use strict";(self.webpackChunk_aidron_aidron_ds=self.webpackChunk_aidron_aidron_ds||[]).push([[1134],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Core/Tab/Tab.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Users_fernandocamilotti_Desktop_Projetos_Personal_aidron_ds_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__("./src/components/Core/Tab/Tabs.jsx"),__webpack_require__("./src/components/Core/Tab/Tab.jsx"),__webpack_require__("./src/components/Core/Tab/TabHeader.jsx"),__webpack_require__("./src/components/Core/Tab/TabContent.jsx"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code"},(0,_Users_fernandocamilotti_Desktop_Projetos_Personal_aidron_ds_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Core/Tab/Docs",parameters:{previewTabs:{canvas:{hidden:!0}}}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h1,{id:"tab",children:"Tab"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.p,{children:"As Tabs organizam o conteúdo em diferentes telas, conjuntos de dados e outras interações."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h2,{id:"anatomia",children:"Anatomia"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.li,{children:"Lead Icon (opcional)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.li,{children:"Label"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.li,{children:"Badge (opcional)"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h2,{id:"design-tokens",children:"Design Tokens"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"$spacing-inset-sm"}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"$spacing-inline-sm"}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"$spacing-stack-sm"}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"$border-radius-sm"}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"$font-size-sm"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h2,{id:"variações",children:"Variações"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.li,{children:"Light Mode."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.li,{children:"Dark Mode."}),"\n"]})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Core/Tab/Docs",parameters:{previewTabs:{canvas:{hidden:!0}}},tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_Users_fernandocamilotti_Desktop_Projetos_Personal_aidron_ds_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["__page"]},"./src/components/Core/Tab/Tab.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>Tab});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Tab=({children,selected,alias})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:["ragnarok","tab",selected?"selected":void 0,alias].join(" "),children:children&&children});Tab.displayName="Tab",Tab.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired,selected:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool},Tab.defaultProps={selected:!1},Tab.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{selected:{defaultValue:{value:"false",computed:!1},description:"Is it selected?",type:{name:"bool"},required:!1},children:{description:"Which content should it show?",type:{name:"node"},required:!0}}}},"./src/components/Core/Tab/TabContent.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>TabContent});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TabContent=({children,selected})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{role:"presentation",className:["ragnarok","tab-content",selected?"selected":void 0].join(" "),children:children&&children});TabContent.displayName="TabContent",TabContent.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired,selected:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool},TabContent.defaultProps={selected:!1},TabContent.__docgenInfo={description:"",methods:[],displayName:"TabContent",props:{selected:{defaultValue:{value:"false",computed:!1},description:"Is it selected?",type:{name:"bool"},required:!1},children:{description:"Which content should it show?",type:{name:"node"},required:!0}}}},"./src/components/Core/Tab/TabHeader.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>TabHeader});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TabHeader=({index,children,selected,disabled,alias=index.toString(),onClick})=>{const PropedChildren="object"==typeof children&&(null==children?void 0:children.map((child=>"string"==typeof child?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:child}):react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)?react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child,{disabled}):child)));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{role:"tab",type:"button",tabIndex:index,onClick:disabled?void 0:()=>onClick(alias),onKeyPress:()=>{},className:["ragnarok","tab-header",disabled?"disabled":void 0,selected?"selected":void 0].join(" "),children:PropedChildren||children})};TabHeader.displayName="TabHeader",TabHeader.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired,selected:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,disabled:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,alias:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,onClick:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func},TabHeader.defaultProps={selected:!1,disabled:!1,alias:"",onClick:()=>{}},TabHeader.__docgenInfo={description:"",methods:[],displayName:"TabHeader",props:{alias:{defaultValue:{value:"''",computed:!1},description:"Alias linking TabHeader with TabContent",type:{name:"string"},required:!1},selected:{defaultValue:{value:"false",computed:!1},description:"Is it selected?",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Should it be disabled?",type:{name:"bool"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"Optional click handler",type:{name:"func"},required:!1},children:{description:"Which content should it show?",type:{name:"node"},required:!0}}}},"./src/components/Core/Tab/Tabs.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Tabs});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),_Tab__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Core/Tab/Tab.jsx"),_TabHeader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Core/Tab/TabHeader.jsx"),_TabContent__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Core/Tab/TabContent.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Tabs=({children,selected,...args})=>{const[which,setWhich]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(selected);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setWhich(selected)}),[selected]);const TabElements={headers:children&&children.map(((child,idx)=>{var _child$props;return!(!react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)||child.type!==_Tab__WEBPACK_IMPORTED_MODULE_1__.O)&&(null==child||null===(_child$props=child.props)||void 0===_child$props?void 0:_child$props.children.map((navTab=>{var _child$props2,_child$props3;return!(!react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(navTab)||navTab.type!==_TabHeader__WEBPACK_IMPORTED_MODULE_2__.G)&&react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(navTab,{key:`headerkey${idx.toString()}`,index:`header${idx.toString()}`,selected:child.props.alias===which,alias:null==child||null===(_child$props2=child.props)||void 0===_child$props2?void 0:_child$props2.alias,disabled:null==child||null===(_child$props3=child.props)||void 0===_child$props3?void 0:_child$props3.disabled,onClick:setWhich})})).filter(Boolean))})).filter(Boolean).flat(),contents:children&&children.map(((child,index)=>{var _child$props4;return!(!react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)||child.type!==_Tab__WEBPACK_IMPORTED_MODULE_1__.O)&&(null==child||null===(_child$props4=child.props)||void 0===_child$props4?void 0:_child$props4.children.map((contTab=>{var _child$props5;return!(!react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(contTab)||contTab.type!==_TabContent__WEBPACK_IMPORTED_MODULE_3__.I)&&react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(contTab,{key:`contentkey${index.toString()}`,index:`content${index.toString()}`,selected:child.props.alias===which,alias:null==child||null===(_child$props5=child.props)||void 0===_child$props5?void 0:_child$props5.alias})})).filter(Boolean))})).filter(Boolean).flat()};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{"data-testid":"tabs",role:"tablist",className:["ragnarok","tabs"].join(" "),...args,children:[(null==TabElements?void 0:TabElements.headers)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{"data-testid":"tabs-controller",className:["ragnarok","tabs-controller"].join(" "),children:TabElements.headers.map((el=>el))}),(null==TabElements?void 0:TabElements.contents)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{"data-testid":"tabs-inner",className:["ragnarok","tabs-inner"].join(" "),children:TabElements.contents.map((el=>el))})]})};Tabs.displayName="Tabs",Tabs.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_5___default().node.isRequired,selected:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string},Tabs.defaultProps={selected:""},Tabs.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{selected:{defaultValue:{value:"''",computed:!1},description:"Default content to be shown",type:{name:"string"},required:!1},children:{description:"Which content should it show?",type:{name:"node"},required:!0}}}}}]);