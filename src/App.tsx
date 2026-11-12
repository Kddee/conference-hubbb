import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
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

// Awards & Recognition Pages
import AwardsLanding from "./pages/awards/AwardsLanding";
import AwardsAbout from "./pages/awards/AwardsAbout";
import AwardsCategories from "./pages/awards/AwardsCategories";
import AwardsEligibility from "./pages/awards/AwardsEligibility";
import AwardsNominationProcess from "./pages/awards/AwardsNominationProcess";
import AwardsSelectionProcess from "./pages/awards/AwardsSelectionProcess";
import AwardsGovernance from "./pages/awards/AwardsGovernance";
import AwardsAwardees from "./pages/awards/AwardsAwardees";
import AwardsApply from "./pages/awards/AwardsApply";
import AwardsVerifyCertificate from "./pages/awards/AwardsVerifyCertificate";
import AwardsFaqs from "./pages/awards/AwardsFaqs";
import AwardsPolicies from "./pages/awards/AwardsPolicies";
import AwardsContact from "./pages/awards/AwardsContact";
import AwardsAdmin from "./pages/awards/AwardsAdmin";

// Custom Full-Page Conference Sites
import Iccemb26 from "./pages/conferences/Iccemb26";
import Icmref26 from "./pages/conferences/Icmref26";
import Icaits26 from "./pages/conferences/Icaits26";
import Aiforge26 from "./pages/conferences/Aiforge26";
import Icaids2024 from "./pages/conferences/Icaids2024";
import ManilaNexus2027 from "./pages/conferences/ManilaNexus2027";
import Icgen2026 from "./pages/conferences/Icgen2026";
import Icpai2026 from "./pages/conferences/Icpai2026";
import Icmedai2026 from "./pages/conferences/Icmedai2026";

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

              {/* EminSphere Awards & Recognition Section */}
              <Route path="/awards-recognition" element={<AwardsLanding />} />
              <Route path="/awards-recognition/about" element={<AwardsAbout />} />
              <Route path="/awards-recognition/categories" element={<AwardsCategories />} />
              <Route path="/awards-recognition/eligibility" element={<AwardsEligibility />} />
              <Route path="/awards-recognition/nomination-process" element={<AwardsNominationProcess />} />
              <Route path="/awards-recognition/selection-process" element={<AwardsSelectionProcess />} />
              <Route path="/awards-recognition/governance" element={<AwardsGovernance />} />
              <Route path="/awards-recognition/advisory-board" element={<AwardsGovernance />} />
              <Route path="/awards-recognition/awardees" element={<AwardsAwardees />} />
              <Route path="/awards-recognition/awardees/:id" element={<AwardsAwardees />} />
              <Route path="/awards-recognition/apply" element={<AwardsApply />} />
              <Route path="/awards-recognition/verify-certificate" element={<Navigate to="/verify-certificate" replace />} />
              <Route path="/verify-certificate" element={<AwardsVerifyCertificate />} />
              <Route path="/verify-certificate/:id" element={<AwardsVerifyCertificate />} />
              <Route path="/awards-recognition/faqs" element={<AwardsFaqs />} />
              <Route path="/awards-recognition/policies" element={<AwardsPolicies />} />
              <Route path="/awards-recognition/contact" element={<AwardsContact />} />
              <Route path="/awards-recognition/admin" element={<AwardsAdmin />} />
            </Route>
            
            {/* Custom Full-Page Conference Sites */}
            <Route path="/iccemb-26" element={<Iccemb26 />} />
            <Route path="/icmref-26" element={<Icmref26 />} />
            <Route path="/icaits-26" element={<Icaits26 />} />
            <Route path="/aiforge-26" element={<Aiforge26 />} />
            <Route path="/aiforge-2026" element={<Navigate to="/aiforge-26" replace />} />
            <Route path="/icaids-2024" element={<Icaids2024 />} />
            <Route path="/manila-nexus-2027" element={<ManilaNexus2027 />} />
            <Route path="/emn-2027" element={<ManilaNexus2027 />} />
            <Route path="/icgen-2026" element={<Icgen2026 />} />
            <Route path="/icgen" element={<Navigate to="/icgen-2026" replace />} />
            <Route path="/wsgen-2026" element={<Navigate to="/icgen-2026" replace />} />
            <Route path="/wsgen" element={<Navigate to="/icgen-2026" replace />} />
            <Route path="/genai-2026" element={<Navigate to="/icgen-2026" replace />} />
            <Route path="/ws-genai-2026" element={<Navigate to="/icgen-2026" replace />} />
            <Route path="/ws-gaias-2026" element={<Navigate to="/icgen-2026" replace />} />
            <Route path="/ws-gais-2026" element={<Navigate to="/icgen-2026" replace />} />
            <Route path="/icetis-2026" element={<Navigate to="/icgen-2026" replace />} />
            <Route path="/icetis-26" element={<Navigate to="/icgen-2026" replace />} />
            <Route path="/icpai-2026" element={<Icpai2026 />} />
            <Route path="/icpai" element={<Navigate to="/icpai-2026" replace />} />
            <Route path="/icmedai-2026" element={<Icmedai2026 />} />
            <Route path="/icmedai" element={<Navigate to="/icmedai-2026" replace />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
