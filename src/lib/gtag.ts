export const LEAD_CONVERSION_SEND_TO = "AW-17700317377/Fd7ICKn4k7kbEMHRlfhB";

type Gtag = (...args: unknown[]) => void;

function getGtag(): Gtag | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as Window & { gtag?: Gtag }).gtag;
}

export function reportLeadFormConversion() {
  getGtag()?.("event", "conversion", {
    send_to: LEAD_CONVERSION_SEND_TO,
  });
}
