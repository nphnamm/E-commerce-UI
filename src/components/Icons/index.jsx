import React from 'react';
import {
  ComputerIcon,
  CosmeticIcon,
  AccessoryIcon,
  DefaultIcon,
} from './icons'; // Đường dẫn tương đối đến file icons.js

const iconMap = {
  Computer: <ComputerIcon />,
  Comestic: <CosmeticIcon />,
  Accessory: <AccessoryIcon />,
};

const Categories = () => (
  <div className="w-full categories-items">
    <div className="grid xl:grid-cols-8 sm:grid-cols-4 grid-cols-2 gap-10 mb-[46px]">
      {categoriesData.map((category) => (
        <div
          key={category.id}
          className="item w-full group cursor-pointer"
        >
          <div className="w-full flex justify-center">
            <div className="w-[110px] h-[110px] rounded-full hover:bg-[#e6eeff] bg-[#EEF1F1] group-hover:bg-qh2-green mb-2.5 flex justify-center items-center">
              <span className="text-qblack group-hover:text-white">
                {iconMap[category.icon] || <DefaultIcon />}
              </span>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <p className="text-base text-qblack whitespace-nowrap">
              {category.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
