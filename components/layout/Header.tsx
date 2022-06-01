import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { useData } from '../../context/Appcontext'

const Header: React.FC = () => {
   const [displayNav, setDisplayNav] = useState<boolean>(false)
   const { setShowCart } = useData()

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
         <section className="header__left">
            <div className="header-menu" onClick={() => handleNavigation('open')}>
               <Image src="/images/icon-menu.svg" alt="menu" width={20} height={15} />
            </div>
            <Image src="/images/logo.svg" alt="logo" width={138} height={20} />
         </section>
         <div className="header__nav" style={displayNav ? { display: 'block' } : { display: 'none' }}>
            <div className="header__nav-close">
               <Image onClick={() => handleNavigation('close')} src="/images/icon-close.svg" alt="close" width={14} height={15} />
            </div>
            <ul className="header__nav-list">
               <li>Collections</li>
               <li>Men</li>
               <li>Women</li>
               <li>About</li>
               <li>Contact</li>
            </ul>
         </div>

         <section className="header__right">
            <Image onClick={handleCart} src="/images/icon-cart.svg" alt="icon card" width={22} height={20} />
            <div className="header-avatar">
               <Image src="/images/image-avatar.png" alt="avatar" width={27} height={27} />
            </div>
         </section>
      </header>
   )
}
export default Header
