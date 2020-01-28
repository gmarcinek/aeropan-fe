import React from 'react'
import { BrowserView, MobileView } from 'react-device-detect'

export default class ExteriorWidgetComponent extends React.Component {
  render() {
    return (
      <div className='article'>
        <h2>EXTERIOR <span style={{ fontWeight: '200' }}>PHOTOGRAPHY</span></h2>
      
        <BrowserView>
        <img width={'100%'} alt='bg' src={'/exterior_01.png'} />
        </BrowserView>
        <MobileView>
        <img width={'100%'} alt='bg' src={'/exterior_03.jpg'} />
        </MobileView>

        <div className='break-1' />
        <button>Call Now</button>
        <button className='secondary'>Watch More</button>
        <div className='break-4' />
      </div>
    )
  }
}

