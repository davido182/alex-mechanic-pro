import { Button } from "@/components/ui/button";
import logoTaller from "@/assets/logo_taller.png";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(57, 57, 57, 0.85), rgba(57, 57, 57, 0.85)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <img 
              src={logoTaller} 
              alt="Taller Mecánico Automotríz Alex 8a" 
              className="w-64 h-64 object-contain drop-shadow-2xl animate-in fade-in zoom-in duration-700"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-background animate-in slide-in-from-bottom duration-700 delay-150">
            Taller Mecánico Automotríz
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mt-2">
              Alex 8a
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted mb-8 animate-in slide-in-from-bottom duration-700 delay-300">
            Servicio profesional de mecánica automotriz con tecnología de última generación
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom duration-700 delay-500">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-all duration-300 text-lg px-8"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contáctanos
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-foreground bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 text-lg px-8"
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Nuestros Servicios
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
