import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import styles from "../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsShop } from "../../redux/actions/product";
import Ratings from "./Ratings";
import { server } from "../../server";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/actions/wishlist";
import { toast } from "react-toastify";
import { addTocart } from "../../redux/actions/cart";
import axios from "axios";
import Loader from "../Layout/Loader";
import { useTranslation } from "react-i18next";

const ProductDetails = ({ data, sizesData, filterdColors }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.products);
  const [productOfTags, setProductOfTags] = useState([] || null);
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [tags, setTags] = useState(data?.tags);
  const [detailProduct, setDetailProduct] = useState({ images: [], ...data });
  const [colorOfProduct, setColorOfProduct] = useState(filterdColors)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  useEffect(() => {

    if (wishlist && wishlist.find((i) => i._id === data?._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
    // setSizesData(filterdSize)

  }, [data, wishlist]);
  useEffect(() => {
    // const filteredData = data.filter(obj => obj.tags === data.tags);
    dispatch(getAllProductsShop(data && data?.shop._id));
    if (!tags) {
      setTags(data?.tags);
    }
    if (!detailProduct) {
      setDetailProduct(data)
    }
    if (!filterdColors) {
      setColorOfProduct(filterdColors)
    }
    setSelectedColor(null)


  }, []);
  // console.log("data tags", data?.tags);
  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };
  const handleSizeClick = (size) => {
    setSelectedSize(size);
    setSelectedColor(null)


  };
  const handleColorClick = (color) => {
    setSelectedColor(color);
    console.log(productOfTags);

    const result = productOfTags.filter(product => product.size === selectedSize && product.color == color);
    if (result) {
      console.log(result)
      console.log(tags);
      setDetailProduct(result[0])

    }

  };

  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: count };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };

  const totalReviewsLength =
    products &&
    products.reduce((acc, product) => acc + product.reviews.length, 0);

  const totalRatings =
    products &&
    products.reduce(
      (acc, product) =>
        acc + product.reviews.reduce((sum, review) => sum + review.rating, 0),
      0
    );

  const avg = totalRatings / totalReviewsLength || 0;

  const averageRating = avg.toFixed(2);

  const handleMessageSubmit = async () => {
    if (isAuthenticated) {
      const groupTitle = data._id + user._id;
      const userId = user._id;
      const sellerId = data.shop._id;
      await axios
        .post(`${server}/conversation/create-new-conversation`, {
          groupTitle,
          userId,
          sellerId,
        })
        .then((res) => {
          navigate(`/inbox?${res.data.conversation._id}`);
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    } else {
      toast.error("Please login to create a conversation");
    }
  };
  useEffect(() => {
    if (products) {
      const productAfterSelectedSize = products.filter((product) => product.tags.includes(tags) && product.size == selectedSize);
      console.log('selectedSize', selectedSize)
      console.log('tags', tags)
      console.log('tags', filterdColors)
      setProductOfTags(productAfterSelectedSize)
      if (productAfterSelectedSize) {
        console.log('1', productAfterSelectedSize);

        const result = productAfterSelectedSize.map((item, index) => ({
          id: index,
          color: item.color // Đổi "color" thành "size" theo yêu cầu
        }));

        console.log(result);
        setColorOfProduct(result);
      }
    }

  }, [selectedSize])

  useEffect(() => {

    if (wishlist && wishlist.find((i) => i._id === data?._id)) {
      setClick(true);
    } else {

      setClick(false);
    }
    if (data) {
      setTags(data?.tags || []);
    }
    if (!filterdColors) {
      setColorOfProduct(filterdColors);
    }

    // setSizesData(filterdSize)

  }, [detailProduct, wishlist]);
  console.log(detailProduct);
  return (
    <div className="bg-white">
      {(detailProduct && sizesData) ? (
        <div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
          <div className="w-full py-5">
            <div className="block w-full 800px:flex">
              <div className="w-full 800px:w-[50%]">
                <img
                  src={`${detailProduct?.images[select]?.url}`}
                  alt=""
                  className="w-[80%]"
                />
                <div className="w-full flex">
                  {detailProduct.images.slice(0, 5).map((i, index) => (
                    <img
                      key={index}
                      src={`${i?.url}`}
                      alt={`thumbnail-${index}`}
                      className="h-[100px] lg:h-[200px] overflow-hidden mr-3 mt-3 cursor-pointer"
                      onClick={() => setSelect(index)}
                    />
                  ))}
                  <div
                    className={`${select === 1 ? "border" : "null"
                      } cursor-pointer`}
                  ></div>
                </div>
              </div>
              <div className="w-full 800px:w-[50%] pt-5">
                <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                <p className="line-clamp-2">{detailProduct?.description}</p>
                <div className="flex pt-3">
                  <h4 className={`${styles?.productDiscountPrice}`}>
                    {parseInt(detailProduct?.discountPrice).toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </h4>
                  <h3 className={`${styles.price}`}>
                    {detailProduct?.originalPrice ? parseInt(detailProduct?.originalPrice).toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }) : null}

                  </h3>
                </div>

                {/* selected size */}
                <div className="container mt-4">
                  <h5>{t("product_card.select_size")}</h5>
                  <div className="flex justify-content-start">
                    {sizesData.map((size) => (
                      <div
                        // key={size.id}
                        className={`p-3 m-1 border ${selectedSize == size.size
                          ? "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                          : "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                          }`}
                        style={{ cursor: "pointer" }}
                        onClick={() => handleSizeClick(size.size)}
                      >
                        {size.size}
                      </div>
                    ))}
                  </div>

                </div>
                <div className="container mt-4">
                  <h5>{t("product_card.select_color")}</h5>
                  <div className="flex justify-content-start">
                    {colorOfProduct?.map((color) => (
                      <div
                        // key={size.id}
                        className={`p-3 m-1 border ${selectedColor == color.color
                          ? "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                          : "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                          }`}
                        style={{ cursor: "pointer" }}
                        onClick={() => handleColorClick(color.color)}
                      >
                        {color.color}
                      </div>
                    ))}
                  </div>

                </div>

                <div className="flex items-center mt-12 justify-between pr-3">
                  <div>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={decrementCount}
                    >
                      -
                    </button>
                    <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                      {count}
                    </span>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={incrementCount}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => removeFromWishlistHandler(detailProduct)}
                        color={click ? "red" : "#333"}
                        title={t("product_card.remove_from_wishlist")}
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => addToWishlistHandler(detailProduct)}
                        color={click ? "red" : "#333"}
                        title={t("product_card.add_to_wishlist")}
                      />
                    )}
                  </div>
                </div>
                <div
                  className={`${styles.button} !mt-6 !rounded !h-11 flex items-center`}
                  onClick={() => addToCartHandler(detailProduct._id)}
                >
                  <span className="text-white flex items-center">
                    {t("product_card.add_to_cart")} <AiOutlineShoppingCart className="ml-1" />
                  </span>
                </div>
                <div className="flex items-center pt-8">
                  <Link to={`/shop/preview/${detailProduct?.shop._id}`}>
                    <img
                      src={`${detailProduct?.shop?.avatar?.url}`}
                      alt=""
                      className="w-[50px] h-[50px] rounded-full mr-2"
                    />
                  </Link>
                  <div className="pr-8">
                    <Link to={`/shop/preview/${detailProduct?.shop._id}`}>
                      <h3 className={`${styles.shop_name} pb-1 pt-1`}>
                        {detailProduct?.shop?.name}
                      </h3>
                    </Link>
                    <h5 className="pb-3 text-[15px]">
                      ({averageRating}/5) {t("product_card.ratings")}
                    </h5>
                  </div>
                  <div
                    className={`${styles.button} bg-[#6443d1] mt-4 !rounded !h-11`}
                    onClick={handleMessageSubmit}
                  >
                    <span className="text-white flex items-center">
                      {t("product_card.send_message")} <AiOutlineMessage className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProductDetailsInfo
            data={detailProduct}
            products={products}
            totalReviewsLength={totalReviewsLength}
            averageRating={averageRating}
          />
          <br />
          <br />
        </div>
      ) : (<Loader />)}
    </div>
  );
};

