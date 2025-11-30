"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DesktopPage = dynamic(() => import("./page"));
const MobilePage = dynamic(() => import("./page_mobile"));

export default function PageRouter() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile ? <MobilePage /> : <DesktopPage />;
}
