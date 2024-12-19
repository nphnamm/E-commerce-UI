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

  const { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    const data = allProducts && allProducts.find((i) => i._id === id);
    const filteredData = allProducts && allProducts.filter(obj => obj.tags === data.tags);
    const uniqueSizes = [];
    const seenSizes = new Set();
    const uniqueColors = [];
    const seenColor = new Set();
    const filterdSize = filteredData && filteredData
      .forEach((obj, index) => {
        if (!seenSizes.has(obj.size)) {
          seenSizes.add(obj.size);
          uniqueSizes.push({
            id: index, // giữ lại index đầu tiên của mỗi size
            size: obj.size,
          });
        }
      });
      const filterdColors = filteredData && filteredData
      .forEach((obj, index) => {
        if (!seenColor.has(obj.color)) {
          seenColor.add(obj.color);
          uniqueColors.push({
            id: index, // giữ lại index đầu tiên của mỗi size
            color: obj.color,
          });
        }
      });
    console.log('size', filterdSize);
    setFilterdColors(uniqueColors)
    setSizesData(uniqueSizes)
    setData(data);
    // const collection = allProducts.filter((obj) => obj?.tags === data?.tags);
    // console.log("collection", collection);
    // getCollection(data?.tags);
    // const filteredObjects = objects.filter(obj => obj.tags === "Branded 03 Vol 24");
  }, [allProducts, allEvents, data]);

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