const ProductDetailsInfo = ({
  data,
  products,
  totalReviewsLength,
  averageRating,
}) => {
  const [active, setActive] = useState(1);
  const { t } = useTranslation();
  return (
    <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded">
      <div className="w-full flex justify-between border-b pt-10 pb-2">
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(1)}
          >
            {t("product_card.product_details")}
          </h5>
          {active === 1 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(2)}
          >
            {t("product_card.product_reviews")}
          </h5>
          {active === 2 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(3)}
          >
            {t("product_card.seller_information")}
          </h5>
          {active === 3 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
      </div>
      {active === 1 ? (
        <>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            {data.description}
          </p>
        </>
      ) : null}

      {active === 2 ? (
        <div className="w-full min-h-[40vh] flex flex-col items-center py-3 overflow-y-scroll">
          {data &&
            data.reviews.map((item, index) => (
              <div className="w-full flex my-2">
                <img
                  src={`${item.user.avatar?.url}`}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div className="pl-2 ">
                  <div className="w-full flex items-center">
                    <h1 className="font-[500] mr-3">{item.user.name}</h1>
                    <Ratings rating={data?.ratings} />
                  </div>
                  <p>{item.comment}</p>
                </div>
              </div>
            ))}

          <div className="w-full flex justify-center">
            {data && data.reviews.length === 0 && (
              <h5> {t("product_card.no_reviews")}</h5>
            )}
          </div>
        </div>
      ) : null}

      {active === 3 && (
        <div className="w-full block 800px:flex p-5">
          <div className="w-full 800px:w-[50%]">
            <Link to={`/shop/preview/${data.shop._id}`}>
              <div className="flex items-center">
                <img
                  src={`${data?.shop?.avatar?.url}`}
                  className="w-[50px] h-[50px] rounded-full"
                  alt=""
                />
                <div className="pl-3">
                  <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                  <h5 className="pb-2 text-[15px]">
                    ({averageRating}/5) {t("product_card.ratings")}
                  </h5>
                </div>
              </div>
            </Link>
            <p className="pt-2">{data.shop.description}</p>
          </div>
          <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">
            <div className="text-left">
              <h5 className="font-[600]">
                {t("product_card.join_on")}:{" "}
                <span className="font-[500]">
                  {data.shop?.createdAt?.slice(0, 10)}
                </span>
              </h5>
              <h5 className="font-[600] pt-3">
                {t("product_card.total_products")}:{" "}
                <span className="font-[500]">
                  {products && products.length}
                </span>
              </h5>
              <h5 className="font-[600] pt-3">
                {t("product_card.total_reviews")}:{" "}
                <span className="font-[500]">{totalReviewsLength}</span>
              </h5>
              <Link to="/">
                <div
                  className={`${styles.button} !rounded-[4px] !h-[39.5px] mt-3`}
                >
                  <h4 className="text-white"> {t("product_card.visit")}</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
