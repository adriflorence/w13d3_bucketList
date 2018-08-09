const country_borders = require('./country_borders.js');

const MapWrapper = function (element, lat, lng, zoom) {
  const osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const osm = new L.TileLayer(osmUrl);
  this.map = L.map(element).addLayer(osm).setView([lat, lng], zoom);
  countryLayers = L.geoJson(country_borders, {
    color: "black",
    "weight": 1,
}).addTo(this.map);
}

MapWrapper.prototype.colorCountry = function (selectedCountry) {
  countryLayers.eachLayer(function (layer) {
    if (layer.feature.id == selectedCountry.attributes.alpha.value) {
      layer.setStyle({fillColor: "red"});
    }
  });
};

module.exports = MapWrapper;
