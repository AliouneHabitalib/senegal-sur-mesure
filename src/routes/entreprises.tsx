import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useState, FormEvent } from "react";
import { Briefcase, Users, Award, CheckCircle2, Send } from "lucide-react";

export const Route = createFileRoute("/entreprises")({
  head: () => ({
    meta: [
      { title: "Séminaires & team building au Sénégal — Diambar, guide indépendant" },
      { name: "description", content: "Séminaires d'entreprise, team building et voyages d'affaires au Sénégal. Organisation clé en main par un guide indépendant local." },
      { name: "keywords", content: "séminaire entreprise Sénégal, team building Sénégal, voyage d'affaires Dakar, incentive Sénégal, organisation séminaire Dakar, événement entreprise Sénégal, MICE Sénégal, guide indépendant entreprise" },
      { property: "og:title", content: "Séminaires & team building au Sénégal — Diambar" },
      { property: "og:description", content: "Voyages d'entreprise sur mesure au Sénégal avec un guide indépendant." },
    ],
  }),
  component: Page,
});

const inputCls =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-smooth focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
const labelCls = "mb-2 block text-sm font-semibold text-foreground";

const offers = [
  { icon: Award, title: "Séminaires", desc: "Cadres inspirants face à l'océan ou dans le désert pour des séminaires marquants." },
  { icon: Users, title: "Team Building", desc: "Activités sur mesure : pirogue, beach games, ateliers culturels, défis collaboratifs." },
  { icon: Briefcase, title: "Voyages d'affaires", desc: "Logistique premium, transferts, hébergements de standing, accompagnement bilingue." },
];

function Page() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const body = encodeURIComponent(Object.entries(data).map(([k, v]) => `${k}: ${v}`).join("\n"));
    window.location.href = `mailto:diambarseck1@gmail.com?subject=${encodeURIComponent("Demande entreprise")}&body=${body}`;
    setSent(true);
  };

  return (
    <Layout>
      <section className="bg-gradient-sand py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 text-center md:px-6">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Entreprises</span>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-6xl">Séminaires & événements au Sénégal</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Offrez à vos équipes une expérience inoubliable, alliant performance et émotion.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3 md:px-6">
          {offers.map((o) => (
            <div key={o.title} className="rounded-2xl bg-card p-7 shadow-soft transition-smooth hover:shadow-card">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <o.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{o.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="text-center font-display text-3xl font-bold md:text-4xl">Demande entreprise</h2>
          {sent ? (
            <div className="mt-10 rounded-2xl bg-card p-10 text-center shadow-card">
              <CheckCircle2 className="mx-auto h-16 w-16 text-primary" />
              <h3 className="mt-4 font-display text-2xl font-bold">Demande reçue</h3>
              <p className="mt-3 text-muted-foreground">Notre équipe vous contacte sous 24h.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-10 space-y-5 rounded-2xl bg-card p-6 shadow-card md:p-10">
              <div className="grid gap-5 md:grid-cols-2">
                <div><label className={labelCls}>Entreprise *</label><input required name="entreprise" maxLength={100} className={inputCls} /></div>
                <div><label className={labelCls}>Contact *</label><input required name="contact" maxLength={100} className={inputCls} /></div>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div><label className={labelCls}>Email professionnel *</label><input required type="email" name="email" maxLength={200} className={inputCls} /></div>
                <div><label className={labelCls}>Téléphone *</label><input required name="tel" maxLength={30} className={inputCls} /></div>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className={labelCls}>Type d'événement *</label>
                  <select required name="type" className={inputCls}>
                    <option value="">Choisir...</option>
                    <option>Séminaire</option><option>Team building</option><option>Voyage d'affaires</option><option>Incentive</option>
                  </select>
                </div>
                <div><label className={labelCls}>Nombre de participants *</label><input required type="number" min="1" name="participants" className={inputCls} /></div>
              </div>
              <div><label className={labelCls}>Période souhaitée</label><input name="periode" maxLength={100} className={inputCls} placeholder="Ex : octobre 2026, 5 jours" /></div>
              <div><label className={labelCls}>Brief / besoins</label><textarea name="brief" rows={5} maxLength={1500} className={inputCls} /></div>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-soft transition-smooth hover:bg-nature-deep">
                Envoyer la demande <Send className="h-4 w-4" />
              </button>
              <p className="text-center text-xs text-muted-foreground">Merci, nous vous contactons sous 24h.</p>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}
