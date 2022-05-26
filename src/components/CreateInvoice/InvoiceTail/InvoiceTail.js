import React from "react";

const InvoiceTail = ({ count }) => {
  return (
    <div>
      <p className="text">You received package {count} packages</p>
      <p className="text">Thank you for using our services</p>
    </div>
  );
};

export default InvoiceTail;
