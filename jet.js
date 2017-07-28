const extend    = require('js-base/core/extend');
const WebView   = require("sf-core/ui/webview");
const File      = require('sf-core/io/file');

var jetData = {
    observables: {},
    observableArrays: {}
};
jetData.observables.typeValue = 'bar';
jetData.observables.stackValue = 'off';
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
jetData.observables.legendValue = {
    backgroundColor : null,
    borderColor : null,
    maxSize : null,
    position : "auto",
    rendered : "auto",
    scrolling : "asNeeded"
};

jetData.observableArrays.barSeriesValue = [{name: "Series 1", items: [42, 34]},
                          {name: "Series 2", items: [55, 30]},
                          {name: "Series 3", items: [36, 50]},
                          {name: "Series 6", items: [22, 46]},
                          {name: "Series 5", items: [22, 46]}];

jetData.observableArrays.barGroupsValue = ["Group A", "Group B"];

const JET = extend(WebView)(
    function (_super, params) {
        if (Device.deviceOS === "Android") {
            var activity = Android.getActivity();
        }
        
        
        _super(this);
        
        Object.defineProperties(this, {
            "jetData": {
                get: function(){
                    return jetData;
                },
                set: function(value){
                    jetData = value;
                },
                enumerable: true
            },
            "barSeries": {
                get: function(){
                    return jetData.observableArrays.barSeriesValue;
                },
                set: function(value){
                    jetData.observableArrays.barSeriesValue = value;
                },
                enumerable: true
            },
            "barGroups": {
                get: function(){
                    return jetData.observableArrays.barGroupsValue;
                },
                set: function(value){
                    jetData.observableArrays.barGroupsValue = value
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
            "stack": {
                get: function(){
                    return jetData.observables.stackValue === "on" ;
                },
                set: function(value){
                    jetData.observables.stackValue = value ? "on": "off";
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
             
        });
        

        // Assign parameters given in constructor
        if (params) {
            for (var param in params) {
                this[param] = params[param];
            }
        }
        
        // after constructing
        this.loadFile(new File({path: "assets://jet/index.html"}));
        this.onShow = function(event) {
	        var myScript = "window.drawChart('" + JSON.stringify(jetData) + "');";
            this.evaluateJS(myScript, function(){});
	    }.bind(this);
    }
);

Object.defineProperties(JET, {
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


module.exports = JET;