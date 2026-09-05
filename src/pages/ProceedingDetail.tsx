import { useParams, useLocation, Link } from "react-router-dom";
import { proceedings } from "@/data/eminsphereData";
import { ArrowLeft, FileText, Video, Calendar, MapPin, BookOpen, ShieldCheck, Award, Globe, Link as LinkIcon } from "lucide-react";

const getYouTubeVideoId = (value: string): string | null => {
  const input = value.trim();
  if (!input) return null;

  if (/^[a-zA-Z0-9_-]{11}$/.test(input)) {
    return input;
  }

  try {
    const url = new URL(input);
    const host = url.hostname.replace(/^www\./, "").toLowerCase();

    if (host === "youtu.be") {
      const id = url.pathname.split("/").filter(Boolean)[0] || "";
      return /^[a-zA-Z0-9_-]{11}$/.test(id) ? id : null;
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      const v = url.searchParams.get("v") || "";
      if (/^[a-zA-Z0-9_-]{11}$/.test(v)) return v;

      const parts = url.pathname.split("/").filter(Boolean);
      const embedIndex = parts.findIndex((part) => part === "embed" || part === "shorts" || part === "live");
      if (embedIndex >= 0 && parts[embedIndex + 1] && /^[a-zA-Z0-9_-]{11}$/.test(parts[embedIndex + 1])) {
        return parts[embedIndex + 1];
      }
    }
  } catch {
    return null;
  }

  return null;
};


