import React from "react";
import styles from "../../styles/styles";
import { useNavigate } from "react-router-dom";
import Icon from "../Icon/Icon";
import { useTranslation } from "react-i18next";
function DropDown({ categoriesData, setDropDown }) {
  const navigate = useNavigate();
  const submitHandle = (i) => {
    navigate(`/products?category=${i.title}`);
    setDropDown(false);
    window.location.reload();
  };
  const  { t } = useTranslation();

  const categoriesItems = [
    { id: 1, title: t('categories.computers') },
    { id: 2, title: t('categories.cosmetics') },
    { id: 3, title: t('categories.accessories') },
    { id: 4, title: t('categories.cloths') },
    { id: 5, title: t('categories.shoes') },
    { id: 6, title: t('categories.gifts') },
    { id: 7, title: t('categories.petCare') },
    { id: 8, title: t('categories.mobile') },
    { id: 9, title: t('categories.music') },
    { id: 10, title: t('categories.others') }
  ];
  return (
    <div className="pb-4 w-[270px] bg-[#fff] absolute z-30 rounded-b-md shadow-sm">
   
      {categoriesItems &&
        categoriesItems.map((i, index) => (
          <div
            key={index}
            className={`${styles.normalFlex}`}
            onClick={() => submitHandle(i)}
          >
            {/* <img
              src={i.image_Url}
              style={{
                width: "25px",
                height: "25px",
                objectFit: "contain",
                marginLeft: "10px",
                userSelect: "none",
              }}
              alt=""
            /> */}
            <div className="ml-[10px]">
              <Icon name={i?.icon} size={28}/>

            </div>
            <h3 className="m-3 cursor-pointer select-none">{i.title}</h3>
          </div>
        ))}
    </div>
  );
}

export default DropDown;
