import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function Devis() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="font-serif text-3xl font-bold text-black mb-2">
          Proposition d'accompagnement — Forfait mensuel
        </h2>
      </div>

      <div className="space-y-8">
        <section>
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="font-serif text-xl text-black">
                💼 Forfait : 1 200 € HT / mois
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-800">
              <div>
                <p className="text-lg text-black mb-4">
                  Cette proposition d'accompagnement correspond au <strong>cadrage à l'expression de besoin</strong>, 
                  qui aboutira à un <strong>devis précis pour chaque expression de besoin validée</strong>.
                </p>
              </div>

              <div>
                <p className="font-semibold text-black mb-3">Cet accompagnement comprend :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Formation</strong> : Transmission des connaissances et bonnes pratiques nécessaires</li>
                  <li><strong>Analyse des besoins</strong> : Identification et priorisation des besoins spécifiques</li>
                  <li><strong>Création des devis</strong> : Élaboration de devis détaillés pour chaque expression de besoin validée</li>
                  <li><strong>Création des plannings</strong> : Structuration et planification des interventions</li>
                </ul>
              </div>

              <div className="p-4 bg-amber-50 border-l-4 border-amber-400 rounded">
                <p className="font-semibold text-black mb-2">⚠️ Important :</p>
                <p className="text-gray-800">
                  Cet accompagnement <strong>ne comprend pas</strong> le développement et la mise en production des outils.
                </p>
              </div>

              <div>
                <p className="font-semibold text-black mb-3">Modalités :</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>~10 heures / mois d'accompagnement expert</li>
                  <li>Sans engagement</li>
                  <li>Résiliable à tout moment</li>
                  <li>Intervention à la demande (visio / asynchrone)</li>
                  <li>Réactivité courte (pas de backlog)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
