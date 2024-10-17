"use client"
import Bio from '@/components/about/aboutInformation'
import Component from '@/components/information/information'
import MyServices from '@/components/servi/servicios'
import React from 'react'

export default function page() {
  return (
    <div>
       <Component/>
       <Bio/>
       <MyServices/>
    </div>
   

  )
}
