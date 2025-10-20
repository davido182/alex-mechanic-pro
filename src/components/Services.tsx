import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Cog, Gauge, Zap, Car, Shield } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const services = [
  {
    icon: Wrench,
    title: "Mantenimiento General",
    description: "Cambio de aceite, filtros, y revisión completa de todos los sistemas del vehículo"
  },
  {
    icon: Cog,
    title: "Reparación de Motor",
    description: "Diagnóstico y reparación especializada de motores con tecnología avanzada"
  },
  {
    icon: Gauge,
    title: "Diagnóstico Computarizado",
    description: "Escaneo y diagnóstico con equipos de última generación para detectar fallas"
  },
  {
    icon: Zap,
    title: "Sistema Eléctrico",
    description: "Reparación de sistemas eléctricos, alternadores, baterías y sensores"
  },
  {
    icon: Car,
    title: "Suspensión y Frenos",
    description: "Revisión y reparación completa del sistema de suspensión y frenos"
  },
  {
    icon: Shield,
    title: "Revisión Preventiva",
    description: "Mantenimiento preventivo para evitar averías y prolongar la vida útil"
  }
];

const Services = () => {
  return (
    <section 
      id="servicios" 
      className="py-20 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(57, 57, 57, 0.92), rgba(57, 57, 57, 0.92)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-background">
            Nuestros <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Servicios</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios profesionales para mantener tu vehículo en perfectas condiciones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/90 backdrop-blur-sm border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] group"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
