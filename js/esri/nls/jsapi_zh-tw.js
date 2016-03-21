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
define("esri/nls/jsapi_zh-tw",{"dijit/form/nls/validate":{"rangeMessage":"此值超出範圍。","invalidMessage":"輸入的值無效。","missingMessage":"必須提供此值。"},"esri/nls/jsapi":{"identity":{"noAuthService":"无法访问身份验证服务。","lblCancel":"取消","lblUser":"用户名:","title":"登录","forbidden":"用户名和密码有效，但您没有对此资源的访问权限。","errorMsg":"无效的用户名或密码。请重试。","lblItem":"项目","lblOk":"确定","info":"请登录以访问 ${server} ${resource} 上的项目","lblSigning":"正在登录...","invalidUser":"您输入的用户名或密码不正确。","lblPwd":"密码:"},"map":{"deprecateShiftDblClickZoom":"Map.(enable/disable)ShiftDoubleClickZoom 已被弃用。Shift-Double-Click 缩放行为不受支持。","deprecateReorderLayerString":"Map.reorderLayer(/*String*/ id, /*Number*/ index) 已被弃用。请使用 Map.reorderLayer(/*Layer*/ layer, /*Number*/ index)。"},"virtualearth":{"vetiledlayer":{"bingMapsKeyNotSpecified":"必须提供 BingMapsKey。"},"vegeocode":{"bingMapsKeyNotSpecified":"必须提供 BingMapsKey。","requestQueued":"未检索到服务器令牌。要在检索到服务器令牌之后执行查询请求。"}},"bufferTool":{"sizeHelp":"要创建多个缓冲区，输入以空格分隔的距离(2 3 5)。","typeLabel":"缓冲类型","disks":"圆盘","round":"圆形","right":"右","distanceMsg":"只允许数值","itemDescription":"运行“要素缓冲区”解决方案而生成的要素服务。对输入的来自 ${layername} 的要素进行的缓冲为 ${distance_field} ${units}","resultLabel":"结果图层名称","around":"环绕","sideType":"侧边位置","flat":"平面","multipleDistance":"多距离缓冲区应为","outputLayerName":"${layername} 的缓冲区","rings":"环形","sizeLabel":"输入缓冲距离","itemTags":"分析结果、缓冲区、${layername}","areaofInputPoly":"缓冲面中输入面的区域","left":"左","bufferDefine":"从 <b>${layername}</b> 创建缓冲区","distance":"距离","itemSnippet":"从缓冲生成的分析要素服务","endType":"终点类型","field":"字段","optionsLabel":"选项","include":"包含","exclude":"排除","dissolve":"融合","overlap":"叠置"},"widgets":{"attributeInspector":{"NLS_title":"编辑属性","NLS_validationFlt":"值必须是浮点型。","NLS_noFeaturesSelected":"未选择任何要素","NLS_validationInt":"值必须是整型。","NLS_next":"下一页","NLS_errorInvalid":"无效","NLS_previous":"上一页","NLS_first":"第一页","NLS_deleteFeature":"删除","NLS_of":"/","NLS_last":"最后一页"},"legend":{"NLS_polygons":"面","NLS_lines":"线","NLS_noLegend":"无图例","NLS_points":"点","NLS_creatingLegend":"创建图例"},"directions":{"getDirections":"导航","findOptimalOrder":"优化顺序","showOptions":"显示选项","reverseDirections":"反转方向","addDestination":"添加目的地","returnToStart":"返回起点","error":{"maximumStops":"已达到车站最大数目。","notEnoughStops":"输入起点和目的地。","invalidStopType":"车站类型无效","locator":"无法找到位置。","noAddresses":"未返回任何地址。","unknownStop":"无法找到位置“<name>”。","noStops":"未提供要添加的车站。","routeTask":"无法确定到这些地点的路线。","locatorUndefined":"无法反转地理编码器。定位符 URL 未定义。"},"hideOptions":"隐藏选项","units":{"KILOMETERS":{"name":"千米","abbr":"千米"},"MILES":{"name":"英里","abbr":"英里"},"METERS":{"name":"米","abbr":"米"},"NAUTICAL_MILES":{"name":"海里","abbr":"海里"}},"useTraffic":"使用流量","time":{"minute":"分钟","minutes":"分钟","hour":"小时","hours":"小时"},"printNotes":"在此处输入注释","viewFullRoute":"缩放至完整路线","printDisclaimer":"提供的路线仅供规划使用，受 <a href='http://www.esri.com/legal/software-license' target='_blank'>Esri 的使用条款</a>的限制。可能存在动态路况，导致您的路线与实际路线有所偏差，您必须将实际交通标志和法律限制考虑在内。您将自行承担所有的使用风险。","print":"打印"},"timeSlider":{"NLS_previous":"上一页","NLS_play":"播放/暂停","NLS_next":"下一页","NLS_invalidTimeExtent":"时间范围未指定或格式不正确。","NLS_first":"第一页"},"templatePicker":{"loading":"正在加载..","creationDisabled":"已针对所有图层禁用要素创建。"},"editor":{"tools":{"NLS_pointLbl":"点","NLS_reshapeLbl":"整形","NLS_arrowLeftLbl":"左箭头","NLS_triangleLbl":"三角形","NLS_autoCompleteLbl":"自动完成","NLS_arrowDownLbl":"下箭头","NLS_selectionRemoveLbl":"从选择内容中移除","NLS_unionLbl":"联合","NLS_freehandPolylineLbl":"手绘折线","NLS_rectangleLbl":"矩形","NLS_ellipseLbl":"椭圆","NLS_attributesLbl":"属性","NLS_arrowUpLbl":"上箭头","NLS_arrowRightLbl":"右箭头","NLS_undoLbl":"撤消","NLS_arrowLbl":"箭头","NLS_cutLbl":"剪切","NLS_polylineLbl":"折线","NLS_selectionClearLbl":"清除选择内容","NLS_polygonLbl":"面","NLS_selectionUnionLbl":"联合","NLS_freehandPolygonLbl":"手绘面","NLS_deleteLbl":"删除","NLS_extentLbl":"范围","NLS_selectionNewLbl":"新建选择内容","NLS_circleLbl":"圆形","NLS_redoLbl":"恢复","NLS_selectionAddLbl":"添加到选择内容"}},"mosaicRule":{"queryOperatorLabel":"运算符:","refreshLockRasterIdsLabel":"刷新","recognizedMosaicMethodsList":"无、按属性、中心、像底点、锁定栅格、西北、接缝线","selectAllLabel":"选择全部","lockRasterRequestErrorMsg":"搜索出错...","lockRasterRequestDoneMsg":"已完成...","lockRasterRequestNoRasterMsg":"未找到栅格...","mosaicOperatorLabel":"镶嵌运算符:","mosaicMethodLabel":"镶嵌方法:","lockRasterIdLabel":"锁定栅格 Id:","orderValueLabel":"顺序值:","queryFieldLabel":"字段:","orderFieldNotFound":"不可用","ascendingLabel":"升序:","lockRasterRequestMsg":"正在搜索...","queryLabel":"查询:","orderFieldLabel":"顺序字段:","queryValueLabel":"值:"},"attachmentEditor":{"NLS_error":"发生错误。","NLS_attachments":"附件:","NLS_none":"无","NLS_add":"添加","NLS_fileNotSupported":"此文件类型不受支持。"},"overviewMap":{"NLS_invalidSR":"指定图层的空间参考与主地图不兼容","NLS_invalidType":"不支持的图层类型。有效类型为 'TiledMapServiceLayer' 和 'DynamicMapServiceLayer'","NLS_noMap":"输入参数中未找到 'map'","NLS_hide":"隐藏鹰眼图","NLS_drag":"拖动以更改地图范围","NLS_maximize":"最大化","NLS_noLayer":"主地图不包含底图图层","NLS_restore":"恢复","NLS_show":"显示鹰眼图"},"measurement":{"NLS_length_kilometers":"千米","NLS_area_sq_miles":"平方英里","NLS_length_yards":"码","NLS_distance":"距离","NLS_area_acres":"英亩","NLS_resultLabel":"测量结果","NLS_length_miles":"英里","NLS_area_hectares":"公顷","NLS_deg_min_sec":"DMS","NLS_area":"面积","NLS_area_sq_meters":"平方米","NLS_latitude":"纬度","NLS_area_sq_kilometers":"平方千米","NLS_area_sq_feet":"平方英尺","NLS_longitude":"经度","NLS_location":"位置","NLS_decimal_degrees":"度","NLS_length_feet":"英尺","NLS_area_sq_yards":"平方码","NLS_length_meters":"米","NLS_map_coordinate":"地图坐标"},"bookmarks":{"NLS_add_bookmark":"添加书签","NLS_new_bookmark":"无标题","NLS_bookmark_edit":"编辑","NLS_bookmark_remove":"移除"},"renderingRule":{"rendererLabelTitle":"渲染器:","bandCombinationLabelTitle":"波段组合:","bandNamesRequestMsg":"正在请求波段信息..."},"Geocoder":{"main":{"geocoderMenuButtonTitle":"更改地理编码器","untitledGeocoder":"无标题地理编码器","clearButtonTitle":"清除搜索","searchButtonTitle":"搜索","geocoderMenuCloseTitle":"关闭菜单","geocoderMenuHeader":"选择地理编码器"},"esriGeocoderName":"Esri 世界地理编码器"},"popup":{"NLS_attach":"附件","NLS_nextFeature":"下一个要素","NLS_moreInfo":"更多信息","NLS_searching":"正在搜索","NLS_maximize":"最大化","NLS_noAttach":"未找到任何附件","NLS_noInfo":"无任何可用信息","NLS_pagingInfo":"(${index}/${total})","NLS_restore":"恢复","NLS_prevFeature":"上一个要素","NLS_nextMedia":"下一个媒体文件","NLS_close":"关闭","NLS_zoomTo":"缩放至","NLS_prevMedia":"上一个媒体文件"},"HistogramTimeSlider":{"NLS_play":"播放/暂停","NLS_fullRange":"完整范围","NLS_range":"范围","NLS_invalidTimeExtent":"未指定时间范围，或时间格式不正确。","NLS_overview":"概览","NLS_cumulative":"累积"},"print":{"NLS_printing":"打印","NLS_printout":"打印输出","NLS_print":"打印"}},"toolbars":{"draw":{"addShape":"单击以添加几何形状，或按下鼠标以开始绘制并释放以完成绘制","finish":"双击完成操作","invalidType":"不支持的几何类型","resume":"单击以继续绘制","addPoint":"单击以添加点","freehand":"按下鼠标以开始绘制并释放以完成绘制","complete":"双击完成操作","start":"单击以开始绘制","addMultipoint":"单击以开始添加点","convertAntiClockwisePolygon":"以逆时针方向绘制的面将反转为顺时针方向。"},"edit":{"invalidType":"无法激活工具。检查该工具对于指定的几何类型是否有效。","deleteLabel":"删除"}},"tasks":{"gp":{"gpDataTypeNotHandled":"GP 数据类型未处理。"},"query":{"invalid":"无法执行查询。请检查参数。"},"na":{"route":{"routeNameNotSpecified":"车站要素集中至少一个车站未指定“路线名称”。"}}},"driveTimes":{"measureLabel":"测量：","toolDefine":"围绕 <b>${layername}</b> 创建区域","itemTags":"行驶时间，${layername}","itemSnippet":"从“创建行驶时间”生成的分析要素服务","measureHelp":"要为每个点输出多个区域，请键入用空格分隔的大小 (2 3.5 5)","itemDescription":"运行“创建行驶时间”解决方案而生成的要素服务","areaLabel":"基于不同点所创建的区域：","trafficLabel":"使用交通状况（可选）","resultLabel":"结果图层名称","outputLayerName":"从 ${layername} 驾车：---"},"analysisTools":{"aggregateTool":"聚合点","createDensitySurface":"创建密度表面","sumnearby":"汇总附近","attributeCalculator":"Field Calculator","createBuffers":"创建缓冲区","saveResultIn":"Save result in","extractData":"提取数据","dataEnrichment":"数据丰富","dissolveBoundaries":"融合边界","analyzePatterns":"分析模式","findClosestFacility":"查找最近路线","mergeLayers":"合并图层","summarizeWithin":"汇总区域范围","pubRoleMsg":"尚未为您的在线帐户分配发布者角色。","findLocations":"查找位置","findExistingLocations":"查找现有位置","bufferTool":"缓冲数据","emptyResultInfoMsg":"分析结果未返回任何要素。将不会创建任何图层。","invalidServiceName":"结果图层名称中包含一个或多个无效字符(<、>、#、%、:、\"、?、&、+、/ 或 \\)。","summarizeData":"汇总数据","useMapExtent":"Use current map extent","generateFleetPlan":"生成车队路线计划","servNameExists":"You already have a result with this name. Please rename your result and resubmit your analysis.","findHotSpots":"查找热点","performAnalysis":"执行分析","createInterpolatedSurface":"创建表面","driveTimes":"Create Drive Time Areas","overlayLayers":"覆盖图层","outputLayerLabel":"结果图层名称","bufferToolName":"创建缓冲区","correlationReporter":"探索相关性","geoenrichLayer":"丰富要素","findRoute":"查找路线","findNewLocations":"派生新位置","useProximity":"使用临近位置","manageData":"管理数据","orgUsrMsg":"您必须是组织的成员才能运行此服务。","aggregateToolName":"聚合点","outputFileName":"输出文件名","invalidServiceNameLength":"The result layer name length should be less than 128 charcaters.","requiredValue":"This value is required."},"common":{"feet":"英尺","nautMiles":"海里","apply":"应用","errorTitle":"错误","statistic":"统计信息","titleLabel":"标题：","fourLabel":"4.","newLabel":"新建","close":"关闭","kilometers":"千米","previous":"上一页","share":"共享","runAnalysis":"运行分析","yards":"码","yesLabel":"是","oneLabel":"1.","ok":"确定","maximum":"最大值","miles":"英里","attribute":"属性","help":"帮助","comingSoonLabel":"即将推出！","deleteLabel":"删除","outputnameMissingMsg":"需要提供输出名称","minimum":"最小值","remove":"移除","inches":"英寸","upload":"上传","open":"打开","submit":"提交","save":"保存","edit":"编辑","average":"平均值","selectAttribute":"选择属性","sum":"合计","standardDev":"标准差","threeLabel":"3.","done":"完成","twoLabel":"2.","create":"创建","warning":"警告","cancel":"取消","noLabel":"否","meters":"米","arcgis":"ArcGIS","pointsUnit":"磅","next":"下一页","degree":"度"},"extractDataTool":{"selectFtrs":"选择要素","outputfileName":"OutputName.zip","itemTags":"分析, 提取数据","itemSnippet":"从“提取数据”生成的分析文件项","clipFtrs":"裁剪要素","sameAsLayer":"与 ${layername} 一致","itemDescription":"运行“提取数据”解决方案而生成的文件。","lyrpkg":"图层包","outputDataFormat":"输出数据格式","sameAsDisplay":"与显示一致","layersToExtract":"要提取的图层","studyArea":"研究区域","filegdb":"文件地理数据库","shpFile":"Shape 文件"},"aggregatePointsTool":{"removeAttrStats":"删除属性统计信息","itemTags":"分析结果、聚合点、${pointlayername}、${polygonlayername}","groupByLabel":"选择要作为分组依据的属性（可选）","itemSnippet":"从聚合点生成的分析要素服务","chooseAreaLabel":"选择区域","aggregateDefine":"对 <b>${layername}</b> 计数，区域范围是","itemDescription":"通过运行聚合点解决方案生成的要素服务。${pointlayername} 中的点聚合到 ${polygonlayername}","keepPolygonLabel":"保留没有点的面","outputLayerName":"${pointlayername} 到 ${polygonlayername} 的聚合","addStatsLabel":"添加统计数据(可选)"},"io":{"proxyNotSet":"esri.config.defaults.io.proxyUrl 尚未进行设置。"},"layers":{"FeatureLayer":{"createUserHours":"由 ${userId} 在 ${hours} 小时前创建","editUserMinutes":"由 ${userId} 在 ${minutes} 分钟前编辑","editHour":"在一小时前编辑","editMinute":"在一分钟前编辑","editUserMinute":"由 ${userId} 在一分钟前编辑","editSeconds":"在几秒钟前编辑","createUserFull":"由 ${userId} 在 ${formattedDate} 的 ${formattedTime} 创建","editWeekDay":"在 ${weekDay} 的 ${formattedTime} 编辑","createUserMinutes":"由 ${userId} 在 ${minutes} 分钟前创建","createUserHour":"由 ${userId} 在一小时前创建","editUserSeconds":"由 ${userId} 在几秒钟前编辑","editUserWeekDay":"由 ${userId} 在 ${weekDay} 的 ${formattedTime} 编辑","editUserFull":"由 ${userId} 在 ${formattedDate} 的 ${formattedTime} 编辑","createFull":"在 ${formattedDate} 的 ${formattedTime} 创建","editUser":"由 ${userId} 编辑","noOIDField":"objectIdField 未设置 [url: ${url}]","editUserHour":"由 ${userId} 在一小时前编辑","createHour":"在一小时前创建","updateError":"更新图层时出错","createUserWeekDay":"由 ${userId} 在 ${weekDay} 的 ${formattedTime} 创建","invalidParams":"查询中包含一个或多个不受支持的参数","editHours":"在 ${hours} 小时前编辑","noGeometryField":"无法在图层 'fields' 信息中找到 'esriFieldTypeGeometry' 类型的字段。如果当前使用的是一个地图服务图层，要素将不包含几何 [url: ${url}]","createUserMinute":"由 ${userId} 在一分钟前创建","createUser":"由 ${userId} 创建","createMinute":"在一分钟前创建","createMinutes":"在 ${minutes} 分钟前创建","fieldNotFound":"无法在图层 'fields' 信息中找到“${field}'字段 [url: ${url}]","createHours":"在 ${hours} 小时前创建","editUserHours":"由 ${userId} 在 ${hours} 小时前编辑","editMinutes":"在 ${minutes} 分钟前编辑","createSeconds":"在几秒钟前创建","createUserSeconds":"由 ${userId} 在几秒钟前创建","createWeekDay":"在 ${weekDay} 的 ${formattedTime} 创建","editFull":"在 ${formattedDate} 的 ${formattedTime} 编辑"},"dynamic":{"imageError":"无法加载影像"},"tiled":{"tileError":"无法加载切片"},"imageParameters":{"deprecateBBox":"属性 'bbox' 已被弃用。请使用属性 'extent'。"},"agstiled":{"deprecateRoundrobin":"构造器选项 'roundrobin' 已被弃用。请使用选项 'tileServers'。"},"graphics":{"drawingError":"无法绘制图形 "}},"findHotSpotsTool":{"hotspotsPointDefine":"分析 <b>${layername}</b>，以便查找具有统计显著性的热点和冷点 ","itemTags":"分析结果、热点、${layername}、${fieldname}","itemSnippet":"从查找热点生成的分析要素服务","defineBoundingLabel":"确定哪里可能发生事故","blayerName":"绘制的边界","Options":"选项","hotspots":"热点","defaultAggregationOption":"选择聚合区域","itemDescription":"从运行的查找热点解决方案生成的要素服务。","chooseAttributeLabel":"选择分析字段","provideAggLabel":"提供聚合区域以合计事故","hotspotsPolyDefine":"分析 <b>${layername}</b>，以便查找具有统计显著性的热点和冷点 ","defaultBoundingOption":"选择边界区域","fieldLabel":"有或无分析字段","noAnalysisField":"无分析字段","outputLayerName":"热点 ${layername}"},"geometry":{"deprecateToMapPoint":"esri.geometry.toMapPoint 已被弃用。请使用 esri.geometry.toMapGeometry。","deprecateToScreenPoint":"esri.geometry.toScreenPoint 已被弃用。请使用 esri.geometry.toScreenGeometry。"},"overlayLayersTool":{"itemTags":"分析结果、叠加图层、${layername}","unionOutputLyrName":"${layername} 和 ${overlayname} 的并集","itemSnippet":"从叠加图层生成的分析要素服务","eraseOutputLyrName":"用 ${overlayname} 擦除 ${layername}","chooseOverlayMethod":"选择叠加方法","itemDescription":"运行“图层叠加”解决方案而生成的要素服务。","union":"联合","overlayDefine":"使用以下图层对 <b>${layername}</b> 进行叠加","intersectOutputLyrName":"${layername} 和 ${overlayname} 的交集","overlayLayerPolyMsg":"叠加图层应为面要素图层以便进行联合叠加","notSupportedEraseOverlayMsg":"此叠加图层不支持擦除叠加。默认为相交叠加。","intersect":"相交","erase":"擦除","chooseOverlayLayer":"选择叠加图层"},"arcgis":{"utils":{"geometryServiceError":"提供一个几何服务来打开 Web 地图。","baseLayerError":"无法加载底图图层"}}},"dojo/cldr/nls/gregorian":{"days-standAlone-short":["周日","周一","周二","周三","周四","周五","周六"],"months-format-narrow":["1","2","3","4","5","6","7","8","9","10","11","12"],"quarters-standAlone-narrow":["1","2","3","4"],"field-weekday":"週天","dateFormatItem-yQQQ":"y年QQQ","dateFormatItem-yMEd":"y/M/d（E）","dateFormatItem-MMMEd":"M月d日E","eraNarrow":["西元前","西元"],"dayPeriods-format-wide-earlyMorning":"清晨","dayPeriods-format-wide-morning":"上午","days-format-short":["周日","周一","周二","周三","周四","周五","周六"],"dateTimeFormats-appendItem-Day-Of-Week":"{0} {1}","dateFormat-long":"y年M月d日","months-format-wide":["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"dateTimeFormat-medium":"{1} {0}","dayPeriods-format-wide-pm":"下午","dateFormat-full":"y年M月d日EEEE","dateFormatItem-Md":"M/d","dayPeriods-format-narrow-midDay":"中午","dayPeriods-format-abbr-am":"AM","dateTimeFormats-appendItem-Second":"{0} ({2}: {1})","dateFormatItem-yMd":"y/M/d","dayPeriods-format-wide-noon":"中午","field-era":"年代","dateFormatItem-yM":"y/M","months-standAlone-wide":["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"timeFormat-short":"ah:mm","quarters-format-wide":["第1季","第2季","第3季","第4季"],"timeFormat-long":"zah時mm分ss秒","field-year":"年","dateFormatItem-yMMM":"y年M月","dateFormatItem-yQ":"y年QQQ","dateTimeFormats-appendItem-Era":"{0} {1}","field-hour":"小時","dateFormatItem-yyyyMMMM":"y年M月","dateFormatItem-MMdd":"MM/dd","months-format-abbr":["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"dateFormatItem-yyQ":"yy年第Q季度","timeFormat-full":"zzzzah時mm分ss秒","dateTimeFormats-appendItem-Week":"{0} ({2}: {1})","field-day-relative+0":"今天","dayPeriods-format-narrow-morning":"上午","field-day-relative+1":"明天","field-day-relative+2":"後天","dateFormatItem-H":"H時","months-standAlone-abbr":["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"quarters-format-abbr":["第1季","第2季","第3季","第4季"],"quarters-standAlone-wide":["第1季","第2季","第3季","第4季"],"dateFormatItem-M":"M月","days-standAlone-wide":["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],"dateFormatItem-yyMMM":"yy年M月","timeFormat-medium":"ah:mm:ss","dateFormatItem-Hm":"H:mm","quarters-standAlone-abbr":["第1季","第2季","第3季","第4季"],"eraAbbr":["西元前","西元"],"field-minute":"分鐘","field-dayperiod":"上午/下午","days-standAlone-abbr":["周日","周一","周二","周三","周四","周五","周六"],"dayPeriods-format-wide-night":"晚上","dateFormatItem-d":"d日","dateFormatItem-ms":"mm:ss","quarters-format-narrow":["1","2","3","4"],"field-day-relative+-1":"昨天","dateFormatItem-h":"ah時","dateTimeFormat-long":"{1}{0}","dayPeriods-format-narrow-am":"上午","field-day-relative+-2":"前天","dateFormatItem-MMMd":"M月d日","dateFormatItem-MEd":"M/d（E）","dayPeriods-format-wide-midDay":"中午","dateTimeFormat-full":"{1}{0}","field-day":"日","days-format-wide":["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],"field-zone":"時區","dateTimeFormats-appendItem-Day":"{0} ({2}: {1})","dateFormatItem-y":"y年","months-standAlone-narrow":["1","2","3","4","5","6","7","8","9","10","11","12"],"field-year-relative+-1":"去年","dayPeriods-format-narrow-night":"晚上","field-month-relative+-1":"上個月","dateFormatItem-yyMM":"yy-MM","dateFormatItem-hm":"ah:mm","dateTimeFormats-appendItem-Year":"{0} {1}","dateTimeFormats-appendItem-Hour":"{0} ({2}: {1})","dayPeriods-format-narrow-weeHours":"凌晨","dayPeriods-format-abbr-pm":"PM","days-format-abbr":["周日","周一","周二","周三","周四","周五","周六"],"dateFormatItem-yMMMd":"y年M月d日","eraNames":["西元前","西元"],"days-format-narrow":["日","一","二","三","四","五","六"],"dayPeriods-format-narrow-earlyMorning":"清晨","days-standAlone-narrow":["日","一","二","三","四","五","六"],"dateFormatItem-MMM":"LLL","field-month":"月","dateTimeFormats-appendItem-Quarter":"{0} ({2}: {1})","dayPeriods-format-wide-am":"上午","dateTimeFormats-appendItem-Month":"{0} ({2}: {1})","dateTimeFormats-appendItem-Minute":"{0} ({2}: {1})","dateFormatItem-MMMMdd":"M月dd日","dayPeriods-format-wide-weeHours":"凌晨","dateFormat-short":"y/M/d","dayPeriods-format-wide-afternoon":"下午","dayPeriods-format-narrow-afternoon":"下午","dayPeriods-format-narrow-noon":"中午","field-second":"秒","dateFormatItem-yMMMEd":"y年M月d日E","field-month-relative+0":"本月","field-month-relative+1":"下個月","dateFormatItem-Ed":"d日（E）","dateTimeFormats-appendItem-Timezone":"{0} {1}","field-week":"週","dateFormat-medium":"yyyy/M/d","field-year-relative+0":"今年","field-week-relative+-1":"上週","dateFormatItem-yyyyM":"y年M月","field-year-relative+1":"明年","dayPeriods-format-narrow-pm":"下午","dateTimeFormat-short":"{1} {0}","dateFormatItem-Hms":"H:mm:ss","dateFormatItem-hms":"ah:mm:ss","dateFormatItem-yyyy":"y年","field-week-relative+0":"本週","field-week-relative+1":"下週"},"dijit/nls/loading":{"loadingState":"載入中...","errorState":"抱歉，發生錯誤"},"dojo/cldr/nls/number":{"scientificFormat":"#E0","currencySpacing-afterCurrency-currencyMatch":"[:letter:]","infinity":"∞","list":";","percentSign":"%","minusSign":"-","currencySpacing-beforeCurrency-surroundingMatch":"[:digit:]","decimalFormat-short":"000T","currencySpacing-afterCurrency-insertBetween":" ","nan":"非數值","plusSign":"+","currencySpacing-afterCurrency-surroundingMatch":"[:digit:]","currencyFormat":"¤#,##0.00","currencySpacing-beforeCurrency-currencyMatch":"[:letter:]","perMille":"‰","group":",","percentFormat":"#,##0%","decimalFormat-long":"000兆","decimalFormat":"#,##0.###","decimal":".","currencySpacing-beforeCurrency-insertBetween":" ","exponential":"E"},"dijit/nls/common":{"buttonOk":"確定","buttonCancel":"取消","buttonSave":"儲存","itemClose":"關閉"}});