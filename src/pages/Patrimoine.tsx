import { SimpleHeader } from "@/components/SimpleHeader";
import { ContactSection } from "@/components/ContactSection";

const PatrimoinePage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SimpleHeader />
      
      <main className="bg-slate-50">
        <section className="mx-auto max-w-5xl px-4 py-12 space-y-8">
          <header className="space-y-3">
            <p className="text-sm font-medium text-amber-700">
              Gestion de patrimoine
            </p>
            <h1 className="text-3xl font-semibold text-slate-900">
              Un accompagnement simple et structuré
            </h1>
            <p className="text-sm text-slate-600 max-w-2xl">
              L&apos;objectif est de clarifier votre situation, vos priorités et
              vos marges de manœuvre. Nous avançons étape par étape, sans jargon
              inutile, avec une vision long terme.
            </p>
          </header>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
              <h2 className="text-base font-semibold text-slate-900">
                Comprendre votre situation
              </h2>
              <p className="text-sm text-slate-600">
                Revue de vos revenus, charges, projets et horizons de temps.
                Nous regardons ensemble vos actifs immobiliers, financiers et
                professionnels, ainsi que vos contraintes familiales.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
              <h2 className="text-base font-semibold text-slate-900">
                Définir une stratégie lisible
              </h2>
              <p className="text-sm text-slate-600">
                Mise en place d&apos;un plan clair : priorisation des objectifs,
                arbitrages éventuels, et calendrier d&apos;action réaliste.
                L&apos;idée est de rester simple, efficace et pragmatique.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
              <h2 className="text-base font-semibold text-slate-900">
                S&apos;adapter à votre rythme
              </h2>
              <p className="text-sm text-slate-600">
                Certains sujets demandent du temps. Vous avancez à votre rythme,
                en gardant une vue d&apos;ensemble de vos choix et de leurs
                conséquences possibles.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
              <h2 className="text-base font-semibold text-slate-900">
                Coordonner avec vos conseils
              </h2>
              <p className="text-sm text-slate-600">
                Lorsque c&apos;est utile, nous travaillons avec vos notaires,
                experts-comptables ou conseils juridiques pour garder une ligne
                cohérente entre tous les intervenants.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-amber-300 bg-white p-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <h2 className="text-base font-semibold text-slate-900">
                Prendre un rendez-vous
              </h2>
              <p className="text-sm text-slate-600 max-w-md">
                Un premier échange permet de comprendre votre situation et de
                voir comment nous pouvons vous aider, sans engagement.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-amber-400 bg-amber-300 px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-amber-200 transition"
            >
              Planifier un appel
            </a>
          </section>
        </section>
      </main>

      <ContactSection />
    </div>
  );
};

export default PatrimoinePage;
