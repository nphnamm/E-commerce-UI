import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createProduct } from "../../redux/actions/product";
import { categoriesData, storageData } from "../../static/data";
import { sizeData } from "../../static/data";
import { useTranslation } from "react-i18next";
function CreateProduct() {
  const { seller } = useSelector((state) => state.seller);
  const { success, error } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [storage, setStorage] = useState("");

  const [tags, setTags] = useState("");
  const [originalPrice, setOriginalPrice] = useState();
  const [discountPrice, setDiscountPrice] = useState();
  const [stock, setStock] = useState();


  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success("Product created successfully!");
      navigate("/dashboard");
      window.location.reload();
    }
  }, [dispatch, error, success, images]);

  const handleImageChange = (e) => {
    // e.preventDefault();
    // let files = Array.from(e.target.files);

    // setImages((prevImages) => [...prevImages, ...files]);
    // const reader = new FileReader();
    // reader.readAsDataURL(files);

    // console.log('check file', files);
    // // setImages([]);

    // files.forEach((file) => {
    //   const reader = new FileReader();

    //   reader.onload = () => {
    //     if (reader.readyState === 2) {
    //       setImages((old) => [...old, reader.result]);
    //     }
    //   };
    //   reader.readAsDataURL(file);
    // });
    const files = Array.from(e.target.files);

    // setImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((old) => [...old, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // const newForm = new FormData();
    // console.log('check',images);
    // images.forEach((image) => {
    //   newForm.append("images", image);
    // });
    // newForm.append("name", name);
    // newForm.append("description", description);
    // newForm.append("category", category);
    // newForm.append("tags", tags);
    // newForm.append("originalPrice", originalPrice);
    // newForm.append("discountPrice", discountPrice);
    // newForm.append("stock", stock);
    // newForm.append("shopId", seller._id);
    // // dispatch(
    // //   createProduct({
    // //     name,
    // //     description,
    // //     category,
    // //     tags,
    // //     originalPrice,
    // //     discountPrice,
    // //     stock,
    // //     shopId: seller._id,
    // //     images,
    // //   })
    // // );
    // dispatch(createProduct(newForm));
    const newForm = new FormData();

    images.forEach((image) => {
      newForm.set("images", image);
    });
    newForm.append("name", name);
    newForm.append("description", description);
    newForm.append("category", category);
    newForm.append("size", size);

    newForm.append("tags", tags);
    newForm.append("originalPrice", originalPrice);
    newForm.append("discountPrice", discountPrice);
    newForm.append("stock", stock);
    newForm.append("shopId", seller._id);
    dispatch(
      createProduct({
        name,
        description,
        category,
        size,
        tags,
        originalPrice,
        discountPrice,
        stock,
        storage,

        shopId: seller._id,
        images,
      })
    );
  };
  console.log("check images", images);

  return (
    <div className="w-[90%] 800px:w-[50%] bg-white shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
      <h5 className="text-[30px] font-Poppins text-center">{t("create_product_form.title")}</h5>
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label className="pb-2">
            {t("create_product_form.fields.name.label")}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={name}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setName(e.target.value)}
            placeholder={t("create_product_form.fields.name.placeholder")}
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            {t("create_product_form.fields.description.label")}
            </label>
          <textarea
            cols="30"
            required
            rows="8"
            name="description"
            type="text"
            value={description}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setDescription(e.target.value)}
            placeholder={t("create_product_form.fields.description.placeholder")}
          ></textarea>
        </div>
        <br />
        <div>
          <label className="pb-2">
            {t("create_product_form.fields.tags.label")}

            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="tags"
            value={tags}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setTags(e.target.value)}
            placeholder={t("create_product_form.fields.tags.placeholder")}
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            {t("create_product_form.fields.category.label")} 
            <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full mt-2 border h-[35px] rounded-[5px]"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value= {t("create_product_form.fields.category.placeholder")}>
              {t("create_product_form.fields.category.placeholder")}</option>
            {categoriesData &&
              categoriesData.map((i) => (
                <option value={i.title} key={i.title}>
                  {i.title}
                </option>
              ))}
          </select>
        </div>
        <br />
        <div>
          <label className="pb-2">
            {t("create_product_form.fields.size.label")}
          </label>
          <select
            className="w-full mt-2 border h-[35px] rounded-[5px]"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value= {t("create_product_form.fields.size.placeholder")}>{t("create_product_form.fields.size.placeholder")}</option>
            {sizeData &&
              sizeData.map((i) => (
                <option value={i.title} key={i.title}>
                  {i.title}
                </option>
              ))}
          </select>
        </div>
        <br />
        <div>
          <label className="pb-2">
             {t("create_product_form.fields.storage.label")}
          </label>
          <select
            className="w-full mt-2 border h-[35px] rounded-[5px]"
            value={storage}
            onChange={(e) => setStorage(e.target.value)}
          >
            <option value={t("create_product_form.fields.storage.placeholder")}>{t("create_product_form.fields.storage.placeholder")}</option>
            {storageData &&
              storageData.map((i) => (
                <option value={i.title} key={i.title}>
                  {i.title}
                </option>
              ))}
          </select>
        </div>
        <br />
        <div>
          <label className="pb-2">
            {t("create_product_form.fields.original_price.label")} 
            <span className="text-red-500">*</span>

          </label>
          <input
            type="number"
            name="price"
            value={originalPrice}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setOriginalPrice(e.target.value)}
            placeholder= {t("create_product_form.fields.original_price.placeholder")} 
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
           {t("create_product_form.fields.price_with_discount.label")}  <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="price"
            value={discountPrice}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setDiscountPrice(e.target.value)}
            placeholder= {t("create_product_form.fields.price_with_discount.placeholder")}
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            {t("create_product_form.fields.product_stock.label")} <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="price"
            value={stock}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setStock(e.target.value)}
            placeholder= {t("create_product_form.fields.product_stock.placeholder")} 
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            {t("create_product_form.fields.upload_images.label")}  <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            name=""
            id="upload"
            className="hidden"
            multiple
            onChange={handleImageChange}
          />
          <div className="w-full flex items-center flex-wrap">
            <label htmlFor="upload">
              <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
            </label>
            {images &&
              images.map((i) => (
                <img
                  src={i}
                  key={i}
                  alt=""
                  className="h-[120px] w-[120px] object-cover m-2"
                />
              ))}
          </div>
          <br />
          <div>
            <input
              type="submit"
              value={t("create_product_form.button.create")}
              className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;
