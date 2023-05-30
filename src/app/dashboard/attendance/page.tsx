import AttendanceClient from '@/components/AttendanceClient'
import { attendance } from '@/types'

const fetcher = async (): Promise<any> => await fetch('http://localhost:3000/attendance/todayAttendance', { cache: 'no-store' }).then(async res => await res.json())

const Attendance = async (): Promise<any> => {
  const attendance: attendance = await fetcher()

  return (<AttendanceClient attendance={attendance} />)
}

export default Attendance
