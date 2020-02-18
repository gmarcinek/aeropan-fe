import { MOBILE_IMAGE_SIZE, DESCTOP_IMAGE_SIZE } from '../app'
import { template } from 'lodash'

export const getImagesMobile = () => {
  return AERIAL_PHOTOGRAPHY_PAGE_MOBILE_IMAGES.map((url) => {
    return template(url)({ size: `s${MOBILE_IMAGE_SIZE}` })
  })
}

export const getImagesDesctop = () => {
  return AERIAL_PHOTOGRAPHY_PAGE_DESCTOP_IMAGES.map((url) => {
    return template(url)({ size: `s${DESCTOP_IMAGE_SIZE}`  })
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
  `https://lh3.googleusercontent.com/Rzz08WDyD-6pH7c58G2we-znK4HZrsv7DxcgkFnjbV-PuIbzvwelwmvutlX2_n2VALpm-10Sqj8Z7h91Ho9NsmA3kKiFOojU_xoAF-3AfhGDvbHuwa871z3oKy9ySlaDV9smKa53wTY2KA5qUXpAHWMHvyQEly1RNt_v0X-9u9YECyswcdt5FD5JoH6C3NXvNhRpNgqR7G_DoQfb6-mb2PXihp3XKRgOlJlJMifxHsBwIz3_a9jqA_gIEVHUxgVMDBCvyWFj_YG1-4Eu-5m7ClvQZ7411bbWeXQmnznf3wHjWWnnUCR6fccxuv5OVVyedXmT8ipApgP-RnM6Y5SKTinHZORKDb_Dl-O6yKhNFCHld11HuNCyJQsiqy3PwA4inCAwKHhsri_EHV7qUn5u8GIKVhOHeG36j671EFJ12-oW5SabynO28DmkJ28bQJRjDekRWlCXqTm98voBBULplg9z36H9SC_bVIIY8hFkAj7rjlYHUlcHNL8BbmmsxHK9v_CjSmTtBnvxGu5gDQyvnHSFW1m2NQqwaOfLOu0hM-M70Jys54PuCdMN6_UDvVUtLiKih6KhQnrE8JsK1QztDZRtS3G4xUYIB4ezenCPROkR7waPMF9M76RL0jpmCt6JgIWPeHSwMTT-bJuOfTSdmoRK2x9QlsVymj-W5nPc5NWch3ank4yUwKygeCbRdvmXrIiBb7irdaNv23R5J77JLhTSp4QnxIosWH3m2P0H1eKtY9EC=<%= size %>`,

  `https://lh3.googleusercontent.com/IYwClatsPD6NlPHKmM7PflL2IuuJwgiXhnpQqg1r9zrDt-PRfGYbLDnPJsDWhWqSCE-uCvUmOJZBryPt6z1klc1IpXNBhoy90D1VWHwj6LJNAkBo0q8IqZCwAOkb3nbUdXK7iaCemROERvH9D6JDoag3OobrXUZUdaZjI3VMTYwi-NpK6Dm-IxWAmCdKn2dUJ8g8CdFR5kFj3SWyzJ2A9KB_KuxOIiVY_NvgMENUh1gvsbTgbPDUUCf2N4KjdZqQL6TR0Okp_sk5fv_E7NC2G2XXg4MyQR-ClR24xgfsK5IX6Kh8wtkiQwTbaekfVSsj9nfN1f16dcRzQf9oic4XA34C8F7TzcBHx2OQQsrhHSIEkb6LociPuZGacBoVkYryj2I1aW1U5rDiLXZbpc7FggLB778V6a1ccHnlwspgRuGmo9xMBTUxoD3u0HEoAqIYC7eMV0me8rUJBhHgloGkRiijNU3yHbMawGY0RqamU07zoCjHgC4XIF53J_i4y7YUqStIxFcjsHnGCFVtESLX64nrJAn-iNuZ_Q3JOOgsOXexus_VyE5tHN6RrtqH0M4Xc8ah1CP6ilYNM8r5Z8q2uZYgmCQEnzW9KQgva_P8VnhwvO3MjvUOarukictn1qvkgaB7CTt4Y4m_bz6JUwpCdS-QILB3t7ks1djkCOA5ZhPlZmOOGr-yCgDBaxCkKDXC0Tg8y4XyHn33CvUEu-4-F3FTLjJDjFbq2_gN4lgsKZnbZJfw=<%= size %>`,

  `https://lh3.googleusercontent.com/3iBO_W2LHzjm1xaWN9WjviesU-4TPVvCz0G9Jndr-ChR1UfK3aC-bIEHHSR3g2gvTgASns0wwIBppjc6LMsu1zdQw7NLUzqXU2OE9d3CWUEZ_qWOOSRKE8-HcRyIvs7hJZZGbM6PcXuaRhNn58UbetXr-9C_CXAbNsb7O0wQjvArQrUKywNaZxFllTmhGV1SFF6PJ3BUpshRxhy5YWYy6EI2Nc69b8XBJoav3xuLFSNHBvPzemx_J5KnOV9Ynx9kumQmmdM021vNUFJymXHCgRUJmpizpXmiZBqLZ4qqko9c4nK1uybkI9eww0Ena9Tv773IujHzeIzkq_-PYZDnmDFIWqs8n60CjoRRLfzKE-lc5id660GBMl-nq8vqEbQj35U-95DTmjfd1mzy-93-_QvsCZbKQ8BIthNcxGlU7J7vzxMOx26arWYRc3Uv7k5ygRBfi2U2uuIut72M-26ST9eHE6Yn8bjrB5LLJAnN_ZRH97yVcKy5Caq2Wpm6rGx4xJQaw8nJUkQNUkyjeUnnWDz0oxadjxBQml26_jmC4ToRzOnAE17YxtIV8wFrXmSsKqgj76xPQ6pExhxshfDIJM8cPxMQSN4wsM9qyaxXAX3mL9VjMdBTRO2o0EmlONZk57-NdiuhrPR4mtJVxFrs_ykLqn3mF6EiFtu86aw5xYb1lS4dOg-9qy3zvDmm4lfPE65dQHPteQxDdbCSovD7nyLN7ENca4RgGMEpN-ch_f3pQGyS=<%= size %>`,

  `https://lh3.googleusercontent.com/jOjMuOjIAe4UP0sgKlddL11STxs2bg_2cjPj7CfRPDD5EO6fp6IbTJvHAJtVH6LJHwc88Xphnn_7n_Kjxnepj75Ie-sPE13isaESaphb2Z0L7ZBffLWKmxlxhDpKtAUMfHXJc7xCAxw4HOMDRoVW1Q4l-S0ixhknR_yMTpwW_vC0C4DpQvenOYM_5kmENjD8UMANOCT8Q-s0wfFw_aW0LaQudvuJoHh3aFZfd9x1nsQOjjeLX1xHHB-WxRlDjvwkTyBobBF1RW9I9yXkQNwnDdVuXHP4SAB9ei7XMjRJQ3F_2Ytnz55-kDXv09NeXG3MrFBaLMHSMVAXn2ByX1HvlZcuia0-ierak76A7rKkP7rglMyiWo6oAuRCTamhDnrl3nuru1PWcxNM7v_1d7sKCTqpzgZgxpOHUIp_cmKMjc_staVMVqvl7KW82NcsewL31OaoU01H6E2y5QEiPn7-nGI7mNDKw66yk-aL4kNvBFo2pIj7vjbWxsMnCcjDEgEkDmS7Ug7aXcZj9ntByRnJX491MA9Snv7kM5vGbw5DKHOO_bKpQ76BbK-C9EBtBWRwBHYF1tpMCs6XxbDs9Z_p8d-jM3MOZwg3Vwb4BwrWkyl3kNtREgjxyrrHl-2KtXRaSVhvmzpQIq4ei8o83ZchcnyWdtC13BU5vNmquhBtJL2X93LLAvihrtbiBOiFj9z4ABlzBV-0bgxGZ3U0Vqxxns0v2nj3HFOFumZV4hJQ_xSYyxJR=<%= size %>`,

  `https://lh3.googleusercontent.com/3C1tEgMp0Zp6f5hpeo27fwX4ARIigSn55zAMlVaVWPivBQRI9YIq4K7rWnhQPwpLZyDO7KMbxWzj32DribtxFlo740_GYCNem7n9TrZMoi9gNMYJjOl0sDj_e3agQrjBi-vleFYk5PUTDmMsa6SjPWpq2iGk2SUEk53VRsDiwD4gkNIvaaI6lI6vLmBwzYhykk36gva3ezIY7BV1b_cHwIDZpX8GJ8lt9rdtY1Tyb83TqwuM0CW1nIlP6srCZgKL_syGmXPGcACSz8V6Jd-0lCGIztNadPstQI5a_s9OSxu69v0t3x2j1vfrc1qAY7JWPCIJTOJrboVhxkvoMvqgwXYzd_cG203wJCbmzksnhnqhQSaRA3omc0vf51h-rp6ATag7JKhRVKZ5EL9VD38H3CHUrNpAT46lC_zRddHUOU8IU_uGUxq_XR9r7PBvOZ3uXvkSPLWS0OJbgfeYuENJo2keJ8eTJTsDrpIqGUrqq6pfBKborvuqb2DGDSdfCM9KmQuwAhN6fewTbKwc96P2gftsXbaPfuF19wb9g604CcRjR5mZZfcnX4Mncv7RYq-Zu4p_o_a8bp23T3QR-RsSFTO3k4gJtzRPvpErL_kbJ69H43G-ei4vdJhsQZ01q1TffYNvjp9746LtvtZ-0w-hSxPWqRyfMOrdglx0jSpMnTs5YknuVZYK0Za3S18RJP9sJvwkDwlJ5jPbuAJeU4JaGifxE9egcJT7g8rH2ssWAfEECUXc=<%= size %>`,

  `https://lh3.googleusercontent.com/2vZfYXZyQr5qG6OgSOXMt-9l6ffp2QVu6qyXES4NsA56je8uo1IijQgkeEDNSDxwW5PMvgyGH1rEANiutsyd4LI3h-wsjU5U40fVYqDyx7PjrP80uWuq2DSvNLQZ2XUVDMjPJNqx0V9j3cNjIop3b91_Kj218KK9tSubrxKxbjxT2p1DYu-5zCeQfdtFwPdNWCyo1XUoxL8kVMKXhsEQamG45wdh74WnG_HCI4ajI65KyIuICojJ3PtONHzlC0js31GX8JvFxOEnkbLjN11pHS2Ody9e8OPq2WBcvaqPdcnEXNiIMzVJFZNe6I3e1L3D8ixjMdsdxfSJikYed_hVfHUObGdplTHRt5gVDsX-zQuQEdAn4enjS3UjLzP0UOxZWBL1SROm8oJxz4uRrEtRZus4whHHe61Y_eao_bi9rXbh1MCPhXfMN9PT7eBmx9I2d6tyX3h1c16kPEz9xZ2PUan9kUxJkLxkrnOWOIfX6nQjgaojoh-O604PxPNQxFxgPSHmgfuYLu-TlU-y5fkGwY6f7fiVdGY1fgcGedB4ET0wijBBLu_GGCN8wdrmxG5Z9hRUNHHEwuDRv6PULcDUxIc5UrD9A5Z5aXKrIh6w7cxaZKdQ4_aqkeSDpWDbG7mnCeDIYpAju-APd9sHQEHjuR9Kondw12G_9UtPpoeUcKBd8yLi2WoonT1q8rVZFSPdADj21_jM-8bO0CT-lhHIb8_O0sV5L7QNHgCWYqg_Xfz0swPg=<%= size %>`,
]
export const AERIAL_PHOTOGRAPHY_PAGE_DESCTOP_IMAGES = [
  `https://lh3.googleusercontent.com/ByxTBdDHBmi2s2WNMeyJlKXgsFLrj5HaVoW4ss0tPHdfxWxC7VXpwmP9h95CLz6wtJlHzUFwEgRQcGsBDn6KRZ6dGY214IhniGaWTjuDe4Z8rgbAms-KskhHzA0UrI2p89OnJ8gvzvLtCwXUjKD47LPmGE7NWTg-CmRmHlzCgoAhD5zXF02hac3pVA3lHxEjbh42T1FNhFu_iRzsOiWvdxrqJBJ_gUms8wVDjmB9MXLEt2JXn5iiac33DL0PUuAtoJ1SOMzv77cFdE3IwtU-OsRS1TS4T6FtvXyI_c9GirXI3hLyEda1P6ykcWIqjbXuMGErmpHA9V7l4VT2De4eoZl5tNfkwfEsMrp9pgEtCBpAK5UPL_wHYDycsbZmbCVEy1s9t2NuC5EyTgsv_bH3e5zYhX6-ZCg2raRbJTMVkhHdlh6duKHvtKr_ClrKJ8jM7ptbkZjWXKL-A2k-5v0DJCRRFUfK7FxxO2FgePc7pfkRLWhl5M0ciHIklR180mHy4U0GRR2Nq-vZxcY1qOHn2FYkqJJ1pUrM-unJviQ4WzQTjndW5blmcirj2jrnTsuhthH_cem0bzH45s2rSG7yFxKanqs5afCxmHQDO7HUmJy4WCVv8OMo_wnuRZkCTT9292W849sW-HSGu82vA_M4SmiJx7R8tWfPIg9sR83Tr-yC0fVlmqWeLaLMCnWpptknxTD8gKnme4SDc2wx2XHpTqVvVqbGFIUyhCv-nqVdDU8f_2mU=<%= size %>`,

  `https://lh3.googleusercontent.com/__sPcC4IXUvsNfsfiRvCzSAEBSST4H-VoJ1-G-b9yrRuxLGi5Hu38QM-toRT1n8uQUVXjGkgXL7hJ3Ac2kgZDvmZlyi3-f-kBLfJCHFgLl2MTYfMcTr4obHUbNvvPjZS09LYZvCHQ4vdPLEIkT694-0QKGe_5vN6jbfb6ahOU5xR7wyzmRCChQ5ECenSyu7N1Ue8W-JiAa3BOScs-uBdh-gyTiS0puBaJD0Synl3AC5vVCbjSJASfsFna6EMgC0Edpub4XV38OPWzEcEQ6CvK9kOmK6XG3aw-sfOqn7hDXhgesH5psDrcAl0Zj5IZdF3E_zIukMVzug_JJtZW2gGNpIRQjRpngk-GX6IoGbPgWdTH5MiYjlhV0lx0jFi0_52LwLDSkfkgedRp7sjlgv0EKPCGg5cZPG7naAYhwK-lOsz1sLw6OixzcSBrVHj4p_o7dNIHDB7uZvf-VILXcZOmLdjQ2Q0Tix4Eckzy0gl-HDINLhoQ-Wkt4CKH9wmj24HjWEjYuu3z7mFCdVXUZHfvzLT-T_9KQ1GIa-QrnhwLfS50hGddTcSIIgncgzQtFxfupMDGgDixMTSUjS21JszJMpUHpOFL4WzQQU5pPTzePxDiv6NxbxMA-XFnt41yWxJdDjV9Ea_fwkJCLwj3cbiqkEQ9ZyPl3Bemwv_0Tuzbuw1nqRu2rvIwbkQW5WQ6xyzhpYLlmhluUA4ciBOG-iGjEs7Gei4--_9FqmMHJj3h0M6nzbB=<%= size %>`,

  `https://lh3.googleusercontent.com/1BmfVvv7PaQRVconfIOJR2HKLQhAeIElLrzYKEaxw6CKFZbnY3y9TacejOgU3ix0aC8KPAg_LX8OUqATqtAeczlhYJtyKvmiGw2wdN8ssonEfQg9GwruhbRddCW_ED7EVk18CyPGtBG4mczD7gs5dH0RsuvR45wMIy5C9jAY6MuUQShsUneIEBvFY__LPCnpTxjpIEnatd4XSm-WEJFwrvi4asOGAwGfM9S37aOh_-0NmGXuZQk3gZk389wo826qR7WVQ940XaNT2Je8g8cqrQSFPlJVcmiylOpxCnT7hyMdWaU4yaR1HRpB7kzEcbod0xT97VTDDY4lZHtBXMndtFW4a8_Uvv0uqX05qWMUPiJhD74GD2pYT3ZJXX_ur7fcRPsFchlKC1Gb2clbYGp8B02hF9qjkHEVZ9O_FM4z9swAxAhTODm5N7IBF74FRUvgUAkrlNOfVe8-IsJ2eYXe94yWlhJDlMdIIde-N41SBfIYcjqpFV_9BjEdBpCacJTempvQ3_NWvCdedOkW1MZzon6IulneSX_Gfm7HGjA6-Tp_wuYIMeid3ODIAQgczmT8e9IJsplY7y6rVstf5G7fc70DFTsMHKFEAHH-c9RCAdP80hsKxAM0XpVAMTL7cQRhtW94pZL70tgiQ27HJ_5dKakbifmarOz-nftDtz0u7vdvAc4DArrwPdhpIXUw5Mxfj1z2d-fN_n4YAs0FvOpGgnHifqYa3wSxQi1QOgdca0w-N915=<%= size %>`,

  `https://lh3.googleusercontent.com/RWstXI9jptvY7zpekX2vc7EIh9K4YZ4k5I6jyaaspGTB6yLmbMiBhtVhvNKUWxWx2HN2ueXfKsGvt48f2oFxvBfORAb7uyN9uN4MaLiJAJyXQep9AK7K5wmucDx9q53a0ixJFhNgSKEgUM7OR1CzK6Q1gKiOPN2wRcaEwkkgXeBgYr1Mft8hkDn4de9zicelNxtcaV2p4heu8d2QKyIA1tN_QuLxpaAM_i6JXMXQov_qATEPnf-O0_3q_WoABWPTQ9u6OXUGOwqMdVEplzN0ZqCezTQyaVVuQR8rHwqZ_GwDfDTcdur6_9LNF6zap3bsbohh5W6iR6jQtgId_U_oIOvJR04N9sxQZHX4mVNtjagVznesnUPwmLew_0Tl_ufi37CURe50lGLN4VNdTGk3OjOIIqJ3MKq18mftzUnKw2srpFSUZDqRt-4JobrE4mgrAk1-gGZIpFc1qczi869O8WI1eyPsjfBVNNKM4U8jKxTgDm-myGz07UZdTIV4j82Lpk5FuApj2WWo67xkWw19yEBur6p-hrncz0y1fJrp4jG2Rp_xVhEgzGHPbbKDJWqgLIlg-D0syvrdYIgDiMzXi7usdFfmHUbJGWI2Rw1cpezpCxPvvdp-qOXWppR98ubrxuLHh7vz5Vv-39LPku_GepdcQz9gZd1SH3CIZRm-JbA-gIUztDxmw-pw7YPqo7CnDjsNFxwj1nigAf159xLSPu-3fU8pHlrLqzoBnLEJDzhvUsna=<%= size %>`,

  `https://lh3.googleusercontent.com/-Grdm_ku53CKCbTpX3E8sDFjgfvbcapRxnlnSVYN4mwrkJfgpNsOnrDJc0VWVJCcZ5gQdIvu3Pn-HV4iESbNvorhpN_ZoXnuwS9WP3inKFDOAFaAYjP-l_qJN62ouBqZDZ-QkSekDESS6w11txNclgJqx_cEt7da_hvNZTKkNEGEUjnwvqz3iAWXsVPc_rLBfGxupWcE9JQs0DqlwvyTMOpj1aRd17l3h-2Hi1uWQprwsmdwDQPmo72LnDebKdRkwxirhUMcdaz4tYK2wo44Yy3YCNfCw7ca2RF18OudgYfqHDNHnuvMw9PgOiZ92_Z6IMkbQws1tKt_rqdsGk3VfngmcK8wjsLhkyqqO2Xwix5rPmgjEOLTBX4SXp9RmCsDm_lprhss2Q6AgHkv0zGz59QHKPl4xzDmf9qoWRQJh0Pu9EiCDUUkjCY7Fp-j4JfDao0_hqZEBo8USg0BNfz7fNT_gNA_8LnTFIbc9vGnFFOwT2Yaye-n6FasSDUsPU9HNyDnAL0YJup8Muyr7BQ1qgxE2_Hl7We6IITiako1qdJ4lOsDguy3yQTHwKZTxq1roDILC6lROb_WK9ACvkubUQN96F2QZpzjXznY08EZclc_wwsXjwEvYAVkzutbLd_fhDl1cDgAckrRQCbtBSzkxIYCPtBhA19i3LgE1MjzdjWHL2MW6y5MyO6nyBidCZrp6NHLVwFG1gEB63rhTSV-TyBhY-e2W881g8AzbYDIRZlqXmPE=<%= size %>`,

  `https://lh3.googleusercontent.com/yRyCD7Tyexhv4ykdVh96gB9vdl2_8z3ilf3SAzd0FvtOSIFO9zbKPbSATxFhaxDPu0zCelnZpX1l-Q6thHB_uUCGHxxnYtl6ygJ_pBxHuti-FHmPjt_stGlovBelEV7dRNNDz9QklyjruFg9oTNQfmFTssq0na4WSMTIKqaqTG6pcI9gJL_OM4gmRNE99_WKTRxG4bBFpeJPRfCbEVq1rvhE5JxJFrLxQzxgzx5dAy70V1b8EE_Hf-D5kkSa1h56zBq_Ciso9TE6c3Z6M0_EjDOwKjof6Cb1Oex8mnwwUBwAM1seRQnSOS66Ft8abHMVFGzqdBp3gg63N7l5_CT57gcLiyfBIVLDmrEBt8rHrUdIYbqTqFY1m9yRMNyNP_zdhrmrUESLdimDWYPQ2e59dUe50v2d3kpP1HqIttWEycZC6G2MrM5iWsUzdoW3yX96j0KLBPI71jRcSEgu7Y7RVlkUkO4OZM9eFFQ7xTXOREPFD1kyM26S6AKHEMbdU9NOPfAX9ORByg7L5Fy7txD0cbwHnBVhIOsFTlsgxRL6FuSntVoHUXIuTvAixDAtRXptootsyPzAUAJzZS5HVCuhNcXl8bUMbA5y80Uab2Gy6YoaxPHWLQbwU0igKt2aO4t-lMs0D0YO2TQvbQlthsPwjY_TwVgSyLctFEaym9Lq61irlX2B_wyMOF5fEfGUT21Sqi2jTZkYgyxQtzRtMvVuYFAutH1JujBMCiMQZpCjVEtoCiHJ=<%= size %>`,

  `https://lh3.googleusercontent.com/l32A9f_ypVogUaF-kQHEC7fQgfCsUhSyv7Q3EDiesM1ER21zhUw9uwN794_ZmHvrJh-x-Jza1sbwzarW0rCGXvTeyHA_lXDsKs35sqcx8ghhw8Pbk64BrgdCjZWCZ8VrpCUVnH0Iqh5hd8l1SsW6qTCb70w9OHHkGZNL6Z0k5RFuG7upPGpRtF1gSDUtrlLgjG0Q_IJXSvyOPgTekXSYfgqsA6RMgv0H24l4c6ppbhs-bn7cnb-ACrkdTID0c93xUKIV-uGMjjjLnUMWP2KdatzswZm02j67JWdL80kbHrwg4vFG_YANJukh8fH8qP2i_CMEZb2bGv0DNgkyJ47E2WxB8UjodWItSl7D5iG_vw5DlR3q8h_mD7PvBB4hEOw5qJ1LGl12amHC8wLs7e7xYfDWtxWrLfLw83UTzhtDxxkCHfVSzoOcK-1IkV68vjaXxN9N4ELYFd69_Bz34xINs64DAo9A1PKo2KaM3NSOSiyhec2L3gqQT3aSl165nPAQ0FDOsua8PggI6XkNKgy6_ETxxQTeumJIlG26EdNUzC2q0Y5mgLl4AptiZccqC19a4RrayDfHVoA0szU102cpFKzDkeyVK2J_cqVjYjyl6YAGgC8cbYDQ5gaH0I-87auFT0VgByC-xh2ZRwh9jaQgGAB-uZG8DOdpdp2RDFtWs69ZOu6NZiLJOZlhsGNGuocXCHvZFtj4jNleUKegNyt8gG1ybroFyl-Vrh2s7ETV5drAzwDC=<%= size %>`,

  `https://lh3.googleusercontent.com/xOYHEg08wcxtORqcBaeb9PtLpn_1nXDJtRPq30J_l7hi2m1QcjHN9ITo1nu92vSvqaDf0FsnJT68u9iJ-V3kQ7i_Zy00LwytjwpkulZ0XJ82n1KENxPhi8DmexWUVzHPkVTqDHsCQVkuXoxNO0C820nAVfCjtIxoz3biEWBTO46iAepyFLNfy2Dd8yeXDQe3rRQclt_9z5XXwE1Mdz8kCU1ovywy3CJwB98EMHfQndnUEq-XmCiizUMXRfNVj9KqU37lAdIzsVdYlfFJKACAjmi1w_Lj6_h2CPX7Mf4rA5XDGz_r48Z_HiZmDAb0cTZ7MRFppBLZY_OVljPB19bpmi0u3fXN8GjbkaBp8XJJ6NIz0DCCI1JnCU9cnkSwKNEgwZLegWfyVcOKbfiVWvb6vAu5RTzuYwnDd9NCM6moZbktfYjp6rdO-Cks3M2SYWgds57KkzKIIta-5874owQh9KzJnDmg3psPB2yWvL13hJ8_4m8yGHHzwqomJcuAxiUJnWEGpnHc9laPPzzrvJBCHRFAS5bY-sdLE6cs7KUoK5EyVRg3ujLUMchUGxzdDEp4bbjLFRpBKz7nFhB4-m7RXKjtZVf1NqBUAjNxpnuOe2q-3iHTiCCb8OI_wjgcKoVvpOH5tLA5lZ1aAd3BAfkQ3ulM5PBDscN40J0-yrbyi7kK0oyPDCV0ivX-9exKoL8Us06JLbBoQgpuxGtcY42i6jzUfrY5tt1fakh1PJKOv7CmXFGH=<%= size %>`,

  `https://lh3.googleusercontent.com/LSyFsEPuaaEPa6ZdVQfB4DXCtSB6_amxTwSwPWPkBnCHWkoKth6l3gC_N_-oluWyhQ0Ym0g8BahhcCPO4eduRVqXeWaS_j_jaU-bR-rDeqSt54rgWG7a07b1D73bF2fHrR4y_RF0qPXbwT8qjpSQBNwwvJwUnC8ia2tEYuS0SYc9WPxXKOPxTojSkcbKFMhtcU-fx3yeKZZ9jl1LUWARj7CXn19ztpjvblhzTrBtG2SdA5eOYuPaawDr--uQinAwmKHNhwTl4ml0Z_M79DSYVE34qTmxuaAcatTwDMffDRAIIxIhkkOJ_d8SYr80dxTuS90hXy7KeHHwZEyU4bLsSmB2fQ3RsRtdmb2XKR7NIi5g6H0vIfj6Uo78D1H1ddkrD5-B8PU1Rt9sEk9cS_QnkQNaZP3plRa1_FLLGkCvyVTmZVVsmVj4r30w_uQjUPCIvV2bt0MfrwyPCHDyrP4ykEct9wCRalJjacWeLuctbNrp9EkEgr1PkByGAp9V8CeCLTi3HQ9RS4iVEnDUMfhR4kqp4MzNWROGGbxb_FwhF4-kVeOp4jsieHsILY5xpebJTU2V82K86ZcyxLpphAL224l_MAE-bODL3ZvMeNGZ4NQCri4m_N-JPRH2J_YRcSsxJEEzcPwDI6mRIXyQuPSAor5nivyU0nP4Lh_sHJKuVbqCUkrF7aoGS09_ua8W78YuomOPkbP_yJ9WbvwCx6A5wkZGbjrkD7_EvFls-mT1gWIsPIKu=<%= size %>`,

  `https://lh3.googleusercontent.com/M0wLV_IOcBJY0vbO-03CTcRJeORz6UIIWjES-GkB2vZlHgh3syk2gCwhjB1B07VgRBJRPYvqzJaLeX0A02bukoeMROGIE_i09f56m53mlOMmRZy4Kg3GZqtmlL4FIL_MzwZ7VcejZzY6bMNb_va-jtIoKS4X_B6NodKH4b2qKd8CHHGl1YfkpR8CRD9o3HKwiOccsSBfKo6edYi2O_mwGAC6g6faKqyIV-vOuUAWfbjrKGDKZf0zrV1DRMPXAe8weZkFE9Rc42SZXiYmlhMrlZuewsdt7dqF4hL-wHiw3ldvrznKw3jvFDbFjy4RsC4HZSscFwqo53MyPTpzJjFW7KBWQ5ZmrmwXqlOD568FTgck3-6z8KHGnx6suhj2XKqr2s3s5fVO19QmHcPkevgZ09UDcfl7Vnn5_nE4MG68Y0mvc2jACXUA8Fc2l_Ze4FAd6wEvgIwCtc0rN38YuayZ6R14ya6FYjCoePhyC1ts1Czs0_HRSOzt5z7KEeX8iKQQozsRM_dXhdPu-UtvnYbzI-iz0WLPTSrpmopR0n47FpWktezrUULJhSeV-54smouBruBtBck-yBHEK_SQBS8G_L9-2FQsyD3brPovJ_W0_58-rkMv3E__PllRqrqbPxfHXO8G9RFHq25i3a1ooN6QDU8NIsp1M5b99maVe--fvr1kKTB1wp3-dYxA-dmgkGf5OeihlChyHF0U1jxcivsr0OS5u0IwFgWPq8lYesNKXWcUml9t=<%= size %>`,

  `https://lh3.googleusercontent.com/oZ_7cRgDYvyf-FL2x4xcCN6zIXHfZZ-KzSdmi7QIJ5JvR6Y1mekUttPmwUpe8wyT091nIzIbf6ux5sMqVNLEnlO_BA5z2NDB5xv4Tkrvf0jlYdueCW1Fo5TiLhikxqa6DunbgegK3C-VoRakckf-4_fsbvS9Bwy7gNOt8x_zqjnut9gxel4pGqEZHba3Gw0dS37dLA47Sref9W6MwuSeG3twnGk_XX5ekGjiRs4OUBtcUROQE6Ikna0qoPekh5fKSJRIJWIjYwiZGe4aATKRdqYvGqabnafLFBUHXvO_-WXxmrpWeD1LAZPg5F37iKpR4nsv4f4GDpkbGCXXa9UKCOnV9256On4JslSE1oy0bUEWYP2ZdULFpu_axvadbeitIExxYOim1frTKryIuYYsS2MsA4eInCSsyYnw_LDvPpWJObUbyZkS-nGrKOuXvbSuxjy-Dzp__JTfwkOKFF9Xq4t_cg1LG5M6e_Pv4YkJxYnPmVzYFN4CXFaN2SFkJ0hRxrI5eRxS17WuqcRVigrMXzOzxRYdTVxNNKbL4J0Vvj7ZEEqLf7Yx-KmzxgYhAR_MsTMM0LKc3Gm4hXbBg253ev0Mgi7My_8b9XypoVxi6eargSaIpjEhbZQaRPdYeOiZU_SrosGdGSEe4OV2relH4Ug4H4W84UFhFvtwLp0d9F2iBNpgR30qgz3QouqA9y_VS_Xk5wz41JwnSoMzeBMhBUKg5PLxrcObF7PWzOYHnC6zxhWZ=<%= size %>`,
]
