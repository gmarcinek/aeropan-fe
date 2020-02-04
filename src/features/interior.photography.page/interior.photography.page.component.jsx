import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import {
  INTERIOR_PHOTOGRAPHY_PAGE_MOBILE_IMAGES,
  INTERIOR_PHOTOGRAPHY_PAGE_DESCTOP_IMAGES
} from './interior.photography.page.service'
import {
  BrowserView,
  MobileView,
} from 'react-device-detect'

import PhotoSlide from '../../components/photo.slide/photo.slide.component'
import { Icon } from '../../components/icon/icon.component'

export default class InteriorPhotographyPage extends React.Component {
  render() {
    return (
      <div className='section' id='section-photography'>
        <div className='slide' id='section-photography-article'>
          <div className='fp-content t-white'>
            <h1 style={{ textAlign: 'center', marginBottom: '0', width: '100%' }}>AEROPAN <span style={{ fontWeight: '200' }}>INTERIOR PHOTOGRAPHY</span></h1>
            <div className='break-2' />

            <Container>
              <Row>
                <Col sm={7}>
                  <img width={'100%'} alt='bg' src={'/interior_01.jpg'} />
                </Col>

                <Col sm={5}>
                  <Row>
                    <a href={'#interiorPhotography/1'}><button>Watch gallery</button></a>
                    <Icon name='forward' color='white' size={'2rem'} />
                  </Row>
                  <div className='break-1' />
                  <Row>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </Row>
                </Col>
              </Row>
            </Container>
            <div className='break-8' />
          </div>
        </div>

        <BrowserView>
          {INTERIOR_PHOTOGRAPHY_PAGE_DESCTOP_IMAGES.map((img, index) => (
            <PhotoSlide key={`interior-photoslide-desktop-${index}`} img={img} index={index} titleBold='AEROPAN' titleRegular='INTERIOR PHOTOGRAPHY' />
          ))}
        </BrowserView>

        <MobileView>
          {INTERIOR_PHOTOGRAPHY_PAGE_MOBILE_IMAGES.map((img, index) => (
            <PhotoSlide key={`interior-photoslide-mobile-${index}`} img={img} index={index} titleBold='AEROPAN' titleRegular=' INTERIOR PHOTOGRAPHY' />
          ))}
        </MobileView>
      </div>
    )
  }
}
