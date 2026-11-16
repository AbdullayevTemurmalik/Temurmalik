export interface Dictionary {
  nav: {
    about: string;
    expertise: string;
    techStack: string;
    projects: string;
    contact: string;
    themeDark: string;
    themeLight: string;
    language: string;
    openMenu: string;
    closeMenu: string;
  };
  intro: {
    skip: string;
    skipAria: string;
  };
  hero: {
    eyebrow: string;
    heading: string;
    subheading: string;
    description: string;
    exploreBtn: string;
    contactBtn: string;
    availableText: string;
    metaTags: string;
  };
  terminal: {
    title: string;
    copy: string;
    copied: string;
    tabs: {
      whoami: string;
      uptime: string;
      profile: string;
      projects: string;
      status: string;
    };
    role: string;
    focusLabel: string;
    focusValue: string;
    uptimeDesc: string;
    statusText: string;
    yearsUnit: string;
  };
  stats: {
    experienceValue: string;
    experienceLabel: string;
    experienceMeta: string;
    projectsValue: string;
    projectsLabel: string;
    projectsMeta: string;
    clientsValue: string;
    clientsLabel: string;
    clientsMeta: string;
  };
  about: {
    label: string;
    heading: string;
    subtitle: string;
    paragraphs: string[];
    specTitle: string;
    specIndex: string;
    specs: {
      locationLabel: string;
      locationValue: string;
      ageLabel: string;
      ageValue: string;
      expLabel: string;
      expValue: string;
      stacksLabel: string;
      stacksValue: string;
      specLabel: string;
      specValue: string;
      statusLabel: string;
      statusValue: string;
    };
  };
  expertise: {
    label: string;
    heading: string;
    subtitle: string;
    coreDomain: string;
    domains: Array<{
      id: string;
      number: string;
      title: string;
      summary: string;
      description: string;
      capabilities: string[];
      skills: string[];
    }>;
  };
  techStack: {
    label: string;
    heading: string;
    subtitle: string;
    scopeTitle: string;
    scopeIndex: string;
    primaryRole: string;
    primaryRoleLabel: string;
    specialization: string;
    specializationLabel: string;
    uptimeLabel: string;
    uptimeValue: string;
    openOfficialSite: string;
  };
  projects: {
    label: string;
    heading: string;
    subtitle: string;
    viewCaseStudy: string;
    liveProject: string;
    sourceCode: string;
    backToProjects: string;
    backHome: string;
    statusShipped: string;
    statusActive: string;
    allProjectsHeading: string;
    allProjectsSubtitle: string;
    prevProject: string;
    nextProject: string;
    specificationsTitle: string;
    roleLabel: string;
    timelineLabel: string;
    categoryLabel: string;
    liveEndpointLabel: string;
    techUsedLabel: string;
    visitLiveBtn: string;
    overviewTitle: string;
    problemTitle: string;
    solutionTitle: string;
    featuresTitle: string;
    decisionsTitle: string;
  };
  approach: {
    label: string;
    heading: string;
    subtitle: string;
    phasePrefix: string;
    stageLabel: string;
    verifiedMethod: string;
    steps: Array<{
      step: string;
      title: string;
      description: string;
    }>;
  };
  contact: {
    label: string;
    heading: string;
    subtitle: string;
    utcNote: string;
    remoteBadge: string;
  };
  footer: {
    rights: string;
    designedBy: string;
  };
  notFound: {
    code: string;
    title: string;
    description: string;
    returnHome: string;
    exploreProjects: string;
  };
}
