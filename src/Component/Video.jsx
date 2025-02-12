import React from 'react'

function Video() {
  return (
    <section className='bg-gray-100 py-24 md:px-12 px-6'>
    <h1 className='text-center text-2xl md:text-5xl font-semibold'>Use illustrations in UI design</h1>

    <div className='w-full flex justify-center items-center mt-16'>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/c2Tg3Sl2ZfY?si=LS4sj9dzfKdX_2Px" title="YouTube video player" 
     className='
       w-auto
     h-[200px]
      md:h-auto
    md:min-w-[80%]
   
    aspect-video
   
    md:object-cover rounded-xl'frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   

   

    </div>
    
    </section>
  )
}

export default Video