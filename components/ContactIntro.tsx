
export const ContactIntro = ({ language }: { language: string }) => {
    return (
      <>
        <h2 className="text-3xl font-bold text-blue-600 uppercase mb-4">
          ✉️ {language === "fr" ? "Contact" : "Contact"}
        </h2>
  
        <p className="text-gray-700 mb-6">
          {language === "fr"
            ? "Vous avez une question ou un projet ? Envoyez-moi un message."
            : "Got a question or project  ?  Send me a message."}
        </p>
      </>
    );
  };
  