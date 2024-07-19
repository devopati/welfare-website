import React, { useState } from 'react'
// import Dropdown from 'react-dropdown';

const GeneralInfo:React.FC = () => {

    // const [nextOfKin,setNextOfKin] = useState<string>("parent")
    // const [isBiological,setIsBiological]= useState<string>("yes")
    const [name,setName] = useState<string>("")
    const [phone,setPhone] = useState<string>("")

    // const general_info = {
    //     next_of_kin:nextOfKin,
    //     is_biological:isBiological === "yes" ? true : false,
    //     name:name,
    //     contact_no:phone
    // }
    // const updateDataHandler = ()=>{

    // }
  return (
    <div>
         <div className=" w-96 ">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-20">
      <h1 className='text-center font-bold text-xl pb-10'>Business/Dealer Information</h1>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name of business">
        Full Name
      </label>
      <input value={name} onChange={(e)=>setName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name of business" type="text" placeholder="name of business"/>
    </div>

    <div className="flex gap-10">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
        Next of Kin contact
      </label>
      <input value={phone} onChange={(e)=>setPhone(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="contact" type="text" placeholder="+254....."/>
    </div>
    </div>

   <div className="flex gap-10">
   {/* <div className=" -mx-1 mb-6 pt-6">
<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="dealer-type">
          Who's your next of kin?
        </label>
    <Dropdown options={["parent","spouse","child","sibling"]} onChange={(e)=>setNextOfKin(e.value)} value={"Parent"} placeholder="Select an option" />
        </div>
        <div className=" -mx-1 mb-6 pt-6">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="dealer-type">
          Is your next of kin biological?
        </label>
    <Dropdown options={["yes","no"]} onChange={(e)=>setIsBiological(e.value)} value={"Yes"} placeholder="Select an option" />
      </div> */}
   </div>
   
    <div className=" items-center justify-between">
      <button onClick={()=>{}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
        Continue
      </button>
    
    </div>

   
  </form>
 
</div>
    </div>
  )
}

export default GeneralInfo