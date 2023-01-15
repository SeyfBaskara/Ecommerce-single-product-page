import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { useData } from '../../context/Appcontext'
import Link from 'next/link'

const Header: React.FC = () => {
   const [displayNav, setDisplayNav] = useState<boolean>(false)
   const { setShowCart, cart } = useData()

   const handleNavigation = (state: string) => {
      if (state === 'open') {
         setDisplayNav(true)
      } else if (state === 'close') {
         setDisplayNav(false)
      }
   }

   const handleCart = () => {
      setShowCart((prevState: boolean) => !prevState)
   }

   return (
      <header className="header">
         <div className="header__left">
            <div className="header-menu" onClick={() => handleNavigation('open')}>
               <Image src="/images/icon-menu.svg" alt="menu" width={20} height={15} />
            </div>
            <Image src="/images/logo.svg" alt="logo" width={138} height={20} />
         </div>
         <div className="header__nav" style={displayNav ? { display: 'block' } : { display: 'none' }}>
            <div className="header__nav-close">
               <Image
                  onClick={() => handleNavigation('close')}
                  src="/images/icon-close.svg"
                  alt="close"
                  width={14}
                  height={15}
               />
            </div>
            <nav>
               <ul className="header__nav-list">
                  {['Collection', 'Men', 'Women', 'About', 'Contact'].map((list, index) => (
                     <li key={index}>
                        <Link href="#">
                           <a>{list}</a>
                        </Link>
                     </li>
                  ))}
               </ul>
            </nav>
         </div>

         <div className="header__right">
            {cart.count !== 0 && <p className="header__cart-count">{cart.count}</p>}
            <Image onClick={handleCart} src="/images/icon-cart.svg" alt="icon card" width={22} height={20} />
            <div className="header-avatar">
               <Image src="/images/image-avatar.png" alt="avatar" layout="fill" />
            </div>
         </div>
      </header>
   )
}
export default Header
