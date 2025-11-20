import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export const ParisMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialisation de la carte centrée sur Paris
    const map = L.map(mapRef.current).setView([48.8566, 2.3522], 12);
    mapInstanceRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Prix au m² par arrondissement (données T1 2025)
    const prixM2: Record<string, number> = {
      "75": 12500,
      "1": 12500,
      "2": 11000,
      "3": 11400,
      "4": 13200,
      "5": 12000,
      "6": 13270,
      "7": 14000,
      "8": 11500,
      "9": 10600,
      "10": 9000,
      "11": 9800,
      "12": 8700,
      "13": 8500,
      "14": 9400,
      "15": 9300,
      "16": 10800,
      "17": 10000,
      "18": 8800,
      "19": 7530,
      "20": 8080,
    };

    // Fonction pour obtenir une couleur selon le prix
    const getColor = (d: number): string => {
      return d > 13000 ? '#c6a667' :
             d > 12000 ? '#d4b578' :
             d > 11000 ? '#e2c589' :
             d > 9000  ? '#f0d59a' :
             d > 8000  ? '#fde5ab' :
                         '#fef5dc';
    };

    // Requête à l'API ArcGIS REST pour obtenir les arrondissements
    const arcUrl = 'https://capgeo2.paris.fr/opendata/rest/services/DU/DU_Arrondissement/MapServer/0/query?where=1%3D1&outFields=L_AR,C_AR&outSR=4326&f=geojson';

    fetch(arcUrl)
      .then(response => response.json())
      .then(geojson => {
        L.geoJSON(geojson, {
          style: (feature) => {
            const num = feature?.properties?.C_AR;
            const p = prixM2[num] || 0;
            return {
              fillColor: getColor(p),
              weight: 1.5,
              opacity: 1,
              color: 'rgba(255, 255, 255, 0.6)',
              dashArray: '3',
              fillOpacity: 0.65,
            };
          },
          onEachFeature: (feature, layer) => {
            const num = feature.properties.C_AR;
            const prix = prixM2[num];
            const arrName = feature.properties.L_AR;
            
            layer.bindPopup(`
              <div style="font-family: Inter, sans-serif; font-size: 0.85rem;">
                <strong style="color: #c6a667; font-size: 0.95rem;">${arrName}</strong><br>
                <span style="color: #71717a;">Prix moyen : </span>
                <strong>${prix ? prix.toLocaleString('fr-FR') + ' €/m²' : 'N/A'}</strong>
              </div>
            `);

            // Hover effect
            layer.on('mouseover', function() {
              this.setStyle({
                weight: 2.5,
                color: '#c6a667',
                fillOpacity: 0.8,
              });
            });

            layer.on('mouseout', function() {
              const p = prixM2[num] || 0;
              this.setStyle({
                weight: 1.5,
                color: 'rgba(255, 255, 255, 0.6)',
                fillOpacity: 0.65,
              });
            });
          },
        }).addTo(map);
      })
      .catch(err => {
        console.error("Erreur chargement GeoJSON arrondissements:", err);
      });

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative">
      <div 
        ref={mapRef} 
        className="rounded-xl border border-border h-[400px] w-full"
        style={{ background: 'hsl(var(--card))' }}
      />
      <div className="absolute bottom-3 left-3 bg-card/95 border border-border backdrop-blur-sm rounded-lg p-3 text-xs">
        <div className="font-medium text-accent-soft mb-2">Prix au m²</div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="w-4 h-3 rounded" style={{ backgroundColor: '#c6a667' }}></div>
            <span className="text-muted-foreground">&gt; 13 000 €</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-3 rounded" style={{ backgroundColor: '#d4b578' }}></div>
            <span className="text-muted-foreground">12 000 - 13 000 €</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-3 rounded" style={{ backgroundColor: '#e2c589' }}></div>
            <span className="text-muted-foreground">11 000 - 12 000 €</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-3 rounded" style={{ backgroundColor: '#f0d59a' }}></div>
            <span className="text-muted-foreground">9 000 - 11 000 €</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-3 rounded" style={{ backgroundColor: '#fef5dc' }}></div>
            <span className="text-muted-foreground">&lt; 9 000 €</span>
          </div>
        </div>
      </div>
    </div>
  );
};
