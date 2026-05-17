import { MessageCircle, Phone } from "lucide-react";
import { waLink, SITE } from "@/lib/site";

export function MobileCTABar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden border-t border-border bg-card/95 backdrop-blur-md p-3 grid grid-cols-2 gap-2 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <a
        href={`tel:${SITE.phoneIntl}`}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 px-4 py-3 text-sm font-semibold text-primary"
      >
        <Phone className="h-4 w-4" /> Call
      </a>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] px-4 py-3 text-sm font-semibold text-white"
      >
        <MessageCircle className="h-4 w-4" /> WhatsApp
      </a>
    </div>
  );
}
