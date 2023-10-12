//Import de la variable L de leaflet
import * as L from 'leaflet';
// Fonction pour initialiser la carte
export function initializeMap() {
    var map = L.map('map', {
        zoomSnap: 0.25,
        zoomDelta: 0.51,
        wheelPxPerZoomLevel: 600
    });
    return map;
}

// Fonction pour ajouter une image à la carte
export function addImageToMap(map) {
    var imageUrl = 'https://raw.githubusercontent.com/Crispyray/crispyray.github.io/main/images/alarian.jpg';
    var imageBounds = [[-8.7, -6], [8.7, 6]];
    var image = L.imageOverlay(imageUrl, imageBounds).addTo(map);
}

// Fonction pour ajouter des points d'intérêt
export function addPointsOfInterest(map) {
    var pointsOfInterest = [
        {
            name: "Point 1",
            latlng: [0.5, 2.0],
            description: "Informations sur le point 1."
        },
        // Ajoutez d'autres points d'intérêt ici...
    ];

    pointsOfInterest.forEach(function(point) {
        var marker = L.marker(point.latlng).addTo(map);
        marker.bindTooltip(point.name).openTooltip();
        marker.bindPopup(point.description);
    });
}

// Fonction pour afficher la carte
export function displayMap() {
    var map = initializeMap();
    addImageToMap(map);
    addPointsOfInterest(map);

    var coordinatesDiv = document.getElementById('coordinates');
    map.on('mousemove', function(event) {
        var lat = event.latlng.lat.toFixed(6);
        var lng = event.latlng.lng.toFixed(6);
        coordinatesDiv.innerHTML = 'Coordonnées de la souris : ' + lat + ', ' + lng;
    });

    map.fitBounds(image.getBounds());
    image.addTo(map);
    map.setZoom(6.25);
}
