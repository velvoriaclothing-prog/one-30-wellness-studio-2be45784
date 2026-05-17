import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { CTABand } from "@/components/site/CTABand";
import { Testimonials } from "@/components/site/Testimonials";
import zumba from "@/assets/hero-zumba.jpg";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/zumba")({
  head: () => ({
    meta: [
      { title: "Best Zumba Classes in Indore — Online & Offline | One 30 Fitness" },
      { name: "description", content: "Join Indore's best Zumba classes at One 30 Fitness. High-energy, beginner-friendly, women-friendly. Online & offline batches. Book your free trial today." },
      { property: "og:title", content: "Best Zumba Classes in Indore — One 30 Fitness" },
      { property: "og:description", content: "Dance, sweat and shine. Indore's most loved Zumba studio." },
      { property: "og:url", content: "/zumba" },
      { property: "og:image", content: "/assets/hero-zumba.jpg" },
    ],
    links: [{ rel: "canonical", href: "/zumba" }],
  }),
  component: ZumbaPage,
});

function ZumbaPage() {
  return (
    <SiteLayout>
      <Section
        eyebrow="Zumba Classes Indore"
        title={<>Dance your way to a <span className="text-gradient">fitter, happier you</span>.</>}
        subtitle="Indore's most loved Zumba classes — pure energy, real fat-burn and a joyful community of women."
      >
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <img src={zumba} alt="Best Zumba classes in Indore at One 30 Fitness" loading="lazy"
            className="rounded-3xl shadow-glow w-full" width={1600} height={1280} />
          <div className="space-y-5">
            <h3 className="font-display text-2xl font-bold">Why our Zumba is different</h3>
            <ul className="space-y-3">
              {[
                "Burn 400–600 calories every session",
                "Beginner-friendly choreography & guidance",
                "Women-only & mixed batches available",
                "Online live classes for members across India",
                "Latest Bollywood + Latin tracks every week",
              ].map((x) => (
                <li key={x} className="flex gap-3 text-foreground/85">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-cta" />{x}
                </li>
              ))}
            </ul>
            <a href={waLink("Hi, I'd like to join Zumba classes at One 30 Fitness.")} target="_blank" rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-cta px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow">
              Book Free Zumba Trial
            </a>
          </div>
        </div>
      </Section>
      <Section className="bg-gradient-soft" eyebrow="Real members" title="What Zumba students say.">
        <Testimonials />
      </Section>
      <CTABand />
    </SiteLayout>
  );
}
