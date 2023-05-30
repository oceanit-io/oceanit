import react, { useState } from "react";
import { Navbar, Button } from "flowbite-react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import spanish from "../public/images/espanol.png";
import brasil from "../public/images/brasil.png";

const Nav = () => {
  const { t } = useTranslation("");
  const [fix, setFix] = useState(false);
  const router = useRouter();

  const { locales, locale: activeLocale } = router;

  const otherLocales = locales?.filter(
    (locale) => locale !== activeLocale && locale !== "default"
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
          {otherLocales?.map((locale) => {
            const { pathname, query, asPath } = router;
            return (
              <span
                key={"locale-" + locale}
                className="max-w-[20px] sm:max-w-[30px] ml-2 hidden sm:flex items-center justify-center cursor-pointer"
              >
                <Link
                  href={{ pathname, query }}
                  as={asPath}
                  locale={locale}
                  legacyBehavior
                >
                  {locale === "es" ? (
                    <Image src={spanish} alt="bandera españa" />
                  ) : locale === "br" ? (
                    <Image src={brasil} alt="bandera brasil" />
                  ) : null}
                </Link>
              </span>
            );
          })}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active={true}>
            {t("TextNavbar2")}
          </Navbar.Link>
          <Navbar.Link href="#abouts">{t("TextNavbar3")}</Navbar.Link>
          <Navbar.Link href="#services">{t("TextNavbar4")}</Navbar.Link>
          <Navbar.Link href="#tech">{t("TextNavbar5")}</Navbar.Link>
          {otherLocales?.map((locale) => {
            const { pathname, query, asPath } = router;
            return (
              <span
                key={"locale-" + locale}
                className="pt-2 pb-1 sm:hidden flex items-center justify-center cursor-pointer"
              >
                <Link
                  href={{ pathname, query }}
                  as={asPath}
                  locale={locale}
                  legacyBehavior
                >
                  {locale === "es" ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="flex items-center justify-center max-w-[24px] w-[24px]">
                        <Image src={spanish} alt="bandera españa" />
                      </div>
                      <span>Cambiar a español</span>
                    </div>
                  ) : locale === "br" ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="flex items-center justify-center max-w-[24px] w-[24px]">
                        <Image src={brasil} alt="bandera españa" />
                      </div>
                      <span>Alternar para o idioma Brasileiro</span>
                    </div>
                  ) : null}
                </Link>
              </span>
            );
          })}
          {/* <Navbar.Link href="#testimonials">Testimonios <span className="text-gray-300">- Proximamente</span></Navbar.Link> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
