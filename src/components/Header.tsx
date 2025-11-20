import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-border">,
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-foreground border border-accent flex items-center justify-center text-sm font-semibold tracking-wider text-background">
              AD
            </div>
            <div className="flex flex-col gap-0">
              <div className="text-[0.95rem] tracking-[0.08em] font-medium text-foreground">
                AD Investissement Conseil
              </div>
              <div className="text-xs text-muted-foreground">
                Immobilier & gestion de patrimoine
              </div>
            </div>
          </Link>

          <button 
            className="md:hidden px-2.5 py-1.5 text-xs text-muted-foreground border border-border rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            Menu
          </button>

          <nav className="hidden md:flex items-center gap-5 text-sm">
            <a href="#expertises" className="text-muted-foreground hover:text-foreground relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all hover:after:w-full">
              Expertises
            </a>
            <a href="#zones" className="text-muted-foreground hover:text-foreground relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all hover:after:w-full">
              Zones d'intervention
            </a>
            <a href="#process" className="text-muted-foreground hover:text-foreground relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all hover:after:w-full">
              Accompagnement
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all hover:after:w-full">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <div className="text-sm text-muted-foreground whitespace-nowrap">
              +33 7 89 29 13 68
            </div>
            <a 
              href="#contact" 
              className="px-5 py-2 rounded-full bg-white border border-accent text-foreground text-sm font-medium hover:bg-accent-soft/30 transition-all shadow-sm"
            >
              Demander un rappel
            </a>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden flex flex-col gap-2 mt-4 pb-2">
            <a href="#expertises" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-left text-sm text-muted-foreground hover:text-foreground">
              Expertises
            </a>
            <a href="#zones" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-left text-sm text-muted-foreground hover:text-foreground">
              Zones d'intervention
            </a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-left text-sm text-muted-foreground hover:text-foreground">
              Accompagnement
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-left text-sm text-muted-foreground hover:text-foreground">
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};