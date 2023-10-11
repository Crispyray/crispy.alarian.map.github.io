////----MAIN----////
// Importer la bibliothèque Leaflet
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Importer la bibliothèque Leaflet Measure Control
import 'leaflet-measure';

// Importer le module de la carte
import { initializeMap, addImageToMap, addPointsOfInterest, displayMap } from './map';

// Appel de la fonction pour afficher la carte
displayMap();
