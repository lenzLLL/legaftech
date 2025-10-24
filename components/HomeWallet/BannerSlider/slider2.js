import React from 'react'
import useStyles from './slider-style';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SharingArt from '../../Artworks/Sharing';
import imgAPI from 'public/images/imgAPI';
import { useText, useTextAlign, useTextGradient } from 'theme/common';
import { useTranslation } from 'next-i18next';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import LocaleLink from '../../Link';
import link from 'public/text/link';


export default function Slider2({isMobile}) {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');
  const theme = useTheme();
  const { classes: gradient } = useTextGradient();
  
  
  return (
     <div className={classes.slide} data-slide-id="slide2">
                                <div className={classes.inner}>
                                  <Container>
                                    <Grid container spacing={4} justifyContent="flex-end" alignItems="center" direction={isMobile ? 'column-reverse' : 'row'}>
                                      <Grid item md={6} sm={12}>
                                        <div className={classes.decoBanner}>
                                          <div className={classes.sharingArt}>
                                            <SharingArt
                                              personBig={imgAPI.avatar[12]}
                                              personMedium={imgAPI.avatar[11]}
                                              personSmall1={imgAPI.avatar[20]}
                                              personSmall2={imgAPI.avatar[21]}
                                            />
                                          </div>
                                        </div>
                                      </Grid>
                                      <Grid item md={6} xs={12}>
                                        <div className={classes.text}>
                                          <h4 className={text.title}>
                                            {t('wallet.banner_title2')}
                                            <span className={cx(theme.palette.mode === 'dark' ? gradient.tripleLight : gradient.tripleMain, text.uppercase)}>
                                              &nbsp;
                                              {t('wallet.banner_highlight2')}
                                            </span>
                                          </h4>
                                          <h5 className={text.subtitle}>
                                            {t('wallet.banner_desc2')}
                                          </h5>
                                          <div className={classes.btnArea}>
                                            <Button component={LocaleLink} size="large" color="primary" variant="contained" to={link.register} className={classes.button}>
                                              {t('btn_f')}
                                            </Button>
                                            <Button size="large" color="secondary" variant="outlined" href="#" className={classes.button}>
                                              {t('btn_w')}
                                            </Button>
                                          </div>
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </Container>
                                </div>
                              </div>
  )
}
