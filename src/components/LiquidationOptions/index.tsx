'use client'

import { reportLiquidation } from '@/types'
import { useState } from 'react'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

const LiquidationOptions = ({ reports }: { reports: reportLiquidation[] }): JSX.Element => {
  pdfMake.vfs = pdfFonts.pdfMake.vfs

  const [dataToPdf, setDataToPdf] = useState<Array<Array<string | number>>>(reports.map((report) => ([report.id, report.name, report.project, report.hours])))

  const closeCalendar = (): void => {
    const updateAllCalendar = async (): Promise<any> => {
      try {
        const res = await fetch('http://localhost:3000/liquidation/updateAllCalendar', {
          method: 'PATCH'
        })
        const data = await res.json()
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }

    updateAllCalendar().catch(err => console.log(err))
  }

  const handleSendEmails = (): void => {
    const sendEmails = async (): Promise<any> => {
      try {
        const res = await fetch('http://localhost:3000/liquidation/sendEmails')
        const data = await res.json()
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }

    sendEmails().catch(err => console.log(err))
  }

  const handleCreatePdf = (): void => {
    const docDefinition = {
      content: [
        { text: `Liquidación viáticos periodo ${202301}`, style: 'header' },
        { text: 'Información de los registros:', style: 'subheader' },
        {
          table: {
            headerRows: 1,
            widths: ['auto', 'auto', 'auto', 'auto'],
            body: [
              ['Código', 'Nombre', 'Facultad - proyecto', 'Horas'],
              ...dataToPdf
            ]
          }
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10] // Margen inferior de 10 puntos
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 10, 0, 5] // Margen inferior de 5 puntos
        }
      }
    }
    const pdfDoc = pdfMake.createPdf(docDefinition)
    pdfDoc.download('viaticos.pdf')
    pdfDoc.open()
    closeCalendar()
  }

  return (
    <div className='w-full flex justify-center my-8'>
      <button
        onClick={handleCreatePdf}
        className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mr-8 border border-blue-500 hover:border-transparent rounded'
      >
        Generar pdf
      </button>
      <button
        onClick={handleSendEmails}
        className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
      >
        Enviar correos
      </button>
    </div>
  )
}

export default LiquidationOptions
