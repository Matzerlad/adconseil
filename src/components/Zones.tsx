import { ParisMap } from "./ParisMap";

export const Zones = () => {
  const zones = [
    "Paris 7e",
    "Paris 8e",
    "Paris 16e",
    "Paris 17e",
    "Neuilly-sur-Seine",
    "Boulogne-Billancourt",
    "Courbevoie & La Défense"
  ];

  return (
    <section id="zones" className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end gap-6 mb-7 flex-wrap">
          <div>
            <h2 className="text-xl uppercase tracking-[0.16em] font-bold">Zones d'intervention</h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-[26rem]">
            Une connaissance fine des micro-secteurs à forte valeur ajoutée : valorisation au m²,
            dynamique du quartier, qualité de la copropriété, et profil de la demande.
          </p>
        </div>

        <div className="grid md:grid-cols-[1.1fr_1fr] gap-7 items-start">
          <div>
            <h3 className="text-sm uppercase tracking-[0.16em] font-medium mb-3">
              Paris & proche ouest
            </h3>
            <div className="flex flex-wrap gap-2.5 mb-6">
              {zones.map((zone) => (
                <span 
                  key={zone}
                  className="px-4 py-2 rounded-full border border-border bg-card text-xs text-accent-soft"
                >
                  {zone}
                </span>
              ))}
            </div>
            
            <div className="rounded-2xl border border-border bg-gradient-to-br from-card to-background p-5 text-xs text-muted-foreground">
              <p>
                Les biens suivis sont principalement situés sur l'axe{" "}
                <strong className="text-foreground">Paris 7e & 8e – 16e – Neuilly-sur-Seine – Ouest parisien</strong>,
                où la demande reste structurellement forte pour les biens de qualité.
              </p>
            </div>
          </div>

          <div>
            <ParisMap />
          </div>
        </div>
      </div>
    </section>
  );
};
