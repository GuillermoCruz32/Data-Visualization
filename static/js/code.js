/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Define marker path
var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);
var interfaceColors = new am4core.InterfaceColorSet();

// Set map definition
chart.geodata = am4geodata_worldLow;

// Set projection
chart.projection = new am4maps.projections.Mercator();

// Add zoom control
chart.zoomControl = new am4maps.ZoomControl();

// Set initial zoom
chart.homeZoomLevel = 1.5;
chart.homeGeoPoint = {
  latitude: 51,
  longitude: -23
};

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.exclude = ["AQ"];
polygonSeries.useGeodata = true;
polygonSeries.mapPolygons.template.nonScalingStroke = true;

// Add images
var imageSeries = chart.series.push(new am4maps.MapImageSeries());
var imageSeries2 = chart.series.push(new am4maps.MapImageSeries());
var imageSeries3 = chart.series.push(new am4maps.MapImageSeries());
var imageSeries4 = chart.series.push(new am4maps.MapImageSeries());

var imageTemplate = imageSeries.mapImages.template;
imageTemplate.tooltipText = "{title}";
imageTemplate.nonScaling = true;

var imageTemplate2 = imageSeries2.mapImages.template;
imageTemplate2.tooltipText = "{title}";
imageTemplate2.nonScaling = true;

var imageTemplate3 = imageSeries3.mapImages.template;
imageTemplate3.tooltipText = "{title}";
imageTemplate3.nonScaling = true;

var imageTemplate4 = imageSeries4.mapImages.template;
imageTemplate4.tooltipText = "{title}";
imageTemplate4.nonScaling = true;

var marker = imageTemplate.createChild(am4core.Sprite);
marker.path = targetSVG;
marker.horizontalCenter = "middle";
marker.verticalCenter = "middle";
marker.scale = 0.5;
marker.fill = am4core.color("#0116FF");
marker.stroke = am4core.color("#0116FF");

var marker2 = imageTemplate2.createChild(am4core.Sprite);
marker2.path = targetSVG;
marker2.horizontalCenter = "middle";
marker2.verticalCenter = "middle";
marker2.scale = 0.5;
marker2.fill = am4core.color("#1BFF00");
marker2.stroke = am4core.color("#1BFF00");

var marker3 = imageTemplate3.createChild(am4core.Sprite);
marker3.path = targetSVG;
marker3.horizontalCenter = "middle";
marker3.verticalCenter = "middle";
marker3.scale = 0.5;
marker3.fill = am4core.color("#FFE000");
marker3.stroke = am4core.color("#FFE000");

var marker4 = imageTemplate4.createChild(am4core.Sprite);
marker4.path = targetSVG;
marker4.horizontalCenter = "middle";
marker4.verticalCenter = "middle";
marker4.scale = 0.5;
marker4.fill = am4core.color("#000000");
marker4.stroke = am4core.color("#000000");
// marker.fill = interfaceColors.getFor("alternativeBackground");

imageTemplate.propertyFields.latitude = "latitude";
imageTemplate.propertyFields.longitude = "longitude";
imageSeries.data = [ {
  "svgPath": targetSVG,
  "title": "Buenos Aires, Artist Name",
  "latitude": -34.6037,
  "longitude": -58.3816,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Lima, Artist Name",
  "latitude": -12.0464,
  "longitude": -77.0428,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Brasilia, Artist Name",
  "latitude": -15.8267,
  "longitude": -47.9218,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Cape Town, Artist Name",
  "latitude": -33.9249,
  "longitude": 18.4241,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Seoul, Artist Name",
  "latitude": 37.5665,
  "longitude": 126.9780,
  "scale": 0.5
}];

imageTemplate3.propertyFields.latitude = "latitude";
imageTemplate3.propertyFields.longitude = "longitude";
imageSeries3.data = [ {
  "svgPath": targetSVG,
  "title": "Belgrade, Art Academy",
  "latitude": 44.8048,
  "longitude": 20.89,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Paris, Art Academy",
  "latitude": 48.8567,
  "longitude": 2.7510,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Stockholm, Art Academy",
  "latitude": 59.3328,
  "longitude": 17.5445,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Prague, Art Academy",
  "latitude": 50.0878,
  "longitude": 14.8205,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Buenos Aires, Art Academy",
  "latitude": -34.6037,
  "longitude": -58.7816,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Madrid, Art Academy",
  "latitude": 40.4167,
  "longitude": -3.3033,
  "scale": 0.5
}];

imageTemplate4.propertyFields.latitude = "latitude";
imageTemplate4.propertyFields.longitude = "longitude";
imageSeries4.data = [ {
  "svgPath": targetSVG,
  "title": "Moscow",
  "latitude": 55.7558,
  "longitude": 37.6176,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Madrid",
  "latitude": 40.4167,
  "longitude": -3.7033,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Brussels",
  "latitude": 50.8371,
  "longitude": 4.3676,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Ljubljana",
  "latitude": 46.0514,
  "longitude": 14.5060,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Oslo",
  "latitude": 59.9138,
  "longitude": 10.7387,
  "scale": 0.5
} ];

