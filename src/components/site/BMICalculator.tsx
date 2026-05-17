import { useState } from "react";
import { Calculator } from "lucide-react";
import { waLink } from "@/lib/site";

export function BMICalculator() {
  const [h, setH] = useState("165");
  const [w, setW] = useState("60");
  const height = parseFloat(h) / 100;
  const weight = parseFloat(w);
  const bmi = height > 0 && weight > 0 ? weight / (height * height) : 0;
  const label =
    bmi === 0 ? "" :
    bmi < 18.5 ? "Underweight" :
    bmi < 25 ? "Healthy" :
    bmi < 30 ? "Overweight" : "Obese";

  return (
    <div className="grid gap-6 md:grid-cols-[1fr_1fr] items-center rounded-3xl bg-gradient-soft p-6 md:p-10 shadow-card">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full bg-accent/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
          <Calculator className="h-3.5 w-3.5" /> Quick Tool
        </div>
        <h3 className="mt-3 font-display text-2xl md:text-3xl font-bold">Check your BMI in seconds</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          A quick guide to where you are today — and a personalized plan to get where you want to be.
        </p>
      </div>
      <div className="rounded-2xl bg-card p-6 shadow-soft">
        <div className="grid grid-cols-2 gap-4">
          <label className="text-sm">
            <span className="text-foreground/70">Height (cm)</span>
            <input
              type="number"
              value={h}
              onChange={(e) => setH(e.target.value)}
              className="mt-1 w-full rounded-lg border bg-background px-3 py-2 text-base"
            />
          </label>
          <label className="text-sm">
            <span className="text-foreground/70">Weight (kg)</span>
            <input
              type="number"
              value={w}
              onChange={(e) => setW(e.target.value)}
              className="mt-1 w-full rounded-lg border bg-background px-3 py-2 text-base"
            />
          </label>
        </div>
        <div className="mt-5 flex items-end justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Your BMI</div>
            <div className="font-display text-4xl font-bold text-gradient">
              {bmi ? bmi.toFixed(1) : "—"}
            </div>
            {label && <div className="text-sm font-medium text-foreground/80">{label}</div>}
          </div>
          <a
            href={waLink(`Hi One 30 Fitness, my BMI is ${bmi.toFixed(1)} (${label}). Please help me with a plan.`)}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-cta px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:scale-105 transition-transform"
          >
            Get My Plan
          </a>
        </div>
      </div>
    </div>
  );
}
