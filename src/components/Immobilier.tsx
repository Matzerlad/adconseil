import { useState } from "react";
import { toast } from "sonner";

interface Property {
  id: number;
  titre: string;
  ville: string;
  type: string;
  surface: number;
  prix: string;
  statut: string;
  tags: string[];
  meta: string;
}

export const Immobilier = () => {
  const [filterType, setFilterType] = useState("");
  const [filterVille, setFilterVille] = useState("");

  const properties: Property[] = [
    {
      id: 1,
      titre: "Appartement familial – Neuilly Saint-James",
      ville: "Neuilly-sur-Seine",
      type: "Appartement",
      surface: 115,
      prix: "1 590 000 €",
      statut: "À vendre",
      tags: ["Exclusivité", "Balcon", "Calme"],
      meta: "5 pièces • étage élevé avec balcon",
    },
    {
      id: 2,
      titre: "Appartement rénové – Paris 16e Foch",
      ville: "Paris 16e",
      type: "Appartement",
      surface: 82,
      prix: "1 090 000 €",
      statut: "À vendre",
      tags: ["Nouveauté", "Rénové"],
      meta: "3 pièces • immeuble haussmannien",
    },
    {
      id: 3,
      titre: "Bureaux lumineux – Boulogne Billancourt",
      ville: "Boulogne",
      type: "Bureau",
      surface: 145,
      prix: "Nous consulter",
      statut: "À louer",
      tags: ["Plateau", "Open-space"],
      meta: "Plateau modulable • proche transports",
    },
    {
      id: 4,
      titre: "Maison avec jardin – Neuilly-sur-Seine",
      ville: "Neuilly-sur-Seine",
      type: "Maison",
      surface: 190,
      prix: "2 750 000 €",
      statut: "À vendre",
      tags: ["Jardin", "Familiale", "Rare"],
      meta: "7 pièces • jardin privatif",
    },
    {
      id: 5,
      titre: "Appartement – Paris 16e Victor Hugo",
      ville: "Paris 16e",
      type: "Appartement",
      surface: 60,
      prix: "2 400 € / mois",
      statut: "À louer",
      tags: ["Meublé", "Pied-à-terre"],
      meta: "2 pièces • meublé • métro Victor Hugo",
    },
    {
      id: 6,
      titre: "Studio investissement – Boulogne",
      ville: "Boulogne",
      type: "Appartement",
      surface: 24,
      prix: "285 000 €",
      statut: "À vendre",
      tags: ["Investissement", "Locatif"],
      meta: "Studio • bon rendement locatif potentiel",
    },
  ];

  const filteredProperties = properties.filter((p) => {
    if (filterType && p.type !== filterType) return false;
    if (filterVille && p.ville !== filterVille) return false;
    return true;
  });

  const resetFilters = () => {
    setFilterType("");
    setFilterVille("");
  };

  return (
    <section id="immobilier" className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Immobilier</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Une vitrine dédiée à vos projets de vente et de location, inspirée des meilleures pratiques des agences
            parisiennes haut de gamme. Présentation des biens, estimation, accompagnement et accès à des opportunités
            ciblées.
          </p>
        </div>

        <div className="rounded-[18px] border border-border p-4 bg-card mb-8">
          <div className="inline-flex items-center gap-2 text-[11px] px-2 py-1 rounded-full border border-border/50 bg-muted/50 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
            <span>Vente & location</span>
          </div>
          <div className="text-sm font-medium mb-1">Immobilier d'exception à Neuilly & Paris Ouest</div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            L'agence AD Investissement Conseil propose des annonces de vente et de location immobilière, avec un focus
            sur les appartements, maisons et bureaux situés dans les quartiers les plus recherchés de l'Ouest parisien.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Nos biens</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Parcourez une sélection de biens représentatifs. Cette section pourra être reliée à un back-office ou à un
            flux externe pour une mise à jour automatique.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <div className="space-y-1">
              <label htmlFor="filter-type" className="text-xs text-muted-foreground">
                Type
              </label>
              <select
                id="filter-type"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="rounded-full border border-input px-3 py-1.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Tous</option>
                <option value="Appartement">Appartement</option>
                <option value="Maison">Maison</option>
                <option value="Bureau">Bureau</option>
              </select>
            </div>

            <div className="space-y-1">
              <label htmlFor="filter-ville" className="text-xs text-muted-foreground">
                Ville / secteur
              </label>
              <select
                id="filter-ville"
                value={filterVille}
                onChange={(e) => setFilterVille(e.target.value)}
                className="rounded-full border border-input px-3 py-1.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Tous</option>
                <option value="Neuilly-sur-Seine">Neuilly-sur-Seine</option>
                <option value="Paris 16e">Paris 16e</option>
                <option value="Boulogne">Boulogne</option>
              </select>
            </div>

            <button
              onClick={resetFilters}
              className="self-end px-4 py-1.5 rounded-full border border-border bg-background hover:bg-muted transition-colors text-sm"
            >
              Réinitialiser
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {filteredProperties.length === 0 ? (
              <p className="text-sm text-muted-foreground col-span-full">
                Aucun bien ne correspond à ces critères pour le moment.
              </p>
            ) : (
              filteredProperties.map((property) => (
                <div key={property.id} className="rounded-[18px] border border-border overflow-hidden bg-card">
                  <div
                    className="w-full h-44 bg-gradient-to-br from-muted/50 via-muted/30 to-muted/50"
                    style={{ backgroundImage: "linear-gradient(135deg, #f2f2f2 0%, #e6e6e6 50%, #f9f9f9 100%)" }}
                  ></div>
                  <div className="p-4 space-y-2">
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span>{property.ville}</span>
                      <span>{property.statut}</span>
                    </div>
                    <div className="text-sm font-medium">{property.titre}</div>
                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                      <span>{property.surface} m²</span>
                      <span>•</span>
                      <span>{property.meta}</span>
                      <span className="font-medium text-foreground">• {property.prix}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {property.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-[11px] px-2 py-0.5 rounded-full border border-border/50 bg-muted/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() =>
                        toast.success(`Intéressé par : ${property.titre}. Nous vous recontacterons rapidement !`)
                      }
                      className="w-full mt-2 px-4 py-1.5 rounded-full border border-border bg-background hover:bg-muted transition-colors text-sm"
                    >
                      Contacter pour ce bien
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
