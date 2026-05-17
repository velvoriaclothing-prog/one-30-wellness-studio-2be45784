import { useState } from "react";
import { Send } from "lucide-react";
import { waLink } from "@/lib/site";

const services = ["Zumba", "Yoga", "Dance", "Physiotherapy", "Meditation", "Online Classes"];

export function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", service: services[0], message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi One 30 Fitness! I'm ${form.name} (${form.phone}). I'm interested in ${form.service}. ${form.message}`;
    window.open(waLink(msg), "_blank");
  };

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-card p-6 md:p-8 shadow-card space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your Name" required>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-xl border bg-background px-4 py-3 text-base focus:border-primary focus:outline-none"
            placeholder="Priya Sharma"
          />
        </Field>
        <Field label="Phone Number" required>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full rounded-xl border bg-background px-4 py-3 text-base focus:border-primary focus:outline-none"
            placeholder="+91 ..."
          />
        </Field>
      </div>
      <Field label="Service Interested In">
        <select
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className="w-full rounded-xl border bg-background px-4 py-3 text-base focus:border-primary focus:outline-none"
        >
          {services.map((s) => <option key={s}>{s}</option>)}
        </select>
      </Field>
      <Field label="Message">
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={4}
          className="w-full rounded-xl border bg-background px-4 py-3 text-base focus:border-primary focus:outline-none resize-none"
          placeholder="Tell us your goals..."
        />
      </Field>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-cta px-6 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform"
      >
        Send via WhatsApp <Send className="h-4 w-4" />
      </button>
      <p className="text-center text-xs text-muted-foreground">
        We'll continue the conversation on WhatsApp at <strong>+91 88896 14678</strong>.
      </p>
    </form>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground/80">
        {label}{required && <span className="text-primary"> *</span>}
      </span>
      {children}
    </label>
  );
}
