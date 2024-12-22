import React from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar({ active }) {
  // console.log('active', active);
  // console.log('check', navItems);
  // console.log('active',active);
  const { t } = useTranslation();
  const navItems = [
    { id: 0, title: t('nav.home'), path: '/' },
    { id: 1, title: t('nav.bestSelling'), path: '/best-selling' },
    { id: 2, title: t('nav.products'), path: '/products' },
    { id: 3, title: t('nav.events'), path: '/events' },
    { id: 4, title: t('nav.faq'), path: '/faq' },
  ];
  console.log(t('nav.home'));
  return (
    <div className={`block gap-6 p-[24px] 800px:p-0 800px:${styles.normalFlex}`}>
      {navItems &&
        navItems.map((i, index) => (
          <div className="flex  mt-1 hover:shadow-3xl hover:">
            <Link
              to={i.url}
              className={`${active === index + 1
                  ? "text-[#000]"
                  : "text-white"
                }  800px:pb-0 font-[500] cursor-pointer font-[16px] hover:text-[#e6eeff]`}
            >
              {i.title}
            </Link>
          </div>
        ))}
    </div>
  );
}

export default Navbar;
