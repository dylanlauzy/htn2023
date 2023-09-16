import React from 'react'
import Selector from './selector'

const Selectors = ({list}) => {
  return (
    <div className='flex flex-wrap'>
        {
            list.map(((item, key) => {
                return(
                    <Selector name={item}></Selector>
                )
            }))
        }
    </div>
  )
}

export default Selectors