import React from 'react'
import Hero from '../Components/Hero'
import Company1 from '../assets/Company1.png'
import Company2 from '../assets/Company2.png'
import Company3 from '../assets/Company3.png'
import Company4 from '../assets/Company4.png'
import Company5 from '../assets/Company5.png'
import Company6 from '../assets/Company6.png'
import Company7 from '../assets/Company7.png'

const Home = () => {
  return (
    <div>
      <Hero/>
      <div className='w-full py-4 flex flex-wrap items-center space-x-2 justify-between xl:px-[13rem] px-3'>
        <img src={Company1} alt="Zapier Comapny Logo" />
        <img src={Company2} alt="Pipedrive Company Logo" />
        <img src={Company3} alt="CIB Bank Logo" />
        <img src={Company4} alt="Z Company Logo" />
        <img src={Company5} alt="Burnt Toast Company Logo" />
        <img src={Company6} alt="Panda Doc Logo" />
        <img src={Company7} alt="Mozrila Company logo" />
      </div>
    </div>
  )
}

export default Home