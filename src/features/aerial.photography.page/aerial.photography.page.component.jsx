import React from 'react'
import './aerial.photography.page.css'
import { Container, Row, Col, Hidden } from 'react-grid-system'
import {
  getImagesMobile,
  getImagesDesctop,
  getAerialThumbnailDesktop,
  getAerialThumbnailsMobile
} from './aerial.photography.page.service'
import {
  BrowserView,
  MobileView,
} from 'react-device-detect'

import PhotoSlide from '../../components/photo.slide/photo.slide.component'

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
                <Hidden sm xs>
                  <Col md={5}>
                    <img width={'100%'} alt='bg' src={'/aerial_01.png'} />
                  </Col>
                </Hidden>
                <Col md={7}>
                  <Row>
                    <BrowserView>
                      <a href={'#aerialPhotography/1'}>
                        <button>Watch gallery <i className='icon-right-open' /></button>
                      </a>
                    </BrowserView>
                  </Row>
                  <div className='break-1' />
                  <Row>
                    <BrowserView>
                      <div className='thumbnail-container'>
                        {getAerialThumbnailDesktop().map((img, index) => (
                          <a href={`#aerialPhotography/${index + 1}`} className='thumbnail' key={`aerial-thumbnail-${index}`}>
                            <img key={`aerial-desktop-thumb-${index}`} src={img} alt={`thumb-${index}`} />
                          </a>
                        ))}
                      </div>
                    </BrowserView>

                    <MobileView>
                      <div className='thumbnail-container'>
                        {getAerialThumbnailsMobile().map((img, index) => (
                          <a href={`#aerialPhotography/${index + 1}`} className='thumbnail' key={`aerial-thumbnail-${index}`}>
                            <img key={`aerial-desktop-thumb-${index}`} src={img} alt={`thumb-${index}`} />
                          </a>
                        ))}
                      </div>
                    </MobileView>
                  </Row>
                </Col>
              </Row>
            </Container>
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

