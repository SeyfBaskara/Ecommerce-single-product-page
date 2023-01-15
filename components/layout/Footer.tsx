import Link from 'next/link'
import React from 'react'

const Footer: React.FC = () => {
   return (
      <footer className="footer">
         <div className="footer__attribution">
            Challenge by
            <Link href="https://www.frontendmentor.io?ref=challenge">
               <a className="footer__link" target="_blank" rel="noreferrer">
                  Frontend Mentor
               </a>
            </Link>
            . Coded by
            <Link href="https://seyfettinbaskara.dev/">
               <a className="footer__link" target="_blank" rel="noreferrer">
                  Seyfettin Baskara
               </a>
            </Link>
            .
         </div>
      </footer>
   )
}

export default Footer
