"use client"
import React from 'react'
import { useState } from 'react'
import ChoiceButtons from './choiceButtons'


const TwoChoiceSelector = ({pair}) => {
const [selected, setSelected] = useState(false)

const clickHandler = () => {
    
}

  return (
    <div>
        <button className='rounded-full border-2 border-htnblack' onClick={btn1Handler}>{pair[0]}</button>
        <button className='rounded-full border-2 border-htnblack' onClick={btn2Handler}>{pair[1]}</button>
    </div>
  )
}


export default TwoChoiceSelector