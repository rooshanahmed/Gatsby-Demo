import React from "react"
import { Link, navigate } from "gatsby"
import Layout from "../components/Layout"


export default function Home() {
  return(
    <Layout headerTitle="Index Page Header">
      <div>
        Hello world!
        <br />
        <Link to='/about'>About</Link>
        <br />
        <button onClick={() => {
          navigate("/about")
        }}>About Page Button</button>
        <br />
        <button onClick={() => {
          navigate("/home")
        }}>Home Page</button>
      </div>
    </Layout>
  ) 
}