const ProceedingDetail = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const pathId = location.pathname.split('/').pop() || "";
  const finalId = id || pathId;

  const data = finalId ? proceedings[finalId] : undefined;

  if (!data) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4 bg-background">
        <h1 className="text-3xl font-display font-bold text-primary">Proceeding Not Found</h1>
        <p className="text-muted-foreground text-center max-w-md">The proceeding paper you are looking for is currently being updated or does not exist.</p>
        <Link to="/recent-proceedings" className="text-accent hover:text-primary font-semibold flex items-center gap-2 transition-colors mt-4">
          <ArrowLeft className="h-4 w-4" /> Return to Publications
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background flex flex-col pb-20">
      
      {/* HERO BANNER */}
      <div className="relative w-full h-[220px] sm:h-[300px] md:h-[450px] bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2000&auto=format&fit=crop" 
            alt="Conference Banner" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
      </div>

      <div className="max-w-6xl w-full mx-auto px-4 md:px-8 -mt-20 sm:-mt-32 relative z-10">
        <Link to="/recent-proceedings" className="inline-flex mb-6 sm:mb-8 text-white/80 hover:text-white font-medium items-center gap-2 transition-colors text-sm sm:text-base">
          <ArrowLeft className="h-4 w-4" /> Back to all proceedings
        </Link>

        {/* HEADER SECTION */}
        <div className="bg-card border border-border/50 shadow-elegant rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-bold uppercase tracking-widest mb-4 sm:mb-6">
            <Award className="h-4 w-4" />
            Official Proceedings
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-primary font-serif font-bold mb-4 sm:mb-8 leading-tight break-words">{data.title}</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed mb-6 sm:mb-10">
            {data.description}
          </p>

          {/* AT A GLANCE INFO */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-border/50">
            <div>
              <div className="text-muted-foreground text-xs sm:text-sm font-bold uppercase tracking-wider mb-1 sm:mb-2 flex items-center gap-2"><Calendar className="h-4 w-4" /> Year</div>
              <div className="text-primary font-serif text-lg sm:text-xl">{data.date}</div>
            </div>
            <div>
              <div className="text-muted-foreground text-xs sm:text-sm font-bold uppercase tracking-wider mb-1 sm:mb-2 flex items-center gap-2"><MapPin className="h-4 w-4" /> Format</div>
              <div className="text-primary font-serif text-lg sm:text-xl">Hybrid / Global</div>
            </div>
            <div>
              <div className="text-muted-foreground text-xs sm:text-sm font-bold uppercase tracking-wider mb-1 sm:mb-2 flex items-center gap-2"><BookOpen className="h-4 w-4" /> Papers</div>
              <div className="text-primary font-serif text-lg sm:text-xl">{data.papers?.length || 0} Published</div>
            </div>
            <div>
              <div className="text-muted-foreground text-xs sm:text-sm font-bold uppercase tracking-wider mb-1 sm:mb-2 flex items-center gap-2"><Award className="h-4 w-4" /> Indexing</div>
              <div className="text-primary font-serif text-lg sm:text-xl">Scopus / WoS</div>
            </div>
          </div>
        </div>

        {/* PUBLICATION IMPACT */}
        <div className="w-full mb-12 sm:mb-20">
          <div className="flex items-center gap-3 mb-6 sm:mb-8 pb-4 border-b border-border/50">
            <BookOpen className="h-6 w-6 text-accent" />
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary">Publication & Indexing</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-muted/30 p-5 sm:p-8 rounded-2xl border border-border/50 hover:shadow-elegant transition-all duration-300 group">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-primary">Rigorous Peer Review</h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">All papers published in these proceedings underwent a rigorous double-blind peer-review process by our international technical committee to ensure academic excellence and originality.</p>
            </div>
            <div className="bg-muted/30 p-5 sm:p-8 rounded-2xl border border-border/50 hover:shadow-elegant transition-all duration-300 group">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-primary">Global Indexing</h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">These proceedings are formatted and submitted for inclusion in major scientific indexing databases including Scopus, Web of Science, and Google Scholar to maximize research visibility.</p>
            </div>
            <div className="bg-muted/30 p-5 sm:p-8 rounded-2xl border border-border/50 hover:shadow-elegant transition-all duration-300 group">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <LinkIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-primary">DOI Assignment</h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">Each accepted and published manuscript is assigned a permanent Digital Object Identifier (DOI) guaranteeing long-term digital preservation and accurate citation tracking.</p>
            </div>
          </div>
        </div>

        {/* VIDEOS SECTION */}
        {data.videos && data.videos.length > 0 && (
          <div className="w-full mb-12 sm:mb-20">
            <div className="flex items-center gap-3 mb-6 sm:mb-8 pb-4 border-b">
              <Video className="h-6 w-6 text-accent" />
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary">Keynotes & Presentations</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {data.videos.map((vid, i) => {
                const isObject = typeof vid === "object" && vid !== null;
                const videoUrl = isObject ? vid.url : vid;
                const speakerName = isObject ? vid.speaker : undefined;
                const videoTitle = isObject ? vid.title : undefined;

                const videoId = getYouTubeVideoId(videoUrl);
                if (!videoId) return null;

                return (
                  <div key={i} className="flex flex-col gap-4">
                    <div className="rounded-2xl overflow-hidden shadow-elegant bg-card group relative aspect-video border border-border/50 hover:shadow-lg transition-all">
                      <iframe
                        className="w-full h-full absolute inset-0"
                        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                        title={videoTitle || `Conference Video ${i+1}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    {(speakerName || videoTitle) && (
                      <div className="px-1">
                        {speakerName && <p className="font-bold text-white text-base leading-tight">{speakerName}</p>}
                        {videoTitle && <p className="text-sm text-muted-foreground mt-1 leading-normal">{videoTitle}</p>}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* PAPERS SECTION */}
        {data.papers && data.papers.length > 0 && (
          <div className="w-full flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2 sm:mb-4 pb-4 border-b">
              <FileText className="h-6 w-6 text-accent" />
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary">Published Papers</h2>
            </div>
            {data.papers.map((paper, idx) => (
              <div key={idx} className="bg-card p-5 sm:p-6 md:p-8 rounded-2xl border border-border/50 shadow-sm w-full flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6 hover:shadow-elegant hover:border-primary/20 transition-all group">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-primary mb-2 sm:mb-3 leading-tight group-hover:text-accent transition-colors">{paper.title}</h3>
                  <div className="flex flex-wrap items-center gap-2">
                    <strong className="text-xs sm:text-sm text-foreground">Authors:</strong>
                    <p className="text-muted-foreground text-xs sm:text-sm font-medium">{paper.authors}</p>
                  </div>
                </div>
                {paper.pdfLink && paper.pdfLink !== "#" ? (
                  <a 
                    href={paper.pdfLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-xl text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-all whitespace-nowrap"
                  >
                    <FileText className="h-4 w-4" />
                    View PDF
                  </a>
                ) : (
                  <div className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 bg-muted text-muted-foreground px-6 py-3 rounded-xl text-sm font-semibold whitespace-nowrap cursor-not-allowed border border-border/50">
                    <FileText className="h-4 w-4 opacity-50" />
                    PDF Unavailable
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        
        {(!data.videos || data.videos.length === 0) && (!data.papers || data.papers.length === 0) && (
          <div className="py-16 mt-8 text-center border-2 border-dashed border-border/50 bg-muted/30 rounded-2xl w-full max-w-3xl mx-auto flex flex-col items-center justify-center gap-4">
            <FileText className="h-10 w-10 text-muted-foreground/50" />
            <h3 className="text-xl font-serif text-primary">Content Updating</h3>
            <p className="text-muted-foreground">Papers and proceedings for this conference are currently being compiled and will be available soon.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default ProceedingDetail;
