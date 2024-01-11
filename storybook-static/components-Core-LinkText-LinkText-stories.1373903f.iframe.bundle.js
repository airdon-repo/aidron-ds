"use strict";(self.webpackChunk_aidron_aidron_ds=self.webpackChunk_aidron_aidron_ds||[]).push([[7577],{"./src/components/Core/LinkText/LinkText.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _LinkText__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Core/LinkText/LinkText.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Core/LinkText",component:_LinkText__WEBPACK_IMPORTED_MODULE_1__.u},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_LinkText__WEBPACK_IMPORTED_MODULE_1__.u,{...args,children:args.label});Template.displayName="Template";const Basic=Template.bind({});Basic.args={size:"sm",to:"#",color:"color-primary-medium",label:"Lorem Ipsum Dolor Sit Amet"},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"args => <LinkText {...args}>{args.label}</LinkText>",...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]},"./src/components/Core/LinkText/LinkText.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>LinkText});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const LinkText=({to,size,color,allcaps,label,children,className,target})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{"data-testid":"link",href:to,target,className:["ragnarok","link",`text-link-${size}`,color,allcaps?"text-decoration-allcaps":"",className].join(" "),children:children||label});LinkText.displayName="LinkText",LinkText.propTypes={size:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["xxs","xs","sm"]),to:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,color:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["color-primary-medium","color-primary-light","color-primary-lightest"]),allcaps:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,target:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["_self","_blank"]),label:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string},LinkText.defaultProps={size:"sm",color:"color-primary-medium",allcaps:!1,target:"_self",label:"Lorem Ipsum Dolor Sit Amet"},LinkText.__docgenInfo={description:"",methods:[],displayName:"LinkText",props:{size:{defaultValue:{value:"'sm'",computed:!1},description:"How big should the text be?",type:{name:"enum",value:[{value:"'xxs'",computed:!1},{value:"'xs'",computed:!1},{value:"'sm'",computed:!1}]},required:!1},color:{defaultValue:{value:"'color-primary-medium'",computed:!1},description:"Which color should it be?",type:{name:"enum",value:[{value:"'color-primary-medium'",computed:!1},{value:"'color-primary-light'",computed:!1},{value:"'color-primary-lightest'",computed:!1}]},required:!1},allcaps:{defaultValue:{value:"false",computed:!1},description:"Should it be uppercase?",type:{name:"bool"},required:!1},target:{defaultValue:{value:"'_self'",computed:!1},description:"Which Behaviour?",type:{name:"enum",value:[{value:"'_self'",computed:!1},{value:"'_blank'",computed:!1}]},required:!1},label:{defaultValue:{value:"'Lorem Ipsum Dolor Sit Amet'",computed:!1},description:"Heading contents",type:{name:"string"},required:!1},to:{description:"Where should this link lead to?",type:{name:"string"},required:!0}}}}}]);