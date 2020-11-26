import React from "react"
import { Link, navigate } from "gatsby"


export default function Home() {
  return(
    <div>
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
