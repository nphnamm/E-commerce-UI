import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import styles from "../../styles/styles";


const Sidebar = ({setOpen,searchTerm,handleSearchChange,searchData,active }) => {
  
    const { isAuthenticated, user } = useSelector((state) => state.user);

    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      setIsVisible(true); // Bật trạng thái hiển thị khi component được mount
    }, []);
    const handleClose = () => {
        setIsVisible(false); // Tắt trạng thái hiển thị
        setTimeout(() => {
            setOpen(false); // Đóng component sau khi animation kết thúc
        }, 300); // Thời gian khớp với animation
      };
    
    return (
        <div className="fixed top-0 right-0 w-full bg-[#0000004b] h-screen z-10">
       <div className={`fixed top-0 left-0 h-full w-[80%] 800px:w-[25%] bg-white flex-col overflow-y-scroll justify-between shadow-sm transition-transform duration-300 
      ${isVisible ? "translate-x-0" : "-translate-x-full"}
      `}
      >
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
                        onClick={() => handleClose(false)}
                    />
                </div>

                <div className="my-8 w-[92%] m-auto">
                <input
                  type="search"
                  placeholder="Search Product..."
                  className="h-[40px] w-full px-2  border-[2px] rounded-md focus:border-[#22bba7]"
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
                <Navbar active={active}/>
                <div className={`${styles.buttonUnsetWidth} hover:bg-[#0eae88] group  ml-4 rounded-[6px]`}>
                    {user?.role == "Admin" ? (
                        <Link to="/admin/dashboard ">
                            <h1 className="text-[#fff]   flex items-center">
                                Admin Dashboard <IoIosArrowForward className="ml-1" />
                            </h1>
                        </Link>
                    ) : (
                        <Link to="/shop-create">
                            <h1 className="text-[#fff]   flex items-center">
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
    );
}
export default Sidebar;
