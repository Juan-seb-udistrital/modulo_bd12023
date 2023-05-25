import { dataReducer, initialStateData } from '../../reducers/dataReducer'
import { initialStateRegister, registerReducer } from '../../reducers/registerReducer'
import { useState, useReducer } from 'react'
import Register from '../Register'
import RegisterOtherData from '../RegisterOtherData'

const FormRegister = (): JSX.Element => {
  const [stateRegister, dispatchRegister] = useReducer(registerReducer, initialStateRegister)
  const [stateData, dispatchData] = useReducer(dataReducer, initialStateData)

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [errorInForm, setErrorInForm] = useState(null)

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()

    const values = { ...stateRegister.values, ...stateData.values }
    const errors = { ...stateRegister.errors, ...stateData.errors }
    //* Test that no element of the form is empty
    const isValueEmpty = Object.entries(values).some(element => {
      if (element[1].trim() === '') {
        return true
      }
      return false
    })

    //* The form has no errors
    if (Object.entries(errors).length !== 0) {
      setErrorInForm(true)
    }

    if (isValueEmpty) {
      setErrorInForm(true)
      console.log('Espacios vacios')
      return
    }

    setErrorInForm(null)
    console.log(values)
    try {
      const res = await fetch('http://127.0.0.1:8080/crear', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-type': 'application/json'
        }
      })
      const data = await res.json()

      setData(data)
    } catch (error) {
      console.log(error)
      setError(error)
    }
  }

  if (data) {
    return (
      <section className='w-full sm:w-[400px] h-14 px-6 py-4 m-auto shadow-md bg-slate-100 border border-slate-200 rounded-md'>
        <p className='w-full'>Tu registro ha finalizado exitosamente ✅</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className='w-full sm:w-[400px] h-14 px-6 py-4 m-auto shadow-md bg-slate-100 border border-slate-200 rounded-md'>
        <p className='w-full text-center'>Ocurrio un error en tu petición ❌</p>
      </section>
    )
  }

  return (
    <form
      className='flex flex-col w-full sm:w-[450px] md:w-[750px] h-min px-6 py-4 m-auto shadow-md bg-slate-100 border border-slate-200 rounded-md'
      onSubmit={handleSubmit}
    >
      <div className='flex flex-wrap'>
        <Register state={stateRegister} dispatch={dispatchRegister} />
        <RegisterOtherData state={stateData} dispatch={dispatchData} />
      </div>
      <input type='submit' value='Registrar estudiante' className='my-4 px-4 py-2 w-1/2 mx-auto bg-slate-500 rounded-md border border-gray-700 cursor-pointer' />
    </form>
  )
}

export default FormRegister
