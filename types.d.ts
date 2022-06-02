interface Iproduct {
   companyName: string
   title: string
   description: string
   actualPrice: number
   discountPrice: number
   discountRate: string
   count: number
   sliderImages: ISliderImage[]
   sliderThumbnailImages: ISliderImage[]
}

interface ISliderImage {
   image: string
}

interface IContext {
   showCart: boolean
   setShowCart: Dispatch<SetStateAction<any>>
}
