import logoTaller from "@/assets/logo_taller.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <img 
              src={logoTaller} 
              alt="Taller Mecánico Automotríz Alex 8a" 
              className="w-24 h-24 object-contain mx-auto md:mx-0 mb-4"
            />
            <h3 className="text-xl font-bold text-background mb-2">
              Taller Mecánico Automotríz Alex 8a
            </h3>
            <p className="text-muted text-sm">
              Servicio profesional y de confianza para tu vehículo
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-lg font-semibold text-background mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="text-muted hover:text-primary transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-muted hover:text-primary transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-muted hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-background mb-4">Información</h4>
            <ul className="space-y-2 text-muted text-sm">
              <li>Av. Principal #123</li>
              <li>Colonia Centro</li>
              <li>Tel: 555-1234 / 555-5678</li>
              <li>info@talleralex8a.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted text-sm">
            © {currentYear} Taller Mecánico Automotríz Alex 8a. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
