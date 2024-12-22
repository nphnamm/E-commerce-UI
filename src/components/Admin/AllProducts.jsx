import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const AllProducts = () => {
  const [data, setData] = useState([]);
  const {t} = useTranslation()
  useEffect(() => {
    axios
      .get(`${server}/product/admin-all-products`, { withCredentials: true })
      .then((res) => {
        setData(res.data.products);
      });
  }, []);

  const columns = [
    { field: "id", headerName:t('overview.product_id') , minWidth: 150, flex: 0.7 },
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
  ];

  const row = [];
  console.log('data',data)
  data &&
    data.forEach((item) => {
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
      <div className="w-full mx-8 pt-1 mt-10 bg-white">
        <DataGrid
          rows={row}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          autoHeight
        />
      </div>
    </>
  );
};

export default AllProducts;
