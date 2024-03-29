import './app.css'
import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import { FULLPAGE_CONFIG } from './app.service'
import FilmPageComponent from '../film.page/film.page.component'
import ContactPage from '../contact.page/contact.page.component'
import GoogleMapsPage from '../google.maps.page/google.maps.page.component'
import InteriorPhotographyPage from '../interior.photography.page/interior.photography.page.component'
import AerialPhotographyPage from '../aerial.photography.page/aerial.photography.page.component'
import PhotosPage from '../photos.page/photos.page.component'
import { Menu } from '../menu'
import ProductPage from '../product.page/product.page.component'

export default class App extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <ReactFullpage
          {...FULLPAGE_CONFIG}

          render={() => {
            return (
              <ReactFullpage.Wrapper>
                <FilmPageComponent />
                <AerialPhotographyPage />
                <InteriorPhotographyPage />
                <ProductPage />
                <PhotosPage />
                <GoogleMapsPage />
                <ContactPage />
              </ReactFullpage.Wrapper>
            )
          }}
        />
      </>
    )
  }
}

