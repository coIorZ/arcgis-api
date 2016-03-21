/*
 COPYRIGHT 2009 ESRI

 TRADE SECRETS: ESRI PROPRIETARY AND CONFIDENTIAL
 Unpublished material - all rights reserved under the
 Copyright Laws of the United States and applicable international
 laws, treaties, and conventions.

 For additional information, contact:
 Environmental Systems Research Institute, Inc.
 Attn: Contracts and Legal Services Department
 380 New York Street
 Redlands, California, 92373
 USA

 email: contracts@esri.com
 */
//>>built
require({cache:{"url:esri/dijit/templates/MosaicRule.html":"<div data-dojo-attach-point=\"_mosaicRuleContainer\" class=\"mosaicRuleContainer\">\r\n\t<table class=\"mosaicRuleTable\">\r\n\t\t <col class=\"mosaicRuleColumn1\"/>\r\n\t\t <col class=\"mosaicRuleColumn2\"/>\t\r\n\t\t <tr>\r\n\t\t <th><label for=\"Mosaic Method\">${_i18n.widgets.mosaicRule.mosaicMethodLabel}</label></th>\r\n         <th><select data-dojo-attach-point=\"_mosaicRule\" class=\"mosaicRuleSelectbox\">\r\n                   <option>&lt;MosaicDefault&gt;</option>\r\n            </select></th>\r\n         </tr>\r\n         <tr data-dojo-attach-point=\"_orderFieldBlock\">\r\n         <th><label for=\"Order Field\" >${_i18n.widgets.mosaicRule.orderFieldLabel}</label></th>\r\n         <th><select data-dojo-attach-point=\"_orderField\" class=\"mosaicRuleSelectbox\">\r\n                   <option>&lt;MosaicDefault&gt;</option>\r\n            </select></th>\r\n         </tr>\r\n         <tr data-dojo-attach-point=\"_orderValueTextBlock\">\r\n         <th><label for=\"Order Value\">${_i18n.widgets.mosaicRule.orderValueLabel}</label></th>\r\n         <th><input type=\"text\" value=\"0\" data-dojo-attach-point=\"_orderValue\" class=\"mosaicRuleOrderValueTextbox\"/>\r\n            <div data-dojo-type=\"dijit/form/DropDownButton\" iconClass=\"mosaicRuleCalendarIcon\" class=\"mosaicRuleDropdownIcon\" showLabel='false' data-dojo-attach-point=\"_orderValueDateBlock\">\r\n            \t\t<span>Calendar</span>\r\n            \t\t<div data-dojo-type=\"dijit/Calendar\" data-dojo-attach-point=\"_dateValue\"></div> \r\n            </div></th>\r\n         </tr>\r\n         <tr data-dojo-attach-point=\"_lockRasterBlock\">                   \r\n         <th><label for=\"LockRaster Id\">${_i18n.widgets.mosaicRule.lockRasterIdLabel}</label></th> \r\n         <th><input type=\"text\" data-dojo-attach-point=\"_lockRaster\" class=\"mosaicRuleLockRasterTextbox\"/>\r\n            \t<div data-dojo-type=\"dijit/form/DropDownButton\" data-dojo-attach-point=\"_lockRasterIdSelect\" iconClass=\"mosaicRuleThreedotsIcon\" class=\"mosaicRuleDropdownIcon\" showLabel='false'> \r\n            \t<div data-dojo-type=\"dijit/TooltipDialog\" data-dojo-attach-point=\"_lockRasterTooltip\">\r\n            \t\t<div data-dojo-type=\"dijit/layout/ContentPane\" class=\"mosaicRuleLayerlistTooltip\">\r\n            \t\t\t<div data-dojo-attach-point=\"_layerList\" ></div>\r\n            \t\t</div>\r\n            \t\t<center><input data-dojo-attach-point=\"_aoi\" type=\"button\" value=${_i18n.widgets.mosaicRule.refreshLockRasterIdsLabel}></input></center></br>\r\n                <label data-dojo-attach-point=\"_lockRasterMsg\"/>\r\n            \t</div>\t\r\n            \t</div>\r\n         </th>    \r\n         </tr>\r\n         <tr>   \r\n         <th><label for=\"Mosaic Operator\">${_i18n.widgets.mosaicRule.mosaicOperatorLabel}</label></th> \r\n         <th><select data-dojo-attach-point=\"_mosaicOperator\" class=\"mosaicRuleSelectbox\">\r\n                   <option>&lt;MosaicDefault&gt;</option>\r\n                   <option>First</option>\r\n                   <option>Blend</option>\r\n                   <option>Last</option>\r\n                   <option>Min</option>\r\n                   <option>Max</option>\r\n                   <option>Mean</option>\r\n            </select></th> \r\n         </tr>\r\n         <tr data-dojo-attach-point=\"_ascendingBlock\">           \r\n         <th><label for=\"Ascending\">${_i18n.widgets.mosaicRule.ascendingLabel}</label></th> \r\n         <th><input type=\"checkbox\" data-dojo-attach-point=\"_ascending\" name=\"ascending\" class=\"mosaicRuleAscendingCheckbox\"/></th> \r\n         </tr>\r\n         <tr>           \r\n         <th><label data-dojo-attach-point=\"_whereLabel\" for=\"where\">${_i18n.widgets.mosaicRule.queryLabel}</label></th>\r\n         <th><input type=\"text\" value=\"<where>\" class=\"mosaicRuleQueryTextbox\" data-dojo-attach-point=\"_where\"/>\r\n            \t<div data-dojo-type=\"dijit/form/DropDownButton\" iconClass=\"mosaicRuleQueryIcon\" showLabel='false' data-dojo-attach-point=\"_queryBlock\">\r\n            \t<span>Query</span>\r\n            \t<div data-dojo-type=\"dijit/TooltipDialog\" data-dojo-attach-point=\"_queryTooltip\">\r\n            \t\t<table class=\"mosaicRuleQueryTable\">\r\n\t\t\t\t         <tr>\r\n            \t\t\t <th><label for=\"Query Order Field\" >${_i18n.widgets.mosaicRule.queryFieldLabel}</label></th> \r\n            \t\t\t <th><select data-dojo-attach-point=\"_queryOrderField\" class=\"mosaicRuleSelectbox\">\r\n                   \t\t\t\t\t<option>&lt;None&gt;</option>\r\n            \t\t\t\t\t</select></th> \r\n         \t\t\t\t</tr>\r\n        \t\t\t\t <tr>\r\n            \t\t\t <th><label for=\"Operator Query\" >${_i18n.widgets.mosaicRule.queryOperatorLabel}</label></th> \r\n            \t\t\t <th><select data-dojo-attach-point=\"_queryOperator\" class=\"mosaicRuleSelectbox\">\r\n                   \t\t\t\t\t<option>&lt;None&gt;</option>\r\n                   \t\t\t\t\t<option>=</option>\r\n                   \t\t\t\t\t<option>&lt;&gt;</option>\r\n            \t\t\t\t\t\t<option>&gt;</option>\r\n            \t\t\t\t\t\t<option>&gt;=</option>\r\n            \t\t\t\t\t\t<option>&lt;</option>\r\n            \t\t\t\t\t\t<option>&lt;=</option>\r\n            \t\t\t\t\t\t<option>LIKE</option>\r\n            \t\t\t\t\t\t<option>AND</option>\r\n            \t\t\t\t\t\t<option>OR</option>\r\n            \t\t\t\t\t\t<option>NOT</option>\r\n            \t\t\t\t\t\t<option>IS</option>\r\n            \t\t\t\t\t</select></th> \r\n         \t\t\t\t</tr>\r\n         \t\t\t\t<tr>\r\n            \t\t\t<th><label for=\"Query Value\" >${_i18n.widgets.mosaicRule.queryValueLabel}</label></th> \r\n            \t\t\t<th><input type=\"text\" data-dojo-attach-point=\"_queryValue\" class=\"mosaicRuleSelectbox\"/></th> \r\n         \t\t\t\t</tr>\r\n         \t\t\t</table>\r\n            \t</div>\t\r\n            \t</div>\r\n               </th>\r\n         </tr>\r\n         <tr>\r\n         \t<th></th>\r\n         \t<th><input type=\"button\" data-dojo-attach-point=\"_apply\" value=\"APPLY\" size=\"15\"/></th>\r\n         </tr>\r\n      </table>\r\n</div>"}});define("esri/dijit/MosaicRule",["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/array","dojo/_base/Color","dojo/_base/window","dojo/dom-construct","dojo/i18n!esri/nls/jsapi","dojo/text!esri/dijit/templates/MosaicRule.html","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/query","dojo/number","dojo/has","dojo/date/locale","dojo/dnd/Source","esri/kernel","esri/config","esri/layers/MosaicRule","esri/renderers/SimpleRenderer","esri/symbols/SimpleFillSymbol","esri/layers/GraphicsLayer","esri/tasks/ImageServiceIdentifyTask","esri/tasks/ImageServiceIdentifyParameters","esri/tasks/QueryTask","esri/tasks/query","esri/geometry/Polygon","esri/geometry/Point","esri/geometry/Extent","dijit/Calendar","dijit/form/DropDownButton","dijit/form/CheckBox","dijit/TooltipDialog","dijit/layout/ContentPane"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10,_11,_12,_13,_14,_15,_16,_17,_18,_19,_1a,_1b,_1c,_1d,_1e){var _1f=_1([_a,_b,_c],{declaredClass:"esri.dijit.MosaicRule",templateString:_9,widgetsInTemplate:true,layer:null,map:null,parent:null,hideApplyButton:false,hideLockRasterSelectionIdButton:false,_MosaicRuleObject:null,_fieldType:null,_identifyTask:null,_identify:null,_queryTask:null,_query:null,_graphicsLayer:null,_app:null,_initialExtent:null,_getpoint:null,constructor:function(_20){_1.safeMixin(this,_20);this._i18n=_8;this._MosaicRuleObject=new _14();var _21=new _15(new _16().setColor(new _5([150,150,150,0.5])));this._graphicsLayer=new _17();this._graphicsLayer.setRenderer(_21);this.map.addLayer(this._graphicsLayer);},startup:function(){this.inherited(arguments);var _22=_2.hitch(this,"_onclickTooltip");var _23=_2.hitch(this,"_oncloseTooltip");var _24=_2.hitch(this,"_onclickLayerlist");var _25=_2.hitch(this,"_OnOpenQueryPopup");var _26=_2.hitch(this,"_OnCloseQueryPopup");var _27=_2.hitch(this,"_OnChangeMosaicRule");var _28=_2.hitch(this,"_OnChangeOrderField");var _29=_2.hitch(this,"_OnChangeSetDate");var _2a=_2.hitch(this,"_OnChangeLockRaster");var _2b=_2.hitch(this,"_OnClickCurrentExtent");var _2c=_2.hitch(this,"_OnChangeMosaicOperator");var _2d=_2.hitch(this,"_OnClickAscending");var _2e=_2.hitch(this,"_OnChangeQueryOrderField");var _2f=_2.hitch(this,"_OnChangeQueryOperator");var _30=_2.hitch(this,"_OnKeyupQueryValue");var _31=_2.hitch(this,"_OnClickApplyMosaic");var _32=_2.hitch(this,"_OnClickResetMosaic");_3.connect(this._lockRasterTooltip,"onclick",_22);_3.connect(this._lockRasterTooltip,"onClose",_23);_3.connect(this._layerList,"onclick",_24);_3.connect(this._queryTooltip,"onOpen",_25);_3.connect(this._queryTooltip,"onClose",_26);_3.connect(this._mosaicRule,"onchange",_27);_3.connect(this._orderField,"onchange",_28);_3.connect(this._dateValue,"onChange",_29);_3.connect(this._lockRaster,"onkeyup",_2a);_3.connect(this._aoi,"onclick",_2b);_3.connect(this._mosaicOperator,"onchange",_2c);_3.connect(this._ascending,"onclick",_2d);_3.connect(this._queryOrderField,"onchange",_2e);_3.connect(this._queryOperator,"onchange",_2f);_3.connect(this._queryValue,"onkeyup",_30);_3.connect(this._apply,"onclick",_31);_3.subscribe("onMosaicRuleApply",_31);_3.subscribe("onMosaicRuleReset",_32);this._ascending.checked=true;this._MosaicRuleObject.ascending=this._ascending.checked;if(this.hideApplyButton){this._apply.style.display="none";}if(this.hideLockRasterSelectionIdButton){this._lockRasterIdSelect.domNode.style.display="none";}this._where.style.display="none";this._whereLabel.style.display="none";this._queryBlock.domNode.style.display="none";},_init:function(){this._MosaicRuleObject=new _14();this._getpoint=0;this._fieldType=[];this._app={};_7.empty(this._layerList);this._identifyTask=new _18(this.layer.url);this._identify=new _19();this._queryTask=new _1a(this.layer.url);this._query=new _1b();},_buildRasterList:function(){this._lockRasterMsg.style.display="";this._lockRasterMsg.innerHTML=this._i18n.widgets.mosaicRule.lockRasterRequestMsg;var _33=new _1e(this.layer.fullExtent.toJson());if(this.layer.fullExtent.contains(this.map.extent)){_33=new _1e(this.map.extent.toJson());}if(this.layer.version>=10&&this.map.wrapAround180){_33=_33._normalize(true);}var _34=new _1c(_33.spatialReference);_34.addRing([[_33.xmin,_33.ymin],[_33.xmin,_33.ymax],[_33.xmax,_33.ymax],[_33.xmax,_33.ymin],[_33.xmin,_33.ymin]]);var psX=(_33.xmax-_33.xmin)/(this.map.width*2);var psY=(_33.ymax-_33.ymin)/(this.map.height*2);var _35=_33.spatialReference;var _36=new _1d(psX,psY,_35);var _37=this._identifyTask;var _38=this._identify;_38.geometry=_34;_38.pixelSize=_36;_38.returnGeometry=false;var _39=_2.hitch(this,"_errorRastersInAOI");var _3a=_2.hitch(this,"_showRastersInAOI");_37.execute(_38,function(_3b){_3a(_3b);},function(_3c){_39(_3c);});},_setLayerAttr:function(_3d){this.inherited(arguments);this.layer=_3d;this._init();var i;for(i=this._mosaicRule.options.length-1;i>=0;i--){this._mosaicRule.remove(i);}this._mosaicRule.add(new Option("<MosaicDefault>"),0);for(i=this._mosaicOperator.options.length-1;i>=0;i--){this._mosaicOperator.remove(i);}this._mosaicOperator.add(new Option("<MosaicDefault>"),0);i=this._orderField.options.length;while(i>0){this._orderField.remove(i-1);i=this._orderField.options.length;}this._orderField.add(new Option("<MosaicDefault>"),0);this._orderValue.value="";this._where.value="<where>";this._orderFieldBlock.style.display="";this._lockRasterBlock.style.display="";this._ascendingBlock.style.display="";this._graphicsLayer.clear();var _3e=_2.hitch(this,"_initUsingServiceInfo");if(this.layer.loaded){this._initUsingServiceInfo(this.layer);}else{_3.connect(this.layer,"onLoad",_3e);}},_initUsingServiceInfo:function(_3f){var _40=new _1e(_3f.extent);this._initialExtent=_40;if(!this.hideLockRasterSelectionIdButton){this._buildRasterList();}this._mosaicRule.options.length=1;this._orderField.options.length=1;this._populateOrderFieldsList(_3f.fields);if(_3f.sortField){this._MosaicRuleObject.sortField=_3f.sortField;}if(_3f.sortValue){this._orderValue.value=_3f.sortValue;this._MosaicRuleObject.sortValue=_3f.sortValue;}var _41=this._i18n.widgets.mosaicRule.recognizedMosaicMethodsList;if(_3f.hasOwnProperty("currentVersion")&&_3f.currentVersion>=10.1&&_3f.allowedMosaicMethods.length>1){_41=_3f.allowedMosaicMethods;}this._populateMosaicMethodsList(_41);this._MosaicRuleObject.method=this._esriStringMosaicMethodToEnum(_3f.defaultMosaicMethod);this._populateMosaicOperatorsList(_3f.defaultMosaicMethod);this._MosaicRuleObject.operation=this._esriStringMosaicOperatorToEnum(_3f.mosaicOperator);var _42=(this.layer&&this.layer.mosaicRule)?this.layer.mosaicRule:this._MosaicRuleObject;this._setDefaultValues(_42);},_populateOrderFieldsList:function(_43){var t;for(t in _43){if(_43[t].type==="esriFieldTypeDouble"||_43[t].type==="esriFieldTypeInteger"||_43[t].type==="esriFieldTypeSmallInteger"||_43[t].type==="esriFieldTypeOID"||_43[t].type==="esriFieldTypeDate"){this._orderField.add(new Option(_43[t].name),this._orderField.length);this._queryOrderField.add(new Option(_43[t].name),this._queryOrderField.length);this._fieldType.push(_43[t].type);}}if(this._orderField.children.length===1){this._orderField.remove(0);this._orderField.add(new Option(this._i18n.widgets.mosaicRule.orderFieldNotFound),true);}},_populateMosaicMethodsList:function(_44){var _45=_44.split(",");var h;for(h=_45.length-1;h>=0;h--){if((_45[h].toLowerCase())!=="viewpoint"){this._mosaicRule.add(new Option(_45[h]),this._mosaicRule.length);}}},_populateMosaicOperatorsList:function(_46){var _47=this._mosaicOperator.options[this._mosaicOperator.selectedIndex].text.toLowerCase();var i;for(i=this._mosaicOperator.options.length-1;i>=0;i--){this._mosaicOperator.remove(i);}if(!_46||_46.toLowerCase()!=="seamline"){this._mosaicOperator.add(new Option("<MosaicDefault>"),0);this._mosaicOperator.add(new Option("First"),1);this._mosaicOperator.add(new Option("Blend"),2);this._mosaicOperator.add(new Option("Last"),3);this._mosaicOperator.add(new Option("Min"),4);this._mosaicOperator.add(new Option("Max"),5);this._mosaicOperator.add(new Option("Mean"),6);}else{this._mosaicOperator.add(new Option("<MosaicDefault>"),0);this._mosaicOperator.add(new Option("First"),1);this._mosaicOperator.add(new Option("Blend"),2);}if(_47!==null){for(i=this._mosaicOperator.options.length-1;i>=0;i--){var _48=this._mosaicOperator.children[i].innerText;if(!_48){_48=this._mosaicOperator.children[i].text;}if(_48.toLowerCase()===_47.toLowerCase()){this._mosaicOperator.selectedIndex=i;break;}}}else{this._mosaicOperator.selectedIndex=0;}},_setDefaultValues:function(_49){if(!_49){return;}var h;var _4a;if(_49.sortField){for(h=0;h<this._orderField.children.length;h++){_4a=this._orderField.children[h].innerText;if(!_4a){_4a=this._orderField.children[h].text;}if(_49.sortField.toLowerCase()===_4a.toLowerCase()){this._orderField.selectedIndex=h;this._OnChangeOrderField();break;}}}if(_49.sortValue){this._orderValue.value=_49.sortValue;}var _4b=this._esriEnumMosaicMethodToString(_49.method);for(h=0;h<this._mosaicRule.children.length;h++){_4a=this._mosaicRule.children[h].innerText;if(!_4a){_4a=this._mosaicRule.children[h].text;}if(_4b.toLowerCase()===_4a.toLowerCase()){this._mosaicRule.selectedIndex=h;this._OnChangeMosaicRule();break;}}if(_4b.toLowerCase()==="lockraster"&&_49.lockRasterIds){this._lockRaster.value=_49.lockRasterIds;}var _4c=this._esriEnumMosaicOperatorToString(_49.operation);for(h=0;h<this._mosaicOperator.children.length;h++){_4a=this._mosaicOperator.children[h].innerText;if(!_4a){_4a=this._mosaicOperator.children[h].text;}if(_4c.toLowerCase()===_4a.toLowerCase()){this._mosaicOperator.selectedIndex=h;this._OnChangeMosaicOperator();break;}}},_selectAllCheckboxOnChange:function(){var _4d=_2.hitch(this,"_checkboxOnChange");var _4e=_d(".mosaicRuleLayerlistSelectCheckbox",this._layerList);var _4f=_d(".mosaicRuleLayerlistCheckbox",this._layerList);_4e.forEach(function(_50){if(!_50.checked){_4f.forEach(function(_51){_51.checked=false;_4d();});}else{_4f.forEach(function(_52){_52.checked=true;_4d();});}});},_OnOpenQueryPopup:function(){this._where.disabled=true;},_OnCloseQueryPopup:function(){this._where.disabled=false;if(this._queryOrderField.options[this._queryOrderField.selectedIndex].text!=="<None>"){try{this._queryOrderField.add(new Option("<None>"),this._queryOrderField.options[0]);}catch(err1){this._queryOrderField.add(new Option("<None>"),0);}this._queryOrderField.selectedIndex=0;}if(this._queryOperator.options[this._queryOperator.selectedIndex].text!=="<None>"){try{this._queryOperator.add(new Option("<None>"),this._queryOperator.options[0]);}catch(err2){this._queryOperator.add(new Option("<None>"),0);}this._queryOperator.selectedIndex=0;}this._queryValue.value="";},_onclickLayerlist:function(){this._getpoint=1;},_onclickTooltip:function(){if(this._getpoint===0){this._app.dndSource.selectNone();this._graphicsLayer.clear();}this._getpoint=0;},_oncloseTooltip:function(){this._graphicsLayer.clear();},_checkboxOnChange:function(){var _53=[];var _54=0;var _55=0;var _56=_d(".mosaicRuleLayerlistSelectCheckbox",this._layerList);var _57=_d(".mosaicRuleLayerlistCheckbox",this._layerList);_57.forEach(function(_58){_54++;if(_58.checked===true){_55++;_53.push(parseInt(_58.id,10));}});if(_55!==_54){_56.forEach(function(_59){_59.checked=false;});}if(_55===_54){_56.forEach(function(_5a){_5a.checked=true;});}if(_53.length===0){this._lockRaster.value=null;}else{this._lockRaster.value=_53;}},_selectRaster:function(){this._graphicsLayer.clear();var _5b=_2.hitch(this,"_setGraphicQuery");var _5c=this._app.dndSource.getSelectedNodes();_5c.forEach(function(_5d){var _5e=_d(".mosaicRuleLayerlistCheckbox",_5d);_5e.forEach(function(_5f){_5b(_5f.id);});});},_setGraphicQuery:function(id){var _60=_2.hitch(this,"_addResultsToMap");this._query.geometry=this._initialExtent;this._query.returnGeometry=true;this._query.where="OBJECTID = "+id;this._queryTask.execute(this._query,_60);},_addResultsToMap:function(_61){var _62=_2.hitch(this,"_addEachFeatureToMap");_61.features.forEach(_62);},_addEachFeatureToMap:function(_63){this._graphicsLayer.add(_63);},_reorderRaster:function(){var _64=_d(".mosaicRuleLayerlistCheckbox",this._layerList);var _65=[];_64.forEach(function(_66){if(_66.checked===true){_65.push(parseInt(_66.id,10));}});var len=_65.length;var chk=0;var a;for(a=0;a!==len/2;a++){chk=0;var k;for(k=0;k<_65.length-1;k++){if(_65[_65.length-1]===_65[k]){_65.splice((_65.length-1),1);chk=1;break;}}if(chk===0){break;}}if(_65.length===0){this._lockRaster.value=null;}else{this._lockRaster.value=_65;}},_showRastersInAOI:function(_67){this._graphicsLayer.clear();var _68;if(_67&&_67.catalogItems){_68=_67.catalogItems.features;}else{_68=_67.features;}if(!_67||!_68||_68.length<1){this._lockRasterMsg.innerHTML=this._i18n.widgets.mosaicRule.lockRasterRequestNoRasterMsg;return;}this._lockRasterMsg.innerHTML=this._i18n.widgets.mosaicRule.lockRasterRequestDoneMsg;this._lockRasterMsg.style.display="none";if(this._app.hasOwnProperty("dndSource")){this._app.dndSource.destroy();_7.empty(this._layerList);}var _69=[];if(this.layer&&this.layer.mosaicRule&&this.layer.mosaicRule.lockRasterIds){_69=this.layer.mosaicRule.lockRasterIds;}var _6a=[];var _6b=[];var _6c=_2.hitch(this,"_checkboxOnChange");var _6d=_2.hitch(this,"_selectAllCheckboxOnChange");var i;for(i=0;i<_68.length;i++){var _6e=_7.create("div");var _6f=_7.create("input");_6f.type="checkbox";_6f.className="mosaicRuleLayerlistCheckbox";_6f.id=_68[i].attributes.OBJECTID;if(_68[i].attributes.hasOwnProperty("checked")){if(_68[i].attributes.checked){_6f.checked=true;_6a.push(_68[i].attributes.OBJECTID);}else{_6f.checked=false;}}else{if(_69.length===0){_6f.checked=true;}else{_6f.checked=(_4.indexOf(_69,_68[i].attributes.OBJECTID)===-1?false:true);}_6a.push(_68[i].attributes.OBJECTID);}_3.connect(_6f,"onchange",_6c);_6e.appendChild(_6f);var _70=_7.create("label");_70.appendChild(_6.doc.createTextNode(_68[i].attributes.OBJECTID));_6e.appendChild(_70);_6b.push(_6e);}if(_68.length>0){if(!_68[0].attributes.hasOwnProperty("checked")&&_69.length<=0){this._lockRaster.value=_6a;}}this._MosaicRuleObject.ascending=true;var _71=_7.create("input");_71.type="checkbox";_71.id="select";_71.name=this._i18n.widgets.mosaicRule.selectAllLabel;_71.className="mosaicRuleLayerlistSelectCheckbox";if(_67.hasOwnProperty("selectAll")){if(_67.selectAll){_71.checked=true;}else{_71.checked=false;}}else{_71.checked=true;}_3.connect(_71,"onchange",_6d);var _72=_7.create("div");_72.appendChild(_71);var _73=_7.create("label");_73.appendChild(_6.doc.createTextNode(this._i18n.widgets.mosaicRule.selectAllLabel));_72.appendChild(_73);this._layerList.appendChild(_72);this._app.dndSource=new _11(this._layerList);this._app.dndSource.insertNodes(false,_6b);var _74=_2.hitch(this,"_reorderRaster");var _75=_2.hitch(this,"_selectRaster");_3.connect(this._app.dndSource,"onDndDrop",_74);_3.connect(this._app.dndSource,"onMouseUp",_75);},_errorRastersInAOI:function(){this._lockRasterMsg.innerHTML=this._i18n.widgets.mosaicRule.lockRasterRequestErrorMsg;return;},_OnChangeLockRaster:function(){var _76={};var _77=[];var _78=[];var _79=this._lockRaster.value.split(",");var _7a=_d(".mosaicRuleLayerlistCheckbox",this._layerList);_7a.forEach(function(_7b){_77.push(_7b.id);_7b.checked=false;});var i;var x;if(_79.length>0){for(i=0;i<_79.length;i++){if(_79[i].length!==0&&!isNaN(_79[i])){var idx=_4.indexOf(_77,_79[i]);if(idx!==-1){x={};x.attributes={};x.attributes.OBJECTID=_79[i];x.attributes.checked=1;_78.push(x);}}}}var _7c;for(i=0;i<_77.length;i++){_7c=0;var j;for(j=0;j<_78.length;j++){if(_77[i]===_78[j].attributes.OBJECTID){_7c=1;}}if(_7c===0){x={};x.attributes={};x.attributes.OBJECTID=_77[i];x.attributes.checked=0;_78.push(x);}}_76.catalogItems={};_76.catalogItems.features=_78;_76.selectAll=0;if(_77.length===_79.length){_76.selectAll=1;}this._showRastersInAOI(_76);},_OnClickCurrentExtent:function(){this._buildRasterList();},_OnClickApplyMosaic:function(){var _7d=[];if(this._MosaicRuleObject.method===_14.METHOD_LOCKRASTER){var _7e=this._lockRaster.value.split(",");if(_7e.length>0){var i;for(i=0;i<_7e.length;i++){if(_7e[i].length===0||isNaN(_7e[i])){_7e.splice(i,1);i--;}}if(_7e.length===0){return;}for(i=0;i<_7e.length;i++){_7d.push(parseInt(_7e[i],10));}this._MosaicRuleObject.lockRasterIds=_7d;}else{return;}}if(this._MosaicRuleObject.method===_14.METHOD_ATTRIBUTE){if(this._fieldType[this._orderField.selectedIndex]==="esriFieldTypeSmallInteger"||this._fieldType[this._orderField.selectedIndex]==="esriFieldTypeInteger"||this._fieldType[this._orderField.selectedIndex]==="esriFieldTypeDouble"){this._MosaicRuleObject.sortValue=_e.parse(this._orderValue.value);}else{this._MosaicRuleObject.sortValue=this._orderValue.value;}}if(this._where.value!=="<where>"&&this._where.value.length>1){this._MosaicRuleObject.where=this._where.value;}else{this._MosaicRuleObject.where=null;}this.layer.setMosaicRule(this._MosaicRuleObject);},_OnClickResetMosaic:function(){if(!this.layer){return;}this.layer.mosaicRule=null;this._initUsingServiceInfo(this.layer);this._OnClickApplyMosaic();},_OnChangeSetDate:function(_7f){this._orderValue.value=_10.format(_7f,{datePattern:"yyyy/MM/dd",timePattern:"HH:mm:ss"});},_OnChangeOrderField:function(){var _80=this._orderField.children[0].innerText;if(!_80){_80=this._orderField.children[0].text;}if(_80==="<MosaicDefault>"){this._orderField.remove(0);}var _81=this._orderField.children[this._orderField.selectedIndex].innerText;if(!_81){_81=this._orderField.children[this._orderField.selectedIndex].text;}this._MosaicRuleObject.sortField=_81;switch(this._fieldType[this._orderField.selectedIndex]){case "esriFieldTypeOID":case "esriFieldTypeInteger":case "esriFieldTypeSmallInteger":case "esriFieldTypeDouble":this._orderValueTextBlock.style.display="";this._orderValueDateBlock._setDisabledAttr(true);break;case "esriFieldTypeDate":this._orderValueTextBlock.style.display="";this._orderValueDateBlock._setDisabledAttr(false);break;default:this._orderValueTextBlock.style.display="none";this._orderValueDateBlock._setDisabledAttr(true);}},_OnChangeMosaicOperator:function(){var _82=this._mosaicOperator.children[0].innerText;if(!_82){_82=this._mosaicOperator.children[0].text;}if(_82==="<MosaicDefault>"){this._mosaicOperator.remove(0);}this._MosaicRuleObject.operation=this._esriStringMosaicOperatorToEnum(this._mosaicOperator.options[this._mosaicOperator.selectedIndex].text);},_OnClickAscending:function(){this._MosaicRuleObject.ascending=false;if(this._ascending.checked){this._MosaicRuleObject.ascending=true;}},_OnChangeMosaicRule:function(){var _83="Last,Min,Max,Mean";if(this._mosaicOperator.options.length<5){var _84=_83.split(",");var h;for(h=_84.length-1;h>=0;h--){this._mosaicOperator.add(new Option(_84[h]),this._mosaicOperator.options.length);}}var _85=this._mosaicRule.children[0].innerText;if(!_85){_85=this._mosaicRule.children[0].text;}if(_85==="<MosaicDefault>"){this._mosaicRule.remove(0);}this._graphicsLayer.clear();this._lockRasterBlock.style.display="";this._orderFieldBlock.style.display="";this._ascendingBlock.style.display="";this._MosaicRuleObject.ascending=this._ascending.checked;this._apply.value="APPLY";switch(this._mosaicRule.options[this._mosaicRule.selectedIndex].text.toLowerCase()){case "none":this._MosaicRuleObject.lockRasterIds=null;this._MosaicRuleObject.sortField=null;this._MosaicRuleObject.sortValue=null;this._orderValueDateBlock._setDisabledAttr(true);this._orderValueTextBlock.style.display="none";this._lockRasterBlock.style.display="none";this._orderFieldBlock.style.display="none";this._MosaicRuleObject.method=_14.METHOD_NONE;break;case "byattribute":this._MosaicRuleObject.sortField=this._orderField.options[this._orderField.selectedIndex].text;this._MosaicRuleObject.lockRasterIds=null;this._lockRasterBlock.style.display="none";_85=this._orderField.children[this._orderField.selectedIndex].innerText;if(!_85){_85=this._orderField.children[this._orderField.selectedIndex].text;}if(_85!=="<MosaicDefault>"){switch(this._fieldType[this._orderField.selectedIndex]){case "esriFieldTypeOID":case "esriFieldTypeInteger":case "esriFieldTypeSmallInteger":case "esriFieldTypeDouble":this._orderValueTextBlock.style.display="";this._orderValueDateBlock._setDisabledAttr(true);break;case "esriFieldTypeDate":this._orderValueTextBlock.style.display="";this._orderValueDateBlock._setDisabledAttr(false);break;default:this._orderValueTextBlock.style.display="none";this._orderValueDateBlock._setDisabledAttr(true);}}this._MosaicRuleObject.method=_14.METHOD_ATTRIBUTE;break;case "center":this._MosaicRuleObject.sortField=null;this._MosaicRuleObject.sortValue=null;this._MosaicRuleObject.lockRasterIds=null;this._orderValueDateBlock._setDisabledAttr(true);this._orderValueTextBlock.style.display="none";this._lockRasterBlock.style.display="none";this._orderFieldBlock.style.display="none";this._MosaicRuleObject.method=_14.METHOD_CENTER;break;case "nadir":this._MosaicRuleObject.sortField=null;this._MosaicRuleObject.sortValue=null;this._MosaicRuleObject.lockRasterIds=null;this._orderValueDateBlock._setDisabledAttr(true);this._orderValueTextBlock.style.display="none";this._lockRasterBlock.style.display="none";this._orderFieldBlock.style.display="none";this._MosaicRuleObject.method=_14.METHOD_NADIR;break;case "viewpoint":this._MosaicRuleObject.sortField=null;this._MosaicRuleObject.sortValue=null;this._MosaicRuleObject.lockRasterIds=null;this._orderValueDateBlock._setDisabledAttr(true);this._orderValueTextBlock.style.display="none";this._lockRasterBlock.style.display="none";this._orderFieldBlock.style.display="none";this._MosaicRuleObject.method=_14.METHOD_VIEWPOINT;break;case "lockraster":this._MosaicRuleObject.sortField=null;this._MosaicRuleObject.sortValue=null;this._orderValueDateBlock._setDisabledAttr(true);this._orderValueTextBlock.style.display="none";this._orderFieldBlock.style.display="none";this._MosaicRuleObject.method=_14.METHOD_LOCKRASTER;break;case "northwest":this._MosaicRuleObject.sortField=null;this._MosaicRuleObject.sortValue=null;this._MosaicRuleObject.lockRasterIds=null;this._orderValueDateBlock._setDisabledAttr(true);this._orderValueTextBlock.style.display="none";this._lockRasterBlock.style.display="none";this._orderFieldBlock.style.display="none";this._MosaicRuleObject.method=_14.METHOD_NORTHWEST;break;case "seamline":var _86=this._mosaicOperator.options[this._mosaicOperator.selectedIndex].text.toLowerCase();var i;for(i=this._mosaicOperator.options.length-1;i>=0;i--){_85=this._mosaicOperator.children[i].innerText;if(!_85){_85=this._mosaicOperator.children[i].text;}if(_85==="Blend"){break;}this._mosaicOperator.remove(i);}if(_86==="blend"){this._mosaicOperator.selectedIndex=1;}else{this._mosaicOperator.selectedIndex=0;}this._OnChangeMosaicOperator();this._MosaicRuleObject.ascending=null;this._MosaicRuleObject.sortField=null;this._MosaicRuleObject.sortValue=null;this._MosaicRuleObject.lockRasterIds=null;this._orderValueDateBlock._setDisabledAttr(true);this._orderValueTextBlock.style.display="none";this._lockRasterBlock.style.display="none";this._orderFieldBlock.style.display="none";this._ascendingBlock.style.display="none";this._MosaicRuleObject.method=_14.METHOD_SEAMLINE;break;default:console.log("info not available");}},_OnChangeQueryOrderField:function(){this._where.value="";var _87=this._queryOrderField.children[0].innerText;if(!_87){_87=this._queryOrderField.children[0].text;}if(_87==="<None>"){this._queryOrderField.remove(0);}this._where.value=this._queryOrderField.options[this._queryOrderField.selectedIndex].text;if(this._queryOperator.options[this._queryOperator.selectedIndex].text!=="<None>"){this._where.value=this._where.value+" "+this._queryOperator.options[this._queryOperator.selectedIndex].text;}if(this._queryValue.value.length>0){this._where.value=this._where.value+" "+this._queryValue.value;}},_OnChangeQueryOperator:function(){this._where.value="";var _88=this._queryOperator.children[0].innerText;if(!_88){_88=this._queryOperator.children[0].text;}if(_88==="<None>"){this._queryOperator.remove(0);}if(this._queryOrderField.options[this._queryOrderField.selectedIndex].text!=="<None>"){this._where.value=this._queryOrderField.options[this._queryOrderField.selectedIndex].text;}this._where.value=this._where.value+" "+this._queryOperator.options[this._queryOperator.selectedIndex].text;if(this._queryValue.value.length>0){this._where.value=this._where.value+" "+this._queryValue.value;}},_OnKeyupQueryValue:function(){this._where.value="";if(this._queryOrderField.options[this._queryOrderField.selectedIndex].text!=="<None>"){this._where.value=this._queryOrderField.options[this._queryOrderField.selectedIndex].text;}if(this._queryOperator.options[this._queryOperator.selectedIndex].text!=="<None>"){this._where.value=this._where.value+" "+this._queryOperator.options[this._queryOperator.selectedIndex].text;}this._where.value=this._where.value+" "+this._queryValue.value;},_esriEnumMosaicMethodToString:function(_89){var _8a="none";switch(_89){case _14.METHOD_ATTRIBUTE:_8a="byattribute";break;case _14.METHOD_CENTER:_8a="center";break;case _14.METHOD_LOCKRASTER:_8a="lockraster";break;case _14.METHOD_NADIR:_8a="nadir";break;case _14.METHOD_NORTHWEST:_8a="northwest";break;case _14.METHOD_SEAMLINE:_8a="seamline";break;case _14.METHOD_VIEWPOINT:_8a="viewpoint";break;}return _8a;},_esriStringMosaicMethodToEnum:function(_8b){if(!_8b){return;}var _8c=_14.METHOD_NONE;switch(_8b.toLowerCase()){case "byattribute":_8c=_14.METHOD_ATTRIBUTE;break;case "center":_8c=_14.METHOD_CENTER;break;case "lockraster":_8c=_14.METHOD_LOCKRASTER;break;case "nadir":_8c=_14.METHOD_NADIR;break;case "northwest":_8c=_14.METHOD_NORTHWEST;break;case "seamline":_8c=_14.METHOD_SEAMLINE;break;case "viewpoint":_8c=_14.METHOD_VIEWPOINT;break;}return _8c;},_esriStringMosaicOperatorToEnum:function(_8d){if(!_8d){return;}switch(_8d.toLowerCase()){case "first":return _14.OPERATION_FIRST;case "last":return _14.OPERATION_LAST;case "max":return _14.OPERATION_MAX;case "min":return _14.OPERATION_MIN;case "blend":return _14.OPERATION_BLEND;case "mean":return _14.OPERATION_MEAN;}},_esriEnumMosaicOperatorToString:function(_8e){var _8f="first";switch(_8e){case _14.OPERATION_FIRST:_8f="first";break;case _14.OPERATION_LAST:_8f="last";break;case _14.OPERATION_MAX:_8f="max";break;case _14.OPERATION_MIN:_8f="min";break;case _14.OPERATION_BLEND:_8f="blend";break;case _14.OPERATION_MEAN:_8f="mean";break;}return _8f;}});if(_f("extend-esri")){_2.setObject("dijit.MosaicRule",_1f,_12);}return _1f;});