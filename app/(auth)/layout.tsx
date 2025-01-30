import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
  <div className="grid min-h-screen sm:grid-cols-1 lg:grid-cols-2 overflow-hidden">
  {/* Image for Mobile (Hidden on lg and above) */}
  <div className="relative w-full sm:block lg:hidden">
    <img
      src="/lognbg.jpg"
      alt="Background"
      className="w-full h-52 object-cover"
    />
  </div>

  {/* Form Section */}
  <div className="flex flex-1 items-center justify-center">
  {children}
  </div>

  {/* Image for Desktop (Hidden on Mobile) */}
  <div className="relative hidden lg:block w-full h-full">
    <img
      src="/lognbg.jpg"
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover"
    />
  </div>
</div>



    </>
  )
}

export default layout