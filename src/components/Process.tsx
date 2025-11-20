export const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Premier échange & compréhension",
      description: "Entretien confidentiel (en visio ou en présentiel) pour comprendre vos objectifs : cession, acquisition, optimisation de bail, structuration patrimoniale ou opportunité à analyser."
    },
    {
      number: "02",
      title: "Analyse & cadrage du dossier",
      description: "Étude du bien, de la copropriété, du marché, des flux financiers et des contraintes juridiques ou fiscales avec vos conseils habituels si nécessaire."
    },
    {
      number: "03",
      title: "Mise en marché ou recherche ciblée",
      description: "Mandat adapté (classique ou confidentiel), sélection des contreparties sérieuses, visites qualifiées, gestion des échanges et négociation."
    },
    {
      number: "04",
      title: "Signature & suivi",
      description: "Coordination jusqu'à la signature (promesse, acte, bail) puis accompagnement dans la mise en location, l'optimisation ou l'arbitrage des actifs concernés."
    }
  ];

  return (
    <section id="process" className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end gap-6 mb-7 flex-wrap">
          <div>
            <h2 className="text-xl uppercase tracking-[0.16em] font-bold">Accompagnement</h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-[26rem]">
            Un processus clair, mais ajusté à votre situation. Chaque étape est documentée pour garder
            une vision lucide des options, délais et impacts.
          </p>
        </div>

        <div className="grid md:grid-cols-[1.2fr_0.9fr] gap-5">
          <div className="border-l border-border pl-5 space-y-5">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="absolute -left-[2.4rem] top-0.5 w-7 h-7 rounded-full border border-accent/70 bg-background flex items-center justify-center text-xs text-accent-soft">
                  {step.number}
                </div>
                <div className="text-sm uppercase tracking-[0.12em] font-medium mb-1">
                  {step.title}
                </div>
                <div className="text-xs text-muted-foreground">
                  {step.description}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-muted/30 p-5 text-xs text-muted-foreground">
            Chaque dossier reste volontairement limité en volume pour garantir disponibilité,
            réactivité et alignement d'intérêts. L'objectif n'est pas de multiplier les mandats,
            mais de sécuriser et optimiser les opérations réellement importantes pour vous.
          </div>
        </div>
      </div>
    </section>
  );
};
