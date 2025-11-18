export const Zones = () => {
  const zones = [
    {
      name: "Neuilly-sur-Seine",
      description: "Quartiers Saint-James, Île de la Jatte, Sablons…",
    },
    {
      name: "Paris Ouest",
      description: "7e, 8e, 16e, 17e – immeubles haussmanniens & adresses de prestige.",
    },
    {
      name: "Hauts-de-Seine",
      description: "Boulogne, Levallois, Courbevoie & communes limitrophes.",
    },
  ];

  return (
    <section id="zones" className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Zones d'intervention</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Nous concentrons notre expertise sur les secteurs où la connaissance fine du marché
            fait la différence : Neuilly-sur-Seine, l'Ouest parisien et les quartiers les plus recherchés de Paris.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {zones.map((zone, index) => (
            <div
              key={index}
              className="rounded-[18px] border border-border p-4 bg-card hover:shadow-md transition-shadow"
            >
              <div className="font-medium text-sm mb-1.5">{zone.name}</div>
              <div className="text-xs text-muted-foreground">{zone.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
