import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Drishti Bhayal", text: "Their Zumba classes are full of energy, positivity, and great vibes." },
  { name: "Apal Pandey", text: "Loved the environment. Best place for dance, yoga and exercise." },
  { name: "Anima Kumari", text: "Amazing experience! Back pain improved within just two sessions." },
  { name: "Swechchha Jain", text: "Workout and yoga helped me reduce stress and anxiety." },
  { name: "Manish Himthani", text: "Best fitness centre in Indore." },
];

export function Testimonials() {
  return (
    <div className="relative overflow-hidden">
      <div className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible">
        {reviews.map((r, i) => (
          <article
            key={r.name}
            className="min-w-[85%] md:min-w-0 snap-center reveal rounded-3xl bg-card p-7 shadow-card relative overflow-hidden"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <Quote className="absolute -top-2 -right-2 h-24 w-24 text-accent/60" />
            <div className="relative">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />
                ))}
              </div>
              <p className="mt-4 text-foreground/85 leading-relaxed">"{r.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-warm text-primary-foreground font-semibold">
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">Google Review</div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
