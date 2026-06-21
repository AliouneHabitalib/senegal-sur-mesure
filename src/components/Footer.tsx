import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-diambar.png";

export function Footer() {
  return (
    <footer className="mt-20 bg-ocean-deep text-white/90">
      <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Diambar" className="h-14 w-auto rounded-md bg-white/95 p-1.5" />
            <span className="font-display text-xl font-semibold">Diambar Travel Tour</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
            Guide indépendant sénégalais spécialisé dans les séjours 100% sur mesure
            avec accompagnement local privé.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg text-white">Navigation</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-sun">Accueil</Link></li>
            <li><Link to="/voyage-sur-mesure" className="hover:text-sun">Voyage sur mesure</Link></li>
            <li><Link to="/experiences" className="hover:text-sun">Expériences</Link></li>
            <li><Link to="/entreprises" className="hover:text-sun">Entreprises</Link></li>
            <li><Link to="/contact" className="hover:text-sun">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0" /><a href="https://wa.me/221756320437" className="hover:text-sun">+221 75 632 04 37</a></li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0" /><a href="mailto:diambarseck1@gmail.com" className="hover:text-sun break-all">diambarseck1@gmail.com</a></li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" />Dakar, Sénégal</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Diambar Travel Tour — sénégalsurmesure. Tous droits réservés.
      </div>
    </footer>
  );
}
