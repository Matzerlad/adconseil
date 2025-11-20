import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-3 text-xs text-muted-foreground">
          <div>
            © {currentYear} AD Investissement Conseil — Tous droits réservés.
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#expertises" className="hover:text-accent-soft">
              Expertises
            </a>
            <a href="#zones" className="hover:text-accent-soft">
              Zones
            </a>
            <a href="#contact" className="hover:text-accent-soft">
              Contact
            </a>
            <Link to="/mentions-legales" className="hover:text-accent-soft">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
