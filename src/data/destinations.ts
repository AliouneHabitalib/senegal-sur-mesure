import dakar from "@/assets/dakar.avif";
import goree from "@/assets/goree.avif";
import lacRose from "@/assets/lac-rose.avif";
import sineSaloum from "@/assets/sine-saloum.avif";
import lompoul from "@/assets/desert-lompoul.avif";
import saintLouis from "@/assets/saint-louis.avif";
import lacRoseBoats from "@/assets/photo-lac-rose-boats.avif";
import lacRoseFlag from "@/assets/photo-lac-rose-flag.avif";
import lompoulDiambar from "@/assets/diambar-desert.avif";
import lompoulRepas from "@/assets/lompoul-repas.avif";
import lompoulTentes from "@/assets/lompoul-tentes.avif";
import lompoulJump from "@/assets/lompoul-jump.avif";
import okaiPiscine from "@/assets/okai-piscine.avif";
import okaiCamels from "@/assets/okai-camels.avif";
import diambarSineSaloum from "@/assets/diambar-sine-saloum.avif";
import lompoulClient from "@/assets/lompoul-diambar-client.avif";
import lompoulCoucherSoleil from "@/assets/lompoul-coucher-soleil.avif";
import lompoulChaises from "@/assets/lompoul-chaises.avif";
import lompoulTenteUnique from "@/assets/lompoul-tente-unique.avif";
import saloumDiambarClient from "@/assets/saloum-diambar-client.avif";
import saloumBaobabPirogue from "@/assets/saloum-baobab-pirogue.avif";
import saloumBaobab from "@/assets/saloum-baobab.avif";
import saloumOiseaux from "@/assets/saloum-oiseaux.avif";

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface Destination {
  slug: string;
  name: string;
  img: string;
  alt: string;
  desc: string;
  longDesc: string;
  metaTitle: string;
  metaDescription: string;
  highlights: { title: string; text: string }[];
  gallery?: GalleryImage[];
}


