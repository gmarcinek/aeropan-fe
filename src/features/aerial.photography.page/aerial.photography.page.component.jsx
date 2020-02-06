import React from 'react'
import './aerial.photography.page.css'
import { Container, Row, Col } from 'react-grid-system'
import {
  getImagesMobile,
  getImagesDesctop,
  getAerialThumbnailDesktop
} from './aerial.photography.page.service'
import {
  BrowserView,
  MobileView,
} from 'react-device-detect'

import PhotoSlide from '../../components/photo.slide/photo.slide.component'
import { Icon } from '../../components/icon/icon.component'

export default class AerialPhotographyPage extends React.Component {
  render() {
    return (
      <div className='section' id='section-photography'>
        <div className='slide aerial-bg' id='section-photography-article'>
          <div className='fp-content t-white'>
            <h1 style={{ textAlign: 'center', marginBottom: '0', width: '100%' }}>AEROPAN <span style={{ fontWeight: '200' }}>AERIAL PHOTOGRAPHY</span></h1>
            <div className='break-2' />

            <Container>
              <Row>
                <Col sm={5}>
                  <img width={'100%'} alt='bg' src={'/aerial_01.png'} />
                </Col>

                <Col sm={7}>
                  <Row>
                    <a href={'#aerialPhotography/1'}><button>Watch gallery</button></a>
                    <Icon name='forward' color='white' size={'2rem'} />
                  </Row>
                  <div className='break-1' />
                  <Row>
                    <div className='thumbnail-container'>
                      {getAerialThumbnailDesktop().map((img, index) => (
                        <a href={`#aerialPhotography/${index + 1}`} className='thumbnail' key={`aerial-thumbnail-${index}`}>
                          <img key={`aerial-desktop-thumb-${index}`} src={img} />
                        </a>
                      ))}
                    </div>
                  </Row>
                </Col>
              </Row>
            </Container>
            <div className='break-8' />
          </div>
        </div>


        <BrowserView>
          {getImagesDesctop().map((img, index) => (
            <PhotoSlide key={`interior-photoslide-desktop-${index}`} img={img} index={index} titleBold='AEROPAN' titleRegular='AERIAL PHOTOGRAPHY' />
          ))}
        </BrowserView>

        <MobileView>
          {getImagesMobile().map((img, index) => (
            <PhotoSlide key={`interior-photoslide-mobile-${index}`} img={img} index={index} titleBold='AEROPAN' titleRegular=' AERIAL PHOTOGRAPHY' />
          ))}
        </MobileView>
      </div>
    )
  }
}

