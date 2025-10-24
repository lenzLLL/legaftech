import React, { useState, useEffect } from 'react';
import App from 'next/app';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import CssBaseline from '@mui/material/CssBaseline';
import LoadingBar from 'react-top-loading-bar';
import { appWithTranslation } from 'next-i18next';
import appTheme from 'theme/appTheme';
import ThemePalette from 'components/ThemePalette';
import ActionBtn from 'components/ThemePalette/ActionBtn';
import Store from 'components/ThemePalette/Store';
import uiState from 'theme/config';
import brand from 'public/text/brand';
import lngDetector from '../lib/languageDetector';
/* import css vendors */
import 'dandelion-animated-slider/build/vertical.css';
import 'react-18-image-lightbox/style.css';
import '../vendors/animate.css';
import '../vendors/animate-slider.css';
import '../vendors/animate-slider-extends.css';
import '../vendors/hamburger-menu.css';
import '../vendors/animate-extends.css';
import '../vendors/react-top-loading-bar.css';
import '../vendors/page-transition.css';
import '../vendors/slick/slick.css';
import '../vendors/slick/slick-theme.css';

let themeType = 'dark';
if (typeof Storage !== 'undefined') { // eslint-disable-line
  themeType = localStorage.getItem('bungalionTheme') || 'dark';
}

const isBrowser = typeof document !== 'undefined';
let insertionPoint;

if (isBrowser) {
  const emotionInsertionPoint = document.querySelector(
    'meta[name="emotion-insertion-point"]',
  );
  insertionPoint = emotionInsertionPoint ?? undefined;
}

const cacheRTL = createCache({
  key: 'mui-style-rtl',
  stylisPlugins: [prefixer, rtlPlugin],
  insertionPoint,
  prepend: true,
});

const cacheLTR = createCache({
  key: 'mui-style-ltr',
  insertionPoint,
  prepend: true,
});

function MyApp(props) {
  const { Component, pageProps, router } = props; // eslint-disable-line
  const getLayout = Component.getLayout ?? ((page, pageProps) => page); // eslint-disable-line

  const [loading, setLoading] = useState(0);

  const curLang = lngDetector.detect();

  const themeName = 'cyber';
  const defaultTheme = 'dark';

   // Theme Palette Config
  const [direction, changeDir] = useState('ltr');
  const [themeMode, changeMode] = useState(themeType);
  const [color, changeColor] = useState(themeName);
  const [theme, setTheme] = useState({
    ...appTheme(themeName, defaultTheme),
    direction: 'ltr',
  });

  const handleChangeColor = selectedColor => {
    changeColor(selectedColor);
    setTheme({
      direction,
      ...appTheme(selectedColor, themeMode)
    });
  };

  useEffect(() => {
    // Set layout direction
    const themeDir = curLang === 'ar' ? 'rtl' : 'ltr';
    document.dir = themeDir;
    document.documentElement.setAttribute('lang', curLang);

    // Set color mode and direction
    if (themeType === 'light' || curLang === 'ar') {
      setTheme({
        ...appTheme(themeName, themeType || defaultTheme),
        direction: themeDir
      });
    }

    // Enable this code below for Server Side Rendering/Translation (SSR)
    // const { pathname, asPath, query } = router;
    // router.push({ pathname, query }, asPath, { locale: curLang });

    // Remove preloader
    const preloader = document.getElementById('preloader');
    if (preloader !== null || undefined) {
      setTimeout(() => {
        preloader.remove();
      }, 1500);
    }

    // Remove loading bar
    setLoading(0);
    setTimeout(() => {
      setLoading(100);
    }, 2000);
  }, []);

  const toggleDarkTheme = () => {
    const newPaletteType = theme.palette.mode === 'light' ? 'dark' : 'light';
    changeMode(themeMode === 'light' ? 'dark' : 'light');
    localStorage.setItem('bungalionTheme', theme.palette.mode === 'light' ? 'dark' : 'light');

    setTheme({
      ...appTheme(themeName, newPaletteType),
      direction: theme.direction,
    });
  };

  const toggleDirection = dir => {
    document.dir = dir;
    changeDir(dir);
    // set theme
    setTheme({
      ...theme,
      direction: dir,
      palette: {
        ...theme.palette
      }
    });
  };

  const muiTheme = createTheme(theme);
  return (
    <CacheProvider value={theme.direction === 'rtl' ? cacheRTL : cacheLTR}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <title>{brand.name}</title>
      </Head>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <LoadingBar
          height={0}
          color={theme.palette.primary.main}
          progress={loading}
          className="top-loading-bar"
        />
        <div id="main-wrap">
          <Store>
            <div>
              {getLayout(
                <Component
                  {...pageProps}
                  onToggleDark={toggleDarkTheme}
                  onToggleDir={toggleDirection}
                />,
                {
                  onToggleDark: toggleDarkTheme,
                  onToggleDir: toggleDirection
                }
              )}
      
            </div>
          </Store>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};

MyApp.getInitialProps = async (appContext) => ({ ...(await App.getInitialProps(appContext)) });

export default appWithTranslation(MyApp);
