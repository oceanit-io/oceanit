import Image from "next/image";
import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from "./work";
import movil from "../public/images/movil.png";
import web from "../public/images/web.png";
import automatization from "../public/images/automatization.png";
import marketing from "../public/images/marketing.png";

const Works = () => {
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
                  <div>Ofrecemos</div>
                  <div className="font-semibold tracking-tight ">
                    Desarrollo de aplicaciones móviles personalizadas
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
                  <div>Ofrecemos</div>
                  <div className="font-semibold tracking-tight ">
                    Desarrollo de páginas web atractivas y fáciles de usar.
                  </div>
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <div className="w-[150%] sm:w-[200%] -ml-[70px] sm:-ml-[200px] -mt-[200px] sm:mt-[40px] sm:mb-0">
                  <Image
                    src={web}
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
                  <div>Ofrecemos</div>
                  <div className="font-semibold tracking-tight ">
                    Marketing digital efectivo para aumentar su alcance y
                    visibilidad en línea.
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
                  <div>Ofrecemos</div>
                  <div className="font-semibold tracking-tight ">
                    Automatización de procesos para mejorar la eficiencia de su
                    negocio.
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
