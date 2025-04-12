import React from 'react'
import styled from 'styled-components'
import colors from '../colors.js'
import Container from './base-components/Container'
import BaseTitle from './base-components/BaseTitle'
import BaseLink from './base-components/BaseLink'
import BaseText from './base-components/BaseText'

import { blogArticlesPreviewData } from '../data.js'



function Blog() {
  return (
    <BlogBackground>
      <Container>
        <BlogContent>
          <BlogHeader>
            <BlogTitle>Get smarter, with our blog.</BlogTitle>
            <BlogHeaderLink>See All Posts</BlogHeaderLink>
          </BlogHeader>
          <BlogArticles>
            {blogArticlesPreviewData.map((article) => (
              <BlogArticlePreview key={article.id} href="#">
                <BlogArticleImage style={{ backgroundColor: article.color ? article.color : colors.featuresColor1 }}>
                  <img src={article.image} alt={article.title} />
                </BlogArticleImage>
                <BlogArticleAbout>
                  <BlogArticleCategory>{article.category}</BlogArticleCategory>
                  <BlogArticleTitle>{article.title}</BlogArticleTitle>
                  <BlogArticleText>{article.description}</BlogArticleText>
                  <BlogArticleDate>{article.date}</BlogArticleDate>
                </BlogArticleAbout>
              </BlogArticlePreview>
            ))}
          </BlogArticles>
        </BlogContent>
      </Container>
    </BlogBackground>
  )
}

export default Blog

const BlogBackground = styled.div`
  background-color: ${colors.backgroundColor};
`

const BlogContent = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  padding: 60px 0;

  
`

const BlogHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const BlogTitle = styled(BaseTitle)`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`

const BlogHeaderLink = styled(BaseLink)`

`

const BlogArticles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const BlogArticlePreview = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 350px;
  text-decoration: none;
  background-color: ${colors.textColorLight};
  color: ${colors.textColorDark};
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`

const BlogArticleImage = styled.div`
  width: 100%;
  padding: 20px 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;

    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.05);
    }
  }

  @media (min-width: 768px) {
    padding: 10px 50px;
  }

  @media (min-width: 1200px) {
    padding: 10px 80px;
  }
`

const BlogArticleAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 15px;
  padding: 20px;
`

const BlogArticleCategory = styled(BaseText)`
  font-size: 0.8rem;
  color: #2C90C9;
  background-color: ${colors.featuresColor2};
  padding: 2px 30px;
`

const BlogArticleDate = styled(BaseText)`
  font-size: 0.8rem;
`

const BlogArticleTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
`

const BlogArticleText = styled(BaseText)`

`

