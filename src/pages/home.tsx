import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"

export default function Home() {
    return(
      <Layout headerTitle="Home Page">
          <div>
              Home Page
          </div>
          <div>
              <Router basepath="/home">

              </Router>
          </div>
      </Layout>  
    )
}