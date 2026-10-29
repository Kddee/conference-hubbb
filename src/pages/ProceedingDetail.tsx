import { useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { proceedings } from "@/data/eminsphereData";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ArrowLeft, 
  FileText, 
  Video, 
  Calendar, 
  MapPin, 
  BookOpen, 
  ShieldCheck, 
  Award, 
  Globe, 
  Link as LinkIcon,
  Sparkles,
  ExternalLink,
  X,
  Layers,
  ArrowRight,
  CheckCircle2,
  Share2
} from "lucide-react";

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
  const normalizedId = finalId ? finalId.toLowerCase().trim() : "";
  const lookupKey = (normalizedId === "icgen" || normalizedId === "icgen2026") ? "icgen-2026" : normalizedId;

const data = (lookupKey && proceedings[lookupKey]) 
    || (finalId && proceedings[finalId])
    || (finalId && proceedings[finalId.replace(/^proceeding-/, "")])
    || (finalId && proceedings[`proceeding-${finalId}`])
    || undefined;

  const [isAwardModalOpen, setIsAwardModalOpen] = useState(false);

  if (!data) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4 bg-background px-4">
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
      <SEOHead
        title={`${data.title} | Digital Conference Proceedings`}
        description={data.description}
        canonical={`https://www.eminsphere.com/recent-proceedings/${data.id}`}
      />
      
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
        <div className="bg-card border border-border/50 shadow-elegant rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 mb-10 sm:mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-bold uppercase tracking-widest mb-4 sm:mb-6">
            <Award className="h-4 w-4" />
            Official Conference Proceedings
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
              <div className="text-primary font-serif text-lg sm:text-xl">{data.location || "Hybrid / Global"}</div>
            </div>

            {/* If hidePapersAndIndexingStats is requested, replace Papers & Indexing with ISBN and Award Recognition */}
            {data.hidePapersAndIndexingStats ? (
              <>
                {data.isbn && (
                  <div>
                    <div className="text-muted-foreground text-xs sm:text-sm font-bold uppercase tracking-wider mb-1 sm:mb-2 flex items-center gap-2"><BookOpen className="h-4 w-4" /> Official ISBN</div>
                    <div className="text-primary font-mono text-base sm:text-lg font-bold">{data.isbn}</div>
                  </div>
                )}
                {data.award && (
                  <div>
                    <div className="text-muted-foreground text-xs sm:text-sm font-bold uppercase tracking-wider mb-1 sm:mb-2 flex items-center gap-2"><Award className="h-4 w-4 text-amber-400" /> Special Honor</div>
                    <div className="text-primary font-serif text-base sm:text-lg text-amber-300 font-bold truncate">{data.award.title}</div>
                  </div>
                )}
              </>
            ) : (
              <>
                <div>
                  <div className="text-muted-foreground text-xs sm:text-sm font-bold uppercase tracking-wider mb-1 sm:mb-2 flex items-center gap-2"><BookOpen className="h-4 w-4" /> Papers</div>
                  <div className="text-primary font-serif text-lg sm:text-xl">{data.papers?.length || 0} Published</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs sm:text-sm font-bold uppercase tracking-wider mb-1 sm:mb-2 flex items-center gap-2"><Award className="h-4 w-4" /> Indexing</div>
                  <div className="text-primary font-serif text-lg sm:text-xl">Scopus / WoS</div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* DEDICATED AWARD SHOWCASE SECTION */}
        {data.award && (
          <div className="w-full mb-12 sm:mb-20">
            <div className="flex items-center gap-3 mb-6 sm:mb-8 pb-4 border-b border-border/50">
              <Award className="h-6 w-6 text-amber-400" />
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary">
                Conference Honors & Leadership Awards
              </h2>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-card/95 via-card/75 to-amber-950/25 shadow-2xl p-6 sm:p-10 md:p-12">
              <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[110px] pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
                
                {/* Poster / Certificate Preview */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <div 
                    onClick={() => setIsAwardModalOpen(true)}
                    className="cursor-pointer group relative rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-[0_12px_45px_-10px_rgba(245,158,11,0.35)] bg-black/70 max-w-sm sm:max-w-md w-full transition-all duration-500 hover:scale-[1.02] hover:border-amber-400 hover:shadow-[0_18px_60px_rgba(245,158,11,0.45)]"
                  >
                    <img 
                      src={data.award.image} 
                      alt={`${data.award.title} - ${data.award.recipient}`} 
                      className="w-full h-auto object-cover block"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm bg-gradient-to-t from-black/85 via-black/40 to-transparent">
                      <ExternalLink className="h-5 w-5 text-amber-400" />
                      <span>Click to Enlarge Official Award Poster</span>
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <span className="text-[11px] sm:text-xs text-muted-foreground font-mono">
                      Official Citation Award Certificate • ICGEN 2026
                    </span>
                  </div>
                </div>

                {/* Award Details */}
                <div className="lg:col-span-7 flex flex-col">
                  {/* Trademark / Conferral Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest mb-4 w-fit shadow-sm">
                    <Sparkles className="h-4 w-4 text-amber-400" />
                    EMINSPHERE® Registered Trademark (No. 13012880)
                  </div>

                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-2 leading-tight">
                    {data.award.title}
                  </h3>

                  <p className="text-sm sm:text-base font-semibold text-amber-400 uppercase tracking-wider mb-6">
                    {data.award.subtitle || "Presented in Recognition of Outstanding Leadership"}
                  </p>

                  {/* Recipient Profile Card */}
                  <div className="bg-black/50 border border-amber-500/20 rounded-2xl p-5 sm:p-6 mb-6 backdrop-blur-md shadow-inner">
                    <div className="text-[11px] sm:text-xs uppercase tracking-widest text-muted-foreground font-bold mb-1">
                      Distinguished Honoree
                    </div>
                    <div className="text-2xl sm:text-3xl font-serif font-bold text-white mb-1.5 text-gradient">
                      {data.award.recipient}
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-amber-300/90 mb-1">
                      {data.award.designation}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-accent shrink-0" />
                      <span>{data.award.organization}</span>
                    </div>
                  </div>

                  {/* Citation Statement */}
                  {data.award.description && (
                    <p className="text-sm sm:text-base text-white/85 leading-relaxed mb-6">
                      {data.award.description}
                    </p>
                  )}

                  {/* Highlights Bullet List */}
                  {data.award.highlights && data.award.highlights.length > 0 && (
                    <div className="space-y-2.5 mb-8">
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Leadership & Contribution Citations:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {data.award.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90 bg-white/5 border border-white/5 p-3 rounded-xl hover:border-amber-500/20 transition-colors">
                            <span className="text-amber-400 font-bold text-sm shrink-0">✦</span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                    <a
                      href={data.award.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs sm:text-sm transition-all shadow-lg hover:shadow-amber-500/30"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View High-Res Award Poster
                    </a>
                    <Link
                      to="/icgen-2026"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/10 transition-colors"
                    >
                      <Globe className="h-4 w-4 text-primary" />
                      Visit Conference Portal
                    </Link>
                  </div>

                </div>

              </div>
            </div>
          </div>
        )}

        {/* MODAL LIGHTBOX FOR AWARD POSTER */}
        {isAwardModalOpen && data.award && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={() => setIsAwardModalOpen(false)}
          >
            <div 
              className="relative max-w-3xl w-full max-h-[92vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsAwardModalOpen(false)}
                className="absolute -top-12 right-0 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors flex items-center gap-1.5 text-sm font-semibold"
              >
                <X className="h-5 w-5" /> Close
              </button>
              <img 
                src={data.award.image} 
                alt={data.award.title} 
                className="max-h-[85vh] w-auto rounded-2xl shadow-2xl border-2 border-amber-500/50 object-contain"
              />
              <div className="mt-3 flex items-center justify-between w-full text-xs text-muted-foreground px-2">
                <span>{data.award.title} • {data.award.recipient}</span>
                <a 
                  href={data.award.image} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-amber-400 hover:underline inline-flex items-center gap-1"
                >
                  Open in New Tab <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* DETAILED DESCRIPTIVE CONTENT SECTION (ICGEN-2026) */}
        {data.detailedContent && (
          <div className="w-full mb-12 sm:mb-20 space-y-12 sm:space-y-16">
            
            {/* Overview & Scope */}
            {data.detailedContent.overview && data.detailedContent.overview.length > 0 && (
              <div className="bg-card/60 border border-border/50 rounded-2xl sm:rounded-3xl p-6 sm:p-10 backdrop-blur-sm shadow-sm">
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border/50">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary">
                    Proceedings Overview & Scientific Scope
                  </h2>
                </div>
                <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {data.detailedContent.overview.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Thematic Tracks Grid */}
            {data.detailedContent.thematicTracks && data.detailedContent.thematicTracks.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-6 sm:mb-8 pb-4 border-b border-border/50">
                  <Layers className="h-6 w-6 text-accent" />
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary">
                    Thematic Proceedings Tracks & Research Domains
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {data.detailedContent.thematicTracks.map((track, i) => (
                    <Card key={i} className="p-5 sm:p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/40 hover:shadow-elegant transition-all duration-300 group">
                      <div className="text-xs font-mono font-bold text-accent mb-2 uppercase tracking-wider">
                        Track {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="text-lg font-serif font-bold text-white mb-2.5 group-hover:text-primary transition-colors leading-snug">
                        {track.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {track.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Editorial Highlights & Indexing Roadmap */}
            {data.detailedContent.editorialHighlights && data.detailedContent.editorialHighlights.length > 0 && (
              <div className="bg-gradient-to-r from-card via-card/70 to-primary/5 border border-border/50 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-sm">
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border/50">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary">
                    Editorial Governance & Archival Standards
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.detailedContent.editorialHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-muted/30 p-4 rounded-xl border border-border/40">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Call to Action Banner */}
            <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-primary/15 via-card/80 to-accent/15 border border-primary/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="max-w-2xl text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
                  Participate in ICGEN-2026 Proceedings
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Submissions are reviewed continuously under our double-blind academic standard. Connect with Silicon Valley engineers, NRI tech executives, and academic chairs.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-6">
                  <Link to="/icgen-2026">
                    Conference Portal <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 rounded-full px-6">
                  <a href="https://cmt3.research.microsoft.com/ICGEN2026" target="_blank" rel="noopener noreferrer">
                    Submit via CMT <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

          </div>
        )}

        {/* STANDARD PUBLICATION IMPACT (Only if detailedContent is NOT already rendering its own governance) */}
        {!data.detailedContent && (
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
        )}

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
        
        {/* Placeholder ONLY if nothing else is available */}
        {(!data.videos || data.videos.length === 0) && (!data.papers || data.papers.length === 0) && !data.award && !data.detailedContent && (
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
