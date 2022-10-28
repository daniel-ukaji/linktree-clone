import React from 'react'
import Zuri from '../images/Zuri.Internship_Logo.png';
import I4G from '../images/I4G.png';



function Footer() {
  return (
    <div className='flex flex-col items-center  space-y-4 mt-5 border-t pt-5 xl:flex xl:flex-row xl:justify-between xl:ml-80 xl:mr-80 xl:pt-5 xl:items-center xl:border-t xl:mt-20'>
        <img src={Zuri} className='' />
        <h5 className='text-[#667085] '>HNG Internship 9 Frontend Task</h5>
        <img src={I4G} className='' />
    </div>
  )
}

export default Footer