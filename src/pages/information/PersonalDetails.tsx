import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { ADMIN, BUSINESS_INFO, INFORMATION } from '../../constants/routeNames'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/reduxhooks'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { toast } from 'react-toastify';
import { setEmailAndBusinessType } from '../../redux/slices/AppSlice';

const PersonalDetails:React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const {member_details} = useAppSelector(state=>state.app)
  
  const [firstName,setFirstName] = useState<string>(member_details?.name.split(" ")[0] || '')
  const [lastName,setLastName] = useState<string>(member_details?.name.split(" ")[1] || '')
  const [email,setEmail] = useState<string>(member_details?.email || '')
  const [businessType,setBusinessType] = useState<string>("dealer")
  const [phone,setPhone] = useState<string>(member_details?.phone_number || '')

  const handleSetData = (e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();

    if(!email) return toast.error("Email address is required to continue")
      dispatch(setEmailAndBusinessType({email,business_type:businessType}))
      navigate(INFORMATION+"/"+BUSINESS_INFO)
      toast.success("Information updated, please proceed")
  }

  if(member_details?.is_admin === true){
    return <Navigate to={INFORMATION+"/"+ADMIN} replace/>
  }



  return (
    <div className='bg-white mt-14'>
         <form className="w-full max-w-2xl shadow-lg pl-8 pr-8 pb-3 pt-3">
            <h3 className='text-center pb-14 font-bold'>PERSONAL DETAILS</h3>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
          First Name
        </label>
        <input readOnly value={firstName} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="John"/>
      </div>    
      <div className="w-full md:w-1/2 px-3">    
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
          Last Name
        </label>
        <input readOnly value={lastName} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="member-no">
          Member Number
        </label>
        <input readOnly value={member_details?.member_no} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="member-no" type="text" placeholder="Member no."/>
      </div>
      <div className="w-full md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
          Phone Number
        </label>
        <input readOnly value={phone} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="phone" type="text" placeholder="0722000000"/>
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
          Email Address
        </label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="email address"/>
        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
        <p className="text-gray-600 text-xs italic">Make sure the email is valid</p>
<div className=" -mx-1 mb-6 pt-6">
<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="dealer-type">
          What is your business type?
        </label>
        <Dropdown options={["dealer","service provider"]} onChange={(e)=>setBusinessType(e.value)} value={"Dealer"} placeholder="Select an option" />
</div>
      </div>


      <div className="flex items-center justify-center mt-6 w-full">
      <button
      onClick={handleSetData}  
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
        Continue
      </button>
    </div>
    </div>
  
    
</form>
    </div>
  )
}

export default PersonalDetails