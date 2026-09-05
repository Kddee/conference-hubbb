import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { GlobalBackground } from "./GlobalBackground";

export const SiteLayout = () => {
  return (
    <div className="min-h-screen flex flex-col w-full max-w-full overflow-x-clip">
      <GlobalBackground />
      <Header />
      <main className="flex-1 pt-20 w-full max-w-full overflow-x-clip">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
