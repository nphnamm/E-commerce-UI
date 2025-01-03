import { Slider } from "@mui/material";

import Checkbox from "./../../Checkbox/Checkbox";
import { useCallback, useEffect, useState } from "react";
import _ from "lodash";


export default function ProductsFilter({
  selectedCategories,
  selectedBrands,
  selectedSizes,
  handleCheckboxCategoriesChange,
  handleCheckboxBrandsChange,
  categories,
  brands,
  sizes,
  handleCheckboxSizesChange,
  volume,
  volumeHandler,
  storage,
  filterstorage,
  filterToggle,
  className,
  filterToggleHandle
}) {
  // console.log('volume',volume)
  const [minPriceInput, setMinPriceInput] = useState('');
  const [maxPriceInput, setMaxPriceInput] = useState('');
  const handleApplyPriceFilter = () => {
    const minPrice = minPriceInput === '' ? 0 : parseInt(minPriceInput);
    const maxPrice = maxPriceInput === '' ? 500000000 : parseInt(maxPriceInput);

    volumeHandler([minPrice, maxPrice]);
    // applyPriceFilter(minPrice, maxPrice);
  };
  useEffect(() => {
    if (volume && volume.length > 0) {
      setMinPriceInput(volume[0])
      setMaxPriceInput(volume[1])
    }
  }, [volume])

  const handleChange = (event, newValue) => {
    volumeHandler(newValue);
  };

  return (
    <>
      <div
        className={`filter-widget lg:block w-full ${filterToggle ? "block" : "hidden"}   fixed lg:relative left-0 top-0 h-screen lg:z-100 lg:h-auto overflow-y-scroll lg:overflow-y-auto bg-white px-[30px] pt-[40px] ${className || ""
          } `}
      >
        <div className="filter-subject-item pb-10 border-b border-qgray-border">
          <div className="subject-title mb-[30px]">
            <h1 className="text-black text-base font-500">
              Product categories
            </h1>
          </div>
          <div className="filter-items">
            <ul>
              {categories.map((category) => (
                <li className="item flex justify-between items-center mb-5">
                  <div className="flex space-x-[14px] items-center">
                    <div>
                      <Checkbox
                        value={category.title}
                        handleChange={() =>
                          handleCheckboxCategoriesChange(category.title)
                        }
                        checked={selectedCategories.includes(category.title)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="computerLaptop"
                        className="text-xs font-black font-400 capitalize"
                      >
                        {category?.title}
                      </label>
                    </div>
                  </div>
                  <div>
                    <span className="cursor-pointer">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect y="4" width="10" height="2" fill="#C4C4C4" />
                        <rect
                          x="6"
                          width="10"
                          height="2"
                          transform="rotate(90 6 0)"
                          fill="#C4C4C4"
                        />
                      </svg>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="filter-subject-item pb-10 border-b border-qgray-border mt-10">
          <div className="subject-title mb-[30px]">
            <h1 className="text-black text-base font-500">Price Range</h1>
          </div>
          <div className="flex space-x-4 mb-5">
            <input
              type="number"
              placeholder="Min Price"
              className="border p-2 text-xs w-1/2 "
              value={minPriceInput}
              onChange={(e) => setMinPriceInput(e.target.value)}
            />
            <input
              type="number"
              placeholder="Max Price"
              className="border p-2 text-xs w-1/2"
              value={maxPriceInput}
              onChange={(e) => setMaxPriceInput(e.target.value)}
            />
          </div>
          <div className="price-range mb-5">

            {/* 
            <Slider
                value={value} // Giá trị được lấy từ cha
                onChange={handleChangeCommitted}
                valueLabelDisplay="auto"
                max={500000000}
                min={0}

              /> */}

            <Slider
              value={volume}
              onChangeCommitted={handleChange}

              max={500000000}
              min={0}
            />


            {/* <Slider
              getAriaLabel={() => 'Temperature range'}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            /> */}
          </div>
          <p className="text-xs text-qblack font-400 mb-4">
            Price:
            {parseInt(volume[0]).toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}{" "}
            -{" "}
            {parseInt(volume[1]).toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </p>


          <button
            onClick={handleApplyPriceFilter}
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded min-w-[100px]">

            Lọc
          </button>

        </div>
        <div className="filter-subject-item pb-10 border-b border-qgray-border mt-10">
          <div className="subject-title mb-[30px]">
            <h1 className="text-black text-base font-500">Brands</h1>
          </div>
          <div className="filter-items">
            <ul>
              {brands.map((brand) => (
                <li className="item flex justify-between items-center mb-5">
                  <div className="flex space-x-[14px] items-center">
                    <div>
                      <Checkbox
                        value={brand.title}
                        handleChange={() =>
                          handleCheckboxBrandsChange(brand.title)
                        }
                        checked={selectedBrands.includes(brand.title)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="apple"
                        className="text-xs font-black font-400 capitalize"
                      >
                        {brand.title}
                      </label>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="filter-subject-item pb-10 border-b border-qgray-border mt-10">
          <div className="subject-title mb-[30px]">
            <h1 className="text-black text-base font-500">Storage</h1>
          </div>
          <div className="filter-items">
            <div className="flex space-x-[5px] flex-wrap">
              <span
                onClick={() => filterstorage("64GB")}
                className={` font-400 border border-qgray-border text-xs px-[14px] py-[6px] cursor-pointer mb-[5px] ${storage === "64GB"
                  ? "bg-qyellow text-qblack border-none"
                  : " text-qgray "
                  }`}
              >
                64GB
              </span>
              <span
                onClick={() => filterstorage("128GB")}
                className={` font-400 border border-qgray-border text-xs px-[14px] py-[6px] cursor-pointer mb-[5px] ${storage === "128GB"
                  ? "bg-qyellow text-qblack border-none"
                  : " text-qgray "
                  }`}
              >
                128GB
              </span>
              <span
                onClick={() => filterstorage("256GB")}
                className={` font-400 border border-qgray-border text-xs px-[14px] py-[6px] cursor-pointer mb-[5px] ${storage === "256GB"
                  ? "bg-qyellow text-qblack border-none"
                  : " text-qgray "
                  }`}
              >
                256GB
              </span>
              <span
                onClick={() => filterstorage("512GB")}
                className={` font-400 border border-qgray-border text-xs px-[14px] py-[6px] cursor-pointer mb-[5px] ${storage === "512GB"
                  ? "bg-qyellow text-qblack border-none"
                  : " text-qgray "
                  }`}
              >
                512GB
              </span>
              <span
                onClick={() => filterstorage("1024GB")}
                className={` font-400 border border-qgray-border text-xs px-[14px] py-[6px] cursor-pointer mb-[5px] ${storage === "1024GB"
                  ? "bg-qyellow text-qblack border-none"
                  : " text-qgray "
                  }`}
              >
                1024GB
              </span>
            </div>
          </div>
        </div>
        <div className="filter-subject-item pb-10 mt-10">
          <div className="subject-title mb-[30px]">
            <h1 className="text-black text-base font-500">Sizes</h1>
          </div>
          <div className="filter-items">
            <ul>
              {sizes.map((size) => (
                <li className="item flex justify-between items-center mb-5">
                  <div className="flex space-x-[14px] items-center">
                    <div>
                      <Checkbox
                        value={size.title}
                        handleChange={() =>
                          handleCheckboxSizesChange(size.title)
                        }
                        checked={selectedSizes.includes(size.title)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="apple"
                        className="text-xs font-black font-400 capitalize"
                      >
                        {size.title}
                      </label>
                    </div>
                  </div>
                </li>
              ))}

            </ul>
          </div>
        </div>
        <button
          onClick={filterToggleHandle}
          type="button"
          className="w-10 h-10 fixed top-5 right-5 z-50 rounded  lg:hidden flex justify-center items-center border border-qred text-qred"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
