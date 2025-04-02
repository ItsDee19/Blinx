import { Sparkle } from 'lucide-react'
import React from 'react'

const UploadHeader = () => {
  return (
    <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8'>
    <div className='text-center'>
      <div className="inline-flex items-center justify-center bg-white/40 backdrop-blur-sm border border-gray-400/50 rounded-full 
      group:hover:bg-white/90 transition-colors duration-300 px-3 py-1 mb-4">
        <Sparkle className="w-6 h-6 mr-2 text-rose-500 animate-pulse"/>
        <span className="text-sm font-medium text-gray-900">AI-Powered PDF Summary</span>
      </div>
      <h1 className='text-4xl font-bold tracking-tight sm:text-5xl mt-4'>
        Start Uploading{' '}
        <span className="relative inline-block">
          <span className="relative z-10 px-2">your PDFs</span>
          <span className="absolute inset-0 bg-rose-300/50 -rotate-2 rounded-lg transform -skew-y-1" aria-hidden="true"></span>
        </span>
      </h1>
      <p className='mt-6 text-lg leading-8 text-gray-600'>Upload your PDFs and get summary in minutes.</p>
    </div>
  </div>
  )
}

export default UploadHeader