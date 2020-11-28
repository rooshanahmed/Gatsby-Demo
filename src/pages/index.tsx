import React from "react"
import { Link, navigate } from "gatsby"
import Layout from "../components/Layout"
import { Button } from "@material-ui/core"

export default function Home() {
  return(
    <Layout headerTitle="Index Page Header">
      <div>
        <h1>Hello world!</h1>
        <br />
        <br />
        <Button variant="contained" color="primary" onClick={() => {navigate("about")}}>About Page</Button>
        <br /><br />
        <Button variant="contained" color="primary" onClick={() => {navigate("home")}}>Home Page</Button>
      </div>
    </Layout>
  ) 
}
