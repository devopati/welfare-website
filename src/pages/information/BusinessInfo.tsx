import React, { useState } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../redux/hooks/reduxhooks';
import { useNavigate } from 'react-router-dom';
import { setDealerInfo } from '../../redux/slices/AppSlice';
import { INFORMATION, NEXT_OF_KIN } from '../../constants/routeNames';

const BusinessInfo:React.FC = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [haveShowRoom,setHaveShowRoom]=useState<string>("yes")
  const [dealerType,setDealerType] = useState<string>("corporate")
  const [name,setName] = useState<string>("")
  const [location,setLocation] = useState<string>("")
  const [phone,setPhone] = useState<string>("")


  const dealer_info = {
    have_show_room: haveShowRoom === "yes" ? true :false,
    dealer_type:dealerType,
    name_of_business:name,
    location:location ,
    contact_no:phone
}

  const updateDataHandler = (e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault()
    if(!name||!location||!phone) return toast.error("All fields are required to continue")
      dispatch(setDealerInfo(dealer_info))
    navigate(INFORMATION+"/"+NEXT_OF_KIN)
    toast.success("Information updated, please proceed")
  }
  return (
    <div>
      <div className=" w-96 ">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-20">
      <h1 className='text-center font-bold text-xl pb-10'>Business/Dealer Information</h1>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name of business">
        Name of business
      </label>
      <input value={name} onChange={(e)=>setName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name of business" type="text" placeholder="name of business"/>
    </div>

    <div className="flex gap-10">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
        Business location
      </label>
      <input value={location} onChange={(e)=>setLocation(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="location" type="text" placeholder="location"/>
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
        Business contact
      </label>
      <input value={phone} onChange={(e)=>setPhone(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="contact" type="text" placeholder="+254....."/>
    </div>
    </div>

   <div className="flex gap-10">
   <div className=" -mx-1 mb-6 pt-6">
<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="dealer-type">
          Do you have a showroom?
        </label>
    <Dropdown options={["yes","no"]} onChange={(e)=>setHaveShowRoom(e.value)} value={"Yes"} placeholder="Select an option" />
        </div>
        <div className=" -mx-1 mb-6 pt-6">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="dealer-type">
          What is your business type?
        </label>
    <Dropdown options={["corporate","private"]} onChange={(e)=>setDealerType(e.value)} value={"Corporate"} placeholder="Select an option" />
      </div>
   </div>
   
    <div className=" items-center justify-between">
      <button onClick={updateDataHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
        Continue
      </button>
    </div>
  </form>
 
    </div>
  </div>
  )
}

export default BusinessInfo