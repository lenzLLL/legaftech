import React from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import { useTranslation } from 'next-i18next';
import Parallax from '../Parallax/ParallaxRight';
import Title from '../../Title';
import useStyles from './faq-style';


function Faq() {
  const { classes } = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const { t } = useTranslation('common');
   const faqData = [
  {
    q: t('faq.f1'),
    a: t('faq.r1')
  },
  {
      q: t('faq.f2'),
    a: t('faq.r2')  },
  {
     q: t('faq.f3'),
    a: t('faq.r3')  },
  {
        q: t('faq.f4'),
    a: t('faq.r4')
  },
  {
     q: t('faq.f5'),
    a: t('faq.r5')  
  },
    {
     q: t('faq.f6'),
    a: t('faq.r6')  
  },
];

  const [expanded, setExpanded] = React.useState(0);
  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className={classes.root}>
      <div className={classes.parallax}>
        <Parallax />
      </div>
      <Container fixed>
        <Grid container spacing={isTablet ? 2 : 8}>
          <Grid item md={5}>
            <Title text={t('ai-landing.faq_subtitle')} align={isMobile ? 'center' : 'left'} />
            {!isTablet && (
              <ScrollAnimation
                animateOnce
                animateIn="fadeInUpShort"
                offset={100}
                delay={500}
                duration={0.5}
              >
                <div className={classes.illustration}>
                  <img src="/images/ai/robot.png" alt="illustration" />
                </div>
              </ScrollAnimation>
            )}
          </Grid>
          <Grid item md={7}>
            <div className={classes.accordion}>
              {faqData.map((item, index) => (
                <div className={classes.item} key={index.toString()}>
                  <Accordion
                    classes={{
                      root: classes.paper
                    }}
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                  >
                    <AccordionSummary
                      classes={{
                        content: classes.content,
                        expanded: classes.expanded,
                      }}
                    >
                      <Typography className={classes.heading}>{item.q}</Typography>
                      <ExpandMoreIcon className={classes.icon} />
                    </AccordionSummary>
                    <AccordionDetails
                      classes={{
                        root: classes.detail,
                      }}
                    >
                      <Typography>
                        {item.a}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Faq;
