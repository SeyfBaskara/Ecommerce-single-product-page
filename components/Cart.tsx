import React from 'react'
import Image from 'next/image'

const Cart: React.FC = () => {
   return (
      <article className="cart">
         <h2 className="cart__title">Cart</h2>
         <section className="cart__product">
            <div className="cart__product-details">
               <div className="cart__product-img">
                  <Image src="/images/image-product-1.jpg" alt="product-1" width={70} height={60} />
               </div>
               <p className="cart__product-description">
                  Autumn Limited Edition.. $125.00 x 3 <span className="cart__product-price">$375.00</span>
               </p>
               <Image src="/images/icon-delete.svg" alt="delete" width={14} height={16} />
            </div>
            <button className="cart__checkout-btn">Checkout</button>
         </section>
      </article>
   )
}
export default Cart