export const destinations: Destination[] = [
  {
    slug: "dakar",
    name: "Dakar",
    img: dakar,
    alt: "Vue urbaine de Dakar, capitale du Sénégal",
    desc: "Capitale vibrante entre océan et culture, où marchés colorés, musique mbalax et front de mer atlantique donnent le ton du voyage.",
    longDesc:
      "Posée sur la presqu'île du Cap-Vert, Dakar est la porte d'entrée naturelle du Sénégal. La ville mêle l'énergie de ses marchés, la créativité de sa scène artistique et musicale, et la douceur de sa corniche ouverte sur l'Atlantique. On y passe en quelques minutes des façades coloniales du Plateau aux ateliers d'artistes contemporains, entre deux pauses thiéboudiène ou café Touba.",
    metaTitle: "Visiter Dakar — Guide indépendant au Sénégal | Diambar",
    metaDescription:
      "Découvrez Dakar avec un guide local indépendant : Monument de la Renaissance, marchés Sandaga et Kermel, Corniche, Village des Arts et Plateau colonial.",
    highlights: [
      { title: "Monument de la Renaissance Africaine", text: "La plus haute statue d'Afrique, avec une vue panoramique sur la ville et l'océan." },
      { title: "Marchés Sandaga et Kermel", text: "Artisanat, tissus, épices et ambiance populaire au cœur de la capitale." },
      { title: "La Corniche et le Phare des Mamelles", text: "Front de mer atlantique et point de vue emblématique au sommet des Mamelles." },
      { title: "Village des Arts", text: "Galeries et ateliers d'artistes contemporains sénégalais." },
      { title: "Le Plateau colonial", text: "Architecture historique et Place de l'Indépendance, cœur administratif de Dakar." },
    ],
  },
  {
    slug: "goree",
    name: "Île de Gorée",
    img: goree,
    alt: "Île de Gorée, patrimoine UNESCO au large de Dakar",
    desc: "Mémoire et beauté coloniale à 20 minutes en chaloupe de Dakar. Ruelles pavées, Maison des Esclaves et palette d'ocre classée à l'UNESCO.",
    longDesc:
      "À une vingtaine de minutes de chaloupe de Dakar, Gorée est une île sans voitures, chargée d'histoire et baignée de lumière. On y marche au rythme des ruelles pavées, entre façades ocre et bougainvilliers, avec des lieux de mémoire essentiels à la compréhension de la traite atlantique. Une visite qui mêle recueillement, patrimoine classé UNESCO et douceur balnéaire.",
    metaTitle: "Île de Gorée — Visite avec un guide indépendant | Diambar",
    metaDescription:
      "Visitez l'île de Gorée avec un guide local : Maison des Esclaves, Fort d'Estrées, ruelles pavées classées UNESCO, plage et ambiance sans voitures.",
    highlights: [
      { title: "Maison des Esclaves", text: "Lieu de mémoire et sa célèbre « Porte du Voyage sans Retour »." },
      { title: "Fort d'Estrées", text: "Ancienne fortification circulaire qui abrite le musée historique de l'île." },
      { title: "Ruelles pavées et façades colorées", text: "Un ensemble architectural classé au patrimoine mondial de l'UNESCO." },
      { title: "Plage et baignade", text: "Une petite plage abritée idéale pour une pause entre deux visites." },
      { title: "Ambiance sans voitures", text: "L'île se parcourt entièrement à pied, dans un calme rare." },
    ],
  },
  {
    slug: "lac-rose",
    name: "Lac Rose",
    img: lacRose,
    alt: "Lac Rose (Retba) aux eaux rosées près de Dakar",
    desc: "Lagon rosé unique au monde, dû à une micro-algue et à la forte salinité. Rencontre avec les récolteurs de sel et dunes bordant l'Atlantique.",
    longDesc:
      "Le lac Retba, plus connu sous le nom de Lac Rose, doit sa teinte à une micro-algue qui prospère dans ses eaux très salées. Selon la lumière et la saison, la couleur passe du rose pâle au rose vif. Autour du lac, les récolteurs de sel travaillent à l'ancienne, et les dunes conduisent en quelques minutes jusqu'à l'océan Atlantique.",
    metaTitle: "Lac Rose (Retba) — Excursion avec guide local | Diambar",
    metaDescription:
      "Excursion au Lac Rose près de Dakar : pirogue sur les eaux roses, récolteurs de sel, dunes face à l'Atlantique, sortie quad ou 4x4 et coucher de soleil.",
    highlights: [
      { title: "Balade en pirogue", text: "Naviguer sur les eaux roses et comprendre le phénomène de la salinité." },
      { title: "Rencontre avec les récolteurs de sel", text: "Découvrir un travail traditionnel toujours pratiqué au quotidien." },
      { title: "Dunes bordant l'Atlantique", text: "Un cordon dunaire qui sépare le lac de l'océan, à quelques minutes." },
      { title: "Sortie en quad ou 4x4", text: "Explorer les pistes et les villages des environs autrement." },
      { title: "Coucher de soleil sur le lac", text: "Le meilleur moment pour saisir les nuances de couleur." },
    ],
    gallery: [
      { src: lacRoseBoats, alt: "Pirogues colorées aux couleurs du Sénégal amarrées sur les rives du Lac Rose" },
      { src: lacRoseFlag, alt: "Pirogue rose portant le drapeau sénégalais sur les eaux du Lac Retba" },
    ],
  },

  {
    slug: "sine-saloum",
    name: "Sine Saloum",
    img: sineSaloum,
    alt: "Mangroves du Sine Saloum en pirogue",
    desc: "Mangroves et villages de pêcheurs au cœur d'un delta classé réserve de biosphère. Sorties en pirogue, îles aux coquillages et lodges au bord de l'eau.",
    longDesc:
      "Le delta du Saloum est un labyrinthe de bolongs, d'îlots et de mangroves où le fleuve rencontre l'océan. Classé réserve de biosphère par l'UNESCO, il abrite une faune d'oiseaux remarquable et des villages de pêcheurs vivant au rythme des marées. C'est la destination idéale pour ralentir, naviguer en pirogue et dormir au bord de l'eau.",
    metaTitle: "Sine Saloum — Delta, mangroves et pirogue | Diambar",
    metaDescription:
      "Découvrez le delta du Sine Saloum : mangroves en pirogue, îles aux coquillages, villages de pêcheurs, réserve de biosphère UNESCO et observation d'oiseaux.",
    highlights: [
      { title: "Sorties en pirogue dans les mangroves", text: "Naviguer dans les bolongs au plus près de la nature." },
      { title: "Îles aux coquillages", text: "Des îlots entièrement formés d'amas coquilliers séculaires." },
      { title: "Villages de pêcheurs traditionnels", text: "Rencontres et vie quotidienne au rythme des marées." },
      { title: "Réserve de biosphère UNESCO", text: "Un écosystème protégé entre fleuve, océan et forêt." },
      { title: "Observation d'oiseaux", text: "Hérons, flamants, pélicans et sternes selon la saison." },
      { title: "Lodges au bord de l'eau", text: "Des hébergements calmes, les pieds dans le delta." },
    ],
    gallery: [
      { src: diambarSineSaloum, alt: "Diambar, guide indépendant, aux côtés d'une pirogue traditionnelle dans les mangroves du Sine Saloum" },
    ],
  },
  {
    slug: "lompoul",
    name: "Lompoul",
    img: lompoul,
    alt: "Dunes orangées du désert de Lompoul au Sénégal",
    desc: "Désert de dunes orangées entre Dakar et Saint-Louis. Nuit sous tente mauritanienne, coucher de soleil sur les crêtes et ciel étoilé.",
    longDesc:
      "Entre Dakar et Saint-Louis, le désert de Lompoul déroule des dunes orangées sur quelques kilomètres carrés, un paysage saharien inattendu si près de l'océan. On y vient pour une nuit en campement, le silence, et la lumière rasante du matin et du soir sur les crêtes de sable.",
    metaTitle: "Désert de Lompoul — Nuit en campement | Diambar",
    metaDescription:
      "Passez une nuit au désert de Lompoul : dunes orangées, tente mauritanienne, balade à dos de dromadaire, lever et coucher de soleil, ciel étoilé.",
    highlights: [
      { title: "Dunes orangées", text: "Un paysage désertique surprenant entre Dakar et Saint-Louis." },
      { title: "Nuit sous tente mauritanienne", text: "Un campement confortable au cœur des dunes." },
      { title: "Balade à dos de dromadaire", text: "Parcourir le désert au pas, en fin de journée." },
      { title: "Lever et coucher de soleil", text: "Les meilleurs moments pour la lumière sur le sable." },
      { title: "Ciel étoilé", text: "Loin de toute pollution lumineuse, les nuits sont spectaculaires." },
    ],
    gallery: [
      { src: lompoulDiambar, alt: "Diambar, guide indépendant, bras ouverts devant le 4x4 dans le désert de Lompoul" },
      { src: lompoulTentes, alt: "Alignement de tentes mauritaniennes au pied des dunes orangées de Lompoul" },
      { src: lompoulJump, alt: "Groupe de voyageurs et Diambar sautant de joie sur les dunes de Lompoul" },
      { src: lompoulRepas, alt: "Moment convivial autour d'un repas au campement de Lompoul" },
      { src: okaiPiscine, alt: "Lodge au bord d'une piscine au coucher du soleil dans le désert de Lompoul" },
      { src: okaiCamels, alt: "Dromadaires devant le lodge illuminé à la tombée de la nuit à Lompoul" },
    ],
  },

  {
    slug: "saint-louis",
    name: "Saint-Louis",
    img: saintLouis,
    alt: "Architecture coloniale de Saint-Louis du Sénégal",
    desc: "Ancienne capitale de l'AOF classée UNESCO, entre fleuve et océan. Architecture coloniale, festival de jazz et Langue de Barbarie à explorer.",
    longDesc:
      "Saint-Louis, posée sur une île entre le fleuve Sénégal et l'Atlantique, garde l'élégance un peu patinée des anciennes capitales. Ses balcons de bois, ses calèches et son pont métallique composent un décor unique, prolongé au sud par la Langue de Barbarie, longue bande de sable et refuge d'oiseaux migrateurs.",
    metaTitle: "Saint-Louis du Sénégal — Visite guidée | Diambar",
    metaDescription:
      "Visitez Saint-Louis du Sénégal : île classée UNESCO, Pont Faidherbe, architecture coloniale, calèches, festival de jazz et Langue de Barbarie.",
    highlights: [
      { title: "Île classée UNESCO", text: "Entre le fleuve Sénégal et l'océan, un patrimoine urbain unique." },
      { title: "Pont Faidherbe", text: "Ouvrage métallique emblématique reliant l'île au continent." },
      { title: "Architecture coloniale et calèches", text: "Balcons en bois, façades patinées et promenades en calèche." },
      { title: "Festival international de jazz", text: "Rendez-vous musical majeur, chaque année au mois de mai." },
      { title: "Langue de Barbarie", text: "Bande de sable et réserve ornithologique au sud de la ville." },
    ],
  },
];

export const getDestination = (slug: string) => destinations.find((d) => d.slug === slug);
