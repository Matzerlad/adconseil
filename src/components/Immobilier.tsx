import { useState } from "react";
import { toast } from "sonner";

interface Property {
  id: number;
  type: string;
  ville: string;
  budget: number;
  title: string;
  location: string;
  surface: number;
  meta: string;
  price: string;
  tags: string[];
}

export const Immobilier = () => {
  const [filterType, setFilterType] = useState("");
  const [filterVille, setFilterVille] = useState("");
  const [filterBudget, setFilterBudget] = useState("");
  
  const [testProjet, setTestProjet] = useState("");
  const [testBudget, setTestBudget] = useState("");
  const [testZone, setTestZone] = useState("");
  const [testResult, setTestResult] = useState("");

  const [formEstimation, setFormEstimation] = useState({
    nom: "",
    email: "",
    tel: "",
    ville: "",
    type: "",
    surface: "",
    message: "",
  });

  const [formProjet, setFormProjet] = useState({
    nom: "",
    email: "",
    tel: "",
    type: "",
    budget: "",
    zone: "",
    message: "",
  });

  const properties: Property[] = [
    {
      id: 1,
      type: "appartement",
      ville: "Neuilly",
      budget: 1350000,
      title: "Appartement familial avec balcon.",
      location: "Neuilly-sur-Seine – Quartier Saint-James",
      surface: 112,
      meta: "3 chambres • Balcon filant",
      price: "1 350 000 €",
      tags: ["Exclusivité", "Nouveauté"],
    },
    {
      id: 2,
      type: "appartement",
      ville: "Paris 16",
      budget: 890000,
      title: "2 pièces rénové proche Trocadéro.",
      location: "Paris 16ᵉ",
      surface: 47,
      meta: "Dernier étage • Ascenseur",
      price: "890 000 €",
      tags: ["Mandat simple"],
    },
    {
      id: 3,
      type: "bureau",
      ville: "Neuilly",
      budget: 520000,
      title: "Plateau de bureaux lumineux.",
      location: "Neuilly-sur-Seine – Avenue Charles-de-Gaulle",
      surface: 120,
      meta: "Parkings en sous-sol",
      price: "Nous consulter",
      tags: ["À louer"],
    },
  ];

  const filteredProperties = properties.filter((p) => {
    if (filterType && p.type !== filterType) return false;
    if (filterVille && p.ville !== filterVille) return false;
    if (filterBudget && p.budget > parseInt(filterBudget)) return false;
    return true;
  });

  const resetFilters = () => {
    setFilterType("");
    setFilterVille("");
    setFilterBudget("");
  };

  const handleTest = () => {
    if (!testProjet || !testBudget || !testZone) {
      setTestResult("Merci de renseigner les trois champs pour une recommandation personnalisée.");
      return;
    }

    let message = "Nous vous orienterons vers notre équipe immobilier pour un projet ";

    if (testProjet === "residence-principale") {
      message += "de résidence principale";
    } else if (testProjet === "investissement-locatif") {
      message += "d'investissement locatif";
    } else if (testProjet === "bureau") {
      message += "de bureaux / locaux professionnels";
    }

    message += " situé principalement sur " + 
      (testZone === "Neuilly" ? "Neuilly-sur-Seine" :
       testZone === "ParisOuest" ? "Paris Ouest" : "les Hauts-de-Seine");

    message += ". ";

    if (testBudget === "300") {
      message += "Votre budget cible se situe jusqu'à 300 000 €.";
    } else if (testBudget === "800") {
      message += "Votre budget cible se situe entre 300 000 et 800 000 €.";
    } else if (testBudget === "1500") {
      message += "Votre budget cible se situe entre 800 000 € et 1,5 M€.";
    } else {
      message += "Votre budget dépasse 1,5 M€.";
    }

    message += " Nous vous proposerons un échange pour qualifier davantage vos critères.";
    setTestResult(message);
  };

  const handleEstimationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Votre demande d'estimation a bien été enregistrée. Nous reviendrons vers vous rapidement.");
    setFormEstimation({ nom: "", email: "", tel: "", ville: "", type: "", surface: "", message: "" });
  };

  const handleProjetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Votre projet a bien été enregistré. Nous vous proposerons une sélection ciblée.");
    setFormProjet({ nom: "", email: "", tel: "", type: "", budget: "", zone: "", message: "" });
  };

  return (
    <>
      {/* HERO IMMOBILIER */}
      <section className="py-12 md:py-16 bg-[#f1f0ec]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-[1.2fr_1.1fr] gap-10 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-3">
                Immobilier
              </div>
              <h1 className="text-3xl md:text-[clamp(2.2rem,3.2vw+1rem,3rem)] font-playfair font-semibold leading-tight mb-4">
                Immobilier d'exception à Neuilly & Paris Ouest.
              </h1>
              <p className="text-muted-foreground mb-5 max-w-lg text-[0.98rem]">
                Vente, location, recherche sur mesure et accompagnement complet pour votre projet immobilier à Neuilly-sur-Seine,
                dans l'Ouest parisien et les Hauts-de-Seine.
              </p>
              <div className="flex flex-wrap gap-3 mb-5">
                <button
                  onClick={() => document.getElementById("properties")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-5 py-2.5 rounded-full bg-accent-soft text-dark border-none font-medium text-sm hover:shadow-lg transition-all"
                >
                  Voir les biens
                </button>
                <button
                  onClick={() => document.getElementById("formEstimation")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-5 py-2.5 rounded-full bg-transparent text-dark border border-border/30 font-medium text-sm hover:bg-white hover:border-accent transition-all"
                >
                  Faire estimer un bien
                </button>
              </div>
              <p className="text-xs text-muted-foreground">
                L'agence AD Investissement Conseil propose des annonces de vente et de location immobilière, avec un focus
                sur les appartements, maisons et bureaux situés dans les quartiers les plus recherchés.
              </p>
            </div>

            <aside className="rounded-[26px] bg-gradient-to-br from-white via-[#f5f0e6] to-white p-6 shadow-[0_18px_45px_rgba(0,0,0,0.08)] border border-border/20">
              <div className="text-[0.95rem] font-semibold mb-4">Deux axes : transaction & accompagnement.</div>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                Estimation, stratégie de commercialisation, diffusion ciblée, sélection des acquéreurs et accompagnement
                jusqu'à la signature définitive.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Côté acquéreurs, une compréhension fine de votre projet et l'accès à des opportunités ciblées, y compris
                des biens off-market lorsque cela est pertinent.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* ZONES D'INTERVENTION */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-[26px] bg-card p-6 shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
              <div className="text-xs uppercase tracking-[0.18em] text-accent mb-2">Zones d'intervention</div>
              <h2 className="text-2xl font-playfair font-semibold mb-2">Ouest parisien & quartiers recherchés.</h2>
              <p className="text-sm text-muted-foreground max-w-md mb-4">
                Nous concentrons notre expertise sur les secteurs où la connaissance fine du marché fait la différence :
                Neuilly-sur-Seine, l'Ouest parisien et les quartiers les plus recherchés de Paris.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {["Neuilly-sur-Seine", "Paris 7ᵉ", "Paris 8ᵉ", "Paris 16ᵉ", "Paris 17ᵉ", "Boulogne-Billancourt", "Levallois-Perret", "Courbevoie & La Défense"].map((zone) => (
                  <span key={zone} className="px-3 py-1.5 rounded-full text-xs bg-white border border-border">
                    {zone}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[18px] bg-card border border-border p-5 shadow-[0_10px_25px_rgba(0,0,0,0.04)]">
              <h3 className="text-base font-semibold mb-2">Pour les propriétaires.</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Estimation, stratégie de commercialisation, sélection des candidats, accompagnement jusqu'à la signature
                chez le notaire ou à la mise en location.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 mb-4 ml-4 list-disc">
                <li>Estimation sur rendez-vous</li>
                <li>Mandat simple ou exclusif</li>
                <li>Photos & présentation soignées</li>
                <li>Diffusion ciblée & off-market</li>
              </ul>
              <button
                onClick={() => document.getElementById("formEstimation")?.scrollIntoView({ behavior: "smooth" })}
                className="px-5 py-2.5 rounded-full bg-transparent text-dark border border-border/30 font-medium text-sm hover:bg-white hover:border-accent transition-all"
              >
                Faire estimer un bien
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* LISTE DE BIENS */}
      <section id="properties" className="py-12 md:py-16 bg-[#f1f0ec]">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="text-xs uppercase tracking-[0.18em] text-accent mb-2">Biens proposés</div>
            <h2 className="text-2xl font-playfair font-semibold mb-2">Nos biens représentatifs.</h2>
            <p className="text-sm text-muted-foreground max-w-md">
              Exemples de biens. Cette section pourra être reliée à un back-office ou à un flux externe pour être mise à jour
              automatiquement par Lovable.
            </p>
          </div>

          <div className="rounded-[18px] bg-card border border-border p-5 shadow-[0_10px_25px_rgba(0,0,0,0.04)] mb-6">
            <h3 className="text-base font-semibold mb-3">Rechercher un bien.</h3>
            <div className="flex flex-wrap gap-2.5 mb-3">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-3 py-2 rounded-full border border-border text-sm bg-white min-w-[120px]"
              >
                <option value="">Type de bien</option>
                <option value="appartement">Appartement</option>
                <option value="maison">Maison</option>
                <option value="bureau">Bureau</option>
                <option value="local">Local commercial</option>
              </select>
              <select
                value={filterVille}
                onChange={(e) => setFilterVille(e.target.value)}
                className="px-3 py-2 rounded-full border border-border text-sm bg-white min-w-[120px]"
              >
                <option value="">Ville / quartier</option>
                <option value="Neuilly">Neuilly-sur-Seine</option>
                <option value="Paris 7">Paris 7ᵉ</option>
                <option value="Paris 8">Paris 8ᵉ</option>
                <option value="Paris 16">Paris 16ᵉ</option>
                <option value="Boulogne">Boulogne-Billancourt</option>
              </select>
              <input
                type="number"
                value={filterBudget}
                onChange={(e) => setFilterBudget(e.target.value)}
                placeholder="Budget max (€)"
                className="px-3 py-2 rounded-full border border-border text-sm bg-white min-w-[120px]"
              />
              <button
                onClick={resetFilters}
                className="px-5 py-2 rounded-full bg-transparent text-dark border border-border/30 font-medium text-sm hover:bg-white hover:border-accent transition-all"
              >
                Réinitialiser
              </button>
            </div>
            <p className="text-xs text-muted-foreground">
              Filtre pédagogique côté front. Lovable pourra connecter ce module à une base de données réelle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <article key={property.id} className="rounded-[18px] overflow-hidden bg-white border border-border flex flex-col shadow-[0_14px_30px_rgba(0,0,0,0.06)]">
                <div className="h-[180px] bg-gradient-to-br from-[#d9d9d9] to-[#f0f0f0] relative">
                  <div className="absolute top-2.5 right-2.5 flex gap-1.5">
                    {property.tags.map((tag) => (
                      <span key={tag} className="text-[0.7rem] px-2 py-1 rounded-full bg-black/70 text-white uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-4 flex flex-col gap-1">
                  <div className="text-base font-semibold">{property.title}</div>
                  <div className="text-xs text-muted-foreground">{property.location}</div>
                  <div className="flex flex-wrap gap-2.5 mt-2 text-xs">
                    <span className="px-2.5 py-1 rounded-full bg-muted/10">{property.surface} m²</span>
                    <span className="px-2.5 py-1 rounded-full bg-muted/10">{property.meta}</span>
                  </div>
                </div>
                <div className="px-4 py-3 flex items-center justify-between border-t border-border text-xs">
                  <div className="font-semibold">{property.price}</div>
                  <div className="text-muted-foreground">Contact AD</div>
                </div>
              </article>
            ))}
          </div>

          {/* TEST D'ORIENTATION */}
          <div className="rounded-[26px] bg-card border border-border p-6 shadow-[0_18px_45px_rgba(0,0,0,0.08)] mt-6">
            <h3 className="text-base font-semibold mb-2">Vous ne savez pas par où commencer&nbsp;?</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Répondez à ces quelques questions. Nous vous orienterons vers le bon interlocuteur et le bon type de bien.
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <select
                value={testProjet}
                onChange={(e) => setTestProjet(e.target.value)}
                className="flex-1 min-w-[130px] px-3 py-2 rounded-full border border-border text-xs bg-white"
              >
                <option value="">Type de projet</option>
                <option value="residence-principale">Résidence principale</option>
                <option value="investissement-locatif">Investissement locatif</option>
                <option value="bureau">Bureaux / locaux pro</option>
              </select>
              <select
                value={testBudget}
                onChange={(e) => setTestBudget(e.target.value)}
                className="flex-1 min-w-[130px] px-3 py-2 rounded-full border border-border text-xs bg-white"
              >
                <option value="">Budget indicatif</option>
                <option value="300">Jusqu'à 300 000 €</option>
                <option value="800">300 000 à 800 000 €</option>
                <option value="1500">800 000 à 1,5 M€</option>
                <option value="1500plus">Plus de 1,5 M€</option>
              </select>
              <select
                value={testZone}
                onChange={(e) => setTestZone(e.target.value)}
                className="flex-1 min-w-[130px] px-3 py-2 rounded-full border border-border text-xs bg-white"
              >
                <option value="">Zone souhaitée</option>
                <option value="Neuilly">Neuilly-sur-Seine</option>
                <option value="ParisOuest">Paris Ouest</option>
                <option value="HautsSeine">Hauts-de-Seine</option>
              </select>
            </div>
            <button
              onClick={handleTest}
              className="px-5 py-2.5 rounded-full bg-accent-soft text-dark border-none font-medium text-sm hover:shadow-lg transition-all"
            >
              Obtenir une recommandation
            </button>
            {testResult && (
              <div className="mt-3 text-xs text-muted-foreground min-h-[20px]">
                {testResult}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FORMULAIRES */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {/* FORMULAIRE ESTIMATION */}
            <div className="rounded-[18px] bg-card border border-border p-5 shadow-[0_10px_25px_rgba(0,0,0,0.04)]">
              <h3 className="text-base font-semibold mb-2">Faire estimer un bien.</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Vous envisagez de vendre ou de louer un bien à Neuilly ou dans l'Ouest parisien&nbsp;? Décrivez-nous votre bien,
                nous vous recontacterons pour une estimation approfondie.
              </p>
              <form id="formEstimation" onSubmit={handleEstimationSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label htmlFor="est-nom" className="text-xs font-medium">Nom & prénom</label>
                    <input
                      id="est-nom"
                      type="text"
                      value={formEstimation.nom}
                      onChange={(e) => setFormEstimation({ ...formEstimation, nom: e.target.value })}
                      placeholder="Votre nom"
                      required
                      className="w-full px-3 py-2 rounded-lg border border-border text-sm bg-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="est-email" className="text-xs font-medium">Email</label>
                    <input
                      id="est-email"
                      type="email"
                      value={formEstimation.email}
                      onChange={(e) => setFormEstimation({ ...formEstimation, email: e.target.value })}
                      placeholder="vous@exemple.fr"
                      required
                      className="w-full px-3 py-2 rounded-lg border border-border text-sm bg-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="est-tel" className="text-xs font-medium">Téléphone</label>
                    <input
                      id="est-tel"
                      type="tel"
                      value={formEstimation.tel}
                      onChange={(e) => setFormEstimation({ ...formEstimation, tel: e.target.value })}
                      placeholder="+33 ..."
                      className="w-full px-3 py-2 rounded-lg border border-border text-sm bg-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="est-ville" className="text-xs font-medium">Ville / quartier du bien</label>
                    <input
                      id="est-ville"
                      type="text"
                      value={formEstimation.ville}
                      onChange={(e) => setFormEstimation({ ...formEstimation, ville: e.target.value })}
                      placeholder="Ex : Neuilly – Saint-James"
                      className="w-full px-3 py-2 rounded-lg border border-border text-sm bg-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="est-type" className="text-xs font-medium">Type de bien</label>
                    <select
                      id="est-type"
                      value={formEstimation.type}
                      onChange={(e) => setFormEstimation({ ...formEstimation, type: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-border text-sm bg-white"
                    >
                      <option value="">Sélectionnez…</option>
                      <option>Appartement</option>
                      <option>Maison</option>
                      <option>Bureau / local</option>
                      <option>Parking / box</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="est-surface" className="text-xs font-medium">Surface approximative (m²)</label>
                    <input
                      id="est-surface"
                      type="number"
                      value={formEstimation.surface}
                      onChange={(e) => setFormEstimation({ ...formEstimation, surface: e.target.value })}
                      placeholder="Ex : 85"
                      className="w-full px-3 py-2 rounded-lg border border-border text-sm bg-white"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="est-message" className="text-xs font-medium">Précisions (étage, balcon, état du bien…)</label>
                  <textarea
                    id="est-message"
                    value={formEstimation.message}
                    onChange={(e) => setFormEstimation({ ...formEstimation, message: e.target.value })}
                    placeholder="Quelques détails utiles pour affiner notre estimation…"
                    rows={3}
                    className="w-full px-3 py-2 rounded-lg border border-border text-sm bg-white resize-none"
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Ce formulaire pourra être relié à l'adresse <code>immobilier@adconseil.fr</code> ou à une boîte partagée.
                </p>
                <button type="submit" className="w-full px-5 py-2.5 rounded-full bg-dark text-white border-none font-medium text-sm hover:shadow-lg transition-all">
                  Envoyer la demande d'estimation
                </button>
              </form>
            </div>

            {/* FORMULAIRE PROJET */}
            <div className="rounded-[18px] bg-card border border-border p-5 shadow-[0_10px_25px_rgba(0,0,0,0.04)]">
              <h3 className="text-base font-semibold mb-2">Décrire mon projet d'achat ou de location.</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Nous vous recontacterons pour qualifier votre projet et vous proposer une sélection ciblée.
              </p>
              <form onSubmit={handleProjetSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label htmlFor="pr-nom" className="text-xs font-medium">Nom & prénom</label>
                    <input
                      id="pr-nom"
                      type="text"
                      value={formProjet.nom}
                      onChange={(e) => setFormProjet({ ...formProjet, nom: e.target.value })}
                      placeholder="Votre nom"
                      required
                      className="w-full px-3 py-2 rounded-lg border border-border text-sm bg-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="pr-email" className="text-xs font-medium">Email</label>
                    <input
                      id="pr-email"
                      type="email"
                      value={formProjet.email}
                      onChange={(e) => setFormProjet({ ...formProjet, email: e.target.value })}
                      placeholder="vous@exemple.fr"
                      required
                      className="w-full px-3 py-2 rounded-lg border border-border text-sm bg-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="pr-tel" className="text-xs font-medium">Téléphone</label>
                    <input
                      id="pr-tel"
                      type="tel"
                      value={formProjet.tel}
                      onChange={(e) => setFormProjet({ ...formProjet, tel: e.target.value })}
                      placeholder="+33 ..."
                      className="w-full px-3 py-2 rounded-lg border border-border text-sm bg-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="pr-type" className="text-xs font-medium">Type de projet</label>
                    <select
                      id="pr-type"
                      value={formProjet.type}
                      onChange={(e) => setFormProjet({ ...formProjet, type: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-border text-sm bg-white"
                    >
                      <option value="">Sélectionnez…</option>
                      <option>Résidence principale</option>
                      <option>Investissement locatif</option>
                      <option>Bureaux / locaux</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="pr-budget" className="text-xs font-medium">Budget indicatif</label>
                  <input
                    id="pr-budget"
                    type="text"
                    value={formProjet.budget}
                    onChange={(e) => setFormProjet({ ...formProjet, budget: e.target.value })}
                    placeholder="Ex : 800 000 €"
                    className="w-full px-3 py-2 rounded-lg border border-border text-sm bg-white"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="pr-zone" className="text-xs font-medium">Zone privilégiée</label>
                  <input
                    id="pr-zone"
                    type="text"
                    value={formProjet.zone}
                    onChange={(e) => setFormProjet({ ...formProjet, zone: e.target.value })}
                    placeholder="Neuilly, Paris 16ᵉ, Boulogne…"
                    className="w-full px-3 py-2 rounded-lg border border-border text-sm bg-white"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="pr-message" className="text-xs font-medium">Précisez vos critères</label>
                  <textarea
                    id="pr-message"
                    value={formProjet.message}
                    onChange={(e) => setFormProjet({ ...formProjet, message: e.target.value })}
                    placeholder="Nombre de pièces, extérieur, étage, etc."
                    rows={3}
                    className="w-full px-3 py-2 rounded-lg border border-border text-sm bg-white resize-none"
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Ce formulaire pourra être relié à <code>immobilier@adconseil.fr</code> ou à un CRM, avec orientation automatique
                  vers le bon interlocuteur.
                </p>
                <button type="submit" className="w-full px-5 py-2.5 rounded-full bg-dark text-white border-none font-medium text-sm hover:shadow-lg transition-all">
                  Envoyer mon projet
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
