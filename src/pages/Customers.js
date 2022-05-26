import React from "react";
import Header from "../shared/Header/Header";
import CustomersTable from "../components/Customers/CustomersTable";
const Customers = () => {
  return (
    <div className="body-container">
      <Header text="Customers" />
      <CustomersTable />
    </div>
  );
};

export default Customers;
