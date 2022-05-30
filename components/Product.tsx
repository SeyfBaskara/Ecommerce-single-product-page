import React, { useState, useRef } from 'react'
import Image from 'next/image'

const data = {
   companyName: 'sneaker company',
   title: 'Fall Limited Edition Sneakers',
   description:
      'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they`ll withstand everything the weather can offer.',
   actualPrice: 250.0,
   discountPrice: 125.0,
   discountRate: '50%',
   count: 0,
}

interface Iproduct {
   companyName: string
   title: string
   description: string
   actualPrice: number
   discountPrice: number
   discountRate: string
   count: number
}

const Product: React.FC = () => {
   const [product, setProduct] = useState<Iproduct>(data)
   const [slideIndex, setSlideIndex] = useState<number>(1)
   const slides = useRef<HTMLDivElement>(null)

   const handleSlides = () => {
      console.log(slides)
   }

   const handleProducNumber = (operator: string) => {
      if (operator === '+') {
         setProduct({ ...product, count: product.count + 1 })
      } else if (product.count !== 0 && operator === '-') {
         setProduct({ ...product, count: product.count - 1 })
      }
   }

   const handleAddToCart = () => {
      console.log('add to cart')
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
               <h4 className="product__company-name">{product.companyName}</h4>
               <h1 className="product__title">{product.title}</h1>
            </hgroup>
            <p className="product__description">{product.description}</p>
            <article className="product__prices">
               <h1 className="product__price">
                  ${product.discountPrice} <span className="product__discount">{product.discountRate}</span>
               </h1>
               <p className="product__prev-price">
                  <s>${product.actualPrice}</s>
               </p>
            </article>
            <article>
               <div className="product__number-set">
                  <Image onClick={() => handleProducNumber('-')} src="/images/icon-minus.svg" alt="minus" width={12} height={4} />
                  <p>{product.count}</p>
                  <Image onClick={() => handleProducNumber('+')} src="/images/icon-plus.svg" alt="plus" width={12} height={12} />
               </div>
               <button onClick={handleAddToCart} className="product__add-btn">
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
