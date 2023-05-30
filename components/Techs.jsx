import React from "react";
import Logos from "./logos";
import Logos2 from "./logos2";
import { useTranslation } from "next-i18next";

const Techs = () => {
  const { t } = useTranslation("");
  return (
    <section
      className="bg-white min-h-screen flex flex-col justify-center gap-16 md:gap-28"
      id="tech"
    >
      <div className="flex-1"></div>
      <div className="flex flex-col justiy-center items-center">
        <h3 className="text-4xl sm:text-6xl mb-16 md:mb-28 font-bold text-center px-11 text-[#252525] lg:max-w-[70%]">
          <span>{t("TextTechs1")}</span> <span>{t("TextTechs2")}</span>
        </h3>
        <Logos />
        <Logos2 />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#0038B8] border-t-gray-400 border-t border-b">
        <div className="container mx-auto lg:max-w-[70%] lg:px-10 py-24 text-white">
          <h3 className="text-4xl lg:text-5xl tracking-tight px-10 !leading-[3rem] md:!leading-[5.5rem] pb-9 font-bold text-center">
            <span className="bg-[#FFC10E] text-gray-900">
              {t("TextTechs3")}
            </span>
          </h3>
          <h3 className="text-2xl lg:text-3xl tracking-tight px-10 !leading-[3rem] md:!leading-[3.5rem] pb-9 text-justify">
            {t("TextTechs4")}
          </h3>{" "}
          <h3 className="text-2xl lg:text-3xl tracking-tight px-10 !leading-[3rem] md:!leading-[3.5rem] text-justify">
            {t("TextTechs5")}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Techs;
