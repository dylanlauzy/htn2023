import React from 'react'

const Selectors = ({name}) => {
  return (
    <div>
    <button className="rounded-full border-2 border-htnblack p-2 hover:bg-htnblack hover:text-htnwhite transition-all duration-300 m-1">
        {name}
    </button>
    </div>
  )
}

export default Selectors