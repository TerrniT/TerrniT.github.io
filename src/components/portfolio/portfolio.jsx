import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/me-about.jpg'
import IMG2 from '../../assets/me-about.jpg'
import IMG3 from '../../assets/me-about.jpg'
import IMG4 from '../../assets/me-about.jpg'
import IMG5 from '../../assets/me-about.jpg'
import IMG6 from '../../assets/me-about.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    review: 'Some information',
    title: 'Random title',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 2,
    image: IMG2,
    review: 'Some information',
    title: 'Random title',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 3,
    image: IMG3,
    review: 'Some information',
    title: 'Random title',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 4,
    image: IMG4,
    review: 'Some information',
    title: 'Random title',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 5,
    image: IMG5,
    review: 'Some information',
    title: 'Random title',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 6,
    image: IMG6,
    review: 'Some information',
    title: 'Random title',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
]


// Method for generate portfolio cards
const portfolio = () => {
  return (
    <section id="portfolio" className='subscription'>
      <h5> My Recent Work </h5>
      <h2> Portfolio </h2> 

      <div className="container portfolio__container">
        {
          data.map(({image, review , title ,github ,demo},id) => {
              return (
                  <article key={id} className='portfolio__item'>
                    <div className="portfolio__item-image">
                    <div className="background__image"><img src={image} alt={title} /></div>
                      <div className="front"><img src={image} alt={title} /></div>
                      <div className="back"><span>{review}</span></div>
                      
                    </div>

                    <h3>{title}</h3>

                      <div className="portfolio__item-cta">
                        <a href={github} className='btn' target="_blank" rel="noopener noreferrer">Github </a>
                        <a href={demo} className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo </a>
                      </div>
                  </article>
              )
          })
        }
      </div>


    </section>
  )
}

export default portfolio