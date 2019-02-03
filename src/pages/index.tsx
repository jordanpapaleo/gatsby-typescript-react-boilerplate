import React from 'react'
import styled from '@emotion/styled'

import Root from 'components/Root'
import Header from 'components/Header'

const StyledIndex = styled.div`
  border: 1px solid blue;
  padding: 20px;
`

interface IndexProps {
  name: string;
}

const Index = (props: IndexProps) => (
  <Root>
    <StyledIndex>
      <Header name="Jordan" />
    </StyledIndex>
  </Root>
)

export default Index
