/**
 * ---------------------------------------
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

// Set the types of nodes you'll create
var birthNodes = chart.series.push(new am4maps.MapImageSeries());
var travelNodes = chart.series.push(new am4maps.MapImageSeries());
var academyNodes = chart.series.push(new am4maps.MapImageSeries());
var deathNode = chart.series.push(new am4maps.MapImageSeries());

var birthTemplate = birthNodes.mapImages.template;
birthTemplate.tooltipText = "{title}";
birthTemplate.nonScaling = true;

var travelTemplate = travelNodes.mapImages.template;
travelTemplate.tooltipText = "{title}";
travelTemplate.nonScaling = true;

var academyTemplate = academyNodes.mapImages.template;
academyTemplate.tooltipText = "{title}";
academyTemplate.nonScaling = true;

var deathTemplate = deathNode.mapImages.template;
deathTemplate.tooltipText = "{title}";
deathTemplate.nonScaling = true;

// Set the attributes of the nodes you've created. Most of the attributes will
// be the same, and the color is really the only change.

var birthmarker = birthTemplate.createChild(am4core.Sprite);
birthmarker.path = targetSVG;
birthmarker.horizontalCenter = "middle";
birthmarker.verticalCenter = "middle";
birthmarker.scale = 0.5;
birthmarker.fill = am4core.color("#0116FF");
birthmarker.stroke = am4core.color("#0116FF");

var travelmarker = travelTemplate.createChild(am4core.Sprite);
travelmarker.path = targetSVG;
travelmarker.horizontalCenter = "middle";
travelmarker.verticalCenter = "middle";
travelmarker.scale = 0.5;
travelmarker.fill = am4core.color("#1BFF00");
travelmarker.stroke = am4core.color("#1BFF00");

var academymarker = academyTemplate.createChild(am4core.Sprite);
academymarker.path = targetSVG;
academymarker.horizontalCenter = "middle";
academymarker.verticalCenter = "middle";
academymarker.scale = 0.5;
academymarker.fill = am4core.color("#FFE000");
academymarker.stroke = am4core.color("#FFE000");

var deathmarker = deathTemplate.createChild(am4core.Sprite);
deathmarker.path = targetSVG;
deathmarker.horizontalCenter = "middle";
deathmarker.verticalCenter = "middle";
deathmarker.scale = 0.5;
deathmarker.fill = am4core.color("#000000");
deathmarker.stroke = am4core.color("#000000");


// Populating the node with the correct example JSON data.
birthTemplate.propertyFields.latitude = "latitude";
birthTemplate.propertyFields.longitude = "longitude";
birthNodes.data = [ {
  "svgPath": targetSVG,
  "title": "Buenos Aires, Carlos Enríquez Gómez",
  "latitude": -34.6037,
  "longitude": -58.3816,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Lima, Fernando Botero",
  "latitude": -12.0464,
  "longitude": -77.0428,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Brasilia, Víctor Grippo",
  "latitude": -15.8267,
  "longitude": -47.9218,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Cape Town, Cheri Samba",
  "latitude": -33.9249,
  "longitude": 18.4241,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Seoul, Park Seo-bo",
  "latitude": 37.5665,
  "longitude": 126.9780,
  "scale": 0.5
}];

academyTemplate.propertyFields.latitude = "latitude";
academyTemplate.propertyFields.longitude = "longitude";
academyNodes.data = [ {
  "svgPath": targetSVG,
  "title": "Belgrade, Art Academy",
  "latitude": 44.8048,
  "longitude": 20.89,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Paris, Paris Academy of Art",
  "latitude": 48.8567,
  "longitude": 2.7510,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Stockholm, Stockholms Dramatiska Högskola",
  "latitude": 59.3328,
  "longitude": 17.5445,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Prague, Academy of Fine Arts",
  "latitude": 50.0878,
  "longitude": 14.8205,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Buenos Aires, MALBA",
  "latitude": -34.6037,
  "longitude": -58.7816,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Madrid, Academia de Pintura DeCinti Villalóns",
  "latitude": 40.4167,
  "longitude": -3.3033,
  "scale": 0.5
}];

deathTemplate.propertyFields.latitude = "latitude";
deathTemplate.propertyFields.longitude = "longitude";
deathNode.data = [ {
  "svgPath": targetSVG,
  "title": "Moscow, Víctor Grippo",
  "latitude": 55.7558,
  "longitude": 37.6176,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Madrid, Fernando Botero",
  "latitude": 40.4167,
  "longitude": -3.7033,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Brussels, Carlos Enríquez Gómez",
  "latitude": 50.8371,
  "longitude": 4.3676,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Ljubljana, Cheri Samba",
  "latitude": 46.0514,
  "longitude": 14.5060,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Oslo, Park Seo-bo",
  "latitude": 59.9138,
  "longitude": 10.7387,
  "scale": 0.5
} ];

travelTemplate.propertyFields.latitude = "latitude";
travelTemplate.propertyFields.longitude = "longitude";
travelNodes.data = [ {
  "id": "london",
  "svgPath": targetSVG,
  "title": "London, Carlos Enríquez Gómez",
  "latitude": 51.5002,
  "longitude": -0.1262,
  "scale": 1
}, {
  "svgPath": targetSVG,
  "title": "Prague, Cheri Samba",
  "latitude": 50.0878,
  "longitude": 14.4205,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Athens, Víctor Grippo",
  "latitude": 37.9792,
  "longitude": 23.7166,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Lisbon, Carlos Enríquez Gómez",
  "latitude": 38.7072,
  "longitude": -9.1355,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Belgrade, Víctor Grippo",
  "latitude": 44.8048,
  "longitude": 20.4781,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Stockholm, Park Seo-bo",
  "latitude": 59.3328,
  "longitude": 18.0645,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Bern, Cheri Samba",
  "latitude": 46.9480,
  "longitude": 7.4481,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Kiev, Víctor Grippo",
  "latitude": 50.4422,
  "longitude": 30.5367,
  "scale": 0.5
}, {
  "svgPath": targetSVG,
  "title": "Paris, Carlos Enríquez Gómez",
  "latitude": 48.8567,
  "longitude": 2.3510,
  "scale": 0.5
} ];


// Here is where we begin to create the lines between nodes depending on the region.
// Each region will have a different color edge line, so the lines need to be created
// independtly of each other.
var southAmericaLines = chart.series.push(new am4maps.MapLineSeries());
southAmericaLines.dataFields.multiGeoLine = "multiGeoLine";

var southAmericaTemplate = southAmericaLines.mapLines.template;
southAmericaTemplate.nonScalingStroke = true;
southAmericaTemplate.arrow.nonScaling = true;
southAmericaTemplate.arrow.width = 4;
southAmericaTemplate.arrow.height = 5;
southAmericaTemplate.fill = am4core.color("#0116FF");
southAmericaTemplate.stroke = am4core.color("#0116FF")
southAmericaTemplate.line.strokeOpacity = 0.8;

// Adding the JSON data for one type of line to connect the nodes.
southAmericaLines.data = [{
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

var africaLines = chart.series.push(new am4maps.MapLineSeries());
africaLines.dataFields.multiGeoLine = "multiGeoLine";

var africaTemplate = africaLines.mapLines.template;
africaTemplate.nonScalingStroke = true;
africaTemplate.arrow.nonScaling = true;
africaTemplate.arrow.width = 4;
africaTemplate.arrow.height = 5;
africaTemplate.fill = am4core.color("#000000");
africaTemplate.stroke = am4core.color("#000000")
africaTemplate.line.strokeOpacity = 0.8;

africaLines.data = [{
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

var asiaLines = chart.series.push(new am4maps.MapLineSeries());
asiaLines.dataFields.multiGeoLine = "multiGeoLine";

var asiaTemplate = asiaLines.mapLines.template;
asiaTemplate.nonScalingStroke = true;
asiaTemplate.arrow.nonScaling = true;
asiaTemplate.arrow.width = 4;
asiaTemplate.arrow.height = 5;
asiaTemplate.fill = am4core.color("#e03e96");
asiaTemplate.stroke = am4core.color("#e03e96")
asiaTemplate.line.strokeOpacity = 0.8;

asiaLines.data = [{
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
