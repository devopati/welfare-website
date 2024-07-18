import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

const ThankYou:React.FC = () => {
  return (
    <div className="flex items-center justify-center h-dvh">
        <div className="w-full max-w-xl">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col justify-center items-center gap-10">
                <FaCheckCircle size={80} className='text-green-700'/>
               <div>
                    <h1 className="text-2xl text-center text-green-700 font-bold mb-4">Thank you!!</h1>
                    <h1 className="text-2xl text-center font-bold mb-4">Information updated</h1>
               </div>
            </form>
        </div>
    </div>
  )
}

export default ThankYou