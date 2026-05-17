import zumba from "@/assets/hero-zumba.jpg";
import yoga from "@/assets/yoga.jpg";
import dance from "@/assets/dance.jpg";
import workout from "@/assets/workout.jpg";
import meditation from "@/assets/meditation.jpg";
import physio from "@/assets/physio.jpg";

const items = [
  { src: zumba, alt: "Zumba class energy", span: "md:row-span-2" },
  { src: yoga, alt: "Yoga session in soft light", span: "" },
  { src: dance, alt: "Dance class for women", span: "" },
  { src: workout, alt: "Group strength workout", span: "md:col-span-2" },
  { src: meditation, alt: "Meditation & wellness", span: "" },
  { src: physio, alt: "Physiotherapy treatment", span: "" },
];

export function Gallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
      {items.map((it) => (
        <figure
          key={it.alt}
          className={`group relative overflow-hidden rounded-2xl shadow-card ${it.span}`}
        >
          <img
            src={it.src}
            alt={it.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <figcaption className="absolute bottom-3 left-3 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity">
            {it.alt}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
