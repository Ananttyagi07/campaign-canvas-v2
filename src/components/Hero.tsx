import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Map, BarChart3, AlertCircle, Users, Briefcase, IndianRupee, HeartHandshake } from "lucide-react";
import politician from "@/assets/politician.png";
import bg from "@/assets/hero-bg.png";
import { useLang, hiFont } from "@/lib/lang";

export function Hero() {
  const { t, lang } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const yPolitician = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const hi = hiFont(lang);

  return (
    <section id="home" ref={ref} className="relative min-h-[100svh] overflow-hidden">
      <motion.div
        style={{ y: yBg, backgroundImage: `url(${bg})` }}
        className="absolute inset-0 bg-cover bg-center scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/70 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-24 grid lg:grid-cols-12 gap-6 items-center min-h-[100svh]">
        <motion.div style={{ y: yText, opacity }} className="relative z-10 lg:col-span-6 xl:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="divider-saffron" />
            <span className={`text-primary font-semibold tracking-wide text-sm uppercase ${hi}`}>
              {t("hero_eyebrow")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className={`text-ink text-5xl md:text-7xl font-bold leading-[1.05] mb-6 ${hi}`}
          >
            {t("hero_title_1")} <br />
            <span className="bg-gradient-to-r from-saffron-deep to-saffron bg-clip-text text-transparent">
              {t("hero_title_2")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className={`text-lg text-ink/75 max-w-xl mb-10 leading-relaxed ${hi}`}
          >
            {t("hero_sub")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="flex flex-wrap items-center gap-4 mb-14 w-full"
          >
            <a href="#villages" className="btn-bevel">
              <Map size={16} /> <span className={hi}>{t("hero_btn_villages")}</span>
            </a>
            <a href="#work" className="btn-bevel-outline">
              <BarChart3 size={16} /> <span className={hi}>{t("hero_btn_work")}</span>
            </a>
            <a href="#contact" className="btn-bevel-outline md:ml-auto">
              <AlertCircle size={16} /> <span className={hi}>{t("hero_btn_problem")}</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="card-bevel glass p-6 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl"
          >
            {[
              { icon: Users, value: "120+", label: t("stat_villages") },
              { icon: Briefcase, value: "300+", label: t("stat_projects") },
              { icon: IndianRupee, value: "₹250Cr+", label: t("stat_dev") },
              { icon: HeartHandshake, value: "10,000+", label: t("stat_problems") },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <s.icon className="mx-auto mb-2 text-primary" size={22} />
                <div className="font-display text-2xl font-bold text-ink">{s.value}</div>
                <div className={`text-xs text-muted-foreground mt-1 ${hi}`}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: yPolitician }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative h-full lg:col-span-6 xl:col-span-7 lg:-mr-16 xl:-mr-24 flex items-end justify-end"
        >
          <div className="absolute inset-0 flex items-center justify-end pointer-events-none">
            <div className="h-[600px] w-[600px] rounded-full bg-gradient-to-br from-saffron/40 to-transparent blur-3xl float-slow" />
          </div>
          <img
            src={politician}
            alt={t("name")}
            className="relative z-10 h-[95vh] max-h-[900px] w-auto object-contain object-bottom drop-shadow-2xl translate-x-10 lg:translate-x-32 -translate-y-8"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-saffron-deep/95 to-transparent pointer-events-none" />
      <div className={`absolute bottom-3 left-0 right-0 text-center text-primary-foreground/95 tracking-wide text-sm ${hi}`}>
        {t("hero_motto")}
      </div>
    </section>
  );
}
