'use client'

import Navbar from '@/components/navbar'
import { ThemeProvider } from 'next-themes'
import Clock from '@/components/Clock'
import ProviderRedux from '@/redux/Provider'

const dashBoardLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <ThemeProvider>
      <ProviderRedux>
        <Navbar />
        {children}
        <Clock />
      </ProviderRedux>
    </ThemeProvider>
  )
}

export default dashBoardLayout
