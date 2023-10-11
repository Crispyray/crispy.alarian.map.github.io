//----map Module----//
// Fonction pour initialiser la carte
export function initializeMap() {
    const map = L.map('map', {
        zoomSnap: 0.25,
        zoomDelta: 0.51,
        wheelPxPerZoomLevel: 600
    });
    return map;
}

// Fonction pour ajouter une image à la carte
export function addImageToMap(map) {
    const imageUrl = 'https://raw.githubusercontent.com/Crispyray/crispyray.github.io/main/images/alarian.jpg';
    const imageBounds = [[-8.7, -6], [8.7, 6]];
    const image = L.imageOverlay(imageUrl, imageBounds).addTo(map);
}

// Fonction pour ajouter des points d'intérêt
export function addPointsOfInterest(map) {
    const pointsOfInterest = [
        {
            name: "Point 1",
            latlng: [0.5, 2.0],
            description: "Informations sur le point 1 avec une bannière d'en-tête."
        },
        // Ajoutez d'autres points d'intérêt ici...
    ];

    pointsOfInterest.forEach(function(point) {
        const marker = L.marker(point.latlng).addTo(map);
        marker.bindTooltip(point.name).openTooltip();
        marker.bindPopup(point.description);
    });
}

// Fonction pour afficher la carte
export function displayMap() {
    const map = initializeMap();
    addImageToMap(map);
    addPointsOfInterest(map);

    const coordinatesDiv = document.getElementById('coordinates');
    map.on('mousemove', function(event) {
        const lat = event.latlng.lat.toFixed(6);
        const lng = event.latlng.lng.toFixed(6);
        coordinatesDiv.innerHTML = 'Coordonnées de la souris : ' + lat + ', ' + lng;
    });

    L.control.scale({ imperial: false }).addTo(map);

    // Initialiser la fonction de mesure
    L.control.measure().addTo(map);

    // Ajustez ces valeurs en fonction de votre carte
    const imageBounds = [[-8.7, -6], [8.7, 6]];
    map.fitBounds(imageBounds);
    image.addTo(map);
    map.setZoom(6.25);
}


