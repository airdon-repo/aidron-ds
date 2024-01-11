"use strict";(self.webpackChunk_aidron_aidron_ds=self.webpackChunk_aidron_aidron_ds||[]).push([[1317],{"./src/components/Core/Progress/Progress.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Determinate:()=>Determinate,Indeterminate:()=>Indeterminate,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Progress__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Core/Progress/Progress.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Core/Progress",component:_Progress__WEBPACK_IMPORTED_MODULE_1__.E},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Progress__WEBPACK_IMPORTED_MODULE_1__.E,{...args});Template.displayName="Template";const Determinate=Template.bind({});Determinate.args={width:"128px",determinate:!0,value:60};const Indeterminate=Template.bind({});Indeterminate.args={width:"128px"},Determinate.parameters={...Determinate.parameters,docs:{...Determinate.parameters?.docs,source:{originalSource:"args => <Progress {...args} />",...Determinate.parameters?.docs?.source}}},Indeterminate.parameters={...Indeterminate.parameters,docs:{...Indeterminate.parameters?.docs,source:{originalSource:"args => <Progress {...args} />",...Indeterminate.parameters?.docs?.source}}};const __namedExportsOrder=["Determinate","Indeterminate"]},"./src/components/Core/Progress/Progress.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Progress});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const linearProgress=styled_components__WEBPACK_IMPORTED_MODULE_2__.F4`
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