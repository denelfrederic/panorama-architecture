import { Calendar, Home } from "lucide-react";
import { projectData } from "@/data/content";

export function Header() {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-2 text-foreground/80 text-sm">
            <Calendar className="h-4 w-4" />
            <span>Dernière mise à jour : {projectData.lastUpdate}</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href={projectData.homeUrl}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-9 rounded-md px-3 border border-input bg-secondary hover:bg-secondary/80 text-secondary-foreground"
            >
              <Home className="h-4 w-4 mr-2" />
              Accueil
            </a>
          </div>
        </div>
        
        <div className="mt-6">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-2">
            {projectData.title}
          </h1>
          <p className="text-lg text-foreground/90">
            {projectData.subtitle}
          </p>
        </div>
      </div>
    </header>
  );
}
