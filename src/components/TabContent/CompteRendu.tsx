export function CompteRendu() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="font-serif text-3xl font-bold text-black mb-2">
          Compte Rendu du 14 janvier 2026
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Optimisation de l'Agence par l'IA — Thématique : Performance opérationnelle et stratégie de réponse aux marchés publics.
        </p>
      </div>

      <div className="space-y-8 text-gray-800 leading-relaxed">
        <section>
          <h3 className="font-serif text-2xl font-bold text-black mb-4">
            1. Contexte et Modèle Économique
          </h3>
          <p className="mb-4">
            L'agence s'appuie sur une expertise de 20 ans dans les marchés publics. Son développement suit une stratégie de paliers de références : l'acquisition de projets types (ex: collèges) sert de levier pour accéder à des programmes plus complexes (universités, équipements culturels).
          </p>
          
          <div>
            <h4 className="font-semibold text-black mb-2">Le Processus de Réponse</h4>
            <p className="mb-2">
              Le cycle de vente se décompose en deux phases critiques :
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 mb-2">
              <li><strong>Candidature (Phase 1)</strong> : Sélection sur dossier (références et capacités techniques).</li>
              <li><strong>Concours (Phase 2)</strong> : Production architecturale (esquisses, plans) en concurrence restreinte.</li>
            </ul>
            <p>
              <strong>Indicateur Clé</strong> : Le taux de transformation actuel est de 2,5 %. L'objectif est d'optimiser le temps de préparation pour augmenter le volume ou la qualité des réponses.
            </p>
          </div>
        </section>

        <section>
          <h3 className="font-serif text-2xl font-bold text-black mb-4">
            2. Architecture Technique de l'IA
          </h3>
          <p className="mb-4">
            Le passage à une agence pilotée par l'IA repose sur quatre piliers technologiques :
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-black">Concept</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-black">Description</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-black">Utilisation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Prompt Engineering</td>
                  <td className="border border-gray-300 px-4 py-2">Structuration des instructions.</td>
                  <td className="border border-gray-300 px-4 py-2">Transformer l'IA en expert métier spécifique.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">Agents Spécialisés</td>
                  <td className="border border-gray-300 px-4 py-2">Micro-assistants dédiés (Mode Projet).</td>
                  <td className="border border-gray-300 px-4 py-2">Veille, revue de presse, analyse économique.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">RAG (Retrieval-Augmented Generation)</td>
                  <td className="border border-gray-300 px-4 py-2">Base de données privée "étanche".</td>
                  <td className="border border-gray-300 px-4 py-2">Supprimer les hallucinations en utilisant uniquement les données de l'agence (prix au m², mémoires).</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">Agentique</td>
                  <td className="border border-gray-300 px-4 py-2">Connexion aux outils (Mail, Drive).</td>
                  <td className="border border-gray-300 px-4 py-2">Automatisation des tâches de secrétariat et d'organisation.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h3 className="font-serif text-2xl font-bold text-black mb-4">
            3. Applications Pratiques et Cas d'Usage
          </h3>
          <p className="mb-4">
            L'intégration de l'IA vise des gains de productivité immédiats sur des tâches chronophages.
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-black mb-2">Analyse et Aide à la Décision</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Go/No-Go</strong> : Évaluation instantanée de la pertinence d'un appel d'offres selon les critères historiques de l'agence.</li>
                <li><strong>Analyse de risques</strong> : Identification des clauses critiques dans les règlements de consultation (RC) en 1 minute (contre 1 à 4 heures manuellement).</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-black mb-2">Opérations et Production</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Montage d'équipe</strong> : Matching algorithmique entre les besoins du programme et les références des partenaires (BET, paysagistes).</li>
                <li><strong>Gestion administrative</strong> : Automatisation du suivi des temps (time-tracking) via l'analyse des flux de travail (emails/documents).</li>
                <li><strong>Production technique</strong> : Génération de DPGF et création d'univers visuels pour les phases d'intention.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="font-serif text-2xl font-bold text-black mb-4">
            4. Stratégie d'Implémentation
          </h3>
          <p className="mb-4">
            Pour éviter l'effet "usine à gaz", la méthodologie se veut pragmatique et progressive :
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Acculturation (30 min)</strong> : Sessions individuelles sur les fondamentaux du dialogue avec l'IA (ChatGPT/Claude).</li>
            <li><strong>Ateliers Métiers (1h)</strong> : Co-construction d'agents sur des cas réels d'appels d'offres en cours.</li>
            <li><strong>Flexibilité Technologique</strong> : Utilisation de proxys (OpenRouter) pour pouvoir changer de modèle (LLM) sans perdre ses outils de travail, garantissant la pérennité du système.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
