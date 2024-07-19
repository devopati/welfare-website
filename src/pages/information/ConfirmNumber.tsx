import React, { useState } from 'react'
import { useNavigate, } from 'react-router-dom'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { INFORMATION, VERIFICATION } from '../../constants/routeNames'
import { toast } from 'react-toastify'
import { BACKEND_URL } from '../../constants/BackendUrl'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/reduxhooks'
import {  setPhoneNumber } from '../../redux/slices/AppSlice'

const ConfirmNumber = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const [phone,setPhone] = useState<string>("")
    // const [isError,setIsError] = useState<boolean>(false)
    const [isLoading,setIsLoading] = useState<Boolean>(false)

    const {phone_number,member_number} = useAppSelector(state=>state.app)

    const getOtpAsync = async(e:React.MouseEvent<HTMLButtonElement>)=>{
      e.preventDefault()
      if(!phone) return toast.error("Provide a phone number that is shown to continue")
      if(phone !== phone_number){
        // setIsError(true)
        toast.error("Phone number mismatch, contact us for any support")
        return
      }
      try {
        setIsLoading(true)
        const URL = `${BACKEND_URL}/get-otp`
        const res = await axios.post(URL,{member_number})
        dispatch(setPhoneNumber(res.data?.phone_number))

        navigate(INFORMATION+"/"+VERIFICATION)
        toast.success("OTP sent to your number, please confirm to continue")
      } catch (error:any) {
        console.log(error)
        toast.error(error?.response?.data?.msg || "An error occurred while sending OTP, please try again.");
        
      }finally{
        setIsLoading(false)
      }
    }

    //whatsapp config
    const phoneNumber = '0202646600'; 
    const message = 'Hello, please help with verification of my number'; 
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="flex items-center justify-center h-dvh">
    <div className="w-full max-w-xl">
<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div className="mb-4">
    <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="phone">
      Phone number:
    </label>
    <h5 className='text-sm font-bold mb-3'>Please provide this number {phone_number?.slice(0,2)+"*******"+phone_number?.substring(10,8)} to continue</h5>
    <input value={phone} onChange={(e)=>setPhone(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="phone number   "/>
    <p className="text-red-500 text-xs italic mt-1">Phone Number is required</p>
  </div>
  <div className="flex items-center justify-center">
    <button onClick={getOtpAsync} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
      {isLoading ? "Sending..." : "Continue"}
    </button>
  </div>

   <div className=' mt-8'>
   <h3 className='text-center font-bold text-slate-500'><small>Need help? </small>Contact Us:</h3>
  <div className="flex items-center justify-center">

  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
    <div className='flex flex-col items-center hover:bg-slate-300 hover:rounded-sm p-4 cursor-pointer'>
        <IoLogoWhatsapp className='text-green-700' size={22}  />
        <h4 className='text-[12px] font-bold text-slate-400 mt-2'>Chat with us</h4>
    </div>
    </a>

    <a href={`tel:${phoneNumber}`}>
    <div className='flex flex-col items-center hover:bg-slate-300 hover:rounded-sm p-4 cursor-pointer'>
        <FaSquarePhoneFlip className='text-blue-700'  size={24} />
        <h4 className='text-[12px] font-bold text-slate-400 mt-2'>Talk to us</h4>
    </div>
    </a>
  </div>
   </div>
</form>
</div>
</div>
  )
}

export default ConfirmNumber