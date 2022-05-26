import React from "react";
import { Typography } from "@mui/material";
import "./header.css";
const Header = ({ text }) => {
  return (
    <div className="header-div">
      <Typography className="header" variant="h5">
        {text}
      </Typography>
    </div>
  );
};

export default Header;
