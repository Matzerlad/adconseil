import { SimpleHeader } from "@/components/SimpleHeader";
import { ContactSection } from "@/components/ContactSection";
import { ParisMap } from "@/components/ParisMap";

const ImmobilierPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SimpleHeader />
      
      <main className="bg-slate-50">
        <section className="mx-auto max-w-5xl px-4 py-12 space-y-8">
          <header className="space-y-3">
            <p className="text-sm font-medium text-amber-700">Immobilier</p>
            <h1 className="text-3xl font-semibold text-slate-900">
              Biens résidentiels, commerciaux et baux sur-mesure
            </h1>
            <p className="text-sm text-slate-600 max-w-2xl">
              Nous intervenons sur des biens situés principalement à Paris Ouest
              et Neuilly-sur-Seine, avec une attention particulière à la qualité
              du bien, du quartier et de la copropriété.
            </p>
          </header>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
              <h2 className="text-base font-semibold text-slate-900">
                Type de biens
              </h2>
              <p className="text-sm text-slate-600">
                Appartements, immeubles de rapport, locaux commerciaux ou
                professionnels. L&apos;idée est de rester sélectif et cohérent
                avec votre stratégie globale.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
              <h2 className="text-base font-semibold text-slate-900">
                Baux code civil
              </h2>
              <p className="text-sm text-slate-600">
                Mise en place de baux code civil lorsque ce cadre est adapté à
                l&apos;usage du bien et à votre situation. Le but est de
                concilier souplesse, sécurité et clarté pour les parties.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
            <h2 className="text-base font-semibold text-slate-900">
              Carte &amp; secteurs d&apos;intervention
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl">
              La carte présente les zones principales où nous intervenons :
              Paris Ouest (arrondissements 1 à 20), Neuilly-sur-Seine et les communes limitrophes.
              Les prix indiqués sont des moyennes au m² pour appartements anciens.
            </p>

            <div className="mt-3">
              <ParisMap />
            </div>
          </section>

          <section className="rounded-2xl border border-amber-300 bg-white p-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <h2 className="text-base font-semibold text-slate-900">
                Parler d&apos;un bien ou d&apos;un projet
              </h2>
              <p className="text-sm text-slate-600 max-w-md">
                Vous pouvez décrire le bien, le secteur et votre échéance.
                Nous revenons vers vous pour un premier retour et, si besoin,
                une visite ou un avis plus détaillé.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-amber-400 bg-amber-300 px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-amber-200 transition"
            >
              Prendre rendez-vous
            </a>
          </section>
        </section>
      </main>

      <ContactSection />
    </div>
  );
};

export default ImmobilierPage;
