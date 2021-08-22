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
  `https://lh3.google.com/pw/AM-JKLVT5PDitXTyCqL_bxEeSnz_kBmoR4IXKWTm6NC7msCM4ClDJ_JtoR3pRS6XtlOCyxPOWIZqgwWt7kWCkChaoM5jBXewu6Q=<%= size %>`,
  `https://lh3.google.com/pw/AM-JKLUAD9hZiu0XVviNwlANV4IISnjSl4mznzciKk8HuESmcfUJf9QiKRBT6BgtA_lOaQ3Tk3GJTh22J8SK1DMULrM3JGnd3I8=<%= size %>`,
  `https://lh3.google.com/pw/AM-JKLVEjX4g8ktBgPhcOnqXl8HMIa_VRVZYquedVongeyHcF7sSwYnm6gJsG3C6czfjbzlLJMgqHyqjBtYZ5FYlvc0-CiF1-S0=<%= size %>`,
  `https://lh3.google.com/pw/AM-JKLXvTjvMVRwxC8AynWq7P83VuGB00il4dt9NfdwiuoaJEGvSyQrp1HF_OU227gixXcUYtR_WVs4rhcI4FGB6rlFYViv-j2A=<%= size %>`,
  `https://lh3.google.com/pw/AM-JKLXvaYNJydFsE7f5jyc_UPRqI6WqEBI6-6NSKsVXLNjCVj3kMfr7qkoYTJ66UISwlcizADr3354nluzS_OGxArnRwYA4dG8=<%= size %>`,
  `https://lh3.google.com/pw/AM-JKLVy_xV90z4xyH7ec4Kjpp4EGpOXhah9Sy0jjkRChlBZochQB92oRvBPVpIA8278vpPwr1xKagvVACgHmFxSDnI6zkbdHDU=<%= size %>`,
]

export const PHOTOS_PAGE_DESCTOP_IMAGES = [
  `https://lh3.google.com/pw/AM-JKLU_1zAEqtMv3NuBPDX9zmmcBO4IhnTYbeHGuOmxUpKoODXPbeX4W67ncIVkQhsHzXyUoK3r_iJ5VkJ9b_qJLc5_lsBek94=<%= size %>`,
  `https://lh3.google.com/pw/AM-JKLWD7Vm_SfI8x7QSERFP3YKLdP37bdJcHUZRs1RG5WlXf4PJJXCijLIcfDv587ztHB7lDSRTAeiMpBIXtF2NzbbTt-OzvBw=<%= size %>`,
  `https://lh3.google.com/pw/AM-JKLUl9gMBFaRVXunoUcAKAarW_xdekMO5LOFgwHumW3-7n7BhfGnxGf5HRKB0yjZE329zx8PPycVDcJdRGE3n4VIuGgOtya4=<%= size %>`,
  `https://lh3.google.com/pw/AM-JKLVEIJ1t_X9R7SgPSNuvuOm-ywwnWD9LLsZqtVmQbaIsIrIrBFnJbE8ocuWhicne6GrKsDogAEma7NJBArucCk4Obc1INcQ=<%= size %>`,
  `https://lh3.google.com/pw/AM-JKLUsTpaUeMqws2UGFfjAq-KPqBw2nPl3O__0UpyxY1FDWZf64v_qwKMhj-7UlHfi7J1Ls_52n5qGW4z6jg0vHfSUCQRM8UY=<%= size %>`,
  `https://lh3.google.com/pw/AM-JKLUYv85yvub2V8dnCV1xzUysPMRBt4zuuB9_mEbov7YxZj5ZZdKzvdJuc562HwXklemIFK1Zpnx2777DwOeZCK64lUlJ5GA=<%= size %>`,
  `https://lh3.google.com/pw/AM-JKLU0SSQyoDIM7zVhsdW49lGOnC7vzrqSVmaNxvQt7k0WSyF6r5npMnFATXx2i6HWqW2xUQspnhltMLN-LtPwiorJur6hrj4=<%= size %>`,
  `https://lh3.google.com/pw/AM-JKLUakiZEYWgK8o4Fl20Bjcmpcj4NprLBVMHUHsNOxucjIkb0FNW7dt03aBhA5AC1kmVLO02K8f0zDx3BHJmIkj1rTrVC5p8=<%= size %>`,
  `https://lh3.google.com/pw/AM-JKLX3vSBqvXRr1qe6-XY3kpU_xctUymRRcWajSR5aJtzwNAVeOD3gLaMTN94agRanlouRlk4qb531TdkG-eATyVtd5un3hPc=<%= size %>`,
]