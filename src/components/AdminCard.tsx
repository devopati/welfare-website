import React from 'react'

type propTypes = {
    title: string,
    text:string
}
const AdminCard:React.FC<propTypes> = ({title,text}) => {
  return (
      
<div className="block bg-slate-100 max-w-sm p-6  border border-gray-200 rounded-sm shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<h5 className="mb-2 text-xl font-bold tracking-tight text-blue-600 dark:text-white text-center">{title}</h5>
<h1 className="font-bold text-gray-700 dark:text-gray-400 text-center">{text}</h1>
</div>

    
  )
}

export default AdminCard