import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import SuggestedProduct from "../components/Products/SuggestedProduct";
import ProductDetails from "../components/Products/ProductDetails";
import { useSelector } from "react-redux";
import Loader from "../components/Layout/Loader";
const ProductDetailsPage = () => {
  const { allProducts } = useSelector((state) => state.products);
  const { allEvents } = useSelector((state) => state.events);
  // const [collection, setCollection] = useState([]);
  const [sizesData, setSizesData] = useState([]);
  const [filterdColors, setFilterdColors] = useState([]);
  const [searchParams] = useSearchParams();
  const isEvent = searchParams.get("isEvent") === "true";
  const { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    // Lấy đúng nguồn dữ liệu dựa trên isEvent
    const sourceData = isEvent ? allEvents : allProducts;

    if (!sourceData || sourceData.length === 0) return;

    const selectedData = sourceData.find((i) => i._id === id);
    const filteredData = sourceData.filter((obj) => obj?.tags === selectedData?.tags);

    const uniqueSizes = [];
    const seenSizes = new Set();

    const uniqueColors = [];
    const seenColors = new Set();

    filteredData.forEach((obj, index) => {
      if (obj.size && !seenSizes.has(obj.size)) {
        seenSizes.add(obj.size);
        uniqueSizes.push({ id: index, size: obj.size });
      }
      if (obj.color && !seenColors.has(obj.color)) {
        seenColors.add(obj.color);
        uniqueColors.push({ id: index, color: obj.color });
      }
    });

    setSizesData(uniqueSizes);
    setFilterdColors(uniqueColors);
    setData(selectedData);
  }, [allProducts, allEvents, id, isEvent]);

  // const getCollection = async (tags) => {
  //   axios
  //     .get(`${server}/product/get-product-by-type`, {
  //       params: {
  //         tags: data?.tags,
  //       },
  //       withCredentials: true, // Include credentials (cookies, auth tokens)
  //     })
  //     .then((res) => {
  //       console.log("res data", res.data);
  //       setCollection(res.data.products);
  //       // toast.success(res.data.message);
  //     });
  // };

  // console.log("check dataaa", allProducts);
  // console.log("check dataaa", id);

  return (
    data ?
      (<div>
        <Header />
        <ProductDetails data={data} sizesData={sizesData} filterdColors={filterdColors} />
        {data && <SuggestedProduct data={data} />}
        <Footer />
      </div>) : <Loader />
  );
};

export default ProductDetailsPage;
