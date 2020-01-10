import React from 'react'
import { AppRouter } from './app.router'
import { Header } from '../header'
import './app.css'
import { Footer } from '../footer'

const imageSize: number = 1300
const roundTime: number = 8000

const images: string[] = [
  'https://lh3.googleusercontent.com/-BdUaZFErgr1kYr0I1na0sg2i-UA-apKZ_rwfba3gFTtwlH-Yo-bjDiIrkbxSNUsahInvtyiUkMrqzlrxXzjk-Ro3cNzERAPuZKMzfQEbXRNY444juYnil-soKmbDNjNHMl4vFq_yz2Fb6qfFO7BEBWNl07f_JeTONG0MwDLiHOHZ-j8RRdQEsH_fLHq18fcc4vrUnWPcpAalwtjAFE_0VMW4Y0CBioOobnt5EM1l2L3bgjPWBZAfnnxltiO7tM-lNbqfTZkpAj0tQeC-pdXb38m6PpUwKNE_yc6YMeB85At5AN_gwML4IxnOKlamz5ee_QdUEzVAap2gAkxuD13XjijLvR5nJ40BlRIkvrSnWubYopzBQLR4KZz_t5C0gWrnAUrTD19DbogcnFK0fhmU_aCtxK2Zm07_g9fKqEoUpMPkWhdXpeyYTfZ-ZqsMdpBxcP5x5DNxdAO9F7rw_g6MpS4QkUbRVuGo4aXjApd-i4eZ8_hP6OWNTHJwcyLwYAU6YsvCHZ-SRsBLafRfzcjHVN9RQJF6hBg6jAYXEdciN4yF5tkfaTjpMTUH3tZq5LHtfoh5OXElif5EgSJUny3Vn9UJHX2yOr0sLCMpFgyNE6vtlbd7dtLQg1LsHPr-NxrN2bAe9AUCpH0bcGLd8GX0xzOd_hOjxfb4_k92VxskNYawD3FjapQLfGbJisLQjL9UJd1jFHuqbBCXVVBoV8lhjW9F_CeLSx8sLlSt2IsVVXhdrdP',

  'https://lh3.googleusercontent.com/pWLm2ECoAbH_JMGTGCeSm1j798sFrFZViulR-bw7YNdy0ljiVW9_iHq4YSCjgnF0umJRP3860yJ_UPr6_LqFfH-UigM_qY_dsEeA1I29R_f_wHROKmS9s_uLU4nwe6DYX7M_8PkbwmsbZVgM7F2jhb29HOy40LEXD656xXYGmvFDKGHvk0aeDm7BIM6GaYXDlWfKo2PJsY1LFWhLt6_cgaZe-VXFoERXazJhO72ahY_mqMITEWDnRjOPBObDI6RZmEuaeHRYQNmwGX5AFUKHOuOgjZZntc0inY9X80h-nQ6McBo7dD2ytARHeAzxqQF1jJvjN9TNm_QdxspQRol5Q4z1Tb6hyUYUOiiqPuVIgToj7o9zcn8WVjva8NK-tftTyvgeT8Jl9iwQcR5FGPGgALxKt5bawhmNiiuSnHNeQCjiunfZF39LxVp46AA_dzbfRXspP2X8b_CHayIL5VaFzPaKBkYxGQmR9WPjEJD-VHnfYKlYS-XRM9ByXfV1uza_BvHz_YXnowgy5pIqbUFRN9Q4VBwjpyuac4-HiCl9QgInkgkplm7s4V6Jqxf5Z0rp0Rbw07gGOyTGH7N_hcnb_wp-KWJRanpJIrBKEJTEu0lmSxjWC_K6tmlW3qUs8Ok2RhMpeebtx1Gd5ZJiFZ1NujH5JzHWXChXcgztjOWlxQnaFc8fZEdhVnfzvsqqQoCa1sDJKyDD9JPUbcFI39BKa92X4UTMJm2k194bKUGNrZqxECdU',

  'https://lh3.googleusercontent.com/DVE-rkcfGeIzf1srC_CMNQFCR2l7zzpe8L04fnKSlT9GoPFE8CtWceUdB74vUYEtoyx0FIdprsPGkG-Kuh9QKLAZqdhylNA7oNRXpvVBVqCmqTIcN6Pi_v1CFixve6RbvIW18Yzhw31j2uDFCfJnzZgbmLYNKaKLaAzQqKBwUzvW-uT5o5dW2Rn1dB4SoTMQSMZIpAa7FWleBO6nyr6_Dp9KqbzmzKK3yDqUa0dmGdbCDW5vkZyJu-nve5MorFL4912BRrwncmgigd2apoDvLIENmGmswXVGTZctr7w4JvX_O1E_wQwL1clP5ZamRWNOV-K7MreV2tEoN7u-s96Pt1YMV9dh62eb2q0cOmFNhL3uu27tGlqTuxdsNI_dd75adGQcsn9ClAzyoo6W65pfeWPM9Hk7d_77pQfTviZr4-bbtWLCmp-0bsXKwmNY9-faAyKnlRB2xVR9IqNNiFCcguHcu1H9bnUd6zD7k0tJ1tsz5REDpkHBjrnPm8XMo36V3QiaUWQvPHuGP-65MjcXIQHIPYHYJjKsSyymsH5-m9gQopjyPW85kvWmCDhwXliTuFnkJZmv3I3_M0RV-DM00MqfYB_HIX3AV9bALS_-LhIlKuIEzGoCd_jmGNZH48N0z2teegTY5zxdLlnSTq5i7TaaiKYVWPSZHZIi352aiLadGe-m4z1O-IBxQ-YMDES0YiebSHVj460vaiQ5uzYagXH0imlNzPN9AnIMYFv4FLgNH5wI',

  'https://lh3.googleusercontent.com/C4ba1Yla_YuP4EDw8oCuM0VJGR8TZQMdyKwaqG937tsATFM00L8vXQ7hfdeheLH1WbzBVCEL3yoMdjdHXSu8tJQlOyUy4xHs2W3uJ0PWZrxZ9pTPHB-9A0vw_OM5DX_BJz8lO9KyxRujAJZJ65Xz71OaaA9WjEWQveQAloN50GD1CN5nJGGfwSQVjc6PZg85pT4m-QBIVu4E2afo8UV75HTuk-rP1YUNJ3Gbj3Dhm1eWdHKZro2A5YmXSipaRGL-BAdi4XAPyHZntuZAfgvoV9MkO0w_0Q9GAzN4Q8rZpgZTDohGKI_-d1JyAKjV1WJ60Ldu1k_zWCqcZJ-GLrhFcp6gSiUlDhdS88IA1xUK20dmWMTeMw1zsH9r18q16JI6P983VXDnhxBbLWf9xVZrHwYrpUrFzcT18k5GGtKT11F-LRcSsHF1xn81Gb7jdzzwNklnPXfORPISUzG8doxLErzRLlCoDNo3BW97z8mXfoo2jqT_LN3iXcVEkk-HWpX-oKOf_WktmuKRafmqCL54UaH4n160w9YwwbRaRN0lkaDKSeO1OeGV78LuhtNNELXqVZYXGhWjHo_goUu9g_srLstzvVvqwLl8FfUZ-fnjLkc-6exRfevfU-kS-QLwCnwXJwUjO5KPuZTF3k3EWnyW0kOcb_kfIh_TrTRyZROgbutczIOCKoXijNLKICQIUY5HbcgtQX0-hqder3h2he2-g6oQOa7cDveqkGEZype_m1GPZUbC',

  'https://lh3.googleusercontent.com/fhAXtRO71YG5EaKG5zdd6VDyRk5UyKq4ze4J5YorgAFfFhlXJRKUqL1cyZUtXkZhJuMQYapoxmKmPONvmqESUNGDUGuManUyiWT4kv4LAYdkFYJmwwH51YUagPnWNvUhZz0CP91MIZvnd82Q30nTXURp3xI1v9SegTQUVaaDy0H_vVveAN4ZHg9l_Ou_-01yvXZpwOMcN-y78UOm0wyD8rVsRkDMpWPd_0hd7CctphcwxL73gr1TpreeDNozWCGP7qo_uRzexQ1DnHa1VQ-qmvwDgVfSzm0CtI1VNnFc7xKZpO70bddLMFptfpR__IT12wk0iJfQRA2TCdbF7Xc5mpJy_-peL6Viz8pINPJ2JB5Bh9XRNT5_JBjT9iNyEmrwMMhDSZlJ4ijJfjox2UV_hrvEdiwxrWD0Cu1eBMo4dkGLWa7ck6741IrUHH044abg1sMHVZHRZ4fXb67UqOx-iPDBzfqagMJFuV-6ihf9JQsOKPYBhdESHa73f3sgk5aPIfGzdactDQiD50CYFCIozVTED0fX7zmZgE1R70rGJXS_zODb-h0a-bx81oudpqr1gPUW8nF9vnmiNXejUpp8QS2-QPn7zLSFfAJWTSCxYulKcAVDgHUfpn_zAd8jrQdcqJLcWyuyzJjm6dJq21Lck9BBiJhF7eJYBIsbhsbYLGSLXLs361Z5syVHQWdBEeHkrR_GtUvy8oYLSL-2vhF4lKZZ7fjQiwAvlyhWlijUtAlKtQa9'
]

export class AppComponent extends React.Component<{}, { index: number }> {
  constructor(props: any) {
    super(props)

    this.state = {
      index: 0
    }

    setInterval(() => {
      console.log(this.state.index)
      if (this.state.index === images.length - 1) {
        this.setState({
          index: 0
        })
      } else {
        this.setState({
          index: this.state.index + 1
        })
      }
    }, roundTime)
  }

  public render() {
    const { index } = this.state

    return (
      <div className='app'>
        {images.map((image, index) => (
          <div className={`bg-image ${this.state.index === index ? 'visible' : 'hidden'}`}
            style={{
              backgroundImage: `url(${image}=s${window.innerWidth || imageSize})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100vw',
              height: '100vh',
              position: 'absolute',
              zIndex: -1000 + index
            }} />)
        )}

        <div className='app-content'>
          <Header />
          <AppRouter />
          <Footer />
        </div>
      </div>
    )
  }
}
