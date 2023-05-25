'use client'

import Navbar from '@/components/navbar'
import { ThemeProvider } from 'next-themes'

const dashBoardLayout = ({ children }: {children: React.ReactNode}) => {
  return(
    <ThemeProvider>
      <Navbar />
      {children}
    </ThemeProvider>
  )
}

export default dashBoardLayout
