import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function TimeWork() {
  return (
    <section className='md:gap-24  md:mt-20 py-6 px-6 lg:px-16 max-w-[1400px] mx-auto'>
 {/* section 1 */}

        <div className='flex flex-col-reverse lg:flex-row items-center justify-between'>

            {/* left side */}
            <div className='flex-1 mt-10 md:mt-0 items-start'>
                <img className='w-full h-auto max-w-lg' src="Group 17.png" alt="" />

            </div>

            {/* right side */}

            <div className='flex-1 flex flex-col gap-4 md:gap-8  mt-10 md:mt-0  items-start'>
                <h1 className='text-3xl sm:text-4xl lg:text-6xl font-bold max-w-lg'>Make more time for the work</h1>

                <p className='text-black  mt-4 md:mt-0'><CheckCircleOutlineIcon className='text-green-600 me-2 '/>Many ways to use illustrations in design</p>
                <p><CheckCircleOutlineIcon className='text-green-600 me-2 '/>Simply explained with illustrations</p>
                <p><CheckCircleOutlineIcon className='text-green-600 me-2'/>Make more time for the work</p>
                <button className="bg-[#5f62e2] hover:text-white  hover:bg-blue-300 mt-4 md:mt-0 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
            Learn more<ArrowForwardIcon className='ms-4'/>
          </button>

            </div>
        </div>


        {/* section-2 */}

        <div className='flex md:mt-28 md:mb-20 flex-col-reverse lg:flex-row-reverse items-center justify-between'>

{/* left side */}
<div className='flex-1  mt-10 md:mt-0 items-start'>
    <img className='w-full h-auto max-w-lg' src="Group 22.png" alt="" />

</div>

{/* right side */}

<div className='flex-1 flex  mt-10 md:mt-0 flex-col gap-4 md:gap-8  items-start'>
    <h1 className='text-3xl sm:text-4xl lg:text-6xl font-bold max-w-lg'>Make more time for the work</h1>

    <p className='text-black mt-4 md:mt-0'><CheckCircleOutlineIcon className='text-green-600 me-2 '/>Many ways to use illustrations in design</p>
    <p><CheckCircleOutlineIcon className='text-green-600 me-2 '/>Simply explained with illustrations</p>
    <p><CheckCircleOutlineIcon className='text-green-600 me-2'/>Make more time for the work</p>
    <button className="bg-[#E7E7FB] hover:text-white  hover:bg-blue-300 mt-4 md:mt-0 text-[#5F62E2] font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
Learn more<ArrowForwardIcon className='ms-4'/>
</button>

</div>
</div>
    </section>
  )
}

export default TimeWork