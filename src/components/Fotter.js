import React from 'react'
import { Link } from 'react-router-dom'

const Fotter = ({resData}) => {
  
  return (
 <Link to={resData.link}>
      
<button className='  bg-[#f0f0f0]     mx-auto max-w-[1080px] w-56 gap-1 h-10    pt-2 px-3 flex flex-col hover:scale-110 transition-all cursor-pointer 
text-xs font-bold hover:shadow-2xl duration-300 border mt-5 ml-5 border-black rounded-lg shadow-md         '>{resData.text}  </button>

 </Link>
  
  )
}

export default Fotter