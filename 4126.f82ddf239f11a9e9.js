"use strict";(self.webpackChunkntk_cms_web=self.webpackChunkntk_cms_web||[]).push([[4126],{5631:(R,h,l)=>{l.d(h,{z:()=>v});var f=l(8239),o=l(9724),i=l(7977),c=l(1659),C=l(1927),O=l(3151),M=l(2147),S=l(1528),d=l(7969),E=l(656),g=l(4817),m=l(5691),A=l(8904),u=l(5821),_=l(1048),P=l(1531),D=l(4848);function y(s,p){if(1&s&&(o.TgZ(0,"mat-option",6)(1,"span"),o._uU(2),o.qZA()()),2&s){const t=p.$implicit,e=o.oxw();o.Q6J("value",t)("disabled",e.optionDisabled),o.xp6(2),o.Oqu(e.displayOption(t))}}function T(s,p){if(1&s){const t=o.EpF();o.TgZ(0,"mat-icon",7),o.NdJ("click",function(){return o.CHM(t),o.oxw().onActionSelectClear()}),o._uU(1,"close"),o.qZA()}}const I=["*"];let v=(()=>{class s{constructor(t,e,a,r){this.coreEnumService=t,this.cdr=e,this.translate=a,this.categoryService=r,this.id=++s.nextId,this.dataModelResult=new i.y$4,this.dataModelSelect=new i.MCb,this.loading=new E.O,this.formControl=new c.NI,this.optionDisabled=!1,this.optionSelectFirstItem=!1,this.optionPlaceholder="",this.optionChange=new o.vpe,this.optionReload=()=>this.onActionReload(),this.loading.cdr=this.cdr,this.loading.message=this.translate.instant("MESSAGE.Receiving_information")}set optionSelectForce(t){this.onActionSelectForce(t)}ngOnInit(){this.loadOptions()}loadOptions(){this.filteredOptions=this.formControl.valueChanges.pipe((0,C.O)(""),(0,O.b)(1500),(0,M.x)(),(0,S.w)(t=>this.DataGetAll("string"==typeof t||"number"==typeof t?t:"")))}displayFn(t){return t?t.title:void 0}displayOption(t){return t?t.title:void 0}DataGetAll(t){var e=this;return(0,f.Z)(function*(){const a=new i.Hay;if(a.rowPerPage=20,a.accessLoad=!0,t&&t.length>0){let n=new i.AO3;n=new i.AO3,n.propertyName="SubDomain",n.value=t,n.searchType=i.b3P.Contains,n.clauseType=i.KT6.Or,a.filters.push(n),n=new i.AO3,n.propertyName="Domain",n.value=t,n.searchType=i.b3P.Contains,n.clauseType=i.KT6.Or,a.filters.push(n),n=new i.AO3,n.propertyName="Title",n.value=t,n.searchType=i.b3P.Contains,n.clauseType=i.KT6.Or,a.filters.push(n),t&&"number"==typeof+t&&+t>0&&(n=new i.AO3,n.propertyName="Id",n.value=t,n.searchType=i.b3P.Equal,n.clauseType=i.KT6.Or,a.filters.push(n))}const r=e.constructor.name+"main";return e.loading.Start(r),yield e.categoryService.ServiceGetAll(a).pipe((0,d.U)(n=>(e.dataModelResult=n,e.optionSelectFirstItem&&(!e.dataModelSelect||!e.dataModelSelect.id||e.dataModelSelect.id<=0)&&e.dataModelResult.listItems.length>0&&(e.optionSelectFirstItem=!1,setTimeout(()=>{e.formControl.setValue(e.dataModelResult.listItems[0])},1e3),e.onActionSelect(e.dataModelResult.listItems[0])),e.loading.Stop(r),n.listItems))).toPromise()})()}onActionSelect(t){this.optionDisabled||(this.dataModelSelect=t,this.optionChange.emit(this.dataModelSelect))}onActionSelectClear(){this.optionDisabled||(this.formControl.setValue(null),this.optionChange.emit(null))}push(t){return this.filteredOptions.pipe((0,d.U)(e=>(e.find(a=>a.id===t.id)||e.push(t),e)))}onActionSelectForce(t){if("number"==typeof t&&t>0){if(this.dataModelSelect&&this.dataModelSelect.id===t)return;if(this.dataModelResult&&this.dataModelResult.listItems&&this.dataModelResult.listItems.find(e=>e.id===t)){const e=this.dataModelResult.listItems.find(a=>a.id===t);return this.dataModelSelect=e,void this.formControl.setValue(e)}this.categoryService.ServiceGetOneById(t).subscribe(e=>{e.isSuccess&&(this.filteredOptions=this.push(e.item),this.dataModelSelect=e.item,this.formControl.setValue(e.item),this.optionChange.emit(e.item))})}else{if(typeof t==typeof i.MCb)return this.filteredOptions=this.push(t),this.dataModelSelect=t,void this.formControl.setValue(t);this.formControl.setValue(null)}}onActionReload(){this.dataModelSelect=new i.MCb,this.loadOptions()}}return s.nextId=0,s.\u0275fac=function(t){return new(t||s)(o.Y36(i.FLW),o.Y36(o.sBO),o.Y36(g.sK),o.Y36(i.PwI))},s.\u0275cmp=o.Xpm({type:s,selectors:[["app-cms-sitecategory-selector"]],inputs:{loading:"loading",optionDisabled:"optionDisabled",optionSelectFirstItem:"optionSelectFirstItem",optionPlaceholder:"optionPlaceholder",optionReload:"optionReload",optionSelectForce:"optionSelectForce"},outputs:{optionChange:"optionChange"},ngContentSelectors:I,decls:8,vars:9,consts:[[1,"ntk-full-width"],["type","text","aria-label","Assignee","matInput","",3,"placeholder","formControl","matAutocomplete"],[3,"displayWith","optionSelected"],["auto34","matAutocomplete"],[3,"value","disabled",4,"ngFor","ngForOf"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[3,"value","disabled"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(t,e){if(1&t&&(o.F$t(),o.TgZ(0,"mat-form-field",0),o._UZ(1,"input",1),o.TgZ(2,"mat-autocomplete",2,3),o.NdJ("optionSelected",function(r){return e.onActionSelect(r.option.value)}),o.YNc(4,y,3,3,"mat-option",4),o.ALo(5,"async"),o.qZA(),o.YNc(6,T,2,0,"mat-icon",5),o.Hsn(7),o.qZA()),2&t){const a=o.MAs(3);o.xp6(1),o.s9C("placeholder",e.optionPlaceholder),o.Q6J("formControl",e.formControl)("matAutocomplete",a),o.uIk("disabled",!!e.optionDisabled||null),o.xp6(1),o.Q6J("displayWith",e.displayFn),o.xp6(2),o.Q6J("ngForOf",o.lcZ(5,7,e.filteredOptions)),o.xp6(2),o.Q6J("ngIf",e.dataModelSelect.id)}},directives:[m.KE,A.Nt,c.Fj,u.ZL,c.JJ,c.oH,u.XC,_.sg,P.ey,_.O5,D.Hw,m.R9],pipes:[_.Ov],encapsulation:2}),s})()},6586:(R,h,l)=>{l.d(h,{w:()=>v});var f=l(8239),o=l(9724),i=l(7977),c=l(1659),C=l(1927),O=l(3151),M=l(2147),S=l(1528),d=l(7969),E=l(656),g=l(4817),m=l(5691),A=l(8904),u=l(5821),_=l(1048),P=l(1531),D=l(4848);function y(s,p){if(1&s&&(o.TgZ(0,"mat-option",6)(1,"span"),o._uU(2),o.qZA()()),2&s){const t=p.$implicit,e=o.oxw();o.Q6J("value",t)("disabled",e.optionDisabled),o.xp6(2),o.Oqu(e.displayOption(t))}}function T(s,p){if(1&s){const t=o.EpF();o.TgZ(0,"mat-icon",7),o.NdJ("click",function(){return o.CHM(t),o.oxw().onActionSelectClear()}),o._uU(1,"close"),o.qZA()}}const I=["*"];let v=(()=>{class s{constructor(t,e,a,r){this.coreEnumService=t,this.cdr=e,this.translate=a,this.categoryService=r,this.id=++s.nextId,this.dataModelResult=new i.y$4,this.dataModelSelect=new i.fsQ,this.loading=new E.O,this.formControl=new c.NI,this.optionDisabled=!1,this.optionSelectFirstItem=!1,this.optionPlaceholder="",this.optionChange=new o.vpe,this.optionReload=()=>this.onActionReload(),this.loading.cdr=this.cdr,this.loading.message=this.translate.instant("MESSAGE.Receiving_information")}set optionSelectForce(t){this.onActionSelectForce(t)}ngOnInit(){this.loadOptions()}loadOptions(){this.filteredOptions=this.formControl.valueChanges.pipe((0,C.O)(""),(0,O.b)(1500),(0,M.x)(),(0,S.w)(t=>this.DataGetAll("string"==typeof t||"number"==typeof t?t:"")))}displayFn(t){return t?t.title:void 0}displayOption(t){return t?t.title:void 0}DataGetAll(t){var e=this;return(0,f.Z)(function*(){const a=new i.Hay;if(a.rowPerPage=20,a.accessLoad=!0,t&&t.length>0){let n=new i.AO3;n=new i.AO3,n.propertyName="username",n.value=t,n.searchType=i.b3P.Contains,n.clauseType=i.KT6.Or,a.filters.push(n),n=new i.AO3,n.propertyName="name",n.value=t,n.searchType=i.b3P.Contains,n.clauseType=i.KT6.Or,a.filters.push(n),n=new i.AO3,n.propertyName="email",n.value=t,n.searchType=i.b3P.Contains,n.clauseType=i.KT6.Or,a.filters.push(n),n=new i.AO3,n.propertyName="lastname",n.value=t,n.searchType=i.b3P.Contains,n.clauseType=i.KT6.Or,a.filters.push(n),t&&"number"==typeof+t&&+t>0&&(n=new i.AO3,n.propertyName="Id",n.value=t,n.searchType=i.b3P.Equal,n.clauseType=i.KT6.Or,a.filters.push(n))}const r=e.constructor.name+"main";return e.loading.Start(r),yield e.categoryService.ServiceGetAll(a).pipe((0,d.U)(n=>(e.dataModelResult=n,e.optionSelectFirstItem&&(!e.dataModelSelect||!e.dataModelSelect.id||e.dataModelSelect.id<=0)&&e.dataModelResult.listItems.length>0&&(e.optionSelectFirstItem=!1,setTimeout(()=>{e.formControl.setValue(e.dataModelResult.listItems[0])},1e3),e.onActionSelect(e.dataModelResult.listItems[0])),e.loading.Stop(r),n.listItems))).toPromise()})()}onActionSelect(t){this.optionDisabled||(this.dataModelSelect=t,this.optionChange.emit(this.dataModelSelect))}onActionSelectClear(){this.optionDisabled||(this.formControl.setValue(null),this.optionChange.emit(null))}push(t){return this.filteredOptions.pipe((0,d.U)(e=>(e.find(a=>a.id===t.id)||e.push(t),e)))}onActionSelectForce(t){if("number"==typeof t&&t>0){if(this.dataModelSelect&&this.dataModelSelect.id===t)return;if(this.dataModelResult&&this.dataModelResult.listItems&&this.dataModelResult.listItems.find(e=>e.id===t)){const e=this.dataModelResult.listItems.find(a=>a.id===t);return this.dataModelSelect=e,void this.formControl.setValue(e)}this.categoryService.ServiceGetOneById(t).subscribe(e=>{e.isSuccess&&(this.filteredOptions=this.push(e.item),this.dataModelSelect=e.item,this.formControl.setValue(e.item),this.optionChange.emit(e.item))})}else{if(typeof t==typeof i.fsQ)return this.filteredOptions=this.push(t),this.dataModelSelect=t,void this.formControl.setValue(t);this.formControl.setValue(null)}}onActionReload(){this.dataModelSelect=new i.fsQ,this.loadOptions()}}return s.nextId=0,s.\u0275fac=function(t){return new(t||s)(o.Y36(i.FLW),o.Y36(o.sBO),o.Y36(g.sK),o.Y36(i.dyD))},s.\u0275cmp=o.Xpm({type:s,selectors:[["app-cms-usergroup-selector"]],inputs:{loading:"loading",optionDisabled:"optionDisabled",optionSelectFirstItem:"optionSelectFirstItem",optionPlaceholder:"optionPlaceholder",optionReload:"optionReload",optionSelectForce:"optionSelectForce"},outputs:{optionChange:"optionChange"},ngContentSelectors:I,decls:8,vars:9,consts:[[1,"ntk-full-width"],["type","text","aria-label","Assignee","matInput","",3,"placeholder","formControl","matAutocomplete"],[3,"displayWith","optionSelected"],["auto35","matAutocomplete"],[3,"value","disabled",4,"ngFor","ngForOf"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[3,"value","disabled"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(t,e){if(1&t&&(o.F$t(),o.TgZ(0,"mat-form-field",0),o._UZ(1,"input",1),o.TgZ(2,"mat-autocomplete",2,3),o.NdJ("optionSelected",function(r){return e.onActionSelect(r.option.value)}),o.YNc(4,y,3,3,"mat-option",4),o.ALo(5,"async"),o.qZA(),o.YNc(6,T,2,0,"mat-icon",5),o.Hsn(7),o.qZA()),2&t){const a=o.MAs(3);o.xp6(1),o.s9C("placeholder",e.optionPlaceholder),o.Q6J("formControl",e.formControl)("matAutocomplete",a),o.uIk("disabled",!!e.optionDisabled||null),o.xp6(1),o.Q6J("displayWith",e.displayFn),o.xp6(2),o.Q6J("ngForOf",o.lcZ(5,7,e.filteredOptions)),o.xp6(2),o.Q6J("ngIf",e.dataModelSelect.id)}},directives:[m.KE,A.Nt,c.Fj,u.ZL,c.JJ,c.oH,u.XC,_.sg,P.ey,_.O5,D.Hw,m.R9],pipes:[_.Ov],encapsulation:2}),s})()}}]);