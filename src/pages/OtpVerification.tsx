import React, { useState } from 'react'
import { INFORMATION, PERSONAL_DETAILS } from '../constants/routeNames'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux/hooks/reduxhooks'
import { BACKEND_URL } from '../constants/BackendUrl'
import axios from 'axios'
import { toast } from 'react-toastify'
import { setMemberDetails } from '../redux/slices/AppSlice'

const OtpVerification:React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const {phone_number,member_number} = useAppSelector(state=>state.app) 

    const [otp,setOtp] = useState<string>("")
    const [isLoading,setIsLoading] = useState<Boolean>(false)

    const verifyOtpAsync = async (e:React.MouseEvent<HTMLButtonElement>)=>{
      e.preventDefault()
      if(!otp || otp.length <3) return toast.error("Enter a valid OTP to continue")
    try {
      setIsLoading(true)
      const URL = `${BACKEND_URL}/verify-otp`
      const res = await axios.post(URL,{otp,member_number})
      dispatch(setMemberDetails(res.data?.member_details))

      toast.success("OTP verified successfuly, proceed")
      navigate(INFORMATION+"/"+PERSONAL_DETAILS)
    } catch (error:any) {
      console.log(error)
      toast.error(error?.response?.data?.msg || "An error occurred while sending OTP, please try again.");
    }finally{
      setIsLoading(false)
    }
    }
  
  return (
    <div className="flex items-center justify-center h-dvh">
      <div className="w-full max-w-xl">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-1xl font-bold mb-2" htmlFor="otp">
        OTP:
        
      </label>
        <small>Enter the otp sent to you phone number:</small>
        <h5 className='text-sm font-bold'>{"07*******"+phone_number.substring(10,8)}</h5>
      <input value={otp} onChange={(e)=>setOtp(e.target.value)} className="shadow appearance-none border text-center font-bold rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="otp" type="text" placeholder="otp"/>
      <p className="text-red-500 text-xs italic">Otp is required</p>
    </div>
    <div className="flex items-center justify-center">
      <button onClick={verifyOtpAsync} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        {isLoading ? "Verifying..." : "Verify"}
      </button>
    </div>
  </form>
</div>
  </div>
  )
}

export default OtpVerification