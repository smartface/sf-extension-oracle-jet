const extend    = require('js-base/core/extend');
const WebView   = require("sf-core/ui/webview");
const File      = require('sf-core/io/file');

var jetData = {
    observables: {},
    observableArrays: {}
};
jetData.observables.typeValue = 'bar';
jetData.observables.orientationValue = "vertical";
jetData.observables.animationOnDisplayValue = 'none';
jetData.observables.animationOnDataChangeValue = 'none';
jetData.observables.hoverBehaviorValue = 'none';
jetData.observables.coordinateSystemValue = "cartesian";
jetData.observables.dataCursorValue = "auto";
jetData.observables.dataCursorBehaviorValue  = "auto";
jetData.observables.dragModeValue = "user";
jetData.observables.drillingValue = "off";
jetData.observables.hideAndShowBehaviorValue = "off";
jetData.observables.initialZoomingValue = "none";
jetData.observables.legendValue = {};
jetData.observables.plotAreaValue = {};
jetData.observables.selectionModeValue = "none";
jetData.observables.sortingValue = "off";
jetData.observables.splitDualYValue = "auto";
jetData.observables.splitterPositionValue = null;
jetData.observables.stackValue = 'off';
jetData.observables.stackLabelValue = 'off';
jetData.observables.styleDefaultsValue = {};
jetData.observables.tooltipValue = {};
jetData.observables.touchResponseValue = "auto";
jetData.observables.trackResizeValue = "on"; 
jetData.observables.translationsValue = {};
jetData.observables.valueFormatsValue = {};
jetData.observables.xAxisValue = {};
jetData.observables.y2AxisValue = {};
jetData.observables.yAxisValue = {};
jetData.observables.zoomAndScrollValue = "off";
jetData.observables.zoomDirectionValue = "auto"; 

jetData.observableArrays.seriesValue = [{name: "Series 1", items: [42, 34]},
                          {name: "Series 2", items: [55, 30]},
                          {name: "Series 3", items: [36, 50]}];

jetData.observableArrays.groupsValue = ["Group 1", "Group 2"];

