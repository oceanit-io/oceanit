import react, { useState } from "react";
import { Navbar, Button } from "flowbite-react";

const Nav = () => {
  const [fix, setFix] = useState(false);

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
        <div className="flex md:order-2">
          <Button>Contactanos</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true}>
            Inicio
          </Navbar.Link>
          <Navbar.Link href="/navbars">Nosotros</Navbar.Link>
          <Navbar.Link href="/navbars">Servicios</Navbar.Link>
          <Navbar.Link href="/navbars">Tecnología</Navbar.Link>
          <Navbar.Link href="/navbars">Testimonios</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
