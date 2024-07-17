import React from 'react'
import AdminTable from './AdminTable'
import AdminCard from '../../components/AdminCard'

const MainPage:React.FC = () => {
  return (
    <div className='bg-white  shadow-lg pb-52 '>
      <div className="flex  p-8 justify-left pl-14 gap-14 ">
        <AdminCard text={"287"} title='Total Members'/>
        <AdminCard text={"123"} title='Info submitted'/>
      </div>
      <AdminTable/>
    </div>
  )
}

export default MainPage