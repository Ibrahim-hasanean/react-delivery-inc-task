import React, { useContext, useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import AppDataContext from "../../contexts/appDataContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
};

const AddPackage = ({ open, closeConfirm }) => {
  const [data, setData] = useState({
    weight: "",
    price: "",
    shippingOrder: "",
    customerid: "",
  });
  const { customers, addPackage } = useContext(AppDataContext);
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    addPackage(data);
    setData({
      weight: "",
      price: "",
      shippingOrder: "",
      customerid: "",
    });
    closeConfirm();
  };

  return (
    <Modal open={open} onClose={closeConfirm}>
      <form onSubmit={submitForm}>
        <Grid container gap={2} sx={style}>
          <Grid item xs={12}>
            <TextField
              value={data.weight}
              onChange={handleChange}
              name="weight"
              label="weight"
              type="number"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={data.price}
              onChange={handleChange}
              name="price"
              label="price"
              type="number"
              required
              fullWidth
            />
          </Grid>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">customer</InputLabel>
            <Select
              value={data.customerid}
              onChange={handleChange}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="customer"
              name="customerid"
              required
            >
              {customers.map((customer) => (
                <MenuItem key={customer.id} value={customer.id}>
                  {customer.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Grid container justifyContent="center" gap={4}>
            <Grid item xs={5}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
              >
                Add
              </Button>
            </Grid>
            <Grid item xs={5}>
              <Button
                fullWidth
                onClick={closeConfirm}
                variant="contained"
                color="inherit"
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Modal>
  );
};

export default AddPackage;
