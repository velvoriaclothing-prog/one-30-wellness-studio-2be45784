import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { CTABand } from "@/components/site/CTABand";
import physio from "@/assets/physio.jpg";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/physiotherapy")({
  head: () => ({
    meta: [
      { title: "Physiotherapy in Indore — Back Pain & Posture Care | One 30 Fitness" },
      { name: "description", content: "Expert physiotherapy in Indore for back pain, posture correction, muscle recovery and rehab. Personalized therapy sessions at One 30 Fitness." },
      { property: "og:title", content: "Physiotherapy in Indore — One 30 Fitness" },
      { property: "og:description", content: "Back pain relief, posture correction and personalized healing." },
      { property: "og:url", content: "/physiotherapy" },
      { property: "og:image", content: "/assets/physio.jpg" },
    ],
    links: [{ rel: "canonical", href: "/physiotherapy" }],
  }),
  component: PhysioPage,
});

function PhysioPage() {
  return (
    <SiteLayout>
      <Section
        eyebrow="Physiotherapy & Pain Relief"
        title={<>Move better, live <span className="text-gradient">pain-free</span>.</>}
        subtitle="Personalized therapy for back pain, posture and recovery — trusted by members who got relief in just 1–2 sessions."
      >
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <img src={physio} alt="Physiotherapy in Indore at One 30 Fitness" loading="lazy"
            className="rounded-3xl shadow-glow w-full" width={1200} height={1200} />
          <div className="space-y-5">
            <h3 className="font-display text-2xl font-bold">We help with</h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {["Back pain relief", "Posture correction", "Neck & shoulder pain", "Muscle recovery", "Therapy sessions", "Personalized healing"].map((x) => (
                <li key={x} className="flex items-center gap-2 rounded-xl border bg-card px-3 py-2.5 text-sm">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-cta text-primary-foreground text-xs">✓</span>{x}
                </li>
              ))}
            </ul>
            <blockquote className="rounded-2xl bg-accent/50 p-5 text-foreground/85 italic">
              "Amazing experience! Back pain improved within just two sessions." — Anima Kumari
            </blockquote>
            <a href={waLink("Hi, I'd like to book a physiotherapy session at One 30 Fitness.")} target="_blank" rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-cta px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow">
              Book Therapy on WhatsApp
            </a>
          </div>
        </div>
      </Section>
      <CTABand />
    </SiteLayout>
  );
}
