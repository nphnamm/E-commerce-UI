import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "../../styles/styles";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../redux/actions/wishlist";
import { addTocart } from "../../redux/actions/cart";

const Wishlist = ({ setOpenWishlist }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Bật trạng thái hiển thị khi component được mount
  }, []);

  const removeFromWishlistHandler = (data) => {
    dispatch(removeFromWishlist(data));
  };

  const addToCartHandler = (data) => {
    const newData = { ...data, qty: 1 };
    console.log("new data", newData);
    dispatch(addTocart(newData));
    setOpenWishlist(false);
  };

  const handleClose = () => {
    setIsVisible(false); // Tắt trạng thái hiển thị
    setTimeout(() => {
      setOpenWishlist(false); // Đóng component sau khi animation kết thúc
    }, 300); // Thời gian khớp với animation
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className={`fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm transition-transform duration-300 
      ${isVisible ? "translate-x-0" : "translate-x-full"}
      `}
      >
        {wishlist && wishlist.length === 0 ? (
          <div className="w-full h-screen flex items-center justify-center ">
            <div className="flex w-full justify-end pt-5 pr-5 fixed top-3 right-3">
              <RxCross1
                size={25}
                className="cursor-pointer"
                onClick={() => setOpenWishlist(false)}
              />
            </div>
            <h5>Wishlist Items is empty!</h5>
          </div>
        ) : (
          <>
            <div>
              <div className="flex w-full justify-end pt-5 pr-5">
                <RxCross1
                  size={25}
                  className="cursor-pointer"
                  onClick={handleClose}
                  />
              </div>
              {/* Item length */}
              <div className={`${styles.noramlFlex} p-4`}>
                <AiOutlineHeart size={25} />
                <h5 className="pl-2 text-[20px] font-[500]">
                  {wishlist && wishlist.length} items
                </h5>
              </div>

              {/* cart Single Items */}
              <br />
              <div className="w-full border-t p-1.5">
                {wishlist &&
                  wishlist.map((i, index) => (
                    <CartSingle
                      key={index}
                      data={i}
                      removeFromWishlistHandler={removeFromWishlistHandler}
                      addToCartHandler={addToCartHandler}
                    />
                  ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const CartSingle = ({ data, removeFromWishlistHandler, addToCartHandler }) => {
  const [value, setValue] = useState(1);

  return (
    <div className="border-b  rounded-[10px]  p-4 shadow-3xl mb-[4px]">
      <div className="w-full flex items-center justify-between ">
      <RxCross1
          className="cursor-pointer 800px:mb-['unset'] 800px:ml-['unset'] mb-2 ml-2"
          onClick={() => removeFromWishlistHandler(data)}
        />
        <img
          src={data?.images[0]?.url}
          alt=""
          className="w-[80px] h-min ml-2 mr-2 rounded-[5px]"
        />

        <div className="pl-[5px] w-[208px]">
          <h1>{data.name.substring(0, 25) + "..."}</h1>
          <h2>{data.size}</h2>

          <h4 className="font-[600] pt-3 800px:pt-[3px] text-[17px] text-[#d02222] font-Roboto">
          {parseInt(data.discountPrice).toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}          
          </h4>
        </div>
        <div className="flex-end">
          <BsCartPlus
            size={20}
            className="cursor-pointer"
            tile="Add to cart"
            onClick={() => addToCartHandler(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
