import { useState } from "react";
import logo from "@/assets/logo-ad.avif";
export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: y,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };
  return <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="AD Investissement Conseil" className="h-10 w-auto object-contain" />
            <div className="flex flex-col gap-0.5">
              
              
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-4 text-sm">
            <button onClick={() => scrollToSection("#patrimoine")} className="px-3 py-1.5 rounded-full border border-transparent hover:bg-muted transition-colors">
              Gestion de patrimoine
            </button>
            <button onClick={() => scrollToSection("#immobilier")} className="px-3 py-1.5 rounded-full border border-transparent hover:bg-muted transition-colors">
              Immobilier
            </button>
            <button onClick={() => scrollToSection("#zones")} className="px-3 py-1.5 rounded-full border border-transparent hover:bg-muted transition-colors">
              Zones d'intervention
            </button>
            <button onClick={() => scrollToSection("#contact")} className="px-4 py-1.5 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition-all hover:shadow-lg">
              Prendre rendez-vous
            </button>
          </nav>

          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && <nav className="md:hidden flex flex-col gap-2 mt-4 pb-2">
            <button onClick={() => scrollToSection("#patrimoine")} className="px-3 py-2 text-left rounded-lg hover:bg-muted transition-colors">
              Gestion de patrimoine
            </button>
            <button onClick={() => scrollToSection("#immobilier")} className="px-3 py-2 text-left rounded-lg hover:bg-muted transition-colors">
              Immobilier
            </button>
            <button onClick={() => scrollToSection("#zones")} className="px-3 py-2 text-left rounded-lg hover:bg-muted transition-colors">
              Zones d'intervention
            </button>
            <button onClick={() => scrollToSection("#contact")} className="px-3 py-2 rounded-lg bg-accent text-accent-foreground font-medium">
              Prendre rendez-vous
            </button>
          </nav>}
      </div>
    </header>;
};