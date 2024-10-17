import React from 'react'
import Services from '../containers/Services'
import Header from './Header'
import Testimonial from '../containers/Testimonial'

const page = () => {
  return (
    <main className="mt-20">
        <Header/>
        <Services/>
        <Testimonial/>
    </main>
  )
}

export default page