"use client"

import Link from "next/link"
import { useState, useTransition } from "react"
import { shortenUrl } from "./serverActions/ShortenUrlAction"

export default function Home() {


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="p-10 bg-white rounded-lg shadow-2xl max-w-lg">
        <h1 className="text-5xl font-bold mb-6 text-center text-gray-700">
          {" "}
          Lil Url
        </h1>
        <form method="POST" action={shortenUrl} className="space-y-6">
          <input
            type="text"
            placeholder="Enter Url "
            name="originalUrl"
            className="w-full bg-gray-950 p-4 rounded-lg shadow-2xl shadow-gray-500"
          />
          <button type="submit" className="outline-none bg-gray-900 text-gray-100 px-3 py-2 rounded-lg shadow-2xl shadow-gray-500">
            Shorten
          </button>
        </form>
        
      </div>
      <div className="m-6 text-center p-4 bg-pink-400 rounded-lg shadow-2xl shadow-blue-700  hover:bg-pink-500">
          <Link href={"/urls"}>
            <span> view all shortened urls</span>
          </Link>
        </div>
    </div>
  )
}
