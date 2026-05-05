import { motion } from "framer-motion";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLang, hiFont } from "@/lib/lang";

export function MapSection() {
  const { t, lang } = useLang();
  const hi = hiFont(lang);

  return (
    <section id="villages" className="relative py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="divider-saffron" />
            <span className={`text-primary font-semibold tracking-wide text-sm uppercase ${hi}`}>
              Interactive Area Map
            </span>
            <div className="divider-saffron" />
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold text-ink leading-tight mb-4 ${hi}`}>
            Constituency <span className="text-saffron-deep">Coverage</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            High-definition Google Maps architecture centered on Jewar. (Ready to layer official local `.geojson` files for precise village click interactivity).
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="h-[700px] w-full rounded-3xl overflow-hidden shadow-elevated border-4 border-white glass"
        >
          <div className="w-full h-full bg-white relative">
            <MapContainer 
              center={[28.1293, 77.5681]} 
              zoom={13} 
              scrollWheelZoom={false} 
              style={{ height: "100%", width: "100%", zIndex: 0 }}
            >
              <TileLayer
                attribution="Google Maps"
                url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
              />
            </MapContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