const JET = extend(WebView)(
    function (_super, params) {
        _super(this);
        
        var _onDestory, _onDrill, _onOptionChange, _onSelectInput, _onViewportChange, _onViewportChangeInput ;
        
        Object.defineProperties(this, {
            "reloadJET": {
                value: function(){
                    this.loadFile(new File({path: "assets://jet/index.html"}));
                    this.onShow = function(event) {
            	        var myScript = "window.drawChart('" + JSON.stringify(jetData) + "');";
                        this.evaluateJS(myScript, function(){});
            	    }.bind(this);
                },
                enumerable: true
            },
            "jetData": {
                get: function(){
                    return jetData;
                },
                set: function(value){
                    jetData = value;
                },
                enumerable: true
            },
            "series": {
                get: function(){
                    return jetData.observableArrays.seriesValue;
                },
                set: function(value){
                    jetData.observableArrays.seriesValue = value;
                },
                enumerable: true
            },
            "groups": {
                get: function(){
                    return jetData.observableArrays.groupsValue;
                },
                set: function(value){
                    jetData.observableArrays.groupsValue = value
                },
                enumerable: true
            },
            "type": {
                get: function(){
                    return jetData.observables.typeValue;
                },
                set: function(value){
                    jetData.observables.typeValue = value;
                },
                enumerable: true
            },
            "orientation": {
                get: function(){
                    return jetData.observables.orientationValue;
                },
                set: function(value){
                    jetData.observables.orientationValue = value;
                },
                enumerable: true
            },
            "animationOnDisplay": {
                get: function(){
                    return jetData.observables.animationOnDisplayValue;
                },
                set: function(value){
                    jetData.observables.animationOnDisplayValue = value;
                },
                enumerable: true
            },
            "animationOnDataChange": {
                get: function(){
                    return jetData.observables.animationOnDataChangeValue;
                },
                set: function(value){
                    jetData.observables.animationOnDataChangeValue = value;
                },
                enumerable: true
            },
            "hoverBehavior": {
                get: function(){
                    return jetData.observables.hoverBehaviorValue;
                },
                set: function(value){
                    jetData.observables.hoverBehaviorValue = value
                },
                enumerable: true
            },
            "coordinateSystem ": {
                get: function(){
                    return jetData.observables.coordinateSystemValue ;
                },
                set: function(value){
                    jetData.observables.coordinateSystemValue = value;
                },
                enumerable: true
            },
            "dataCursor ": {
                get: function(){
                    return jetData.observables.dataCursorValue ;
                },
                set: function(value){
                    jetData.observables.dataCursorValue = value;
                },
                enumerable: true
            },
            "dataCursorBehavior ": {
                get: function(){
                    return jetData.observables.dataCursorBehaviorValue ;
                },
                set: function(value){
                    jetData.observables.dataCursorBehaviorValue = value;
                },
                enumerable: true
            },
            "dragMode ": {
                get: function(){
                    return jetData.observables.dragModeValue ;
                },
                set: function(value){
                    jetData.observables.dragModeValue = value;
                },
                enumerable: true
            },
            "drilling  ": {
                get: function(){
                    return jetData.observables.drillingValue  ;
                },
                set: function(value){
                    jetData.observables.drillingValue = value;
                },
                enumerable: true
            },
            "hideAndShowBehavior  ": {
                get: function(){
                    return jetData.observables.hideAndShowBehaviorValue  ;
                },
                set: function(value){
                    jetData.observables.hideAndShowBehaviorValue = value;
                },
                enumerable: true
            },
            "initialZooming  ": {
                get: function(){
                    return jetData.observables.initialZoomingValue  ;
                },
                set: function(value){
                    jetData.observables.initialZoomingValue = value;
                },
                enumerable: true
            },
            "legend": {
                get: function(){
                    return jetData.observables.legendValue  ;
                },
                set: function(value){
                    jetData.observables.legendValue = value;
                },
                enumerable: true
            },
            "plotArea": {
                get: function(){
                    return jetData.observables.plotAreaValue  ;
                },
                set: function(value){
                    jetData.observables.plotAreaValue = value;
                },
                enumerable: true
            },
            "selectionMode": {
                get: function(){
                    return jetData.observables.selectionModeValue  ;
                },
                set: function(value){
                    jetData.observables.selectionModeValue = value;
                },
                enumerable: true
            },
            "sorting": {
                get: function(){
                    return jetData.observables.sortingValue  ;
                },
                set: function(value){
                    jetData.observables.sortingValue = value;
                },
                enumerable: true
            },
            "splitDualY": {
                get: function(){
                    return jetData.observables.splitDualYValue  ;
                },
                set: function(value){
                    jetData.observables.splitDualYValue = value;
                },
                enumerable: true
            },
            "splitterPosition": {
                get: function(){
                    return jetData.observables.splitterPositionValue  ;
                },
                set: function(value){
                    jetData.observables.splitterPositionValue = value;
                },
                enumerable: true
            },
            "stack": {
                get: function(){
                    return jetData.observables.stackValue;
                },
                set: function(value){
                    jetData.observables.stackValue = value;
                },
                enumerable: true
            },
            "stackLabel": {
                get: function(){
                    return jetData.observables.stackLabelValue;
                },
                set: function(value){
                    jetData.observables.stackLabelValue = value;
                },
                enumerable: true
            },
            "styleDefaults": {
                get: function(){
                    return jetData.observables.styleDefaultsValue  ;
                },
                set: function(value){
                    jetData.observables.styleDefaultsValue = value;
                },
                enumerable: true
            },
            "tooltip": {
                get: function(){
                    return jetData.observables.tooltipValue  ;
                },
                set: function(value){
                    jetData.observables.tooltipValue = value;
                },
                enumerable: true
            },
            "touchResponse": {
                get: function(){
                    return jetData.observables.touchResponseValue  ;
                },
                set: function(value){
                    jetData.observables.touchResponseValue = value;
                },
                enumerable: true
            },
            "trackResize": {
                get: function(){
                    return jetData.observables.trackResizeValue;
                },
                set: function(value){
                    jetData.observables.trackResizeValue = value;
                },
                enumerable: true
            },
            "translations": {
                get: function(){
                    return jetData.observables.translationsValue;
                },
                set: function(value){
                    jetData.observables.translationsValue = value;
                },
                enumerable: true
            },
            "valueFormats": {
                get: function(){
                    return jetData.observables.valueFormatsValue;
                },
                set: function(value){
                    jetData.observables.valueFormatsValue = value;
                },
                enumerable: true
            },
            "xAxis": {
                get: function(){
                    return jetData.observables.xAxisValue;
                },
                set: function(value){
                    jetData.observables.xAxisValue = value;
                },
                enumerable: true
            },
            "y2Axis": {
                get: function(){
                    return jetData.observables.y2AxisValue;
                },
                set: function(value){
                    jetData.observables.y2AxisValue = value;
                },
                enumerable: true
            },
            "yAxis": {
                get: function(){
                    return jetData.observables.yAxisValue;
                },
                set: function(value){
                    jetData.observables.yAxisValue = value;
                },
                enumerable: true
            },     
            "zoomAndScroll": {
                get: function(){
                    return jetData.observables.zoomAndScrollValue;
                },
                set: function(value){
                    jetData.observables.zoomAndScrollValue = value;
                },
                enumerable: true
            }, 
            "zoomDirection": {
                get: function(){
                    return jetData.observables.zoomDirectionValue;
                },
                set: function(value){
                    jetData.observables.zoomDirectionValue = value;
                },
                enumerable: true
            }, 
            "onDestory": {
                get: function(){
                    return _onDestory;
                },
                set: function(value){
                    _onDestory = value;
                },
                enumerable: true
            },
            "onDrill": {
                get: function(){
                    return _onDrill;
                },
                set: function(value){
                    _onDrill = value;
                },
                enumerable: true
            }, 
            "onOptionChange": {
                get: function(){
                    return _onOptionChange;
                },
                set: function(value){
                    _onOptionChange = value;
                },
                enumerable: true
            }, 
            "onSelectInput": {
                get: function(){
                    return _onSelectInput;
                },
                set: function(value){
                    _onSelectInput = value;
                },
                enumerable: true
            }, 
            "onViewportChange": {
                get: function(){
                    return _onViewportChange;
                },
                set: function(value){
                    _onViewportChange = value;
                },
                enumerable: true
            }, 
            "onViewportChangeInput": {
                get: function(){
                    return _onViewportChangeInput;
                },
                set: function(value){
                    _onViewportChangeInput = value;
                },
                enumerable: true
            }, 
        });
        
        this.onChangedURL = function(event){
            console.log("onChangedURL: " + event.url);
            if(event.url.indexOf('jet://') != -1){
                var queryString = event.url.replace('jet://','');
                var jsonData = decodeURIComponent(queryString);
                var object = JSON.parse(jsonData);
                return false;
            }
            return true;
        }
        
        // Assign parameters given in constructor
        if (params) {
            for (var param in params) {
                this[param] = params[param];
            }
        }
        
        // after constructing
        this.reloadJET();
    }
);

