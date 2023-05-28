import SelectionClient from '@/components/SelectionClient'
import { candidates } from '@/types'

const getStudents = async (): Promise<any> => await fetch('http://localhost:3000/selection/participants', { cache: 'no-store' }).then(async res => await res.json())

const Selection = async (): Promise<any> => {
  const students: candidates[] = await getStudents()

  return (
    <SelectionClient students={students} />
  )
}

export default Selection
