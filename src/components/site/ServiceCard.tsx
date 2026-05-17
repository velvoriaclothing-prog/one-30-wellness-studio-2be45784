import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { waLink } from "@/lib/site";

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  benefits: string[];
  href?: string;
  image?: string;
  waMessage?: string;
}

export function ServiceCard({ icon, title, desc, benefits, href, image, waMessage }: ServiceCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl bg-card shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-glow">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute top-4 left-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-cta text-primary-foreground shadow-glow">
            {icon}
          </div>
        </div>
      )}
      <div className="p-6">
        {!image && (
          <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-cta text-primary-foreground shadow-glow">
            {icon}
          </div>
        )}
        <h3 className="font-display text-xl font-bold text-foreground">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
        <ul className="mt-4 space-y-1.5">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {b}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center gap-2">
          <a
            href={waLink(waMessage)}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-cta px-4 py-2 text-xs font-semibold text-primary-foreground shadow-soft hover:scale-105 transition-transform"
          >
            Join on WhatsApp
          </a>
          {href && (
            <Link
              to={href}
              className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-xs font-semibold text-primary hover:bg-accent/60"
            >
              Learn more <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
