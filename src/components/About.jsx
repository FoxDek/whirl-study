import React from 'react'
import styled from 'styled-components'
import Container from './base-components/Container.jsx'
import BaseTitle from './base-components/BaseTitle.jsx'
import BaseCardItem from './base-components/BaseCardItem.jsx'
import { aboutData } from '../data.js'

function About() {
  return (
    <Container>
      <AboutContent>
        <AboutTitle>What's Whirl all&nbsp;about?</AboutTitle>
        <AboutItems>
          {aboutData.map((item) => (
            <BaseCardItem item={item} key={item.id} />
          ))}

        </AboutItems> 

      </AboutContent>
    </Container>
  )
}

export default About

const AboutContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0;

  @media (min-width: 768px) {
    gap: 60px;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`

const AboutTitle = styled(BaseTitle)`
  font-weight: 400;
  text-align: center;
  margin-bottom: 2rem;
  margin: 0;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }

  @media (min-width: 1200px) {
    align-self: flex-start;
  }
`

const AboutItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 60px;
  }

  @media (min-width: 1200px) {
    gap: 40px;
  }
`

