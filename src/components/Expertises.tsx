export const Expertises = () => {
  return (
    <section id="expertises" className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end gap-6 mb-7 flex-wrap">
          <div>
            <h2 className="text-2xl font-serif font-semibold tracking-wide">Expertises</h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-[26rem]">
            Une double compétence en immobilier et en approche patrimoniale permet d'aligner chaque opération
            avec vos objectifs globaux : protection, transmission, rendement et liberté d'action.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-border bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
            <h3 className="text-base font-serif font-medium mb-2.5 text-foreground">
              Gestion de patrimoine
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Analyse de votre patrimoine actuel, projection de scénarios, arbitrage entre actifs immobiliers
              et financiers, en cohérence avec votre horizon de temps et votre fiscalité.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-muted border border-border text-muted-foreground">
                Stratégie long terme
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-muted/50 border border-border text-muted-foreground">
                Arbitrage d'actifs
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-muted/50 border border-border text-muted-foreground">
                Transmission
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
            <h3 className="text-base font-serif font-medium mb-2.5 text-foreground">
              Immobilier & baux code civil
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Sélection et valorisation de biens résidentiels et commerciaux, mise en place de baux code civil
              pour une clientèle souhaitant des solutions plus souples et confidentielles que les baux classiques.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-muted border border-border text-muted-foreground">
                Baux code civil
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-muted/50 border border-border text-muted-foreground">
                Locaux premium
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-muted/50 border border-border text-muted-foreground">
                Investisseurs & sociétés
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
            <h3 className="text-base font-serif font-medium mb-2.5 text-foreground">
              Accompagnement global
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Coordination avec notaires, banques, conseils juridiques et fiscaux. Suivi du dossier de la première
              analyse à la signature, puis accompagnement dans la mise en location ou la revente.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-muted border border-border text-muted-foreground">
                Pilotage de dossier
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-muted/50 border border-border text-muted-foreground">
                Réseau de partenaires
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-muted/50 border border-border text-muted-foreground">
                Suivi post-transaction
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
