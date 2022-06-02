import React from 'react'
import Image from 'next/image'
import { useData } from '../context/Appcontext'

const Cart: React.FC = () => {
   const { showCart, cart, setCart } = useData()

   const handleDelete = () => {
      setCart({ ...cart, count: 0 })
   }

   return (
      <article className="cart">
         {showCart && (
            <>
               <h2 className="cart__title">Cart</h2>
               <section className="cart__product">
                  {cart.count ? (
                     <>
                        <div className="cart__product-details">
                           <div className="cart__product-img">
                              <Image src="/images/image-product-1.jpg" alt="product-1" width={70} height={60} />
                           </div>
                           <p className="cart__product-description">
                              {cart.productName} ${cart.price} x {cart.count}
                              <span className="cart__product-price">${cart.price * cart.count}</span>
                           </p>
                           <button className="cart__product-delete" onClick={handleDelete}>
                              <Image src="/images/icon-delete.svg" alt="delete" width={14} height={16} />
                           </button>
                        </div>
                        <button className="cart__checkout-btn">Checkout</button>
                     </>
                  ) : (
                     <p className="cart__product-empty">Your cart is empty</p>
                  )}
               </section>
            </>
         )}
      </article>
   )
}
export default Cart
