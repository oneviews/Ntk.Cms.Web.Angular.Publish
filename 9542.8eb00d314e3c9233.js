"use strict";(self.webpackChunkntk_cms_web=self.webpackChunkntk_cms_web||[]).push([[9542],{4929:(R,f,a)=>{a.d(f,{B:()=>e});var C=a(9724);let e=(()=>{class l{transform(p,d){if(!d||0===d.length)return"";const m=d.find(h=>h.Key===p||h.Value===p);return m?m.Description:""}}return l.\u0275fac=function(p){return new(p||l)},l.\u0275pipe=C.Yjl({name:"enums",type:l,pure:!0}),l})()},1126:(R,f,a)=>{a.d(f,{g:()=>T});var C=a(8239),e=a(9724),l=a(7977),r=a(1659),p=a(1927),d=a(3151),m=a(2147),h=a(1528),M=a(7969),E=a(656),S=a(5691),P=a(8904),O=a(5821),u=a(1048),A=a(1531),g=a(4848);function I(s,c){if(1&s&&(e.TgZ(0,"mat-option",6),e.TgZ(1,"span"),e._uU(2),e.qZA(),e.qZA()),2&s){const t=c.$implicit,o=e.oxw();e.Q6J("value",t)("disabled",o.optionDisabled),e.xp6(2),e.Oqu(o.displayOption(t))}}function y(s,c){if(1&s){const t=e.EpF();e.TgZ(0,"mat-icon",7),e.NdJ("click",function(){return e.CHM(t),e.oxw().onActionSelectClear()}),e._uU(1,"close"),e.qZA()}}const D=["*"];let T=(()=>{class s{constructor(t,o,i){this.coreEnumService=t,this.cdr=o,this.categoryService=i,this.dataModelResult=new l.y$4,this.dataModelSelect=new l.six,this.loading=new E.O,this.formControl=new r.NI,this.optionDisabled=!1,this.optionSelectFirstItem=!1,this.optionPlaceholder="",this.optionChange=new e.vpe,this.optionReload=()=>this.onActionReload(),this.loading.cdr=this.cdr}set optionSelectForce(t){this.onActionSelectForce(t)}ngOnInit(){this.filteredOptions=this.formControl.valueChanges.pipe((0,p.O)(""),(0,d.b)(1e3),(0,m.x)(),(0,h.w)(t=>this.DataGetAll("string"==typeof t||"number"==typeof t?t:"")))}displayFn(t){return t?t.Title+" # "+t.ClassName:void 0}displayOption(t){return t?t.Title+" # "+t.ClassName:void 0}DataGetAll(t){var o=this;return(0,C.Z)(function*(){const i=new l.Hay;if(i.RowPerPage=20,i.AccessLoad=!0,t&&t.length>0){let n=new l.AO3;n=new l.AO3,n.PropertyName="classname",n.Value=t,n.SearchType=l.b3P.Contains,n.ClauseType=l.KT6.Or,i.Filters.push(n),n=new l.AO3,n.PropertyName="name",n.Value=t,n.SearchType=l.b3P.Contains,n.ClauseType=l.KT6.Or,i.Filters.push(n),n=new l.AO3,n.PropertyName="email",n.Value=t,n.SearchType=l.b3P.Contains,n.ClauseType=l.KT6.Or,i.Filters.push(n),n=new l.AO3,n.PropertyName="lastname",n.Value=t,n.SearchType=l.b3P.Contains,n.ClauseType=l.KT6.Or,i.Filters.push(n),t&&"number"==typeof+t&&+t>0&&(n=new l.AO3,n.PropertyName="Id",n.Value=t,n.SearchType=l.b3P.Equal,n.ClauseType=l.KT6.Or,i.Filters.push(n))}const _=o.constructor.name+"main";return o.loading.Start(_),yield o.categoryService.ServiceGetAll(i).pipe((0,M.U)(n=>(o.dataModelResult=n,o.optionSelectFirstItem&&(!o.dataModelSelect||!o.dataModelSelect.Id||o.dataModelSelect.Id<=0)&&o.dataModelResult.ListItems.length>0&&(o.optionSelectFirstItem=!1,setTimeout(()=>{o.formControl.setValue(o.dataModelResult.ListItems[0])},1e3),o.onActionSelect(o.dataModelResult.ListItems[0])),o.loading.Stop(_),n.ListItems))).toPromise()})()}onActionSelect(t){this.optionDisabled||(this.dataModelSelect=t,this.optionChange.emit(this.dataModelSelect))}onActionSelectClear(){this.optionDisabled||(this.formControl.setValue(null),this.optionChange.emit(new l.six))}push(t){return this.filteredOptions.pipe((0,M.U)(o=>(o.find(i=>i.Id===t.Id)||o.push(t),o)))}onActionSelectForce(t){if("number"==typeof t&&t>0){if(this.dataModelSelect&&this.dataModelSelect.Id===t)return;if(this.dataModelResult&&this.dataModelResult.ListItems&&this.dataModelResult.ListItems.find(o=>o.Id===t)){const o=this.dataModelResult.ListItems.find(i=>i.Id===t);return this.dataModelSelect=o,void this.formControl.setValue(o)}this.categoryService.ServiceGetOneById(t).subscribe(o=>{o.IsSuccess&&(this.filteredOptions=this.push(o.Item),this.dataModelSelect=o.Item,this.formControl.setValue(o.Item),this.optionChange.emit(o.Item))})}else{if(typeof t==typeof l.six)return this.filteredOptions=this.push(t),this.dataModelSelect=t,void this.formControl.setValue(t);this.formControl.setValue(null)}}onActionReload(){this.dataModelSelect=new l.six,this.DataGetAll(null)}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(l.FLW),e.Y36(e.sBO),e.Y36(l.EAm))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-cms-module-selector"]],inputs:{loading:"loading",optionDisabled:"optionDisabled",optionSelectFirstItem:"optionSelectFirstItem",optionPlaceholder:"optionPlaceholder",optionReload:"optionReload",optionSelectForce:"optionSelectForce"},outputs:{optionChange:"optionChange"},ngContentSelectors:D,decls:8,vars:9,consts:[[1,"ntk-full-width"],["type","text","aria-label","Assignee","matInput","",3,"placeholder","formControl","matAutocomplete"],[3,"displayWith","optionSelected"],["auto35","matAutocomplete"],[3,"value","disabled",4,"ngFor","ngForOf"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[3,"value","disabled"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(t,o){if(1&t&&(e.F$t(),e.TgZ(0,"mat-form-field",0),e._UZ(1,"input",1),e.TgZ(2,"mat-autocomplete",2,3),e.NdJ("optionSelected",function(_){return o.onActionSelect(_.option.value)}),e.YNc(4,I,3,3,"mat-option",4),e.ALo(5,"async"),e.qZA(),e.YNc(6,y,2,0,"mat-icon",5),e.Hsn(7),e.qZA()),2&t){const i=e.MAs(3);e.xp6(1),e.s9C("placeholder",o.optionPlaceholder),e.Q6J("formControl",o.formControl)("matAutocomplete",i),e.uIk("disabled",!!o.optionDisabled||null),e.xp6(1),e.Q6J("displayWith",o.displayFn),e.xp6(2),e.Q6J("ngForOf",e.lcZ(5,7,o.filteredOptions)),e.xp6(2),e.Q6J("ngIf",o.dataModelSelect.Id)}},directives:[S.KE,P.Nt,r.Fj,O.ZL,r.JJ,r.oH,O.XC,u.sg,u.O5,A.ey,g.Hw,S.R9],pipes:[u.Ov],styles:[""]}),s})()},5631:(R,f,a)=>{a.d(f,{z:()=>T});var C=a(8239),e=a(9724),l=a(7977),r=a(1659),p=a(1927),d=a(3151),m=a(2147),h=a(1528),M=a(7969),E=a(656),S=a(5691),P=a(8904),O=a(5821),u=a(1048),A=a(1531),g=a(4848);function I(s,c){if(1&s&&(e.TgZ(0,"mat-option",6),e.TgZ(1,"span"),e._uU(2),e.qZA(),e.qZA()),2&s){const t=c.$implicit,o=e.oxw();e.Q6J("value",t)("disabled",o.optionDisabled),e.xp6(2),e.Oqu(o.displayOption(t))}}function y(s,c){if(1&s){const t=e.EpF();e.TgZ(0,"mat-icon",7),e.NdJ("click",function(){return e.CHM(t),e.oxw().onActionSelectClear()}),e._uU(1,"close"),e.qZA()}}const D=["*"];let T=(()=>{class s{constructor(t,o,i){this.coreEnumService=t,this.cdr=o,this.categoryService=i,this.dataModelResult=new l.y$4,this.dataModelSelect=new l.MCb,this.loading=new E.O,this.formControl=new r.NI,this.optionDisabled=!1,this.optionSelectFirstItem=!1,this.optionPlaceholder="",this.optionChange=new e.vpe,this.optionReload=()=>this.onActionReload(),this.loading.cdr=this.cdr}set optionSelectForce(t){this.onActionSelectForce(t)}ngOnInit(){this.filteredOptions=this.formControl.valueChanges.pipe((0,p.O)(""),(0,d.b)(1e3),(0,m.x)(),(0,h.w)(t=>this.DataGetAll("string"==typeof t||"number"==typeof t?t:"")))}displayFn(t){return t?t.Title:void 0}displayOption(t){return t?t.Title:void 0}DataGetAll(t){var o=this;return(0,C.Z)(function*(){const i=new l.Hay;if(i.RowPerPage=20,i.AccessLoad=!0,t&&t.length>0){let n=new l.AO3;n=new l.AO3,n.PropertyName="SubDomain",n.Value=t,n.SearchType=l.b3P.Contains,n.ClauseType=l.KT6.Or,i.Filters.push(n),n=new l.AO3,n.PropertyName="Domain",n.Value=t,n.SearchType=l.b3P.Contains,n.ClauseType=l.KT6.Or,i.Filters.push(n),n=new l.AO3,n.PropertyName="Title",n.Value=t,n.SearchType=l.b3P.Contains,n.ClauseType=l.KT6.Or,i.Filters.push(n),t&&"number"==typeof+t&&+t>0&&(n=new l.AO3,n.PropertyName="Id",n.Value=t,n.SearchType=l.b3P.Equal,n.ClauseType=l.KT6.Or,i.Filters.push(n))}const _=o.constructor.name+"main";return o.loading.Start(_),yield o.categoryService.ServiceGetAll(i).pipe((0,M.U)(n=>(o.dataModelResult=n,o.optionSelectFirstItem&&(!o.dataModelSelect||!o.dataModelSelect.Id||o.dataModelSelect.Id<=0)&&o.dataModelResult.ListItems.length>0&&(o.optionSelectFirstItem=!1,setTimeout(()=>{o.formControl.setValue(o.dataModelResult.ListItems[0])},1e3),o.onActionSelect(o.dataModelResult.ListItems[0])),o.loading.Stop(_),n.ListItems))).toPromise()})()}onActionSelect(t){this.optionDisabled||(this.dataModelSelect=t,this.optionChange.emit(this.dataModelSelect))}onActionSelectClear(){this.optionDisabled||(this.formControl.setValue(null),this.optionChange.emit(null))}push(t){return this.filteredOptions.pipe((0,M.U)(o=>(o.find(i=>i.Id===t.Id)||o.push(t),o)))}onActionSelectForce(t){if("number"==typeof t&&t>0){if(this.dataModelSelect&&this.dataModelSelect.Id===t)return;if(this.dataModelResult&&this.dataModelResult.ListItems&&this.dataModelResult.ListItems.find(o=>o.Id===t)){const o=this.dataModelResult.ListItems.find(i=>i.Id===t);return this.dataModelSelect=o,void this.formControl.setValue(o)}this.categoryService.ServiceGetOneById(t).subscribe(o=>{o.IsSuccess&&(this.filteredOptions=this.push(o.Item),this.dataModelSelect=o.Item,this.formControl.setValue(o.Item),this.optionChange.emit(o.Item))})}else{if(typeof t==typeof l.MCb)return this.filteredOptions=this.push(t),this.dataModelSelect=t,void this.formControl.setValue(t);this.formControl.setValue(null)}}onActionReload(){this.dataModelSelect=new l.MCb,this.DataGetAll(null)}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(l.FLW),e.Y36(e.sBO),e.Y36(l.PwI))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-cms-sitecategory-selector"]],inputs:{loading:"loading",optionDisabled:"optionDisabled",optionSelectFirstItem:"optionSelectFirstItem",optionPlaceholder:"optionPlaceholder",optionReload:"optionReload",optionSelectForce:"optionSelectForce"},outputs:{optionChange:"optionChange"},ngContentSelectors:D,decls:8,vars:9,consts:[[1,"ntk-full-width"],["type","text","aria-label","Assignee","matInput","",3,"placeholder","formControl","matAutocomplete"],[3,"displayWith","optionSelected"],["auto34","matAutocomplete"],[3,"value","disabled",4,"ngFor","ngForOf"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[3,"value","disabled"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(t,o){if(1&t&&(e.F$t(),e.TgZ(0,"mat-form-field",0),e._UZ(1,"input",1),e.TgZ(2,"mat-autocomplete",2,3),e.NdJ("optionSelected",function(_){return o.onActionSelect(_.option.value)}),e.YNc(4,I,3,3,"mat-option",4),e.ALo(5,"async"),e.qZA(),e.YNc(6,y,2,0,"mat-icon",5),e.Hsn(7),e.qZA()),2&t){const i=e.MAs(3);e.xp6(1),e.s9C("placeholder",o.optionPlaceholder),e.Q6J("formControl",o.formControl)("matAutocomplete",i),e.uIk("disabled",!!o.optionDisabled||null),e.xp6(1),e.Q6J("displayWith",o.displayFn),e.xp6(2),e.Q6J("ngForOf",e.lcZ(5,7,o.filteredOptions)),e.xp6(2),e.Q6J("ngIf",o.dataModelSelect.Id)}},directives:[S.KE,P.Nt,r.Fj,O.ZL,r.JJ,r.oH,O.XC,u.sg,u.O5,A.ey,g.Hw,S.R9],pipes:[u.Ov],styles:[""]}),s})()}}]);