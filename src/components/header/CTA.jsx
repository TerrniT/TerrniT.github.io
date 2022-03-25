import React from 'react'
// не забудь добавить сюда ссылку на портфолио в pdf
import CV from '../../assets/portfolio.pdf'
const CTA = () => {
  return (
    <div className="cta">
        <a href= {CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>    
    </div>
  )
}

export default CTA