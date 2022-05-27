import React from "react";
import "./invoice-header.css";
const InvoiceHeader = ({ customer, invoice }) => {
  return (
    <div className="invoice-header">
      <div className="invoice-header-row">
        <p>{new Date().toDateString()}</p>
        <h3>Invoice</h3>
      </div>
      <div className="invoice-header-row">
        <p>{customer?.name}</p>
        <p>No. {invoice?.id}</p>
      </div>
    </div>
  );
};

export default InvoiceHeader;
