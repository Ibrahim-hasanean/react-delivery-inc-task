import React, {
  createContext,
  useEffect,
  useState,
  useReducer,
  useCallback,
} from "react";
import appDataConstant from "../constants/appData.constants";
import appDataReducer from "../reducers/appData.reducer";
const AppDataContext = createContext();

const initialState = {
  customers: [],
  packages: [],
  customer: null,
  customerPackages: [],
};

export const AppDataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appDataReducer, initialState);
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    getAppData();
  }, []);

  const getAppData = () => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        let sortedPackages = data.packages.sort(
          (prev, next) => prev.shippingOrder - next.shippingOrder
        );
        sortedPackages = sortedPackages.map((pack) => {
          let customers = data.customers;
          let customer = customers.find(
            (customer) => customer.id === pack.customerid
          );
          pack.customer = customer;
          return pack;
        });
        dispatch({
          type: appDataConstant.Get_App_Data,
          payload: {
            customers: data.customers,
            packages: sortedPackages,
          },
        });
      });
  };

  const deleteCustomer = (id) => {
    dispatch({
      type: appDataConstant.Delete_Customer,
      payload: {
        id,
      },
    });
  };

  const deletePackage = (id) => {
    dispatch({
      type: appDataConstant.Delete_Package,
      payload: {
        id,
      },
    });
  };

  const movePackageUp = (pacakageIndex) => {
    if (pacakageIndex > 0) {
      dispatch({
        type: appDataConstant.Move_Package_Up,
        payload: {
          pacakageIndex,
        },
      });
    }
  };

  const getCustomerById = useCallback((id) => {
    dispatch({ type: appDataConstant.Get_Customer_By_Id, payload: { id } });
  }, []);

  const movePackageDown = (pacakageIndex) => {
    if (pacakageIndex < state.packages.length - 1) {
      dispatch({
        type: appDataConstant.Move_Package_Down,
        payload: {
          pacakageIndex,
        },
      });
    }
  };

  const addPackage = (data) => {
    dispatch({
      type: appDataConstant.Add_Package,
      payload: {
        data,
      },
    });
  };

  const getCustomerPackages = useCallback((customerId) => {
    dispatch({
      type: appDataConstant.Get_Customer_Packages,
      payload: { customerId },
    });
  }, []);

  const addInvoice = useCallback((invoice) => {
    setInvoices((prev) => [...prev, invoice]);
  }, []);

  return (
    <AppDataContext.Provider
      value={{
        addInvoice,
        getCustomerPackages,
        getCustomerById,
        addPackage,
        movePackageDown,
        movePackageUp,
        deletePackage,
        deleteCustomer,
        appData: state,
        invoices,
        getAppData,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};

export default AppDataContext;
