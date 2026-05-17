import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { CTABand } from "@/components/site/CTABand";
import instructor from "@/assets/instructor.jpg";
import workout from "@/assets/workout.jpg";
import { Heart, Sparkles, Users, Flower2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About One 30 Fitness — Indore's Wellness Studio for Women" },
      { name: "description", content: "Meet Mahima Ma'am and the One 30 Fitness team — a women-friendly wellness studio in Indore for Zumba, Yoga, Dance and healing." },
      { property: "og:title", content: "About One 30 Fitness" },
      { property: "og:description", content: "A wellness home in Indore for transformation through movement, music and mindfulness." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <Section
        eyebrow="Our story"
        title={<>More than a gym — a <span className="text-gradient">transformation center</span>.</>}
        subtitle="One 30 Fitness was built on a simple belief: real wellness happens when body, mind and community move together."
      >
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img src={instructor} alt="Mahima Ma'am, founder of One 30 Fitness" loading="lazy"
            className="rounded-3xl shadow-glow w-full" width={1200} height={1400} />
          <div className="space-y-5 text-foreground/85 leading-relaxed">
            <p>
              Located in the heart of Sri Mangal Nagar, Indore, our studio is a
              safe, joyful and motivating space for women, students, working
              professionals and anyone ready to feel better in their body.
            </p>
            <p>
              <strong>Mahima Ma'am</strong> leads our team with warmth and
              expertise — known by members as the kind of coach who truly cares.
              From your very first session, you're seen, supported and guided.
            </p>
            <p>
              We're proud to combine high-energy Zumba and dance with grounding
              practices like yoga, meditation and physiotherapy — so you don't
              just get fitter, you get happier.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-soft" eyebrow="What we stand for" title="Our values.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { i: Heart, t: "Care First", d: "We treat every member like family — never like a number." },
            { i: Sparkles, t: "Real Results", d: "Personalized plans that deliver lasting transformation." },
            { i: Users, t: "Community", d: "Positive, women-friendly energy that lifts everyone up." },
            { i: Flower2, t: "Whole Wellness", d: "Body, mind and breath — addressed together." },
          ].map(({ i: I, t, d }) => (
            <div key={t} className="rounded-2xl bg-card p-6 shadow-card">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-cta text-primary-foreground">
                <I className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Inside our studio" title="Where wellness happens.">
        <img src={workout} alt="Group workout at One 30 Fitness studio" loading="lazy"
          className="rounded-3xl shadow-card w-full" width={1200} height={1200} />
      </Section>

      <CTABand />
    </SiteLayout>
  );
}
