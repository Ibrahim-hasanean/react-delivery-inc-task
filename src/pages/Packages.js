import React from "react";
import Header from "../shared/Header/Header";
import PackagesTable from "../components/Packages/PackagesTable";

const Packages = () => {
  return (
    <div className="body-container">
      <Header text="Packages" />
      <PackagesTable />
    </div>
  );
};

export default Packages;
