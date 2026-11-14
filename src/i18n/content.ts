export type Lang = 'fr' | 'en';

export const EMAIL = 'pbecchetti@gmail.com';

/** Passe à true pour afficher la section « Projets » (et son lien dans le menu). */
export const SHOW_PROJECTS = true;

/**
 * Projets : ajoute ici tes sites Netlify.
 * - url   : adresse du site
 * - image : capture d'écran placée dans /public/projects/ (ex. '/projects/mon-site.png').
 *           Laisse vide pour afficher un aperçu générique.
 */
export const projects: {
  /** Adresse externe, ou une adresse par langue pour une page de ce site (internal: true). */
  url: string | Record<Lang, string>;
  internal?: boolean;
  image?: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  tags: string[];
}[] = [
  {
    url: { en: '/cater2me/', fr: '/fr/cater2me/' },
    internal: true,
    image: '/projects/c2me-hp.jpg',
    title: { fr: 'Cater2.me', en: 'Cater2.me' },
    description: {
      fr: 'Landing pages, tableaux de bord pour les entreprises clientes, les restaurants et l’équipe opérations, documents imprimables en PDF : un aperçu de mon travail chez Cater2.me.',
      en: 'Landing pages, dashboards for client companies, restaurants and the operations team, printable PDF documents: a look at my work at Cater2.me.',
    },
    tags: ['PHP', 'MySQL', 'JavaScript', 'jQuery', 'jsPDF'],
  },
  {
    url: 'https://teambit-copy-ex.netlify.app',
    image: '/projects/teambit-copy-ex.jpg',
    title: { fr: 'Teambit — reproduction', en: 'Teambit — replica' },
    description: {
      fr: 'Reproduction de la page d’accueil de Teambit, réalisée comme exercice d’intégration.',
      en: 'Replica of the Teambit homepage, built as a front-end exercise.',
    },
    tags: ['Angular', 'Angular Material', 'Flex Layout'],
  },
  {
    url: 'https://journy-copy-ex.netlify.app',
    image: '/projects/journy-copy-ex.jpg',
    title: { fr: 'Journy — reproduction', en: 'Journy — replica' },
    description: {
      fr: 'Reproduction de la page d’accueil de Journy, service de voyages sur mesure, réalisée comme exercice Angular.',
      en: 'Replica of the homepage of Journy, a custom travel planning service, built as an Angular exercise.',
    },
    tags: ['Angular', 'Angular Material', 'Flex Layout'],
  },
  {
    url: 'https://shopify-copy-ex.netlify.app',
    image: '/projects/shopify-copy-ex.jpg',
    title: { fr: 'Shopify — reproduction', en: 'Shopify — replica' },
    description: {
      fr: 'Reproduction d’une landing page de Shopify, réalisée comme exercice d’intégration.',
      en: 'Replica of a Shopify landing page, built as a front-end exercise.',
    },
    tags: ['Angular', 'Flex Layout'],
  },
];

