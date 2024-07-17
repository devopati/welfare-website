import React, { useState } from 'react'
import { useNavigate, } from 'react-router-dom'
import { INFORMATION, VERIFICATION } from '../constants/routeNames'
import { toast } from 'react-toastify'
import { BACKEND_URL } from '../constants/BackendUrl'
import axios from 'axios'
import { useAppDispatch } from '../redux/hooks/reduxhooks'
import { setMemberNumber, setPhoneNumber } from '../redux/slices/AppSlice'

const MemberAuth:React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const [memberNo,setMemberNo] = useState<string>("")
    const [isLoading,setIsLoading] = useState<Boolean>(false)

    const getOtpAsync = async(e:React.MouseEvent<HTMLButtonElement>)=>{
      e.preventDefault()
      if(!memberNo) return toast.error("A member number is required to continue")
      try {
        setIsLoading(true)
        const URL = `${BACKEND_URL}/get-otp`
        const res = await axios.post(URL,{member_number:memberNo})
        dispatch(setPhoneNumber(res.data?.phone_number))
        dispatch(setMemberNumber(memberNo))

        navigate(INFORMATION+"/"+VERIFICATION)
        toast.success("OTP sent to your number, please confirm to continue")
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
      <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="member-no">
        Membership Number:
      </label>
      <input value={memberNo} onChange={(e)=>setMemberNo(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="member-no" type="text" placeholder="Member No."/>
      <p className="text-red-500 text-xs italic">Member no. is required</p>
    </div>
    <div className="flex items-center justify-center">
      <button onClick={getOtpAsync} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        {isLoading ? "Sending..." : "Continue"}
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