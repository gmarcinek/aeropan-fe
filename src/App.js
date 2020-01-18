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
      <h1 id='#header' style={{
        zIndex: 333,
        color: '#fff',
        position: 'fixed',
        margin: '0.5rem 0rem 0rem 1rem'
      }}>
        AEROPAN
    </h1>
      <ReactFullpage
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000}
        menu='#header'
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
                    data-autoPlay
                    src={videoFile}
                    muted
                    className='covered'
                  />
                </div>

                <div class='section' id='section2'>
                  <div class='slide' id='slide2-1'>
                    <div class='fp-content t-white'>
                      <h1>Photography sessions</h1>
                    </div>
                  </div>

                  {imageSource.map((imageUrl, index) => (
                    <div class='slide' id={`slide2-${index}`}>
                      <div class='fp-bg'>
                        <img className='covered' src={imageUrl} />
                      </div>
                    </div>
                  ))}

                </div>
                <div className='section'></div>
                <div className='section'></div>
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
