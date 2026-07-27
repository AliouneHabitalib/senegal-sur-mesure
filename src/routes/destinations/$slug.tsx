import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { MapPin, ArrowRight } from "lucide-react";
import { destinations, getDestination } from "@/data/destinations";

const BASE_URL = "https://www.senegal-sur-mesure.com";

export const Route = createFileRoute("/destinations/$slug")({
  loader: ({ params }) => {
    const destination = getDestination(params.slug);
    if (!destination) throw notFound();
    return { destination };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Destination introuvable — Diambar" }, { name: "robots", content: "noindex" }],
      };
    }
    const d = loaderData.destination;
    const url = `${BASE_URL}/destinations/${d.slug}`;
    return {
      meta: [
        { title: d.metaTitle },
        { name: "description", content: d.metaDescription },
        { property: "og:title", content: d.metaTitle },
        { property: "og:description", content: d.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: DestinationPage,
  errorComponent: () => (
    <Layout>
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="font-display text-3xl font-bold">Une erreur est survenue</h1>
        <p className="mt-3 text-muted-foreground">Impossible d'afficher cette destination pour le moment.</p>
      </div>
    </Layout>
  ),
  notFoundComponent: () => (
    <Layout>
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="font-display text-3xl font-bold">Destination introuvable</h1>
        <p className="mt-3 text-muted-foreground">Cette destination n'existe pas ou a été déplacée.</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-smooth hover:bg-nature-deep"
        >
          Retour à l'accueil
        </Link>
      </div>
    </Layout>
  ),
});

function DestinationPage() {
  const { destination: d } = Route.useLoaderData();
  const others = destinations.filter((x) => x.slug !== d.slug);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative isolate flex min-h-[60vh] items-center overflow-hidden">
        <img
          src={d.img}
          alt={d.alt}
          width={1280}
          height={832}
          decoding="async"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-foreground/90 via-foreground/50 to-foreground/30" />
        <div className="container mx-auto px-4 py-20 text-white md:px-6">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Destination</span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold md:text-6xl">{d.name}</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85">{d.desc}</p>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <p className="text-lg leading-relaxed text-muted-foreground">{d.longDesc}</p>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-gradient-sand py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">À ne pas manquer</span>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
              Lieux incontournables à {d.name}
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {d.highlights.map((h: { title: string; text: string }) => (
              <article key={h.title} className="rounded-2xl bg-card p-6 shadow-soft transition-smooth hover:shadow-card">
                <MapPin className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-display text-xl font-semibold">{h.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{h.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/voyage-sur-mesure"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-soft transition-smooth hover:bg-nature-deep hover:shadow-glow"
            >
              Créer mon voyage sur mesure
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      {d.gallery && d.gallery.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">Galerie</span>
              <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">{d.name} en images</h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {d.gallery.map((g, i) => (
                <div key={i} className="overflow-hidden rounded-2xl shadow-soft">
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-64 w-full object-cover transition-smooth hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* AUTRES DESTINATIONS */}

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-center font-display text-2xl font-semibold md:text-3xl">Autres destinations</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/destinations/$slug"
                params={{ slug: o.slug }}
                className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-smooth hover:border-primary hover:text-primary"
              >
                {o.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
