import React, { useEffect, useState } from "react";
import styles from "../../../styles/styles";
import { useSelector } from "react-redux";
import { categoriesData } from "../../../static/data";
import IconComponent from "../../Icons";
import { useNavigate } from "react-router-dom";
import { Slider } from "@mui/material";
import { useTranslation } from "react-i18next";

function valuetext(value) {
  return `${value}°C`;
}
const Category = () => {
  const { t } = useTranslation();

  const categoriesData = [
    {
      id: 1,
      title: "Computers and Laptops",
      icon:'Computer',
      subTitle: "",
      image_Url:
        "https://cdn.shopify.com/s/files/1/1706/9177/products/NEWAppleMacbookProwithM1ProChip14InchLaptop2021ModelMKGQ3LL_A_16GB_1TBSSD_custommacbd.jpg?v=1659592838",
    },
    {
      id: 2,
      title: "Cosmetics and body care",
      icon:'Comestic',
      subTitle: "",
      image_Url:
        "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-07/kosme1.png",
    },
    {
      id: 3,
      title: "Accesories",
      icon:'Accessory',
      subTitle: "",
      image_Url:
        "https://img.freepik.com/free-vector/ordering-goods-online-internet-store-online-shopping-niche-e-commerce-website-mother-buying-babies-clothes-footwear-toys-infant-accessories_335657-2345.jpg?w=2000",
    },
    {
      id: 4,
      title: "Cloths",
      icon:'Cloth',
  
      subTitle: "",
      image_Url:
        "https://www.shift4shop.com/2015/images/industries/clothing/clothing-apparel.png",
    },
    {
      id: 5,
      title: "Shoes",
      icon:'Shoe',
  
      subTitle: "",
      image_Url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvBQPQMVNRd6TtDkGs2dCri0Y-rxKkFOiEWw&usqp=CAU",
    },
    {
      id: 6,
      title: "Gifts",
      icon:'Gift',
      subTitle: "",
      image_Url:
        "https://securecdn.pymnts.com/wp-content/uploads/2014/11/Gifts-Photo-700x489.jpg",
    },
    {
      id: 7,
      title: "Pet Care",
      icon:'Pet',
  
      subTitle: "",
      image_Url: "https://cdn.openpr.com/T/c/Tc15444071_g.jpg",
    },
    {
      id: 8,
      icon:'Mobile',
      title: "Mobile and Tablets",
      subTitle: "",
      image_Url:
        "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mpwp3tua-apple-iphone-14-256gb-mavi-mpwp3tua-637986832343472449.jpg",
    },
    {
      id: 9,
      title: "Music and Gaming",
      icon:'Gaming',
      subTitle: "",
      image_Url:
        "https://static.vecteezy.com/system/resources/previews/011/996/555/original/3d-black-headphone-illustration-ecommerce-icon-png.png",
    },
    {
      id: 10,
      title: "Others",
      icon:'Other',
  
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
    {
      id: 11,
      title: t('category.Sofa'),
      icon:'Sofa',
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
    {
      id: 12,
      title: t('category.TV_Cabinet'),
      icon:'TVCabinet',
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
    {
      id: 13,
      title: t('category.Dining'),
      icon:'Dining',
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
    {
      id: 14,
      title: t('category.Wardrobe'),
      icon:'Wordrobe',
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
    {
      id: 15,
      title:t('category.Bed'),
      icon:'Bed',
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
    {
      id: 16,
      title: t('category.Dressing_Table'),
      icon:'DressingTable',
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
    {
      id: 17,
      title: t('category.Door'),
      icon:'Door',
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
    {
      id: 18,
      title: t('category.Divan'),
      icon:'Divan',
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
    {
      id: 19,
      title: t('category.Kitchen'),
      icon:'Kitchen',
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
    {
      id: 20,
      title:t('category.Lamp'),
      icon:'Lamp',
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
    {
      id: 21,
      title: t('category.Office'),
      icon:'Office',
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
    {
      id: 22,
      title: t('category.Reading_Table'),
      icon:'ReadingTable',
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
    {
      id: 23,
      title: t('category.Mattress'),
      icon:'Mattress',
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
    {
      id: 23,
      title: t('category.Chest_Drawers'),
      icon:'ChestDrawer',
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
    {
      id: 24,
      title: t('category.Windows'),
      icon:'Windows',
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
    {
      id: 25,
      title: t('category.Miscellaneous'),
      icon:'Miscellaneous',
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
  ];
  const { allProducts } = useSelector((state) => state.products);
  const [data, setData] = useState([]);
  const filteredCategories = categoriesData.slice(10); // Starting from index 10 (category 11)
  const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng
  const [value, setValue] = useState([20, 37]);
  const brandingData = [
    {
      id: 1,
      title: t('brands.Free_Shipping'),
      Description: t('brands.From_all_orders_over_100$'),
      icon: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1H5.63636V24.1818H35"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
          <path
            d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
          <path
            d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
          <path
            d="M34.9982 1H11.8164V18H34.9982V1Z"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
          <path
            d="M11.8164 7.18164H34.9982"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
        </svg>
      ),
    },
    {
      id: 2,
      title: t('brands.Daily_Surprise_Offers'),
      Description: t('brands.Save_up_to_25%_off'),
      icon: (
        <svg
          width="32"
          height="34"
          viewBox="0 0 32 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31 17.4502C31 25.7002 24.25 32.4502 16 32.4502C7.75 32.4502 1 25.7002 1 17.4502C1 9.2002 7.75 2.4502 16 2.4502C21.85 2.4502 26.95 5.7502 29.35 10.7002"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
          ></path>
          <path
            d="M30.7 2L29.5 10.85L20.5 9.65"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
        </svg>
      ),
    },
    {
      id: 4,
      title: t('brands.Affordable_Prices'),
      Description: t('brands.Get_Factory_direct_price'),
      icon: (
        <svg
          width="32"
          height="35"
          viewBox="0 0 32 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 13H5.5C2.95 13 1 11.05 1 8.5V1H7"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
          ></path>
          <path
            d="M25 13H26.5C29.05 13 31 11.05 31 8.5V1H25"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
          ></path>
          <path
            d="M16 28V22"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
          ></path>
          <path
            d="M16 22C11.05 22 7 17.95 7 13V1H25V13C25 17.95 20.95 22 16 22Z"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
          <path
            d="M25 34H7C7 30.7 9.7 28 13 28H19C22.3 28 25 30.7 25 34Z"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
        </svg>
      ),
    },
    {
      id: 5,
      title: t('brands.Secure_Payments'),
      Description: t('brands.100%_protected_payments'),
      icon: (
        <svg
          width="32"
          height="38"
          viewBox="0 0 32 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.6654 18.667H9.33203V27.0003H22.6654V18.667Z"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
          <path
            d="M12.668 18.6663V13.6663C12.668 11.833 14.168 10.333 16.0013 10.333C17.8346 10.333 19.3346 11.833 19.3346 13.6663V18.6663"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
          <path
            d="M31 22C31 30.3333 24.3333 37 16 37C7.66667 37 1 30.3333 1 22V5.33333L16 2L31 5.33333V22Z"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
        </svg>
      ),
    },
  ];



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
    setValue(newValue);
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
          <h1 className="font-extrabold">{t('target.myCategory')}</h1>
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
                            <IconComponent name={category.icon} />
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
                            <IconComponent name={category.icon} />

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
  
      </div>
    </div>
  );
};

export default Category;
