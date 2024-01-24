import React from "react";
import Sidebar from "../ui/dashboard/sidebar";
import DashboardNav from "../ui/dashboard/dashboardNav";
import DashboardFooter from "../ui/dashboard/footer";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-primary text-white min-h-screen w-full  px-6 z-20 relative flex">
      <div className="flex-[1] bg-secondary p-5 ">
        <Sidebar />
      </div>
      <div className="flex-[4] p-5 pt-20">
        <DashboardNav />
        {children}
        <DashboardFooter />
      </div>
    </div>
  );
};

export default layout;
