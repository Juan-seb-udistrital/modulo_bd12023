import React from 'react'

const Container = ({ children, className }: { className: string, children: React.ReactNode }): JSX.Element => {
  return (
    <div
      className={`container p-8 mx-auto xl:px-0 ${
        className !== null ? className : ''
      }`}
    >
      {children}
    </div>
  )
}

export default Container
