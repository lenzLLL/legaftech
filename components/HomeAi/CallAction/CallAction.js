import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'next-i18next';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import link from 'public/text/link';
import { useText } from 'theme/common';
import LocaleLink from '../../Link';
import useStyles from './action-style';
import Link from 'next/link';

function CallAction() {
  // Translation Function
  const { t } = useTranslation('common');
  const { classes: text } = useText();
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const { classes } = useStyles();

  return (
    <Container fixed={isDesktop} maxWidth="lg">
      <ScrollAnimation
        animateOnce
        animateIn="fadeInUpShort"
        offset={100}
        delay={500}
        duration={0.5}
      >
        <div className={classes.action}>
          <div className={classes.wrap}>
            <h4 className={text.title}>
              {t('cta_title')}
            </h4>
            <p className={text.subtitle2}>
              {t('cta_desc')}
            </p>
            <div className={classes.btnArea}>
              <Button size="large" component={Link} color="black" variant="contained" href={"https://docs.google.com/forms/d/e/1FAIpQLSfTinQ-Ko3r2MuGzppf-0MKneGFri6asaH8ejlDqafGbvijpw/viewform?usp=header"} className={classes.button}>
                {t('btn_f')}
              </Button>
         
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </Container>
  );
}

CallAction.propTypes = {

};

export default CallAction;
