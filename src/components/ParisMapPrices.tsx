import { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Prix au m² mis à jour pour chaque arrondissement de Paris (2025)
const priceData: { [key: number]: { price: number; label: string } } = {
  1: { price: 15800, label: '1er' },
  2: { price: 13200, label: '2ème' },
  3: { price: 12500, label: '3ème' },
  4: { price: 14800, label: '4ème' },
  5: { price: 13900, label: '5ème' },
  6: { price: 15200, label: '6ème' },
  7: { price: 14900, label: '7ème' },
  8: { price: 13700, label: '8ème' },
  9: { price: 11800, label: '9ème' },
  10: { price: 10900, label: '10ème' },
  11: { price: 11200, label: '11ème' },
  12: { price: 10800, label: '12ème' },
  13: { price: 10200, label: '13ème' },
  14: { price: 11500, label: '14ème' },
  15: { price: 11900, label: '15ème' },
  16: { price: 13400, label: '16ème' },
  17: { price: 11600, label: '17ème' },
  18: { price: 10500, label: '18ème' },
  19: { price: 9800, label: '19ème' },
  20: { price: 10100, label: '20ème' },
};

const getColor = (price: number) => {
  if (price >= 15000) return '#8B4513';
  if (price >= 13000) return '#A0522D';
  if (price >= 11000) return '#CD853F';
  if (price >= 10000) return '#DEB887';
  return '#F5DEB3';
};

// Component to add GeoJSON layer using native Leaflet API
const GeoJSONLayer = ({ data }: { data: any }) => {
  const map = useMap();
  const layerRef = useRef<L.GeoJSON | null>(null);

  useEffect(() => {
    if (!data || !map) return;

    // Remove existing layer if any
    if (layerRef.current) {
      map.removeLayer(layerRef.current);
    }

    // Create new GeoJSON layer using native Leaflet
    const geoJsonLayer = L.geoJSON(data, {
      style: (feature) => {
        const arrondissement = feature?.properties?.c_ar;
        const priceInfo = priceData[arrondissement];
        const price = priceInfo ? priceInfo.price : 0;

        return {
          fillColor: getColor(price),
          weight: 2,
          opacity: 1,
          color: 'white',
          fillOpacity: 0.7,
        };
      },
      onEachFeature: (feature, layer) => {
        const arrondissement = feature.properties.c_ar;
        const priceInfo = priceData[arrondissement];

        if (priceInfo) {
          const formattedPrice = priceInfo.price.toLocaleString('fr-FR');
          layer.bindPopup(`
            <div style="font-family: sans-serif;">
              <strong style="font-size: 1.1em;">Paris ${priceInfo.label}</strong><br/>
              <span style="color: #8B4513; font-weight: 600; font-size: 1.2em;">${formattedPrice} €/m²</span>
            </div>
          `);

          layer.on({
            mouseover: (e) => {
              const target = e.target;
              target.setStyle({
                weight: 3,
                color: '#8B4513',
                fillOpacity: 0.9,
              });
            },
            mouseout: (e) => {
              geoJsonLayer.resetStyle(e.target);
            },
          });
        }
      },
    });

    geoJsonLayer.addTo(map);
    layerRef.current = geoJsonLayer;

    return () => {
      if (layerRef.current) {
        map.removeLayer(layerRef.current);
      }
    };
  }, [data, map]);

  return null;
};

export const ParisMapPrices = () => {
  const [geoData, setGeoData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://capgeo2.paris.fr/opendata/rest/services/DU/DU_Arrondissement/MapServer/0/query?where=1%3D1&outFields=L_AR,C_AR&outSR=4326&f=geojson'
        );
        const data = await response.json();
        setGeoData(data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors du chargement des données:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-[500px] rounded-[18px] bg-card border border-border flex items-center justify-center">
        <div className="text-sm text-muted-foreground">Chargement de la carte...</div>
      </div>
    );
  }

  if (!geoData) {
    return (
      <div className="w-full h-[500px] rounded-[18px] bg-card border border-border flex items-center justify-center">
        <div className="text-sm text-muted-foreground">Erreur lors du chargement de la carte</div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="rounded-[18px] overflow-hidden border border-border shadow-[0_10px_25px_rgba(0,0,0,0.04)]">
        <MapContainer
          center={[48.8566, 2.3522]}
          zoom={12}
          style={{ height: '500px', width: '100%' }}
          className="z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSONLayer data={geoData} />
        </MapContainer>
      </div>

      {/* Légende */}
      <div className="mt-4 rounded-[12px] bg-card border border-border p-4">
        <div className="text-xs font-semibold mb-3">Légende - Prix au m² (2025)</div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: '#F5DEB3' }}></div>
            <span className="text-muted-foreground">{'< 10 000 €'}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: '#DEB887' }}></div>
            <span className="text-muted-foreground">10 000 - 11 000 €</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: '#CD853F' }}></div>
            <span className="text-muted-foreground">11 000 - 13 000 €</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: '#A0522D' }}></div>
            <span className="text-muted-foreground">13 000 - 15 000 €</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: '#8B4513' }}></div>
            <span className="text-muted-foreground">{'> 15 000 €'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
