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
define("esri/layers/ArcGISDynamicMapServiceLayer",["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/sniff","dojo/io-query","esri/kernel","esri/config","esri/request","esri/urlUtils","esri/layerUtils","esri/geometry/scaleUtils","esri/layers/DynamicMapServiceLayer","esri/layers/ArcGISMapServiceLayer","esri/layers/TimeInfo","esri/layers/LayerTimeOptions","esri/layers/ImageParameters","esri/layers/DynamicLayerInfo","esri/layers/LayerMapSource"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10,_11,_12,_13){var _14=_1([_d,_e],{declaredClass:"esri.layers.ArcGISDynamicMapServiceLayer",constructor:function(url,_15){var _16=_15&&_15.imageParameters,dh=_2.hitch;if(_16){var _17=_16.layerDefinitions;if(_17){this.setLayerDefinitions(_17);}if(_16.layerOption===_11.LAYER_OPTION_SHOW){this.visibleLayers=[].concat(_16.layerIds);}}this._setIsPNG32=dh(this,this._setIsPNG32);this.dpi=(_16&&_16.dpi)||96;this.imageFormat=(_16&&_16.format)||"png8";this.imageTransparency=(_16&&_16.transparent===false)?false:true;this._setIsPNG32();this.gdbVersion=_15&&_15.gdbVersion;this._params.gdbVersion=this.gdbVersion;_2.mixin(this._params,this._url.query,{dpi:this.dpi,transparent:this.imageTransparency,format:this.imageFormat},_16?_16.toJson():{});this.getImageUrl=dh(this,this.getImageUrl);this._initLayer=dh(this,this._initLayer);this._load=dh(this,this._load);this.useMapImage=_15?_15.useMapImage:false;if(this.useMapImage){this._imageExportHandler=dh(this,this._imageExportHandler);}this._loadCallback=_15&&_15.loadCallback;var _18=_15&&_15.resourceInfo;if(_18){this._initLayer(_18);}else{if(arguments[2]===undefined||arguments[2]===false){this._load();}}this.registerConnectEvents("esri.layers.ArcGISDynamicMapServiceLayer",{"gdb-version-change":true});},disableClientCaching:false,layerDefinitions:null,_initLayer:function(_19,io){this.inherited(arguments);if(_19.timeInfo){this.timeInfo=new _f(_19.timeInfo);}this.loaded=true;this.onLoad(this);var _1a=this._loadCallback;if(_1a){delete this._loadCallback;_1a(this);}},getImageUrl:function(_1b,_1c,_1d,_1e){var _1f=this._url.path+"/export?",_20=this._params,sr=_1b.spatialReference.wkid||_4.toJson(_1b.spatialReference.toJson()),_21=this._errorHandler;delete _20._ts;_2.mixin(_20,{bbox:_1b.xmin+","+_1b.ymin+","+_1b.xmax+","+_1b.ymax,bboxSR:sr,imageSR:sr,size:_1c+","+_1d},this.disableClientCaching?{_ts:new Date().getTime()}:{});if(_20.layerDefs){var _22=_20.layerDefs;delete _20.layerDefs;_2.mixin(_20,{layerDefs:_22});}var _23=(_20.token=this._getToken()),_24=_a.addProxy(_1f+_6.objectToQuery(_2.mixin({},_20,{f:"image"})));if((_24.length>_8.defaults.io.postLength)||this.useMapImage){this._jsonRequest=_9({url:_1f,content:_2.mixin(_20,{f:"json"}),callbackParamName:"callback",load:function(_25,io){var _26=_25.href;if(_23){_26+=(_26.indexOf("?")===-1?("?token="+_23):("&token="+_23));}_1e(_a.addProxy(_26));},error:_21});}else{_1e(_24);}},_setIsPNG32:function(){var _27=this.imageFormat.toLowerCase(),_28=_5("ie");this.isPNG32=_28&&_28===6&&(_27==="png32"||_27==="png24")&&this.imageTransparency;},_setTime:function(_29){var _2a=this.timeInfo,_2b=(this._params.time=_29?_29.toJson().join(","):null);if(this.version<10.02&&_2a){if(!_2b){var _2c=this.layerInfos;if(_2c){var _2d=this.layerTimeOptions,_2e=_2d?_2d.slice(0):[],ids=[];_3.forEach(_2c,function(_2f){if(!_2f.subLayerIds){ids.push(_2f.id);}});if(ids.length){_3.forEach(ids,function(id){if(!_2e[id]){var opt=new _10();opt.useTime=false;_2e[id]=opt;}});this._params.layerTimeOptions=_b._serializeTimeOptions(_2e,ids);}}}else{this._params.layerTimeOptions=_b._serializeTimeOptions(this.layerTimeOptions);}}if(this.version>=10.02&&_2a){if(!_2b&&!_2a.hasLiveData){this._params.time="null,null";}}},setDPI:function(dpi,_30){this.dpi=(this._params.dpi=dpi);if(!_30){this.refresh(true);}},setImageFormat:function(_31,_32){this.imageFormat=(this._params.format=_31);this._setIsPNG32();if(!_32){this.refresh(true);}},setImageTransparency:function(_33,_34){this.imageTransparency=(this._params.transparent=_33);this._setIsPNG32();if(!_34){this.refresh(true);}},setVisibleLayers:function(_35,_36){this.visibleLayers=_35;this._params.layers=_11.LAYER_OPTION_SHOW+":"+_35.join(",");this._updateDynamicLayers();if(!_36){this.refresh(true);}},setDefaultVisibleLayers:function(_37){this.visibleLayers=this._defaultVisibleLayers;this._params.layers=null;this._updateDynamicLayers();if(!_37){this.refresh(true);}},setLayerDefinitions:function(_38,_39){this.layerDefinitions=_38;this._params.layerDefs=_b._serializeLayerDefinitions(_38);this._updateDynamicLayers();if(!_39){this.refresh(true);}},setDefaultLayerDefinitions:function(_3a){this.layerDefinitions=this._params.layerDefs=null;this._updateDynamicLayers();if(!_3a){this.refresh(true);}},setDisableClientCaching:function(_3b){this.disableClientCaching=_3b;},setLayerTimeOptions:function(_3c,_3d){this.layerTimeOptions=_3c;this._params.layerTimeOptions=_b._serializeTimeOptions(_3c);this._updateDynamicLayers();if(!_3d){this.refresh(true);}},refresh:function(_3e){if(_3e){this.inherited(arguments);}else{var dc=this.disableClientCaching;this.disableClientCaching=true;this.inherited(arguments);this.disableClientCaching=dc;}},setLayerDrawingOptions:function(_3f,_40){this.layerDrawingOptions=_3f;this._updateDynamicLayers();if(!_40){this.refresh(true);}},setDynamicLayerInfos:function(_41,_42){if(_41&&_41.length>0){this.dynamicLayerInfos=_41;this.visibleLayers=_b._getDefaultVisibleLayers(_41);}else{this.dynamicLayerInfos=this.layerDrawingOptions=null;}this._updateDynamicLayers();if(!_42){this.refresh(true);}},createDynamicLayerInfosFromLayerInfos:function(){var _43=[],_44;_3.forEach(this.layerInfos,function(_45,idx){_44=new _12(_45.toJson());_44.source=new _13({mapLayerId:_45.id});_43.push(_44);});return _43;},_onDynamicLayersChange:function(){},_updateDynamicLayers:function(){if((this.dynamicLayerInfos&&this.dynamicLayerInfos.length>0)||(this.layerDrawingOptions&&this.layerDrawingOptions.length>0)){if(!this.dynamicLayerInfos||this.dynamicLayerInfos.length===0){this.dynamicLayerInfos=this.createDynamicLayerInfosFromLayerInfos();}var _46,_47=this.dynamicLayerInfos,_48=[],_49=this._map&&_c.getScale(this._map),_4a=this.visibleLayers,_4b=_49?_b._getLayersForScale(_49,_47):_4a;_3.forEach(_47,function(_4c){if(!_4c.subLayerIds){var _4d,_4e=_4c.id;if(_3.indexOf(_4a,_4e)!==-1&&_3.indexOf(_4b,_4e)!==-1){_4d={id:_4e};_4d.source=_4c.source&&_4c.source.toJson();var _4f;if(this.layerDefinitions&&this.layerDefinitions[_4e]){_4f=this.layerDefinitions[_4e];}if(_4f){_4d.definitionExpression=_4f;}var _50;if(this.layerDrawingOptions&&this.layerDrawingOptions[_4e]){_50=this.layerDrawingOptions[_4e];}if(_50){_4d.drawingInfo=_50.toJson();}var _51;if(this.layerTimeOptions&&this.layerTimeOptions[_4e]){_51=this.layerTimeOptions[_4e];}if(_51){_4d.layerTimeOptions=_51.toJson();}_4d.minScale=_4c.minScale||0;_4d.maxScale=_4c.maxScale||0;_48.push(_4d);}}},this);_46=_4.toJson(_48);if(!this._params.dynamicLayers||(this._params.dynamicLayers.length!==_46.length||this._params.dynamicLayers!==_46)){this._params.dynamicLayers=_46;this._onDynamicLayersChange(this._params.dynamicLayers);}}else{if(this._params.dynamicLayers){this._params.dynamicLayers=null;this._onDynamicLayersChange(null);}else{this._params.dynamicLayers=null;}}},_onExtentChangeHandler:function(_52,_53,_54){if(_54){this._updateDynamicLayers();}this.inherited(arguments);},_setMap:function(map,_55,_56){this._map=map;this._updateDynamicLayers();return this.inherited(arguments);},onGDBVersionChange:function(){},setGDBVersion:function(_57,_58){this.gdbVersion=_57;this._params.gdbVersion=_57;this.onGDBVersionChange();if(!_58){this.refresh(true);}},exportMapImage:function(_59,_5a){var m=_8.defaults.map,p=_2.mixin({size:m.width+","+m.height},this._params,_59?_59.toJson(this.normalization):{},{f:"json"});delete p._ts;if(p.layerDefs){var _5b=p.layerDefs;delete p.layerDefs;_2.mixin(p,{layerDefs:_5b});}this._exportMapImage(this._url.path+"/export",p,_5a);}});if(_5("extend-esri")){_2.setObject("layers.ArcGISDynamicMapServiceLayer",_14,_7);}return _14;});