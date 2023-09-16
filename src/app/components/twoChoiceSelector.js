"use client"
import React from 'react'
import { useState } from 'react'


const TwoChoiceSelector = ({pair, preference}) => {
const [selected, setSelected] = useState(true)

const btn1Handler = () => {
    setSelected(true)
    preference(pair[0])
}

const btn2Handler = () => {
  setSelected(false)
  preference(pair[1])
}

  return (
    <div>
        <button className={`rounded-full border-2 border-htnblack 
      ${(selected)
          ? "bg-htnblack text-htnwhite"
          : "bg-htnwhite text-htnblack"} 
        p-2 hover:bg-htnblack hover:text-htnwhite transition-all duration-250 m-1`} onClick={btn1Handler}>{pair[0]}</button>
       
        <button className={`rounded-full border-2 border-htnblack 
      ${(!selected)
          ? "bg-htnblack text-htnwhite"
          : "bg-htnwhite text-htnblack"} 
        p-2 hover:bg-htnblack hover:text-htnwhite transition-all duration-250 m-1`} onClick={btn2Handler}>{pair[1]}</button>
        <button className=''></button>
    </div>

  )
}


export default TwoChoiceSelector