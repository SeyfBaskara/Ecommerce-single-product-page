import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'
import AppProvider from '../context/Appcontext'

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <AppProvider>
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </AppProvider>
   )
}

export default MyApp
