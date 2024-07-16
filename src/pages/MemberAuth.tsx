import React from 'react'
import { useNavigate,NavigateProps } from 'react-router-dom'
import { INFORMATION, PERSONAL_DETAILS } from '../constants/routeNames'

const MemberAuth:React.FC = () => {
    const navigate = useNavigate()
  return (
  <div className="flex items-center justify-center h-dvh">
      <div className="w-full max-w-xl">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="username">
        Membership Number:
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Member No."/>
      <p className="text-red-500 text-xs italic">Member no. is required</p>
    </div>
    <div className="flex items-center justify-center">
      <button onClick={(e)=> {
        e.preventDefault()
        navigate(INFORMATION+"/"+PERSONAL_DETAILS)
      }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Continue
      </button>
    </div>
  </form>
  {/* <p className="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p> */}
</div>
  </div>
  )
}

export default MemberAuth