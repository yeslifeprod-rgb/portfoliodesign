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
      code: "// Modular NestJS architecture\n@Module({\n  imports: [TypeOrmModule.forFeature([User])],\n  controllers: [UserController],\n  providers: [UserService],\n  exports: [UserService]\n})\nexport class UserModule {}\n\n@Module({\n  imports: [UserModule, CarPoolModule],\n  controllers: [AppController],\n})\nexport class AppModule {}",
      language: "typescript",
      category: "backend" as const,
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
      code: "// Double validation guard\n@Injectable()\nexport class AuthGuard implements CanActivate {\n  async canActivate(context: ExecutionContext): boolean {\n    const request = context.switchToHttp().getRequest();\n    \n    // 1. JWT validation\n    const token = this.extractToken(request);\n    const payload = await this.jwtService.verifyAsync(token);\n    \n    // 2. Database check\n    const user = await this.userService.findById(payload.sub);\n    if (!user || !user.isActive) {\n      throw new UnauthorizedException();\n    }\n    \n    request.user = user;\n    return true;\n  }\n}",
      language: "typescript",
      category: "backend" as const,
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
      code: "// Data Transfer Objects with validation\nimport { IsEmail, IsArray, ValidateNested, ArrayMinSize } from 'class-validator';\nimport { Type } from 'class-transformer';\n\nexport class CreateChildDto {\n  @IsString()\n  name: string;\n\n  @IsDateString()\n  birthday: string;\n}\n\nexport class CreateParentDto {\n  @IsEmail()\n  email: string;\n\n  @IsArray()\n  @ArrayMinSize(1)\n  @ValidateNested({ each: true })\n  @Type(() => CreateChildDto)\n  children: CreateChildDto[];\n}",
      language: "typescript",
      category: "backend" as const,
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
      code: "// Delete + Create pattern with transaction\nasync updateDisciplines(parentId: string, disciplineIds: string[]) {\n  return this.prisma.$transaction(async (tx) => {\n    // Delete all existing relationships\n    await tx.parentDiscipline.deleteMany({\n      where: { parentId }\n    });\n\n    // Create new relationships\n    await tx.parentDiscipline.createMany({\n      data: disciplineIds.map(disciplineId => ({\n        parentId,\n        disciplineId\n      }))\n    });\n\n    return tx.parent.findUnique({\n      where: { id: parentId },\n      include: { disciplines: true }\n    });\n  });\n}",
      language: "typescript",
      category: "backend" as const,
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
      code: "// Return updated profile with relations\n@Put('profile')\nasync updateProfile(@Body() updateDto: UpdateProfileDto, @User() user) {\n  const updatedProfile = await this.userService.updateProfile(\n    user.id, \n    updateDto\n  );\n\n  // Return full profile with relations\n  return this.userService.findProfileWithRelations(updatedProfile.id);\n}\n\n// Frontend can immediately update state\nconst handleSave = async (data) => {\n  const updatedProfile = await updateProfile(data);\n  setProfile(updatedProfile); // No need for additional GET\n};",
      language: "typescript",
      category: "backend" as const,
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
      code: "// Thin controller pattern\n@Controller('users')\n@UseGuards(JwtAuthGuard) // Guard at decorator level\nexport class UserController {\n  constructor(private readonly userService: UserService) {}\n\n  @Get('profile')\n  async getProfile(@User() user) {\n    return this.userService.getProfile(user.id); // Delegate to service\n  }\n\n  @Put('profile')\n  async updateProfile(@Body() dto: UpdateProfileDto, @User() user) {\n    return this.userService.updateProfile(user.id, dto); // Delegate to service\n  }\n}\n\n// Service contains all business logic\n@Injectable()\nexport class UserService {\n  // Testable without HTTP mocking\n  async updateProfile(userId: string, dto: UpdateProfileDto) {\n    // All business logic here\n  }\n}",
      language: "typescript",
      category: "backend" as const,
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
          ? "Aperçu de la requête PUT pour la modification d'un profil utilisateur via Postman, ainsi qu'un aperçu du côté front-end. La réponse montre un code 200 OK en vert, indiquant que la requête a été traitée avec succès par le serveur.."
          : "Preview of the PUT request to modify a user profile via Postman, as well as a preview of the front-end side. The response shows a green 200 OK code, indicating that the request was successfully processed by the server..",
      code: "// Postman test script for API contract validation\npm.test('Profile update returns 200', function () {\n    pm.response.to.have.status(200);\n});\n\npm.test('Response contains required fields', function () {\n    const jsonData = pm.response.json();\n    pm.expect(jsonData).to.have.property('id');\n    pm.expect(jsonData).to.have.property('email');\n    pm.expect(jsonData).to.have.property('children');\n    pm.expect(jsonData.children).to.be.an('array');\n});\n\npm.test('Children have required properties', function () {\n    const jsonData = pm.response.json();\n    jsonData.children.forEach(child => {\n        pm.expect(child).to.have.property('name');\n        pm.expect(child).to.have.property('birthday');\n    });\n});",
      language: "javascript",
      category: "backend" as const,
      image: "/assets/eduka/back-end/Postman.png",
    },
  ];
}
