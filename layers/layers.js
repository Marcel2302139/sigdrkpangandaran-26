var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KECAMATAN_1 = new ol.format.GeoJSON();
var features_KECAMATAN_1 = format_KECAMATAN_1.readFeatures(json_KECAMATAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KECAMATAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KECAMATAN_1.addFeatures(features_KECAMATAN_1);
var lyr_KECAMATAN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KECAMATAN_1, 
                style: style_KECAMATAN_1,
                popuplayertitle: 'KECAMATAN',
                interactive: true,
                title: '<img src="styles/legend/KECAMATAN_1.png" /> KECAMATAN'
            });
var format_RSUD_2 = new ol.format.GeoJSON();
var features_RSUD_2 = format_RSUD_2.readFeatures(json_RSUD_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSUD_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSUD_2.addFeatures(features_RSUD_2);
var lyr_RSUD_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSUD_2, 
                style: style_RSUD_2,
                popuplayertitle: 'RSUD',
                interactive: true,
                title: '<img src="styles/legend/RSUD_2.png" /> RSUD'
            });
var format_NAMAJALAN_3 = new ol.format.GeoJSON();
var features_NAMAJALAN_3 = format_NAMAJALAN_3.readFeatures(json_NAMAJALAN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NAMAJALAN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NAMAJALAN_3.addFeatures(features_NAMAJALAN_3);
var lyr_NAMAJALAN_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NAMAJALAN_3, 
                style: style_NAMAJALAN_3,
                popuplayertitle: 'NAMA JALAN',
                interactive: true,
                title: '<img src="styles/legend/NAMAJALAN_3.png" /> NAMA JALAN'
            });
var format_jalanarteri_4 = new ol.format.GeoJSON();
var features_jalanarteri_4 = format_jalanarteri_4.readFeatures(json_jalanarteri_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanarteri_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanarteri_4.addFeatures(features_jalanarteri_4);
var lyr_jalanarteri_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalanarteri_4, 
                style: style_jalanarteri_4,
                popuplayertitle: 'jalanarteri',
                interactive: true,
                title: '<img src="styles/legend/jalanarteri_4.png" /> jalanarteri'
            });
var format_jalankolektor_5 = new ol.format.GeoJSON();
var features_jalankolektor_5 = format_jalankolektor_5.readFeatures(json_jalankolektor_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalankolektor_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalankolektor_5.addFeatures(features_jalankolektor_5);
var lyr_jalankolektor_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalankolektor_5, 
                style: style_jalankolektor_5,
                popuplayertitle: 'jalankolektor',
                interactive: true,
                title: '<img src="styles/legend/jalankolektor_5.png" /> jalankolektor'
            });
var format_jalanlokal_6 = new ol.format.GeoJSON();
var features_jalanlokal_6 = format_jalanlokal_6.readFeatures(json_jalanlokal_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanlokal_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanlokal_6.addFeatures(features_jalanlokal_6);
var lyr_jalanlokal_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalanlokal_6, 
                style: style_jalanlokal_6,
                popuplayertitle: 'jalanlokal',
                interactive: true,
                title: '<img src="styles/legend/jalanlokal_6.png" /> jalanlokal'
            });
var format_SIMPANGANBATASSEGMEN_7 = new ol.format.GeoJSON();
var features_SIMPANGANBATASSEGMEN_7 = format_SIMPANGANBATASSEGMEN_7.readFeatures(json_SIMPANGANBATASSEGMEN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIMPANGANBATASSEGMEN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SIMPANGANBATASSEGMEN_7.addFeatures(features_SIMPANGANBATASSEGMEN_7);
var lyr_SIMPANGANBATASSEGMEN_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SIMPANGANBATASSEGMEN_7, 
                style: style_SIMPANGANBATASSEGMEN_7,
                popuplayertitle: 'SIMPANGAN BATAS SEGMEN',
                interactive: true,
                title: '<img src="styles/legend/SIMPANGANBATASSEGMEN_7.png" /> SIMPANGAN BATAS SEGMEN'
            });
