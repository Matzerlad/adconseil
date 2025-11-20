import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-10 grid gap-8 md:grid-cols-2">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
          <p className="text-sm text-slate-600 max-w-md">
            Expliquez simplement votre situation ou votre projet. Vous pouvez
            préciser le type de bien, le secteur et votre échéance. Un retour
            vous sera fait pour convenir d&apos;un échange.
          </p>

          <ul className="space-y-1 text-sm text-slate-700">
            <li>
              <span className="font-medium">Téléphone : </span>
              <span>+33 7 89 29 13 68</span>
            </li>
            <li>
              <span className="font-medium">E-mail : </span>
              <span>contact@adconseil.fr</span>
            </li>
            <li>
              <span className="font-medium">Secteur : </span>
              <span>Neuilly-sur-Seine &amp; Paris Ouest</span>
            </li>
          </ul>
        </div>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="text-slate-700">
              Nom et prénom
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-amber-400 focus:bg-white transition"
              placeholder="Votre nom"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="text-slate-700">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-amber-400 focus:bg-white transition"
              placeholder="vous@exemple.com"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="message" className="text-slate-700">
              Votre message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full min-h-[110px] rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-amber-400 focus:bg-white transition resize-none"
              placeholder="Projets, biens, secteurs, échéance..."
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full border border-amber-400 bg-amber-300 px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-amber-200 transition"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};
