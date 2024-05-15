import React from 'react'
import "./Signup.css"
const Signup = () => {
  return (
    <div className='fixed bottom-0 signup_bar text-sm flex px-4 py-4 justify-between'>
      <div>
      <p className='mb-2 uppercase'>
         Preview on spotify
      </p>
      <p className='font-bold'>Sing up to get unlimited Songs and podcasts with occasional ads. No credits card needed</p>
      </div>
       <button className='rounded-full text-black mt-4 px-8 text-lg font-bold py-2 bg-white'>
         sign Up free
       </button>
    </div>
  )
}

export default Signup