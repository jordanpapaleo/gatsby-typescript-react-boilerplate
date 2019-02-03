/* tslint:disable:max-line-length */
// #0B0C10, #1F2833, #C5C6C7, #66FCF1, #45A29E,
// #272727, #747474, #FF652F, #FFE400, #14A76C
// #25274D, #464866, #AAABB8, #2E9CCA, #29648A,
// #61892F, #86C232, #222629, #474B4F, #6B6E70

const brand1 = '#AB61E5'
const brand2 = '#7F0FD7'
const brand3 = '#FBF7FE'

const white = '#FFFFFF'
const gray01 = '#f4f5f5'
const gray02 = '#D9DCDE'
const gray03 = '#ACB1B6'
const gray04 = '#59636E'
const gray05 = '#031323'
const black = '#000000'

const red = '#de521d'
const yellow = '#f5dd07'
const green = '#2bbf6a'

export const colors = {
  text: {
    light: gray03,
    medium: gray04,
    normal: gray05,
    dark: black
  },
  buttons: {
    default: white,
    defaultHover: gray02,
    disabled: gray03,
    primary: brand1,
    secondary: brand2
  },
  link: {
    primary: brand1,
    secondary: brand2
  },
  background: {
    lightest: white,
    light: gray01,
    medium: gray03,
    dark: gray05,
  },
  status: {
    success: green,
    warning: yellow,
    error: red
  },
  brand1,
  borderColor: gray02,
  darkest: black,
  lightest: white,
  gray04: gray04,
}

export const fonts = {
  sansSerif: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',
  serif: 'Georgia, "Times New Roman", Times, serif',
  monospace: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'
}

export const fontWeight = {

}

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}

export const widths = {
  md: 720,
  lg: 960,
  xl: 1140
}

export const dimensions = {
  fontSize: {
    regular: 16,
    large: 18
  },
  headingSizes: {
    h1: 2.441,
    h2: 1.953,
    h3: 1.563,
    h4: 1.25
  },
  lineHeight: {
    regular: 1.45,
    heading: 1.2
  }
}
