import React from 'react'
import './interior.photography.page.css'
import { Container, Row, Col, Hidden } from 'react-grid-system'
import {
  getImagesMobile,
  getImagesDesctop,
  getInteriorThumbnailDesktop,
  getInteriorThumbnailMobile
} from './interior.photography.page.service'
import {
  BrowserView,
  MobileView,
} from 'react-device-detect'

import PhotoSlide from '../../components/photo.slide/photo.slide.component'

export default class InteriorPhotographyPage extends React.Component {
  render() {
    return (
      <div className='section' id='section-photography'>
        <div className='slide interior-bg' id='section-photography-article'>
          <div className='fp-content t-white'>
            <h1 style={{ textAlign: 'center', marginBottom: '0', width: '100%' }}>AEROPAN <span style={{ fontWeight: '200' }}>INTERIOR PHOTOGRAPHY</span></h1>
            <div className='break-2' />

            <Container>
              <Row>
                <Hidden sm xs>
                  <Col md={4}>
                    <img width={'100%'} alt='bg' src={'/interior_01.jpg'} />
                  </Col>
                </Hidden>

                <Col md={8}>
                  <Row>
                    <BrowserView>
                      <a href={'#interiorPhotography/1'}>
                        <button>Watch gallery <i className='icon-right-open' /></button>
                      </a>
                    </BrowserView>
                  </Row>

                  <div className='break-1' />

                  <Row>
                    <BrowserView>
                      <div className='thumbnail-container'>
                        {getInteriorThumbnailDesktop().map((img, index) => (
                          <a href={`#interiorPhotography/${index + 1}`} className='thumbnail' key={`interior-thumbnail-${index}`}>
                            <img key={`interior-desktop-thumb-${index}`} src={img} alt={`thumb-${index}`} />
                          </a>
                        ))}
                      </div>
                    </BrowserView>

                    <MobileView>
                      <div className='thumbnail-container'>
                        {getInteriorThumbnailMobile().map((img, index) => (
                          <a href={`#interiorPhotography/${index + 1}`} className='thumbnail' key={`interior-thumbnail-${index}`}>
                            <img key={`interior-desktop-thumb-${index}`} src={img} alt={`thumb-${index}`} />
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
            <PhotoSlide key={`interior-photoslide-desktop-${index}`} img={img} index={index} titleBold='AEROPAN' titleRegular='INTERIOR PHOTOGRAPHY' />
          ))}
        </BrowserView>

        <MobileView>
          {getImagesMobile().map((img, index) => (
            <PhotoSlide key={`interior-photoslide-mobile-${index}`} img={img} index={index} titleBold='AEROPAN' titleRegular=' INTERIOR PHOTOGRAPHY' />
          ))}
        </MobileView>
      </div>
    )
  }
}

