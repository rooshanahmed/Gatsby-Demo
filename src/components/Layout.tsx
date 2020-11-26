import React, { ReactNode } from "react"
import Header from "./Header"

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header title="My Application" />
      <div>{children}</div>
    </div>
  )
}