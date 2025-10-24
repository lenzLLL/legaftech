import React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'next-i18next';
import brand from 'public/text/brand';
import img from 'public/images/imgAPI';
import Logo from '../Branding/Logo';
import SelectLang from '../Utils/LangSwitch/Select';
import useStyles from './blog-style';
import {    Box, Chip } from "@mui/material";
import {
  Article as ArticleIcon,
  Business as BusinessIcon,
  Code as CodeIcon,
  DesignServices as DesignIcon,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
function Copyright() {
  return (
    <Typography display="block" align="center">
      &copy;&nbsp;
      {brand.footerText}
    </Typography>
  );
}


const BlogItem = styled(ButtonBase)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "300px",
  height: "auto",
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: "transparent", // ✅ fond transparent
  textAlign: "left",
  transition: "all 0.3s ease",
  boxShadow: "none", // ✅ pas d’ombre
  "&:hover": {
    transform: "translateY(-4px)",
  },
}));

 function BlogGrid({ news }) {
  return (
    <Grid item xs={12} md={4}>
      {news.map((item, index) => (
        <Grid item xs={12} md={4} key={index}>
          <BlogItem href="#">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 2,
              }}
            >
              {getIcon(item.type)}
              <Chip
                label={item.type}
                color="primary"
                size="small"
                sx={{
                  textTransform: "uppercase",
                  fontWeight: 600,
                  letterSpacing: 0.5,
                }}
              />
            </Box>

            <Box>
              {item.texts.map((text, i) => (
                <Typography
                  key={i}
                  variant="body1"
                  sx={{
                    mb: 1.5,
                    color: "text.secondary",
                    lineHeight: 1.6,
                  }}
                >
                  {text}
                </Typography>
              ))}
            </Box>
          </BlogItem>
        </Grid>
      ))}
    </Grid>
  );
}
const getIcon = (type) => {
  switch (type.toLowerCase()) {
    case "design":
      return <DesignIcon color="primary" />;
    case "business":
      return <BusinessIcon color="primary" />;
    case "development":
      return <CodeIcon color="primary" />;
    default:
      return <ArticleIcon color="primary" />;
  }
};




function Blog(props) {
  const { classes, cx } = useStyles();
  const { toggleDir, bg } = props;
  const { t } = useTranslation('common');
const footer = {
  title: 'Quick Links',
  description: [t('ai-landing.header_services'),t('ai-landing.header_projects'),t('ai-landing.header_about'),t('ai-landing.header_faq'),t('btn_contact')],
  link: ['/services', '/projects', '/about', '/faq','/forms/contact'],
};
const news = [
  {
    type: t('footer_c'),
    texts: [t('footer_c1'),t('footer_c2'),t('footer_c3')],
  },

];
  return (
    <footer className={cx(classes.footer, bg ? classes.hasBg : '')}>
      <Container className={classes.root} fixed>
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <div className={classes.logo}>
              <Logo type="landscape" size="small" />
            </div>
            <Typography color="textPrimary" className={classes.footerDesc} gutterBottom>
              {t('ai-landing.banner_title')}
              &nbsp;
              {t('ai-landing.banner_desc')}
            </Typography>
            <div className={classes.quickLinks}>
              <Typography variant="h6" className={classes.title} color="textPrimary" gutterBottom>
                {t('footer_link')}
              </Typography>
              <ul>
                {footer.description.map((item, index) => (
                  <li key={item}>
                    <Link
                      href={footer.link[index]}
                      variant="subtitle1"
                      color="textSecondary"
                      underline="hover"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
          <BlogGrid news={news}/>
          <Grid item xs={12} md={3}>
            <div className={classes.socmed}>
              <IconButton aria-label="FB" className={classes.margin} size="small">
                <i className="ion-logo-twitter" />
              </IconButton>
              <IconButton aria-label="TW" className={classes.margin} size="small">
                <i className="ion-logo-facebook" />
              </IconButton>
              <IconButton aria-label="IG" className={classes.margin} size="small">
                <i className="ion-logo-instagram" />
              </IconButton>
              <IconButton aria-label="LI" className={classes.margin} size="small">
                <i className="ion-logo-linkedin" />
              </IconButton>
            </div>
            <SelectLang toggleDir={toggleDir} />
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

Blog.propTypes = {
  toggleDir: PropTypes.func,
  bg: PropTypes.bool
};

Blog.defaultProps = {
  toggleDir: () => {},
  bg: false
};

export default Blog;
