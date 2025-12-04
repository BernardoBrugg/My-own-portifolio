import { headers } from "next/headers";
import dynamic from "next/dynamic";

const DesktopPage = dynamic(() => import("./page"));
const MobilePage = dynamic(() => import("./page_mobile"));

export default async function PageRouter() {
  const headersList = headers();
  const userAgent = (await headersList).get("user-agent") || "";

  const isMobileDevice =
    /android|avantgo|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
      userAgent.toLowerCase()
    );

  return isMobileDevice ? <MobilePage /> : <DesktopPage />;
}
