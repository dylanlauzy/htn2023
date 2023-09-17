"use client"

import {createContext, useContext, useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

const DataContext = createContext();


const ContextProvider = ({ children }) => {
  const [data, setData] = useState({});
  
  return (
    <DataContext.Provider value={{ data, setData }}>
        <ChakraProvider>
          {children}
        </ChakraProvider>
    </DataContext.Provider>
  );
}

export default ContextProvider

export const useData = () => {
  return useContext(DataContext)
}