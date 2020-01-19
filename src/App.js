import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage'
import './App.css'
import { DESCTOP_IMAGES, MOBILE_IMAGES } from './App.service';

function App() {
  const width = window.innerWidth
  const height = window.innerHeight
  const videoFile = width - height < 0
    ? 'http://serwer2083856.home.pl/NARODOWY_SH030_INSTA_v001.mp4'
    : 'http://serwer2083856.home.pl/NARODOWY_MAIN_HD_v001.mp4'
  const imageSource = width - height < 0
    ? MOBILE_IMAGES
    : DESCTOP_IMAGES

  return (
    <>
      <ReactFullpage
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000}
        // menu='#header'
        lockAnchors={false}
        anchors={['offer', 'realisations', 'contact']}
        navigation={true}
        navigationPosition='right'
        slidesNavigation={true}
        slidesNavPosition='bottom'

        //Scrolling
        css3={true}
        easing='easeInOutCubic'
        easingcss3='ease'
        loopBottom={false}
        loopTop={false}
        loopHorizontal={true}
        continuousVertical={false}
        continuousHorizontal={false}
        scrollHorizontally={true}
        interlockedSlides={true}
        dragAndMove={true}
        offsetSections={false}
        resetSliders={true}
        fadingEffect={true}

        scrollOverflow={true}
        scrollOverflowReset={true}
        scrollOverflowOptions={null}
        touchSensitivity={15}
        bigSectionsDestination={null}

        //Accessibility
        keyboardScrolling={true}
        recordHistory={true}

        //Design
        controlArrows={true}
        verticalCentered={true}
        sectionsColor={['#000', 'rgb(16, 22, 27)', 'rgb(16, 32, 37)']}
        paddingTop='0px'
        paddingBottom='0px'
        fixedElements='#header'
        responsiveWidth={0}
        responsiveHeight={0}
        responsiveSlides={true}
        parallax={true}
        parallaxOptions={{
          type: 'reveal',
          percentage: 62,
          property: 'translate'
        }}

        render={({ state, fullpageApi }) => {
          return (
            <div>
              <ReactFullpage.Wrapper>
                <div className='section'>
                  <video
                    loop
                    autoPlay
                    data-autoplay
                    src={videoFile}
                    muted
                    className='covered'
                  />

                  <div className='fp-content t-white' style={{
                    position: 'absolute',
                    bottom: '2%',
                    left: '50%',
                    transform: 'translate(-50%)'
                  }}>
                    <h1 style={{ textAlign: 'center', marginBottom: '0' }}>AEROPAN FILMS</h1>
                    <div style={{ textAlign: 'center' }}>PRESENTS</div>
                  </div>
                </div>

                <div className='section' id='section2'>
                  <div className='slide' id='slide2-1'>
                    <div className='fp-content t-white'>

                      <h1 style={{ textAlign: 'center', marginBottom: '0' }}>AEROPAN PHOTOGRAPHY</h1>
                      <div style={{ textAlign: 'center' }}>PRESENTS</div>
                      <div className='break-8' />

                      <div className='article-container'>
                        <div className='article'>
                          <h2>Exterior photography</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                          <button>Call Now</button>
                        </div>

                        <div className='article'>
                          <h2>Interior photography</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                          <button>Call Now</button>
                        </div>

                        <div className='article'>
                          <h2>Aerial photography</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                          <button>Call Now</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {imageSource.map((imageUrl, index) => (
                    <div className='slide' id={`slide2-${index}`} key={`slide2-${index}`}>
                      <div className='fp-bg'>
                        <img className='covered' src={imageUrl} />
                      </div>
                      <div className='fp-content t-white' style={{
                        position: 'absolute',
                        bottom: '10%',
                        left: '50%',
                        transform: 'translate(-50%)'
                      }}>
                        <h1 style={{ fontSize: '3vw' }}>PHOTOGRAPHY</h1>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='section'>
                  <div className='fp-content t-white'>
                    <h1 style={{ textAlign: 'center', marginBottom: '0' }}>AEROPAN CONTACT</h1>
                    <div style={{ textAlign: 'center' }}>CALL NOW</div>
                  </div>
                </div>
              </ReactFullpage.Wrapper>
            </div>
          );
        }
        }
      />
    </>
  );
}

export default App;
