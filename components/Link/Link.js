/* eslint-disable */
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const LocaleLink = React.forwardRef(({ href, children, skipLocaleHandling, ...rest }, ref) => {
  const router = useRouter();
  const locale = router.locale || router.query.locale || router.defaultLocale || '';

  let finalHref = href || '/';

  // ✅ 1. Ne pas modifier si c’est un lien externe
  if (finalHref.startsWith('http')) {
    return (
      <a href={finalHref} ref={ref} {...rest}>
        {children}
      </a>
    );
  }

  // ✅ 2. Ajouter la locale seulement si elle n’est pas déjà présente
  if (!skipLocaleHandling && locale && !finalHref.startsWith(`/${locale}`)) {
    finalHref = `/${locale}${finalHref.startsWith('/') ? finalHref : `/${finalHref}`}`;
  }

  return (
    <Link href={finalHref} locale={locale} {...rest} ref={ref}>
      {children}
    </Link>
  );
});

LocaleLink.displayName = 'LocaleLink';

LocaleLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  skipLocaleHandling: PropTypes.bool
};

LocaleLink.defaultProps = {
  href: '/',
  skipLocaleHandling: false
};

export default LocaleLink;
