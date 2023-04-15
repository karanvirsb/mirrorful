export type Colors = keyof typeof Tokens.colors
export type FontSize = keyof typeof Tokens.fontSizes
export type Shadows = keyof typeof Tokens.boxShadows

export type Token = Colors | FontSize | Shadows

export const Tokens = {
  colors: {
    'medium-purple': {
      '50': '#fefeff',
      '100': '#ebe4fb',
      '200': '#d8c9f7',
      '300': '#c5aff2',
      '400': '#b294ee',
      '500': '#9f7aea',
      '600': '#8c60e6',
      '700': '#7945e2',
      '800': '#662bdd',
      '900': '#5820ca',
      base: '#9F7AEA',
    },
    spray: {
      '50': '#feffff',
      '100': '#e4fbfa',
      '200': '#c9f7f5',
      '300': '#aff2f1',
      '400': '#94eeec',
      '500': '#7aeae7',
      '600': '#60e6e2',
      '700': '#45e2dd',
      '800': '#2bddd9',
      '900': '#20cac5',
      base: '#7aeae7',
    },
    froly: {
      '50': '#fffefe',
      '100': '#fbe4e4',
      '200': '#f7c9c9',
      '300': '#f2afaf',
      '400': '#ee9494',
      '500': '#ea7a7a',
      '600': '#e66060',
      '700': '#e24545',
      '800': '#dd2b2b',
      '900': '#ca2020',
      base: '#ea7a7a',
    },
    sulu: {
      '50': '#fffffe',
      '100': '#f2fbe4',
      '200': '#e5f7c9',
      '300': '#d8f2af',
      '400': '#cbee94',
      '500': '#beea7a',
      '600': '#b1e660',
      '700': '#a4e245',
      '800': '#97dd2b',
      '900': '#87ca20',
      base: '#beea7a',
    },
  },
  fontSizes: {
    sm: '1rem',
    md: '1.2rem',
    lg: '1.4rem',
  },
  fontWeights: {
    light: '200',
    normal: '400',
    bold: '700',
  },
  lineHeights: {
    short: '1',
    normal: '1.5',
    tall: '2',
  },
  boxShadows: {
    sm: '1rem',
    md: '1.2rem',
    lg: '1.4rem',
  },
}
