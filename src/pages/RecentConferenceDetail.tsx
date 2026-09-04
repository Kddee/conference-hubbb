import { useParams, Link } from "react-router-dom";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Icqadts2026 from "./conferences/Icqadts2026";
import Icaidss2026 from "./conferences/Icaidss2026";
import Icaeset2026 from "./conferences/Icaeset2026";
import Icnse2026 from "./conferences/Icnse2026";
import Ictet2026 from "./conferences/Ictet2026";
import Icmess2026 from "./conferences/Icmess2026";
import Icasit2026 from "./conferences/Icasit2026";
import Icmdia2025 from "./conferences/Icmdia2025";
import Icetsgc2025 from "./conferences/Icetsgc2025";
import Iccinet2025 from "./conferences/Iccinet2025";
import Icamet2025 from "./conferences/Icamet2025";
import Icenta2024 from "./conferences/Icenta2024";
import Iceiis2024 from "./conferences/Iceiis2024";
import Icaids2024 from "./conferences/Icaids2024";

const RecentConferenceDetail = () => {
  const { id } = useParams();
  
  if (id === "icqadts-2026") {
    return <Icqadts2026 />;
  }
  
  if (id === "icaidss-26") {
    return <Icaidss2026 />;
  }

  if (id === "icaeset-2026") {
    return <Icaeset2026 />;
  }

  if (id === "icnse-26") {
    return <Icnse2026 />;
  }

  if (id === "ictet-26") {
    return <Ictet2026 />;
  }

  if (id === "icmess-26") {
    return <Icmess2026 />;
  }

  if (id === "icasit-26") {
    return <Icasit2026 />;
  }

  if (id === "icmdia-25") {
    return <Icmdia2025 />;
  }

  if (id === "icetsgc-25") {
    return <Icetsgc2025 />;
  }

  if (id === "iccinet-25") {
    return <Iccinet2025 />;
  }

  if (id === "icamet-25" || id === "icamet-2025") {
    return <Icamet2025 />;
  }

  if (id === "icenta-2024") {
    return <Icenta2024 />;
  }

  if (id === "iceiis-2024") {
    return <Iceiis2024 />;
  }

  if (id === "icaids-2024") {
    return <Icaids2024 />;
  }
  
  return (
    <>
      <PageHero
        eyebrow="Conference Recap"
        title={id?.toUpperCase() || "Conference"}
        description="Detailed recap, proceedings, and memories from this event."
        variant="floating-orbs"
      />
      <div className="container py-20 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-serif text-primary mb-6">Coming Soon</h2>
        <p className="text-muted-foreground mb-8">
          The recap code for <strong>{id}</strong> has not been provided yet. Once the code is available, it will be displayed here.
        </p>
        <Button asChild variant="outline">
          <Link to="/recent-conferences"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Recent Conferences</Link>
        </Button>
      </div>
    </>
  );
};

export default RecentConferenceDetail;
