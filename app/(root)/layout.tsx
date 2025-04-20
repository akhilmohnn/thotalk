import React, { ReactNode } from 'react'

const RootLayout = ({children} : { children : ReactNode }) => {
  return (
    <main>
        Navbar(in root)
        {children}
        Footer
    </main>
  )
}

export default RootLayout
