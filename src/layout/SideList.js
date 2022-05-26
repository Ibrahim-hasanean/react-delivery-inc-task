import React from "react";
import { Drawer, List } from "@mui/material";
import ListItemLink from "../shared/ListItemLink/ListItemLink";

const SideList = ({ openDrawer, setOpenDrawer }) => {
  const togleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <Drawer
      anchor={"left"}
      open={openDrawer}
      onClose={() => {
        setOpenDrawer(false);
      }}
    >
      <List style={{ width: "300px" }}>
        <ListItemLink onclick={togleDrawer} primary={"Customers"} to="/" />
        <ListItemLink
          onclick={togleDrawer}
          primary={"Packages"}
          to="/Packages"
        />
        <ListItemLink
          onclick={togleDrawer}
          primary={"Invoices"}
          to="/Invoices"
        />
      </List>
    </Drawer>
  );
};

export default SideList;
