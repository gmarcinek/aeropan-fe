import React from 'react'
import { AppRouter } from './app.router'
import { Header } from '../header'
import { Footer } from '../footer'
import './app.css'
import { ImageSlider } from '../image.slider'

export class AppComponent extends React.Component<{}, { index: number }> {
  public render() {
    return (
      <>
        <ImageSlider />
        <div className='app-content'>
          <Header />
          <AppRouter />
          <Footer />
        </div>
      </>
    )
  }
}
