import React from 'react'
import styled from 'styled-components'

function BaseLogo() {
  return (
    <Logo href="#">
      <img src="../images/logo.png" alt="Logo" />
    </Logo>
  )
}

export default BaseLogo

const Logo = styled.a`
  width: 100%;
  max-width: 100px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & img {
    width: 100%;
    height: auto;
  }
`