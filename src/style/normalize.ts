import {css} from '@emotion/core'

export default css`
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  :root {
    -moz-tab-size: 4;
    tab-size: 4;
  }
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  hr {
    height: 0;
  }
  abbr[title] {
    text-decoration: underline dotted;
  }
  b, strong {
    font-weight: bold;
  }
  code, kbd, samp, pre {
    font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace;
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  button, input, optgroup, select, textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
  button, select {
    text-transform: none;
  }
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  ul, ol, dl, dd, dt, li {
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  legend {
    padding: 0;
  }
  progress {
    vertical-align: baseline;
  }
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  summary {
    display: list-item;
  }
`
