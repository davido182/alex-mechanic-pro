import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  // CONFIGURACIÓN: Agrega tu número de WhatsApp aquí o usa variables de entorno
  // Para usar variables de entorno: import.meta.env.VITE_WHATSAPP_NUMBER
  // Formato: solo números, sin + ni espacios (ejemplo: 523331234567)
  const whatsappNumber = ""; // O usa: import.meta.env.VITE_WHATSAPP_NUMBER || ""
  const defaultMessage = "Hola, me gustaría agendar una cita para mi vehículo";
  
  const handleWhatsAppClick = () => {
    if (!whatsappNumber) {
      // Configuration not complete - silently return in production
      return;
    }
    
    // Validate WhatsApp number format (digits only, 10-15 characters)
    const phoneRegex = /^\d{10,15}$/;
    if (!phoneRegex.test(whatsappNumber)) {
      // Invalid phone number format - silently return in production
      return;
    }
    
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

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg hover:shadow-xl transition-all duration-300 p-0 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </Button>
  );
};

export default WhatsAppButton;
