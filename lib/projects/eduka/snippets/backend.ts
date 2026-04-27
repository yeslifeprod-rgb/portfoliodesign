export function getEdukaBackendSnippets(language: string) {
  return [
    // [6] NestJS modular architecture
    {
      title:
        language === "fr"
          ? "Pourquoi NestJS modulaire plutôt qu'Express monolithique"
          : "Why modular NestJS over monolithic Express",
      description:
        language === "fr"
          ? "Problème : 4 développeurs travaillant en parallèle sur le même backend. Avec Express, les merge conflicts étaient constants sur les fichiers routes. Choix : NestJS avec architecture modulaire (un module par domaine métier). Chaque dev travaille dans son module sans toucher aux autres. Résultat : conflits Git réduits de 80%, modules testables indépendamment avec Jest."
          : "Problem: 4 developers working in parallel on the same backend. With Express, merge conflicts were constant on route files. Choice: NestJS with modular architecture (one module per business domain). Each dev works in their module without touching others. Result: Git conflicts reduced by 80%, modules independently testable with Jest.",
      category: "backend" as const,
      code:
        language === "fr"
          ? `// Pourquoi cette structure ? 4 devs, chacun responsable d'un domaine.
// Avec Express classique, tout le monde touchait au même router.ts

// src/
// ├── modules/
// │   ├── user/           ← Dev 1 : profils parents + enfants
// │   │   ├── user.controller.ts
// │   │   ├── user.service.ts
// │   │   └── user.module.ts
// │   ├── auth/           ← Dev 2 : JWT, guards, refresh tokens
// │   ├── event/          ← Dev 3 : événements, calendrier
// │   └── carpool/        ← Dev 4 : matching, trajets
// ├── common/             ← Partagé : DTOs, guards, interceptors
// └── main.ts

@Module({
  imports: [
    UserModule,
    AuthModule,
    EventModule,
    CarpoolModule,
    PrismaModule,
  ],
})
export class AppModule {}
// Un dev peut refactorer tout son module
// sans toucher au code des 3 autres.`
          : `// Why this structure? 4 devs, each owning a domain.
// With classic Express, everyone touched the same router.ts

// src/
// ├── modules/
// │   ├── user/           ← Dev 1: parent + children profiles
// │   │   ├── user.controller.ts
// │   │   ├── user.service.ts
// │   │   └── user.module.ts
// │   ├── auth/           ← Dev 2: JWT, guards, refresh tokens
// │   ├── event/          ← Dev 3: events, calendar
// │   └── carpool/        ← Dev 4: matching, rides
// ├── common/             ← Shared: DTOs, guards, interceptors
// └── main.ts

@Module({
  imports: [
    UserModule,
    AuthModule,
    EventModule,
    CarpoolModule,
    PrismaModule,
  ],
})
export class AppModule {}
// A dev can refactor their entire module
// without touching the other 3 devs' code.`,
      language: "typescript",
      image: "/assets/eduka/back-end/Archictecture.png",
    },

    // [7] Double JWT + DB check
    {
      title:
        language === "fr"
          ? "Pourquoi une double vérification JWT + BDD sur chaque mutation"
          : "Why double-check JWT + DB on every mutation",
      description:
        language === "fr"
          ? "Problème : un token JWT valide ne garantit pas que le compte existe encore (suppression par un admin, compte désactivé). Un parent supprimé pourrait encore modifier son profil pendant 15 min avec un token valide. Choix : vérification systématique en BDD après validation JWT. Résultat : aucune modification fantôme possible, les comptes désactivés sont immédiatement bloqués."
          : "Problem: a valid JWT token doesn't guarantee the account still exists (admin deletion, deactivated account). A deleted parent could still modify their profile for 15 min with a valid token. Choice: systematic DB check after JWT validation. Result: no ghost modifications possible, deactivated accounts are immediately blocked.",
      category: "backend" as const,
      code:
        language === "fr"
          ? `async updateProfile(req: Request) {
  // 1. Le JWT Guard intercepte AVANT le controller
  // Expiration à 15min — court volontairement
  const token = req.headers.authorization;

  // 2. ID extrait du payload JWT, pas de l'URL
  // → un utilisateur ne peut pas cibler un autre profil
  const userId = extractFromJwt(token);

  // 3. Vérification en BDD — étape critique
  // Un token valide ne suffit PAS : compte peut être supprimé/désactivé
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new UnauthorizedException();
  // → 401, pas 404 : ne pas révéler si le compte existe

  // 4. Mise à jour seulement si les 3 checks passent
  return prisma.user.update({ where: { id: userId }, data: updateProfileDto });
}`
          : `async updateProfile(req: Request) {
  // 1. JWT Guard intercepts BEFORE the controller
  // 15min expiration — intentionally short
  const token = req.headers.authorization;

  // 2. ID extracted from JWT payload, not from URL
  // → a user cannot target another profile
  const userId = extractFromJwt(token);

  // 3. DB check — critical step
  // A valid token is NOT enough: account may be deleted/deactivated
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new UnauthorizedException();
  // → 401, not 404: don't reveal whether the account exists

  // 4. Update only if all 3 checks pass
  return prisma.user.update({ where: { id: userId }, data: updateProfileDto });
}`,
      language: "typescript",
      image: "/assets/eduka/back-end/Workflow.png",
    },

    // [8] DTOs preventing SQL injection
    {
      title:
        language === "fr"
          ? "Pourquoi les DTOs m'ont évité des injections SQL et des données corrompues"
          : "How DTOs prevented SQL injection and corrupted data",
      description:
        language === "fr"
          ? "Problème : sans validation serveur, n'importe quel payload JSON peut atteindre Prisma. Un champ 'email' contenant du HTML ou un tableau 'children' vide crée des profils inutilisables. Choix : DTOs avec class-validator et validation imbriquée pour les objets enfants. Résultat : les données invalides sont rejetées avec des messages explicites avant même de toucher la BDD."
          : "Problem: without server validation, any JSON payload can reach Prisma. An 'email' field containing HTML or an empty 'children' array creates unusable profiles. Choice: DTOs with class-validator and nested validation for child objects. Result: invalid data is rejected with explicit messages before even touching the DB.",
      category: "backend" as const,
      code:
        language === "fr"
          ? `export class CreateUpdateProfileDto {
  @IsString()
  @IsNotEmpty() // Pas de profil anonyme — RGPD exige un nom
  firstname: string;

  @IsEmail() // Regex email intégrée — pas de validation custom bancale
  email: string;

  // Validation imbriquée : le point clé de ce DTO
  @IsArray()
  @ArrayMinSize(1) // Règle métier : au moins 1 enfant obligatoire
  @ValidateNested({ each: true }) // Valide CHAQUE enfant du tableau
  @Type(() => CreateChildDto)     // Transforme le JSON brut en instance typée
  children: CreateChildDto[];

  @IsArray()
  @ArrayMaxSize(3) // Même limite que le front — défense en profondeur
  disciplines: string[];
}
// Le ValidationPipe global dans main.ts rejette automatiquement
// tout payload non conforme avec un message explicite`
          : `export class CreateUpdateProfileDto {
  @IsString()
  @IsNotEmpty() // No anonymous profiles — GDPR requires a name
  firstname: string;

  @IsEmail() // Built-in email regex — no shaky custom validation
  email: string;

  // Nested validation: the key point of this DTO
  @IsArray()
  @ArrayMinSize(1) // Business rule: at least 1 child required
  @ValidateNested({ each: true }) // Validates EACH child in the array
  @Type(() => CreateChildDto)     // Transforms raw JSON into typed instance
  children: CreateChildDto[];

  @IsArray()
  @ArrayMaxSize(3) // Same limit as frontend — defense in depth
  disciplines: string[];
}
// Global ValidationPipe in main.ts automatically rejects
// any non-conforming payload with an explicit message`,
      language: "typescript",
      image: "/assets/eduka/back-end/DTO.png",
    },

    // [9] Delete + create for disciplines
    {
      title:
        language === "fr"
          ? "Pourquoi la mise à jour des disciplines passe par delete + create"
          : "Why discipline updates use delete + create instead of upsert",
      description:
        language === "fr"
          ? "Problème : un parent passe de [Maths, Musique] a [Maths, Sport]. Avec un upsert, il faut comparer l'ancien et le nouveau tableau pour savoir quoi ajouter/supprimer — code complexe et source de bugs. Choix : supprimer toutes les anciennes relations puis recréer les nouvelles dans une transaction Prisma. Résultat : code simple, atomique, et impossible d'avoir des doublons ou des orphelins en BDD."
          : "Problem: a parent changes from [Math, Music] to [Math, Sports]. With upsert, you need to diff the old and new arrays to know what to add/remove — complex code and bug-prone. Choice: delete all old relationships then recreate new ones in a Prisma transaction. Result: simple, atomic code with no possibility of duplicates or orphans in DB.",
      category: "backend" as const,
      code:
        language === "fr"
          ? `await this.prisma.$transaction([
  // Supprimer toutes les relations existantes
  this.prisma.userHasDiscipline.deleteMany({
    where: { userId: profileId },
  }),
  // Recréer uniquement les disciplines validées
  ...validDisciplines.map(d =>
    this.prisma.userHasDiscipline.create({
      data: { userId: profileId, disciplineId: d.id },
    })
  ),
]);
// Transaction : si un create échoue, le deleteMany est rollback
// → pas de profil sans disciplines (état incohérent)`
          : `await this.prisma.$transaction([
  // Delete all existing relationships
  this.prisma.userHasDiscipline.deleteMany({
    where: { userId: profileId },
  }),
  // Recreate only validated disciplines
  ...validDisciplines.map(d =>
    this.prisma.userHasDiscipline.create({
      data: { userId: profileId, disciplineId: d.id },
    })
  ),
]);
// Transaction: if a create fails, the deleteMany is rolled back
// → no profile without disciplines (inconsistent state)`,
      language: "typescript",
      image: "/assets/eduka/back-end/Service.png",
    },

    // [10] Return full profile after update
    {
      title:
        language === "fr"
          ? "Pourquoi retourner le profil complet après update et pas juste un 200"
          : "Why return the full profile after update instead of just a 200",
      description:
        language === "fr"
          ? "Problème : le front affiche le profil juste après la sauvegarde. Avec un simple 200, il doit refaire un GET pour afficher les données mises a jour — double appel réseau inutile sur mobile. Choix : retourner le profil mis a jour avec les relations incluses. Résultat : le front met a jour son state immédiatement, pas de loading supplémentaire, UX fluide sur connexions 3G."
          : "Problem: the frontend displays the profile right after saving. With a simple 200, it needs another GET to display updated data — unnecessary double network call on mobile. Choice: return the updated profile with included relations. Result: frontend updates its state immediately, no extra loading, smooth UX on 3G connections.",
      category: "backend" as const,
      code:
        language === "fr"
          ? `const updatedProfile = await this.prisma.profile.update({
  where: { id: profileId },
  data: {
    firstname: dto.firstname,
    lastname: dto.lastname,
    email: dto.email,
    photo: dto.photo,
    children: {
      upsert: dto.children.map(child => ({
        where: { id: child.id ?? 0 },
        update: { name: child.name, birthday: child.birthday },
        create: { name: child.name, birthday: child.birthday },
      })),
    },
  },
  include: {
    children: true,
    userHasDiscipline: { include: { discipline: true } },
  },
});

// On retourne le profil COMPLET — pas juste { success: true }
// → 1 seul appel réseau au lieu de PUT + GET
// Sur mobile 3G, ça fait la différence (300ms vs 600ms)
return updatedProfile;`
          : `const updatedProfile = await this.prisma.profile.update({
  where: { id: profileId },
  data: {
    firstname: dto.firstname,
    lastname: dto.lastname,
    email: dto.email,
    photo: dto.photo,
    children: {
      upsert: dto.children.map(child => ({
        where: { id: child.id ?? 0 },
        update: { name: child.name, birthday: child.birthday },
        create: { name: child.name, birthday: child.birthday },
      })),
    },
  },
  include: {
    children: true,
    userHasDiscipline: { include: { discipline: true } },
  },
});

// Return the COMPLETE profile — not just { success: true }
// → 1 network call instead of PUT + GET
// On mobile 3G, that makes the difference (300ms vs 600ms)
return updatedProfile;`,
      language: "typescript",
      image: "/assets/eduka/back-end/Uptade.png",
    },

    // [11] Thin controller
    {
      title:
        language === "fr"
          ? "Pourquoi le controller ne contient aucune logique métier"
          : "Why the controller contains zero business logic",
      description:
        language === "fr"
          ? "Problème : dans notre premier sprint, un dev avait mis la validation et les requêtes Prisma directement dans le controller. Impossible à tester unitairement, et le code était dupliqué entre les routes GET et PUT. Choix : controller mince qui délègue tout au service. Le guard JWT s'applique au niveau du decorator, pas dans le corps de la méthode. Résultat : le service est testable avec Jest sans simuler de requête HTTP."
          : "Problem: in our first sprint, a dev put validation and Prisma queries directly in the controller. Impossible to unit test, and code was duplicated between GET and PUT routes. Choice: thin controller that delegates everything to the service. JWT guard applies at the decorator level, not in the method body. Result: the service is testable with Jest without simulating HTTP requests.",
      category: "backend" as const,
      code:
        language === "fr"
          ? `@Controller('user')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @UseGuards(JwtAuthGuard)
  @Put('update/:id')
  async updateProfile(
    @Param('id', ParseIntPipe) profileId: number,
    // ParseIntPipe : renvoie 400 si l'ID n'est pas un entier valide
    @Body() updateProfileDto: CreateUpdateProfileDto,
    // ValidationPipe global → controller ne voit QUE des données validées
  ) {
    return this.profileService.updateProfile(profileId, updateProfileDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteProfile(@Param('id', ParseIntPipe) id: number) {
    return this.profileService.softDelete(id);
    // Soft delete — RGPD impose 30j de rétention
  }
}`
          : `@Controller('user')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @UseGuards(JwtAuthGuard)
  @Put('update/:id')
  async updateProfile(
    @Param('id', ParseIntPipe) profileId: number,
    // ParseIntPipe: returns 400 if ID is not a valid integer
    @Body() updateProfileDto: CreateUpdateProfileDto,
    // Global ValidationPipe → controller only sees ALREADY validated data
  ) {
    return this.profileService.updateProfile(profileId, updateProfileDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteProfile(@Param('id', ParseIntPipe) id: number) {
    return this.profileService.softDelete(id);
    // Soft delete — GDPR requires 30-day retention
  }
}`,
      language: "typescript",
      image: "/assets/eduka/back-end/Controller.png",
    },

    // [12] Postman contract validation
    {
      title:
        language === "fr"
          ? "Pourquoi Postman en amont du front pour valider les contrats API"
          : "Why Postman before the frontend to validate API contracts",
      description:
        language === "fr"
          ? "Problème : 2 devs front et 2 devs back travaillaient en parallèle. Sans validation intermédiaire, le front découvrait les bugs API au moment de l'intégration — retards en cascade. Choix : chaque endpoint est testé dans Postman avec des cas nominaux et des cas d'erreur AVANT que le front ne l'utilise. Résultat : l'intégration front-back s'est faite sans surprise, les collections Postman servent aussi de documentation API vivante."
          : "Problem: 2 frontend devs and 2 backend devs worked in parallel. Without intermediate validation, frontend discovered API bugs at integration time — cascading delays. Choice: every endpoint is tested in Postman with nominal and error cases BEFORE the frontend uses it. Result: front-back integration happened with no surprises, Postman collections also serve as living API documentation.",
      category: "backend" as const,
      code:
        language === "fr"
          ? `// ===== PUT /user/update/42 =====
// Headers :
//   Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
//   Content-Type: application/json

// Body — cas nominal :
{
  "firstname": "Sophie",
  "lastname": "Martin",
  "email": "sophie.martin@email.com",
  "children": [
    { "id": 1, "name": "Lucas", "birthday": "2016-05-12", "class": "CE2" }
  ],
  "disciplines": ["Mathématiques", "Musique"]
}

// ===== Cas d'erreur testés =====
// Sans JWT          → 401
// children: []      → 400 "au moins 1 enfant requis"
// 4 disciplines     → 400 "maximum 3"
// ID inexistant     → 404 "profil introuvable"
// Email invalide    → 400 "email must be an email"`
          : `// ===== PUT /user/update/42 =====
// Headers:
//   Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
//   Content-Type: application/json

// Body — nominal case:
{
  "firstname": "Sophie",
  "lastname": "Martin",
  "email": "sophie.martin@email.com",
  "children": [
    { "id": 1, "name": "Lucas", "birthday": "2016-05-12", "class": "CE2" }
  ],
  "disciplines": ["Mathematics", "Music"]
}

// ===== Error cases tested =====
// No JWT            → 401
// children: []      → 400 "at least 1 child required"
// 4 disciplines     → 400 "maximum 3"
// Non-existent ID   → 404 "profile not found"
// Invalid email     → 400 "email must be an email"`,
      language: "typescript",
      image: "/assets/eduka/back-end/Postman.png",
    },
  ];
}
