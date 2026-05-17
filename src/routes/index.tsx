import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { ServiceCard } from "@/components/site/ServiceCard";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ, faqs } from "@/components/site/FAQ";
import { Gallery } from "@/components/site/Gallery";
import { CTABand } from "@/components/site/CTABand";
import { Counter } from "@/components/site/Counter";
import { BMICalculator } from "@/components/site/BMICalculator";
import { MobileCTABar } from "@/components/site/MobileCTABar";
import {
  Music2, HeartHandshake, Flower2, Stethoscope, Sparkles, Wifi,
  ShieldCheck, Users, Heart, Smile, MapPin, ArrowRight, Star,
} from "lucide-react";
import instructorImg from "@/assets/instructor.jpg";
import physioImg from "@/assets/physio.jpg";
import zumbaImg from "@/assets/hero-zumba.jpg";
import yogaImg from "@/assets/yoga.jpg";
import danceImg from "@/assets/dance.jpg";
import meditationImg from "@/assets/meditation.jpg";
import workoutImg from "@/assets/workout.jpg";
import { waLink } from "@/lib/site";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "One 30 Fitness — Best Zumba, Yoga & Wellness Studio in Indore" },
      { name: "description", content: "Transform your body & mind at One 30 Fitness, Indore. Zumba, Dance, Yoga, Physiotherapy & Meditation. 4.9★ on Google. Book your free trial on WhatsApp." },
      { property: "og:title", content: "One 30 Fitness — Indore's Premium Wellness Studio" },
      { property: "og:description", content: "Zumba • Dance • Yoga • Physiotherapy. 4.9★ — Book a free trial today." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema) }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />

      {/* About */}
      <Section
        eyebrow="About One 30 Fitness"
        title={<>Not just a gym — a <span className="text-gradient">wellness home</span> in Indore.</>}
        subtitle="We blend movement, music, mindfulness and personal care. Whether you're a beginner, a busy professional, a college student, or recovering from pain — you'll find your space here."
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
          <div className="relative reveal">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-warm opacity-50 blur-2xl" />
            <img
              src={instructorImg}
              alt="Mahima Ma'am, founder and lead instructor at One 30 Fitness Indore"
              loading="lazy"
              className="relative rounded-3xl shadow-glow w-full"
              width={1200}
              height={1400}
            />
            <div className="absolute -bottom-6 -right-4 md:right-8 glass rounded-2xl px-5 py-4 shadow-card max-w-[240px]">
              <div className="text-xs uppercase tracking-widest text-primary font-semibold">Led by</div>
              <div className="font-display text-lg font-bold">Mahima Ma'am</div>
              <div className="text-xs text-muted-foreground">Motivating, supportive & trusted by 200+ members</div>
            </div>
          </div>
          <div className="space-y-6 reveal" style={{ animationDelay: "0.1s" }}>
            {[
              { icon: <Heart className="h-5 w-5" />, t: "Personalized Attention", d: "Small batches, real feedback. Your goals and body are never one-size-fits-all." },
              { icon: <Smile className="h-5 w-5" />, t: "Positive, Friendly Environment", d: "No judgement. Just music, movement and a community that cheers you on." },
              { icon: <Flower2 className="h-5 w-5" />, t: "Stress Relief Through Movement", d: "We blend Zumba, yoga and meditation so you leave lighter — mentally and physically." },
              { icon: <ShieldCheck className="h-5 w-5" />, t: "Women-Friendly & Safe", d: "A safe, comfortable space designed for women of every age and fitness level." },
            ].map((x) => (
              <div key={x.t} className="flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-cta text-primary-foreground shadow-soft">
                  {x.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">{x.t}</h3>
                  <p className="text-sm text-muted-foreground">{x.d}</p>
                </div>
              </div>
            ))}
            <Link to="/about" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section
        className="bg-gradient-soft"
        eyebrow="What we offer"
        title={<>Everything you need to <span className="text-gradient">feel amazing</span>.</>}
        subtitle="From high-energy Zumba to deep healing physiotherapy — six premium programs under one roof in Indore."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard image={zumbaImg} icon={<Music2 className="h-5 w-5" />} title="Zumba Classes"
            desc="Dance away calories with our high-energy Zumba sessions — the best in Indore."
            benefits={["Burn 400–600 cal / session", "Boost stamina & mood", "Beginner-friendly choreography"]}
            href="/zumba" waMessage="Hi One 30 Fitness, I'm interested in Zumba classes." />
          <ServiceCard image={danceImg} icon={<Sparkles className="h-5 w-5" />} title="Dance Classes"
            desc="Bollywood, freestyle and contemporary — express, sweat and shine."
            benefits={["Build confidence & posture", "Improve coordination", "Fun batch experience"]}
            waMessage="Hi One 30 Fitness, I'm interested in Dance classes." />
          <ServiceCard image={yogaImg} icon={<Flower2 className="h-5 w-5" />} title="Yoga Sessions"
            desc="Traditional Hatha, Vinyasa and breathwork in a calm, light-filled studio."
            benefits={["Reduce stress & anxiety", "Improve flexibility", "Deeper sleep"]}
            href="/yoga" waMessage="Hi One 30 Fitness, I'm interested in Yoga sessions." />
          <ServiceCard image={physioImg} icon={<Stethoscope className="h-5 w-5" />} title="Physiotherapy & Pain Relief"
            desc="Personalized therapy for back pain, posture and recovery."
            benefits={["Back & neck pain relief", "Posture correction", "Muscle recovery plans"]}
            href="/physiotherapy" waMessage="Hi One 30 Fitness, I need physiotherapy / pain relief help." />
          <ServiceCard image={meditationImg} icon={<HeartHandshake className="h-5 w-5" />} title="Meditation & Wellness"
            desc="Guided meditation and breathwork to calm the mind and reset your day."
            benefits={["Lower stress & anxiety", "Better focus", "Emotional balance"]}
            waMessage="Hi One 30 Fitness, I'm interested in Meditation sessions." />
          <ServiceCard image={workoutImg} icon={<Wifi className="h-5 w-5" />} title="Online Fitness Classes"
            desc="Live online Zumba and fitness classes — anywhere in India."
            benefits={["Live, interactive sessions", "Flexible timings", "Personal feedback"]}
            waMessage="Hi One 30 Fitness, I'd like to join Online classes." />
        </div>
      </Section>

      {/* Why Choose */}
      <Section
        eyebrow="Why members love us"
        title={<>Indore's most <span className="text-gradient">trusted</span> wellness studio.</>}
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { n: 200, s: "+", l: "Active Members" },
            { n: 4.9, s: "★", l: "Google Rating" },
            { n: 6, s: "+", l: "Premium Programs" },
            { n: 1000, s: "+", l: "Transformations" },
          ].map((x) => (
            <div key={x.l} className="rounded-3xl bg-card p-6 text-center shadow-card reveal">
              <Counter to={x.n} suffix={x.s} />
              <div className="mt-1 text-sm text-muted-foreground">{x.l}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Certified & Supportive Trainers", "Trained professionals who guide you safely.", ShieldCheck],
            ["Women-Friendly Environment", "Safe, judgement-free, and joyful for every woman.", Heart],
            ["Personalized Guidance", "Plans built around your body, goals and schedule.", Sparkles],
            ["Stress Relief Focus", "Movement + meditation for real mental wellness.", Flower2],
            ["Beginner Friendly", "Zero experience needed. Start exactly where you are.", Smile],
            ["Flexible Online & Offline", "Join in-studio in Indore — or live from anywhere.", Wifi],
          ].map(([t, d, Icon]) => {
            const I = Icon as typeof ShieldCheck;
            return (
              <div key={t as string} className="rounded-2xl border bg-card p-5 hover:shadow-card transition-shadow">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-primary">
                  <I className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-display text-lg font-bold">{t as string}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d as string}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* CTA Band */}
      <CTABand />

      {/* BMI */}
      <Section
        eyebrow="Free tool"
        title={<>Where are you on your <span className="text-gradient">wellness journey?</span></>}
      >
        <BMICalculator />
      </Section>

      {/* Physiotherapy Highlight */}
      <Section className="bg-gradient-soft">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src={physioImg}
            alt="Physiotherapy session at One 30 Fitness Indore"
            loading="lazy"
            className="rounded-3xl shadow-card w-full"
            width={1200} height={1200}
          />
          <div className="reveal">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Healing & Recovery
            </div>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
              Physiotherapy that actually <span className="text-gradient">heals</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              From chronic back pain to postural issues — our personalized therapy
              sessions help you move freely again. Members report relief in just
              1–2 sessions.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Back pain relief", "Posture correction", "Muscle recovery", "Therapy sessions", "Personalized healing", "Injury rehab"].map((x) => (
                <li key={x} className="flex items-center gap-2 text-sm">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-cta text-primary-foreground text-xs">✓</span>
                  {x}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={waLink("Hi, I'd like to book a physiotherapy consultation.")} target="_blank" rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-cta px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">
                Book Therapy on WhatsApp
              </a>
              <Link to="/physiotherapy" className="inline-flex items-center gap-1.5 rounded-full border px-6 py-3 text-sm font-semibold">
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section
        eyebrow="Real reviews"
        title={<>Loved by women across <span className="text-gradient">Indore</span>.</>}
        subtitle="4.9★ on Google · 34+ verified reviews"
      >
        <Testimonials />
      </Section>

      {/* Gallery */}
      <Section
        className="bg-gradient-soft"
        eyebrow="Inside the studio"
        title={<>A glimpse of the <span className="text-gradient">good vibes</span>.</>}
      >
        <Gallery />
      </Section>

      {/* FAQ */}
      <Section
        eyebrow="Frequently asked"
        title="Everything you wanted to know."
      >
        <FAQ />
      </Section>

      {/* Contact mini */}
      <Section
        eyebrow="Visit us"
        title={<>Come say hi in <span className="text-gradient">Sri Mangal Nagar</span>.</>}
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl overflow-hidden shadow-card border min-h-[320px]">
            <iframe
              title="One 30 Fitness location"
              src="https://www.google.com/maps?q=130+Sri+Mangal+Nagar+Rd+Indore&output=embed"
              className="h-full w-full min-h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="rounded-3xl bg-card p-7 shadow-card space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="font-semibold">Studio Address</div>
                <p className="text-sm text-muted-foreground">130, Sri Mangal Nagar Rd, opposite Lav Kush Vidya Vihar, near Scheme 140, Indore 452016</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Star className="h-5 w-5 text-[var(--gold)] fill-[var(--gold)] mt-0.5" />
              <div>
                <div className="font-semibold">4.9 ★ on Google</div>
                <p className="text-sm text-muted-foreground">Loved by 34+ verified members across Indore.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="font-semibold">Class Timings</div>
                <p className="text-sm text-muted-foreground">Morning & evening batches, 6 days a week. WhatsApp for the latest schedule.</p>
              </div>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-cta px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">
              Full Contact Page <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <MobileCTABar />
    </SiteLayout>
  );
}
