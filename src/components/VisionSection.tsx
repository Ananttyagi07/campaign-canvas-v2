import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import bg from "@/assets/hero-bg.png";
import { useLang, hiFont } from "@/lib/lang";

export function VisionSection() {
  const { t, lang } = useLang();
  const hi = hiFont(lang);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);

  return (
    <section id="schemes" ref={ref} className="relative h-[90vh] overflow-hidden flex items-center">
      <motion.div
        style={{ y, scale, backgroundImage: `url(${bg})` }}
        className="absolute inset-0 bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-saffron-deep/70" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={`text-gold tracking-[0.3em] text-xs uppercase mb-6 ${hi}`}>{t("vision_eyebrow")}</div>
          <h2 className={`text-4xl md:text-6xl font-bold text-cream leading-tight mb-8 ${hi}`}>
            {t("vision_quote")}
          </h2>
          <div className="mx-auto h-px w-32 bg-gold mb-6" />
          <p className={`font-display italic text-cream/80 text-lg ${hi}`}>{t("vision_author")}</p>
        </motion.div>
      </div>
    </section>
  );
}
