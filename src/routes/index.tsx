import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import heroImg from "@/assets/hero-senegal.avif";
import guideImg from "@/assets/guide-diambar.avif";
import dakar from "@/assets/dakar.avif";
import goree from "@/assets/goree.avif";
import lacRose from "@/assets/lac-rose.avif";
import sineSaloum from "@/assets/sine-saloum.avif";
import lompoul from "@/assets/desert-lompoul.avif";
import saintLouis from "@/assets/saint-louis.avif";
import safari from "@/assets/safari.avif";
import culture from "@/assets/culture.avif";
import hospitalite from "@/assets/hospitalite.avif";
import avecLaTortue from "@/assets/avec-la-tortue.avif";
import lacRoseFlag from "@/assets/photo-lac-rose-flag.avif";
import safariDiambarLions from "@/assets/safari-diambar-lions.avif";
import safariLions from "@/assets/safari-lions.avif";
import saloumBaobab from "@/assets/saloum-baobab.avif";
import saloumOiseaux from "@/assets/saloum-oiseaux.avif";
import lompoulCoucherSoleil from "@/assets/lompoul-coucher-soleil.avif";
import diambarClientStromae from "@/assets/diambar-client-stromae.avif";
import diambarNickSelfie from "@/assets/diambar-nick-selfie.avif";
import saloumDinerPlage from "@/assets/saloum-diner-plage.avif";
import { MapPin, Compass, Users, Heart, Star, ArrowRight, Quote } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { destinations as allDestinations } from "@/data/destinations";

const faqs = [
  {
    q: "Combien coûte un voyage sur mesure au Sénégal ?",
    a: "Le tarif dépend de la durée du séjour, du nombre de voyageurs, du niveau de confort choisi (hébergements, transport privé, activités) et de la saison. Chaque itinéraire étant unique, nous établissons un devis personnalisé et gratuit sous 24h après réception de votre demande.",
  },
  {
    q: "Ai-je besoin d'un visa pour voyager au Sénégal ?",
    a: "Les conditions d'entrée varient selon votre nationalité. Les ressortissants de nombreux pays (dont la France, la Belgique, la Suisse et le Canada) sont dispensés de visa pour un séjour touristique inférieur à 90 jours, mais un passeport valide au moins 6 mois est requis. Vérifiez toujours les formalités à jour auprès du consulat avant votre départ.",
  },
  {
    q: "Quelle est la meilleure période pour visiter le Sénégal ?",
    a: "La saison sèche, de novembre à mai, est généralement la période la plus agréable : températures douces, faible humidité et ciel dégagé, idéale pour découvrir Dakar, le désert de Lompoul, le Sine Saloum ou Saint-Louis. La saison des pluies (juillet à octobre) offre des paysages plus verts mais des averses ponctuelles.",
  },
  {
    q: "Diambar parle-t-il anglais ?",
    a: "Diambar est un guide francophone et parle également wolof, la langue locale. Pour les voyageurs anglophones, un accompagnement bilingue peut être organisé sur demande afin de garantir une expérience fluide et conviviale tout au long du séjour.",
  },
  {
    q: "Comment se déroule l'organisation du voyage avec Diambar ?",
    a: "Vous remplissez le formulaire de voyage sur mesure en précisant vos envies, dates et budget. Nous échangeons ensuite par email ou WhatsApp pour affiner l'itinéraire, puis nous vous envoyons un devis détaillé sous 24h. Après confirmation, Diambar prend en charge l'ensemble de la logistique et vous accueille dès votre arrivée à Dakar.",
  },
];

