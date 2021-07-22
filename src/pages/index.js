import React from "react"
import Seo from "./../components/seo"
import Layout from "./../components/layout"
import About from "../components/about"

const IndexPage = () => (
    <Layout> 
      <Seo title = "About me" / >
      <About /> 
    </Layout>
  )

export default IndexPage
