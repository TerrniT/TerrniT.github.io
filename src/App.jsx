import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/Testimonials/testimonials'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Transition from './components/background_transition/background_transition'
/*Font-Awesome icon library*/
import '../node_modules/font-awesome/css/font-awesome.min.css'


const App = () => {
  return (
    <div>
      
      <div className='header-bg'>
      <Header />
      </div>
      <Transition />
      <About />
      <Nav />
      
      <Experience />
      
      <Services />
      
      <Portfolio />

      <Testimonials />
     
      <Contact />
      <Footer />
    </div>
  )
}

export default App