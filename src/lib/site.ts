export const SITE = {
  name: "One 30 Fitness",
  tagline: "Transform Your Body & Mind",
  phone: "+91 88896 14678",
  phoneIntl: "918889614678",
  address:
    "130, Sri Mangal Nagar Rd, opposite Lav Kush Vidya Vihar, near Scheme 140, Sri Mangal Nagar, Indore, Madhya Pradesh 452016",
  city: "Indore",
  rating: 4.9,
  reviews: 34,
  instagram: "https://instagram.com/",
  email: "hello@one30fitness.in",
} as const;

export function waLink(message?: string) {
  const text = encodeURIComponent(
    message ??
      "Hi One 30 Fitness, I want to know more about your fitness classes."
  );
  return `https://wa.me/${SITE.phoneIntl}?text=${text}`;
}
