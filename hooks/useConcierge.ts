import { useState } from "react";
import { CONCIERGE_EMAIL } from "@/constants/contact";

export function useConcierge() {
  const [clientName, setClientName] = useState("");
  const [clientContact, setClientContact] = useState("");
  const [clientMessage, setClientMessage] = useState("");
  const isSubmitting = false;
  const [inquirySent, setInquirySent] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientContact.trim()) return;

    const subject = encodeURIComponent("Beauty Lotion inquiry");
    const body = encodeURIComponent(`Name: ${clientName}\nContact: ${clientContact}\n\nInquiry: ${clientMessage}`);
    window.location.href = `mailto:${CONCIERGE_EMAIL}?subject=${subject}&body=${body}`;
    setInquirySent(true);
  };

  const resetForm = () => {
    setInquirySent(false);
    setClientName("");
    setClientContact("");
    setClientMessage("");
    setErrorMessage(null);
  };

  return {
    clientName,
    setClientName,
    clientContact,
    setClientContact,
    clientMessage,
    setClientMessage,
    isSubmitting,
    inquirySent,
    errorMessage,
    handleSubmit,
    resetForm,
  };
}

