import { useState } from "react";
import { Plus } from "lucide-react";

export const faqs = [
  { q: "Do you provide online classes?", a: "Yes! We offer live online Zumba and fitness classes for members who can't visit our Indore studio. Sessions are interactive and beginner-friendly." },
  { q: "Are beginners welcome?", a: "Absolutely. Most of our members start as complete beginners. Our trainers personalize every session so you progress at your own pace." },
  { q: "Do you offer women-only sessions?", a: "Yes. One 30 Fitness has dedicated women-friendly batches with a safe, comfortable, and supportive environment." },
  { q: "Can I join Zumba for weight loss?", a: "Yes — Zumba is one of our most popular and effective formats for fat loss, stamina, and toning, combined with our nutrition guidance." },
  { q: "Do you provide physiotherapy for back pain?", a: "Yes. Our physiotherapy sessions focus on back pain relief, posture correction, and personalized recovery plans." },
  { q: "What are the class timings?", a: "We run morning and evening batches 6 days a week. WhatsApp us at +91 88896 14678 for the current schedule." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={f.q}
            className={`rounded-2xl border bg-card transition-all ${isOpen ? "shadow-card border-primary/30" : "border-border"}`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-foreground">{f.q}</span>
              <Plus
                className={`h-5 w-5 shrink-0 text-primary transition-transform ${isOpen ? "rotate-45" : ""}`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
