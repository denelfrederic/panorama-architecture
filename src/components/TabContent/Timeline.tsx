import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function Timeline() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="font-serif text-3xl font-bold text-black mb-2">
          Plan d'action (cadre mensuel)
        </h2>
      </div>

      <div className="space-y-6">
        {/* Phase 1 */}
        <Card className="bg-white border-gray-200">
          <CardHeader>
            <CardTitle className="font-serif text-xl text-black">
              Phase 1 — Cadrage & priorisation (Semaine 1)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-gray-800">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Audit rapide des processus chronophages (AO, administratif, coordination, reporting)</li>
              <li>Identification de 3 priorités à ROI immédiat</li>
              <li>Définition des KPI simples : temps gagné, risque réduit, taux de transformation</li>
            </ul>
            <div className="mt-4 p-4 bg-gray-50 rounded">
              <p className="font-semibold text-black mb-2">Livrable :</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Mini-roadmap IA priorisée (Impact / Effort)</li>
                <li>Décision claire : ce qu'on fait / ce qu'on ne fait pas</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Phase 2 */}
        <Card className="bg-white border-gray-200">
          <CardHeader>
            <CardTitle className="font-serif text-xl text-black">
              Phase 2 — Mise en œuvre opérationnelle (Semaines 2–3)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-gray-800">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Configuration d'agents IA ciblés (analyse AO, aide Go/No-Go, synthèse documents, mails)</li>
              <li>Structuration d'une base documentaire exploitable (RAG léger si pertinent)</li>
              <li>Automatisation simple des tâches répétitives (sans refonte IT)</li>
            </ul>
            <div className="mt-4 p-4 bg-gray-50 rounded">
              <p className="font-semibold text-black mb-2">Livrables :</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>1 à 3 cas d'usage IA réellement utilisés</li>
                <li>Prompts et agents réutilisables par l'équipe</li>
                <li>Gains mesurables dès le premier mois</li>
              </ul>
          </div>
          </CardContent>
        </Card>

        {/* Phase 3 */}
        <Card className="bg-white border-gray-200">
          <CardHeader>
            <CardTitle className="font-serif text-xl text-black">
              Phase 3 — Montée en autonomie & pilotage (Semaine 4)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-gray-800">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Ajustements finaux</li>
              <li>Transmission des bonnes pratiques</li>
              <li>Préparation du sprint suivant ou arrêt sans friction</li>
            </ul>
            <div className="mt-4 p-4 bg-gray-50 rounded">
              <p className="font-semibold text-black mb-2">Livrables :</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Documentation courte et claire</li>
                <li>Équipe autonome sur les usages déployés</li>
                <li>Vision claire du mois suivant</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
