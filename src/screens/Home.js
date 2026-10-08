import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Card from '../components/Card';

export default function Home() {
  return (
    <div className='mainpage'>

      <div>
        <Navbar />
      </div>

      <div>
        <Carousel />
      </div>

      <div className='container'>
        <div className='row'>

          <div className='col-12 col-md-6 col-lg-4'>
            <Card />
          </div>

          <div className='col-12 col-md-6 col-lg-4'>
            <Card />
          </div>

          <div className='col-12 col-md-6 col-lg-4'>
            <Card />
          </div>

          <div className='col-12 col-md-6 col-lg-4'>
            <Card />
          </div>

          <div className='col-12 col-md-6 col-lg-4'>
            <Card />
          </div>

        </div>
      </div>

      <div>
        <Footer />
      </div>

    </div>
  )
}