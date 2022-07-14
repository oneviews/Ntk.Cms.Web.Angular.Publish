"use strict";(self.webpackChunkntk_cms_web=self.webpackChunkntk_cms_web||[]).push([[6554],{3435:(E,v,n)=>{n.d(v,{b:()=>u});var e=n(7969),f=n(2340),r=n(9724),_=n(727),t=n(3029),i=n(7977),l=n(2607);let u=(()=>{class d{constructor(s,o,h,m,p,S){this.el=s,this.renderer=o,this.tokenHelper=h,this.publicHelper=m,this.coreGuideService=p,this.cmsToastrService=S,this.offset=10,this.lang="",this.statusIsRun=!1,this.tokenHelper.getCurrentToken().then(c=>{this.lang=c.language})}onMouseEnter(){this.tooltip||(this.tokenHelper.getCurrentToken().then(s=>{this.lang=s.language}),this.show())}onMouseLeave(){this.statusIsRun=!1,this.tooltip&&this.hide()}show(){this.Identity&&this.Identity>0?(this.statusIsRun=!0,this.coreGuideService.ServiceGetOneById(this.Identity).pipe((0,e.U)(s=>{if(0!=this.statusIsRun)if(s.isSuccess){switch(this.lang){case"fa":default:this.create(s.item.descriptionFa);break;case"en":this.create(s.item.descriptionEn);break;case"ar":this.create(s.item.descriptionAr);break;case"de":this.create(s.item.descriptionDe)}this.setPosition(),this.renderer.addClass(this.tooltip,"ng-tooltip-show")}else f.N.production||(console.log("tooltip",s.errorMessage),this.cmsToastrService.typeErrorMessage(s.errorMessage)),this.create("Identity :"+this.Identity),this.setPosition(),this.renderer.addClass(this.tooltip,"ng-tooltip-show");else this.tooltip&&this.hide()},s=>{f.N.production||this.cmsToastrService.typeError(s)})).toPromise()):this.tooltipGuide&&this.tooltipGuide.length>0&&(this.statusIsRun=!0,this.coreGuideService.ServiceGetOneByKey(this.tooltipGuide).pipe((0,e.U)(s=>{if(0!=this.statusIsRun)if(s.isSuccess){switch(this.lang){case"fa":default:this.create(s.item.descriptionFa);break;case"en":this.create(s.item.descriptionEn);break;case"ar":this.create(s.item.descriptionAr);break;case"de":this.create(s.item.descriptionDe)}this.setPosition(),this.renderer.addClass(this.tooltip,"ng-tooltip-show")}else f.N.production||(console.log("tooltip",s.errorMessage),this.cmsToastrService.typeErrorMessage(s.errorMessage)),this.create("Key :"+this.tooltipGuide),this.setPosition(),this.renderer.addClass(this.tooltip,"ng-tooltip-show");else this.tooltip&&this.hide()},s=>{f.N.production||this.cmsToastrService.typeError(s)})).toPromise())}hide(){this.renderer.removeClass(this.tooltip,"ng-tooltip-show"),window.setTimeout(()=>{this.renderer.removeChild(document.body,this.tooltip),this.tooltip=null},this.delay)}create(s){this.tooltip=this.renderer.createElement("span"),(s+="").indexOf("</")>0||s.indexOf("/>")>0||this.publicHelper.checkIsHTML(s)?this.tooltip.insertAdjacentHTML("beforeend",s):this.renderer.appendChild(this.tooltip,this.renderer.createText(s)),this.renderer.appendChild(document.body,this.tooltip),this.renderer.addClass(this.tooltip,"ng-tooltip"),this.renderer.addClass(this.tooltip,`ng-tooltip-${this.placement}`),this.renderer.setStyle(this.tooltip,"-webkit-transition",`opacity ${this.delay}ms`),this.renderer.setStyle(this.tooltip,"-moz-transition",`opacity ${this.delay}ms`),this.renderer.setStyle(this.tooltip,"-o-transition",`opacity ${this.delay}ms`),this.renderer.setStyle(this.tooltip,"transition",`opacity ${this.delay}ms`)}setPosition(){const s=this.el.nativeElement.getBoundingClientRect(),o=this.tooltip.getBoundingClientRect(),h=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;let m=0,p=0;"top"===this.placement&&(m=s.top-o.height-this.offset,p=s.left+(s.width-o.width)/2),"bottom"===this.placement&&(m=s.bottom+this.offset,p=s.left+(s.width-o.width)/2),"left"===this.placement&&(m=s.top+(s.height-o.height)/2,p=s.left-o.width-this.offset),"right"===this.placement&&(m=s.top+(s.height-o.height)/2,p=s.right+this.offset),this.renderer.setStyle(this.tooltip,"top",`${m+h}px`),this.renderer.setStyle(this.tooltip,"left",`${p}px`)}}return d.\u0275fac=function(s){return new(s||d)(r.Y36(r.SBq),r.Y36(r.Qsj),r.Y36(_.v),r.Y36(t.i),r.Y36(i.LOT),r.Y36(l.e))},d.\u0275dir=r.lG2({type:d,selectors:[["","tooltipGuide",""]],hostBindings:function(s,o){1&s&&r.NdJ("mouseenter",function(){return o.onMouseEnter()})("mouseleave",function(){return o.onMouseLeave()})},inputs:{tooltipGuide:"tooltipGuide",Identity:"Identity",placement:"placement",delay:"delay"}}),d})()},656:(E,v,n)=>{n.d(v,{O:()=>r});var e=n(2340);class f{constructor(){this.inRun=!1,this.title=""}}class r{constructor(){this.message="\u062f\u0631 \u062d\u0627\u0644 \u062f\u0631\u06cc\u0627\u0641\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a",this.diameter=20,this.strokeWidth=50,this.backdropEnabled=!0,this.Globally=!0,this.positionGloballyCenter=!0,this.display=!1,this.consoleLog=!0,this.guid="",this.processInfo=new Map,this.guid=`${this.S4()}${this.S4()}-${this.S4()}-${this.S4()}-${this.S4()}-${this.S4()}${this.S4()}${this.S4()}`,this.consoleLog=e.N.ProgressConsoleLog,this.mode="indeterminate"}S4(){return(65536*(1+Math.random())|0).toString(16).substring(1)}displayItem(t){if(!this.processInfo)return!1;for(const[i,l]of this.processInfo)if(i===t)return l.inRun;return!1}Start(t,i="----"){let l=new f;l.inRun=!0,l.title=i,this.processInfo.set(t,l);const u=[];for(const[d,a]of this.processInfo)a&&!0===a.inRun&&u.push(d);this.processRunList=u,u&&u.length>0?this.display=!0:(this.processInfo=new Map,this.display=!1),this.consoleLog&&console.log(this.guid,"Start:",name,"Globally:",this.Globally,"Display:",this.display,"key:",t,"title:",l.title,"processRunList:",this.processRunList),this.cdr&&!this.display&&this.cdr.detectChanges()}Stop(t){let i=this.processInfo.get(t);i||(i=new f),i.inRun=!1,this.processInfo.set(t,i);const l=[];for(const[u,d]of this.processInfo)d&&!0===d.inRun&&l.push(u);this.processRunList=l,l&&l.length>0?this.display=!0:(this.processInfo=new Map,this.display=!1),this.consoleLog&&console.log(this.guid,"Stop:",name,"Globally:",this.Globally,"Display:","Display:",this.display,"key:",t,"title:",i.title,"processRunList:",this.processRunList),this.cdr&&!this.display&&this.cdr.detectChanges()}}},6318:(E,v,n)=>{n.d(v,{S:()=>m});var e=n(1048),f=n(7076),r=n(7977),_=n(4970),t=n(9724),i=n(1436),l=n(2607),u=n(727),d=n(4817),a=n(562),s=n(3435);const o=function(p){return{active:p}};function h(p,S){if(1&p){const c=t.EpF();t.TgZ(0,"li",7)(1,"a",8),t.NdJ("click",function(){const C=t.CHM(c).$implicit;return t.oxw().setLanguageWithRefresh(C.lang)}),t.TgZ(2,"span",9),t._UZ(3,"img",10),t.qZA(),t.TgZ(4,"span",11),t._uU(5),t.qZA()()()}if(2&p){const c=S.$implicit;t.Q6J("ngClass",t.VKq(4,o,c.active)),t.xp6(1),t.Q6J("ngClass",t.VKq(6,o,c.active)),t.xp6(2),t.s9C("src",c.flag,t.LSH),t.xp6(2),t.Oqu(c.name)}}let m=(()=>{class p{constructor(c,g,D,C,y,M,O,I){this.document=c,this.translationService=g,this.coreAuthService=D,this.cmsToastrService=C,this.tokenHelper=y,this.router=M,this.cdr=O,this.translate=I,this.id=++p.nextId,this.languages=[{lang:"fa",name:"\u0641\u0627\u0631\u0633\u06cc",flag:"./assets/media/svg/flags/136-iran.svg"},{lang:"ar",name:"\u0639\u0631\u0628\u06cc",flag:"./assets/media/svg/flags/008-saudi-arabia.svg"},{lang:"en",name:"English",flag:"./assets/media/svg/flags/226-united-states.svg"},{lang:"tr",name:"Turkish",flag:"./assets/media/svg/flags/006-turkey.svg"},{lang:"zh",name:"China",flag:"./assets/media/svg/flags/015-china.svg"},{lang:"es",name:"Spanish",flag:"./assets/media/svg/flags/128-spain.svg"},{lang:"ja",name:"Japanese",flag:"./assets/media/svg/flags/063-japan.svg"},{lang:"de",name:"German",flag:"./assets/media/svg/flags/162-germany.svg"},{lang:"fr",name:"French",flag:"./assets/media/svg/flags/195-france.svg"}],this.tokenInfo=new r.OdC,this.tokenHelper.getCurrentToken().then(T=>{this.tokenInfo=T}),this.cmsApiStoreSubscribe=this.tokenHelper.getCurrentTokenOnChange().subscribe(T=>{this.tokenInfo=T,this.setLanguage(T.language)})}ngOnInit(){this.setSelectedLanguage(),this.router.events.pipe((0,_.h)(c=>c instanceof f.OD)).subscribe(c=>{this.setSelectedLanguage()})}ngOnDestroy(){this.cmsApiStoreSubscribe.unsubscribe()}setLanguageWithRefresh(c){if(this.setLanguage(c),this.tokenInfo&&this.tokenInfo.userId>0){const g=new r.nVm;g.userAccessAdminAllowToProfessionalData=this.tokenInfo.userAccessAdminAllowToProfessionalData,g.userAccessAdminAllowToAllData=this.tokenInfo.userAccessAdminAllowToAllData,g.userId=this.tokenInfo.userId,g.siteId=this.tokenInfo.siteId,g.lang=c;const D=this.translate.instant("TITLE.Information"),C=this.translate.instant("MESSAGE.Request_to_change_language_was_sent_to_the_server");this.cmsToastrService.toastr.info(C,D),this.coreAuthService.ServiceRenewToken(g).subscribe(y=>{y.isSuccess?(this.cdr.detectChanges(),y.item.language===c?this.cmsToastrService.toastr.success(this.translate.instant("MESSAGE.New_language_acess_confirmed"),D):this.cmsToastrService.toastr.warning(this.translate.instant("ERRORMESSAGE.MESSAGE.New_language_acess_denied"),D)):this.cmsToastrService.typeErrorAccessChange(y.errorMessage)},y=>{this.cmsToastrService.typeErrorAccessChange(y)})}}setLanguage(c){this.languages.forEach(g=>{g.lang===c?(g.active=!0,this.language=g):g.active=!1}),this.translationService.setLanguage(c)}setSelectedLanguage(){this.setLanguage(this.translationService.getSelectedLanguage())}}return p.nextId=0,p.\u0275fac=function(c){return new(c||p)(t.Y36(e.K0),t.Y36(i.D),t.Y36(r.Z8z),t.Y36(l.e),t.Y36(u.v),t.Y36(f.F0),t.Y36(t.sBO),t.Y36(d.sK))},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-language-selector"]],decls:7,vars:4,consts:[["ngbDropdown","","placement","bottom-right",1,"dropdown",3,"autoClose"],["ngbDropdownToggle","","data-toggle","dropdown","data-offset","10px,0px",1,"topbar-item"],[1,"btn","btn-icon","btn-clean","btn-dropdown","btn-lg","mr-1"],["alt","language",1,"h-25px","w-25px","rounded",3,"tooltipGuide","src"],["ngbDropdownMenu","",1,"dropdown-menu","p-0","m-0","dropdown-menu-anim-up","dropdown-menu-sm","dropdown-menu-right"],[1,"navi","navi-hover","py-4"],["class","navi-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"navi-item",3,"ngClass"],["href","javascript:;",1,"navi-link",3,"ngClass","click"],[1,"symbol","symbol-20","mr-3"],[3,"src"],[1,"navi-text"]],template:function(c,g){1&c&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.qZA()(),t.TgZ(4,"div",4)(5,"ul",5),t.YNc(6,h,6,8,"li",6),t.qZA()()()),2&c&&(t.Q6J("autoClose",!0),t.xp6(3),t.s9C("src",null==g.language?null:g.language.flag,t.LSH),t.Q6J("tooltipGuide","main"),t.xp6(3),t.Q6J("ngForOf",g.languages))},directives:[a.jt,a.iD,s.b,a.Vi,e.sg,e.mk],encapsulation:2}),p})()},486:(E,v,n)=>{n.d(v,{Z:()=>f});var e=n(9724);let f=(()=>{class r{constructor(){this.id=++r.nextId,this.passwordStrength=new e.vpe,this.msg="",this.colors=["darkred","orangered","orange","yellowgreen"]}static checkStrength(t){let i=0;const o=[/[a-z]+/.test(t),/[A-Z]+/.test(t),/[0-9]+/.test(t),/[$-/:-?{-~!"^_@`\[\]]/g.test(t)];let h=0;for(const m of o)h+=!0===m?1:0;return i+=2*t.length+(t.length>=10?1:0),i+=10*h,i=t.length<=6?Math.min(i,10):i,i=1===h?Math.min(i,10):i,i=2===h?Math.min(i,20):i,i=3===h?Math.min(i,30):i,i=4===h?Math.min(i,40):i,i}ngOnChanges(t){const i=t.passwordToCheck.currentValue;if(this.setBarColors(4,"#DDD"),i){const l=this.getColor(r.checkStrength(i));switch(this.setBarColors(l.idx,l.col),40===r.checkStrength(i)?this.passwordStrength.emit(!0):this.passwordStrength.emit(!1),l.idx){case 1:this.msg="Poor";break;case 2:this.msg="Not Good";break;case 3:this.msg="Average";break;case 4:this.msg="Good"}}else this.msg=""}getColor(t){let i=0;return i=t<=10?0:t<=20?1:t<=30?2:t<=40?3:4,{idx:i+1,col:this.colors[i]}}setBarColors(t,i){for(let l=0;l<t;l++)this["bar"+l]=i}}return r.nextId=0,r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-password-strength"]],inputs:{passwordToCheck:"passwordToCheck"},outputs:{passwordStrength:"passwordStrength"},features:[e.TTD],decls:9,vars:9,consts:[[1,"strength"],[1,"strengthBar"],[1,"point"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"ul",1),e._UZ(2,"li",2)(3,"li",2)(4,"li",2)(5,"li",2),e.qZA(),e._UZ(6,"br"),e.TgZ(7,"p"),e._uU(8),e.qZA()()),2&t&&(e.xp6(2),e.Udp("background-color",i.bar0),e.xp6(1),e.Udp("background-color",i.bar1),e.xp6(1),e.Udp("background-color",i.bar2),e.xp6(1),e.Udp("background-color",i.bar3),e.xp6(3),e.Oqu(i.msg))},styles:[".strengthBar[_ngcontent-%COMP%]{display:inline;list-style:none;margin:0;padding:0;vertical-align:2px}.point[_ngcontent-%COMP%]:last-of-type{margin:0!important}.point[_ngcontent-%COMP%]{background:#DDD;border-radius:2px;display:inline-block;height:5px;margin-right:1px;width:62px}"]}),r})()},5738:(E,v,n)=>{n.d(v,{O:()=>d});var e=n(9724),f=n(8832),r=n(4039),_=n(1048);const t=["progressSpinnerRef"];function i(a,s){if(1&a&&(e.TgZ(0,"ul",5)(1,"li")(2,"span",6),e._UZ(3,"i",7),e.qZA(),e._uU(4),e.qZA()()),2&a){const o=s.$implicit;e.xp6(3),e.Q6J("ngClass",o.value.inRun?"fas fa-spinner fa-pulse":"fas fa-check-square"),e.xp6(1),e.hij("",o.value.title," ")}}function l(a,s){if(1&a&&(e._UZ(0,"mat-progress-spinner",3)(1,"br"),e.TgZ(2,"div"),e._uU(3),e._UZ(4,"br"),e.YNc(5,i,5,2,"ul",4),e.ALo(6,"keyvalue"),e.qZA()),2&a){const o=e.oxw();e.Q6J("color",o.optionsData.color)("diameter",o.optionsData.diameter)("mode",o.optionsData.mode)("strokeWidth",o.optionsData.strokeWidth)("value",o.optionsData.value),e.xp6(3),e.hij("",o.optionsData.message," "),e.xp6(2),e.Q6J("ngForOf",e.lcZ(6,7,o.optionsData.processInfo))}}function u(a,s){if(1&a&&(e.TgZ(0,"div",8),e._UZ(1,"mat-progress-spinner",3)(2,"br"),e.TgZ(3,"div"),e._uU(4),e.qZA()()),2&a){const o=e.oxw();e.xp6(1),e.Q6J("color",o.optionsData.color)("diameter",o.optionsData.diameter)("mode",o.optionsData.mode)("strokeWidth",o.optionsData.strokeWidth)("value",o.optionsData.value),e.xp6(3),e.Oqu(o.optionsData.message)}}let d=(()=>{class a{constructor(o,h){this.vcRef=o,this.overlayService=h,this.id=++a.nextId}set options(o){this.optionsData=o}get options(){return this.optionsData}ngOnInit(){!this.optionsData||!this.optionsData.Globally||(this.progressSpinnerOverlayConfig={hasBackdrop:this.optionsData.backdropEnabled},this.optionsData.positionGloballyCenter&&(this.progressSpinnerOverlayConfig.positionStrategy=this.overlayService.positionGloballyCenter()),this.overlayRef=this.overlayService.createOverlay(this.progressSpinnerOverlayConfig))}ngDoCheck(){!this.optionsData||!this.optionsData.Globally||(this.optionsData.display&&!this.overlayRef.hasAttached()?(this.overlayService.attachTemplatePortal(this.overlayRef,this.progressSpinnerRef,this.vcRef),this.optionsData.cdr.detectChanges()):!this.optionsData.display&&this.overlayRef.hasAttached()&&this.overlayRef.detach())}}return a.nextId=0,a.\u0275fac=function(o){return new(o||a)(e.Y36(e.s_b),e.Y36(f.F))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-progress-spinner"]],viewQuery:function(o,h){if(1&o&&e.Gf(t,7),2&o){let m;e.iGM(m=e.CRH())&&(h.progressSpinnerRef=m.first)}},inputs:{options:"options"},decls:3,vars:1,consts:[["class","message"],["progressSpinnerRef",""],["class","message",4,"ngIf"],[3,"color","diameter","mode","strokeWidth","value"],["class","fa-ul",4,"ngFor","ngForOf"],[1,"fa-ul"],[1,"fa-li"],[3,"ngClass"],[1,"message"]],template:function(o,h){1&o&&(e.YNc(0,l,7,9,"ng-template",0,1,e.W1O),e.YNc(2,u,5,6,"div",2)),2&o&&(e.xp6(2),e.Q6J("ngIf",!h.optionsData.Globally&&h.optionsData.display))},directives:[r.Ou,_.sg,_.mk,_.O5],pipes:[_.Nd],styles:[".message[_ngcontent-%COMP%]{position:absolute;text-align:center;top:49%;left:44%}"]}),a})()}}]);