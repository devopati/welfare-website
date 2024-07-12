import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BUSINESS_INFO, INFORMATION } from '../../constants/routeNames'

const PersonalDetails = () => {
  const navigate = useNavigate()
  return (
    <div>
         <form className="w-full max-w-2xl shadow-lg p-14">
            <h3 className='text-center pb-14 font-bold'>PERSONAL DETAILS</h3>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
          First Name
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="John"/>
        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>    
      <div className="w-full md:w-1/2 px-3">    
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
          Last Name
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="member-no">
          Member Number
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="member-no" type="text" placeholder="Member no."/>
        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>
      <div className="w-full md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
          Phone Number
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="phone" type="text" placeholder="0722000000"/>
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
          Email Address
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="email address"/>
        <p className="text-gray-600 text-xs italic">Make sure the email is valid</p>
      </div>

      <div className="flex items-center justify-center mt-14 w-full">
      <button
      onClick={(e)=>{
        e.preventDefault();
        navigate(INFORMATION+"/"+BUSINESS_INFO)
      }}  
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Continue
      </button>
    </div>
    </div>
  
    
</form>
    </div>
  )
}

export default PersonalDetails