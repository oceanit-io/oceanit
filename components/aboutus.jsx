import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";

const AboutUs = () => {
  return (
    <section
      className={`flex flex-col bg-[#0038B899] py-20 text-3xl md:text-4xl backdrop-blur-md border-t-gray-400 border-t backdrop-filter`}
    >
      <div className="cotainer mx-auto px-11">
        <p className="leading-normal sm:leading-normal max-w-5xl mx-auto text-3xl sm:text-4xl tracking-tight ">
          <span className="bg-[#FFC10E] text-gray-900">
            <strong>
              Ocean-it es una agencia digital enfocada en Desarrollo Web &
              Marketing Digital{" "}
            </strong>{" "}
            con sede física en Buenos Aires y presencia en toda LATAM, en
            constante crecimiento desde que inició en el año 2020.
          </span>

          <span className="text-white">
            {" "}
            Nuestros productos y servicios comprenden un abanico que nos ha
            posibilitado ser elegidos tanto por emprendedores cómo por medianas
            empresas que han confiado en nuestra labor.
          </span>
        </p>
      </div>

      <div className="container mx-auto px-11 text-center mt-20">
        <div>
          <h1 className="text-5xl sm:text-6xl font-bold bg-[#FFC10E] text-gray-900 max-w-md mx-auto">
            Nuestro Equipo
          </h1>
        </div>
        <div className="mt-2 text-2xl sm:text-4xl mx-auto text-white">
          Conoce Nuestro Dedicado y Creativo Equipo
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 ">
          <div>
            <div className="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full flex justify-center">
                    <div className="relative">
                      <img
                        src="/images/Recurso5.png"
                        className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                      />
                    </div>
                  </div>
                  <div className="w-full text-center mt-20">
                    <div className="flex justify-center lg:pt-4 pt-6 pb-0">
                      <div className=" text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-500">
                          CEO
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
                    Gabriela Fernández
                  </h3>
                  <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
                    Buenos Aires, Argentina
                  </div>
                </div>
                <div className="mt-6 py-6 border-t border-slate-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4">
                      <p className="font-light leading-relaxed text-slate-600 mb-4 text-sm">
                        La CEO de nuestra empresa de servicios digitales es una
                        líder visionaria con una amplia experiencia en el campo
                        de la tecnología y los negocios. Con una mentalidad
                        emprendedora y una fuerte orientación al cliente, ha
                        liderado al equipo en el desarrollo y la implementación
                        de estrategias innovadoras para ayudar a nuestros
                        clientes a alcanzar sus objetivos digitales. Su pasión
                        por la tecnología y su compromiso con el éxito de
                        nuestros clientes la convierten en una valiosa asset
                        para nuestro equipo.
                      </p>

                      <div className="flex justify-center">
                        <a href="" className="mx-2">
                          <BsInstagram color="gray" size={30} />
                        </a>
                        <a href="" className="mx-2">
                          <BsLinkedin color="gray" size={30} />
                        </a>
                        <a href="" className="mx-2">
                          <BsGithub color="gray" size={30} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full flex justify-center">
                    <div className="relative">
                      <img
                        src="/images/69062592.png"
                        className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                      />
                    </div>
                  </div>
                  <div className="w-full text-center mt-20">
                    <div className="flex justify-center lg:pt-4 pt-6 pb-0">
                      <div className=" text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-500">
                          Developer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
                    Ricardo Pla
                  </h3>
                  <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
                    Buenos Aires, Argentina
                  </div>
                </div>
                <div className="mt-6 py-6 border-t border-slate-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4">
                      <p className="font-light leading-relaxed text-slate-600 mb-4 text-sm">
                        Nuestro desarrollador de la empresa es un experto
                        técnico con una amplia experiencia en el desarrollo de
                        software y soluciones digitales. Con una sólida
                        formación en programación y una gran habilidad para
                        trabajar en equipo, ha contribuido significativamente al
                        éxito de nuestros proyectos. Su conocimiento en una
                        variedad de lenguajes de programación y plataformas
                        tecnológicas nos permite ofrecer soluciones altamente
                        personalizadas y eficaces para nuestros clientes.
                        Además, su enfoque en la calidad y la escalabilidad
                        garantiza que nuestros productos y servicios sean
                        sólidos y escalables.
                      </p>

                      <div className="flex justify-center">
                        <a href="" className="mx-2">
                          <BsInstagram color="gray" size={30} />
                        </a>
                        <a href="" className="mx-2">
                          <BsLinkedin color="gray" size={30} />
                        </a>
                        <a href="" className="mx-2">
                          <BsGithub color="gray" size={30} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full flex justify-center">
                    <div className="relative">
                      <img
                        src="/images/ARI-PAGINA.png"
                        className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px] bg-white"
                      />
                    </div>
                  </div>
                  <div className="w-full text-center mt-20">
                    <div className="flex justify-center lg:pt-4 pt-6 pb-0">
                      <div className=" text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-500">
                          Creative Strategist
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
                    Ariana Salazar
                  </h3>
                  <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
                    Buenos Aires, Argentina
                  </div>
                </div>
                <div className="mt-6 py-6 border-t border-slate-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4">
                      <p className="font-light leading-relaxed text-slate-600 mb-4 text-sm">
                        La creative strategist de nuestra empresa es una experta
                        en marketing y diseño con una amplia experiencia en la
                        creación de estrategias y campañas publicitarias
                        exitosas. Con una sólida formación en diseño y una gran
                        habilidad para entender las necesidades y objetivos de
                        nuestros clientes, ella es responsable de diseñar y
                        ejecutar estrategias creativas para ayudar a nuestros
                        clientes a alcanzar sus metas de negocio. Su enfoque en
                        la innovación y la eficacia la convierten en una valiosa
                        asset para nuestro equipo y nuestros clientes.
                      </p>

                      <div className="flex justify-center">
                        <a href="" className="mx-2">
                          <BsInstagram color="gray" size={30} />
                        </a>
                        <a href="" className="mx-2">
                          <BsLinkedin color="gray" size={30} />
                        </a>
                        <a href="" className="mx-2">
                          <BsGithub color="gray" size={30} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full flex justify-center">
                    <div className="relative">
                      <img
                        src="/images/Andreina.png"
                        className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px] max-h-[150px]"
                      />
                    </div>
                  </div>
                  <div className="w-full text-center mt-20">
                    <div className="flex justify-center lg:pt-4 pt-6 pb-0">
                      <div className=" text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-500">
                          Graphic Designer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
                    Andreina Pla
                  </h3>
                  <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
                    Isla de Margarita, Venezuela
                  </div>
                </div>
                <div className="mt-6 py-6 border-t border-slate-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4">
                      <p className="font-light leading-relaxed text-slate-600 mb-4 text-sm">
                        La diseñadora gráfica de nuestra empresa es una artista
                        talentosa con una amplia experiencia en el diseño de
                        medios visuales. Con una sólida formación en diseño
                        gráfico y una gran habilidad para entender las
                        necesidades y objetivos de nuestros clientes, ella es
                        responsable de crear diseños atractivos y efectivos para
                        nuestros proyectos. Su enfoque en la estética y la
                        usabilidad la convierten en una valiosa asset para
                        nuestro equipo y nuestros clientes. Su experiencia en la
                        creación de contenido visual para diferentes medios,
                        desde impresos hasta digitales, hace de ella una valiosa
                        adición para nuestra empresa y nuestros clientes.
                      </p>

                      <div className="flex justify-center">
                        <a href="" className="mx-2">
                          <BsInstagram color="gray" size={30} />
                        </a>
                        <a href="" className="mx-2">
                          <BsLinkedin color="gray" size={30} />
                        </a>
                        <a href="" className="mx-2">
                          <BsGithub color="gray" size={30} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