imageTemplate2.propertyFields.latitude = "latitude";
imageTemplate2.propertyFields.longitude = "longitude";
imageSeries2.data = [ {
  "id": "london",
  "svgPath": targetSVG,
  "title": "London",
  "latitude": 51.5002,
  "longitude": -0.1262,
  "scale": 1
}, {
  "svgPath": targetSVG,
  "title": "Prague",
  "latitude": 50.0878,
  "longitude": 14.4205,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Athens",
  "latitude": 37.9792,
  "longitude": 23.7166,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Lisbon",
  "latitude": 38.7072,
  "longitude": -9.1355,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Belgrade",
  "latitude": 44.8048,
  "longitude": 20.4781,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Stockholm",
  "latitude": 59.3328,
  "longitude": 18.0645,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Bern",
  "latitude": 46.9480,
  "longitude": 7.4481,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Kiev",
  "latitude": 50.4422,
  "longitude": 30.5367,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Paris",
  "latitude": 48.8567,
  "longitude": 2.3510,
  "scale": 0.5
} ];

// Add lines

var lineSeries2 = chart.series.push(new am4maps.MapLineSeries());
lineSeries2.dataFields.multiGeoLine = "multiGeoLine";

var lineTemplate2 = lineSeries2.mapLines.template;
lineTemplate2.nonScalingStroke = true;
lineTemplate2.arrow.nonScaling = true;
lineTemplate2.arrow.width = 4;
lineTemplate2.arrow.height = 5;
lineTemplate2.fill = am4core.color("#0116FF");
lineTemplate2.stroke = am4core.color("#0116FF")
lineTemplate2.line.strokeOpacity = 0.8;

lineSeries2.data = [{
  "multiGeoLine": [
    [
      { "latitude": -34.6037, "longitude": -58.3816 },
      { "latitude": 38.7072, "longitude": -9.1355 }
    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": -34.6037, "longitude": -58.3816 },
      { "latitude": -34.6037, "longitude": -58.7816 }
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": -12.0464, "longitude": -77.0428 },
      { "latitude": 40.4167, "longitude": -3.7033 }
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 40.4167, "longitude": -3.7033 },
      { "latitude": 40.4167, "longitude": -3.4033 }
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": -15.8267, "longitude": -47.9218 },
      { "latitude": 37.9792, "longitude": 23.7166 }
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 37.9792, "longitude": 23.7166 },
      { "latitude": 44.8048, "longitude": 20.4781 }
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 44.8048, "longitude": 20.4781 },
      { "latitude": 44.8048, "longitude": 20.89 }
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 44.8048, "longitude": 20.4781 },
      { "latitude": 50.4422, "longitude": 30.5367 }
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 50.4422, "longitude": 30.5367 },
      { "latitude": 55.7558, "longitude": 37.6176 },
      {"title": "Athens"},
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 38.7072, "longitude": -9.1355 },
      { "latitude": 51.5002, "longitude": -0.1262 },
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 51.5002, "longitude": -0.1262 },
      { "latitude": 48.8567, "longitude": 2.3510 }
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 48.8567, "longitude": 2.3510 },
      { "latitude": 48.8567, "longitude": 2.7510 }
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 48.8567, "longitude": 2.3510 },
      { "latitude": 50.8371, "longitude": 4.3676 }
    ]
  ]
}];

var lineSeries3 = chart.series.push(new am4maps.MapLineSeries());
lineSeries3.dataFields.multiGeoLine = "multiGeoLine";

var lineTemplate3 = lineSeries3.mapLines.template;
lineTemplate3.nonScalingStroke = true;
lineTemplate3.arrow.nonScaling = true;
lineTemplate3.arrow.width = 4;
lineTemplate3.arrow.height = 5;
lineTemplate3.fill = am4core.color("#000000");
lineTemplate3.stroke = am4core.color("#000000")
lineTemplate3.line.strokeOpacity = 0.8;

lineSeries3.data = [{
  "multiGeoLine": [
    [
      { "latitude": -33.9249, "longitude": 18.4241 },
      { "latitude": 46.9480, "longitude": 7.4481 }
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 46.9480, "longitude": 7.4481 },
      { "latitude": 50.0878, "longitude": 14.4205 }
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 50.0878, "longitude": 14.4205 },
      { "latitude": 50.0878, "longitude": 14.8205 }
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 50.0878, "longitude": 14.4205 },
      { "latitude": 46.0514, "longitude": 14.5060 }
    ]
  ]
}];

var lineSeries4 = chart.series.push(new am4maps.MapLineSeries());
lineSeries4.dataFields.multiGeoLine = "multiGeoLine";

var lineTemplate4 = lineSeries4.mapLines.template;
lineTemplate4.nonScalingStroke = true;
lineTemplate4.arrow.nonScaling = true;
lineTemplate4.arrow.width = 4;
lineTemplate4.arrow.height = 5;
lineTemplate4.fill = am4core.color("#e03e96");
lineTemplate4.stroke = am4core.color("#e03e96")
lineTemplate4.line.strokeOpacity = 0.8;

lineSeries4.data = [{
  "multiGeoLine": [
    [
      { "latitude": 37.5665, "longitude": 126.9780 },
      { "latitude": 59.3328, "longitude": 18.0645 }
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 59.3328, "longitude": 18.0645 },
      { "latitude": 59.9138, "longitude": 10.7387 }
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 59.3328, "longitude": 18.0645 },
      { "latitude": 59.3328, "longitude": 17.5445 }
    ]
  ]
}];
