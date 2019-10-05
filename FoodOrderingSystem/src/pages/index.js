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
        <p>
          Do you have food in your fridge that you do not know how or what to cook with?! Well, this is the site for you! With this site,
          you can input all of the ingredients you have at home and we will show you a whole bunch of recipes fit just for you. You can 
          even tell us what you don't like and we'll be sure to take that into consideration with our recommendations. In order to use our
          site, you will need to login below:
        </p>
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
