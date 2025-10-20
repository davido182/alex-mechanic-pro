import { CheckCircle } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const features = [
  "Más de 15 años de experiencia en mecánica automotriz",
  "Técnicos certificados y capacitados constantemente",
  "Equipos de diagnóstico de última generación",
  "Garantía en todos nuestros trabajos",
  "Atención personalizada y profesional",
  "Precios competitivos y transparentes"
];

const About = () => {
  return (
    <section 
      id="nosotros" 
      className="py-20 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(224, 220, 220, 0.95), rgba(224, 220, 220, 0.95)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark">
              ¿Por Qué <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Elegirnos?</span>
            </h2>
            <p className="text-xl text-dark/80">
              Somos tu mejor opción en servicios de mecánica automotriz
            </p>
          </div>

          <div className="bg-background/80 backdrop-blur-sm rounded-2xl shadow-[0_10px_30px_-10px_hsl(var(--dark)/0.3)] p-8 md:p-12 border-2 border-border">
            <p className="text-lg text-foreground mb-8 leading-relaxed">
              En <span className="font-bold text-primary">Taller Mecánico Automotríz Alex 8a</span>, nos dedicamos a brindar 
              servicios de mecánica automotriz de la más alta calidad. Utilizamos tecnología de punta 
              y contamos con un equipo de profesionales altamente capacitados para garantizar que tu 
              vehículo reciba el mejor cuidado posible.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <span className="text-foreground text-base">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-center text-lg font-semibold text-dark">
                Tu vehículo en las mejores manos. 
                <span className="text-primary"> Calidad y confianza garantizadas.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
