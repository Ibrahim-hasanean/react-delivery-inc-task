import React from "react";
import { useLocation } from "react-router-dom";
import InvoiceHeader from "../components/CreateInvoice/InvoiceHeader/InvoiceHeader";
import InvoiceTable from "../components/CreateInvoice/InvoiceTable/InvoiceTable";
import InvoiceTail from "../components/CreateInvoice/InvoiceTail/InvoiceTail";

const style = {
  width: "50%",
  margin: "auto",
};

const CreateInvoice = () => {
  const { state } = useLocation();
  const { customerPackages, invoice, customer } = state;
  return (
    <div style={style}>
      <InvoiceHeader invoice={invoice} customer={customer} />
      <InvoiceTable
        waightSum={invoice.totalWeight}
        priceSum={invoice.totalPrice}
        packages={customerPackages}
      />
      <InvoiceTail count={customerPackages.length} />
    </div>
  );
};

export default CreateInvoice;
