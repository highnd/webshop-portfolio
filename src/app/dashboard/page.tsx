import React from "react";
import Card from "../ui/dashboard/card";
import RightBar from "../ui/dashboard/rightbar";
import Transactions from "../ui/dashboard/transactions";
import Chart from "../ui/dashboard/chart";

const Dashboard = () => {
  return (
    <div className="flex gap-5 mt-5 ">
      <div className="main flex flex-col flex-[3] gap-5">
        <div className="cards flex gap-5 justify-between">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="side flex-1">
        <RightBar />
      </div>
    </div>
  );
};

export default Dashboard;
