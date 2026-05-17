import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { ContactForm } from "@/components/site/ContactForm";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact One 30 Fitness — Indore Wellness Studio" },
      { name: "description", content: "Visit One 30 Fitness in Sri Mangal Nagar, Indore. WhatsApp +91 88896 14678 to book your free trial Zumba, Yoga or Physiotherapy session." },
      { property: "og:title", content: "Contact One 30 Fitness" },
      { property: "og:description", content: "Book your free trial today. WhatsApp +91 88896 14678." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <Section
        eyebrow="Get in touch"
        title={<>Let's start your <span className="text-gradient">transformation</span>.</>}
        subtitle="Fill the form, WhatsApp us, or visit our studio in Sri Mangal Nagar — we'd love to meet you."
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <ContactForm />
          <div className="space-y-5">
            <InfoCard icon={<MapPin className="h-5 w-5" />} title="Studio Address" text={SITE.address} />
            <InfoCard icon={<Phone className="h-5 w-5" />} title="Call us" text={SITE.phone}
              href={`tel:${SITE.phoneIntl}`} />
            <InfoCard icon={<MessageCircle className="h-5 w-5" />} title="WhatsApp" text="Tap to start a chat"
              href={waLink()} external />
            <InfoCard icon={<Clock className="h-5 w-5" />} title="Class Timings" text="Morning & evening batches · 6 days a week" />
            <div className="rounded-3xl overflow-hidden shadow-card border min-h-[280px]">
              <iframe
                title="One 30 Fitness map"
                src="https://www.google.com/maps?q=130+Sri+Mangal+Nagar+Rd+Indore&output=embed"
                className="h-full w-full min-h-[280px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}

function InfoCard({ icon, title, text, href, external }: { icon: React.ReactNode; title: string; text: string; href?: string; external?: boolean }) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl bg-card p-5 shadow-soft hover:shadow-card transition-shadow">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-cta text-primary-foreground">{icon}</div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-muted-foreground">{text}</div>
      </div>
    </div>
  );
  if (!href) return inner;
  return <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener" : undefined}>{inner}</a>;
}
