"use strict";(self.webpackChunkntk_cms_web=self.webpackChunkntk_cms_web||[]).push([[1934],{1934:(b,g,a)=>{a.r(g),a.d(g,{BuilderModule:()=>O});var Z=a(1048),A=a(7076),u=a(4307),T=a(7546),p=a(7977),e=a(9724),c=a(6404),m=a(727),C=a(496),d=a(1659),s=a(7312),_=a(4817);const h=["form"];function q(i,r){if(1&i&&(e.TgZ(0,"div",1),e.TgZ(1,"div",41),e.TgZ(2,"div",42),e.TgZ(3,"h3",43),e._uU(4,"Generated Config"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(5,"div",8),e.TgZ(6,"div",44),e.TgZ(7,"p"),e._uU(8," Use for layout config in "),e.TgZ(9,"code"),e._uU(10,"src/app/_metronic/configs/default-layout.config.ts"),e.qZA(),e.qZA(),e.TgZ(11,"div",45),e.TgZ(12,"div",45),e._UZ(13,"span",46),e.TgZ(14,"div",47),e.TgZ(15,"pre"),e.TgZ(16,"code"),e._uU(17),e.ALo(18,"json"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&i){const o=e.oxw();e.xp6(17),e.Oqu(e.lcZ(18,1,o.model))}}let v=(()=>{class i{constructor(o,l,t){this.layout=o,this.el=l,this.tokenHelper=t,this.activeTabId=1,this.tokenInfo=new p.OdC,this.tokenHelper.getCurrentToken().then(n=>{this.tokenInfo=n}),this.cmsApiStoreSubscribe=this.tokenHelper.getCurrentTokenOnChange().subscribe(n=>{this.tokenInfo=n})}ngOnInit(){this.model=this.layout.getConfig()}ngOnDestroy(){this.cmsApiStoreSubscribe.unsubscribe()}setActiveTab(o){this.activeTabId=o}getActiveTabCSSClass(o){return o!==this.activeTabId?"":"active"}resetPreview(){this.layout.refreshConfigToDefault()}submitPreview(){this.layout.setConfig(this.model),location.reload()}ngAfterViewInit(){const o=this.el.nativeElement.querySelectorAll(".example");T.Z.init(o)}}return i.\u0275fac=function(o){return new(o||i)(e.Y36(c.Pb),e.Y36(e.SBq),e.Y36(m.v))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-builder"]],viewQuery:function(o,l){if(1&o&&e.Gf(h,7),2&o){let t;e.iGM(t=e.CRH())&&(l.form=t.first)}},decls:210,vars:156,consts:[[3,"svg"],[1,"card","card-custom","gutter-b"],[1,"card-header","card-header-tabs-line"],["role","tablist",1,"nav","nav-dark","nav-bold","nav-tabs","nav-tabs-line"],[1,"nav-item"],["role","tab",1,"nav-link","cursor-pointer",3,"ngClass","click"],["novalidate","",1,"form",3,"ngSubmit"],["form","ngForm"],[1,"card-body"],[1,"tab-content","pt-3"],[1,"tab-pane",3,"ngClass"],[1,"form-group","row"],[1,"col-lg-3","col-form-label","text-lg-right"],[1,"col-lg-9","col-xl-4"],[1,"switch","switch-icon"],["type","checkbox","name","builder[header][self][fixed][desktop]","value","true",3,"ngModel","ngModelChange"],[1,"form-text","text-muted"],["name","builder[header][self][width]",1,"form-control","form-control-solid",3,"ngModel","ngModelChange"],["value","fluid"],["value","fixed"],["type","checkbox","name","builder[header][menu][self][display]","value","true",3,"ngModel","ngModelChange"],["name","builder[header][menu][self][layout]",1,"form-control","form-control-solid",3,"ngModel","ngModelChange"],["value","default"],["value","tab"],["type","checkbox","name","builder[header][menu][self][rootArrow]","value","true",3,"ngModel","ngModelChange"],["type","checkbox","name","builder[subheader][display]","value","true",3,"ngModel","ngModelChange"],["name","builder[subheader][width]",1,"form-control","form-control-solid",3,"ngModel","ngModelChange"],["name","builder[content][width]",1,"form-control","form-control-solid",3,"ngModel","ngModelChange"],[1,"col-lg-9","col-xl-6"],["type","checkbox","name","builder[aside][self][display]","value","true",3,"ngModel","ngModelChange"],["type","checkbox","name","builder[aside][menu][dropdown]","value","true",3,"ngModel","ngModelChange"],["name","builder[footer][layout]",1,"form-control","form-control-solid",3,"ngModel","ngModelChange"],["value","compact"],["value","extended"],["name","builder[footer][width]",1,"form-control","form-control-solid",3,"ngModel","ngModelChange"],[1,"row"],[1,"col-lg-4"],[1,"col-lg-8"],["type","submit","name","builder_submit",1,"btn","btn-primary"],["type","submit","name","builder_reset",1,"btn","btn-secondary",3,"click"],["class","card card-custom gutter-b",4,"ngIf"],[1,"card-header"],[1,"card-title"],[1,"card-label"],[1,"example","mb-10"],[1,"example-code"],["data-placement","left","ngbTooltip","Copy code",1,"example-copy"],[1,"example-highlight"]],template:function(o,l){1&o&&(e.TgZ(0,"app-notice",0),e.TgZ(1,"p"),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.qZA(),e.TgZ(4,"div",1),e.TgZ(5,"div",2),e.TgZ(6,"ul",3),e.TgZ(7,"li",4),e.TgZ(8,"a",5),e.NdJ("click",function(){return l.setActiveTab(1)}),e._uU(9),e.ALo(10,"translate"),e.qZA(),e.qZA(),e.TgZ(11,"li",4),e.TgZ(12,"a",5),e.NdJ("click",function(){return l.setActiveTab(2)}),e._uU(13),e.ALo(14,"translate"),e.qZA(),e.qZA(),e.TgZ(15,"li",4),e.TgZ(16,"a",5),e.NdJ("click",function(){return l.setActiveTab(3)}),e._uU(17),e.ALo(18,"translate"),e.qZA(),e.qZA(),e.TgZ(19,"li",4),e.TgZ(20,"a",5),e.NdJ("click",function(){return l.setActiveTab(4)}),e._uU(21),e.ALo(22,"translate"),e.qZA(),e.qZA(),e.TgZ(23,"li",4),e.TgZ(24,"a",5),e.NdJ("click",function(){return l.setActiveTab(5)}),e._uU(25),e.ALo(26,"translate"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(27,"form",6,7),e.NdJ("ngSubmit",function(){return l.submitPreview()}),e.TgZ(29,"div",8),e.TgZ(30,"div",9),e.TgZ(31,"div",10),e.TgZ(32,"div",11),e.TgZ(33,"label",12),e._uU(34),e.ALo(35,"translate"),e.qZA(),e.TgZ(36,"div",13),e.TgZ(37,"span",14),e.TgZ(38,"label"),e.TgZ(39,"input",15),e.NdJ("ngModelChange",function(n){return l.model.header.self.fixed.desktop=n}),e.qZA(),e._UZ(40,"span"),e.qZA(),e.qZA(),e.TgZ(41,"div",16),e._uU(42),e.ALo(43,"translate"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(44,"div",11),e.TgZ(45,"label",12),e._uU(46),e.ALo(47,"translate"),e.qZA(),e.TgZ(48,"div",13),e.TgZ(49,"select",17),e.NdJ("ngModelChange",function(n){return l.model.header.self.width=n}),e.TgZ(50,"option",18),e._uU(51),e.ALo(52,"translate"),e.qZA(),e.TgZ(53,"option",19),e._uU(54),e.ALo(55,"translate"),e.qZA(),e.qZA(),e.TgZ(56,"div",16),e._uU(57),e.ALo(58,"translate"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(59,"div",11),e.TgZ(60,"label",12),e._uU(61),e.ALo(62,"translate"),e.qZA(),e.TgZ(63,"div",13),e.TgZ(64,"span",14),e.TgZ(65,"label"),e.TgZ(66,"input",20),e.NdJ("ngModelChange",function(n){return l.model.header.menu.self.display=n}),e.qZA(),e._UZ(67,"span"),e.qZA(),e.qZA(),e.TgZ(68,"div",16),e._uU(69),e.ALo(70,"translate"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(71,"div",11),e.TgZ(72,"label",12),e._uU(73),e.ALo(74,"translate"),e.qZA(),e.TgZ(75,"div",13),e.TgZ(76,"select",21),e.NdJ("ngModelChange",function(n){return l.model.header.menu.self.layout=n}),e.TgZ(77,"option",22),e._uU(78),e.ALo(79,"translate"),e.qZA(),e.TgZ(80,"option",23),e._uU(81),e.ALo(82,"translate"),e.qZA(),e.qZA(),e.TgZ(83,"div",16),e._uU(84),e.ALo(85,"translate"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(86,"div",11),e.TgZ(87,"label",12),e._uU(88),e.ALo(89,"translate"),e.qZA(),e.TgZ(90,"div",13),e.TgZ(91,"span",14),e.TgZ(92,"label"),e.TgZ(93,"input",24),e.NdJ("ngModelChange",function(n){return l.model.header.menu.self.rootArrow=n}),e.qZA(),e._UZ(94,"span"),e.qZA(),e.qZA(),e.TgZ(95,"div",16),e._uU(96),e.ALo(97,"translate"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(98,"div",10),e.TgZ(99,"div",11),e.TgZ(100,"label",12),e._uU(101),e.ALo(102,"translate"),e.qZA(),e.TgZ(103,"div",13),e.TgZ(104,"span",14),e.TgZ(105,"label"),e.TgZ(106,"input",25),e.NdJ("ngModelChange",function(n){return l.model.subheader.display=n}),e.qZA(),e._UZ(107,"span"),e.qZA(),e.qZA(),e.TgZ(108,"div",16),e._uU(109),e.ALo(110,"translate"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(111,"div",11),e.TgZ(112,"label",12),e._uU(113),e.ALo(114,"translate"),e.qZA(),e.TgZ(115,"div",13),e.TgZ(116,"select",26),e.NdJ("ngModelChange",function(n){return l.model.subheader.width=n}),e.TgZ(117,"option",18),e._uU(118),e.ALo(119,"translate"),e.qZA(),e.TgZ(120,"option",19),e._uU(121),e.ALo(122,"translate"),e.qZA(),e.qZA(),e.TgZ(123,"div",16),e._uU(124),e.ALo(125,"translate"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(126,"div",10),e.TgZ(127,"div",11),e.TgZ(128,"label",12),e._uU(129),e.ALo(130,"translate"),e.qZA(),e.TgZ(131,"div",13),e.TgZ(132,"select",27),e.NdJ("ngModelChange",function(n){return l.model.content.width=n}),e.TgZ(133,"option",18),e._uU(134),e.ALo(135,"translate"),e.qZA(),e.TgZ(136,"option",19),e._uU(137),e.ALo(138,"translate"),e.qZA(),e.qZA(),e.TgZ(139,"div",16),e._uU(140),e.ALo(141,"translate"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(142,"div",10),e.TgZ(143,"div",11),e.TgZ(144,"label",12),e._uU(145),e.ALo(146,"translate"),e.qZA(),e.TgZ(147,"div",28),e.TgZ(148,"span",14),e.TgZ(149,"label"),e.TgZ(150,"input",29),e.NdJ("ngModelChange",function(n){return l.model.aside.self.display=n}),e.qZA(),e._UZ(151,"span"),e.qZA(),e.qZA(),e.TgZ(152,"div",16),e._uU(153),e.ALo(154,"translate"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(155,"div",11),e.TgZ(156,"label",12),e._uU(157),e.ALo(158,"translate"),e.qZA(),e.TgZ(159,"div",13),e.TgZ(160,"span",14),e.TgZ(161,"label"),e.TgZ(162,"input",30),e.NdJ("ngModelChange",function(n){return l.model.aside.menu.dropdown=n}),e.qZA(),e._UZ(163,"span"),e.qZA(),e.qZA(),e.TgZ(164,"div",16),e._uU(165),e.ALo(166,"translate"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(167,"div",10),e.TgZ(168,"div",11),e.TgZ(169,"label",12),e._uU(170),e.ALo(171,"translate"),e.qZA(),e.TgZ(172,"div",13),e.TgZ(173,"select",31),e.NdJ("ngModelChange",function(n){return l.model.footer.layout=n}),e.TgZ(174,"option",32),e._uU(175),e.ALo(176,"translate"),e.qZA(),e.TgZ(177,"option",33),e._uU(178),e.ALo(179,"translate"),e.qZA(),e.qZA(),e.TgZ(180,"div",16),e._uU(181),e.ALo(182,"translate"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(183,"div",11),e.TgZ(184,"label",12),e._uU(185),e.ALo(186,"translate"),e.qZA(),e.TgZ(187,"div",13),e.TgZ(188,"select",34),e.NdJ("ngModelChange",function(n){return l.model.footer.width=n}),e.TgZ(189,"option",18),e._uU(190),e.ALo(191,"translate"),e.qZA(),e.TgZ(192,"option",19),e._uU(193),e.ALo(194,"translate"),e.qZA(),e.qZA(),e.TgZ(195,"div",16),e._uU(196),e.ALo(197,"translate"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(198,"div",8),e.TgZ(199,"div",35),e._UZ(200,"div",36),e.TgZ(201,"div",37),e.TgZ(202,"button",38),e._uU(203),e.ALo(204,"translate"),e.qZA(),e._uU(205," \xa0 "),e.TgZ(206,"button",39),e.NdJ("click",function(){return l.resetPreview()}),e._uU(207),e.ALo(208,"translate"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(209,q,19,3,"div",40)),2&o&&(e.Q6J("svg","./assets/media/svg/icons/Tools/Tools.svg"),e.xp6(2),e.hij(" ",e.lcZ(3,68,"ACTION.DESCRIPTION_OF_BUILDER")," "),e.xp6(6),e.Q6J("ngClass",l.getActiveTabCSSClass(1)),e.xp6(1),e.hij(" ",e.lcZ(10,70,"ACTION.HEADER")," "),e.xp6(3),e.Q6J("ngClass",l.getActiveTabCSSClass(2)),e.xp6(1),e.hij(" ",e.lcZ(14,72,"ACTION.SUBHEADER")," "),e.xp6(3),e.Q6J("ngClass",l.getActiveTabCSSClass(3)),e.xp6(1),e.hij(" ",e.lcZ(18,74,"ACTION.CONTENT")," "),e.xp6(3),e.Q6J("ngClass",l.getActiveTabCSSClass(4)),e.xp6(1),e.hij(" ",e.lcZ(22,76,"ACTION.ASIDE")," "),e.xp6(3),e.Q6J("ngClass",l.getActiveTabCSSClass(5)),e.xp6(1),e.hij(" ",e.lcZ(26,78,"ACTION.FOOTER")," "),e.xp6(6),e.Q6J("ngClass",l.getActiveTabCSSClass(1)),e.xp6(3),e.hij("",e.lcZ(35,80,"ACTION.DESKTOP_FIXED_HEADER"),":"),e.xp6(5),e.Q6J("ngModel",l.model.header.self.fixed.desktop),e.xp6(3),e.hij(" ",e.lcZ(43,82,"ACTION.ENABLE_FIXED_HEADER_FOR_DESKTOP_MODE")," "),e.xp6(4),e.hij("",e.lcZ(47,84,"ACTION.HEADER_WIDTH"),":"),e.xp6(3),e.Q6J("ngModel",l.model.header.self.width),e.xp6(2),e.Oqu(e.lcZ(52,86,"ACTION.FLUID")),e.xp6(3),e.Oqu(e.lcZ(55,88,"ACTION.FIXED")),e.xp6(3),e.Oqu(e.lcZ(58,90,"ACTION.SELECT_HEADER_WIDTH_TYPE")),e.xp6(4),e.hij("",e.lcZ(62,92,"ACTION.DISPLAY_HEADER_MENU"),":"),e.xp6(5),e.Q6J("ngModel",l.model.header.menu.self.display),e.xp6(3),e.Oqu(e.lcZ(70,94,"ACTION.DISPLAY_HEADER_MENU")),e.xp6(4),e.hij("",e.lcZ(74,96,"ACTION.HEADER_MENU_LAYOUT"),":"),e.xp6(3),e.Q6J("ngModel",l.model.header.menu.self.layout),e.xp6(2),e.Oqu(e.lcZ(79,98,"ACTION.DEFAULT")),e.xp6(3),e.Oqu(e.lcZ(82,100,"ACTION.TAB")),e.xp6(3),e.Oqu(e.lcZ(85,102,"ACTION.SELECT_HEADER_WIDTH_TYPE")),e.xp6(4),e.hij("",e.lcZ(89,104,"ACTION.HEADER_MENU_ARROWS"),":"),e.xp6(5),e.Q6J("ngModel",l.model.header.menu.self.rootArrow),e.xp6(3),e.hij(" ",e.lcZ(97,106,"ACTION.ENABLE_HEADER_MENU_ROOT_LINK_ARROWS")," "),e.xp6(2),e.Q6J("ngClass",l.getActiveTabCSSClass(2)),e.xp6(3),e.hij("",e.lcZ(102,108,"ACTION.DISPLAYSUBHEADER"),":"),e.xp6(5),e.Q6J("ngModel",l.model.subheader.display),e.xp6(3),e.Oqu(e.lcZ(110,110,"ACTION.DISPLAYSUBHEADER")),e.xp6(4),e.hij("",e.lcZ(114,112,"ACTION.WIDTH"),":"),e.xp6(3),e.Q6J("ngModel",l.model.subheader.width),e.xp6(2),e.Oqu(e.lcZ(119,114,"ACTION.FLUID")),e.xp6(3),e.Oqu(e.lcZ(122,116,"ACTION.FIXED")),e.xp6(3),e.Oqu(e.lcZ(125,118,"ACTION.SELECT_LAYOUT_WIDTH_TYPE")),e.xp6(2),e.Q6J("ngClass",l.getActiveTabCSSClass(3)),e.xp6(3),e.hij("",e.lcZ(130,120,"ACTION.WIDTH"),":"),e.xp6(3),e.Q6J("ngModel",l.model.content.width),e.xp6(2),e.Oqu(e.lcZ(135,122,"ACTION.FLUID")),e.xp6(3),e.Oqu(e.lcZ(138,124,"ACTION.FIXED")),e.xp6(3),e.Oqu(e.lcZ(141,126,"ACTION.SELECT_LAYOUT_WIDTH_TYPE")),e.xp6(2),e.Q6J("ngClass",l.getActiveTabCSSClass(4)),e.xp6(3),e.hij("",e.lcZ(146,128,"ACTION.DISPLAY"),":"),e.xp6(5),e.Q6J("ngModel",l.model.aside.self.display),e.xp6(3),e.Oqu(e.lcZ(154,130,"ACTION.DISPLAY_ASIDE")),e.xp6(4),e.hij("",e.lcZ(158,132,"ACTION.SUBMENU_TOGGLE_DROPDOWN"),":"),e.xp6(5),e.Q6J("ngModel",l.model.aside.menu.dropdown),e.xp6(3),e.hij(" ",e.lcZ(166,134,"ACTION.SELECT_SUBMENU_TOGGLE_MODE")," "),e.xp6(2),e.Q6J("ngClass",l.getActiveTabCSSClass(5)),e.xp6(3),e.hij("",e.lcZ(171,136,"ACTION.FOOTER_LAYOUT"),":"),e.xp6(3),e.Q6J("ngModel",l.model.footer.layout),e.xp6(2),e.Oqu(e.lcZ(176,138,"ACTION.COMPACT")),e.xp6(3),e.Oqu(e.lcZ(179,140,"ACTION.EXTENDED")),e.xp6(3),e.Oqu(e.lcZ(182,142,"ACTION.SELECT_FOOTER_LAYOUT")),e.xp6(4),e.hij("",e.lcZ(186,144,"ACTION.WIDTH"),":"),e.xp6(3),e.Q6J("ngModel",l.model.footer.width),e.xp6(2),e.Oqu(e.lcZ(191,146,"ACTION.FLUID")),e.xp6(3),e.Oqu(e.lcZ(194,148,"ACTION.FIXED")),e.xp6(3),e.Oqu(e.lcZ(197,150,"ACTION.SELECT_LAYOUT_WIDTH_TYPE")),e.xp6(7),e.hij(" ",e.lcZ(204,152,"ACTION.PREVIEW")," "),e.xp6(4),e.hij(" ",e.lcZ(208,154,"ACTION.RESET")," "),e.xp6(2),e.Q6J("ngIf",l.tokenInfo&&l.tokenInfo.UserAccessAdminAllowToProfessionalData))},directives:[C.j,Z.mk,d._Y,d.JL,d.F,d.Wl,d.JJ,d.On,d.EJ,d.YN,d.Kr,Z.O5,s._L],pipes:[_.X$,Z.Ts],styles:["[_nghost-%COMP%]   .hljs[_ngcontent-%COMP%]{background:transparent!important}"]}),i})();var f=a(2510);let O=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[Z.ez,d.u5,u.V,s.Oz,s.HK,f.q,A.Bz.forChild([{path:"",component:v}])]]}),i})()}}]);