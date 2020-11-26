import React from "react"
import { Link, navigate } from "gatsby"
import Header from "../components/Header"


export default function Home() {
  return(
    <div>
      <Header title="Index Page" />
      Hello world!
      <br />
      <Link to='/about'>About</Link>
      <br />
      <button onClick={() => {
        navigate("/about")
      }}>About Page Button</button>
    </div>
  ) 
}
