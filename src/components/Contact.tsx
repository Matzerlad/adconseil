import { useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé avec succès ! Nous vous répondrons rapidement.");
    setFormData({ nom: "", email: "", sujet: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Contact & coordonnées</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Pour toute demande en gestion de patrimoine ou en immobilier, vous pouvez nous contacter directement ou
            utiliser les formulaires dédiés.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-[18px] border border-border p-6 bg-card">
            <div className="text-sm font-medium mb-3">Coordonnées</div>
            <div className="space-y-2 text-xs text-muted-foreground">
              <p>
                <strong className="text-foreground">AD INVESTISSEMENT CONSEIL</strong>
                <br />
                14 Rue des Poissonniers
                <br />
                92200 Neuilly-sur-Seine, France
              </p>
              <p className="pt-2">
                Tél : <a href="tel:+33146374757" className="text-foreground hover:text-accent">01 46 37 47 57</a>
                <br />
                Email : <a href="mailto:doria@adconseil.fr" className="text-foreground hover:text-accent">doria@adconseil.fr</a>
              </p>
              <p className="pt-2">Rendez-vous en présentiel à Neuilly-sur-Seine ou en visioconférence.</p>
            </div>
          </div>

          <div className="rounded-[18px] border border-border p-6 bg-card">
            <div className="text-sm font-medium mb-1">Demande générale</div>
            <p className="text-xs text-muted-foreground mb-4">
              Si vous n'êtes pas certain du bon interlocuteur (patrimoine ou immobilier), laissez-nous un message
              ci-dessous.
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
              </div>

              <div className="space-y-1">
                <label htmlFor="sujet" className="text-xs text-muted-foreground">
                  Sujet
                </label>
                <select
                  id="sujet"
                  name="sujet"
                  value={formData.sujet}
                  onChange={handleChange}
                  className="w-full rounded-full border border-input px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Sélectionnez…</option>
                  <option>Gestion de patrimoine</option>
                  <option>Immobilier</option>
                  <option>Autre</option>
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-xs text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full rounded-2xl border border-input px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Expliquez brièvement votre demande…"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition-all text-sm"
              >
                Envoyer le message
                <span>✉</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
