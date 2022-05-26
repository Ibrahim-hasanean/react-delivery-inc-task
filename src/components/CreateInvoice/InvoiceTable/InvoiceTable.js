import React from "react";
import PriceColumn from "./PriceColumn/PriceColumn";
import PackagesColumn from "./PackagesColumn/PackagesColumn";
import WeightColumn from "./WeightColumn/WeightColumn";
import "./invoice-table.css";
const InvoiceTable = ({ packages, waightSum, priceSum }) => {
  return (
    <div className="invoice-table">
      <PackagesColumn packages={packages} />
      <WeightColumn waightSum={waightSum} packages={packages} />
      <PriceColumn priceSum={priceSum} packages={packages} />
    </div>
  );
};

export default InvoiceTable;
