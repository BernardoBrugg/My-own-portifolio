"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DesktopPage = dynamic(() => import("./page"));
const MobilePage = dynamic(() => import("./page_mobile"));

export default function PageRouter() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent =
        navigator.userAgent || navigator.vendor || (window as { opera?: string }).opera || '';
      const isMobileDevice =
        /android|avantgo|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
          userAgent.toLowerCase()
        );

      const isSmallScreen = window.innerWidth < 768;
      const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

      setIsMobile(isMobileDevice || (isSmallScreen && hasTouch));
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile ? <MobilePage /> : <DesktopPage />;
}
