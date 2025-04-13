"use client"

import Link from "next/link"
import {useActionState} from "react"
import { shortenUrl } from "./serverActions/ShortenUrlAction"



export default function Home() {
  
  const[state , formAction , isPending]=useActionState(shortenUrl ,"initialstate")
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400">
      <div className="p-10 bg-white/10 rounded-lg shadow-2xl max-w-lg">
        <h1 className="text-5xl font-bold mb-6 text-center text-gray-700">
          Lil Url
        </h1>
        <form method="POST"  action={formAction} className="space-y-6 ">
          <input
            type="text"
            placeholder="Enter Url "
            name="originalUrl"
            className="w-full bg-gray-950 p-4 rounded-lg shadow-2xl shadow-gray-500"
            
          />
          
          <button
            type="submit"
            // onClick={handleSubmit}
            className="outline-none bg-gray-900 text-gray-100 px-3 py-2 rounded-lg shadow-2xl shadow-gray-500 cursor-pointer"
          >
            Shorten
          </button>
          <input
          value={`${process.env.NEXT_PUBLIC_BASE_URL}/urls/${state.toString()}`}
          type="text"
          placeholder="shortened Url"
          name="ShortUrl"
          className="w-full mt-6 bg-gray-950 p-4 rounded-lg shadow-2xl shadow-gray-500"
        />
        </form>
        
      </div>
      <div className="shadow-2xl shadow-blue-700 m-6">
        <Link
          className="text-center p-4 bg-pink-400 rounded-lg shadow-2xl shadow-blue-700  hover:bg-pink-500"
          href={"/urls"}
        >
          <span> view all shortened urls</span>
        </Link>
      </div>
    </div>
  )
}
