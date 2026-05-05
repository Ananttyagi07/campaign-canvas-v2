import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { UserRound } from "lucide-react";
import { useLang, hiFont } from "@/lib/lang";
import { LangToggle } from "@/components/LangToggle";
import lotus from "@/assets/lotus.png";

export function SiteNav() {
  const { t, lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { label: t("nav_home"), href: "#home" },
    { label: t("nav_work"), href: "#work" },
    { label: t("nav_villages"), href: "#villages" },
    { label: t("nav_schemes"), href: "#schemes" },
    { label: t("nav_media"), href: "#media" },
    { label: t("nav_contact"), href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border/60 shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto w-full px-4 md:px-8 lg:px-12 h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-full shadow-soft glass overflow-hidden grid place-items-center">
            <img src={lotus} alt="Lotus" className="h-7 w-7 object-contain drop-shadow-md" />
          </div>
          <div className="leading-tight">
            <div className={`font-display text-[15px] font-bold text-ink ${hiFont(lang)}`}>{t("name")}</div>
            <div className="text-[11px] tracking-widest uppercase text-muted-foreground">{t("tagline")}</div>
          </div>
        </Link>

        <ul className={`hidden lg:flex items-center gap-8 text-[15px] ${hiFont(lang)}`}>
          {items.map((it) => (
            <li key={it.label}>
              <a href={it.href} className="relative text-ink/80 hover:text-primary transition-colors group">
                {it.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LangToggle />
          <a href="#contact" className="btn-bevel hidden md:inline-flex">
            <UserRound size={16} />
            <span className={hiFont(lang)}>{t("nav_cta")}</span>
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
