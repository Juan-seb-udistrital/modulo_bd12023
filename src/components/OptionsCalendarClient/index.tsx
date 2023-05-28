'use client'

import { useDispatch } from 'react-redux'
import { changeValuePlanning } from '@/redux/Features/navbar'

const OptionsCalendarClient = (): JSX.Element => {
  const dispatch = useDispatch()

  const handleClick = (): void => {
    const putNewState = async (): Promise<any> => {
      try {
        const res = await fetch('http://localhost:3000/calendar/inactiveParticipation', {
          method: 'PATCH',
          body: JSON.stringify({
            state: 'Inactivo'
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })

        const json: {
          updated: boolean
        } = await res.json()

        const changePlanning: boolean = !json.updated

        dispatch(changeValuePlanning(changePlanning))
      } catch (err) {
        console.log(err)
      }
    }

    putNewState().catch(err => console.log(err))
  }

  return (
    <div className='w-full flex justify-center mt-8'>
      <button
        className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mr-4 border border-blue-500 hover:border-transparent rounded'
      >
        Crear calendario
      </button>
      <button
        onClick={handleClick}
        className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
      >
        Terminar calendario
      </button>
    </div>
  )
}

export default OptionsCalendarClient
