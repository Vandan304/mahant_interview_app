import React, { ReactNode } from 'react'
import { Toaster } from 'sonner'

const RootLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div >
      {children}
     
    </div>
  )
}

export default RootLayout