Object.defineProperties(JET, {
    "setPath": {
        value: {}
    },
    "Type": {
        value: {},
        enumerable: true
    },
    "Orientation": {
        value: {},
        enumerable: true
    },
    "AnimationOnDisplay": {
        value: {},
        enumerable: true
    },
    "AnimationOnDataChange": {
        value: {},
        enumerable: true
    },
    "HoverBehavior": {
        value: {},
        enumerable: true
    },
    "CoordinateSystem": {
        value: {},
        enumerable: true
    },
    "DataCursor": {
        value: {},
        enumerable: true
    },
    "DataCursorBehavior": {
        value: {},
        enumerable: true
    },
    "DragMode": {
        value: {},
        enumerable: true
    },
    "Drilling": {
        value: {},
        enumerable: true
    },
    "HideAndShowBehavior": {
        value: {},
        enumerable: true
    },  
    "InitialZooming": {
        value: {},
        enumerable: true
    },
    "LegendPosition": {
        value: {},
        enumerable: true
    },
    "LegendRendered": {
        value: {},
        enumerable: true
    },
    "LegendScrolling": {
        value: {},
        enumerable: true
    },
    "PlotAreaRendered": {
        value: {},
        enumerable: true
    },
    "SelectionMode": {
        value: {},
        enumerable: true
    },
    "Sorting": {
        value: {},
        enumerable: true
    },
    "SplitDualY": {
        value: {},
        enumerable: true
    },
    "Stack": {
        value: {},
        enumerable: true
    },
    "StackLabel": {
        value: {},
        enumerable: true
    },
    "TouchResponse": {
        value: {},
        enumerable: true
    },
    "TrackResize": {
        value: {},
        enumerable: true
    },
    "ZoomAndScroll": {
        value: {},
        enumerable: true
    },
    "ZoomDirection": {
        value: {},
        enumerable: true
    },
    
});

