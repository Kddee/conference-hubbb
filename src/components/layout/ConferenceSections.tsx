import { BookOpen, Edit3, Send, Link2, Search, Globe2, Lightbulb, Users, Target, CheckCircle2, Calendar, Globe, Image, History, Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState, useRef } from "react";

interface ConferenceSectionsProps {
  conferenceName: string;
  glimpses?: string[];
  importantDates?: { date: string; label: string; desc: string }[];
  sessionChairs?: { name: string; org?: string; country: string; img: string; desc?: string; role?: string }[];
  promotionalVideos?: { src: string; name: string }[];
}

const researchSteps = [
  {
    icon: Search,
    title: "Read, Present, and Learn",
    desc: "Gain insights, share ideas, and expand your expertise. Access reliable resources, create compelling presentations, and stay informed on the latest advancements.",
    color: "hsl(var(--primary))",
  },
  {
    icon: Edit3,
    title: "Edit and Proofread",
    desc: "Polish your work to perfection. Ensure clarity, consistency, and quality with professional editing and proofreading services tailored to your research needs.",
    color: "hsl(var(--primary))",
  },
  {
    icon: Send,
    title: "Review and Publish",
    desc: "Navigate the publication process with ease. From peer reviews to journal submissions, we help you refine and share your findings with the world.",
    color: "hsl(var(--primary))",
  },
  {
    icon: Link2,
    title: "Refer and Cite",
    desc: "Acknowledge your sources accurately. Simplify referencing and citation with tools and guidance that save you time and effort.",
    color: "hsl(var(--primary))",
  },
];

const whyAttendReasons = [
  {
    icon: Users,
    title: "Engage with Experts Across Diverse Fields",
    desc: "Connect with leading professionals, researchers, and thought leaders from various disciplines. Gain insights into emerging trends, innovative solutions, and interdisciplinary collaborations that drive meaningful progress.",
    color: "hsl(var(--primary))",
  },
  {
    icon: Lightbulb,
    title: "Discover Groundbreaking Research & Real-World Applications",
    desc: "Explore pioneering research that bridges the gap between theory and practice. Witness how cutting-edge innovations are transforming industries, solving global challenges, and shaping the future.",
    color: "hsl(var(--primary))",
  },
  {
    icon: Globe2,
    title: "Network with Global Scholars, Innovators & Policymakers",
    desc: "Expand your professional circle by interacting with international experts, industry leaders, and policymakers. Build valuable collaborations, exchange ideas, and unlock new opportunities for growth and development.",
    color: "hsl(var(--primary))",
  },
  {
    icon: Target,
    title: "Explore Strategies Aligned with Sustainable Development Goals (SDGs)",
    desc: "Engage in thought-provoking discussions on sustainability and global impact. Learn about actionable strategies, policies, and research initiatives that contribute to a better future in alignment with the United Nations SDGs.",
    color: "hsl(var(--primary))",
  },
];

const supportingServices = [
  "Publication Support: Get assistance with journal selection, formatting, and submission processes.",
  "Editorial Services: Professional proofreading and editing to enhance the clarity and impact of your paper.",
  "Presentation Coaching: Tips and guidance on delivering compelling and effective presentations.",
  "Networking Facilitation: Introductions to key researchers and industry professionals in your field."
];

const CustomVideoPlayer = ({ src }: { src: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className="w-full h-full relative cursor-pointer group/video" onClick={togglePlay}>
      <video 
        ref={videoRef}
        src={src} 
        className="w-full h-full object-cover" 
        controls={isPlaying}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handlePause}
        preload="metadata"
      />
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300 group-hover/video:bg-black/50 z-10">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-[0_4px_20px_rgba(var(--primary),0.5)] transform transition-transform duration-300 group-hover/video:scale-110">
            <Play className="w-8 h-8 text-primary-foreground fill-primary-foreground ml-1" />
          </div>
        </div>
      )}
    </div>
  );
};

