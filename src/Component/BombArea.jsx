import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
function BombArea() {

    const navigate = useNavigate();

    const handleClick = ()=>(
        navigate(' Learn more')
    )
    return (
        <section className='bg-[#5F62E2]  px-4 md:px-16'>

            <div className="relative pt-10  flex flex-col lg:flex-row items-center justify-between mt-24 max-w-[1400px]">

                {/* Left Section */}
                <div className="flex-2 z-10 px-6 sm:px-12">
                    <h1 className="text-3xl  md:mt-0 sm:text-4xl font-semibold text-center md:text-start lg:text-6xl text-white">
                        The quickest way to create awesome presentation
                    </h1>

                    <div className="flex pb-10 md:pb-5  md:justify-start justify-center gap-4 mt-10">
                        <button onClick={handleClick} className="bg-green-400 text-sm md:text-base hover:bg-green-500 md:mt-4 text-white font-semibold py-3 px-6  rounded-lg shadow-md transition duration-300">
                            Get started
                        </button>

                        <button onClick={handleClick} className="bg-[#777AE6] text-sm md:text-base hover:bg-blue-700 md:mt-4 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
                            Learn more
                        </button>
                    </div>
                </div>

                


                {/* Image on Large Screens */}
                <div className="md:block  hidden relative">
                    <img src="bomb 1.png" alt="" className="   w-full max-w-md" />
                    {/* <img src="Ellipse 5.png" alt="" className="  w-full max-w-md" /> */}
                </div>
            </div>




        </section>


    )
}

export default BombArea