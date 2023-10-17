// See Demo Page for explanations on imports
'use client';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import React, { useState } from 'react';

// Access parameters for dynamic segments by having an object with the params property passed in
export default function Demo2({params}: {params: {id: number}}) {

  function welcomeToast2() {
    // Get specific dynamic slug parameter by accessing property of name [id]
    toast(`Inputted User ID: ${params.id}!`);
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex-col text-center">
        <ToastContainer/>
        <h1 onClick={welcomeToast2} className="text-5xl">Welcome to CodeLab Demo</h1>
        <p>Click the text above to receive a toast!</p>
        <Link className="text-blue-400 hover:text-blue-900" href="/">Back to Home</Link>
      </div>
    </div>
  )
}
