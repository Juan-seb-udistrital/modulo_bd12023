'use client'

import { DataGrid, GridRowSelectionModel, GridColDef } from '@mui/x-data-grid'
import { attendanceStudents } from '@/types'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Codigo', width: 100 },
  { field: 'name', headerName: 'Nombre', width: 300 }
]

const AttendanceTable = ({ students, setRowSelectionModel }: { students: attendanceStudents[], setRowSelectionModel: React.Dispatch<React.SetStateAction<GridRowSelectionModel>> }): JSX.Element => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={students}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 }
          }
        }}
        pageSizeOptions={[5, 10]}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          console.log(newRowSelectionModel)
          setRowSelectionModel(newRowSelectionModel)
        }}
        checkboxSelection
      />
    </div>
  )
}

export default AttendanceTable
