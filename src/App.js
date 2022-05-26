import React, { useState } from "react";
import { AppDataContextProvider } from "./contexts/appDataContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Customers from "./pages/Customers";
import Invoices from "./pages/Invoices";
import Packages from "./pages/Packages";
import LayoutAppBar from "./layout/AppBar";
import SideList from "./layout/SideList";
import "./App.css";
import CreateInvoice from "./pages/CreateInvoice";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <AppDataContextProvider>
      <div className="App">
        <Router>
          <LayoutAppBar setOpenDrawer={setOpenDrawer} />
          <Switch>
            <Route exact path="/">
              <Customers />
            </Route>
            <Route exact path="/customers/:id/create-invoices">
              <CreateInvoice />
            </Route>
            <Route path="/packages">
              <Packages />
            </Route>
            <Route path="/invoices">
              <Invoices />
            </Route>
          </Switch>
          <SideList openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        </Router>
      </div>
    </AppDataContextProvider>
  );
}

export default App;
