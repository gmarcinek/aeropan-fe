import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage'
import './App.css'

function App() {
  const width = window.innerWidth
  const height = window.innerHeight
  const file = width - height < 0
    ? 'http://serwer2083856.home.pl/NARODOWY_SH030_INSTA_v001.mp4'
    : 'http://serwer2083856.home.pl/NARODOWY_MAIN_HD_v001.mp4'

  return (
    <>
      <h1 id='#header' style={{
        zIndex: 333,
        color: '#fff',
        position: 'fixed',
        margin: '0.5rem 0rem 0rem 1rem'
      }}>
        AEROPAN
    </h1>
      <ReactFullpage
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000}
        menu='#header'
        lockAnchors={false}
        anchors={['offer', 'realisations', 'contact']}
        navigation={true}
        navigationPosition='right'
        slidesNavigation={true}
        slidesNavPosition='bottom'

        //Scrolling
        css3={true}
        easing='easeInOutCubic'
        easingcss3='ease'
        loopBottom={false}
        loopTop={false}
        loopHorizontal={true}
        continuousVertical={false}
        continuousHorizontal={false}
        scrollHorizontally={true}
        interlockedSlides={true}
        dragAndMove={true}
        offsetSections={false}
        resetSliders={true}
        fadingEffect={true}

        scrollOverflow={true}
        scrollOverflowReset={true}
        scrollOverflowOptions={null}
        touchSensitivity={15}
        bigSectionsDestination={null}

        //Accessibility
        keyboardScrolling={true}
        recordHistory={true}

        //Design
        controlArrows={true}
        verticalCentered={true}
        sectionsColor={['#000', 'rgb(16, 22, 27)', 'rgb(16, 32, 37)']}
        paddingTop='0px'
        paddingBottom='0px'
        fixedElements='#header'
        responsiveWidth={0}
        responsiveHeight={0}
        responsiveSlides={true}
        parallax={true}
        parallaxOptions={{
          type: 'reveal',
          percentage: 62,
          property: 'translate'
        }}

        render={({ state, fullpageApi }) => {
          return (
            <div>

              <ReactFullpage.Wrapper>
                <div className='section'>
                  <video
                    loop
                    autoPlay
                    data-autoPlay
                    src={file}
                    muted
                    className='covered'
                  />
                </div>
                <div class='section' id='section2'>
                  <div class='slide' id='slide2-1'>
                    <div class='fp-content t-white'>
                      <h1>Photography sessions</h1>
                    </div>
                  </div>

                  <div class='slide' id='slide2-1'>
                    <div class='fp-bg'>
                      <img className='covered' src='https://lh3.googleusercontent.com/6KLtOKFA-GangfVvngGSbubkl3MBk6S6rz__6w6WXH2a7rWC51AYtvj03hUqnmJMxrZy1A1hqEcGUYfUfYGsFb0-g_9OlAC2YbLLAKYw2wlcrtmU_UVEw7ZDchbnchEGJbS_ELIk8vQhriEz_ti8746ZAZ3VQ3aQFTzTY_eYgz2SE_vCH2nWKetK1uI0YyY6434aw_5FgUsFFNoirw-aYEoK1YTcmLITmY_fxdvuZBPGPQDEtr7yRIhSiBrHmfE5UH5YvZVRrSAkMSnMKPqGLFLCZ-ROoeFiqXAK99ZHeE4EuTBuqfVzTUQVMH0trWpx_YBWpY2qcI221ohMEkYZ5Obc53A0hKbzEKREUK3p9ti5F0acpcE3PDo5409W2pJVFzN5AftvakYR-bEtdrF7d0_mpkaKCWwrVvcPgbXf07fleOMvhTYhG1zPIbYj9A_QpFpjD5Cxue-DBAVE7GL7sOxIKIdPevBtOF0QVDTe_HJuS0zOJPMMwVDO4w_7JzCEm1D3KAJvC38ycflUrSQ4davV74iTqhC6gM8oO99zXG_yaOC9ji8wUcMfaMGEk_TCwfBgZd0zQOCxX4FmsGyWr9w6X6_TGLfAUQ-68gBsHUMIANwl57x8ahROXTMmPI295yhsQPK-IML3bdJumY8EjznWAy70i2DfcBUKZlRghvjTYvfKUzNrGf25RZEGVI6LiV8xcdi0ad-RYxLmLxkAD01iSWnmWfQkmJ6WMI-nMo7yt7cb=s1900' />
                    </div>
                    
                  </div>

                  <div class='slide' id='slide2-2'>
                    <div class='fp-bg'>
                      <img className='covered' src='https://lh3.googleusercontent.com/syUit4t3l9Py8UjLDu3fQN7QTkRZ1NXulPK__5cFCqnUrt0fmE3EYbwB3gbPkwyMCICskX11vEgig2-DlC5Ze2OXlzYL9vzxUuwwVCUTEPRcTNRJQqWVLxoqg3FAtIXSTmV1-ox-nBXfOMLPp8egyL9aDmTMHKe-bdd99THXmHXNci5tJATYWDSE4WSasNgVhbPoGem2J_bPH1X_ihBVlZ-6zEgqfDCtcz85JJ6e7ZtfqLrb-s3ml0yis594ESjMKILIuSi0EMaXBv-D_eCfztwVqdf84dQMxj872bRzmwI17MHQDnqC1Np-Po6WMPMRBgG4kLOZcKpU15rh6XERMuui4ebuE5vzNToHZqAewC2cOJ65Wk2lYRFsoVH-GiHiBlaZdpPRzYKUbjiNe-_ul7JVi2em-xQBIq0f96Wfo_2sQWUGoB4rxLZtBTTmc2TRTM0JFuDraOVF4OWiVO3aLxsA78xYP3ltsWGQtBbQEUBERpTg5uCwhRzLXO1BqJ4v--4b-_3-yKLoIZvvMylNjvvokMljRK3L78XjCm8--mnQn9fUGEvK0kIHAfoYE24nxnszEtqrD7JG1h87EM6bbi79p5XRXD9TnMnFZJlcrlKkW_dzaXeawrxATlUqulemT_ladkkhU5eXcH_ijtqneBgvW6rSAbpEvQiDfaOFam-N4u3rNdOH5gMbhLZiYpa1o3WOpFz6r-FwEQKsawinYUspR9lRGugSN9r4ZQHcGrno0LzE=s1900' />
                    </div>
                    <div class='fp-content'>
                    </div>
                  </div>


                  <div class='slide' id='slide2-2'>
                    <div class='fp-bg'>
                      <img className='covered' src='https://lh3.googleusercontent.com/jMcA1mrmGMYxSx2VPftC6eRaFfx6GpTx8J83Rh4rhCPD3npLy9aEJKvko5Luv0v1zYiVEHSOVnvSQKUc4RqxomPW3WYWY_lYw30Rbou1IU0ZmDmQg6znK8LVgxRnuUFFMHjx3M1bLyd265tXtL2hfGiB21wi5uMv-tFQDtyrJ649tenW1iefinQmWECk3wU6UtQFFpwCtIhOKNZQgd4TOnaRxQj5mvPfebZBGpydzMEibUZ2b4mLVPkEbv_vK9SF4g1ytZFfM7kQrWHIv-VDtJpiT68wns_vIl7dFyGyNNA8JKUfoO47fl8ETw-_hbAS9CyleadgkWIM9QeV2_M0WJfgKCopEJxbPejXYsEpbTErfNIHby3pphGb6wmTyl9DH_VaUweeH8lcgLODHXvzWlZuEqRM88DNy_XTW-cICryfJih6iuFP0iRQFt8OtGS7DZAj3gt-zHf5LhUqZYLRU0XqFuXDWjLvaO4T3Bx9rAEQM8nkzSxJ_LbsrbBBRX1uJF_zdz8AUJgKmxl386cSucuvpjKLWf4v_ybYVHj1AedFbDHq_XZSQDw1kj1Ac9eLEo4Ufe9l1T61hPpbgIINfNebrUIsKupVLyeFB7-wX8Td2ujEAk_pIrPN0xBHw8x0w27KevxzCzyn4w3G_albpZp6XVKDNF1hA2KHzNfiyBODRvIX4B81F1EUdrgftjvevPGw1Zl1xXq6xVyJzw8S3iRy9zHIIIQGk6QNlat8METvypT2=s1900' />
                    </div>
                    <div class='fp-content'>
                    </div>
                  </div>

                  <div class='slide' id='slide2-2'>
                    <div class='fp-bg'>
                      <img className='covered' src='https://lh3.googleusercontent.com/Xp3YEqlKaj0YRKR-TucTSI1tGQMbCsTfxQjhVIMm_gOWxaYSDjA82ogagLUyRsESRt9zzVWcdxwPly_Bf1JifPkkJUsSmuLF-6tfCELFxoWYJ61UP6-35DGRnV1nig_IOhKxVH_OjhKZWeoM9fHnYMivrowo2jKr--Kb6wQnfqHJF1MNONbTx4Thy9GpBal0fgqa0o7dgM6v-DKPzOpX0cqK5Ap6LO-UH6mQB1lkOxSAn4bnUa8I1GxJynCnyNvQSYbLw7AQv8PAAfwNpBVbTRcpTrX509QSauiYngJs-KzWyRfmte6DkOx3oP2qcd67XMZojWTaFC6sVpCF6Vl56drXOJENNT9bIi9uyMnUglkB-CZXkJ3WVl_hQbKj9qLZIphIr94vTiZzjugUZSFfC2WeKgiQfnuRgFvVv63ZZ_tlHZgNQldAgn0MOZ-BCfAzmexTXDS9N-OXoH9ReI7ZjYABkCzd_1u66DwBPkn6MhSUtoewhoOd9plApDXX21fkq4NoBL6MM-cC5wK9vf2IJnVoiVgPsFJCa6QmSFJF-7BX9a7NkZHH72MsYRfYi2EqwFQvMO9M4mFH1BJI6VmMB64Hf02WD169ojU0xxuMmWtw8w8IYGIbNUmColGZtXnInFqQFbkpTLYTYBtD8ZHdZikJbk_73kjtB2TpGaCZuL6hy5EEY__3ZYqHym-yO9KsCSNbf3mynZQaDpBVk4wClZ5XJg3P_XgJ97yhB8OUQnQL98AB=s1900' />
                    </div>
                    <div class='fp-content'>
                    </div>
                  </div>

                  <div class='slide' id='slide2-2'>
                    <div class='fp-bg'>
                      <img className='covered' src='https://lh3.googleusercontent.com/6Sz0tMrpIBoWwskPtkB_sa5nXiGIdTddnrUmOt1U0D1FMTET6s7wmWMqAC5TcZiBaWOXrUthJ7JzEMc-qNjVCLXK_p7OymUq3lZ6GzZud8DZ83uywnypMGh86o4QuD0_GNsp6fV4feysM830vAzZuSF4zvfKOXEtUFIIgNN8zi9ptz3ixPDg9DoJGJMI5kgYJEKL5lbJkQsDS-OIxlLUA4xEq80qQN0Z_2c-Fu00zeEmbDVQzssVh18HqByM6j-GNHUdqtkB0oVXozMbCAcxIoIlXFanqTAMxJhv7Wrz3z2tOjuFMpWwGMOYtLaOYiDLAyQGJ8wFLSDLTIpPOcjVLutx-UAo2JcvuCRTnelJYXfW_hy8lf5OTc1xXAlNQtfBGOazYGWjv8SI4FAPcD__2rM-Y_R82IAY5Nz1fYSxIoGeMTU0QSrB8gb4_c7iT9k-w9mosYn3bWVp6rtO8dmpm-WpGronwJAph9lptaHnG0rKReS1AQac83Z2A5sW4pQesMoBibpZ4vHWzpQMhB6roPLY-iqg3yHgy_aBy7WT3dZUYecc0JrspsZrrEj1gMmXBi9rDUV08oHKK9M6c9VQ5rtIaUUvh8bUBiTJITXM5p7ksuMpw0Zq7PkMFa7e2xTr28oNzn62QJ3K9-stVRUYcRb6BnO8o5C3KU9ZvfKCSNi-t9xpUCQR8-aE4En9RI7BIFdKT6zeaZTR7Abbl-BBEHA47Bsrbp76ep7kGb8ZaoVoozPn=s2300' />
                    </div>
                    <div class='fp-content'>
                    </div>
                  </div>

                  <div class='slide' id='slide2-2'>
                    <div class='fp-bg'>
                      <img className='covered' src='https://lh3.googleusercontent.com/20W3xUnpL0J_ATeOmYKzkR4k92OxKQAV77BVlmRJ8NVjqEIijNhFwHUzUFuFZTzFiRcPmCdlydbCCPF-3-Zc8Ly0X5zG4vhS8AgPD5QN7230zf-7ZZ73cDKJKHx-_4i3UHrSASNmzMhXUawZGLCqn2i-NhyD1_IWHBXmcg3z2j1FxwYizC1u8w6vAvVMLrxKnl5MKQ9GYe3layVn4rpWBEkRo0Tey0diDBgr_dHnUcZD0eAU0VR1QrPZbUCkTZizSsQC-Q2I9UjUDMIGszM7zZQkRLONebRys---awUFp7chGySijp-0y98M8eq0mcUVJyBihPqAogEq0oS8C9wsDjOWrBAbJbN9VW_FTHequi2Cod1NSQhaZ9ELRNyUVsDkv8diHF9EV3qlGiKVGdMGfu4YkRo2lyzd6BeScW97UIzylXle1-Rfp7_AUxxc9RjARCgmwZNz5-ysiI-KnPIEo4Xiz8Yr_hZxHn8py6VPT4XiTQRqh7tfl1fztOsxWfXnVlXMIyU0budVLEiaRUl0l7tApuLdzwQJ2FSICBjIwCfMvQpxtDLrdJfd7Bx2ChCPL7NDq8FQ0aASoif4lWZnydCAzedCocE-Wbi9-9nRgJCEiiiAT0dKGrqBBmNL7VU4Nx0y0Wsxv0AtGAMv-ghcqIub-zMGpjL-ZN0ANuZX-gElNKvL5_zCMFOMLEXV6T8MOBKB3DagLkA42L4OmMwINSu4jFQ-JV5C1AuWbQ0rut0uVuF_=s1900' />
                    </div>
                    <div class='fp-content'>
                    </div>
                  </div>

                  <div class='slide' id='slide2-2'>
                    <div class='fp-bg'>
                      <img className='covered' src='https://lh3.googleusercontent.com/w9w2Aa-XBULHuljk2k5SirkhBlotYmGrh-Ayjo1iYLJgWLvF0dX2p6VcOJZWKwB08iGwxmTA_blLfPXMxVJcHull2fZ9H2PvuKXx6GB3YAmuZwDmu5SKU_vfafovNaQCfjx6g5wU90tD_19kdbqmcp89kA-SWBYE868ZYG0rL5iknp53szF727853itM8t7vh9mpvTRhhh81nXkXtTJjfcJW8bs1Cxh61G4pxT6Uxah-_S1jP3s_LrTU5HDeFgtecrQVk5c6MfwbXd_nf6wnMGDN-XHuu4OAT_BJUpcx-dkTncl1WQwVfGGowxldwZ_GZ1-XQQut2k-64Kd1MNSVOJxHSI4_GizdlN8qljDguxkjM_SjnvSBpvgtZNKjRSx6JIzMWuXzQN_vija_TALcHbIRJGm1DgEu3rNbFxu6VSOkaKQuqyONxvQeykQ_SxbPnc3HohhF1jQKfP1kPaHiuSM0b2WWH9tdQ_CQ6JMms6TwMLafOcnJGiXlTsmTjpvNTDcuWFMzRUmOKeufVp0iJfQOg_fW99vsVZGtVG4rfpZiIDxGHVe2fQzroSvs2AZUzqLkMbc0tVnNOt6Skb3jMDlUFGIgOxuEAO8e6__giL_KNOid_GDTtC6_JFNmaGuzjCP9QGrCxaXatvzJ3en4ljJrRguplYcY1NGypDVTSaBAh1vv96kGdALejpTQvn7YPfdlBz2p-aUTGULndcoCigiG0N_-g9DILZYbD6f8ROCBEXvH=s1900' />
                    </div>
                    <div class='fp-content'>
                    </div>
                  </div>

                  <div class='slide' id='slide2-2'>
                    <div class='fp-bg'>
                      <img className='covered' src='https://lh3.googleusercontent.com/LTzp2ESH8oZXLbPqPs009m59_hbSEnfAFOwB1IKPFLhZtNtJxsEf6fD6ZVv7_c3dJBYL0zs8DtnHNc-du7BVRH4DpJf9c6dH31UZsx__pvKIIJ5g6t3oyoJUjBRXON7ckVLtWwJRbgM8Y149MGCTiAth-QIt6Pjx-nj3YctkQsRoKeBNq3qT4miU7Q3x3JKejeCJxwkXpT-Tbmi-GOtO4Cz-zrIN-L5hxZy-pQj0iV0Ls0yya0nuDjh-8JmSvjNFAhi8aiVo1tdBezvCY-4gs2sWE-2LdUb-v1LJlVHAxcmneVcCMYvFMr7Dgj_cdX9ZH1MSZjJnX1AIKjPl4SiR2u9lEm97L8AlGEgL-8NtVx1tHrTwvxef3EEEnJjY5dlFTIeJkNOabhUr8WnYULN7mntt-ntYfC41UJ9qGSKZOaUftbn7M-TRjg-7b8HKcKVeYF7Ge4cAkFYCdE3NVklq9jZKSrzyngN2nLV1B6OBB6uVguor-ThJvFd_yjiHiScF1b2N8-hL25uxUGOwqohMdwhZb72n8TGAuSUGJQf6lfS5csNJoJDLXb9tzkuZ6XuE3Kz46YcmEVg8Vteh15TI9vITQOTTHp6Rrj3p_uRlGsRtgU-CU5CdQLT9wK_J6pB_iXcpJ9IWStizOYcUh1fYDe_nGrhuOzGTT8T6Kwf-p7ztVPNE38G9cbt7Oil5TniaPHPLmmmavDwgOxQwWFesAy8nmpWsBPfaVBvcckM6PSp3dIEI=s1900' />
                    </div>
                    <div class='fp-content'>
                    </div>
                  </div>

                  <div class='slide' id='slide2-2'>
                    <div class='fp-bg'>
                      <img className='covered' src='https://lh3.googleusercontent.com/8ACQc8UBlb31qBVI1G-P_IDH1x_O5GzAhl_AuXUofPbEYC3MrlY0k_g6PaC1klZYw_alDTG4xXHoDWC1N0m6JrxDM6L_tjGnga_DwLc49GvS_GKjeoCnP7FTt0dtlXoP9WxzyHJAuMeun5PmvHmj9-4rbqnTRX2fnEZv_kB-SDJNDQx1vcoRftCCWl3zir9iZ3YzUHmxHzeXSzb-5jDXYANQ9CF5rLrenzmiSxIz1EjXML0y5RTPXFlsQqcBjUIM-eKcXd1sjjZmwM7-d5gyBkqSJOjF5VLaLzLl_DMvJfl08rc61HJFOYSRH2zcBp28AaWUT9bXygPVy08I4yKLDCbsILXQ-CB3-FIWphwJc3USRjnxERCpAoch_VUf2hoPjhbnZSNrR7VxDX7Sv79JB5nGYW3wiZ7gYTs4Nl5j5kmypZVyg0bJyxQUc9FyPYbP8feTRXoT87HU2b7ZhfiJaMfrJuD37IHzVwC8HllU5G56HRyIeUzpWwG1c03tycYxA70-S7N4cIykEzYONP15TRSxS4rrMbtbcIh1AK_-PREdHAlk5Pa-n2Msbav7vkEshFoDXP0YNRrNwbITQqYtUxwGA428am-Oq2i7A1nGmLys8Kw9D3baDlDiLx2GKBU2c31x3wyKc4Zy-JOcN8Lds5iAq6bw3df_w6RpDql2xS-u_Q0qEzMr9MFNSrXhW2jO6fSFoPCt3yhSj65-tpNjHKObhhrjAaGErlxzVqr-zkLEbfil=s1900' />
                    </div>
                    <div class='fp-content'>
                    </div>
                  </div>

                </div>
                <div className='section'></div>
                <div className='section'></div>
              </ReactFullpage.Wrapper>
            </div>
          );
        }
        }
      />
    </>
  );
}

export default App;