Object.defineProperties(JET.Type,{
    "LINE": {
        value: "line",
        enumerable: true
    },
    "AREA": {
        value: "area",
        enumerable: true
    },
    "LINEWITHAREA": {
        value: "lineWithArea",
        enumerable: true
    },
    "STOCK": {
        value: "stock",
        enumerable: true
    },
    "BOXPLOT": {
        value: "boxPlot",
        enumerable: true
    },
    "COMBO": {
        value: "combo",
        enumerable: true
    },
    "PIE": {
        value: "pie",
        enumerable: true
    },
    "SCATTER": {
        value: "scatter",
        enumerable: true
    },
    "BUBBLE": {
        value: "bubble",
        enumerable: true
    },
    "FUNNEL": {
        value: "funnel",
        enumerable: true
    },
    "PYRAMID": {
        value: "pyramid",
        enumerable: true
    },
    "BAR": {
        value: "bar",
        enumerable: true
    }
});

Object.defineProperties(JET.Orientation,{
    "VERTICAL": {
        value: "vertical",
        enumerable: true
    },
    "HORIZONTAL": {
        value: "horizontal",
        enumerable: true
    }
});

Object.defineProperties(JET.AnimationOnDisplay,{
    "AUTO": {
        value: "auto",
        enumerable: true
    },
    "ALPHAFADE": {
        value: "alphaFade",
        enumerable: true
    },
    "ZOOM": {
        value: "zoom",
        enumerable: true
    },
    "NONE": {
        value: "none",
        enumerable: true
    }
});

Object.defineProperties(JET.AnimationOnDataChange,{
    "AUTO": {
        value: "auto",
        enumerable: true
    },
    "SLIDETOLEFT": {
        value: "slideToLeft",
        enumerable: true
    },
    "SLIDETORIGHT": {
        value: "slideToRight",
        enumerable: true
    },
    "NONE": {
        value: "none",
        enumerable: true
    }
});

Object.defineProperties(JET.HoverBehavior,{
    "DIM": {
        value: "dim",
        enumerable: true
    },
    "NONE": {
        value: "none",
        enumerable: true
    }
});

Object.defineProperties(JET.CoordinateSystem,{
    "POLAR": {
        value: "polar",
        enumerable: true
    },
    "CARTESIAN": {
        value: "cartesian",
        enumerable: true
    }
});

Object.defineProperties(JET.DataCursor,{
    "ON": {
        value: "on",
        enumerable: true
    },
    "OFF": {
        value: "off",
        enumerable: true
    },
    "AUTO": {
        value: "auto",
        enumerable: true
    }
    
});

Object.defineProperties(JET.DataCursorBehavior,{
    "SMOOTH": {
        value: "smooth",
        enumerable: true
    },
    "SNAP": {
        value: "snap",
        enumerable: true
    },
    "AUTO": {
        value: "auto",
        enumerable: true
    }
    
});

Object.defineProperties(JET.DragMode,{
    "PAN": {
        value: "pan",
        enumerable: true
    },
    "ZOOM": {
        value: "zoom",
        enumerable: true
    },
    "SELECT": {
        value: "select",
        enumerable: true
    },
    "OFF": {
        value: "off",
        enumerable: true
    },
    "USER": {
        value: "user",
        enumerable: true
    }
});

Object.defineProperties(JET.Drilling,{
    "ON": {
        value: "on",
        enumerable: true
    },
    "SERIESONLY": {
        value: "seriesOnly",
        enumerable: true
    },
    "GROUPSONLY": {
        value: "groupsOnly",
        enumerable: true
    },
    "OFF": {
        value: "off",
        enumerable: true
    }
});

