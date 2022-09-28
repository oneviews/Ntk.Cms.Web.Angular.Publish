"use strict";(self.webpackChunkntk_cms_web=self.webpackChunkntk_cms_web||[]).push([[537],{8170:(h,c,s)=>{s.d(c,{J:()=>O});var o=s(9724),r=s(1659),f=s(3151),l=s(1048);function a(t,i){if(1&t&&o._UZ(0,"input",2),2&t){const e=o.oxw();o.Q6J("id",e.field.name)("name",e.field.name)("formControl",e.optionFormControl),o.uIk("type",e.field.type)}}function m(t,i){if(1&t&&o._UZ(0,"textarea",3),2&t){const e=o.oxw();o.ekj("is-invalid",e.isDirty&&!e.isValid),o.Q6J("formControl",e.optionFormControl)("id",e.field.name)("placeholder",e.field.placeholder)}}let u=(()=>{class t{constructor(){this.field={}}get isValid(){return this.optionFormControl.valid}get isDirty(){return this.optionFormControl.dirty}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["textbox"]],inputs:{field:"field",optionFormControl:"optionFormControl"},decls:2,vars:2,consts:[["class","form-control",3,"id","name","formControl",4,"ngIf"],["rows","9","class","form-control",3,"is-invalid","formControl","id","placeholder",4,"ngIf"],[1,"form-control",3,"id","name","formControl"],["rows","9",1,"form-control",3,"formControl","id","placeholder"]],template:function(e,n){1&e&&(o.YNc(0,a,1,4,"input",0),o.YNc(1,m,1,5,"textarea",1)),2&e&&(o.Q6J("ngIf",!n.field.multiline),o.xp6(1),o.Q6J("ngIf",n.field.multiline))},dependencies:[l.O5,r.Fj,r.JJ,r.oH],encapsulation:2}),t})();function _(t,i){if(1&t&&(o.TgZ(0,"option",2),o._uU(1),o.qZA()),2&t){const e=i.$implicit;o.Q6J("value",e.key),o.xp6(1),o.Oqu(e.label)}}let g=(()=>{class t{constructor(){this.field={}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["dropdown"]],inputs:{field:"field",optionFormControl:"optionFormControl"},decls:2,vars:3,consts:[[1,"form-control",3,"id","formControl"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,n){1&e&&(o.TgZ(0,"select",0),o.YNc(1,_,2,2,"option",1),o.qZA()),2&e&&(o.Q6J("id",n.field.name)("formControl",n.optionFormControl),o.xp6(1),o.Q6J("ngForOf",n.field.options))},dependencies:[l.sg,r.YN,r.Kr,r.EJ,r.JJ,r.oH],encapsulation:2}),t})();function C(t,i){if(1&t&&(o.TgZ(0,"div",2)(1,"label",3),o._UZ(2,"input",4),o._uU(3),o.qZA()()),2&t){const e=i.$implicit;o.xp6(2),o.Q6J("formControlName",e.key),o.xp6(1),o.hij(" ",e.label,"")}}let v=(()=>{class t{constructor(){this.field={}}get isValid(){return this.optionFormGroup.controls[this.field.name].valid}get isDirty(){return this.optionFormGroup.controls[this.field.name].dirty}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["checkbox"]],inputs:{field:"field",optionFormGroup:"optionFormGroup"},decls:2,vars:2,consts:[[3,"formGroup"],["class","form-check form-check",4,"ngFor","ngForOf"],[1,"form-check","form-check"],[1,"form-check-label"],["type","checkbox","id","inlineCheckbox1","value","option1",1,"form-check-input",3,"formControlName"]],template:function(e,n){1&e&&(o.TgZ(0,"div",0),o.YNc(1,C,4,2,"div",1),o.qZA()),2&e&&(o.Q6J("formGroup",n.optionFormGroup),o.xp6(1),o.Q6J("ngForOf",n.field.options))},dependencies:[l.sg,r.Wl,r.JJ,r.JL,r.sg,r.u],encapsulation:2}),t})();function F(t,i){if(1&t){const e=o.EpF();o.TgZ(0,"div",3),o.NdJ("hovered",function(p){o.CHM(e);const d=o.oxw();return o.KtG(d.toggleHover(p))})("dropped",function(p){o.CHM(e);const d=o.oxw();return o.KtG(d.field.onUpload(p))}),o.TgZ(1,"p",4),o._uU(2," Drag a file here or "),o.TgZ(3,"label",5)(4,"input",6),o.NdJ("change",function(p){o.CHM(e);const d=o.oxw();return o.KtG(d.field.onUpload(p.target.files))}),o.qZA(),o._uU(5," browse "),o.qZA(),o._uU(6," to upload. "),o.qZA()()}if(2&t){const e=o.oxw();o.ekj("hovering",e.isHovering)}}function x(t,i){if(1&t&&(o.TgZ(0,"div")(1,"div",7),o._UZ(2,"img",8),o.qZA()()),2&t){const e=o.oxw();o.xp6(2),o.Q6J("src",e.field.value,o.LSH)}}let T=(()=>{class t{constructor(){this.field={},this.isHovering=!1}get isValid(){return this.optionFormControl.controls[this.field.name].valid}get isDirty(){return this.optionFormControl.controls[this.field.name].dirty}ngOnChange(){console.log(this.field.value)}toggleHover(e){this.isHovering=!0}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["file"]],inputs:{field:"field",optionFormControl:"optionFormControl"},decls:3,vars:3,consts:[[3,"formGroup"],["class","drop-container dropzone","dropZone","",3,"hovering","hovered","dropped",4,"ngIf"],[4,"ngIf"],["dropZone","",1,"drop-container","dropzone",3,"hovered","dropped"],[1,"m-0"],[1,"upload-button"],["type","file","multiple","",3,"change"],[1,"card"],[1,"card-img-top",3,"src"]],template:function(e,n){1&e&&(o.TgZ(0,"div",0),o.YNc(1,F,7,2,"div",1),o.YNc(2,x,3,1,"div",2),o.qZA()),2&e&&(o.Q6J("formGroup",n.optionFormControl),o.xp6(1),o.Q6J("ngIf",!n.field.value),o.xp6(1),o.Q6J("ngIf",n.field.value))},dependencies:[l.O5,r.JL,r.sg],styles:[".drop-container[_ngcontent-%COMP%]{background:#fff;border-radius:6px;height:150px;width:100%;box-shadow:1px 2px 20px #0a0a0a1a;display:flex;align-items:center;justify-content:center;border:2px dashed #c0c4c7}p[_ngcontent-%COMP%]{font-size:16px;font-weight:400;color:#c0c4c7}.upload-button[_ngcontent-%COMP%]{display:inline-block;border:none;outline:none;cursor:pointer;color:#5754a3}.upload-button[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}.dropzone[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;border-radius:5px;background:white;margin:10px 0}.dropzone.hovering[_ngcontent-%COMP%]{border:2px solid #f16624;color:#dadada!important}progress[_ngcontent-%COMP%]::-webkit-progress-value{-webkit-transition:width .1s ease;transition:width .1s ease}"]}),t})();function w(t,i){if(1&t&&(o.TgZ(0,"div",1),o._UZ(1,"input",2),o.TgZ(2,"label",3),o._uU(3),o.qZA()()),2&t){const e=i.$implicit,n=o.oxw();o.xp6(1),o.Q6J("formControl",n.optionFormControl)("value",e.key),o.xp6(2),o.hij(" ",e.label," ")}}let y=(()=>{class t{constructor(){this.field={}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["radio"]],inputs:{field:"field",optionFormControl:"optionFormControl"},decls:1,vars:1,consts:[["class","form-check",4,"ngFor","ngForOf"],[1,"form-check"],["type","radio",1,"form-check-input",3,"formControl","value"],[1,"form-check-label"]],template:function(e,n){1&e&&o.YNc(0,w,4,3,"div",0),2&e&&o.Q6J("ngForOf",n.field.options)},dependencies:[l.sg,r.Fj,r._,r.JJ,r.oH],encapsulation:2}),t})();function b(t,i){1&t&&(o.TgZ(0,"strong",8),o._uU(1,"*"),o.qZA())}function J(t,i){if(1&t&&o._UZ(0,"textbox",9),2&t){const e=o.oxw();o.Q6J("field",e.field)("optionFormControl",e.convertToFormControl(e.formGroup.get(e.field.name)))}}function N(t,i){if(1&t&&o._UZ(0,"textbox",9),2&t){const e=o.oxw();o.Q6J("field",e.field)("optionFormControl",e.convertToFormControl(e.formGroup.get(e.field.name)))}}function I(t,i){if(1&t&&o._UZ(0,"dropdown",9),2&t){const e=o.oxw();o.Q6J("field",e.field)("optionFormControl",e.convertToFormControl(e.formGroup.get(e.field.name)))}}function Z(t,i){if(1&t&&o._UZ(0,"checkbox",10),2&t){const e=o.oxw();o.Q6J("field",e.field)("optionFormGroup",e.convertToFormGroup(e.formGroup.get(e.field.name)))}}function k(t,i){if(1&t&&o._UZ(0,"radio",9),2&t){const e=o.oxw();o.Q6J("field",e.field)("optionFormControl",e.convertToFormControl(e.formGroup.get(e.field.name)))}}function G(t,i){if(1&t&&o._UZ(0,"file",11),2&t){const e=o.oxw();o.Q6J("field",e.field)("formControl",e.convertToFormControl(e.formGroup.get(e.field.name)))}}function B(t,i){if(1&t&&(o.TgZ(0,"div",12),o._uU(1),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.hij("",e.field.label," is required")}}let V=(()=>{class t{constructor(){}get isValid(){return this.formGroup.controls[this.field.name].valid}get isDirty(){return this.formGroup.controls[this.field.name].dirty}ngOnInit(){}convertToFormControl(e){return e}convertToFormGroup(e){return e}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["field-builder"]],inputs:{field:"field",formGroup:"formGroup"},decls:12,vars:12,consts:[[1,"form-group","row",3,"formGroup"],[1,"col-md-3","form-control-label"],["class","text-danger",4,"ngIf"],[1,"col-md-9",3,"ngSwitch"],[3,"field","optionFormControl",4,"ngSwitchCase"],[3,"field","optionFormGroup",4,"ngSwitchCase"],[3,"field","formControl",4,"ngSwitchCase"],["class","alert alert-danger my-1 p-2 fadeInDown animated",4,"ngIf"],[1,"text-danger"],[3,"field","optionFormControl"],[3,"field","optionFormGroup"],[3,"field","formControl"],[1,"alert","alert-danger","my-1","p-2","fadeInDown","animated"]],template:function(e,n){1&e&&(o.TgZ(0,"div",0)(1,"label",1),o._uU(2),o.YNc(3,b,2,0,"strong",2),o.qZA(),o.TgZ(4,"div",3),o.YNc(5,J,1,2,"textbox",4),o.YNc(6,N,1,2,"textbox",4),o.YNc(7,I,1,2,"dropdown",4),o.YNc(8,Z,1,2,"checkbox",5),o.YNc(9,k,1,2,"radio",4),o.YNc(10,G,1,2,"file",6),o.YNc(11,B,2,1,"div",7),o.qZA()()),2&e&&(o.Q6J("formGroup",n.formGroup),o.xp6(1),o.uIk("for",n.field.label),o.xp6(1),o.hij(" ",n.field.label," "),o.xp6(1),o.Q6J("ngIf",n.field.required&&n.formGroup.get(n.field.name).invalid),o.xp6(1),o.Q6J("ngSwitch",n.field.type),o.xp6(1),o.Q6J("ngSwitchCase","text"),o.xp6(1),o.Q6J("ngSwitchCase","date"),o.xp6(1),o.Q6J("ngSwitchCase","dropdown"),o.xp6(1),o.Q6J("ngSwitchCase","checkbox"),o.xp6(1),o.Q6J("ngSwitchCase","radio"),o.xp6(1),o.Q6J("ngSwitchCase","file"),o.xp6(1),o.Q6J("ngIf",!n.isValid&&n.isDirty))},dependencies:[l.O5,l.RF,l.n9,r.JJ,r.JL,r.oH,r.sg,u,g,v,T,y],encapsulation:2}),t})();function D(t,i){if(1&t&&(o.TgZ(0,"div"),o._UZ(1,"field-builder",1),o.qZA()),2&t){const e=i.$implicit,n=o.oxw();o.xp6(1),o.Q6J("field",e)("formGroup",n.formGroup)}}let O=(()=>{class t{constructor(){this.jsonValueChange=new o.vpe,this.privatePropertiesInfos=[],this.formValues={},this.fields=[],this.DEBOUNCE_TIME_FORM_INPUT=250}set jsonValue(e){e&&e.length>0&&(this.privateJsonValue=JSON.parse(e),this.actionSetValue())}set propertiesInfos(e){this.privatePropertiesInfos=e,this.actionFormMake(),this.actionSetValue()}ngOnInit(){}ngAfterViewInit(){this.unsubcribe=this.formGroup.valueChanges.pipe((0,f.b)(this.DEBOUNCE_TIME_FORM_INPUT)).subscribe(e=>{this.formValues||(this.formValues={}),this.privatePropertiesInfos&&this.privatePropertiesInfos.length>0&&this.privatePropertiesInfos.forEach(n=>{(e[n.fieldName]||""===e[n.fieldName])&&(this.formValues[n.fieldName]=e[n.fieldName]),this.jsonValueChange.emit(JSON.stringify(this.formValues))})})}actionFormMake(){this.privatePropertiesInfos&&(this.fields=[],this.privatePropertiesInfos.forEach(e=>{let n="";this.formValues&&this.formValues[e.fieldName]&&(n=this.formValues[e.fieldName]),this.fields.push({type:"text",name:e.fieldName,label:e.fieldTitle,value:n,required:!1})})),this.fields.forEach(e=>{"checkbox"===e.type?(this.formGroup.addControl(e.name,new r.cw({})),e.options.forEach(n=>{this.formGroup.get(e.name).addControl(n.key,new r.NI(!1))})):this.formGroup.addControl(e.name,new r.NI(e.value||"",e.required?r.kI.required:null))})}actionSetValue(){this.privateJsonValue&&this.privatePropertiesInfos&&this.privatePropertiesInfos.length>0&&this.privatePropertiesInfos.forEach(e=>{if(this.formValues||(this.formValues={}),this.formValues[e.fieldName]=this.privateJsonValue[e.fieldName]?this.privateJsonValue[e.fieldName]:"",this.formValues[e.fieldName]&&this.fields.findIndex(n=>n.name===e.fieldName)>=0){const n=this.formValues[e.fieldName];this.fields.find(p=>p.name===e.fieldName).value=n,this.formGroup.get(e.fieldName).setValue(n,{emitEvent:!1})}})}ngDistroy(){this.unsubcribe()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["dynamic-form-builder-cms"]],inputs:{jsonValue:"jsonValue",propertiesInfos:"propertiesInfos",formGroup:"formGroup"},outputs:{jsonValueChange:"jsonValueChange"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"field","formGroup"]],template:function(e,n){1&e&&o.YNc(0,D,2,2,"div",0),2&e&&o.Q6J("ngForOf",n.fields)},dependencies:[l.sg,r.JL,r.sg,V],encapsulation:2}),t})()},8365:(h,c,s)=>{s.d(c,{d:()=>l});var o=s(1048),r=s(1659),f=s(9724);let l=(()=>{class a{}return a.\u0275fac=function(u){return new(u||a)},a.\u0275mod=f.oAB({type:a}),a.\u0275inj=f.cJS({imports:[o.ez,r.UX]}),a})()}}]);