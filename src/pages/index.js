import React from "react"
import Seo from "./../components/seo"
import Layout from "./../components/layout"
import About from "../components/about"
import { Helmet } from "react-helmet"

const IndexPage = () => (
    <Layout> 
      <Helmet>  
      <meta name="msvalidate.01" content="44E73AAC2392D270C238935BB9028F82" />
      </Helmet>
      <Seo title = "About me" />
      <About /> 
    </Layout>
  )

export default IndexPage
