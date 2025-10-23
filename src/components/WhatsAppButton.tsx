import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  // TODO: Add your WhatsApp business number here
  const whatsappNumber = ""; // Format: 593967524863 (country code + number, no + or spaces)
  const defaultMessage = "Hola, me gustaría agendar una cita para mi vehículo";
  
  const handleWhatsAppClick = () => {
    if (!whatsappNumber) {
      console.warn("WhatsApp number not configured yet");
      return;
    }
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

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
