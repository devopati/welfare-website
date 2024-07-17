import React from 'react'
import Button from '../../components/Button'

const AdminTable = () => {
  return (
    <div>
        <div className="flex flex-col rounded-sm xl:mx-14 :mx-6 border border-blue-800">
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Member No.
                </th>
                <th scope="col" className="px-6 py-3">
                   Full Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone No.
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    MNO.0345
                </th>
                <td className="px-6 py-4">
                    David Opati
                </td>
                <td className="px-6 py-4">
                   0799146814
                </td>
                <td className="px-6 py-4">
                    <Button onClick={()=>{}}/>
                </td>
            </tr>
            
        </tbody>
    </table>
</div>

</div>
    </div>
  )
}

export default AdminTable