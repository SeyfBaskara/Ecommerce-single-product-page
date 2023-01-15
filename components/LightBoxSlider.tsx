import React, { useState } from 'react'
import Image from 'next/image'
import { data } from '../data/data'
import { useData } from '../context/Appcontext'

const LightBoxSlider: React.FC = () => {
   const [product, setProduct] = useState<Iproduct>(data)
   const [current, setCurrent] = useState<number>(0)
   const length: number = product.sliderImages.length
   const { showLightBox, setShowLightBox } = useData()

   const handleNextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1)
   }
   const handlePrevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1)
   }

   const handleThumbnailImages = (index: number) => {
      setCurrent(index)
   }

   const handleLightBoxClose = () => {
      setShowLightBox(false)
   }
   return (
      <article className={showLightBox ? 'lightbox lightboxActive' : 'lightbox'}>
         {showLightBox && (
            <div className="lightbox__slides">
               <div className="lightbox__close-icon" onClick={handleLightBoxClose}>
                  <Image src="/images/icon-close.svg" alt="close icon" layout="fill" />
               </div>
               <div className="lightbox__slider">
                  <div className="lightbox__slider-prev" onClick={handlePrevSlide}>
                     <Image src="/images/icon-previous.svg" alt="previus" width={13} height={18} />
                  </div>
                  <div className="lightbox__slider-next" onClick={handleNextSlide}>
                     <Image src="/images/icon-next.svg" alt="next" width={13} height={18} />
                  </div>
                  <div className="lightbox__image-wrapper">
                     {product.sliderImages.map(({ image }, index) => (
                        <div className={index === current ? 'lightbox__images active' : 'lightbox__images'} key={index}>
                           {index === current && <Image src={image} alt="product image" layout="fill" />}
                        </div>
                     ))}
                  </div>
               </div>

               <div className="lightbox__thumbnail-wappper">
                  {product.sliderThumbnailImages.map(({ image }, index) => (
                     <div
                        key={index}
                        className={
                           index === current
                              ? 'lightbox__thumbnail-images lightboxthumb-active'
                              : 'lightbox__thumbnail-images'
                        }
                        onClick={() => handleThumbnailImages(index)}
                     >
                        <Image src={image} alt="thumbnail image" layout="fill" />
                     </div>
                  ))}
               </div>
            </div>
         )}
      </article>
   )
}

export default LightBoxSlider
