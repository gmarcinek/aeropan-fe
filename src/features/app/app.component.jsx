import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import { FULLPAGE_CONFIG } from './app.service'
import FilmPageComponent from '../film.page/film.page.component'
import PhotographyPage from '../photography.page/photography.page.component'
import ContactPageComponent from '../contact.page/contact.page.component'
import GoogleMapsPageComponent from '../google.maps.page/google.maps.page.component'
import ExteriorPhotographyPage from '../exterior.photography.page/exterior.photography.page.component'
import InteriorPhotographyPage from '../interior.photography.page/interior.photography.page.component'

import './app.css'
import AerialPhotographyPage from '../aerial.photography.page/aerial.photography.page.component'

export default class App extends React.Component {
  render() {
    return (
      <ReactFullpage
        {...FULLPAGE_CONFIG}

        render={() => {
          return (
            <div>
              <ReactFullpage.Wrapper>
                <FilmPageComponent />
                <PhotographyPage />
                <ExteriorPhotographyPage />
                <InteriorPhotographyPage />
                <AerialPhotographyPage />
                <GoogleMapsPageComponent />
                <ContactPageComponent />
              </ReactFullpage.Wrapper>
            </div>
          )
        }}
      />
    )
  }
}

