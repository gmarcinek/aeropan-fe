export const FULLPAGE_CONFIG = {
  licenseKey: 'YOUR_KEY_HERE',
  scrollingSpeed: 700,
  menu: 'menu',
  lockAnchors: false,
  anchors: [
    'film',
    'aerialPhotography',
    'exteriorPhotography',
    'interiorPhotography',
    'trek',
    'googlemaps',
    'contact',
  ],
  navigation: true,
  navigationPosition: 'right',
  slidesNavigation: true,
  slidesNavPosition: 'bottom',

  //Scrolling
  css3: true,
  easing: 'easeInOutCubic',
  easingcss3: 'ease',
  loopBottom: false,
  loopTop: false,
  loopHorizontal: false,
  continuousVertical: false,
  continuousHorizontal: false,
  scrollHorizontally: true,
  interlockedSlides: true,
  dragAndMove: true,
  offsetSections: false,
  resetSliders: false,
  fadingEffect: true,

  scrollOverflow: true,
  scrollOverflowReset: true,
  scrollOverflowOptions: null,
  touchSensitivity: 15,
  bigSectionsDestination: null,

  //Accessibility
  keyboardScrolling: true,
  recordHistory: true,

  //Design
  controlArrows: true,
  verticalCentered: true,
  sectionsColor: [
    '#000', // film
    'rgb(39, 38, 39)', // exterior photography
    'rgb(26, 30, 35)', // interior photography
    'rgb(36, 37, 36)', // aerial photography
    'rgb(62, 69, 70)', // trek
    'rgb(97, 91, 76)', // google maps
    'rgb(16, 32, 37)', // contact
  ],
  paddingTop: '0px',
  paddingBottom: '0px',
  fixedElements: '#header',
  responsiveWidth: 0,
  responsiveHeight: 0,
  responsiveSlides: true,
  parallax: true,
  parallaxOptions: {
    type: 'reveal',
    percentage: 76,
    property: 'translate'
  }
}

export const DESCTOP_IMAGE_SIZE = Math.round(window.innerWidth) || 1900
export const MOBILE_IMAGE_SIZE = Math.round(window.innerHeight * 1.2)
