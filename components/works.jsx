import Image from "next/image";
import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from "./work";
import movil from "../public/images/movil.png";
import web from "../public/images/web.png";
import webResponsive from "../public/images/webResponsive.png";
import automatization from "../public/images/automatization.png";
import marketing from "../public/images/marketing.png";
import { useTranslation } from "next-i18next";

const Works = () => {
  const { t } = useTranslation("");
  return (
    <TileWrapper numOfPages={4}>
      <TileBackground>
        <WorkBackground />
      </TileBackground>
      <TileContent>
        <Tile
          page={0}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div className="text-2xl md:text-5xl pt-12 md:pt-0">
                  <div>{t("TextWorks1")}</div>
                  <div className="font-semibold tracking-tight ">
                    {t("TextWorks2")}
                  </div>
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <div className="sm:w-[80%] sm:ml-[28px] sm:mt-24">
                  <Image src={movil} width={432} height={862} alt="Trabajos" />
                </div>
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
      </TileContent>
      <TileContent>
        <Tile
          page={1}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div className="text-xl md:text-5xl pt-9 md:pt-0">
                  <div>{t("TextWorks1")}</div>
                  <div className="font-semibold tracking-tight ">
                    {t("TextWorks3")}
                  </div>
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <div className="hidden sm:block w-[200%] sm:w-[200%] -ml-[145px] sm:-ml-[200px] -mt-[350px] sm:mt-[40px] sm:mb-0">
                  <Image
                    src={web}
                    alt="Trabajos"
                    layout="responsive"
                    width={840}
                    height={1620}
                    quality={100}
                  />
                </div>
                <div className="sm:hidden sm:w-[80%] sm:ml-[28px] sm:mt-24">
                  <Image
                    src={webResponsive}
                    alt="Trabajos"
                    layout="responsive"
                    width={840}
                    height={1620}
                    quality={100}
                  />
                </div>
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
      </TileContent>
      <TileContent>
        <Tile
          page={2}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div className="text-xl md:text-5xl pt-9 md:pt-0">
                  <div>{t("TextWorks1")}</div>
                  <div className="font-semibold tracking-tight ">
                    {t("TextWorks4")}
                  </div>
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <div className="sm:w-[80%] sm:ml-[28px] sm:mt-24">
                  <Image
                    src={marketing}
                    width={840}
                    height={1620}
                    alt="Trabajos"
                    quality={100}
                  />
                </div>
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
      </TileContent>
      <TileContent>
        <Tile
          page={3}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div className="text-xl md:text-5xl">
                  <div>{t("TextWorks1")}</div>
                  <div className="font-semibold tracking-tight ">
                    {t("TextWorks5")}
                  </div>
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <div className="-mt-[140px] sm:-mt-[0px]">
                  <Image
                    src={automatization}
                    width={432}
                    height={862}
                    alt="Trabajos"
                  />
                </div>
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
      </TileContent>
    </TileWrapper>
  );
};

export default Works;
