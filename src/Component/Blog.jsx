import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
function Blog() {

    const navigate = useNavigate();

    const handleClick = ()=>(
        navigate(' Learn more')
    )
    const CardData = [
        {
            id: 1,
            ImgSrc: "vase-1-b 2.png",
            Title: "Make myspace your best designed space",
            Description: "A lot of different components that will help you create the perfect look for your project",
            ButtonLavel: "Design"

        },
        {
            id: 1,
            ImgSrc: "vase-1-b 2 (1).png",
            Title: "My company culture has changed today",
            Description: "A lot of different components that will help you create the perfect look for your project",
            ButtonLavel: "3D illustrations"

        },
        {
            id: 1,
            ImgSrc: "vase-1-b 2 (2).png",
            Title: "Professionals in craft! All products were super great",
            Description: "A lot of different components that will help you create the perfect look for your project",
            ButtonLavel: "3D illustrations"

        },

    ]
    return (
        <section className='Max-w-[1400px] mx-auto py-12 px-6 '>

            <div>


                {/* ?top */}
                <div className='flex flex-col sm:flex-row justify-between items-center md:px-20 mb-10'>
                    <div>
                        <h1 className='text-3xl lg:text-6xl font-semibold text-gray-800'>Get more from our blog</h1>
                        <p className='max-w-lg text-[22px] mt-3 text-gray-500'>There are a lot of different components that will help you create the perfect look for your project</p>
                    </div>

                    <div className="mt-8 md:mt-20" >
                        <Button onClick={handleClick} sx={{ backgroundColor: '#E7E7FB', color: '#5F62E2', '&:hover': { backgroundColor: '#D6D6F5' } }}
                            variant='contained'  >Explore All</Button>

                    </div>

                </div>


                {/* botom */}
                <div className='grid grid-cols lg:grid-cols-3 gap-8 !p-5'>
                    {CardData.map((card) => (
                        <div key={card.id} className='drop-shadow-2xl  rounded-xl overflow-hidden hover:shadow-xl transition duration-300'>
                            <div className='bg-gray-100 justify-center items-center flex  rounded- py-3'>
                                <img src={card.ImgSrc} alt="" />
                            </div>

                            <div className='bg-white flex flex-col pb-14  h-full p-6 '>
                                <div>
                                <h3 className='text-xl md:text-3xl mb-2 font-semibold '>{card.Title}</h3>
                                <p className='text-sm py-2  rounded'>{card.Description}</p>
                                </div>
                               <div className=' pt-4 ,'>
                               <Button variant="contained" sx={{backgroundColor:"#E8F7F3",position:"absolute", bottom:"25px", marginBottom:"0px", color:"#2AB691"}}>{card.ButtonLavel}</Button>
                               </div>
                            </div>



                        </div>
                    ))


                    }

                </div>




            </div>


        </section>
    )
}

export default Blog