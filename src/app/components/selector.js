"use client"
import React from 'react'
import { useState } from 'react'

const Selectors = ({name}) => {
  const [isSelected, setIsSelected] = useState(false)

  const clickHandler = () => {
    console.log(isSelected)
    setIsSelected(!isSelected)
  }
  

  return (
    <div>

      {
      <button onClick={clickHandler} className={`rounded-full border-2 border-htnblack 
      ${(isSelected == true) 
        ? "bg-htnblack text-htnwhite" 
        : "bg-htnwhite text-htnblack" } 
        p-2 hover:bg-htnblack hover:text-htnwhite transition-all duration-300 m-1`}>
      {name}
      </button>
      }

    </div>
  )
}

export default Selectors