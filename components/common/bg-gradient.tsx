import React from 'react'

const BgGradient = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-50 to-rose-100 opacity-70 animate-gradient-shift"></div>
    </div>
  )
}

export default BgGradient