import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CTABand } from "@/components/site/CTABand";
import { Music2, HeartHandshake, Flower2, Stethoscope, Sparkles, Wifi } from "lucide-react";
import zumbaImg from "@/assets/hero-zumba.jpg";
import yogaImg from "@/assets/yoga.jpg";
import danceImg from "@/assets/dance.jpg";
import meditationImg from "@/assets/meditation.jpg";
import workoutImg from "@/assets/workout.jpg";
import physioImg from "@/assets/physio.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Zumba, Yoga, Dance & Physiotherapy in Indore | One 30 Fitness" },
      { name: "description", content: "Explore Zumba, Dance, Yoga, Physiotherapy, Meditation and Online classes at One 30 Fitness, Indore. Women-friendly, beginner-ready, results-driven." },
      { property: "og:title", content: "Services — One 30 Fitness Indore" },
      { property: "og:description", content: "Six premium wellness programs under one roof in Indore." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <Section
        eyebrow="All services"
        title={<>Wellness, your way — <span className="text-gradient">in Indore or online</span>.</>}
        subtitle="Choose from our six premium programs. Every class includes personal guidance, real attention and a supportive community."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard image={zumbaImg} icon={<Music2 className="h-5 w-5" />} title="Zumba Classes"
            desc="Indore's most loved Zumba classes — high energy, real burn, full joy."
            benefits={["400–600 cal per session", "Stamina & mood boost", "Beginner-friendly"]}
            href="/zumba" waMessage="Hi, I'm interested in Zumba classes." />
          <ServiceCard image={danceImg} icon={<Sparkles className="h-5 w-5" />} title="Dance Classes"
            desc="Bollywood, freestyle and contemporary — express, sweat and shine."
            benefits={["Confidence & posture", "Coordination", "Fun batches"]}
            waMessage="Hi, I'm interested in Dance classes." />
          <ServiceCard image={yogaImg} icon={<Flower2 className="h-5 w-5" />} title="Yoga Sessions"
            desc="Hatha, Vinyasa, breathwork & restorative — calm and strength."
            benefits={["Less stress", "More flexibility", "Better sleep"]}
            href="/yoga" waMessage="Hi, I'm interested in Yoga sessions." />
          <ServiceCard image={physioImg} icon={<Stethoscope className="h-5 w-5" />} title="Physiotherapy"
            desc="Targeted therapy for back pain, posture and recovery."
            benefits={["Back & neck relief", "Posture correction", "Muscle recovery"]}
            href="/physiotherapy" waMessage="Hi, I need physiotherapy help." />
          <ServiceCard image={meditationImg} icon={<HeartHandshake className="h-5 w-5" />} title="Meditation & Mental Wellness"
            desc="Guided meditation, breathwork and stress-relief sessions."
            benefits={["Lower anxiety", "Better focus", "Emotional balance"]}
            waMessage="Hi, I'm interested in Meditation sessions." />
          <ServiceCard image={workoutImg} icon={<Wifi className="h-5 w-5" />} title="Online Fitness Classes"
            desc="Live, interactive online Zumba and fitness — anywhere in India."
            benefits={["Live sessions", "Flexible timings", "Real coach feedback"]}
            waMessage="Hi, I'd like to join Online classes." />
        </div>
      </Section>
      <CTABand />
    </SiteLayout>
  );
}
