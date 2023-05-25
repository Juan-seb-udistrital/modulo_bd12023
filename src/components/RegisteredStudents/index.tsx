import { useState, useEffect } from 'react'

const provisionalStudents = [
  {
    name: 'Juan',
    lastName: 'Perez',
    birth_date: '1990-01-01',
    project: 'Proyecto 1',
    code: '123456789',
    document: 'CC',
    number_document: '123456789',
    email: 'juan@email.com',
    institutional_email: 'juanuniversidad.edu.co',
    phone: '1234567890',
    instrument: 'Guitarra'
  },
  {
    name: 'Pedro',
    lastName: 'Perez',
    birth_date: '1990-01-01',
    project: 'Proyecto 1',
    code: '123456789',
    document: 'CC',
    number_document: '123456789',
    email: 'angulo@gmail.com',
    institutional_email: 'juanuniversidad.edu.co',
    phone: '1234567890',
    instrument: 'Guitarra'
  }
]

const RegisteredStudents = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getStudents = async () => {
      try {
        const res = await fetch('http://localhost:3000/getUsuarios')
        const json = await res.json()

        console.log(json)

      } catch (error) {
        console.log(error)
      }
    }

    getStudents()

    getStudents()
  }, [])

  return (
    <section className='flex flex-wrap w-full sm:w-[450px] md:w-[750px] h-min px-6 py-4 m-auto shadow-md bg-slate-100 border border-slate-200 rounded-md'>
      {
        provisionalStudents.map((student, index) => (
          <article key={index} className='flex flex-col w-full sm:w-[400px] md:w-[350px] px-2 py-4'>
            <p className='font-semibold text-sm'>Estudiante:</p>
            <p className='text-sm'>{student.name} {student.lastName}</p>
            <p className='font-semibold text-sm'>Fecha de nacimiento:</p>
            <p className='text-sm'>{student.birth_date}</p>
            <p className='font-semibold text-sm'>Proyecto:</p>
            <p className='text-sm'>{student.project}</p>
            <p className='font-semibold text-sm'>Código:</p>
            <p className='text-sm'>{student.code}</p>
            <p className='font-semibold text-sm'>Tipo de documento:</p>
            <p className='text-sm'>{student.document}</p>
            <p className='font-semibold text-sm'>Número de documento:</p>
            <p className='text-sm'>{student.number_document}</p>
            <p className='font-semibold text-sm'>Correo electrónico:</p>
            <p className='text-sm'>{student.email}</p>
            <p className='font-semibold text-sm'>Correo institucional:</p>
            <p className='text-sm'>{student.institutional_email}</p>
            <p className='font-semibold text-sm'>Teléfono:</p>
            <p className='text-sm'>{student.phone}</p>
            <p className='font-semibold text-sm'>Instrumento:</p>
            <p className='text-sm'>{student.instrument}</p>
          </article>
        ))
      }
    </section>
  )
}

export default RegisteredStudents
