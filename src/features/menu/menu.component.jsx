import React from 'react'
import './menu.css'

export function MenuComponent() {
  return (
    <div id={'menu'} className={'menu'}>
      <ul>
        <li><a href='/#film'>FILMS</a></li>
        <li><a href='#exteriorPhotography'>EXTERIOR</a></li>
        <li><a href='/#interiorPhotography'>INTERIOR</a></li>
        <li><a href='/#aerialPhotography'>AERIAL</a></li>
        <li><a href='#googlemaps'>STREET VIEW</a></li>
        <li><a href='/#contact'>CONTACT</a></li>

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

        <li>
          <a href='https://astrography.com/product-category/grzegorz-marcinek/' target='_blank' rel="noopener noreferrer">
            PRINTS
          </a>
        </li>
      </ul>
    </div>
  )
}