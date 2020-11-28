import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import MyClient from "../components/myClient"
import Client from "../components/client"
import { Link } from "gatsby"

export default function Home() {
    return(
      <Layout headerTitle="Home Page">
          <div>
              Home Page
              <br />
              <Link to="/home/client1">Client 1</Link>
              <br />
              <Link to="/home/client2">Client 2</Link>
          </div>
          <div>
              <Router basepath="home">
                <MyClient path="client1" />
                <Client path="client2" />
              </Router>
          </div>
      </Layout>  
    )
}