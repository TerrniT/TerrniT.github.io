import React from 'react'
import './background_transition.css'
import {bounce} from 'react-animations'
import styled, { keyframes } from 'styled-components';
import 'font-awesome/css/font-awesome.min.css'
// import {BsArrow90DegDown} from 'react-icons/bs'
/**
 * 
 * Animation for gradient background
 */  
 const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;


const transition  = () => {
  return (
    <section id="background_transiton" className='background_transiton'> 
 
 
          <div className="bounce__text">
            <Bounce><h1> Scroll down </h1></Bounce>
          </div>
          {/* <i className='fa fa-spinner fa-spin'></i> */}
          {/* <i className='fa-solid fa-arrow'></i> */}
          {/* <a href="#" className="logo-arrow"><BsArrow90DegDown/></a> */}
       


    </section>
  )
}

export default transition 