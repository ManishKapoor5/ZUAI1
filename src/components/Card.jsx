import React from 'react'
import Progress from '../assets/ProgressBar.png'
const Card = () => {
  return (
    <div>
      <div className='bg-white absolute top-10 rounded-3xl left-[67vw] h-28 w-80 py-1 px-3'>
        <h1>Overall Score</h1>
        
        <div className='text-3xl flex font-bold'>Remark:&nbsp;<div className='text-green-300'> Good&nbsp;</div><img src={Progress} alt=''/></div>
        <div className='font-normal text-xs absolute top-16 text-slate-500'>Evaluated on 12 Jul 2024</div>
    </div>    
    </div>
  )
}

export default Card
