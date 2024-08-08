"use client"
import React, { useState } from 'react';
import { Textarea } from "@/components/ui/textarea"
import Header from "../components/component/header";
import Buttongroup from "../components/component/buttongroup";

export default function Home() {
 const [prompt, setprompt] = useState();
 const [result, setResult] = useState('');
 
 const handleResult = (newResult) => {
  setResult(newResult);
}

  return (
    <>
    <div>
    <main className="lg:flex lg:justify-center leading-[0]">
        <Header/>
    </main>
    <div className="m-5  bg-white h-[29rem] rounded-xl pt-5 lg:m-16 lg:px-6 lg:pt-12 lg:h-[34rem] flex flex-col">
      <Textarea  className="mx-5 h-[20rem] border-4 border-[#0A66C2] bg-white rounded-3xl flex content-center lg:h-[23rem] p-9" placeholder="enter the your linkedin post highligths"
       onChange={(e)=>{setprompt(e.target.value)}}
      value={prompt}
      />
      {/* {prompt} */}

        <div className="mx-5 h-[20rem] border-4 border-[#0A66C2] bg-white rounded-3xl flex content-center lg:h-[23rem] p-9">

            <p>{result}</p>
        </div>
        <Buttongroup prompt={prompt} onResult={handleResult}/>
      </div>

    </div>
    </>
    
  );
}
