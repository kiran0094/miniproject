import { handleSubmit } from "@/custumhook/handleclick"
import { useState } from "react";

const Buttongroup = ({result}) => {
 
  return (
     <div className="space-x-3 font-semibold flex justify-center my-4 ">

             <button className="px-3 py-2 ml-3  rounded-3xl bg-[#0a66c2] text-white hover:bg-[#004182]  hover:font-bold text-sm"
              onClick={() => {
                navigator.clipboard.writeText(result);
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(result)
                  
                }`, '_blank');
              }}>
                share
              </button>
            <button className="px-3 py-2 ml-3  rounded-3xl bg-[#0a66c2] text-white hover:bg-[#004182] hover:font-bold  text-sm"
              onClick={() => navigator.clipboard.writeText(result)}>copy</button>         
        </div>
  )
}
export default Buttongroup