import React from 'react'
import './styles.css'

const ButtonAtom = ({label,type,handleClick}) => {
  return (
    <button className='btn' type={type} onClick={handleClick}>
      {label}
    </button>
  )
}

export default ButtonAtom
