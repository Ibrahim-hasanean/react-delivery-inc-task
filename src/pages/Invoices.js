import React from "react";
import Header from "../shared/Header/Header";
import InvoicesTable from "../components/Invoices/InvoicesTable";

const Invoices = () => {
  return (
    <div className="body-container">
      <Header text="Invoices" />
      <InvoicesTable />
    </div>
  );
};

export default Invoices;
