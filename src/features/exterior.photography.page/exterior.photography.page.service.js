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
  `https://lh3.googleusercontent.com/V0DPMvI1bITd4aHWVqtochkHaFrTHaV9KEw5afAucZ09D_4Pd0MembucKZ36lETY6QmzBoKv5WKZo3wEbVwGGk_IkNbuw5oCdoZeqp2pJsrUCosnfrU2ValSsMtUZEfO7x-hKUzDtXGYPwV1pU4tWU5pTquOBBSQjUbHreGwcghXtl292kLzLOApupdCqh7imlzVkHyyPh8XL2wgAWXE7TguoncAhfKjQ9__WXvT2IvwjCHn4SZRYpk4lxvFPJtV8TLqCKg-jrnSw1yCoAiXRSMYD1Z-Vd78S5bTeSEKrf8GOaBYZU6Y2obNVL8Gg3difRz_RxE_1YoQUgKsM1kiZcJWCGRMGTFBGp_9FTbI0RwmhKLO3sui7bbbJhBvOX5W3IeUBZZOgJMzjhqcfcBPQe_Ten1u1Clm6fvRa0km0wMRYHV-Ib-z5RL90VVqK3qyUpAphvmpPXJu5ySK_uewVHY_V0SIBN-Xv7DAGvF4B7FtEux4Gdy1ITmC-jsu0svpRiw9u8cXRIwDAO6-FZ4iKhQWLjTuZwQrQ4uSSRoco8CIYE56-Ih5ZeaOjt0249710tq2DvuygydNrsz9Z_LX6yHwU2JDjrjGuKjkeE9Q5ilTSOHWo5zmHmm0kiCAf558flyqvxgMFEH77jOL9YFo9AYRYSOQkLomjZIDo9XoTZvUARRY1cCb5i_tzPvLkTNSfd7CCDV4o1AgRXhqPMgGEOb67OZ5_F16h7s64POd6FDW8AiXVE4VVlH6=<%= size %>`,

  `https://lh3.googleusercontent.com/WcPbq5x6Eog2iJHzV1mXRFglT4bNe97AA4osclZdnP8nK3j3vYavUxAbcwfdnE5E0EpSRL1ut3CkMq2CEUY9Jr1YzG-5ET8RLjNgF_P0NI8vBkM9PKQijpk3auscAAF9qh6kNaCL5njqxpPMPlVL4BLwLyZ8KexSgFHtPMR-bQkOyaF2xkslHjxdUPA7QA-Z14_spbp3J8dyg_7juHQLCODJaKljmO_67HI5lJ7crOncPyY05kdlitPCYMBQnw-Y1gEUCvUJU8xmg6YWqj3nYmWEcBx2EESmHOBZaNmzcYxCY1QQPrpyLyj4ltb_BubPZV5IU-Ec_FZLfW_OJB4N9_oV8ODV_61YZLL1lefRrLlEJuSyV2KiDPvoATBKq6ZCxhO8-osWl9YLJTQ2C1CtgjhcUAm0M_uBQoCbtDbdR1K8ME9TfrehAJlgnBlRCgR8-8aWll1LQAkJiy4ViXLfHqkPAap03zJOXSkIyUfTDm3rgiotGhGOuY8ugKMVFX7xpEG3hU1fNip_klk7RuHtvUJqXaehxHYJWpg5FHk02Zo5vjDA1LBVagyL368oDzt4E03aXz76qfQsTDO1lTzpCEBEKzSsXphiTissHA0B1sG4eF0IunrOYOuK0Cm-U8mJhQ1p6M47AccJYvhsSLYnOgHWDizIu6yDHyhpgEi805hGVUOY3Qo5G5vd0hLPyS4_90dPNY3eWDJpTJDjSXX3UiXlI-eVICBj1ayLCCYSrLQIUNVyxNIcgWZ1=<%= size %>`,

  `https://lh3.googleusercontent.com/qDNQLqLtLycgs-4fuYyn3Wegs6sX-CPeQjW0dlq_M-u9wvPyh_ERSBhahBFJlLBgpVaKJCN65bPZKQSTg2a05hZqQF--_KueK80Sic8xCnpOJdrWyMHJwhXsAtOtXeRqB_wTRk9kGFz0Hu1bjsbbK9F4n2aLDcX7a5d-8M_3UmvXhKfwdTOAh-p-B8BvrXzgOf0v_GH-2TrOAa5Ef4y6vOQDX4iRZk1S4QSHtYBv99UFr7S5qc2Uv1tNuCBasUMnNXypNU4lTLIXHSCfzMmIv2ohjGuFA_KaUXEcqRZwB3O7TQv7ZXMOiq3LskuY_f76a9Y2c_ggVAwTBhimi2NkCtxiNprSyIjBEyaE9RTWgLlYtLXjxMgv8dh4m-guQ_6sgVi7fhAtfEzJuivVb7-LSml_40pLA4zMreQ8haAII97FM25HAG_R_odz3eq73h4mjTSou_bwzSEJ_23L95EZIAMzDh4qAynRZ2719QyvUkhc7h5JkslCzvqIrFxTJGaMuRr-D_2oB5ohrB-RKIWhSOYWrU5rM0w1UT7_hg3TMrJe0oXVQc7xcdmyR8Qzfl4kR1wu_EtQcPjK5rortmIF7QmXGwz2xH6VXBcAEL6MGuL2h_2O2QbNDslpEBlvApSdDViTA2QV1bo49AT1fgCGct6Xe4ejxV815nhYFRIHBn8aFAwfdELZlTxOqtOJczsVSjxJR1dL3OzhHfJ-1mLVs0GAxBNRqowhaKaepa7JRG_REYh8=<%= size %>`,

  `https://lh3.googleusercontent.com/HZjHjgktbXZVaWU_3pRvKWkCQG11OycpUx0V3qJOqYPtH6DRVGFZK9eCYif3LaW4kvT0rgeU4qkN1yK1Es8mogr-MuMYrrSXskmJKgAhuOVL016zITa87AbeTUmVr0CsSCKwUl-x4ZWPSuFU6zNDMg_gnkTd62AkhM8j8dG90LVJTJM7kEE6WPlLYwefod4DZh2jzNkGPL0b9LeDLHD2HBjtu4aeztWuz2hmsjWkK94wlGmZuJnwOFX0IdC8rG5AVNfwtcs0SyK2cNGi5Z_ZNxSTW0ulJSyQ7FyEzPAZtiVxsN3yqQZVWfnwYqGbxbYd0l_AjoR_IP_S5Fo-r1QO7ZNm00u7kZY1uxwOKQ-7PvXjWymEs3NwTXSHbAXRveDxJQE-tj9n5I9DK76hVH2DHSvn9v_KXsPvmS5iPCfFSgGuwWnfdRNK5y6xSbUKxNHsHjZn4-Tx1GITl1s8b_swLu_buz6PVWgAzn4drhhr3u5YdOTKRxCunBpyPkfz5Pu-vbuucKVcphYYzaVK5Yz6FS66zsZKvxzoKpwy8MuJCRkdASjYGRxfnz5fZr9hLxHvsw-a9aRjTTlRFmseGx_UANajc2L6N_NlVtrQMgmSMnVYgc30y7q63AgF-5BR24iPbVv3XoMOsTgqz1YyKl1q6qo-ePzLhYiKUWUTJ2Jk1MspS2S5WI0o4EHEtPR3eP_MFbQerXjlk6TOXlo63UkSBb_d4SDE9HwrpislsPJnwV8cnVcD8c2EfliA=<%= size %>`,
  
  `https://lh3.googleusercontent.com/46NulHxVz5FYGaYioIsGNeU_59cm1m7npfc1gfd6JJ3t_63ky7ury6lZVPYvDzIsC2mVXNAsnTq0tjgY9ZYmmy52k7G2-4sxiCX046GNSH2evpd2djIg8DUECuq_7WFNifheG0CGdaxENfm7yKUxm_7F-WWlsTjJZcV4x4_Xn84FMnL4fg2bPa65G-69Bs1lx-GNlwCXX1bIo7z-dg0P2-1rDT8UQDdkUMEMO6mkM9Vp4aYa9MQuYNYxtvl-5IvIgKZY1nxPewWjZtZEz18DQoep5Pz_zWkuWR5pMbfTivx9Q86RvxefPPBiYnJXeku8qpH9BeQC0ixHxw1fRKhEQVOqDis2LaVS_ikZ4aS8Yxuj2Dzg9kOmQchcbRIm0POgKe17HrCpvU78TzA8tOwFssRMEBP0mGFprYql3IJb8mPKMlEdAoCFbU96DLoKXCp0oQaHogYU0Cdll5CAcZZC_8J_SmlloDqOs6W2JKFbJdEXHvrLmFKVZsg6GFiX_MNA7R8ynHNpfsNVEEiKTYADdFGY1gz9lXe0F_XU7gIApMIdMeRbgZCtCUZy1VyG9XTxSE0sYNzy7i6MaZyTt_uZf-dmltv9KBncXbAFf3ax5hd9eFUBDuiQf55UmK4amPGcgSNr6uOywwbMUsAgQJTW9H7Z-4SZtIMMjK37WdVj13WMe7M8MMln6RlFo5-VNI0yxcA98KKEPXXFm4FHeO18xmkF2J9EcvIkW3f_6RHGpbmnZbqaEG_Dwsca=<%= size %>`,

  `https://lh3.googleusercontent.com/UenPAxegUTxEHl3iPI9F5O3BUuw1ptWp0yFM83JOpv4_5gXDw1gktufS6m9wJXXhGmGp8GraH2QsLjps0jnsmsLq61EIM_q69BhlGQDc3Df4eL0IkE4kMk_P-rjOcbFw2nvHa9kL-qaCdNuqwdevzzsZLi2RNo58aBPcrnMfO4z_0Ui3nQeCQ6cLIfkd8h3Jj9DXFJ1cW040seJa5fLAJl4xWqWX7Td887-iha44xulYxZ0EE7zjrA2PcwNWr7TRRj_jpL5_5UZs8rNk8pu049BVsA8LQtWOg0r3nqXogUs2WMr_NuInJIelPa9uyHEKsYGl8scnwYwRCcs-PdARYAF8BfRK-XBXfdCjHyeomkcx0HvQGSoX8Db4fPtgT1dNf35EO0okCU38CWl5NfOI4608Mj2Ciqzj8MXAFuiL4CSR94DQLyDJZDsNRXaZgnbUl79TOKDPlpQC4S-Pl0wRE0A1b6qD_1MhC9Yu4_v-4tQ_9TNwpKFUL9FTQcDwr6wjTSIUGJcIHKwvoC7Qpaj26iS3B8dy6Pb_eoD8ElfoYp7ddSG1rJstw2H0n-YPBEHy3WiGr5n4LDPGQQvzfyyvwnhzWEJDzYvwNCNL9jja67-jKjucMS8HIF6NhpivlfXg0L327GjuPRoJG59Bh3wiwyZcQGqdox15Lr8XkVtJefNF-5QGy-8sw0wq_G7ZO_oAoqHeMvQVqph9gtwIe3csPlLcu9wdqA_qvut1i8CLzBhAC00d8njrse_0=<%= size %>`,
  
  `https://lh3.googleusercontent.com/DYHcM97G59FJJjTXMwaqp8EFbr1TA0ntc2672y45AUWwTPOLrWI0Qsk04Jkh1JjsM03-kpUXE9TLQUMfz3bQvULyXZ24XJkMY1ZDUQecpWsChNWsZXDjAIU3Xp0IWD4al_pzLB_s8dm6nxE9eQaeEolm1uInhkz8rRZc2Kk5jazBhXoANx-FIDyEiizXaPJ-N-2FP3y9loQvH2n5DaZBuhrqBpHO3aNsg_GjNRzFKz_HsLwLgdiA6GTSSjQHrnpIfc_Ja283mp7RC4Z9BK9DaGPqM98yQ7qilGu2XHCQt1m5oTzyoHKepOHurrhGbY18eG9bMvoB6Fk-HUBiWiKm391vCi4UelmDoVsJq_AkTJ-OONVibQfrFayC_JQEGWmuuPJKVEj3q-XnlU_7-66SJhi9l101glrIJm1-q9Pg8uo2lprpI_aPYmc8KA5jYFz3u7fqeuvIpOG8V9cOgG808xstdPnDLZPcacWQH3UbEcdUbVPYLCIZgCsGWsjISBU67yUG8LvJBh5k1wtUcRaFIKMHlv0_WHJkIBKTJyFMTArZ2_HYDOrkm3c-LFLpD6B51Le1f-BuiVhtztP4drssqOxXH6XG7ZFwjdfPUFMcA-EuZRdrv1WsuGqUPlXuBq2KEQVwZsfIZ4eaDMi6nB0y8wP-neYobhGTT0bkfHWZdHKzyBZxmR2QF-QMxzB0VDoP9wQh_2qBwQjoBmfHluysabEmfTL3oW-XCOSDO_trQqUqxOzKcDkTB_bg=<%= size %>`,
  
  `https://lh3.googleusercontent.com/fgQY1wUmPckeujLxe_Z3eVcMgqQPyJfTCA78R3hi132d6zeHyJCbNH3de6-dBNVYdi3tZNX7ykyxiD41vT9RD_nvIdm0_TLqFXt57ueF5qC67dHj2g8N8k4aqO6sFUFhpqS3b3IDyVhwqv-sfrVMRjT_eORu6rMceDDKEyJAIKSVx_0SzaZv0hx74qFHdp0KEtFwolUeMQm18mEXWVMe7XNJBInvETJY7fL5M-tUdesLioFlub8LsyHp6FsxHHeH0fWh7RIguVO_v5Zz9jC2k2Bn5rzXZQebe1RPmW5hySDSZGu8xCj4-FJA0vSfzdNqhoYGoQ-uOLlsO3T-oJeY5JGXduqq3MFs-F6M-cS9usVCH41SQxbR2Y_uZ6ww9e5-XV2_UjwOnAKBJSAWUM45YoxSFrvQq9YKS5JuPvkqg39cxPv4Zjp8FLY53eAs-OTgFR5XNgqjebkc8V_obiPN5UT9muTUksQK667wb5NTPvwSzgZK9FONk8wWhv5j9FDWu7e0pNuLOUfQJHLi-NlRZkPEswD7XR_0-PTpi3h2LSl_Ao8ndc5f72_dYxvwzSFqhBxdwp_FWVuYNFl7rhC6Rl6zBlfF41VXT2usvbxBzMNSl3htjRFrD8Jl_0onZfCUyCMyff8g2ub1kNkfJoaMnSl-IZ4rW-IMgHdWEBDaJLBX4j0QqYvQ8DLpOCbRldh0QiR1qjKLAST91MqOt0ycsuN-M3LEGDKqTk9-cVL3icNe00kDmV0Y9LvY=<%= size %>`,
  
  `https://lh3.googleusercontent.com/-n9vz8lhyFD2EigQhu7D_1UzmwrhdMyKPqDMj6xRXNQ65mars4kWIy_GdnF1I9Ky1D1T8ylYE_mr-ASzpuZPe425PeDxirJIHSVdfLKLs5FJyJjkZ_rif4eoePAnekWOcDBNwLu-aWF8f0tclUz2eilSW_qKpnb81fVEq0mGceBD_hsp0K-HmSkB8X-TQW0651ilYUs8EK0LHb3Gp-qwgbfyE2OzXtZ9Odak192k8_Rf8-cuzuwRm_EOzLEl2Jatz6vqVj6c1jBPeriz8JPwjaOREpFrKbJskTiNqN9aJFkaf_FN9OrYlgOG0iRIXnX-r8IvTqHxprT7ZYXl5EA2mvM2OLfOwI-Phl7QMs312_5JJ9llTV-49KKEpOobbEO2JdO-pI9IgCibPzBXGiuH5APJ_MU4K--vRVbFRiv4hcyshxGaRb_RCNfpmT5LoqC-6zk28iipvxH-v9kvX3rkgcanDZk6s3AoWlG9EyVGjUirGv1YfYNVzkS7e66JQZxWJJoBGTLwoNJRrQXz8PTIe-vW8cuA4i-l0WxjTFuQl1GbywItM8kCY9yAjS_Ob6KUR7nuMfY58Zq4xLRwLT5uEYaD-zAtss7qCtE4zQt2VI_zzUKBRziFy4rj8gr3oPnITK2tMY75tFvsWOfPAQwSJ8vwuRnb9chLSaqMh2lgAA-OgCqKX4NrxXSOG3GcS0sutjd7Du7qjDf578JVrDQE9PbwnV8JH_Ec16Vct8SjycW7wunBkqBPYopT=<%= size %>`,
  
]

