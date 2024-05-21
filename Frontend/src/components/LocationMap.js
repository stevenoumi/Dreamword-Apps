import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../style/locationMap.css";
import L from "leaflet";
import { Button, Stack } from "@mui/material";

// Correct the default icon path issue with Leaflet
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

// Haversine formula to calculate the distance between two points
function haversineDistance(coords1, coords2) {
  const toRad = (x) => (x * Math.PI) / 180;
  const R = 6371; // Earth's radius in km

  const dLat = toRad(coords2.lat - coords1.lat);
  const dLon = toRad(coords2.lng - coords1.lng);
  const lat1 = toRad(coords1.lat);
  const lat2 = toRad(coords2.lat);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
  return R * c;
}

const LocationMap = ({ points }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [isSatelliteMode, setIsSatelliteMode] = useState(false);

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  const toggleSatelliteMode = () => {
    setIsSatelliteMode(!isSatelliteMode);
  };

  return (
    <Stack direction="column" className="locationmap-container">
        <Button 
        variant="contained"
        className="satellite-mode-button"
        onClick={toggleSatelliteMode}
      >
        {isSatelliteMode ? "MAP" : " Satellite"}
      </Button>
      <MapContainer
        center={[
          userLocation?.lat || 47.478419,
          userLocation?.lng || -0.563166,
        ]}
        zoom={6}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url={isSatelliteMode ? "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" : "https://tile.openstreetmap.org/{z}/{x}/{y}.png"}
          attribution={isSatelliteMode ? '&copy; <a href="https://www.arcgis.com/">Esri</a> contributors' : '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          }
        />
        {points.map((point, index) => (
          <Marker
            key={index}
            position={[point.lat, point.lng]}
            icon={DefaultIcon}
            eventHandlers={{
              add: (e) => {
                const marker = e.target;
                marker._icon.classList.add("huechange");
              },
            }}
          >
            <Popup>
              <Stack direction="column">
                <h2>{point.name}</h2>
                {userLocation && (
                  <p>
                    Distance: {haversineDistance(userLocation, point).toFixed(2)} km <br />
                    <Button
                      href={`https://www.google.com/maps/dir/${userLocation.lat},${userLocation.lng}/${point.lat},${point.lng}`}
                      className="cardirection-button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Consulter le trajet
                    </Button>
                  </p>
                )}
              </Stack>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Stack>
  );
};

export default LocationMap;
