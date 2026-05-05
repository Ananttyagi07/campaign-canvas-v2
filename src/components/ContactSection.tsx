import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useLang, hiFont } from "@/lib/lang";

export function ContactSection() {
  const { t, lang } = useLang();
  const hi = hiFont(lang);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yForm = useTransform(scrollYProgress, [0, 1], [60, -60]);
  return (
    <section id="contact" ref={ref} className="relative py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="divider-saffron" />
            <span className={`text-primary font-semibold tracking-wide text-sm uppercase ${hi}`}>{t("contact_eyebrow")}</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold text-ink leading-tight mb-6 ${hi}`}>
            {t("contact_title_1")} <br />
            <span className="text-saffron-deep">{t("contact_title_2")}</span>
          </h2>
          <p className={`text-muted-foreground text-lg mb-10 leading-relaxed ${hi}`}>{t("contact_sub")}</p>

          <div className="space-y-5">
            {[
              { icon: Phone, label: t("c_helpline"), value: "+91 98765 43210" },
              { icon: Mail, label: t("c_email"), value: "office@dhirendrasingh.in" },
              { icon: MapPin, label: t("c_office"), value: t("c_office_v") },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="card-bevel bg-secondary p-3 text-primary"><c.icon size={20} /></div>
                <div>
                  <div className={`text-xs uppercase tracking-wider text-muted-foreground ${hi}`}>{c.label}</div>
                  <div className={`font-display text-ink font-semibold ${hi}`}>{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.form
          style={{ y: yForm }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onSubmit={(e) => e.preventDefault()}
          className="card-bevel glass p-10 shadow-elevated space-y-5"
        >
          <div>
            <label className={`text-sm font-semibold text-ink block mb-2 ${hi}`}>{t("f_name")}</label>
            <input className={`w-full bg-secondary/50 border border-border px-4 py-3 focus:outline-none focus:border-primary transition ${hi}`} placeholder={t("f_name_p")} />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className={`text-sm font-semibold text-ink block mb-2 ${hi}`}>{t("f_mobile")}</label>
              <input className="w-full bg-secondary/50 border border-border px-4 py-3 focus:outline-none focus:border-primary transition" placeholder="+91" />
            </div>
            <div>
              <label className={`text-sm font-semibold text-ink block mb-2 ${hi}`}>{t("f_village")}</label>
              <input className={`w-full bg-secondary/50 border border-border px-4 py-3 focus:outline-none focus:border-primary transition ${hi}`} placeholder={t("f_village_p")} />
            </div>
          </div>
          <div>
            <label className={`text-sm font-semibold text-ink block mb-2 ${hi}`}>{t("f_msg")}</label>
            <textarea rows={5} className={`w-full bg-secondary/50 border border-border px-4 py-3 focus:outline-none focus:border-primary transition resize-none ${hi}`} placeholder={t("f_msg_p")} />
          </div>
          <button type="submit" className="btn-bevel w-full justify-center">
            <Send size={16} /> <span className={hi}>{t("submit")}</span>
          </button>
        </motion.form>
      </div>
    </section>
  );
}
