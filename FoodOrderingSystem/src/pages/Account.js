import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Input from "../components/input"
import NewLogin from "../components/create-account"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page three" />
    <NewLogin/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage
