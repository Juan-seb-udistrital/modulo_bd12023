'use client'

import { Disclosure } from '@headlessui/react'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import database from '@/../public/database.png'
import Image from 'next/image'
import Link from 'next/link'
import ThemeChanger from './DarkSwitch'
import { useSelector, useDispatch } from 'react-redux'
import { changeValuePlanning, changeValueAttendance, changeValueLiquidation } from '@/redux/Features/navbar'
import { RootState } from '@/redux/store'

const Navbar = (): JSX.Element => {
  const { planning, attendance, liquidation } = useSelector((state: RootState) => state.navbar)
  const dispatch = useDispatch()
  const pathname = usePathname()

  useEffect(() => {
    const getValues = async (): Promise<any> => {
      try {
        const planning: Response = await fetch('http://localhost:3000/navbar/getPlanning')
        const attendance: Response = await fetch('http://localhost:3000/navbar/getAttendance')
        const liquidation: Response = await fetch('http://localhost:3000/navbar/getLiquidation')

        const jsonPlanning: {
          planning: boolean
        } = await planning.json()
        const jsonAttendance: {
          attendance: boolean
        } = await attendance.json()
        const jsonLiquidation: {
          liquidation: boolean
        } = await liquidation.json()
        console.log(jsonPlanning, jsonAttendance, jsonLiquidation)
        dispatch(changeValuePlanning(jsonPlanning.planning))
        dispatch(changeValueAttendance(jsonAttendance.attendance))
        dispatch(changeValueLiquidation(jsonLiquidation.liquidation))
      } catch (err) {
        console.log(err)
      }
    }

    const interval = setInterval(() => {
      getValues().catch(err => console.log(err))
    }, 600000)

    getValues().catch(err => console.log(err))

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='w-full border-b border-b-gray-400'>
      <nav className='container relative flex flex-wrap items-center justify-between p-4 mx-auto lg:justify-between xl:px-0'>
        {/* Logo  */}
        <Disclosure>
          {({ open }: { open: boolean }) => (
            <>
              <div className='flex flex-wrap items-center justify-between w-full lg:w-auto'>
                <Link href='/'>
                  <span className='flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100'>
                    <span>
                      <Image
                        src={database}
                        alt='N'
                        width='32'
                        height='32'
                        className='w-8'
                      />
                    </span>
                    <span>Proyecto BD</span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label='Toggle Menu'
                  className='px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700'
                >
                  <svg
                    className='w-6 h-6 fill-current'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                  >
                    {open && (
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
                      />
                    )}
                    {!open && (
                      <path
                        fillRule='evenodd'
                        d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className='flex flex-wrap w-full my-5 lg:hidden'>
                  <>
                    {pathname !== '/' &&
                      (
                        <Link href='dashboard/calendar' className={`w-full px-4 py-2 -ml-4 ${planning ? '' : 'pointer-events-none'} text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none`}>
                          Calendario
                        </Link>
                      )}
                    {pathname !== '/' &&
                      (
                        <Link href='dashboard/selection' className={`w-full px-4 py-2 -ml-4 ${!planning ? '' : 'pointer-events-none'} text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none`}>
                          Selección
                        </Link>
                      )}
                    {pathname !== '/' &&
                      (
                        <Link href='dashboard/attendance' className={`w-full px-4 py-2 -ml-4 ${attendance ? '' : 'pointer-events-none'} text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none`}>
                          Asistencia
                        </Link>
                      )}
                    {pathname !== '/' &&
                      (
                        <Link href='dashboard/liquidation' className={`w-full px-4 py-2 -ml-4 ${liquidation ? '' : 'pointer-events-none'} text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none`}>
                          Liquidación
                        </Link>
                      )}
                    {
                      pathname !== '/' &&
                        (
                          <Link href='/' className='w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5'>
                            Log out
                          </Link>
                        )

                    }
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className='hidden text-center lg:flex lg:items-center'>
          <ul className='items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex'>
            {pathname !== '/' &&
            (
              <Link href='dashboard/calendar' className={`w-full px-4 py-2 -ml-4 ${planning ? '' : 'pointer-events-none'} text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none`}>
                Calendario
              </Link>
            )}
            {pathname !== '/' &&
            (
              <Link href='dashboard/selection' className={`w-full px-4 py-2 -ml-4 ${!planning ? '' : 'pointer-events-none'} text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none`}>
                Selección
              </Link>
            )}
            {pathname !== '/' &&
            (
              <Link href='dashboard/attendance' className={`w-full px-4 py-2 -ml-4 ${attendance ? '' : 'pointer-events-none'} text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none`}>
                Asistencia
              </Link>
            )}
            {pathname !== '/' &&
            (
              <Link href='dashboard/liquidation' className={`w-full px-4 py-2 -ml-4 ${liquidation ? '' : 'pointer-events-none'} text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none`}>
                Liquidación
              </Link>
            )}
          </ul>
        </div>

        <div className='hidden mr-3 space-x-4 lg:flex nav__item'>
          {
            pathname !== '/' &&
              (
                <Link href='/' className='w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5'>
                  Log out
                </Link>
              )

          }

          <ThemeChanger />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
