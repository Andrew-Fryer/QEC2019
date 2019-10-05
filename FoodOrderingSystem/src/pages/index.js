import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Login from "../components/login"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Hello There and Welcome to Our Website!</h1>
      <div>
        <p></p>
      </div>
      <Login />
      <br/>
      <br/>
    </div>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/*<Image />*/}
    </div>
    <Link to="/FoodInput/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
