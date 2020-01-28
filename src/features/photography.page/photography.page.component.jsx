import React from 'react'
import ExteriorWidgetComponent from './exterior.widget/exterior.widget.component'
import AerialWidgetComponent from './aerial.widget/aerial.widget.component'
import InteriorWidgetComponent from './interior.widget/interior.widget.component'
import PortraitWidgetComponent from './portrait.widget/portrait.widget.component'
import { DESCTOP_IMAGES, MOBILE_IMAGES } from '../app'
import {
  BrowserView,
  MobileView,
} from 'react-device-detect'

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
              <ExteriorWidgetComponent />
              <InteriorWidgetComponent />
              <AerialWidgetComponent />
              <PortraitWidgetComponent />
            </div>

            <div className='break-8' />
            <div className='break-8' />
          </div>
        </div>

        <BrowserView>
          {DESCTOP_IMAGES.map((img, index) => {
            return (
              <div className='slide'
                id={`section-photography-slide-${index}`}
                key={`section-photography-slide-${index}`}>

                <div className='fp-bg'>
                  <img className='covered' alt='bg' src={img} />
                </div>
                <div className='fp-content ap-galery__header t-white'>
                  <h1 style={{ textAlign: 'center', marginBottom: '0' }}>AEROPAN <span style={{ fontWeight: '200' }}>PHOTOGRAPHY</span></h1>
                </div>
              </div>
            )
          })}
        </BrowserView>

        <MobileView>
          {MOBILE_IMAGES.map((img, index) => {
            return (
              <div className='slide'
                id={`section-photography-slide-${index}`}
                key={`section-photography-slide-${index}`}>

                <div className='fp-bg'>
                  <img className='covered' alt='bg' src={img} />
                </div>
                <div className='fp-content ap-galery__header t-white'>
                  <h1 style={{ textAlign: 'center', marginBottom: '0' }}>AEROPAN <span style={{ fontWeight: '200' }}>PHOTOGRAPHY</span></h1>
                </div>
              </div>
            )
          })}
        </MobileView>
      </div>
    )
  }
}

