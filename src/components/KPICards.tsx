import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Play, Video } from "lucide-react";
import { kpiMetrics, projectData } from "@/data/content";

export function KPICards() {
  return (
    <div className="bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Processus à optimiser */}
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="text-5xl font-bold text-card-foreground mb-2">
                {kpiMetrics.processusOptimiser}
              </div>
              <div className="text-sm text-card-foreground/80">
                Processus à optimiser
              </div>
            </CardContent>
          </Card>

          {/* Gain de temps */}
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="text-5xl font-bold text-card-foreground mb-2">
                {kpiMetrics.gainTemps}
              </div>
              <div className="text-sm text-card-foreground/80 mb-2">
                Gain de temps sur l'analyse
              </div>
              <Badge variant="outline" className="text-orange-500 border-orange-500">
                Estimations
              </Badge>
            </CardContent>
          </Card>

          {/* Taux de transformation */}
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="text-5xl font-bold text-card-foreground mb-2">
                {kpiMetrics.tauxTransformation}
              </div>
              <div className="text-sm text-card-foreground/80">
                Taux de transformation actuel
              </div>
            </CardContent>
          </Card>

          {/* Restitution du besoin */}
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="text-sm font-semibold uppercase text-card-foreground mb-4">
                RESTITUTION DU BESOIN
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={projectData.podcastUrl}
                  className="flex items-center gap-2 text-card-foreground hover:text-card-foreground/80 transition-colors"
                >
                  <Play className="h-4 w-4" />
                  <span className="text-sm">▷ Podcast</span>
                </a>
                <a
                  href={projectData.animationUrl}
                  className="flex items-center gap-2 text-card-foreground hover:text-card-foreground/80 transition-colors"
                >
                  <Video className="h-4 w-4" />
                  <span className="text-sm">Animation</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
