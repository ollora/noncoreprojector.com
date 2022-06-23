import React from 'react';
import TextBlock from '../components/TextBlock/index.js';

const pageData = {
  pageTitle: 'NONCORE PROJECTOR IS',
  links: [
    {
      label: 'ELIAS JARZOMBEK',
      props: { href: 'https://ejarzo.github.io' }
    },
    {
      label: 'JACK COLTON',
    },
    {
      label: 'ROLLO CARPENTER',
      props: { href: 'https://www.instagram.com/rollocarpenter/' }
    },
    {
      label: `JOHN O'CONNOR`,
      props: { href: 'http://www.johnjoconnor.net/' }
    }
  ]
};

export default () =>
  <TextBlock
    pageData={pageData}
    height={15}
    width={28}
  />
