import React from "react";
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import logoAzul from "../public/images/logo-oceanit-blue.png";

const FooterMain = () => {
  return (
    <div className="bg-[#001138]">
      <Footer container={true}>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Footer.Brand
                href="#"
                src="https://i.postimg.cc/yNHJGpHP/logo-oceanit-blue.png"
                alt="Oceanit Logo"
                name=""
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              {/* <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Flowbite</Footer.Link>
                  <Footer.Link href="#">Tailwind CSS</Footer.Link>
                </Footer.LinkGroup>
              </div> */}
              <div>
                <Footer.Title title="Síguenos" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="https://www.instagram.com/oceanit.io/">Instagram</Footer.Link>
                  <Footer.Link href="https://github.com/oceanit-io">Github</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Idioma" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Español</Footer.Link>
                  <Footer.Link href="#">Ingles</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Oceantit™" year={2023} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              {/* <Footer.Icon href="#" icon={BsFacebook} /> */}
              <Footer.Icon href="https://www.instagram.com/oceanit.io/" icon={BsInstagram} />
              {/* <Footer.Icon href="#" icon={BsTwitter} /> */}
              <Footer.Icon href="https://github.com/oceanit-io" icon={BsGithub} />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default FooterMain;
