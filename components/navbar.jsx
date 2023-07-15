import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Navbar, Button } from "flowbite-react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Image from "next/image";
import spanish from "../public/images/espanol.png";
import brasil from "../public/images/brasil.png";
import english from "../public/images/Flag_of_the_United_States.svg.webp";
import Link from "next/link";

const Nav = () => {
  const { t } = useTranslation("");
  const [fix, setFix] = useState(false);
  const router = useRouter();

  const { locales, locale: activeLocale } = router;

  const otherLocales = locales?.filter(
    (locale) => locale === activeLocale && locale !== "default"
  );

  const setFixed = () => {
    if (window.scrollY >= 700) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", setFixed);
  }

  return (
    <div
      className={`fixed z-50 w-full transition ease-in-out delay-150 opacity-${
        fix ? "1" : "0"
      }`}
    >
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://i.postimg.cc/yNHJGpHP/logo-oceanit-blue.png"
            className="mr-3 h-6 sm:h-8"
            alt="Flowbite Logo"
          />
        </Navbar.Brand>
        <div className="flex md:order-2 items-center justify-center">
          <Button>
            {" "}
            <a href="#contact">{t("TextNavbar1")}</a>
          </Button>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button>
                {otherLocales?.map((locale) => {
                  return (
                    <span
                      key={"locale-" + locale}
                      className="max-w-[20px] sm:max-w-[30px] ml-2 hidden sm:flex items-center justify-center cursor-pointer"
                    >
                      {locale === "es" ? (
                        <Image src={spanish} alt="bandera españa" />
                      ) : locale === "br" ? (
                        <Image src={brasil} alt="bandera brasil" />
                      ) : locale === "en" ? (
                        <Image src={english} alt="bandera Estados unidos" />
                      ) : null}
                    </span>
                  );
                })}
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <Link href={"/"} locale={"es"} legacyBehavior>
                        <button
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          <div className="flex items-center justify-center gap-3">
                            <div className="flex items-center justify-center max-w-[24px] w-[24px]">
                              <Image src={spanish} alt="bandera españa" />
                            </div>
                            <span className="text-left">ES</span>
                          </div>
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href={"/"} locale={"en"} legacyBehavior>
                        <button
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          <div className="flex items-center justify-center gap-3">
                            <div className="flex items-center justify-center max-w-[24px] w-[24px]">
                              <Image
                                src={english}
                                alt="bandera Estados unidos"
                              />
                            </div>
                            <span className="text-left">EN</span>
                          </div>
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href={"/"} locale={"br"} legacyBehavior>
                        <button
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          <div className="flex items-center justify-center gap-3">
                            <div className="flex items-center justify-center max-w-[24px] w-[24px]">
                              <Image src={brasil} alt="bandera brasil" />
                            </div>
                            <span className="text-left">BR</span>
                          </div>
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <Menu>
            <Menu.Items>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${active && "bg-blue-500"}`}
                    href="/account-settings"
                  >
                    Account settings
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${active && "bg-blue-500"}`}
                    href="/account-settings"
                  >
                    Documentation
                  </a>
                )}
              </Menu.Item>
              <Menu.Item disabled>
                <span className="opacity-75">
                  Invite a friend (coming soon!)
                </span>
              </Menu.Item>
            </Menu.Items>
          </Menu>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active={true}>
            {t("TextNavbar2")}
          </Navbar.Link>
          <Navbar.Link href="#abouts">{t("TextNavbar3")}</Navbar.Link>
          <Navbar.Link href="#services">{t("TextNavbar4")}</Navbar.Link>
          <Navbar.Link href="#tech">{t("TextNavbar5")}</Navbar.Link>
          <span className="pt-2 pb-1 pl-3 gap-4 sm:hidden flex items-center justify-start cursor-pointer ">
            <Link href={"/"} locale={"es"} legacyBehavior>
              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center justify-center max-w-[24px] w-[24px]">
                  <Image src={spanish} alt="bandera españa" />
                </div>
                <span>ES</span>
              </div>
            </Link>
            <Link href={"/"} locale={"en"} legacyBehavior>
              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center justify-center max-w-[24px] w-[24px]">
                  <Image src={english} alt="bandera españa" />
                </div>
                <span>EN</span>
              </div>
            </Link>
            <Link href={"/"} locale={"br"} legacyBehavior>
              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center justify-center max-w-[24px] w-[24px]">
                  <Image src={brasil} alt="bandera españa" />
                </div>
                <span>BR</span>
              </div>
            </Link>
          </span>

          {/* <Navbar.Link href="#testimonials">Testimonios <span className="text-gray-300">- Proximamente</span></Navbar.Link> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
