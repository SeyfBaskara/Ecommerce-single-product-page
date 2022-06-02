import React, { useState, createContext, useContext, Dispatch, SetStateAction } from 'react'

const initicalContext = {
   showCart: false,
   setShowCart: () => {},
   cart: { productName: '', price: 0, count: 0 },
   setCart: () => {},
}

const AppContext = createContext<IContext>(initicalContext)

const AppProvider = ({ children }: any) => {
   const [showCart, setShowCart] = useState(initicalContext.showCart)
   const [cart, setCart] = useState(initicalContext.cart)

   const value = {
      showCart,
      setShowCart,
      cart,
      setCart,
   }
   return (
      <>
         <AppContext.Provider value={value}>{children}</AppContext.Provider>
      </>
   )
}

export const useData = () => useContext(AppContext)
export default AppProvider
