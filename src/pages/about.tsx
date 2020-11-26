import React from "react"
import Layout from "../components/Layout"
import { navigate } from "gatsby"

export default function About(){
    return(
      <Layout headerTitle="About Page Header">
        <div>
          About Page!
          <br />
          <button onClick={() => {
            navigate("/")
          }}>Back To Home</button>
        </div>
      </Layout>
    )
}
