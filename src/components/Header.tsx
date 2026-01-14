import { Calendar, Home, Play, Video } from "lucide-react";
import { Button } from "./ui/button";
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
              href={projectData.podcastUrl}
              className="flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors"
            >
              <Play className="h-5 w-5" />
              <span className="text-sm">Podcast</span>
            </a>
            <a
              href={projectData.animationUrl}
              className="flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors"
            >
              <Video className="h-5 w-5" />
              <span className="text-sm">Animation</span>
            </a>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="bg-secondary hover:bg-secondary/80"
            >
              <a href={projectData.homeUrl}>
                <Home className="h-4 w-4 mr-2" />
                Accueil
              </a>
            </Button>
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
