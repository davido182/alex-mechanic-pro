import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    details: ["+593 96 752 4863"],
    link: "tel:+593967524863"
  },
  {
    icon: MapPin,
    title: "Dirección",
    details: ["Anton Philips y Teodoro Wolf", "Loja, Ecuador"],
    link: null
  },
  {
    icon: Clock,
    title: "Horario",
    details: ["Lun - Vie: 8:00 AM - 6:00 PM", "Sábado: 9:00 AM - 2:00 PM"],
    link: null
  },
  {
    icon: Mail,
    title: "Email",
    details: ["talleralex8am@gmail.com"],
    link: "mailto:talleralex8am@gmail.com"
  }
];

const Contact = () => {
  return (
    <section 
      id="contacto" 
      className="py-20 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(57, 57, 57, 0.95), rgba(57, 57, 57, 0.95)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-background">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Contáctanos</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Comunícate con nosotros para agendar tu cita
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/90 backdrop-blur-sm border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] group"
              >
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                  {info.link && (
                    <a 
                      href={info.link}
                      className="inline-block mt-3 text-primary hover:text-secondary transition-colors text-sm font-semibold"
                    >
                      Contactar →
                    </a>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl shadow-[0_0_40px_hsl(var(--primary)/0.3)]">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              ¿Listo para dar servicio a tu vehículo?
            </h3>
            <p className="text-primary-foreground/90 mb-6 text-lg">
              Agenda tu cita hoy mismo y recibe atención profesional de calidad
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-background text-primary hover:bg-background/90 text-lg px-8 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.location.href = 'tel:+593967524863'}
              >
                Llamar Ahora
              </Button>
              {/* Calendly integration will be added here */}
              <Button 
                size="lg" 
                className="bg-background text-primary hover:bg-background/90 text-lg px-8 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  // CONFIGURACIÓN: Enlace de Calendly
                  // Para usar variables de entorno, crea .env.local y agrega:
                  // VITE_CALENDLY_URL=https://calendly.com/tu-usuario/30min
                  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || "https://calendly.com/talleralex8a";
                  window.open(calendlyUrl, '_blank');
                }}
              >
                Agendar Cita Online
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
