import React from "react";

const PackagesColumn = ({ packages }) => {
  return (
    <div>
      <p className="column-text"> ID</p>
      {packages.map((pack) => (
        <p key={pack.id} className="column-text text">
          {pack.id}
        </p>
      ))}
    </div>
  );
};

export default PackagesColumn;
