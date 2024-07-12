import React from 'react'
import { Outlet } from 'react-router-dom'

const InformationOutlet = () => {
  return (
    <div className='flex h-dvh items-center justify-center'>
       <Outlet/>
        </div>
  )
}

export default InformationOutlet