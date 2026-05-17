import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { waLink, SITE } from "@/lib/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/zumba", label: "Zumba" },
  { to: "/yoga", label: "Yoga" },
  { to: "/physiotherapy", label: "Physiotherapy" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-cta text-primary-foreground font-display font-bold shadow-glow">
            1<span className="text-[10px] -ml-0.5">30</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-bold tracking-tight">
              One 30 <span className="text-gradient">Fitness</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Indore · Wellness Studio
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-accent/60 transition-colors"
              activeProps={{ className: "text-primary bg-accent/60" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={`tel:${SITE.phoneIntl}`}
            className="hidden xl:inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary"
          >
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-cta px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
          >
            Book Free Trial
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden grid h-10 w-10 place-items-center rounded-full glass"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/50 glass animate-fade-in">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-foreground/80 hover:bg-accent/60"
                activeProps={{ className: "text-primary bg-accent/60" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener"
              className="mt-3 inline-flex items-center justify-center rounded-full bg-gradient-cta px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
            >
              Book Free Trial on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
