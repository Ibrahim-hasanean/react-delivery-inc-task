import { useState } from "react";

const useOpenConfirm = () => {
  const [open, setOpen] = useState(false);

  const openConfirm = () => setOpen(true);

  const closeConfirm = () => setOpen(false);

  return { open, openConfirm, closeConfirm };
};

export default useOpenConfirm;
