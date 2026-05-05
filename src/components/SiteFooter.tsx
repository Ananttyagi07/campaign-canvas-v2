import { useLang, hiFont } from "@/lib/lang";
import lotus from "@/assets/lotus.png";

export function SiteFooter() {
  const { t, lang } = useLang();
  const hi = hiFont(lang);
  return (
    <footer className="relative bg-ink text-cream/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-full glass overflow-hidden grid place-items-center"><img src={lotus} alt="Lotus" className="h-8 w-8 object-contain drop-shadow-md" /></div>
            <div>
              <div className={`font-display text-cream text-lg font-bold ${hi}`}>{t("name")}</div>
              <div className={`text-xs tracking-widest uppercase text-cream/60 ${hi}`}>{t("role")}</div>
            </div>
          </div>
          <p className={`text-cream/70 max-w-md leading-relaxed ${hi}`}>{t("footer_about")}</p>
        </div>
        <div>
          <div className={`text-cream font-bold mb-4 ${hi}`}>{t("footer_quick")}</div>
          <ul className={`space-y-2 text-sm ${hi}`}>
            <li><a href="#work" className="hover:text-saffron transition">{t("nav_work")}</a></li>
            <li><a href="#schemes" className="hover:text-saffron transition">{t("nav_schemes")}</a></li>
            <li><a href="#contact" className="hover:text-saffron transition">{t("nav_contact")}</a></li>
          </ul>
        </div>
        <div>
          <div className={`text-cream font-bold mb-4 ${hi}`}>{t("footer_social")}</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-saffron transition">Twitter / X</a></li>
            <li><a href="#" className="hover:text-saffron transition">Facebook</a></li>
            <li><a href="#" className="hover:text-saffron transition">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-cream/50">
          <div className={hi}>{t("footer_rights")}</div>
          <div className={hi}>{t("hero_motto")}</div>
        </div>
      </div>
    </footer>
  );
}
