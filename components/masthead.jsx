import React, { useCallback, useContext, useRef, useState } from "react";
import Image from "next/image";
import background from "../public/images/fondo.png";
import logo from "../public/images/logo-oceanit.png";
import { ScrollContext } from "../utils/scroll-observer";
import { motion } from "framer-motion";

const Masthead = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const refContainer = useRef(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <div
      ref={refContainer}
      className="overflow-x-hidden min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10"
      style={{
        transform: `translateY(-${progress * 20}vh)`,
      }}
    >
      <Image
        src={background}
        alt="Masthead Background"
        layout="fill"
        className="absolute w-full h-full object-cover object-left-top"
        placeholder="blur"
        priority="true"
      />

      <div
        className={`flex-grow-0 pt-10 transition-opacity duration-1000 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={`${logo.src}`}
          alt="oceanit top logo"
          width={200}
          height={40}
        />
      </div>

      <motion.div
        className={`mt-3 sm:mt-0 p-12 font-bold z-10 text-white flex-1 flex items-start justify-center flex-col`}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="flex items-end">
          <h1 className="mb-3 text-7xl sm:text-[140px] lg:text-[170px]">
            Digital
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4 }}
          >
            <h2 className="hidden sm:flex mb-2 text-2xl xl:text-3xl tracking-tight flex-col">
              <span>not just another</span>
              <span>digital agency</span>
            </h2>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="-mt-24 -mb-24 sm:-mt-9 sm:-mb-9 relative flex overflow-x-hidden overflow-y-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="text-7xl sm:text-[140px] lg:text-[170px] place-self-center text-bold text-white">
          <div className="animate-marquee whitespace-nowrap">
            <span className="mx-4 font-bold">Experience</span>
            <span className="mx-4 font-bold">Experience</span>
            <span className="mx-4 font-bold">Experience</span>
          </div>

          <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
            <span className="mx-4 font-bold">Experience</span>
            <span className="mx-4 font-bold">Experience</span>
            <span className="mx-4 font-bold">Experience</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className={`p-12 font-bold z-10 text-white flex-1 flex items-start justify-center flex-col`}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <div>
          <h1 className="mb-3 text-7xl sm:text-[140px] lg:text-[170px] place-self-center sm:place-self-end">
            Agency
          </h1>
          <h2 className="sm:hidden mb-2 text-2xl xl:text-3xl tracking-tight">
            <span>not just another digital agency</span>
          </h2>
        </div>
      </motion.div>

      <div
        className={`flex-grow-0 pb-20 md:pb-10 transition-all duration-1000 ${
          imageLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
        }`}
      >
        <Image
          src="/images/head-arrow.png"
          width={188 / 4}
          height={105 / 4}
          alt="Scroll Down"
          onLoad={handleImageLoaded}
        />
      </div>
    </div>
  );
};

export default Masthead;
