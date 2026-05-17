import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient font-display">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-cta px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try again or head home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-gradient-cta px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >Try again</button>
          <a href="/" className="rounded-full border px-5 py-2.5 text-sm font-semibold">Go home</a>
        </div>
      </div>
    </div>
  );
}

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: "One 30 Fitness",
  description:
    "Premium fitness and wellness studio in Indore offering Zumba, Dance, Yoga, Physiotherapy, Meditation and Online Classes.",
  telephone: "+91 88896 14678",
  address: {
    "@type": "PostalAddress",
    streetAddress: "130, Sri Mangal Nagar Rd, opposite Lav Kush Vidya Vihar, near Scheme 140, Sri Mangal Nagar",
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    postalCode: "452016",
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "34",
  },
  areaServed: "Indore",
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#7a1f3d" },
      { title: "One 30 Fitness — Best Zumba, Yoga & Wellness Studio in Indore" },
      { name: "description", content: "One 30 Fitness, Indore — premium Zumba, Dance, Yoga, Physiotherapy and Wellness classes for women & beginners. 4.9★ on Google. Book a free trial today." },
      { name: "keywords", content: "Best Zumba Classes in Indore, Yoga Classes in Indore, Dance Classes in Indore, Physiotherapy in Indore, Women Fitness Center in Indore, Online Zumba Classes, Wellness Center in Indore" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "One 30 Fitness" },
      { property: "og:title", content: "One 30 Fitness — Indore's Premium Wellness & Zumba Studio" },
      { property: "og:description", content: "Zumba • Dance • Yoga • Physiotherapy. Transform your body & mind with Indore's most loved wellness studio." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700;9..144,800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(orgSchema) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
