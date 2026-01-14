export function Overview() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="font-serif text-3xl font-bold text-black mb-2">
          Expression de besoin • Synthèse • Arbitrages • Plan d'action
        </h2>
        <p className="text-gray-600 text-sm">
          Version compilée à partir des transcriptions internes, mails, notes et analyses.
        </p>
      </div>

      <div className="space-y-6">
        <section>
          <h3 className="font-serif text-2xl font-bold text-black mb-4">
            1. Résumé exécutif
          </h3>
          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p>
              Panorama Architecture souhaite déployer une solution IA capable d'accélérer l'analyse des dossiers d'appels d'offres publics et d'optimiser les processus opérationnels de l'agence.
            </p>
            
            <div>
              <h4 className="font-semibold text-black mb-2">Contexte et Modèle Économique</h4>
              <p>
                L'agence s'appuie sur une expertise de 20 ans dans les marchés publics. Son développement suit une stratégie de paliers de références : l'acquisition de projets types (ex: collèges) sert de levier pour accéder à des programmes plus complexes (universités, équipements culturels).
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-black mb-2">Le Processus de Réponse</h4>
              <p className="mb-2">
                Le cycle de vente se décompose en deux phases critiques :
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Candidature (Phase 1)</strong> : Sélection sur dossier (références et capacités techniques).</li>
                <li><strong>Concours (Phase 2)</strong> : Production architecturale (esquisses, plans) en concurrence restreinte.</li>
              </ul>
              <p className="mt-2">
                <strong>Indicateur Clé</strong> : Le taux de transformation actuel est de 2,5 %. L'objectif est d'optimiser le temps de préparation pour augmenter le volume ou la qualité des réponses.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="font-serif text-2xl font-bold text-black mb-4">
            2. Architecture Technique de l'IA
          </h3>
          <p className="text-gray-800 leading-relaxed">
            Le passage à une agence pilotée par l'IA repose sur quatre piliers technologiques : Prompt Engineering, Agents Spécialisés, RAG (Retrieval-Augmented Generation) et Agentique. Ces technologies permettront de transformer l'IA en expert métier spécifique, d'automatiser les tâches chronophages et de fiabiliser la production administrative et technique.
          </p>
        </section>
      </div>
    </div>
  );
}
