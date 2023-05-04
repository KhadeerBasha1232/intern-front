import React from 'react'
import Blog from './Landing/Blog'
import Content from './Landing/Content'
import Feature from './Landing/Feature'
import Hero from './Landing/Hero'
import Hero1 from './Home/Hero'
import Category from './Home/Category'
import Gallery from './Home/Gallery'
import Statistic from './Home/Statistic'
import Testimonial from './Home/Testimonial'
const Home = () => {
  if(!localStorage.getItem("token")){
  return (
    <div className="mx-5">
      <Hero/>
      <Blog/>
      <Content/>
      <Feature/>
    </div>
  )}
  else{
    return (
      <div>
        <Hero1/>
        <Category/>
        <Statistic/>
        <Gallery/>
        <Testimonial/>
      </div>
    )
  }
}

export default Home
