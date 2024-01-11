"use strict";(self.webpackChunk_aidron_aidron_ds=self.webpackChunk_aidron_aidron_ds||[]).push([[2880],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Core/Grid/Grid.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Users_fernandocamilotti_Desktop_Projetos_Personal_aidron_ds_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs"),_Grid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Core/Grid/Grid.jsx"),_GridItem__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Core/Grid/GridItem.jsx"),_Sidebar__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Core/Sidebar/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code"},(0,_Users_fernandocamilotti_Desktop_Projetos_Personal_aidron_ds_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Core/Grid/Docs",parameters:{previewTabs:{canvas:{hidden:!0}}}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h1,{id:"grid",children:"Grid"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.p,{children:"Os Dialogs informam os usuários sobre uma tarefa e podem conter informações críticas, exigir decisões ou envolver várias tarefas."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,{mdxSource:'<Grid sidebar><Sidebar onColapse={() => {}}><p>{"Sidebar"}</p></Sidebar><GridItem className="red-medium spacing-inset-md" size={{ lg: 3, md: 2, sm: 2, xl: 3 }}><p>{"Column 1"}</p></GridItem><GridItem className="blue-medium spacing-inset-md" size={{ lg: 3, md: 2, sm: 2, xl: 3 }}><p>{"Column 2"}</p></GridItem><GridItem className="green-medium spacing-inset-md" size={{ lg: 3, md: 2, sm: 2, xl: 3 }}><p>{"Column 3"}</p></GridItem><GridItem className="yellow-medium spacing-inset-md" size={{ lg: 3, md: 2, sm: 2, xl: 3 }}><p>{"Column 4"}</p></GridItem></Grid>',children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_2__.r,{sidebar:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Sidebar__WEBPACK_IMPORTED_MODULE_4__.Y,{onColapse:()=>{},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.p,{children:"Sidebar"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_GridItem__WEBPACK_IMPORTED_MODULE_3__.P,{className:"red-medium spacing-inset-md",size:{lg:3,md:2,sm:2,xl:3},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.p,{children:"Column 1"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_GridItem__WEBPACK_IMPORTED_MODULE_3__.P,{className:"blue-medium spacing-inset-md",size:{lg:3,md:2,sm:2,xl:3},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.p,{children:"Column 2"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_GridItem__WEBPACK_IMPORTED_MODULE_3__.P,{className:"green-medium spacing-inset-md",size:{lg:3,md:2,sm:2,xl:3},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.p,{children:"Column 3"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_GridItem__WEBPACK_IMPORTED_MODULE_3__.P,{className:"yellow-medium spacing-inset-md",size:{lg:3,md:2,sm:2,xl:3},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.p,{children:"Column 4"})})]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"anatomia",children:"Anatomia"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.li,{children:"Container"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.li,{children:"Items"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"design-tokens",children:"Design Tokens"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:["Os design tokens relacionados a este componente dependem somente das ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"@media queries"})," controladas pelo browser, responsável pela largura das colunas, número de colunas, gutter, sidebar e largura do container."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"variações",children:"Variações"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.li,{children:"Tamanho."}),"\n"]})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Core/Grid/Docs",parameters:{previewTabs:{canvas:{hidden:!0}}},tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_Users_fernandocamilotti_Desktop_Projetos_Personal_aidron_ds_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["__page"]},"./src/components/Core/Button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.z});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Core/Button/Button.jsx")},"./src/components/Core/Grid/Grid.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Grid});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_GridItem__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Core/Grid/GridItem.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Grid=({sidebar,children})=>{const sidebarChildren=children&&children.map(((child,idx)=>!(!react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)||child.type===_GridItem__WEBPACK_IMPORTED_MODULE_1__.P)&&react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child,{key:idx.toString()}))).filter(Boolean),itemsChildren=children&&children.map(((child,idx)=>!(!react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)||child.type!==_GridItem__WEBPACK_IMPORTED_MODULE_1__.P)&&react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child,{key:idx.toString()}))).filter(Boolean);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{"data-testid":"grid",className:"grid-wrapper "+(sidebar?"with-sidebar":""),children:[sidebar&&sidebarChildren,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"grid-container",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:sidebar?"grid grid-system with-sidebar":" grid grid-system",children:itemsChildren})})]})};Grid.displayName="Grid",Grid.propTypes={sidebar:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node.isRequired},Grid.defaultProps={sidebar:!1},Grid.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{sidebar:{defaultValue:{value:"false",computed:!1},description:"Sidebar available?",type:{name:"bool"},required:!1},children:{description:"Grid contents",type:{name:"node"},required:!0}}}},"./src/components/Core/Grid/GridItem.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>GridItem});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledGridItem=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div.attrs({className:"grid-item"})`
  min-height: 10px;
`,GridItem=args=>{var _args$size,_args$size2,_args$size3,_args$size4;const sm=null!=args&&null!==(_args$size=args.size)&&void 0!==_args$size&&_args$size.sm?args.size.sm:1,md=null!=args&&null!==(_args$size2=args.size)&&void 0!==_args$size2&&_args$size2.md?args.size.md:sm,lg=null!=args&&null!==(_args$size3=args.size)&&void 0!==_args$size3&&_args$size3.lg?args.size.lg:md,xl=null!=args&&null!==(_args$size4=args.size)&&void 0!==_args$size4&&_args$size4.xl?args.size.xl:lg;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledGridItem,{"data-sm":sm,"data-md":md,"data-lg":lg,"data-xl":xl,...args,children:args.children})};GridItem.displayName="GridItem",GridItem.propTypes={size:prop_types__WEBPACK_IMPORTED_MODULE_3___default().object,children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().any},GridItem.defaultProps={size:{sm:1},children:[]},GridItem.__docgenInfo={description:"",methods:[],displayName:"GridItem",props:{size:{defaultValue:{value:"{ sm: 1 }",computed:!1},description:"How big should the GridItem be?",type:{name:"object"},required:!1},children:{defaultValue:{value:"[]",computed:!1},description:"GridItem contents",type:{name:"any"},required:!1}}}},"./src/components/Core/Sidebar/Sidebar.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Sidebar});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Core/Button/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Sidebar=({children,open,onColapse})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{"data-testid":"sidebar",className:["ragnarok","sidebar",open?"open":"close"].join(" "),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.z,{className:"colapse",icon:open?"minimize":"maximize",label:"",onClick:()=>onColapse(!open),type:"ghost"}),children]});Sidebar.displayName="Sidebar",Sidebar.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node.isRequired,open:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,onColapse:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func},Sidebar.defaultProps={open:!0,onColapse:void 0},Sidebar.__docgenInfo={description:"",methods:[],displayName:"Sidebar",props:{open:{defaultValue:{value:"true",computed:!1},description:"Open or close state",type:{name:"bool"},required:!1},onColapse:{defaultValue:{value:"undefined",computed:!0},description:"Open/Close handler",type:{name:"func"},required:!1},children:{description:"Sidebar content",type:{name:"node"},required:!0}}}},"./src/components/Core/Sidebar/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>_Sidebar__WEBPACK_IMPORTED_MODULE_0__.Y});var _Sidebar__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Core/Sidebar/Sidebar.jsx")}}]);