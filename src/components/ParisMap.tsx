import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export const ParisMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialisation de la carte centrée sur Paris
    const map = L.map(mapRef.current).setView([48.864716, 2.349014], 12);
    mapInstanceRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Prix au m² - Estimations 2025 (sources: Notaires Grand Paris, Economie Matin, MediaSeine)
    const prixM2: Record<string, number> = {
      // Paris arrondissements - données actualisées 2025
      "Paris-1": 12440,
      "Paris-2": 11600,
      "Paris-3": 11820,
      "Paris-4": 12120,
      "Paris-5": 11340,
      "Paris-6": 13380,
      "Paris-7": 13410,
      "Paris-8": 10530,
      "Paris-9": 9770,
      "Paris-10": 8980,
      "Paris-11": 9470,
      "Paris-12": 8370,
      "Paris-13": 8350,
      "Paris-14": 8840,
      "Paris-15": 8900,
      "Paris-16": 10160,
      "Paris-17": 9260,
      "Paris-18": 8380,
      "Paris-19": 7530,
      "Paris-20": 8080,
      // Communes voisines
      "Neuilly-sur-Seine": 10713,
      "Levallois-Perret": 10608,
      "Boulogne-Billancourt": 8611,
      "Courbevoie": 7365,
    };

    const prixSourceDate = "Estimations 2025 – sources : Notaires Grand Paris, Economie Matin, MediaSeine";

    // Fonction pour obtenir une couleur selon le prix
    const getColor = (price: number | null): string => {
      if (!price) return '#71717a';
      return price > 13000 ? '#800026' :
             price > 12000 ? '#BD0026' :
             price > 10000 ? '#E31A1C' :
             price > 9000  ? '#FC4E2A' :
             price > 8000  ? '#FD8D3C' :
                             '#FED976';
    };

    const formatPrice = (v: number | null): string => {
      if (!v) return "N/A";
      return v.toLocaleString('fr-FR', { maximumFractionDigits: 0 }) + " €/m²";
    };

    // Fonction pour charger les communes voisines
    const loadCommunes = async () => {
      const communes = [
        { nom: "Neuilly-sur-Seine" },
        { nom: "Levallois-Perret" },
        { nom: "Boulogne-Billancourt" },
        { nom: "Courbevoie" }
      ];

      for (const commune of communes) {
        try {
          const url = `https://geo.api.gouv.fr/communes?nom=${encodeURIComponent(commune.nom)}&format=geojson&geometry=contour`;
          const response = await fetch(url);
          
          if (!response.ok) {
            console.warn('Erreur fetch commune', commune.nom, response.status);
            continue;
          }

          const geojson = await response.json();
          
          if (!geojson?.features?.length) {
            console.warn('Aucun contour trouvé pour', commune.nom);
            continue;
          }

          L.geoJSON(geojson, {
            style: () => {
              const prix = prixM2[commune.nom] || null;
              return {
                fillColor: getColor(prix),
                weight: 1.5,
                opacity: 1,
                color: 'rgba(255, 255, 255, 0.6)',
                dashArray: '2',
                fillOpacity: 0.65,
              };
            },
            onEachFeature: (feature, layer) => {
              const prix = prixM2[commune.nom];
              const name = feature.properties?.nom || commune.nom;
              
              layer.bindPopup(`
              <div style="font-family: Inter, sans-serif; font-size: 0.85rem;">
                <strong style="color: #c6a667; font-size: 0.95rem;">${name}</strong><br>
                <span style="color: #71717a;">Prix moyen : </span>
                <strong>${formatPrice(prix)}</strong><br>
                <small style="color: #a1a1aa; font-size: 0.75rem;">${prixSourceDate}</small>
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
                const prix = prixM2[commune.nom] || null;
                this.setStyle({
                  weight: 1.5,
                  color: 'rgba(255, 255, 255, 0.6)',
                  fillOpacity: 0.65,
                });
              });
            },
          }).addTo(map);
        } catch (err) {
          console.error("Erreur chargement commune", commune.nom, err);
        }
      }
    };

    // Charger les arrondissements de Paris
    const loadParis = async () => {
      try {
        const arcUrl = 'https://capgeo2.paris.fr/opendata/rest/services/DU/DU_Arrondissement/MapServer/0/query?where=1%3D1&outFields=L_AR,C_AR&outSR=4326&f=geojson';
        const response = await fetch(arcUrl);
        
        if (!response.ok) {
          console.warn('Impossible de charger arrondissements Paris :', response.status);
          return;
        }

        const geojson = await response.json();
        
        L.geoJSON(geojson, {
          style: (feature) => {
            const num = feature?.properties?.C_AR;
            const key = `Paris-${num}`;
            const prix = prixM2[key] || null;
            return {
              fillColor: getColor(prix),
              weight: 1.5,
              opacity: 1,
              color: 'rgba(255, 255, 255, 0.6)',
              dashArray: '2',
              fillOpacity: 0.65,
            };
          },
          onEachFeature: (feature, layer) => {
            const num = feature.properties.C_AR;
            const key = `Paris-${num}`;
            const prix = prixM2[key];
            const name = `Paris ${num}ᵉ`;
            
            layer.bindPopup(`
              <div style="font-family: Inter, sans-serif; font-size: 0.85rem;">
                <strong style="color: #c6a667; font-size: 0.95rem;">${name}</strong><br>
                <span style="color: #71717a;">Prix moyen : </span>
                <strong>${formatPrice(prix)}</strong><br>
                <small style="color: #a1a1aa; font-size: 0.75rem;">Sources : MeilleursAgents, Le Figaro, Notaires</small>
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
              this.setStyle({
                weight: 1.5,
                color: 'rgba(255, 255, 255, 0.6)',
                fillOpacity: 0.65,
              });
            });
          },
        }).addTo(map);
      } catch (err) {
        console.error("Erreur chargement arrondissements Paris:", err);
      }
    };

    // Charger les données
    loadParis();
    loadCommunes();

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
        className="rounded-xl border border-border h-[650px] w-full"
        style={{ background: 'hsl(var(--card))' }}
      />
      <div className="absolute bottom-4 right-4 bg-card/95 border border-border backdrop-blur-sm rounded-lg p-3 text-xs shadow-lg">
        <div className="font-medium text-foreground mb-2">Prix €/m²</div>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <div className="w-5 h-3 rounded" style={{ backgroundColor: '#800026' }}></div>
            <span className="text-muted-foreground">&gt; 13 000</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-3 rounded" style={{ backgroundColor: '#BD0026' }}></div>
            <span className="text-muted-foreground">12 000 - 13 000</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-3 rounded" style={{ backgroundColor: '#E31A1C' }}></div>
            <span className="text-muted-foreground">10 000 - 12 000</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-3 rounded" style={{ backgroundColor: '#FC4E2A' }}></div>
            <span className="text-muted-foreground">9 000 - 10 000</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-3 rounded" style={{ backgroundColor: '#FD8D3C' }}></div>
            <span className="text-muted-foreground">8 000 - 9 000</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-3 rounded" style={{ backgroundColor: '#FED976' }}></div>
            <span className="text-muted-foreground">&lt; 8 000</span>
          </div>
        </div>
      </div>
    </div>
  );
};
