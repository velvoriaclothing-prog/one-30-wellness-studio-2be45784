import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { CTABand } from "@/components/site/CTABand";
import yoga from "@/assets/yoga.jpg";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/yoga")({
  head: () => ({
    meta: [
      { title: "Yoga Classes in Indore — Beginner Friendly | One 30 Fitness" },
      { name: "description", content: "Premium Yoga classes in Indore at One 30 Fitness — Hatha, Vinyasa, breathwork and meditation in a calm, women-friendly studio. Book free trial." },
      { property: "og:title", content: "Yoga Classes in Indore — One 30 Fitness" },
      { property: "og:description", content: "Calm your mind, strengthen your body, transform your life." },
      { property: "og:url", content: "/yoga" },
      { property: "og:image", content: "/assets/yoga.jpg" },
    ],
    links: [{ rel: "canonical", href: "/yoga" }],
  }),
  component: YogaPage,
});

function YogaPage() {
  return (
    <SiteLayout>
      <Section
        eyebrow="Yoga Classes Indore"
        title={<>Breathe, stretch, <span className="text-gradient">come home to yourself</span>.</>}
        subtitle="Traditional and modern yoga in a calm, light-filled studio in Sri Mangal Nagar, Indore."
      >
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-5 order-2 lg:order-1">
            <h3 className="font-display text-2xl font-bold">What you'll experience</h3>
            <ul className="space-y-3">
              {[
                "Hatha & Vinyasa flows for all levels",
                "Pranayama and meditation",
                "Restorative & stress-relief sessions",
                "Better sleep, less anxiety, more energy",
                "Personal correction & alignment guidance",
              ].map((x) => (
                <li key={x} className="flex gap-3 text-foreground/85">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-cta" />{x}
                </li>
              ))}
            </ul>
            <a href={waLink("Hi, I'd like to join Yoga classes at One 30 Fitness.")} target="_blank" rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-cta px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow">
              Book Free Yoga Trial
            </a>
          </div>
          <img src={yoga} alt="Yoga classes in Indore at One 30 Fitness" loading="lazy"
            className="rounded-3xl shadow-glow w-full order-1 lg:order-2" width={1200} height={1400} />
        </div>
      </Section>
      <CTABand />
    </SiteLayout>
  );
}
