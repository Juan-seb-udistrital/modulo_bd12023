'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import InputText from '@/components/InputText'
import Navbar from '@/components/navbar'
import { ThemeProvider } from 'next-themes'

export default function Home (): JSX.Element {
  const router = useRouter()
  const [email, setEmail] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
  }

  const handleClick = (): void => {
    router.push('/dashboard')
    localStorage.setItem('email', email)
  }

  return (
    <ThemeProvider>
      <Navbar />
      <main className='grid items-center w-full h-screen'>
      <div className='flex flex-column '>
        <InputText span='Email' name='email' value={email} handleChange={handleChange} />
      </div>
      <button
        onClick={handleClick}
        className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
      >
        Log in
      </button>
      </main>
    </ThemeProvider>
    
  )
}
