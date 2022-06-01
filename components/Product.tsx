import React, { useState } from 'react'
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
   sliderImage: [
      {
         image: '/images/image-product-1.jpg',
      },
      {
         image: '/images/image-product-2.jpg',
      },
      {
         image: '/images/image-product-3.jpg',
      },
      {
         image: '/images/image-product-4.jpg',
      },
   ],
}

interface Iproduct {
   companyName: string
   title: string
   description: string
   actualPrice: number
   discountPrice: number
   discountRate: string
   count: number
   sliderImage: ISliderImage[]
}

interface ISliderImage {
   image: string
}

const Product: React.FC = () => {
   const [product, setProduct] = useState<Iproduct>(data)
   const [current, setCurrent] = useState<number>(0)
   const length: number = product.sliderImage.length

   const handleNextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1)
   }
   const handlePrevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1)
   }

   const handleProductNumber = (operator: string) => {
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
      <article className="product">
         <section className="product__slider">
            <div className="product__slider-prev" onClick={handlePrevSlide}>
               <Image src="/images/icon-previous.svg" alt="previus" width={13} height={18} />
            </div>
            <div className="product__slider-next" onClick={handleNextSlide}>
               <Image src="/images/icon-next.svg" alt="next" width={13} height={18} />
            </div>
            {product.sliderImage.map(({ image }, index) => (
               <div className={index === current ? 'product__image active' : 'product__image'} key={index}>
                  {index === current && <Image src={image} alt="product image" width="400" height="350" />}
               </div>
            ))}
         </section>

         <section className="product__details">
            <div className="product__details-wrapper">
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
               <article className="product__sets">
                  <div className="product__number-set">
                     <Image
                        onClick={() => handleProductNumber('-')}
                        src="/images/icon-minus.svg"
                        alt="minus"
                        width={12}
                        height={4}
                     />
                     <p>{product.count}</p>
                     <Image
                        onClick={() => handleProductNumber('+')}
                        src="/images/icon-plus.svg"
                        alt="plus"
                        width={12}
                        height={12}
                     />
                  </div>
                  <button onClick={handleAddToCart} className="product__add-btn">
                     <div className="product__btn-icon">
                        <Image src="/images/icon-cart.svg" alt="cart" width={18} height={16} />
                     </div>
                     <p className="product__btn-text">Add to cart</p>
                  </button>
               </article>
            </div>
         </section>
      </article>
   )
}

export default Product
