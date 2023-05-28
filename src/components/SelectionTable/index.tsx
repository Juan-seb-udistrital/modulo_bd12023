'use client'

import { DataGrid, GridRowSelectionModel, GridColDef } from '@mui/x-data-grid'
import { candidates } from '@/types'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Codigo', width: 100 },
  { field: 'first_name', headerName: 'Nombre', width: 150 },
  { field: 'last_name', headerName: 'Apellido', width: 150 },
  {
    field: 'project',
    headerName: 'Proyecto',
    width: 200
  },
  {
    field: 'degree',
    headerName: 'Carrera',
    width: 200
  },
  {
    field: 'instrument',
    headerName: 'Instrumento',
    width: 200
  },
  {
    field: 'rating',
    headerName: 'Calificación',
    width: 50,
    type: 'number'
  }
]

const SelectionTable = ({ students, setRowSelectionModel }: { students: candidates[], setRowSelectionModel: React.Dispatch<React.SetStateAction<GridRowSelectionModel>> }): JSX.Element => {
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

export default SelectionTable
