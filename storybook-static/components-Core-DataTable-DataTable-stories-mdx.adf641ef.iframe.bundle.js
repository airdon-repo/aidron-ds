"use strict";(self.webpackChunk_aidron_aidron_ds=self.webpackChunk_aidron_aidron_ds||[]).push([[1231],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Core/DataTable/DataTable.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Users_fernandocamilotti_Desktop_Projetos_Personal_aidron_ds_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs"),_DataTable__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Core/DataTable/DataTable.jsx"),_dummy_data__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Core/DataTable/dummy_data.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code"},(0,_Users_fernandocamilotti_Desktop_Projetos_Personal_aidron_ds_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Core/DataTable/Docs",parameters:{previewTabs:{canvas:{hidden:!0}}}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h1,{id:"datatable",children:"DataTable"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"Tabelas de dados exibem conjuntos de dados em linhas e colunas."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,{mdxSource:'<DataTable data={users.concat(users)} sort={[{ id: "id", desc: false }]} dataConfig={[{ label: "ID", value: "id" }, { label: "Name", value: "name" }, { label: "Username", value: "username" }, { label: "Email", value: "email" }, { label: "Phone", value: "phone" }, { label: "Website", value: "website" }]} />',children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_DataTable__WEBPACK_IMPORTED_MODULE_2__.w,{data:_dummy_data__WEBPACK_IMPORTED_MODULE_3__.r.concat(_dummy_data__WEBPACK_IMPORTED_MODULE_3__.r),sort:[{id:"id",desc:!1}],dataConfig:[{label:"ID",value:"id"},{label:"Name",value:"name"},{label:"Username",value:"username"},{label:"Email",value:"email"},{label:"Phone",value:"phone"},{label:"Website",value:"website"}]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"anatomia",children:"Anatomia"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.li,{children:"Search bar"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.li,{children:"Filters button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.li,{children:"Table headers"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.li,{children:"Table row"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.li,{children:"Pagination bar"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"design-tokens",children:"Design Tokens"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"$font-size-xs"}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"$font-weight-bold"}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"$spacing-inline-xs"}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"$spacing-inline-md"}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"$spacing-inline-sm"}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"$spacing-stack-md"}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"$border-radius-circle"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"variações",children:"Variações"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.li,{children:"Light Mode."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.li,{children:"Dark Mode."}),"\n"]})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Core/DataTable/Docs",parameters:{previewTabs:{canvas:{hidden:!0}}},tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_Users_fernandocamilotti_Desktop_Projetos_Personal_aidron_ds_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["__page"]},"./src/components/Core/Button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.z});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Core/Button/Button.jsx")},"./src/components/Core/DataTable/DataTable.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>DataTable});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react_table=__webpack_require__("./node_modules/react-table/index.js"),Icon=__webpack_require__("./src/components/Core/Icon/index.js"),Button=__webpack_require__("./src/components/Core/Button/index.js"),TextField=__webpack_require__("./src/components/Core/TextField/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Filter=({globalFilter,setGlobalFilter})=>{const[value,setValue]=(0,react.useState)(globalFilter),onChange=(0,react_table.useAsyncDebounce)((val=>{setGlobalFilter(val||void 0)}),200);return(0,jsx_runtime.jsx)(TextField.n,{iconLeft:"search",label:"Pesquisar",value:value||"",width:"100%",onChange:e=>{setValue(e),onChange(e)},placeholder:"Palavras, números...",type:"search"})};Filter.displayName="Filter",Filter.__docgenInfo={description:"",methods:[],displayName:"Filter"};const Pagination=({canNextPage,canPreviousPage,gotoPage,nextPage,previousPage,pageCount,pageIndex,maxEntries,paginationCount})=>(0,jsx_runtime.jsxs)("div",{className:"pagination-wrapper",children:[(0,jsx_runtime.jsx)("div",{className:"pagination-label",children:`Mostrando ${pageIndex*paginationCount+1} - ${(pageIndex+1)*paginationCount} de ${maxEntries}`}),(0,jsx_runtime.jsx)("div",{className:"pagination","data-testid":"pagination",children:pageCount>1&&(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsx)("li",{className:["page-item","page-prev",canPreviousPage?void 0:"disabled"].join(" "),children:(0,jsx_runtime.jsxs)("button",{className:"page-button",type:"button",href:"#",disabled:!canPreviousPage,onClick:()=>previousPage(),children:[(0,jsx_runtime.jsx)(Icon.J,{icon:"chevron-left",size:16}),(0,jsx_runtime.jsx)("span",{className:"visually-hidden",children:"Previous"})]})}),((index,maxToShow=3)=>{const iterator=Array.from(Array(maxToShow),((x,idx)=>index+idx));return canPreviousPage&&!canNextPage&&(iterator[0]=index-2,iterator[1]=index-1,iterator[2]=index),canPreviousPage&&canNextPage&&(iterator[0]=index-1,iterator[1]=index,iterator[2]=index+1),!canPreviousPage&&canNextPage&&(iterator[0]=index,iterator[1]=index+1,iterator[2]=index+2),iterator})(pageIndex,3).map((page=>(0,jsx_runtime.jsx)("li",{className:["page-item","page-number",page===pageIndex?"disabled":void 0].join(" "),children:(0,jsx_runtime.jsxs)("button",{className:"page-button",type:"button",onClick:page!==pageIndex?()=>gotoPage(page):void 0,children:[page+1,(0,jsx_runtime.jsx)("span",{className:"visually-hidden",children:page+1})]})},page))).filter(Boolean),(0,jsx_runtime.jsx)("li",{className:"page-item page-next",disabled:!canPreviousPage,children:(0,jsx_runtime.jsxs)("button",{className:"page-button",type:"button",href:"#",disabled:!canNextPage,onClick:()=>nextPage(),children:[(0,jsx_runtime.jsx)(Icon.J,{icon:"chevron-right",size:16}),(0,jsx_runtime.jsx)("span",{className:"visually-hidden",children:"Next"})]})})]})})]});Pagination.displayName="Pagination",Pagination.__docgenInfo={description:"",methods:[],displayName:"Pagination"};const DataTable=({data,dataConfig,onFilterClick,sort,paginationCount=10})=>{const columns=react.useMemo((()=>{const cols=[];return dataConfig.map((item=>cols.push({Header:item.label,accessor:item.value}))),cols}),[]),tableData=react.useMemo((()=>data),[]),{getTableProps,getTableBodyProps,headerGroups,page,prepareRow,setGlobalFilter,state,canPreviousPage,canNextPage,pageCount,gotoPage,nextPage,previousPage}=(0,react_table.useTable)({columns,data:tableData,initialState:{sort}},react_table.useFilters,react_table.useGlobalFilter,react_table.useSortBy,react_table.usePagination);return(0,jsx_runtime.jsxs)("div",{className:["ragnarok","datatable","table"].join(" "),"data-testid":"datatable",children:[(0,jsx_runtime.jsxs)("div",{className:"filter-wrapper",children:[(0,jsx_runtime.jsx)(Filter,{globalFilter:state.globalFilter,setGlobalFilter}),(0,jsx_runtime.jsx)(Button.z,{icon:"filter",label:"Filtros",onClick:onFilterClick,position:"left",type:"outlined"})]}),(0,jsx_runtime.jsxs)("table",{...getTableProps(),children:[(0,jsx_runtime.jsx)("thead",{children:headerGroups.map((headerGroup=>(0,jsx_runtime.jsx)("tr",{...headerGroup.getHeaderGroupProps(),children:headerGroup.headers.map((column=>(0,jsx_runtime.jsx)("th",{...column.getHeaderProps(column.getSortByToggleProps()),children:(0,jsx_runtime.jsxs)("span",{children:[column.render("Header"),column.isSorted?column.isSortedDesc?(0,jsx_runtime.jsx)(Icon.J,{className:"icon-order",icon:"arrow-down",size:16}):(0,jsx_runtime.jsx)(Icon.J,{className:"icon-order",icon:"arrow-up",size:16}):(0,jsx_runtime.jsx)(Icon.J,{className:"icon-order",icon:"chevron-down",size:16})]})})))})))}),(0,jsx_runtime.jsx)("tbody",{...getTableBodyProps(),children:page.map((row=>(prepareRow(row),(0,jsx_runtime.jsx)("tr",{...row.getRowProps(),children:row.cells.map((cell=>(0,jsx_runtime.jsx)("td",{...cell.getCellProps(),children:cell.render("Cell")})))}))))})]}),(0,jsx_runtime.jsx)(Pagination,{canPreviousPage,gotoPage,previousPage,nextPage,canNextPage,pageCount,pageIndex:state.pageIndex,maxEntries:data&&data.length,paginationCount})]})};DataTable.displayName="DataTable",DataTable.propTypes={data:prop_types_default().arrayOf(Object).isRequired,dataConfig:prop_types_default().arrayOf(Object).isRequired,sort:prop_types_default().arrayOf(Object),onFilterClick:prop_types_default().func},DataTable.defaultProps={sort:[],onFilterClick:void 0},DataTable.__docgenInfo={description:"",methods:[],displayName:"DataTable",props:{paginationCount:{defaultValue:{value:"10",computed:!1},required:!1},sort:{defaultValue:{value:"[]",computed:!1},description:"Sorting options",type:{name:"arrayOf",value:{name:"custom",raw:"Object"}},required:!1},onFilterClick:{defaultValue:{value:"undefined",computed:!0},description:"Optional Filter Handler",type:{name:"func"},required:!1},data:{description:"Data to show",type:{name:"arrayOf",value:{name:"custom",raw:"Object"}},required:!0},dataConfig:{description:"Data configuration object",type:{name:"arrayOf",value:{name:"custom",raw:"Object"}},required:!0}}}},"./src/components/Core/DataTable/dummy_data.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>users});const users=[{id:1,name:"Odin Borson",username:"allfather",email:"allfather@aesir.co",phone:"1-770-736-8031 x56442",website:"asgard.org"},{id:2,name:"Frigga Fjorgyn",username:"frigg",email:"frigg@aesir.co",phone:"010-692-6593 x09125",website:"asgard.org"},{id:3,name:"Thor Odinson",username:"thunder",email:"thunder@lightning.co",phone:"1-463-123-4447",website:"thursday.info"},{id:4,name:"Balder Odinson",username:"handsomeboy",email:"handsomeboy@asgard.org",phone:"493-170-9623 x156",website:"mistletoe.biz"},{id:5,name:"Loki Odinson",username:"lokireckless",email:"Loki_Reckless@asgard.org",phone:"(254)954-1289",website:"hela.info"},{id:6,name:"Týr Hymirson",username:"t",email:"thye@agsadr.org",phone:"1-477-935-8478 x6430",website:"tasdrg.org"},{id:7,name:"Sleipnir Svadilfarison",username:"bitesthedust",email:"speeddemon@wall.info",phone:"210.067.6132",website:"buildthewall.com"},{id:8,name:"Fenrisulfr",username:"fangmaster84",email:"fangmaster84@hungry.me",phone:"586.493.6943 x140",website:"hungry.me"},{id:9,name:"Jormungandr Lokison",username:"jormunloki",email:"jormunloki@roots.world",phone:"(775)976-6794 x41206",website:"slither.io"},{id:10,name:"Freyja Njordr",username:"pretty_tears",email:"pretty_tearsg@vanir.biz",phone:"024-648-3804",website:"vanir.biz"},{id:11,name:"Freyr Njordr",username:"swordfan",email:"swordfan@vanir.biz",phone:"1-770-736-8031 x56442",website:"justiceforhorses.org"},{id:12,name:"Heimdall Odinson",username:"goldenboy",email:"goldenboy@asgard.org",phone:"493-170-9623 x156",website:"caringgate.co"}]},"./src/components/Core/Icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>_Icon__WEBPACK_IMPORTED_MODULE_0__.J});var _Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Core/Icon/Icon.jsx")},"./src/components/Core/TextField/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>_TextField__WEBPACK_IMPORTED_MODULE_0__.n});var _TextField__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Core/TextField/TextField.jsx")}}]);