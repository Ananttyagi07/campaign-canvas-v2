import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "hi" | "en";
type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: keyof typeof dict.hi) => string };

export const dict = {
  hi: {
    tagline: "सेवा · सुशासन · विकास",
    nav_home: "होम", nav_work: "हमारे कार्य", nav_villages: "गाँव का मानचित्र",
    nav_schemes: "योजनाएं", nav_media: "मीडिया", nav_contact: "संपर्क करें",
    nav_cta: "शिकायत दर्ज करें",
    hero_eyebrow: "आपका अपना विधायक",
    hero_title_1: "सेवा, समर्पण",
    hero_title_2: "और विकास",
    hero_sub: "जेवर के हर गाँव, हर परिवार और हर नागरिक के उज्ज्वल भविष्य के लिए निरंतर प्रयासरत।",
    hero_btn_villages: "अपने गाँव को देखें",
    hero_btn_work: "हमारे कार्य देखें",
    hero_btn_problem: "समस्या दर्ज करें",
    stat_villages: "गाँव शामिल",
    stat_projects: "परियोजनाएं पूरी",
    stat_dev: "विकास कार्य",
    stat_problems: "समस्याएँ हल",
    hero_motto: "सबका साथ, सबका विकास, सबका विश्वास",
    work_eyebrow: "हमारे कार्य",
    work_title_1: "जेवर के विकास की",
    work_title_2: "अनवरत यात्रा",
    work_coverage: "कुल कवरेज",
    w_water: "जल आपूर्ति", w_water_d: "हर घर तक स्वच्छ पेयजल पहुँचाने का संकल्प।", w_water_c: "85 गाँव",
    w_power: "विद्युत व्यवस्था", w_power_d: "24×7 निर्बाध बिजली आपूर्ति की दिशा में बड़े कदम।", w_power_c: "120 गाँव",
    w_road: "सड़क निर्माण", w_road_d: "ग्रामीण सड़कों का सुदृढ़ीकरण और नवीनीकरण।", w_road_c: "450+ km",
    w_edu: "शिक्षा सुधार", w_edu_d: "स्कूलों का आधुनिकीकरण व डिजिटल शिक्षा।", w_edu_c: "78 विद्यालय",
    w_health: "स्वास्थ्य सेवा", w_health_d: "नए स्वास्थ्य केंद्र व निःशुल्क चिकित्सा शिविर।", w_health_c: "32 केंद्र",
    w_farm: "किसान कल्याण", w_farm_d: "किसानों के लिए सिंचाई व सब्सिडी योजनाएँ।", w_farm_c: "12K+ लाभार्थी",
    vision_eyebrow: "हमारा संकल्प",
    vision_quote: "\"जब तक जेवर का हर बच्चा शिक्षित, हर किसान समृद्ध और हर परिवार सुरक्षित नहीं होगा — हम रुकेंगे नहीं।\"",
    vision_author: "— धीरेंद्र सिंह, विधायक",
    contact_eyebrow: "संपर्क करें",
    contact_title_1: "आपकी आवाज़,",
    contact_title_2: "हमारी प्राथमिकता",
    contact_sub: "अपनी समस्या या सुझाव हमें भेजें। हम 48 घंटे के भीतर आपसे संपर्क करेंगे।",
    c_helpline: "हेल्पलाइन", c_email: "ईमेल", c_office: "कार्यालय",
    c_office_v: "विधायक निवास, जेवर, गौतम बुद्ध नगर",
    f_name: "पूरा नाम", f_name_p: "आपका नाम",
    f_mobile: "मोबाइल", f_village: "गाँव", f_village_p: "आपका गाँव",
    f_msg: "समस्या / सुझाव", f_msg_p: "विस्तार से लिखें...",
    submit: "शिकायत दर्ज करें",
    name: "धीरेंद्र सिंह", role: "विधायक · जेवर",
    footer_about: "राष्ट्र सर्वोपरि — सेवा, सुशासन और विकास के सिद्धांतों पर आधारित निरंतर कार्य।",
    footer_quick: "शीघ्र लिंक", footer_social: "सोशल मीडिया",
    footer_rights: "© 2026 धीरेंद्र सिंह. सर्वाधिकार सुरक्षित।",
  },
  en: {
    tagline: "SERVICE · GOVERNANCE · GROWTH",
    nav_home: "Home", nav_work: "Our Work", nav_villages: "Village Map",
    nav_schemes: "Schemes", nav_media: "Media", nav_contact: "Contact",
    nav_cta: "File a Complaint",
    hero_eyebrow: "Your Own MLA",
    hero_title_1: "Service, Dedication",
    hero_title_2: "& Development",
    hero_sub: "Tirelessly working for the bright future of every village, every family and every citizen of Jewar.",
    hero_btn_villages: "Find Your Village",
    hero_btn_work: "View Our Work",
    hero_btn_problem: "Report an Issue",
    stat_villages: "Villages Covered",
    stat_projects: "Projects Completed",
    stat_dev: "Development Work",
    stat_problems: "Issues Resolved",
    hero_motto: "Together with all, Development for all, Trust of all",
    work_eyebrow: "Our Work",
    work_title_1: "Jewar's Relentless",
    work_title_2: "March of Progress",
    work_coverage: "Total Coverage",
    w_water: "Water Supply", w_water_d: "Clean drinking water delivered to every household.", w_water_c: "85 villages",
    w_power: "Electricity", w_power_d: "Major strides toward 24×7 uninterrupted power.", w_power_c: "120 villages",
    w_road: "Roads", w_road_d: "Strengthening and modernizing rural road networks.", w_road_c: "450+ km",
    w_edu: "Education", w_edu_d: "Modernizing schools and bringing digital learning.", w_edu_c: "78 schools",
    w_health: "Healthcare", w_health_d: "New health centers and free medical camps.", w_health_c: "32 centers",
    w_farm: "Farmer Welfare", w_farm_d: "Irrigation and subsidy schemes for farmers.", w_farm_c: "12K+ beneficiaries",
    vision_eyebrow: "Our Pledge",
    vision_quote: "\"Until every child in Jewar is educated, every farmer is prosperous and every family is safe — we will not rest.\"",
    vision_author: "— Dhirendra Singh, MLA",
    contact_eyebrow: "Contact Us",
    contact_title_1: "Your Voice,",
    contact_title_2: "Our Priority",
    contact_sub: "Send us your problem or suggestion. We respond within 48 hours.",
    c_helpline: "Helpline", c_email: "Email", c_office: "Office",
    c_office_v: "MLA Residence, Jewar, Gautam Buddha Nagar",
    f_name: "Full Name", f_name_p: "Your name",
    f_mobile: "Mobile", f_village: "Village", f_village_p: "Your village",
    f_msg: "Issue / Suggestion", f_msg_p: "Describe in detail...",
    submit: "Submit Complaint",
    name: "Dhirendra Singh", role: "MLA · Jewar",
    footer_about: "Nation First — continuous work grounded in service, good governance and development.",
    footer_quick: "Quick Links", footer_social: "Social Media",
    footer_rights: "© 2026 Dhirendra Singh. All rights reserved.",
  },
} as const;

const LangCtx = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("hi");
  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (saved === "hi" || saved === "en") setLangState(saved);
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };
  const t = (k: keyof typeof dict.hi) => dict[lang][k];
  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const c = useContext(LangCtx);
  if (!c) throw new Error("useLang must be used within LangProvider");
  return c;
}

// helper class for hindi-aware font
export const hiFont = (lang: Lang) => (lang === "hi" ? "font-hindi" : "");
