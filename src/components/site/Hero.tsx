import heroImg from "@/assets/hero-zumba.jpg";
import { Star, Users, Wifi, Sparkles } from "lucide-react";
import { waLink } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden -mt-20 pt-24 md:pt-28">
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="absolute inset-0 -z-10 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_80%,oklch(0.82_0.13_80),transparent_45%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:px-8 py-12 md:py-20 lg:grid-cols-2">
        <div className="text-primary-foreground reveal">
          <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium">
            <Sparkles className="h-3.5 w-3.5 text-[var(--gold)]" />
            #1 Wellness Studio in Indore
          </div>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Feel Energetic,<br />
            Confident & Healthy<br />
            <span className="bg-gradient-to-r from-[var(--gold)] to-pink-200 bg-clip-text text-transparent">
              with One 30 Fitness
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base md:text-lg text-primary-foreground/85">
            Zumba • Dance • Yoga • Physiotherapy • Wellness — under one roof.
            Personal attention, positive vibes, and real transformation in Indore.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-6 py-3.5 text-sm md:text-base font-semibold text-white shadow-glow hover:scale-105 transition-transform"
            >
              Join Now on WhatsApp
            </a>
            <a
              href={waLink("Hi One 30 Fitness, I'd like to book a FREE trial class.")}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm md:text-base font-semibold text-foreground hover:bg-white transition-colors"
            >
              Book Free Trial
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 max-w-lg">
            <TrustBadge icon={<Star className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />} label="4.9" sub="Google Rating" />
            <TrustBadge icon={<Users className="h-4 w-4 text-[var(--gold)]" />} label="34+" sub="Happy Members" />
            <TrustBadge icon={<Wifi className="h-4 w-4 text-[var(--gold)]" />} label="On + Off" sub="Online & Offline" />
          </div>
        </div>

        <div className="relative reveal" style={{ animationDelay: "0.15s" }}>
          <div className="relative aspect-[4/5] md:aspect-[5/6] w-full max-w-md mx-auto">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-warm opacity-60 blur-2xl" />
            <img
              src={heroImg}
              alt="Energetic Zumba class at One 30 Fitness studio in Indore"
              width={1600}
              height={1280}
              className="relative h-full w-full rounded-[2rem] object-cover shadow-glow"
              fetchPriority="high"
            />
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl px-4 py-3 shadow-card animate-float">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[0,1,2].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full ring-2 ring-white bg-gradient-warm" />
                  ))}
                </div>
                <div className="text-xs">
                  <div className="font-semibold text-foreground">200+ Transformations</div>
                  <div className="text-muted-foreground">this year in Indore</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 shadow-card">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-[var(--gold)] text-[var(--gold)]" />
                <div className="text-sm font-bold">4.9 / 5</div>
              </div>
              <div className="text-[10px] text-muted-foreground">Google Reviews</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden border-y border-white/10 bg-black/20 py-4">
        <div className="flex animate-marquee whitespace-nowrap gap-12 text-primary-foreground/70 text-sm uppercase tracking-[0.25em] font-medium">
          {Array.from({ length: 2 }).flatMap((_, i) =>
            ["Zumba", "Yoga", "Dance", "Physiotherapy", "Meditation", "Women Fitness", "Online Classes", "Stress Relief"].map((w) => (
              <span key={`${i}-${w}`} className="flex items-center gap-12">
                {w} <span className="text-[var(--gold)]">✦</span>
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function TrustBadge({ icon, label, sub }: { icon: React.ReactNode; label: string; sub: string }) {
  return (
    <div className="glass-dark rounded-2xl px-3 py-3">
      <div className="flex items-center gap-1.5">{icon}<span className="font-display text-lg font-bold">{label}</span></div>
      <div className="text-[10px] uppercase tracking-wider text-primary-foreground/70">{sub}</div>
    </div>
  );
}
