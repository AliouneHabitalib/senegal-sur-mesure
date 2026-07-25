import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import safari from "@/assets/safari.jpg";
import goree from "@/assets/goree.jpg";
import lompoul from "@/assets/desert-lompoul.jpg";
import culture from "@/assets/culture.jpg";
import sineSaloum from "@/assets/sine-saloum.jpg";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Expériences au Sénégal — Safari, plages, désert, culture" },
      { name: "description", content: "Expériences signature au Sénégal avec un guide indépendant : safari Bandia, îles paradisiaques, désert de Lompoul, villages traditionnels, excursions en pirogue." },
      { name: "keywords", content: "expériences Sénégal, safari Bandia, safari Fathala, désert Lompoul, îles du Saloum, plages Sénégal, excursion pirogue, villages traditionnels Sénégal, culture sérère wolof, activités Sénégal, guide indépendant Sénégal" },
      { property: "og:title", content: "Expériences au Sénégal — Diambar Travel Tour" },
      { property: "og:description", content: "Safari, plages, désert, culture : nos expériences signature avec guide indépendant." },
      { property: "og:image", content: safari },
      { name: "twitter:image", content: safari },
    ],
  }),
  component: Page,
});

const items = [
  { title: "Safari & réserve animalière", img: safari,
    desc: "Bandia, Fathala : approchez girafes, zèbres, rhinocéros et antilopes dans la savane sénégalaise, au milieu des baobabs millénaires." },
  { title: "Îles & plages paradisiaques", img: goree,
    desc: "Gorée, Ngor, Saly, La Somone : sable blanc, eaux turquoise et villages de pêcheurs aux couleurs vives." },
  { title: "Désert de Lompoul", img: lompoul,
    desc: "Nuit sous tente mauritanienne, dunes orangées, méharée et coucher de soleil inoubliable au cœur du désert." },
  { title: "Culture & villages traditionnels", img: culture,
    desc: "Rencontres, percussions, danses sérères et wolof, repas partagés en famille — l'âme du Sénégal." },
  { title: "Excursions en pirogue", img: sineSaloum,
    desc: "Glissez sur les bras de mer du Sine Saloum, observez les oiseaux migrateurs et accostez sur des îlots déserts." },
];

function Page() {
  return (
    <Layout>
      <section className="bg-gradient-sand py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 text-center md:px-6">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Expériences</span>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-6xl">L'âme du Sénégal</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Cinq univers à vivre, à mixer, à personnaliser dans votre voyage sur mesure.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl space-y-16 px-4 md:px-6 md:space-y-24">
          {items.map((it, i) => (
            <article key={it.title} className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="overflow-hidden rounded-3xl shadow-card">
                <img src={it.img} alt={it.title} loading="lazy" width={1280} height={832}
                  className="h-80 w-full object-cover transition-smooth hover:scale-105 md:h-96" />
              </div>
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-accent">0{i + 1}</span>
                <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">{it.title}</h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{it.desc}</p>
                <Link to="/voyage-sur-mesure"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-smooth hover:bg-nature-deep">
                  Inclure dans mon voyage
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
