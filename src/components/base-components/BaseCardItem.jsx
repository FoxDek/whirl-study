import React from 'react'
import styled from 'styled-components'
import colors from '../../colors.js'
import BaseText from './BaseText.jsx'

function BaseCardItem({item}) {
  return (
    <AboutItem key={item.id}>
      <AboutItemIcon src={item.icon} alt={`About Icon ${item.id}`} />
      <AboutItemTitle>{item.title}</AboutItemTitle>
      <AboutItemText>{item.description}</AboutItemText>
    </AboutItem>
  )
}

export default BaseCardItem

const AboutItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  max-width: 400px;

  @media (min-width: 768px) {
    align-items: flex-start;
    max-width: 220px;
  }
`

const AboutItemIcon = styled.img`
  width: 50px;
  height: 50px;
`

const AboutItemTitle = styled.h3`
  font-family: 'Fraunces', sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
  padding-bottom: 10px;
`

const AboutItemText = styled(BaseText)`
  text-align: center;
  color: ${colors.textColorDark};

  @media (min-width: 768px) {
    text-align: left;
  }
`