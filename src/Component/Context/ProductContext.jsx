import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from '../Reducer/ProductReducer';

const AppContext = createContext();

const API = "https://techgadgets-products-api-vikaskurmi17560.onrender.com/api";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      if (res.data.success && Array.isArray(res.data.data)) {
        dispatch({ type: "SET_API_DATA", payload: res.data.data });
      } else {
        dispatch({ type: "API_ERROR" });
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      dispatch({ type: "API_ERROR" });
    }
  };

  const getSingleProduct = async (id) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(`${API}/singleProduct?_id=${id}`);
      if (res.data.success && res.data.data) {
        dispatch({ type: "SET_SINGLE_PRODUCT", payload: res.data.data });
      } else {
        dispatch({ type: "SET_SINGLE_ERROR" });
      }
    } catch (error) {
      console.error("Error fetching single product:", error);
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(`${API}/products`);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = () => useContext(AppContext);

export { AppProvider, AppContext, useProductContext };