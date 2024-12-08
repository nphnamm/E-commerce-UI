import React from 'react'
import AllProducts from "../../components/Shop/AllProducts.jsx";
import DashboardSideBar from '../../components/Shop/Layout/DashboardSidebar';
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader';

const ShopAllProducts = () => {
  return (
    <div>
        <DashboardHeader />
        <div className="flex justify-between w-full">
            <div className="w-[80px] 800px:w-[330px]">
              <DashboardSideBar active={3} />
            </div>
            <div className="w-full justify-center flex">
                <AllProducts />
            </div>
          </div>
    </div>
  )
}
export default ShopAllProducts;
