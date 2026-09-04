import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteLayout } from "./components/layout/SiteLayout";
import { SplashAnimation } from "./components/SplashAnimation";
import { ThemeBackground } from "./components/ThemeBackground";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import UpcomingConferences from "./pages/UpcomingConferences";
import RecentConferences from "./pages/RecentConferences";
import RecentConferenceDetail from "./pages/RecentConferenceDetail";
import RecentProceedings from "./pages/RecentProceedings";
import ProceedingDetail from "./pages/ProceedingDetail";
import PastSpeakers from "./pages/PastSpeakers";
import AdvisorySpeakers from "./pages/AdvisorySpeakers";
import AdvisoryMembers from "./pages/AdvisoryMembers.tsx";
import InnovationChallenge from "./pages/InnovationChallenge";
import Registration from "./pages/Registration";
import ApplyReviewer from "./pages/ApplyReviewer";
import ApplyAdvisory from "./pages/ApplyAdvisory";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import ResearchFunding from "./pages/ResearchFunding";
import Iccemb26 from "./pages/conferences/Iccemb26";
import Icmref26 from "./pages/conferences/Icmref26";
import Icaits26 from "./pages/conferences/Icaits26";
import Aiforge26 from "./pages/conferences/Aiforge26";
import Icaids2024 from "./pages/conferences/Icaids2024";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      {showSplash && <SplashAnimation onComplete={() => setShowSplash(false)} />}
      <ThemeBackground />
      <TooltipProvider>
        <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/upcoming-conferences" element={<UpcomingConferences />} />
            <Route path="/recent-conferences" element={<RecentConferences />} />
            <Route path="/recent-conferences/:id" element={<RecentConferenceDetail />} />
            <Route path="/recent-proceedings" element={<RecentProceedings />} />
            <Route path="/recent-proceedings/:id" element={<ProceedingDetail />} />
            <Route path="/past-speakers" element={<PastSpeakers />} />
            <Route path="/advisory-speakers" element={<AdvisorySpeakers />} />
            <Route path="/advisory-members" element={<AdvisoryMembers />} />
            <Route path="/innovation-challenge-2026" element={<InnovationChallenge />} />
            <Route path="/research-funding" element={<ResearchFunding />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/apply-reviewer" element={<ApplyReviewer />} />
            <Route path="/apply-advisory" element={<ApplyAdvisory />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/:id" element={<BookDetails />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Route>
          
          {/* Custom Full-Page Conference Sites */}
          <Route path="/iccemb-26" element={<Iccemb26 />} />
          <Route path="/icmref-26" element={<Icmref26 />} />
          <Route path="/icaits-26" element={<Icaits26 />} />
          <Route path="/aiforge-26" element={<Aiforge26 />} />
          <Route path="/icaids-2024" element={<Icaids2024 />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;

