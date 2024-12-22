import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getAllProductsShop,
} from "../../redux/actions/product";
import {
  AiOutlineDelete,
  AiOutlineEye,
  AiFillEdit,
  
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Loader from "../Layout/Loader";
import UpdateModal from "../Modal/UpdateModal";
import { useTranslation } from "react-i18next";

function AllProducts() {
  const [open, setOpen] = useState(false);
  const {t} = useTranslation()

  const { products, isLoading } = useSelector((state) => state.products);

  const { seller } = useSelector((state) => state.seller);
  const dispatch = useDispatch();
  const [productDataForUpdate, setDataProductForUpdate] = useState();

  console.log("check seller", seller);

  const handleDelete = (id) => {
    console.log("check id", id);
    dispatch(deleteProduct(id));
    window.location.reload();
  };
  const handleUpdate = (id) => {
    console.log("check id", id);

    const filterProduct = products.find((product) => product?._id == id);
    // dispatch(getProductForUpdate(id));
    setDataProductForUpdate(filterProduct);
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000); // Tùy chỉnh thời gian chờ nếu cần
    console.log("check product by id", filterProduct);
    return () => clearTimeout(timer);
  };
  const setOpenModal = () => {
    setOpen(false);
  };
  useEffect(() => {}, [productDataForUpdate]);
  useEffect(() => {
    dispatch(getAllProductsShop(seller._id));
  }, [dispatch, open]);
  const columns = [
    { field: "id", headerName:t('overview.product_id'), minWidth: 150, flex: 0.7 },
    {
      field: "name",
      headerName: t('overview.name'),
      minWidth: 180,
      flex: 1.4,
    },
    {
      field: "price",
      headerName: t('overview.price'),
      minWidth: 100,
      flex: 0.6,
    },
    {
      field: "Stock",
      headerName: t('overview.stock'),
      type: "number",
      minWidth: 80,
      flex: 0.5,
    },

    {
      field: "sold",
      headerName: t('overview.sold_out'),
      type: "number",
      minWidth: 130,
      flex: 0.6,
    },
    {
      field: "Preview",
      flex: 0.8,
      minWidth: 100,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.id}`}>
              <Button>
                <AiOutlineEye size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
    {
      field: "Delete",
      flex: 0.8,
      minWidth: 120,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => handleDelete(params.id)}>
              <AiOutlineDelete size={20} />
            </Button>
          </>
        );
      },
    },
    {
      field: "Edit",
      flex: 0.8,
      minWidth: 120,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => handleUpdate(params.id)}>
              <AiFillEdit size={20} />
            </Button>
          </>
        );
      },
    },
  ];
  const row = [];
  products &&
    products.forEach((item) => {
      row.push({
        id: item._id,
        name: item.name,
        price: parseInt(item.discountPrice).toLocaleString("vi-VN", {
          style: "currency",
          currency: "VND",
        }),
        Stock: item.stock,
        sold: item?.sold_out,
      });
    });
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        </div>
      )}
      {open && productDataForUpdate && (
        <UpdateModal
          open={open}
          data={productDataForUpdate}
          setOpen={setOpenModal}
        />
      )}
    </>
  );
}

export default AllProducts;
