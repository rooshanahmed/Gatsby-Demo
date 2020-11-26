import React from "react"
import { Link, navigate } from "gatsby"
import Layout from "../components/Layout"


export default function Home() {
  return(
    <Layout>
      <div>
        Hello world!
        <br />
        <Link to='/about'>About</Link>
        <br />
        <button onClick={() => {
          navigate("/about")
        }}>About Page Button</button>
      </div>
    </Layout>
  ) 
}
