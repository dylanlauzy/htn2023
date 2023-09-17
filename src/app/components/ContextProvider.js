"use client"

import {createContext, useContext, useState } from 'react'

const DataContext = createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState({});
  
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

export default ContextProvider

export const useData = () => {
  return useContext(DataContext)
}