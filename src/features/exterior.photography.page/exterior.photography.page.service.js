import { MOBILE_IMAGE_SIZE, DESCTOP_IMAGE_SIZE } from '../app'
import { template } from 'lodash'

export const getImagesMobile = () => {
  return EXTERIOR_PHOTOGRAPHY_PAGE_MOBILE_IMAGES.map((url) => {
    return template(url)({ size: `s${MOBILE_IMAGE_SIZE}` })
  })
}

export const getImagesDesctop = () => {
  return EXTERIOR_PHOTOGRAPHY_PAGE_DESCTOP_IMAGES.map((url) => {
    return template(url)({ size: `s${DESCTOP_IMAGE_SIZE}` })
  })
}

export const getExteriorThumbnailsMobile = () => {
  return EXTERIOR_PHOTOGRAPHY_PAGE_MOBILE_IMAGES.map((url) => {
    return template(url)({ size: `s${100}-c` })
  })
}

export const getExteriorThumbnailDesktop = () => {
  return EXTERIOR_PHOTOGRAPHY_PAGE_DESCTOP_IMAGES.map((url) => {
    return template(url)({ size: `s${100}-c` })
  })
}

export const EXTERIOR_PHOTOGRAPHY_PAGE_MOBILE_IMAGES = [
  
]

export const EXTERIOR_PHOTOGRAPHY_PAGE_DESCTOP_IMAGES = [
  

  `https://lh3.google.com/pw/ACtC-3c6UMsePLt4bzcyx0HQgFly9yjeG9dnUGEaLssS8Bz1WULgw_hrHPcKC7Hq9fcir3srXw7nPGPwZlLu0g9w9z9RMp4Q62I=<%= size %>`,
]
