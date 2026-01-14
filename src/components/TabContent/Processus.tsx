import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { piliersIA, processusList } from "@/data/content";

export function Processus() {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Section 1 : Architecture technique de l'IA */}
      <section>
        <h2 className="font-serif text-3xl font-bold text-black mb-6">
          Architecture Technique de l'IA
        </h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="font-semibold text-black">Concept</TableHead>
                <TableHead className="font-semibold text-black">Description</TableHead>
                <TableHead className="font-semibold text-black">Utilisation</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {piliersIA.map((pilier, index) => (
                <TableRow
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <TableCell className="font-medium text-black">{pilier.concept}</TableCell>
                  <TableCell className="text-gray-800">{pilier.description}</TableCell>
                  <TableCell className="text-gray-800">{pilier.utilisation}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Section 2 : Liste des processus d'optimisation */}
      <section>
        <h2 className="font-serif text-3xl font-bold text-black mb-6">
          Liste des processus d'optimisation
        </h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="font-semibold text-black min-w-[200px]">Processus</TableHead>
                <TableHead className="font-semibold text-black min-w-[300px]">
                  Levier d'Optimisation (IA & Digital)
                </TableHead>
                <TableHead className="font-semibold text-black min-w-[300px]">
                  Impact Collaboration (Entreprises/MOA)
                </TableHead>
                <TableHead className="font-semibold text-black min-w-[200px]">Gain Potentiel</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {processusList.map((processus, index) => (
                <TableRow
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <TableCell className="font-medium text-black">{processus.processus}</TableCell>
                  <TableCell className="text-gray-800">{processus.levierOptimisation}</TableCell>
                  <TableCell className="text-gray-800">{processus.impactCollaboration}</TableCell>
                  <TableCell className="text-gray-800 font-medium">{processus.gainPotentiel}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  );
}
