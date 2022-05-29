import React, { useState, useRef } from 'react'
import Image from 'next/image'

const Product: React.FC = () => {
   const [slideIndex, setSlideIndex] = useState<number>(1)
   const slides = useRef<HTMLDivElement>(null)

   const handleSlides = () => {
      console.log(slides)
   }

   return (
      <main className="product">
         <figure className="product__figure">
            <div className="product__image" ref={slides}>
               <Image src="/images/image-product-1.jpg" alt="product-1" width={400} height={350} />
            </div>
            {/* <div className="product__image" ref={slides}>
               <Image src="/images/image-product-2.jpg" alt="product-2" width={400} height={350} />
            </div>
            <div className="product__image" ref={slides}>
               <Image src="/images/image-product-3.jpg" alt="product-3" width={400} height={350} />
            </div>
            <div className="product__image" ref={slides}>
               <Image src="/images/image-product-4.jpg" alt="product-4" width={400} height={350} />
            </div> */}
         </figure>
         <article className="product__icon-wrapper">
            <div className="product__icon-previous" onClick={handleSlides}>
               <Image src="/images/icon-previous.svg" alt="previus" width={13} height={18} />
            </div>
            <div className="product__icon-next" onClick={handleSlides}>
               <Image src="/images/icon-next.svg" alt="next" width={13} height={18} />
            </div>
         </article>

         <article className="product__details">
            <hgroup>
               <h4 className="product__company-name">sneaker company</h4>
               <h1 className="product__title">Fall Limited Edition Sneakers</h1>
            </hgroup>
            <p className="product__description">
               These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll
               withstand everything the weather can offer.
            </p>
            <article className="product__prices">
               <h1 className="product__price">
                  $125.00 <span className="product__discount">50%</span>
               </h1>
               <p className="product__prev-price">
                  <s>$250.00</s>
               </p>
            </article>
            <article>
               <div className="product__number-set">
                  <Image src="/images/icon-minus.svg" alt="minus" width={12} height={4} />
                  <p>0</p>
                  <Image src="/images/icon-plus.svg" alt="plus" width={12} height={12} />
               </div>
               <button className="product__add-btn">
                  <div className="product__btn-icon">
                     <Image src="/images/icon-cart.svg" alt="cart" width={18} height={16} />
                  </div>
                  <p className="product__btn-text">Add to cart</p>
               </button>
            </article>
         </article>
      </main>
   )
}

export default Product
