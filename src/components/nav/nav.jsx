import React from 'react'
import './nav.css'
//Import react-icons
import {BiHomeHeart} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {FaBookOpen} from 'react-icons/fa'
import {RiServiceLine} from 'react-icons/ri'
import {MdContactMail} from 'react-icons/md'

import {useState} from 'react' 

// сломанный хук 07.03.2022 13:55 - fixed
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#') 
  return (
     <nav>
          <a href="#top" 
            onClick={() => setActiveNav('#')}
            className={activeNav === '#' ? 'active' : ''}>
          <BiHomeHeart/>
          </a>
          <a href="#about" 
            onClick={() => setActiveNav('#about')} 
            className={activeNav === '#about' ? 'active' : ''}>
          <AiOutlineUser/>
          </a>
          <a href="#experience" 
            onClick={() => setActiveNav('#experience')}
            className={activeNav === '#experience' ? 'active' : ''}>
          <FaBookOpen/></a>
          <a href="#services" 
            onClick={() => setActiveNav('#services')}
            className={activeNav === '#services' ? 'active' : ''}>
          <RiServiceLine/></a>
          <a href="#contact" 
            onClick={() => setActiveNav('#contact')}
            className={activeNav === '#contact' ? 'active' : ''}>
          <MdContactMail/></a>
      </nav>
  )
}

export default Nav