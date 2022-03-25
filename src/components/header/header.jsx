import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
   <header>

     


    <div className="container header__container">
     <h5>Hello I'm</h5>
     <h1>Gleb Kotovsky</h1>
     <h5 className="text-light"> Frontend Developer / UI - UX Designer</h5>
      <CTA />
      <HeaderSocials/> 
      {/* Personal photo - change bellow */}
      <div className="me">
        <img src={ME} alt=""/>

      
      </div>
    </div>
   </header>
  )
}

export default Header