export function getEdukaDeployment(language: string) {
  return {
    title:
      language === "fr"
        ? "Déploiement avec Docker et AWS"
        : "Deployment with Docker and AWS",
    description:
      language === "fr"
        ? "Containerisation de l'application avec Docker et déploiement sur AWS EC2 pour assurer disponibilité et performance en production."
        : "Application containerization with Docker and deployment on AWS EC2 to ensure availability and performance in production.",
    image: "/assets/eduka/conception/architecture.png",
    steps:
      language === "fr"
        ? [
            "🎨 Déploiement Front-end sur Vercel\n   • Connecter le repository GitHub\n   • Configuration automatique Next.js\n   • Déploiement continu (CI/CD)\n   • URL de production générée",
            "📦 Containerisation Docker (Backend)\n   • Créer un Dockerfile pour le backend\n   • Inclure Node.js, MySQL et dépendances\n   • Construire l'image Docker",
            "☁️ Publication de l'image\n   • Pousser l'image sur Docker Hub\n   • Versionner l'image (tags)\n   • Rendre accessible pour AWS",
            "🖥️ Configuration AWS EC2\n   • Créer une instance EC2\n   • Installer Docker sur le serveur\n   • Récupérer et exécuter l'image",
            "🌐 Exposition publique\n   • Configurer les groupes de sécurité\n   • Assigner une adresse IP publique\n   • Connecter front-end (Vercel) au backend (AWS)",
            "📊 Tests de performance\n   • Simulation de charge avec JMeter\n   • Monitoring avec AWS CloudWatch\n   • Identifier les goulots d'étranglement",
            "🔔 Surveillance continue\n   • Configuration Kuma Uptime\n   • Alertes en cas de problème\n   • Suivi de la disponibilité 24/7",
          ]
        : [
            "🎨 Front-end Deployment on Vercel\n   • Connect GitHub repository\n   • Automatic Next.js configuration\n   • Continuous deployment (CI/CD)\n   • Production URL generated",
            "📦 Docker Containerization (Backend)\n   • Create a Dockerfile for backend\n   • Include Node.js, MySQL and dependencies\n   • Build Docker image",
            "☁️ Image Publishing\n   • Push image to Docker Hub\n   • Version the image (tags)\n   • Make accessible for AWS",
            "🖥️ AWS EC2 Configuration\n   • Create EC2 instance\n   • Install Docker on server\n   • Pull and run the image",
            "🌐 Public Exposure\n   • Configure security groups\n   • Assign public IP address\n   • Connect front-end (Vercel) to backend (AWS)",
            "📊 Performance Testing\n   • Load simulation with JMeter\n   • Monitoring with AWS CloudWatch\n   • Identify bottlenecks",
            "🔔 Continuous Monitoring\n   • Kuma Uptime configuration\n   • Alerts for issues\n   • 24/7 availability tracking",
          ],
    conclusion:
      language === "fr"
        ? "Architecture cloud complète garantissant performance, scalabilité et disponibilité continue. Le monitoring permet d'optimiser les ressources et d'intervenir rapidement en cas d'incident."
        : "Complete cloud architecture ensuring performance, scalability and continuous availability. Monitoring enables resource optimization and quick incident response.",
  };
}
