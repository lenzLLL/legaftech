import React from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { useText } from 'theme/common';
import useStyles from './faq-style';
import { useTranslation } from 'next-i18next';


function FaqList() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const [expanded, setExpanded] = React.useState(0);
  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
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

  return (
    <div>
      {[...Array(1)].map((group, indexGroup) => (
        <div key={indexGroup.toString()} id={'topic' + indexGroup} className={classes.accordion}>
          <Box mb={indexGroup < 5 ? 10 : 0}>
           
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
          </Box>
        </div>
      ))}
    </div>
  );
}

export default FaqList;
