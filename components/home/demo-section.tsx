import { Pizza } from 'lucide-react'
import React from 'react'

export default function DemoSection() {
  return (
    <section className="relative">
      <div className='py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12'>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20"></div>

        <div className="flex flex-col items-center text-center space-y-4">
          <div className='inline-flex items-center justify-center p-2 bg-gray-100/80 rounded-2xl backdrop-blur-xs border border-gray-500/20 mb-3'>
            <Pizza className='w-8 h-8 text-rose-400'/>
          </div>

          <div className='text-center mb-16'>
            <h3 className='text-2xl font-bold text-slate-700 mx-auto px-4 max-w-2xl sm:px-6'>
              Watch how Blinx works...
            </h3>
            <p className='text-gray-600 mt-4 max-w-xl mx-auto'>
              Transform your PDFs into beautiful summaries in seconds
            </p>
          </div>

          <div className='flex justify-center items-center px-2 sm:px-4 lg:px-6'>
            {/* Summary example */}
          </div>
        </div>
      </div>
    </section>
  )
}
