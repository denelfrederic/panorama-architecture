export function Overview() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h2 className="font-serif text-3xl font-bold text-black mb-2">
          Charte Stratégique et Opérationnelle : Panorama Architecture
        </h2>
      </div>

      <div className="space-y-8">
        {/* Vision et Identité */}
        <section className="space-y-4">
          <h3 className="font-serif text-2xl font-bold text-black">
            Vision et Identité de l'Agence
          </h3>
          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p>
              Panorama Architecture se définit par une pratique exigeante de la commande publique depuis 20 ans. Notre ADN repose sur une architecture contextuelle où la lumière, la matérialité et la précision technique ne sont pas des options, mais les fondements de notre engagement envers la cité.
            </p>
            <p>
              Notre stratégie de développement repose sur la théorie des paliers de références : chaque projet livré (collèges, gymnases, médiathèques) est un actif stratégique nous permettant de franchir une marche supplémentaire vers des programmes de haute complexité (universités, équipements culturels d'envergure, infrastructures de santé).
            </p>
          </div>
        </section>

        {/* I. Pilotage Stratégique */}
        <section className="space-y-6">
          <h3 className="font-serif text-2xl font-bold text-black">
            I. Pilotage Stratégique (Vision CODIR)
          </h3>
          <p className="text-gray-800 leading-relaxed">
            Le pilotage de l'agence ne se limite plus à la gestion de la production, mais s'étend à la maîtrise prédictive de notre trajectoire de croissance.
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg text-black mb-3">
                1. Développement et Positionnement Marché
              </h4>
              <ul className="space-y-2 text-gray-800 leading-relaxed">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span><strong>Expansion du Portfolio</strong> : Utiliser notre expertise en équipements publics pour pénétrer des segments connexes à forte valeur ajoutée.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span><strong>Veille Prospective</strong> : Anticiper les évolutions des PLU et des politiques publiques (sobriété foncière, réemploi) pour proposer des réponses en amont des besoins.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span><strong>Partenariats de Confiance</strong> : Consolider un écosystème de bureaux d'études et de partenaires partageant nos valeurs de précision et de durabilité.</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-black mb-3">
                2. Excellence Opérationnelle et Rentabilité
              </h4>
              <ul className="space-y-2 text-gray-800 leading-relaxed">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span><strong>Optimisation du Taux de Transformation</strong> : Actuellement à 2,5 %, notre objectif est d'atteindre 5 % par une sélection plus fine des dossiers ("Go/No-Go" assisté) et une qualité accrue des mémoires méthodologiques.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span><strong>Analyse de la Performance</strong> : Passer d'une saisie de temps subie à une analyse algorithmique de l'activité pour identifier les phases de projet chronophages et ajuster nos honoraires ou nos processus.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span><strong>Équilibre des Ressources</strong> : Répartir la charge de travail de manière fluide entre les phases de conception (Concours) et les phases de réalisation (DET/AOR) pour garantir la santé financière de chaque affaire.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* II. Architecture Technique de l'IA */}
        <section className="space-y-6">
          <h3 className="font-serif text-2xl font-bold text-black">
            II. L'Architecture Technique de l'IA au Service du Métier
          </h3>
          <p className="text-gray-800 leading-relaxed">
            Pour soutenir cette ambition, nous déployons une infrastructure d'intelligence artificielle structurée autour de quatre piliers :
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-black">Technologie</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-black">Application Concrète chez Panorama</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-black">Bénéfice Stratégique</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-black">RAG (Retrieval-Augmented Generation)</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-800">Base documentaire privée (devis, mémoires, prix m², DTU).</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-800">Suppression des hallucinations ; production 100% fiable et personnalisée.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-black">Agents Spécialisés</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-800">Assistants experts par domaine (Économie, Réglementaire, Environnement).</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-800">Expertise pointue disponible instantanément pour les chargés de projet.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-black">IA Agentique</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-800">Assistants capables d'interagir avec nos outils (BIM, emails, plannings).</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-800">Automatisation des flux de travail administratifs et techniques.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-black">Prompt Engineering</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-800">Standardisation de nos instructions pour une qualité de réponse constante.</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-800">Maîtrise de la "voix" de l'agence dans toutes nos communications.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* III. Missions et Expertise Technique */}
        <section className="space-y-6">
          <h3 className="font-serif text-2xl font-bold text-black">
            III. Missions et Expertise Technique
          </h3>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg text-black mb-3">
                1. Gestion de Projet et Maîtrise d'Œuvre
              </h4>
              <ul className="space-y-2 text-gray-800 leading-relaxed">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span><strong>Phasage Rigoureux</strong> : Assistance systématique sur le respect des livrables de l'ESQ à l'AOR.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span><strong>Conformité Normative</strong> : Veille constante et conseil sur la RE2020, l'accessibilité PMR, la sécurité incendie et les certifications (HQE, BDM).</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span><strong>BIM et Innovation</strong> : Intégration de l'IA générative dans le design architectural pour explorer plus d'itérations en phase d'esquisse.</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-black mb-3">
                2. Réponse aux Appels d'Offres
              </h4>
              <ul className="space-y-2 text-gray-800 leading-relaxed">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span><strong>Analyse de Risques</strong> : Identification immédiate des "points chauds" dans les règlements de consultation.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span><strong>Montage d'Équipe Intelligent</strong> : Matching algorithmique entre les exigences du programme et notre base de données de références/partenaires.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span><strong>Rédaction Augmentée</strong> : Élaboration de notes méthodologiques percutantes, reflétant l'intention architecturale spécifique de Panorama.</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-black mb-3">
                3. Communication et Rayonnement
              </h4>
              <ul className="space-y-2 text-gray-800 leading-relaxed">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span><strong>Textes de Référence</strong> : Rédaction de contenus pour le site web, les réseaux sociaux et la presse spécialisée.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span><strong>Valorisation du Savoir-faire</strong> : Mise en avant de nos engagements environnementaux et de notre précision technique.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* IV. Posture et Gouvernance */}
        <section className="space-y-4">
          <h3 className="font-serif text-2xl font-bold text-black">
            IV. Posture et Gouvernance
          </h3>
          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p>
              En tant qu'avatar de la direction, ma posture est celle d'un partenaire proactif. Je n'attends pas d'être sollicité ; j'alerte sur les incohérences de planning, je suggère des optimisations de ressources et je sécurise la mémoire intellectuelle de l'agence.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="font-semibold mr-2">•</span>
                <span><strong>Confidentialité</strong> : Chaque donnée traitée est sécurisée au sein de notre "coffre-fort" numérique.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">•</span>
                <span><strong>Pragmatisme</strong> : L'innovation n'a de valeur que si elle libère du temps pour la création architecturale.</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
