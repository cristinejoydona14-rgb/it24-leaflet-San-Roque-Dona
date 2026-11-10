// Center map on Barangay San Roque, Sumilao
var centerLat = 8.3317;
var centerLng = 124.9349;

var map = L.map("map").setView([centerLat, centerLng], 16);

// OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// MARKER 1: Barangay San Roque
var sanRoque = L.marker([8.3309, 124.9362]).addTo(map);

sanRoque.bindPopup(`
    <h3>Barangay San Roque</h3>
    <p>diri ang balay ni joy</p>
`);

// MARKER 2: San Roque Elementary School
var school = L.marker([8.32964, 124.9332]).addTo(map);

school.bindPopup(`
    <h3>San Roque Elementary School</h3>
    <p>diri nag graduate si joy sa elementary</p>
`);

// MARKER 3: San Roque SDA Church
// Approximate location; verify on the map before submission.
var church = L.marker([8.3325, 124.937]).addTo(map);

church.bindPopup(`
    <h3>San Roque Seventh-day Adventist Church</h3>
    <p>silingan ni joy nga simbahan pero dili siya SDA</p>
`);

// 500-meter radius circle
var circle = L.circle([centerLat, centerLng], {
  color: "blue",
  fillColor: "#ff3370",
  fillOpacity: 0.2,
  radius: 500,
}).addTo(map);

circle.bindPopup(`
    <h3>500-Meter Radius</h3>
    <p>This circle covers a 500-meter radius
    around the San Roque reference point.</p>
`);

// Display coordinates when map is clicked
map.on("click", function (e) {
  var lat = e.latlng.lat.toFixed(6);
  var lng = e.latlng.lng.toFixed(6);

  document.getElementById("coordinates").innerHTML =
    "Latitude: " + lat + " | Longitude: " + lng;

  L.popup()
    .setLatLng(e.latlng)
    .setContent(
      "<b>Selected Location</b><br>" +
        "Latitude: " +
        lat +
        "<br>" +
        "Longitude: " +
        lng,
    )
    .openOn(map);
});
