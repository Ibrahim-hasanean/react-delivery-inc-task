import React, { useContext } from "react";
import AppDataContext from "../../contexts/appDataContext";
import DeleteConfirmation from "../../shared/DeleteConfirmation/DeleteConfirmation";

const DeletePackageModal = ({ open, closeConfirm, packageId }) => {
  const { deletePackage } = useContext(AppDataContext);

  const deleteAction = () => {
    deletePackage(packageId);
  };

  return (
    <DeleteConfirmation
      open={open}
      closeConfirm={closeConfirm}
      title="Are you sure you want delete package"
      deleteAction={deleteAction}
    />
  );
};

export default DeletePackageModal;
