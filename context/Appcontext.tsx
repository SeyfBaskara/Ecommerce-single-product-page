import React, { useState, createContext, useContext, Dispatch, SetStateAction } from 'react'

const initicalContext = {
   showCart: false,
   setShowCart: () => {},
}

const AppContext = createContext<IContext>(initicalContext)

const AppProvider = ({ children }: any) => {
   const [showCart, setShowCart] = useState<boolean>(false)

   const value = {
      showCart,
      setShowCart,
   }
   return (
      <>
         <AppContext.Provider value={value}>{children}</AppContext.Provider>
      </>
   )
}

export const useData = () => useContext(AppContext)
export default AppProvider
