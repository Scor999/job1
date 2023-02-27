
; /* Start:"a:4:{s:4:"full";s:95:"/bitrix/components/bitrix/landing.landing_view/templates/.default/script.min.js?167637690630160";s:6:"source";s:75:"/bitrix/components/bitrix/landing.landing_view/templates/.default/script.js";s:3:"min";s:79:"/bitrix/components/bitrix/landing.landing_view/templates/.default/script.min.js";s:3:"map";s:79:"/bitrix/components/bitrix/landing.landing_view/templates/.default/script.map.js";}"*/
(function(){"use strict";BX.namespace("BX.Landing.Component.View");BX.Landing.Component.View=function(e){};BX.Landing.Component.View.instance=null;BX.Landing.Component.View.getInstance=function(){return BX.Landing.Component.View.instance};BX.Landing.Component.View.create=function(e,n){e.topInit=n===true;BX.Landing.Component.View.instance=new BX.Landing.Component.View(e);BX.Landing.Component.View.instance.setNewOptions(e);BX.Landing.Component.View.instance.init();return BX.Landing.Component.View.instance};BX.Landing.Component.View.loadEditor=function(){var e=new BX.Landing.Component.View({});var n=BX.Landing.PageObject.getEditorWindow();var t=BX.Landing.PageObject.getRootWindow();e.loadEditor();e.buildTop();n.addEventListener("load",(function(){BX.Landing.UI.Panel.StylePanel.getInstance();t.BX.Landing.UI.Panel.Top.instance=null;BX.Landing.UI.Panel.Top.getInstance()}))};BX.Landing.Component.View.prototype={setNewOptions:function(e){this.type=e.type||"";this.title=e.title||"";this.url=e.url||"";this.formEditor=e.specialType==="crm_forms";this.topInit=e.topInit||false;this.active=e.active||false;this.draftMode=e.draftMode||false;this.id=e.id||0;this.siteId=e.siteId||0;this.siteTitle=e.siteTitle||"";this.storeEnabled=e.storeEnabled||false;this.fullPublication=e.fullPublication||false;this.urls=e.urls||{};this.rights=e.rights||{};this.helperFrameOpenUrl=e.helperFrameOpenUrl||null;this.helpCodes=e.helpCodes||{};this.sliderConditions=e.sliderConditions||[];top.window.autoPublicationEnabled=!!e.autoPublicationEnabled;if(!this.rights.public){top.window.autoPublicationEnabled=false}if(this.helperFrameOpenUrl){BX.Helper.init({frameOpenUrl:this.helperFrameOpenUrl,langId:BX.message("LANGUAGE_ID")})}},init:function(){var e=BX.Landing.Component.View.getInstance();if(typeof BX.rest!=="undefined"&&typeof BX.rest.Marketplace!=="undefined"){BX.rest.Marketplace.bindPageAnchors({})}BX.addCustomEvent(window,"Rest:AppLayout:ApplicationInstall",(function(e){if(e){}}));if(this.topInit){BX.addCustomEvent("SidePanel.Slider:onMessage",(function(e){if(e.getEventId()==="landingEditClose"){setTimeout((function(){window.location.reload()}),1e3)}}))}if(!this.topInit){BX.addCustomEvent("BX.Landing.Block:init",(function(n){if(n.data.requiredUserActionIsShown){BX.bind(n.data.button,"click",(function(){e.onRequiredLinkClick(this)}))}}));var n=[].slice.call(document.querySelectorAll(".landing-required-link"));n.forEach((function(n,t){BX.bind(n,"click",(function(){e.onRequiredLinkClick(this)}))}));var t=BX.Landing.PageObject.getBlocks();for(var i=0,a=t.length;i<a;i++){if(!t[i].isAllowedByTariff()){var o=BX.create("div",{props:{className:"landing-block-expired-overlay"}});t[i].node.appendChild(o)}}}if(this.topInit){var s=BX.Landing.PageObject.getEditorWindow();var l=BX.Landing.PageObject.getRootWindow();s.addEventListener("load",(function(){BX.Landing.UI.Panel.StylePanel.getInstance();l.BX.Landing.UI.Panel.Top.instance=null;BX.Landing.UI.Panel.Top.getInstance()}))}if(this.topInit){this.buildTop();this.initSliders();this.loadEditor();this.hideEditorsPanelHandlers()}},initSliders:function(){if(typeof BX.SidePanel==="undefined"){return}var e=[];for(var n=0,t=this.sliderConditions.length;n<t;n++){e.push(this.sliderConditions[n])}if(e.length<=0){return}var i=top.BX.clone({rules:[{condition:e,stopParameters:["action","fields%5Bdelete%5D","nav"],options:{allowChangeHistory:false}}]});BX.SidePanel.Instance.bindAnchors(i)},loadEditor:function(){var e=document.querySelector(".landing-editor-loader-container");var n=document.querySelector(".landing-editor-required-user-action");if(e){var t=new BX.Loader({offset:{top:"-70px"}});t.show(e);BX.Landing.PageObject.getInstance().view().then((function(t){BX.bindOnce(t,"load",(function(){var i=BX.Landing.Main.getInstance().options.requiredUserAction;if(BX.Landing.Utils.isPlainObject(i)&&!BX.Landing.Utils.isEmpty(i)){if(i.header){n.querySelector("h3").innerText=i.header}if(i.description){n.querySelector("p").innerText=i.description}if(i.href){n.querySelector("a").setAttribute("href",i.href)}if(i.text){n.querySelector("a").innerText=i.text}n.classList.add("landing-ui-user-action-show");document.querySelector(".landing-ui-panel-top-history").classList.add("landing-ui-disabled");document.querySelector(".landing-ui-panel-top-devices").classList.add("landing-ui-disabled")}else{t.classList.add("landing-ui-view-show")}setTimeout((function(){BX.Dom.addClass(e,"landing-ui-hide");setTimeout((function(){BX.remove(e);BX.remove(n)}),200)}),300)}))}))}},hideEditorsPanelHandlers:function(){BX.Landing.PageObject.getInstance().top().then((function(e){e.addEventListener("click",(function(){BX.Landing.PageObject.getInstance().view().then((function(e){if(e.contentWindow.BX){if(e.contentWindow.BX.Landing.Block.Node.Text.currentNode){e.contentWindow.BX.Landing.Block.Node.Text.currentNode.disableEdit()}if(e.contentWindow.BX.Landing.UI.Field.BaseField.currentField){e.contentWindow.BX.Landing.UI.Field.BaseField.currentField.disableEdit()}e.contentWindow.BX.Landing.UI.Panel.EditorPanel.getInstance().hide()}}))}))}))},onRequiredLinkClick:function(e){const n=e.getAttribute("href");if(n.substr(0,1)!=="#"){window.open(n,"_top")}let t=n.substr(1);const i={};let a="";if(t.indexOf("@")>0){a=t.split("@")[1];t=t.split("@")[0]}t=t.toUpperCase();const o="PAGE_URL_LANDING_SETTINGS";i.PAGE=t.replace("PAGE_URL_","");if(typeof landingParams[o]!=="undefined"&&typeof BX.SidePanel!=="undefined"){BX.SidePanel.Instance.open(BX.util.add_url_param(landingParams[o],i)+(a?"#"+a:""),{allowChangeHistory:false})}},buildTop:function(e){e=e||{};this.urls=this.urls||{};for(var n in this.urls){var t=BX("landing-urls-"+n);if(t){t.setAttribute("href",this.urls[n])}}if(BX("landing-popup-publication-btn")){var i=null;var a=null;BX("landing-popup-publication-btn").addEventListener("click",function(){var e=this.id,n;const t=this.getErrorMessageBlock();if(t){const e=BX("landing-popup-publication-error-area").getAttribute("data-error");const i=this.getErrorClickHandler(e);n=BX.create("div",{props:{className:"landing-popup-publication-content 1"},children:[t,BX.create("form",{props:{className:"landing-popup-publication-content-block-gray landing-popup-publication-content-center landing-popup-publication-content-block-gray-disabled"},attrs:{target:"_blank",method:"post",action:this.urls["publicationGlobal"]},children:[BX.create("input",{attrs:{type:"hidden",name:"sessid",value:BX.message("bitrix_sessid")}}),BX.create("div",{props:{className:"landing-popup-publication-content-autopub-btn-container"},children:[BX.create("button",{props:{className:"landing-popup-publication-content-autopub-btn ui-btn ui-btn-round ui-btn-no-caps ui-btn-shadow ui-btn-icon-lock ui-btn-light landing-popup-btn-disabled"},attrs:{type:"submit",disabled:true},text:BX.message("LANDING_PUBLICATION_SUBMIT")}),BX.create("div",{props:{className:"landing-popup-publication-content-autopub-btn-clicker"},events:i?{click:i}:null})]})]})]})}else{var a=BX.create("div",{props:{className:"landing-popup-publication-content-hint"}});n=BX.create("div",{props:{className:"landing-popup-publication-content 2"},children:[BX.create("div",{props:{className:"landing-popup-publication-content-block"},children:[BX.create("label",{props:{className:"landing-popup-publication-content-autopub"},children:[BX.create("span",{props:{className:top.window.autoPublicationEnabled?"landing-popup-publication-content-autopub-icon landing-ui-panel-top-pub-btn-auto":"landing-popup-publication-content-autopub-icon"},html:'<svg class="landing-ui-panel-top-pub-btn-icon" width="25" height="25" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">'+'<path class="landing-ui-panel-top-pub-btn-icon-defs-cloud" fill="#C6CDD3" d="M18.5075 18.8896H10.4177C10.3485 18.8896 10.2799 18.887 10.2119 18.882C8.38363 18.8398 6.91434 17.3271 6.91434 15.4671C6.91487 14.5606 7.27128 13.6914 7.90517 13.0507C8.2301 12.7223 8.61429 12.4678 9.03227 12.2978C9.02528 12.2055 9.02172 12.1123 9.02172 12.0182C9.02229 11.0617 9.39838 10.1446 10.0672 9.46862C10.7361 8.79266 11.6429 8.41324 12.5883 8.41382C13.7992 8.41531 14.8683 9.02804 15.5108 9.96325C15.816 9.85386 16.1444 9.79441 16.4866 9.79459C17.9982 9.79643 19.2397 10.9624 19.3836 12.4534C20.832 12.7729 21.9159 14.0785 21.9146 15.6395C21.9131 17.4385 20.4711 18.8958 18.6932 18.895C18.6309 18.895 18.569 18.8932 18.5075 18.8896Z" fill-rule="evenodd" clip-rule="evenodd"/>\n'+'<path class="landing-ui-panel-top-pub-btn-icon-defs-success" fill="#FFFFFF" d="M7.46967 13.782L9.1093 12.14L12.2726 15.2532L18.6078 8.91091L20.2474 10.5529L12.2881 18.5218L7.46967 13.782Z" fill-rule="evenodd" clip-rule="evenodd"/>\n'+'<path class="landing-ui-panel-top-pub-btn-icon-defs-error" fill="#FF7975" d="M19.8991 9.8334L17.607 7.54126L7.00036 18.1479L9.2925 20.44L19.8991 9.8334Z"/>\n'+'<path class="landing-ui-panel-top-pub-btn-icon-defs-error" fill="#FFFFFF" d="M19.9323 10.0725C20.2657 9.73913 20.2657 9.19867 19.9323 8.86532C19.599 8.53198 19.0585 8.53198 18.7252 8.86532L8.6579 18.9326C8.32455 19.266 8.32455 19.8064 8.6579 20.1398C8.99124 20.4731 9.5317 20.4731 9.86505 20.1398L19.9323 10.0725Z"/>'+"</svg>"}),BX.create("span",{props:{className:"landing-popup-publication-content-autopub-text"},html:BX.message("LANDING_PUBLICATION_AUTO")}),BX.create("input",{props:{className:"landing-popup-publication-content-autopub-input"},attrs:{type:"checkbox",checked:top.window.autoPublicationEnabled},events:{click:function(){top.window.autoPublicationEnabled=this.checked;BX.ajax({url:BX.util.add_url_param(window.location.href,{action:"changeAutoPublication"}),method:"POST",data:{param:this.checked?"Y":"N",sessid:BX.message("bitrix_sessid"),actionType:"json"},dataType:"json",onsuccess:n=>{BX.removeClass(BX("landing-popup-publication-btn"),"landing-ui-panel-top-pub-btn-error");if(this.checked){BX.addClass(BX("landing-popup-publication-btn"),"landing-ui-panel-top-pub-btn-auto");BX.addClass(BX("landing-popup-publication-btn"),"landing-ui-panel-top-pub-btn-loader");BX.addClass(document.body.querySelector(".landing-popup-publication-content-autopub-icon"),"landing-ui-panel-top-pub-btn-auto");BX.Landing.Backend.getInstance().action("Landing::publication",{lid:e}).then((()=>{BX.removeClass(BX("landing-popup-publication-btn"),"landing-ui-panel-top-pub-btn-loader")}))}else{BX.removeClass(BX("landing-popup-publication-btn"),"landing-ui-panel-top-pub-btn-auto");BX.removeClass(document.body.querySelector(".landing-popup-publication-content-autopub-icon"),"landing-ui-panel-top-pub-btn-auto")}}})}}}),BX.create("span",{props:{className:"landing-popup-publication-content-autopub-switcher"},children:[BX.create("span",{props:{className:"landing-popup-publication-content-autopub-switcher-on"},text:BX.message("LANDING_PUBLICATION_AUTO_TOGGLE_ON")}),BX.create("span",{props:{className:"landing-popup-publication-content-autopub-switcher-off"},text:BX.message("LANDING_PUBLICATION_AUTO_TOGGLE_OFF")})]})]})]}),BX.create("div",{props:{className:"landing-popup-publication-content-block-gray landing-popup-publication-content-center landing-popup-publication-content-column",style:{position:"relative"}},children:[a,BX.create("form",{attrs:{target:"_blank",method:"post",action:this.urls["preview"]},children:[BX.create("input",{attrs:{type:"hidden",name:"sessid",value:BX.message("bitrix_sessid")}}),BX.create("button",{props:{className:"landing-popup-publication-content-preview-btn ui-btn ui-btn-round ui-btn-no-caps ui-btn-shadow ui-btn-light"},attrs:{type:"submit"},text:BX.message("LANDING_TPL_PREVIEW_URL")})]}),BX.create("form",{attrs:{target:"_blank",method:"post",action:this.urls["publicationGlobal"]},children:[BX.create("input",{attrs:{type:"hidden",name:"sessid",value:BX.message("bitrix_sessid")}}),BX.create("button",{props:{className:"landing-popup-publication-content-autopub-btn ui-btn ui-btn-round ui-btn-no-caps ui-btn-shadow ui-btn-success"},attrs:{type:"submit"},text:BX.message("LANDING_PUBLICATION_SUBMIT")})]})]})]});a.appendChild(BX.UI.Hint.createNode(BX.message("LANDING_TPL_PREVIEW_URL_HINT")))}if(!i){i=BX.PopupWindowManager.create("landing-popup-publication",BX("landing-popup-publication-btn"),{content:n,autoHide:true,closeIcon:false,titleBar:false,closeByEsc:true,animation:"fading-slide",noAllPaddings:true,angle:{offset:37},minWidth:410,maxWidth:460,background:"#E9EAED",contentBackground:"transparent"})}else{i.setContent(n)}var o=window.addEventListener("blur",(function(){i.close();window.removeEventListener("blur",o)}));i.toggle();BX.PreventDefault()}.bind(this))}if(BX("landing-popup-preview-btn")){var o=null;BX("landing-popup-preview-btn").addEventListener("click",function(){if(!o){if(top.window.autoPublicationEnabled){if(this.storeEnabled){BX.Landing.Backend.getInstance().action("Landing::publication",{lid:this.id});BX.Landing.Backend.getInstance().action("Site::publication",{id:this.siteId})}else{BX.Landing.Backend.getInstance().action("Landing::publication",{lid:this.id})}}var e=BX("landing-popup-preview-btn");var n=this.url;var t=BX.create("div");new QRCode(t,{text:n,width:156,height:156,colorLight:"transparent"});o=BX.PopupWindowManager.create("landing-popup-preview",e,{content:BX.create("div",{props:{className:"landing-popup-preview-content"},children:[BX.create("div",{props:{className:"landing-popup-preview-title"},text:BX.message("LANDING_PREVIEW_MOBILE_TITLE")}),BX.create("div",{props:{className:"landing-popup-preview-qr"},children:[t]}),BX.create("div",{props:{className:"landing-popup-preview-text"},text:BX.message("LANDING_PREVIEW_MOBILE_TEXT")}),BX.create("div",{props:{className:"landing-popup-preview-link-container"},children:[BX.create("a",{props:{className:"landing-popup-preview-link ui-btn ui-btn-light-border ui-btn-round"},text:BX.message("LANDING_PREVIEW_MOBILE_NEW_TAB"),attrs:{target:"_blank",href:n}})]}),BX.create("hr"),BX.create("div",{props:{className:"landing-popup-preview-link-row-container"},children:[BX.create("div",{props:{className:"landing-popup-preview-link-target-container"},children:[BX.create("a",{props:{className:"landing-popup-preview-link-target"},text:function(){if(this.formEditor){return n}else{return BX.data(e,"domain")}}.bind(this)(),attrs:{target:"_blank",href:n}})]}),BX.create("div",{children:[BX.create("a",{props:{className:"landing-popup-preview-link-target-copy"},text:BX.message("LANDING_PREVIEW_MOBILE_COPY_LINK"),attrs:{href:"#"},events:{click:function(){var e=document.createRange();e.selectNode(document.body.querySelector(".landing-popup-preview-link-target"));window.getSelection().addRange(e);try{document.execCommand("copy");BX.UI.Notification.Center.notify({content:BX.message("LANDING_SITE_TILE_POPUP_COPY_LINK_COMPLETE"),autoHideDelay:2e3});window.getSelection().removeAllRanges()}catch(e){BX.UI.Notification.Center.notify({content:"Oops, unable to copy",autoHideDelay:2e3})}}.bind(this)}})]})]})]}),closeIcon:true,closeByEsc:true,noAllPaddings:true,autoHide:true,animation:"fading-slide",angle:{position:"top",offset:75},minWidth:375,maxWidth:375,contentBackground:"transparent"})}var i=window.addEventListener("blur",(function(){o.close();window.removeEventListener("blur",i)}));o.toggle();BX.PreventDefault()}.bind(this))}var s=BX.create("div",{props:{className:"landing-popup-features-content-block landing-popup-features-content-block-settings"},html:'<div class="landing-popup-features-content-block-settings-icon ui-icon ui-icon-service-light-settings"><i></i></div>',events:{click:function(){this.onSettingsClick()}.bind(this)}});if(BX("landing-popup-features-btn")){var l=null;BX("landing-popup-features-btn").addEventListener("click",function(){if(!l){var e=BX("landing-popup-features-btn");l=BX.PopupWindowManager.create("landing-popup-features",e,{content:BX.create("div",{props:{className:"landing-popup-features-content"},children:[this.draftMode?null:BX.create("div",{props:{className:"landing-popup-features-content-block landing-popup-features-content-dflex"},children:[BX.create("div",{html:'<div class="ui-icon landing-popup-features-icon-1 ui-icon-md"><i></i></div>'}),BX.create("div",{style:{flexGrow:1},children:[BX.create("div",{props:{className:"landing-popup-features-content-block-title"},text:BX.message("LANDING_TPL_FEATURES_FORMS_TITLE")}),BX.create("a",{props:{className:"landing-popup-features-content-block-link"},text:BX.message("LANDING_TPL_FEATURES_FORMS_PROMO_LINK"),attrs:{href:"#"},events:{click:function(){if(this.helperFrameOpenUrl){BX.Helper.show("redirect=detail&code="+this.helpCodes["form_general"][0])}BX.PreventDefault()}.bind(this)}})]}),BX.create("div",{children:[BX.create("input",{props:{className:"landing-popup-features-content-block-btn ui-btn ui-btn-xs ui-btn-round ui-btn-no-caps ui-btn-light-border"},attrs:{type:"button",value:BX.message("LANDING_TPL_FEATURES_SETTINGS")},events:{click:function(){var e=BX.Landing.PageObject.getEditorWindow();var n=e.document.querySelector('div[data-subtype="form"]');var t=function(e){if(e){var n=e.getAttribute("id").substr(5);if(n){var t=BX.Landing.PageObject.getBlocks().get(n);t.onShowContentPanel()}}};if(!n){var i=BX.Landing.PageObject.getBlocks();BX.Landing.Main.getInstance().currentBlock=i.length<=2?i[1]:i[i.length-2];var a=BX.Landing.Main.getInstance();var o=BX.Landing.PageObject.getEditorWindow();a.currentArea=o.document.body.querySelector(".landing-main");a.onAddBlock("33.13.form_2_light_no_text").then((function(e){e.setAttribute("data-subtype","form");var n=1e3;var i=0;var a=function(){requestAnimationFrame((function(){if(e.querySelector(".b24-form div[id]")){t(e)}else{if(i<n){i+=1;a()}}}))};a()}))}else{t(n)}l.close()}.bind(this)}})]})]}),this.draftMode?null:BX.create("div",{props:{className:"landing-popup-features-content-block landing-popup-features-content-dflex"},children:[BX.create("div",{html:'<div class="ui-icon ui-icon ui-icon-service-livechat landing-popup-features-icon-2 ui-icon-md"><i></i></div>'}),BX.create("div",{style:{flexGrow:1},children:[BX.create("div",{props:{className:"landing-popup-features-content-block-title"},text:BX.message("LANDING_TPL_FEATURES_OL_TITLE")}),BX.create("a",{props:{className:"landing-popup-features-content-block-link"},text:BX.message("LANDING_TPL_FEATURES_OL_PROMO_LINK"),attrs:{href:"#"},events:{click:function(){if(this.helperFrameOpenUrl){BX.Helper.show("redirect=detail&code="+this.helpCodes["widget_general"][0])}BX.PreventDefault()}.bind(this)}})]}),BX.create("div",{children:[BX.create("input",{props:{className:"landing-popup-features-content-block-btn ui-btn ui-btn-xs ui-btn-round ui-btn-no-caps ui-btn-light-border"},attrs:{type:"button",value:BX.message("LANDING_TPL_FEATURES_SETTINGS")},events:{click:function(){var e=BX.Landing.Main.getInstance().options.hooks["B24BUTTON"];if(e&&e["ID"]){BX.SidePanel.Instance.open("/crm/button/edit/"+e["ID"]+"/",{allowChangeHistory:false,cacheable:false})}else{BX.SidePanel.Instance.open(BX.message["LANDING_PAR_PAGE_URL_SITE_EDIT"]+"#b24widget",{allowChangeHistory:false,cacheable:false})}}.bind(this)}})]})]}),BX.create("div",{props:{className:"landing-popup-features-content-row"},children:[BX.create("div",{style:{marginRight:"12px",flexGrow:1},props:{className:"landing-popup-features-content-block landing-popup-features-content-dflex"},children:[BX.create("div",{html:'<div class="ui-icon ui-icon-service-light-common landing-popup-features-icon-3"><i></i></div>'}),BX.create("div",{children:[BX.create("div",{props:{className:"landing-ui-panel-top-menu-link-help"},text:BX.message("LANDING_TPL_FEATURES_HELP_TITLE")}),BX.create("a",{props:{className:"landing-popup-features-content-block-link"},text:BX.message("LANDING_TPL_FEATURES_HELP_PROMO_LINK"),attrs:{href:"#"}})]})],events:{click:function(){BX.fireEvent(BX(e.getAttribute("data-feedback")),"click")}}}),s]})]}),closeIcon:false,titleBar:false,closeByEsc:true,animation:"fading-slide",noAllPaddings:true,angle:{position:"top",offset:115},minWidth:410,background:"#E9EAED",contentBackground:"transparent"})}var n=window.addEventListener("blur",(function(){l.close();window.removeEventListener("blur",n)}));l.toggle();BX.PreventDefault()}.bind(this))}else{BX.removeClass(s,"landing-popup-features-content-block");var r=BX("landing-panel-settings-kb");if(BX.Type.isDomNode(r)){r.appendChild(s)}}if(BX("landing-design-block-close")){BX("landing-design-block-close").addEventListener("click",(function(){BX.SidePanel.Instance.close()}))}var d=document.querySelector(".landing-form-editor-share-button");if(BX.Type.isDomNode(d)){BX.Event.bind(d,"click",this.onCrmFormShareButtonClick.bind(this))}var c=document.querySelector(".landing-ui-panel-top-menu-link-settings");if(BX.Type.isDomNode(c)){BX.Event.bind(c,"click",this.onSettingsClick.bind(this))}},onCrmFormShareButtonClick:function(e){e.preventDefault();if(!this.formSharePopup){this.formSharePopup=new BX.Landing.Form.SharePopup({bindElement:e.currentTarget})}this.formSharePopup.show()},getErrorClickHandler:function(e){if(e==="LANDING_PAYMENT_FAILED_BLOCK"){return function(){var e=BX.Landing.PageObject.getBlocks();for(var n=0,t=e.length;n<t;n++){if(!e[n].isAllowedByTariff()){e[n].getBlockNode().scrollIntoView()}}}}else if(e==="FREE_DOMAIN_IS_NOT_ALLOWED"){return function(){BX.UI.InfoHelper.show("limit_free_domen")}}else if(e==="EMAIL_NOT_CONFIRMED"){return function(){BX.UI.InfoHelper.show("limit_sites_confirm_email")}}else if(e==="PUBLIC_PAGE_REACHED"||e==="PUBLIC_SITE_REACHED"||e==="PUBLIC_SITE_REACHED_FREE"||e==="TOTAL_SITE_REACHED"){if(e==="PUBLIC_PAGE_REACHED"){return function(){BX.UI.InfoHelper.show("limit_sites_number_page")}}else if(e==="PUBLIC_SITE_REACHED_FREE"){return function(){BX.UI.InfoHelper.show("limit_sites_free")}}else{if(this.storeEnabled){return function(){BX.UI.InfoHelper.show("limit_shop_number")}}else{return function(){BX.UI.InfoHelper.show("limit_sites_number")}}}}return null},getErrorButtonTitle:function(e){if(e==="LANDING_PAYMENT_FAILED_BLOCK"){return BX.message("LANDING_PUBLICATION_GOTO_BLOCK")}else if(e==="EMAIL_NOT_CONFIRMED"){return BX.message("LANDING_PUBLICATION_CONFIRM_EMAIL")}else if(e==="FREE_DOMAIN_IS_NOT_ALLOWED"||e==="PUBLIC_PAGE_REACHED"||e==="PUBLIC_SITE_REACHED"||e==="TOTAL_SITE_REACHED"||e==="PUBLIC_SITE_REACHED_FREE"){return BX.message("LANDING_PUBLICATION_BUY_RENEW")}},getErrorMessageBlock:function(){if(BX("landing-popup-publication-error-area").hasAttribute("data-error")){var e=BX("landing-popup-publication-error-area").getAttribute("data-error");var n=document.querySelector("#landing-popup-publication-error-area");var t=this.getErrorButtonTitle(e);var i=this.getErrorClickHandler(e);return BX.create("div",{props:{className:"landing-popup-publication-error-content-block landing-popup-features-content-dflex"},children:[BX.create("div",{props:{className:"landing-popup-publication-error-content-icon"},html:'<svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.189937" d="M18 36.5C27.9411 36.5 36 28.4411 36 18.5C36 8.55887 27.9411 0.5 18 0.5C8.05887 0.5 0 8.55887 0 18.5C0 28.4411 8.05887 36.5 18 36.5Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M23.1036 24.1965H13.238C13.1535 24.1965 13.0699 24.1933 12.987 24.1871C10.7573 24.1352 8.96548 22.2714 8.96548 19.98C8.96613 18.8631 9.40079 17.7923 10.1738 17.003C10.5701 16.5984 11.0386 16.2848 11.5484 16.0754C11.5398 15.9617 11.5355 15.8468 11.5355 15.731C11.5362 14.5525 11.9948 13.4226 12.8105 12.5898C13.6262 11.7571 14.7321 11.2896 15.885 11.2903C17.3618 11.2922 18.6655 12.0471 19.4492 13.1992C19.8212 13.0645 20.2217 12.9912 20.639 12.9914C22.4825 12.9937 23.9966 14.4301 24.1721 16.2671C25.9384 16.6608 27.2602 18.2693 27.2587 20.1924C27.2569 22.4087 25.4983 24.2041 23.3301 24.2032C23.2541 24.2032 23.1786 24.2008 23.1036 24.1965Z" fill="white"/></svg>'}),BX.create("div",{style:{flexGrow:1},children:[BX.create("div",{props:{className:"landing-popup-publication-error-content-block-title"},html:n.getAttribute("data-error-title")||BX.message("LANDING_PUBLICATION_AUTO_OFF")}),BX.create("span",{props:{className:"landing-popup-publication-error-content-block-text"},text:n.getAttribute("data-error-description")})]}),i?BX.create("div",{children:[BX.create("a",{props:{className:"landing-btn-buy-renew ui-btn ui-btn-xs ui-btn-no-caps ui-btn-round"},text:t,events:{click:i}})]}):null]})}else{return false}},onSettingsClick:function(){if(typeof landingParams["PAGE_URL_LANDING_SETTINGS"]!=="undefined"&&typeof BX.SidePanel!=="undefined"){BX.SidePanel.Instance.open(landingParams["PAGE_URL_LANDING_SETTINGS"])}}};BX.Landing.Component.View.AutoPublication=function(e){this.blockId=null;this.landingId=null;this.fullPublication=false;this.pendingPublication=false;this.editorEnabled=false;this.pageIsUnActive=e.pageIsUnActive;this.allowedCommands={"Landing::upBlock":true,"Landing::downBlock":true,"Landing::showBlock":true,"Landing::hideBlock":true,"Landing::markDeletedBlock":true,"Landing::addBlock":true,"Landing::copyBlock":true,"Landing::moveBlock":true,"Block::changeNodeName":true,"Block::updateContent":true,"Landing\\Block::addCard":true,"Landing\\Block::cloneCard":true,"Landing\\Block::removeCard":true,"Landing\\Block::updateNodes":true,"Landing\\Block::updateStyles":true};this.fullPublicationCommands={"Landing::upBlock":true,"Landing::downBlock":true,"Landing::addBlock":true,"Landing::copyBlock":true,"Landing::moveBlock":true,"Landing::markDeletedBlock":true};BX.addCustomEvent("BX.Landing.Editor:enable",BX.delegate(this.enableEditor,this));BX.addCustomEvent("BX.Landing.Editor:disable",BX.delegate(this.disableEditor,this));BX.addCustomEvent("BX.Landing.Backend:action",BX.delegate(this.onAction,this));BX.addCustomEvent("BX.Landing.Backend:batch",BX.delegate(this.onAction,this))};BX.Landing.Component.View.AutoPublication.prototype={enableEditor:function(){this.editorEnabled=true},disableEditor:function(){if(this.pendingPublication){this.processing()}this.editorEnabled=false;this.pendingPublication=false},getStatusArea:function(){var e=BX.Landing.PageObject.getRootWindow();return e.document.querySelector("#landing-popup-publication-btn")},getErrorArea:function(){var e=BX.Landing.PageObject.getRootWindow();return e.document.querySelector("#landing-popup-publication-error-area")},resolveEntityId:function(e,n){if(typeof e[n]!=="undefined"){return parseInt(e[n])}var t=Object.keys(e);for(var i=0,a=t.length;i<a;i++){if(typeof e[t[i]].data!=="undefined"&&typeof e[t[i]].data[n]!=="undefined"){return parseInt(e[t[i]].data[n])}}return null},isActionAllowed:function(e){this.fullPublication=this.fullPublicationCommands[e]===true;return this.allowedCommands[e]===true},onAction:function(e,n){if(this.isActionAllowed(e)){this.blockId=this.resolveEntityId(n,"block");this.landingId=this.resolveEntityId(n,"lid");this.revertStatusMessage();if(this.editorEnabled){this.pendingPublication=true}else{this.processing()}}},actualizeStatusMessage:function(){if(!top.window.autoPublicationEnabled){this.revertStatusMessage()}else{this.updateStatusMessage()}},updateStatusMessage:function(){BX.message({LANDING_PAGE_STATUS_UPDATED:BX.message("LANDING_PAGE_STATUS_PUBLIC"),LANDING_PAGE_STATUS_UPDATED_NOW:BX.message("LANDING_PAGE_STATUS_PUBLIC_NOW")});BX.Landing.UI.Panel.StatusPanel.getInstance().update()},revertStatusMessage:function(){BX.message({LANDING_PAGE_STATUS_UPDATED:BX.message("LANDING_PAGE_STATUS_UPDATED_ORIG"),LANDING_PAGE_STATUS_UPDATED_NOW:BX.message("LANDING_PAGE_STATUS_UPDATED_NOW_ORIG")});BX.Landing.UI.Panel.StatusPanel.getInstance().update()},processing:function(){this.actualizeStatusMessage();if(!top.window.autoPublicationEnabled){this.blockId=null;this.landingId=null;return}if(this.blockId||this.fullPublication){setTimeout(function(){BX.addClass(this.getStatusArea(),"landing-ui-panel-top-pub-btn-loader");const e=this.fullPublication||this.pageIsUnActive?"Landing::publication":"Block::publication";BX.Landing.Backend.getInstance().action(e,{block:this.blockId,lid:this.landingId}).then((e=>{this.pageIsUnActive=false;this.setSuccess()})).catch(function(e){if(e.result&&typeof e.result[0]!=="undefined"){this.setError(e.result[0])}else{this.setError({error:"system_error",error_description:"System error"})}}.bind(this));this.blockId=null;this.landingId=null}.bind(this),0)}},setSuccess:function(){var e=this.getErrorArea();var n=this.getStatusArea();e.removeAttribute("data-error");e.removeAttribute("data-error-description");BX.addClass(n,"landing-ui-panel-top-pub-btn-success");BX.removeClass(n,"landing-ui-panel-top-pub-btn-error");BX.removeClass(n,"landing-ui-panel-top-pub-btn-loader");setTimeout(function(){n.style.backgroundColor="";BX.removeClass(n,"landing-ui-panel-top-pub-btn-success")}.bind(this),1e3)},setError:function(e){var n=this.getErrorArea();var t=this.getStatusArea();BX.removeClass(t,"landing-ui-panel-top-pub-btn-loader");BX.addClass(t,"landing-ui-panel-top-pub-btn-error");n.setAttribute("data-error-description",e.error_description);n.setAttribute("data-error",e.error)}};BX.Landing.Component.View.changeTop=function(e,n){n=n||{};if(typeof n.changeState==="undefined"){n.changeState=true}BX.ajax({url:BX.util.add_url_param(window.location.href,{action:"changeTop"}),method:"POST",data:{param:e,sessid:BX.message("bitrix_sessid"),actionType:"json"},dataType:"json",onsuccess:function(e){BX.Landing.Component.View.instance.closeAllPopupsMenu();BX.Landing.Component.View.instance.setNewOptions(e);BX.Landing.Component.View.instance.buildTop({changeState:n.changeState})}})}})();var landingAlertMessage=function e(n,t,i){if(t===true&&(i==="PUBLIC_SITE_REACHED"||i==="PUBLIC_SITE_REACHED_FREE")){(function(){if(landingSiteType==="STORE"){top.BX.UI.InfoHelper.show("limit_shop_number")}else{top.BX.UI.InfoHelper.show("limit_sites_number")}})()}else if(i==="FREE_DOMAIN_IS_NOT_ALLOWED"){top.BX.UI.InfoHelper.show("limit_free_domen")}else if(i==="EMAIL_NOT_CONFIRMED"){top.BX.UI.InfoHelper.show("limit_sites_confirm_email")}else if(t===true&&typeof BX.Landing.PaymentAlertShow!=="undefined"){BX.Landing.PaymentAlertShow({message:n})}else{var a=BX.Landing.UI.Tool.ActionDialog.getInstance();a.show({content:n,confirm:"OK",contentColor:"grey",type:"alert"})}};
/* End */
;
; /* Start:"a:4:{s:4:"full";s:90:"/bitrix/components/bitrix/landing.selector/templates/.default/script.min.js?16763769005643";s:6:"source";s:71:"/bitrix/components/bitrix/landing.selector/templates/.default/script.js";s:3:"min";s:75:"/bitrix/components/bitrix/landing.selector/templates/.default/script.min.js";s:3:"map";s:75:"/bitrix/components/bitrix/landing.selector/templates/.default/script.map.js";}"*/
this.BX=this.BX||{};this.BX.Landing=this.BX.Landing||{};(function(e,a,t){"use strict";var l,i,s,r,n,d,b,o;function c(e,a){h(e,a);a.add(e)}function v(e,a,t){h(e,a);a.set(e,t)}function h(e,a){if(a.has(e)){throw new TypeError("Cannot initialize the same private elements twice on an object")}}function p(e,a,t){if(!a.has(e)){throw new TypeError("attempted to get private field on non-instance")}return t}var u=new WeakMap;var g=new WeakMap;var H=new WeakMap;var F=new WeakMap;var P=new WeakMap;var w=new WeakMap;var f=new WeakMap;var G=new WeakMap;var S=new WeakMap;var k=new WeakMap;var m=new WeakMap;var L=new WeakMap;var T=new WeakMap;var M=new WeakSet;var W=new WeakSet;var E=new WeakSet;var I=new WeakSet;var A=new WeakSet;var B=new WeakSet;var C=function(){function e(a){babelHelpers.classCallCheck(this,e);c(this,B);c(this,A);c(this,I);c(this,E);c(this,W);c(this,M);v(this,u,{writable:true,value:null});v(this,g,{writable:true,value:void 0});v(this,H,{writable:true,value:void 0});v(this,F,{writable:true,value:void 0});v(this,P,{writable:true,value:void 0});v(this,w,{writable:true,value:void 0});v(this,f,{writable:true,value:void 0});v(this,G,{writable:true,value:void 0});v(this,S,{writable:true,value:void 0});v(this,k,{writable:true,value:void 0});v(this,m,{writable:true,value:void 0});v(this,L,{writable:true,value:void 0});v(this,T,{writable:true,value:void 0});babelHelpers.classPrivateFieldSet(this,g,a.node);babelHelpers.classPrivateFieldSet(this,H,a.input);babelHelpers.classPrivateFieldSet(this,F,a.urlLandingAdd||null);babelHelpers.classPrivateFieldSet(this,P,a.urlFolderAdd||null);babelHelpers.classPrivateFieldSet(this,w,a.urlFormAdd||null);babelHelpers.classPrivateFieldSet(this,f,a.siteType);babelHelpers.classPrivateFieldSet(this,G,a.siteId);this.folderId=a.folderId;this.landingId=a.landingId;babelHelpers.classPrivateFieldSet(this,S,a.items||[]);babelHelpers.classPrivateFieldSet(this,k,a.onSelect);babelHelpers.classPrivateFieldSet(this,m,BX("landing-selector"));if(babelHelpers.classPrivateFieldGet(this,g)){t.Event.bind(babelHelpers.classPrivateFieldGet(this,H),"click",p(this,W,D).bind(this));t.Event.bind(babelHelpers.classPrivateFieldGet(this,H),"input",p(this,B,O).bind(this))}}babelHelpers.createClass(e,[{key:"onAddPage",value:function e(){alert(this.landingId)}},{key:"onAddFolder",value:function e(){alert(this.folderId)}}]);return e}();function X(){if(!babelHelpers.classPrivateFieldGet(this,u)){babelHelpers.classPrivateFieldSet(this,u,new a.Dialog({targetNode:babelHelpers.classPrivateFieldGet(this,g),width:565,height:300,enableSearch:false,dropdownMode:true,showAvatars:true,compactView:false,dynamicLoad:true,multiple:false,context:"landing",entities:[{id:"landing",options:{siteType:babelHelpers.classPrivateFieldGet(this,f),siteId:babelHelpers.classPrivateFieldGet(this,G),landingId:this.landingId}}],items:babelHelpers.classPrivateFieldGet(this,S),events:{onHide:p(this,I,_).bind(this),"Item:onSelect":babelHelpers.classPrivateFieldGet(this,k)},footer:[babelHelpers.classPrivateFieldGet(this,F)?t.Tag.render(l||(l=babelHelpers.taggedTemplateLiteral(['<a href="','" class="ui-selector-footer-link ui-selector-footer-link-add">',"</a>"])),babelHelpers.classPrivateFieldGet(this,F),t.Loc.getMessage("LANDING_SELECTOR_ADD_PAGE")):t.Tag.render(i||(i=babelHelpers.taggedTemplateLiteral([""]))),babelHelpers.classPrivateFieldGet(this,F)?t.Tag.render(s||(s=babelHelpers.taggedTemplateLiteral(['<span class="ui-selector-footer-conjunction">',"</span>"])),t.Loc.getMessage("LANDING_SELECTOR_ADD_OR")):t.Tag.render(r||(r=babelHelpers.taggedTemplateLiteral([""]))),babelHelpers.classPrivateFieldGet(this,P)?t.Tag.render(n||(n=babelHelpers.taggedTemplateLiteral(['<a href="','" class="ui-selector-footer-link">',"</a>"])),babelHelpers.classPrivateFieldGet(this,P),t.Loc.getMessage("LANDING_SELECTOR_ADD_FOLDER")):t.Tag.render(d||(d=babelHelpers.taggedTemplateLiteral([""]))),babelHelpers.classPrivateFieldGet(this,w)?t.Tag.render(b||(b=babelHelpers.taggedTemplateLiteral(['<a href="','" class="ui-selector-footer-link ui-selector-footer-link-add">',"</a>"])),babelHelpers.classPrivateFieldGet(this,w),t.Loc.getMessage("LANDING_SELECTOR_ADD_FORM")):t.Tag.render(o||(o=babelHelpers.taggedTemplateLiteral([""])))]}))}return babelHelpers.classPrivateFieldGet(this,u)}function D(){p(this,E,y).call(this)}function y(){p(this,M,X).call(this).show();p(this,A,N).call(this);BX.addClass(babelHelpers.classPrivateFieldGet(this,g),"landing-selector-active")}function _(){var e=this;if(babelHelpers.classPrivateFieldGet(this,T)===true){BX.addClass(babelHelpers.classPrivateFieldGet(this,L),"landing-selector-overlay-hiding");setTimeout((function(){BX.removeClass(babelHelpers.classPrivateFieldGet(e,L),"landing-selector-overlay-hiding");BX.remove(babelHelpers.classPrivateFieldGet(e,L))}),200);babelHelpers.classPrivateFieldSet(this,T,false)}BX.removeClass(babelHelpers.classPrivateFieldGet(this,g),"landing-selector-active")}function N(){if(!babelHelpers.classPrivateFieldGet(this,L)){babelHelpers.classPrivateFieldSet(this,L,BX.create("div",{props:{className:"landing-selector-overlay"}}))}if(babelHelpers.classPrivateFieldGet(this,T)!==true){document.querySelector(".landing-ui-panel.landing-ui-panel-top").appendChild(babelHelpers.classPrivateFieldGet(this,L));babelHelpers.classPrivateFieldSet(this,T,true)}}function O(e){if(babelHelpers.classPrivateFieldGet(this,u)){babelHelpers.classPrivateFieldGet(this,u).show();babelHelpers.classPrivateFieldGet(this,u).search(e.srcElement.value)}}e.Selector=C})(this.BX.Landing.Component=this.BX.Landing.Component||{},BX.UI.EntitySelector,BX);
/* End */
;; /* /bitrix/components/bitrix/landing.landing_view/templates/.default/script.min.js?167637690630160*/
; /* /bitrix/components/bitrix/landing.selector/templates/.default/script.min.js?16763769005643*/

//# sourceMappingURL=page_86ac30547f03510b18723367bc93c880.map.js