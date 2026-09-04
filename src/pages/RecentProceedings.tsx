import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Video, Search, BookOpen, ExternalLink, Filter, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { proceedings } from "@/data/eminsphereData";

const RecentProceedings = () => {
  const proceedingsList = Object.values(proceedings);

  return (
    <main className="min-h-screen bg-background">
      <PageHero
        eyebrow="Digital Library"
        title="Digital Conference Proceedings"
        description="Access the published proceedings, abstracts, full papers, and keynote videos from Eminsphere's globally recognized summits."
        variant="bubbles"
      />

      {/* STATS HIGHLIGHT */}
      <section className="container max-w-5xl mb-24 relative z-20 -mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="glass border-white/5 bg-card/40 p-6 text-center rounded-3xl hover:border-primary/30 transition-colors">
            <BookOpen className="h-8 w-8 mx-auto text-primary mb-3" />
            <div className="text-3xl font-bold text-white mb-1">1,200+</div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Published Papers</div>
          </Card>
          <Card className="glass border-white/5 bg-card/40 p-6 text-center rounded-3xl hover:border-primary/30 transition-colors">
            <Video className="h-8 w-8 mx-auto text-accent mb-3" />
            <div className="text-3xl font-bold text-white mb-1">350+</div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Keynote Videos</div>
          </Card>
          <Card className="glass border-white/5 bg-card/40 p-6 text-center rounded-3xl hover:border-primary/30 transition-colors">
            <Star className="h-8 w-8 mx-auto text-primary mb-3" />
            <div className="text-3xl font-bold text-white mb-1">15+</div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Indexed Journals</div>
          </Card>
          <Card className="glass border-white/5 bg-card/40 p-6 text-center rounded-3xl hover:border-primary/30 transition-colors">
            <FileText className="h-8 w-8 mx-auto text-primary mb-3" />
            <div className="text-3xl font-bold text-white mb-1">50K+</div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Global Citations</div>
          </Card>
        </div>
      </section>

      {/* PROCEEDINGS LISTING */}
      <section className="container py-16 max-w-5xl relative z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white whitespace-nowrap">Latest Volumes</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"></div>
        </div>

        <div className="space-y-8 relative z-10">
          {proceedingsList.map((p, index) => {
            const hasPapers = p.papers && p.papers.length > 0;
            const hasVideos = p.videos && p.videos.length > 0;

            return (
              <Link key={p.id} to={`/recent-proceedings/${p.id}`} className="block group">
                <Card className="p-8 flex flex-col md:flex-row md:items-center justify-between gap-8 glass-strong border-white/5 bg-card/50 hover:bg-card/80 hover:border-primary/50 transition-all duration-500 rounded-[2.5rem] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(152,227,152,0.15)] overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500 pointer-events-none" />
                  
                  <div className="flex items-start gap-8 flex-1 relative z-10">
                    <div className="hidden sm:flex w-24 h-24 rounded-3xl bg-black/50 border border-white/10 items-center justify-center font-bold text-4xl text-primary/30 group-hover:text-primary group-hover:border-primary/30 transition-colors shadow-inner shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs uppercase tracking-widest text-accent font-bold mb-4 shadow-sm">
                        Volume {p.date}
                      </div>
                      <h3 className="font-serif text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                        {p.title}
                      </h3>
                      <p className="text-base text-muted-foreground line-clamp-2 max-w-3xl leading-relaxed mb-6 group-hover:text-white/80 transition-colors">
                        {p.description}
                      </p>
                      <div className="flex gap-4">
                        {hasPapers && (
                          <div className="inline-flex items-center gap-2 text-sm font-bold text-white bg-white/5 border border-white/10 px-4 py-2 rounded-xl group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                            <FileText className="h-4 w-4 text-primary" /> {p.papers?.length} Papers
                          </div>
                        )}
                        {hasVideos && (
                          <div className="inline-flex items-center gap-2 text-sm font-bold text-white bg-white/5 border border-white/10 px-4 py-2 rounded-xl group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors">
                            <Video className="h-4 w-4 text-accent" /> {p.videos?.length} Videos
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="shrink-0 flex items-center justify-center mt-6 md:mt-0 relative z-10">
                    <div className="inline-flex items-center justify-center h-16 px-8 rounded-full border border-white/10 text-white font-bold group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all shadow-lg">
                      Access Library <ExternalLink className="ml-3 h-5 w-5" />
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-primary/10 border-t border-primary/20 py-32 text-center relative overflow-hidden mt-16">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
        <div className="container max-w-3xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Need to verify a publication?</h2>
          <p className="text-xl text-white/70 mb-12 leading-relaxed">All Eminsphere proceedings are strictly peer-reviewed and indexed. Reach out to our editorial board for official verification and DOIs.</p>
          <Button asChild size="lg" className="glass text-white font-bold h-16 px-12 rounded-full border-white/20 hover:bg-white/10 transition-all text-lg relative z-20">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@eminsphere.com&su=Publication%20Verification%20Request" target="_blank" rel="noopener noreferrer">Contact Editorial Team</a>
          </Button>
        </div>
      </section>

    </main>
  );
};

export default RecentProceedings;
