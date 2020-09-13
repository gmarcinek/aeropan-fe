import React from 'react'
import './google.maps.page.css'
import { GOOGLE_MAPS_ITEMS } from './google.maps.page.service'

export default class GoogleMapsPage extends React.Component {
  render() {
    return (
      <div className='section fp-controlArrow__always-visible' id='section-google-maps'>
        <div className='slide google-bg' id='section-google-article'>
          <div className='fp-content t-white'>
            <h1 style={{ textAlign: 'center', marginBottom: '0', width: '100%' }}>AEROPAN <span style={{ fontWeight: '200' }}>& GOOGLE MAPS</span></h1>
            <div style={{ textAlign: 'center' }}>over 42 500 000 views</div>
            <div className='break-2' />
            <div style={{ textAlign: 'center' }}>
              <a href={'#googlemaps/1'}>
                <button>Watch gallery <i className='icon-right-open' /></button>
              </a>
            </div>
          </div>
        </div>

        {GOOGLE_MAPS_ITEMS.map((url, index) => {
          return (
            <div className='slide'>
              <div className='fp-bg'>
                <iframe
                  src={url}
                  key={`map-${index}`}
                  title={`map-${index}`}
                  className='covered'
                  width='100%'
                  height='100%'
                  frameBorder='0'
                  style={{ border: 0 }}>
                </iframe>
              </div>
              <a href={'/#googlemaps'} className='fp-content ap-galery__header-top t-white'>
                <h1 style={{ textAlign: 'center', marginBottom: '0', width: '100%' }}>AEROPAN <span style={{ fontWeight: '200' }}>GOOGLE MAPS</span></h1>
              </a>
            </div>
          )
        })}

      </div>
    )
  }
}

