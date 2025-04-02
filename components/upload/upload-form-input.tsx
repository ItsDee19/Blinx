import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

const UploadFormInput = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
      <div className='flex justify-end items-center gap-2'>
        <Input 
        type="file"
        id="file"
        name="file"
        accept=".pdf"
        required
      className=''
       />
      </div>
      <Button type="submit">Upload</Button>
    </form>
  )
}

export default UploadFormInput