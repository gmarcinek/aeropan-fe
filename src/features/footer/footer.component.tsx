import React from 'react'
import './footer.css'

export class Footer extends React.Component<{}, {}> {
  render() {
    return (
      <div id='footer' className='footer'>
        <i className='demo-icon icon-vimeo'></i>
        <a href='https://www.instagram.com/gmarcinek/' target='blank'>
          <i className='demo-icon icon-instagram'></i>
        </a>
        <a href='https://www.facebook.com/aeropan/' target='blank'>
          <i className='demo-icon icon-facebook-rect'></i>
        </a>
        <i className='demo-icon icon-twitter-bird'></i>
      </div>
    )
  }
}