import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { WorkSection } from "@/components/WorkSection";
import { VisionSection } from "@/components/VisionSection";
import { ContactSection } from "@/components/ContactSection";
import { MapSection } from "@/components/MapSection";
import { SiteFooter } from "@/components/SiteFooter";
import { LangProvider } from "@/lib/lang";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <LangProvider>
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <WorkSection />
        <MapSection />
        <VisionSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
    </LangProvider>
  );
}
