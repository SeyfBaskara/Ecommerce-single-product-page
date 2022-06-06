import React, { useState } from 'react'
import Image from 'next/image'
import { data } from '../data/data'
import { useData } from '../context/Appcontext'

const Product: React.FC = () => {
   const [product, setProduct] = useState<Iproduct>(data)
   const [current, setCurrent] = useState<number>(0)
   const length: number = product.sliderImages.length
   const { setCart, setShowLightBox } = useData()

   const handleNextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1)
   }
   const handlePrevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1)
   }

   const handleLightBox = () => {
      setShowLightBox(true)
   }

   const handleThumbnailImages = (index: number) => {
      setCurrent(index)
   }

   const handleProductNumber = (operator: string) => {
      if (operator === '+') {
         setProduct({ ...product, count: product.count + 1 })
      } else if (product.count !== 0 && operator === '-') {
         setProduct({ ...product, count: product.count - 1 })
      }
   }

   const handleAddToCart = () => {
      if (product.count !== 0) {
         setCart({ productName: product.title, price: product.discountPrice, count: product.count })
      }
      setProduct({ ...product, count: 0 })
   }

   return (
      <article className="product">
         <section className="product__slides">
            <div className="product__slider">
               <div className="product__slider-prev" onClick={handlePrevSlide}>
                  <Image src="/images/icon-previous.svg" alt="previus" width={13} height={18} />
               </div>
               <div className="product__slider-next" onClick={handleNextSlide}>
                  <Image src="/images/icon-next.svg" alt="next" width={13} height={18} />
               </div>
               <div className="slider__image-wrapper">
                  {product.sliderImages.map(({ image }, index) => (
                     <div
                        className={index === current ? 'product__images active' : 'product__images'}
                        key={index}
                        onClick={handleLightBox}
                     >
                        {index === current && <Image src={image} alt="product image" layout="fill" />}
                     </div>
                  ))}
               </div>
            </div>

            <div className="slider__thumbnail-wappper">
               {product.sliderThumbnailImages.map(({ image }, index) => (
                  <div
                     key={index}
                     className={index === current ? 'product__thumbnail-images thumb-active' : 'product__thumbnail-images'}
                     onClick={() => handleThumbnailImages(index)}
                  >
                     <Image src={image} alt="thumbnail image" layout="fill" />
                  </div>
               ))}
            </div>
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
                     <button className="product__number-btn" onClick={() => handleProductNumber('-')}>
                        <Image src="/images/icon-minus.svg" alt="minus" width={12} height={4} />
                     </button>
                     <p>{product.count}</p>
                     <button className="product__number-btn" onClick={() => handleProductNumber('+')}>
                        <Image src="/images/icon-plus.svg" alt="plus" width={12} height={12} />
                     </button>
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
