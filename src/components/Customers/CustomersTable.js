import React, { useContext } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import AppDataContext from "../../contexts/appDataContext";
import CustomerTableRow from "./CustomerTableRow";
const CustomersTable = () => {
  const { appData } = useContext(AppDataContext);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appData.customers?.map((user) => {
            return <CustomerTableRow key={user.id} user={user} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomersTable;