Object.defineProperties(JET.HideAndShowBehavior,{
    "WITHRESCALE": {
        value: "withRescale",
        enumerable: true
    },
    "WITHOUTRESCALE": {
        value: "withoutRescale",
        enumerable: true
    },
    "NONE": {
        value: "none",
        enumerable: true
    }
});

Object.defineProperties(JET.InitialZooming,{
    "FIRST": {
        value: "first",
        enumerable: true
    },
    "LAST": {
        value: "last",
        enumerable: true
    },
    "NONE": {
        value: "none",
        enumerable: true
    }
});

Object.defineProperties(JET.LegendPosition,{
    "START": {
        value: "start",
        enumerable: true
    },
    "END": {
        value: "end",
        enumerable: true
    },
    "BOTTOM": {
        value: "bottom",
        enumerable: true
    },
    "TOP": {
        value: "top",
        enumerable: true
    },
    "AUTO": {
        value: "auto",
        enumerable: true
    }
});

Object.defineProperties(JET.LegendRendered,{
    "ON": {
        value: "on",
        enumerable: true
    },
    "OFF": {
        value: "off",
        enumerable: true
    },
    "AUTO": {
        value: "auto",
        enumerable: true
    }
});

Object.defineProperties(JET.LegendScrolling,{
    "OFF": {
        value: "off",
        enumerable: true
    },
    "ASNEEDED": {
        value: "asNeeded",
        enumerable: true
    }
});

Object.defineProperties(JET.PlotAreaRendered,{
    "ON": {
        value: "on",
        enumerable: true
    },
    "OFF": {
        value: "off",
        enumerable: true
    }
});

Object.defineProperties(JET.SelectionMode,{
    "SINGLE": {
        value: "single",
        enumerable: true
    },
    "MULTIPLE": {
        value: "multiple",
        enumerable: true
    },
    "NONE": {
        value: "none",
        enumerable: true
    }
});

Object.defineProperties(JET.Sorting,{
    "ASCENDING": {
        value: "ascending",
        enumerable: true
    },
    "DESCENDING": {
        value: "descending",
        enumerable: true
    },
    "OFF": {
        value: "off",
        enumerable: true
    }
});

Object.defineProperties(JET.SplitDualY,{
    "ON": {
        value: "on",
        enumerable: true
    },
    "OFF": {
        value: "off",
        enumerable: true
    },
    "AUTO": {
        value: "auto",
        enumerable: true
    }
});

Object.defineProperties(JET.Stack,{
    "ON": {
        value: "on",
        enumerable: true
    },
    "OFF": {
        value: "off",
        enumerable: true
    }
});

Object.defineProperties(JET.StackLabel,{
    "ON": {
        value: "on",
        enumerable: true
    },
    "OFF": {
        value: "off",
        enumerable: true
    },
    "AUTO": {
        value: "auto",
        enumerable: true
    }
});

Object.defineProperties(JET.TouchResponse,{
    "ON": {
        value: "on",
        enumerable: true
    },
    "TOUCHSTART": {
        value: "touchStart",
        enumerable: true
    }
});

Object.defineProperties(JET.TrackResize,{
    "ON": {
        value: "on",
        enumerable: true
    },
    "OFF": {
        value: "off",
        enumerable: true
    },
    "AUTO": {
        value: "auto",
        enumerable: true
    }
});

Object.defineProperties(JET.ZoomAndScroll,{
    "DELAYEDSCROLLONLY": {
        value: "delayedScrollOnly",
        enumerable: true
    },
    "LIVESCROLLONLY": {
        value: "liveScrollOnly",
        enumerable: true
    },
    "DELAYED": {
        value: "delayed",
        enumerable: true
    },
    "LIVE": {
        value: "live",
        enumerable: true
    },
    "OFF": {
        value: "off",
        enumerable: true
    }
});

Object.defineProperties(JET.ZoomDirection,{
    "ON": {
        value: "on",
        enumerable: true
    },
    "OFF": {
        value: "off",
        enumerable: true
    },
    "AUTO": {
        value: "auto",
        enumerable: true
    }
});

module.exports = JET;