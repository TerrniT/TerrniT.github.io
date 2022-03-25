import React from 'react'
import './experience.css'
// import {BsCheckCircleFill} from 'react-icons/bs'
import {BsPatchCheckFill} from 'react-icons/bs'


const experience = () => {
  return (
    <section id="experience"> 
    <h5>The Skills I Have</h5>
    <h2>Experience</h2>

    <div className="container experience__container">
      <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>  

            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article> 
            
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article> 

            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React.JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article> 

            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>VUE.JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article> 

            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Bootstrap 5</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article> 

          </div>
      </div>
      {/* end of front */}
      <div className="experience__backend">

          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Node.JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>  

            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article> 
            
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article> 

            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article> 

            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>PostgresSQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article> 

          </div>
      </div>
    </div>


    </section>
  )
}

export default experience