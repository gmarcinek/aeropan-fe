export const FULLPAGE_CONFIG = {
  licenseKey: 'YOUR_KEY_HERE',
  scrollingSpeed: 700,
  lockAnchors: false,
  anchors: [
    'film',
    // 'photography',
    'exteriorPhotography',
    'interiorPhotography',
    'aerialPhotography',
    'googlemaps',
    'contact'
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
    // 'rgb(39, 38, 39)', // photography
    'rgb(39, 38, 39)', // exterior photography
    'rgb(42, 49, 65)', // interior photography
    'rgb(46, 54, 49)', // aerial photography
    'rgb(197, 163, 197)', // google maps
    'rgb(16, 32, 37)' // contact
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

export const DESCTOP_IMAGE_SIZE = window.innerWidth
export const MOBILE_IMAGE_SIZE = Math.round(window.innerHeight * 1.2)
export const MOBILE_IMAGES = [
  `https://lh3.googleusercontent.com/uoCrljJKgRAKRs-ZmVQydZ7FJVWw4ROfF6_eX_DBberbe-6Fsg06t5D29iboMHgEluJBYjBtxGY9ibssj9hmqO6kUgushaofIahARwQfatX4OKcWjLpY1Ypm2gdCaqkoyHYqB1yI4xXFn3chIKMccJW94MoZ-xOYetuxsbN8gGjdIKq3q_XSXvGQiQqMlF31GAa28UNb45BPY9n3p8kSDBU7b92v2zHftsPE7NMjxYaUSoJ8-xAAo-uO-O8qLhQq68kmvs7lNGXnR13Z-dozf4xyKLeo7cpzG1m2abYJnqJcG0yRejnsoVjkTynUlNeYz8lepggDvr6i7zU07OBBiZwF4dT0Ay81T-jU6P9zFKFaydNzobQfsipnU1_FDrgttipp2GarqTOiKqQ3P2VVbR2IMdh9TMD08W37DGfSmCkdcHWxnZSm5oB4n6wKTM8iuJVFzLOojFo-01p0KvCe-BDdBkf_Bwxkc0ttWt80Ij48kMJKAh8eOtQalxepReQFfoxKFkykYpb8Qb3YqBe-wQwuFf2uOEvj3OBjVQ_zVeGaylD02K0uS1GiyE4HyrQVBaEnrXIE4jiUaStObkGgwGLB1rQCrK58IG9h14EoVGEyBlmr8awd_aKMaim59_P1rPDualTYZhlA7sdbi_0zpQH3W6hU8dFR3tN0fvnOu-EPCnVhDEHFTSfvls5hJvWfsL0OGhzqvLGgFnpMOY1LPIEAK5JVNDJuHA29qjtv7oZQ2hkt=h${MOBILE_IMAGE_SIZE}`,

  `https://lh3.googleusercontent.com/Ht9cjIPBlEkuZ_RMeg_WefJoF9UDdep_7-4px02C26kxujqHLZF_-Fvj0T7PkH2uJqxbHB4BwSummFQ77mkd4JZgQKhMiPGclv1GlZyw7nwhjOkbufjSi_Ip4igAM0o8I18KUJj5Z51cJbW-our0mIpqM7JUBo_ofmLG1PAGfqaPakbxMYn9gOQIVGtWFiVp1KJZtBOAboAjEB4VqaWyhI1JDgqSuiCXJD88ObgOzO3_ex4wIfAOf0SDcU3m0qvH19sJiJAXjLRgpXutkYpVvQHBVwOwYiJzJW8r2rUu5PZ1Kdr_Ielahs7bQ0KTxeADZ9JUqmth6B5OkL1GN1eeRiq5qeszCDrexPjspyjVqegpF0bZ_29UIRxsg4o_yDKmlKCOcGemnuvV6c1kjuOw29D9Xq-3Ra0GZs6Uj1oTiit_S8mSa8mQWqm7E4CQ-_tr9WzZAL0MyV77k7cJHWFVXuatsHJ_cqrcMcnyj92_cpl-rp5xfOPR_d97fFRhh3EKJ5OqphWr2f3aJIoxdf0NcMcl9w5gIF9FP9wDlSrV9IZwDRfdvtesfTIKp0VI6IPAF1V3DzRpEBNa9pCXztgbDZInex2QBNycISdUsARAE87heqSS8ccpgxnMtQWstO1LMz4mlFyKFoZXuA1cOytvFTBcmBrDyW5advBclnjv0yzGzcM7dvEe12cbpgpzUWkSkuiAvrm6z3aDpwwE1jZSAHO-GrtXH7K7ukk6KpQbrwjWevFc=h${MOBILE_IMAGE_SIZE}`,

  `https://lh3.googleusercontent.com/5WfXq2NOQKm53qGWC16_rGy55YLPmutlGoKvQyeHtsUYngG9dBDuzVR2NDtfQflKsEqMiuNoAyHSwefUjvclQn4s8lzwpSrt2jWdXWSOoN1r1_a99QeAnZLaBnRKGeWUqtFt5mmyfXhCsi5gQaITvp6zydTAWTSlBKfDFOcVFH0zvq-xzybpWCA1BrA0gkl9JJsqtLVlvKTHkfRjkgzIFbkOJJreeM6IxqMRu8eA0rqtXMD8ekwb9uTcwLLKfhsRL--StTmKDkh-C0lzeVv7LRz4a-3Zi34lQNjqrESa20v2DFwkTY9IHpleTWLSXrewRPPWqy9iZf4dQubfWfeo5puuUG_d7oUDd4Tq7PCaUlJgStNYGr2wF8fvZSZcWOGh0tCqQx8aeDaxoSMJfGw_qvAfzbTyvFXFcU22G3C4WOulD7Zw7WWbMUqDA1LU6SvtY6Ut_JuD3ZwV0t8tFtsSeb_iwVjeyj1fjAQTi185-AJjkT2UcfAwN8W_hQT0CW5d01kVCdrevXKY5Gr0rRhtilaJdfkgMPerPt99WEsgn1NFgdbbx51mzuF3ClYEe0IvLFYiWa9HxP9xdVZJb66sUTvksPgRdouNCu3wj8yy6d5rLjKMi8QFkg-1vSZ_Ng8913JIoGhtPD_EYKJTFx6rLny-4EGfI8wAL4yVQbq_X_rxcGKm5mSETjJkegoDST-MElXhnqUiB7G7dWYplIFczElNmzC77NSpClh9ff1NWBeAu8Lb=h${MOBILE_IMAGE_SIZE}`,

  `https://lh3.googleusercontent.com/Lov2fZpxGXRbkOYVKr244Z5y0SNG-Oi4KgBSaWpDK7NBZes76uZYb0NZV6fQ7Si4q-HyNlqtQ7-5ttlS8ZZibjkrIL9TsznxIBeXm2wLIHC23mUh48JhEoQUP8hAB0t16diLHDIfiUbRm-rec0w0i5NERYCauFrcx0tcOYslnf6ykTaLAAKFyqCA6wWeotQ3hblFmttL7vQV_JgqC2S3KogYzDNt1HJJzRcijn02xzEFiDlb4bS7GEAApQKqB3-i8WxgxCTy9sR-823IOEU56lD9K6z6ZenUW80d5Xl4wcyozfjZhZD-kCiyLkCK1Ynl9OAJhC_GssOgDZW6wlHmskJN05O-OA-rKiaZXqk4T9yEir2HMpkLkK622GI1sTPMxEsIQl-qgzSYv_5spM95LNwhhlZp1jDR738dImiUiC4_-QbIzG8LCiGanw1o1wJAFxYYk0BCHrdefb_EcnKFDbF8fDnD2g3rzybldoukOKYvqsoFt0IQDbMMUZYk7jeVH1PsfVXiKMctETgt1T5hcwOng4iw54kXTSOVCCJQafpe5Knx9w7P_rvhZIlzb9yjqYT1XyZGMyT8-SxItLM3TlFds0uDP2C-q6kDxzrlkOFvYHukKcWog4mqfilRlYCTpULM-wteBFfgs0851fLDZzALrwrYk47RdoLS9SA_pJOvHN4QrdoJakgHLFHNGBmyHjWa2OFdlMxItUKWtv2If05r-BopG-B1BX-ogjh3DHEDTTWz=h${MOBILE_IMAGE_SIZE}`,

  `https://lh3.googleusercontent.com/qzsWhrEMxh9XF8awTI0rZBuMVpH2qq4FZ6ez1WCNLr2O6EvahMXbpfD3B-jTBqp2xmLhIwQumfLw2OWPL4f760IO9f00KHCUrcym6NX9nZW9ORbBzQnF8ZRJgvQ-vdcQBwHgBcnecwQA803mGVWzmPSTkXW4DvNz-krdmjP7YP5pajnLMb5OHkaApSTCiyvDg3p4A95flpWfN4VVRr9rkAJV0sJUH6u4byA7X6L8dq3PVv1FPcQBHDNRL8k2MLzBa0_fsChAJziDb_U8E7uY0gVGU8Nsun1TL69BO5-tPEii-Wa-dkX46S9fgHMVUrxrnoq1VRmqxPYEms31nszaUH3MljIIbYisDrj_kzoBEFify7GCMKr3_P8_TfU2CyJl1FQsXjt7Id5aQP_qjpVUffsQeZ5n2k2OCoAzS3-1FGVz9IGK6Eve6ErYTJsW21mHDVgJsMqYCxHOC5tvrQ6aTovV1XfPF1oiLcYQDUn7HxJnPpKJvEla9HvcSyHedBv5Q4LrGQG6X8xxEW9-fr02rd7Y8aNMeavWI22IT2dIWw54elSjScx1n07ilPv3neqhHWZzjHBCMgAWx22mq852HODDA3bS-faS4kF_Ky_3K9k1L1qTxv2crRJxUQ5SMcQxy5c8QlYU21K8ttIej7A5vT9Y1WVZ19jBoCmxyukF5SY6ILDmCxRaiSua0cU41njvXw6vhIDQXdLsZf774Wm_P_fJZBAaCdKdDYFgj5ibe-q_XlJT=h${MOBILE_IMAGE_SIZE}`,

  `https://lh3.googleusercontent.com/gu-qIj_eyrKVgdRNADwFtL4tdV_fuX23bCjDotNIT0iwtZyrlv9teT-yYEdT6vZ46cA6tkGuNd03zpp3wUBKJsSHpXG5wX7UoD6k2Uasp9I0qeWLUo-FNvC17jJjzQsNbmaYPHucHPCB1NVuqkc5eKuAYa6bPzQdsxFICye2GP4IOT-poZQDZYcVSHWz94MT-INVkMO6auPDBNTh0BylFDcoo3D5l_egjIFsmakBJ5fN3V54cFpC999-6eXdbK4hTrQBOq13ptCx5BqGSnmKXIM0ivrCHF1wbPSipAlnEelSnHYE1jzcELIMIxGAIyVTRCQcfsfjDPJTG3IaYDHcNUM_wdDdbGXVU-7uhjuxgC4ZyC_eTgjbRGyzzEAqzmrzCwfbp3RTf67zmicEmeVUpTZEmgwl411LPpHYuReuFV6lNeVA1unkyAoaXgB5NkUdGlmhbva9oqnbnAQRHjUO2U18tIZgDH7kLhXShA9P7nGNeU4fRfM_ejmam4VoHZmWxjbMm3jlgUe8lThAFXTZVuAO3j-6JRbh2RYcB3AwtgwOWrjvdOT9c6PlVcPLoyy2O6cbGMLpL3OQy8-Fg09hHCed0U1USuyO-OmdiaOvKezc2SLk5WEcjxuuil8uakOsVg7FvK3PfR5zzQYJgoWy6fdbIeLa5oqvJ1hkrFljS-ZyeKw1XrCm3BAVe1r_MrSdImOR07J4T-S0mdn0Zqy-xlwMIhcpj90ZFJ1z64GYnzu6ut3Y=h${MOBILE_IMAGE_SIZE}`,

  `https://lh3.googleusercontent.com/ZH2_nwVs1QAT_BrK1RhZbgafBPkmSW0OtDHI53J3Wz3L7NXkMzvdYtGj9nssNpoBB1-ZfUIOYCq_ajnbclIKiAIrJG8ApgjGJXXlWR0s7tMrMrS1qndC-GOfUY4zdzV8wZ1Nms6CWgx-_bXRLWVejDkOBaakNnZgbybCSXecdUf7n3FOXR-tDGARQHm8wo6dcH3lrjmObuIp8TO0bYZdnrb0OhakMFyrX5rJbHDZexJ-d_EF4DgcSFJYcG4PYtHIxfTGCYtbh4suteUWAKveoSlpnaO02NtC39DGAi14x_0wtOW6vISnuiSAax305P80Dd9q9thgqB7W0orkdV-8991astPOqIDenDZFhg09aBMuHnc75aRCgVF-rI1AiAwx9iMG9yGTXHTXovaURAXRJDl1WwEY2ZLbDUNIwVU-iaWR3CnEx5lR6hZnk-Lm6Swi-BgkXrLXsgHZtIHzcLHirBUFNeb_2FzQBHM36wg96RBMfKqXbuCfjTm6_joEutl2p7qRa8-RWi_FqqDPjT-y8S6mjoHVD9BurrZGVhnNiKQAnlv4SpiC5hYZClO9zadv2J_9qdhaW4hUDKGtn2BhKfGZzj5hasAWc9geQsjQsVqE3yhv_cvA53ENo8et74n2SrHwGqfHmc-BZqW6zriC6oH7bziI08yfj8OrLqnMIqy_ZvyXbpNlvA1OiD0hyhTj6XubFfAuUHKAc0xS-_hYSORbChIa86-FqLPLNSrh5sWzkYVG=h${MOBILE_IMAGE_SIZE}`,

  `https://lh3.googleusercontent.com/A059wWyS2RGwmnWUWPFeuvbGEcR6KkdDu0L_YOTSsz7fk4_rhcAc-FEIS2b3Ndk_ZwD3x8whPndDg5XUjOfVCVxGI3zYmPHZlDVALMgQHK1xrLUgcgG9W9xcLd7VjozYrR4wELc7IVG07EWhxVgvagargbVydHvoSG6wsMJA_dfNgnIB6GByMe61NaJZmP6ko9RW4tYBH6R87Ek0AN29UEQ9ydDc1PdgrtQHs-whB8lxAEOJd4RJzj9QNzwLRkFKjb3dJoMLevNjgF0qWdZbQWBTnE5zld_A3k6FMJh-3x-HuoraTd5nYbOIT2Rp4B72wLLRoLk_MJhxacSIeMVy0K-_NjqwLS1XUhUTeybXIxN1yGOXyzfovFo5yPPW6gZiMzN5B53yePKR_qzG8pwfzja49tGWQ_4Kj1JjSwcIkrD9Pgjh704uC2ZSfsr8S7LjKMySbxHBzF_M9ybhtYiqcukYCWIU7Qf765a-QchCm9jB4kZFXXLy9vK0enOwK7zYz_gzKsRwk2NiiVzROayWpVmN6TjjnVbD-KwSZ9smUGsRaOVKyKn6znPNnF9mWbA8jmNaeLE_6tGr3hE9PSA_js1Ks8Zms09Zou3Pp4RdZY_tubQZ2NUsn7KDwUoY-QkXc8B7vMvUKEGwED99LMPUBy7Ut5nCStnk8_iwAqI_EeicyJT78ijKi3YK_d71_RGv3WwuIpE8u3MIpdbB_12Fyg-ZF6dwSFFa3XdQYqDkCFiLtBH7=h${MOBILE_IMAGE_SIZE}`,

  `https://lh3.googleusercontent.com/qDNQLqLtLycgs-4fuYyn3Wegs6sX-CPeQjW0dlq_M-u9wvPyh_ERSBhahBFJlLBgpVaKJCN65bPZKQSTg2a05hZqQF--_KueK80Sic8xCnpOJdrWyMHJwhXsAtOtXeRqB_wTRk9kGFz0Hu1bjsbbK9F4n2aLDcX7a5d-8M_3UmvXhKfwdTOAh-p-B8BvrXzgOf0v_GH-2TrOAa5Ef4y6vOQDX4iRZk1S4QSHtYBv99UFr7S5qc2Uv1tNuCBasUMnNXypNU4lTLIXHSCfzMmIv2ohjGuFA_KaUXEcqRZwB3O7TQv7ZXMOiq3LskuY_f76a9Y2c_ggVAwTBhimi2NkCtxiNprSyIjBEyaE9RTWgLlYtLXjxMgv8dh4m-guQ_6sgVi7fhAtfEzJuivVb7-LSml_40pLA4zMreQ8haAII97FM25HAG_R_odz3eq73h4mjTSou_bwzSEJ_23L95EZIAMzDh4qAynRZ2719QyvUkhc7h5JkslCzvqIrFxTJGaMuRr-D_2oB5ohrB-RKIWhSOYWrU5rM0w1UT7_hg3TMrJe0oXVQc7xcdmyR8Qzfl4kR1wu_EtQcPjK5rortmIF7QmXGwz2xH6VXBcAEL6MGuL2h_2O2QbNDslpEBlvApSdDViTA2QV1bo49AT1fgCGct6Xe4ejxV815nhYFRIHBn8aFAwfdELZlTxOqtOJczsVSjxJR1dL3OzhHfJ-1mLVs0GAxBNRqowhaKaepa7JRG_REYh8=h${MOBILE_IMAGE_SIZE}`,

  `https://lh3.googleusercontent.com/fW33oassNFq31Dvq-GS2sj_uMgYGIFLQQxuMtTz_hWmjB1AH8mBGBLVL3bAqxR4wqGq907CE_J2P542iLsxSZyXc3jw8YCdTYSXfeBgeUzsGA_jqmkYxWKZvRr5JcBMHBVfPnWHDITv1CHt2IFfHouexkUBdr8umhy46O6sb0i32l_PBtm4xcBxtHWHhxxGG3lkDmsUTvsNHttt0Ww_iZRmy0S_kezC8vLh5uJcbQ_u1Y7h0AhkT-vQ6SfEOgdf0QXISzJhtR2REG9IM-tafxN3fQZ3dTBqmoeUSnhk9ZFKgEFqzzx7WfF_fVpR9qdLLY8AIyELGVJke52KP0t6nFu8yyqHyJdOOJala58lIfxoz4gcYq50KY6Ab33RgoydmGg-qrUJ4QSl-fq9-FCoqWSUbn8EZdnEydzHAEuB3J6dnbd0utw5QSv0_OCFKbFNrSA7xN_Y-I87KYEwXUbERiixCKaaZ8gu7EQQM79VDK6I_gIIGBjeRefZxoHvPXmn2ZG7lN7cp-MtKQp-9SxURnIklvENlk6oJyHxLHTTz-oEeT1O2A9-GkaoSEhqikWn--QPyzCbF5YHZH0D7wntZsPFlpDseV-bfYVqikBRaF4lA_HKZTdosK2FC7e2-ww64ooq7cvH9bYX-ZWfpH4-v12LjguUppxrhe5Y4-_coU12aODO4wXwe4P0TPSJg9imBDRlRqd9pvaUnMUdl0_xWetgHq8EVSzquf8bu-owH-eENTv_U=h${MOBILE_IMAGE_SIZE}`,

  `https://lh3.googleusercontent.com/A9BTpCjqnJV_RPyXEMUwB6y726SIEuwnADkFrAWrQ9lHK1-83AhQvAH4IqxawzbP7o0WKm0wJ3C6QxBf-lfv-_qAZa1HXsNfXETgelZxolZvjbFdUoGMyLv3I1ELm4fAZlwvzs0_fkzVCaUO7wtuTByS51_AX99g2sLOw2yj8lzuPFVf3Ci2gxYdvl2HKCwRqNopdCvMZmqdm85jSeXqwEKv5SmblTRcCtEBKyDLNTQCuA5blLVvIuRfEo7aupVcAvsDTAdHQQ4Oo4CJ0pyWuaIYFQYw4l3ZIW15MjRJoBbyA0vkqcn0qCDAuzSFOEqEQ6c1ef4MmXZu0EUhXndQtPcyAEPTQ3MN6Ozw0N5_NCMkpb-te5EXS0g2Rfo4wjDjuCPI4LO5wRlbVp-ipNZdbH-NRO5JLO0bfXTk7P3K7jJ0T42PnBVCWvaiagm4aF184foFYitGBDJHbOMQ1KIyi8sHpQ61D_G6sw3jTjeWUeiphA4JD11a3j9Cer2kIOdR4LZH2xrL54UaUk8DvTe1-GLlg9m2t0mposy9nQdVt9PmKa6tSV3ebx6agCgmSTy3r792IAAtA6Nrn5CtPrlD6o0aR061CVHCchZWcd2gmPt1EO-iaZBhp9YImP2aInpVbObwy9u77Al-WGQkti6ZFuKbMB-xacu6sjE4vh5K94v35U61Ng6TcdM=s${MOBILE_IMAGE_SIZE}`,
]
export const DESCTOP_IMAGES = [
  `https://lh3.googleusercontent.com/9tlsJftM2CSlL077UVlBnx3SuTx6ONDZHoW2aEGSbcHevuDE_8w5kVxShvlU-jNWg1BGB88lW67R1mE5jbpCfCf2XHNG47wFGZN38Y5MCColK_ArN28glNkvQWK5_p9Socsrka1eXwp4U2K7xCZUmn0ISc1ocR4cEiXPrLvWJIuUVss5evuSL9nps6721RmLOfakQRuEn6Wqv0nurVSqvp7u6ku_K9owj9LF31lHzzZl4uelsETCCBzX-_6Yi-7MHtfdhAXFf-Evxyc-FhZ4et2PQBbRmNE8RB32YtLucsPzvMm5ms9xaHtwfdZU_u24dyy4Xh4bMJzK9kvcQreETbhkeoWThj611WzYIU9TTH0XOAg6TahU57Y2Qf5BtctDs-t61_kizOu70EowVQhJ3NJU8pm9f9V7yBtswH1tsyncLgPNPyP91m69UWjRtfduGB2jEKSJ2FXkvCwlv9ZCpmXn0mkBjpRrbBU6-FKct_sxMC9hF0F5RY6SBENk66byw2w2IFb7Ya4-OqvEJx7moehzW9XURKAGZCWF81Z_PWcvu_TcZueafkSGuU4Bknc0Z-MqeGdZo2q3kJ3Gd-JEDq_xbiBvyvPgMxOYVlhJ5SjEn9GVEvaJhbOZKNKoo7il4DNnL3ZJC1I9-eHJlmNeGg9TwDZ1BkfeVmxfZdHxCwCqXFFneTdN6MXXy5Iw-2Tzvg-qzCcc6FSLfIoJDKP9MsJ2f7Pfb7AnV7S5ULWc_ckJIL_N=s${DESCTOP_IMAGE_SIZE}`,

  `https://lh3.googleusercontent.com/6KLtOKFA-GangfVvngGSbubkl3MBk6S6rz__6w6WXH2a7rWC51AYtvj03hUqnmJMxrZy1A1hqEcGUYfUfYGsFb0-g_9OlAC2YbLLAKYw2wlcrtmU_UVEw7ZDchbnchEGJbS_ELIk8vQhriEz_ti8746ZAZ3VQ3aQFTzTY_eYgz2SE_vCH2nWKetK1uI0YyY6434aw_5FgUsFFNoirw-aYEoK1YTcmLITmY_fxdvuZBPGPQDEtr7yRIhSiBrHmfE5UH5YvZVRrSAkMSnMKPqGLFLCZ-ROoeFiqXAK99ZHeE4EuTBuqfVzTUQVMH0trWpx_YBWpY2qcI221ohMEkYZ5Obc53A0hKbzEKREUK3p9ti5F0acpcE3PDo5409W2pJVFzN5AftvakYR-bEtdrF7d0_mpkaKCWwrVvcPgbXf07fleOMvhTYhG1zPIbYj9A_QpFpjD5Cxue-DBAVE7GL7sOxIKIdPevBtOF0QVDTe_HJuS0zOJPMMwVDO4w_7JzCEm1D3KAJvC38ycflUrSQ4davV74iTqhC6gM8oO99zXG_yaOC9ji8wUcMfaMGEk_TCwfBgZd0zQOCxX4FmsGyWr9w6X6_TGLfAUQ-68gBsHUMIANwl57x8ahROXTMmPI295yhsQPK-IML3bdJumY8EjznWAy70i2DfcBUKZlRghvjTYvfKUzNrGf25RZEGVI6LiV8xcdi0ad-RYxLmLxkAD01iSWnmWfQkmJ6WMI-nMo7yt7cb=s${DESCTOP_IMAGE_SIZE}`,

  `https://lh3.googleusercontent.com/syUit4t3l9Py8UjLDu3fQN7QTkRZ1NXulPK__5cFCqnUrt0fmE3EYbwB3gbPkwyMCICskX11vEgig2-DlC5Ze2OXlzYL9vzxUuwwVCUTEPRcTNRJQqWVLxoqg3FAtIXSTmV1-ox-nBXfOMLPp8egyL9aDmTMHKe-bdd99THXmHXNci5tJATYWDSE4WSasNgVhbPoGem2J_bPH1X_ihBVlZ-6zEgqfDCtcz85JJ6e7ZtfqLrb-s3ml0yis594ESjMKILIuSi0EMaXBv-D_eCfztwVqdf84dQMxj872bRzmwI17MHQDnqC1Np-Po6WMPMRBgG4kLOZcKpU15rh6XERMuui4ebuE5vzNToHZqAewC2cOJ65Wk2lYRFsoVH-GiHiBlaZdpPRzYKUbjiNe-_ul7JVi2em-xQBIq0f96Wfo_2sQWUGoB4rxLZtBTTmc2TRTM0JFuDraOVF4OWiVO3aLxsA78xYP3ltsWGQtBbQEUBERpTg5uCwhRzLXO1BqJ4v--4b-_3-yKLoIZvvMylNjvvokMljRK3L78XjCm8--mnQn9fUGEvK0kIHAfoYE24nxnszEtqrD7JG1h87EM6bbi79p5XRXD9TnMnFZJlcrlKkW_dzaXeawrxATlUqulemT_ladkkhU5eXcH_ijtqneBgvW6rSAbpEvQiDfaOFam-N4u3rNdOH5gMbhLZiYpa1o3WOpFz6r-FwEQKsawinYUspR9lRGugSN9r4ZQHcGrno0LzE=s${DESCTOP_IMAGE_SIZE}`,

  `https://lh3.googleusercontent.com/20W3xUnpL0J_ATeOmYKzkR4k92OxKQAV77BVlmRJ8NVjqEIijNhFwHUzUFuFZTzFiRcPmCdlydbCCPF-3-Zc8Ly0X5zG4vhS8AgPD5QN7230zf-7ZZ73cDKJKHx-_4i3UHrSASNmzMhXUawZGLCqn2i-NhyD1_IWHBXmcg3z2j1FxwYizC1u8w6vAvVMLrxKnl5MKQ9GYe3layVn4rpWBEkRo0Tey0diDBgr_dHnUcZD0eAU0VR1QrPZbUCkTZizSsQC-Q2I9UjUDMIGszM7zZQkRLONebRys---awUFp7chGySijp-0y98M8eq0mcUVJyBihPqAogEq0oS8C9wsDjOWrBAbJbN9VW_FTHequi2Cod1NSQhaZ9ELRNyUVsDkv8diHF9EV3qlGiKVGdMGfu4YkRo2lyzd6BeScW97UIzylXle1-Rfp7_AUxxc9RjARCgmwZNz5-ysiI-KnPIEo4Xiz8Yr_hZxHn8py6VPT4XiTQRqh7tfl1fztOsxWfXnVlXMIyU0budVLEiaRUl0l7tApuLdzwQJ2FSICBjIwCfMvQpxtDLrdJfd7Bx2ChCPL7NDq8FQ0aASoif4lWZnydCAzedCocE-Wbi9-9nRgJCEiiiAT0dKGrqBBmNL7VU4Nx0y0Wsxv0AtGAMv-ghcqIub-zMGpjL-ZN0ANuZX-gElNKvL5_zCMFOMLEXV6T8MOBKB3DagLkA42L4OmMwINSu4jFQ-JV5C1AuWbQ0rut0uVuF_=s${DESCTOP_IMAGE_SIZE}`,

  `https://lh3.googleusercontent.com/LTzp2ESH8oZXLbPqPs009m59_hbSEnfAFOwB1IKPFLhZtNtJxsEf6fD6ZVv7_c3dJBYL0zs8DtnHNc-du7BVRH4DpJf9c6dH31UZsx__pvKIIJ5g6t3oyoJUjBRXON7ckVLtWwJRbgM8Y149MGCTiAth-QIt6Pjx-nj3YctkQsRoKeBNq3qT4miU7Q3x3JKejeCJxwkXpT-Tbmi-GOtO4Cz-zrIN-L5hxZy-pQj0iV0Ls0yya0nuDjh-8JmSvjNFAhi8aiVo1tdBezvCY-4gs2sWE-2LdUb-v1LJlVHAxcmneVcCMYvFMr7Dgj_cdX9ZH1MSZjJnX1AIKjPl4SiR2u9lEm97L8AlGEgL-8NtVx1tHrTwvxef3EEEnJjY5dlFTIeJkNOabhUr8WnYULN7mntt-ntYfC41UJ9qGSKZOaUftbn7M-TRjg-7b8HKcKVeYF7Ge4cAkFYCdE3NVklq9jZKSrzyngN2nLV1B6OBB6uVguor-ThJvFd_yjiHiScF1b2N8-hL25uxUGOwqohMdwhZb72n8TGAuSUGJQf6lfS5csNJoJDLXb9tzkuZ6XuE3Kz46YcmEVg8Vteh15TI9vITQOTTHp6Rrj3p_uRlGsRtgU-CU5CdQLT9wK_J6pB_iXcpJ9IWStizOYcUh1fYDe_nGrhuOzGTT8T6Kwf-p7ztVPNE38G9cbt7Oil5TniaPHPLmmmavDwgOxQwWFesAy8nmpWsBPfaVBvcckM6PSp3dIEI=s${DESCTOP_IMAGE_SIZE}`,

  `https://lh3.googleusercontent.com/8ACQc8UBlb31qBVI1G-P_IDH1x_O5GzAhl_AuXUofPbEYC3MrlY0k_g6PaC1klZYw_alDTG4xXHoDWC1N0m6JrxDM6L_tjGnga_DwLc49GvS_GKjeoCnP7FTt0dtlXoP9WxzyHJAuMeun5PmvHmj9-4rbqnTRX2fnEZv_kB-SDJNDQx1vcoRftCCWl3zir9iZ3YzUHmxHzeXSzb-5jDXYANQ9CF5rLrenzmiSxIz1EjXML0y5RTPXFlsQqcBjUIM-eKcXd1sjjZmwM7-d5gyBkqSJOjF5VLaLzLl_DMvJfl08rc61HJFOYSRH2zcBp28AaWUT9bXygPVy08I4yKLDCbsILXQ-CB3-FIWphwJc3USRjnxERCpAoch_VUf2hoPjhbnZSNrR7VxDX7Sv79JB5nGYW3wiZ7gYTs4Nl5j5kmypZVyg0bJyxQUc9FyPYbP8feTRXoT87HU2b7ZhfiJaMfrJuD37IHzVwC8HllU5G56HRyIeUzpWwG1c03tycYxA70-S7N4cIykEzYONP15TRSxS4rrMbtbcIh1AK_-PREdHAlk5Pa-n2Msbav7vkEshFoDXP0YNRrNwbITQqYtUxwGA428am-Oq2i7A1nGmLys8Kw9D3baDlDiLx2GKBU2c31x3wyKc4Zy-JOcN8Lds5iAq6bw3df_w6RpDql2xS-u_Q0qEzMr9MFNSrXhW2jO6fSFoPCt3yhSj65-tpNjHKObhhrjAaGErlxzVqr-zkLEbfil=s${DESCTOP_IMAGE_SIZE}`,

  `https://lh3.googleusercontent.com/i3lx6F4DQMKS74sa_Rr6iWmy8pO0hpS16-PoSZLsCZ_PAjHyTev5ORFBRUj-f-2ojzstcD5H8_dwSOF7wPbR3b4WiQaIcDZtonTgjAmQe25ZhrRjpSWtYZDaxmkY-wfwK43_s618_u5FSbrrr2NKXXnmCR2Tzo2Krj_TYVCFV76ITsuNAGVbxswXD9lHbXCkWhASgiQ8au1RUO9lBdQAZfemhLfVWGfyBosiCgOMc0sxUhwKtrlk-RwOgiGDzV4Q0GoyVYWN2gcTA2gUFmYU11ZN1o72KHakJI_hcI96cLP9yot3UZ3_EX7mq_0nPeWAbWjt2glc74W-IckvpoAnsteNIb0CzxBbsecRSfhX3uxbMTQR1P_2a_4NreTGeAZBiG7OYnJkjM7p8XMhVZSdvchuC-O_cv-U_b4yqAFFS8Ufd2CcVKB4U0o7rmeQtUXpL5P1DlVpdnPZgTdBX57cnOR6RGdvcS4TVt__RICxfHDImIgKqW3kbrsdv8O4X0IIyMXprOHqLwW-fr8n2rGM3A3YvflgFDhllxLEb_xG2ZwiZLM3TCjSHXxEQNWMvPJ9LqP8Tvb1otCuD0xYLRWkBXXrdttQc_lwnPxtziJK9fiyAUlPWBsbl22ZqKHpin-Iilyzi1ntjfnhzhjp0itpXVSxcfKExKwxu8bvKTNVltZNG82-6X3fQolX8Xw5WRArjZYtG0H8pCQaR2tc3ML7gpd2vcfvh8GdBkm6vYGiZo-6dKY5=s${DESCTOP_IMAGE_SIZE}`,

  `https://lh3.googleusercontent.com/jMcA1mrmGMYxSx2VPftC6eRaFfx6GpTx8J83Rh4rhCPD3npLy9aEJKvko5Luv0v1zYiVEHSOVnvSQKUc4RqxomPW3WYWY_lYw30Rbou1IU0ZmDmQg6znK8LVgxRnuUFFMHjx3M1bLyd265tXtL2hfGiB21wi5uMv-tFQDtyrJ649tenW1iefinQmWECk3wU6UtQFFpwCtIhOKNZQgd4TOnaRxQj5mvPfebZBGpydzMEibUZ2b4mLVPkEbv_vK9SF4g1ytZFfM7kQrWHIv-VDtJpiT68wns_vIl7dFyGyNNA8JKUfoO47fl8ETw-_hbAS9CyleadgkWIM9QeV2_M0WJfgKCopEJxbPejXYsEpbTErfNIHby3pphGb6wmTyl9DH_VaUweeH8lcgLODHXvzWlZuEqRM88DNy_XTW-cICryfJih6iuFP0iRQFt8OtGS7DZAj3gt-zHf5LhUqZYLRU0XqFuXDWjLvaO4T3Bx9rAEQM8nkzSxJ_LbsrbBBRX1uJF_zdz8AUJgKmxl386cSucuvpjKLWf4v_ybYVHj1AedFbDHq_XZSQDw1kj1Ac9eLEo4Ufe9l1T61hPpbgIINfNebrUIsKupVLyeFB7-wX8Td2ujEAk_pIrPN0xBHw8x0w27KevxzCzyn4w3G_albpZp6XVKDNF1hA2KHzNfiyBODRvIX4B81F1EUdrgftjvevPGw1Zl1xXq6xVyJzw8S3iRy9zHIIIQGk6QNlat8METvypT2=s${DESCTOP_IMAGE_SIZE}`,

  `https://lh3.googleusercontent.com/ChdHFQYaMw5xbKl4-kt08QtoMs97V_HUNhvuGH9k52ad5VJvBrBxeYW9NPkVRz0_Z3E09_ed90VVXmIvyZtbvx398XdrGE90PQXZ0pfi1sM8vCvNdVwCwL7atV2zWU4KbiMEL-QgPOPxm6tiCRo74mJcj91WYIUXHP8E7PW4AzxkxH0xJPJFfoT5wfgdgFvsQCbRo1Ozch4tyE0wLWXI0Vq9K8b7icmDQcQ0Cu-vJSe4up4jq9Xw8FQsOhhY13JZRsF9aU0ZyoQghLACinoApDQxXDglEKJ0VR1rrQKLzvavfKPUtWV4VpBGX3O7ULsHDr7RTU5XM-qUZlVrzK4Hen7ohsoLPhgQUi2meCJiRvtqcIdaa_W44kPx6Q6LsMJ7gPQDOKkrWNQoTOxehICREH_mbKQeEef8-7Dr82HyZCiHfkd88C57kKasdwUTfmLGLRJzeByyzDscDtEZRk8pbXpzYe4_doTpny8l1aQsgu5Hq7qZ6uOZbc8latRbJTj9aSbPgZOprYXGERimF23Vr6zV5jOBO5bnMMvk6aUQoSyIvYzTI8cU9yi1Fl0UeJNLx1mjJP2j0ti4TWIYJqiTIg_AVVz_vXm_0pHGPw4ygfdFJByFwQazf7KVptWUq7Q69hb9JqnOwkEpXCAUkdA09QL52bvtY7wxRB7fqVCTUeKZSkGOW0Bs6rnUFzDNjzpy_Yz8rB8C5_27BoI30iZWfkoGOwdHH1bh_kymzA7IWAdE2UIy=s${DESCTOP_IMAGE_SIZE}`,

  `https://lh3.googleusercontent.com/RA0wlwSR91Nsg53IneWVkruWS_rE2uA_pSHtXOHxHgK_6epfXkK0FIcCx0us-_hLj2dlpNItTHVaMsU99r1cG6pe9BfnCntw9MJWEOqC2ZBxBpIPYh9plbnGrDCiuTjQ5NMlxGa0LXOu-BxorLai6JDJXrI4jxUmm3khUbHomBvaaPnoUn9KcU5Zxu14ifiV4J7cKQgzoIltqCjlvvy_DV9yfCcGGppmFY5TkU9n_WNGiwFcGzxpSxj_uhTfukpZljiYYJt9G9wxAsiKEKAl43o791X4hjunnmFoU5oscwEWobgqB1b-6YsKuBAJBWf6osYJlMiIdN8K3uvlwSrcGvU4kbLEf8A41hFRuTy6Xq0bHx2QFsrqOHVX-EQOzwAYNAJudTWM8s1_9ITRRkU-tvQc81WSmu9y9P5XpNW39HiBUCQ4VE2RssVePFdERRBiVkb3etCXVPHLIO2dH8o2ZhKRYnwGQX142_3_KvR6sKWXR_BVh0rUduz4t6dLafHvfgtSC91q0NakX-rx6-6q_zo5FfdIWvpUbwCb7YVe6nLWUcWU42n2nmYmjzsg3rzcwlit1l80jqgm_38WJ-MazZv2OZM8YWhr0mpETDsknj11zgR0Y954fc5BBSSBdiUA8Xq0uvMbHRvwOUoddgHmE6M8n_IoAEy35bVN9Vprng7cJr1Lc1QFhpU=s${DESCTOP_IMAGE_SIZE}`,

  `https://lh3.googleusercontent.com/1emT5YQ1DOjbeuTPGpIEzjOnr8ZUXl3tYzdxgwjd4Ds37DU6Z8nIViSAyQVxXEW_5CC33PP_r6DgUGPFn6rmUqOixEz6dBq9QB_0IL5loloo1FZveQ_yJcAQ1qaicog22XM_aheuS0QVeq60qSCPEvBUZyJzcHthrMHG9azrkECwAlPut1-Q4yweTcvYciUAfTtIcXuq6__MUO9jOsbyb34tb4a9gB8HFhHASyDzVflKTjjAr6k4Gi9kfbt49vkAIoyF44xok_-6JTMfuL9ggHGwBLHlsrCjEhLu0pLwhrPnxbcMC3T986_AqZS_u_xxtTtsid23stx-95-PiSgyU3uPYhyZ_bk4jJo7s0Tk8w18tHCPaopDDumEZcS2ECbl6xozjJ2Cicu8865JKWMueL2AWBkGMLwJC2FJw_xNxSxCuvLQIOoehGbhBCdxrax4cGk9JUYYNNw8opvcFtS_m2mEQnxtyFInUHzZRAOhmGW39hh9Zwcc9djJhvOfSUGFFNgST4Y1h-Jd1HgRGZ7LQoouu-HqixaLPVCHNVhic-bJFeTWb9n1uImcSz26MaGYpV1EBzPS8M9apaU_En5gsug6EdImDBVppGiovymHVhsrZ45CYIoovyY0ygMf7QT0VRoVCX7VAU2f31KyEAR7FJT32RruNjLfASgqi4x4H2rCJdFRQjZVvM8=s${DESCTOP_IMAGE_SIZE}`,
]
