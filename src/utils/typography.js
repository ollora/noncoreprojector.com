import Typography from "typography";

const typography = new Typography({
  googleFonts: [
    {
      name: 'PT Mono',
      styles: [
        '400',
        '700',
      ],
    },
  ],
  baseLineHeight: 1.666,
  baseFontSize: "18px",
  bodyFontFamily: ["PT Mono", 'monospace'],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    body: {
      letterSpacing: '4px',
      color: '#ccc'
    },
    a: {
      color: 'blue',
      textDecoration: 'none',
    },
    'a:hover': {
      color: 'black',
    },
  })
});

export default typography;
