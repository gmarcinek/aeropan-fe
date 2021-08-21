import React from 'react'
import {
  isMobile,
  MobileView,
  BrowserView
} from 'react-device-detect'
import './menu.css'

export function MenuComponent() {
  return (
    <div id={'menu'} className={`menu ${isMobile && 'menu-mobile'}`}>
      <ul>
        <li>
          <a href='https://pl-pl.facebook.com/pg/aeropan/' target='_blank' rel='noopener noreferrer'>
            <i className='aeropan-icon icon-facebook' />
          </a>
        </li>

        <li>
          <a href='https://www.instagram.com/gmarcinek/' target='_blank' rel='noopener noreferrer'>
            <i className='aeropan-icon icon-instagram' />
          </a>
        </li>

        <MobileView>
          <li></li>
        </MobileView>

        <MobileView>
          <li></li>
        </MobileView>

        <BrowserView><li><a href='/#film'>FILM</a></li></BrowserView>
        <BrowserView><li><a href='/#aerialPhotography'>AERIAL</a></li></BrowserView>
        <BrowserView><li><a href='/#interiorPhotography'>INTERIOR</a></li></BrowserView>
        <BrowserView><li><a href='/#productPhotography'>PRODUCT</a></li></BrowserView>
        <BrowserView><li><a href='/#trek'>TREK</a></li></BrowserView>
        <BrowserView><li><a href='/#googlemaps'>MAPS</a></li></BrowserView>
        <BrowserView><li><a href='/#contact'>CONTACT</a></li></BrowserView>

        <MobileView>
          <li>
            <a href='/#film'>
              <i className='aeropan-icon icon-up-1' />
            </a>
          </li>
        </MobileView>

        <MobileView>
          <li>
            <a href='/#contact'>
              <i className='aeropan-icon icon-mail' />
            </a>
          </li>
        </MobileView>
      </ul>
    </div>
  )
}