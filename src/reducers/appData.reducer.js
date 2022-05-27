import appDataConstant from "../constants/appData.constants";

const appDataReducer = (state, action) => {
  switch (action.type) {
    case appDataConstant.Get_App_Data:
      return {
        ...state,
        packages: action.payload.packages,
        customers: action.payload.customers,
      };
    case appDataConstant.Add_Package: {
      const packages = state.packages;
      const data = action.payload.data;
      let customer = state.customers.find(
        (customer) => customer.id === Number(data.customerid)
      );
      let newPackage = {
        ...data,
        id: `pak${packages.length + 1}`,
        shippingOrder: packages.length + 1,
        customer,
        weight: `${data.weight}kg`,
      };
      return {
        ...state,
        packages: [...packages, newPackage],
      };
    }
    case appDataConstant.Move_Package_Up: {
      const pacakageIndex = action.payload.pacakageIndex;
      const packages = state.packages;
      const currentPackage = packages[pacakageIndex];
      const prevPackage = packages[pacakageIndex - 1];
      packages[pacakageIndex] = {
        ...prevPackage,
        shippingOrder: currentPackage.shippingOrder,
      };
      packages[pacakageIndex - 1] = {
        ...currentPackage,
        shippingOrder: prevPackage.shippingOrder,
      };
      return {
        ...state,
        packages: [...packages],
      };
    }
    case appDataConstant.Move_Package_Down: {
      const pacakageIndex = action.payload.pacakageIndex;
      const packages = state.packages;
      const currentPackage = packages[pacakageIndex];
      const nextPackage = packages[pacakageIndex + 1];
      packages[pacakageIndex] = {
        ...nextPackage,
        shippingOrder: currentPackage.shippingOrder,
      };
      packages[pacakageIndex + 1] = {
        ...currentPackage,
        shippingOrder: nextPackage.shippingOrder,
      };
      return {
        ...state,
        packages: [...packages],
      };
    }
    case appDataConstant.Delete_Package:
      return {
        ...state,
        packages: state.packages.filter(
          (pack) => pack.id !== action.payload.id
        ),
      };
    case appDataConstant.Get_Customer_By_Id:
      let customer = state.customers.find(
        (customer) => customer.id === action.payload.id
      );
      return {
        ...state,
        customer,
      };
    case appDataConstant.Delete_Customer:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== action.payload.id
        ),
      };
    case appDataConstant.Get_Customer_Packages:
      let customerPackages = state.packages.filter(
        (pack) => pack.customerid === action.payload.customerId
      );
      return {
        ...state,
        customerPackages,
      };
    default:
      return state;
  }
};

export default appDataReducer;
