import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAppSelector } from '../redux/hooks/reduxhooks'

const InformationOutlet:React.FC = () => {

  const {member_number} = useAppSelector(state=>state.app)

  if(!member_number){
    return <Navigate to={"/"} replace/>
  }
  return (
    <div className='flex  items-center justify-center px-4'>
       <Outlet/>
        </div>
  )
}

export default InformationOutlet