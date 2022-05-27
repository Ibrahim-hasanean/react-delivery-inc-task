import React from "react";
import { Button, TableCell, TableRow } from "@mui/material";
import DeleteCustomerModal from "./DeleteCustomerModal";
import useOpenConfirm from "../../hooks/useOpenConfirm";
import { Link } from "react-router-dom";

const CustomerTableRow = ({ user }) => {
  const { open, openConfirm, closeConfirm } = useOpenConfirm();

  const style = {
    link: {
      textDecoration: "none",
    },
  };

  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell component="th" scope="row">
          {user.id}
        </TableCell>
        <TableCell>{user.name}</TableCell>
        <TableCell>
          <Link style={style.link} to={`/customers/${user.id}/create-invoices`}>
            <Button variant="contained">Create Invoice</Button>
          </Link>
        </TableCell>
        <TableCell>
          <Button onClick={openConfirm} variant="contained">
            Delete
          </Button>
        </TableCell>
      </TableRow>
      <DeleteCustomerModal
        userId={user.id}
        open={open}
        closeConfirm={closeConfirm}
      />
    </>
  );
};

export default CustomerTableRow;
