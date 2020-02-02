import React from 'react'
import {isBrowser} from 'react-device-detect'

export default class FilmPageComponent extends React.Component {
  render() {
    const mobileVideo = 'https://serwer2083856.home.pl/DJI_0225_2.mp4'
    // const browserVideo = 'https://serwer2083856.home.pl/NARODOWY_MAIN_HD_v001.mp4'
    const browserVideo = 'https://serwer2083856.home.pl/AEROPAN_MAIN_001.mp4'

    return (
      <div className='section'>
        <video
          loop
          autoPlay
          data-autoplay
          src={isBrowser ? browserVideo : mobileVideo}
          muted
          className='covered'
        />

        <div className='fp-content ap-slide__header t-white'>
          <h1 style={{ textAlign: 'center', marginBottom: '0' }}>AEROPAN <span style={{ fontWeight: '200' }}>FILMS</span></h1>
          <div style={{ textAlign: 'center' }}>PRESENTS</div>
        </div>
      </div>
    )
  }
}

