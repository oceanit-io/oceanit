import React from "react";
import { BsLinkedin, BsInstagram, BsGithub, BsGlobe } from "react-icons/bs";
import { useTranslation } from "next-i18next";

const AboutUs = () => {
  const { t } = useTranslation("");
  return (
    <section
      className={`flex flex-col bg-[#0038B899] pt-20 pb-24 text-3xl md:text-4xl backdrop-blur-md border-t-gray-400 border-t backdrop-filter -mb-24`}
      id="abouts"
    >
      <div className="cotainer mx-auto px-11">
        <p className="leading-normal sm:leading-normal max-w-5xl mx-auto text-3xl sm:text-4xl tracking-tight ">
          <span className="bg-[#FFC10E] text-gray-900">
            <strong>{t("TextAboutUs1")} </strong> {t("TextAboutUs2")}
          </span>

          <span className="text-white"> {t("TextAboutUs3")}</span>
        </p>
      </div>

      <div className="container mx-auto px-11 text-center mt-20">
        <div>
          <h1 className="text-5xl sm:text-6xl font-bold bg-[#FFC10E] text-gray-900 max-w-md mx-auto">
            {t("TextAboutUs4")}
          </h1>
        </div>

        <div className="mt-8 text-2xl sm:text-4xl mx-auto text-white">
          {t("TextAboutUs5")}
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-x-6 gap-y-10">
          <div>
            <div className="relative max-w-sm mx-auto md:max-w-sm mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16 min-h-[500px]">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full flex justify-center">
                    <div className="relative">
                      <img
                        src="/images/gabby3.png"
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
                        {t("TextAboutUs6")}
                      </p>

                      <div className="flex justify-center">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.instagram.com/geaberel/?hl=es"
                          className="mx-2"
                        >
                          <BsInstagram color="gray" size={30} />
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.linkedin.com/in/gabriela-a-fernández-v-b8a2a1165"
                          className="mx-2"
                        >
                          <BsLinkedin color="gray" size={30} />
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/GabbWeb"
                          className="mx-2"
                        >
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
            <div className="relative max-w-sm mx-auto md:max-w-sm mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16 min-h-[500px]">
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
                        {t("TextAboutUs8")}
                      </p>

                      <div className="flex justify-center">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.instagram.com/arisalmarin/?hl=es"
                          className="mx-2"
                        >
                          <BsInstagram color="gray" size={30} />
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.linkedin.com/in/ariana-salazar-marin-578869214/"
                          className="mx-2"
                        >
                          <BsLinkedin color="gray" size={30} />
                        </a>
                        {/* <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href=""
                          className="mx-2"
                        >
                          <BsGithub color="gray" size={30} />
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative max-w-sm mx-auto md:max-w-sm mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16 min-h-[500px]">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full flex justify-center">
                    <div className="relative">
                      <img
                        src="/images/gian.jpg"
                        className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px] max-h-[150px]"
                      />
                    </div>
                  </div>
                  <div className="w-full text-center mt-20">
                    <div className="flex justify-center lg:pt-4 pt-6 pb-0">
                      <div className=" text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-500">
                          Designer Sr.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
                    Gian Olivieri
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
                        {t("TextAboutUs9")}
                      </p>

                      <div className="flex justify-center">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.instagram.com/gianco.ve/"
                          className="mx-2"
                        >
                          <BsInstagram color="gray" size={30} />
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.linkedin.com/in/olivierigian/"
                          className="mx-2"
                        >
                          <BsLinkedin color="gray" size={30} />
                        </a>
                        {/* <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href=""
                          className="mx-2"
                        >
                          <BsGithub color="gray" size={30} />
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative max-w-sm mx-auto md:max-w-sm mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16 min-h-[500px]">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full flex justify-center">
                    <div className="relative">
                      <img
                        src="/images/jarles.png"
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
                    Jarles Sayhare
                  </h3>
                  <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
                    Ceará, Brazil
                  </div>
                </div>
                <div className="mt-6 py-6 border-t border-slate-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4">
                      <p className="font-light leading-relaxed text-slate-600 mb-4 text-sm">
                        {t("TextAboutUs7")}
                      </p>

                      <div className="flex justify-center">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.instagram.com/jarlesy/"
                          className="mx-2"
                        >
                          <BsInstagram color="gray" size={30} />
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.linkedin.com/in/jarlessayhare7/"
                          className="mx-2"
                        >
                          <BsLinkedin color="gray" size={30} />
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/Jarlez"
                          className="mx-2"
                        >
                          <BsGithub color="gray" size={30} />
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://jarlez.github.io/Portfolio/"
                          className="mx-2"
                        >
                          <BsGlobe color="gray" size={30} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative max-w-sm mx-auto md:max-w-sm mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16 min-h-[500px]">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full flex justify-center">
                    <div className="relative">
                      <img
                        src="/images/jocean.png"
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
                    Jocean Ferreira
                  </h3>
                  <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
                    João Pessoa, Brazil
                  </div>
                </div>
                <div className="mt-6 py-6 border-t border-slate-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4">
                      <p className="font-light leading-relaxed text-slate-600 mb-4 text-sm">
                        {t("TextAboutUs10")}
                      </p>

                      <div className="flex justify-center">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.instagram.com/jocean.f/"
                          className="mx-2"
                        >
                          <BsInstagram color="gray" size={30} />
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.linkedin.com/in/jocean-ferreira-544613150/"
                          className="mx-2"
                        >
                          <BsLinkedin color="gray" size={30} />
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/kauen1999?tab=repositories"
                          className="mx-2"
                        >
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
