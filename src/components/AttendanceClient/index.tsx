'use client'

import { attendance, attendanceStudents, reportAttendance } from '@/types'
import { useState } from 'react'
import AttendanceTable from '../AttendanceTable'
import AttendanceReportTable from '../AttendanceReportTable'
import { GridRowSelectionModel, GridRowId } from '@mui/x-data-grid'

const AttendanceClient = ({ attendance }: { attendance: attendance }): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [data, setData] = useState<reportAttendance[]>([])
  const [studentsToShow, setStudentsToShow] = useState<attendanceStudents[]>([...attendance.students])
  const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([])

  const filterStudents = (codes: GridRowId[]): void => {
    const studentsFiltered = studentsToShow.filter((student: attendanceStudents) => !codes.includes(student.id))
    setStudentsToShow(studentsFiltered)
  }

  const handleInsertAttendance = (): void => {
    rowSelectionModel.forEach((id: GridRowId) => {
      const registerAttendance = async (id: GridRowId): Promise<any> => {
        try {
          const res = await fetch('http://localhost:3000/attendance/registerAttendance', {
            method: 'POST',
            body: JSON.stringify({
              id, id_calendar: attendance.activity.id
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

      registerAttendance(id).catch(err => console.log(err))
    })
    filterStudents(rowSelectionModel)
  }

  const handleReports = (): void => {
    setLoading(true)

    const getReports = async (): Promise<any> => {
      try {
        const res = await fetch('http://localhost:3000/attendance/reportsAttendance')
        const json: reportAttendance[] = await res.json()

        setData(json)
        setLoading(false)
      } catch (err) {
        console.log(err)
        setError(true)
        setLoading(false)
      }
    }

    getReports().catch(err => console.log(err))
  }

  return (
    <section className='w-full'>
      <p className='text-xs cursor-pointer' onClick={handleReports}>Obtener reportes de todas las asistencias</p>
      {
        loading && <p className='text-center text-xs'>Cargando...</p>
      }
      {
        data.length > 0 && (
          <div className='my-8 w-4/5 min-w-[650px] m-auto'>
            <AttendanceReportTable attendanceReports={data} />
          </div>
        )
      }
      {
        error && <p className='text-center text-xs'>Error al cargar los datos</p>
      }
      <h1 className='text-2xl font-bold text-center mb-4'>Asistencia {attendance.activity.name}</h1>
      <article className='flex justify-center'>
        <div className='w-4/5 min-w-[650px]'>
          <AttendanceTable students={studentsToShow} setRowSelectionModel={setRowSelectionModel} />
        </div>
      </article>
      <div className='w-full flex justify-center my-8'>
        <button
          onClick={handleInsertAttendance}
          className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mr-8 border border-blue-500 hover:border-transparent rounded'
        >
          Enviar asistencia
        </button>
      </div>
    </section>
  )
}

export default AttendanceClient
