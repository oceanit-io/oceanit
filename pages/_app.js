import "../styles/globals.css";
import ScrollObserver from "../utils/scroll-observer";
import { useScroll, useSpring, motion } from "framer-motion";
import SizeObserver from "../utils/size-observer";
import { appWithTranslation } from "next-i18next";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-TT3620V7M7`}
        id="my-script-1"
      />

      <Script strategy="lazyOnload" id="my-script-google">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config',  'G-TT3620V7M7', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <SizeObserver>
        <ScrollObserver>
          <motion.div
            style={{
              scaleX,
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: "5px",
              background: "#FE824F",
              transformOrigin: "0%",
              zIndex: 100,
            }}
          />
          <Component {...pageProps} />
        </ScrollObserver>
      </SizeObserver>
    </>
  );
}

export default appWithTranslation(MyApp);
