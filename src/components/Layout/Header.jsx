import React, { useState } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import {

  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

import { IoIosArrowDown } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { categoriesData } from "./../../static/data";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { useTranslation } from "react-i18next";
import { Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import LanguageIcon from '@mui/icons-material/Language';
import logoVi from '../../Assests/images/vietnamese.png';
import logoUs from '../../Assests/images/us.png';
import Sidebar from "./Siderbar";
function Header({ activeHeading }) {

  const { t } = useTranslation();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { isSeller } = useSelector((state) => state.seller);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { allProducts } = useSelector((state) => state.products);

   const categoriesData = [
    {
      id: 1,
      title: t("category.Computers_and_Laptops"),
      icon:'Computer',
      subTitle: "",
      image_Url:
        "https://cdn.shopify.com/s/files/1/1706/9177/products/NEWAppleMacbookProwithM1ProChip14InchLaptop2021ModelMKGQ3LL_A_16GB_1TBSSD_custommacbd.jpg?v=1659592838",
    },
    {
      id: 2,
      title: t("category.Cosmetics_and_Body_Care"),
      icon:'Comestic',
      subTitle: "",
      image_Url:
        "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-07/kosme1.png",
    },
    {
      id: 3,
      title: t("category.Accessories"),
      icon:'Accessory',
      subTitle: "",
      image_Url:
        "https://img.freepik.com/free-vector/ordering-goods-online-internet-store-online-shopping-niche-e-commerce-website-mother-buying-babies-clothes-footwear-toys-infant-accessories_335657-2345.jpg?w=2000",
    },
    {
      id: 4,
      title: t("category.Clothes"),
      icon:'Cloth',
  
      subTitle: "",
      image_Url:
        "https://www.shift4shop.com/2015/images/industries/clothing/clothing-apparel.png",
    },
    {
      id: 5,
      title: t("category.Shoes"),
      icon:'Shoe',
  
      subTitle: "",
      image_Url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvBQPQMVNRd6TtDkGs2dCri0Y-rxKkFOiEWw&usqp=CAU",
    },
    {
      id: 6,
      title: t("category.Gifts"),
      icon:'Gift',
      subTitle: "",
      image_Url:
        "https://securecdn.pymnts.com/wp-content/uploads/2014/11/Gifts-Photo-700x489.jpg",
    },
    {
      id: 7,
      title:t("category.Pet_Care"),
      icon:'Pet',
  
      subTitle: "",
      image_Url: "https://cdn.openpr.com/T/c/Tc15444071_g.jpg",
    },
    {
      id: 8,
      icon:'Mobile',
      title:t("category.Mobile_and_Tablets"),
      subTitle: "",
      image_Url:
        "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mpwp3tua-apple-iphone-14-256gb-mavi-mpwp3tua-637986832343472449.jpg",
    },
    {
      id: 9,
      title:t("category.Music_and_Gaming"),
      icon:'Gaming',
      subTitle: "",
      image_Url:
        "https://static.vecteezy.com/system/resources/previews/011/996/555/original/3d-black-headphone-illustration-ecommerce-icon-png.png",
    },
    {
      id: 10,
      title: t("category.Others"),
      icon:'Other',
  
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
    {
      id: 11,
      title: "Sofa",
      icon:'Sofa',
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
    {
      id: 12,
      title: "TV Cabinet",
      icon:'TVCabinet',
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
    {
      id: 13,
      title: "Dining",
      icon:'Dining',
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
    {
      id: 14,
      title: "Wordrobe",
      icon:'Wordrobe',
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
    {
      id: 15,
      title: "Bed",
      icon:'Bed',
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
    {
      id: 16,
      title: "Dressing Table",
      icon:'DressingTable',
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
    {
      id: 17,
      title: "Door",
      icon:'Door',
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
    {
      id: 18,
      title: "Divan",
      icon:'Divan',
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
    {
      id: 19,
      title: "Kitchen",
      icon:'Kitchen',
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
    {
      id: 20,
      title: "Lamp",
      icon:'Lamp',
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
    {
      id: 21,
      title: "Office",
      icon:'Office',
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
    {
      id: 22,
      title: "Reading Table",
      icon:'ReadingTable',
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
    {
      id: 23,
      title: "Matress",
      icon:'Mattress',
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
    {
      id: 23,
      title: "Chest Drawers",
      icon:'ChestDrawer',
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
    {
      id: 24,
      title: "Windows",
      icon:'Windows',
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
    {
      id: 25,
      title: "Miscellaneous",
      icon:'Miscellaneous',
      subTitle: "",
      image_Url:
        "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
  ];
  const limitedCategoriesData = categoriesData.slice(0, 10);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [language, setLanguage] = useState('vi'); // Mặc định là tiếng Anh
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  const changeLanguage = (lng, index) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
    setSelectedIndex(index);
    handleClose();
  };


  const handleSearchChange = (e) => {
    const term = e.target.value;
    if (term.length == 0) {
      setSearchData(null);
      setSearchTerm(term);
      return;
    }
    setSearchTerm(term);
    const filteredProducts =
      allProducts &&
      allProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };
  const languageMap = {
    en: 'English',
    vi: 'Vietnamese',
  };

  const flagMap = {
    en: logoUs,
    vi: logoVi,
  };
  // console.log("search term ", searchTerm);
  // console.log("search data ", searchData);

  // console.log("check ", productData);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });
  return (
    <>
      <div className={`${styles.section} `}>
        <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between ">
          <div>
            <Link to="/">
              <img
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt="logo"
                className="w-[100px]"
                style={{ filter: "brightness(0) invert(0)" }}

              />
            </Link>
          </div>
          {/* search box 
                      // ! use relative class to customize the position of elements in the search box
  
                  */}
          <div className="w-[50%] ">
            <div className={`w-full h-full flex items-center justify-between gap-4`}>
              <div className="w-[100%] relative">
                <form action="#" className="h-full ">
                  <input
                    type="text"
                    className="search-input pl-5 h-[48px] w-full border border-qgray-border bg-white flex-1 rounded-[10px] focus:border-[#22bba7] focus:ring-2 focus:ring-[#22bba7] focus:outline-none transition-all duration-300"
                    placeholder={t('nav.seachProduct')}
                    onChange={handleSearchChange}
                    value={searchTerm}
                  />
                </form>
                {searchData && searchData.length !== 0 ? (
                  <div className="absolute min-h-[30vh] min-w-full bg-white shadow-3xl z-[1000] p-4 mt-2 rounded-[10px]">
                    {searchData &&
                      searchData.map((i, index) => {
                        return (
                          <Link to={`/product/${i._id}`}>
                            <div className="w-full flex items-start py-3 hover:bg-[#ebeff4] rounded-[10px] shadow-2xl border-neutral-400 mb-2 p-2 ">
                              <img
                                src={i.images[0].url}
                                alt=""
                                className="w-[40px] h-[40px] mr-[10px]"
                              />
                              <h1>{i.name}</h1>
                            </div>
                          </Link>
                        );
                      })}
                  </div>
                ) : null}
              </div>

              <div className="h-[48px]">
                <button
                  className="w-[93px] h-full text-sm font-600
                bg-[#22bba7] text-white rounded-[10px]"
                  type="button"
                >
                  {t('nav.search')}
                </button>
              </div>
            </div>


          </div>
          <div className={`${styles.button}`}>
            <Link
              to={
                user?.role === "Admin"
                  ? "/admin/dashboard"
                  : isSeller
                    ? "/dashboard"
                    : "/shop-create"
              }
            >
              <h1 className="text-[#fff] flex items-center">
                {user?.role === "Admin"
                  ? "Admin Dashboard"
                  : isSeller
                    ? t('nav.goDashboard')
                    : t('nav.becomeSeller')}
              </h1>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`${active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
          } transition hidden 800px:flex items-center justify-between w-full bg-[#22bba7] h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.normalFlex} justify-between`}
        >
          {/*Categories*/}

          <div
            onMouseEnter={() => setDropDown(true)} // Hiển thị dropdown khi hover vào
            onMouseLeave={() => setDropDown(false)} // Ẩn dropdown khi rời chuột
            className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block"
          >
            <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
            <button className="h-full w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-medium select-none rounded-t-md">
            {t("category.allCategory")}
            </button>
            <IoIosArrowDown
              size={20}
              className="absolute right-2 top-4 cursor-pointer"
              onClick={() => setDropDown(!dropDown)}
            />
            {dropDown && (
              <div
                className="h-[500px]
             overflow-hidden transition-height duration-300"
              >
                <DropDown
                  categoriesData={limitedCategoriesData}
                  setDropDown={setDropDown}
                />
              </div>
            )}
          </div>

          {/*nav items*/}
          <div className={`${styles.normalFlex}`}>
            <Navbar active={activeHeading} />
          </div>

          <div className="flex">
            <div className={`${styles.normalFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenWishlist(true)}
              >
                <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%" />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {wishlist && wishlist.length}
                </span>
              </div>
            </div>

            <div className={`${styles.normalFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenCart(true)}
              >
                <AiOutlineShoppingCart
                  size={30}
                  color="rgb(255 255 255 / 83%"
                />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {cart && cart?.length}
                </span>
              </div>
            </div>

            <div className={`${styles.normalFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenWishlist(true)}
              >
                {isAuthenticated ? (
                  <Link to="/profile">
                    <img
                      src={user.avatar?.url}
                      className="w-[35px] h-[35px] rounded-full"
                      alt=""
                    />
                  </Link>
                ) : (
                  <Link to="/login">
                    <CgProfile size={30} color="rgb(255 255 255 / 83%" />
                  </Link>
                )}
              </div>
            </div>
            {/* // change language */}
            <div className="relative inline-block">
              <div
                aria-controls="language-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className="bg-white text-black px-4 py-2 rounded cursor-pointer flex items-center shadow-md"
              >
                <LanguageIcon className="mr-2" />
                {languageMap[language]} <ArrowDropDown className="ml-2" />
              </div>
              <Menu
                id="language-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    borderRadius: '10px',
                    marginTop: '10px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                  },
                }}
              >
                {Object.keys(languageMap).map((lang, index) => (
                  <MenuItem
                    key={lang}
                    onClick={() => changeLanguage(lang, index)}
                    selected={index === selectedIndex}

                  >
                    <ListItemIcon>
                      <img src={flagMap[lang]} alt={languageMap[lang]} className="w-6 h-6" />
                    </ListItemIcon>
                    <ListItemText primary={languageMap[lang]} />
                  </MenuItem>
                ))}
              </Menu>
            </div>


            {/* cart popup */}
            {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

            {/* wishlist popup */}
            {openWishlist ? (
              <Wishlist setOpenWishlist={setOpenWishlist} />
            ) : null}
          </div>
          {/*nav*/}
        </div>
      </div>

      {/* mobile header */}
      <div
        className={`${active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
          }
          w-full h-[60px] bg-[#fff] z-50 top-0 left-0 shadow-sm 800px:hidden`}
      >
        <div className="w-full flex items-center justify-between">
          {/* <div>
            <BiMenuAltLeft
              size={40}
              className="ml-4"
              onClick={() => setOpen(true)}
            />
          </div> */}
          <div>
            <div
              className=" ml-[20px]"
              onClick={() => setOpen(true)}
            >
              <BiMenuAltLeft size={30} />
            
            </div>
          </div>
          <div>
            <Link to="/">
              <img
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt=""
                className="mt-3 cursor-pointer"
              />
            </Link>
          </div>
          <div>
            <div
              className="relative mr-[20px]"
              onClick={() => setOpenCart(true)}
            >
              <AiOutlineShoppingCart size={30} />
              <span class="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                {cart && cart.length}
              </span>
            </div>
          </div>
        </div>
        {/* header sidebar */}
        {/* {open && (
          <div className="fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0">
            <div className="fixed w-[60%] bg-[#fff] h-screen top-0 left-0 z-10">
              <div className="w-full justify-between flex pr-3">
                <div>
                  <div className="relative mr-[15px]">
                    <AiOutlineHeart size={30} className="mt-5 ml-3" />
                    <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                      1
                    </span>
                  </div>
                </div>
                <RxCross1
                  size={30}
                  className="ml-4 mt-5"
                  onClick={() => setOpen(false)}
                />
              </div>

              <div className="my-8 w-[92%] m-auto h-[40px] relative]">
                <input
                  type="search"
                  placeholder="Search Product..."
                  className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                {searchData && searchTerm.length() > 0 && (
                  <div className="absolute bg-[#fff] z-10 shadow w-full left-0 p-3">
                    {searchData.map((i) => {
                      const d = i.name;

                      const Product_name = d.replace(/\s+/g, "-");
                      return (
                        <Link to={`/product/${Product_name}`}>
                          <div className="flex items-center">
                            <img
                              src={i.image_Url[0]?.url}
                              alt=""
                              className="w-[50px] mr-2"
                            />
                            <h5>{i.name}</h5>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
              <Navbar active={activeHeading} />
              <div className={`${styles.button} ml-4 !rounded-[4px]`}>
                {user?.role == "Admin" ? (
                  <Link to="/admin/dashboard">
                    <h1 className="text-[#fff] flex items-center">
                      Admin Dashboard <IoIosArrowForward className="ml-1" />
                    </h1>
                  </Link>
                ) : (
                  <Link to="/shop-create">
                    <h1 className="text-[#fff] flex items-center">
                      Become Seller <IoIosArrowForward className="ml-1" />
                    </h1>
                  </Link>
                )}
              </div>
              <div className="flex w-full justify-center">
                {isAuthenticated ? (
                  <div>
                    <Link to="/profile">
                      <img
                        src={user.avatar?.url}
                        alt=""
                        className="w-[60px] h-[60px] rounded-full border-[3px] border-[#0eae88]"
                      />
                    </Link>
                  </div>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-[18px] pr-[10px] text-[#000000b7]"
                    >
                      Login /
                    </Link>
                    <Link
                      to="/sign-up"
                      className="text-[18px] text-[#000000b7]"
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )} */}

        {open ? <Sidebar 
        
        setOpen={setOpen}
        searchTeam={searchTerm}
        handleSearchChange={handleSearchChange}
        searchData={searchData}
        active={activeHeading}
        /> : null}

        {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

      </div>
    </>
  );
}

export default Header;