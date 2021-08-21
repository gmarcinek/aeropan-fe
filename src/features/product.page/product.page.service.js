import { MOBILE_IMAGE_SIZE, DESCTOP_IMAGE_SIZE } from '../app'
import { template } from 'lodash'

export const getImagesMobile = () => {
  return PHOTOS_PAGE_MOBILE_IMAGES.map((url) => {
    return template(url)({ size: `s${MOBILE_IMAGE_SIZE}` })
  })
}

export const getImagesDesctop = () => {
  return PHOTOS_PAGE_DESCTOP_IMAGES.map((url) => {
    return template(url)({ size: `s${DESCTOP_IMAGE_SIZE}` })
  })
}

export const getPhotosThumbnailMobile = () => {
  return PHOTOS_PAGE_MOBILE_IMAGES.map((url) => {
    return template(url)({ size: `s${100}-c` })
  })
}

export const getPhotosThumbnailDesktop = () => {
  return PHOTOS_PAGE_DESCTOP_IMAGES.map((url) => {
    return template(url)({ size: `s${100}-c` })
  })
}

export const PHOTOS_PAGE_MOBILE_IMAGES = [
  `https://lh3.google.com/pw/AM-JKLVJeIfez0jKfOpkkcCIEkIRMoCYgStOIjmKOEiy5yrACE8zFKrSIjUgLpneOImhzcMVRQsvrqLGJUAXuqMdy5mSIt42Thw=<%= size %>`,
  `https://lh3.google.com/pw/ACtC-3cRj_sXvPHmITKxPj8MHUV9zf251BTwAkv-JnE1AyCxnwu9Qzfp4NwkbpmMQMf2aNXuTZNrCDbmPvQwXmEmJZIKEW05OBo=<%= size %>`,
]

export const PHOTOS_PAGE_DESCTOP_IMAGES = [
  `https://lh3.google.com/pw/AM-JKLU_1zAEqtMv3NuBPDX9zmmcBO4IhnTYbeHGuOmxUpKoODXPbeX4W67ncIVkQhsHzXyUoK3r_iJ5VkJ9b_qJLc5_lsBek94=<%= size %>`,
  `https://lh3.google.com/pw/AM-JKLWD7Vm_SfI8x7QSERFP3YKLdP37bdJcHUZRs1RG5WlXf4PJJXCijLIcfDv587ztHB7lDSRTAeiMpBIXtF2NzbbTt-OzvBw=<%= size %>`,
  `https://lh3.google.com/pw/AM-JKLWmJAyDVhBbZzhIi5--4Va6IO_DTnZ0M96maaz3rYE3jjjJ21qQQffHut5GZO2H3MOytfu4QU951yg9e3cwCJ6ASKgg2a8=<%= size %>`,
]