import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
    return (
      <div className=' flex m-14'>
        <div className='flex-1 '> 
         <Image
         src="images/linkedinhead.svg"
         width={505}
         height={154}
         alt='logo-image'/>
         <div className='bg-gradient-to-r from-blue-500 via-blue-800 to-blue-300 bg-clip-text text-transparent'>
          <p className='text-[130px] font-bold pt-0 mt-0 leading-none mb-6'>Descriptor</p>

         </div>
        
        <p className='text-[22px]'>Create a professional, eye-catching LinkedIn posts in seconds</p>
        <Link 
        href='/post'>
        <button
        className='p-2 rounded-3xl text-white font-bold bg-[#3EA6CE] mt-2'>generator</button>
        </Link>
        </div>
        
        <div className='flex-1'>  
        <Image
         src="images/linkedinlog.svg"
         width={582.53}
         height={529.8}
         alt='logo-image'
         className='relative bottom-[90px] inline'/>

         <Image
         src="images/shadow.svg"
         width={582.53}
         height={529.8}
         alt='logo-image'
         className='relative bottom-[290px] right-[30px]'/>



                 
        </div>
      </div>
    )
  }
export default page
