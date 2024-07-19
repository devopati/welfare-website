import React, { useCallback, useEffect, useState } from 'react'
import AdminTable from './AdminTable'
import AdminCard from '../../components/AdminCard'
import { BACKEND_URL } from '../../constants/BackendUrl'
import axios from 'axios'
import { toast } from 'react-toastify'

const MainPage:React.FC = () => {

  const [responseData,setResponseData] = useState<any>()
  const [loading,setLoading] = useState<boolean>(false)

  const getAllMembersDataAsync = useCallback(async(page:number=1,limit:number=20)=>{
    try {
      setLoading(true)
      const URL = `${BACKEND_URL}/get-all`
      const res = (await axios.get(URL,{
        params:{
          page:page,
          limit:limit
        }
      }))
      setResponseData(res.data)
      // console.log(res.data)
    } catch (error) {
      console.log(error)
      toast.error("An error occurred while fetching members")
    }finally{
      setLoading(false)
    }
  },[])
  console.log(loading)

  useEffect(()=>{
      getAllMembersDataAsync()
  },[])
  return (
    <div className='bg-white  shadow-lg pb-52 '>
      <div className="flex  p-8 justify-left pl-14 gap-14 ">
        <AdminCard text={responseData?.totalMembers} title='Total Members'/>
        <AdminCard text={responseData?.totalInfoSubmitted} title='Info submitted'/>
      </div>
      <AdminTable resData = {responseData}/>
    </div>
  )
}

export default MainPage