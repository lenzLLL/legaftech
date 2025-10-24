import React, { Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Head from 'next/head';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import Hidden from '@mui/material/Hidden';
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import { useSpacing } from 'theme/common';
import singleMenu from 'components/Header/data/single';
import HomeLayout from 'components/Layouts/Home';
import BannerSlider from 'components/HomeWallet/BannerSlider';
import About from 'components/HomeAvatar/About';
import Feature from 'components/HomeAi/Feature';
import Step from 'components/HomeAi/Step';
import Research from 'components/HomeAi/Research';
import Community from 'components/HomeAi/Community';
import NewsEvent from 'components/HomeAi/NewsEvent';
import Faq from 'components/HomeAi/Faq';
import CallAction from 'components/HomeAi/CallAction';
import FooterDeco from 'components/Footer/Decoration/Liquid';
import Corner from 'components/Utils/Corner';
import Notification from 'components/Utils/Notification';
import brand from 'public/text/brand';
import Gallery from 'components/Collection/Portfolio/Gallery';
import MediaBanner from 'components/HeroBanner/MediaBanner';
import ParallaxDeco from 'components/Parallax3d/Ufo';
import imgAPI from 'public/images/imgAPI';
import { useTranslation } from 'next-i18next';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import BlurGradient from 'components/Artworks/BlurGradient';
import Contact from 'components/Forms/Contact';
import Group from 'components/Collection/Services/Group';
import Single from 'components/Collection/Services/Single';
function Landing() {
  // Theme breakpoints
  const theme = useTheme();
  const { t } = useTranslation('common');
  
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { classes, cx } = useSpacing();

  return (
    <Fragment>
      <Head>
        <title>
          { brand.name + ' - Home Page' }
        </title>
      </Head>
      <CssBaseline />
      <section id="home">
        <BannerSlider />
      </section>
      <section id="about" className={isTablet ? classes.spaceTopShort : classes.spaceTop}>
        <About />
      </section>
      <section id="group" className={isTablet ? classes.spaceTop : classes.spaceTopShort}>
          <Group />
      </section>
         <Fragment>
 
           <CssBaseline />
           <div className={classes.innerPage}>
             <section id="banner">
               <MediaBanner
                 title={t('portfolio_title')}
                 cover={imgAPI.inner[19]}
                 featured={[imgAPI.photosP[27], imgAPI.photosS[12], imgAPI.photosL[54]]}
                 decoration={() => <ParallaxDeco type="scroll" />}
               />
             </section>
             <div id="gallery">
               <Gallery />
             </div>
           </div>
         </Fragment>
    

          <Fragment>
      
            <CssBaseline />
            <BlurGradient />
            <div className={classes.containerGeneral}>
              <Contact />
            </div>
          </Fragment>
      <section id="faq" className={classes.spaceTopShort}>
        <Faq />
      </section>
      {/* <section id="blog" className={classes.spaceTopShort}>
        <NewsEvent />
      </section> */}
      <section id="call-action" className={cx(classes.spaceTop, classes.spaceBottom)}>
        <CallAction />
      </section>
      <Hidden mdDown>
        <Corner menuList={singleMenu.ai} />
      </Hidden>
      
    </Fragment>
  );
}
// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

Landing.getLayout = (page, pageProps) => (
  <HomeLayout
    home
    menu={singleMenu.ai}
    footerDeco={FooterDeco}
    {...pageProps}
  >
    {page}
  </HomeLayout>
);

export default Landing;
