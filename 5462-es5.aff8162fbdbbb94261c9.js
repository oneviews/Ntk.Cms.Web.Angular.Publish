!function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}(self.webpackChunkntk_cms_web_angular_v2=self.webpackChunkntk_cms_web_angular_v2||[]).push([[5462],{5462:function(n,l,o){o.r(l),o.d(l,{BuilderModule:function(){return _}});var a=o(38583),i=o(8307),Z=o(94307),r=o(77546),d=o(2769),A=o(37716),g=o(76925),s=o(50727),u=o(40496),T=o(3679),c=o(16743),p=o(29790),q=["form"];function v(e,t){if(1&e&&(A.TgZ(0,"div",1),A.TgZ(1,"div",41),A.TgZ(2,"div",42),A.TgZ(3,"h3",43),A._uU(4,"Generated Config"),A.qZA(),A.qZA(),A.qZA(),A.TgZ(5,"div",8),A.TgZ(6,"div",44),A.TgZ(7,"p"),A._uU(8," Use for layout config in "),A.TgZ(9,"code"),A._uU(10,"src/app/_metronic/configs/default-layout.config.ts"),A.qZA(),A.qZA(),A.TgZ(11,"div",45),A.TgZ(12,"div",45),A._UZ(13,"span",46),A.TgZ(14,"div",47),A.TgZ(15,"pre"),A.TgZ(16,"code"),A._uU(17),A.ALo(18,"json"),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA()),2&e){var n=A.oxw();A.xp6(17),A.Oqu(A.lcZ(18,1,n.model))}}var C,h=((C=function(){function n(t,l,o){var a=this;e(this,n),this.layout=t,this.el=l,this.tokenHelper=o,this.activeTabId=1,this.tokenInfo=new d.OdC,this.tokenHelper.getCurrentToken().then(function(e){a.tokenInfo=e}),this.cmsApiStoreSubscribe=this.tokenHelper.getCurrentTokenOnChange().subscribe(function(e){a.tokenInfo=e})}var l,o,a;return l=n,(o=[{key:"ngOnInit",value:function(){this.model=this.layout.getConfig()}},{key:"ngOnDestroy",value:function(){this.cmsApiStoreSubscribe.unsubscribe()}},{key:"setActiveTab",value:function(e){this.activeTabId=e}},{key:"getActiveTabCSSClass",value:function(e){return e!==this.activeTabId?"":"active"}},{key:"resetPreview",value:function(){this.layout.refreshConfigToDefault()}},{key:"submitPreview",value:function(){this.layout.setConfig(this.model),location.reload()}},{key:"ngAfterViewInit",value:function(){var e=this.el.nativeElement.querySelectorAll(".example");r.Z.init(e)}}])&&t(l.prototype,o),a&&t(l,a),n}()).\u0275fac=function(e){return new(e||C)(A.Y36(g.Pb),A.Y36(A.SBq),A.Y36(s.v))},C.\u0275cmp=A.Xpm({type:C,selectors:[["app-builder"]],viewQuery:function(e,t){var n;1&e&&A.Gf(q,7),2&e&&A.iGM(n=A.CRH())&&(t.form=n.first)},decls:210,vars:156,consts:[[3,"svg"],[1,"card","card-custom","gutter-b"],[1,"card-header","card-header-tabs-line"],["role","tablist",1,"nav","nav-dark","nav-bold","nav-tabs","nav-tabs-line"],[1,"nav-item"],["role","tab",1,"nav-link","cursor-pointer",3,"ngClass","click"],["novalidate","",1,"form",3,"ngSubmit"],["form","ngForm"],[1,"card-body"],[1,"tab-content","pt-3"],[1,"tab-pane",3,"ngClass"],[1,"form-group","row"],[1,"col-lg-3","col-form-label","text-lg-right"],[1,"col-lg-9","col-xl-4"],[1,"switch","switch-icon"],["type","checkbox","name","builder[header][self][fixed][desktop]","value","true",3,"ngModel","ngModelChange"],[1,"form-text","text-muted"],["name","builder[header][self][width]",1,"form-control","form-control-solid",3,"ngModel","ngModelChange"],["value","fluid"],["value","fixed"],["type","checkbox","name","builder[header][menu][self][display]","value","true",3,"ngModel","ngModelChange"],["name","builder[header][menu][self][layout]",1,"form-control","form-control-solid",3,"ngModel","ngModelChange"],["value","default"],["value","tab"],["type","checkbox","name","builder[header][menu][self][rootArrow]","value","true",3,"ngModel","ngModelChange"],["type","checkbox","name","builder[subheader][display]","value","true",3,"ngModel","ngModelChange"],["name","builder[subheader][width]",1,"form-control","form-control-solid",3,"ngModel","ngModelChange"],["name","builder[content][width]",1,"form-control","form-control-solid",3,"ngModel","ngModelChange"],[1,"col-lg-9","col-xl-6"],["type","checkbox","name","builder[aside][self][display]","value","true",3,"ngModel","ngModelChange"],["type","checkbox","name","builder[aside][menu][dropdown]","value","true",3,"ngModel","ngModelChange"],["name","builder[footer][layout]",1,"form-control","form-control-solid",3,"ngModel","ngModelChange"],["value","compact"],["value","extended"],["name","builder[footer][width]",1,"form-control","form-control-solid",3,"ngModel","ngModelChange"],[1,"row"],[1,"col-lg-4"],[1,"col-lg-8"],["type","submit","name","builder_submit",1,"btn","btn-primary"],["type","submit","name","builder_reset",1,"btn","btn-secondary",3,"click"],["class","card card-custom gutter-b",4,"ngIf"],[1,"card-header"],[1,"card-title"],[1,"card-label"],[1,"example","mb-10"],[1,"example-code"],["data-placement","left","ngbTooltip","Copy code",1,"example-copy"],[1,"example-highlight"]],template:function(e,t){1&e&&(A.TgZ(0,"app-notice",0),A.TgZ(1,"p"),A._uU(2),A.ALo(3,"translate"),A.qZA(),A.qZA(),A.TgZ(4,"div",1),A.TgZ(5,"div",2),A.TgZ(6,"ul",3),A.TgZ(7,"li",4),A.TgZ(8,"a",5),A.NdJ("click",function(){return t.setActiveTab(1)}),A._uU(9),A.ALo(10,"translate"),A.qZA(),A.qZA(),A.TgZ(11,"li",4),A.TgZ(12,"a",5),A.NdJ("click",function(){return t.setActiveTab(2)}),A._uU(13),A.ALo(14,"translate"),A.qZA(),A.qZA(),A.TgZ(15,"li",4),A.TgZ(16,"a",5),A.NdJ("click",function(){return t.setActiveTab(3)}),A._uU(17),A.ALo(18,"translate"),A.qZA(),A.qZA(),A.TgZ(19,"li",4),A.TgZ(20,"a",5),A.NdJ("click",function(){return t.setActiveTab(4)}),A._uU(21),A.ALo(22,"translate"),A.qZA(),A.qZA(),A.TgZ(23,"li",4),A.TgZ(24,"a",5),A.NdJ("click",function(){return t.setActiveTab(5)}),A._uU(25),A.ALo(26,"translate"),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.TgZ(27,"form",6,7),A.NdJ("ngSubmit",function(){return t.submitPreview()}),A.TgZ(29,"div",8),A.TgZ(30,"div",9),A.TgZ(31,"div",10),A.TgZ(32,"div",11),A.TgZ(33,"label",12),A._uU(34),A.ALo(35,"translate"),A.qZA(),A.TgZ(36,"div",13),A.TgZ(37,"span",14),A.TgZ(38,"label"),A.TgZ(39,"input",15),A.NdJ("ngModelChange",function(e){return t.model.header.self.fixed.desktop=e}),A.qZA(),A._UZ(40,"span"),A.qZA(),A.qZA(),A.TgZ(41,"div",16),A._uU(42),A.ALo(43,"translate"),A.qZA(),A.qZA(),A.qZA(),A.TgZ(44,"div",11),A.TgZ(45,"label",12),A._uU(46),A.ALo(47,"translate"),A.qZA(),A.TgZ(48,"div",13),A.TgZ(49,"select",17),A.NdJ("ngModelChange",function(e){return t.model.header.self.width=e}),A.TgZ(50,"option",18),A._uU(51),A.ALo(52,"translate"),A.qZA(),A.TgZ(53,"option",19),A._uU(54),A.ALo(55,"translate"),A.qZA(),A.qZA(),A.TgZ(56,"div",16),A._uU(57),A.ALo(58,"translate"),A.qZA(),A.qZA(),A.qZA(),A.TgZ(59,"div",11),A.TgZ(60,"label",12),A._uU(61),A.ALo(62,"translate"),A.qZA(),A.TgZ(63,"div",13),A.TgZ(64,"span",14),A.TgZ(65,"label"),A.TgZ(66,"input",20),A.NdJ("ngModelChange",function(e){return t.model.header.menu.self.display=e}),A.qZA(),A._UZ(67,"span"),A.qZA(),A.qZA(),A.TgZ(68,"div",16),A._uU(69),A.ALo(70,"translate"),A.qZA(),A.qZA(),A.qZA(),A.TgZ(71,"div",11),A.TgZ(72,"label",12),A._uU(73),A.ALo(74,"translate"),A.qZA(),A.TgZ(75,"div",13),A.TgZ(76,"select",21),A.NdJ("ngModelChange",function(e){return t.model.header.menu.self.layout=e}),A.TgZ(77,"option",22),A._uU(78),A.ALo(79,"translate"),A.qZA(),A.TgZ(80,"option",23),A._uU(81),A.ALo(82,"translate"),A.qZA(),A.qZA(),A.TgZ(83,"div",16),A._uU(84),A.ALo(85,"translate"),A.qZA(),A.qZA(),A.qZA(),A.TgZ(86,"div",11),A.TgZ(87,"label",12),A._uU(88),A.ALo(89,"translate"),A.qZA(),A.TgZ(90,"div",13),A.TgZ(91,"span",14),A.TgZ(92,"label"),A.TgZ(93,"input",24),A.NdJ("ngModelChange",function(e){return t.model.header.menu.self.rootArrow=e}),A.qZA(),A._UZ(94,"span"),A.qZA(),A.qZA(),A.TgZ(95,"div",16),A._uU(96),A.ALo(97,"translate"),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.TgZ(98,"div",10),A.TgZ(99,"div",11),A.TgZ(100,"label",12),A._uU(101),A.ALo(102,"translate"),A.qZA(),A.TgZ(103,"div",13),A.TgZ(104,"span",14),A.TgZ(105,"label"),A.TgZ(106,"input",25),A.NdJ("ngModelChange",function(e){return t.model.subheader.display=e}),A.qZA(),A._UZ(107,"span"),A.qZA(),A.qZA(),A.TgZ(108,"div",16),A._uU(109),A.ALo(110,"translate"),A.qZA(),A.qZA(),A.qZA(),A.TgZ(111,"div",11),A.TgZ(112,"label",12),A._uU(113),A.ALo(114,"translate"),A.qZA(),A.TgZ(115,"div",13),A.TgZ(116,"select",26),A.NdJ("ngModelChange",function(e){return t.model.subheader.width=e}),A.TgZ(117,"option",18),A._uU(118),A.ALo(119,"translate"),A.qZA(),A.TgZ(120,"option",19),A._uU(121),A.ALo(122,"translate"),A.qZA(),A.qZA(),A.TgZ(123,"div",16),A._uU(124),A.ALo(125,"translate"),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.TgZ(126,"div",10),A.TgZ(127,"div",11),A.TgZ(128,"label",12),A._uU(129),A.ALo(130,"translate"),A.qZA(),A.TgZ(131,"div",13),A.TgZ(132,"select",27),A.NdJ("ngModelChange",function(e){return t.model.content.width=e}),A.TgZ(133,"option",18),A._uU(134),A.ALo(135,"translate"),A.qZA(),A.TgZ(136,"option",19),A._uU(137),A.ALo(138,"translate"),A.qZA(),A.qZA(),A.TgZ(139,"div",16),A._uU(140),A.ALo(141,"translate"),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.TgZ(142,"div",10),A.TgZ(143,"div",11),A.TgZ(144,"label",12),A._uU(145),A.ALo(146,"translate"),A.qZA(),A.TgZ(147,"div",28),A.TgZ(148,"span",14),A.TgZ(149,"label"),A.TgZ(150,"input",29),A.NdJ("ngModelChange",function(e){return t.model.aside.self.display=e}),A.qZA(),A._UZ(151,"span"),A.qZA(),A.qZA(),A.TgZ(152,"div",16),A._uU(153),A.ALo(154,"translate"),A.qZA(),A.qZA(),A.qZA(),A.TgZ(155,"div",11),A.TgZ(156,"label",12),A._uU(157),A.ALo(158,"translate"),A.qZA(),A.TgZ(159,"div",13),A.TgZ(160,"span",14),A.TgZ(161,"label"),A.TgZ(162,"input",30),A.NdJ("ngModelChange",function(e){return t.model.aside.menu.dropdown=e}),A.qZA(),A._UZ(163,"span"),A.qZA(),A.qZA(),A.TgZ(164,"div",16),A._uU(165),A.ALo(166,"translate"),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.TgZ(167,"div",10),A.TgZ(168,"div",11),A.TgZ(169,"label",12),A._uU(170),A.ALo(171,"translate"),A.qZA(),A.TgZ(172,"div",13),A.TgZ(173,"select",31),A.NdJ("ngModelChange",function(e){return t.model.footer.layout=e}),A.TgZ(174,"option",32),A._uU(175),A.ALo(176,"translate"),A.qZA(),A.TgZ(177,"option",33),A._uU(178),A.ALo(179,"translate"),A.qZA(),A.qZA(),A.TgZ(180,"div",16),A._uU(181),A.ALo(182,"translate"),A.qZA(),A.qZA(),A.qZA(),A.TgZ(183,"div",11),A.TgZ(184,"label",12),A._uU(185),A.ALo(186,"translate"),A.qZA(),A.TgZ(187,"div",13),A.TgZ(188,"select",34),A.NdJ("ngModelChange",function(e){return t.model.footer.width=e}),A.TgZ(189,"option",18),A._uU(190),A.ALo(191,"translate"),A.qZA(),A.TgZ(192,"option",19),A._uU(193),A.ALo(194,"translate"),A.qZA(),A.qZA(),A.TgZ(195,"div",16),A._uU(196),A.ALo(197,"translate"),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.TgZ(198,"div",8),A.TgZ(199,"div",35),A._UZ(200,"div",36),A.TgZ(201,"div",37),A.TgZ(202,"button",38),A._uU(203),A.ALo(204,"translate"),A.qZA(),A._uU(205," \xa0 "),A.TgZ(206,"button",39),A.NdJ("click",function(){return t.resetPreview()}),A._uU(207),A.ALo(208,"translate"),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.YNc(209,v,19,3,"div",40)),2&e&&(A.Q6J("svg","./assets/media/svg/icons/Tools/Tools.svg"),A.xp6(2),A.hij(" ",A.lcZ(3,68,"ACTION.DESCRIPTION_OF_BUILDER")," "),A.xp6(6),A.Q6J("ngClass",t.getActiveTabCSSClass(1)),A.xp6(1),A.hij(" ",A.lcZ(10,70,"ACTION.HEADER")," "),A.xp6(3),A.Q6J("ngClass",t.getActiveTabCSSClass(2)),A.xp6(1),A.hij(" ",A.lcZ(14,72,"ACTION.SUBHEADER")," "),A.xp6(3),A.Q6J("ngClass",t.getActiveTabCSSClass(3)),A.xp6(1),A.hij(" ",A.lcZ(18,74,"ACTION.CONTENT")," "),A.xp6(3),A.Q6J("ngClass",t.getActiveTabCSSClass(4)),A.xp6(1),A.hij(" ",A.lcZ(22,76,"ACTION.ASIDE")," "),A.xp6(3),A.Q6J("ngClass",t.getActiveTabCSSClass(5)),A.xp6(1),A.hij(" ",A.lcZ(26,78,"ACTION.FOOTER")," "),A.xp6(6),A.Q6J("ngClass",t.getActiveTabCSSClass(1)),A.xp6(3),A.hij("",A.lcZ(35,80,"ACTION.DESKTOP_FIXED_HEADER"),":"),A.xp6(5),A.Q6J("ngModel",t.model.header.self.fixed.desktop),A.xp6(3),A.hij(" ",A.lcZ(43,82,"ACTION.ENABLE_FIXED_HEADER_FOR_DESKTOP_MODE")," "),A.xp6(4),A.hij("",A.lcZ(47,84,"ACTION.HEADER_WIDTH"),":"),A.xp6(3),A.Q6J("ngModel",t.model.header.self.width),A.xp6(2),A.Oqu(A.lcZ(52,86,"ACTION.FLUID")),A.xp6(3),A.Oqu(A.lcZ(55,88,"ACTION.FIXED")),A.xp6(3),A.Oqu(A.lcZ(58,90,"ACTION.SELECT_HEADER_WIDTH_TYPE")),A.xp6(4),A.hij("",A.lcZ(62,92,"ACTION.DISPLAY_HEADER_MENU"),":"),A.xp6(5),A.Q6J("ngModel",t.model.header.menu.self.display),A.xp6(3),A.Oqu(A.lcZ(70,94,"ACTION.DISPLAY_HEADER_MENU")),A.xp6(4),A.hij("",A.lcZ(74,96,"ACTION.HEADER_MENU_LAYOUT"),":"),A.xp6(3),A.Q6J("ngModel",t.model.header.menu.self.layout),A.xp6(2),A.Oqu(A.lcZ(79,98,"ACTION.DEFAULT")),A.xp6(3),A.Oqu(A.lcZ(82,100,"ACTION.TAB")),A.xp6(3),A.Oqu(A.lcZ(85,102,"ACTION.SELECT_HEADER_WIDTH_TYPE")),A.xp6(4),A.hij("",A.lcZ(89,104,"ACTION.HEADER_MENU_ARROWS"),":"),A.xp6(5),A.Q6J("ngModel",t.model.header.menu.self.rootArrow),A.xp6(3),A.hij(" ",A.lcZ(97,106,"ACTION.ENABLE_HEADER_MENU_ROOT_LINK_ARROWS")," "),A.xp6(2),A.Q6J("ngClass",t.getActiveTabCSSClass(2)),A.xp6(3),A.hij("",A.lcZ(102,108,"ACTION.DISPLAYSUBHEADER"),":"),A.xp6(5),A.Q6J("ngModel",t.model.subheader.display),A.xp6(3),A.Oqu(A.lcZ(110,110,"ACTION.DISPLAYSUBHEADER")),A.xp6(4),A.hij("",A.lcZ(114,112,"ACTION.WIDTH"),":"),A.xp6(3),A.Q6J("ngModel",t.model.subheader.width),A.xp6(2),A.Oqu(A.lcZ(119,114,"ACTION.FLUID")),A.xp6(3),A.Oqu(A.lcZ(122,116,"ACTION.FIXED")),A.xp6(3),A.Oqu(A.lcZ(125,118,"ACTION.SELECT_LAYOUT_WIDTH_TYPE")),A.xp6(2),A.Q6J("ngClass",t.getActiveTabCSSClass(3)),A.xp6(3),A.hij("",A.lcZ(130,120,"ACTION.WIDTH"),":"),A.xp6(3),A.Q6J("ngModel",t.model.content.width),A.xp6(2),A.Oqu(A.lcZ(135,122,"ACTION.FLUID")),A.xp6(3),A.Oqu(A.lcZ(138,124,"ACTION.FIXED")),A.xp6(3),A.Oqu(A.lcZ(141,126,"ACTION.SELECT_LAYOUT_WIDTH_TYPE")),A.xp6(2),A.Q6J("ngClass",t.getActiveTabCSSClass(4)),A.xp6(3),A.hij("",A.lcZ(146,128,"ACTION.DISPLAY"),":"),A.xp6(5),A.Q6J("ngModel",t.model.aside.self.display),A.xp6(3),A.Oqu(A.lcZ(154,130,"ACTION.DISPLAY_ASIDE")),A.xp6(4),A.hij("",A.lcZ(158,132,"ACTION.SUBMENU_TOGGLE_DROPDOWN"),":"),A.xp6(5),A.Q6J("ngModel",t.model.aside.menu.dropdown),A.xp6(3),A.hij(" ",A.lcZ(166,134,"ACTION.SELECT_SUBMENU_TOGGLE_MODE")," "),A.xp6(2),A.Q6J("ngClass",t.getActiveTabCSSClass(5)),A.xp6(3),A.hij("",A.lcZ(171,136,"ACTION.FOOTER_LAYOUT"),":"),A.xp6(3),A.Q6J("ngModel",t.model.footer.layout),A.xp6(2),A.Oqu(A.lcZ(176,138,"ACTION.COMPACT")),A.xp6(3),A.Oqu(A.lcZ(179,140,"ACTION.EXTENDED")),A.xp6(3),A.Oqu(A.lcZ(182,142,"ACTION.SELECT_FOOTER_LAYOUT")),A.xp6(4),A.hij("",A.lcZ(186,144,"ACTION.WIDTH"),":"),A.xp6(3),A.Q6J("ngModel",t.model.footer.width),A.xp6(2),A.Oqu(A.lcZ(191,146,"ACTION.FLUID")),A.xp6(3),A.Oqu(A.lcZ(194,148,"ACTION.FIXED")),A.xp6(3),A.Oqu(A.lcZ(197,150,"ACTION.SELECT_LAYOUT_WIDTH_TYPE")),A.xp6(7),A.hij(" ",A.lcZ(204,152,"ACTION.PREVIEW")," "),A.xp6(4),A.hij(" ",A.lcZ(208,154,"ACTION.RESET")," "),A.xp6(2),A.Q6J("ngIf",t.tokenInfo&&t.tokenInfo.UserAccessAdminAllowToProfessionalData))},directives:[u.j,a.mk,T._Y,T.JL,T.F,T.Wl,T.JJ,T.On,T.EJ,T.YN,T.Kr,a.O5,c._L],pipes:[p.X$,a.Ts],styles:["[_nghost-%COMP%]   .hljs[_ngcontent-%COMP%]{background:transparent!important}"]}),C),f=o(32510),_=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=A.oAB({type:t}),t.\u0275inj=A.cJS({imports:[[a.ez,T.u5,Z.V,c.Oz,c.HK,f.q,i.Bz.forChild([{path:"",component:h}])]]}),t}()}}])}();