"use client"
import React, { useState } from 'react';
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/component/header";
import Buttongroup from "@/components/component/buttongroup";
import Image from 'next/image';
import { handleSubmit } from "@/custumhook/handleclick"


export default function Home() {
 const [prompt, setprompt] = useState();
 const [result, setResult] = useState('');


 const handleGenerate = async() => {    
  const result = await handleSubmit(prompt);
  setResult(result); // Store result in state
// Pass the result back to the parent component
}

  return (
    <div className='max-h-full'>
      <div className='flex max-h-[450px] m-5'>        
         <div className="m-5   rounded-xl flex flex-col flex-1">
               <p classname="font-bold">Describe about your post in few words     
                </p>
              <Textarea  className="mx-5 h-[20rem] border-4 border-[#0A66C2]  rounded-3xl flex content-center lg:h-[23rem] p-9" placeholder="enter the your linkedin post highligths"
               onChange={(e)=>{setprompt(e.target.value)}}
              value={prompt}
                />

            <button className=" py-2 ml-3  rounded-3xl bg-[#0a66c2] text-white hover:bg-[#004182] hover:font-bold text-sm lg:w-72  mt-5 text-center" 
            onClick={handleGenerate}>generate post </button>

                
         </div>
          <div className='flex-1 flex justify-center items-center'>
            
          <Image
           src="images/img3d.svg"
           width={400}
           height={200}
           alt='logo-image'
           className=''/>
          </div>
       </div>

       <div className='mx-44'>
        <p className='font-bold text-lg pl-2'>
           Your generated post
        </p>
        <div className=" min-h-[20rem] border-4 border-[#0A66C2] bg-white rounded-3xl flex content-center lg:h-[23rem] p-9 mt-2">

            <p>{result}</p>
        </div>
        <Buttongroup result={result}/>
       </div>
         
    </div>
    
  );
}