const testimonials = [
  { name: "Sophie & Marc", text: "Un voyage inoubliable ! Diambar est attentif, drôle et nous a fait découvrir un Sénégal authentique. Une famille de cœur.", rating: 5 },
  { name: "Famille Dupont", text: "Organisation parfaite, guide passionnant, hébergements de qualité. Nos enfants en parlent encore !", rating: 5 },
  { name: "Caroline L.", text: "Le voyage de notre vie. Tout était sur mesure, du désert de Lompoul aux îles du Saloum. Merci Diambar !", rating: 5 },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sénégal sur mesure — Voyage personnalisé avec Diambar" },
      { name: "description", content: "Voyage 100% sur mesure au Sénégal avec Diambar, guide local indépendant. Dakar, Gorée, Lac Rose, Saint-Louis, désert de Lompoul." },
      { property: "og:title", content: "Sénégal sur mesure — Voyage personnalisé avec Diambar" },
      { property: "og:description", content: "Voyage 100% sur mesure au Sénégal avec Diambar, guide local indépendant. Dakar, Gorée, Lac Rose, Saint-Louis, désert de Lompoul." },
      { property: "og:url", content: "https://www.senegal-sur-mesure.com/" },
    ],
    links: [{ rel: "canonical", href: "https://www.senegal-sur-mesure.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "Diambar Travel Tour",
          url: "https://www.senegal-sur-mesure.com",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: 5,
            reviewCount: 3,
            bestRating: 5,
          },
          review: testimonials.map((t) => ({
            "@type": "Review",
            author: { "@type": "Person", name: t.name },
            reviewBody: t.text,
            reviewRating: {
              "@type": "Rating",
              ratingValue: t.rating,
              bestRating: 5,
            },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

const destinations = allDestinations;


const reasons = [
  { icon: MapPin, title: "Expertise locale", desc: "Une connaissance intime du terrain et des plus beaux secrets du Sénégal." },
  { icon: Compass, title: "Séjours personnalisés", desc: "Chaque itinéraire est conçu autour de vos envies, votre rythme, votre budget." },
  { icon: Users, title: "Guide privé", desc: "Diambar et son équipe vous accompagnent du premier au dernier jour." },
  { icon: Heart, title: "Expérience authentique", desc: "Rencontres vraies, immersion culturelle, hospitalité sénégalaise." },
];


const circuits = [
  { name: "Découverte du Sénégal", days: "8 jours", desc: "Dakar, Gorée, Saly, Bandia, Lac Rose", img: dakar },
  { name: "Évasion Sine Saloum", days: "6 jours", desc: "Mangroves, pirogue, villages traditionnels", img: sineSaloum },
  { name: "Désert & Saint-Louis", days: "7 jours", desc: "Lompoul, Saint-Louis, Langue de Barbarie", img: lompoul },
];

function Index() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Plage du Sénégal au coucher du soleil avec pirogue traditionnelle"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container relative mx-auto px-4 py-24 md:px-6">
          <div className="max-w-3xl text-white">
            <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              Guide indépendant au Sénégal
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-balance md:text-7xl">
              Découvrez le Sénégal autrement, avec un voyage 100% sur mesure
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
              Imaginez votre séjour idéal — nous le créons pour vous, avec Diambar, votre guide local.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/voyage-sur-mesure"
                className="group inline-flex items-center gap-2 rounded-full bg-sun px-7 py-4 text-base font-semibold text-foreground shadow-card transition-smooth hover:scale-105 hover:shadow-glow"
              >
                Créer mon voyage sur mesure
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/experiences"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition-smooth hover:bg-white hover:text-primary"
              >
                Voir les expériences
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDE PRESENTATION */}
      <section className="bg-gradient-sand py-20 md:py-28">
        <div className="container mx-auto grid gap-12 px-4 md:grid-cols-5 md:px-6">
          <div className="md:col-span-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-warm opacity-30 blur-2xl" />
              <img
                src={guideImg}
                alt="Diambar, guide local au Sénégal"
                loading="lazy"
                className="relative h-72 w-72 rounded-full object-cover shadow-card ring-8 ring-background md:h-80 md:w-80"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Votre guide</span>
            <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">Rencontrez Diambar</h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              Avec Diambar, vous serez accueilli comme des membres de sa famille et il vous fera vivre des
              moments inoubliables à travers un voyage sur mesure. Il sera aux petits soins avec vous.
              Il connaît tout le monde et tout le monde le connaît et le respecte. Et il sait s'entourer des meilleurs.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/80">
              De plus, c'est un rayon de soleil ! Toujours de bonne humeur, avec un grand sourire et beaucoup d'humour ;
              mais aussi des principes et un grand respect des autres. Grâce à lui, votre voyage sera une totale réussite,
              au-delà de vos espérances.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Un guide, une vision : votre Sénégal</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            <strong className="text-foreground">DIAMBAR TRAVEL TOUR</strong> est un guide indépendant spécialisé dans
            les voyages personnalisés au Sénégal, avec accompagnement local dédié. Nous concevons
            chaque séjour comme une œuvre unique, à votre image.
          </p>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-muted/40 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Pourquoi nous choisir</span>
            <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">L'art du voyage authentique</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <div key={r.title} className="group rounded-2xl bg-card p-7 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-smooth group-hover:bg-primary group-hover:text-primary-foreground">
                  <r.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Destinations</span>
            <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">Lieux incontournables</h2>
            <p className="mt-4 text-muted-foreground">Des merveilles à intégrer à votre itinéraire.</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d) => (
              <Link
                key={d.name}
                to="/destinations/$slug"
                params={{ slug: d.slug }}
                className="group relative block overflow-hidden rounded-2xl shadow-soft transition-smooth hover:shadow-card"
              >
                <img src={d.img} alt={d.alt} loading="lazy" width={1280} height={832} className="h-72 w-full object-cover transition-smooth group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="font-display text-2xl font-semibold">{d.name}</h3>
                  <p className="mt-1 text-sm text-white/85">{d.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-white transition-all group-hover:gap-2">
                    Découvrir <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CIRCUITS */}
      <section className="bg-gradient-sand py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Inspiration</span>
            <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">Nos circuits populaires</h2>
            <p className="mt-4 text-muted-foreground">Des idées d'itinéraires à personnaliser ensemble.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {circuits.map((c) => (
              <article key={c.name} className="overflow-hidden rounded-2xl bg-card shadow-soft transition-smooth hover:shadow-card">
                <img src={c.img} alt={c.name} loading="lazy" width={1280} height={832} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">{c.days}</span>
                  <h3 className="mt-2 font-display text-2xl font-semibold">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                  <Link to="/voyage-sur-mesure" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                    Personnaliser ce circuit <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Galerie</span>
            <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">Le Sénégal en images</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              { src: safariDiambarLions, alt: "Safari lions réserve de Bandia, Sénégal — Diambar guide indépendant" },
              { src: safariLions, alt: "Safari lions réserve de Bandia, Sénégal" },
              { src: safari, alt: "Safari au Sénégal, faune de la réserve de Bandia" },
              { src: culture, alt: "Scène culturelle traditionnelle sénégalaise" },
              { src: lacRose, alt: "Lac Rose (Retba) aux eaux rosées près de Dakar" },
              { src: lompoul, alt: "Dunes orangées du désert de Lompoul au Sénégal" },
              { src: lompoulCoucherSoleil, alt: "Coucher de soleil sur les dunes du désert de Lompoul, Sénégal" },
              { src: hospitalite, alt: "Hospitalité sénégalaise : Diambar et une jeune voyageuse tout sourire" },
              { src: diambarClientStromae, alt: "Diambar, guide indépendant, avec un voyageur au Sénégal" },
              { src: diambarNickSelfie, alt: "Selfie de Diambar avec un voyageur dans un village au Sénégal" },
              { src: saloumDinerPlage, alt: "Dîner convivial sur la plage au Sine Saloum avec Diambar et un voyageur" },
              { src: avecLaTortue, alt: "Diambar, guide indépendant, portant une tortue au cœur d'une réserve naturelle" },
              { src: sineSaloum, alt: "Mangroves du Sine Saloum en pirogue" },
              { src: saloumBaobab, alt: "Baobab au bord de l'eau dans le delta du Sine Saloum, Sénégal" },
              { src: saloumOiseaux, alt: "Oiseaux sur un banc de sable dans le Sine Saloum, Sénégal" },
              { src: goree, alt: "Île de Gorée, patrimoine UNESCO au large de Dakar" },
              { src: lacRoseFlag, alt: "Pirogue rose portant le drapeau sénégalais au bord du Lac Rose" },
              { src: saintLouis, alt: "Architecture coloniale de Saint-Louis du Sénégal" },
              { src: dakar, alt: "Vue urbaine de Dakar, capitale du Sénégal" },
            ].map((img, i) => (
              <div key={i} className={`overflow-hidden rounded-xl ${i === 0 || i === 7 ? "row-span-2" : ""}`}>
                <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover transition-smooth hover:scale-110" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-ocean-deep py-20 text-white md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-sun">Témoignages</span>
            <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">Ils ont voyagé avec Diambar</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl bg-white/10 p-7 backdrop-blur-md ring-1 ring-white/20">
                <Quote className="h-8 w-8 text-sun" />
                <p className="mt-4 text-base leading-relaxed text-white/90">"{t.text}"</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="font-semibold">{t.name}</span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-sun text-sun" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/40 py-20 md:py-28">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">FAQ</span>
            <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">Questions fréquentes</h2>
            <p className="mt-4 text-muted-foreground">Tout ce qu'il faut savoir avant de préparer votre séjour au Sénégal.</p>
          </div>
          <Accordion type="single" collapsible className="mt-12">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-display text-lg font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-nature-deep to-ocean-deep p-10 text-white shadow-card md:p-16">
            <div className="relative max-w-2xl">
              <h2 className="font-display text-4xl font-bold md:text-5xl">Prêt à vivre votre Sénégal ?</h2>
              <p className="mt-4 text-lg text-white/90">
                Confiez-nous vos envies, nous bâtissons l'itinéraire parfait — réponse sous 24h.
              </p>
              <Link
                to="/voyage-sur-mesure"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-sun px-7 py-4 text-base font-semibold text-foreground shadow-soft transition-smooth hover:scale-105"
              >
                Créer mon voyage sur mesure <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
