"use client"
import Bio from '@/components/about/aboutInformation'
import SkillsCarousel from '@/components/carrucel/carrucel'
import ContactForm from '@/components/contact/contact'
import Component from '@/components/information/information'
import MyServices from '@/components/servi/servicios'
import PortfolioGrid from '@/components/works/works'

export default function page() {

  return (
    <div>
         <Component/>
       <Bio/>
       <MyServices/>
       <SkillsCarousel />
       <PortfolioGrid/>
       <ContactForm/>
  
    </div>
   

  )
}
