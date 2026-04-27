import type { Project } from "./types";

export function getGtaProject(language: string): Project {
  return {
    id: "gta-v-fivem",
    quote:
      language === "fr"
        ? "J'ai conçu une architecture serveur temps réel client-serveur complète, avec un dashboard d'administration en Vue.js, une couche de persistance MySQL, et plus de 50 scripts Lua optimisés pour la logique métier. Le projet repose sur une architecture événementielle permettant la communication bidirectionnelle entre le client et le serveur, avec une interface web intégrée via un bridge natif."
        : "I designed a complete real-time client-server architecture, featuring a Vue.js admin dashboard, a MySQL persistence layer, and over 50 optimized Lua scripts for business logic. The project relies on an event-driven architecture enabling bidirectional client-server communication, with a web interface integrated via a native bridge.",
    name: "Multiplayer Backend",
    designation: language === "fr" ? "Projet personnel — Architecture serveur temps réel" : "Personal project — Real-time server architecture",
    srcs: ["/assets/gta/Gta.webp"],
    stack: ["Figma", "Vue", "Lua", "Tailwind", "Mysql"],
    gallery: ["/assets/gta/Gta.webp"],
    features: language === "fr" ? [
      "Système de transactions avec multiples flux de revenus",
      "Dashboard d'administration en Vue.js",
      "Système de gestion d'actifs avancé",
      "Intégration d'entités et stockage personnalisé",
      "Système de groupes et gestion organisationnelle",
      "Couche de persistance MySQL avec requêtes optimisées",
      "50+ scripts Lua modulaires et performants",
      "Système de permissions et de rôles granulaire",
    ] : [
      "Transaction system with multiple revenue streams",
      "Vue.js admin dashboard",
      "Advanced asset management system",
      "Entity integration and custom storage",
      "Group system and organizational management",
      "MySQL persistence layer with optimized queries",
      "50+ modular and performant Lua scripts",
      "Granular permissions and role-based access system",
    ],
    codeSnippets: [
      {
        title: language === "fr" ? "Script Lua pour le système d'inventaire" : "Lua script for inventory system",
        description: language === "fr"
          ? "Gestion de l'inventaire des joueurs avec ajout/suppression d'items"
          : "Player inventory management with add/remove items",
        code: `RegisterNetEvent('inventory:addItem')
AddEventHandler('inventory:addItem', function(itemName, quantity)
    local xPlayer = ESX.GetPlayerFromId(source)
    local item = xPlayer.getInventoryItem(itemName)

    if item.limit ~= -1 and item.count + quantity > item.limit then
        TriggerClientEvent('notification', source, 'error', 'Inventaire plein')
    else
        xPlayer.addInventoryItem(itemName, quantity)
        MySQL.Async.execute('UPDATE users SET inventory = @inventory WHERE identifier = @identifier', {
            ['@inventory'] = json.encode(xPlayer.inventory),
            ['@identifier'] = xPlayer.identifier
        })
        TriggerClientEvent('notification', source, 'success', 'Item ajouté')
    end
end)`,
        language: "lua"
      },
      {
        title: language === "fr" ? "Gestion des événements NUI" : "NUI event handling",
        description: language === "fr"
          ? "Communication entre l'interface et le script Lua via NUI callbacks"
          : "Communication between interface and Lua script via NUI callbacks",
        code: `// Côté JavaScript (NUI)
window.addEventListener('message', (event) => {
  const data = event.data;

  if (data.action === 'openMenu') {
    showPlayerMenu(data.playerData);
  } else if (data.action === 'updateMoney') {
    updatePlayerMoney(data.amount);
  }
});

// Envoyer un événement au client Lua
function sendNUICallback(action, data) {
  fetch(\`https://\${GetParentResourceName()}/\${action}\`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
}`,
        language: "javascript"
      }
    ],
    architecture: {
      description: language === "fr"
        ? "Le serveur FiveM utilise une architecture client-serveur avec des scripts Lua côté serveur et client, et une interface Vue.js pour les menus UI. Les données sont persistées dans une base MySQL."
        : "The FiveM server uses a client-server architecture with Lua scripts on server and client side, and a Vue.js interface for UI menus. Data is persisted in a MySQL database.",
      points: language === "fr" ? [
        "Scripts Lua pour la logique serveur et client",
        "Interface Vue.js pour les menus et HUD",
        "Base de données MySQL pour la persistance",
        "ESX Framework comme base du serveur RP",
        "NUI (Native UI) pour l'intégration des interfaces web",
        "Optimisation des performances avec threading",
      ] : [
        "Lua scripts for server and client logic",
        "Vue.js interface for menus and HUD",
        "MySQL database for persistence",
        "ESX Framework as RP server base",
        "NUI (Native UI) for web interface integration",
        "Performance optimization with threading",
      ]
    },
    metrics: language === "fr" ? [
      { label: "Architecture", value: "Temps réel" },
      { label: "Modules Lua", value: "50+" },
      { label: "Persistance", value: "MySQL" },
      { label: "Dashboard", value: "Vue.js" },
    ] : [
      { label: "Architecture", value: "Real-time" },
      { label: "Lua Modules", value: "50+" },
      { label: "Persistence", value: "MySQL" },
      { label: "Dashboard", value: "Vue.js" },
    ],
    businessCase: language === "fr" ? {
      problem: "Architecture serveur temps réel sans framework existant",
      role: "Architecte & développeur solo",
      result: "50+ modules optimisés, UI Vue.js, persistance MySQL",
    } : {
      problem: "Real-time server architecture without existing framework",
      role: "Solo architect & developer",
      result: "50+ optimized modules, Vue.js UI, MySQL persistence",
    },
    gridSize: "md:col-span-1",
  };
}
