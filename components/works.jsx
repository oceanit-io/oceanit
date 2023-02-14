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
                <div className="w-[80%] ml-[28px] mt-24">
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
                <div className="w-[225%] -ml-[280px]">
                  <Image src={web} alt="Trabajos" layout="responsive" />
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
                <Image
                  src={marketing}
                  width={432}
                  height={862}
                  alt="Trabajos"
                />
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
                <div className="mb-16 md:mb-0">
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
