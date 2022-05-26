import React, { useContext } from "react";
import { Button, IconButton, TableCell, TableRow } from "@mui/material";
import DeletePackageModal from "./DeletePackageModal";
import useOpenConfirm from "../../hooks/useOpenConfirm";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AppDataContext from "../../contexts/appDataContext";
const PackagesTableRow = ({ pack, packageIndex, isFirst, isLast }) => {
  const { open, openConfirm, closeConfirm } = useOpenConfirm();
  const { movePackageDown, movePackageUp } = useContext(AppDataContext);

  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell align="center" component="th" scope="row">
          {pack.id}
        </TableCell>
        <TableCell align="center">{pack.customer?.name}</TableCell>
        <TableCell align="center">{pack.weight}</TableCell>
        <TableCell align="center">{pack.price}</TableCell>
        <TableCell align="center">
          <Button onClick={openConfirm} variant="contained">
            Delete
          </Button>
          <IconButton
            disabled={isFirst}
            onClick={() => movePackageUp(packageIndex)}
          >
            <KeyboardArrowUpIcon />
          </IconButton>
          <IconButton
            disabled={isLast}
            onClick={() => movePackageDown(packageIndex)}
          >
            <KeyboardArrowDownIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <DeletePackageModal
        open={open}
        closeConfirm={closeConfirm}
        packageId={pack.id}
      />
    </>
  );
};

export default PackagesTableRow;
