import { Link, useLocation } from "react-router-dom";

export const SimpleHeader = () => {
  const location = useLocation();
  
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/patrimoine" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-amber-400 bg-slate-900 text-xs font-semibold text-slate-50">
            AD
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-900">
              AD Investissement Conseil
            </span>
            <span className="text-xs text-slate-500">
              Immobilier & gestion de patrimoine
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-2 text-sm">
          <Link
            to="/patrimoine"
            className={`rounded-full px-3 py-1.5 transition ${
              location.pathname === "/patrimoine" || location.pathname === "/"
                ? "bg-slate-900 text-slate-50"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            Gestion de patrimoine
          </Link>
          <Link
            to="/immobilier"
            className={`rounded-full px-3 py-1.5 transition ${
              location.pathname === "/immobilier"
                ? "bg-slate-900 text-slate-50"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            Immobilier
          </Link>
        </nav>

        <div className="hidden text-right text-xs text-slate-500 sm:block">
          <div>+33 7 89 29 13 68</div>
          <div className="text-[11px]">Neuilly-sur-Seine & Paris Ouest</div>
        </div>
      </div>
    </header>
  );
};
