import React from 'react'
import './photos.page.css'
import { Container, Row, Col } from 'react-grid-system'
import {
  getImagesDesctop,
  getImagesMobile,
  getPhotosThumbnailMobile,
  getPhotosThumbnailDesktop,
} from './photos.page.service'
import {
  BrowserView,
  MobileView
} from 'react-device-detect'

import PhotoSlide from '../../components/photo.slide/photo.slide.component'

export default class PhotosPage extends React.Component {
  render() {
    return (
      <div className='section' id='section-photography'>
        <div className='slide trek-bg' id='section-photography-article'>
          <div className='fp-content t-white'>
            <h1 style={{ textAlign: 'center', marginBottom: '0', width: '100%' }}>AEROPAN <span style={{ fontWeight: '200' }}>TREK</span></h1>
            <div className='break-2' />

            <Container>
              <Row>
                <Col md={3}></Col>
                <Col md={7}>
                  <Row>
                    <BrowserView>
                      <a href={'#trek/1'}>
                        <button>Watch gallery <i className='icon-right-open' /></button>
                      </a>
                    </BrowserView>
                  </Row>

                  <div className='break-1' />

                  <Row>
                    <BrowserView>
                      <div className='thumbnail-container'>
                        {getPhotosThumbnailDesktop().map((img, index) => (
                          <a href={`#trek/${index + 1}`} className='thumbnail' key={`trek-thumbnail-${index}`}>
                            <img key={`trek-desktop-thumb-${index}`} src={img} alt={`thumb-${index}`} />
                          </a>
                        ))}
                      </div>
                    </BrowserView>

                    <MobileView>
                      <div className='thumbnail-container'>
                        {getPhotosThumbnailMobile().map((img, index) => (
                          <a href={`#trek/${index + 1}`} className='thumbnail' key={`trek-thumbnail-${index}`}>
                            <img key={`trek-mobile-thumb-${index}`} src={img} alt={`thumb-${index}`} />
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
            <PhotoSlide key={`trek-photoslide-desktop-${index}`} img={img} index={index} titleBold='AEROPAN' titleRegular=' TREK' />
          ))}
        </BrowserView>

        <MobileView>
          {getImagesMobile().map((img, index) => (
            <PhotoSlide key={`trek-photoslide-mobile-${index}`} img={img} index={index} titleBold='AEROPAN' titleRegular=' TREK PHOTOGRAPHY' />
          ))}
        </MobileView>
      </div>
    )
  }
}

