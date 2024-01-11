try{
(()=>{var m=__STORYBOOK_ADDONS__,{addons:e,types:p,mockChannel:s}=__STORYBOOK_ADDONS__;e.setConfig({previewTabs:{canvas:{title:"Design"},"storybook/docs/panel":{title:"How to"}}});e.setChannel(s());var d=e.getChannel();d.on("DARK_MODE",a=>{a?document.body.classList.add("bg-dark"):document.body.classList.remove("bg-dark")});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