/** Page dédiée Cater2.me (/cater2me/ et /fr/cater2me/). Images dans /public/projects/cater2me/. */
export const cater2me = {
  title: { fr: 'Cater2.me', en: 'Cater2.me' },
  period: { fr: '2012 – 2016 · San Francisco – New York', en: '2012 – 2016 · San Francisco – New York' },
  intro: {
    fr: 'Cater2.me organisait les repas d’entreprise en mettant en relation des bureaux avec des restaurants et food trucks. J’y ai développé le site client et les tableaux de bord des trois côtés de la plateforme : les entreprises clientes, les restaurants et traiteurs, et l’équipe logistique interne de Cater2.me, de la base de données au frontend. Voici quelques écrans retrouvés de cette époque ; les noms et adresses ont été floutés.',
    en: 'Cater2.me organized office meals by connecting companies with restaurants and food trucks. I built the customer website and the dashboards for all three sides of the platform: client companies, restaurants and caterers, and Cater2.me’s internal operations team, from database to frontend. Here are a few screens from that time; names and addresses have been blurred.',
  },
  liveLabel: { fr: 'Voir la version 2 du site en ligne', en: 'See version 2 of the website live' },
  liveUrl: 'https://c2me-hp.netlify.app',
  items: [
    // image : un chemin, ou plusieurs pour afficher des pages côte à côte
    {
      image: '/projects/cater2me/landing-brooklyn.jpg',
      title: { fr: 'Landing page — Brooklyn', en: 'Landing page — Brooklyn' },
      text: {
        fr: 'Landing page locale avec formulaire de contact, intégrée avec l’équipe marketing et design.',
        en: 'Local landing page with a lead form, built with the marketing and design team.',
      },
    },
    {
      image: '/projects/cater2me/landing-nyc.jpg',
      title: { fr: 'Landing page — programme Pop-up à New York', en: 'Landing page — NYC Pop-up program' },
      text: {
        fr: 'Page de présentation d’une nouvelle offre, avec formulaire de demande en fenêtre modale.',
        en: 'Landing page for a new offering, with a modal request form.',
      },
    },
    {
      image: '/projects/cater2me/feedback.jpg',
      title: { fr: 'Dashboard client — feedback sur un repas', en: 'Client dashboard — meal feedback' },
      text: {
        fr: 'Notes par critère, motifs détaillés qui s’affichent si la note est basse, avis sur les portions plat par plat et pourboire pour le restaurant.',
        en: 'Ratings per criterion, detailed reasons that appear when a rating is low, per-dish portion feedback and a tip for the vendor.',
      },
    },
    {
      image: '/projects/cater2me/vendor-dashboard.jpg',
      title: { fr: 'Dashboard vendeur — planning des commandes', en: 'Vendor dashboard — order schedule' },
      text: {
        fr: 'Planning des livraisons sur 14 jours avec le statut de chaque commande, et impression des bons de commande, étiquettes et menus.',
        en: '14-day delivery schedule with each order’s status, and printing of order sheets, labels and menus.',
      },
    },
    {
      image: '/projects/cater2me/vendor-ratings.jpg',
      title: { fr: 'Dashboard vendeur — suivi des notes', en: 'Vendor dashboard — ratings' },
      text: {
        fr: 'Le vendeur retrouve les feedbacks laissés par les clients : moyennes sur 30 jours comparées à la moyenne générale, taux de livraison à l’heure et graphique des notes par commande.',
        en: 'Vendors see the feedback left by clients: 30-day averages compared with the overall average, on-time delivery rate and a chart of ratings per order.',
      },
    },
    {
      image: ['/projects/cater2me/order-confirmation-1.jpg', '/projects/cater2me/order-confirmation-2.jpg'],
      title: { fr: 'Bon de commande imprimable pour le vendeur', en: 'Printable order sheet for vendors' },
      text: {
        fr: 'Document généré depuis le dashboard vendeur : horaires de livraison, consignes d’accès et d’installation avec carte, puis le détail du menu avec quantités et pictogrammes des régimes alimentaires.',
        en: 'Document generated from the vendor dashboard: delivery times, access and setup instructions with a map, then the menu detail with quantities and dietary icons.',
      },
    },
    {
      image: '/projects/cater2me/menu-pdf.jpg',
      title: { fr: 'Menu imprimable généré en PDF', en: 'Printable menu generated as PDF' },
      text: {
        fr: 'Menu généré côté navigateur avec jsPDF depuis le dashboard vendeur, avec les pictogrammes des régimes alimentaires.',
        en: 'Menu generated in the browser with jsPDF from the vendor dashboard, including dietary icons.',
      },
    },
  ],
};

export const skills: { name: Record<Lang, string>; items: string[] }[] = [
  {
    name: { fr: 'Front-end', en: 'Front-end' },
    items: ['Angular', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'RxJS', 'Ionic', 'Chart.js', 'Bootstrap', 'Responsive design', 'Keycloak'],
  },
  {
    name: { fr: 'Développement assisté par l’IA', en: 'AI-assisted development' },
    items: ['Claude Code', 'AI coding agents', 'Refactoring', 'Debugging', 'Test generation'],
  },
  {
    name: { fr: 'Back-end & bases de données', en: 'Back-end & databases' },
    items: ['Node.js', '.NET', 'PHP', 'REST APIs', 'MySQL', 'PostgreSQL', 'SQL Server', 'Firebase'],
  },
  {
    name: { fr: 'Outils & DevOps', en: 'Tools & DevOps' },
    items: ['Git', 'GitHub', 'Bitbucket', 'Azure DevOps', 'Azure', 'Docker', 'Jira'],
  },
];

