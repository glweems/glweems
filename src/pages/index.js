import React from 'react'
import Layout from '@/layout'
import SEO from '@/seo'
import Theme from 'src/Theme'
import { graphql } from 'gatsby'
import styled from 'styled-components'

const ContactMe = () => (
  <form name="contact" netlify>
    <p>Give me a shout</p>
    <input id="name" type="name" name="name" placeholder="name" />
    <input id="email" type="email" name="email" placeholder="email" />
    <textarea
      type="text"
      name="message"
      id="message"
      placeholder="message..."
    />
    <p>
      <button type="submit" className="submit">
        Send
      </button>
    </p>
  </form>
)

const StyledCard = styled.div`
  display: flex;
  height: 5rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  margin-bottom: 1rem;
  width: 100%;
  .body {
    background: ${Theme.colors.light};
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0.5rem;
    overflow: hidden;
  }
  .title {
    font-family: ${Theme.headingFont};
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    color: rgba(0, 0, 0, 0.84);
    display: -webkit-box;
    fill: rgba(0, 0, 0, 0.84);
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    margin: 0;
    max-height: 84px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .subtitle {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    color: rgba(0, 0, 0, 0.54);
    display: -webkit-box;
    fill: rgba(0, 0, 0, 0.54);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 20px;
    margin-top: 2px;
    max-height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    transform: translateY(1.52px);
  }
`
const ImgDiv = styled.div`
  background: blue;
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-left: 0.5rem;
  overflow: hidden;
  /* img {
  max-width: 100%;
} */
`
// const ImgDiv = styled.div`
//   max-height: 90%;
//   max-width: 90%;
//   overflow: hidden;
// `

const Card = ({ title, subtitle, img }) => {
  const imgStyle = {
    backgroundImage: `url(${img})`,
    height: '100%',
    width: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: '3px',
  }

  return (
    <StyledCard>
      <div className="body">
        <h2 className="title">{title}</h2>
        <div className="subtitle">{subtitle}</div>
      </div>
      {!img || <ImgDiv style={imgStyle} />}
    </StyledCard>
  )
}

export default ({ data }) => {
  // const Repos = data.github.viewer.pinnedRepositories.edges.map((edge, i) => (
  //   <p key={i}>repo</p>
  // ))
  const {
    github: {
      viewer: {
        pinnedRepositories: { edges: repos },
      },
    },
    allBehanceProjects: { edges: designs },
    allMarkdownRemark: { edges: tuts },
  } = data

  const PinnedRepos = () =>
    repos.map((repo, i) => {
      const { name, description } = repo.node
      return <Card key={i} title={name} subtitle={description} img="" />
    })
  const BehanceProjects = () =>
    designs.map((design, i) => {
      const {
        name,
        description,
        covers: { size_808: img },
      } = design.node
      return <Card key={i} title={name} subtitle={description} img={img} />
    })

  const MyTuts = () =>
    tuts.map((tut, i) => {
      const {
        frontmatter: { title, thumbnail: img },
      } = tut.node
      return (
        <Card
          key={i}
          title={title}
          // subtitle={description}
          img={img}
        />
      )
    })

  return (
    <Layout>
      <SEO title="Home" keywords={['glweems', 'developer', 'designer']} />
      {/* <Repos /> */}
      <PinnedRepos />
      <BehanceProjects />
      <MyTuts />
      <p>{JSON.stringify(repos)}</p>
      <p>{JSON.stringify(designs)}</p>
    </Layout>
  )
}

export const indexQuery = graphql`
  query {
    github {
      viewer {
        pinnedRepositories(last: 4) {
          edges {
            node {
              name
              description
              url
            }
          }
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt
          timeToRead
          frontmatter {
            title
            path
            date
            thumbnail
          }
        }
      }
    }
    allBehanceProjects(limit: 3) {
      edges {
        node {
          name
          description
          covers {
            size_808
          }
        }
      }
    }
  }
`
