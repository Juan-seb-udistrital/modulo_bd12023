import SelectionClient from '@/components/SelectionClient'
import { valuesStudent } from '@/types'

const getStudents = async (): Promise<any> => await fetch('https://jsonplaceholder.typicode.com/todos').then(async res => await res.json())

const Selection = async (): Promise<any> => {
  const students: valuesStudent[] = await getStudents()

  return (
    <SelectionClient students={students} />
  )
}

export default Selection
