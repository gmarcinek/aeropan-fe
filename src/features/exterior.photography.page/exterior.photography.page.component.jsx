import React from 'react'
import './exterior.photography.page.css'
import { Container, Row, Col, Hidden } from 'react-grid-system'
import {
  getImagesMobile,
  getImagesDesctop,
  getExteriorThumbnailDesktop,
  getExteriorThumbnailsMobile
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
        <div className='slide exterior-bg' id='section-photography-article'>
          <div className='fp-content t-white'>
            <h1 style={{ textAlign: 'center', marginBottom: '0', width: '100%' }}>AEROPAN <span style={{ fontWeight: '200' }}>EXTERIOR PHOTOGRAPHY</span></h1>
            <div className='break-2' />

            <Container>
              <Row>

                <Hidden sm xs>
                  <Col md={5}>
                    <img width={'100%'} alt='bg' src='/exterior_01.png' />
                  </Col>
                </Hidden>
                <Col md={7}>
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
                      <div className='thumbnail-container'>
                        {getExteriorThumbnailDesktop().map((img, index) => (
                          <a href={`#exteriorPhotography/${index + 1}`} className='thumbnail' key={`exterior-thumbnail-${index}`}>
                            <img key={`exterior-desktop-thumb-${index}`} src={img} />
                          </a>
                        ))}
                      </div>
                    </BrowserView>

                    <MobileView>
                      <div className='thumbnail-container'>
                        {getExteriorThumbnailsMobile().map((img, index) => (
                          <a href={`#exteriorPhotography/${index + 1}`} className='thumbnail' key={`exterior-thumbnail-${index}`}>
                            <img key={`exterior-desktop-thumb-${index}`} src={img} />
                          </a>
                        ))}
                      </div>
                    </MobileView>
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

