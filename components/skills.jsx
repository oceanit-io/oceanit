import React, { useContext, useRef } from "react";
import s from "../styles/skills.module.css";
import { ScrollContext } from "../utils/scroll-observer";
import sombraIzq from "../public/images/sombreado-izq.png";
import sombraDer from "../public/images/sombreado-der.png";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const opacityForBlock = (sectionProgress, blockNo) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

const bgColorForBlock = (sectionProgress, blockNo) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return "#FFC10E";
  return "transparent";
};

const Skills = () => {
  const { t } = useTranslation("");
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef(null);

  const numOfPages = 3;
  let progress = 0;

  const { current: elContainer } = refContainer;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;

    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <>
      <div className="w-full h-24 relative before:w-full before:h-24 before:absolute before:bg-gradient-to-t before:from-[#0038B8]">
        <div className="absolute top-[500px] left-0">
          <Image src={sombraIzq} />
        </div>
        <div className="absolute top-[1500px] left-0">
          <Image src={sombraIzq} />
        </div>
        <div className="absolute top-0 right-0">
          <Image src={sombraDer} />
        </div>
        <div className="absolute top-[1000px] right-0">
          <Image src={sombraDer} />
        </div>
      </div>
      <div
        ref={refContainer}
        className="bg-[#001138] text-white border-t-gray-400 border-t border-b"
      >
        <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
          <div className="leading-[1.50] z-20">
            <div
              className={`${s.skillText}`}
              style={{
                opacity: opacityForBlock(progress, 0),
              }}
            >
              {t("TextSkills1")}{" "}
              <span className="bg-[#FFC10E] text-gray-900">
                {t("TextSkills2")}
              </span>
            </div>
            <span
              className={`${s.skillText} inline-block after:content-['_']`}
              style={{
                opacity: opacityForBlock(progress, 1),
              }}
            >
              {t("TextSkills3")}{" "}
              <span className="bg-[#FFC10E] text-gray-900">
                {t("TextSkills4")}
              </span>
            </span>
            <span
              className={`${s.skillText} inline-block`}
              style={{
                opacity: opacityForBlock(progress, 2),
              }}
            >
              {t("TextSkills5")}{" "}
              <span className="bg-[#FFC10E] text-gray-900">
                {t("TextSkills6")}
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
