import React from 'react'
import Zuri from '../images/Zuri.Internship_Logo.png';
import I4G from '../images/I4G.png';



function Footer() {
  return (
    <div className='space-y-4 border-t pt-10 ml-10 mt-10 mb-4 mr-10 lg:flex lg:flex-row lg:justify-between lg:ml-64 lg:mr-64 lg:pt-5 lg:items-center lg:border-t lg:mt-20 lg:pb-7'>
        <img src={Zuri} alt="footer logo" className='' />
        <h5 className='text-[#667085] '>HNG Internship 9 Frontend Task</h5>
        <img src={I4G} alt="footer logo" className='' />
    </div>
  )
}

export default Footer