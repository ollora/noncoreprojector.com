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
      props: { href: 'https://www.instagram.com/jakecalcium/?hl=en' }
    },
    {
      label: 'ROLLO CARPENTER',
      props: { href: 'http://www.cleverbot.com/' }
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
