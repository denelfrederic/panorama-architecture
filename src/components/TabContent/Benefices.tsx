import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function Benefices() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="font-serif text-3xl font-bold text-black mb-2">
          Applications Pratiques et Cas d'Usage
        </h2>
        <p className="text-gray-600 text-sm">
          L'intégration de l'IA vise des gains de productivité immédiats sur des tâches chronophages.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="bg-white border-gray-200">
          <CardHeader>
            <CardTitle className="font-serif text-xl text-black">
              Analyse et Aide à la Décision
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-gray-800">
            <div>
              <h4 className="font-semibold text-black mb-2">Go/No-Go</h4>
              <p>
                Évaluation instantanée de la pertinence d'un appel d'offres selon les critères historiques de l'agence.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-2">Analyse de risques</h4>
              <p>
                Identification des clauses critiques dans les règlements de consultation (RC) en 1 minute (contre 1 à 4 heures manuellement).
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200">
          <CardHeader>
            <CardTitle className="font-serif text-xl text-black">
              Opérations et Production
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-gray-800">
            <div>
              <h4 className="font-semibold text-black mb-2">Montage d'équipe</h4>
              <p>
                Matching algorithmique entre les besoins du programme et les références des partenaires (BET, paysagistes).
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-2">Gestion administrative</h4>
              <p>
                Automatisation du suivi des temps (time-tracking) via l'analyse des flux de travail (emails/documents).
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-2">Production technique</h4>
              <p>
                Génération de DPGF et création d'univers visuels pour les phases d'intention.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
