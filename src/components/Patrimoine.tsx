import { useState } from "react";
import { toast } from "sonner";

export const Patrimoine = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    tel: "",
    profil: "",
    objet: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Demande envoyée avec succès ! Nous vous recontacterons rapidement.");
    setFormData({ nom: "", email: "", tel: "", profil: "", objet: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const domaines = [
    {
      title: "Stratégie patrimoniale globale",
      description:
        "Analyse de votre situation personnelle et professionnelle, définition d'objectifs clairs et proposition d'une stratégie de long terme.",
    },
    {
      title: "Investissements financiers",
      description:
        "Sélection de solutions financières adaptées à votre profil de risque, à votre horizon de placement et à vos objectifs (valorisation, revenus, diversification).",
    },
    {
      title: "Optimisation fiscale",
      description:
        "Mise en place de stratégies visant à réduire la pression fiscale dans le respect du cadre réglementaire en vigueur.",
    },
    {
      title: "Préparation de la retraite",
      description:
        "Anticipation de vos revenus futurs, simulation de scénarios et recommandations pour sécuriser votre niveau de vie.",
    },
    {
      title: "Transmission & protection",
      description:
        "Organisation de la transmission de votre patrimoine, protection du conjoint et de la famille, réflexion sur les outils civil et juridique adéquats.",
    },
    {
      title: "Dirigeants & professions libérales",
      description:
        "Accompagnement spécifique des chefs d'entreprise et professions libérales : structuration de la rémunération, prévoyance, transmission d'entreprise, etc.",
    },
  ];

  const steps = [
    {
      number: "Étape 1",
      title: "Découverte & diagnostic",
      description:
        "Entretien approfondi pour comprendre votre situation, vos objectifs et vos contraintes (familiales, professionnelles, fiscales).",
    },
    {
      number: "Étape 2",
      title: "Analyse & recommandations",
      description:
        "Élaboration d'un diagnostic patrimonial et de recommandations sur-mesure, adaptées à votre profil de risque et à vos priorités.",
    },
    {
      number: "Étape 3",
      title: "Mise en œuvre",
      description:
        "Mise en place des solutions retenues (financières, juridiques, immobilières) en lien avec les partenaires nécessaires.",
    },
    {
      number: "Étape 4",
      title: "Suivi & ajustements",
      description:
        "Rendez-vous réguliers pour ajuster la stratégie en fonction de l'évolution de votre situation personnelle et de l'environnement économique.",
    },
  ];

  return (
    <section id="patrimoine" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Gestion de patrimoine</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Un accompagnement global, structuré et indépendant, piloté par{" "}
            <strong className="text-foreground">Arnaud Doria</strong>, professionnel expérimenté de la gestion de
            patrimoine et responsable de troisième cycle à l'ESLSCA Business School Paris.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="rounded-[18px] border border-border p-4 bg-card">
            <div className="inline-flex items-center gap-2 text-[11px] px-2 py-1 rounded-full border border-border/50 bg-muted/50 mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
              <span>Direction & expertise</span>
            </div>
            <div className="text-sm font-medium mb-2">Arnaud Doria</div>
            <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
              Fondateur et dirigeant d'AD Investissement Conseil, Arnaud Doria accompagne depuis de nombreuses années
              particuliers et entreprises sur l'ensemble de leurs problématiques patrimoniales : structuration,
              investissements, fiscalité, retraite, transmission et protection familiale.
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              En parallèle de son activité de conseil, il est responsable de troisième cycle à{" "}
              <strong className="text-foreground">l'ESLSCA Business School Paris</strong>, où il forme les futurs
              professionnels du secteur et contribue à la montée en compétences de la profession.
            </p>
          </div>

          <div className="rounded-[18px] border border-border p-4 bg-card">
            <div className="inline-flex items-center gap-2 text-[11px] px-2 py-1 rounded-full border border-border/50 bg-muted/50 mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
              <span>Cadre réglementaire</span>
            </div>
            <div className="text-sm font-medium mb-2">Habilitations professionnelles</div>
            <ul className="text-xs text-muted-foreground space-y-1 mb-2 ml-4 list-disc leading-relaxed">
              <li>Inscription ORIAS n° <strong className="text-foreground">8044290</strong></li>
              <li>Conseiller en investissements financiers (CIF)</li>
              <li>Courtier d'assurance ou de réassurance (COA)</li>
              <li>Courtier en opérations de banque et en services de paiement (COBSP)</li>
              <li>Carte de transaction sur immeuble et fonds de commerce & carte de gestion immobilière n°T 1700</li>
              <li>Conseiller en Investissements Financiers n° <strong className="text-foreground">A298000</strong></li>
            </ul>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Ce cadre réglementaire garantit un conseil encadré, transparent et conforme aux exigences de la
              profession.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">Domaines d'intervention</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Une offre complète, souvent en partenariat avec des acteurs spécialisés tels qu'Actualis Associés.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {domaines.map((domaine, index) => (
              <div key={index} className="rounded-[18px] border border-border p-4 bg-card">
                <div className="text-sm font-medium mb-2">{domaine.title}</div>
                <p className="text-xs text-muted-foreground leading-relaxed">{domaine.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">Notre méthodologie</h3>
          <p className="text-sm text-muted-foreground mb-4">Un processus structuré, pensé pour durer dans le temps.</p>
          <div className="grid md:grid-cols-4 gap-4">
            {steps.map((step, index) => (
              <div key={index} className="rounded-[18px] border border-border p-4 bg-card">
                <div className="text-[11px] uppercase tracking-[0.18em] text-accent mb-2">{step.number}</div>
                <div className="text-sm font-medium mb-1.5">{step.title}</div>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[18px] border border-border p-6 bg-card">
          <div className="inline-flex items-center gap-2 text-[11px] px-2 py-1 rounded-full border border-border/50 bg-muted/50 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
            <span>Premier échange</span>
          </div>
          <div className="text-sm font-medium mb-1">Demander un rendez-vous en gestion de patrimoine</div>
          <p className="text-xs text-muted-foreground mb-4">
            Laissez-nous quelques informations, nous vous recontacterons pour organiser un premier échange.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="nom" className="text-xs text-muted-foreground">
                  Nom & prénom
                </label>
                <input
                  id="nom"
                  name="nom"
                  type="text"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  className="w-full rounded-full border border-input px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Nom Prénom"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="text-xs text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-full border border-input px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="vous@exemple.fr"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="tel" className="text-xs text-muted-foreground">
                  Téléphone
                </label>
                <input
                  id="tel"
                  name="tel"
                  type="tel"
                  value={formData.tel}
                  onChange={handleChange}
                  className="w-full rounded-full border border-input px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="+33..."
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="profil" className="text-xs text-muted-foreground">
                  Vous êtes
                </label>
                <select
                  id="profil"
                  name="profil"
                  value={formData.profil}
                  onChange={handleChange}
                  className="w-full rounded-full border border-input px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Sélectionnez…</option>
                  <option>Particulier</option>
                  <option>Dirigeant d'entreprise</option>
                  <option>Profession libérale</option>
                  <option>Autre</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="objet" className="text-xs text-muted-foreground">
                Votre besoin principal
              </label>
              <select
                id="objet"
                name="objet"
                value={formData.objet}
                onChange={handleChange}
                className="w-full rounded-full border border-input px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Sélectionnez…</option>
                <option>Bilan patrimonial</option>
                <option>Investissements financiers</option>
                <option>Optimisation fiscale</option>
                <option>Préparation de la retraite</option>
                <option>Transmission & succession</option>
                <option>Autre projet</option>
              </select>
            </div>

            <div className="space-y-1">
              <label htmlFor="message" className="text-xs text-muted-foreground">
                Précisez votre projet (facultatif)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full rounded-2xl border border-input px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Quelques mots sur votre situation et vos attentes…"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition-all text-sm"
            >
              Envoyer la demande
              <span>↗</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
