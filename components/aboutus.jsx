import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
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
                        {t("TextAboutUs6")}
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
                        {t("TextAboutUs7")}
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
                        {t("TextAboutUs8")}
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
                        {t("TextAboutUs9")}
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
