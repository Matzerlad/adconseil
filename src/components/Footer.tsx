import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-border bg-muted/20 py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-[2fr_1fr] gap-6 text-xs text-muted-foreground">
          <div className="space-y-2">
            <div>© {currentYear} AD INVESTISSEMENT CONSEIL – Tous droits réservés.</div>
            <div>
              ORIAS n° 8044290 – CIF, COA, COBSP – Carte de transaction & de gestion immobilière n°T 1700 (Préfecture
              de Nanterre).
            </div>
            <div className="flex flex-wrap gap-3 mt-3">
              <Link to="/patrimoine" className="underline decoration-dotted hover:text-foreground">
                Gestion de patrimoine
              </Link>
              <Link to="/immobilier" className="underline decoration-dotted hover:text-foreground">
                Immobilier
              </Link>
              <a href="#contact" className="underline decoration-dotted hover:text-foreground">
                Contact
              </a>
              <Link to="/mentions-legales" className="underline decoration-dotted hover:text-foreground">
                Mentions légales
              </Link>
              <a href="#" className="underline decoration-dotted hover:text-foreground">
                Politique de confidentialité
              </a>
            </div>
          </div>
          <div className="space-y-1 md:text-right">
            <div>14 Rue des Poissonniers, 92200 Neuilly-sur-Seine</div>
            <div>
              <a href="tel:+33146374757" className="hover:text-foreground">01 46 37 47 57</a>
            </div>
            <div>
              <a href="mailto:doria@adconseil.fr" className="hover:text-foreground">doria@adconseil.fr</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
