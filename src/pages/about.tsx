import React from "react"
import Layout from "../components/Layout"
import { navigate } from "gatsby"
import styles from "./about.module.css"

export default function About(){
    return(
      <Layout headerTitle="About Page Header">
        <div>
          <h1 className={styles.myTitle}>About Page!</h1>
          <br />
          <button onClick={() => {
            navigate("/")
          }}>Back To Home</button>
        </div>
      </Layout>
    )
}
