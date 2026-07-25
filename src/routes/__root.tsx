import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page introuvable</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Cette page n'existe pas ou a été déplacée.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-smooth hover:bg-nature-deep"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Guide indépendant au Sénégal — Diambar Travel Tour" },
      { name: "description", content: "Diambar, guide indépendant francophone au Sénégal. Voyages 100% sur mesure avec accompagnement privé : Dakar, Gorée, Lac Rose, Sine Saloum, Lompoul, Saint-Louis." },
      { name: "keywords", content: "guide indépendant Sénégal, guide francophone Sénégal, guide privé Dakar, guide local Sénégal, voyage sur mesure Sénégal, séjour personnalisé Sénégal, circuit Sénégal, safari Sénégal, excursion Dakar, visite Gorée, désert de Lompoul, Lac Rose, Sine Saloum, Saint-Louis Sénégal, chauffeur guide Sénégal, guide touristique Dakar, voyage authentique Afrique de l'Ouest, tourisme responsable Sénégal, team building Sénégal, séminaire entreprise Sénégal, Diambar Travel Tour" },
      { name: "author", content: "Diambar Travel Tour" },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "SN-DK" },
      { name: "geo.placename", content: "Dakar, Sénégal" },
      { property: "og:title", content: "Guide indépendant au Sénégal — Diambar Travel Tour" },
      { property: "og:description", content: "Diambar, guide indépendant francophone au Sénégal. Voyages 100% sur mesure avec accompagnement privé." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:site_name", content: "Diambar Travel Tour" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Guide indépendant au Sénégal — Diambar Travel Tour" },
      { name: "twitter:description", content: "Diambar, guide indépendant francophone au Sénégal. Voyages 100% sur mesure avec accompagnement privé." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/uKbVeTiYxgPmB9856LgOdAJdFWv2/social-images/social-1777731335744-ChatGPT_Image_2_mai_2026,_13_56_41.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/uKbVeTiYxgPmB9856LgOdAJdFWv2/social-images/social-1777731335744-ChatGPT_Image_2_mai_2026,_13_56_41.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700;800&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
