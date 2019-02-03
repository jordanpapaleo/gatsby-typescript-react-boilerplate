import React from 'react'

type Props = {
  name: string
}

const Header = ({name}: Props) => {
  return (
    <div className='Header-component'>Hi {name}</div>
  )
}

export default Header
