import React from 'react'

type props={onClick:()=>void}

const Button:React.FC<props> = ({onClick}) => {
  return (
    <div>
        <button onClick={onClick}
  type="button"
  className="inline-block rounded bg-blue-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-blue-3 transition duration-150 ease-in-out hover:bg-blue-300 hover:shadow-primary-2 focus:bg-blue-accent-300 focus:shadow-blue-2 focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-blue-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
  {"Details >>"}
</button>
    </div>
  )
}

export default Button