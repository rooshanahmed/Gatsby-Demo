import React, { ReactNode } from "react"
import Header from "./Header"

type LayoutProps = {
  children: ReactNode,
  headerTitle: ReactNode
}

export default function Layout({ children, headerTitle }: LayoutProps) {
  return (
    <div>
      <Header title={headerTitle} />
      <div>{children}</div>
    </div>
  )
}
