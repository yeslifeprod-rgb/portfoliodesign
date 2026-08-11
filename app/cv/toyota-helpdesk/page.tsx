"use client";

import dynamic from "next/dynamic";

const ToyotaHelpdeskCV = dynamic(() => import("./toyota-helpdesk-client"), { ssr: false });

export default function ToyotaHelpdeskCVPage() {
  return <ToyotaHelpdeskCV />;
}
