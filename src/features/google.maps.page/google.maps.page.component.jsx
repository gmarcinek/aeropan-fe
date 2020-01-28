import React from 'react'
import './google.maps.page.css'



export default class GoogleMapsPageComponent extends React.Component {
  render() {
    return (
      <div className='section fp-controlArrow__always-visible' id='section-google-maps'>
        <div className='slide' id='section-google-maps-article'>
          <div className='fp-content t-white'>
            <h1 style={{ textAlign: 'center', marginBottom: '0', width: '100%' }}>AEROPAN <span style={{ fontWeight: '200' }}>GOOGLE MAPS</span></h1>
            <div style={{ textAlign: 'center' }}>PRESENTS</div>
          </div>

          <div className='slide'>
            <div className='fp-bg'>
              <iframe className='covered'
                src='https://www.google.com/maps/embed?pb=!4v1580168837211!6m8!1m7!1sCAoSLEFGMVFpcE1FUmZldTdKX2pJd3V4T1dRaXFiRVBpLXE1eFJrYmd1VTY4bDd5!2m2!1d51.21089358218426!2d22.54359995806683!3f0!4f0!5f0.7820865974627469'
                width='100%' height='100%'
                disableDefaultUI
                style={{ border: 0 }}>
              </iframe>
            </div>
            <a href={'/#googlemaps'} className='fp-content ap-galery__header-top t-white'>
              <h1 style={{ textAlign: 'center', marginBottom: '0', width: '100%' }}>AEROPAN <span style={{ fontWeight: '200' }}>GOOGLE MAPS</span></h1>
            </a>
          </div>

          <div className='slide'>
            <div className='fp-bg'>
              <iframe className='covered'
                src="https://www.google.com/maps/embed?pb=!4v1580171896473!6m8!1m7!1sCAoSLEFGMVFpcE55OGFlTlQ3ZzBlOUlSaEJYRURPTW82T3U2WkpDekZDR0RBNTJ6!2m2!1d-13.7503812!2d-71.21146379999999!3f0!4f0!5f0.7820865974627469"
                width='100%' height='100%' frameBorder='0' style={{ border: 0 }}></iframe>
            </div>
            <a href={'/#googlemaps'} className='fp-content ap-galery__header-top t-white'>
              <h1 style={{ textAlign: 'center', marginBottom: '0', width: '100%' }}>AEROPAN <span style={{ fontWeight: '200' }}>GOOGLE MAPS</span></h1>
            </a>
          </div>

          <div className='slide'>
            <div className='fp-bg'>
              <iframe className='covered' src="https://www.google.com/maps/embed?pb=!4v1580172070946!6m8!1m7!1sCAoSLEFGMVFpcE04RVR5LURXd2RZRWp2WkdyLWJyaS1JNFJOVXducW1QS2Q3dGo5!2m2!1d-13.5048046!2d-71.8179153!3f339.42459808865635!4f-18.720280354658925!5f0.4000000000000002"
                width='100%' height='100%' frameBorder='0' style={{ border: 0 }}></iframe>
            </div>
            <a href={'/#googlemaps'} className='fp-content ap-galery__header-top t-white'>
              <h1 style={{ textAlign: 'center', marginBottom: '0', width: '100%' }}>AEROPAN <span style={{ fontWeight: '200' }}>GOOGLE MAPS</span></h1>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

