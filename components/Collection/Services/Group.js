import React from 'react';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'next-i18next';
import { useText, useTextAlign } from 'theme/common';
import imgAPI from 'public/images/imgAPI';
import link from 'public/text/link';
import GroupCard from '../../Cards/Apps/GroupCard';
import ParallaxTitle from '../../Title/ParallaxTitle';
import useStyles from './services-style';

function Group() {
  const { cx, classes } = useStyles();
  const theme = useTheme();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const { t } = useTranslation('common');

  return (
    <Container className={classes.root}>
      <ParallaxTitle
        bgTitle={t('service_bgtitle')}
        mainTitle={t('service_bundle_title')}
        color={theme.palette.mode === 'dark' ? 'tripleDark' : 'tripleLight'}
      />
      <p className={cx(align.textCenter, text.subtitle2)}>
        {t('service_subtitle')}
      </p>
      <Grid container spacing={4} sx={{ mt: { md: 10, sm: 5 } }}>
        <Grid item md={8} xs={12}>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUpShort"
            offset={100}
            delay={500}
            duration={0.5}
          >
            <GroupCard
              title={t("services.design")}
              desc={t("services.design_description")}
              color="primary"
              type="full"
              align="right"
              img={imgAPI.inner[10]}
              href={link.serviceDetail}
              darken
              items={[
                {
                  name: t("services.design1"),
                  icon: 'mdi-star-outline'
                },
                {
                  name: t("services.design2"),
                  icon: 'mdi-cellphone-cog'
                },
                {
                  name: t("services.design3"),
                  icon: 'mdi-palette-outline'
                },
                {
                  name: t("services.design4"),
                  icon: 'mdi-monitor-shimmer'
                }
              ]}
            />
          </ScrollAnimation>
        </Grid>
        <Grid item md={4} xs={12}>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUpShort"
            offset={100}
            delay={700}
            duration={0.5}
          >
            <GroupCard
              title={t("services.business")}
              desc={t("services.business_description")}
              color="accent"
              href={link.serviceDetail}
              itemColor="primaryColor"
              items={[
                {
                  name: t("services.business1"),
                  icon: 'mdi-dice-5-outline'
                },
                {
                  name: t("services.business2"),
                  icon: 'mdi-pencil-box-multiple-outline'
                },
                {
                  name: t("services.business3"),
                  icon: 'mdi-briefcase-outline'
                },
                {
                  name: t("services.business4"),
                  icon: 'mdi-file-document-outline'
                }
              ]}
            />
          </ScrollAnimation>
        </Grid>
        <Grid item md={4} xs={12}>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUpShort"
            offset={100}
            delay={500}
            duration={0.5}
          >
            <GroupCard
              title={t("services.technology")}
              desc={t("services.technology_description")}
              color="bright"
              href={link.serviceDetail}
              itemColor="secondaryColor"
              items={[
                {
                  name: t("services.technology1"),
                  icon: 'mdi-cloud-outline'
                },
                {
                  name:t("services.technology2"),
                  icon: 'mdi-chart-bar'
                }
              ]}
            />
          </ScrollAnimation>
        </Grid>
        <Grid item md={8} xs={12}>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUpShort"
            offset={100}
            delay={700}
            duration={0.5}
          >
            <GroupCard
              title={t("services.development")}
              desc={t("services.development_description")}
              color="secondary"
              type="full"
              img={imgAPI.inner[11]}
              href={link.serviceDetail}
              darken
              items={[
                {
                  name: t("services.development1"),
                  icon: 'mdi-file-document-outline'
                },
                {
                  name: t("services.development2"),
                  icon: 'mdi-cellphone-cog'
                },
                {
                  name: t("services.development3"),
                  icon: 'mdi-shopping-outline'
                },
              ]}
            />
          </ScrollAnimation>
        </Grid>
        <Grid item md={8} xs={12}>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUpShort"
            offset={100}
            delay={500}
            duration={0.5}
          >
            <GroupCard
              title={t("services.marketing")}
              desc={t("services.marketing_description")}
              color="accent"
              align="right"
              itemColor="accentColor"
              type="full"
              img={imgAPI.inner[8]}
              href={link.serviceDetail}
              items={[
                {
                  name:  t("services.marketing1"),
                  icon: 'mdi-button-cursor'
                },
                {
                  name: t("services.marketing2"),
                  icon: 'mdi-card-search-outline'
                },
                {
                  name: t("services.marketing3"),
                  icon: 'mdi-account-group-outline'
                },
                {
                  name:  t("services.marketing4"),
                  icon: 'mdi-monitor-dashboard'
                },
                {
                  name:  t("services.marketing5"),
                  icon: 'mdi-email-multiple-outline'
                },
              ]}
            />
          </ScrollAnimation>
        </Grid>
        <Grid item md={4} xs={12}>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUpShort"
            offset={100}
            delay={700}
            duration={0.5}
          >
            <GroupCard
              title={t("services.strategy")}
              desc={t("services.strategy_description")}  color="accent2"
              darken
              href={link.serviceDetail}
              items={[
                {
                  name: t("services.strategy1"),
                  icon: 'mdi-arrow-expand-all'
                },
                {
                  name: t("services.strategy2"),
                  icon: 'mdi-web'
                },
                {
                  name: t("services.strategy3"),
                  icon: 'mdi-monitor-shimmer'
                },
              ]}
            />
          </ScrollAnimation>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Group;
