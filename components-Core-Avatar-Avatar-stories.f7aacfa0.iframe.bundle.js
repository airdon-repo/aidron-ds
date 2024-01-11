"use strict";(self.webpackChunk_aidron_aidron_ds=self.webpackChunk_aidron_aidron_ds||[]).push([[70],{"./src/components/Core/Avatar/Avatar.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ExtraLarge:()=>ExtraLarge,Large:()=>Large,Medium:()=>Medium,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Avatar_stories});__webpack_require__("./node_modules/react/index.js");var Avatar=__webpack_require__("./src/components/Core/Avatar/Avatar.jsx");const avatar_namespaceObject=__webpack_require__.p+"static/media/avatar.7c7145cd.jpg";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Avatar_stories={title:"Core/Avatar",component:Avatar.q},Template=args=>(0,jsx_runtime.jsxs)("div",{style:{display:"flex"},children:[(0,jsx_runtime.jsx)(Avatar.q,{...args}),(0,jsx_runtime.jsx)(Avatar.q,{...args,src:void 0})]});Template.displayName="Template";const Small=Template.bind({});Small.args={name:"Dwigth Schrute",size:"sm",src:avatar_namespaceObject};const Medium=Template.bind({});Medium.args={name:"Dwigth Schrute",size:"md",src:avatar_namespaceObject};const Large=Template.bind({});Large.args={name:"Dwigth Schrute",size:"lg",src:avatar_namespaceObject};const ExtraLarge=Template.bind({});ExtraLarge.args={name:"Dwigth Schrute",size:"xl",src:avatar_namespaceObject},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"args => <div style={{\n  display: 'flex'\n}}>\n    <Avatar {...args} />\n    <Avatar {...args} src={undefined} />\n  </div>",...Small.parameters?.docs?.source}}},Medium.parameters={...Medium.parameters,docs:{...Medium.parameters?.docs,source:{originalSource:"args => <div style={{\n  display: 'flex'\n}}>\n    <Avatar {...args} />\n    <Avatar {...args} src={undefined} />\n  </div>",...Medium.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:"args => <div style={{\n  display: 'flex'\n}}>\n    <Avatar {...args} />\n    <Avatar {...args} src={undefined} />\n  </div>",...Large.parameters?.docs?.source}}},ExtraLarge.parameters={...ExtraLarge.parameters,docs:{...ExtraLarge.parameters?.docs,source:{originalSource:"args => <div style={{\n  display: 'flex'\n}}>\n    <Avatar {...args} />\n    <Avatar {...args} src={undefined} />\n  </div>",...ExtraLarge.parameters?.docs?.source}}};const __namedExportsOrder=["Small","Medium","Large","ExtraLarge"]},"./src/components/Core/Avatar/Avatar.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>Avatar});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Avatar=({src,name,size,...args})=>{const isImage=url=>{if(!url)return!1;const http=new XMLHttpRequest;return http.open("HEAD",url),http.send(),404!==http.status};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{"data-testid":"avatar",className:["ragnarok","avatar",isImage(src)?"photo":"initials",size,args.className].join(" "),role:"img",style:isImage(src)?{backgroundImage:`url(${src})`}:{},title:name,alt:name,children:!isImage(src)&&(str=name,str.split(" ").map((piece=>piece.charAt(0))))});var str};Avatar.displayName="Avatar",Avatar.propTypes={src:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,name:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,size:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["sm","md","lg","xl"])},Avatar.defaultProps={src:void 0,name:"John Doe",size:"md"},Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{defaultValue:{value:"undefined",computed:!0},description:"Which image should it show?",type:{name:"string"},required:!1},name:{defaultValue:{value:"'John Doe'",computed:!1},description:"Who is this?",type:{name:"string"},required:!1},size:{defaultValue:{value:"'md'",computed:!1},description:"How big should the avatar be?",type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1},{value:"'xl'",computed:!1}]},required:!1}}}}}]);