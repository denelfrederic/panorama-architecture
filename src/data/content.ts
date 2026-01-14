export interface ProcessusItem {
  processus: string;
  levierOptimisation: string;
  impactCollaboration: string;
  gainPotentiel: string;
}

export interface PilierIA {
  concept: string;
  description: string;
  utilisation: string;
}

export const projectData = {
  lastUpdate: "14 janvier 2026",
  title: "Site de suivi du projet Panorama Architecture",
  subtitle: "Optimisation de l'Agence par l'IA",
  homeUrl: "https://panorama-architecture.com/agence",
  podcastUrl: "#", // Placeholder
  animationUrl: "#", // Placeholder
};

export const kpiMetrics = {
  processusOptimiser: "4",
  gainTemps: "60-80%",
  tauxTransformation: "2,5%",
};

export const piliersIA: PilierIA[] = [
  {
    concept: "Prompt Engineering",
    description: "Structuration des instructions.",
    utilisation: "Transformer l'IA en expert métier spécifique.",
  },
  {
    concept: "Agents Spécialisés",
    description: "Micro-assistants dédiés (Mode Projet).",
    utilisation: "Veille, revue de presse, analyse économique.",
  },
  {
    concept: "RAG (Retrieval-Augmented Generation)",
    description: "Base de données privée \"étanche\".",
    utilisation: "Supprimer les hallucinations en utilisant uniquement les données de l'agence (prix au m², mémoires).",
  },
  {
    concept: "Agentique",
    description: "Connexion aux outils (Mail, Drive).",
    utilisation: "Automatisation des tâches de secrétariat et d'organisation.",
  },
];

export const processusList: ProcessusItem[] = [
  {
    processus: "Décryptage Appels d'Offres",
    levierOptimisation: "Analyse instantanée du RC et du programme pour aide au \"Go/No-Go\".",
    impactCollaboration: "Identification immédiate des risques et des points critiques du dossier.",
    gainPotentiel: "Décision lucide en < 10 min",
  },
  {
    processus: "Constitution d'Équipe",
    levierOptimisation: "Matching intelligent entre les exigences du marché et notre base de partenaires.",
    impactCollaboration: "Optimisation des chances de sélection au 1er tour avec les meilleurs experts.",
    gainPotentiel: "-80% de temps de sourcing",
  },
  {
    processus: "Création de Devis",
    levierOptimisation: "Génération automatisée basée sur les ratios financiers historiques et l'IA Économiste.",
    impactCollaboration: "Devis précis, cohérents avec la rentabilité attendue et envoyés plus rapidement.",
    gainPotentiel: "Fiabilité & Rentabilité",
  },
  {
    processus: "Gestion des Emails",
    levierOptimisation: "Centralisation par projet et pré-classement sémantique (RAG).",
    impactCollaboration: "Traçabilité totale des décisions et réactivité accrue face aux entreprises.",
    gainPotentiel: "-40% de temps de tri",
  },
  {
    processus: "Restitution de RDV",
    levierOptimisation: "Capture vocale et synthèse automatique des points clés/décisions.",
    impactCollaboration: "Clarté immédiate sur les arbitrages techniques pour toute la maîtrise d'œuvre.",
    gainPotentiel: "-70% de temps de saisie",
  },
  {
    processus: "Comptes Rendus (CR)",
    levierOptimisation: "Dictée sur site, liaison photo/plan et génération automatisée.",
    impactCollaboration: "Diffusion des comptes rendus à J+0, limitant les retards de chantier.",
    gainPotentiel: "-60% de temps de rédaction",
  },
  {
    processus: "Comptabilité",
    levierOptimisation: "OCR intelligent pour la lecture des factures et imputation automatique.",
    impactCollaboration: "Règlement fluide des partenaires et suivi précis des situations de travaux.",
    gainPotentiel: "-50% de saisie manuelle",
  },
  {
    processus: "Rapprochement Bancaire",
    levierOptimisation: "Matching automatique des flux financiers avec l'ERP de l'agence.",
    impactCollaboration: "Vision en temps réel de la trésorerie et relances automatiques ciblées.",
    gainPotentiel: "Fiabilité 100% sans erreur",
  },
];
