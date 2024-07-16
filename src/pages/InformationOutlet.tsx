import React from 'react'
import { Outlet } from 'react-router-dom'

const InformationOutlet:React.FC = () => {
  return (
    <div className='flex h-dvh items-center justify-center px-4'>
       <Outlet/>
        </div>
  )
}

export default InformationOutlet