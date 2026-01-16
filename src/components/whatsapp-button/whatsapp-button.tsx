"use client";
import { person } from "@/resources";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsAppButton = () => {
  return (
    <FloatingWhatsApp
      notification
      avatar={person.avatar}
      statusMessage="Online now"
      phoneNumber={person.phone}
      accountName={person.firstName}
    />
  );
};

export default WhatsAppButton;
