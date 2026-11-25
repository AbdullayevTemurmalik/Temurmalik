import { Dictionary } from "../types";

export const fr: Dictionary = {
  "nav": {
    "about": "À propos",
    "expertise": "Expertise",
    "techStack": "Stack Tech",
    "projects": "Projets",
    "contact": "Contact",
    "themeDark": "Mode sombre",
    "themeLight": "Mode clair",
    "language": "Langue",
    "openMenu": "Ouvrir le menu",
    "closeMenu": "Fermer le menu"
  },
  "hero": {
    "eyebrow": "Bonjour, je suis Temurmalik.",
    "heading": "Développeur Full-Stack.",
    "subheading": "Spécialisé en Backend & Ingénierie IA.",
    "description": "Je suis Temurmalik Abdullayev, développeur de 17 ans originaire d'Ouzbékistan. Je conçois des systèmes backend fiables, des applications web modernes et des produits propulsés par l'IA.",
    "exploreBtn": "Explorer les projets",
    "contactBtn": "Contact",
    "availableText": "Disponible pour des contrats d'ingénierie ciblés",
    "metaTags": "Ouzbékistan · Backend · IA · Ingénierie Web"
  },
  "terminal": {
    "title": "temurmalik@portfolio: ~",
    "copy": "Copier",
    "copied": "Copié !",
    "tabs": {
      "whoami": "whoami",
      "uptime": "uptime",
      "profile": "profile.json",
      "projects": "projects/",
      "status": "status"
    },
    "role": "Développeur Full-Stack",
    "focusLabel": "Focus",
    "focusValue": "Ingénierie Backend & IA",
    "uptimeDesc": "3 ans d'expérience continue en développement",
    "statusText": "Création de logiciels fiables et de systèmes d'IA.",
    "yearsUnit": "ans"
  },
  "stats": {
    "experienceValue": "3+",
    "experienceLabel": "Années d'expérience",
    "experienceMeta": "Développement continu et livraisons",
    "projectsValue": "100+",
    "projectsLabel": "Projets réalisés",
    "projectsMeta": "Apps web, backends et bots",
    "clientsValue": "10+",
    "clientsLabel": "Clients réels",
    "clientsMeta": "Entreprises et fondateurs de produits"
  },
  "about": {
    "label": "01 / À propos",
    "heading": "L'ingénierie avec un objectif clair.",
    "subtitle": "Axé sur des architectures backend robustes, des API REST évolutives et des intégrations d'IA concrètes.",
    "paragraphs": [
      "Je suis Temurmalik Abdullayev, un développeur logiciel de 17 ans basé en Ouzbékistan. Au cours des trois dernières années, je me suis immergé dans les architectures serveur, la modélisation de bases de données et le développement web moderne.",
      "Plutôt que de courir après les tendances éphémères du front-end, mon approche technique repose sur la fiabilité fondamentale des serveurs : conception de contrats d'API prévisibles, migrations avec PostgreSQL et Prisma, validation stricte avec Zod et sécurité des sessions.",
      "Pour les produits utilisateurs, j'associe des backends solides en Node.js et TypeScript à des interfaces React et Next.js rapides et accessibles. J'intègre également l'intelligence artificielle pratique, notamment les modèles Google Gemini, dans des plateformes éducatives et l'automatisation Telegram."
    ],
    "specTitle": "Spécification du Profil",
    "specIndex": "v3.4",
    "specs": {
      "locationLabel": "Localisation",
      "locationValue": "Ouzbékistan",
      "ageLabel": "Âge",
      "ageValue": "17 ans",
      "expLabel": "Expérience",
      "expValue": "3+ ans en continu",
      "stacksLabel": "Stacks Principales",
      "stacksValue": "Node.js · TS · React · PostgreSQL",
      "specLabel": "Spécialisation",
      "specValue": "Ingénierie Backend & IA",
      "statusLabel": "Statut",
      "statusValue": "Disponible pour missions"
    }
  },
  "expertise": {
    "label": "02 / Domaines d'expertise",
    "heading": "Compétences techniques clés.",
    "subtitle": "Aptitudes forgées au fil de déploiements réels en production, de défis architecturaux et de livrables clients.",
    "coreDomain": "Domaine clé",
    "domains": [
      {
        "id": "backend",
        "number": "01",
        "title": "Ingénierie Backend",
        "summary": "API, authentification, modélisation de données et architecture serveur.",
        "description": "Conception de systèmes serveur robustes avec des pipelines de données prévisibles, des points de terminaison REST sécurisés et des bases de données relationnelles résistantes à la charge.",
        "capabilities": [
          "Schémas relationnels, index et migrations de données",
          "Modèles d'authentification, gestion JWT et sécurité des sessions",
          "Assainissement des entrées, gestion défensive des erreurs et limitation de débit",
          "Flux WebSocket et messagerie bidirectionnelle en temps réel"
        ],
        "skills": [
          "Node.js",
          "Express.js",
          "TypeScript",
          "PostgreSQL",
          "Prisma ORM",
          "REST API",
          "JWT"
        ]
      },
      {
        "id": "fullstack",
        "number": "02",
        "title": "Développement Full-Stack",
        "summary": "Applications web modernes, interfaces réactives et cycle complet.",
        "description": "Création de produits numériques fluides où le front-end reflète fidèlement la sémantique du back-end. Haute performance, accessibilité et adaptabilité sur tous les écrans.",
        "capabilities": [
          "Architecture basée sur des composants et typage TypeScript strict",
          "Dispositions réactives Mobile-First avec typographie fluide",
          "Gestion d'état et frontières nettes entre client et serveur",
          "Optimisation Core Web Vitals et zéro décalage de mise en page"
        ],
        "skills": [
          "React",
          "Next.js",
          "Vue.js",
          "TypeScript",
          "Tailwind CSS",
          "Redux",
          "HTML5/CSS3"
        ]
      },
      {
        "id": "ai-integration",
        "number": "03",
        "title": "Intégration d'IA",
        "summary": "Applications intelligentes, automatisation avancée et modèles de langage.",
        "description": "Intégration pratique de modèles d'IA dans des produits réels : chaînes de prompts, analyse visuelle multimodale, sorties JSON structurées et chatbots réactifs.",
        "capabilities": [
          "Analyse d'images pour l'estimation nutritionnelle dans les bots",
          "Assistance pédagogique contextuelle et indices de code automatiques",
          "Validation stricte des schémas de sortie JSON des LLM",
          "Streaming à faible latence et gestion de secours tolérante aux pannes"
        ],
        "skills": [
          "Gemini API",
          "Multimodal Vision",
          "Claude Code",
          "Cursor",
          "Antigravity",
          "Codex"
        ]
      },
      {
        "id": "infrastructure",
        "number": "04",
        "title": "Déploiement & Infrastructure",
        "summary": "Workflows de déploiement, configuration serveur, Git, CI/CD et maintenance.",
        "description": "Livraison disciplinée et reproductible de logiciels : CI/CD automatisé, gestion des variables d'environnement, surveillance serveur et zéro interruption.",
        "capabilities": [
          "Pipelines d'intégration et de déploiement continus (CI/CD)",
          "Configurations Vercel Edge et fonctions serverless",
          "Conteneurs Railway et provisionnement géré PostgreSQL",
          "Journalisation des erreurs et surveillance de disponibilité"
        ],
        "skills": [
          "Linux",
          "Docker",
          "Git",
          "GitHub",
          "Vercel",
          "Railway",
          "Postman"
        ]
      }
    ]
  },
  "techStack": {
    "label": "Fondation Technique",
    "heading": "Stack Technologique",
    "subtitle": "Technologies et outils utilisés pour concevoir des produits numériques fiables.",
    "scopeTitle": "Portée Architecturale",
    "scopeIndex": "Validé",
    "primaryRole": "Développeur Full-Stack",
    "specialization": "Spécialisé en Backend & Ingénierie IA",
    "uptimeLabel": "Expérience continue",
    "uptimeValue": "3+ ans de pratique",
    "primaryRoleLabel": "Rôle principal",
    "specializationLabel": "Spécialisation",
    "openOfficialSite": "Ouvrir le site officiel de {name}"
  },
  "projects": {
    "label": "03 / Travaux Choisis",
    "heading": "Projets sélectionnés. Vrais produits.",
    "subtitle": "Quatre systèmes de production majeurs illustrant l'ingénierie backend, les architectures complètes et les intégrations concrètes d'IA.",
    "viewCaseStudy": "Étude de cas",
    "liveProject": "Projet en ligne",
    "sourceCode": "Dépôt source",
    "backToProjects": "Retour aux projets",
    "backHome": "Retour à l'accueil",
    "statusShipped": "Déployé",
    "statusActive": "Actif",
    "allProjectsHeading": "Projets sélectionnés. Vrais produits.",
    "allProjectsSubtitle": "Analyses approfondies de l'architecture backend, des API typées, des interfaces web réactives et des solutions d'IA appliquées.",
    "prevProject": "Projet précédent",
    "nextProject": "Projet suivant",
    "specificationsTitle": "Spécifications",
    "roleLabel": "Mon Rôle",
    "timelineLabel": "Année / Période",
    "categoryLabel": "Catégorie",
    "liveEndpointLabel": "Lien en direct",
    "techUsedLabel": "Technologies & Librairies",
    "visitLiveBtn": "Accéder au système",
    "overviewTitle": "Aperçu du projet",
    "problemTitle": "Problématique et objectifs",
    "solutionTitle": "Solution et architecture",
    "featuresTitle": "Fonctionnalités vérifiées",
    "decisionsTitle": "Décisions techniques majeures"
  },
  "approach": {
    "label": "04 / Démarche",
    "heading": "Un rythme d'ingénierie méthodique.",
    "subtitle": "Un flux de travail rigoureux allant de la compréhension du besoin au déploiement sécurisé en production.",
    "phasePrefix": "Phase",
    "stageLabel": "Étape",
    "verifiedMethod": "Méthodologie éprouvée",
    "steps": [
      {
        "step": "01",
        "title": "Comprendre le problème",
        "description": "Chaque projet débute par une évaluation lucide des besoins utilisateurs, des contrats de données et des contraintes réelles."
      },
      {
        "step": "02",
        "title": "Bâtir une solution fiable",
        "description": "Séparation claire des responsabilités, typage rigoureux, gestion robuste des erreurs et schémas de base de données évolutifs."
      },
      {
        "step": "03",
        "title": "Tester, déployer et affiner",
        "description": "Builds automatisés, contrôle qualité rigoureux, environnements stables sur Vercel/Railway et monitoring continu post-lancement."
      }
    ]
  },
  "contact": {
    "label": "05 / Contact",
    "heading": "Bâtissons quelque chose de grand.",
    "subtitle": "Je suis ouvert aux discussions concernant des contrats d'ingénierie backend, le développement de produits full-stack et des intégrations d'IA.",
    "utcNote": "Basé en Ouzbékistan (UTC+5)",
    "remoteBadge": "● Disponible pour collaboration à distance dans le monde entier"
  },
  "footer": {
    "rights": "Tous droits réservés.",
    "designedBy": "Conçu et développé par Temurmalik."
  },
  "notFound": {
    "code": "404: PAGE_INTROUVABLE",
    "title": "Cette page n'existe pas.",
    "description": "Le chemin demandé n'a pas pu être résolu par le serveur. Veuillez vérifier l'adresse ou revenir à l'accueil.",
    "returnHome": "Retour à l'accueil",
    "exploreProjects": "Voir les projets"
  },
  "intro": {
    "skip": "Passer [ESC]",
    "skipAria": "Passer l'animation d'introduction"
  }
};
