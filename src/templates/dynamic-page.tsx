import React from "react"

export default ({ pageContext }) => {
    return(
        <div>
            <h1>Hello Dynamic Page from {pageContext.name}</h1>
            <h1>This page is create dynamically at build time</h1>
        </div>
    )
}