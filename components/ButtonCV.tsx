"use client";

import React from "react";

const ButtonCV: React.FC = () => {
  const handleDownload = () => {
    const cvPath = "assets/cv-ilyes-ghardi.png"; // Assurez-vous que ce fichier est bien dans "public/"
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "CV-Ilyes-Ghardi.png"; // Nom du fichier lors du téléchargement
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="px-5 py-3 rounded-md border border-black bg-white text-black text-sm font-semibold hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 active:shadow-none active:translate-x-1 active:translate-y-1 font-['DM_Sans'] italic"
    >
      📄 Télécharger mon CV
    </button>
  );
};

export default ButtonCV;
