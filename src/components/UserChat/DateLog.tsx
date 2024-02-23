import React from 'react'

interface PropsHere {
  date: string
}

const DateLog: React.FC<PropsHere> = (props) => {
  return (
    <div className="flex items-center w-full opacity-60">
      <div className="flex-1 border-t-[0.01rem] border-gray-500"></div>
      <span className="px-3 font-bold text-[0.7rem] text-gray-400">{props.date}</span>
      <div className="flex-1 border-t-[0.01rem] border-gray-500"></div>
    </div>
  )
}

export default DateLog
