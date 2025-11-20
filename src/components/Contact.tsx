import { useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé avec succès ! Nous vous répondrons rapidement.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl border border-border bg-white p-6 md:p-8 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-6">
            <div>
              <h2 className="text-lg font-serif font-semibold tracking-wide mb-3">
                Entrer en contact
              </h2>
              <p className="text-sm text-muted-foreground mb-6 max-w-[26rem]">
                Expliquez votre situation en quelques lignes : type de bien, secteur, échéance, objectifs.
                Un retour vous sera fait pour convenir d'un échange plus détaillé.
              </p>

              <ul className="space-y-2 text-sm mb-4">
                <li className="flex gap-2">
                  <span className="text-muted-foreground min-w-[5.5rem]">Téléphone</span>
                  <span>+33 7 89 29 13 68</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-muted-foreground min-w-[5.5rem]">E-mail</span>
                  <span>matteo@adconseil.fr</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-muted-foreground min-w-[5.5rem]">Secteur</span>
                  <span>Neuilly-sur-Seine & Paris Ouest</span>
                </li>
              </ul>

              <p className="text-xs text-muted-foreground">
                Vous pouvez également demander un rappel en indiquant vos créneaux de disponibilité.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label htmlFor="name" className="text-xs text-muted-foreground">
                  Nom & prénom
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                  className="w-full rounded-xl border border-input px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="text-xs text-muted-foreground">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="vous@exemple.com"
                  className="w-full rounded-xl border border-input px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="phone" className="text-xs text-muted-foreground">
                  Téléphone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+33 ..."
                  className="w-full rounded-xl border border-input px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-xs text-muted-foreground">
                  Votre situation & vos objectifs
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Type de bien, secteur, projet (cession, acquisition, bail, arbitrage...), échéance souhaitée..."
                  className="w-full rounded-xl border border-input px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-accent transition-colors resize-vertical"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#f8e9c8] to-accent text-foreground text-sm font-medium hover:shadow-lg transition-all hover:-translate-y-0.5 w-full justify-center shadow-[0_10px_25px_rgba(148,163,184,0.35)]"
              >
                <span>➤</span>
                <span>Envoyer la demande</span>
              </button>

              <p className="text-xs text-muted-foreground">
                Ce formulaire vous permet d'être recontacté rapidement pour un premier échange confidentiel.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
