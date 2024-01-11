"use strict";(self.webpackChunk_aidron_aidron_ds=self.webpackChunk_aidron_aidron_ds||[]).push([[9653],{"./src/components/Core/Badge/Badge.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,Disabled:()=>Disabled,Information:()=>Information,Success:()=>Success,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Badge__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Core/Badge/Badge.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Core/Badge",component:_Badge__WEBPACK_IMPORTED_MODULE_1__.C},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_1__.C,{...args,children:args.children});Template.displayName="Template";const Danger=Template.bind({});Danger.args={children:"label",variant:"danger"};const Warning=Template.bind({});Warning.args={children:"label",variant:"warning"};const Success=Template.bind({});Success.args={children:"label",variant:"success"};const Information=Template.bind({});Information.args={children:"label",variant:"information"};const Disabled=Template.bind({});Disabled.args={children:"label",variant:"disabled"},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:"args => <Badge {...args}>{args.children}</Badge>",...Danger.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:"args => <Badge {...args}>{args.children}</Badge>",...Warning.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"args => <Badge {...args}>{args.children}</Badge>",...Success.parameters?.docs?.source}}},Information.parameters={...Information.parameters,docs:{...Information.parameters?.docs,source:{originalSource:"args => <Badge {...args}>{args.children}</Badge>",...Information.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => <Badge {...args}>{args.children}</Badge>",...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["Danger","Warning","Success","Information","Disabled"]},"./src/components/Core/Badge/Badge.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Badge});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Badge=({children,variant,disabled,size,...args})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{"data-testid":"badge",className:["ragnarok","badge",size,disabled?"disabled":void 0,variant].join(" "),...args,children});Badge.displayName="Badge",Badge.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired,size:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["md","sm"]),variant:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["danger","warning","success","information","disabled"]).isRequired},Badge.defaultProps={size:"md"},Badge.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{size:{defaultValue:{value:"'md'",computed:!1},description:"How big should it be",type:{name:"enum",value:[{value:"'md'",computed:!1},{value:"'sm'",computed:!1}]},required:!1},children:{description:"Which content should it show?",type:{name:"node"},required:!0},variant:{description:"Which variant should it be",type:{name:"enum",value:[{value:"'danger'",computed:!1},{value:"'warning'",computed:!1},{value:"'success'",computed:!1},{value:"'information'",computed:!1},{value:"'disabled'",computed:!1}]},required:!0}}}}}]);