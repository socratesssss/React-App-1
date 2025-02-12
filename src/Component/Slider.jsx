import React, { useState } from 'react'
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone'

import KeyboardArrowLeftTwoToneIcon from '@mui/icons-material/KeyboardArrowLeftTwoTone';

function Sliders() {

    const slides =[
        {
            id:1,
            heading:"Make more time for the work that matters most",
            description:"Best software platform for running an internet business.",
            image:"Group 35.png"

        },
        {
            id:2,
            heading:"Build more time for the work that matters most",
            description:"Best software platform for running an internet business.",
            image:"Group 33.png"

        },
        {
            id:3,
            heading:"Take more time for the work that matters most",
            description:"Best software platform for running an internet business.",
            image:"vite.svg"

        },
    ]

   
        const [currentIndex, setcurrentIndex] = useState(0);

       
    
    const prevSlide =()=>{
        setcurrentIndex((prevIndex)=>(prevIndex === 0 ? slides.length - 1: prevIndex - 1 ) )
        console.log(currentIndex)
    };
    const nextSlide =()=>{
        setcurrentIndex((prevIndex)=>(prevIndex === slides.length - 1 ? 0 : prevIndex + 1) )
        
        console.log(currentIndex)
    }

    const {heading,description,image} = slides[currentIndex]
  return (

 
    <>

    <section className='max-w-[1400px] py-24 px-6 md:px-12 mx-auto'>

        <div className='flex  flex-col-reverse justify-between md:flex-row items-center gap-20'>
            {/* left section */}
            <div className='flex flex-col justify-between w-full md:w-1/2 space-y-6'>

            <div className='flex items-center gap-2 '>
                <img className='w-16 mb-4 md:w-12' src="Shape.png" alt="" />
                <h2 className='font-semibold mb-4 text-2xl'>Logo</h2>
            </div>
            <h1 className='text-2xl md:text-5xl font-bold text-black max-w-md'>
           {heading}
               

            </h1>

            <p className='text-gray-400 max-w-sm text-[20px]'>
             {description}
            </p>

            <div className='flex items-center space-x-4 mt-4'>
                <button onClick={prevSlide} className='bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition duration-300'> <KeyboardArrowLeftTwoToneIcon className='text-gray-500'/></button>
                <button onClick={nextSlide} className='bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition duration-300'><KeyboardArrowRightTwoToneIcon className='text-gray-500'/></button>
            </div>



            </div>

            {/* right section */}

            <div className='w-full md:w-1/2 flex justify-center'>
                <img className='w-[50%] md:w-[65%]' src={image} alt="" />

            </div>
        </div>

        <div className='slider-container'>
            <img className='w-full moving-image" object-cover items-center mt-16' src="Logos.png" alt="" />
        </div>


    </section>
    
    
    </>
  )
}

export default Sliders