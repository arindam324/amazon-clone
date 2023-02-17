import React, { lazy, Suspense, ReactNode, useState, useEffect } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { useMedia } from "react-use";

const DesktopHeader = lazy(() => import("./DesktopHeader"));

// import DesktopHeader from "./DesktopHeader";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [islarge, setLarge] = useState<boolean>(true);
  const isLarge = useMedia("(min-width:1080px)");

  useEffect(() => {
    if (isLarge) {
      setLarge(true);
    } else {
      setLarge(false);
    }
  }, []);

  console.log(isLarge);

  return (
    <main className={"relative pb-72 min-h-screen"}>
      <Suspense fallback={null}>
        {islarge ? <DesktopHeader /> : <Header />}
      </Suspense>

      {children}
      <Footer />
    </main>
  );
};

export default Layout;
