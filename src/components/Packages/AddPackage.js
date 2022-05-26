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
  const { appData, addPackage } = useContext(AppDataContext);
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
          <Grid container justifyContent="space-between">
            <Grid item xs={12} md={5}>
              <TextField
                value={data.weight}
                onChange={handleChange}
                name="weight"
                placeholder="weight"
                type="number"
                required
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextField
                value={data.price}
                onChange={handleChange}
                name="price"
                placeholder="price"
                type="number"
                required
              />
            </Grid>
          </Grid>
          <Grid container>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">customer</InputLabel>
              <Select
                value={data.customerid}
                onChange={handleChange}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                name="customerid"
                required
              >
                {appData.customers.map((customer) => (
                  <MenuItem key={customer.id} value={customer.id}>
                    {customer.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid container justifyContent="center" gap={4}>
            <Button type="submit" variant="contained" color="primary">
              Add
            </Button>
            <Button onClick={closeConfirm} variant="contained" color="inherit">
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </Modal>
  );
};

export default AddPackage;
