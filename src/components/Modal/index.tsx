import React from 'react'
import './Modal.css'

const Modal = ({ children, isOpen, closeModal }: { children: React.ReactNode, isOpen: boolean, closeModal: () => void }): JSX.Element => {
  const handleModalContainerClick = (e: React.SyntheticEvent): void => { e.stopPropagation() }

  return (
    <article className={`modal ${isOpen ? 'is-open' : ''}`} onClick={closeModal}>
      <div className='modal-container' onClick={handleModalContainerClick}>
        <button className='modal-close' onClick={closeModal}>X</button>
        {children}
      </div>
    </article>
  )
}

export default Modal
