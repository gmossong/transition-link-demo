import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import posed from "react-pose"
import { TransitionState } from "gatsby-plugin-transition-link"

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
})

export default ({ data }) => (
  <Layout>
    <TransitionState>
      {({ transitionStatus }) => {
        return (
          <main>
            <Header
              headerText="About Page"
              headerBlurb="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam."
            />
            <Box
              className="box"
              pose={
                ["entering", "entered"].includes(transitionStatus)
                  ? "visible"
                  : "hidden"
              }
            >
              <Img fluid={data.file.childImageSharp.fluid} />
            </Box>
          </main>
        )
      }}
    </TransitionState>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 650, quality: 60) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
