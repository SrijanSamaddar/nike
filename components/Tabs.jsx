import React from 'react'

const Tabs = ({tabs,clickhandler,close}) => {
  return (
    <div  onClick={clickhandler} >
      <img className='w-[3vw] max-sm:w-[20vw]' src={tabs.icon} alt="" />
      
    </div>
  )
}

export default Tabs
