import { useLang } from "@/lib/lang";

export function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div
      className="inline-flex items-center text-xs font-semibold border border-primary/40 bg-card/70 backdrop-blur-md select-none"
      style={{ clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)" }}
    >
      <button
        onClick={() => setLang("hi")}
        className={`px-3 py-2 transition ${lang === "hi" ? "bg-gradient-to-br from-saffron to-saffron-deep text-primary-foreground" : "text-ink/70 hover:text-ink"}`}
      >
        हिं
      </button>
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-2 transition ${lang === "en" ? "bg-gradient-to-br from-saffron to-saffron-deep text-primary-foreground" : "text-ink/70 hover:text-ink"}`}
      >
        EN
      </button>
    </div>
  );
}
