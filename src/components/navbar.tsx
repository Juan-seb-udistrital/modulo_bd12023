'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import ThemeChanger from './DarkSwitch'
import Image from 'next/image'
import { Disclosure } from '@headlessui/react'

const Navbar = (): JSX.Element => {
  const pathname = usePathname()
  console.log(pathname)

  const navigation = [
    {
      label: 'Calendario',
      href: '/dashboard/calendar'
    },
    {
      label: 'Selección',
      href: '/dashboard/selection'
    },
    {
      label: 'Asistencia',
      href: '/dashboard/attendance'
    },
    {
      label: 'Reportes',
      href: '/dashboard/reports'
    }
  ]

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
                        src='/img/logo.svg'
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
                        navigation.map(({ label, href }, index) => (
                          <Link key={index} href={href} className='w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none'>
                            {label}
                          </Link>
                        )))}
                    {
                      pathname !== '/'  &&
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
            {navigation.map(({ label, href }, index) => (
              <li className='mr-3 nav__item' key={index}>
                <Link href={href} className='inline-block px-4 py-2 text-lg font-normal  no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800'>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='hidden mr-3 space-x-4 lg:flex nav__item'>
          <Link href='/' className='px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5'>
            Get Started
          </Link>

          <ThemeChanger />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
