import React, { useState, useCallback } from "react";
import Image from "next/image";
import logo from "../public/images/logo-oceanit.png";

const ContactUs = () => {
  return (
    <div className="bg-[#001138] text-white flex flex-col justify-center pt-10 min-h-screen">
      <div className="flex-1 flex flex-col justify-center items-center pt-10 lg:pt-6">
        <div className="pb-10">
          <Image src={logo} width={110} height={20} alt="logo oceanit" />
        </div>
        <h2 className="text-5xl font-bold">Contactanos</h2>
        <form className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]">
          <input
            id="companyName"
            name="companyName"
            required
            maxLength={128}
            type="text"
            placeholder="Nombre de la compañia"
            className="bg-[#001138] text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
          />
          <input
            type="email"
            id="email"
            name="email"
            required
            maxLength={128}
            placeholder="Correo Electrónico"
            className="bg-[#001138] text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
          />
          <textarea
            name="message"
            id="message"
            required
            maxLength={1048576}
            placeholder="Información adicional"
            className="bg-[#001138] text-white outline-none border-2 border-white rounded-3xl px-8 py-6 min-h-[16em]"
          ></textarea>
          <div className="text-center mt-10">
            <button
              type="submit"
              className="bg-white text-[#001138] rounded-3xl px-8 py-2"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
