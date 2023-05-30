'use client'

import { useState, useEffect } from 'react'

const Clock = (): JSX.Element => {
  const [hour, setHour] = useState<string>('')

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date()
      const hour = date.toLocaleString()
      setHour(hour)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className='sticky bottom-2 left-2 grid items-center w-44 h-max bg-slate-200 rounded-md'>
      <div className='flex justify-center items-center'>
        <p>
          Fecha y hora: {hour}
        </p>
      </div>
    </section>
  )
}

export default Clock
