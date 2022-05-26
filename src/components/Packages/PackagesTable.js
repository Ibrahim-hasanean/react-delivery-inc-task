import React, { useContext } from "react";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AppDataContext from "../../contexts/appDataContext";
import PackagesTableRow from "./PackagesTableRow";
import AddPackage from "./AddPackage";
import useOpenConfirm from "../../hooks/useOpenConfirm";
const PackagesTable = () => {
  const { appData } = useContext(AppDataContext);
  const { open, openConfirm, closeConfirm } = useOpenConfirm();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">id</TableCell>
            <TableCell align="center">Customer Name</TableCell>
            <TableCell align="center">Weight</TableCell>
            <TableCell align="center">Price</TableCell>

            <TableCell align="center">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={openConfirm}
              >
                <AddIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appData.packages.map((pack, index) => {
            return (
              <PackagesTableRow
                key={pack.id}
                packageIndex={index}
                pack={pack}
                isFirst={index === 0}
                isLast={index === appData.packages.length - 1}
              />
            );
          })}
        </TableBody>
      </Table>

      <AddPackage open={open} closeConfirm={closeConfirm} />
    </TableContainer>
  );
};

export default PackagesTable;
