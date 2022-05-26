import React, { useContext } from "react";
import AppDataContext from "../../contexts/appDataContext";
import DeleteConfirmation from "../../shared/DeleteConfirmation/DeleteConfirmation";

const DeleteCustomerModal = ({ open, closeConfirm, userId }) => {
  const { deleteCustomer } = useContext(AppDataContext);

  const deleteAction = () => {
    deleteCustomer(userId);
  };

  return (
    <DeleteConfirmation
      open={open}
      closeConfirm={closeConfirm}
      title="Are you sure you want delete customer"
      deleteAction={deleteAction}
    />
  );
};

export default DeleteCustomerModal;
