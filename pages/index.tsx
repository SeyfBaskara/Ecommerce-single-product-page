import type { NextPage } from 'next'
import Head from 'next/head'
import Cart from '../components/Cart'
import LightBoxSlider from '../components/LightBoxSlider'
import Product from '../components/Product'

const Home: NextPage = () => {
   return (
      <>
         <Head>
            <title>Ecommerce Product Page</title>
            <meta name="description" content="Generated by Frontend Mentor" />
            <link rel="icon" href="/images/favicon-32x32.png" />
         </Head>

         <Product />
         <Cart />
         <LightBoxSlider />
      </>
   )
}

export default Home