export const EXTERIOR_PHOTOGRAPHY_PAGE_DESCTOP_IMAGES = [
  `https://lh3.googleusercontent.com/6KLtOKFA-GangfVvngGSbubkl3MBk6S6rz__6w6WXH2a7rWC51AYtvj03hUqnmJMxrZy1A1hqEcGUYfUfYGsFb0-g_9OlAC2YbLLAKYw2wlcrtmU_UVEw7ZDchbnchEGJbS_ELIk8vQhriEz_ti8746ZAZ3VQ3aQFTzTY_eYgz2SE_vCH2nWKetK1uI0YyY6434aw_5FgUsFFNoirw-aYEoK1YTcmLITmY_fxdvuZBPGPQDEtr7yRIhSiBrHmfE5UH5YvZVRrSAkMSnMKPqGLFLCZ-ROoeFiqXAK99ZHeE4EuTBuqfVzTUQVMH0trWpx_YBWpY2qcI221ohMEkYZ5Obc53A0hKbzEKREUK3p9ti5F0acpcE3PDo5409W2pJVFzN5AftvakYR-bEtdrF7d0_mpkaKCWwrVvcPgbXf07fleOMvhTYhG1zPIbYj9A_QpFpjD5Cxue-DBAVE7GL7sOxIKIdPevBtOF0QVDTe_HJuS0zOJPMMwVDO4w_7JzCEm1D3KAJvC38ycflUrSQ4davV74iTqhC6gM8oO99zXG_yaOC9ji8wUcMfaMGEk_TCwfBgZd0zQOCxX4FmsGyWr9w6X6_TGLfAUQ-68gBsHUMIANwl57x8ahROXTMmPI295yhsQPK-IML3bdJumY8EjznWAy70i2DfcBUKZlRghvjTYvfKUzNrGf25RZEGVI6LiV8xcdi0ad-RYxLmLxkAD01iSWnmWfQkmJ6WMI-nMo7yt7cb=<%= size %>`,
  
  `https://lh3.googleusercontent.com/syUit4t3l9Py8UjLDu3fQN7QTkRZ1NXulPK__5cFCqnUrt0fmE3EYbwB3gbPkwyMCICskX11vEgig2-DlC5Ze2OXlzYL9vzxUuwwVCUTEPRcTNRJQqWVLxoqg3FAtIXSTmV1-ox-nBXfOMLPp8egyL9aDmTMHKe-bdd99THXmHXNci5tJATYWDSE4WSasNgVhbPoGem2J_bPH1X_ihBVlZ-6zEgqfDCtcz85JJ6e7ZtfqLrb-s3ml0yis594ESjMKILIuSi0EMaXBv-D_eCfztwVqdf84dQMxj872bRzmwI17MHQDnqC1Np-Po6WMPMRBgG4kLOZcKpU15rh6XERMuui4ebuE5vzNToHZqAewC2cOJ65Wk2lYRFsoVH-GiHiBlaZdpPRzYKUbjiNe-_ul7JVi2em-xQBIq0f96Wfo_2sQWUGoB4rxLZtBTTmc2TRTM0JFuDraOVF4OWiVO3aLxsA78xYP3ltsWGQtBbQEUBERpTg5uCwhRzLXO1BqJ4v--4b-_3-yKLoIZvvMylNjvvokMljRK3L78XjCm8--mnQn9fUGEvK0kIHAfoYE24nxnszEtqrD7JG1h87EM6bbi79p5XRXD9TnMnFZJlcrlKkW_dzaXeawrxATlUqulemT_ladkkhU5eXcH_ijtqneBgvW6rSAbpEvQiDfaOFam-N4u3rNdOH5gMbhLZiYpa1o3WOpFz6r-FwEQKsawinYUspR9lRGugSN9r4ZQHcGrno0LzE=<%= size %>`,

  `https://lh3.googleusercontent.com/Df0HaSQXrlAUzcejJqaPmzWPhrCsbrU5Vg9r8RHdW3am_HWeouMX0bpVRWl3tmCMfkV8ljRtOGl0mmvgWCuowUjSCcl23zdhfqO5dsrA9ZMrlva8Xb8P1FucgKfWb3VUif8PYQvjjvz_QWEzctFg0ZNLCLv5_4XS63JzShH7PWHALfSJ_Mtqtmz8AOVYgBIPudoF9l2KU_45jmCUmO-5XrSJGoRV-ydUL24MN-gaKVmGMCHvgekgn68j-yynugv0dZw5FZzUfgaNlCdOq3cjrPX2uFnE4zvTqPUOiCznsj3fXFMA0449dYYT5Y_e3mlGlJJl5ycxcAZHmwzTXCxzblJH7v0rurQQGNCAahQcis2pKu46YChDy9xKVFLKOD1lpYPW158jGgARmTRSbVsNB2JOVriW0cIRPaY0VIfg7Q8AagXOnSzE2kJpC75RE79Y77O35QMB3qGcAHQCebSVF9wp_TCG0L2NP9LWtztAVxqvn8dYDGQA0TI6_-vuSaTFBKZ0SZwKLNoSUii3HJMZzwcj6CzZHJ0V2zoIyMYg9N790C0gx9uXqohjnVym6I0KhGxHGJePSTNd-y8MF98YocEW9HNMj4RdGrzeNO3SBFPzWr5GvSB8KkFgFkuvJRnSPgKguPdoXZKTucBHAaGqOFB3ZBNlhEqykrL9-ZzH5yv5ONtmLV7ou-iPzfMEk19-VbfLEaKttal_CiV1pEhcRWZl1aJ3lU2r5JJiXmf6HU7VodfQ=<%= size %>`,

  `https://lh3.googleusercontent.com/2KlwX3PQalYLofwFg5bsiv-LB9oB1cgtnNoi3BVnbktDPkMQyc0kf4r6Lzx08Jh8hn4PjpHOI3DY5Py3fHu5J9hv-GUQLnzFt55hR8Zq668_KWVoIOw5at1dHoXVMN7-9-tjeK8sayV3hgfwgeUvagUlETg8S-vc0YM2Nf__wNww2en2nWdMFoXawjZn3i5y2Jy41BCDdctaSXgWrpn0PfFplZ6VxAwlkqu7e2AQKxC465JAZUVId8uDLnVMN742z0_jT1hI0n5BwxNOF3wx9e6x0hUwBvsUU-1cc6niTZs5d3BKgs7nOCWPxIWiXDVlI59fMj65bfMRrRQjD6oWx0KYg4e5bSFzVtH6rdCHYxWTMWbFlzHd-dS0KYi8LvQ0kSSbpahZopDMPoD3692SLveE5kb1xbXIh2p5st2vTZfKmaYPNWF9-eay-0MOvV2zkB7pkQBoOUbcYj-VZwShUqNS6-1v5SyPKaeYJzJDfyeTQFYn43MroQhZbRHcIUbQko039Rpu4tz8oej2YrP2N3o8qTrNXTJFhp4SsGAR6QSZGzRq40_5T7AZa-_RCOTrtfH6dMVd_rWSofmfKyLxu4hdZpBE5BaTaRpV7mi-dPFBi90XqpzqM2jJWvEsV4RYVkhTjsTXL1gfqGdSv68NH6cgSZICFJQ7LtsR2_iOI6o3dMKZihQBxTdGCfSZjoQ=<%= size %>`,

  `https://lh3.googleusercontent.com/mR0C-gv6M5TqGLfxmpg8sLRA8yKKQfVZq5AYYaj4bPnpJd-aHK-PggPpfpp0KzUFpHyIf0lqVFZzJSxFwF7nXX8gawuisYxbve3eOcIQfjgsSXz10pFGrwlpbv0mOvH4xdG-jAx7VeSqjkyBVieyd04-BCFuQVrCwJAfkTHD1vYF60NmTaB4-gtdxRCmNWo7xTBO_pIoFO3NImUjKP4bspHZQYjAsi7bjfNE4Vtv7OEXe0ocn0Osns3itN0CPHVHOwEUX0Ecsas95OnOevVDfwx-97Mb6dAF7ofO2a1-0_2Rx0D-vOAk3m439U0xRL53k0EyXzN7CfNHVBeQjCHS5pi_8Jfjuwo4PdS3nAce9VgIl07zEBF6Mm1PLuekluxogdzBmqVf3KeU_HFHTIZSgBDAvyonxofR9gvJB03JYkZFwJXnElb8ZgXV_oFVEBP6CNVo-8OUrcSHZRrkUZUHuoXv0ixYGJ7ZLinu8toi0TUxgpmEWHxTcj2BMieKCMxA-WL7M5fKjSKzywFZSR7G59A2a739gRa4bNoUJdUqRAW2ysEfSnndcNIe8_syf4nID0M1OMYYZ9MyVdhA-ogyBYavjyrczEshTGReMOFFwl0syik2pKYC_pcH1TJ_VgbcmxdIhV2BWHso9RvAUZ4x80e6fe1Gteoq-aZ1nT9-0d468sNSff-K-Rc5MVDcC6DjT3HkCPqWyHZTFgrTVM2x2g3yW7SHHwfhbGJvqlcAmh5Sp7ii=<%= size %>`,

  `https://lh3.googleusercontent.com/B3B-U1yEgJ9fAwmnzamIy5zW754_KnjO3l0MmmKaZ12bCx1E9PYWwg7Ir8vCrGsGL8J2ynG2Zbzs83sTxQyNxpWL9MXNYFKhkn3wPvRejX2eYVTgeZVrvGj0BlVcyi7r7LtleERRffkr4hVPxwnyvJYShIb1GE5z1LC2g063JpED0AT-ao44FBbkZEGpWyBvJD5BiF522G1b99SAm8AvhTCCuPFKMLWlMDh-jghoi3H2S_5ORy04dmGlsEsaSaYVBC9kbEI26dp1rzebjnbR1PGf722NF5z8HK0Wecr5Q1VTai7z96bygSnJt2VNGhNUWQdQt21le2srmY31_Iizt--WiUIlJ44ob4zD_USAKX_0wEIod5UUQENrtPxU3hytAgNAU2VWxJi2oStR3m4TgfImwqG84oXHBlQRZRnm5Xtbl4khEsk1oxxBpF-PMryWUYPNEd7qupdsr0k8EDv--rkItghcGEUjBOvRaL-faxz8wJkPe3MMJdy1_uVyVcDJ92hC4SFRB6ISq0exBh0V-S58e_GANn9ytQ3iKKPLtwTOi3kiCz0RublKk_ppM_ZG0kYvWPCYO43MNsODxFsK_aNw8_HdCR4fZDMyN_2w7ltwL39t7IW_ZOn8kdi9Lljgs-kMniYmxHvz72RJ2iNgEQjdZ89NYn7DmjN0Hie8BTY-Q3NY1pKjZz6miCvO3saD2o60CHFx-Oi1F2rESZ27gRZHsGhkT15NBEEFTcQ4Dxl3j9MM=<%= size %>`,

  `https://lh3.googleusercontent.com/SDjHWrOkfSjjHIdmKDn7IB21bwSSn_bgRW384Xb6hwsjzuLI8DtNO28tAWlJ4gEXbSvnddD813UH8N0jXhiCTCB4xKy-M_Yjecbz1YVnZhpAVjdJOm7vey3eB_HvSzBQl3yji6T22Dr1Bkn6Qv_KEq8MAqvsAcE9BqoXfxf4QqZXlNNM2kQWFHzHb7My9ZgLl5ROf7gBv_CGsEsMrY6dj9768wbTQZ6dk_UzflaIa9ZUXDIzt-qwjR0_vybL1B-EvjSxs5QwevywAs17BpdrcY6wZbnxGFRtfAFhK5CY26EbkYUGuItLODIFMJtfKx3GNaH6ijD_DJ-JnC6Wp1IdEoecQfYMTG8Pxa9drfyif4_o6E45i62-Hc7yTbnQqDfUsz8wFQMVfPD-Pee7SFRirPDqCaI9kKv1pIZN91Z9UslUVSbTYIvFDpmdWJJ73tavITMZbkJAPF_GciCdxzCA3YZqy0FkC8kKE2BaFazuWlSY-lsSE8qIYyzXlNnAd8_Up7eP1b7IBFwyPg4FY8kBd9_wTqyHpsbBFAyog1u0b7We-ZKR1ZtJkGpd_Tz5rKKxrtL16NXYSis55V643IQd5cALq1rrbBX6ISgPq5_hrsEGpzWUr0THisqfywaWFpkD2wqgW6lPv27c5hh_3nlHig5gcY1b9oU06j0sf7xGyv8mbizU539A5KNGAwjZao-tH4JUH8JwChe_x3uwfxND4v5ZmjBzQP1lJoMo1qj6OJwi2Ym-=<%= size %>`,

  `https://lh3.googleusercontent.com/eLeOz_5aoDFiu1FcBEFrhTlucBCIMsbFZAiMRkPFAQqhFS2W9ZyLQaGg-_tbgfTL9iUEaY-VT2K7v7eUNcOO0OZw7Fd8ZwLzlNOnKCIWsU7cSUtikbToIu-NuW6skQ-6p6d6lT-sBzXsARhwnvcRV35sUz4KREdO7FcYv6IJ1UZ9hFXv973fSNr7WybN3ctkgt5rclMHELKIb_rx-SOXlXpxdd4hKpQofXF8lx8v_F-86pSoeaNWJdd3CJAK3pGGinlvBZ-hr0GV_qW7do5RwWccmn04Xgbwa0nCUaxcpzlkL99_alFGj3T0Uedo6wdpTSl8byjo17I-zvVgqPbl43s4VFXKULViweQMmbr5NhILiqr6S5PTv0QgBZKv6OqDjYgrA2ZVIVOu0p7O0n687Ag4Nhz7vCItQk-ri0RfAopB5t0PzrfcvaX1iczijaoQ5DcTBSa8Ej1yUqGDFTGghn1vZUSPqLhg-_nfoRamVfufqimKBHCHzVsqXiX4Q78QJEefqRVstpxqcmoEInwUEQPGcFHaTU6-MFfKJpwJ6YTgcZi8L0cZDD576x3VxiP1lf3UOZ14_YjLXCU2BZSGGhftN3qNvXLHW9hagvjl0NBESvZFuiksOLpr_J8Qou3VqEvEtjEbLPV0jTs8EnJsP7GVkbS60KfCeRCaBetzmzDOBPO91-__LkU0ciiSpRtbhRHYi7s9uxgveMp7_RC7m-MfUSTie_HwYLBVkun0BxcP5Drp=<%= size %>`,

  `https://lh3.googleusercontent.com/dS3TWceQl-KiwdSoxpbzGduSvWvbHJiNnhNIztEfPfMP0sUXw9XOO2A86wK9DXmEHP5qg9Rnz5PpCWrkn15D8DbaRszagl1mc4C_zl8PwmmTcgpsy0RuT10vmvXORqdVlMKQI3B9lKfkKJkEt2JdANMgZdBdVDPleYIRl4iWYes6ndykVmSC37lsyqVhImVL0IFnbdFHy5cQH_O0o16TnJ-kBlRl5h7EBqlrWgBAhFalJKWxXobmhX10nN8mAVa5o8F-9KS5eEnP1oMLFf7oCt2SZf6J3AxZkAv-OEmmB7E35VN3hPG1wedNwjl6F1OiHr2SCJKqAJMyQSSQvsklJGAX6ZFncY7kvVFK_87IVyXGsN_FsWFT3qRBFkH9a5TLAnmlwzkkkVGWecPD5IiWk7G8zx2_h-u0jjCDDDolh-eisVGssga4KlNYJloEJjft56W6GHPJwcHEv1UDnegfwY9YEdj4TNqvRxULy9y3ERdIYfMR04Ivj_IGJFC8BNDVwDsXYCxQUArn5ZCCjN9gen6zZTjjFgmm24mesf-BMeraKyW0ky9c81fyM4btE1Ggtv9UgHz_FXrWJ7BrxiNIjnx_SfQxZUIgpjNnkycAuRdsk_2ddYD1OGl91r1WmI8AUEyxpU-B9vE1GinWt6cesbAkbUs47EgqtTs6md1oQBLJqRg6hvUN3nhrELOSRSdV_M8yokIwYTP3KCb1AoewvmcM_nECEf8qDMWCDmdQbNqldpxo=<%= size %>`,

  `https://lh3.googleusercontent.com/C3zzXNsQk4y3a3c8FKY27JlMuI1ZJtm_XhheO7tdxrjWU8NNAEq5McOficgOKd7AHmXCe2mwNKeImC7yONV3u6XQnFwTktMJ04f113WeUsIjgu_9bJ5O72Fhed_i0uMKAmum1RFLOK7l6yTFNy3DHEuFFiWr-Wdm43gEIv01-k3f_mMgK9EsKHAilV1edbbf9d0UEL9oOtBIRfr9W--u1PprUfsja0XL1IrxQeQiOaq-vrA8kG0yQ4f6XUEOCzxA_LZzU3y1_SbksL4HJOnyhHF85zwG9V2s9LcoIoBqaJUcKsQq6RBbIha-1KDj1y8nPHT4C9luFBJRCMYxSKujpcckvEtSb7XWCJ28QyLz7Y-wNC465YG4o2JRLQag1Mhtd22VdT9kpqnQw63AEXonA0KfRUa7wBFbLtvEzUaIWAWdhaByAmD9SepexkMyDGDyT3U7e4jH9GfJcA5eTvpNDt2mYs9S0ADOngT1GRRkFdwaeUw48sdZIKQFLDEIkUllxGs-5ixv84rmcmdWAHsp3a_sUurvxZN0HtIIQKfbM_BlJm4I26aiyIz4v6S6pSyLiNCfc-tbNqDu3N_9j7tnAcbqJByT76xtHqpN-G-JiH8ExsOABWXOr45NBxvDT17VY4vanNAjkIsaz2RrwauUOebTJH-off1YzmFT0QJN-NezK9_vNjQE2pl84_PFgHwsYO3qgW_65ICTbxYZNP1EHNjLsGHoUPoQDQQLa72Lhjzl7pqOo_nzQ5vl=<%= size %>`,

  `https://lh3.googleusercontent.com/cwMQpJUi8yCR_VIUk0Vclt3F5iexO-0PcrlT7zdCxx-GOEXu91a2-WSzV8yw3PzZdvq0ozvKfk5K_C_CcoJgmRfLqY_d2wo5up07yb8hFFOzSp4V9iQ52DShpQHVSOR_9dzewO1f0bo-8SVzZbQvSckdN5VBVh9pdLTFlbGf-Jv0bgwuhRctLdSXnwpt52_kdMMntg8P4LQLBeOTo5w__1vE6E6iCHKxBHj9UaJ9c1GnzaTTwDg60quU8MgRtgtdrr8JG1SbIwrGuuuN3z3foawZcz2MGNaNySVIQw3FHy2mIQ88TvCO5E_TesX4kJaWzV2E2YFx0R2uXTYRl6K51t7HIgZlTib90pTMLfcv2FuYspjiDvacA9zQRzP7USP9ibUhRhaTukQ8nuZCeMxHmeAokcIHQczWfqPckD10IX0ZiiJn_2scwnp6xgmq9sOLurFm93r1l767KbHSi9XCt6CxtvDpQNQ_KyLLEQuEc_rbiQ5TNDa-rhR80HUUt35oTKim0aIAjJvJk6Dgo1XBmUGENyarHCdCE4AStUKne4wvMFvdD4Vntsm7xfL4x6fowxTL5iqncVB6ub-DRwV2kSW34QjRN6l0ik6apTv-Ng29hZ1qE08YGIA9__cRz8PNOTKW-IO_qkP8ViV0LLq6TI4u6HJCKF-r4J_CSGlxBjXlkQOiAUd5HGFnrYYz_Nizbf5lW-4ZjAuEK-9WVRa4evvt65dUNEekrJJB-cNSLvSFreH343Fah5s2=<%= size %>`,
]
