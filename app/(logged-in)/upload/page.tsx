import React from 'react'
import AnimatedGradient from '@/components/ui/animated-gradient'
import UploadHeader from '@/components/upload/upload-header'
import UploadForm from '@/components/upload/upload-form'

const page = () => {
  return (
    <section className='min-h-screen relative'>
      <AnimatedGradient />
      <div className='mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8'>
        <div className='flex flex-col items-center justify-center gap-8'>
          <UploadHeader />
          <UploadForm />
        </div>
      </div>
    </section>
  )
}
export default page