import React from "react";
import Footer from "../../components/Layout/Footer";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSidebar";
import ShopSettings from "../../components/Shop/ShopSetting";

const ShopSettingsPage = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex items-start justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashboardSideBar active={11} />
        </div>
        <ShopSettings />
      </div>
    </div>
  );
};

export default ShopSettingsPage;