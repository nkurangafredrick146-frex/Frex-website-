'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix marker icons in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const researchSites = [
  { name: 'Kampala HQ', lat: 0.3136, lng: 32.5811, description: 'Main research center, quantum lab' },
  { name: 'Makerere University', lat: 0.3345, lng: 32.5684, description: 'Collaboration on doctrinal systems' },
  { name: 'Graphene Field Site', lat: 1.3733, lng: 32.2903, description: 'Materials testing in rural Uganda' },
  // add more
];

export default function ResearchMap() {
  return (
    <MapContainer center={[0.3136, 32.5811]} zoom={7} style={{ height: '500px', width: '100%' }} className="rounded-lg border border-cyan-500/20">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {researchSites.map((site, idx) => (
        <Marker key={idx} position={[site.lat, site.lng]}>
          <Popup>
            <strong>{site.name}</strong><br />
            {site.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
