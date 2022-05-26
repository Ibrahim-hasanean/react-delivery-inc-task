import React, { useContext } from "react";
import { Button, TableCell, TableRow } from "@mui/material";
import DeleteCustomerModal from "./DeleteCustomerModal";
import useOpenConfirm from "../../hooks/useOpenConfirm";
import AppDataContext from "../../contexts/appDataContext";
import { useHistory } from "react-router-dom";

const CustomerTableRow = ({ user }) => {
  const { open, openConfirm, closeConfirm } = useOpenConfirm();
  const { appData, addInvoice } = useContext(AppDataContext);
  let history = useHistory();

  const createInvoice = () => {
    let customerPackages = appData.packages.filter(
      (x) => x.customerid === user.id
    );

    let waightSum = 0;
    let priceSum = 0;

    customerPackages.forEach((pack) => {
      waightSum += Number(pack.weight?.replace("kg", ""));
      priceSum += Number(pack.price);
    });

    let invoice = {
      id: Date.now(),
      customer: user,
      totalWeight: waightSum,
      totalPrice: priceSum,
    };
    addInvoice(invoice);
    history.push({
      pathname: `/customers/${user.id}/create-invoices`,
      state: {
        customerPackages,
        invoice,
        customer: user,
      },
    });
  };

  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell component="th" scope="row">
          {user.id}
        </TableCell>
        <TableCell>{user.name}</TableCell>
        <TableCell>
          {/* <Link style={style.link} to={`/customers/${user.id}/create-invoices`}> */}
          <Button onClick={createInvoice} variant="contained">
            Create Invoice
          </Button>
          {/* </Link> */}
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
