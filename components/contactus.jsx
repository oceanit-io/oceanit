import React, { useState, useCallback } from "react";
import Image from "next/image";
import logo from "../public/images/logo-oceanit.png";
import { useTranslation } from "next-i18next";

const ContactUs = () => {
  const { t } = useTranslation("");
  return (
    <div
      className="bg-[#001138] text-white flex flex-col justify-center pt-10 min-h-screen pb-16"
      id="contact"
    >
      <div className="flex-1 flex flex-col justify-center items-center pt-10 lg:pt-6">
        <div className="pb-10">
          <Image src={logo} width={110} height={20} alt="logo oceanit" />
        </div>
        <h2 className="text-5xl font-bold">{t("TextContactUs1")}</h2>
        <form className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]">
          <input
            id="companyName"
            name="companyName"
            required
            maxLength={128}
            type="text"
            placeholder={t("TextContactUs2")}
            className="bg-[#001138] text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
          />
          <input
            type="email"
            id="email"
            name="email"
            required
            maxLength={128}
            placeholder={t("TextContactUs3")}
            className="bg-[#001138] text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
          />
          <textarea
            name="message"
            id="message"
            required
            maxLength={1048576}
            placeholder={t("TextContactUs4")}
            className="bg-[#001138] text-white outline-none border-2 border-white rounded-3xl px-8 py-6 min-h-[16em]"
          ></textarea>
          <div className="text-center mt-10">
            <button
              type="submit"
              className="bg-white text-[#001138] rounded-3xl px-8 py-2"
            >
              {t("TextContactUs5")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