export const ConferenceSections = ({
  conferenceName,
  glimpses = [], 
  importantDates = [], 
  sessionChairs = [],
  promotionalVideos = []
}: ConferenceSectionsProps) => {
  return (
    <>
      {/* RESEARCH JOURNEY */}
      <section className="relative py-16 sm:py-24 bg-[#000d14] overflow-hidden border-t border-white/5">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="container max-w-6xl px-4">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-3 sm:mb-4">Research Journey</h2>
            <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto">
              Embark on a path of discovery, turning questions into knowledge. We guide you through every stage of your research process with precision and care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {researchSteps.map((step, i) => (
              <div
                key={i}
                className="group relative p-5 sm:p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-white/20 hover:bg-white/5 transition-all duration-400"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${step.color}15`, border: `1px solid ${step.color}30` }}
                >
                  <step.icon className="h-6 w-6" style={{ color: step.color }} />
                </div>
                <h3 className="text-white font-bold text-lg mb-3 leading-tight">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 text-center">
            <p className="text-white/80 font-medium text-sm sm:text-base">Let us support you at every step of your research journey!</p>
          </div>
        </div>
      </section>

      {/* IMPORTANT DATES */}
      {importantDates && importantDates.length > 0 && (
        <section className="py-16 sm:py-24 bg-background border-t border-white/5">
          <div className="container max-w-4xl px-4">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white uppercase tracking-wider">
                IMPORTANT DATES
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {importantDates.map((item, idx) => (
                <Card key={idx} className="p-6 sm:p-8 border-l-4 border-accent relative overflow-hidden bg-card text-center flex flex-col items-center hover:-translate-y-1 transition-all rounded-2xl sm:rounded-3xl">
                  <Calendar className="h-8 w-8 sm:h-10 sm:w-10 text-accent mb-4" />
                  <h4 className="text-base sm:text-lg font-bold text-white/80 mb-2">{item.label}</h4>
                  <p className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">{item.date}</p>
                  <p className="text-xs sm:text-sm text-white/60">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SUPPORTING RESEARCHERS */}
      <section className="py-16 sm:py-24 bg-[#000d14] border-t border-white/5">
        <div className="container max-w-5xl px-4">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4 sm:mb-6">Supporting Researchers Every Step of the Way</h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              We are here to assist you in presenting your research at its best. Our services include:
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="space-y-4">
              {supportingServices.map((s, i) => {
                const [title, desc] = s.split(":");
                return (
                  <div key={i} className="flex items-start gap-3 sm:gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block mb-1 text-sm sm:text-base">{title}:</span>
                      <span className="text-white/70 text-xs sm:text-sm leading-relaxed block">{desc}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <Card className="bg-white/5 border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-center flex flex-col items-center justify-center min-h-full">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Edit3 className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Let us help you make your research shine!</h3>
              <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                Contact our team to access specialized editorial and formatting support.
              </p>
              <a
                href="/registration"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-primary text-white font-bold text-sm sm:text-base hover:opacity-90 transition-opacity w-full justify-center shadow-lg"
              >
                <Send className="h-4 w-4 sm:h-5 sm:w-5" /> Get Support Now
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* SESSION CHAIRS */}
      {sessionChairs && sessionChairs.length > 0 && (
        <section className="py-16 sm:py-24 bg-[#000d14] border-t border-white/5">
          <div className="container px-4">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white uppercase tracking-wider">
                Session Chairs
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12">
              {sessionChairs.map((s, idx) => (
                <div key={idx} className="group flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-all hover:-translate-y-1 w-full max-w-[260px]">
                  <div className="relative h-24 w-24 sm:h-28 sm:w-28 mb-4 sm:mb-5">
                    <img src={s.img} alt={s.name} className="h-full w-full object-cover rounded-full border-2 border-accent shadow-lg" loading="lazy" />
                  </div>
                  <h4 className="font-bold text-white text-base leading-tight mb-1">{s.name}</h4>
                  <p className="text-xs font-bold text-accent uppercase tracking-wider flex items-center justify-center gap-1 mb-2">
                    <Globe className="h-3 w-3" /> {s.country}
                  </p>
                  <p className="text-xs text-white/50">{s.org || s.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHY SHOULD YOU ATTEND */}
      <section className="py-16 sm:py-24 bg-background border-t border-white/5">
        <div className="container max-w-6xl px-4">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Why should you attend this International Conference?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {whyAttendReasons.map((r, i) => (
              <div
                key={i}
                className="group flex flex-col sm:flex-row items-start gap-4 sm:gap-5 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-card border border-white/5 hover:border-primary/30 hover:bg-card/50 transition-all duration-400 hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${r.color}15`, border: `1px solid ${r.color}30` }}
                >
                  <r.icon className="h-6 w-6 sm:h-8 sm:w-8" style={{ color: r.color }} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg sm:text-xl mb-2 sm:mb-3 leading-snug">{r.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* PREVIOUS CONFERENCES CTA - ONLY SHOW FOR UPCOMING CONFERENCES WITHOUT GLIMPSES */}
          {(!glimpses || glimpses.length === 0) && (
            <div className="mt-12 sm:mt-16 bg-accent/10 border border-accent/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
              <div className="max-w-2xl">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-3 sm:mb-4">Discover Our Legacy of Excellence</h3>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  Explore the impact and success of our previous international conferences. View glimpses, testimonials, and past proceedings to see the high standards of authenticity and academic excellence we uphold.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:gap-4 shrink-0 w-full md:w-auto">
                <a href="/recent-conferences" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-accent text-white font-bold text-sm sm:text-base hover:bg-accent/90 transition-colors shadow-lg whitespace-nowrap">
                  <Image className="h-4 w-4 sm:h-5 sm:w-5" /> View Past Glimpses
                </a>
                <a href="/icaits-26" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-card text-foreground font-bold text-sm sm:text-base hover:bg-muted transition-colors border border-border whitespace-nowrap">
                  <History className="h-4 w-4 sm:h-5 sm:w-5" /> ICAITS-26 (Completed)
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* PROMOTIONAL VIDEOS */}
      {promotionalVideos && promotionalVideos.length > 0 && (
        <section className="py-16 sm:py-24 bg-background border-t border-white/5">
          <div className="container max-w-6xl px-4">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Hear from Our Speakers
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                Discover why leading experts are excited to join {conferenceName}.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 justify-center">
              {promotionalVideos.map((video, i) => (
                <div 
                  key={i} 
                  className="group relative rounded-3xl overflow-hidden bg-card border border-white/5 hover:border-primary/30 hover:-translate-y-1 transition-all duration-400 shadow-lg"
                >
                  <div className="aspect-[9/16] bg-black/40 relative">
                    <CustomVideoPlayer src={video.src} />
                  </div>
                  <div className="p-4 sm:p-5 bg-card/90 backdrop-blur-md absolute bottom-0 left-0 right-0 border-t border-white/10 transform transition-transform duration-300">
                    <h3 className="font-bold text-base sm:text-lg text-white text-center">{video.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* GLIMPSES SECTION */}
      {glimpses.length > 0 && (
        <section className="py-16 sm:py-24 bg-[#000d14] border-t border-white/5">
          <div className="container max-w-6xl px-4">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4 uppercase tracking-wider">
                Glimpses of {conferenceName}
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {glimpses.map((img, idx) => (
                <div key={idx} className="group overflow-hidden rounded-xl sm:rounded-2xl border border-white/8 aspect-video bg-white/5">
                  <img
                    src={img}
                    alt={`${conferenceName} glimpse ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ConferenceSections;
