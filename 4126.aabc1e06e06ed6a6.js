"use strict";(self.webpackChunkntk_cms_web=self.webpackChunkntk_cms_web||[]).push([[4126],{5631:(R,h,a)=>{a.d(h,{z:()=>I});var f=a(8239),o=a(9724),n=a(7977),_=a(1659),C=a(1927),M=a(3151),O=a(2147),S=a(1528),d=a(7969),E=a(656),g=a(4817),m=a(5691),A=a(8904),u=a(5821),p=a(1048),D=a(1531),P=a(4848);function y(s,c){if(1&s&&(o.TgZ(0,"mat-option",6)(1,"span"),o._uU(2),o.qZA()()),2&s){const t=c.$implicit,e=o.oxw();o.Q6J("value",t)("disabled",e.optionDisabled),o.xp6(2),o.Oqu(e.displayOption(t))}}function T(s,c){if(1&s){const t=o.EpF();o.TgZ(0,"mat-icon",7),o.NdJ("click",function(){return o.CHM(t),o.oxw().onActionSelectClear()}),o._uU(1,"close"),o.qZA()}}const v=["*"];let I=(()=>{class s{constructor(t,e,i,r){this.coreEnumService=t,this.cdr=e,this.translate=i,this.categoryService=r,this.dataModelResult=new n.y$4,this.dataModelSelect=new n.MCb,this.loading=new E.O,this.formControl=new _.NI,this.optionDisabled=!1,this.optionSelectFirstItem=!1,this.optionPlaceholder="",this.optionChange=new o.vpe,this.optionReload=()=>this.onActionReload(),this.loading.cdr=this.cdr,this.loading.message=this.translate.instant("MESSAGE.Receiving_information")}set optionSelectForce(t){this.onActionSelectForce(t)}ngOnInit(){this.filteredOptions=this.formControl.valueChanges.pipe((0,C.O)(""),(0,M.b)(1e3),(0,O.x)(),(0,S.w)(t=>this.DataGetAll("string"==typeof t||"number"==typeof t?t:"")))}displayFn(t){return t?t.title:void 0}displayOption(t){return t?t.title:void 0}DataGetAll(t){var e=this;return(0,f.Z)(function*(){const i=new n.Hay;if(i.rowPerPage=20,i.accessLoad=!0,t&&t.length>0){let l=new n.AO3;l=new n.AO3,l.propertyName="SubDomain",l.value=t,l.searchType=n.b3P.Contains,l.clauseType=n.KT6.Or,i.filters.push(l),l=new n.AO3,l.propertyName="Domain",l.value=t,l.searchType=n.b3P.Contains,l.clauseType=n.KT6.Or,i.filters.push(l),l=new n.AO3,l.propertyName="Title",l.value=t,l.searchType=n.b3P.Contains,l.clauseType=n.KT6.Or,i.filters.push(l),t&&"number"==typeof+t&&+t>0&&(l=new n.AO3,l.propertyName="Id",l.value=t,l.searchType=n.b3P.Equal,l.clauseType=n.KT6.Or,i.filters.push(l))}const r=e.constructor.name+"main";return e.loading.Start(r),yield e.categoryService.ServiceGetAll(i).pipe((0,d.U)(l=>(e.dataModelResult=l,e.optionSelectFirstItem&&(!e.dataModelSelect||!e.dataModelSelect.id||e.dataModelSelect.id<=0)&&e.dataModelResult.listItems.length>0&&(e.optionSelectFirstItem=!1,setTimeout(()=>{e.formControl.setValue(e.dataModelResult.listItems[0])},1e3),e.onActionSelect(e.dataModelResult.listItems[0])),e.loading.Stop(r),l.listItems))).toPromise()})()}onActionSelect(t){this.optionDisabled||(this.dataModelSelect=t,this.optionChange.emit(this.dataModelSelect))}onActionSelectClear(){this.optionDisabled||(this.formControl.setValue(null),this.optionChange.emit(null))}push(t){return this.filteredOptions.pipe((0,d.U)(e=>(e.find(i=>i.id===t.id)||e.push(t),e)))}onActionSelectForce(t){if("number"==typeof t&&t>0){if(this.dataModelSelect&&this.dataModelSelect.id===t)return;if(this.dataModelResult&&this.dataModelResult.listItems&&this.dataModelResult.listItems.find(e=>e.id===t)){const e=this.dataModelResult.listItems.find(i=>i.id===t);return this.dataModelSelect=e,void this.formControl.setValue(e)}this.categoryService.ServiceGetOneById(t).subscribe(e=>{e.isSuccess&&(this.filteredOptions=this.push(e.item),this.dataModelSelect=e.item,this.formControl.setValue(e.item),this.optionChange.emit(e.item))})}else{if(typeof t==typeof n.MCb)return this.filteredOptions=this.push(t),this.dataModelSelect=t,void this.formControl.setValue(t);this.formControl.setValue(null)}}onActionReload(){this.dataModelSelect=new n.MCb,this.DataGetAll(null)}}return s.\u0275fac=function(t){return new(t||s)(o.Y36(n.FLW),o.Y36(o.sBO),o.Y36(g.sK),o.Y36(n.PwI))},s.\u0275cmp=o.Xpm({type:s,selectors:[["app-cms-sitecategory-selector"]],inputs:{loading:"loading",optionDisabled:"optionDisabled",optionSelectFirstItem:"optionSelectFirstItem",optionPlaceholder:"optionPlaceholder",optionReload:"optionReload",optionSelectForce:"optionSelectForce"},outputs:{optionChange:"optionChange"},ngContentSelectors:v,decls:8,vars:9,consts:[[1,"ntk-full-width"],["type","text","aria-label","Assignee","matInput","",3,"placeholder","formControl","matAutocomplete"],[3,"displayWith","optionSelected"],["auto34","matAutocomplete"],[3,"value","disabled",4,"ngFor","ngForOf"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[3,"value","disabled"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(t,e){if(1&t&&(o.F$t(),o.TgZ(0,"mat-form-field",0),o._UZ(1,"input",1),o.TgZ(2,"mat-autocomplete",2,3),o.NdJ("optionSelected",function(r){return e.onActionSelect(r.option.value)}),o.YNc(4,y,3,3,"mat-option",4),o.ALo(5,"async"),o.qZA(),o.YNc(6,T,2,0,"mat-icon",5),o.Hsn(7),o.qZA()),2&t){const i=o.MAs(3);o.xp6(1),o.s9C("placeholder",e.optionPlaceholder),o.Q6J("formControl",e.formControl)("matAutocomplete",i),o.uIk("disabled",!!e.optionDisabled||null),o.xp6(1),o.Q6J("displayWith",e.displayFn),o.xp6(2),o.Q6J("ngForOf",o.lcZ(5,7,e.filteredOptions)),o.xp6(2),o.Q6J("ngIf",e.dataModelSelect.id)}},directives:[m.KE,A.Nt,_.Fj,u.ZL,_.JJ,_.oH,u.XC,p.sg,D.ey,p.O5,P.Hw,m.R9],pipes:[p.Ov],styles:[""]}),s})()},6586:(R,h,a)=>{a.d(h,{w:()=>I});var f=a(8239),o=a(9724),n=a(7977),_=a(1659),C=a(1927),M=a(3151),O=a(2147),S=a(1528),d=a(7969),E=a(656),g=a(4817),m=a(5691),A=a(8904),u=a(5821),p=a(1048),D=a(1531),P=a(4848);function y(s,c){if(1&s&&(o.TgZ(0,"mat-option",6)(1,"span"),o._uU(2),o.qZA()()),2&s){const t=c.$implicit,e=o.oxw();o.Q6J("value",t)("disabled",e.optionDisabled),o.xp6(2),o.Oqu(e.displayOption(t))}}function T(s,c){if(1&s){const t=o.EpF();o.TgZ(0,"mat-icon",7),o.NdJ("click",function(){return o.CHM(t),o.oxw().onActionSelectClear()}),o._uU(1,"close"),o.qZA()}}const v=["*"];let I=(()=>{class s{constructor(t,e,i,r){this.coreEnumService=t,this.cdr=e,this.translate=i,this.categoryService=r,this.dataModelResult=new n.y$4,this.dataModelSelect=new n.fsQ,this.loading=new E.O,this.formControl=new _.NI,this.optionDisabled=!1,this.optionSelectFirstItem=!1,this.optionPlaceholder="",this.optionChange=new o.vpe,this.optionReload=()=>this.onActionReload(),this.loading.cdr=this.cdr,this.loading.message=this.translate.instant("MESSAGE.Receiving_information")}set optionSelectForce(t){this.onActionSelectForce(t)}ngOnInit(){this.filteredOptions=this.formControl.valueChanges.pipe((0,C.O)(""),(0,M.b)(1e3),(0,O.x)(),(0,S.w)(t=>this.DataGetAll("string"==typeof t||"number"==typeof t?t:"")))}displayFn(t){return t?t.title:void 0}displayOption(t){return t?t.title:void 0}DataGetAll(t){var e=this;return(0,f.Z)(function*(){const i=new n.Hay;if(i.rowPerPage=20,i.accessLoad=!0,t&&t.length>0){let l=new n.AO3;l=new n.AO3,l.propertyName="username",l.value=t,l.searchType=n.b3P.Contains,l.clauseType=n.KT6.Or,i.filters.push(l),l=new n.AO3,l.propertyName="name",l.value=t,l.searchType=n.b3P.Contains,l.clauseType=n.KT6.Or,i.filters.push(l),l=new n.AO3,l.propertyName="email",l.value=t,l.searchType=n.b3P.Contains,l.clauseType=n.KT6.Or,i.filters.push(l),l=new n.AO3,l.propertyName="lastname",l.value=t,l.searchType=n.b3P.Contains,l.clauseType=n.KT6.Or,i.filters.push(l),t&&"number"==typeof+t&&+t>0&&(l=new n.AO3,l.propertyName="Id",l.value=t,l.searchType=n.b3P.Equal,l.clauseType=n.KT6.Or,i.filters.push(l))}const r=e.constructor.name+"main";return e.loading.Start(r),yield e.categoryService.ServiceGetAll(i).pipe((0,d.U)(l=>(e.dataModelResult=l,e.optionSelectFirstItem&&(!e.dataModelSelect||!e.dataModelSelect.id||e.dataModelSelect.id<=0)&&e.dataModelResult.listItems.length>0&&(e.optionSelectFirstItem=!1,setTimeout(()=>{e.formControl.setValue(e.dataModelResult.listItems[0])},1e3),e.onActionSelect(e.dataModelResult.listItems[0])),e.loading.Stop(r),l.listItems))).toPromise()})()}onActionSelect(t){this.optionDisabled||(this.dataModelSelect=t,this.optionChange.emit(this.dataModelSelect))}onActionSelectClear(){this.optionDisabled||(this.formControl.setValue(null),this.optionChange.emit(null))}push(t){return this.filteredOptions.pipe((0,d.U)(e=>(e.find(i=>i.id===t.id)||e.push(t),e)))}onActionSelectForce(t){if("number"==typeof t&&t>0){if(this.dataModelSelect&&this.dataModelSelect.id===t)return;if(this.dataModelResult&&this.dataModelResult.listItems&&this.dataModelResult.listItems.find(e=>e.id===t)){const e=this.dataModelResult.listItems.find(i=>i.id===t);return this.dataModelSelect=e,void this.formControl.setValue(e)}this.categoryService.ServiceGetOneById(t).subscribe(e=>{e.isSuccess&&(this.filteredOptions=this.push(e.item),this.dataModelSelect=e.item,this.formControl.setValue(e.item),this.optionChange.emit(e.item))})}else{if(typeof t==typeof n.fsQ)return this.filteredOptions=this.push(t),this.dataModelSelect=t,void this.formControl.setValue(t);this.formControl.setValue(null)}}onActionReload(){this.dataModelSelect=new n.fsQ,this.DataGetAll(null)}}return s.\u0275fac=function(t){return new(t||s)(o.Y36(n.FLW),o.Y36(o.sBO),o.Y36(g.sK),o.Y36(n.dyD))},s.\u0275cmp=o.Xpm({type:s,selectors:[["app-cms-usergroup-selector"]],inputs:{loading:"loading",optionDisabled:"optionDisabled",optionSelectFirstItem:"optionSelectFirstItem",optionPlaceholder:"optionPlaceholder",optionReload:"optionReload",optionSelectForce:"optionSelectForce"},outputs:{optionChange:"optionChange"},ngContentSelectors:v,decls:8,vars:9,consts:[[1,"ntk-full-width"],["type","text","aria-label","Assignee","matInput","",3,"placeholder","formControl","matAutocomplete"],[3,"displayWith","optionSelected"],["auto35","matAutocomplete"],[3,"value","disabled",4,"ngFor","ngForOf"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[3,"value","disabled"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(t,e){if(1&t&&(o.F$t(),o.TgZ(0,"mat-form-field",0),o._UZ(1,"input",1),o.TgZ(2,"mat-autocomplete",2,3),o.NdJ("optionSelected",function(r){return e.onActionSelect(r.option.value)}),o.YNc(4,y,3,3,"mat-option",4),o.ALo(5,"async"),o.qZA(),o.YNc(6,T,2,0,"mat-icon",5),o.Hsn(7),o.qZA()),2&t){const i=o.MAs(3);o.xp6(1),o.s9C("placeholder",e.optionPlaceholder),o.Q6J("formControl",e.formControl)("matAutocomplete",i),o.uIk("disabled",!!e.optionDisabled||null),o.xp6(1),o.Q6J("displayWith",e.displayFn),o.xp6(2),o.Q6J("ngForOf",o.lcZ(5,7,e.filteredOptions)),o.xp6(2),o.Q6J("ngIf",e.dataModelSelect.id)}},directives:[m.KE,A.Nt,_.Fj,u.ZL,_.JJ,_.oH,u.XC,p.sg,D.ey,p.O5,P.Hw,m.R9],pipes:[p.Ov],styles:[""]}),s})()}}]);