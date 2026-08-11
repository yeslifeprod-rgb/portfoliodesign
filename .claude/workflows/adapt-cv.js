export const meta = {
  name: 'adapt-cv',
  description: 'Adapte le CV ATS (titre, profil, compétences) à une offre d\'emploi collée en args',
  phases: [
    { title: 'Analyse', detail: 'Extraire technologies, missions et mots-clés de l\'offre' },
    { title: 'Génération', detail: 'Créer le contenu CV adapté (profil + compétences)' },
    { title: 'Application', detail: 'Écrire les changements dans les 3 fichiers CV' },
  ],
}

if (!args) {
  log('ERREUR : colle le texte de l\'offre d\'emploi en args. Exemple : Workflow({ name: "adapt-cv", args: "...texte offre..." })')
}

// ─── Phase 1 : Analyse de l'offre ───────────────────────────────────────────

phase('Analyse')
log('Lecture et analyse de l\'offre...')

const ANALYSIS_SCHEMA = {
  type: 'object',
  properties: {
    job_title:        { type: 'string', description: 'Titre exact du poste dans l\'offre' },
    h2_title:         { type: 'string', description: 'Titre court pour le h2 du CV, ex: "Développeur Back-End Node.js / TypeScript"' },
    primary_tech:     { type: 'array', items: { type: 'string' }, description: 'Technologies principales par ordre de priorité dans l\'offre' },
    secondary_tech:   { type: 'array', items: { type: 'string' }, description: 'Technologies secondaires ou bonus' },
    profile_keywords: { type: 'array', items: { type: 'string' }, description: 'Mots EXACTS du texte de l\'offre à réutiliser dans le profil (autonome, problématiques métier, etc.)' },
    mission_verbs:    { type: 'array', items: { type: 'string' }, description: 'Verbes d\'action des missions (concevoir, développer, structurer...)' },
    company_type:     { type: 'string', enum: ['startup', 'esn', 'entreprise'] },
    pills:            { type: 'array', items: { type: 'string' }, description: 'Exactement 7 mots-clés pour les pills du CV, les plus importants de l\'offre en premier' },
  },
  required: ['job_title', 'h2_title', 'primary_tech', 'profile_keywords', 'mission_verbs', 'company_type', 'pills'],
}

const analysis = await agent(
  `Tu es un expert en recrutement tech. Analyse cette offre d'emploi et extrais les informations structurées.

OFFRE D'EMPLOI :
${args}

Règles :
- h2_title : court, format "Développeur [Spécialité] [Tech1] / [Tech2]" — reprend exactement le vocabulaire de l'offre
- pills : exactement 7, dans l'ordre de priorité de l'offre (la techno la plus demandée en premier)
- profile_keywords : copy-paste des mots importants du texte de l'offre (autonome, scalabilité, etc.)
- company_type : startup si petite équipe / peu de process, esn si prestation/mission client, entreprise sinon`,
  { schema: ANALYSIS_SCHEMA, label: 'analyse-offre', phase: 'Analyse' }
)

log(`Poste détecté : ${analysis.job_title} | Type : ${analysis.company_type}`)
log(`Stack principale : ${analysis.primary_tech.slice(0, 4).join(', ')}`)

// ─── Phase 2 : Génération du contenu CV ─────────────────────────────────────

phase('Génération')
log('Génération du profil et des compétences adaptés...')

const CV_CONTENT_SCHEMA = {
  type: 'object',
  properties: {
    profile_sentences: {
      type: 'array',
      items: { type: 'string' },
      description: 'Exactement 5 phrases du profil CV. Marque les termes importants avec **mot**. La dernière phrase = "Recherche un CDI [h2_title]."',
    },
    stackATS: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          cat:   { type: 'string', description: 'Nom de la catégorie (ex: Back-End & BDD)' },
          items: { type: 'string', description: 'Compétences séparées par " - "' },
        },
        required: ['cat', 'items'],
      },
      description: 'Exactement 5 catégories de compétences. La catégorie contenant la techno principale de l\'offre doit être EN PREMIER.',
    },
  },
  required: ['profile_sentences', 'stackATS'],
}

