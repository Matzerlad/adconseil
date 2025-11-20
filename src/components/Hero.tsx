import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.16em] text-accent font-medium mb-3">
              Paris 7e, 8e, 16e & Neuilly-sur-Seine
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-[1.15] mb-5 text-foreground">
              Conseil discret en<br />
              <span className="text-accent">immobilier & patrimoine</span>
            </h1>
            <p className="text-muted-foreground mb-6 max-w-[32rem] leading-relaxed">
              Nous accompagnons investisseurs, familles et entrepreneurs dans la valorisation de leurs actifs :
              arbitrage, cession, baux code civil, acquisitions ciblées et stratégie patrimoniale sur-mesure
              à Paris Ouest et Neuilly-sur-Seine.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="text-xs px-3 py-2 rounded-full border border-border bg-white text-muted-foreground">
                Mandats confidentiels
              </span>
              <span className="text-xs px-3 py-2 rounded-full border border-border bg-white text-muted-foreground">
                Baux code civil & locaux premium
              </span>
              <span className="text-xs px-3 py-2 rounded-full border border-border bg-white text-muted-foreground">
                Accompagnement sur-mesure
              </span>
            </div>

            <div className="flex flex-wrap gap-3 items-center mb-5">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#f8e9c8] to-accent text-foreground text-sm font-medium hover:shadow-lg transition-all hover:-translate-y-0.5 shadow-[0_10px_25px_rgba(148,163,184,0.35)]"
              >
                <span>✉️</span>
                <span>Planifier un échange</span>
              </a>
              <a 
                href="#expertises" 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent bg-white text-foreground text-sm font-medium hover:bg-accent-soft/30 transition-all"
              >
                <span>Découvrir nos expertises</span>
              </a>
            </div>

            <p className="text-xs text-muted-foreground">
              <strong className="text-accent font-medium">AD Investissement Conseil</strong> intervient sur un nombre limité de dossiers pour garder
              une approche exigeante, réactive et alignée sur vos intérêts.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-border bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-sm uppercase tracking-[0.12em] font-medium mb-1">
                    Immobilier & patrimoine
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Paris Ouest · Neuilly-sur-Seine<br />
                    Résidentiel · Commercial · Baux code civil
                  </div>
                </div>
              </div>
              
              <div className="relative mt-3 rounded-2xl border border-border h-56 overflow-hidden bg-muted">,
                <img 
                  src="https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                  alt="Immobilier Paris"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80" />
                <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full border border-accent bg-white/90 backdrop-blur-sm text-xs text-accent font-medium">
                  Dossiers off-market & accompagnement sur-mesure
                </div>
              </div>
              
              <div className="absolute -right-1 -bottom-2 max-w-[210px] rounded-xl p-3 bg-white border border-border shadow-lg text-xs">
                <strong className="block mb-1 text-accent text-[0.8rem] font-medium">Approche long terme</strong>
                <span className="text-muted-foreground text-[0.75rem]">
                  Accompagnement de la première visite jusqu'à la signature, puis dans la structuration
                  patrimoniale (société, financement, fiscalité en lien avec vos conseils).
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
