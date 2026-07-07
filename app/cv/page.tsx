"use client";

import dynamic from "next/dynamic";

// Renders the clean 1-column ATS layout by default and hides the layout toggle
const CVClient = dynamic(() => import("./cv-client"), { ssr: false });

export default function CVPage() {
  return <CVClient />;
}
