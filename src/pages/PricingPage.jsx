import React, { useContext } from 'react'
import BreadCumbSection from '../component/BreadCumbSection'
import { AppContext } from '../context/AppContext'
import PricingSection from '../component/PricingSection'

const PricingPage = () => {
    const {pricingData} = useContext(AppContext)
  return (
   <>
   <BreadCumbSection page='Pricing' />
   <PricingSection pricingData={pricingData} />

   </>
  )
}

export default PricingPage
