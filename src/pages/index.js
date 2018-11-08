import React from 'react';
import TextBlock from '../components/TextBlock/index.js';

const pageData = {
  pageTitle: 'NONCORE PROJECTOR',
  links: [
    {
      label: 'ABOUT',
      props: { to: '/about' },
    },
    {
      label: 'VERBOLECT',
      props: { href: 'http://www.verbolect.com' },
    },
    {
      label: 'VEC TOR BEL (CURRENT)',
      props: { href: 'https://false-flag.org/noncoreprojector/' },
    },
  ],
};

export default () => <TextBlock pageData={pageData} height={15} width={28} />;
