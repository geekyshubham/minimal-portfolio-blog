import React from "react"
import Seo from "./../components/seo"
import Layout from "./../components/layout"
import About from "../components/about"

import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

const IndexPage = () => (
    <Layout> 
      <Seo title = "About me" />
      <About /> 
    </Layout>
  )

export default IndexPage