var format_BLACKLINKSHP_8 = new ol.format.GeoJSON();
var features_BLACKLINKSHP_8 = format_BLACKLINKSHP_8.readFeatures(json_BLACKLINKSHP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BLACKLINKSHP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BLACKLINKSHP_8.addFeatures(features_BLACKLINKSHP_8);
var lyr_BLACKLINKSHP_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BLACKLINKSHP_8, 
                style: style_BLACKLINKSHP_8,
                popuplayertitle: 'BLACK LINK SHP',
                interactive: true,
    title: 'BLACK LINK SHP<br />\
    <img src="styles/legend/BLACKLINKSHP_8_0.png" /> JALAN RAYA BANJAR-PANGANDARAN<br />\
    <img src="styles/legend/BLACKLINKSHP_8_1.png" /> JALAN RAYA CIJULANG<br />\
    <img src="styles/legend/BLACKLINKSHP_8_2.png" /> JALAN RAYA PANGANDARAN-KALIPUCANG<br />' });
var format_BLACKAREA2_9 = new ol.format.GeoJSON();
var features_BLACKAREA2_9 = format_BLACKAREA2_9.readFeatures(json_BLACKAREA2_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BLACKAREA2_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BLACKAREA2_9.addFeatures(features_BLACKAREA2_9);
var lyr_BLACKAREA2_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BLACKAREA2_9, 
                style: style_BLACKAREA2_9,
                popuplayertitle: 'BLACK AREA 2',
                interactive: true,
                title: '<img src="styles/legend/BLACKAREA2_9.png" /> BLACK AREA 2'
            });
var format_BLACKSPOT_10 = new ol.format.GeoJSON();
var features_BLACKSPOT_10 = format_BLACKSPOT_10.readFeatures(json_BLACKSPOT_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BLACKSPOT_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BLACKSPOT_10.addFeatures(features_BLACKSPOT_10);
var lyr_BLACKSPOT_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BLACKSPOT_10, 
                style: style_BLACKSPOT_10,
                popuplayertitle: 'BLACKSPOT',
                interactive: true,
                title: '<img src="styles/legend/BLACKSPOT_10.png" /> BLACKSPOT'
            });
var format_HAZARDDANBLACKSPOT_11 = new ol.format.GeoJSON();
var features_HAZARDDANBLACKSPOT_11 = format_HAZARDDANBLACKSPOT_11.readFeatures(json_HAZARDDANBLACKSPOT_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HAZARDDANBLACKSPOT_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HAZARDDANBLACKSPOT_11.addFeatures(features_HAZARDDANBLACKSPOT_11);
var lyr_HAZARDDANBLACKSPOT_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HAZARDDANBLACKSPOT_11, 
                style: style_HAZARDDANBLACKSPOT_11,
                popuplayertitle: 'HAZARD DAN BLACK SPOT',
                interactive: true,
                title: '<img src="styles/legend/HAZARDDANBLACKSPOT_11.png" /> HAZARD DAN BLACK SPOT'
            });
var format_Hazard_12 = new ol.format.GeoJSON();
var features_Hazard_12 = format_Hazard_12.readFeatures(json_Hazard_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hazard_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hazard_12.addFeatures(features_Hazard_12);
var lyr_Hazard_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hazard_12, 
                style: style_Hazard_12,
                popuplayertitle: 'Hazard ',
                interactive: true,
                title: '<img src="styles/legend/Hazard_12.png" /> Hazard '
            });
