import React from "react";
import Logos from "./logos";
import Logos2 from "./logos2";

const Techs = () => {
  return (
    <section className="bg-white min-h-screen flex flex-col justify-center gap-16 md:gap-28">
      <div className="flex-1"></div>
      <div className="flex flex-col justiy-center items-center">
        <h3 className="text-4xl sm:text-6xl mb-16 md:mb-28 font-bold text-center px-11 text-[#252525] lg:max-w-[70%]">
          <span>Siempre actualizados con las</span>{" "}
          <span>ultimas tecnologias</span>
        </h3>
        <Logos />
        <Logos2 />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#0038B8] border-t-gray-400 border-t border-b">
        <div className="container mx-auto lg:max-w-[70%] lg:px-10 py-24 text-white">
          <h3 className="text-4xl lg:text-5xl tracking-tight px-10 !leading-[3rem] md:!leading-[5.5rem] pb-9 font-bold text-center">
            <span className="bg-[#FFC10E] text-gray-900">
              Nos especializamos en el desarrollo de aplicaciones de alta
              calidad
            </span>
          </h3>
          <h3 className="text-2xl lg:text-3xl tracking-tight px-10 !leading-[3rem] md:!leading-[3.5rem] pb-9 text-justify">
            Utilizando las últimas tecnologías y herramientas de vanguardia.
            Nuestro equipo de desarrolladores es altamente capacitado y utiliza
            lenguajes como JavaScript, Next.js, Flutter y React para crear
            aplicaciones atractivas y fáciles de usar. Además, ofrecemos
            servicios en la nube a través de plataformas como AWS y Google
            Cloud, lo que nos permite brindar soluciones escalables y sólidas
            para nuestros clientes.
          </h3>{" "}
          <h3 className="text-2xl lg:text-3xl tracking-tight px-10 !leading-[3rem] md:!leading-[3.5rem] text-justify">
            En nuestro equipo, entendemos la importancia de entregar productos
            de alta calidad que cumplan y superen las expectativas de nuestros
            clientes. Por eso, nos esforzamos por mantenernos actualizados con
            las últimas tendencias y tecnologías en el mundo del desarrollo de
            aplicaciones. Estamos comprometidos a brindar un servicio
            excepcional y a trabajar de cerca con nuestros clientes para
            asegurarnos de que sus proyectos sean un éxito.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Techs;
