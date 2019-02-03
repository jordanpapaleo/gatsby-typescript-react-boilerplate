import React, { FunctionComponent, ReactNode } from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import normalize from 'style/normalize'
import theme, {baseStyles} from 'style/theme'

interface Props {
  children: ReactNode
}

const Root: FunctionalComponent<Props> = ({children}) => {
  return (
    <div className='Root-component'>
      <Global styles={() => normalize} />
      <Global styles={() => baseStyles} />
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </div>
  )
}
export default Root
