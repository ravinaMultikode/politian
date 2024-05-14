import React from 'react'
import AboutBanner from './AboutBanner'
import GallerySection from './GallerySection'
import DonersArea from './DonersArea'
import IconArea from './IconArea'

const Gallery = ({mainTitle}) => {
  return (
    <>
    <AboutBanner title={mainTitle}/>
    <GallerySection/>
    <DonersArea/>
    <IconArea/>
      
    </>
  )
}

export default Gallery
