import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Droplet, Lightbulb, GraduationCap, Stethoscope, Tractor, Construction } from "lucide-react";
import { useLang, hiFont } from "@/lib/lang";

function Card({ w }: { w: { icon: any; title: string; desc: string; count: string; coverage: string; hi: string } }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  return (
    <motion.div
      ref={ref}
      style={{ y }}
      whileHover={{ y: -8 }}
      className="card-bevel relative glass p-8 shadow-soft hover:shadow-elevated transition-shadow group"
    >
      <div className="absolute top-0 left-0 h-1 w-16 bg-gradient-to-r from-saffron to-saffron-deep" />
      <w.icon className="text-primary mb-5" size={34} strokeWidth={1.5} />
      <h3 className={`text-2xl font-bold text-ink mb-2 ${w.hi}`}>{w.title}</h3>
      <p className={`text-muted-foreground leading-relaxed mb-6 ${w.hi}`}>{w.desc}</p>
      <div className="flex items-center justify-between pt-4 border-t border-border/60">
        <span className={`text-sm text-muted-foreground ${w.hi}`}>{w.coverage}</span>
        <span className="font-display font-bold text-saffron-deep">{w.count}</span>
      </div>
    </motion.div>
  );
}

export function WorkSection() {
  const { t, lang } = useLang();
  const hi = hiFont(lang);
  const works = [
    { icon: Droplet, title: t("w_water"), desc: t("w_water_d"), count: t("w_water_c") },
    { icon: Lightbulb, title: t("w_power"), desc: t("w_power_d"), count: t("w_power_c") },
    { icon: Construction, title: t("w_road"), desc: t("w_road_d"), count: t("w_road_c") },
    { icon: GraduationCap, title: t("w_edu"), desc: t("w_edu_d"), count: t("w_edu_c") },
    { icon: Stethoscope, title: t("w_health"), desc: t("w_health_d"), count: t("w_health_c") },
    { icon: Tractor, title: t("w_farm"), desc: t("w_farm_d"), count: t("w_farm_c") },
  ];

  return (
    <section id="work" className="relative py-32 bg-gradient-to-b from-background to-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="divider-saffron" />
            <span className={`text-primary font-semibold tracking-wide text-sm uppercase ${hi}`}>
              {t("work_eyebrow")}
            </span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold text-ink leading-tight ${hi}`}>
            {t("work_title_1")} <br />
            <span className="text-saffron-deep">{t("work_title_2")}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {works.map((w) => <Card key={w.title} w={{ ...w, coverage: t("work_coverage"), hi }} />)}
        </div>
      </div>
    </section>
  );
}
