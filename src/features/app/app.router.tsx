import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { MainPageComponent } from '../main.page'
import { PlaceholderComponent } from '../placeholder/indx'

export class AppRouter extends React.Component {

  public render() {
    return (
      <Switch>
        <Route
          exact
          path={'/'}
          component={MainPageComponent}
          title='main'
        />

        <Route
          exact
          path={'/offer'}
          component={PlaceholderComponent}
          title='Oferta'
        />
        />

        <Route
          exact
          path={'/demo'}
          component={PlaceholderComponent}
          title='Demo'
        />

        <Route
          exact
          path={'/contact'}
          component={PlaceholderComponent}
          title='Kontakt'
        />

        <Route
          exact
          path={'/not-found'}
          component={PlaceholderComponent}
          title='Nie znaleziono'
        />

        <Redirect to={'not-found'} />
      </Switch>
    )
  }
}
