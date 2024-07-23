import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { ADMIN, BUSINESS_INFO, INFORMATION } from '../../constants/routeNames'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/reduxhooks'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { toast } from 'react-toastify';
import { setEmailAndBusinessType } from '../../redux/slices/AppSlice';
import axios from 'axios';
import { BACKEND_URL } from '../../constants/BackendUrl';

interface MemberDetails {
  name: string;
  email: string;
  phone_number: string;
  member_no: string;
  is_admin: boolean;
}

const PersonalDetails:React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const member_details = useAppSelector((state) => state.app.member_details as MemberDetails);
  
  const [firstName,setFirstName] = useState<string>(member_details?.name.split(" ")[0] || '')
  const [lastName,setLastName] = useState<string>(member_details?.name.split(" ")[1] || '')
  const [email,setEmail] = useState<string>(member_details?.email || '')
  const [businessType,setBusinessType] = useState<string>("dealer")
  const [phone,setPhone] = useState<string>(member_details?.phone_number || '')
  const [image,setImage] = useState<File | null>(null)

  const [isLoading,setIsLoading] = useState<boolean>(false)

  // console.log(image)

  const handleSetData = async (e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();

    if(!email) return toast.error("Email address is required to continue")
      dispatch(setEmailAndBusinessType({email,business_type:businessType}))

    try {
      setIsLoading(true)
      const formData = new FormData();
      formData.append("profile-pic", image as File);
      formData.append("member_no",member_details.member_no)

      const URL = `${BACKEND_URL}/upload-profile-pic`

      const res = await axios.post(URL,formData,{
          headers:{
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          }
      })

      console.log(res)
      
      navigate(INFORMATION+"/"+BUSINESS_INFO)
      toast.success("Information updated, please proceed")
    } catch (error) {
      console.log(error)
      toast.error("An error occurred while uploading details, please re-try")
    }finally{
      setIsLoading(false)
    }
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
        <input readOnly value={firstName} onChange={(e)=>setFirstName(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="John"/>
      </div>    
      <div className="w-full md:w-1/2 px-3">    
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
          Last Name
        </label>
        <input readOnly value={lastName} onChange={(e)=>setLastName(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
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
        <input readOnly value={phone} onChange={e=>setPhone(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="phone" type="text" placeholder="0722000000"/>
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

      
<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload a profile image</label>
<input onChange={(f:any)=>setImage(f.target.files[0])} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>
<p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>



      <div className="flex items-center justify-center mt-6 w-full">
      <button
      onClick={handleSetData}  
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
        {isLoading ? "Processing...":"Continue"}
      </button>
    </div>
    </div>
  
    
</form>
    </div>
  )
}

export default PersonalDetails