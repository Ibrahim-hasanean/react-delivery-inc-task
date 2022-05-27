import { useState } from "react";
// modal open and close state and actions commonlly used
const useOpenConfirm = () => {
  const [open, setOpen] = useState(false);

  const openConfirm = () => setOpen(true);

  const closeConfirm = () => setOpen(false);

  return { open, openConfirm, closeConfirm };
};

export default useOpenConfirm;
