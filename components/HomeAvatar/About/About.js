import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import imgAPI from 'public/images/imgAPI';
import brand from 'public/text/brand';
import { useText, useTextAlign } from 'theme/common';
import ParallaxRight from '../Parallax/ParallaxRight';
import AppCard from '../../Cards/Thumbnail/PreviewCard';
import ParallaxTitle from '../../Title/ParallaxTitle';
import useStyles from './about-style';

function MainFeature() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const { t } = useTranslation('common');

  const gameList = ["https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg", "https://images.pexels.com/photos/1111367/pexels-photo-1111367.jpeg", imgAPI.logos[40], "https://images.pexels.com/photos/9026297/pexels-photo-9026297.jpeg","https://images.pexels.com/photos/213384/pexels-photo-213384.jpeg", "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg"];
  const gameHighlight = [
    {
      img: "https://images.pexels.com/photos/5082576/pexels-photo-5082576.jpeg",
      icon: imgAPI.logos[44]
    },
    {
      img: "https://images.pexels.com/photos/5083405/pexels-photo-5083405.jpeg",
      icon: imgAPI.logos[45]
    },
    {
      img: "https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg",
      icon: imgAPI.logos[46]
    },
  ];
  return (
    <div className={classes.about}>
      <ParallaxRight />
      <ParallaxTitle
        bgTitle={t('avatar.about_bgtitle')}
        mainTitle={t('avatar.about_title')}
        color={theme.palette.mode === 'dark' ? 'doubleMain' : 'doubleLight'}
      />
      <Container fixed sx={{ mt: { md: 15 } }}>
        <Grid container spacing={6}>
          {!isTablet && (
            <Grid item lg={1} xs={12}>
              <Typography variant="h2" className={classes.nameDeco}>
                {brand.profileName}
              </Typography>
            </Grid>
          )}
          <Grid item lg={7} md={9} xs={12}>
            <div className={cx(isMobile ? align.textCenter : align.textLeft, text.subtitle2)}>
              <Box component="p" sx={{ mb: 5 }}>
                {t('avatar.about_desc1')}
              </Box>
              <Box component="p" sx={{ mb: 5 }}>
                {t('avatar.about_desc2')}
              </Box>
            </div>
            <Grid container alignItems={isTablet ? 'flex-end' : 'flex-start'} sx={{ mt: 0 }} spacing={6}>
              <Grid item sm={7} xs={12}>
                <Grid container spacing={2}>
                  {gameList.map((item, index) => (
                    <Grid sx={{ mb: 3 }} key={index.toString()} item xs={4}>
                      <Avatar className={classes.avatar} variant="rounded" src={item} alt="thumb" />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              {isDesktop && (
                <Grid item sm={5} xs={12}>
                  <AppCard
                    thumb={gameHighlight[0].img}
                    icon={gameHighlight[0].icon}
                  />
                </Grid>
              )}
            </Grid>
          </Grid>
          <Grid item lg={3} md={3} xs={12}>
            <Box sx={{ display: isMobile ? 'flex' : 'block' }}>
              <AppCard
                thumb={gameHighlight[1].img}
                icon={gameHighlight[1].icon}
              />
              <div className={classes.lower}>
                <AppCard
                  thumb={gameHighlight[2].img}
                  icon={gameHighlight[2].icon}
                />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default MainFeature;
