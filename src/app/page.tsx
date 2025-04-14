"use client"

import Link from "next/link"
import {useActionState, useRef, useState} from "react"
import { shortenUrl } from "./serverActions/ShortenUrlAction"
import Button from "@/components/Button"



export default function Home() {
    const copyRef = useRef(null)
  const [copy, setcopy] = useState(false);
  async function handleCopySubmit(){
    try {
      const url = copyRef.current?.value;
      await navigator.clipboard.writeText(url);
      setcopy(true);
      setTimeout(() => setcopy(false), 1500);
    } catch (error) {
      console.log(error);
      
      
    }
    
  }
  const[state , formAction , isPending]=useActionState(shortenUrl ,null)
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400">
      <div className="p-10 bg-white/10 rounded-lg shadow-2xl max-w-lg">
        <h1 className="text-5xl font-bold mb-6 text-center text-gray-700">
          Lil Url
        </h1>
        <form method="POST"  action={formAction} className="space-y-6 my-4">
          <input
            type="text"
            placeholder="Enter Url "
            name="originalUrl"
            className="w-full bg-gray-950 p-4 rounded-lg shadow-2xl shadow-gray-500"
            
          />
          
          
          <Button text="Shorten" handleSubmit={()=>{}} type="submit" />
          <input
          ref={copyRef}
          readOnly={true}
          value={state?`${process.env.NEXT_PUBLIC_BASE_URL}${state.toString()}`:''}
          type="text"
          placeholder="shortened Url"
          name="ShortUrl"
          className={isPending?"bg-gray-950 w-full mt-4 animate-pulse p-4 rounded-lg shadow-2xl shadow-gray-500 border-2 border-pink-500 ":
            "w-full mt-4 bg-gray-950 p-4 rounded-lg shadow-2xl shadow-gray-500"}
        />

        </form>
        <Button handleSubmit={handleCopySubmit} type="button" text={copy?'copied':'copy'}/>
      </div>
      <div className="shadow-2xl shadow-blue-700 m-6">
        <Link
          className="text-center p-4 bg-pink-500 rounded-lg shadow-2xl shadow-blue-700 
          hover:bg-pink-600 transition-colors"
          href={"/urls"}
        >
          <span> view all shortened urls</span>
        </Link>
      </div>
    </div>
  )
}
