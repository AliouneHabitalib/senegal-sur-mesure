import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useState, FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/voyage-sur-mesure")({
  head: () => ({
    meta: [
      { title: "Voyage sur mesure au Sénégal — Diambar Travel Tour" },
      { name: "description", content: "Créez votre séjour personnalisé au Sénégal. Décrivez vos envies, recevez un itinéraire 100% sur mesure sous 24h." },
      { property: "og:title", content: "Créer mon voyage sur mesure au Sénégal" },
      { property: "og:description", content: "Itinéraire personnalisé, guide privé, expérience authentique." },
    ],
  }),
  component: Page,
});

const inputCls =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-smooth focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
const labelCls = "mb-2 block text-sm font-semibold text-foreground";

function Page() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const subject = encodeURIComponent("Demande de voyage sur mesure - " + (data.nom || ""));
    const body = encodeURIComponent(
      Object.entries(data)
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n")
    );
    window.location.href = `mailto:diambarseck1@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <Layout>
      <section className="bg-gradient-sand py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 text-center md:px-6">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Voyage sur mesure</span>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-6xl">Créons votre Sénégal idéal</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Décrivez-nous votre rêve. Nous vous proposons un itinéraire personnalisé sous 24h.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          {sent ? (
            <div className="rounded-2xl bg-card p-10 text-center shadow-card">
              <CheckCircle2 className="mx-auto h-16 w-16 text-primary" />
              <h2 className="mt-4 font-display text-3xl font-bold">Merci !</h2>
              <p className="mt-3 text-muted-foreground">
                Votre demande a bien été préparée. Nous vous contactons sous 24h pour bâtir ensemble
                votre voyage sur mesure au Sénégal.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-6 rounded-2xl bg-card p-6 shadow-card md:p-10">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className={labelCls}>Nom et prénom *</label>
                  <input required name="nom" maxLength={100} className={inputCls} placeholder="Jean Dupont" />
                </div>
                <div>
                  <label className={labelCls}>Email *</label>
                  <input required type="email" name="email" maxLength={200} className={inputCls} placeholder="vous@email.com" />
                </div>
              </div>
              <div>
                <label className={labelCls}>Numéro WhatsApp *</label>
                <input required name="whatsapp" maxLength={30} className={inputCls} placeholder="+33 6 ..." />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className={labelCls}>Type de voyage *</label>
                  <select required name="type" className={inputCls}>
                    <option value="">Choisir...</option>
                    <option>Famille</option><option>Couple</option><option>Groupe</option><option>Entreprise</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Nombre de personnes *</label>
                  <input required type="number" name="personnes" min="1" max="100" className={inputCls} placeholder="2" />
                </div>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className={labelCls}>Date de départ</label>
                  <input type="date" name="date_depart" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Date de retour</label>
                  <input type="date" name="date_retour" className={inputCls} />
                </div>
              </div>
              <div>
                <label className={labelCls}>Budget estimé (par personne)</label>
                <select name="budget" className={inputCls}>
                  <option value="">Indicatif...</option>
                  <option>&lt; 1 000 €</option><option>1 000 — 2 000 €</option>
                  <option>2 000 — 3 500 €</option><option>3 500 — 5 000 €</option><option>&gt; 5 000 €</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Type d'expérience souhaitée</label>
                <select name="experience" className={inputCls}>
                  <option value="">Choisir...</option>
                  <option>Luxe</option><option>Aventure</option><option>Culture</option>
                  <option>Détente</option><option>Safari</option><option>Mix</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Hébergement souhaité</label>
                <select name="hebergement" className={inputCls}>
                  <option value="">Choisir...</option>
                  <option>Hôtel</option><option>Appartement</option><option>Lodge</option><option>Campement</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Activités souhaitées</label>
                <textarea name="activites" rows={3} maxLength={500} className={inputCls}
                  placeholder="Plage, safari, pirogue, désert, visite culturelle..." />
              </div>
              <div>
                <label className={labelCls}>Message libre</label>
                <textarea name="message" rows={4} maxLength={1000} className={inputCls}
                  placeholder="Vos envies, vos contraintes, vos rêves..." />
              </div>
              <button type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-soft transition-smooth hover:bg-nature-deep hover:shadow-glow">
                Recevoir mon itinéraire personnalisé
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Merci, nous vous contactons sous 24h.
              </p>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}
