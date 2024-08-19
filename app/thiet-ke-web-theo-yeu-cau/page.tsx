import React from 'react'
import Header from './Header'
import Info from './Info'
import PriceTable from './PriceTable'

const page = () => {
  return (
    <main className="mt-20">
      <Header/>
      <Info/>
      <PriceTable/>
    </main>
  )
}

export default page