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
define("esri/TouchEvents",["dojo/_base/declare","dojo/_base/html","dojo/_base/lang","dojo/_base/sniff","dojo/dom","esri/kernel","esri/Evented","esri/geometry/Point","esri/geometry/ScreenPoint"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9){var _a=_1([_7],{declaredClass:"esri.TouchEvents",tapRadius:8,doubleTapRadius:10,tapStartTolerance:50,doubleTapDuration:300,map:null,constructor:function(_b,_c){this.node=_b;_3.mixin(this,_c);_2.setSelectable(_b,false);this._touchStart=_3.hitch(this,this._touchStart);this._touchMove=_3.hitch(this,this._touchMove);this._touchEnd=_3.hitch(this,this._touchEnd);this._touchCancel=_3.hitch(this,this._touchCancel);_b.addEventListener("touchstart",this._touchStart,false);_b.addEventListener("touchmove",this._touchMove,false);_b.addEventListener("touchend",this._touchEnd,false);_b.addEventListener("touchcancel",this._touchCancel,false);if(this.map){this._mouseOver=_3.hitch(this,this._mouseOver);this._mouseOut=_3.hitch(this,this._mouseOut);this._mouseDown=_3.hitch(this,this._mouseDown);this._mouseUp=_3.hitch(this,this._mouseUp);this._mouseClick=_3.hitch(this,this._mouseClick);_b.addEventListener("mouseover",this._mouseOver,false);_b.addEventListener("mouseout",this._mouseOut,false);_b.addEventListener("mousedown",this._mouseDown,false);_b.addEventListener("mouseup",this._mouseUp,false);_b.addEventListener("click",this._mouseClick,false);}this._numTouches=0;this._nodeTouches=[];this._touches={};this._touchIds=[];this._taps=[];this._immediate=false;},_touchStart:function(_d){var _e=this._touches,i,_f=_d.changedTouches.length,_10,_11,_12,_13,ts=(new Date()).getTime();if(_4("android")&&_4("safari")&&_d.targetTouches.length===1&&_d.touches.length===_d.targetTouches.length&&_d.targetTouches.length===_d.changedTouches.length&&_d.changedTouches[0].identifier===0&&_e[_d.changedTouches[0].identifier]){return;}this._addTouch(_d);for(i=0;i<_f;i++){_10=_d.changedTouches[i];_11=(_e[_10.identifier]={});_11.startX=_10.pageX;_11.startY=_10.pageY;_11.startTS=ts;if(this._touchIds.indexOf(_10.identifier)===-1){this._touchIds.push(_10.identifier);}}if(this._swipeActive){_12=this._nodeTouches[0];}if(this._pinchActive){_13=this._nodeTouches[1];}if(this._numTouches===1){if(this._swipeActive){this._swipeActive=false;this._fire("onSwipeEnd",this._processTouchEvent(_d,_12));}else{if(this._pinchActive){this._pinchActive=false;this._fire("onPinchEnd",this._processTouchEvent(_d,[_12,_13]));}}}else{if(this._numTouches===2){if(this._swipeActive){if(_12){_11=_e[this._touchIds[0]];_11.startX=_12.pageX;_11.startY=_12.pageY;_11.moved=false;}this._swipeActive=false;this._fire("onSwipeEnd",this._processTouchEvent(_d,_12));}}else{if(this._swipeActive){this._swipeActive=false;this._fire("onSwipeEnd",this._processTouchEvent(_d,_12));}else{if(this._pinchActive){this._pinchActive=false;this._fire("onPinchEnd",this._processTouchEvent(_d,[_12,_13]));}}}}},_touchMove:function(_14){_14.preventDefault();this._updateTouch(_14);var _15=this._touches,i,len=_14.changedTouches.length,_16,_17,dx,dy,_18;if(_4("android")&&_4("safari")&&_14.targetTouches.length===1&&_14.touches.length===_14.targetTouches.length&&_14.targetTouches.length===_14.changedTouches.length&&_14.changedTouches[0].identifier===0&&_15[_14.changedTouches[0].identifier]&&this._touchIds.length>1){return;}for(i=0;i<len;i++){_16=_14.changedTouches[i];_17=_15[_16.identifier];if(!_17){continue;}dx=Math.abs(_16.pageX-_17.startX);dy=Math.abs(_16.pageY-_17.startY);if(!_17.moved&&((dx>=this.tapRadius)||(dy>=this.tapRadius))){_17.moved=_17.absMoved=true;}_18=_18?_18:_17.moved;}if(this._numTouches===1){var _19=_14.changedTouches[0];if(!this._swipeActive){if(_18){this._swipeActive=true;this._fire("onSwipeStart",this._processTouchEvent(_14,_19));}}else{this._fire("onSwipeMove",this._processTouchEvent(_14,_19));}}else{if(this._numTouches===2){var _1a=this._nodeTouches[0],_1b=this._nodeTouches[1];if(!this._pinchActive){if(_18){var _1c=_15[_1a.identifier],_1d=_15[_1b.identifier],_1e=Math.abs(_1c.startX-_1d.startX),_1f=Math.abs(_1c.startY-_1d.startY),_20=Math.sqrt((_1e*_1e)+(_1f*_1f)),_21=Math.abs(_1a.pageX-_1b.pageX),_22=Math.abs(_1a.pageY-_1b.pageY),_23=Math.sqrt((_21*_21)+(_22*_22));if(Math.abs(_23-_20)>=(2*this.tapRadius)){this._pinchActive=true;this._fire("onPinchStart",this._processTouchEvent(_14,[_1a,_1b]));}}}else{this._fire("onPinchMove",this._processTouchEvent(_14,[_1a,_1b]));}}}},_touchEnd:function(_24){this._removeTouch(_24);var _25=this._touches,_26=_24.changedTouches,i,len=_26.length,_27,_28,ts=(new Date()).getTime(),ids=this._touchIds;for(i=0;i<len;i++){_28=_25[_26[i].identifier];if(!_28){continue;}if(_28.absMoved){_27=true;}_28.pageX=_26[i].pageX;_28.pageY=_26[i].pageY;_28.endTS=ts;}if(this._numTouches===0){this._touches={};this._touchIds=[];if(this._swipeActive){this._swipeActive=false;this._fire("onSwipeEnd",this._processTouchEvent(_24,_26[0]));}else{if(this._pinchActive){this._pinchActive=false;this._fire("onPinchEnd",this._processTouchEvent(_24,_26));}else{if(!_27){var _29=Infinity,_2a=-Infinity,_2b=Infinity,_2c=-Infinity,_2d=this.tapStartTolerance,_2e=[],_2f=true;for(i=0;i<ids.length;i++){_28=_25[ids[i]];_2e.push(_28);if(_28.startTS<_29){_29=_28.startTS;}if(_28.startTS>_2a){_2a=_28.startTS;}if(_28.endTS<_2b){_2b=_28.endTS;}if(_28.endTS>_2c){_2c=_28.endTS;}delete _25[ids[i]];}if(_2e.length===1&&_26[0]){var dx=Math.abs(_26[0].pageX-_2e[0].startX),dy=Math.abs(_26[0].pageY-_2e[0].startY);if((dx>=this.tapRadius)||(dy>=this.tapRadius)){_2f=false;}}if(_2f&&Math.abs(_2a-_29)<=_2d&&Math.abs(_2c-_2b)<=_2d){this._basicTap(_24,_2e);}}}}}else{if(this._numTouches===1){if(this._pinchActive){var _30=this._nodeTouches[0];_28=_25[_30.identifier];_28.startX=_30.pageX;_28.startY=_30.pageY;_28.moved=false;this._pinchActive=false;this._fire("onPinchEnd",this._processTouchEvent(_24,[_26[0],_30]));}}}},_touchCancel:function(_31){if(this._numTouches){this._touchEnd(_31);}},_basicTap:function(_32,_33){var ts=(new Date()).getTime(),_34=this;_32=this._processTouchEvent(_32,_33);this._taps.push({touchInfos:_33,ts:ts,event:_32});if(this._taps.length>2){this._taps.shift();}this._fire("onBasicTap",_32);clearTimeout(this._tapTimer);if(this._immediate){this._analyzeTap(true);}else{var _35=(this._taps.length===2)?(this.doubleTapDuration/2):this.doubleTapDuration;this._tapTimer=setTimeout(function(){var _36=_34;_34=null;clearTimeout(_36._tapTimer);_36._analyzeTap();},_35);}},_analyzeTap:function(_37){var _38=this._taps,_39=_38[0],_3a=_38[1],_3b=_39.touchInfos,_3c=_3a&&_3a.touchInfos;if(!_38.length){return;}if(!_37){this._taps=[];}if(_39&&_3a){if(_3b.length===_3c.length){if((_3a.ts-_39.ts)<=this.doubleTapDuration){var _3d,dx,dy;if(_3b.length===1){dx=Math.abs(_3b[0].startX-_3c[0].startX);dy=Math.abs(_3b[0].startY-_3c[0].startY);_3d=(dx<=this.doubleTapRadius)&&(dy<=this.doubleTapRadius);}else{_3d=true;}if(_3d){this._processedDoubleTap(_38);}else{this._processedTap(_3a);}}else{this._processedTap(_3a);}}else{this._processedTap(_3a);}}else{this._processedTap(_39||_3a);}},_processedTap:function(tap){var _3e=tap.event;this._fire("onProcessedTap",_3e);if(tap.touchInfos.length===1){this._fire("onTap",this._fixEvent(_3e));}else{if(tap.touchInfos.length===2){this._fire("onTwoFingerTap",_3e);}}},_processedDoubleTap:function(_3f){var _40=(_3f[1].touchInfos.length===1),_41,_42;if(_40){_41=[this._fixEvent(_3f[0].event),this._fixEvent(_3f[1].event)];_41[1].relatedEvents=_41;}_42=[_3f[0].event,_3f[1].event];_42[1].relatedEvents=_42;this._fire("onProcessedDoubleTap",_42[1]);if(_40){this._fire("onDoubleTap",_41[1]);this._fire("onDblClick",_41[1]);}},_addTouch:function(_43){var i,_44=_43.changedTouches,_45=this._nodeTouches,j,_46,_47;this._numTouches+=_44.length;for(i=0;i<_44.length;i++){_46=_45.length;_47=false;for(j=0;j<_46;j++){_47=(_45[j].identifier===_44[i].identifier);if(_47){break;}}if(_47){this._numTouches--;}else{_45.push(_44[i]);}}for(i=_45.length-1;i>=0;i--){if(!_5.isDescendant(_45[i].target,document.body)){_45.splice(i,1);this._numTouches--;}}if(this._numTouches<0){this._numTouches=0;}},_removeTouch:function(_48){var i,_49=[],_4a=[],_4b=_48.changedTouches,_4c=this._nodeTouches;this._numTouches-=_4b.length;if(this._numTouches<0){this._numTouches=0;}for(i=0;i<_4b.length;i++){_49.push(_4b[i].identifier);}for(i=_4c.length-1;i>=0;i--){if(_49.indexOf(_4c[i].identifier)!==-1){_4a.push(_4c.splice(i,1)[0]);}}return _4a;},_updateTouch:function(_4d){var i,ids=[],idx,_4e=_4d.changedTouches,_4f=this._nodeTouches;for(i=0;i<_4e.length;i++){ids.push(_4e[i].identifier);}for(i=0;i<_4f.length;i++){idx=ids.indexOf(_4f[i].identifier);if(idx!==-1){_4f.splice(i,1,_4e[idx]);}}},_mouseOver:function(_50){this._fire("onMouseOver",this._processMouseEvent(_50));},_mouseOut:function(_51){this._fire("onMouseOut",this._processMouseEvent(_51));},_mouseDown:function(_52){this._fire("onMouseDown",this._processMouseEvent(_52));},_mouseUp:function(_53){this._fire("onMouseUp",this._processMouseEvent(_53));},_mouseClick:function(_54){this._fire("onClick",this._processMouseEvent(_54));},_fire:function(_55,evt){if(this[_55]){this[_55](evt);}if(this.map){if(this.map[_55]){this.map[_55](evt);}}},_fixEvent:function(_56){var _57={},i;for(i in _56){_57[i]=_56[i];}if(this.map){_57.screenPoint=_57.screenPoints[0];_57.mapPoint=_57.mapPoints[0];}return _57;},_processTouchEvent:function(evt,_58){var map=this.map,pos=map&&map.position,_59=0;if(pos&&_58){if(_3.isArray(_58)){var i,_5a;evt.screenPoints=[];evt.mapPoints=[];for(i=0;i<_58.length;i++){if(_58[i]){_5a=new _9(_58[i].pageX-pos.x,_58[i].pageY-pos.y);evt.screenPoints.push(_5a);evt.mapPoints.push(map.extent?map.toMap(_5a):new _8());}else{_59++;}}}else{evt.screenPoint=new _9(_58.pageX-pos.x,_58.pageY-pos.y);evt.mapPoint=map.extent?map.toMap(evt.screenPoint):new _8();}}evt.numPoints=_58?(_3.isArray(_58)?(_58.length-_59):1):0;return evt;},_processMouseEvent:function(evt){var map=this.map,pos=map&&map.position;if(pos){evt.screenPoint=new _9(evt.pageX-pos.x,evt.pageY-pos.y);evt.mapPoint=map.extent?map.toMap(evt.screenPoint):new _8();}return evt;},setImmediateTap:function(_5b){this._immediate=_5b;},destroy:function(){var _5c=this.node;_5c.removeEventListener("touchstart",this._touchStart,false);_5c.removeEventListener("touchmove",this._touchMove,false);_5c.removeEventListener("touchend",this._touchEnd,false);_5c.removeEventListener("touchcancel",this._touchCancel,false);if(this.map){_5c.removeEventListener("mouseover",this._mouseOver,false);_5c.removeEventListener("mouseout",this._mouseOut,false);_5c.removeEventListener("mousedown",this._mouseDown,false);_5c.removeEventListener("mouseup",this._mouseUp,false);_5c.removeEventListener("click",this._mouseClick,false);}_2.setSelectable(_5c,true);clearTimeout(this._tapTimer);this.node=this.map=this._numTouches=this._nodeTouches=this._touches=this._touchIds=this._taps=null;}});if(_4("extend-esri")){_6.TouchEvents=_a;}return _a;});