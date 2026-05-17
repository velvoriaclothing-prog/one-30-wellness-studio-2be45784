import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Mail, Star } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-[var(--plum)] text-primary-foreground">
      <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[var(--gold)]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-display text-2xl font-bold">One 30 Fitness</div>
            <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">
              Indore's premium wellness studio for Zumba, Dance, Yoga,
              Physiotherapy & Meditation. Transform your body & mind.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2">
              <Star className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />
              <span className="text-sm font-semibold">{SITE.rating}</span>
              <span className="text-xs text-primary-foreground/60">
                · {SITE.reviews}+ Google Reviews
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["/", "Home"],
                ["/about", "About Us"],
                ["/services", "All Services"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-[var(--gold)] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["/zumba", "Zumba Classes"],
                ["/yoga", "Yoga Sessions"],
                ["/physiotherapy", "Physiotherapy"],
                ["/services", "Dance & Meditation"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-[var(--gold)] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
              Visit Us
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[var(--gold)]" />
                <span className="text-primary-foreground/80">{SITE.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-[var(--gold)]" />
                <a href={`tel:${SITE.phoneIntl}`} className="hover:text-[var(--gold)]">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-[var(--gold)]" />
                <a href={`mailto:${SITE.email}`} className="hover:text-[var(--gold)]">
                  {SITE.email}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full glass-dark hover:bg-primary/40 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-4 py-2 text-sm font-semibold text-white hover:scale-105 transition-transform"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} One 30 Fitness, Indore. All rights reserved.</p>
          <p>Made with ❤️ for healthier, happier lives in Indore.</p>
        </div>
      </div>
    </footer>
  );
}
