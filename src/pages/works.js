import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {Tag, ContainerLayout, WorkPost, Category, Intro, SubTitle, Title, Text} from "../components/common"

const WorkIndex = ({ data }) => {
  const works = data.allMarkdownRemark.edges

  return (
    <>
      <Layout> 
        <Seo title = "Showcases" / >
        <Intro>
          <ContainerLayout>

            <SubTitle className="work-title-text">
              Selected Work
            </SubTitle>

            <ContainerLayout className="wrapper">
              {works.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
                return (
                  <WorkPost key={node.fields.slug}>
                    <div className="media">
                      <div className="image-wrapper">
                        <Link to={node.fields.slug}>
                          <GatsbyImage image={getImage(node.frontmatter.image)} alt={node.frontmatter.title} />
                        </Link>
                      </div>
                    </div>
                    <div className="content">
                      <header>
                        <Category>{node.frontmatter.category}</Category>
                        <Title>
                          <Link className="text-primary lined-link" style={{ boxShadow: `none` }} to={node.fields.slug}>
                            {title}
                          </Link>
                        </Title>
                      </header>
                        <Text
                          dangerouslySetInnerHTML={{
                            __html: node.frontmatter.description || node.excerpt,
                          }}
                        />
                        <div>
                          {node.frontmatter.tags.map((tag, index) => (<Tag key={index}>{tag}</Tag>))}
                        </div>
                    </div>
                  </WorkPost>
                )
              })}
            </ContainerLayout>
          </ContainerLayout>
        </Intro>
      </Layout>
    </>
  )
}

export default WorkIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(works)/"}}, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            image {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            tags
            category
            description
          }
        }
      }
    }
  }
`