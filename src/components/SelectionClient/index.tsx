'use client'

import { candidates } from '@/types'
import { useState } from 'react'
import SelectionTable from '../SelectionTable'
import { GridRowSelectionModel, GridRowId } from '@mui/x-data-grid'

const SelectionClient = ({ students }: { students: candidates[] }): JSX.Element => {
  const [studentsToShow, setStudentsToShow] = useState<candidates[]>([...students])
  const [showStudents, setShowStudents] = useState<boolean>(false)
  const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([])

  const filterStudents = (codes: GridRowId[]): void => {
    const studentsFiltered = studentsToShow.filter((student: candidates) => !codes.includes(student.id))
    setStudentsToShow(studentsFiltered)
  }

  const handleClick = (): void => {
    setShowStudents(true)
  }

  const handleInsertStudents = (): void => {
    rowSelectionModel.forEach((id: GridRowId) => {
      const insertStudent = async (id: GridRowId): Promise<any> => {
        try {
          const res = await fetch('http://localhost:3000/selection/insertParticipant', {
            method: 'POST',
            body: JSON.stringify({
              id
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          })

          const json: {
            inserted: boolean
          } = await res.json()

          console.log(json, id)
        } catch (err) {
          console.log(err)
        }
      }

      insertStudent(id).catch(err => console.log(err))
    })
    filterStudents(rowSelectionModel)
  }

  return (
    <section className='w-full my-8'>
      {
        showStudents && (
          <article className='flex justify-center'>
            <div className='w-4/5 min-w-[650px]'>
              <SelectionTable students={studentsToShow} setRowSelectionModel={setRowSelectionModel} />
            </div>
          </article>
        )
      }
      <div className='w-full flex justify-center my-8'>
        <button
          onClick={handleClick}
          className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mr-8 border border-blue-500 hover:border-transparent rounded'
        >
          Seleccionar
        </button>
        <button
          onClick={handleInsertStudents}
          className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
        >
          Seleccionar estudiantes
        </button>
      </div>
    </section>
  )
}

export default SelectionClient
