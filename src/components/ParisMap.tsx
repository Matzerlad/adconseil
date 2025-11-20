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

    // Prix au m² - Sources : Notaires T2 2025 pour Paris ; MeilleursAgents / Le Figaro pour communes proches
    const prixM2: Record<string, number> = {
      // Paris arrondissements - données officielles Notaires T2 2025
      // Source: "Historique des prix au m² standardisés des appartements anciens à Paris par arrondissement"
      "Paris-1": 11830,
      "Paris-2": 10870,
      "Paris-3": 12760,
      "Paris-4": 12680,
      "Paris-5": 11350,
      "Paris-6": 13310,
      "Paris-7": 12830,
      "Paris-8": 11710,
      "Paris-9": 10110,
      "Paris-10": 8870,
      "Paris-11": 9290,
      "Paris-12": 8500,
      "Paris-13": 8500,
      "Paris-14": 9060,
      "Paris-15": 8880,
      "Paris-16": 10040,
      "Paris-17": 9280,
      "Paris-18": 8410,
      "Paris-19": 7430,
      "Paris-20": 8070,
      // Communes proches - MeilleursAgents / Le Figaro
      "Neuilly-sur-Seine": 10719,
      "Levallois-Perret": 8840,
      "Boulogne-Billancourt": 8611,
      "Courbevoie": 6445,
    };

    const prixSourceDate = "Sources : Notaires (T2 2025) pour arrondissements Paris ; MeilleursAgents / Le Figaro pour communes proches.";

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

    const formatPrice = (v: number | null | undefined): string => {
      if (!v) return "Donnée non disponible";
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
                weight: 1,
                opacity: 1,
                color: '#ffffff',
                fillOpacity: 0.75,
              };
            },
            onEachFeature: (feature, layer) => {
              const prix = prixM2[commune.nom];
              const name = feature.properties?.nom || commune.nom;
              
              // Log pour debug
              if (!prix) {
                console.log(`Prix manquant pour commune: ${name} (clé: ${commune.nom})`);
              }
              
              layer.bindPopup(`
                <div style="font-family: Inter, sans-serif; font-size: 0.9rem; padding: 4px;">
                  <strong style="color: #c6a667; font-size: 1rem;">${name}</strong><br>
                  <span style="color: #4b5563;">Prix moyen : </span>
                  <strong style="color: ${prix ? '#111827' : '#9ca3af'};">${formatPrice(prix)}</strong><br>
                  <small style="color: #6b7280; font-size: 0.75rem;">${prixSourceDate}</small>
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
        
        // Log pour voir la structure des données
        console.log('Premier feature de l\'API:', geojson.features[0]);
        
        L.geoJSON(geojson, {
          style: (feature) => {
            // Essayer plusieurs propriétés possibles
            const num = feature?.properties?.C_AR || 
                       feature?.properties?.c_ar || 
                       feature?.properties?.code || 
                       feature?.properties?.CODE ||
                       feature?.properties?.arr ||
                       null;
            
            console.log('Feature properties:', feature?.properties, 'num extrait:', num);
            
            const key = num ? `Paris-${num}` : null;
            const prix = key ? prixM2[key] : null;
            
            return {
              fillColor: getColor(prix),
              weight: 1,
              opacity: 1,
              color: '#ffffff',
              fillOpacity: 0.75,
            };
          },
          onEachFeature: (feature, layer) => {
            // Essayer plusieurs propriétés possibles
            const num = feature?.properties?.C_AR || 
                       feature?.properties?.c_ar || 
                       feature?.properties?.code || 
                       feature?.properties?.CODE ||
                       feature?.properties?.arr ||
                       null;
            
            const nameFromApi = feature?.properties?.L_AR || 
                               feature?.properties?.l_ar || 
                               feature?.properties?.nom ||
                               feature?.properties?.NOM ||
                               null;
            
            const key = num ? `Paris-${num}` : null;
            const prix = key ? prixM2[key] : null;
            const name = nameFromApi || (num ? `Paris ${num}ᵉ` : 'Paris (arrondissement inconnu)');
            
            // Log pour debug
            if (!prix || !num) {
              console.log(`Prix ou numéro manquant - Arrondissement: ${name}, num: ${num}, clé: ${key}, properties:`, feature.properties);
            }
            
            layer.bindPopup(`
              <div style="font-family: Inter, sans-serif; font-size: 0.9rem; padding: 4px;">
                <strong style="color: #c6a667; font-size: 1rem;">${name}</strong><br>
                <span style="color: #4b5563;">Prix moyen : </span>
                <strong style="color: ${prix ? '#111827' : '#9ca3af'};">${formatPrice(prix)}</strong><br>
                <small style="color: #6b7280; font-size: 0.75rem;">${prixSourceDate}</small>
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
        className="rounded-xl border border-border h-[680px] w-full"
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
        <small className="block mt-3 text-[0.65rem] text-muted-foreground leading-tight">
          Sources : Notaires (T2 2025) pour Paris ; MeilleursAgents / Le Figaro pour communes proches
        </small>
      </div>
    </div>
  );
};
