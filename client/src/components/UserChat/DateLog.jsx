import React from 'react'

const DateLog = (props) => {
  return (
    <div class="flex items-center w-full opacity-60">
      <div class="flex-1 border-t-[0.01rem] border-gray-500"></div>
      <span class="px-3 font-bold text-[0.7rem] text-gray-400">{props.date}</span>
      <div class="flex-1 border-t-[0.01rem] border-gray-500"></div>
    </div>
  )
}

export default DateLog
