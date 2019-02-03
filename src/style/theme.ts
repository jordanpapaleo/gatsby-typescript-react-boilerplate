import {css} from '@emotion/core'

import { dimensions, fonts, colors, breakpoints } from './variables'
import { getEmSize } from './mixins'

export default {
  colors,
  dimensions,
  fonts,
  breakpoints
}

export const baseStyles = css`
  body {
    background-color: ${colors.white};
    color: ${colors.text.normal};
    font-family: ${fonts.sansSerif};
    font-size: ${dimensions.fontSize.regular}px;
    line-height: ${dimensions.lineHeight.regular};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${colors.darkest};
    font-weight: 600;
    line-height: ${dimensions.lineHeight.heading};
    margin-bottom: .5rem;
    margin-top: 0;
    text-rendering: optimizeLegibility;
  }

  h1 {
    font-size: ${dimensions.headingSizes.h1}rem;
  }

  h2 {
    font-size: ${dimensions.headingSizes.h2}rem;
  }

  h3 {
    font-size: ${dimensions.headingSizes.h3}rem;
  }

  h4, h5, h6 {
    font-size: ${dimensions.headingSizes.h4}rem;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    color: ${colors.link.primary};
    cursor: pointer;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`
