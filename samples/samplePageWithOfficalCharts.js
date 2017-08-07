const Page = require('sf-core/ui/page');
const extend = require("js-base/core/extend");
const Color = require('sf-core/ui/color');
const FlexLayout = require('sf-core/ui/flexlayout');
const Font = require('sf-core/ui/font');
const ScrollView = require('sf-core/ui/scrollview');
const JET = require('sf-extension-oracle-jet');
const Label = require('sf-core/ui/label');
const HeaderBarItem = require('sf-core/ui/headerbaritem');
const Router = require("sf-core/router");
const Button = require("sf-core/ui/button");
const WebView = require('sf-core/ui/webview');

var labelFont = Font.create(Font.DEFAULT, 16, Font.BOLD);
var buttonFont = Font.create(Font.DEFAULT, 14, Font.BOLD);
var webViewHeight = 375;
var webViewMargin = 5;
var labelHeigth = 50;
var labelWidth = 150;
var viewMargin = 10;
var buttonHeight = 50;
var oneChartHeight = webViewHeight + (2*webViewMargin) + labelHeigth + (2 * viewMargin) + buttonHeight;

var charts = [];

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
                var itemPage2 = new HeaderBarItem({
                    title: "Page 2",
                    onPress: function() {
                        Router.go('page2');
                    }
                });
                this.headerBar.setItems([itemPage1, itemPage2]);
                this.headerBar.title = "Page 3";
                this.headerBar.leftItemEnabled = false;
		    }.bind(this)
		});
		
		generateCharts();
		
		var myScrollView = new ScrollView({
		    flexGrow: 2,
		});
		
		charts.forEach(function(element){
		    myScrollView.layout.addChild(generateChartTemplate(element.jetData, element.title, element.url));
		});
		
		myScrollView.layout.height = (myScrollView.layout.getChildCount()) * oneChartHeight;
        // myScrollView.layout.justifyContent = FlexLayout.JustifyContent.SPACE_AROUND;
        myScrollView.layout.flexDirection = FlexLayout.FlexDirection.COLUMN;
		this.layout.addChild(myScrollView);
	}
);

function generateChartTemplate(jetData, labelText, chartUrl){
    var layout = new FlexLayout({
        margin: viewMargin,
        height: webViewHeight + (2*webViewMargin) + labelHeigth + buttonHeight
    });
    
    var labelArea = new Label({
        height: labelHeigth,
        width: labelWidth,
        font: labelFont,
        text: labelText
    });
    var webView = new WebView({
        height: webViewHeight,
        margin: webViewMargin,
        alignSelf: FlexLayout.AlignSelf.STRETCH,
    });
    
    var jet = new JET({
        jetPath: "assets://jet/",
        webView: webView
    });
    
    var optionLayout = new FlexLayout({
        flexDirection: FlexLayout.FlexDirection.ROW,
        height: 50
    });
    var myButtonLeft = new Button({
		height: buttonHeight,
		text: "Load JET",
		url: chartUrl,
		JET: jet,
		flexGrow: 1,
		marginLeft: 20,
		marginRight: 10,
		font: buttonFont,
		textColor: Color.WHITE,
		onPress: function(){
		    this.JET.refresh();
		}
	});
	var myButtonRight = new Button({
		height: buttonHeight,
		text: "Load URL",
		chartUrl: chartUrl,
		webView: webView,
		flexGrow: 1,
		marginLeft: 20,
		marginRight: 10,
		font: buttonFont,
		textColor: Color.WHITE,
		onPress: function(){
		    this.webView.loadURL(this.chartUrl);
		}
	});
	

    Object.assign(jet, jetData);
    layout.addChild(labelArea);
    layout.addChild(webView);
    optionLayout.addChild(myButtonLeft);
    optionLayout.addChild(myButtonRight);
    layout.addChild(optionLayout);
    
    return layout;
} 

function generateCharts(){
    charts.push(
        {
            title: "Area Chart",
            url: "http://www.oracle.com/webfolder/technetwork/jet/demo/demo-areaChart-default.html",
            jetData: {
                series: [{name : "Series 1", items : [74, 42, 70, 46]},
                              {name : "Series 2", items : [50, 58, 46, 54]},
                              {name : "Series 3", items : [34, 22, 30, 32]},
                              {name : "Series 4", items : [18,  6, 14, 22]}],
                groups: ["Group A", "Group B", "Group C", "Group D"],
                type: JET.Type.AREA,
                orientation: JET.Orientation.VERTICAL,
                stack: JET.Stack.OFF,
                animationOnDisplay: JET.AnimationOnDisplay.AUTO,
                animationOnDataChange: JET.AnimationOnDataChange.AUTO
            }
        },
        {
            title: "Bar Chart",
            url: "http://www.oracle.com/webfolder/technetwork/jet/demo/demo-barChart-default.html",
            jetData: {
                series: [{name: "Series 1", items: [42, 34]},
                     {name: "Series 2", items: [55, 30]},
                     {name: "Series 3", items: [36, 50]},
                     {name: "Series 4", items: [22, 46]},
                     {name: "Series 5", items: [22, 46]}],
                groups: ["Group A", "Group B"],
                type: JET.Type.AREA,
                orientation: JET.Orientation.VERTICAL,
                stack: JET.Stack.OFF,
                hoverBehavior: JET.HoverBehavior.DIM,
                animationOnDisplay: JET.AnimationOnDisplay.AUTO,
                animationOnDataChange: JET.AnimationOnDataChange.AUTO
            }
        });
}

module.exports = page1;