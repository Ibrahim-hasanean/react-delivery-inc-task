import React from "react";
import { TableCell, TableRow } from "@mui/material";

const InvoicesTableRow = ({ invoice }) => {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell align="center" component="th" scope="row">
        {invoice.customer?.name}
      </TableCell>
      <TableCell align="center" component="th" scope="row">
        {invoice.totalWeight}
      </TableCell>
      <TableCell align="center" component="th" scope="row">
        {invoice.totalPrice}
      </TableCell>
    </TableRow>
  );
};

export default InvoicesTableRow;
