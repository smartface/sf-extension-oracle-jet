/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtGauge"],function(a,g,c,b,d){a.ab("oj.dvtBaseGauge",g.oj.dvtBaseComponent,{oL:function(){this._super();this.options._thresholdColors=[this.options._threshold1,this.options._threshold2,this.options._threshold3];this.options._threshold1=null;this.options._threshold2=null;this.options._threshold3=null},Qg:function(){this._super();this.option("rawValue",this.options.value,{_context:{yd:!0,kb:!0,readOnly:!0}})},
qk:function(){var a=this._super();a["oj-gauge-metric-label"]={path:"metricLabel/style",property:"CSS_TEXT_PROPERTIES"};a["oj-gauge-tick-label"]={path:"tickLabel/style",property:"CSS_TEXT_PROPERTIES"};a["oj-gauge-threshold1"]={path:"_threshold1",property:"color"};a["oj-gauge-threshold2"]={path:"_threshold2",property:"color"};a["oj-gauge-threshold3"]={path:"_threshold3",property:"color"};return a},Nl:function(){return["input","optionChange"]},Cj:function(){var a=this.options.translations,b=this._super();
b["DvtGaugeBundle.EMPTY_TEXT"]=a.labelNoData;b["DvtUtilBundle.GAUGE"]=a.componentName;return b},Pm:function(a){if("valueChange"===a.type){var b=a.newValue;a.complete?this.We("value",b):(this._trigger("input",null,{value:b}),this.We("rawValue",b))}else this._super(a)},_setOption:function(b,c,d){"rawValue"===b?a.C.error("'rawValue' is a read-only option and cannot be set"):("value"===b&&this.option("rawValue",c,{_context:{yd:!0,kb:!0,readOnly:!0}}),this._super(b,c,d))},Ll:function(a){var b=a.subId;
if("oj-dialgauge-tooltip"==b||"oj-ledgauge-tooltip"==b||"oj-ratinggauge-tooltip"==b||"oj-statusmetergauge-tooltip"==b)b="tooltip";"oj-ratinggauge-item"==b&&null!=a.index&&(b="item["+a.index+"]");return b}},!0);a.ab("oj.ojLedGauge",g.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{},vh:function(a,b,c){this._focusable({element:this.element,applyHighlight:!0});return d.LedGauge.newInstance(a,b,c)},Ei:function(a){var b={};"tooltip"==a&&(b.subId="oj-ledgauge-tooltip");return b},vg:function(){var a=this._super();
a.push("oj-ledgauge");return a},Ug:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title"));this._super()},getMetricLabel:function(){return this.Ia.getAutomation().getMetricLabel()}});a.ab("oj.ojRatingGauge",g.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{input:null,rawValue:void 0},vh:function(a,
b,c){this._focusable({element:this.element,applyHighlight:!0});return d.RatingGauge.newInstance(a,b,c)},Ei:function(a){var b={};"tooltip"==a?b.subId="oj-ratinggauge-tooltip":0==a.indexOf("item")&&(b.subId="oj-ratinggauge-item",b.index=this.Ol(a));return b},vg:function(){var a=this._super();a.push("oj-ratinggauge");return a},Ug:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):
this.element.data("title")&&(this.options.shortDesc=this.element.data("title"));this._super()},We:function(a,b){this._superApply(arguments);"value"==a&&this.We("changed",!0)}});a.ab("oj.ojDialGauge",g.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{input:null,rawValue:void 0},vh:function(a,b,c){this._focusable({element:this.element,applyHighlight:!0});return d.DialGauge.newInstance(a,b,c)},Ei:function(a){var b={};"tooltip"==a&&(b.subId="oj-dialgauge-tooltip");return b},vg:function(){var a=this._super();
a.push("oj-dialgauge");return a},Ug:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title"));this.aMa();this._super()},aMa:function(){var b=this.options.background;null==b&&(b="circleAlta",this.options.background="circleAlta");var c=this.options.indicator;null==c&&(c="needleAlta",this.options.indicator=
"needleAlta");if("string"===typeof b){var d=[{src:a.oa.ub("resources/internal-deps/dvt/gauge/alta-circle-200x200.png"),width:200,height:200},{src:a.oa.ub("resources/internal-deps/dvt/gauge/alta-circle-400x400.png"),width:400,height:400}];"rectangleAlta"===b?d=[{src:a.oa.ub("resources/internal-deps/dvt/gauge/alta-rectangle-200x200.png"),width:200,height:154},{src:a.oa.ub("resources/internal-deps/dvt/gauge/alta-rectangle-400x400.png"),width:400,height:309}]:"domeAlta"===b?d=[{src:a.oa.ub("resources/internal-deps/dvt/gauge/alta-dome-200x200.png"),
width:200,height:154},{src:a.oa.ub("resources/internal-deps/dvt/gauge/alta-dome-400x400.png"),width:400,height:309}]:"circleAntique"===b?d=[{src:a.oa.ub("resources/internal-deps/dvt/gauge/antique-circle-200x200.png"),width:200,height:200},{src:a.oa.ub("resources/internal-deps/dvt/gauge/antique-circle-400x400.png"),width:400,height:400}]:"rectangleAntique"===b?d=[{src:a.oa.ub("resources/internal-deps/dvt/gauge/antique-rectangle-200x200.png"),width:200,height:168},{src:a.oa.ub("resources/internal-deps/dvt/gauge/antique-rectangle-400x400.png"),
width:400,height:335}]:"domeAntique"===b?d=[{src:a.oa.ub("resources/internal-deps/dvt/gauge/antique-dome-200x200.png"),width:200,height:176},{src:a.oa.ub("resources/internal-deps/dvt/gauge/antique-dome-400x400.png"),width:400,height:352}]:"circleLight"===b?d=[{src:a.oa.ub("resources/internal-deps/dvt/gauge/light-circle-200x200.png"),width:200,height:200},{src:a.oa.ub("resources/internal-deps/dvt/gauge/light-circle-400x400.png"),width:400,height:400}]:"rectangleLight"===b?d=[{src:a.oa.ub("resources/internal-deps/dvt/gauge/light-rectangle-200x200.png"),
width:200,height:154},{src:a.oa.ub("resources/internal-deps/dvt/gauge/light-rectangle-400x400.png"),width:400,height:307}]:"domeLight"===b?d=[{src:a.oa.ub("resources/internal-deps/dvt/gauge/light-dome-200x200.png"),width:200,height:138},{src:a.oa.ub("resources/internal-deps/dvt/gauge/light-dome-400x400.png"),width:400,height:276}]:"circleDark"===b?d=[{src:a.oa.ub("resources/internal-deps/dvt/gauge/dark-circle-200x200.png"),width:200,height:200},{src:a.oa.ub("resources/internal-deps/dvt/gauge/dark-circle-400x400.png"),
width:400,height:400}]:"rectangleDark"===b?d=[{src:a.oa.ub("resources/internal-deps/dvt/gauge/dark-rectangle-200x200.png"),width:200,height:154},{src:a.oa.ub("resources/internal-deps/dvt/gauge/dark-rectangle-400x400.png"),width:400,height:307}]:"domeDark"===b&&(d=[{src:a.oa.ub("resources/internal-deps/dvt/gauge/dark-dome-200x200.png"),width:200,height:138},{src:a.oa.ub("resources/internal-deps/dvt/gauge/dark-dome-400x400.png"),width:400,height:276}]);this.options._backgroundImages=d}"string"===typeof c&&
(b=[{src:a.oa.ub("resources/internal-deps/dvt/gauge/alta-needle-1600x1600.png"),width:374,height:575}],"needleAntique"===c?b=[{src:a.oa.ub("resources/internal-deps/dvt/gauge/antique-needle-1600x1600.png"),width:81,height:734}]:"needleDark"===c?b=[{src:a.oa.ub("resources/internal-deps/dvt/gauge/dark-needle-1600x1600.png"),width:454,height:652}]:"needleLight"===c&&(b=[{src:a.oa.ub("resources/internal-deps/dvt/gauge/light-needle-1600x1600.png"),width:454,height:652}]),this.options._indicatorImages=b)},
getMetricLabel:function(){return this.Ia.getAutomation().getMetricLabel()}});a.ab("oj.ojStatusMeterGauge",g.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{input:null,rawValue:void 0},vh:function(a,b,c){this._focusable({element:this.element,applyHighlight:!0});return d.StatusMeterGauge.newInstance(a,b,c)},Ei:function(a){var b={};"tooltip"==a&&(b.subId="oj-statusmetergauge-tooltip");return b},vg:function(){var a=this._super();a.push("oj-statusmetergauge");return a},Rr:function(){this._super();var a=
this.options.center;a&&a._renderer&&(a.renderer=this.GE(a._renderer,"center"))},Ug:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title"));this._super()},getMetricLabel:function(){return this.Ia.getAutomation().getMetricLabel()}});a.U.qb("dvtBaseGauge","dvtBaseComponent",{properties:{translations:{properties:{componentName:{type:"string"}}}},
methods:{},extension:{nb:"dvtBaseGauge"}});a.U.qb("oj-led-gauge","dvtBaseGauge",{properties:{borderColor:{type:"string"},svgClassName:{type:"string"},color:{type:"string"},max:{type:"number"},metricLabel:{type:"object",properties:{converter:{type:"object"},rendered:{type:"string",enumValues:["on","off"]},scaling:{type:"string",enumValues:"auto none thousand million billion trillion quadrillion".split(" ")},style:{type:"string"},text:{type:"string",enumValues:["percent","number"]},textType:{type:"string"}}},
min:{type:"number"},rotation:{type:"number",enumValues:["0","90","180","270"]},size:{type:"number"},svgStyle:{type:"object"},thresholds:{type:"Array\x3cobject\x3e"},label:{type:"object",properties:{style:{type:"string"},text:{type:"string"}}},tooltip:{type:"object",properties:{renderer:{}}},type:{type:"string",enumValues:"arrow square circle rectangle diamond triangle human star".split(" ")},value:{type:"number",writeback:!0},visualEffects:{type:"string",enumValues:["none","auto"]}},methods:{getMetricLabel:{}},
extension:{nb:"ojLedGauge"}});a.U.register("oj-led-gauge",{metadata:a.U.getMetadata("oj-led-gauge")});a.U.qb("oj-rating-gauge","dvtBaseGauge",{properties:{changed:{type:"boolean",writeback:!0},changedState:{type:"object",properties:{borderColor:{type:"string"},svgClassName:{type:"string"},color:{type:"string"},shape:{type:"string",enumValues:"circle rectangle diamond triangle human star".split(" ")},source:{type:"string"},svgStyle:{type:"object"}}},hoverState:{type:"object",properties:{borderColor:{type:"string"},
svgClassName:{type:"string"},color:{type:"string"},shape:{type:"string",enumValues:"circle rectangle diamond triangle human star".split(" ")},source:{type:"string"},svgStyle:{type:"object"}}},max:{type:"number"},min:{type:"number"},orientation:{type:"string",orientation:["vertical","horizontal"]},preserveAspectRatio:{type:"string"},rawValue:{type:"number",readOnly:!0,writeback:!0},readOnly:{type:"boolean"},selectedState:{type:"object",properties:{borderColor:{type:"string"},svgClassName:{type:"string"},
color:{type:"string"},shape:{type:"string",enumValues:"circle rectangle diamond triangle human star".split(" ")},source:{type:"string"},svgStyle:{type:"object"}}},step:{type:"number",enumValues:["1",".5"]},thresholds:{type:"Array\x3cobject\x3e"},tooltip:{type:"object",properties:{renderer:{}}},unselectedState:{type:"object",properties:{borderColor:{type:"string"},svgClassName:{type:"string"},color:{type:"string"},shape:{type:"string",enumValues:"circle rectangle diamond triangle human star".split(" ")},
source:{type:"string"},svgStyle:{type:"object"}}},value:{type:"number",writeback:!0},visualEffects:{type:"string",enumValues:["none","auto"]}},methods:{},extension:{nb:"ojRatingGauge"}});a.U.register("oj-rating-gauge",{metadata:a.U.getMetadata("oj-rating-gauge")});a.U.qb("oj-status-meter-gauge","dvtBaseGauge",{properties:{angleExtent:{type:"number"},animationDuration:{type:"number"},animationOnDataChange:{type:"string",enumValues:["auto","none"]},animationOnDisplay:{type:"string",enumValues:["auto",
"none"]},borderColor:{type:"string"},borderRadius:{type:"string",enumValues:["auto"]},center:{type:"object",properties:{renderer:{}}},svgClassName:{type:"string"},color:{type:"string"},indicatorSize:{type:"number"},innerRadius:{type:"number"},max:{type:"number"},metricLabel:{type:"object",properties:{converter:{type:"object"},position:{type:"string",enumValues:"auto center insideIndicatorEdge outsideIndicatorEdge outsidePlotArea withTitle".split(" ")},rendered:{type:"string",enumValues:["auto","on",
"off"]},scaling:{type:"string",enumValues:"auto none thousand million billion trillion quadrillion".split(" ")},style:{type:"string"},text:{type:"string"},textType:{type:"string",enumValues:["percent","number"]}}},min:{type:"number"},orientation:{type:"string",enumValues:["circular","horizontal","vertical"]},plotArea:{type:"object",properties:{borderColor:{type:"string"},borderRadius:{type:"string",enumValues:["auto"]},svgClassName:{type:"string"},color:{type:"string"},rendered:{type:"string",enumValues:["auto",
"on","off"]},svgStyle:{type:"object"}}},rawValue:{type:"number",readOnly:!0,writeback:!0},readOnly:{type:"boolean"},referenceLines:{type:"Array\x3cobject\x3e"},startAngle:{type:"number"},step:{type:"number"},svgStyle:{type:"object"},thresholdDisplay:{type:"string",enumValues:["cuurentOnly","all","onIndicator"]},thresholds:{type:"Array\x3cobject\x3e"},label:{type:"object",properties:{position:{type:"string",enumValues:["auto","center","start"]},style:{type:"string"},text:{type:"string"}}},tooltip:{type:"object",
properties:{renderer:{}}},value:{type:"number",writeback:!0},visualEffects:{type:"string",enumValues:["none","auto"]}},methods:{getMetricLabel:{}},extension:{nb:"ojStatusMeterGauge"}});a.U.register("oj-status-meter-gauge",{metadata:a.U.getMetadata("oj-status-meter-gauge")})});