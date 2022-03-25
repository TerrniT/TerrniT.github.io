import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {GiBrain} from 'react-icons/gi'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'


const about = () => {
  return (
    <section id="about"> 
    <h5>Get to Know</h5>
    <h2>About me</h2>

    <div className="container about__container">
          <div className="about__me">
              <div className="about__me-image">
                  <img src={ME} alt="About" />
              </div>
          </div> 
          
          <div className="about__content">
              <div className="about__cards">
                  <article className='about__card'>
                    <FaAward className='about__icon' />
                    <h5>Expereince</h5>
                    <small> 0+ Years of Working</small>
                  </article>

                  <article className='about__card'>
                    <GiBrain className='about__icon' />
                    <h5>Clients</h5>
                    <small> 0+ WordWide</small>
                  </article>  

                  <article className='about__card'>
                    <FiUsers className='about__icon' />
                    <h5>Projects</h5>
                    <small> 0+ Completed projects </small>
                  </article>    
              </div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, illum!</p>
              <a href="#contact" className='btn btn-primary'> Let's Talk</a>
          </div>
    </div>

    </section>
  )
}

export default about