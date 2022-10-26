//elements to update
const current_ip = document.getElementById("current_ip");
const current_town = document.getElementById("current_town");
const current_zone = document.getElementById("current_zone");
const current_isp = document.getElementById("current_isp");

//form elements
const entered_ip = document.getElementById("ip_address");
const search_btn = document.getElementById("search_btn");

//LEAFLET JS CODE
var map = L.map("map").setView([51.505, -0.09], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
//map.removeControl(map.zoomControl);


//Update marker
updateMarker = (update_marker = [37.40599, -122.078514]) => {
  map.setView(update_marker, 13);
  L.marker(update_marker).addTo(map);
};

//IP GEOLACTION API
const getInitialData = async () => {
  const response = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_gi8PCytGkbe2uyMxPjqVmgwfC90Pw&ipAddress=${entered_ip.value}`
  );
  const data = await response.json();
  current_ip.innerHTML = data.ip;
  current_town.innerHTML =
    data.location.city +
    " " +
    data.location.country +
    " " +
    data.location.postalCode;
  current_zone.innerHTML = data.location.timezone;
  current_isp.innerHTML = data.isp;
  console.log(data);
  updateMarker([data.location.lat, data.location.lng]);
};

//Execution
search_btn.addEventListener("click", getInitialData);
getInitialData();
