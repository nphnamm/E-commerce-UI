import React, { useEffect, useState } from "react";
import styles from "../../../styles/styles";
import { useSelector } from "react-redux";
import { brandingData, categoriesData } from "../../../static/data";
import IconComponent from "../../Icons";
import { useNavigate } from "react-router-dom";
import { Slider } from "@mui/material";

function valuetext(value) {
  return `${value}°C`;
}
const Category = () => {
  const { allProducts } = useSelector((state) => state.products);
  const [data, setData] = useState([]);
  const filteredCategories = categoriesData.slice(10); // Starting from index 10 (category 11)
  const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng
  const [value, setValue] = useState([20, 37]);

  // Split into two arrays
  const categories1 = filteredCategories.slice(0, 8); // First 8 items
  const categories2 = filteredCategories.slice(8, 16); // Next 8 items

  useEffect(() => {
    const allProductsData = allProducts ? [...allProducts] : [];
    const sortedData = allProductsData?.sort((a, b) => b.sold_out - a.sold_out);
    const firstFive = sortedData && sortedData.slice(0, 5);
    setData(firstFive);
  }, []);
  const handleCategoryClick = (categoryId) => {
    navigate(`/search?category=${categoryId}`); // Điều hướng đến route
  };
  const handleChange = (event, newValue) => {
    setValue(newValue );
  };

  // Chia các category thành nhóm (mỗi nhóm 8 phần tử)

  // console.log('product card', productData);
  return (
    //TODO: if max screen is 1385 when use styles section then screen is 1269 and each div is 253
    <div>
      {/* //TODO: hidden and lg:block -> if screen > sm then div tag will be displayed. */}
      <div className={`${styles.section} hidden sm:block`}>
        {/* //TODO: branding this is a class name apllied to this div  */}
        {/* //TODO: my-12 is used to margin top and bottom 48px; rounded-md = 0.375rem = 6px; */}
        {/* //TODO: Justify-between is used to align four elements  */}

        <div className={`branding my-12 flex justify-between w-full shadow-sm bg-white p-5 rounded-md shadow-xl`}>
          {brandingData && brandingData.map((i, index) => (
            // TODO: items-start is used to align item following vertical <=> aligins-item:start # justify-content:center
            <div className='flex items-start ' key={index}>
              {i.icon}
              <div className='px-3'>
                {/* //TODO: text-sm : font-size: 0.75rem = 12px; line-height:1rem = 16px */}
                {/* //TODO: text-base : font-size: 1rem = 16px; line-height:1.5rem = 24px */}

                <h3 className='font-bold text-sm md:text-base'>{i.title}</h3>
                <p className='text-xs md:test-sm'>{i.Description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.section}  mb-12`}>
        <div className={`${styles.heading}`}>
          <h1 className="font-extrabold">My Category</h1>
        </div>
        <>
          <div className="categories-section-wrapper w-full">
            <div className="container-x mx-auto">
              <div className="w-full categories-iems">

                <div className="grid xl:grid-cols-8 sm:grid-cols-4 grid-cols-2 gap-10 mb-[46px]">
                  {categories1.map((category) => (
                    <div key={category.id} className="item w-full group cursor-pointer" 
                    onClick={() => handleCategoryClick(category.title)} // Gọi hàm điều hướng
                    >
                      <div className="w-full flex justify-center ">
                        <div className="w-[80px] h-[80px] rounded-full bg-[#EEF1F1] group-hover:bg-qh2-green mb-2.5 flex justify-center items-center group-hover:bg-[#e6eeff] group-hover:text-[#e6eeff]">
                          <span className="text-black ">
                            {/* Replace with your IconComponent */}
                          <IconComponent name={category.icon}/>
                          </span>
                        </div>
                      </div>
                      <div className="w-full flex justify-center">
                        <p className="text-base text-qblack whitespace-nowrap ">
                          {category.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid xl:grid-cols-8 sm:grid-cols-4 grid-cols-2 gap-10">
                  {categories2.map((category) => (
                    <div key={category.id} className="item w-full group cursor-pointer"  
                    onClick={() => handleCategoryClick(category.title)} // Gọi hàm điều hướng

                    >
                      <div className="w-full flex justify-center">
                      <div className="w-[80px] h-[80px] rounded-full bg-[#EEF1F1] group-hover:bg-qh2-green mb-2.5 flex justify-center items-center group-hover:bg-[#e6eeff] group-hover:text-[#e6eeff]">
                      <span className="text-black ">
                            {/* Replace with your IconComponent */}
                            <IconComponent name={category.icon}/>

                          </span>
                        </div>
                      </div>
                      <div className="w-full flex justify-center">
                        <p className="text-base text-qblack whitespace-nowrap ">
                          {category.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
        <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
      </div>
    </div>
  );
};

export default Category;
