const Page = require('sf-core/ui/page');
const extend = require("js-base/core/extend");
const Color = require('sf-core/ui/color');
const FlexLayout = require('sf-core/ui/flexlayout');
const Screen = require('sf-core/device/screen');
const Button = require('sf-core/ui/button');
const Font = require('sf-core/ui/font');
const ScrollView = require('sf-core/ui/scrollview');
const JET = require('sf-extension-oracle-jet');
const AlertUtil = require('sf-extension-utils/alert');
const HeaderBarItem = require('sf-core/ui/headerbaritem');
const Router = require("sf-core/router");

var myFont = Font.create(Font.DEFAULT, 10, Font.NORMAL);
var counters = {
    type: 0,
    orientation: 0,
    animationOnDisplay: 0,
    animationOnDataChange: 0,
    hoverBehavior: 0,
    coordinateSystem: 0,
    dataCursor: 0,
    dataCursorBehavior: 0,
    dragMode: 0,
    drilling: 0,
    hideAndShowBehavior: 0,
    initialZooming: 0,
    selectionMode: 0,
    sorting: 0,
    splitDualY: 0,
    stack: 0,
    stackLabel: 0,
    touchResponse: 0,
    trackResize: 0,
    zoomAndScroll: 0,
    zoomDirection: 0
};
var buttonWidth = 125;
var buttonHeight = 40;
var buttonMargin = 2;

