import React from 'react'
import BubbleAnimation from '../animations/BubbleAnimation.jsx'
const Whychooseus = () => {
  return (
    <div className="relative pt-10 pb-52 text-center justify-center bg-blue-900"
    >
        <BubbleAnimation></BubbleAnimation>
      <h1 className='text-6xl lg:text-8xl font-bold  p-5  text-white'>Amazon <span className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Experts</span> </h1>
      <p className='text-xl lg:text-3xl  font-semibold text-white p-10 mt-5'>
      We are Amazon reinstatement consultants with over 10,000 successful cases globally. Our expert team ensures your account and funds are recovered efficiently.</p>
      {/* <button className='mt-10 px-20 py-4 text-white bg-transparent font-semibold hover:bg-gray-500 hover:text-white border border-gray-500 rounded-full transition-colors duration-300'>Get Started</button> */}
      <h1 className='text-6xl lg:text-8xl font-bold  p-5  text-white'>Hello<span style={{fontFamily: 'Pacifico, cursive'}}>,</span><span ><span className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Customers</span></span> </h1>
      <p className='text-xl lg:text-2xl  font-semibold text-white p-10 mt-5'>
      Our team is packed with subject-matter experts, from ex-Amazon employees to long-time sellers and brand owners.
We take on the seemingly insolvable challenges others won’t touch.
Our work ethic and integrity are second-to-none.
We fight alongside our clients, ease their minds, free up their time and help them boost profits. We collaborate closely with our clients, alleviate their concerns, streamline their workload and resolve difficult issues, from Amazon account reinstatement challenges to the tough stuff that can’t seem to be fixed.
      </p>
    
    </div>
  )
}

export default Whychooseus