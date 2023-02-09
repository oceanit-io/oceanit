import Head from 'next/head'
import Image from 'next/image'
import img from '../public/images/fondo.png'
import logo from '../public/images/logo-oceanit.png'
import boton1 from '../public/images/boton_1.png'
import boton2 from '../public/images/boton_2.png'
import Masthead from '../components/masthead'
import AboutUs from '../components/aboutus'
import FooterMain from '../components/FooterMain'
import Techs from '../components/Techs'
import Skills from '../components/skills'
import Works from '../components/works'
import Nav from '../components/navbar'
import ContactUs from '../components/contactus'

export default function Home() {
  return (
    <div>
      <Head>
        <title>OceanIT Agency</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <main>
        <Masthead />
        <AboutUs />
        <Skills />
        <Works />
        <Techs />
        <ContactUs />
      </main>
      <FooterMain />
    </div>
  )
}
