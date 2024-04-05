//need to add an eventListner for join now bottom//localstorage etc.,
mapsApiKey = 'AIzaSyCu0uB6GfyMbNM0b4YsVahS0NSJ6-oZtx0'

// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 30.288501739501953, lng: -97.70755767822266};
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 10,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  const elements = document.querySelectorAll('.location');
    Array.from(elements).forEach((element, index) => {
    // conditional logic here.. access element
        lat = element.getAttribute('data-lat')
        lon = element.getAttribute('data-lon')
        var myLatLng = new google.maps.LatLng(lat, lon);
        var marker = new AdvancedMarkerElement({
            position: myLatLng,
            map: map,
            title: "Your Fitness Pal",
        });
    })
}

function panToLocation() {
    var coords = new google.maps.LatLng($(this).data('lat'), $(this).data('lon'));
    map.panTo(coords);
    map.setZoom(13);
}

initMap();

$("#locations").on("click", ".location", panToLocation)


