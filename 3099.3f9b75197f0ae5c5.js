"use strict";(self.webpackChunkntk_cms_web=self.webpackChunkntk_cms_web||[]).push([[3099],{6609:(D,M,o)=>{o.d(M,{D:()=>F});var n=o(8239),e=o(9724),s=o(7977),d=o(1659),g=o(1927),C=o(3151),E=o(2147),O=o(1528),v=o(7969),A=o(656),u=o(4817),m=o(5691),a=o(8904),r=o(5821),h=o(1048),p=o(1531),S=o(4848),I=o(1418);function L(c,P){if(1&c&&(e._UZ(0,"img",8),e.ALo(1,"cmsthumbnail")),2&c){const t=e.oxw().$implicit;e.s9C("src",e.lcZ(1,1,t.linkImageIdSrc),e.LSH)}}function R(c,P){if(1&c&&(e.TgZ(0,"mat-option",6),e.YNc(1,L,2,3,"img",7),e.TgZ(2,"span"),e._uU(3),e.qZA()()),2&c){const t=P.$implicit,i=e.oxw();e.Q6J("value",t)("disabled",i.optionDisabled),e.xp6(1),e.Q6J("ngIf",t.linkImageIdSrc),e.xp6(2),e.Oqu(i.displayOption(t))}}function T(c,P){if(1&c){const t=e.EpF();e.TgZ(0,"mat-icon",9),e.NdJ("click",function(){return e.CHM(t),e.oxw().onActionSelectClear()}),e._uU(1,"close"),e.qZA()}}const y=["*"];let F=(()=>{class c{constructor(t,i,_,f){this.coreEnumService=t,this.translate=i,this.cdr=_,this.categoryService=f,this.id=++c.nextId,this.dataModelResult=new s.y$4,this.dataModelSelect=new s.Dp$,this.loading=new A.O,this.formControl=new d.NI,this.optionDisabled=!1,this.optionSelectFirstItem=!1,this.optionPlaceholder="",this.optionChange=new e.vpe,this.optionReload=()=>this.onActionReload(),this.loading.cdr=this.cdr,this.loading.message=this.translate.instant("MESSAGE.Receiving_information")}set optionSelectForce(t){this.onActionSelectForce(t)}ngOnInit(){this.loadOptions()}loadOptions(){this.filteredOptions=this.formControl.valueChanges.pipe((0,g.O)(""),(0,C.b)(1500),(0,E.x)(),(0,O.w)(t=>this.DataGetAll("string"==typeof t||"number"==typeof t?t:"")))}displayFn(t){return t&&t.virtual_Parent&&t.virtual_Parent.title.length>0&&t.virtual_Parent.virtual_Parent&&t.virtual_Parent.virtual_Parent.title.length>0&&t.virtual_Parent.virtual_Parent.virtual_Parent&&t.virtual_Parent.virtual_Parent.virtual_Parent.title.length>0?t.virtual_Parent.virtual_Parent.virtual_Parent.titleML+" > "+t.virtual_Parent.virtual_Parent.titleML+" > "+t.virtual_Parent.titleML+" > "+t.titleML:t&&t.virtual_Parent&&t.virtual_Parent.title.length>0&&t.virtual_Parent.virtual_Parent&&t.virtual_Parent.virtual_Parent.title.length>0?t.virtual_Parent.virtual_Parent.titleML+" > "+t.virtual_Parent.titleML+" > "+t.titleML:t&&t.virtual_Parent&&t.virtual_Parent.title.length>0?t.virtual_Parent.titleML+" > "+t.titleML:t?t.titleML:void 0}displayOption(t){return t&&t.virtual_Parent&&t.virtual_Parent.title.length>0&&t.virtual_Parent.virtual_Parent&&t.virtual_Parent.virtual_Parent.title.length>0&&t.virtual_Parent.virtual_Parent.virtual_Parent&&t.virtual_Parent.virtual_Parent.virtual_Parent.title.length>0?t.virtual_Parent.virtual_Parent.virtual_Parent.titleML+" > "+t.virtual_Parent.virtual_Parent.titleML+" > "+t.virtual_Parent.titleML+" > "+t.titleML:t&&t.virtual_Parent&&t.virtual_Parent.title.length>0&&t.virtual_Parent.virtual_Parent&&t.virtual_Parent.virtual_Parent.title.length>0?t.virtual_Parent.virtual_Parent.titleML+" > "+t.virtual_Parent.titleML+" > "+t.titleML:t&&t.virtual_Parent&&t.virtual_Parent.title.length>0?t.virtual_Parent.titleML+" > "+t.titleML:t?t.titleML:void 0}DataGetAll(t){var i=this;return(0,n.Z)(function*(){const _=new s.Hay;if(_.rowPerPage=20,_.accessLoad=!0,t&&t.length>0){let l=new s.AO3;l=new s.AO3,l.propertyName="Symbol",l.value=t,l.searchType=s.b3P.Contains,l.clauseType=s.KT6.Or,_.filters.push(l),l=new s.AO3,l.propertyName="Title",l.value=t,l.searchType=s.b3P.Contains,l.clauseType=s.KT6.Or,_.filters.push(l),t&&"number"==typeof+t&&+t>0&&(l=new s.AO3,l.propertyName="Id",l.value=t,l.searchType=s.b3P.Equal,l.clauseType=s.KT6.Or,_.filters.push(l))}const f=i.constructor.name+"main";return i.loading.Start(f),yield i.categoryService.ServiceGetAll(_).pipe((0,v.U)(l=>(i.dataModelResult=l,i.optionSelectFirstItem&&(!i.dataModelSelect||!i.dataModelSelect.id||i.dataModelSelect.id<=0)&&i.dataModelResult.listItems.length>0&&(i.optionSelectFirstItem=!1,setTimeout(()=>{i.formControl.setValue(i.dataModelResult.listItems[0])},1e3),i.onActionSelect(i.dataModelResult.listItems[0])),i.loading.Stop(f),l.listItems))).toPromise()})()}onActionSelect(t){this.optionDisabled||(this.dataModelSelect=t,this.optionChange.emit(this.dataModelSelect))}onActionSelectClear(){this.optionDisabled||(this.formControl.setValue(null),this.optionChange.emit(null))}push(t){return this.filteredOptions.pipe((0,v.U)(i=>(i.find(_=>_.id===t.id)||i.push(t),i)))}onActionSelectForce(t){if("number"==typeof t&&t>0){if(this.dataModelSelect&&this.dataModelSelect.id===t)return;if(this.dataModelResult&&this.dataModelResult.listItems&&this.dataModelResult.listItems.find(i=>i.id===t)){const i=this.dataModelResult.listItems.find(_=>_.id===t);return this.dataModelSelect=i,void this.formControl.setValue(i)}this.categoryService.ServiceGetOneById(t).subscribe(i=>{i.isSuccess&&(this.filteredOptions=this.push(i.item),this.dataModelSelect=i.item,this.formControl.setValue(i.item),this.optionChange.emit(i.item))})}else{if(typeof t==typeof s.Dp$)return this.filteredOptions=this.push(t),this.dataModelSelect=t,void this.formControl.setValue(t);this.formControl.setValue(null)}}onActionReload(){this.dataModelSelect=new s.Dp$,this.loadOptions()}}return c.nextId=0,c.\u0275fac=function(t){return new(t||c)(e.Y36(s.FLW),e.Y36(u.sK),e.Y36(e.sBO),e.Y36(s.XRW))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-cms-location-selector"]],inputs:{loading:"loading",optionDisabled:"optionDisabled",optionSelectFirstItem:"optionSelectFirstItem",optionPlaceholder:"optionPlaceholder",optionReload:"optionReload",optionSelectForce:"optionSelectForce"},outputs:{optionChange:"optionChange"},ngContentSelectors:y,decls:8,vars:9,consts:[[1,"ntk-full-width"],["type","text","aria-label","Assignee","matInput","",3,"placeholder","formControl","matAutocomplete"],[3,"displayWith","optionSelected"],["auto34","matAutocomplete"],[3,"value","disabled",4,"ngFor","ngForOf"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[3,"value","disabled"],["style","vertical-align:middle;","class","ntk-hover-zoom","aria-hidden","","height","25","width","25",3,"src",4,"ngIf"],["aria-hidden","","height","25","width","25",1,"ntk-hover-zoom",2,"vertical-align","middle",3,"src"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(t,i){if(1&t&&(e.F$t(),e.TgZ(0,"mat-form-field",0),e._UZ(1,"input",1),e.TgZ(2,"mat-autocomplete",2,3),e.NdJ("optionSelected",function(f){return i.onActionSelect(f.option.value)}),e.YNc(4,R,4,4,"mat-option",4),e.ALo(5,"async"),e.qZA(),e.YNc(6,T,2,0,"mat-icon",5),e.Hsn(7),e.qZA()),2&t){const _=e.MAs(3);e.xp6(1),e.s9C("placeholder",i.optionPlaceholder),e.Q6J("formControl",i.formControl)("matAutocomplete",_),e.uIk("disabled",!!i.optionDisabled||null),e.xp6(1),e.Q6J("displayWith",i.displayFn),e.xp6(2),e.Q6J("ngForOf",e.lcZ(5,7,i.filteredOptions)),e.xp6(2),e.Q6J("ngIf",i.dataModelSelect.id)}},directives:[m.KE,a.Nt,d.Fj,r.ZL,d.JJ,d.oH,r.XC,h.sg,p.ey,h.O5,S.Hw,m.R9],pipes:[h.Ov,I.v],encapsulation:2}),c})()},4370:(D,M,o)=>{o.d(M,{a:()=>A});var n=o(9724),e=o(7977),s=o(1659),d=o(656),g=o(2607),C=o(4817),E=o(1048),O=o(6088);function v(u,m){if(1&u){const a=n.EpF();n.TgZ(0,"li")(1,"mat-checkbox",1),n.NdJ("change",function(){const p=n.CHM(a).$implicit;return n.oxw().onActionSelect(p)}),n._uU(2),n.qZA()()}if(2&u){const a=m.$implicit,r=n.oxw();n.xp6(1),n.Q6J("checked",r.fieldsStatus.get(a.id))("disabled",r.optionDisabled),n.xp6(1),n.hij(" ",a.title," ")}}let A=(()=>{class u{constructor(a,r,h,p,S){this.coreEnumService=a,this.categoryService=r,this.cdr=h,this.cmsToastrService=p,this.translate=S,this.id=++u.nextId,this.dataModelResult=new e.y$4,this.dataModelSelect=[],this.dataIdsSelect=[],this.loading=new d.O,this.formControl=new s.NI,this.fieldsStatus=new Map,this.optionDisabled=!1,this.optionSelectFirstItem=!1,this.optionPlaceholder=new n.vpe,this.optionChange=new n.vpe,this.optionSelectAdded=new n.vpe,this.optionSelectRemoved=new n.vpe,this.optionReload=()=>this.onActionReload(),this.loading.cdr=this.cdr,this.loading.message=this.translate.instant("MESSAGE.Receiving_information")}set optionSelectForce(a){this.onActionSelectForce(a)}ngOnInit(){this.DataGetAll()}DataGetAll(){const a=new e.Hay;a.rowPerPage=50,a.accessLoad=!0;const r=this.constructor.name+"main";this.loading.Start(r),this.categoryService.ServiceGetAll(a).subscribe(h=>{h.isSuccess&&(this.dataModelResult=h,this.dataModelResult.listItems.forEach(p=>this.fieldsStatus.set(p.id,!1)),this.dataIdsSelect.forEach(p=>this.fieldsStatus.set(p,!0)),this.dataModelResult.listItems.forEach(p=>{this.fieldsStatus.get(p.id)&&this.dataModelSelect.push(p)})),this.loading.Stop(r)},h=>{this.cmsToastrService.typeError(h),this.loading.Stop(r)})}onActionSelect(a){this.fieldsStatus.get(a.id)?(this.fieldsStatus.set(a.id,!1),this.optionSelectRemoved.emit(a),this.dataModelSelect.splice(this.dataModelSelect.indexOf(a),1)):(this.fieldsStatus.set(a.id,!0),this.optionSelectAdded.emit(a),this.dataModelSelect.push(a)),this.optionChange.emit(this.dataModelSelect)}onActionSelectForce(a){typeof a==typeof Array(Number)?a.forEach(r=>{this.dataIdsSelect.push(r)}):typeof a==typeof Array(e.MCb)&&a.forEach(r=>{this.dataIdsSelect.push(r.id)}),this.dataIdsSelect.forEach(r=>this.fieldsStatus.set(r,!0))}onActionReload(){this.DataGetAll()}}return u.nextId=0,u.\u0275fac=function(a){return new(a||u)(n.Y36(e.FLW),n.Y36(e.PwI),n.Y36(n.sBO),n.Y36(g.e),n.Y36(C.sK))},u.\u0275cmp=n.Xpm({type:u,selectors:[["app-cms-sitecategory-selectionlist"]],inputs:{loading:"loading",optionDisabled:"optionDisabled",optionSelectFirstItem:"optionSelectFirstItem",optionPlaceholder:"optionPlaceholder",optionReload:"optionReload",optionSelectForce:"optionSelectForce"},outputs:{optionChange:"optionChange",optionSelectAdded:"optionSelectAdded",optionSelectRemoved:"optionSelectRemoved"},decls:2,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"checked","disabled","change"]],template:function(a,r){1&a&&(n.TgZ(0,"ul"),n.YNc(1,v,3,3,"li",0),n.qZA()),2&a&&(n.xp6(1),n.Q6J("ngForOf",r.dataModelResult.listItems))},directives:[E.sg,O.oG],encapsulation:2}),u})()}}]);