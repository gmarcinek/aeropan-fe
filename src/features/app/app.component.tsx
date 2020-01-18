import React from 'react'
import ReactPlayer from 'react-player'

import { AppRouter } from './app.router'
import { Header } from '../header'
import { Footer } from '../footer'
import './app.css'

export class AppComponent extends React.Component<{}, { index: number }> {
  public render() {
    const width: number = window.innerWidth
    const height: number = window.innerHeight
    const file = width - height < 0
      ? 'http://serwer2083856.home.pl/NARODOWY_SH030_INSTA_v001.mp4'
      : 'http://serwer2083856.home.pl/NARODOWY_MAIN_HD_v001.mp4'

    return (
      <>
        <ReactPlayer
          loop
          playing
          url={file}
          width='100vw'
          height='100vh'
          muted
          style={{
            zIndex: '-100',
            position: 'absolute',
          }}
        />

        <div className='app-content'>
          
          <Header />
          <AppRouter />
          <Footer />
        </div>
      </>
    )
  }
}
