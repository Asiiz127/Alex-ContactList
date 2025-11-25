import React from "react";
import { useReducer, useContext, createContext } from "react";
import { storeReducer, initialStore } from "../store";

export const StoreContext = createContext();

export function ReduceComponent({ children }) {
  const [store, dispatch] = useReducer(storeReducer, initialStore());
  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useReduceContext() {
  return useContext(StoreContext);
}
