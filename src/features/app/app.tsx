import React from 'react'
import { AppRouter } from './app.router'
import { Header } from '../header'
import './app.css'
import { Footer } from '../footer'

export class AppComponent extends React.Component<{}, {}> {
  public render() {
    return (
      <>
        <div style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          position: 'fixed',
          margin: 0,
          padding: 0,
          top: 0,
          zIndex: -1
        }}>
          <video
            autoPlay={true}
            loop
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
            src="./NARODOWY_SH030_4k_v001.mp4"
          />
        </div>

        <div className='app'>
          <Header />
          <AppRouter />
          <Footer />
        </div>
      </>
    )
  }
}
