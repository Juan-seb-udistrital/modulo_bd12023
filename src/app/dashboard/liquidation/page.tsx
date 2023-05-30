import { reportLiquidation } from '@/types'
import LiquidationTable from '@/components/LiquidationTable'
import LiquidationOptions from '@/components/LiquidationOptions'

const fetcher = async (): Promise<any> => await fetch('http://localhost:3000/liquidation/reports', { cache: 'no-store' }).then(async res => await res.json())

const Liquidation = async (): Promise<any> => {
  const reports: reportLiquidation[] = await fetcher()

  return (
    <section className='w-full flex flex-col justify-center my-8'>
      <LiquidationTable reports={reports} />
      <LiquidationOptions reports={reports} />
    </section>
  )
}

export default Liquidation
