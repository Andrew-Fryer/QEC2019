import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Input from "../components/input"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>

    <Input />
    <Input />
    <Input />
    <button>Add Additional Ingridients</button>
    <button>Request Recipe</button>
    

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
