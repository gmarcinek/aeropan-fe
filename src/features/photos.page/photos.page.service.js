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

export const PHOTOS_PAGE_MOBILE_IMAGES = []

export const PHOTOS_PAGE_DESCTOP_IMAGES = [
  `https://lh3.googleusercontent.com/6BjAl1IaoyYJZvwj6Sci8CD6dIh4hZ1sKFs1Ajf4ycTrc7MoFcN9hqgfCL7iRKB2t0MnKwSiJCV5lvrcibXvAUS4_2ksPTpw6-3t1rzqDfC8-VFFeC7X_LkyohCMsmeLcCZCitKTUR5bGUUNPN2BtpYVMAbACFgl5bu-s_NQJxkwL2GqsWggp2O1RsFeOypvof-d6t_9MbccyRTIryZhSPMDyM-1npJZSVE3bw-UcX3OU7wRV5xyTXPHbAXEMnCN_KvFVCu-imMguex47_ibwseDcDg1XOS4OMgeWTwtBDTlvLC4eyaymbp4Gf090ZnYkGmIpXsklT8vMIlmXRpxB3ca8Zos5ZyPN2amcB_YNdRVFAnLRIjASGNj3o6pXZfvntjeUbaMzOepkSVhod7MNNcCWscBtqWtCAicWW_ixeDs6_Jv0l9PSPEfltJUF9ubX4Ire0bMs03YUdYTnt1iAtp16o4qI3K9IxzL6F22vhXT-_jhdP76WOfPFx7jadyy0CI3QVtUm3UQr9c33rJf_LtVES4f8_Es4iLCRrRctRooR_oxIUlrCgcB5pavvluxVx9y0ivEXJuHpDHL6PexK6mbVW_UKl1JGSe2LU29uwCv-43fzh_kA-QEtZ7FHzBxHTXNJKeKASoWfFVJNCQ8B0P32qBfGI36xMio49ddQLlhyWyXh9oizAWhjQpm3p3SEclGGrt4zHtfBFWSUPP__m9oYt7cgEhWnmpRtYDIf9UMEqbN=<%= size %>`,

  `https://lh3.googleusercontent.com/qmRTFZfqfozRZ9fFUHWVlTrDzrdxfuBsLKHt1Z-YrT-GQPdJ63GNqozJlicFgfbjW9K0KBU7uVJrHRFvqNjDW4cJjVnxzGX0YnJ6i6_vgN-P3ajmQX0LbDuETMLslf9ObkvLJMLlkKSRim2hpVOb7VzYMZubUBC3kTJvC7eHqWoQjp33hWicfBwaD5rGPdaOVgxPzCbwXV8focXGm0CyYDL4pyXuzpbzIn_PKvlkTUDl9Iue5pNOyBLaO1nXoh6JPCH7OP3kWNxjVjfLVcRUt5h6Enjsu1xwzx5fQariPoBhS3D9SXbLPLQzwegB8dXlXOnJdlKErg2QiSgwcknetCBvxQt9Zf4FiHVFRwOeEeiuWGSbVBie8XIhrRh3izQpdGcj63YsgPQLcAb5ZyNJT3oTKG2T_W9rX4dZj-ZmG5g_i1NaIyT8tQQ0k2V74Ic-1VlDiSPdlMnYdQnR0KpHfpdCiklaXrD_ioq1YnOZKAfKtDgFB2fkDxj_s5cqke28dQMjdSRTPSn9qi7D5eL0LMNLbMTxfvKvgQloXF7ksL1w4yAxG18ynQL1JQT8vPE-R16nXsr1c6vkgyHUeG0XsPZMaoGtMaAP-Q7juMr2mdQBocmdnFqlYjFMGPh0lzpL-GmUby9mqBC8E-9SrltwGNqIuwRYUUpeWB6cY6VHbMmVvoqsVHvW_953JdDAP4THJ7LVw1fPYkGzRDvcf2ORVoMpCN41qssilUI9tBJfkUeq1KP0=<%= size %>`,

  `https://lh3.googleusercontent.com/uEKu-_K_ExcQjVK1920EofjuP4Kv9SizBiq0veqhwNp353gwDUASkfe9Jii208HWtBB484yFii6jQn-f-Z509Ut8SbTwT02FSsDrb6gZ5l1LzV9OSMCio-xQ6A7aSS4UfSDhZDXXerf66UtV5DHWQdwztROEI0TYnTeeeuLgGpIjxm_RkOsBn-cZu7brhTErmsd6wtTz8pNcWO3R0a3KY26ZAOeHI_JwRhf2FipaAzGYX5vLtXFWCxgbwNGDaXIgC6geYpQ4b4rju6mfuSvZcU9zT27C3xDp-GItVXyt_1JdkNSWwUOgjkqal_S4qLhD4bI0_OPVt57ldl9EYHgTQc4jNS23cibD3N_3xF-vXmwnN1HncHKglV4XGfLbfAwzu3JAjbbQdWnB6kSoUlY6nCwH1kWFJwHodzUm_ICnnVAZ0E2J6ObyL31x37HXGQpdOIUm4LzhsgaMoGcUpbf57aHAmy5g3YJOZwFbTA2bIG66QAIhYiBjHk7TaPWkJUIZiGrfpfxBZNRiaUvvzXfhYCArh3uIBmiA4O0pI2yebxoN_xGQu7ighR78wwllebcJK4wUBCfgZR-fOhhZLlC0Ln_QNgNnU5bVOTz61b01quSlGGoaUHv1AGVlxb4ufbkAF65rJ-KvUCYMPg8P9WVoUHmUWHXeKMPVlUd0HNuKw5M9lAGVShKERRwAZNpMBrn3KYQeXKY67AXr-zhIFjP1Usd-S8E4jHbTbV3xb_wNWpwN746z=<%= size %>`,

  `https://lh3.googleusercontent.com/8SbORojmBVOsDODfXscVg3Kre15SYM9X2CSnCunCVGeY3w55ek8_Yz17ymP_Y6oYPkuslFbUaxgysAhzfrAbAqoTEN1YuGWWo95a0TaoYFY6AiII8PA4iyrLEAl5zaz1XOfvFT6j5snDakLllmAQpV5IIcNuoyhPNhbBCdfIFJFKRsidU2LneAXVP3s1Svui1T8kpblTqi-j0ieIKXfOMaHjVnxo9cMDtM1Khird6YT_YK9V2H8yKxIAvdH3SBQCao1SRh8Hy0UKyG_efJVSnOgmZzzu8IZ0KysWYdB9n7GrqMdr2NaPxDmtXjtOv__7_GLe0IRuAb7k5LSbKO7t2snvuPpulTXDYA8nlz1_jInffJSQ9eIfwPaP3GfaMIzJ_vYJDT32mfI-uMWP038TREdyU9kzSeTbTZZFrF5K6rp6SRbo4j8b-DcThfFDlYetXgVvoD-WwtU5j8253Gn4SPun5lyrBVFAhFZQ2svVOJ9YorD1SgK7V-QpLW5SUd6vF8pmzOhkesKrZuAaD20oYBMmzcdJxYbY1pu4qUxh_oUs4KSGMv977T-hZoNrdqzaRXaQ-TpHY_6m_DCF5Qc9uXloqOrnFhiPWc1aCGV4TS8Ri5J-wCA6g-RKbr4F3Dj1RNysvUoLdL5r3h_lKyHAFcz1W_dEGpFYTsPjzvYIpXWcn7PDlxdJS2hA1Q_BXUBh2cnH54wqHMzB8QHLlaAuxkLwKULJX2eKnNxaFQ4LR5FkuS54=<%= size %>`,

  `https://lh3.googleusercontent.com/TUF-FRWLA4GhJGd0bfyKpm76GVTLf_246_V3d-8ZSjMZfBLTyk6lShJNDJf5IQ3QHLj63NX_IBItkMx-tpKfDQ314ehFlGuMD6GnypDYeTomuzQx6EMwnP8NKIQVtZppsKxA4jAMSBilOsj-xUbILY-27hc3ZuJli6fbTZKRtUusI-oe9jHcWlp9w7G6Ea05qHaYqh0cJTlRfhyWBFGCTNmBvOqrYS8uPSbvXZtlddt36WMVJCpILwEgPSoj5ce_SSULKnfxqPN4bupPMEuPZa_g66ZiIKZndDCJoEDKpwyl7WIXYD4DsM4OuVEw4QO1ymJ-HSvZwiwxgrHVidMos1xsO4jSeWP7WK8NMcnSKTg8H6pbxOepF2fprCaZoXK-kg0JOvLNKgR4QIw8qO2C3XOg7xWmv8WI7_c6D_QIu9vUzj4--4VF3byQ7EkpB3C2Fv-hehP-LG4OSClc3FxwYLCBg6D_hzVV6bgohR2Pvq3Zr1jceeRWAscHB-jRM5T4yNkxywi64Nqp2yZgb1C5NeUPFhNBbdwv45ogsZorHNqcZoZrw72tpfAGSpjTeHGWN366pmnxDd6hDg4KNRNFmn09vWv5pluiLiryL67LG6s7P_1JbBI-fcZvSRpEfu2HxJr4mYlIfYPVXaqRECyQ65H2jzGVUvryeWlej5hRt530vGVuq0sYOffZ0fdQX0ErsnFYRDwPzimFrWD_r_J3LY8F6fFQEGh0PZxjx5RCE3hcvn6u=<%= size %>`,

  `https://lh3.googleusercontent.com/VRzm2goVZX3ArrOaN2OdiYyJ5y8NLFVitCcZwwhZJhx2KWNqadj4VjcU4ptyJmT-JFSw7BtynTrW2pm-QlASLIkDwDxOd0CcXIm-tQNjOyrqYIwgl_QGRU0I9ePYQZRBoKxE53aPUl4TELAAUZCUwqdIE3vODbOE6F8rm8YnFYaWiTvqvBNhf_1RW0cFoYr3gJcyBb7KxjGSGOWf3NTKrQIQjPlBS7BpCahvq2ju8tpQdqTdieGe6e4pqdhqO65umRBJs6Fe2sg-w8hHIqqWAF52T-XRgPZ9TMT5BcbyMe7CveBe-aqNzy-s7SqWsAfVkxqIQO-hBZ9Y6pqk-ZTExKYk5RmyzMTsy7kSaAOX7iMxxlIsq_EUbN_LpcgPdI6uSxI1B3eX--JL1Dr0N0H_MJKZbzwW7asaNaKmAmXrNx41UQkh5HenIeFMr7G-WKaJMiO497j7Xb6104c0CotEwBmk3a468hDUonf9rPGE4sQp87CCQgqWnn6dvcd64pUFxYlqjhCA-TR_E4hbHSB0cSCEd8pSnUF-ORC7F2y3LE2XenwSSp_kBbyngoOW_47B1g-Semr9yM7Y58Z4w2Pfvtusw6t6_-HmN1F68K1Fxf1gWu4NoEjuSJDeJfkzJP1Gf2cRWndfMcTZscQ07_IldGvgQK6zS1fEQ8C4XEybgir6hDCHvYuHpIZLbwX4ejPVhrxcYAagq9E7wQWAUd8P_kf0OPLf63Q8ketn4HHqlpDShMCr=<%= size %>`,

  
  `https://lh3.googleusercontent.com/4YTLVGeG_qHL5j7nnYSqH1rjWMei2OHZvMg76i2CRTs7Okh0qzaqh1v04J3IjxbQHiLMuDn07MgLeF1yTXGOEeTHr7jVY2QvpaJDe_gC3ALv-C65RZHKo-LTfzR-ub2aE6ZqxlCqxstnCYYbMaIjvGBfF4S1Cpcyccejrs5zv4LuM0naWvbdab0yq9MYuYGT8UNm85evWXy5ODn6yiM7iQZTokdcQp7m11Bf8HKS0JLgN9Re9IFaj7j4dbeHyYa5rXEitYRc2HmKYqMEShgIJT4b-EYdsaSuU7sdZBbT5u3I99ejtgTpOBs-LOrcAma_twMUI_yH_KTAWI5Tmv7BcBDk2_fhpOKOnU0pd2X_HovOqBNV_gVl_U27igxAQ4Q1rLKSJK9Qc2Oynn6D1-r6wAdMUEsZ3MoeOOcSNX-YbRcc2z5QS6JnzBOZJJ3TWettbytCYJnuJxComJHLim9jWi-FfS0moaMXDIoTHlq8aiWrNfOFNH2G0skz-fXb78L9N_VJ1DrJrMF5HFEJ8uJ55LlzYV2AAEWWpN4bJsK-mdsfmCPNWbMblH0diwQZtrnPSSjkDwnphRlGG7RoaiE0zPhKTQOikSM2mZxkI3Pv_gjvW8ojWfpCF_9K1JFtav85_Ic_xpMjONIDocZx9Sl88FZ0uLMM0szgCeEtHcfC5gEJskeNRQcUJsSksKgDlkRvOhCjYqUsj2_968D5tq_BbYJ_EnyCiIUSZbJLHOiYttM4FI3_=<%= size %>`,

  `https://lh3.googleusercontent.com/FFr7SAwOxUm80GxoVBOxcObfz58w-vEIIYNx3FCrYbT_YvlLw7bQLAc8yRzc6dAkrXn9Q2X_-_jWq49xljHooQ0wYut15d--vhAPMEVNvbziX1WCR-jraY5DC9oCUo1BC3bozK6cufI_gsAlALwFbf2LYXnJLfeakGJmUIonWh-rzIVwcgnQkzlB51zryF02QxGZi7lCdyH2uP8C4YkFwgWGZwL6hXZRHmn-gR8oh3PYISCzRe8bdwyoSXmUY066oaXyRw6NGjFphngga_tn7Mm_PoivuX2TXM3tC3XZjGqHQJuWuZLWujudTWXgxmD2-Vf1SIiIx6UrYgQwP0-ijiL91sCCW8kC8hwsRGfaMHES_fpE0uOvn6swdwFkmfYJhACBKBdXHSEIEY56BPRrtJnE1S2dutoH8yk1KNURLSrnDkviYlELH7MaO4e202eYZWtFYO-zMV2EUCGoG76xuYXBhHbryqqNyMgrPZ0hDCyouSFP7bjabskAARGWq6pZdS1HQzzFDoPxyw24U06ofxi1tKwiN_TM4z2Fky-yTMegnb4JwYID0COI-ioaYsqE5g4i8kTEY1ZROer59udzxriGv-nnv1n6sFS-n50DzWg0L3As-uFVnDmRaJ3U0Mw6u4QL7D4_dYEvRXgiZX4EcucVnChduzXwJTOzEe6MirUAT0ykZdP-Ds2QrC86a0LDiw9Dmk-l_o8B5aeiZctKu11pdLePXOAHJEQicu9bry_uQ73u=<%= size %>`,

  `https://lh3.googleusercontent.com/WSd8mVXVffcKVC36KunuHgUs8a120fynY_Tpzi6EVAy5PYLpz4PCX9jopUZlj2m6gUOCpiTBjzrym506I2vvLA2rUYPAFjFu1TJhMfvCEjUPFWyEyfwXXmX0lOmrrc8med3_mPB_7EgRtYcGJZd_O3kq54HOapEOpyKDXevjBNP3ls96UThMr9lZ5kWJPGoZWsXCQ1rvEpGVbisIMmfcQiyLNpeQgKKDqOCQhJdbxaCIi5drK3xmB1XJKHX8px7iSKWOo-jQUcR-ZnyE1FlGPE6Cf0X3WjSzp3_MiPnL5f-dxH9yF2dSHHrX0ItDpETR7UmFaXmk5PkE5bq8FE4wCT4SPCG7eqL__HhdOhFUmQgAKxIQT5lOUgvOYaTdN23io7nExL13_wSre21AWozi7hrOj3wFeUq7FHuE02qKmPBnjTIhroi7XKfZWX27xZBp5sTJLHhu132hAK1ZkaifgP1vgtFk0BB4PAPwRG0XlNCDFrcV0klD0HSBwyy81qC4I5btBTtmK7genSUjFrU5HRwUTLga5UCXGgwQFQmrXNkJJXpY93fo-5sTnwfDjn5LcBQUM_Qjj0bcGDr4Ialf8AcrU9_HYVIsVRqCYZ8M4wxs38YkN1O-tqeZMomEL3u-glXdjAZMwuhI10GreN-32sjdjQ51aTGVaUg9cxpNYbkEsW-NNXnLaGLku3eks3AuQzeLTHGyW1RDJ8HhJ1exJ57Gay9Y-0hZp06pzy9_kEenjudZ=<%= size %>`,

  `https://lh3.googleusercontent.com/rji2f8voF35YGg4zM0WYxoNGlYKfBcDg7TvhYApeeZt09N2bhySf4Y7dZwKwtO2pfP12VBQqPwCNPW8IinxDj6WZOhKkPbWAAtJJjq6kdpKHFzDkqNpw-uisfrl5UYtmZ8E24K3_Dl5KDMS6AqheeINgfeKvfZtMqH-2USDqfSFxAwxBKwErAhnhx7wxmto-bR7w2zeUDqVxmOq-9LPkFrxpt-U0kHzVIOEjMP7GujUjgm1HBf_5F5xM0B3pKm7YhWYTCtZPWlbHZXiEVbeJSgFX8fRxHHpwjUe0VS309Hck7A_LiUmt0pexQyeXu1SdyN0GqE8GCg5KHnbQkr2xasQ-ZFp345UhXAn0cDw3tvRtajaEArIHRRB_XZUe69sduETCYgjk1ut4mpmwymuZHQrTtKk_x_XtKyBK_XZrjidnkbIP8jBJaU3BXuwIzH6skr3aOKHeyUrP8knh-qvQd65pQUnUYTenfzMry7lS-wwYP6b4E8Y-A6B2Q2po9JDOe83NIe-ePzbpBhvkPxRJt1Gd1r_mU5sFvymeD6GMeDpCKrq6HmC1Psn8Tc1UCsr9dW10bBzrYr3gv6xh6rhqgmvAk0TSRXak0zIx2OVZTSFDQd_Bws2njMZsi_itAUFmYdikrb9FV2fPnVKdIWzkkfscdMwbdAnt1SG9GlN3prstZyELdhD5Y1AN_N25DyOmGCNnCQjYjFMhv81oC0VIN3SeD6DI3piRrXi8LqFdQAnXPpRD=<%= size %>`,

  `https://lh3.googleusercontent.com/Lnbgo33K_Lgf4AI_Xy8WSF12ppzENjnPVPLiZTSo3EvKT41TJCPo3G1Cmrzg7KteXXKm6yYnfdC43weVIZgTSPPMFAaE33aXfiwgHuCkE8-iEYZOSoBHW86gcKFqGLkCCGIAdZaMJLi4M2LXNI-ILseRM1D8ktyGTdbNbw46hpVrDZDc6mtgSFvVaW9CInUL5xEVBxRgk6-u_pDtlhgtrjj1OhVSZxhJUBFaZHbpNCJ5gBPCJ4v2F9cx79S2FaW8Sl448cePJwPXY5qFPYAq7w8xSLznRs_jqXu0ZhqyQoEJDvrISoCG9MbgLz99Kis-AwkXA86Op18DwOGi7cwEALrw3gXdxY2SmSaW3W03_Xzq6H-RQHonKpdH01fenSpBnJPxP76ejIB2r9AzIVZZjVvUndTVki8y5D15fmojxoxZ7hroEXbdCGbkAkenxojfCofr7_2Szr2c09Z5ABhr6C8ES_Xon_Ub8SUg8Il4DB9fSe3r_MdPNj2iBj-PM7HxWx8cqFeWvudhGelQqQlzrm4BwHyLvwFW6ji0m-NLAfK8XFHrsMW_yS24yyH7RCvPgs7wMB_7OaJnLW3zd2Pdk5dMso1qg1qJ7d1Izyf7kBxrAkh8w5ZMt3fRgO-Y8nEC7fIBQXDD7xY40RXWA9QZy3IWyhU8e1LzrdlIBCZJ_MQLCryLqNKRdD8pqyzpsE18u4QmluqeYdIEiTUp8RJJSkozmUWc_zaAokrbo7n1VKLh8KHQ=<%= size %>`,
]