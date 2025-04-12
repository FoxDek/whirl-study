import React from 'react'
import styled from 'styled-components'
import BaseTitle from './base-components/BaseTitle.jsx'
import BaseCardItem from './base-components/BaseCardItem.jsx'
import Container from './base-components/Container'
import { advantagesData } from '../data.js'
import BaseText from './base-components/BaseText.jsx'

function Advantages() {
  return (
    <Container>
      <AdvantagesContent>
        <AdvantagesAbout>
          <AdvantagesTitle>Your tasks, automated.</AdvantagesTitle>
          <AdvantagesDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</AdvantagesDescription>
        </AdvantagesAbout>
        <AdvantagesItems>
          {advantagesData.map((item) => (
            <BaseCardItem item={item} key={item.id} />
          ))}
        </AdvantagesItems>
      </AdvantagesContent>
    </Container>
  )
}

export default Advantages

const AdvantagesContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
  padding: 100px 0;
`

const AdvantagesAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (min-width: 1200px) {
    align-self: flex-start;
    align-items: flex-start;
  }
`

const AdvantagesTitle = styled(BaseTitle)`
  font-weight: 400;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`

const AdvantagesDescription = styled(BaseText)`
  text-align: center;
  max-width: 400px;
  text-align: center;

  @media (min-width: 768px) {
    max-width: 500px;
  }

  @media (min-width: 1200px) {
    text-align: left;
    max-width: 550px;
  }
`

const AdvantagesItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 60px;
  }
`