var page1 = extend(Page)(
	function(_super) {

		_super(this, {
		    onShow: function(){
		        var itemPage1 = new HeaderBarItem({
                    title: "Page 1",
                    onPress: function() {
                        Router.go('page1');
                    }
                });
                var itemPage3 = new HeaderBarItem({
                    title: "Page 3",
                    onPress: function() {
                        Router.go('page3');
                    }
                });
                this.headerBar.setItems([itemPage1, itemPage3]);
                this.headerBar.title = "Page 2";
                this.headerBar.leftItemEnabled = false;
		    }.bind(this)
		});
		
		// finding column count. Floor down 
		var columnCount = Math.floor(Screen.width/(buttonWidth + buttonMargin*2));
		// finding row count. Floor up 
        var rowCount = Math.ceil( (Object.keys(counters).length + 13) /(columnCount) );
		
		var myJetView = new JET({
		    jetPath: "assets://jet/"
		});
		myJetView.webView.flexGrow = 3;
		myJetView.webView.alignSelf = FlexLayout.AlignSelf.STRETCH;
		
		var myScrollView = new ScrollView({
		    flexGrow: 2,
		});
		
		myScrollView.layout.height = rowCount * (buttonHeight + buttonMargin*2);
        myScrollView.layout.justifyContent = FlexLayout.JustifyContent.SPACE_AROUND;
        myScrollView.layout.flexWrap = FlexLayout.FlexWrap.WRAP;
        myScrollView.layout.flexDirection = FlexLayout.FlexDirection.ROW;
		
		var myButtonAddGroups = new Button({
			height: buttonHeight,
			width: buttonWidth,
			margin: buttonMargin,
			text: "AddGroups",
			font: myFont,
			textColor: Color.WHITE,
			onPress: function(){
			    myJetView.groups.push(generateGroups(myJetView.groups.length));
				myJetView.refresh();
			}
		});
		myScrollView.layout.addChild(myButtonAddGroups);

        var myButtonAddSeries = new Button({
			height: buttonHeight,
			width: buttonWidth,
			margin: buttonMargin,
			text: "AddSeries",
			font: myFont,
			textColor: Color.WHITE,
			onPress: function(){
			    myJetView.series.push(generateSeries(myJetView.groups.length, myJetView.series.length));
				myJetView.refresh();
			}
		});
		myScrollView.layout.addChild(myButtonAddSeries);
		
        var myButtonClearData = new Button({
			height: buttonHeight,
			width: buttonWidth,
			margin: buttonMargin,
			text: "ClearData",
			font: myFont,
			textColor: Color.WHITE,
			onPress: function(){
			    myJetView.series = [];
			    myJetView.groups = [];
				myJetView.refresh();
			}
		});
		myScrollView.layout.addChild(myButtonClearData);

		
		var myButtonLegendBackgroundColor = new Button({
			height: buttonHeight,
			width: buttonWidth,
			margin: buttonMargin,
			text: "LegendBackgroundColor",
			font: myFont,
			textColor: Color.WHITE,
			onPress: function(){
			    myJetView.legend.backgroundColor = getRandomColorString();
			    AlertUtil.showAlert("legend.backgroundColor: " + myJetView.legend.backgroundColor);
				myJetView.refresh();
			}
		});
		myScrollView.layout.addChild(myButtonLegendBackgroundColor);
		
		var myButtonLegendBorderColor = new Button({
			height: buttonHeight,
			width: buttonWidth,
			margin: buttonMargin,
			text: "LegendBorderColor",
			font: myFont,
			textColor: Color.WHITE,
			onPress: function(){
			    myJetView.legend.borderColor = getRandomColorString();
			    AlertUtil.showAlert("legend.borderColor: " + myJetView.legend.borderColor);
				myJetView.refresh();
			}
		});
		myScrollView.layout.addChild(myButtonLegendBorderColor);
		
		var legendPositionCounter = 0;
		var myButtonLegendPosition = new Button({
			height: buttonHeight,
			width: buttonWidth,
			margin: buttonMargin,
			text: "LegendPosition",
			font: myFont,
			textColor: Color.WHITE,
			onPress: function(){
			    var propertyValue = JET.LegendPosition[Object.keys(JET.LegendPosition)[legendPositionCounter]];
			    myJetView.legend.position = propertyValue;
			    AlertUtil.showAlert("LegendPosition: " + propertyValue);
			    legendPositionCounter = ++legendPositionCounter % Object.keys(JET.LegendPosition).length;
				myJetView.refresh();
			}
		});
		myScrollView.layout.addChild(myButtonLegendPosition);
		
		var legendRenderedCounter = 0;
		var myButtonLegendRendered = new Button({
			height: buttonHeight,
			width: buttonWidth,
			margin: buttonMargin,
			text: "LegendRendered",
			font: myFont,
			textColor: Color.WHITE,
			onPress: function(){
			    var propertyValue = JET.LegendRendered[Object.keys(JET.LegendRendered)[legendRenderedCounter]];
			    myJetView.legend.rendered = propertyValue;
			    AlertUtil.showAlert("LegendRendered: " + propertyValue);
			    legendRenderedCounter = ++legendRenderedCounter % Object.keys(JET.LegendRendered).length;
				myJetView.refresh();
			}
		});
		myScrollView.layout.addChild(myButtonLegendRendered);
		
		var legendScrollingCounter = 0;
		var myButtonLegendScrolling = new Button({
			height: buttonHeight,
			width: buttonWidth,
			margin: buttonMargin,
			text: "LegendScrolling",
			font: myFont,
			textColor: Color.WHITE,
			onPress: function(){
			    var propertyValue = JET.LegendScrolling[Object.keys(JET.LegendScrolling)[legendScrollingCounter]];
			    myJetView.legend.rendered = propertyValue;
			    AlertUtil.showAlert("LegendScrolling: " + propertyValue);
			    legendScrollingCounter = ++legendScrollingCounter % Object.keys(JET.LegendScrolling).length;
				myJetView.refresh();
			}
		});
		myScrollView.layout.addChild(myButtonLegendScrolling);

		var myButtonPlotBackgroundColor = new Button({
			height: buttonHeight,
			width: buttonWidth,
			margin: buttonMargin,
			text: "PlotBackgroundColor",
			font: myFont,
			textColor: Color.WHITE,
			onPress: function(){
			    myJetView.plotArea.backgroundColor = getRandomColorString();
			    AlertUtil.showAlert("legend.plotArea: " + myJetView.plotArea.backgroundColor);
				myJetView.refresh();
			}
		});
		myScrollView.layout.addChild(myButtonPlotBackgroundColor);
		
		var myButtonPlotAreaBorderColor = new Button({
			height: buttonHeight,
			width: buttonWidth,
			margin: buttonMargin,
			text: "PlotBorderColor",
			font: myFont,
			textColor: Color.WHITE,
			onPress: function(){
			    myJetView.plotArea.borderColor = getRandomColorString();
			    AlertUtil.showAlert("plotArea.borderColor: " + myJetView.plotArea.borderColor);
				myJetView.refresh();
			}
		});
		myScrollView.layout.addChild(myButtonPlotAreaBorderColor);
		
		var myButtonPlotAreaBorderWidth = new Button({
			height: buttonHeight,
			width: buttonWidth,
			margin: buttonMargin,
			text: "PlotBorderWidth",
			font: myFont,
			textColor: Color.WHITE,
			onPress: function(){
			    myJetView.plotArea.borderWidth = myJetView.plotArea.borderWidth ? myJetView.plotArea.borderWidth+1 : 1;
			    AlertUtil.showAlert("plotArea.borderWidth: " + myJetView.plotArea.borderWidth);
				myJetView.refresh();
			}
		});
		myScrollView.layout.addChild(myButtonPlotAreaBorderWidth);

		var plotAreaRenderedCounter = 0;
		var myButtonPlotAreaRendered = new Button({
			height: buttonHeight,
			width: buttonWidth,
			margin: buttonMargin,
			text: "PlotAreaRendered",
			font: myFont,
			textColor: Color.WHITE,
			onPress: function(){
			    var propertyValue = JET.PlotAreaRendered[Object.keys(JET.PlotAreaRendered)[plotAreaRenderedCounter]];
			    myJetView.plotArea.rendered = propertyValue;
			    AlertUtil.showAlert("PlotAreaRendered: " + propertyValue);
			    plotAreaRenderedCounter = ++plotAreaRenderedCounter % Object.keys(JET.PlotAreaRendered).length;
				myJetView.refresh();
			}
		});
		myScrollView.layout.addChild(myButtonPlotAreaRendered);

		var myButtonSplitterPosition = new Button({
			height: buttonHeight,
			width: buttonWidth,
			margin: buttonMargin,
			text: "SplitterPosition",
			font: myFont,
			textColor: Color.WHITE,
			onPress: function(){
			    myJetView.splitterPosition = Math.random();
			    AlertUtil.showAlert("splitterPosition: " + myJetView.splitterPosition);
				myJetView.refresh();
			}
		});
		myScrollView.layout.addChild(myButtonSplitterPosition);

		Object.keys(counters).forEach(function(propertyName){
		    var btn = new Button({
    			height: buttonHeight,
    			width: buttonWidth,
    			margin: buttonMargin,
    			propertyName: propertyName,
    			text: capitalizeFirstLetter(propertyName),
    			font: myFont,
    			textColor: Color.WHITE,
    			onPress: function(){
    			    var propertyValue = JET[this.text][Object.keys(JET[this.text])[counters[this.propertyName]]];
    			    myJetView[this.propertyName] = propertyValue;
    			    AlertUtil.showAlert(this.text + ": " + propertyValue);
    			    counters[this.propertyName] = ++counters[this.propertyName] % Object.keys(JET[this.text]).length;
    				myJetView.refresh();
    			}
    		});
    		myScrollView.layout.addChild(btn);
		});
		
		this.layout.addChild(myJetView.webView);
		this.layout.addChild(myScrollView);
	}
);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomColorString() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generateSeries(groupsCount, seriesCount){
    var data = {
        name: "Series " + (seriesCount +1),
        items: []
    };
    for(var i=0 ; i<groupsCount ; i++){
        data.items.push(Math.floor(Math.random() * 75 ));
    }
    return data;
}

function generateGroups(groupsCount){
    return "Group " + (groupsCount+1);
}

module.exports = page1;