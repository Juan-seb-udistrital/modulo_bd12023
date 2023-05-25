'use client'

import { valuesStudent } from '@/types'
import { useState } from 'react'
import TableSelection from '../TableSelection'

const SelectionClient = ({ students }: { students: valuesStudent[] }): JSX.Element => {
  const [showStudents, setShowStudents] = useState<boolean>(false)

  const handleClick = (): void => {
    setShowStudents(true)
  }

  return (
    <section className='w-full my-8'>
      {
        showStudents && (
          <article className='flex justify-center'>
            <div className='w-4/5 min-w-[650px]'>
              <TableSelection students={students} />
            </div>
          </article>
        )
      }
      <div className='w-full flex justify-center mt-4'>
        <button
          onClick={handleClick}
          className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
        >
          Seleccionar
        </button>
      </div>
    </section>
  )
}

export default SelectionClient
