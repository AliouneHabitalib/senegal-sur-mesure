import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Diambar Travel Tour, Dakar" },
      { name: "description", content: "Contactez Diambar Travel Tour à Dakar : WhatsApp +221 75 632 04 37, email diambarseck1@gmail.com." },
      { property: "og:title", content: "Contact — Diambar Travel Tour" },
      { property: "og:description", content: "Joignez-nous via WhatsApp, email, ou directement à Dakar." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <section className="bg-gradient-sand py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 text-center md:px-6">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Contact</span>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-6xl">Parlons de votre voyage</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Une question, un projet ? Nous répondons sous 24h.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3 md:px-6">
          {[
            { icon: Phone, title: "WhatsApp", value: "+221 75 632 04 37", href: "https://wa.me/221756320437" },
            { icon: Mail, title: "Email", value: "diambarseck1@gmail.com", href: "mailto:diambarseck1@gmail.com" },
            { icon: MapPin, title: "Adresse", value: "Dakar, Sénégal", href: "https://maps.google.com/?q=Dakar,Senegal" },
          ].map((c) => (
            <a key={c.title} href={c.href} target="_blank" rel="noopener noreferrer"
              className="group rounded-2xl bg-card p-8 text-center shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-smooth group-hover:bg-primary group-hover:text-primary-foreground">
                <c.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 break-all text-sm text-muted-foreground">{c.value}</p>
            </a>
          ))}
        </div>

        <div className="container mx-auto mt-12 max-w-6xl px-4 md:px-6">
          <a href="https://wa.me/221756320437?text=Bonjour%20Diambar%2C"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-soft transition-smooth hover:scale-[1.02] hover:shadow-glow">
            <MessageCircle className="h-5 w-5" /> Contacter via WhatsApp
          </a>
        </div>

        <div className="container mx-auto mt-16 max-w-6xl px-4 md:px-6">
          <div className="overflow-hidden rounded-3xl shadow-card">
            <iframe
              title="Dakar, Sénégal"
              src="https://www.google.com/maps?q=Dakar,Senegal&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full border-0"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