var format_PUSKESMAS_13 = new ol.format.GeoJSON();
var features_PUSKESMAS_13 = format_PUSKESMAS_13.readFeatures(json_PUSKESMAS_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUSKESMAS_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUSKESMAS_13.addFeatures(features_PUSKESMAS_13);
var lyr_PUSKESMAS_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUSKESMAS_13, 
                style: style_PUSKESMAS_13,
                popuplayertitle: 'PUSKESMAS',
                interactive: true,
                title: '<img src="styles/legend/PUSKESMAS_13.png" /> PUSKESMAS'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_KECAMATAN_1.setVisible(true);lyr_RSUD_2.setVisible(true);lyr_NAMAJALAN_3.setVisible(true);lyr_jalanarteri_4.setVisible(true);lyr_jalankolektor_5.setVisible(true);lyr_jalanlokal_6.setVisible(true);lyr_SIMPANGANBATASSEGMEN_7.setVisible(true);lyr_BLACKLINKSHP_8.setVisible(true);lyr_BLACKAREA2_9.setVisible(true);lyr_BLACKSPOT_10.setVisible(true);lyr_HAZARDDANBLACKSPOT_11.setVisible(true);lyr_Hazard_12.setVisible(true);lyr_PUSKESMAS_13.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_KECAMATAN_1,lyr_RSUD_2,lyr_NAMAJALAN_3,lyr_jalanarteri_4,lyr_jalankolektor_5,lyr_jalanlokal_6,lyr_SIMPANGANBATASSEGMEN_7,lyr_BLACKLINKSHP_8,lyr_BLACKAREA2_9,lyr_BLACKSPOT_10,lyr_HAZARDDANBLACKSPOT_11,lyr_Hazard_12,lyr_PUSKESMAS_13];
