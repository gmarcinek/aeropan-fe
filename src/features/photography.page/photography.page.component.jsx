import React from 'react'
import { DESCTOP_IMAGES, MOBILE_IMAGES } from '../app'
import PhotoWidget from '../../components/photo.widget/photo.widget.component'
import {
  BrowserView,
  MobileView,
} from 'react-device-detect'
import PhotoSlide from '../../components/photo.slide/photo.slide.component'

export default class PhotographyPageComponent extends React.Component {
  render() {
    return (
      <div className='section' id='section-photography'>
        <div className='slide' id='section-photography-article'>
          <div className='fp-content t-white'>

            <h1 style={{ textAlign: 'center', marginBottom: '0', width: '100%' }}>AEROPAN <span style={{ fontWeight: '200' }}>PHOTOGRAPHY</span></h1>
            <div style={{ textAlign: 'center' }}>PRESENTS</div>

            <div className='break-8' />

            <div className='article-container'>
              <PhotoWidget titleBold='EXTERIOR' titleRegular='PHOTOGRAPHY' url='#realisations/1' img='/exterior_01.png' />
              <PhotoWidget titleBold='INTERIOR' titleRegular='PHOTOGRAPHY' url='#realisations/10' img='/interior_01.jpg' />
              <PhotoWidget titleBold='AERIAL' titleRegular='PHOTOGRAPHY' url='#realisations' img='/aerial_01.png' />
              <PhotoWidget titleBold='ILUSTRATION' titleRegular='PHOTOGRAPHY' url='#realisations' img='/ilustration_01.jpg' />
            </div>

            <div className='break-8' />
          </div>
        </div>

        <BrowserView>
          {DESCTOP_IMAGES.map((img, index) => (
            <PhotoSlide img={img} index={index} titleBold='AEROPAN' titleRegular='PHOTOGRAPHY' />
          ))}
        </BrowserView>

        <MobileView>
          {MOBILE_IMAGES.map((img, index) => (
            <PhotoSlide img={img} index={index} titleBold='AEROPAN' titleRegular='PHOTOGRAPHY' />
          ))}
        </MobileView>
      </div>
    )
  }
}

