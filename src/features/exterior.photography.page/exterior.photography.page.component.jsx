import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import {
  EXTERIOR_PHOTOGRAPHY_PAGE_MOBILE_IMAGES,
  EXTERIOR_PHOTOGRAPHY_PAGE_DESCTOP_IMAGES
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
                <Col sm={7} >
                  <Row>
                    <img width={'100%'} alt='bg' src={
                      isBrowser
                        ? '/exterior_01.png'
                        : '/exterior_02.jpg'
                    } style={{ border: '0.5rem solid white' }} />
                  </Row>
                </Col>

                <Col sm={5}>
                  <div className='break-1' />
                  <Row>
                    <a href={'#exteriorPhotography/1'}>
                      <button>Watch gallery <i className='icon-right-open' /></button>
                    </a>
                  </Row>
                  <div className='break-1' />
                  <Row>
                    <p>Aeropan provides extensive solution for exterior architecture photography, which includes aerial, classical and spherical visualisation of a given subject.</p>
                  </Row>
                </Col>
              </Row>
            </Container>
            <div className='break-8' />
          </div>
        </div>

        <BrowserView>
          {EXTERIOR_PHOTOGRAPHY_PAGE_DESCTOP_IMAGES.map((img, index) => (
            <PhotoSlide key={`exterior-photoslide-desktop-${index}`} img={img} index={index} titleBold='AEROPAN' titleRegular='EXTERIOR PHOTOGRAPHY' />
          ))}
        </BrowserView>

        <MobileView>
          {EXTERIOR_PHOTOGRAPHY_PAGE_MOBILE_IMAGES.map((img, index) => (
            <PhotoSlide key={`exterior-photoslide-mobile-${index}`} img={img} index={index} titleBold='AEROPAN' titleRegular=' EXTERIOR PHOTOGRAPHY' />
          ))}
        </MobileView>
      </div>
    )
  }
}

