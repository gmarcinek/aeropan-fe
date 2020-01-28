import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import { FULLPAGE_CONFIG } from './app.service'
import FilmPageComponent from '../film.page/film.page.component'
import PhotographyPageComponent from '../photography.page/photography.page.component'
import ContactPageComponent from '../contact.page/contact.page.component'
import GoogleMapsPageComponent from '../google.maps.page/google.maps.page.component'

export default class App extends React.Component {
  render() {
    return (
      <ReactFullpage
        {...FULLPAGE_CONFIG}

        render={({ state, fullpageApi }) => {
          return (
            <div>
              <ReactFullpage.Wrapper>
                <FilmPageComponent />
                <PhotographyPageComponent />
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

