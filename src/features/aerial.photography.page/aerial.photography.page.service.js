import { MOBILE_IMAGE_SIZE, DESCTOP_IMAGE_SIZE } from '../app'
import { template } from 'lodash'

export const getImagesMobile = () => {
  return AERIAL_PHOTOGRAPHY_PAGE_MOBILE_IMAGES.map((url) => {
    return template(url)({ size: `s${MOBILE_IMAGE_SIZE}` })
  })
}

export const getImagesDesctop = () => {
  return AERIAL_PHOTOGRAPHY_PAGE_DESCTOP_IMAGES.map((url) => {
    return template(url)({ size: `s${DESCTOP_IMAGE_SIZE}` })
  })
}

export const getAerialThumbnailsMobile = () => {
  return AERIAL_PHOTOGRAPHY_PAGE_MOBILE_IMAGES.map((url) => {
    return template(url)({ size: `s${100}-c` })
  })
}

export const getAerialThumbnailDesktop = () => {
  return AERIAL_PHOTOGRAPHY_PAGE_DESCTOP_IMAGES.map((url) => {
    return template(url)({ size: `s${100}-c` })
  })
}


export const AERIAL_PHOTOGRAPHY_PAGE_MOBILE_IMAGES = [
  `https://lh3.googleusercontent.com/pw/ACtC-3fcOyMF5yvje_WE4SIZkDvlgZH5TRDiOm_xvZ3Q4tUEDglO4Y-Jz1khGNZcY8yKihtjDEMBWmmpovyuqmLNfCeSdRjtGrmz2gO_Ddmr7pZU7iVQpr5wE06ao02OTukLH2ma6j1_eWiAgnAoonuJ_Qsj5Q=<%= size %>`,

  `https://lh3.googleusercontent.com/pw/ACtC-3fzO3ef_ANcOzJhn-R_issg3It64TtCtHuM5HhH1-G2a0qWuqDOW_g1bZBg3ReK8C5hcPRQIgIOwp7N0Jq1gQU3sTEQec4Q_25_sgZdxI_wJNyjHflAL-I-dlWq_NZrOvb28H_8EFtVuKeFYj7IaGiDpA=<%= size %>`,

  `https://lh3.googleusercontent.com/pw/ACtC-3eUeYSPlFVK3x0zEQYozsRwnm86S1tI4QkrDWZd26NaQa4l_voGzXJYRI0DWZpSxpsHbYwmJZmvuQRR_rACjO_qxz90JGBu8zUlTQ7p3fVDR-UUWuRK6SbAQyAEyhgP_pyOAK1x_GzPpogFpuOwPWDHig=<%= size %>`,

  `https://lh3.googleusercontent.com/pw/ACtC-3dkBLxYEItOrjpTOWkl_9_oJ4aeQ-VZwrKa3_f8r3Tvh98uBydIGrDa-O-DLzyF3ToPfSR_vpI5BOAvNwkFHHRDOCIoN2dH4HtUMjLcvGkoD1DtkKTOezmpC2AgQLklzbWT9AJAnw4SmyYP9fmFmLdQEA=<%= size %>`,

  `https://lh3.googleusercontent.com/pw/ACtC-3eBYzZK1p9Hp13SvD4T6PqCF9JDmSaxxgMj_xYudo_XGoBzUsmhOhbH7pDVIjCXNhNlHfQ59Okn1gcIsjHKPSOMLnOJeXzCSFL6shSyZCZmF5bwDAHIgDty_lrr1AU-dWc9BhpnTFCT4xSDSKdFOzd4nw=<%= size %>`,

  `https://lh3.googleusercontent.com/pw/ACtC-3cnuoa4FSguVmp1Cdj7zMgOIax0KU00ApWNvdfne3bof83DKk9T0cVJCQpZNoaWimaFPLOkzkaOc1NDrQucAw_ukyYt4LceQRSOO81Zc6fvG0zBGdvFU82CZKVNwu8swNje6xwrprCr81hB2hyu1K1iXg=<%= size %>`,

  `https://lh3.googleusercontent.com/yHit9EvNdK5PrheH3puO4lC6ep1ZJo0Sh17DAqySjxUO7IDbbAG8RQLfeTQwY89PW5FQmrl8qzlVdkwJNxm3NuBxfIjHNTP3gozSpSwAclh7GbSNliyjtIItHu1tebYddPXWx-jSH8SS2dAWsINTfs33jYOfZoxzmCIGdEAt3DNLaiKXFbisG1Im6P1qTh_3__h-DZLtRYaK_czeskyEXqZdoNanICHQ5nGvU4zin5lJc4iGOHywKhfHMH7HU0VrGVxKLw_UQ_5SLo2LAT9JpNLcVjX5UJy4fdl0xFIOcV4EMzF20azDoQJo95Ui7qp-NgiFXCUMKeFFTT50LLVmAO2vvPv0Ggt1law6lX3sjI9iX7U7NzEf1VQtg8AKk8G1nz7d9s33xTxj-ixKo6wQM70p_pF9cvEFxe0VIk0F1e3XhiC_ox0r7irlO2ca8_XAyYfkFS0-s0vmkYWKCmAyVl5PQYEuSjY9eyoe2Upr55s1fN3yXtdH98rrOvmPRgixt4eW0OtSPSNDuxHlIafWYketOZpsYYMZ9HB64mPfJT7O_6SMkg00z8lL9ePVviFwQIGZxw4RfLHLMcCF9ykEZhTll2k7HFS1OgGVKjGDI5yHP6fzR4O_QCWqOYlsALEqQTccbnZdKXtXwI_RaXzbZUWInKlWQkXI35tcJig1wCwVIwCMEGowmxPK0StJ88YTmD7QEX7r7txJfvil4oQnuFJ63dW6JNBwJ29ztMMQUUS5vddeTFKU2LOy=<%= size %>`,

  `https://lh3.googleusercontent.com/5WfXq2NOQKm53qGWC16_rGy55YLPmutlGoKvQyeHtsUYngG9dBDuzVR2NDtfQflKsEqMiuNoAyHSwefUjvclQn4s8lzwpSrt2jWdXWSOoN1r1_a99QeAnZLaBnRKGeWUqtFt5mmyfXhCsi5gQaITvp6zydTAWTSlBKfDFOcVFH0zvq-xzybpWCA1BrA0gkl9JJsqtLVlvKTHkfRjkgzIFbkOJJreeM6IxqMRu8eA0rqtXMD8ekwb9uTcwLLKfhsRL--StTmKDkh-C0lzeVv7LRz4a-3Zi34lQNjqrESa20v2DFwkTY9IHpleTWLSXrewRPPWqy9iZf4dQubfWfeo5puuUG_d7oUDd4Tq7PCaUlJgStNYGr2wF8fvZSZcWOGh0tCqQx8aeDaxoSMJfGw_qvAfzbTyvFXFcU22G3C4WOulD7Zw7WWbMUqDA1LU6SvtY6Ut_JuD3ZwV0t8tFtsSeb_iwVjeyj1fjAQTi185-AJjkT2UcfAwN8W_hQT0CW5d01kVCdrevXKY5Gr0rRhtilaJdfkgMPerPt99WEsgn1NFgdbbx51mzuF3ClYEe0IvLFYiWa9HxP9xdVZJb66sUTvksPgRdouNCu3wj8yy6d5rLjKMi8QFkg-1vSZ_Ng8913JIoGhtPD_EYKJTFx6rLny-4EGfI8wAL4yVQbq_X_rxcGKm5mSETjJkegoDST-MElXhnqUiB7G7dWYplIFczElNmzC77NSpClh9ff1NWBeAu8Lb=<%= size %>`,

  `https://lh3.googleusercontent.com/Lov2fZpxGXRbkOYVKr244Z5y0SNG-Oi4KgBSaWpDK7NBZes76uZYb0NZV6fQ7Si4q-HyNlqtQ7-5ttlS8ZZibjkrIL9TsznxIBeXm2wLIHC23mUh48JhEoQUP8hAB0t16diLHDIfiUbRm-rec0w0i5NERYCauFrcx0tcOYslnf6ykTaLAAKFyqCA6wWeotQ3hblFmttL7vQV_JgqC2S3KogYzDNt1HJJzRcijn02xzEFiDlb4bS7GEAApQKqB3-i8WxgxCTy9sR-823IOEU56lD9K6z6ZenUW80d5Xl4wcyozfjZhZD-kCiyLkCK1Ynl9OAJhC_GssOgDZW6wlHmskJN05O-OA-rKiaZXqk4T9yEir2HMpkLkK622GI1sTPMxEsIQl-qgzSYv_5spM95LNwhhlZp1jDR738dImiUiC4_-QbIzG8LCiGanw1o1wJAFxYYk0BCHrdefb_EcnKFDbF8fDnD2g3rzybldoukOKYvqsoFt0IQDbMMUZYk7jeVH1PsfVXiKMctETgt1T5hcwOng4iw54kXTSOVCCJQafpe5Knx9w7P_rvhZIlzb9yjqYT1XyZGMyT8-SxItLM3TlFds0uDP2C-q6kDxzrlkOFvYHukKcWog4mqfilRlYCTpULM-wteBFfgs0851fLDZzALrwrYk47RdoLS9SA_pJOvHN4QrdoJakgHLFHNGBmyHjWa2OFdlMxItUKWtv2If05r-BopG-B1BX-ogjh3DHEDTTWz=<%= size %>`,

  `https://lh3.googleusercontent.com/NpHg_DFPpFjqAe6x4fVf4-iM3fXP_AtsDT_RnWZGVC-gIq-wufT3tz8UaKD1_ELzJybVYkHEGEGaU93UkyPOV7FLnIN9R-f05PG0iSYqyHI1EXGOl5PO0NJY3-v2QDeK5GfPL8J1Vzj9JkpY4qwePlbbSH940pJj0blkBSnA_9BHzuNjJ4ASopMZS3dv-zKxFdChRrrr8LX5B0pPgM2DS5T9tLBhnBHZRmw93cwMV6dWDrqD8wu2-DT7Sc_DxjmhosoRJKcEIprCZdLJdSiDOWwfipuk_LdxtQ8UovbJk2MwfzhGoOW61yRiHbMWqqOER4MClrwQ2S7bb-yOI91TYBr1n_l4x4QI4PtnzqEQzrQNH12AdSKmTmRmjtF0F_DSRlDBanuvg7smY8ypWaRNUgdheqOu_tG5aufpxdllu2dOa0JIRc8Zzlk_Wjfh_z643cxQBjCPf06vW7ZSHLAOnQ8D6E6JkE_5Qv7v0zD4pjfYs0vnk_368HSCn7wC54q0_1ARNZS6RdfQweAwdJIsXWoK1sXY4q7fFfFFpSE904oA8QA0-QXfK1UWVNm3kuRdiYhHLDo-wyUbK5zU-7K5MjwzTlKMo3zQqpHVaNkMl9ZEoSm-7DMQLuAcUnbb3DHctdzWkoQ2u6yxDfhZ0WCGagcSTDBr66QfGskkNooSIjzk29P9pND3iJJ69WOPZeo7GyLqDRU8x4_dpEMN2p2E8jGSndQ0uEqnbQuO29v2DfDCtQk6VA-frn4i=<%= size %>`,

  `https://lh3.googleusercontent.com/ZC7tGazoE8g-bNTKNC2p5cV2LU5z81pwP-3TCdGWGGDw7rGkTBnkYSMTVDe8rtVMOdMam3htxZHgdOWXV8xnE30yTIYSCtKBvXmoLGPO4shIgEUn0vng-sFYf89slcy_lJj78mgWNr9_qulHgVlKwadDqqgMQ4RJ2c5NOsLto7lI10HJP2jAkJKsJFnKuUaSMf1SV8i7XFQ_pUs4QMF51-Dsij38dCmpg_Y6__ZzIf5qv9TQC5_tunK54QK-pYRovYKMDweDVAyMriBDaVeCx-nMPb3FlN1TmJ54lyj21EwBRi66RctIyTS--NTHubYPozWZNLlrOeux7ioWAkDTJyQi8fNlrUcaeNB1nHBezjhCK5qAiXDGawFmW1GJraHCIxxM_IFhUzMnez-tUPVoC9SSNcRYcl2A0Ls3Q9CZTlnTUxuBdmkjZS442m7CZY7fjxIqO5N6gyt-8of_Hrlya01jrEENVhf21t2zZ8vX9y_5ONiRcVk7s-O1ij21crw3Yfss3fTtm0pxRyalqANuHGbl_NdSIx8F-Of9dSb_FZ5DRWgRusyXeJG75zHkfA0USygcLQuuLTsx9DwuZgpSZj0sP1Wjm3NYl-lPULmyUBDeMlfvJON1pOVhpOK1S7biPXuNMTxmK5klNyh-Bi851LLzfwm_NwhX_kN7rlkfarCscis6SCxMljWK1kuC5-597iw5evAOmcydkM8Zjg5DGtm2r6NGFAMYyVNBv4GSLABvSV4z2nfR07HP=<%= size %>`,

  `https://lh3.googleusercontent.com/pw/ACtC-3eiagL1dQYrSSRxIrNSn_bZeGvA8m2-TQwkstXYLNWjFmj4SHtlbZHNOaKcm0TqdnVPEQ9I6Nniua8_diGqLqxY-_iEc__mAJmc4HJe2ViLi9bQjzhLM7kJenXTyshdJhYliT-352XvDzd2op5YQgjMIg=<%= size %>`,


  `https://lh3.googleusercontent.com/pw/ACtC-3eKUgPPn-fI07S2GF14JWiq1NzthKjGYx0wMqy5eQLCRbAjgJi5nSj0hLem5iA3-LGyPYFFvEo-0MdTRsbU0Lkdq1fCjCS-zv8Nxu61RMBpWH7V8PkLoikLzvNe4LVN9V3SVpIdzwKAlyyLHCs5VTncaQ=<%= size %>`,

  `https://lh3.googleusercontent.com/pw/ACtC-3cMuD7erXkyhGevpUtj-9kmV6JuSk3fw3fHHxhusj4JdH8YkywV5_cGKZZxhagl6sY1IS-EF1pj_9f96ICwNfnNaGhd_wf2jRzdtk2Mkt_c1I6fzVq2EzWmFgFjTj-KlqkLas-3YqNSmgN5yMDE7tQuqA=<%= size %>`,

  `https://lh3.googleusercontent.com/V0DPMvI1bITd4aHWVqtochkHaFrTHaV9KEw5afAucZ09D_4Pd0MembucKZ36lETY6QmzBoKv5WKZo3wEbVwGGk_IkNbuw5oCdoZeqp2pJsrUCosnfrU2ValSsMtUZEfO7x-hKUzDtXGYPwV1pU4tWU5pTquOBBSQjUbHreGwcghXtl292kLzLOApupdCqh7imlzVkHyyPh8XL2wgAWXE7TguoncAhfKjQ9__WXvT2IvwjCHn4SZRYpk4lxvFPJtV8TLqCKg-jrnSw1yCoAiXRSMYD1Z-Vd78S5bTeSEKrf8GOaBYZU6Y2obNVL8Gg3difRz_RxE_1YoQUgKsM1kiZcJWCGRMGTFBGp_9FTbI0RwmhKLO3sui7bbbJhBvOX5W3IeUBZZOgJMzjhqcfcBPQe_Ten1u1Clm6fvRa0km0wMRYHV-Ib-z5RL90VVqK3qyUpAphvmpPXJu5ySK_uewVHY_V0SIBN-Xv7DAGvF4B7FtEux4Gdy1ITmC-jsu0svpRiw9u8cXRIwDAO6-FZ4iKhQWLjTuZwQrQ4uSSRoco8CIYE56-Ih5ZeaOjt0249710tq2DvuygydNrsz9Z_LX6yHwU2JDjrjGuKjkeE9Q5ilTSOHWo5zmHmm0kiCAf558flyqvxgMFEH77jOL9YFo9AYRYSOQkLomjZIDo9XoTZvUARRY1cCb5i_tzPvLkTNSfd7CCDV4o1AgRXhqPMgGEOb67OZ5_F16h7s64POd6FDW8AiXVE4VVlH6=<%= size %>`,

  `https://lh3.googleusercontent.com/WcPbq5x6Eog2iJHzV1mXRFglT4bNe97AA4osclZdnP8nK3j3vYavUxAbcwfdnE5E0EpSRL1ut3CkMq2CEUY9Jr1YzG-5ET8RLjNgF_P0NI8vBkM9PKQijpk3auscAAF9qh6kNaCL5njqxpPMPlVL4BLwLyZ8KexSgFHtPMR-bQkOyaF2xkslHjxdUPA7QA-Z14_spbp3J8dyg_7juHQLCODJaKljmO_67HI5lJ7crOncPyY05kdlitPCYMBQnw-Y1gEUCvUJU8xmg6YWqj3nYmWEcBx2EESmHOBZaNmzcYxCY1QQPrpyLyj4ltb_BubPZV5IU-Ec_FZLfW_OJB4N9_oV8ODV_61YZLL1lefRrLlEJuSyV2KiDPvoATBKq6ZCxhO8-osWl9YLJTQ2C1CtgjhcUAm0M_uBQoCbtDbdR1K8ME9TfrehAJlgnBlRCgR8-8aWll1LQAkJiy4ViXLfHqkPAap03zJOXSkIyUfTDm3rgiotGhGOuY8ugKMVFX7xpEG3hU1fNip_klk7RuHtvUJqXaehxHYJWpg5FHk02Zo5vjDA1LBVagyL368oDzt4E03aXz76qfQsTDO1lTzpCEBEKzSsXphiTissHA0B1sG4eF0IunrOYOuK0Cm-U8mJhQ1p6M47AccJYvhsSLYnOgHWDizIu6yDHyhpgEi805hGVUOY3Qo5G5vd0hLPyS4_90dPNY3eWDJpTJDjSXX3UiXlI-eVICBj1ayLCCYSrLQIUNVyxNIcgWZ1=<%= size %>`,

  `https://lh3.googleusercontent.com/qDNQLqLtLycgs-4fuYyn3Wegs6sX-CPeQjW0dlq_M-u9wvPyh_ERSBhahBFJlLBgpVaKJCN65bPZKQSTg2a05hZqQF--_KueK80Sic8xCnpOJdrWyMHJwhXsAtOtXeRqB_wTRk9kGFz0Hu1bjsbbK9F4n2aLDcX7a5d-8M_3UmvXhKfwdTOAh-p-B8BvrXzgOf0v_GH-2TrOAa5Ef4y6vOQDX4iRZk1S4QSHtYBv99UFr7S5qc2Uv1tNuCBasUMnNXypNU4lTLIXHSCfzMmIv2ohjGuFA_KaUXEcqRZwB3O7TQv7ZXMOiq3LskuY_f76a9Y2c_ggVAwTBhimi2NkCtxiNprSyIjBEyaE9RTWgLlYtLXjxMgv8dh4m-guQ_6sgVi7fhAtfEzJuivVb7-LSml_40pLA4zMreQ8haAII97FM25HAG_R_odz3eq73h4mjTSou_bwzSEJ_23L95EZIAMzDh4qAynRZ2719QyvUkhc7h5JkslCzvqIrFxTJGaMuRr-D_2oB5ohrB-RKIWhSOYWrU5rM0w1UT7_hg3TMrJe0oXVQc7xcdmyR8Qzfl4kR1wu_EtQcPjK5rortmIF7QmXGwz2xH6VXBcAEL6MGuL2h_2O2QbNDslpEBlvApSdDViTA2QV1bo49AT1fgCGct6Xe4ejxV815nhYFRIHBn8aFAwfdELZlTxOqtOJczsVSjxJR1dL3OzhHfJ-1mLVs0GAxBNRqowhaKaepa7JRG_REYh8=<%= size %>`,
  
  `https://lh3.googleusercontent.com/46NulHxVz5FYGaYioIsGNeU_59cm1m7npfc1gfd6JJ3t_63ky7ury6lZVPYvDzIsC2mVXNAsnTq0tjgY9ZYmmy52k7G2-4sxiCX046GNSH2evpd2djIg8DUECuq_7WFNifheG0CGdaxENfm7yKUxm_7F-WWlsTjJZcV4x4_Xn84FMnL4fg2bPa65G-69Bs1lx-GNlwCXX1bIo7z-dg0P2-1rDT8UQDdkUMEMO6mkM9Vp4aYa9MQuYNYxtvl-5IvIgKZY1nxPewWjZtZEz18DQoep5Pz_zWkuWR5pMbfTivx9Q86RvxefPPBiYnJXeku8qpH9BeQC0ixHxw1fRKhEQVOqDis2LaVS_ikZ4aS8Yxuj2Dzg9kOmQchcbRIm0POgKe17HrCpvU78TzA8tOwFssRMEBP0mGFprYql3IJb8mPKMlEdAoCFbU96DLoKXCp0oQaHogYU0Cdll5CAcZZC_8J_SmlloDqOs6W2JKFbJdEXHvrLmFKVZsg6GFiX_MNA7R8ynHNpfsNVEEiKTYADdFGY1gz9lXe0F_XU7gIApMIdMeRbgZCtCUZy1VyG9XTxSE0sYNzy7i6MaZyTt_uZf-dmltv9KBncXbAFf3ax5hd9eFUBDuiQf55UmK4amPGcgSNr6uOywwbMUsAgQJTW9H7Z-4SZtIMMjK37WdVj13WMe7M8MMln6RlFo5-VNI0yxcA98KKEPXXFm4FHeO18xmkF2J9EcvIkW3f_6RHGpbmnZbqaEG_Dwsca=<%= size %>`,

  `https://lh3.googleusercontent.com/UenPAxegUTxEHl3iPI9F5O3BUuw1ptWp0yFM83JOpv4_5gXDw1gktufS6m9wJXXhGmGp8GraH2QsLjps0jnsmsLq61EIM_q69BhlGQDc3Df4eL0IkE4kMk_P-rjOcbFw2nvHa9kL-qaCdNuqwdevzzsZLi2RNo58aBPcrnMfO4z_0Ui3nQeCQ6cLIfkd8h3Jj9DXFJ1cW040seJa5fLAJl4xWqWX7Td887-iha44xulYxZ0EE7zjrA2PcwNWr7TRRj_jpL5_5UZs8rNk8pu049BVsA8LQtWOg0r3nqXogUs2WMr_NuInJIelPa9uyHEKsYGl8scnwYwRCcs-PdARYAF8BfRK-XBXfdCjHyeomkcx0HvQGSoX8Db4fPtgT1dNf35EO0okCU38CWl5NfOI4608Mj2Ciqzj8MXAFuiL4CSR94DQLyDJZDsNRXaZgnbUl79TOKDPlpQC4S-Pl0wRE0A1b6qD_1MhC9Yu4_v-4tQ_9TNwpKFUL9FTQcDwr6wjTSIUGJcIHKwvoC7Qpaj26iS3B8dy6Pb_eoD8ElfoYp7ddSG1rJstw2H0n-YPBEHy3WiGr5n4LDPGQQvzfyyvwnhzWEJDzYvwNCNL9jja67-jKjucMS8HIF6NhpivlfXg0L327GjuPRoJG59Bh3wiwyZcQGqdox15Lr8XkVtJefNF-5QGy-8sw0wq_G7ZO_oAoqHeMvQVqph9gtwIe3csPlLcu9wdqA_qvut1i8CLzBhAC00d8njrse_0=<%= size %>`,
  
  `https://lh3.googleusercontent.com/fgQY1wUmPckeujLxe_Z3eVcMgqQPyJfTCA78R3hi132d6zeHyJCbNH3de6-dBNVYdi3tZNX7ykyxiD41vT9RD_nvIdm0_TLqFXt57ueF5qC67dHj2g8N8k4aqO6sFUFhpqS3b3IDyVhwqv-sfrVMRjT_eORu6rMceDDKEyJAIKSVx_0SzaZv0hx74qFHdp0KEtFwolUeMQm18mEXWVMe7XNJBInvETJY7fL5M-tUdesLioFlub8LsyHp6FsxHHeH0fWh7RIguVO_v5Zz9jC2k2Bn5rzXZQebe1RPmW5hySDSZGu8xCj4-FJA0vSfzdNqhoYGoQ-uOLlsO3T-oJeY5JGXduqq3MFs-F6M-cS9usVCH41SQxbR2Y_uZ6ww9e5-XV2_UjwOnAKBJSAWUM45YoxSFrvQq9YKS5JuPvkqg39cxPv4Zjp8FLY53eAs-OTgFR5XNgqjebkc8V_obiPN5UT9muTUksQK667wb5NTPvwSzgZK9FONk8wWhv5j9FDWu7e0pNuLOUfQJHLi-NlRZkPEswD7XR_0-PTpi3h2LSl_Ao8ndc5f72_dYxvwzSFqhBxdwp_FWVuYNFl7rhC6Rl6zBlfF41VXT2usvbxBzMNSl3htjRFrD8Jl_0onZfCUyCMyff8g2ub1kNkfJoaMnSl-IZ4rW-IMgHdWEBDaJLBX4j0QqYvQ8DLpOCbRldh0QiR1qjKLAST91MqOt0ycsuN-M3LEGDKqTk9-cVL3icNe00kDmV0Y9LvY=<%= size %>`,
  
  `https://lh3.google.com/pw/ACtC-3cpVZGuaalwsScjNOef9lbUhAJO3N9TcteqtEJAyQt-hoKM50Y32amqZJdzeJzxrmFHkNwuuf23_Znf1Fm-gnXcIpIoaQ8=<%= size %>`,

  `https://lh3.google.com/pw/ACtC-3cRj_sXvPHmITKxPj8MHUV9zf251BTwAkv-JnE1AyCxnwu9Qzfp4NwkbpmMQMf2aNXuTZNrCDbmPvQwXmEmJZIKEW05OBo=<%= size %>`,
]
export const AERIAL_PHOTOGRAPHY_PAGE_DESCTOP_IMAGES = [
  `https://lh3.googleusercontent.com/2KlwX3PQalYLofwFg5bsiv-LB9oB1cgtnNoi3BVnbktDPkMQyc0kf4r6Lzx08Jh8hn4PjpHOI3DY5Py3fHu5J9hv-GUQLnzFt55hR8Zq668_KWVoIOw5at1dHoXVMN7-9-tjeK8sayV3hgfwgeUvagUlETg8S-vc0YM2Nf__wNww2en2nWdMFoXawjZn3i5y2Jy41BCDdctaSXgWrpn0PfFplZ6VxAwlkqu7e2AQKxC465JAZUVId8uDLnVMN742z0_jT1hI0n5BwxNOF3wx9e6x0hUwBvsUU-1cc6niTZs5d3BKgs7nOCWPxIWiXDVlI59fMj65bfMRrRQjD6oWx0KYg4e5bSFzVtH6rdCHYxWTMWbFlzHd-dS0KYi8LvQ0kSSbpahZopDMPoD3692SLveE5kb1xbXIh2p5st2vTZfKmaYPNWF9-eay-0MOvV2zkB7pkQBoOUbcYj-VZwShUqNS6-1v5SyPKaeYJzJDfyeTQFYn43MroQhZbRHcIUbQko039Rpu4tz8oej2YrP2N3o8qTrNXTJFhp4SsGAR6QSZGzRq40_5T7AZa-_RCOTrtfH6dMVd_rWSofmfKyLxu4hdZpBE5BaTaRpV7mi-dPFBi90XqpzqM2jJWvEsV4RYVkhTjsTXL1gfqGdSv68NH6cgSZICFJQ7LtsR2_iOI6o3dMKZihQBxTdGCfSZjoQ=<%= size %>`,

  `https://lh3.googleusercontent.com/syUit4t3l9Py8UjLDu3fQN7QTkRZ1NXulPK__5cFCqnUrt0fmE3EYbwB3gbPkwyMCICskX11vEgig2-DlC5Ze2OXlzYL9vzxUuwwVCUTEPRcTNRJQqWVLxoqg3FAtIXSTmV1-ox-nBXfOMLPp8egyL9aDmTMHKe-bdd99THXmHXNci5tJATYWDSE4WSasNgVhbPoGem2J_bPH1X_ihBVlZ-6zEgqfDCtcz85JJ6e7ZtfqLrb-s3ml0yis594ESjMKILIuSi0EMaXBv-D_eCfztwVqdf84dQMxj872bRzmwI17MHQDnqC1Np-Po6WMPMRBgG4kLOZcKpU15rh6XERMuui4ebuE5vzNToHZqAewC2cOJ65Wk2lYRFsoVH-GiHiBlaZdpPRzYKUbjiNe-_ul7JVi2em-xQBIq0f96Wfo_2sQWUGoB4rxLZtBTTmc2TRTM0JFuDraOVF4OWiVO3aLxsA78xYP3ltsWGQtBbQEUBERpTg5uCwhRzLXO1BqJ4v--4b-_3-yKLoIZvvMylNjvvokMljRK3L78XjCm8--mnQn9fUGEvK0kIHAfoYE24nxnszEtqrD7JG1h87EM6bbi79p5XRXD9TnMnFZJlcrlKkW_dzaXeawrxATlUqulemT_ladkkhU5eXcH_ijtqneBgvW6rSAbpEvQiDfaOFam-N4u3rNdOH5gMbhLZiYpa1o3WOpFz6r-FwEQKsawinYUspR9lRGugSN9r4ZQHcGrno0LzE=<%= size %>`,

  `https://lh3.googleusercontent.com/pw/ACtC-3e01W77hxTFPbNsxKBTOalvERs7ev-HuZiJpeECgzhM2RMJMDLkDV7VppffgT4gQcBLvD0lfV-ie9XR_jy0BVOPjXpocvTlEtl9dZZIH8KgfAkH780Nh5ryxuUlwt-v4N0PmaYF3gk8fo9R4Yc4Ul2v0Q=<%= size %>`,

  `https://lh3.googleusercontent.com/Df0HaSQXrlAUzcejJqaPmzWPhrCsbrU5Vg9r8RHdW3am_HWeouMX0bpVRWl3tmCMfkV8ljRtOGl0mmvgWCuowUjSCcl23zdhfqO5dsrA9ZMrlva8Xb8P1FucgKfWb3VUif8PYQvjjvz_QWEzctFg0ZNLCLv5_4XS63JzShH7PWHALfSJ_Mtqtmz8AOVYgBIPudoF9l2KU_45jmCUmO-5XrSJGoRV-ydUL24MN-gaKVmGMCHvgekgn68j-yynugv0dZw5FZzUfgaNlCdOq3cjrPX2uFnE4zvTqPUOiCznsj3fXFMA0449dYYT5Y_e3mlGlJJl5ycxcAZHmwzTXCxzblJH7v0rurQQGNCAahQcis2pKu46YChDy9xKVFLKOD1lpYPW158jGgARmTRSbVsNB2JOVriW0cIRPaY0VIfg7Q8AagXOnSzE2kJpC75RE79Y77O35QMB3qGcAHQCebSVF9wp_TCG0L2NP9LWtztAVxqvn8dYDGQA0TI6_-vuSaTFBKZ0SZwKLNoSUii3HJMZzwcj6CzZHJ0V2zoIyMYg9N790C0gx9uXqohjnVym6I0KhGxHGJePSTNd-y8MF98YocEW9HNMj4RdGrzeNO3SBFPzWr5GvSB8KkFgFkuvJRnSPgKguPdoXZKTucBHAaGqOFB3ZBNlhEqykrL9-ZzH5yv5ONtmLV7ou-iPzfMEk19-VbfLEaKttal_CiV1pEhcRWZl1aJ3lU2r5JJiXmf6HU7VodfQ=<%= size %>`,

  `https://lh3.googleusercontent.com/ByxTBdDHBmi2s2WNMeyJlKXgsFLrj5HaVoW4ss0tPHdfxWxC7VXpwmP9h95CLz6wtJlHzUFwEgRQcGsBDn6KRZ6dGY214IhniGaWTjuDe4Z8rgbAms-KskhHzA0UrI2p89OnJ8gvzvLtCwXUjKD47LPmGE7NWTg-CmRmHlzCgoAhD5zXF02hac3pVA3lHxEjbh42T1FNhFu_iRzsOiWvdxrqJBJ_gUms8wVDjmB9MXLEt2JXn5iiac33DL0PUuAtoJ1SOMzv77cFdE3IwtU-OsRS1TS4T6FtvXyI_c9GirXI3hLyEda1P6ykcWIqjbXuMGErmpHA9V7l4VT2De4eoZl5tNfkwfEsMrp9pgEtCBpAK5UPL_wHYDycsbZmbCVEy1s9t2NuC5EyTgsv_bH3e5zYhX6-ZCg2raRbJTMVkhHdlh6duKHvtKr_ClrKJ8jM7ptbkZjWXKL-A2k-5v0DJCRRFUfK7FxxO2FgePc7pfkRLWhl5M0ciHIklR180mHy4U0GRR2Nq-vZxcY1qOHn2FYkqJJ1pUrM-unJviQ4WzQTjndW5blmcirj2jrnTsuhthH_cem0bzH45s2rSG7yFxKanqs5afCxmHQDO7HUmJy4WCVv8OMo_wnuRZkCTT9292W849sW-HSGu82vA_M4SmiJx7R8tWfPIg9sR83Tr-yC0fVlmqWeLaLMCnWpptknxTD8gKnme4SDc2wx2XHpTqVvVqbGFIUyhCv-nqVdDU8f_2mU=<%= size %>`,

  `https://lh3.googleusercontent.com/6KLtOKFA-GangfVvngGSbubkl3MBk6S6rz__6w6WXH2a7rWC51AYtvj03hUqnmJMxrZy1A1hqEcGUYfUfYGsFb0-g_9OlAC2YbLLAKYw2wlcrtmU_UVEw7ZDchbnchEGJbS_ELIk8vQhriEz_ti8746ZAZ3VQ3aQFTzTY_eYgz2SE_vCH2nWKetK1uI0YyY6434aw_5FgUsFFNoirw-aYEoK1YTcmLITmY_fxdvuZBPGPQDEtr7yRIhSiBrHmfE5UH5YvZVRrSAkMSnMKPqGLFLCZ-ROoeFiqXAK99ZHeE4EuTBuqfVzTUQVMH0trWpx_YBWpY2qcI221ohMEkYZ5Obc53A0hKbzEKREUK3p9ti5F0acpcE3PDo5409W2pJVFzN5AftvakYR-bEtdrF7d0_mpkaKCWwrVvcPgbXf07fleOMvhTYhG1zPIbYj9A_QpFpjD5Cxue-DBAVE7GL7sOxIKIdPevBtOF0QVDTe_HJuS0zOJPMMwVDO4w_7JzCEm1D3KAJvC38ycflUrSQ4davV74iTqhC6gM8oO99zXG_yaOC9ji8wUcMfaMGEk_TCwfBgZd0zQOCxX4FmsGyWr9w6X6_TGLfAUQ-68gBsHUMIANwl57x8ahROXTMmPI295yhsQPK-IML3bdJumY8EjznWAy70i2DfcBUKZlRghvjTYvfKUzNrGf25RZEGVI6LiV8xcdi0ad-RYxLmLxkAD01iSWnmWfQkmJ6WMI-nMo7yt7cb=<%= size %>`,

  `https://lh3.googleusercontent.com/pw/ACtC-3fwj7Ae1QGIKcu0bNjB5RQc3sQXbwmEa-8DYn9MgOq1f90wOUoZj-HWP7eZiAgdns_Hd1j0pQcHNlaSqTP6L8otmT-gtG_74jvTE4EDw4YGFW_RtfaWdnqGNdCqCSp8ctS30Km3-fk9gtY8d64fawHzaQ=<%= size %>`,

  `https://lh3.googleusercontent.com/pw/ACtC-3eXovm0tN8rkQHHGQWNqZloMxER3u0y9kGCdHmu-FCGsRWrZNRYPRzyEYqCNDyBpkoTHAqJIYTMyhfNjcucN8mJbppEMLLIvEmG2GeeaAHTx3bU0mA5kSgZWAP05EG5G01HhS8vEfnJkpG0bjA30I-hxg=<%= size %>`,

  `https://lh3.googleusercontent.com/__sPcC4IXUvsNfsfiRvCzSAEBSST4H-VoJ1-G-b9yrRuxLGi5Hu38QM-toRT1n8uQUVXjGkgXL7hJ3Ac2kgZDvmZlyi3-f-kBLfJCHFgLl2MTYfMcTr4obHUbNvvPjZS09LYZvCHQ4vdPLEIkT694-0QKGe_5vN6jbfb6ahOU5xR7wyzmRCChQ5ECenSyu7N1Ue8W-JiAa3BOScs-uBdh-gyTiS0puBaJD0Synl3AC5vVCbjSJASfsFna6EMgC0Edpub4XV38OPWzEcEQ6CvK9kOmK6XG3aw-sfOqn7hDXhgesH5psDrcAl0Zj5IZdF3E_zIukMVzug_JJtZW2gGNpIRQjRpngk-GX6IoGbPgWdTH5MiYjlhV0lx0jFi0_52LwLDSkfkgedRp7sjlgv0EKPCGg5cZPG7naAYhwK-lOsz1sLw6OixzcSBrVHj4p_o7dNIHDB7uZvf-VILXcZOmLdjQ2Q0Tix4Eckzy0gl-HDINLhoQ-Wkt4CKH9wmj24HjWEjYuu3z7mFCdVXUZHfvzLT-T_9KQ1GIa-QrnhwLfS50hGddTcSIIgncgzQtFxfupMDGgDixMTSUjS21JszJMpUHpOFL4WzQQU5pPTzePxDiv6NxbxMA-XFnt41yWxJdDjV9Ea_fwkJCLwj3cbiqkEQ9ZyPl3Bemwv_0Tuzbuw1nqRu2rvIwbkQW5WQ6xyzhpYLlmhluUA4ciBOG-iGjEs7Gei4--_9FqmMHJj3h0M6nzbB=<%= size %>`,

  `https://lh3.googleusercontent.com/pw/ACtC-3fe1asDLx9i95Qpfaj5PrIjTYLj5emddCwzE8yb0UwFYg6KYYAlShf6Dn8oqa09GDsouWDONhgP2IZWxA_rXxMUTOrJzvFsByO83_y_-Pv2r4_sFyJ43qKkHceancIqlzngk5yGgvtP5a0eeLlGgFGEfA=<%= size %>`,

  `https://lh3.googleusercontent.com/NTipNAs34pZvBR85QuEL2x0LmdWrCxmiY33EX3IyNZzHkMGRk9MJsGEnRs1eVCq-5TDWIZE2YuouOwDM0vKAE0ovQuy4lAknMaUDebtpbiWl6G43Izeq4fh16jdMXUMa_JeUIAr3RCBrL8Ev-_hBmKXbtIl0jdGH7aQEH_B7iYVI7kHajSUgmcWnb0r_g0vn2_aAbYXsGftHKpXFosQcMYIBk66LUSeoDpfnG0kFKnIfDKt119SApgJ9RJ8GuD2WTl5rWFMRUhYkHMMusY4G4LbgJt2IhP97qowMXqyvSoMKprvkGikEbtJHMaA_PivEBereiyIvRMEiE7RaGf41KJGVLlStQ4EtrAze_MMFA90xueJlPzamMdzsfh3v_xHy21i4ON2Pbw1HY6RcUGMxAioKfnPlFFbaFRWJsYom-tpkv0LR--dOSFZyFNi7vi4SCyrTk0qh2RPlz5W0R1drQg06iEb0iRfYIQxkLmJhIGhvifFMyjqGSAWv6_Tzchn0eKPdPtK0f2S3TmKaEFmM_s_r5wJ6r0zPjkrMiBu6K1uFFfj9pB4m6foknBvmHFwWhg15D55rH6OXAtyMCD85zN6gJqyOmbQboQpxk3zF-ASZlvJ7HG2KLZwgAawuFa_kd7lX2_3gijUvY5B8Cnnf1dWhizxFaKyz85JKk3UP4pFzLAXS5lM-rwTCOtkwxwk2wkfQWXwIuEO7yppRS5YgVOncdBx4LQLetvzXgK7QmPVzan7SmquI4Hmz=<%= size %>`,

  `https://lh3.googleusercontent.com/pw/ACtC-3eHN8GGFKGBsia2rhQoTgls0juXazQfpUWnDl3mD5fjmpEr7GoKZu-4CknV4UNngcm_MzsM4PCV8F9YrGjK4fHY8gMMch9G3ruiq5RUzmxvfl0cIIqubycymrPixnryl5yuPmrX8RT61Irmlrm33j1v5g=<%= size %>`,

  `https://lh3.googleusercontent.com/LSyFsEPuaaEPa6ZdVQfB4DXCtSB6_amxTwSwPWPkBnCHWkoKth6l3gC_N_-oluWyhQ0Ym0g8BahhcCPO4eduRVqXeWaS_j_jaU-bR-rDeqSt54rgWG7a07b1D73bF2fHrR4y_RF0qPXbwT8qjpSQBNwwvJwUnC8ia2tEYuS0SYc9WPxXKOPxTojSkcbKFMhtcU-fx3yeKZZ9jl1LUWARj7CXn19ztpjvblhzTrBtG2SdA5eOYuPaawDr--uQinAwmKHNhwTl4ml0Z_M79DSYVE34qTmxuaAcatTwDMffDRAIIxIhkkOJ_d8SYr80dxTuS90hXy7KeHHwZEyU4bLsSmB2fQ3RsRtdmb2XKR7NIi5g6H0vIfj6Uo78D1H1ddkrD5-B8PU1Rt9sEk9cS_QnkQNaZP3plRa1_FLLGkCvyVTmZVVsmVj4r30w_uQjUPCIvV2bt0MfrwyPCHDyrP4ykEct9wCRalJjacWeLuctbNrp9EkEgr1PkByGAp9V8CeCLTi3HQ9RS4iVEnDUMfhR4kqp4MzNWROGGbxb_FwhF4-kVeOp4jsieHsILY5xpebJTU2V82K86ZcyxLpphAL224l_MAE-bODL3ZvMeNGZ4NQCri4m_N-JPRH2J_YRcSsxJEEzcPwDI6mRIXyQuPSAor5nivyU0nP4Lh_sHJKuVbqCUkrF7aoGS09_ua8W78YuomOPkbP_yJ9WbvwCx6A5wkZGbjrkD7_EvFls-mT1gWIsPIKu=<%= size %>`,

  `https://lh3.googleusercontent.com/oZ_7cRgDYvyf-FL2x4xcCN6zIXHfZZ-KzSdmi7QIJ5JvR6Y1mekUttPmwUpe8wyT091nIzIbf6ux5sMqVNLEnlO_BA5z2NDB5xv4Tkrvf0jlYdueCW1Fo5TiLhikxqa6DunbgegK3C-VoRakckf-4_fsbvS9Bwy7gNOt8x_zqjnut9gxel4pGqEZHba3Gw0dS37dLA47Sref9W6MwuSeG3twnGk_XX5ekGjiRs4OUBtcUROQE6Ikna0qoPekh5fKSJRIJWIjYwiZGe4aATKRdqYvGqabnafLFBUHXvO_-WXxmrpWeD1LAZPg5F37iKpR4nsv4f4GDpkbGCXXa9UKCOnV9256On4JslSE1oy0bUEWYP2ZdULFpu_axvadbeitIExxYOim1frTKryIuYYsS2MsA4eInCSsyYnw_LDvPpWJObUbyZkS-nGrKOuXvbSuxjy-Dzp__JTfwkOKFF9Xq4t_cg1LG5M6e_Pv4YkJxYnPmVzYFN4CXFaN2SFkJ0hRxrI5eRxS17WuqcRVigrMXzOzxRYdTVxNNKbL4J0Vvj7ZEEqLf7Yx-KmzxgYhAR_MsTMM0LKc3Gm4hXbBg253ev0Mgi7My_8b9XypoVxi6eargSaIpjEhbZQaRPdYeOiZU_SrosGdGSEe4OV2relH4Ug4H4W84UFhFvtwLp0d9F2iBNpgR30qgz3QouqA9y_VS_Xk5wz41JwnSoMzeBMhBUKg5PLxrcObF7PWzOYHnC6zxhWZ=<%= size %>`,

  `https://lh3.googleusercontent.com/pw/ACtC-3dZTiwDThy1BFPa-lbUP4sQ4DKn4IObrFTOxUinaOVQVbRFvyx0PG1ZvLBbR0ZzVCmPueQj9YTxJTstLDV0VQa1WrIiIh9JI6UV0LNR5EjsJH-9Ns4qFb5LEmUf258YVI0v_oMiVzo6P4B8qlQYMdya_A=<%= size %>`,

  `https://lh3.googleusercontent.com/pw/ACtC-3dyE1-HFYjiKfkcwhC0VrgHkXQEFo0gc1NcusKdc-BNG-OrJmKQKi_j7FmCqQlP46-HIMhRX59vZnsdINYuityEZPsPp4Eva7pJp-5z8vybexGF03khrT2W-LXBiqr4oDJ_p2wN5tTH9c_yLWVCJFKMXQ=<%= size %>`,

  `https://lh3.googleusercontent.com/rAvQeGTH9WvdbPLYejs3v5Z1VWx76rqUMJ6K_MjvSbAb_e7eKsylgCLGa69wN_yRV5X_bPbE9WHKz_TSpTbMpLeD-YRH97jda-IrO-D1WbyHSMJNkjt53aKGHSwO108gdGiSCwM5E9Hf0HgEdT3oJ4dZw_sD6QdOHXscxMdVxBZH1-9_dBdLkq0RHFiqx-CpQ6rNmGRv5slbZdM8pyfWnBS0NKAqM1Od3ZLmY4TkNfQuWSgXV9Umzdr-XH1INkREmPkpMvk1CAXBEHoQWENGHsdPby7leL1wr2EGqKDEC8x3947i1WMgpNr-zYaWhyAXxBXOw4nmeOsiSBT8WaCrZPskuFk7YyutMH3UM-mn2kTNkCcu2QtLTKMt6jE_KukHg08nZ4JfO23wToIAx8An6pK1hLLp5gztIpNjhGHh23_xSnU3t4_bCFvb9GOrsKONAGBQaXwPPCPfNYw--DZLWOCuMsR2YuukoFohFq2bP-1wSzpKCne1BH809BK55hdTha1nT9JXVoy2iuJi3aucOnfTzD5eLxg9oCy6nknESRTCgCRlNG-3rM5UBRtHhgcM7kuQc2QXAFh8JHmZe8IeFt5VPCf73tL3STK5-Z9hYml7iyNh7NtvLUFbrV7-k76uvgxIh12MgSF8gvtHdJ2fuiazNPmg7583dk42kQSN7M2FOfyMfq6hNQz-8JkjvjRizuL_Qq5W4dgYVhJpVSLXmQ8IZg=<%= size %>`,

  `https://lh3.googleusercontent.com/mfHKB8xYNjbIFas4SlpvF9pM4Hyj1cFE1VO5iQ25vIvPDuZv0egfmjtktxg0VaDYH5P9EzAatY5XF0f0jItvUhHwkf6GAvALxSFTRCK06bdYxixrfu0OiUPx1jqgpgPia0hRO3CHF_yZtKEwnTvg-YuSz2nTZ2Hd4kx2Jz6bLp_BtoWvRl1Y-shmquUi60YKgemL02uHQokSUTdk-kKOiM2N0SCzn88kZ6n5gcdcsKURWNQBaJaiSTBQc-7mERSFo5p1Phv0bCi-yyJZi49vGB6WSKyZRRUFKUfYRFjzOqAU5pUD1kUNmrdoF_gu0Wn1GaPs2TLX0ZT-Wmf06nGt2ozmqys-TVMguFTzBWn9GcHxM5VG0hIys5ZFD5qUx2o0aRd7a3ZYTZc_HGs78B9TfJH4MSvHMMa7v_1bIeQHuOGJjQwun74ote9QBwLLKRGXo61rARxcnypE-3i94JdADCrI1e0LiC91JD3POEHsqI8w_ANY3iy9eT8U1Rw5RrWezyPGd5tuNy5fThk-8P387DpTwiWUMruTMs1fPDRyS2YuZiTjIqLphFH3n7dQkH7b9vNj1MGn3b-lV0jPgEWcBnMunL81D9SIEwDQpGv2h925In5vbMrWOmpdZELLDtfVeUDuh7XBXAdZpXUC_1itBOOnM5wClZw6DZQnfcS-1970gtd7ehF3nYCVaEejR74X4zBOqxKD1NLdB0RFiJOtzim1Cw=<%= size %>`,
]
