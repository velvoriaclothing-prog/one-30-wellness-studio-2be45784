import { Clock, Sparkles } from "lucide-react";
import { waLink } from "@/lib/site";

export function CTABand() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-8 md:p-14 text-primary-foreground shadow-glow">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[var(--gold)]/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
                <Clock className="h-3.5 w-3.5 text-[var(--gold)]" /> Limited Slots Available
              </div>
              <h3 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight">
                Your transformation starts<br />
                <span className="bg-gradient-to-r from-[var(--gold)] to-pink-200 bg-clip-text text-transparent">
                  with a free trial class.
                </span>
              </h3>
              <p className="mt-3 max-w-xl text-primary-foreground/80">
                Try Zumba, Yoga or any of our sessions — on us. No commitment, just good vibes and real results.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <a
                href={waLink("Hi One 30 Fitness, I'd like to claim my FREE trial class.")}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold text-primary shadow-glow hover:scale-105 transition-transform"
              >
                <Sparkles className="h-4 w-4" /> Claim Free Trial on WhatsApp
              </a>
              <a
                href="tel:918889614678"
                className="inline-flex items-center justify-center gap-2 rounded-full glass-dark px-7 py-3.5 text-sm font-semibold"
              >
                Or call +91 88896 14678
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
