import React from 'react'

function Presentation() {

    const CarData = [
        {
            Source: "Group 4 (3).png",
            Heading: "Managment",
            text: "Software platform for running your new internet business"
        },
        {
            Source: "Group 4.png",
            Heading: "Entertainment",
            text: "Software platform for running your new internet business"
        },
        {
            Source: "Group 33.png",
            Heading: "Marketing",
            text: "Software platform for running your new internet business"
        },
        {
            Source: "Group 4 (1).png",
            Heading: "References",
            text: "Software platform for running your new internet business"
        }

    ]


    const SocialLinks = [
        { link: "Group 9.png" },
        { link: "Group 10.png" },
        { link: "Group 11.png" }
    ]
    return (
        <section className='bg-gray-50'>

            <div className='flex m-auto container flex-col md:flex-row items-center gap-20 py-12 px-6 md:px-12 lg:px-16 max-w-[1400px]'>


                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2'>
                    {CarData.map((card, index) => (
                        <div key={index}
                            className='p-4 gap-4 bg-white rounded-xl hover:bg-gray-100 transition-all text-center '>

                            <div className='flex items-center justify-center'>
                                <img src={card.Source} alt="" />
                            </div>

                            <div>
                                <h3 className='text-black text-lg  md:text-xl font-semibold'>{card.Heading}</h3>
                            </div>
                            <div>
                                <p className='text-gray-400 text-sm md:text-base'>{card.text}</p>
                            </div>


                        </div>

                    ))}


                </div>




                <div className='w-full lg:w-1/2 text-center flex items-center flex-col lg:text-left space-y-6'>

                    <h1 className='text-black text-3xl  md:text-4xl lg:text-5xl font-semibold max-w-md  text-center lg:text-start lg:max-0'>The quickest way to create modern presentation</h1>

                    <p className='text-gray-400 max-w-md mx-auto lg:mx-0  text-sm md:text-base'> Best software platform for running an internet business. We build the most powerful and flexible tools for internet commerce.</p>

                    <button className="bg-indigo-100 text-[#5F62E2] font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
                        Explore all
                    </button>

                    <p className='text-gray-500 !mt-[85px]'>Follow us</p>

                    <div className='flex justify-center lg:justify-start gap-4 items-center'>

                        {
                            SocialLinks.map((social) => (
                                <a href="" className='bg-[#c4c4c4] rounded-full p-3 hover:bg-gray-400 transition duration-300'>
                                    <img src={social.link} alt="" />
                                </a>


                            )

                            )


                        }

                    </div>

                </div>


            </div>


        </section>
    )
}

export default Presentation