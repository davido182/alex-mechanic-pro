import { MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  // CONFIGURACIÓN: Agrega tu número de WhatsApp en el archivo .env.local
  // Crea un archivo .env.local en la raíz del proyecto y agrega:
  // VITE_WHATSAPP_NUMBER=593967524863 (tu número sin + ni espacios)
  // O puedes agregar el número directamente aquí: const whatsappNumber = "593967524863";
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "593967524863";
  const defaultMessage = "Hola, me gustaría agendar una cita para mi vehículo";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  /* 
   * OPCIÓN 2: CHAT WIDGET CON IA AUTOMATIZADO
   * 
   * Para implementar un chat widget con bot de IA integrado:
   * 
   * 1. Habilitar Lovable Cloud (backend automático)
   * 2. Crear un componente ChatWidget que incluya:
   *    - Botón flotante para abrir/cerrar chat
   *    - Ventana de chat con historial de mensajes
   *    - Input para escribir mensajes
   *    - Integración con OpenAI/ElevenLabs para respuestas automatizadas
   * 
   * 3. Crear Edge Function para manejar:
   *    - Llamadas a API de IA (OpenAI/ElevenLabs)
   *    - Guardar historial de conversaciones en base de datos
   *    - Detectar intención de agendar cita y conectar con Calendly
   *    - Responder preguntas sobre servicios del taller
   * 
   * 4. Entrenar el bot con información específica:
   *    - Servicios del taller
   *    - Precios aproximados
   *    - Horarios de atención
   *    - Proceso de agendamiento
   * 
   * Ventajas sobre WhatsApp:
   *    - Control total del chat
   *    - Sin límites de mensajes
   *    - Datos guardados en tu base de datos
   *    - Personalización completa
   *    - Integración directa con Calendly
   * 
   * Para activar: Reemplazar este componente WhatsAppButton con ChatWidget
   */

  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || "https://calendly.com/talleralex8a";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Botón de WhatsApp */}
      <Button
        onClick={handleWhatsAppClick}
        className="group relative bg-[#25D366] hover:bg-[#20BA5A] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-auto py-3 px-5 rounded-full flex items-center gap-3"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-white" />
        <span className="text-white font-semibold">¡Chatea con nosotros!</span>
      </Button>
      
      {/* Botón de Calendly */}
      <Button
        onClick={() => window.open(calendlyUrl, '_blank')}
        className="group relative bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-auto py-3 px-5 rounded-full flex items-center gap-3"
        aria-label="Agendar cita en Calendly"
      >
        <Clock className="h-6 w-6 text-primary-foreground" />
        <span className="text-primary-foreground font-semibold">¡Agenda tu cita!</span>
      </Button>
    </div>
  );
};

export default WhatsAppButton;
