export type Lang = 'fr' | 'en';

export const EMAIL = 'pbecchetti@gmail.com';

/** Passe à true pour afficher la section « Projets » (et son lien dans le menu). */
export const SHOW_PROJECTS = false;

/**
 * Projets : ajoute ici tes sites Netlify.
 * - url   : adresse du site
 * - image : capture d'écran placée dans /public/projects/ (ex. '/projects/mon-site.png').
 *           Laisse vide pour afficher un aperçu générique.
 */
export const projects: {
  url: string;
  image?: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  tags: string[];
}[] = [
  {
    url: 'https://example-projet-1.netlify.app',
    title: { fr: 'Projet 1', en: 'Project 1' },
    description: {
      fr: 'Courte description du projet à compléter.',
      en: 'Short project description to fill in.',
    },
    tags: ['Angular', 'TypeScript'],
  },
  {
    url: 'https://example-projet-2.netlify.app',
    title: { fr: 'Projet 2', en: 'Project 2' },
    description: {
      fr: 'Courte description du projet à compléter.',
      en: 'Short project description to fill in.',
    },
    tags: ['HTML', 'CSS'],
  },
  {
    url: 'https://example-projet-3.netlify.app',
    title: { fr: 'Projet 3', en: 'Project 3' },
    description: {
      fr: 'Courte description du projet à compléter.',
      en: 'Short project description to fill in.',
    },
    tags: ['JavaScript'],
  },
];

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
    projectsTitle: 'Mes projets',
    visit: 'Voir le site',
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
    projectsTitle: 'My projects',
    visit: 'Visit site',
    skillsTitle: 'My skills',
    experienceTitle: 'Experience',
    fullCv: 'See full resume',
    contactTitle: 'Let’s work together',
    contactText: 'A project or a question? Drop me a line.',
  },
} as const;
