import React from 'react'
import piechart from '../assets/PieChart.png'
import piechart1 from '../assets/PieChart1.png'
import piechart2 from '../assets/PieChart2.png'
import downicon from '../assets/icon_arrow.png'
const Card1 = () => {
    const criteriadetails = [
        {
            id: 1,
            criteriaNo: "Criteria A",
            head_title: "Understanding Knowledge questions",
            piechart: piechart,
        },
        {
            id: 2,
            criteriaNo: "Criteria B",
            head_title: "Understanding Knowledge questions",
            piechart: piechart1,
        },
        {
            id: 3,
            criteriaNo: "Criteria C",
            head_title: "Understanding Knowledge questions",
            piechart: piechart2,
        },
    ]
  return (
    <div className='flex flex-col absolute top-44 gap-24'>
      
      {criteriadetails.map((details) => (
        <div key={details.id}>
        <div className='bg-white absolute rounded-3xl left-[67vw] h-20 w-80 py-1 px-3'>
                    
        
        <div className='text-xs text-slate-500 absolute left-16 top-3'>{details.criteriaNo}&nbsp;</div>
        <div className='absolute top-6'><img src={details.piechart} alt=''/></div>
        <div className='text-md font-semibold absolute top-6 left-16'>{details.head_title}</div>
        <div className='flex items-end absolute left-72 top-7'><img src={downicon} alt=''/></div>
        </div>
        </div>
  ))}
        
    </div>
  )
}

export default Card1
