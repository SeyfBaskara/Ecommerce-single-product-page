import React from 'react'
import Image from 'next/image'

const Header: React.FC = () => {
   return (
      <header className="header">
         <section className="header__left">
            <div className="header-menu">
               <Image src="/images/icon-menu.svg" alt="menu" width={20} height={15} />
            </div>
            <Image src="/images/logo.svg" alt="logo" width={138} height={20} />
         </section>
         <nav className="header__nav">
            <Image src="/images/icon-close.svg" alt="close" width={14} height={15} />
            <ul className="header__nav-list">
               <li>Collections</li>
               <li>Men</li>
               <li>Women</li>
               <li>About</li>
               <li>Concact</li>
            </ul>
         </nav>
         <section className="header__right">
            <Image src="/images/icon-cart.svg" alt="icon card" width={22} height={20} />
            <div className="header-avatar">
               <Image src="/images/image-avatar.png" alt="avatar" width={27} height={27} />
            </div>
         </section>
      </header>
   )
}
export default Header
