import { NextResponse } from 'next/server'

export function middleware(request: any) {
   const country = request.geo.country
   const ip = request.ip
   console.log(country)
   console.log(ip)
   //    if (request.nextUrl.pathname === '/') {
   //       const country = request.geo.country
   //       const url = request.nextUrl.clone()
   //       // const ip = request.ip
   //       // console.log('MIDDLEWARE TRIGGERED, ', 'COUNTRY: ', country, 'IP: ', ip)

   //       switch (country) {
   //          case 'netherlands':
   //             url.pathname = '/our-hubs/amsterdam'
   //             break
   //          case 'norway':
   //             url.pathname = '/our-hubs/oslo'
   //             break
   //          default:
   //             url.pathname = '/our-hubs/stockholm'
   //             break
   //       }

   //       return NextResponse.redirect(url)
   //    }
}
