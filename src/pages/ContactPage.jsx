import React, { useContext } from 'react'
import BreadCumbSection from '../component/BreadCumbSection'
import { AppContext } from '../context/AppContext'
import ContactSection from '../component/ContactSection'

const ContactPage = () => {
    const {contactData} = useContext(AppContext)
  return (
    <>
    <BreadCumbSection page='Contact' />
    <ContactSection contactData={contactData} />
    </>
  )
}

export default ContactPage
