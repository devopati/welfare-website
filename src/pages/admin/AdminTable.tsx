import React from 'react'
import Button from '../../components/Button'
import GeneratePDF from '../../utils/GeneratePDF'

// interface propTypes{
//     members:object,
//     currentPage:number,
//     totalPages:number,
//     totalMembers:number
// }

type PropTypes = {
    resData:any
}

const AdminTable:React.FC<PropTypes> = ({resData}) => {
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
            {
                resData?.members?.map((member:any) => {
                    return (
                        
                        <tr key={member?._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {member?.member_no}
                </th>
                <td className="px-6 py-4">
                    {member?.name}
                </td>
                <td className="px-6 py-4">
                   {member?.phone_number}
                </td>
                <td className="px-6 py-4">
                    <GeneratePDF/>
                </td>
            </tr>
                    )
            })
        }
            
        </tbody>
    </table>
</div>

</div>
    </div>
  )
}

export default AdminTable