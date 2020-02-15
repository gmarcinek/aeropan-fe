import React from 'react'
import {
  isMobile,
  isBrowser,
  BrowserView
} from 'react-device-detect'
import './menu.css'

export function MenuComponent() {
  return (
    <div id={'menu'} className={'menu'}>
      <ul>
        <BrowserView><li><a href='/#film'>FILM</a></li></BrowserView>
        <BrowserView><li><a href='#exteriorPhotography'>EXTERIOR</a></li></BrowserView>
        <BrowserView><li><a href='/#interiorPhotography'>INTERIOR</a></li></BrowserView>
        <BrowserView><li><a href='/#aerialPhotography'>AERIAL</a></li></BrowserView>
        <BrowserView><li><a href='#googlemaps'>MAPS</a></li></BrowserView>

        <li><a href='#contact'>CONTACT</a></li>

        <li>
          <a href='https://pl-pl.facebook.com/pg/aeropan/' target='_blank' rel="noopener noreferrer">
            <i className='aeropan-icon icon-facebook' />
          </a>
        </li>

        <li>
          <a href='https://www.instagram.com/gmarcinek/' target='_blank' rel="noopener noreferrer">
            <i className='aeropan-icon icon-instagram' />
          </a>
        </li>
        
        <BrowserView>
          <li>
            <a href='https://astrography.com/product-category/grzegorz-marcinek/' target='_blank' rel="noopener noreferrer">
              PRINTS
          </a>
          </li>
        </BrowserView>
      </ul>
    </div>
  )
}