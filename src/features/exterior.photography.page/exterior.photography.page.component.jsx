import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import {
  getImagesMobile,
  getImagesDesctop,
  getThumbnailDesktop
} from './exterior.photography.page.service'
import {
  BrowserView,
  MobileView,
  isBrowser
} from 'react-device-detect'

import PhotoSlide from '../../components/photo.slide/photo.slide.component'

export default class ExteriorPhotographyPage extends React.Component {
  render() {
    return (
      <div className='section' id='section-photography'>
        <div className='slide' id='section-photography-article'>
          <div className='fp-content t-white'>
            <h1 style={{ textAlign: 'center', marginBottom: '0', width: '100%' }}>AEROPAN <span style={{ fontWeight: '200' }}>EXTERIOR PHOTOGRAPHY</span></h1>
            <div className='break-2' />

            <Container>
              <Row>
                <Col sm={5}>
                  <img width={'100%'} alt='bg' src={
                    isBrowser
                      ? '/exterior_01.png'
                      : '/exterior_02.jpg'
                  } />
                </Col>

                <Col sm={7}>
                  <Row>
                    <a href={'#exteriorPhotography/1'}>
                      <button>Watch gallery <i className='icon-right-open' /></button>
                    </a>
                  </Row>
                  <div className='break-1' />
                  <Row>
                    <p>Aeropan provides extensive solution for exterior architecture photography, which includes aerial, classical and spherical visualisation of a given subject.</p>
                  </Row>
                  <div className='break-1' />
                  <Row>
                    <BrowserView>
                      {getThumbnailDesktop().map((img, index) => (
                        <img key={`exterior-desktop-thumb-${index}`} src={img} />
                      ))}
                    </BrowserView>
                  </Row>
                </Col>
              </Row>
            </Container>
            <div className='break-8' />
          </div>
        </div>

        <BrowserView>
          {getImagesDesctop().map((img, index) => (
            <PhotoSlide key={`interior-photoslide-desktop-${index}`} img={img} index={index} titleBold='AEROPAN' titleRegular='EXTERIOR PHOTOGRAPHY' />
          ))}
        </BrowserView>

        <MobileView>
          {getImagesMobile().map((img, index) => (
            <PhotoSlide key={`interior-photoslide-mobile-${index}`} img={img} index={index} titleBold='AEROPAN' titleRegular=' EXTERIOR PHOTOGRAPHY' />
          ))}
        </MobileView>
      </div>
    )
  }
}

