import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Overview } from "./TabContent/Overview";
import { Timeline } from "./TabContent/Timeline";
import { CompteRendu } from "./TabContent/CompteRendu";
import { Devis } from "./TabContent/Devis";
import { Benefices } from "./TabContent/Benefices";
import { Processus } from "./TabContent/Processus";

export function TabsSection() {
  return (
    <div className="bg-white text-black py-12">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="bg-background text-foreground border-b border-border rounded-none h-auto p-0 mb-8">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-white data-[state=active]:text-black rounded-none border-b-2 border-transparent data-[state=active]:border-black"
            >
              Vue d'ensemble
            </TabsTrigger>
            <TabsTrigger
              value="timeline"
              className="data-[state=active]:bg-white data-[state=active]:text-black rounded-none border-b-2 border-transparent data-[state=active]:border-black"
            >
              Timeline
            </TabsTrigger>
            <TabsTrigger
              value="compte-rendu"
              className="data-[state=active]:bg-white data-[state=active]:text-black rounded-none border-b-2 border-transparent data-[state=active]:border-black"
            >
              Compte rendu
            </TabsTrigger>
            <TabsTrigger
              value="devis"
              className="data-[state=active]:bg-white data-[state=active]:text-black rounded-none border-b-2 border-transparent data-[state=active]:border-black"
            >
              Devis
            </TabsTrigger>
            <TabsTrigger
              value="benefices"
              className="data-[state=active]:bg-white data-[state=active]:text-black rounded-none border-b-2 border-transparent data-[state=active]:border-black"
            >
              Bénéfices
            </TabsTrigger>
            <TabsTrigger
              value="processus"
              className="data-[state=active]:bg-white data-[state=active]:text-black rounded-none border-b-2 border-transparent data-[state=active]:border-black"
            >
              Processus
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Overview />
          </TabsContent>
          <TabsContent value="timeline">
            <Timeline />
          </TabsContent>
          <TabsContent value="compte-rendu">
            <CompteRendu />
          </TabsContent>
          <TabsContent value="devis">
            <Devis />
          </TabsContent>
          <TabsContent value="benefices">
            <Benefices />
          </TabsContent>
          <TabsContent value="processus">
            <Processus />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
