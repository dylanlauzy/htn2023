"use client"
import React from 'react'
import Selector from './selector'
import { useState} from 'react'

const StoryBuilder = ({list}) => {
  const [selected, setSelected] = useState(new Set([]));
  const [subject, setSubject] = useState("")

  const clickHandler = () => {
    console.log(selected)
    console.log(subject)
  }

  return (
    <>
    <input type="text" placeholder="Add descriptors" onChange={((e) => setSubject(e.target.value))} className=" w-full p-2 m-1 border-2 rounded-full  border-htnblack border-md"></input>

      <div>    
        <div className='flex flex-wrap'>
        {
          list.map(((item, key) => {
              return(
                  <Selector name={item} selected={selected} setSelected={setSelected}></Selector>
              )
          }))
        } 

        </div>
        <button onClick={clickHandler} className="rounded-full w-full p-2 bg-htnblack border-2 border-htnblack m-1 text-htnwhite mt-8">Next</button>
      </div>
    </>

  )
}

export default StoryBuilder