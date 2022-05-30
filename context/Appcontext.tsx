import React, { useState, createContext, useContext, Dispatch, SetStateAction } from 'react'

interface IContext {
   showCart: boolean
   setShowCart: Dispatch<SetStateAction<any>>
}

const initicalContext = {
   showCart: false,
   setShowCart: () => {},
}

const AppContext = createContext<IContext>(initicalContext)

export function useData() {
   return useContext(AppContext)
}

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

export default AppProvider
