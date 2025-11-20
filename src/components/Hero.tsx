import { Link } from "react-router-dom";

export const Hero = () => {

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-accent font-medium mb-3">
              Neuilly & Ouest parisien
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Conseil patrimonial & immobilier d'exception.
            </h1>
            <p className="text-muted-foreground mb-6 max-w-lg leading-relaxed">
              AD Investissement Conseil accompagne les particuliers et les dirigeants dans la
              structuration de leur patrimoine et la réalisation de leurs projets immobiliers,
              avec une exigence de qualité et d'indépendance.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <Link
                to="/patrimoine"
                className="flex-1 rounded-[24px] border border-border p-4 flex justify-between items-center cursor-pointer bg-card hover:shadow-md hover:-translate-y-0.5 transition-all hover:border-accent/35"
              >
                <div className="text-left">
                  <div className="text-sm font-medium mb-0.5">Gestion de patrimoine</div>
                  <div className="text-xs text-muted-foreground">
                    Bilan, optimisation, transmission, retraite…
                  </div>
                </div>
                <div className="text-xl text-accent">↗</div>
              </Link>

              <Link
                to="/immobilier"
                className="flex-1 rounded-[24px] border border-border p-4 flex justify-between items-center cursor-pointer bg-card hover:shadow-md hover:-translate-y-0.5 transition-all hover:border-accent/35"
              >
                <div className="text-left">
                  <div className="text-sm font-medium mb-0.5">Immobilier</div>
                  <div className="text-xs text-muted-foreground">
                    Vente, location & accompagnement sur mesure.
                  </div>
                </div>
                <div className="text-xl text-accent">↗</div>
              </Link>
            </div>

            <p className="text-xs text-muted-foreground">
              Basé au <strong className="text-foreground">14 Rue des Poissonniers, 92200 Neuilly-sur-Seine</strong>.
              Conseil sur rendez-vous, en présentiel ou à distance.
            </p>
          </div>

          <div className="rounded-[24px] border border-border overflow-hidden bg-gradient-to-br from-[#f0ece5] via-white to-[#f7f7f7] p-5 shadow-sm">
            <div className="rounded-[18px] border border-dashed border-border/50 p-5 flex flex-col gap-4 bg-white/50">
              <div className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                Vue d'ensemble
              </div>

              <div className="flex justify-between items-start gap-3">
                <div>
                  <div className="text-sm font-medium mb-1">Un interlocuteur unique</div>
                  <div className="text-xs text-muted-foreground">
                    Patrimoine & immobilier réunis dans un même cabinet.
                  </div>
                </div>
                <div className="text-[11px] px-2.5 py-1 rounded-full border border-border/50 bg-white/90 whitespace-nowrap">
                  Neuilly & Ouest parisien
                </div>
              </div>

              <div className="flex justify-between items-start gap-3">
                <div>
                  <div className="text-sm font-medium mb-1">Approche sur mesure</div>
                  <div className="text-xs text-muted-foreground">
                    Analyse, recommandations, mise en œuvre & suivi.
                  </div>
                </div>
                <div className="text-[11px] px-2.5 py-1 rounded-full border border-border/50 bg-white/90 whitespace-nowrap">
                  Particuliers & dirigeants
                </div>
              </div>

              <div className="flex justify-between items-start gap-3">
                <div>
                  <div className="text-sm font-medium mb-1">Cadre réglementaire</div>
                  <div className="text-xs text-muted-foreground">
                    ORIAS, CIF, COA, COBSP, Carte T & gestion.
                  </div>
                </div>
                <div className="text-[11px] px-2.5 py-1 rounded-full border border-border/50 bg-white/90 whitespace-nowrap">
                  Rigueur & transparence
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
