var size = 0;
var placement = 'point';
function categories_BLACKLINKSHP_8(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'JALAN RAYA BANJAR-PANGANDARAN':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(195,67,217,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 7.6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'JALAN RAYA CIJULANG':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(67,177,237,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 7.6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'JALAN RAYA PANGANDARAN-KALIPUCANG':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(17,10,7,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 7.6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_BLACKLINKSHP_8 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("NAMA JALAN");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_BLACKLINKSHP_8(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