export const experience: {
  period: Record<Lang, string>;
  company: string;
  role: Record<Lang, string>;
  place: string;
  summary: Record<Lang, string>;
}[] = [
  {
    period: { fr: '2020 – aujourd’hui', en: '2020 – present' },
    company: 'Ad Scientiam',
    role: { fr: 'Lead développeuse web', en: 'Lead Frontend Developer' },
    place: 'Paris',
    summary: {
      fr: 'Pilotage d’un tableau de bord de santé modulaire permettant aux professionnels de santé de suivre les données de leurs patients en conditions réelles (Angular, Chart.js). Authentification SSO avec Keycloak, application mobile hybride (Ionic) de réadaptation cardiaque, et intégration d’agents IA (Claude Code) dans les workflows de l’équipe.',
      en: 'Leading a modular healthcare dashboard that lets clinicians monitor their patients’ real-world data (Angular, Chart.js). SSO authentication with Keycloak, a hybrid mobile app (Ionic) for cardiac rehabilitation, and AI coding agents (Claude Code) integrated into team workflows.',
    },
  },
  {
    period: { fr: '2018 – 2019', en: '2018 – 2019' },
    company: 'Soluqual',
    role: { fr: 'Développeuse full-stack', en: 'Full-Stack Developer' },
    place: 'Montréal',
    summary: {
      fr: 'Application de plus de 100 écrans pour la gestion contractuelle d’un grand groupe aéronautique, et plusieurs applications métier (Angular, ASP.NET, Entity Framework).',
      en: '100+ screen application managing contracts for a major aerospace company, plus several business applications (Angular, ASP.NET, Entity Framework).',
    },
  },
  {
    period: { fr: '2016 – 2017', en: '2016 – 2017' },
    company: 'Vectormax',
    role: { fr: 'Développeuse web', en: 'Web Developer' },
    place: 'New York',
    summary: {
      fr: 'Analyse, développement, tests et déploiement des interfaces d’administration d’une plateforme de diffusion de chaînes de télévision en direct à grande échelle (AngularJS, Node.js).',
      en: 'Analyzed, developed, tested and deployed the administration interfaces of a platform streaming live TV channels at scale (AngularJS, Node.js).',
    },
  },
  {
    period: { fr: '2012 – 2016', en: '2012 – 2016' },
    company: 'Cater2.me',
    role: { fr: 'Développeuse full-stack', en: 'Full-Stack Developer' },
    place: 'San Francisco – New York',
    summary: {
      fr: 'Conception et mise en production de la version 1.0 du site client et du tableau de bord, de la base de données au frontend (PHP, MySQL, JavaScript), puis développement du frontend de la version 2.0. Intégration des API Twilio, Google et Mailchimp, en lien étroit avec les équipes marketing et design.',
      en: 'Built and shipped v1.0 of the customer website and client dashboard, from database to frontend (PHP, MySQL, JavaScript), then developed the v2.0 frontend. Integrated the Twilio, Google and Mailchimp APIs, working closely with marketing and design.',
    },
  },
];

export const ui = {
  fr: {
    title: 'Pauline Becchetti — Lead Frontend Developer',
    metaDescription: 'Portfolio de Pauline Becchetti, Lead Frontend Developer (Angular, TypeScript) basée en France.',
    role: 'Lead Frontend Developer',
    intro: [
      'Après mes études terminées à San Francisco, j’ai passé 10 ans à l’étranger, entre San Francisco, New York et Montréal. D’abord développeuse full-stack, notamment comme première développeuse d’une jeune startup, je me suis ensuite spécialisée dans le front-end. Aujourd’hui basée en France, je suis lead développeuse chez Ad Scientiam, où je conçois des interfaces claires et fiables au service de la santé numérique.',
      'Bilingue français-anglais, je suis à l’aise dans des équipes internationales. Passionnée de nouvelles technologies, j’intègre aujourd’hui des agents IA dans nos workflows de développement.',
      'En dehors du code, je pratique les sports de montagne, le vélo et la photographie.',
    ],
    cv: 'Mon CV (PDF)',
    cvHref: '/cv/CV_Pauline_Becchetti_FR.pdf',
    contact: 'Me contacter',
    switchLabel: 'English',
    switchHref: '/',
    switchShort: 'EN',
    nav: { projects: 'Projets', skills: 'Compétences', experience: 'Expérience' },
    projectsTitle: 'Projets personnels',
    projectsIntro:
      'Pour des raisons de confidentialité, je ne peux pas montrer les projets réalisés pour mes employeurs. Voici quelques petits projets personnels, à titre d’exemple.',
    visit: 'Voir le site',
    seeProject: 'Voir le projet',
    back: 'Retour',
    skillsTitle: 'Mes compétences',
    experienceTitle: 'Expérience',
    fullCv: 'Voir le CV complet',
    contactTitle: 'Travaillons ensemble',
    contactText: 'Un projet, une question ? Écrivez-moi.',
  },
  en: {
    title: 'Pauline Becchetti — Lead Frontend Developer',
    metaDescription: 'Portfolio of Pauline Becchetti, Lead Frontend Developer (Angular, TypeScript) based in France.',
    role: 'Lead Frontend Developer',
    intro: [
      'After finishing my studies in San Francisco, I spent 10 years abroad between San Francisco, New York and Montréal. I started as a full-stack developer, including as the first developer at an early-stage startup, then specialized in front-end. Now based in France, I’m a lead developer at Ad Scientiam, where I build clear, reliable interfaces for digital health.',
      'Bilingual in French and English, I’m at home in international teams. Passionate about new technologies, I now integrate AI coding agents into our development workflows.',
      'Away from the keyboard, I enjoy mountain sports, cycling and photography.',
    ],
    cv: 'My resume (PDF)',
    cvHref: '/cv/Resume_Pauline_Becchetti_EN.pdf',
    contact: 'Contact me',
    switchLabel: 'Français',
    switchHref: '/fr/',
    switchShort: 'FR',
    nav: { projects: 'Projects', skills: 'Skills', experience: 'Experience' },
    projectsTitle: 'Side projects',
    projectsIntro:
      'For confidentiality reasons, I can’t share the work I’ve done for my employers. Here are a few small personal projects as examples.',
    visit: 'Visit site',
    seeProject: 'See the project',
    back: 'Back',
    skillsTitle: 'My skills',
    experienceTitle: 'Experience',
    fullCv: 'See full resume',
    contactTitle: 'Let’s work together',
    contactText: 'A project or a question? Drop me a line.',
  },
} as const;
