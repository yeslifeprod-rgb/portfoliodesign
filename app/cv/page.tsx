"use client";

import dynamic from "next/dynamic";

// Version ciblée pour l'offre Technicien Helpdesk — Toyota Valenciennes.
const CVClient = dynamic(() => import("./toyota-helpdesk/toyota-helpdesk-client"), { ssr: false });

export default function CVPage() {
  return <CVClient />;
}
