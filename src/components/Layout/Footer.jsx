import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";


import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  const footerProductLinks = [
    {
      name: t("footer.company_section.about_us"),
      link: "/about",
    },
    {
      name: t("footer.company_section.careers"),
      link: "/carrers",
    },
    {
      name: t("footer.company_section.store_locations"),
    },
    {
      name: t("footer.company_section.our_blog"),
    },
    {
      name: t("footer.company_section.reviews"),
    },
  ];

  const footercompanyLinks = [
    {
      name: t("footer.shop_section.game_video"),
    },
    {
      name:  t("footer.shop_section.phone_tablets"),
    },
    {
      name:  t("footer.shop_section.computers_laptops"),
    },
    {
      name:  t("footer.shop_section.sport_watches"),
    },
    {
      name:  t("footer.shop_section.events"),
    },
  ];

  const footerSupportLinks = [
    {
      name:  t("footer.support_section.faq"),
    },
    {
      name:  t("footer.support_section.reviews"),
    },
    {
      name:  t("footer.support_section.contact_us"),
    },
    {
      name:  t("footer.support_section.shipping"),
    },
    {
      name:  t("footer.support_section.live_chat"),
    },
  ];

  return (
    <div className="bg-[#000] text-white">
      {/* //TODO: The above Part, if the application is on mobile screen, the items will have a maximum width.
      //TODO: otherwise if it is on a large screen of 768px, the items will have the flex attribute. */}

      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#22bba7] py-7">
        {/* //TODO: if the application is on mobile screen, the h1 tag will have a width attribute according to the content, but 
        //TODO: on screens larger than 768px, it will have a size that takes up 2/5 of the width of the surrounding div tag.  */}

        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-[#56d879]">  {t("footer.subscribe_section.subscribe")}</span> {t("footer.subscribe_section.sub-subscribe")}
          <br />
          {t("footer.subscribe_section.eventsAndOffers")}
        </h1>
        <div>
          <input
            type="text"
            required
            placeholder={t("footer.subscribe_section.input_placeholder")}
            className="text-gray-800 
                sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none
                "
          />
          <button className="bg-[#56d879] hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md text-white md:w-auto w-full">
            {t("footer.subscribe_section.submit_button")}
          </button>
        </div>
      </div>

      {/* //TODO: text-center <=> text-align: center  */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img
            src="https://shopo.quomodothemes.website/assets/images/logo.svg"
            alt=""
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <br />
          <p>{t("footer.company_section.slogan")}</p>
          <div className="flex items-center mt-[15px]">
            <AiFillFacebook size={25} className="cursor-pointer" />
            <AiOutlineTwitter
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillInstagram
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillYoutube
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
          </div>
        </ul>
        {/* //TODO: use text-start to align all lines evenly to the beginnning of the line. */}
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">{t("footer.company_section.title")}</h1>
          {footerProductLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">   {t("footer.shop_section.title")}</h1>
          {footercompanyLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">   {t("footer.support_section.title")}</h1>
          {footerSupportLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
         text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>{t("footer.footer.rights_reserved")}</span>
        <span>   {t("footer.footer.terms")}</span>
        <div className="sm:block flex items-center justify-center w-full">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
