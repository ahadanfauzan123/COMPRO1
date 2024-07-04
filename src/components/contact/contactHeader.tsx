import React from 'react'

function ContactHeader() {
  return (
    <div className='flex-[0.5] flex flex-col gap-y-6'>
      <div className="flex flex-col w-full gap-3">
      <span className="text-lg font-semibold">CONTACT US NOW</span>
            <h1 className='text-3xl font-semibold'>Come discuss your project with us</h1>
            <div className="h-1 w-[50%] bg-gray-700"></div>
      <p className="w-full text-left text-md font-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime itaque tenetur sequi nesciunt consectetur voluptates dolores iste ad recusandae molestias? Optio possimus accusamus, dolores voluptatem accusantium velit odio eius dolorum.
      </p>
      </div>
      {/* cards */}
      <div className="flex flex-col w-full space-y-8 items-start">
            {/* contact */}
            <div className='w-full flex items-center space-x-6'>
                  <div className="w-[100px] h-[100px] rounded-full bg-gray-300 flex items-center justify-center">

                  </div>
                  <div className="flex flex-col flex-1 space-y-3">
                        <h1 className="text-2xl font-semibold">Contact</h1>
                        <div className="flex flex-col flex-1 space-y-0.5">
                              <h3 className=''>No. Telp: <span>94357320</span></h3>
                              <h3 className=''>No. Telp: <span>94357320</span></h3>
                        </div>

                  </div>
            </div>
            {/* address */}
            <div className='w-full flex items-center space-x-6'>
                  <div className="w-[100px] h-[100px] rounded-full bg-gray-300 flex items-center justify-center">

                  </div>
                  <div className="flex flex-col flex-1 space-y-3">
                        <h1 className="text-2xl font-semibold">Contact</h1>
                        <div className="flex flex-col flex-1 space-y-0.5">
                              <h3 className=''>No. Telp: <span>94357320</span></h3>
                              <h3 className=''>No. Telp: <span>94357320</span></h3>
                        </div>

                  </div>
            </div>
      </div>
      
    </div>
  )
}

export default ContactHeader