const generated = await agent(
  `Tu es un expert CV tech. Génère le contenu adapté pour ce candidat sur ce poste.

ANALYSE DE L'OFFRE :
- Titre : ${analysis.job_title}
- h2_title : ${analysis.h2_title}
- Technologies principales : ${analysis.primary_tech.join(', ')}
- Technologies secondaires : ${(analysis.secondary_tech || []).join(', ')}
- Mots-clés profil à réutiliser EXACTEMENT : ${analysis.profile_keywords.join(', ')}
- Verbes missions : ${analysis.mission_verbs.join(', ')}
- Type entreprise : ${analysis.company_type}

COMPÉTENCES RÉELLES DU CANDIDAT (n'invente rien d'autre) :
TypeScript, React, Next.js, Vue.js, Ionic, Node.js, NestJS, Fastify, API REST,
Prisma, MySQL, PostgreSQL, Supabase, JWT, bcrypt, RGPD, chiffrement, Docker,
Git, CI/CD, Vercel, Railway, Jest, Cypress, Claude Code, Agile Scrum, Merise, YouTrack

EXPÉRIENCES (pour contexte, ne pas les modifier) :
- Stage Num4 (1 mois) : Next.js, UX/UI, RevenueCat, travail direct CTO
- ALT Incubateur 8 mois (EDUKA) : React, Ionic, Node.js, NestJS, Prisma, MySQL, Docker, microservices, JWT, bcrypt, RGPD, Cypress, Jest
- Projet Teamsfinder : Next.js, TypeScript, Supabase, API REST Node.js, Stripe, SEO i18n

RÈGLES profile_sentences :
1. 5 phrases courtes et percutantes
2. Marque avec **mot** les termes techniques et mots-clés importants
3. Réutilise EXACTEMENT les mots de l'offre (${analysis.profile_keywords.join(', ')})
4. Phrase 1 : positionnement tech principal (ex: "Développeur **Back-End Node.js / TypeScript**...")
5. Phrase 2-3 : expériences concrètes alignées sur les missions de l'offre
6. Phrase 4 : soft skills du profil recherché (mots exacts de l'offre)
7. Phrase 5 : "Recherche un CDI **${analysis.h2_title}**."

RÈGLES stackATS :
- 5 catégories exactement
- La techno principale (${analysis.primary_tech[0]}) doit être dans la PREMIÈRE catégorie
- Items séparés par " - " (espace tiret espace)
- Seulement des compétences réelles listées ci-dessus`,
  { schema: CV_CONTENT_SCHEMA, label: 'génération-cv', phase: 'Génération' }
)

log(`Profil généré : ${generated.profile_sentences.length} phrases`)
log(`Compétences : ${generated.stackATS.map(s => s.cat).join(' | ')}`)

// ─── Phase 3 : Application dans les fichiers ────────────────────────────────

phase('Application')
log('Écriture des changements dans les 3 fichiers CV...')

const BASE = '/Users/ilyes/Desktop/portfoliodesign'

await parallel([

  // 1. cv-client.tsx → h2 title + pills
  () => agent(
    `Modifie le fichier ${BASE}/app/cv/cv-client.tsx.
LIS le fichier en premier, puis fais UNIQUEMENT ces deux modifications :

MODIFICATION 1 — Le h2 contient le titre du poste. Remplace son contenu texte par :
"${analysis.h2_title}"
Le h2 ressemble à : <h2 style={{...}}>Développeur...</h2>

MODIFICATION 2 — Le tableau des pills. Remplace le tableau existant (qui ressemble à {["TypeScript",...].map(...)}) par exactement :
{${JSON.stringify(analysis.pills)}.map((kw) => (

N'édite RIEN d'autre. Conserve tout le reste du fichier à l'identique.`,
    { label: 'edit-cv-client', phase: 'Application' }
  ),

  // 2. cv-entry.tsx → ProfileText
  () => agent(
    `Modifie la fonction ProfileText() dans ${BASE}/app/cv/components/cv-entry.tsx.
LIS le fichier en premier.

Remplace UNIQUEMENT le contenu du return de ProfileText() par ces 5 phrases en JSX :

${generated.profile_sentences.map((sentence, i) => `Phrase ${i+1} : ${sentence}`).join('\n')}

RÈGLES DE CONVERSION en JSX :
- Chaque **mot** devient : <strong style={{ color: TEXT_DARK }}>mot</strong>
- Entre chaque phrase ajoute : {" "}
- Structure du return : <> ... </>
- Conserve tous les imports, le composant Entry et tout le reste du fichier

N'édite RIEN d'autre que le return de ProfileText().`,
    { label: 'edit-cv-entry', phase: 'Application' }
  ),

  // 3. cv-data.ts → stackATS
  () => agent(
    `Modifie le fichier ${BASE}/app/cv/components/cv-data.ts.
LIS le fichier en premier.

Remplace UNIQUEMENT la valeur de export const stackATS par exactement :
[
${generated.stackATS.map(s => `  { cat: "${s.cat}", items: "${s.items}" }`).join(',\n')}
]

N'édite RIEN d'autre (les constantes de couleurs, les exports de languages, hobbies, experiences, projets doivent rester intacts).`,
    { label: 'edit-cv-data', phase: 'Application' }
  ),

])

log('✓ CV adapté. Ouvre localhost:3000/cv, vérifie, puis Imprimer → Enregistrer en PDF.')

return {
  poste:       analysis.job_title,
  h2:          analysis.h2_title,
  pills:       analysis.pills,
  stack_order: generated.stackATS.map(s => s.cat),
  profil:      generated.profile_sentences,
}