lyr_KECAMATAN_1.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'Jumlah Kejadian': 'Jumlah Kejadian', 'Jumlah Korban': 'Jumlah Korban', 'MD': 'MD', 'LB': 'LB', 'LR': 'LR', });
lyr_RSUD_2.set('fieldAliases', {'NO': 'NO', 'Nama Rumah': 'Nama Rumah', 'Alamat': 'Alamat', 'Status RS': 'Status RS', 'Direktur': 'Direktur', 'NO_1': 'NO_1', 'Nama Labor': 'Nama Labor', 'Titik Koor': 'Titik Koor', 'field_9': 'field_9', });
lyr_NAMAJALAN_3.set('fieldAliases', {'Status_Jln': 'Status_Jln', 'Nama_Jln': 'Nama_Jln', 'Fungsi_Jln': 'Fungsi_Jln', 'SumberData': 'SumberData', 'Pjg_Jln_M': 'Pjg_Jln_M', 'Shape_Leng': 'Shape_Leng', 'layer': 'layer', 'path': 'path', });
lyr_jalanarteri_4.set('fieldAliases', {'Status_Jln': 'Status_Jln', 'Nama_Jln': 'Nama_Jln', 'Fungsi_Jln': 'Fungsi_Jln', 'SumberData': 'SumberData', 'Pjg_Jln_M': 'Pjg_Jln_M', 'Shape_Leng': 'Shape_Leng', });
lyr_jalankolektor_5.set('fieldAliases', {'Status_Jln': 'Status_Jln', 'Nama_Jln': 'Nama_Jln', 'Fungsi_Jln': 'Fungsi_Jln', 'SumberData': 'SumberData', 'Pjg_Jln_M': 'Pjg_Jln_M', 'Shape_Leng': 'Shape_Leng', });
lyr_jalanlokal_6.set('fieldAliases', {'Status_Jln': 'Status_Jln', 'Nama_Jln': 'Nama_Jln', 'Fungsi_Jln': 'Fungsi_Jln', 'SumberData': 'SumberData', 'Pjg_Jln_M': 'Pjg_Jln_M', 'Shape_Leng': 'Shape_Leng', });
lyr_SIMPANGANBATASSEGMEN_7.set('fieldAliases', {'No': 'No', 'Daerah Raw': 'Daerah Raw', 'Titik Koor': 'Titik Koor', 'field_4': 'field_4', });
lyr_BLACKLINKSHP_8.set('fieldAliases', {'id': 'id', 'NAMA JALAN': 'NAMA JALAN', 'PANJANG M': 'PANJANG M', });
lyr_BLACKAREA2_9.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'DESA': 'DESA', 'NAMA AREA': 'NAMA AREA', 'BlackLink': 'BlackLink', 'BlackSpot': 'BlackSpot', });
lyr_BLACKSPOT_10.set('fieldAliases', {'NO': 'NO', 'TGL/BLN/TH': 'TGL/BLN/TH', 'WAKTU (WIB': 'WAKTU (WIB', 'KENDARAAN': 'KENDARAAN', 'TIPE TABRA': 'TIPE TABRA', 'PENYEBAB K': 'PENYEBAB K', 'MD': 'MD', 'LB': 'LB', 'LR': 'LR', 'KRONOLOGI': 'KRONOLOGI', 'TITIK KOOR': 'TITIK KOOR', 'field_12': 'field_12', });
lyr_HAZARDDANBLACKSPOT_11.set('fieldAliases', {'No': 'No', 'Nama': 'Nama', 'Koordinat': 'Koordinat', 'Uraian Hazard': 'Uraian Hazard', 'Risiko': 'Risiko', 'Jenis Bahaya': 'Jenis Bahaya', 'Faskes Terdekat': 'Faskes Terdekat', 'Jarak Faskes Terdekat': 'Jarak Faskes Terdekat', 'Maps Faskes Terdekat': 'Maps Faskes Terdekat', });
lyr_Hazard_12.set('fieldAliases', {'No': 'No', 'Nama': 'Nama', 'Koordinat': 'Koordinat', 'Uraian Haz': 'Uraian Haz', 'Risiko': 'Risiko', 'Jenis Bahaya': 'Jenis Bahaya', 'Faskes Terdekat': 'Faskes Terdekat', 'Jarak Faskes(km)': 'Jarak Faskes(km)', 'Maps Faske': 'Maps Faske', });
lyr_PUSKESMAS_13.set('fieldAliases', {'NO': 'NO', 'Nama Puskemas': 'Nama Puskemas', 'Kabupaten': 'Kabupaten', 'Alamat Puskesmas': 'Alamat Puskesmas', 'Jenis Layanan': 'Jenis Layanan', 'Jumlah Tempat': 'Jumlah Tempat', 'Jumlah Ambulans': 'Jumlah Ambulans', 'Titik Koordinat': 'Titik Koordinat', 'field_9': 'field_9', 'Foto': 'Foto', });
lyr_KECAMATAN_1.set('fieldImages', {'PROVINSI': 'TextEdit', 'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'Jumlah Kejadian': 'TextEdit', 'Jumlah Korban': 'TextEdit', 'MD': 'TextEdit', 'LB': 'TextEdit', 'LR': 'TextEdit', });
lyr_RSUD_2.set('fieldImages', {'NO': 'CheckBox', 'Nama Rumah': 'TextEdit', 'Alamat': 'TextEdit', 'Status RS': 'TextEdit', 'Direktur': 'TextEdit', 'NO_1': 'CheckBox', 'Nama Labor': 'TextEdit', 'Titik Koor': 'TextEdit', 'field_9': 'TextEdit', });
lyr_NAMAJALAN_3.set('fieldImages', {'Status_Jln': '', 'Nama_Jln': '', 'Fungsi_Jln': '', 'SumberData': '', 'Pjg_Jln_M': '', 'Shape_Leng': '', 'layer': '', 'path': '', });
lyr_jalanarteri_4.set('fieldImages', {'Status_Jln': 'TextEdit', 'Nama_Jln': 'TextEdit', 'Fungsi_Jln': 'TextEdit', 'SumberData': 'TextEdit', 'Pjg_Jln_M': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_jalankolektor_5.set('fieldImages', {'Status_Jln': 'TextEdit', 'Nama_Jln': 'TextEdit', 'Fungsi_Jln': 'TextEdit', 'SumberData': 'TextEdit', 'Pjg_Jln_M': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_jalanlokal_6.set('fieldImages', {'Status_Jln': 'TextEdit', 'Nama_Jln': 'TextEdit', 'Fungsi_Jln': 'TextEdit', 'SumberData': 'TextEdit', 'Pjg_Jln_M': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_SIMPANGANBATASSEGMEN_7.set('fieldImages', {'No': 'TextEdit', 'Daerah Raw': 'TextEdit', 'Titik Koor': 'TextEdit', 'field_4': 'TextEdit', });
lyr_BLACKLINKSHP_8.set('fieldImages', {'id': 'TextEdit', 'NAMA JALAN': 'TextEdit', 'PANJANG M': 'TextEdit', });
lyr_BLACKAREA2_9.set('fieldImages', {'OBJECTID_1': 'Range', 'DESA': 'TextEdit', 'NAMA AREA': '', 'BlackLink': '', 'BlackSpot': '', });
lyr_BLACKSPOT_10.set('fieldImages', {'NO': 'TextEdit', 'TGL/BLN/TH': 'TextEdit', 'WAKTU (WIB': 'TextEdit', 'KENDARAAN': 'TextEdit', 'TIPE TABRA': 'TextEdit', 'PENYEBAB K': 'TextEdit', 'MD': 'TextEdit', 'LB': 'TextEdit', 'LR': 'TextEdit', 'KRONOLOGI': 'TextEdit', 'TITIK KOOR': 'TextEdit', 'field_12': 'TextEdit', });
lyr_HAZARDDANBLACKSPOT_11.set('fieldImages', {'No': 'TextEdit', 'Nama': 'TextEdit', 'Koordinat': 'TextEdit', 'Uraian Hazard': 'TextEdit', 'Risiko': 'TextEdit', 'Jenis Bahaya': 'TextEdit', 'Faskes Terdekat': 'TextEdit', 'Jarak Faskes Terdekat': 'TextEdit', 'Maps Faskes Terdekat': 'TextEdit', });
lyr_Hazard_12.set('fieldImages', {'No': 'TextEdit', 'Nama': 'TextEdit', 'Koordinat': 'TextEdit', 'Uraian Haz': 'TextEdit', 'Risiko': 'TextEdit', 'Jenis Bahaya': 'TextEdit', 'Faskes Terdekat': 'TextEdit', 'Jarak Faskes(km)': 'TextEdit', 'Maps Faske': 'TextEdit', });
lyr_PUSKESMAS_13.set('fieldImages', {'NO': 'TextEdit', 'Nama Puskemas': 'TextEdit', 'Kabupaten': 'TextEdit', 'Alamat Puskesmas': 'TextEdit', 'Jenis Layanan': 'TextEdit', 'Jumlah Tempat': 'TextEdit', 'Jumlah Ambulans': 'TextEdit', 'Titik Koordinat': 'TextEdit', 'field_9': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_KECAMATAN_1.set('fieldLabels', {'PROVINSI': 'inline label - visible with data', 'KABUPATEN': 'inline label - visible with data', 'KECAMATAN': 'inline label - visible with data', 'Jumlah Kejadian': 'inline label - visible with data', 'Jumlah Korban': 'inline label - visible with data', 'MD': 'inline label - visible with data', 'LB': 'inline label - visible with data', 'LR': 'inline label - visible with data', });
lyr_RSUD_2.set('fieldLabels', {'NO': 'inline label - visible with data', 'Nama Rumah': 'inline label - visible with data', 'Alamat': 'inline label - visible with data', 'Status RS': 'inline label - visible with data', 'Direktur': 'inline label - visible with data', 'NO_1': 'inline label - visible with data', 'Nama Labor': 'inline label - visible with data', 'Titik Koor': 'inline label - visible with data', 'field_9': 'inline label - visible with data', });
lyr_NAMAJALAN_3.set('fieldLabels', {'Status_Jln': 'inline label - visible with data', 'Nama_Jln': 'inline label - visible with data', 'Fungsi_Jln': 'inline label - visible with data', 'SumberData': 'inline label - visible with data', 'Pjg_Jln_M': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'path': 'inline label - visible with data', });
lyr_jalanarteri_4.set('fieldLabels', {'Status_Jln': 'inline label - visible with data', 'Nama_Jln': 'inline label - visible with data', 'Fungsi_Jln': 'inline label - visible with data', 'SumberData': 'inline label - visible with data', 'Pjg_Jln_M': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', });
lyr_jalankolektor_5.set('fieldLabels', {'Status_Jln': 'inline label - visible with data', 'Nama_Jln': 'inline label - visible with data', 'Fungsi_Jln': 'inline label - visible with data', 'SumberData': 'inline label - visible with data', 'Pjg_Jln_M': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', });
lyr_jalanlokal_6.set('fieldLabels', {'Status_Jln': 'inline label - visible with data', 'Nama_Jln': 'inline label - visible with data', 'Fungsi_Jln': 'inline label - visible with data', 'SumberData': 'inline label - visible with data', 'Pjg_Jln_M': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', });
lyr_SIMPANGANBATASSEGMEN_7.set('fieldLabels', {'No': 'inline label - visible with data', 'Daerah Raw': 'inline label - visible with data', 'Titik Koor': 'inline label - visible with data', 'field_4': 'inline label - visible with data', });
lyr_BLACKLINKSHP_8.set('fieldLabels', {'id': 'inline label - visible with data', 'NAMA JALAN': 'inline label - visible with data', 'PANJANG M': 'inline label - visible with data', });
lyr_BLACKAREA2_9.set('fieldLabels', {'OBJECTID_1': 'inline label - visible with data', 'DESA': 'inline label - visible with data', 'NAMA AREA': 'inline label - visible with data', 'BlackLink': 'inline label - visible with data', 'BlackSpot': 'inline label - visible with data', });
lyr_BLACKSPOT_10.set('fieldLabels', {'NO': 'inline label - visible with data', 'TGL/BLN/TH': 'inline label - visible with data', 'WAKTU (WIB': 'inline label - visible with data', 'KENDARAAN': 'inline label - visible with data', 'TIPE TABRA': 'inline label - visible with data', 'PENYEBAB K': 'inline label - visible with data', 'MD': 'inline label - visible with data', 'LB': 'inline label - visible with data', 'LR': 'inline label - visible with data', 'KRONOLOGI': 'inline label - visible with data', 'TITIK KOOR': 'inline label - visible with data', 'field_12': 'inline label - visible with data', });
lyr_HAZARDDANBLACKSPOT_11.set('fieldLabels', {'No': 'inline label - visible with data', 'Nama': 'inline label - visible with data', 'Koordinat': 'inline label - visible with data', 'Uraian Hazard': 'inline label - visible with data', 'Risiko': 'inline label - visible with data', 'Jenis Bahaya': 'inline label - visible with data', 'Faskes Terdekat': 'inline label - visible with data', 'Jarak Faskes Terdekat': 'inline label - visible with data', 'Maps Faskes Terdekat': 'inline label - visible with data', });
lyr_Hazard_12.set('fieldLabels', {'No': 'inline label - visible with data', 'Nama': 'inline label - visible with data', 'Koordinat': 'inline label - visible with data', 'Uraian Haz': 'inline label - visible with data', 'Risiko': 'inline label - visible with data', 'Jenis Bahaya': 'inline label - visible with data', 'Faskes Terdekat': 'inline label - visible with data', 'Jarak Faskes(km)': 'inline label - visible with data', 'Maps Faske': 'inline label - visible with data', });
lyr_PUSKESMAS_13.set('fieldLabels', {'NO': 'inline label - visible with data', 'Nama Puskemas': 'inline label - visible with data', 'Kabupaten': 'inline label - visible with data', 'Alamat Puskesmas': 'inline label - visible with data', 'Jenis Layanan': 'inline label - visible with data', 'Jumlah Tempat': 'inline label - visible with data', 'Jumlah Ambulans': 'inline label - visible with data', 'Titik Koordinat': 'inline label - visible with data', 'field_9': 'inline label - visible with data', 'Foto': 'inline label - visible with data', });
lyr_PUSKESMAS_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});